import {Component, OnInit} from '@angular/core';
import {QuizDataService} from '../quiz-data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  progress = 0;
  counter = 0;
  questions = [];
  ansA = [];
  ansB = [];
  hoverA = false;
  hoverB = false;

  constructor(private _Data: QuizDataService, private router: Router) {
  }

  ngOnInit() {

    this.progress = this._Data.progress;
    this.questions = this._Data.questions;
    this.ansA = this._Data.answerA;
    this.ansB = this._Data.answerB;
    this.progress = Number(this._Data.getProgress());
    this.counter = Number(this._Data.getCounter());
  }

  markAnswer(choice) {
    if (this.counter <= 13) {
      this.counter++;
      this.progress = Math.ceil((this.counter / 14) * 100);

      this._Data.progress = this.progress;
      this._Data.counter = this.counter;
      this._Data.result.push(choice);
      this._Data.setProgress();
    } else {
      this.router.navigate(['Result']);
    }

  }

}
