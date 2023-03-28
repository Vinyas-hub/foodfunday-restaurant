import React from 'react';
import './banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Container,Col } from 'react-bootstrap';

const Banner = () => {
    return (
        <div id="banner" className="banner full-screen-mode parallax">
            <Container  className="container pr">
                <Col md={12} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="banner-static">
                        <div className="banner-text">
                            <div className="banner-cell">
                                <h1>Dinner with us Family </h1>
                                <h2 >Accidental appearances </h2>
                                <p>Welcome to our restaurant app!</p>
                                <div className="book-btn">
                                    <a href="#reservation" className="table-btn hvr-underline-from-center">Book my Table</a>
                                </div>


                            </div>

                        </div>

                    </div>

                </Col>

            </Container >

        </div>

    );
};

export default Banner;