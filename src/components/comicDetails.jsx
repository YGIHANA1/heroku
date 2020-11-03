import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Card, Badge, Image } from 'react-bootstrap'
import comics from "../data/comics.json"

class comicDetail extends React.Component {
    state = {
        comic: null,
        loading: true
    }

    componentDidMount = () => {
        const comicId = this.props.match.params.id;
        console.log('COMICID IS --> ', comicId)
        const comic = comics.find(comic => comicId === comic.id.toString())
        console.log('Comic --> ', comic)
        this.setState({ comic, loading: false })
    }

    render() {
        console.log('COMICDETAIL PROPS --> ', this.props)
        return (
            <Container className="bg-danger mt-3">
                {this.state.loading && <h1>LOADING...</h1>}
                {this.state.comic && (
                    <>
                        <Row>
                            <Col>
                                <Row className="mt-4 mb-2">
                                    <Col md={3}>
                                        <Image src={this.state.comic.imageUrl} className="img-fluid" alt="comic" style={{cursor:"pointer"}}/>
                                    </Col>
                                    <Col md={9}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{this.state.comic.title}</Card.Title>
                                                <Card.Subtitle><Badge variant="danger">{this.state.comic.label}</Badge></Card.Subtitle>
                                                <Card.Text>{this.state.comic.Description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                      
                    </>
                )}
                {!this.state.comic && <h1>NO Comics FOUND</h1>}
            </Container>
        )
    }
}

export default comicDetail