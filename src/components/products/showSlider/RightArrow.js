import React from 'react';

function RightArrow(props){
  return (
    <div className="nextArrow arrow rightArrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}


export default RightArrow;
