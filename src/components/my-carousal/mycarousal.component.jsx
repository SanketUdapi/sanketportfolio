import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/slide1.webp";
import Slide4 from "../../assets/img/carousal/slide4.webp";
import Slide5 from "../../assets/img/carousal/slide5.webp";
import ScrollDown from "../scroll-down/scrolldown.component";
import "./mycarousal.styles.css";


const MyCarousal = () => {
    return ( 
    <div id="home">
        <Carousel controls={false} indicators interval={5500} pause={false}>
            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={Slide1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={Slide5}
                alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={Slide4}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <ScrollDown/>
    </div>
     );
}
 
export default MyCarousal;