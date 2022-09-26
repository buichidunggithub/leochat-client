import styled from "styled-components"
import { useState, useEffect , useRef} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute, host } from "../utils/APIRoutes";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";
import ChatContainer from "../components/ChatContainer";
import { io } from "socket.io-client";
import Navbar from "../components/Navbar";

export default function Chats() {
  const socket = useRef();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  

  useEffect( ()=>{
    const navigationTo = async () => {
      if (!localStorage.getItem('chat-app-user'))
      {
        navigate("/login");
      }
      else {
        setCurrentUser(await JSON.parse(localStorage.getItem('chat-app-user')));
        setIsLoaded(true);
      }
    }
    navigationTo();
   }, []);

   useEffect(()=>{
    if(currentUser){
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
   },[currentUser]);

  useEffect( () => {
    const getCurrentUser = async()=>{
      if( currentUser)  {
      if(currentUser.isAvatarImageSet){
        const data = await  axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
      } else{
        navigate('/setAvatar');
      }
    }
    }
      getCurrentUser();
  }, [currentUser]);

  const handleChatChange = (chat) =>{
    setCurrentChat(chat);
  }

  return (
    <>
      <Navbar currentUser={currentUser}/>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} currentUser={currentUser}  changeChat={handleChatChange}/>
          { isLoaded &&
            currentChat === undefined ?
            <Welcome currentUser={currentUser}/> : 
            <ChatContainer currentChat={currentChat} socket={socket} currentUser={currentUser} />
          }
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131324;

  .container {
    height: calc(100vh - 80px);
    width: 99vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    padding-bottom: 20px;
  }
`;
