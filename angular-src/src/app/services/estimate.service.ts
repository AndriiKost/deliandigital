import { Injectable } from '@angular/core';
import { estimateAPI } from '../api/estimateAPI';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EstimateService {
  public totalCost: string;
  public projectDuration: string;

  constructor(
    private http: HttpClient
  ) { }

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

  submitUser(user) {
    // const url = 'localhost:8080/users/estimate/';
    const url = `https://deliandigital.herokuapp.com/users/estimate/${user.name}/${user.email}/${user.projectDuration}/${user.projectCost}`;
    return this.http.get(url, user);
  }
}
