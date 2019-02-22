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
    let url = `https://deliandigital.herokuapp.com/users/estimate/${user.name}/${user.email}/${user.projectDuration}/${user.projectCost}`;
    console.log(url);
    return this.http.get(url, user);
  }
}
