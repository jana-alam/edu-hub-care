import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageBanner from "../PageBanner/PageBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBookOpen,
  faAward,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* About Us */}
      <PageBanner>About Us</PageBanner>
      <Container>
        {/* About Our System */}
        <section>
          <Row md={4} g={3} className="text-center p-5">
            <Col>
              <span className="about-icon" style={{ color: "#b70f4f" }}>
                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
              </span>
              <h4 className="mt-4 text-muted">
                We provide the best way to teach the student helped them to
                develop.
              </h4>
            </Col>
            <Col>
              <span className="about-icon" style={{ color: "#0fb751" }}>
                <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
              </span>
              <h4 className="mt-4 text-muted">
                We always prefer to follow the book rules along with practical
                manner.
              </h4>
            </Col>
            <Col>
              <span className="about-icon" style={{ color: "#a11bd9f2" }}>
                <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
              </span>
              <h4 className="mt-4 text-muted">
                We arrange awards for the best student enrolled the course and
                perform well.
              </h4>
            </Col>
            <Col>
              <span className="about-icon" style={{ color: "#d9841bf2" }}>
                <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
              </span>
              <h4 className="mt-4 text-muted">
                You will be entitled with a certificate which will help you to
                get job.
              </h4>
            </Col>
          </Row>
        </section>
      </Container>
      {/* About our process */}
      <section className="bg-light py-5">
        <Container className="py-5">
          <Row g={4} className="align-items-center">
            <Col md={6} className="me-auto">
              <img
                src="https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg"
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col md={5}>
              <div className="d-flex my-4">
                <h2 className="bg-primary px-3 py-1 rounded-circle me-2 text-white">
                  1
                </h2>
                <h2>Creat An Account</h2>
              </div>
              <div className="d-flex my-4">
                <h2 className="bg-primary px-3 py-1 rounded-circle me-2 text-white">
                  2
                </h2>
                <h2>Enroll Your Courses</h2>
              </div>
              <div className="d-flex my-4">
                <h2 className="bg-primary px-3 py-1 rounded-circle me-2 text-white">
                  3
                </h2>
                <h2>Learn With Us</h2>
              </div>
              <div className="d-flex my-4">
                <h2 className="bg-primary px-3 py-1 rounded-circle me-2 text-white">
                  4
                </h2>
                <h2>Get Your Certificate</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
