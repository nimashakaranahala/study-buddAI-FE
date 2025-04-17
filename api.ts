import axios from "axios";

type QuestionOption = {
  question_options_id: number;
  question_id: number;
  option_body: string;
  is_correct: number; 
  label: string;
};

type QuizQuestion  = {
  question_id: string;
  quiz_id: number;
  question_body: string;
}

const api = axios.create({
  baseURL: `http://56.228.19.82:8080/api`,
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

async function getQuizQuestions(
  quiz_id: number
): Promise<QuizQuestion[]> {
  const response = await api.get(`/questions/${quiz_id}`);
  return response.data.questions;
}

// async function postAttemptAnswer(): {

// }



export { uploadFiles, getQuestionOptions, getQuizQuestions };
