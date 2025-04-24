import React, { useState } from "react";
import useUserContext from "../src/contexts/useUserContext";
import { generateQuiz } from "../api";
import { useNavigate } from "react-router";
import FullScreenLoader from "./FullScreenLoader"; // <-- import

interface GenerateQuizProps {
  fileId: number | null;
  quizName?: string;
  user_id?: number;
}
function GenerateQuiz({ fileId, quizName }: GenerateQuizProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [message, setMessage] = useState("")
  const { loggedInUser } = useUserContext()
  const navigate = useNavigate()

const handleQuizGeneration = async(event: React.MouseEvent)=> {
  event.preventDefault()
  if(!fileId || !quizName) {
    setMessage("Missing file or quiz name")
    return
  }
  try {
    setIsGenerating(true)
    setMessage("")

   await generateQuiz({
      user_id: loggedInUser.user_id, 
      quiz_name:quizName, 
      file_id:fileId
    })
    setMessage("Quiz generated successfully!")
      navigate(`/quizzes`);
 
      
  } catch (error) {
    console.error(error);
    setMessage("Quiz generation failed");
  } finally {
    setIsGenerating(false);
  }
};

if (isGenerating) return <FullScreenLoader />;

  return (
    <div className="generate-container">
      <h3 className="generate-title">3. New quiz!</h3>
      <button 
      onClick={handleQuizGeneration} 
      className="generate-btn" 
      type="submit"
      disabled={isGenerating}
      >
        {isGenerating ? "Generating..." : "Generate"} </button>
      {message && (<p className={`generate-msg ${message.includes("success") ? "success" : "error"}`}>
        {message}
      </p>
    )}
    </div>
  );
};

export default GenerateQuiz;
