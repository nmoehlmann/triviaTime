import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { qApi } from "./AxiosService.js"

class QuestionsService {
  selectAnswer(answer) {
    let correctAnswer = appState.questions.filter(q => q.correct_answer == answer)
    // @ts-ignore
    if (correctAnswer == "") {
      console.log('INCORRECT')
    } else {
      console.log('CORRECT')
    }
  }

  async getQuestions() {
    const res = await qApi.get('/api.php?amount=5&category=15&difficulty=easy&type=multiple')
    console.log(res.data)

    appState.questions = res.data.results.map(q => new Question(q))
  }
}

export const questionsService = new QuestionsService()