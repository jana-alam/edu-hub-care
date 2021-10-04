import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import MyButton from "../MyButton/MyButton";
import PageBanner from "../PageBanner/PageBanner";

const Contact = () => {
  return (
    <div>
      <PageBanner>Contact</PageBanner>
      <section className="bg-light py-5">
        <Container>
          <Row g={4} className="align-items-center">
            <Col md={6}>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Country</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to receive newsletter"
                  />
                </Form.Group>
                <MyButton>Submit</MyButton>
              </Form>
            </Col>
            <Col md={6} className="me-auto">
              <img
                src="https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg"
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
