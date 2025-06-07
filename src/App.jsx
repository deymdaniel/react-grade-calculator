import React, { useState } from "react";

const App = () => {
  const [quiz, setQuiz] = useState(0);
  const [lab, setLab] = useState(0);
  const [final, setFinal] = useState(0);
  const [grade, setGrade] = useState("");
  const [finalGrade, setFinalGrade] = useState("");
  const calculateGrade = () => {
    setGrade(quiz * 0.3 + lab * 0.3 + final * 0.4).toFixed(2);
  };

  const calculateFinalGrade = () => {
    const numericGrade = grade;
    let calculatedFinalGrade = "";
    if (numericGrade >= 98.51 && numericGrade <= 100) {
      calculatedFinalGrade = "4.0";
    } else if (numericGrade >= 96.51 && numericGrade <= 98.5) {
      calculatedFinalGrade = "3.75";
    } else if (numericGrade >= 94.51 && numericGrade <= 96.5) {
      calculatedFinalGrade = "3.5";
    } else if (numericGrade >= 92.51 && numericGrade <= 94.5) {
      calculatedFinalGrade = "3.25";
    } else if (numericGrade >= 90.51 && numericGrade <= 92.5) {
      calculatedFinalGrade = "3.0";
    } else if (numericGrade >= 88.51 && numericGrade <= 90.5) {
      calculatedFinalGrade = "2.75";
    } else if (numericGrade >= 86.51 && numericGrade <= 88.5) {
      calculatedFinalGrade = "2.5";
    } else if (numericGrade >= 84.51 && numericGrade <= 86.5) {
      calculatedFinalGrade = "2.25";
    } else if (numericGrade >= 82.51 && numericGrade <= 84.5) {
      calculatedFinalGrade = "2.0";
    } else if (numericGrade >= 80.51 && numericGrade <= 82.5) {
      calculatedFinalGrade = "1.75";
    } else if (numericGrade >= 78.51 && numericGrade <= 80.5) {
      calculatedFinalGrade = "1.5";
    } else if (numericGrade >= 76.51 && numericGrade <= 78.5) {
      calculatedFinalGrade = "1.25";
    } else if (numericGrade >= 74.51 && numericGrade <= 76.5) {
      calculatedFinalGrade = "1.0";
    } else if (numericGrade >= 50 && numericGrade <= 74.5) {
      calculatedFinalGrade = "0.0";
    } else if (numericGrade < 50 && numericGrade >= 0) {
      calculatedFinalGrade = "0.0";
    } else {
      calculatedFinalGrade = "N/A";
    }
    setFinalGrade(calculatedFinalGrade);
  };
  return (
    <div className='bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col justify-center items-center h-min bg-gray-100 border border-gray-200 rounded-4xl w-min p-12 gap-6'>
        <h1 className='text-2xl font-bold mb-4'>Grades Calculator</h1>
        <div>
          <h3>Quizzes</h3>
          <input
            type='number'
            name='quiz'
            value={quiz}
            onChange={(e) => setQuiz(e.target.value)}
            id='quiz'
            className='border border-gray-300 rounded-md p-2'
          />
        </div>
        <div>
          <h3>Lab Activities</h3>
          <input
            type='number'
            name='lab'
            value={lab}
            onChange={(e) => setLab(e.target.value)}
            id='lab'
            className='border border-gray-300 rounded-md p-2'
          />
        </div>
        <div>
          <h3>Final Exam</h3>
          <input
            type='number'
            name='final'
            id='final'
            value={final}
            onChange={(e) => setFinal(e.target.value)}
            className='border border-gray-300 rounded-md p-2'
          />
        </div>
        <button
          className='bg-blue-500 text-white rounded-md p-2'
          onClick={() => {
            calculateGrade();
            calculateFinalGrade();
          }}
        >
          Calculate
        </button>
        <p>Grade: {grade}</p>
        <p>Final Grade: {finalGrade}</p>
      </div>
    </div>
  );
};

export default App;
