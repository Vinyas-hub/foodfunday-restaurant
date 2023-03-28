import React , { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';

import starter_1 from '../../images/menu-item-thumbnail-01.jpg'
import starter_2 from '../../images/menu-item-thumbnail-02.jpg'
import starter_3 from '../../images/menu-item-thumbnail-03.jpg'
import './ourmenu.css';
const Index = () => {
    const [activeTab, setActiveTab] = useState('starters');
    const [activeTab1, setActiveTab1] = useState('starters');
  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }

    return (
        <div>
            <div id="menu" class="menu-main pad-top-100 pad-bottom-100">

                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                    <h2 className="block-title text-center">
                        Our Menu
                    </h2>
                    <p className="title-caption text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>

                <div class="slider slider-nav">
                <Container>
        <Row>
          <Col sm={12}>
            <Nav variant="tabs" className="justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="starters" onClick={() => handleTabClick('starters')}>
                  <div className="tab-title-menu">
                    <h2>STARTERS</h2>
                    <p> <i className="flaticon-canape"></i> </p>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="main-dishes" onClick={() => handleTabClick('main-dishes')}>
                  <div className="tab-title-menu">
                    <h2>MAIN DISHES</h2>
                    <p> <i className="flaticon-dinner"></i> </p>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="desserts" onClick={() => handleTabClick('desserts')}>
                  <div className="tab-title-menu">
                    <h2>DESSERTS</h2>
                    <p> <i className="flaticon-desert"></i> </p>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="drinks" onClick={() => handleTabClick('drinks')}>
                  <div className="tab-title-menu">
                    <h2>DRINKS</h2>
                    <p> <i className="flaticon-coffee"></i> </p>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
                <Container>
                    <Row>
                        <Col>
                            <div class="offer-item">
                                <img src={starter_1} />
                                <div>
                                    <h3>GARLIC BREAD</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                    </p>
                                </div>
                                <span class="offer-price">$8.5</span>
                            </div>
                        </Col>
                        <Col>
                            <div class="offer-item">
                                <img src={starter_2} />
                                <div>
                                    <h3>MIXED SALAD</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                    </p>
                                </div>
                                <span class="offer-price">$25</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div class="offer-item">
                                <img src={starter_3} />
                                <div>
                                    <h3>MEAT FEAST PIZZA</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                    </p>
                                </div>
                                <span class="offer-price">$5</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
</div>
            </div>
        </div>
    );
}

export default Index;
