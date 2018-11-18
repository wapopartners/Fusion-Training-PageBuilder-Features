/*  /components/features/global/Header/default.jsx  */
import Consumer from 'fusion:consumer'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

@Consumer
class Header extends Component {
  render () {
    const content = this.props.globalContent
    // We can extract our custom field values here, and even set default values if desired...
    const { breakingAlertText, showAuthorInfo = false } = this.props.customFields
    console.log(content);
    return (
      <article className='col-sm-12'>
        {breakingAlertText &&
          <span>{breakingAlertText}</span>}
        <h1>{content && content.headlines && content.headlines.basic}</h1>
        {showAuthorInfo &&
          <span>{content.credits.by[0].name}</span>}
      </article>
    )
  }
}

Header.propTypes = {
  customFields: PropTypes.shape({
    breakingAlertText: PropTypes.string,
    showAuthorInfo: PropTypes.bool
  }),
  globalContent: PropTypes.shape({
    headlines: PropTypes.shape({
      basic: PropTypes.string
    })
  })
}

export default Header
