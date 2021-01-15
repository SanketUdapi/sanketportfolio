import React from "react";
import MyNavbar from "./components/my-navbar/mynavbar.component";
import "./App.css"
import MyCarousal from "./components/my-carousal/mycarousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesoptions";
import "./App.css";
import FooterPanel from "./components/footer/footer.component";
import ContactForm from "./pages/contact-form/contactform.component";




const Mainstuff = () => {
    return ( 
        <div style={{ position: "relative" }}>
      <MyCarousal />
      <MyTitleMessage />
      <MyNavbar />
      <Particles className="particles particles-box" params={particlesOptions}/>
         
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background_reverse.webp")}
          bgImageAlt="ssup"
          strength={-200}
        >
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>

        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <ContactForm />
        </Slide>
      </Container>
      </div>

      <FooterPanel/>
      </div>
     );
}
 
export default Mainstuff;