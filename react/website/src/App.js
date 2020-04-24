import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Topbar from './components/Topbar.js'
import ChatHistory from './components/ChatHistory.js'

function App() {
  return (
    <div className="App">
      <Topbar />
      <ChatHistory />
    </div>
  );
}

export default App;
