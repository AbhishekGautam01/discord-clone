import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import './App.css';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
