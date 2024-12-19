import { useState } from 'react';

import UserInput from "./components/UserInput"
import Results from './components/Results';

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = inputValues.duration >= 1;

  function handleOnChange(property, value) {
    setInputValues(prevInput => {
      return {
          ...prevInput,
          [property]: +value
      }
    })
  }

  return (<>
    <UserInput handleOnChange={handleOnChange} inputValues={inputValues} />
    { inputIsValid ? <Results input={inputValues} />
                   : <p className='center'>Oops, sorry, durations must be a positive number</p> }
    </>
  )
}

export default App
