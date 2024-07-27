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
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { io } from 'socket.io-client';
import { useNavigate } from "react-router-dom";

const ChatApp = ({ setlogedIn }) => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [people, setPeople] = useState([]);
  const [message, setMessages] = useState({});
  const [conversations, setConversations] = useState([]);
  const [socket, setSocket] = useState(null);

  const user = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate();
  const loggedInUser = user ? user.id : null;  // Ensure user is defined

  const URL = process.env.REACT_APP_API_BASE_URL;

  const handleSelectChat = async (index, conversationId) => {
    setSelectedChatIndex(index);

    try {
      const response = await axios.get(`${URL}/conversation/messages/${conversationId}`);
      const updatedChats = [...chats];
      updatedChats[index].messages = response.data.messages;
      setChats(updatedChats);
      setMessages({
        ...message,
        conversationId,
        receiver: { receiverId: updatedChats[index].id, fullName: updatedChats[index].name },
        messages: response.data.messages,
      });
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") {
      return;
    }

    const conversationId = message?.conversationId || "new";

    // Emit message to the socket
    socket?.emit('handleSendMessage', {
      conversationId: conversationId === "new" ? "new" : conversationId,
      senderId: loggedInUser,
      message: newMessage,
      receiverId: message?.receiver?.receiverId,
    });

    try {
      // Send message to the server
      await axios.post(`${URL}/message`, {
        conversationId: conversationId === "new" ? "new" : conversationId,
        senderId: loggedInUser,
        message: newMessage,
        receiverId: message?.receiver?.receiverId,
      });

      // Update the local chat state
      const newMessageData = {
        user: { fullName: "You", id: loggedInUser },
        message: newMessage,
      };

      if (selectedChatIndex !== null && selectedChatIndex >= 0 && selectedChatIndex < chats.length) {
        const updatedChats = [...chats];
        if (!updatedChats[selectedChatIndex].messages) {
          updatedChats[selectedChatIndex].messages = [];
        }
        updatedChats[selectedChatIndex].messages.push(newMessageData);
        updatedChats[selectedChatIndex].lastMessage = newMessage;
        setChats(updatedChats);
      }

      setMessages((prevMessages) => ({
        ...prevMessages,
        messages: [...(prevMessages.messages || []), newMessageData],
      }));

      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get(`${URL}/conversation/${loggedInUser}`);
        setConversations(response.data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };

    fetchConversations();
  }, [loggedInUser]);

  const fetchMessages = async (conversationId, user) => {
    try {
      const res = await fetch(`${URL}/message/${conversationId.conversationId}?senderId=${loggedInUser}&&receiverId=${conversationId?.user?.receiverId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resData = await res.json();
      setMessages({
        messages: resData,
        receiver: { receiverId: conversationId?.user?.receiverId, fullName: conversationId?.user?.fullName },
        conversationId: conversationId.conversationId
      });
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setlogedIn(false);
    sessionStorage.setItem("logedIn", "false");
    navigate('/');
  };

  const handleSelectPerson = (person) => {
    setMessages({
      messages: [],
      receiver: {
        receiverId: person._id,
        fullName: person.name,
      },
      conversationId: "new",
    });
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        let apiUrl = `${URL}/getallProfileById?`;
        if (user.email) {
          apiUrl += `email=${user.email}`;
        } else if (user.phoneno) {
          apiUrl += `phoneno=${user.phoneno}`;
        }
        const response = await axios.get(apiUrl);
        const profiles = response.data.response.allProfilesDetails;
        const formattedChats = profiles.map((profile) => ({
          id: profile._id,
          name: profile.name,
          lastMessage: "",
          messages: [],
          conversationId: conversations.find((conv) => conv.participants.includes(profile._id))?.id || null,
        }));
        setChats(formattedChats);
        setPeople(profiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, [conversations, user.email]);


  useEffect(() => {
    const newSocket = io('http://13.200.211.15:3001/')
    // const newSocket = io('http://127.0.0.1:3001'); // Ensure this URL is correct
    setSocket(newSocket);
  
    newSocket.on('connect', () => {
      console.log('Connected to socket server');
      newSocket.emit('addUser', loggedInUser);
    });
  
    newSocket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });
  
    newSocket.on('getUsers', (users) => {
      console.log('activeUsers-->', users);
    });
  
    newSocket.on('getMessage', (data) => {
      console.log('Received message:', data);
  
      setMessages((prev) => {
        // Check if the message already exists
        const messageExists = prev.messages.some(
          (msg) => msg.message === data.message && msg.user.id === data.sender?.id
        );
        if (messageExists) {
          console.log('Duplicate message detected, not adding');
          return prev; // Prevent adding duplicate messages
        }
  
        console.log('Adding new message');
        return {
          ...prev,
          messages: [...prev.messages, { user: data.sender || { fullName: "Unknown", id: null }, message: data.message }],
        };
      });
    });
  
    return () => {
      newSocket.close();
    };
  }, [loggedInUser]);
  

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
          <Divider />
          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            <List component="nav" sx={{ paddingTop: 0 }}>
              {conversations.map((conversationId, index) => (
                <React.Fragment key={conversationId.conversationId}>
                  <ListItem
                    button
                    onClick={() => fetchMessages(conversationId, conversationId.user)}
                  >
                    <Avatar
                      sx={{
                        backgroundColor: "#FFC0CB",
                        color: "#8B0000",
                      }}
                    >
                      {/* send Image here */}
                    </Avatar>
                    <ListItemText
                      primary={conversationId?.user?.fullName || "Unknown"}
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
          xs={6}
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
                  color: "#fff",
                }}
              >
                {/* receiver image here */}
              </Avatar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {message?.receiver?.fullName || "Chat"}
              </Typography>
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{ color: "#76001C" }}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              padding: 2,
              backgroundColor: "#f8f9fa",
            }}
          >
            <List>
              {message?.messages?.length > 0 ? (
                message?.messages.map(({ message, user }, index) => {
                  const userFullName = user?.fullName || "Unknown";
                  return (
                    <ListItem
                      key={index}
                      sx={{
                        justifyContent: user?.id === loggedInUser ? 'flex-end' : 'flex-start',
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: user?.id === loggedInUser ? '#FFDAB9' : '#ffffff',
                          borderRadius: 2,
                          padding: 1,
                          maxWidth: "60%",
                          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <ListItemText
                          primary={message}
                          secondary={userFullName}
                          sx={{
                            textAlign: user?.id === loggedInUser ? 'right' : 'left',
                          }}
                        />
                      </Box>
                    </ListItem>
                  );
                })
              ) : (
                <Typography variant="body2" color="textSecondary" align="center">
                  No messages to display
                </Typography>
              )}
            </List>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid #e0e0e0",
              backgroundColor: "#fff",
              padding: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message"
              sx={{ marginRight: 1 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            borderLeft: "1px solid #e0e0e0",
            backgroundColor: "#f8f9fa",
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
              People
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ overflowY: "auto" }}>
            <List component="nav" sx={{ paddingTop: 0 }}>
              {people.map((person) => (
                <ListItem
                  button
                  key={person._id}
                  onClick={() => handleSelectPerson(person)}
                >
                  <Avatar
                    sx={{
                      backgroundColor: "#FFC0CB",
                      color: "#8B0000",
                    }}
                  >
                    {/* Profile image here */}
                  </Avatar>
                  <ListItemText
                    primary={person.name}
                    sx={{ marginLeft: 2, color: "#8B0000" }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatApp;
