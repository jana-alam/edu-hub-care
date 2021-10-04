import React from "react";
import "./VerticalCourse.css";

import { Card, Col } from "react-bootstrap";
import MyButton from "../MyButton/MyButton";

const VerticalCourse = (props) => {
  const { title, image, author, price, duration } = props.course;
  return (
    <Col className="mb-3">
      <Card className="vertical-course h-100 border-0 shadow">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <h4 className="course-title">{title}</h4>
          <span className="text-muted">-By {author}</span>
          <Card.Text className="mt-2">
            This is a longer card with supporting text below as a natural
          </Card.Text>
          <div className="mt-2 mb-0 d-flex justify-content-between align-items-center">
            <h5 className="m-0 course-price">${price}</h5>
            <span className="course-duration">{duration}</span>
          </div>
        </Card.Body>
        <MyButton link="/confirmed">Enroll Now</MyButton>
      </Card>
    </Col>
  );
};

export default VerticalCourse;
