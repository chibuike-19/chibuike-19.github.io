import { Col } from "react-bootstrap";
import TagWrapper from "./TagWrapper";

export const ProjectCard = ({ title, description, imgUrl, tags, sourceCode, liveDemo}) => {
  return (
    <Col size={12} gap={8} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className='proj-img' alt='project images' />
        <div className="proj-txtx">
          <div><h4>{title}</h4>
          <span>{description}</span><br/>
          </div>
          <div className="tags">{tags.map(tag => (
            <TagWrapper tags={tag} />
          ))}</div>
          <div className="link-container">
            <span className="project-link"><a href={sourceCode} target='_blank'>Source Code</a></span>
            <span className="project-link"><a href={liveDemo} target='_blank'>Live Demo</a></span>
          </div>
        </div>
      </div>
    </Col>
  )
}
