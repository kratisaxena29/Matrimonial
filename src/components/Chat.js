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
import { io } from 'socket.io-client'
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
  const loggedInUser = user.id;

  const URL = process.env.REACT_APP_API_BASE_URL;


  useEffect(() => {
    // setSocket(io('http://13.200.211.15:3001/'))
    // setSocket(io('http://localhost:3001/'))
    setSocket(io('https://api.soulmatch.co.in/'))
}, [])

useEffect(() => {
  socket?.emit('addUser', user?.id);
  socket?.on('getUsers', users => {
      console.log('activeUsers:...', users)
  })

  socket?.on('getMessage',data => {
      console.log('data...',data)
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
}, [socket])

  // const handleSelectChat = async (index, conversationId) => {
  //   setSelectedChatIndex(index);

  //   try {
  //     const response = await axios.get(`${URL}/conversation/messages/${conversationId}`);
  //     const updatedChats = [...chats];
  //     updatedChats[index].messages = response.data.messages;
  //     setChats(updatedChats);
  //     setMessages({
  //       ...message,
  //       conversationId,
  //       receiver: { receiverId: updatedChats[index].id, fullName: updatedChats[index].name },
  //       messages: response.data.messages,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching messages:", error);
  //   }
  // };

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") {
      return;
    }

    const conversationId = message?.conversationId || "new";

    socket?.emit('handleSendMessage', {
      conversationId: conversationId === "new" ? "new" : conversationId,
      senderId: loggedInUser,
      message: newMessage,
      receiverId: message?.receiver?.receiverId,
    });

    try {
      const response = await axios.post(`${URL}/message`, {
        conversationId: conversationId === "new" ? "new" : conversationId,
        senderId: loggedInUser,
        message: newMessage,
        receiverId: message?.receiver?.receiverId,
      });
console.log("...handleSendMessage...",response)
      // const newMessageData = {
      //   user: { fullName: "You", id: loggedInUser },
      //   message: newMessage,
      // };

      // if (selectedChatIndex !== null && selectedChatIndex >= 0 && selectedChatIndex < chats.length) {
      //   const updatedChats = [...chats];
      //   if (!updatedChats[selectedChatIndex].messages) {
      //     updatedChats[selectedChatIndex].messages = [];
      //   }
      //   updatedChats[selectedChatIndex].messages.push(newMessageData);
      //   updatedChats[selectedChatIndex].lastMessage = newMessage;
      //   setChats(updatedChats);
      // }

      setMessages((prevMessages) => ({
        ...prevMessages,
        messages: [...(prevMessages.messages || [])],
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
      setMessages({ messages: resData, receiver: { receiverId: conversationId?.user?.receiverId, fullName: conversationId?.user?.fullName }, conversationId: conversationId.conversationId });
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setlogedIn(false);
    localStorage.setItem("logedIn", "false");
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
        const response = await axios.get(`${URL}/getallProfileById?email=${user.email}`);
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

 
 
  // useEffect(() => {
  //   socket?.emit('addUser', loggedInUser);
  //   socket?.on('getUsers', users => {
  //     console.log('activeUsers-->', users);
  //   });
  //   socket?.on('getMessage', data => {
  //     console.log('data...', data);
  //     setMessages(prev => ({
  //       ...prev,
  //       messages: [...prev.messages, { user: data.sender, message: data.message }],
  //     }));
  //   });
  // }, [socket]);
console.log(message)
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
        xs={12}
        sm={4}
        md={3}
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
            display: { xs: 'flex', sm: 'flex', md: 'flex' },
            justifyContent: { xs: 'space-between', sm: 'space-between', md: 'flex-start' },
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" sx={{ color: "#8B0000" }}>
            Chats
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F68C1E",
              color: "white",
              "&:hover": {
                backgroundColor: "red",
              },
              textTransform: "none",
              fontWeight: "bold",
              display: { xs: 'inline-flex', sm: 'inline-flex', md: 'none' },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
        <Divider />
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          <List component="nav" sx={{ paddingTop: 0 }}>
            {conversations.map((conversationId, user) => (
              <React.Fragment key={conversationId.conversationId}>
                <ListItem
                  button
                  onClick={() => fetchMessages(conversationId, user)}
                >
                  <Avatar
                    sx={{
                      backgroundColor: "#FFC0CB",
                      color: "#8B0000",
                    }}
                  >
                    {/* send Image here */}
                    {/* {conversationId?.user?.email} */}
                  </Avatar>
                  <ListItemText
                    primary={conversationId?.user?.fullName}
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
        xs={12}
        sm={8}
        md={6}
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
              {/* Display the user's initial or any relevant content */}
            </Avatar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {message?.receiver?.fullName || "No conversation selected"}
            </Typography>
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
            {message?.messages?.length > 0 ? (
              message?.messages.map(({ message, user: { id } = {} }, index) => (
                <ListItem
                  key={index}
                  sx={{
                    justifyContent: id === loggedInUser ? 'flex-end' : 'flex-start',
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: id === loggedInUser ? '#FFDAB9' : '#ffffff',
                      borderRadius: 2,
                      padding: 1,
                      maxWidth: "60%",
                      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <ListItemText
                      primary={message}
                      sx={{
                        textAlign: id === loggedInUser ? 'right' : 'left',
                      }}
                    />
                  </Box>
                </ListItem>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary" align="center">
                No messages to display
              </Typography>
            )}
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
          {message?.receiver?.fullName && (
            <Button
              variant="contained"
              sx={{ backgroundColor: "#8B0000", color: "#FFF" }}
              onClick={handleSendMessage}
              endIcon={<SendIcon sx={{ color: "#FFF" }} />}
            >
              Send
            </Button>
          )}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={0}
        md={3}
        sx={{
          borderLeft: "1px solid #e0e0e0",
          backgroundColor: "#f8f9fa",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          display: { xs: 'none', sm: 'flex', md: 'flex' },
        }}
      >
        <Box
          sx={{
            padding: 2,
            borderBottom: "1px solid #e0e0e0",
            zIndex: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#8B0000" }}>
            People
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F68C1E",
              color: "white",
              "&:hover": {
                backgroundColor: "red",
              },
              textTransform: "none",
              fontWeight: "bold",
              display: { xs: 'none', sm: 'inline-flex', md: 'inline-flex' },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
        <Divider />
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          <List component="nav" sx={{ paddingTop: 0 }}>
            {people.map((person, index) => (
              <React.Fragment key={index}>
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
                    {person.name.charAt(0)}
                  </Avatar>
                  <ListItemText
                    primary={person.name}
                    sx={{ marginLeft: 2, color: "#8B0000" }}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
};

export default ChatApp;