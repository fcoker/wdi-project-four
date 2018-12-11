import React from 'react';


import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';


class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      translateValue: 0
    };
  }

  componentDidMount() {

    console.log('this.props.images------->',this.props.images);
  }

  prevSlide = () => {
    this.setState(nextState => ({
      currentIndex: nextState.currentIndex - 1
    }));
  }
  nextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
  }

  render() {
    return (
      <div className="slider">
        <div className="sliderWrapper"style={{
          transform: `translateX(${this.state.translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}>
          {this.props.images &&
            this.props.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))
          }
          <LeftArrow prevSlide={this.prevSlide} />
          <RightArrow nextSlide={this.nextSlide} />
        </div>
      </div>
    );
  }
}

export default Slider;
