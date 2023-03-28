import React from 'react';
import './about.css';
import about_i_image from '../../images/about-inset.jpg';
import about_m_image from '../../images/about-main.jpg';
import { Container, Row, Col} from 'react-bootstrap';

function About() {
  return (
    <div id="about" className="about-main pad-bottom-80"><br/><br/>
      <Container >
        <Row className="about-row">
          <Col  >
            <h2 className="block-title">About Us</h2>
            <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
            <p>Welcome to our restaurant app! We are a team of passionate food enthusiasts dedicated to providing our customers with an exceptional dining experience.</p>
            <p>Our restaurant is committed to using only the freshest and highest quality ingredients in our dishes. We work with local farmers and suppliers to ensure that our ingredients are sustainably sourced and meet our high standards for taste and quality.</p>
            <p>We believe that dining is more than just a meal, it's an experience. That's why we pride ourselves on providing attentive and friendly service in a welcoming and comfortable environment.</p>
          </Col>

          <Col  >
            <div className="about-images">
              <img className="about-main" src={about_m_image} alt="About Main Image" />
              <img className="about-inset" src={about_i_image} alt="About Inset Image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;