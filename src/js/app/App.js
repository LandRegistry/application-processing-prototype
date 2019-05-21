import React, { useEffect } from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import KitchenSink from './pages/KitchenSink';
import Sample from './pages/Sample';
import BackLink from 'govuk-react-components/src/components/govukComponents/BackLink';
import { createBrowserHistory } from 'history';

function App() {

  return <div className="wrapper">
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/kitchen-sink" component={KitchenSink} />
      <Route exact path="/sample" component={Sample} />
      <div className="hidden-button-container">
        <div className="hidden-buttons"><span className="hidden-buttons--home"><p className="govuk-body"><Link className="govuk-link" to="/">Home</Link></p></span></div>
      </div>
    </Router>
  </div>
}

export default App;
