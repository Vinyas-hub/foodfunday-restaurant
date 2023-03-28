import { color, button } from "@mui/system";
// import { styles } from "styles.css";
// import "../node_modules/bootsrap/dist/css/bootsrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import special_menu_1 from '../images/special-menu-1.jpg'
import special_menu_2 from '../images/special-menu-2.jpg'
import special_menu_3 from '../images/special-menu-3.jpg'
import starter_1 from '../images/menu-item-thumbnail-01.jpg'
import starter_2 from '../images/menu-item-thumbnail-02.jpg'
import starter_3 from '../images/menu-item-thumbnail-03.jpg'
import DatePick from "../components/datepicker";
import TimePick from "../components/timepicker";
import SendIcon from '@mui/icons-material/Send';
import '../css/styles.css'
import { Carousel } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
const about_insert = require('../images/about-inset.jpg')
const about_main = require('../images/about-main.jpg')
var logo = require('../images/logo.png')





function Rest() {
    return (
        <html>

            <head>
                <title>Food Funday Restaurant </title>

                <link rel="stylesheet" href="css/all.css" />

            </head>
            <body>
                <div id="loader">
                    <div id="status"></div>
                </div>

                <div id="site-header">
                    <header id="header" class="header-block-top">
                        <div class="container">
                            <div class="row">
                                <div class="main-menu">
                                    <nav class="navbar navbar-default" id="mainNav">
                                        <div class="navbar-header">

                                            <div class="logo">
                                                <a class="navbar-brand js-scroll-trigger logo-header" href="#">
                                                    <img src={logo} />
                                                </a>
                                            </div>
                                        </div>
                                        <div id="navbar" class="navbar-collapse collapse">
                                            <ul class="nav navbar-nav navbar-right">
                                                <li class="active"><a href="#banner">Home</a></li>
                                                <li><a href="#about">About us</a></li>
                                                <li><a href="#menu">Menu</a></li>
                                                <li><a href="#reservation">Reservaion</a></li>
                                                <li><a href="#footer">Contact us</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div id="banner" class="banner full-screen-mode parallax">
                    <div class="container pr">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="banner-static">
                                <div class="banner-text">
                                    <div class="banner-cell">
                                        <h1>Dinner with us  Family</h1>
                                        <h2>Accidental appearances </h2>
                                        <p>Welcome to our restaurant app! </p>
                                        <div class="book-btn">
                                            <a href="#reservation" class="table-btn hvr-underline-from-center">Book my Table</a>
                                        </div>
                                        <a href="#about">
                                            <div class="mouse"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="about" class="about-main pad-top-100 pad-bottom-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h2 class="block-title"> About Us </h2>
                                    <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
                                    <p> Welcome to our restaurant app! We are a team of passionate food enthusiasts dedicated to providing our customers with an exceptional dining experience. </p>

                                    <p> Our restaurant is committed to using only the freshest and highest quality ingredients in our dishes. We work with local farmers and suppliers to ensure that our ingredients are sustainably sourced and meet our high standards for taste and quality.</p>

                                    <p> We believe that dining is more than just a meal, it's an experience. That's why we pride ourselves on providing attentive and friendly service in a welcoming and comfortable environment. </p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <div class="about-images">
                                    <img class="about-inset" src={about_insert} />
                                        <img class="about-main" src={about_main} />
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="special-menu pad-top-100 parallax">
                    <div className="container">
                        <Container>
                            <Row>
                                <Col>
                                    <h2 class="block-title color-white text-center"> Today's Special </h2>
                                    <h5 class="title-caption text-center"> Welcome to our restaurant app! Today's special is a mouth-watering dish that will delight your taste buds. </h5>
                                    <div class="special-box">
                                        <Carousel>
                                            <Carousel.Item>
                                                <Container>
                                                    <Row>
                                                        <Col>
                                                            <Card className="bg-dark text-white">
                                                                <Card.Img src={special_menu_1} alt="Card image" />
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
                                                                <Card.Img src={special_menu_2} alt="Card image" />
                                                                <Card.ImgOverlay>
                                                                    <Card.Title>PIZZAA</Card.Title>
                                                                    <Card.Text>
                                                                    pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano ...
                                                                    </Card.Text>
                                                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                                                </Card.ImgOverlay>
                                                            </Card>

                                                        </Col>
                                                        <Col>
                                                            <Card className="bg-dark text-white">
                                                                <Card.Img src={special_menu_3} alt="Card image" />
                                                                <Card.ImgOverlay>
                                                                    <Card.Title>VEG ROLL</Card.Title>
                                                                    <Card.Text>
                                                                    The stuffing is made with mix veggies like cauliflower, green peas, carrots, french beans, capsicum and potatoes
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
                                                                <Card.Img src={special_menu_3} alt="Card image" />
                                                                <Card.ImgOverlay>
                                                                    <Card.Title>VEG ROLL</Card.Title>
                                                                    <Card.Text>
                                                                    The stuffing is made with mix veggies like cauliflower, green peas, carrots, french beans, capsicum and potatoes
                                                                    </Card.Text>
                                                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                                                </Card.ImgOverlay>
                                                            </Card>

                                                        </Col>
                                                        <Col>
                                                            <Card className="bg-dark text-white">
                                                                <Card.Img src={special_menu_1} alt="Card image" />
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
                                                                <Card.Img src={special_menu_2} alt="Card image" />
                                                                <Card.ImgOverlay>
                                                                    <Card.Title>PIZZAA</Card.Title>
                                                                    <Card.Text>
                                                                    pizza, dish of Italian origin consisting of a flattened disk of
                                                                     bread dough topped with some combination of olive oil, oregano ...
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
                <div id="menu" class="menu-main pad-top-100 pad-bottom-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h2 class="block-title text-center">
                                        Our Menu
                                    </h2>
                                    <p class="title-caption text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                </div>
                                <div class="tab-menu">
                                    <div class="slider slider-nav">
                                        <div class="tab-title-menu">
                                            <h2>STARTERS</h2>
                                            <p> <i class="flaticon-canape"></i> </p>
                                        </div>
                                        <div class="tab-title-menu">
                                            <h2>MAIN DISHES</h2>
                                            <p> <i class="flaticon-dinner"></i> </p>
                                        </div>
                                        <div class="tab-title-menu">
                                            <h2>DESERTS</h2>
                                            <p> <i class="flaticon-desert"></i> </p>
                                        </div>
                                        <div class="tab-title-menu">
                                            <h2>DRINKS</h2>
                                            <p> <i class="flaticon-coffee"></i> </p>
                                        </div>
                                    </div>
                                    <div class="slider slider-single">
                                        <div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
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
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
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
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                                <div class="offer-item">
                                                    <img src={starter_3} />
                                                    <div>
                                                        <h3>BBQ CHICKEN WINGS</h3>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                        </p>
                                                    </div>
                                                    <span class="offer-price">$10</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                                <div class="offer-item">
                                                    <img src="images/menu-item-thumbnail-04.jpg" alt="" class="img-responsive" />
                                                    <div>
                                                        <h3>MEAT FEAST PIZZA</h3>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                        </p>
                                                    </div>
                                                    <span class="offer-price">$5</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                                <div class="offer-item">
                                                    <img src="images/menu-item-thumbnail-05.jpg" alt="" class="img-responsive" />
                                                    <div>
                                                        <h3>CHICKEN TIKKA MASALA</h3>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                        </p>
                                                    </div>
                                                    <span class="offer-price">$15</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                                <div class="offer-item">
                                                    <img src="images/menu-item-thumbnail-06.jpg" alt="" class="img-responsive" />
                                                    <div>
                                                        <h3>SPICY MEATBALLS</h3>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                        </p>
                                                    </div>
                                                    <span class="offer-price">$6.5</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                                <div class="offer-item">
                                                    <img src="images/menu-item-thumbnail-07.jpg" alt="" class="img-responsive" />
                                                    <div>
                                                        <h3>CHOCOLATE FUDGECAKE</h3>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                        </p>
                                                    </div>
                                                    <span class="offer-price">$4.5</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                                <div class="offer-item">
                                                    <img src="images/menu-item-thumbnail-08.jpg" alt="" class="img-responsive" />
                                                    <div>
                                                        <h3>CHICKEN TIKKA MASALA</h3>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                        </p>
                                                    </div>
                                                    <span class="offer-price">$9.5</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                                <div class="offer-item">
                                                    <img src="images/menu-item-thumbnail-09.jpg" alt="" class="img-responsive" />
                                                    <div>
                                                        <h3>CHICKEN TIKKA MASALA</h3>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                        </p>
                                                    </div>
                                                    <span class="offer-price">$10</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                                <div class="offer-item">
                                                    <img src="images/menu-item-thumbnail-10.jpg" alt="" class="img-responsive" />
                                                    <div>
                                                        <h3>MEAT FEAST PIZZA</h3>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                        </p>
                                                    </div>
                                                    <span class="offer-price">$12.5</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                                <div class="offer-item">
                                                    <img src="images/menu-item-thumbnail-09.jpg" alt="" class="img-responsive" />
                                                    <div>
                                                        <h3>CHICKEN TIKKA MASALA</h3>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                        </p>
                                                    </div>
                                                    <span class="offer-price">$9.5</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                                <div class="offer-item">
                                                    <img src="images/menu-item-thumbnail-08.jpg" alt="" class="img-responsive" />
                                                    <div>
                                                        <h3>CHICKEN TIKKA MASALA</h3>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                        </p>
                                                    </div>
                                                    <span class="offer-price">$5.5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="reservation" class="reservations-main pad-top-100 pad-bottom-100">
                    <Container>
                        <Row>
                            <div class="form-reservations-box">
                                <div >
                                    <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <h2 class="block-title text-center">
                                            Reservations
                                        </h2>
                                    </div>
                                    <h4 class="form-title">BOOKING FORM</h4>
                                    <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>
                                    
                                    <form class="row">
                                    <Col md={6}>
                                        
                                            <div class="form-box">
                                                <input type="text" name="form_name" id="form_name" placeholder="Name" required="required" data-error="Firstname is required." />
                                            </div>
                                        
                                    </Col> 
                                    <Col md={6}>  
                                        {/* <div class="span6"> */}
                                            <div class="form-box">
                                                <input type="email" name="email" id="email" placeholder="E-Mail ID" required="required" data-error="E-mail id is required." />
                                            </div>
                                        {/* </div> */}
                                        </Col>
                                        <Col md={6}>
                                        <div class="span6">
                                            <div class="form-box">
                                                <input type="text" name="phone" id="phone" placeholder="contact no." />
                                            </div>
                                        </div>
                                        </Col>
                                        <Col md={6}>
                                        <div class="span6">
                                            <div class="form-box">
                                                <select name="no_of_persons" id="no_of_persons" class="selectpicker">
                                                    <option selected disabled>No. Of persons</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                        </div>
                                        </Col>
                                        
                                        
                                        <Col md={6}>
                                            <div class="span6">
                                                <div class="form-box">
                                                    <DatePick />
                                                </div>
                                            </div>
                                            </Col>
                                            <Col md={6}>
                                            <div class="span6">
                                                <div class="form-box">
                                                    <TimePick />
                                                </div>
                                            </div>
                                            </Col>
                                      
                                        
                                        <Col md={6}>
                                        <div class="span6">
                                            <div class="form-box">
                                                <select name="preferred_food" id="preferred_food" class="selectpicker">
                                                    <option selected disabled>preferred food</option>
                                                    <option>Indian</option>
                                                    <option>Continental</option>
                                                    <option>Mexican</option>
                                                </select>
                                            </div>
                                        </div>
                                        </Col>
                                        <Col md={6}>
                                        <div class="span6">
                                            <div class="form-box">
                                                <select name="occasion" id="occasion" class="selectpicker">
                                                    <option selected disabled>Occasion</option>
                                                    <option>Wedding</option>
                                                    <option>Birthday</option>
                                                    <option>Anniversary</option>
                                                </select>
                                            </div>
                                        </div>
                                        </Col>
                                        <div class="span12">
                                            <div class="reserve-book-btn text-center">
                                                <button class="hvr-underline-from-center" type="submit" value="SEND" id="submit">BOOK MY TABLE </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            </Row>
                            </Container>
                </div>

                <div id="footer" class="footer-main">
                    <div class="footer-news pad-top-100 pad-bottom-70 parallax">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <h2 class="ft-title color-white text-center"> Newsletter </h2>
                                        <p> Stay connected with us and never miss a beat. Our newsletter is the perfect way to stay up-to-date on all things related to our restaurant</p>
                                    </div>
                                    <form>
                                        <div class="form-box">
                                            <input type="text" name="form_name" id="form_name" placeholder="Enter your Email Id " required="required" data-error="Firstname is required." />
                                        </div>

                                        <a href="#"><SendIcon style={{ color: 'white' }} /></a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-box pad-top-70">
                        <Container>
                            <Row>
                                <div class="footer-logo">
                                    <div class="text-center">
                                        <img src={logo} />
                                    </div>
                                </div>
                                <Col><div class="footer-box-a">
                                    <h3>About Us</h3>
                                    <p>We are proud of what we have accomplished over the past 25 years, and we look forward to continuing to grow and serve our customers for many years to come."</p>
                                    <ul class="socials-box footer-socials pull-left">
                                        <li>
                                            <a href="#">
                                                <FacebookIcon style={{ color: 'white' }} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <TwitterIcon style={{ color: 'white' }} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <GoogleIcon style={{ color: 'white' }} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <PinterestIcon style={{ color: 'white' }} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <LinkedInIcon style={{ color: 'white' }} />
                                            </a>
                                        </li>
                                    </ul>

                                </div></Col>
                                <Col>
                                    <div class="footer-box-b">
                                        <h3>New Menu</h3>
                                        <ul>
                                            <li><a href="#">Pamphlet fry</a></li><br/>
                                            <li><a href="#">Chicken Ghee Rost</a></li><br/>
                                            <li><a href="#">Spicy  Noodles</a></li><br/>
                                            <li><a href="#">Crabs Roast</a></li><br/>
                                        </ul>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="footer-box-c">
                                        <h3>Contact Us</h3>
                                        <p>
                                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                                            <span>10 Cross Freinds Layout, Mahadevapura,Bangalore</span>
                                        </p>
                                        <p>
                                            <i class="fa fa-mobile" aria-hidden="true"></i>
                                            <span>
                                                +91 9876543210
                                            </span>
                                        </p>
                                        <p>
                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                            <span><a href="#">support@foodfunday.com</a></span>
                                        </p>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="footer-box-d">
                                        <h3>Opening Hours</h3>

                                        <ul>
                                            <li>
                                                <p>Monday - Thursday </p>
                                                <span> 11:00 AM - 9:00 PM</span>
                                            </li>
                                            <li>
                                                <p>Friday - Saturday </p>
                                                <span>  11:00 AM - 5:00 PM</span>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                            </Row>
                        </Container>


                    </div>
                </div>




            </body>
        </html>



    );
}
export default Rest