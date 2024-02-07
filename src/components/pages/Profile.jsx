import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { nickname, picture } = user;
  const newNickname = nickname.split('.');
  return (
    <div>
      <h1>
        Hello {newNickname[0]} {newNickname[1]}
      </h1>
      <img src={picture} alt="Profile" />
    </div>
  );
};

export default withAuthenticationRequired(Profile);
