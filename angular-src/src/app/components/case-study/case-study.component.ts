import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit {
  project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectsService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getPorject(id);
  }

  toCaseStudies() {
    this.router.navigate(['/work']);
  }

}
