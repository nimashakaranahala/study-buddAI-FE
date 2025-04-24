import React, { useEffect, useState, useContext } from "react";
import { getQuizzes } from "../api";
import QuizCard from "./QuizCard"; 
import useUserContext from "../src/contexts/useUserContext";

interface Quizzes {user_id: number,
    quiz_id: number,
    file_id: number,
    created_at: string,
    quiz_name: string

}

interface Attempt {
    attempt_id: number,
    quiz_id: number,
    score: string
}



const Quizzes: React.FC = () => {

    const { loggedInUser } = useUserContext()
    const userId = loggedInUser.user_id;


    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean | null>(false);
    const [quizzes, setQuizzes] = useState<Quizzes[]>([]);

  useEffect(() => {
    setIsLoading(true)
    getQuizzes(userId)
      .then((data) => {
        setQuizzes(data)
   
      })
      .catch(() => {
        setError("Failed to load quizzes");
      }).finally(() => {
        setIsLoading(false)
      })
  }, []);

  return <div className="quizzes"><ul>{
    quizzes.map((quiz) => {
        return <QuizCard key={quiz.quiz_id} quiz={quiz} />
    })}

    </ul></div>;
};

export default Quizzes;
