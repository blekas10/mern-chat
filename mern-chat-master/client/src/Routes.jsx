import React, { useState } from 'react';
import RegisterAndLoginForm from './RegisterAndLoginForm.jsx';
import { useContext } from 'react';
import { UserContext } from './UserContext.jsx';
import Chat from './Chat';
import FrontPage from './FrontPage.jsx';

export default function Routes() {
  const { username, id } = useContext(UserContext);
  const [page, setPage] = useState('frontPage');

  if (username) {
    return <Chat />;
  }

  return (
    <>
      {page === 'frontPage' && <FrontPage setIsLoginOrRegister={setPage} />}
      {(page === 'login' || page === 'register') && (
        <RegisterAndLoginForm setIsLoginOrRegister={setPage} />
      )}
    </>
  );
}