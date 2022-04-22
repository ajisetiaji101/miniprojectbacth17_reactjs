import React, { Component } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

export const CarouselData = [
  {
    image: "./assets/images/bootcamp.jpg",
  },
  {
    image: "./assets/images/talent.jpg",
  },
  {
    image: "./assets/images/hiring.jpg",
  },
];

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide = this.state.currentSlide === CarouselData.length - 1 ? 0 : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  prevSlide = () => {
    let newSlide = this.state.currentSlide === 0 ? CarouselData.length - 1 : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  nextSlide = () => {
    let newSlide = this.state.currentSlide === CarouselData.length - 1 ? 0 : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="overflow-hidden">
        <div className="w-screen h-screen flex overflow-hidden relative">
          {CarouselData.map((slide, index) => {
            return (
              <img
                src={slide.image}
                alt="This is a carousel slide"
                key={index}
                className={index === this.state.currentSlide ? "block w-screen h-screen object-cover saturate-0" : "hidden"}
                onMouseEnter={() => {
                  this.setState({ paused: true });
                }}
                onMouseLeave={() => {
                  this.setState({ paused: false });
                }}
              />
            );
          })}
          <AiOutlineLeft onClick={this.prevSlide} className="absolute left-4 text-3xl inset-y-1/2 text-white cursor-pointer" />
          <AiOutlineRight onClick={this.nextSlide} className="absolute right-9 text-3xl inset-y-1/2 text-white cursor-pointer" />
        </div>
      </div>
    );
  }
}

export default Carousel;
