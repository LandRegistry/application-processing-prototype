import React, { Component } from 'react';
import 'govuk-frontend/all.scss';
import 'hmlr-design-system/hmlr_design_system/components/header-internal/style.scss';
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
