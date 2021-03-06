import React from 'react'
import { Container } from "react-bootstrap";
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import 'animate.css';


const QuizDashboard = () => {

const buttonText = "Start Quiz"
const spaceText = "Learn how to program DIANE-1000, a rocket ship computer, as you blast off into space. You will find out about variables, operators and data types."
const raceCarText = "Program a racing car's computer so that your team can win the race. You will learn about variables, boolean logic, if/else statements, and while loops."
const fantasyText = "Set off on an adventure to defeat the evil wizard with your mastery of coding concepts. You will cover loops and collections in this story."


  return (
    <>
      <br />
        <div> </div>
      <Container>
        <h2 id="custom-font-2-centre">Welcome budding coder!</h2> <br/>
        <h2 id="custom-font-2-centre">We are delighted you have chosen Code4Fun.</h2>
        <h2 id="custom-font-2-centre">Please select any story below to start your coding adventure...</h2>
      </Container>
    <br />
      <div className="qcard">
        <Container>
        <div class="animate__animated animate__fadeInLeft" >
          <div class="card text-white bg-success mb-3">
            <div class="card-header custom-font-2">Theme: Space</div>
              <div class="card-body">
                <h4 class="card-title custom-font-2"><strong>A voyage to the Moon</strong></h4>
                <p class="font-weight card-text custom-font-2">{spaceText}</p>
                <Link to="/spacequiz">
                  <div className="QcardButton">
                    <button type="button" class="custom-font-2 btn btn-warning">{buttonText}</button> 
                  </div> 
                </Link>
            </div>
          </div>
          </div>
        </Container>
      </div>


      <div className="qcard">
      <Container>      
      <div class="animate__animated animate__jackInTheBox" >
        <div class="card text-white bg-warning mb-3">
          <div class="card-header custom-font-2">Theme: Racing Cars</div>
            <div class="card-body">
              <h4 class="card-title custom-font-2"><strong>Formula Fun</strong></h4>
              <p class="font-weight card-text custom-font-2">{raceCarText}</p>                
              <Link to="/racecarsquiz">
                <div className="QcardButton">
                  <button type="button" class="custom-font-2 btn btn-success">{buttonText}</button> 
                </div>  
              </Link>
          </div>
        </div>
        </div>
      </Container>
      </div>

      <div className="qcard">
        <Container>
        <div class="animate__animated animate__fadeInRight" > 
          <div class="card text-white bg-info mb-3">
            <div class="card-header custom-font-2">Theme: Fantasy</div>
              <div class="card-body">
                <h4 class="card-title custom-font-2"><strong>An epic Quest</strong></h4>
                <p class="font-weight card-text custom-font-2">{fantasyText}</p>
                <Link to="/fantasyquiz">
                  <div className="QcardButton">
                    <button type="button" class="custom-font-2 btn btn-danger">{buttonText}</button> 
                  </div> 
                </Link>
            </div>
          </div>
      </div>
        </Container>
      </div>

    </>
  )
}

export default QuizDashboard;
