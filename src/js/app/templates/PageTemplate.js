import React from 'react';
import Header from 'hmlr-design-system/hmlr_design_system/components/header/component.js';
import Footer from 'hmlr-design-system/hmlr_design_system/components/footer/component.js';

function PageTemplate(props) {
  const classes = props.leftColumn ? 'hmlr-header--align-grid' : 'hmlr-header--full-width'

  return <>
    <Header variant='dark' classes={classes} headerTitle={props.headerTitle} />

    <main className="hmlr-grid-row" id="main-content" role="main">

      {props.leftColumn && <div className="hmlr-grid-column">{props.leftColumn}</div>}

      <div className="hmlr-grid-column hmlr-grid-column--main">
        {props.children}
      </div>

      {props.rightColumn && <div className="hmlr-grid-column">{props.rightColumn}</div>}
    </main>

    <Footer classes='hmlr-footer--full-width' variant='dark' />
  </>
}

export default PageTemplate;
