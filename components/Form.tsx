import { useContext, useState } from "react";
import UploadFile from "../components/UploadFile";
import { UserContext } from "../src/contexts/User";
import Button from './Button'

function Form() {
  const [quizName, setQuizName] = useState("");
  const loggedInUser = useContext(UserContext);
  if (!loggedInUser) return null;

  return (
    <>

      <div >
        <div className="form-card">
          <Button /> 
          <fieldset className="form-fieldset">
            <legend className="form-legend">1. Enter a name for this quiz</legend>

            <form action="" method="post">
              <label htmlFor="quiz-name">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Ex. Science"
                  value={quizName}
                  onChange={(event) => setQuizName(event.target.value)}
                />
              </label>
              {quizName && (
                <div className="upload-section">
                  <UploadFile quizName={quizName} />
                </div>
              )}
            </form>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default Form;
