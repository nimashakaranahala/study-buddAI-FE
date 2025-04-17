import { useContext, useState } from "react";
import UploadFile from "../components/UploadFile";
import { UserContext } from "../src/contexts/User";

function Form() {
  const [quizName, setQuizName] = useState("");
  const loggedInUser = useContext(UserContext)
  if(!loggedInUser) {
    return
  }

  return (
    <>
    <h1>Ready to test yourself?</h1>
        <fieldset className="quiz-form">
          <legend>Enter a name for this Quiz</legend>
          <form action="" method="post">
            <label htmlFor="quiz-name">
              <input 
                type="text" 
                id="quiz-name" 
                placeholder="Ex. Science" 
                value={quizName}
                onChange={(event)=> setQuizName(event.target.value)}
              />
            </label>
           { quizName && <UploadFile quiz_name={quizName} />}
           
          </form>
        </fieldset>
  </>
  );
}


export default Form