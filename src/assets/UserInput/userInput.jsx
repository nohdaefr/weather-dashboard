import { useState } from 'react';
import classes from './UserInput.css';

const initialUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };
          
  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => { 
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
  <div className="info-box">

    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => inputChangeHandler('current-savings', event.target.value)}
            value={userInput['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Contribution ($)</label>
          <input
            onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)}
            value={userInput['yearly-contribution']}
            type="number"
            id="yearly-contribution"
          />
        </p>
        <p>
          <label htmlFor="expected-return">Expected Return (%)</label>
          <input
            onChange={(event) => inputChangeHandler('expected-return', event.target.value)}
            value={userInput['expected-return']}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Duration (years)</label>
          <input
            onChange={(event) => inputChangeHandler('duration', event.target.value)}
            value={userInput.duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <div className={classes['actions']}>
        <button type="submit">Calculate</button>
        <button type="button" onClick={resetHandler}>Reset</button>
      </div>
    </form>
    </div>
  );
};

export default UserInput;

