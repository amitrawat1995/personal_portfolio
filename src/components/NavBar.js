
import {useState , useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import amitlogo from '../assets/img/amitlogo.png'
import  navIcon1 from '../assets/img/nav-icon1.svg'
import 'animate.css'


export const NavBar = () => {

  const [activeLink, setActiveLink]=useState("home");
  const [scrolled, setScrolled]=useState(false)

  useEffect(()=> {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      }else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll",onScroll)
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return(
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img className="animate__animated animate__zoomInUp" src={amitlogo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-icon"></span>  
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"
                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("home")}
                >Home</Nav.Link>
              <Nav.Link href="#skills"
                className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("skills")}
                >Skills</Nav.Link>
                 <Nav.Link href="#certificate"
                className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("project")}
                >Certificates</Nav.Link> 
              <Nav.Link href="#project"
                className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("project")}
                >Projects</Nav.Link>
              
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/amit-rawat-42b3a7260/" target="_blank"><img src={navIcon1} alt=""/></a>
              </div>
              <a href="#connect" className="anchorConnect"><button className="vvd" >Let's connect</button></a>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}    