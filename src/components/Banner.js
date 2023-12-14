import React from "react";
import { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from"../assets/img/header-img.svg";
import amit123 from "../assets/img/amit123.png"


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const toRotate = ["Web Developer", "Front-end Developer"];
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

 

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

     setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
     
      setDelta(500);
    } 
  }

  useEffect(()=>{
    let ticker = setInterval(() => {
      tick();
    },delta);

    return () => {clearInterval(ticker)};
  },[text])

  return(
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={6} md={4} xl={3}>
            <img className="myImg" src={amit123} alt="profile img"/>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{` Hi! I'm Amit. `} 
            <br/>            
                <span className="wrap">{ text }</span>                
            </h1>
            <p>I am currently looking for an internship to enhance my web developing skills. As a Front-End Developer, my goal is to continually evolve and contribute to building visually compelling and technically sound web applications.</p>
            <button ><a className="buttonLink" href="#connect">Let’s Connect </a><ArrowRightCircle size={25}/></button>
          </Col>
          <Col  xs={1} md={2} xl={2}>
            <img className="headerImg" src={headerImg} alt=""/>
          </Col>
        </Row>
        
      </Container>
    </section>
    )
}

