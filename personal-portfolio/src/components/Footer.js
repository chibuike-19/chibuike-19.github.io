import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/latest-logo.gif";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/gmail.svg";
import navIcon3 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/emmanuel-obiechina-341298235/" target='_blank' rel='noreferrer'><img src={navIcon1} alt="Icon" /></a>
              <a href="mailto:emmanuelobiechina8@gmail.com"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.github.com/chibuike-19" target='_blank' rel='noreferrer'><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
