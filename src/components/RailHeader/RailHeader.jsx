import { fb } from 'service';
import { useChat } from 'context';
import { useResolved } from 'hooks';
import { useRef, useState } from 'react';
import { ImageUpload } from 'components';
import { Icon, IconGroup, Image, Loader } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import Logo from '../../src copy/components/authentication/Logo';
import { navlogo } from '../../src copy/components/Info/Data';

export const RailHeader = () => {
  const history = useHistory();
  const { chatConfig } = useChat();
  const configResolved = useResolved(chatConfig);
  const inputRef = useRef(null);
  const [image, setImage] = useState();

  const onFileAttach = file => {
    setImage(file);
  };

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        className="file-input"
        accept="image/jpeg,image/png"
        onChange={e => {
          const file = e.target?.files?.[0];
          if (file) {
            onFileAttach(file);
          }
        }}
      />

      {!!image && (
        <ImageUpload
          crop
          file={image}
          header="Set Your Avatar"
          mode="message"
          onSubmit={croppedImage => {
            const storageRef = fb.storage.ref();
            const uploadRef = storageRef.child(
              `${chatConfig.userSecret}_avatar.jpg`,
            );
            uploadRef.put(croppedImage).then(() => {
              uploadRef.getDownloadURL().then(url => {
                fb.firestore
                  .collection('chatUsers')
                  .doc(chatConfig.userSecret)
                  .update({ avatar: url })
                  .then(() => {
                    setImage(null);
                  });
              });
            });
          }}
          close={() => setImage(null)}
        />
      )}

      <div className="left-rail-header">
        <Icon
          onClick={() => history.push('/')}
          className="sign-out"
          name="sign out"
        />
        {/* <Logo
          {...navlogo}
          // onClick={() => history.push('/')}
          // className="sign-out"
          // name="sign out"
        /> */}
        {configResolved && !!chatConfig ? (
          <div className="current-user-info">
            <IconGroup
              onClick={() => {
                const input = inputRef.current;
                if (input) {
                  input.value = '';
                  input.click();
                }
              }}
              className="user-avatar"
              size="large"
            >
              {chatConfig.avatar ? (
                <Image src={chatConfig.avatar} avatar />
              ) : (
                <div className="empty-avatar">
                  {chatConfig.userName[0].toUpperCase()}
                </div>
              )}

              <Icon corner name="camera" inverted circular />
            </IconGroup>

            <div className="current-username">{chatConfig.userName}</div>
          </div>
        ) : (
          <div className="user-loading">
            <Loader active size="small" />
          </div>
        )}
      </div>
    </>
  );
};
