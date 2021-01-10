import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/Chat/Chat';
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
        <h2>You need to login </h2>
      )}
    </div>
  );
}

export default App;
