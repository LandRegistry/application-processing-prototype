import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageTemplate from './PageTemplate'
import KitchenSink from './pages/KitchenSink';

function App(props) {
  return <PageTemplate>
    <Router>
    <h1 className="govuk-heading-l">GOV.UK React Prototyping kit</h1>
      <Link to="/kitchen-sink" className="govuk-link">Kitchen sink</Link><br /><br />
      <Route path="/kitchen-sink" component={KitchenSink} />
    </Router>
  </PageTemplate>
}

export default App;
