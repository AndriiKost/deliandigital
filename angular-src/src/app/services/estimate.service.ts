import { Injectable } from '@angular/core';
import { estimateAPI } from '../api/estimateAPI';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
    // Prod
    // const url = `https://www.deliandigital.com/api/estimate/${user.name}/${user.email}/${user.projectDuration}/${user.projectCost}`;
    // Dev
    // const url = `localhost:8080/api/new-estimate`;
    const url = `https://www.deliandigital.com/api/new-estimate`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // return this.http.get(url);
    return this.http.post(url, user, { headers: headers });
  }
}
