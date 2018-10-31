import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {

  startQuiz = false;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  start() {
    this.startQuiz = true;

    setTimeout(() => {
      this.router.navigate(['Quiz']);
    }, 5000);
  }

}
