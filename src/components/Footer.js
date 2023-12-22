import { Container, Row, Col } from "react-bootstrap"
import amitlogo from "../assets/img/amitlogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col size={12} sm={6}>
          <a href="#home">
          <img  src={amitlogo} alt="Logo" />
          </a>
            
          </Col>
          <Col size={12}  sm={6} className="hello">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/amit-rawat-42b3a7260/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
