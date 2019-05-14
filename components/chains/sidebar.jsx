/*  /components/chains/sidebar.jsx  */

import PropTypes from 'prop-types'
import React from 'react'

const Sidebar = (props) => {
  const { hasBorder, heading } = props.customFields

  let classNames = 'col-xs-12 col-md-4'
  classNames = hasBorder ? `${classNames} border-left` : classNames

  return (
    <section className={classNames}>
      {heading &&
        <h3>{heading}</h3>
      }
      <div>
        {props.children}
      </div>
    </section>
  )
}

Sidebar.propTypes = {
  customFields: PropTypes.shape({
    heading: PropTypes.string,
    hasBorder: PropTypes.bool
  })
}

export default Sidebar