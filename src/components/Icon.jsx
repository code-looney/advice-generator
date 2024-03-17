import React from 'react'

const Icon = (props) => {
  const {iconURL, className} = props;

  return (
    <img className={className} src={iconURL} alt="" />
  )
}

export default Icon