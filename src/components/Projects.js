import { Container, Row, Col, Nav, Tab} from "react-bootstrap";

import { ProjectCard} from "./ProjectCard";
import  colorsharp2 from "../assets/img/color-sharp2.png";

import projImg3 from "../assets/img/project-img3.png";
import qrcover from "../assets/img/qrcover.png"
import memeCover from "../assets/img/memeCover.png"
import clockCover from "../assets/img/clockCover.png";
import multiplicationCover from "../assets/img/multiplicationCover.png";
import weatherCover from "../assets/img/weatherCover.png";
import rpsCover from "../assets/img/rpsCover.png"
import tenziesCover from "../assets/img/tenziesCover.png"
import dicegame from "../assets/img/dicegame.png"
import contactuss from "../assets/img/contactuss.png"
import darkmode from "../assets/img/darkmode.png"
import router from "../assets/img/router.png"

export const Projects = () => {

  const projects = [
    {
      title: "Dice Game",
      description: "Click here",
      imgUrl: dicegame,
      appLink:"https://dicegame-rho.vercel.app/",
      githubLink:"https://github.com/amitrawat1995/dicegame"
    },
    {
      title: "Meme Generator",
      description: "Click here",
      imgUrl: memeCover,
      appLink:"https://memegenerator-coral.vercel.app/",
      githubLink:"https://github.com/amitrawat1995/MemeGenerator"
    },
    {
      title: "Tenzies Game App",
      description: "Click here",
      imgUrl: tenziesCover,
      appLink:"https://tenzies-game-phi.vercel.app/",
      githubLink:"https://github.com/amitrawat1995/tenzies-game"
    },
    {
      title: "Contact Page",
      description: "Click here",
      imgUrl: contactuss,
      appLink:"https://contactpage-rust.vercel.app/",
      githubLink:"https://github.com/amitrawat1995/contactpage"
    },
    
    {
      title: "React Router",
      description: "Click here",
      imgUrl: router,
      appLink:"https://reactrouter-two.vercel.app/",
      githubLink:"https://github.com/amitrawat1995/reactrouter"
    },
    {
      title: "DarkMode",
      description: "Click here",
      imgUrl: darkmode,
      appLink:"https://darkmode-ten.vercel.app/",
      githubLink:"https://github.com/amitrawat1995/darkmode"
    }
    
  ] 
  const javaapp = [
    {
      title: "QR code",
      description: "Click here",
      imgUrl: qrcover,
      appLink:"https://q-rcode-mt97ej7kz-amitrawat037-gmailcom.vercel.app",
      githubLink:"https://github.com/amitrawat1995/QRcode"
    },
    {
      title: "Rock-Paper-Scissors",
      description: "Click here",
      imgUrl: rpsCover,
      appLink:"https://rock-paper-scissorss12-lzn3i4zwp-amitrawat037-gmailcom.vercel.app",
      githubLink:"https://github.com/amitrawat1995/rock-paper-scissorss12"
    },
    {
      title: "Digital Clock",
      description: "Click here",
      imgUrl: clockCover,
      appLink:"https://digital-clock-phi-wheat.vercel.app/",
      githubLink:"https://github.com/amitrawat1995/Digital_clock"
    },
    {
      title: "Weather App",
      description: "click here",
      imgUrl: weatherCover,
      appLink:"https://weather-app-umber-nine-73.vercel.app/",
      githubLink:"https://github.com/amitrawat1995/weather-app"
    },
    {
      title: "Multiplication App",
      description: "Click here",
      imgUrl: multiplicationCover,
      appLink:"https://multiplication-app-delta.vercel.app/",
      githubLink:"https://github.com/amitrawat1995/multiplication_app"
    },
    {
      title: "Business Startup",
      description: "Click here",
      imgUrl: projImg3,
      appLink:"https://darkmode-ten.vercel.app/",
      githubLink:""
    }
  ]


  return(
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some projects. Which are divided in two section .  </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">ReactJs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">JavaScript</Nav.Link>
                </Nav.Item>
                
              </Nav>
              <Tab.Content >
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                    {
                      javaapp.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorsharp2} alt=""></img>
    </section>


    )
}
