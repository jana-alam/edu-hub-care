import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./HorizontalCourse.css";

const HorizontalCourse = (props) => {
  const { title, image, author, price, duration } = props.course;
  return (
    <Col>
      <Card className="border-0 shadow">
        <Row className="align-items-center">
          <Col md={5}>
            <Card.Img
              className="img-fluid rouded-start h-100 course-image"
              src={image}
            />
          </Col>
          <Col md={7}>
            <Card.Body className="py-2">
              <h4 className="course-title">{title}</h4>
              <span className="text-muted">-By {author}</span>
              <div className="mt-3 mb-0 d-flex justify-content-between align-items-center">
                <h5 className="m-0 course-price">${price}</h5>
                <span className="course-duration">{duration}</span>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default HorizontalCourse;
