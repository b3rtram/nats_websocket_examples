import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Topbar from './components/Topbar.js'
import ChatHistory from './components/ChatHistory.js'
import Chat from './components/Chat.js'
import Sidebar from './components/Sidebar.js'

function App() {
  return (
    <div className="app">
      <div className="topbar">
        <Topbar />
      </div>

      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <ChatHistory />
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
