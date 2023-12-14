import { useState } from "react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Container, Row, Col} from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg"
import freemailicon from '../assets/img/free-mail-icon.png'
import pngtreephoneicon from '../assets/img/pngtree-phone-icon.jpg'
import 'animate.css';


export const Contacts = () => {

    const [isClicked, setIsClicked] = useState('Send');

   

    const[formDetails,setFormDetails]= useState({
        first_name: '',
        last_name: '',
        user_email: '',
        user_phone: '',
        user_message: ''
      })

    const form = useRef();

    const handleChange = (event) => {
      setFormDetails({
        ...formDetails,
        [event.target.name]: event.target.value
      })
    }


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w96s18b', 'template_z0ezm8a', form.current, 'KkV3oga3R29DyR3Tc')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
   
      setFormDetails({
        first_name: '',
        last_name: '',
        user_email: '',
        user_number: '',
        message: ''
      })

      setIsClicked('sent')

      setTimeout(() => {
        newData()
      }, 3000);
    }

    const newData = () => {
       setIsClicked('Send')
    }


  return (
    <section className="contact" id="connect">
      <Container className="contactContainer">
        <Row className="align-items-center">
          <Col md={6}>
            <img className='animate__animated animate__zoomInUp '
              src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            
            <form ref={form} onSubmit={sendEmail} >
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" name={"first_name"}
                    placeholder="First Name" value={formDetails.first_name}
                    onChange={handleChange}
                  
                   
                   />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text"  name={"last_name"}
                    placeholder="Last Name" value={formDetails.last_name}
                    onChange={handleChange}
                    />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" name={"user_email"}
                    placeholder="Email Address" value={formDetails.user_email}
                    onChange={handleChange}
                   />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" name={"user_number"}
                    placeholder="Phone Number" value={formDetails.user_number}
                    onChange={handleChange}
                    />
                </Col>
                <Col>
                  <textarea row="6" name={"message"}
                    placeholder="Message"  value={formDetails.message}    
                    onChange={handleChange}
                  ></textarea>      
                   <button type="submit"  ><span>{isClicked}</span></button>
                </Col>
              </Row>
            </form>

          </Col>
        </Row>
        <Row className="myContactRow">
          <Col>
            <div className="myContactDiv">
              <h1 className="myContact">Contact</h1>
              <p className="mailSpan"><img className="mailImg" src={freemailicon} alt=''/> amitrawat037@gmail.com </p>
              <p className="phoneSpan"><img src={pngtreephoneicon} className="phoneImg" alt=''/>8126369905</p>      
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  )
}