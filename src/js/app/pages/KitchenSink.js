import React, { Component } from 'react';
import PageTemplate from '../templates/PageTemplate';
import Accordion from 'govuk-react-components/src/components/govukComponents/Accordion'
import BackLink from 'govuk-react-components/src/components/govukComponents/BackLink'
import Button from 'govuk-react-components/src/components/govukComponents/Button'
import Checkboxes from 'govuk-react-components/src/components/govukComponents/Checkboxes'
import Details from 'govuk-react-components/src/components/govukComponents/Details'
import ErrorSummary from 'govuk-react-components/src/components/govukComponents/ErrorSummary'
import Fieldset from 'govuk-react-components/src/components/govukComponents/Fieldset'
import Input from 'govuk-react-components/src/components/govukComponents/Input'
import Panel from 'govuk-react-components/src/components/govukComponents/Panel'
import Radios from 'govuk-react-components/src/components/govukComponents/Radios'
import SkipLink from 'govuk-react-components/src/components/govukComponents/SkipLink'
import Tag from 'govuk-react-components/src/components/govukComponents/Tag'
import Textarea from 'govuk-react-components/src/components/govukComponents/Textarea'
import WarningText from 'govuk-react-components/src/components/govukComponents/WarningText'

function KitchenSink() {

  // this is the object for the error summary
  var errorList = [
    {
      text: "The date your passport was issued must be in the past",
      href: "#passport-issued-error"
    },
    {
      text: "Enter a postcode, like AA1 1AA",
      href: "#postcode-error"
    }]

  return <PageTemplate headerTitle="Kitchen Sink">
    <div className="hmlr-grid-column hmlr-grid-column--main">


      <h2 className="govuk-heading-m">GOV.UK components <span className="govuk-caption-m">(with hmlr theme applied)</span></h2>

      <Accordion id="accordion-demo" items={[{
        heading: {
          text: 'Understanding agile project management'
        },
        content: {
          html: <p className="govuk-body">One thing</p>
        },
        summary: {
          text: 'Introductions, methods, core features.'
        }
      }, {
        heading: {
          text: 'Working with agile methods'
        },
        content: {
          html: <p className="govuk-body">Another thing</p>
        },
        summary: {
          text: 'Worksapces, tools and techniques, user stories, planning'
        }
      }]} headingLevel="2" />

      <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />

      <BackLink href="/" />

      <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />

      <Button text="Hello I'm a button" />

      <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />

      <Checkboxes classes='govuk-checkboxes--small' name="waste" items={[{
        value: "carcasses",
        text: "Waste from animal carcasses",
      },
      {
        value: "mines",
        text: "Waste from mines or quarries"
      },
      {
        value: "farm",
        text: "Farm or agricultural waste"
      }]} />

      <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />

      <Details open={true} summaryHtml={<p>Details</p>} html={<p>Details main content</p>} />

      <hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />

      <ErrorSummary
        titleText="There is a problem"
        errorList={errorList}
      />
      {/* <Fieldset />
    <Input />
    <Panel />
    <Radios />
    <SkipLink />
    <Tag />
    <Textarea />
    <WarningText /> */}
    </div>
  </PageTemplate>
}

export default KitchenSink;
