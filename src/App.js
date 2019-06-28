import React from 'react';
import Users from './Users/container';
import {Logo} from './Logo';
import './App.scss';

function App() {
  return (
    <section className="App">
      <Logo />
      <Users />
    </section>
  );
}

export default App;
