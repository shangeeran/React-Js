import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Tino" heroName="Superman" />
      <button>Action</button>
      <Greet name="Thanu" heroName="Wonder Woman" /> */}
      {/* <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Tino" heroName="Superman"/>
      <Welcome name="Thanu" heroName="Wonder Woman"/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
