import { useState } from "react";
import  { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
import {Container, Row, Col} from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg"
import freemailicon from '../assets/img/free-mail-icon.png'
import pngtreephoneicon from '../assets/img/pngtree-phone-icon.jpg'

export const Contacts = () => {

    const [isClicked, setIsClicked] = useState('Send');

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }

    const[formDetails,setFormDetails]= useState({formInitialDetails})

    const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w96s18b', 'template_z0ezm8a', form.current, 'KkV3oga3R29DyR3Tc')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });

  };


  const handleSubmit =(category,value) => {
    
    setFormDetails({
        ...formDetails,
        [category]: value
    })
  };


  const handleButtonClick = () => {
    
    setIsClicked('Sent Succesfully')
    setFormDetails(formInitialDetails)

    setTimeout(() => {
        freshPage()
    }, 3000);

  };

  const freshPage = () => {
      setIsClicked('Send')
  }

console.log(formDetails)
 

  return (
    <section className="contact" id="connect">
      <Container className="contactContainer">
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            
            <form ref={form} onSubmit={sendEmail} >
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" name={"first_name"}
                    placeholder="First Name" value={formDetails.firstName}
                    onChange={(e)=>handleSubmit('firstName',e.target.value)}
                   />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text"  name={"last_name"}
                    placeholder="Last Name" value={formDetails.lastName}
                    onChange={(e)=>handleSubmit('lastName',e.target.value)}
                    />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" name={"user_email"}
                    placeholder="Email Address" value={formDetails.email}
                    onChange={(e)=>handleSubmit('email',e.target.value)
                      }
                   />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" name={"user_number"}
                    placeholder="Phone Number" value={formDetails.phone}
                    onChange={(e)=>handleSubmit('phone',e.target.value)
                      }
                    />
                </Col>
                <Col>
                  <textarea row="6" name={"message"}
                    placeholder="Message"  value={formDetails.message}    
                    onChange={(e)=>handleSubmit('message',e.target.value)
                      }         
                  ></textarea>      
                   <button type="submit" onClick={handleButtonClick}><span>{isClicked}</span></button>
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



//    react code



import { useState } from "react";
import  { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
import {Container, Row, Col} from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg"
import freemailicon from '../assets/img/free-mail-icon.png'
import pngtreephoneicon from '../assets/img/pngtree-phone-icon.jpg'

export const Contacts = () => {

    const [isClicked, setIsClicked] = useState('Send');



    const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w96s18b', 'template_z0ezm8a', form.current, 'KkV3oga3R29DyR3Tc')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });

     
  };

  const handleButtonClick = () => {
    
    setIsClicked('Sent Succesfully')
     
  };


 




  return (
    <section className="contact" id="connect">
      <Container className="contactContainer">
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            
            <form ref={form} onSubmit={sendEmail} >
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" name={"first_name"}
                    placeholder="First Name"
                   />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text"  name={"last_name"}
                    placeholder="Last Name" 
                   
                    />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" name={"user_email"}
                    placeholder="Email Address" 
                    
                   />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" name={"user_number"}
                    placeholder="Phone Number" 
                    
                    />
                </Col>
                <Col>
                  <textarea row="6" name={"message"}
                    placeholder="Message" 
                           
                  ></textarea>      
                   <button type="submit" onClick={handleButtonClick}><span>{isClicked}</span></button>
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


animate__backInDown