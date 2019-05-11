import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const BookCard = (props) => {
    return (
        <div>
            <Card>
                <Row className="mt-3 mb-3    ">
                    <Col xs="10">
                    <CardTitle>Book Search</CardTitle>
                    </Col>
                    <Col xs="2">
                    <Button className="mr-2" color="info">View</Button>
                    <Button color="success">Save</Button>
                    </Col>
                </Row>
                
                <CardSubtitle>Book</CardSubtitle>

                <CardBody>
                    <Row>
                        <Col xs="3">
                            <CardImg top width="20%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </Col>
                        <Col xs="9">
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </Col>
                    </Row>


                    
                </CardBody>
            </Card>
        </div>
    );
};

export default BookCard;