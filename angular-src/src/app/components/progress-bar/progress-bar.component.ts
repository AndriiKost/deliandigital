import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() progressValue = 0;
  constructor() { }

  ngOnInit() {
  }

  // public circumference: number =2 * Math.PI * 47
  // public strokeDashoffset: number = 0;

}
