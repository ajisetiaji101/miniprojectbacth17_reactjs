import React, { Component } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

export const CarouselData = [
  {
    image: "./assets/images/bootcamp.jpg",
    data: ["Join", "Bootcamp", "#"],
  },
  {
    image: "./assets/images/talent.jpg",
    data: ["Need", "Talent ?", "#"],
  },
  {
    image: "./assets/images/hiring.jpg",
    data: ["We", "Hiring", "#"],
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
              <>
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={index === this.state.currentSlide ? "block w-screen h-screen object-cover saturate-0 backdrop-opacity-50" : "hidden"}
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
                <p key={index} className={index === this.state.currentSlide ? "absolute text-white left-1/4 top-1/4 text-4xl font-bold" : "hidden"}>
                  {slide.data[0]}
                </p>
                <p key={index} className={index === this.state.currentSlide ? "absolute text-white left-1/4 top-1/3 text-6xl font-bold" : "hidden"}>
                  {slide.data[1]}
                </p>
                <button
                  className={
                    index === this.state.currentSlide
                      ? "absolute left-1/4 top-1/2  font-bold whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      : "hidden"
                  }
                >
                  Get Started
                </button>
              </>
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
