import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';

import './styles/app.scss';
import Landing from './components/Landing';
import Jokes from './components/Jokes';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/jokes/:type" exact component={Jokes} />
    </BrowserRouter>
  );
}

export default App;
