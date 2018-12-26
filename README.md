
# **Play & Watch** ![General Assembly](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)


## Overview
This app is an e-commerce website that sells both video games and movies. Play & Watch is a full stack application which has all the basic functions of an e-commerce website such as placing orders, keeping track of orders through purchase history, product basket e.t.c.
This web app is also capable of showing users suggested products based on the genre of their previous purchases.

Play & Watch was the final project of the GA Immersive course and it was also a group project. Our main objective was to use React to build the front-end and our timeframe for completion was one week. I was looking forward to using React so I found this project particularly interesting.

Web Site [Heroku](https://play-and-watch.herokuapp.com).
GitHub [Repo](https://github.com/fcoker/wdi-project-four).


## Brief

* Build a full-stack application by making your own backend and your own frontend

* Use an Express API to serve your data from a Mongo database

* Consume your API with a separate frontend built with React

* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models

* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut

* Be deployed online so it's publicly accessible.

* Have automated tests for at least one RESTful resource on the backend, and at least one classical and one functional component on the frontend.

## Technologies Used

* React
* JavaScript (ES6)
* HTML5
* SCSS
* Bulma CSS Framework
* Git
* GitHub
* bcrypt
* mongoose
* Heroku
* Trello
* Yarn
* Chai
* Mocha

## Approach Taken
I decided to team up with Rafa and Sham for this project. Apart from the fact that games and movies are something I really enjoy, I saw the potential for a simple MVP to be achieved relatively quickly and also the possibilities for the project to be expanded with a lot of extra features should we have extra time.

We were able to discuss and break down our ideas as much as possible before starting. We then proceeded to outline all our ideas on a notepad.

### Notepad
![notes](/readmeImg/notepad.png)

As I discovered in my previous project Trello is an extremely useful tool with regards to assigning tasks and keeping track of the progress of team members and phases of our projects. Our initial tasks on our Trello board are as below:

### Trello
![trello](/readmeImg/trello.png)

### Functionality
#### Featured Code 1
Due to the fact that each product has a maximum of three images as an array within its model to be used for the image slider, I found it particularly tricky enabling the user to add new images for new products on the form.

My solution to this was hard coding the name for each image input in the form with a number right after the name "images" like so "images1". This allowed me write a conditional statement looking for any input name in the form containing the word "images", if it finds a match then it singles out and saves the number right after the word "images" as an index.
The .splice method is then used, using the index saved and the value given in the form(image URL) to add the new image into the new array.

``` JavaScript
handleChange({ target: {name, value }}) {
  if(name.includes('images')) {
    const index = name[6] - 1;
    const newImages = this.state.images;
    newImages.splice(index, 1, value);
    this.setState({ images: newImages });
  }
  this.setState({ [name]: value });
}
```
``` HTML
<form>
  <div className="field imagesadd">
    <div className="control">
      <input className="input" onChange={this.handleChange}   value={this.state.images[0] || ['']}  name="images1"  placeholder="Main imageUrl"/>
      <input className="input" onChange={this.handleChange}   value={this.state.images[1] || ['']}  name="images2"  placeholder="ImageUrl 2"/>
      <input className="input" onChange={this.handleChange}   value={this.state.images[2] || ['']}  name="images3"  placeholder="ImageUrl 3"/>
    </div>
  </div>
</form>
```


#### Featured Code 2


``` JavaScript
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

  componentDidUpdate(prevProps){
    if (prevProps.images !== this.props.images) {
      this.setState({
        images: this.props.images,
        currentIndex: 0,
        translateValue: 0
      });
    }
  }

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

  slideWidth(){
    return document.querySelector('.slide').clientWidth;
  }

  render() {
    const images = this.state.images;
    return (
      <div className="slider">
        <div className="slider-wrapper" style={{
          transform: `translateX(${this.state.translateValue}px)`
        }}>

          {
            images.map((image, i) => (
              <Slide key={i} image={image} />
            ))
          }
        </div>
        {(images.length > 1) &&
          <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        }
        {(images.length > 1) &&
          <RightArrow goToNextSlide={this.goToNextSlide} />
        }
      </div>
    );
  }
}
```



## Screenshots

### At MVP
![mvp1](/readmeImg/mvp1.png)
![mvp2](/readmeImg/mvp2.png)


### Final Product

Landing Page:
![landing page](/readmeImg/landingPage.png)


Show page:
![show1](/readmeImg/show.png)
![show2](/readmeImg/trailerSuggestions.png)

Basket:
![basket](/readmeImg/basket.png)

Profile:
![customer](/readmeImg/profile.png)

Add new product:
![new](/readmeImg/new.png)

Statistics:
![statistics](/readmeImg/statistics.png)


## Bugs
Below is a list of some of the known bugs within the app:

* iFrame - if the iFrame is given an incorrect YouTube url, the show page won't render correctly, duplicating itself within the frame. If I had more time, I would have the input accept only the unique video ID, where the rest of the link is hardcoded.
* Search bar - when a search term is deleted partially, the state doesn't update until the search term is cleared completely.
* Rating stars - if a rating has been made, the stars don't reset if the show page is changed to another product. This is due to the ratings component being a classical component and as a result it doesn't update when the props change. I'd remedy this by adding a componentDidUpdate block to check for changes.

## Wins and Blockers
One of the biggest problems I faced was getting used to using React. For some reason it took me longer to get acclimatised with the basics of using components in React as opposed to Angular and EJS. I spent a lot of unplanned extra time reading up on how to use the framework.

Another big blocker for me was getting the image slider on the show page to work. I spent way too much time on this and got about half way through before getting completely stuck. My teammate Sham was later able to figure out how to finish it.

My biggest win was our finished product. This was the most user centric project I have produced till date. I feel we were able to incorporate everything we had generally learnt through out the course into this project. The team was an effective unit and all deliverables were handed in on time, another win was the team members I had.

## Future Content
Along with fixing the known bugs, there are a number of potential future features I could implement, such as:
* Incorporating a payment gateway that accepts credit card or Paypal.
* Adding an extra product for music.
* Allowing user to sort index page.
* Ability to remove specific genres from suggestions.
* Show top 5 suggestions on the index page within the image slider.
* Rewriting the suggestions based on relevance score - products of higher relevance will be shown first.
* Customer support chat.
* Stock management.
* And much more!
