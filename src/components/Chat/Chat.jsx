import { useEffect, useState } from 'react';
import { useChat } from 'context';
import { getChats, ChatEngine } from 'react-chat-engine';
import { LeftRail, ChatToolbar, ChatInput, MessageList } from 'components';
import Sidebar from '../../src copy/components/SideBar'
import NavbarPage from '../../src copy/components/Navbar/indexPageChat'
import { navlogo } from '../../src copy/components/Info/Data';

export const Chat = () => {
  const {
    myChats,
    setMyChats,
    chatConfig,
    selectedChat,
    selectChatClick,
    setSelectedChat,
  } = useChat();
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }


  useEffect(() => {
    console.log('My Chats: ', myChats);
  }, [myChats]);

  useEffect(() => {
    console.log('Selected Chat: ', selectedChat);
  }, [selectedChat]);

  return (
    <>
    {/* <div className="Nav-container">
    <NavbarPage toggle={toggle} {...navlogo }/>
              <Sidebar isOpen={isOpen} toggle={toggle} /> 
              </div> */}
      {!!chatConfig && (
        <ChatEngine
          hideUI={true}
          userName={chatConfig.userName}
          projectID={chatConfig.projectID}
          userSecret={chatConfig.userSecret}
          onConnect={() => {
            getChats(chatConfig, setMyChats);
          }}
          onNewChat={chat => {
            if (chat.admin.username === chatConfig.userName) {
              selectChatClick(chat);
            }
            setMyChats([...myChats, chat].sort((a, b) => a.id - b.id));
          }}
          onDeleteChat={chat => {
            if (selectedChat?.id === chat.id) {
              setSelectedChat(null);
            }
            setMyChats(
              myChats.filter(c => c.id !== chat.id).sort((a, b) => a.id - b.id),
            );
          }}
          onNewMessage={(chatId, message) => {
            if (selectedChat && chatId === selectedChat.id) {
              setSelectedChat({
                ...selectedChat,
                messages: [...selectedChat.messages, message],
              });
            }
            const chatThatMessageBelongsTo = myChats.find(c => c.id === chatId);
            const filteredChats = myChats.filter(c => c.id !== chatId);
            const updatedChat = {
              ...chatThatMessageBelongsTo,
              last_message: message,
            };
            setMyChats(
              [updatedChat, ...filteredChats].sort((a, b) => a.id - b.id),
            );
          }}
        />
      )}
       
      <div className="chat-container">

      
        <LeftRail />
        <div className="current-chat">
          {selectedChat ? (
            <div className="chat">
              <ChatToolbar />
              <MessageList />
              <ChatInput />
            </div>
          ) : (
            <div className="no-chat">
              <img
                src="/img/chat.svg"
                className="point-left"
                alt="point-left"
              />
              <div className="point-left-text">
              Select A Chat
              </div>
            </div>


            // <div className="no-chat-selected">
            //   {/* <img
            //     src="/img/pointLeft.png"
            //     className="point-left"
            //     alt="point-left"
            //   /> */}
            //   <img  style={{ minHeight: '20rem',
            //       minWidth: '5rem', }}
            //     src="/img/chat.svg"
            //     className="point-left"
            //     alt="point-left"
            //   />
            //   Select A Chat
            // </div>

          )}
        </div>
      </div>
    </>
  );
};
