// src/App.js
import React, { useState } from "react";
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

const sampleChats = [
  {
    name: "Aanchal",
    lastMessage: "See you tomorrow",
    messages: [
      { sender: "Aanchal", text: "Hey!" },
      { sender: "You", text: "Hello!" },
    ],
  },
  {
    name: "Aryan",
    lastMessage: "What time?",
    messages: [
      { sender: "Aryan", text: "Are we still on for tonight?" },
      { sender: "You", text: "Yes!" },
    ],
  },
];

const ChatApp = () => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);
  const [newMessage, setNewMessage] = useState("");
  const [chats, setChats] = useState(sampleChats);

  const handleSelectChat = (index) => {
    setSelectedChatIndex(index);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const updatedChats = [...chats];
    updatedChats[selectedChatIndex].messages.push({
      sender: "You",
      text: newMessage,
    });
    updatedChats[selectedChatIndex].lastMessage = newMessage;
    setChats(updatedChats);
    setNewMessage("");
  };

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
            //   backgroundColor: "#FFC0CB",
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
              margin:1,
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F7E7CE",
              borderBottom: "1px solid #e0e0e0",
                borderRadius:2,
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
                {chats[selectedChatIndex].name.charAt(0)}
              </Avatar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {chats[selectedChatIndex].name}
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
              {chats[selectedChatIndex].messages.map((message, index) => (
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
