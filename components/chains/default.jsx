import React from 'react'
import PropTypes from 'prop-types'

const DefaultChain = props => (
  <div className='chain | default' id={props.id}>
    {props.children}
  </div>
);

export default DefaultChain;
