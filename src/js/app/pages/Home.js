import React from 'react'
import { NavLink } from 'react-router-dom';
import PageTemplate from '../templates/PageTemplate';

function Home() {
  return (
    <PageTemplate headerTitle="Prototype Kit">
      <div className="hmlr-grid-column hmlr-grid-column--main">
        <nav>
          <ul className="govuk-list">
            <li>
              <NavLink className="govuk-link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="govuk-link" to="/kitchen-sink">Kitchen Sink</NavLink>
            </li>
            <li>
              <NavLink className="govuk-link" to="/sample">Sample</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </PageTemplate>
  )
}

export default Home
