import React, { useState } from "react";

const App = () => {
  const [quiz, setQuiz] = useState(0);
  const [lab, setLab] = useState(0);
  const [final, setFinal] = useState(0);
  const [grade, setGrade] = useState("");
  const [finalGrade, setFinalGrade] = useState("");
  const calculateAndSetGrades = () => {
    const computedGrade = quiz * 0.3 + lab * 0.3 + final * 0.4;
    setGrade(computedGrade);

    let calculatedFinalGrade = "";
    const gradeNum = Number(computedGrade);

    if (gradeNum >= 98.51 && gradeNum <= 100) {
      calculatedFinalGrade = "4.0";
    } else if (gradeNum >= 96.51 && gradeNum <= 98.5) {
      calculatedFinalGrade = "3.75";
    } else if (gradeNum >= 94.51 && gradeNum <= 96.5) {
      calculatedFinalGrade = "3.5";
    } else if (gradeNum >= 92.51 && gradeNum <= 94.5) {
      calculatedFinalGrade = "3.25";
    } else if (gradeNum >= 90.51 && gradeNum <= 92.5) {
      calculatedFinalGrade = "3.0";
    } else if (gradeNum >= 88.51 && gradeNum <= 90.5) {
      calculatedFinalGrade = "2.75";
    } else if (gradeNum >= 86.51 && gradeNum <= 88.5) {
      calculatedFinalGrade = "2.5";
    } else if (gradeNum >= 84.51 && gradeNum <= 86.5) {
      calculatedFinalGrade = "2.25";
    } else if (gradeNum >= 82.51 && gradeNum <= 84.5) {
      calculatedFinalGrade = "2.0";
    } else if (gradeNum >= 80.51 && gradeNum <= 82.5) {
      calculatedFinalGrade = "1.75";
    } else if (gradeNum >= 78.51 && gradeNum <= 80.5) {
      calculatedFinalGrade = "1.5";
    } else if (gradeNum >= 76.51 && gradeNum <= 78.5) {
      calculatedFinalGrade = "1.25";
    } else if (gradeNum >= 74.51 && gradeNum <= 76.5) {
      calculatedFinalGrade = "1.0";
    } else if (gradeNum >= 50 && gradeNum <= 74.5) {
      calculatedFinalGrade = "0.0";
    } else if (gradeNum < 50 && gradeNum >= 0) {
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
            calculateAndSetGrades();
          }}
        >
          Calculate
        </button>
        <p>Grade: {grade}</p>
        <p>Final Grade: {finalGrade}</p>
        <button className='bg-red-500 text-white rounded-md p-2'>Logout</button>
      </div>
    </div>
  );
};

export default App;
