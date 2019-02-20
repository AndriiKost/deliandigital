import { Component, OnInit } from '@angular/core';
import { WindowScrollingService } from 'src/app/services/window-scrolling.service';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.css']
})
export class MobileNavigationComponent implements OnInit {
  status = false;
  mobileMenu = false;
  public innerWidth: any;

  constructor( private windowScrolling: WindowScrollingService ) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if (this.innerWidth < 600) {
      this.mobileMenu = true;
    } else {
      this.mobileMenu = false;
    }
  }

  changeStyleClass() {
    if (this.status === false) {
      this.windowScrolling.disable();
      this.status = true;
    } else {
      this.windowScrolling.enable();
      this.status = false;
    }
  }

}
