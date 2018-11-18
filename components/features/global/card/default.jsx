/*  /components/features/global/card/default.jsx  */
import Consumer from 'fusion:consumer'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

@Consumer
class Card extends Component {
  render () {
    const content = this.props.globalContent
    // We can extract our custom field values here, and even set default values if desired...
    // const { breakingAlertText, showAuthorInfo = false } = this.props.customFields
    console.log(this.props);
    return (
      <article className='col-sm-12'>
        <h1>{content.headlines.basic}</h1>
      </article>
    )
  }
}

Card.propTypes = {
  customFields: PropTypes.shape({
    breakingAlertText: PropTypes.string,
    showAuthorInfo: PropTypes.bool
  })
}

export default Card
