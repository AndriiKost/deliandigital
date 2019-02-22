import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClipboardService } from 'src/app/services/clipboard.service';
import { EstimateService } from 'src/app/services/estimate.service';

@Component({
  selector: 'app-estimate-complete',
  templateUrl: './estimate-complete.component.html',
  styleUrls: ['./estimate-complete.component.css']
})
export class EstimateCompleteComponent implements OnInit {
  @Input() totalValue;
  @Input() estimateFinished = false;
  projectDuration;
  totalUpperValue;

  constructor(
    private router: Router,
    private clipboardService: ClipboardService,
    private estimateService: EstimateService
  ) { }

  ngOnInit() {
    if (this.estimateFinished) {
      this.defineDuration();
    }
  }

  defineDuration() {
    if (this.totalValue > 20000) {
      this.projectDuration = '4-5 months';
      this.totalUpperValue = this.totalValue + 5000;
    } else if (this.totalValue > 10000) {
      this.projectDuration = '3-4 months';
      this.totalUpperValue = this.totalValue + 2500;
    } else if (this.totalValue > 2500) {
      this.projectDuration = '2-3 months';
      this.totalUpperValue = this.totalValue + 1200;
    } else if (this.totalValue > 1500) {
      this.projectDuration = '1-2 months';
      this.totalUpperValue = this.totalValue + 700;
    } else {
      this.projectDuration = '2-4 weeks';
      this.totalUpperValue = this.totalValue + 500;
    }
  }

  copyMessage() {
    this.clipboardService.appearClipboardMessage();
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = `Delian Digital will build your project for approximately ${this.projectDuration}, and a cost of $${this.totalValue} - $${this.totalUpperValue}. Contact information a.kost@deliandigital.com or (314)885-4259.`;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  close() {
    this.copyMessage();
    this.totalUpperValue = 0;
    this.projectDuration = '';
    this.totalValue = 0;
    this.router.navigate(['/contact']);
  }

  success() {
    this.estimateService.totalCost = this.totalValue;
    this.estimateService.projectDuration = this.projectDuration;
    this.router.navigate(['/estimate/success']);
  }

}
