import React from 'react';
import logofooter from '../images/logo.png';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="brand">
                            <img src={logofooter} />
                            <p className="brandText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>
                        </div>
                    </Col>
                    <Col md="4">
                        <ul className="products">
                            <h4 className="theme">Legals</h4>
                            <li>
                                <a href="#">
                                    Trending
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    My Account
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Vendors
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Brands
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Storefront
                                </a>
                            </li>
                        </ul>
                        <ul className="products">
                            <h4 className="theme">Legals</h4>
                            <li>
                                <a href="#">
                                    License
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Refund policy
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contacts
                                </a>
                            </li>
                        </ul>
                        <ul className="products">
                            <h4 className="theme">Contacts</h4>
                            <p className="sampleText">Fell free get in touch with us via phone or send us a message</p>
                            <li>
                                <a href="tel:+1 234 567 89 10">
                                    +1 234 567 89 10
                                </a>
                            </li>
                            <li>
                                <a href="mailto:support@khoomi.com">
                                    support@khoomi.com
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;