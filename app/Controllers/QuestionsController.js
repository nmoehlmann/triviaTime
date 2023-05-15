import { appState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawQuestions() {
  console.log('drawing questions')

  let template = ''

  appState.questions.forEach(q => {
    template += q.QuestionsTemplate
  })
  setHTML('questionsList', template)
}

function _drawAnswer(answer) {
  let correctAnswer = appState.questions.filter(q => q.correct_answer == answer)
  // @ts-ignore
  if (correctAnswer == "") {
    // @ts-ignore
    document.getElementById('answerStatus').innerText = "Incorrect!"
  } else {
    // @ts-ignore
    document.getElementById('answerStatus').innerText = "Correct!"
  }
}

export class QuestionsController {
  constructor() {
    console.log('controller online')
    this.getQuestions()
    appState.on('questions', _drawQuestions)
  }

  async getQuestions() {
    await questionsService.getQuestions()
  }

  selectAnswer(answer) {
    questionsService.selectAnswer(answer)
  }

}