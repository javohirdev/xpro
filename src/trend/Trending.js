import React from 'react';
import Trend from '../JSON/trending.json';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

const Trending = () => {
    return(
        <div className="trending">
            <div className="pageTitles">
                <p>Explore Awesome Products</p>
                <h4>New Collection</h4>
            </div>
            <Container className="trendingCards">
                <Row>
                    {Trend.map((post) => {
                        return (
                            <Col md="3">
                                <Card>
                                    <CardHeader>
                                        <img src={post.img} alt="product image"/>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="infoTitle">
                                            <p className="name">{post.name}</p>
                                            <span className="price">{post.price}</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                    </Row>
            </Container>
        </div>
    )
}

export default Trending;