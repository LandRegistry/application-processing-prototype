import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import KitchenSink from './pages/KitchenSink';
import Sample from './pages/Sample';

function App() {
  return <div class="wrapper">
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/kitchen-sink" component={KitchenSink} />
      <Route exact path="/sample" component={Sample} />
    </Router>
  </div>
}

export default App;
