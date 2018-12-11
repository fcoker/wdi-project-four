import React from 'react';


function Slide({ image }){
  return <div className="slide"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }}></div>;
}

export default Slide;
