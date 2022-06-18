import React, { Component } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const CarouselData = [
  {
    image1: "./assets/images/btpn.jpeg",
    image2: "./assets/images/jenius.png",
    image3: "./assets/images/mega.jpg",
    image4: "./assets/images/jago.jpg",
    image5: "./assets/images/npm.webp",
    image6: "./assets/images/avrist.jpg",
    image7: "./assets/images/buma.jpg",
  },
  {
    image1: "./assets/images/smartfrenn.jpg",
    image2: "./assets/images/linkaja.png",
    image3: "./assets/images/pegadaian.jpeg",
    image4: "./assets/images/digiresto.jpg",
    image5: "./assets/images/bri.jpg",
    image6: "./assets/images/askrindo.jpg",
    image7: "./assets/images/mandiri.jpg",
  }
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
        <br></br>
        <div className=" justify-center w-screen h-40 flex overflow-hidden relative ">
          {CarouselData.map((slide, index) => {
            return (
              <>
                <img
                  src={slide.image1}
                  alt="This is a carousel slide"
                  key={index}
                  className={index === this.state.currentSlide ? " block w-screen h-screen object-cover rounded-lg h-32 w-32" : "hidden"}
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
                <img
                  src={slide.image2}
                  alt="This is a carousel slide"
                  key={index}
                  className={index === this.state.currentSlide ?  " block w-screen h-screen object-cover rounded-lg h-32 w-32 mr-5 ml-5"  : "hidden" }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
                <img
                  src={slide.image3}
                  alt="This is a carousel slide"
                  key={index}
                  className={index === this.state.currentSlide ?  " block w-screen h-screen object-cover rounded-lg h-32 w-32 mr-5 ml-5"  : "hidden" }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
                                <img
                  src={slide.image4}
                  alt="This is a carousel slide"
                  key={index}
                  className={index === this.state.currentSlide ?  " block w-screen h-screen object-cover rounded-lg h-32 w-32 mr-5 ml-5"  : "hidden" }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
                <img
                  src={slide.image5}
                  alt="This is a carousel slide"
                  key={index}
                  className={index === this.state.currentSlide ?  " block w-screen h-screen object-cover rounded-lg h-32 w-32 mr-5 ml-5"  : "hidden" }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
                <img
                  src={slide.image6}
                  alt="This is a carousel slide"
                  key={index}
                  className={index === this.state.currentSlide ?  " block w-screen h-screen object-cover rounded-lg h-32 w-32 mr-5 ml-5"  : "hidden" }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />                    
                 <img
                src={slide.image7}
                alt="This is a carousel slide"
                key={index}
                className={index === this.state.currentSlide ?  " block w-screen h-screen object-cover rounded-lg h-32 w-32 mr-5 ml-5"  : "hidden" }
                onMouseEnter={() => {
                  this.setState({ paused: true });
                }}
                onMouseLeave={() => {
                  this.setState({ paused: false });
                }}
              />
              </>
            );
          })}
          <AiOutlineLeft onClick={this.prevSlide} className="absolute top-10 left-4 text-5xl inset-y-1/2 text-gray-700 cursor-pointer" />
          <AiOutlineRight onClick={this.nextSlide} className="absolute top-10 right-9 text-5xl inset-y-1/2 text-gray-700 cursor-pointer" />
        </div>
      </div>
    );
  }
}

export default Carousel;
