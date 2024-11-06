import React, { useState } from 'react';
import './index.css';

import UserInput from './assets/UserInput/userInput';
import Header from './assets/Header/header';
import ResultsTable from './assets/resultsTable/resultsTable';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (input) => {
    setUserInput(input);
  };

  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

 
  return (
    <div className="App">
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInput && <p style={{ textAlign: 'center' }}>No investment calculated yet.</p>}
      {userInput && <ResultsTable data={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default App;