import React, { Component } from 'react';
import Header from 'hmlr-design-system/hmlr_design_system/components/header/component.js';
import Footer from 'hmlr-design-system/hmlr_design_system/components/footer/component.js';

function App(props) {
  return <>
      <Header variant='dark' classes='hmlr-header--align-grid' headerTitle="React prototype kit" />

      <main className="hmlr-grid-row" id="main-content" role="main">
        <div className="hmlr-grid-column"><p className="govuk-body">Left column</p></div>

        <div className="hmlr-grid-column hmlr-grid-column--main">
          <p className="govuk-body">Main column</p>
        </div>

        <div className="hmlr-grid-column"><p className="govuk-body">Right column</p></div>
      </main>

      <Footer classes='hmlr-footer--full-width' variant='dark' />
    </>
}

export default App;
