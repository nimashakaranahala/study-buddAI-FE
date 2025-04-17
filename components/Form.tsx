import React, { useContext, useState } from "react";
import UploadFile from "../components/UploadFile";
import GenerateQuiz from "../components/GenerateQuiz";
import { UserContext } from "../src/contexts/User";


function Form() {
  const [quizName, setQuizName] = useState("");
  const loggedInUser = useContext(UserContext)
  if(!loggedInUser) {
    return 
  }

  return (
    <>
    <h1>Hello from quizform</h1>
        <fieldset className="quiz-form">
          <legend>PDF Upload</legend>
          <form action="" method="post">
            <label htmlFor="quiz-name">Quiz Name</label>
            <input 
            type="text" 
            id="quiz-name" 
            onChange={(event)=> setQuizName(event.target.value)}/>
            <UploadFile quiz_name={quizName} />
            <GenerateQuiz />
          </form>
        </fieldset>
  </>
  );
}


export default Form