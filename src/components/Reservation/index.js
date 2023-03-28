// import React, { useState } from 'react';
// import './reservation.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import DatePick from "../datepicker";
// import TimePick from "../timepicker";
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DatePick from "../datepicker";
import TimePick from "../timepicker";

const Reservation = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [noOfPersons, setNoOfPersons] = useState('');
    const [preferredFood, setPreferredFood] = useState('');
    const [occasion, setOccasion] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!name) {
            errors.name = "Name is required";
            isValid = false;
        }

        if (!email) {
            errors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
            isValid = false;
        }

        if (!phone) {
            errors.phone = "Phone number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Phone number is invalid";
            isValid = false;
        }

        if (!noOfPersons) {
            errors.noOfPersons = "Number of persons is required";
            isValid = false;
        } else if (noOfPersons < 1 || noOfPersons > 10) {
            errors.noOfPersons = "Number of persons should be between 1 and 10";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Perform form submission logic here
        }
    };

    return (
        <Container>
            <Row>
                <div className="form-reservations-box">
                    <div>
                        <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                            <h2 className="block-title text-center">Reservations</h2>
                        </div>
                        <h4 className="form-title">BOOKING FORM</h4>
                        <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>
                        <form className="row" onSubmit={handleFormSubmit}>
                            <Col md={6}>
                                <div className="form-box">
                                    <input type="text" name="form_name" id="form_name" placeholder="Name" required="required" value={name} onChange={(event) => setName(event.target.value)} />
                                    {formErrors.name && <span className="error">{formErrors.name}</span>}
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-box">
                                    <input type="email" name="email" id="email" placeholder="E-Mail ID" required="required" value={email} onChange={(event) => setEmail(event.target.value)} />
                                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className="form-box">
                                    <input type="tel" name="phone" id="phone" placeholder="Phone" required="required" value={phone} onChange={(event) => setPhone(event.target.value)} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-box">
                                    <input type="number" name="no_of_persons" id="no_of_persons" placeholder="No of Persons" required="required" value={noOfPersons} onChange={(event) => setNoOfPersons(event.target.value)} />
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className="form-box">
                                    <DatePick />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div>
                                    <div className="form-box">
                                        <TimePick />
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-box">
                                    <input type="text" name="preferred_food" id="preferred_food" placeholder="Preferred Food" required="required" value={preferredFood} onChange={(event) => setPreferredFood(event.target.value)} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-box">
                                    <select name="occasion" id="occasion" className="selectpicker" value={occasion} onChange={(event) => setOccasion(event.target.value)}>
                                        <option value="" disabled>Occasion</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Anniversary">Anniversary</option>
                                    </select>
                                </div>
                            </Col>
                            <div >
                                <div class="reserve-book-btn text-center">
                                    <button class="hvr-underline-from-center" type="submit" value="SEND" id="submit">BOOK MY TABLE </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </Row>
        </Container>
    );
}

export default Reservation;