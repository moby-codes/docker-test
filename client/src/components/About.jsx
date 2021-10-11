import React from 'react'
import { Container } from 'react-bootstrap';
export const About = () => {
  return (
    <>
    <div className="about_us">
      <Container>
        <h3> This app was created to develop a fun learning enviroment for kids. Introducing fundamental coding concepts, 
        Children can go through various quizzes and answer the given questions. With multiple themes to choose from, coding has never been this fun and simple before. Code4Fun, putting the FUN back into fundamental concepts</h3>
      </Container>
    </div>
      <Container>
        <h2>Founders:</h2>
          <p>Mubashar Ali</p>
          <p>Ian King</p>
          <p>Ed Packard</p>
          <p>Graeme Stirling</p>
      </Container>
    </>
  )
}

export default About;
