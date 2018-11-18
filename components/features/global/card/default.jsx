/*  /components/features/global/card/default.jsx  */
import Consumer from 'fusion:consumer'
import React, { Component } from 'react'

@Consumer
class Card extends Component {
  render () {
    const content = this.props.globalContent

    return (
      <article className='col-sm-12'>
        <h1>{content.headlines.basic}</h1>
      </article>
    )
  }
}

export default Card
