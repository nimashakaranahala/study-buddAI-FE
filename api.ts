import axios from "axios";

type QuestionOption = {
  question_options_id: number;
  question_id: number;
  option_body: string;
  is_correct: number; 
  label: string;
};

type QuizQuestion  = {
  question_id: number;
  quiz_id: number;
  question_body: string;
}

type ResultAnswer = {
  question_body: string;
  attempted_answer: string;
  correct_answer: string;
}

type ResultsData = {
  questions: ResultAnswer[];
  score: number;
}





const api = axios.create({
  baseURL: `http://3.85.128.114:8080/api`,
});

function uploadFiles(formData: FormData) {
  return axios.post("http://localhost:8080/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

async function getQuestionOptions(
  question_id: number
): Promise<QuestionOption[]> {
  const response = await api.get(`/question_options/${question_id}`);
  return response.data.questionOptions;
}


async function getResults (attempt_id: number) : Promise<ResultsData> {
  const response = await  api.get(`/attempt/${attempt_id}/submit`);

  return response.data.result;
}


async function getQuizQuestions(
  quiz_id: number
): Promise<QuizQuestion[]> {
  const response = await api.get(`/questions/${quiz_id}`);
  return response.data.questions;
}

// async function postAttemptAnswer(): {

// }


 const generateQuiz = async ({
  user_id,
  quiz_name,
  file_id,
}: {
  user_id: number;
  quiz_name: string;
  file_id: number;
}) => {
  try {
    const response = await axios.post(`http://localhost:8080/api/users/${user_id}/generate_quiz`, {
      quiz_name,
      file_id,
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
  }
};


export { uploadFiles, getQuestionOptions, getQuizQuestions, getResults };


