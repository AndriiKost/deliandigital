import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  iconUrl = 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/delian-d.png';

  constructor() { }

  ngOnInit() {
  }

}
