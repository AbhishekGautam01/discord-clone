import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from './components/login/Login';
import './App.css';

function App() {
  const user = useSelector(selectUser);
  return (
    //BEM naming convention
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
