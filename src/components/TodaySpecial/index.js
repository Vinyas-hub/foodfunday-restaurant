import React from 'react';
import './today.css';
import spimg1 from '../../images/special-menu-1.jpg';
import spimg2 from '../../images/special-menu-2.jpg';
import spimg3 from '../../images/special-menu-3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Today() {
    return (
        <div className="special-menu pad-top-100 parallax">
            <div className="container">
                <Container>
                    <Row>
                        <Col>
                            <h2 class="block-title color-white text-center"> Today's Special </h2>
                            <h5 class="title-caption text-center">Welcome to our restaurant app! Today's special is a mouth-watering dish that will delight your taste buds. </h5><br/><br/>
                            <div class="special-box">
                                <Carousel>
                                    <Carousel.Item>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img src={spimg1} alt="Card image" />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>SALMON STEAK</Card.Title>
                                                            <Card.Text>
                                                            Salmon is a great source of protein, healthy fats, and various essential vitamins and minerals.
                                                            </Card.Text>
                                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>

                                                </Col>
                                                <Col>
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img src={spimg2} alt="Card image" />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>PIZZAA</Card.Title>
                                                            <Card.Text>
                                                            pizza, dish of Italian origin consisting of a flattened
                                                             disk of bread dough topped with some combination of olive oil, oregano ...
                                                            </Card.Text>
                                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>

                                                </Col>
                                                <Col>
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img src={spimg3} alt="Card image" />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>VEG ROLL</Card.Title>
                                                            <Card.Text>
                                                            The stuffing is made with mix veggies like 
                                                            cauliflower, green peas, carrots, french beans, capsicum and potatoes
                                                            </Card.Text>
                                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img src={spimg3} alt="Card image" />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>VEG ROLL</Card.Title>
                                                            <Card.Text>
                                                            The stuffing is made with mix veggies like 
                                                            cauliflower, green peas, carrots, french beans, capsicum and potatoes
                                                            </Card.Text>
                                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>

                                                </Col>
                                                <Col>
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img src={spimg1} alt="Card image" />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>SALMON STEAK</Card.Title>
                                                            <Card.Text>
                                                            Salmon is a great source of protein, healthy fats, and various essential vitamins and minerals.
                                                            </Card.Text>
                                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>

                                                </Col>
                                                <Col>
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img src={spimg2} alt="Card image" />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>PIZZAA</Card.Title>
                                                            <Card.Text>
                                                            pizza, dish of Italian origin consisting of a flattened disk
                                                             of bread dough topped with some combination of olive oil, oregano ...
                                                            </Card.Text>
                                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                                        </Card.ImgOverlay>
                                                    </Card>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </Carousel.Item>
                                </Carousel>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default Today;