
import certificate1 from './assets/img/certificate1.png';
import certificate2 from './assets/img/certificate2.png'
import certificate3 from './assets/img/certificate3.png'
import { Container,Row, Col } from 'react-bootstrap';

export const Certificates = () => {
  return (
    <section className='certSection' id= "certificate">
      <Container className='certContainer' >
        <Row className='certRow'>
        <div className='certificateTitle'>Cretificates</div>
          <Col xl= {5}  md={4} xs={12}>
            
          <img  src={certificate1} alt=''/>
          </Col>
          <Col xl= {4} md={4} xs={12}>
            
            <img  src={certificate2} alt=''/>
          </Col>
          <Col xl= {3} md={4} xs={12}>
            
            <img  src={certificate3} alt=''/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
