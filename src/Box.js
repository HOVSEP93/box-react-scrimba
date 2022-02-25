import React from 'react';

const Box = props => {
  const styles = {
    backgroundColor: props.on ? '#118ab2' : 'transparent',
  };
  return <div style={styles} className="box" onClick={props.toggle}></div>;
};

export default Box;
