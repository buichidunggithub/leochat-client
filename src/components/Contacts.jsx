import React, { useState, useEffect } from 'react'
import styled from "styled-components"

export default function Contacts({ contacts, currentUser, changeChat, interval, originalTitle }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);

    useEffect(() => {
        if (currentUser) {
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser]);

    const handleClearNotification = () => {
      document.title = originalTitle;
      if (interval) clearInterval(interval);
    }

    const changeCurrentChat = (index, contact) => {
        handleClearNotification();
        setCurrentSelected(index);
        changeChat(contact);
    };
    return (
        <>
            {
                currentUserImage && currentUserName && (
                    <Container>
                        <div className="brand">
                            <h3>FRIENDS HERE!</h3>
                        </div>
                        <div className="contacts">
                            {
                                contacts.map((contact, index) => {
                                    return (
                                        <div
                                         className={`contact ${
                                            index === currentSelected ? "selected" : ""
                                            }`}
                                             key={contact._id}
                                              onClick={()=>changeCurrentChat(index,contact)}>
                                            <div className="avatar">
                                                <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="avatar" />
                                            </div>
                                            <div className="username">
                                                <h3>{contact.username}</h3>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="current-user">
                          <div className="avatar">
                              <img src={`data:image/svg+xml;base64,${currentUserImage}`} alt="avatar" />
                          </div>
                          <div className="username">
                              <h2>{currentUserName}</h2>
                          </div>
                        </div>
                    </Container>
                )
            }
        </>
    )
}


const Container = styled.div`
  display: grid;
  grid-template-rows: 5% 85% 10%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 10rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
          text-transform: capitalize;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }
  .current-user {
    padding: 0 2rem;
    padding-bottom: 0.3rem;
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
      }
    }
    .username {
      h2 {
        color: white;
        text-transform: capitalize;
      }
    }
  }
`;

