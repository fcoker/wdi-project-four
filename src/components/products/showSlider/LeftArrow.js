import React from 'react';

function LeftArrow(props){
  return (
    <div className="prevArrow arrow leftArrow" onClick={props.goToPrevSlide}>
      <i className="fas fa-angle-left fa-3x" aria-hidden="true"></i>
    </div>
  );
}


export default LeftArrow;
