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
      <div className='row' id={this.props.id}>
      	<div className={ layout }>
      		{this.props.children.map((feature, index) => {
      			return (index < col_one_count) ? feature : ''
      		})}
      	</div>
      	<div className={ layout == 'col-md-8' ? 'col-md-4' : 'col-md-8' }>
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
	      'col-md-8',
	      'col-md-4'
	    ]).tag({
	      name: 'Layout',
	      labels: {
	        'col-md-8': 'Wide Left',
	        'col-md-4': 'Wide Right'
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
