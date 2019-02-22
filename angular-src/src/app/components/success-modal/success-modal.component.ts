import { Component, OnInit, Input } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { Router } from '@angular/router';
import { EstimateService } from 'src/app/services/estimate.service';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {
  @Input() totalCost;
  @Input() projectDuration;
  name: string;
  email: string;
  formValid: boolean;

  constructor(
    private validateService: ValidateService,
    private router: Router,
    private estimateService: EstimateService
  ) { }

  ngOnInit() {
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
      // Register User
      this.estimateService.submitUser(user).subscribe(data => {
        console.log(data);
      });

      this.router.navigate(['/journey']);
      return true;
    } else {
      this.formValid = false;
      return false;
    }
  }

}
