import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Games from './models/games';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titleString: string = 'math-game';
  numb1: number = 0;
  numb2: number = 0;
  answer: string = '';
  isError: boolean = false;
  message: string = '';
  hr: number = 0;
  min: number = 0;
  sec: number = 0;
  interval: any;
  gamesStats: Games[];

  ngOnInit(): void {}

  constructor(private title: Title) {
    title.setTitle(this.titleString);
    this.gamesStats = new Array<Games>();
    this.randomizeNumber();
  }

  randomizeNumber() {
    this.numb1 = Math.floor(10 * Math.random());
    this.numb2 = Math.floor(10 * Math.random());
    this.isError = false;
    this.message = '';
    this.answer = '';
    this.sec = 0;
    this.min = 0;
    this.hr = 0;

    this.interval = setInterval(() => {
      this.sec++;
      if (this.sec == 60) {
        this.min++;
        this.sec = 0;
      }
      if (this.min == 60) {
        this.hr++;
        this.min = 0;
      }
    }, 1000);
  }

  submitAnswer(event: any) {
    event.preventDefault();
    try {
      var ans = parseInt(this.answer);
      if (this.numb1 + this.numb2 == ans) {
        this.isError = false;
        this.message = 'Hurray! You gave right answer!!';

        var game = new Games();
        game.equation = `${this.numb1} + ${this.numb2} = `;
        game.answer = `${this.answer}`;
        var timeTaken = 60 * 60 * this.hr + 60 * this.min + this.sec;
        game.time = `${timeTaken} second/s`;

        this.gamesStats.push(game);

        setTimeout(() => this.randomizeNumber(), 2000);

        if (this.interval !== undefined) {
          clearInterval(this.interval);
        }
      } else {
        this.isError = true;
        this.message = 'Please try again!';
        this.answer = '';
        setTimeout(() => {
          this.isError = false;
          this.message = '';
        }, 1000);
      }
    } catch (ex) {
      console.log(ex);
    }
  }
}
