import React from "react";
import { Container, Row } from "react-bootstrap";
import useCourses from "../../hooks/useCourses";
import PageBanner from "../PageBanner/PageBanner";
import VerticalCourse from "../VerticalCourse/VerticalCourse";

const AllCourses = () => {
  // data loaded from custom hook
  const [courses] = useCourses();
  return (
    // display all courses here
    <div className="all-courses">
      <PageBanner>All Courses</PageBanner>
      <Container className="p-4">
        <Row xs={1} md={3} className="g-4">
          {/* Vertical Laout courses shown */}
          {courses.map((course) => (
            <VerticalCourse key={course.id} course={course}></VerticalCourse>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllCourses;
