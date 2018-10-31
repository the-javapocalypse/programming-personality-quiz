import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GettingStartedComponent} from './getting-started/getting-started.component';
import {QuizComponent} from './quiz/quiz.component';
import {ResultComponent} from './result/result.component';

const routes: Routes = [
  {path: 'GettingStarted', component: GettingStartedComponent},
  {path: 'Quiz', component: QuizComponent},
  {path: 'Result', component: ResultComponent},
  { path: '**', component: GettingStartedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [GettingStartedComponent, QuizComponent, ResultComponent];
