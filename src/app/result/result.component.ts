import {Component, OnInit} from '@angular/core';
import {QuizDataService} from '../quiz-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  personality = [];
  calculation = true;
  results = [];
  isGeneralist = false;
  isSpecialist = false;
  isIndependent = false;
  isCollaborative = false;
  isIdealist = false;
  isPragmist = false;
  isPassionate = false;


  Generalist = 0;
  Specialist = 0;

  Independent = 0;
  Collaborative = 0;

  Idealist = 0;
  Pragmist = 0;

  Passionate = 0;


  constructor(private _Data: QuizDataService, private router: Router) {
  }

  ngOnInit() {

    if (this._Data.getPersonality() === null) {
      if (this._Data.getCounter() !== '14') {
        this.router.navigate(['GettingStarted']);
      }

      this.results = this._Data.getAnswers().split(',');

      if (this.results[0] === 'a') {
        this.Passionate++;
        this.Generalist++;
        this.Independent++;
      } else {
        this.Pragmist++;
        this.Collaborative++;
      }


      if (this.results[1] === 'a') {
        this.Collaborative++;
      } else {
        this.Independent++;
      }


      if (this.results[2] === 'a') {
        this.Idealist++;
        this.Specialist++;
      } else {
        this.Pragmist++;
        this.Collaborative++;
        this.Generalist++;
      }


      if (this.results[3] === 'a') {
        this.Pragmist++;
      } else {
        this.Idealist++;
        this.Passionate++;
      }


      if (this.results[4] === 'a') {
        this.Pragmist++;
        this.Specialist++;
        this.Passionate++;
      } else {
        this.Idealist++;
        this.Independent++;
      }


      if (this.results[5] === 'a') {
        this.Passionate++;
        this.Independent++;
        this.Idealist++;
      }

      if (this.results[6] === 'a') {
        this.Independent++;
        this.Idealist++;
      } else {
        this.Collaborative++;
        this.Pragmist++;
      }


      if (this.results[7] === 'a') {
        this.Collaborative++;
        this.Pragmist++;
        this.Generalist++;
      } else {
        this.Independent++;
        this.Idealist++;
        this.Passionate++;
        this.Specialist++;
      }

      if (this.results[8] === 'a') {
        this.Collaborative++;
      } else {
        this.Independent++;
        this.Passionate++;
      }


      if (this.results[9] === 'a') {
      } else {
        this.Passionate++;
      }


      if (this.results[10] === 'a') {
        this.Independent++;
        this.Specialist++;
      } else {
        this.Collaborative++;
        this.Generalist++;
      }


      if (this.results[11] === 'a') {
        this.Generalist++;
      } else {
        this.Specialist++;
      }


      if (this.results[12] === 'a') {
        this.Passionate++;
        this.Independent++;
      } else {
        this.Collaborative++;
      }

      if (this.results[13] === 'a') {
        this.Passionate++;
      } else {
      }

      if (this.results[14] === 'a') {
      } else {
        this.Passionate++;
      }

      if (this.Passionate >= 6) {
        this.isPassionate = true;
        this.personality.push('passionate');
      }

      if (this.Collaborative === this.Independent) {
        this.isCollaborative = true;
        this.isIndependent = true;
        this.personality.push('collaborative');
        this.personality.push('independent');
      } else if (this.Collaborative > this.Independent) {
        this.isCollaborative = true;
        this.personality.push('collaborative');
      } else {
        this.isIndependent = true;
        this.personality.push('independent');
      }


      if (this.Idealist === this.Pragmist) {
        this.isIdealist = true;
        this.isPragmist = true;
        this.personality.push('idealist');
        this.personality.push('pragmist');
      } else if (this.Idealist > this.Pragmist) {
        this.isIdealist = true;
        this.personality.push('idealist');
      } else {
        this.isPragmist = true;
        this.personality.push('pragmist');
      }


      if (this.Generalist === this.Specialist) {
        this.isGeneralist = true;
        this.isSpecialist = true;
        this.personality.push('generalist');
        this.personality.push('specialist');
      } else if (this.Generalist > this.Specialist) {
        this.isGeneralist = true;
        this.personality.push('generalist');
      } else {
        this.isSpecialist = true;
        this.personality.push('specialist');
      }

      this._Data.personality = this.personality;
      this._Data.setPersonality();
    } else {
      this.personality = this._Data.getPersonality().split(',');
    }


    setTimeout(() => {
      this.calculation = false;
    }, 5000);


  }

}
