import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  projects;

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit() {
    this.projects = this.projectService.getAllProjects().slice(0, 6);
  }

}
