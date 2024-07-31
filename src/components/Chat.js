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

  const handleSendMessage = async () => {
    const conversationId = message?.conversationId || "new";

    const newMessageData = {
      conversationId: conversationId === "new" ? "new" : conversationId,
      senderId: loggedInUser,
      message: newMessage,
      receiverId: message?.receiver?.receiverId,
    };

    // Emit message to the socket
    socket?.emit('handleSendMessage', newMessageData);

    try {
      // Send message to the server
      await axios.post(`${URL}/message`, newMessageData);

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
  }, []);

  const fetchMessages = async (conversationId, user) => {
    try {
      const res = await fetch(`${URL}/message/${conversationId.conversationId}?senderId=${loggedInUser}&&receiverId=${conversationId?.user?.receiverId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resData = await res.json();
      const formattedMessages = resData.map((msg) => ({
        ...msg,
        user: {
          id: msg.senderId,
          fullName: msg.senderName || "Unknown",
        },
      }));
      setMessages({
        messages: formattedMessages,
        receiver: { receiverId: conversationId?.user?.receiverId, fullName: conversationId?.user?.fullName },
        conversationId: conversationId.conversationId,
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
    const socketInstance = io('http://13.200.211.15:3001');
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  useEffect(() => {
    socket?.emit('addUser', user?.id);
    socket?.on('getUsers', users => {
      console.log('activeUsers:...', users);
    });

    socket?.on('getMessage', data => {
      console.log('data...', data);
      setMessages(prev => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            message: data.message,
            user: {
              id: data.senderId,
              fullName: data.senderName,
            },
          },
        ],
      }));
    });
  }, [socket]);

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
              {conversations.length > 0 ? 
                conversations.map((conversationId, index) => (
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
                ))
              :(
              <div className='text-center text-lg font-semibold mt-24'>No Conversation</div>
              )}
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
                  const isSender = user?.id === loggedInUser;
                  console.log("..userFullName...", userFullName);
                  return (
                    <ListItem
                      key={index}
                      sx={{
                        justifyContent: isSender ? 'flex-end' : 'flex-start',
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: isSender ? '#FFDAB9' : '#ffffff',
                          borderRadius: 2,
                          padding: 1,
                          maxWidth: "60%",
                          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <ListItemText
                          primary={message}
                          // secondary={userFullName}
                          sx={{
                            textAlign: isSender ? 'right' : 'left',
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
              padding: 2,
              borderTop: "1px solid #e0e0e0",
              backgroundColor: "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleSendMessage}
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            borderLeft: "1px solid #e0e0e0",
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
              People
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            <List component="nav" sx={{ paddingTop: 0 }}>
              {people.length > 0 ?
                people.map((person) => (
                  <React.Fragment key={person._id}>
                    <ListItem
                      button
                      onClick={() => handleSelectPerson(person)}
                    >
                      <Avatar
                        sx={{
                          backgroundColor: "#FFC0CB",
                          color: "#8B0000",
                        }}
                      >
                        {/* Display the first letter of the person's name */}
                        {person.name.charAt(0)}
                      </Avatar>
                      <ListItemText
                        primary={person.name}
                        sx={{ marginLeft: 2, color: "#8B0000" }}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))
              :(
              <div className='text-center text-lg font-semibold mt-24'>No Users</div>
              )}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatApp;
