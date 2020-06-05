import React from 'react';
import Header from './common/header'
import { Globalstyle } from './style.js'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <div>
      <Globalstyle />
      <BrowserRouter>
        <Header></Header>
        <Route exact path='/' component={Home} />
        <Route path='/detail' component={Detail} />
      </BrowserRouter>
    </div>

  );
}

export default App;
