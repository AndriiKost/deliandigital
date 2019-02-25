import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { Router } from '@angular/router';
import { EstimateService } from 'src/app/services/estimate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {
  totalCost: string;
  projectDuration: string;
  name: string;
  email: string;
  formValid: boolean;

  constructor(
    private validateService: ValidateService,
    private router: Router,
    private estimateService: EstimateService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.projectDuration = this.estimateService.projectDuration;
    this.totalCost = this.estimateService.totalCost;
  }

  registerUser(): boolean {
    const user = {
      name: this.name,
      email: this.email,
      projectCost: this.totalCost,
      projectDuration: this.projectDuration
    };
    // Validate Email
    if (this.validateService.validateEmail(user.email)) {
      this.formValid = true;
      // Register user
      this.estimateService.submitUser(user).subscribe(data => console.log(data));
        // console.log(`PROJECT DURATION ${this.projectDuration}, PROJECT COST ${this.totalCost}`);
        this.showFlashMessage();
        this.router.navigate(['/journey']);
      return true;
    } else {
      this.formValid = false;
      return false;
    }
  }

  showFlashMessage() {
    if (this.name === '' || this.name === undefined) {
      this._flashMessagesService.show(`Thank You! We will be in touch with you shortly.`, { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show(`Thank You, ${this.name}! We will get in touch with you shortly.`, { cssClass: 'alert-success', timeout: 4000 });
    }
  }

}
