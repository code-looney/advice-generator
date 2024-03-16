import React from 'react';
import Container from './Container';

const Advice = (props) => {
    const {className, children} = props;
  return (
    <p className={className}>{children}</p>
  )
}

export default Advice