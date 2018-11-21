import React from 'react'
import PropTypes from 'prop-types'

const DefaultChain = props => (
  <div className='chain | default' id={props.id}>
    {props.children}
  </div>
);

DefaultChain.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default DefaultChain;
