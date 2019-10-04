import React from 'react';

//display the count of balls and strikes for the at-bat.
//should be updated when the user records activity on the Dashboard component.

const Display = (props) => {

  return (
  <div className="display">
    <div className="balls">Balls: {props.balls}</div>
    <div className="strikes">Strikes: {props.strikes}</div>
  </div>
  );
}

export default Display;