import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  counter = 0;
  progress = 0;

  questions = [
    'You’ve been assigned a complex coding task. What\'s the first thing you will do?',
    'Comments should be placed',
    'When working on a project, what would you rather do?',
    'Who do you think is a ‘better’ programmer?',
    'What will you enjoy more?',
    'How much time do you spend on GitHub and StackOverflow?',
    'Approximately what % of a project should be spent in planning?',
    'If something needs to be done properly:',
    'You’ve been given a task to do that will take one man month, how big is the optimal team?',
    'A person, you don\'t know, asks you to code something which is complex. You won\'t be getting any reward in return.',
    'When you program you:',
    'What is the ‘better’ implementation in your opinion?',
    'When a task, in which you have very low expertise, is assigned to you, You would:',
    'Have you ever heard of Hacktoberfest?',
    'What theme you use for IDE?'
  ];

  answerA = [
    'Dive deep right into the coding and prototyping part.',
    'To explain anything that may seems ambiguous.',
    'Creating logics, moving registers or integrating APIs',
    'Someone with a degree and has most of the commands in his head.',
    'Using Java or C to build architectures from scratch and have the complete control of the code.',
    'I use both of them regularly',
    '~25% – The best way to complete a task is to plan as you go.',
    'Get the team together and discuss the best way of solving the problem. Then break it up and give each piece based on people’s skills.',
    '5',
    'No. I will make an excuse that I\'m busy and can\'t help.',
    'Shut the door and the rest of the world out.',
    'import * from z',
    'Dive right into it and learn on the go from Stackoverflow.',
    'No.',
    'Light',
  ];

  answerB = [
    'Discuss all the possible options, then decide the best approach the problem given the current situation.',
    'Only when a programmer isn’t good enough to explain themselves in variable and function names.',
    'Creating UMLs and designing flows and business logics',
    'Someone who has been coding since they were 5 and simply goes by raw talent alone.',
    'Python or JavaScript. Why waste valuable time on memory management and re-inventing when someone’s handled it for you!',
    'I use them weekly',
    '~75% – The more planning, the less code you need to write. By the time you code, you should simply be filling in stubs.',
    'Do it yourself.',
    '1',
    'Yes. I will do the work despite the fact that I will be getting no reward in return.',
    'Share a desk with a peer and have group meetings often to discuss what to do next.',
    'import a, b from z',
    'Read relevant books/take a crash course before starting the actual task.',
    'Yes.',
    'Dark'
  ];

  result = [];
  personality = [];

  setProgress() {
    localStorage.setItem('progress', this.progress.toString());
    localStorage.setItem('answers', this.result.toString());
    localStorage.setItem('counter', this.counter.toString());
  }

  getProgress() {
    return (localStorage.getItem('progress'));
  }

  getCounter() {
    return (localStorage.getItem('counter'));
  }

  getAnswers() {
    return (localStorage.getItem('answers'));
  }

  setPersonality() {
    localStorage.setItem('personality', this.personality.toString());
  }

  getPersonality() {
    return (localStorage.getItem('personality'));
  }

  deleteStorage() {
    localStorage.clear();
  }

  constructor() {
  }
}
