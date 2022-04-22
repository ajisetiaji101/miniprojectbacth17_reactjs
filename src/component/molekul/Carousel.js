import React, { Component } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

export const CarouselData = [
  {
    image: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1480&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1480&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1480&q=80",
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
          <AiOutlineLeft onClick={this.prevSlide} className="absolute left-4 text-3xl inset-y-1/2 text-white cursor-pointer" />
          {CarouselData.map((slide, index) => {
            return (
              <img
                src={slide.image}
                alt="This is a carousel slide"
                key={index}
                className={index === this.state.currentSlide ? "block w-full h-auto object-cover" : "hidden"}
                onMouseEnter={() => {
                  this.setState({ paused: true });
                }}
                onMouseLeave={() => {
                  this.setState({ paused: false });
                }}
              />
            );
          })}
          <AiOutlineRight onClick={this.nextSlide} className="absolute right-4 text-3xl inset-y-1/2 text-white cursor-pointer" />
        </div>
      </div>
    );
  }
}

export default Carousel;
