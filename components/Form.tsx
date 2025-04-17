import { useState } from "react";
import UploadFile from '../components/UploadFile'
import GenerateQuiz from


function getQuizByUserId({user_id}){
const [quizName, setQuizName] = useState("")


return (
    <>
    <fieldset>
        <legend>PDF Upload</legend>
    <form action="" method="post">
    <label htmlFor="quiz-name">Quiz Name</label>
    <UploadFile 
    quiz_name={quiz_name}
    user_id = {user_id}
    />
    <GenerateQuiz/>
    </form>
    </fieldset>
    </>
)

}