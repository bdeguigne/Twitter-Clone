import React from 'react';
import './App.css';
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widgets from "./Widgets/Widgets"

function App() {
  return (
    <div className="app">

      {/* Sidebar */}

      <Sidebar />

      {/* Feed */}

      <Feed />

      {/* Widgets */}

      <Widgets />

    </div>
  );
}

export default App;
