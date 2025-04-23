import axios from "axios";


type AttemptAnswer  = {
  attempt_answer_id: number;
  question_id : number,
  attempt_id : number
  question_options_id: number,
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

const api = axios.create({
  baseURL: `http://3.85.128.114:8080/api`,
});

function uploadFiles(formData: FormData) {
  return axios.post("http://3.85.128.114:8080/files/upload", formData, {
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

 async function postAttemptAnswer(question_options_id: number,
  question_id : number,
  attempt_id : number): Promise<AttemptAnswer[]> {
    const attemptAnswerRequest = {
      question_options_id: question_options_id,
      question_id: question_id,
      attempt_id: attempt_id,
    };

    const response = await api.post(`/attempt_answer`, attemptAnswerRequest)
    return response.data.attemptAnswer;
  
 }

 const generateQuiz = async ({
  user_id,
  quiz_name,
  file_id,
}: {
  user_id: number;
  quiz_name: string;
  file_id: number;
}) => {
  const response = await api.post(
    `/generate_quiz`,
    { user_id, quiz_name, file_id }
  );
  console.log("Raw API response:", response);
  return response.data;
};

const getQuizByUserId = async (user_id: number) => {
  const response = await api.get(`/quizzes/${user_id}`);
  return response;
};

export { uploadFiles, getQuestionOptions, getQuizQuestions, postAttemptAnswer, getResults , generateQuiz, getQuizByUserId};
