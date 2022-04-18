export default interface Games {
  equation: string;
  answer: string;
  time: string;
}

export default class Games {
  equation: string;
  answer: string;
  time: string;

  constructor() {
    this.equation = '';
    this.answer = '';
    this.time = '';
  }
}
