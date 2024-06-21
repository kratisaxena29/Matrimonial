import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  TextField,
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:3002"); // Replace with your server URL

const ChatApp = () => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);
  const [newMessage, setNewMessage] = useState("");
  const [chats, setChats] = useState([]);

  // Function to handle selecting a chat item
  const handleSelectChat = (index) => {
    setSelectedChatIndex(index);
    console.log("Selected chat ID:", chats[index].id); // Log the ID of the selected chat
  };

  // Function to handle sending a message via socket
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      senderId: chats[selectedChatIndex].id,
      receiverId: chats[selectedChatIndex].id,
      text: newMessage,
    };

    socket.emit("chat message", message); // Emit message to server

    // Update local state
    const updatedChats = [...chats];
    updatedChats[selectedChatIndex].messages.push({
      sender: "You",
      text: newMessage,
    });
    updatedChats[selectedChatIndex].lastMessage = newMessage;
    setChats(updatedChats);
    setNewMessage("");
  };

  // Fetch profiles from API on component mount
  useEffect(() => {
    let apiUrl = 'http://127.0.0.1:3002/getallProfileById?email=kratiwork7@gmail.com';

    axios.get(apiUrl)
      .then(response => {
        console.log("..response...", response.data);
        const profiles = response.data.response.allProfilesDetails;
        const formattedChats = profiles.map(profile => ({
          id: profile._id,
          name: profile.name,
          lastMessage: "",
          messages: [],
        }));
        setChats(formattedChats);
      })
      .catch(error => {
        console.log("...error..", error);
      });

    // Socket.io event listeners
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    socket.on("chat message", (message) => {
      console.log("Received chat message:", message);

      // Find the chat index based on senderId or receiverId and update messages
      const updatedChats = [...chats];
      const chatIndex = updatedChats.findIndex(
        (chat) => chat.id === message.senderId || chat.id === message.receiverId
      );

      if (chatIndex !== -1) {
        updatedChats[chatIndex].messages.push({
          sender: message.senderId === chats[chatIndex].id ? "You" : "Other", // Update sender based on your logic
          text: message.text,
        });
        updatedChats[chatIndex].lastMessage = message.text;
        setChats(updatedChats);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container component={Paper} sx={{ flexGrow: 1 }}>
        <Grid
          item
          xs={3}
          sx={{
            borderRight: "1px solid #e0e0e0",
            backgroundColor: "#f8f9fa",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              padding: 2,
              borderBottom: "1px solid #e0e0e0",
              zIndex: 1,
            }}
          >
            <Typography variant="h6" sx={{ color: "#8B0000" }}>
              Chats
            </Typography>
          </Box>
          <Box
            sx={{
              padding: 1,
              margin: 1,
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F7E7CE",
              borderBottom: "1px solid #e0e0e0",
              borderRadius: 2,
              position: "sticky",
              top: 0,
              zIndex: 1,
            }}
          >
            <SearchIcon sx={{ color: "#8B0000" }} />
            <InputBase
              placeholder="Search or start a new chat"
              sx={{ marginLeft: 1, flex: 1, color: "#8B0000" }}
            />
          </Box>
          <Divider />
          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            <List component="nav" sx={{ paddingTop: 0 }}>
              {chats.map((chat, index) => (
                <React.Fragment key={index}>
                  <ListItem button onClick={() => handleSelectChat(index)}>
                    <Avatar
                      sx={{
                        backgroundColor: "#FFC0CB",
                        color: "#8B0000",
                      }}
                    >
                      {chat.name.charAt(0)}
                    </Avatar>
                    <ListItemText
                      primary={chat.name}
                      secondary={chat.lastMessage}
                      sx={{ marginLeft: 2, color: "#8B0000" }}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            height: "100vh",
          }}
        >
          <AppBar
            position="sticky"
            sx={{
              top: 0,
              backgroundColor: "#F7E7CE",
              color: "#76001C",
              boxShadow: "none",
              borderBottom: "1px solid #e0e0e0",
              zIndex: 1,
            }}
          >
            <Toolbar>
              <Avatar
                sx={{
                  marginRight: 2,
                  backgroundColor: "#8B0000",
                  color: "#FFF",
                }}
              >
                {chats[selectedChatIndex]?.name?.charAt(0) || ""}
              </Avatar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {chats[selectedChatIndex]?.name || ""}
              </Typography>
              <IconButton edge="end" color="inherit" aria-label="menu">
                <MoreVertIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              padding: 2,
              backgroundColor: "#f1f1f1",
            }}
          >
            <List>
              {chats[selectedChatIndex]?.messages?.map((message, index) => (
                <ListItem
                  key={index}
                  sx={{
                    justifyContent:
                      message.sender === "You" ? "flex-end" : "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        message.sender === "You" ? "#FFDAB9" : "#ffffff",
                      borderRadius: 2,
                      padding: 1,
                      maxWidth: "60%",
                      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <ListItemText
                      primary={message.text}
                      sx={{
                        textAlign: message.sender === "You" ? "right" : "left",
                      }}
                    />
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 1,
              borderTop: "1px solid #e0e0e0",
              backgroundColor: "#FFF5F5",
              position: "sticky",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type a message here..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                  e.preventDefault();
                }
              }}
              sx={{ marginRight: 1 }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: "#8B0000", color: "#FFF" }}
              onClick={handleSendMessage}
              endIcon={<SendIcon sx={{ color: "#FFF" }} />}
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatApp;
