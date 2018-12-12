import React from 'react';

function RightArrow(props){
  return (
    <div className="nextArrow arrow rightArrow" onClick={props.goToNextSlide}>
      <i className="fas fa-angle-right fa-3x" aria-hidden="true"></i>
    </div>
  );
}


export default RightArrow;
