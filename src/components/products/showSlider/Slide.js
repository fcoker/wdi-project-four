import React from 'react';


function Slide({ image }){
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  };
  return <div className="slide"
    style={
      style
    }>
  </div>;
}

export default Slide;
