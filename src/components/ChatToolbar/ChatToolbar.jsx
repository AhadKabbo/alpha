import { useState } from 'react';
import { useChat } from 'context';
import { joinUsernames } from 'helpers';
import { Icon } from 'semantic-ui-react';
import { SearchUsers } from 'components';
import Sidebar from '../../src copy/components/SideBar'
import NavbarPage from '../../src copy/components/Navbar/indexPage'
import { navlogo } from '../../src copy/components/Info/Data';

export const ChatToolbar = () => {
  const { selectedChat, chatConfig } = useChat();
  const [searching, setSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="chat-toolbar">
        <div className="chat-header-text">
          {joinUsernames(selectedChat.people, chatConfig.userName).slice(
            0,
            100,
          )}
        </div>

        <div className="add-user-icon">
          <Icon
            // color="#2ba7b4"
            name="user plus"
            onClick={() => setSearching(true)}
          />
          {/* <NavbarPage toggle={toggle} {...navlogo }/>
          <Sidebar isOpen={isOpen} toggle={toggle} /> */}
        </div>
      </div>

      <SearchUsers closeFn={() => setSearching(false)} visible={searching} />
    </>
  );
};
