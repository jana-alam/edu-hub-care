import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../../images/learning-school.svg";
import MyButton from "../MyButton/MyButton";
import "./Hero.css";

const Hero = () => {
  return (
    // Hero Section
    <div className="hero-section p-5">
      <Container>
        <Row lg={2} className="align-items-center">
          <Col>
            <h1 className="text-white display-3 fw-bold">
              Get your <span className="theme-color">Courses!</span>
            </h1>
            <p className="hero-description mb-5">
              We are providing the world best online courses with live support
              where students will feel like in school.
            </p>
            <MyButton link="/courses">Enroll Now</MyButton>
          </Col>
          <Col>
            <img src={heroImg} alt="Hero Banner" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
