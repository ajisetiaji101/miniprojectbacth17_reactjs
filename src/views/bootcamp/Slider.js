import React from 'react'
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
  return (
    <div>
      <Carousel showThumbs={false} infiniteLoop={true}>
        <div style={{height:"300px"}}>
         <img src="./assets/images/abu.jpg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
          <h2 class="font-medium leading-tight text-5xl" style={{position:"absolute", paddingLeft:"150px", paddingTop:"30px"}}>Bootcamp Regular</h2>
          <p style={{position:"absolute", paddingLeft:"155px", paddingTop:"90px", textAlign:"left"}}>
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit. Praesent sit amet justo nibh. <br/>
              Quisque faucibus vitae magna eget gravida. <br/>
              Maecenas faucibus, ipsum sit amet fringilla <br/>
              fermentum, turpis dolor pretium ipsum, vel<br/>
              cursus ligula velit vel diam. Maecenas tempus <br/>
              maximus tristique.
              </p>
          <div class="flex flex-wrap justify-center" style={{position: "absolute",marginLeft:"800px", marginTop:"70px",width:"400px"}}>
            <img src="./assets/images/codeid.png"/>
          </div>
        </div>
        <div>
        <img src="https:s3.bukalapak.com/img/363716661/large/abu-abu.jpg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
          <h2 class="font-medium leading-tight text-5xl" style={{position:"absolute", paddingLeft:"150px", paddingTop:"30px"}}>Bootcamp Berbayar</h2>
          <p style={{position:"absolute", paddingLeft:"155px", paddingTop:"90px", textAlign:"left"}}>
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit. Praesent sit amet justo nibh. <br/>
              Quisque faucibus vitae magna eget gravida. <br/>
              Maecenas faucibus, ipsum sit amet fringilla <br/>
              fermentum, turpis dolor pretium ipsum, vel<br/>
              cursus ligula velit vel diam. Maecenas tempus <br/>
              maximus tristique.
              </p>
          <div class="flex flex-wrap justify-center" style={{position: "absolute",marginLeft:"800px", marginTop:"70px",width:"400px"}}>
            <img src="./assets/images/codeid.png"/>
          </div>
        </div>
      </Carousel>
    </div>
  )
}