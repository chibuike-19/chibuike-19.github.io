import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} gap={8} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className='proj-img' alt='project images' />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
