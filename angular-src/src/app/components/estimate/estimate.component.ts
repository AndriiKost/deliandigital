import { Component, OnInit } from '@angular/core';
import { EstimateService } from 'src/app/services/estimate.service';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {
  questions;
  currentQuestion;
  count = 0;
  totalValue;
  estimateFinished = false;

  constructor(
    public estimateService: EstimateService
    ) { }

  ngOnInit() {
    this.estimateFinished = false;
    this.questions = this.estimateService.getAllQuestions();
    this.startEstimate();
  }

  startEstimate() {
    this.count = 0;
    this.currentQuestion = this.questions[this.count];
  }

  nextQuestion(value) {
    this.count += 1;
    // if user submitted last question reset all stats and show finish component
    if (this.count >= this.questions.length) {
      this.estimateFinished = true;
      this.currentQuestion = null;
      this.count = 0;
    } else {
      this.currentQuestion = this.questions[this.count];
      if (this.totalValue === null || this.totalValue === undefined) {
        this.totalValue = value;
      } else {
        this.totalValue += value;
      }
    }
  }

  userInput(event) {
    console.log(`EVENT => ${event}`);
  }
}
