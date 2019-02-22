import { Injectable } from '@angular/core';
import { estimateAPI } from '../api/estimateAPI';

@Injectable({
  providedIn: 'root'
})
export class EstimateService {

  constructor() { }

  getAllQuestions() {
    return estimateAPI;
  }

  getQuestion(id) {
    let projectToReturn;
    estimateAPI.filter(question => {
      if (question.id == id) {
        projectToReturn = question;
      }
    });
    return projectToReturn;
  }
}
