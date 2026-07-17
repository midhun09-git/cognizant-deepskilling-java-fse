import React, { useState } from 'react';
import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ margin: '20px' }}>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <UserPage />
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Login</button>
          <GuestPage />
        </div>
      )}
    </div>
  );
}

export default App;