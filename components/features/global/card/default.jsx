/*  /components/features/global/card/default.jsx  */
import Consumer from 'fusion:consumer'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getProperties from 'fusion:properties'

@Consumer
class Card extends Component {
  constructor(props){
    super(props)
    // We're destructuring the `contentService` and `contentConfigValues` keys out of the `movieListConfig` prop inside `this.props.customFields`...
    const { contentService, contentConfigValues } = this.props.customFields.articleConfig

    this.fetchContent({
      article: {
        source: contentService,
        query: contentConfigValues
      }
    })
  }

  render () {
    const content = this.state.article
    const siteVars = getProperties(this.props.arcSite)

    // We can extract our custom field values here, and even set default values if desired...
    const { breakingAlertText, showAuthorInfo = false } = this.props.customFields

    return (
      <article className='col-sm-12'>
        {breakingAlertText &&
          <span>{breakingAlertText}</span>}
        <h1>{content && content.headlines && content.headlines.basic}</h1>
        {showAuthorInfo &&
          <span>{content.credits.by[0].name}</span>}
        <h3>News from {siteVars.defaultSiteTitle}</h3>  
      </article>
    )
  }
}

Card.propTypes = {
  customFields: PropTypes.shape({
    // We're using the Fusion-specific PropType `contentConfig` and passing it the name(s) of the GraphQL schemas this component will work with
    articleConfig: PropTypes.contentConfig('article'),
    breakingAlertText: PropTypes.string,
    showAuthorInfo: PropTypes.bool
  })
}

// Card.static = true

export default Card
