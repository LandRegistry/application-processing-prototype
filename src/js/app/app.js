import React, { Component } from 'react';
import './app.scss'
import Header from 'hmlr-design-system/hmlr_design_system/components/header-internal/component.js';

class App extends Component {
  render() {
    return <>
        <Header headerTitle="Foo" />
        <p class="govuk-body">Here</p>
      </>;
  }
}

export default App;
