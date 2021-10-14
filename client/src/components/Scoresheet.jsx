import React from 'react'
import { Link } from 'react-router-dom'

export const Scoresheet = ({results}) => {

return (
  <>
  <div className="score-section">  
  <h2> How did you do? </h2>
  {results.map((element, index) => 
    { return element ? (
      <h3 class="custom-font-2">Question {index +1}: Correct - congratulations!</h3>
    ) : (
      <h3 class="custom-font-2">Question {index +1}: Bad luck - try again next time</h3>
    )}
  )}
    <Link to='/'>
        <div className='returnButton'>
          <button type="button"> Return to Home </button>
        </div>
    </Link>
  </div>
  </>
)
}
export default Scoresheet;


