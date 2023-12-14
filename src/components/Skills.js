import { Container, Col, Row} from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import jsIcon from "../assets/img/jsIcon.png"
import reactIcon from "../assets/img/reactIcon.jpg"
import bootstrapIcon from "../assets/img/bootstrapIcon.png"

import githubIcon from "../assets/img/githubIcon.jpeg"
import htmlIcon from "../assets/img/htmlIcon.png"
import cssIcon from "../assets/img/cssIcon.png"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return(
    <section className="skill" id="skills">
      <Container className="skillContainer">
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>As a Front-End Developer, I am proficient in HTML, CSS, JavaScript ,React. <br/>  Also have knowledge of Bootstrap, Tailwind Css , Git & Github.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={jsIcon} alt=""/>
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={reactIcon} alt=""/>
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <img src={bootstrapIcon} alt=""/>
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={githubIcon} alt=""/>
                  <h5>Git & Github</h5>
                </div>
                <div className="item">
                  <img src={htmlIcon} alt=""/>
                  <h5>HTML </h5>
                </div>
                <div className="item">
                  <img src={cssIcon} alt=""/>
                  <h5>CSS </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )    
}