import React from 'react';

const Button = (props) => {
  const {className, children} = props;
  
  return (
    <button onClick={props.onFetchDataClick} className={className}>{children}</button>
  )
}

export default Button