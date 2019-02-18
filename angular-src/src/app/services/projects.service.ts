import { Injectable } from '@angular/core';
import { ProjectsAPI } from '../api/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getAllProjects() {
    return ProjectsAPI.projects;
  }

  getPorject(id) {
    let projectToReturn;
    ProjectsAPI.projects.filter(project => {
      if (project.id == id) {
        projectToReturn = project;
      }
    });
    return projectToReturn;
  }
}
