import React from 'react';


import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';


class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      translateValue: 0,
      images: this.props.images
    };


    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  // goToPrevSlide(){
  //   console.log('moving to prev slide');
  //   this.setState(nextState => ({
  //     currentIndex: nextState.currentIndex - 1
  //   }));
  // }
  goToPrevSlide(){
    if(this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth() + 100
    }));
  }



  goToNextSlide(){
    console.log('moving to next slide');
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + (-this.slideWidth()) - 100
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
  }

  render() {
    return (
      <div className="slider">
        <div className="slider-wrapper" style={{
          transform: `translateX(${this.state.translateValue}px)`
        }}>

          {
            this.state.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))
          }
        </div>
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

export default Slider;
