'use strict'

/* Fusion libs */
import Consumer from 'fusion:consumer'

/* Third party libs */
import PropTypes from 'prop-types'
import React, { Component } from 'react'


@Consumer
class DoubleChain extends Component {

  render () {

  	const col_one_count = this.props.customFields.columnOne
  	const layout = this.props.customFields.layout

    return (
      <div className={`double_chain | default ${layout}`} id={this.props.id}>
      	<div className='col_one'>
      		{this.props.children.map((feature, index) => {
      			return (index < col_one_count) ? feature : ''
      		})}
      	</div>
      	<div className='col_two'>
      		{this.props.children.map((feature, index) => {
      			return (index >= col_one_count) ? feature : ''
      		})}
      	</div>
      </div>
    )
  }
}

DoubleChain.propTypes = {
  id: PropTypes.string.isRequired,
  customFields: PropTypes.shape({
	  layout: PropTypes
	    .oneOf([
	      'even-width',
	      'wide-left',
	      'wide-right'
	    ]).tag({
	      name: 'Layout',
	      labels: {
	        'even-width': 'Even Width',
	        'wide-left': 'Wide Left',
	        'wide-right': 'Wide Right'
	      }
	    }),
	  columnOne:PropTypes.number.isRequired
	    .tag({
	      name: 'Number of features in column one?',
	      description: 'Enter the number of features to go in the first column. The rest will go in the second'
	    })
   })
}

export default DoubleChain
