import { Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl,appLink , githubLink}) => {
  return (
    <Col  sm={6} md={4}>
      
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={appLink} target="_blank">{description}</a>
          <div className="githubIcon">
            <a  href={githubLink}><Github/></a>
        </div>
        </div>
        
      </div>
      
    </Col>
  )
}
