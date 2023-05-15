export class Question {
  constructor(data) {
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
  }

  get QuestionsTemplate() {
    return /*html*/`
    <section class="row m-5 p-5 questionTemplate">
    <div class="col">
        <div class="text-center">
          <h1>Question</h1>
          <p>${this.question}</p>
        </div>
        <section class="row">
          <div class="col-4 d-flex flex-column align-items-center gap-5">
            <p>A: <span>${this.correct_answer}</span></p>
            <button class="btn btn-light" onclick="app.questionsController.selectAnswer('${this.correct_answer}')">Select a</button>
            <p>B: <span>${this.incorrect_answers[0]}</span></p>
            <button class="btn btn-light" onclick="app.questionsController.selectAnswer('${this.incorrect_answers}')">Select b</button>
          </div>
          <div class="col-4 d-flex justify-content-center py-5">
            <h2 id="answerStatus">Pending..</h2>
          </div>
          <div class="col-4 d-flex flex-column align-items-center gap-5">
            <p>C: <span>${this.incorrect_answers[1]}</span></p>
            <button class="btn btn-light" onclick="app.questionsController.selectAnswer('${this.incorrect_answers}')">Select c</button>
            <p>D: <span>${this.incorrect_answers[2]}</span></p>
            <button class="btn btn-light" onclick="app.questionsController.selectAnswer('${this.incorrect_answers}')">Select d</button>
          </div>
        </section>
      </div>
      </section>
    `
  }

}
