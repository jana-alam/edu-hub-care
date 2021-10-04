import React from "react";
import { Container, Row } from "react-bootstrap";
import HorizontalCourse from "../HorizontalCourse/HorizontalCourse";
import MyButton from "../MyButton/MyButton";
import useCourses from "../../hooks/useCourses";

const Courses = () => {
  // courses loaded from custom hook
  const [courses] = useCourses();
  return (
    //latest courses
    <Container className="p-4">
      <div className="text-center mt-4">
        <h1 className="text-dark-50">Latest Courses</h1>
      </div>
      <Row md={2} className="g-4 mt-4">
        {courses.slice(0, 4).map((course) => (
          <HorizontalCourse key={course.id} course={course}></HorizontalCourse>
        ))}
      </Row>
      <div className="text-center pt-4 my-5">
        <MyButton link="/courses">Explore More Courses</MyButton>
      </div>
    </Container>
  );
};

export default Courses;
