import './footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SendIcon from '@mui/icons-material/Send';
var logo = require('../../images/logo.png')

const Footer = () => {
    return (
        <div>
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
                                        <a href="https://www.facebook.com/">
                                            <FacebookIcon style={{ color: 'white' }} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                                            <TwitterIcon style={{ color: 'white' }} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1GCEA_enIN1038IN1039&oq=goo&aqs=chrome.1.0i10i131i355i433i512j46i10i131i199i433i465i512j0i10i131i433i512j69i57j0i10i433i512j69i60l3.2847j0j4&sourceid=chrome&ie=UTF-8">
                                            <GoogleIcon style={{ color: 'white' }} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://in.pinterest.com/">
                                            <PinterestIcon style={{ color: 'white' }} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.127961666300_crid.651859540488_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.1007768&mcid=6844056167778418689&cid=&gclid=EAIaIQobChMI-Obq3p37_QIV1ZpmAh3D_gvAEAAYASAAEgIBGvD_BwE&gclsrc=aw.ds">
                                            <LinkedInIcon style={{ color: 'white' }} />
                                        </a>
                                    </li>
                                </ul>

                            </div></Col>
                            <Col>
                                <div class="footer-box-b">
                                    <h3>New Menu</h3>
                                    <ul>
                                        <li><a href="#">Pamphlet fry</a></li><br />
                                        <li><a href="#">Chicken Ghee Rost</a></li><br />
                                        <li><a href="#">Spicy  Noodles</a></li><br />
                                        <li><a href="#">Crabs Roast</a></li><br />
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <div class="footer-box-c">
                                    <h3>Contact Us</h3>
                                    <p>
                                       
                                        <span>10 Cross Freinds Layout, Mahadevapura,Bangalore</span>
                                    </p>
                                    <p>
                                        
                                        <span>
                                            +91 9876543210
                                        </span>
                                    </p>
                                    <p>
                                      
                                        <span><a href="https://in.pinterest.com/">support@foodfunday.com</a></span>
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
        </div>
    );
}

export default Footer;
