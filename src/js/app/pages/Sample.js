import React from 'react'
import PageTemplate from '../templates/PageTemplate';

function TwoColumn() {

  var leftColumn = 'test1'
  var rightColumn = 'test3'
  return (
    <PageTemplate headerTitle="Sample" leftColumn={leftColumn} rightColumn={rightColumn}>
      test2
    </PageTemplate>
  )
}

export default TwoColumn
