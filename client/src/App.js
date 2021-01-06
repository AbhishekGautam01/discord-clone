import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      {/* Sidebar  */}
      <Sidebar />
      {/* Chat */}
    </div>
  );
}

export default App;
