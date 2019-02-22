import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'src/app/services/clipboard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  clipboardMessage: boolean;

  constructor(
    private clipboardService: ClipboardService
  ) { }

  ngOnInit() {
    this.clipboardMessage = this.clipboardService.clipboardMessage;
    setTimeout(() => { this.clipboardMessage = false; }, 3000);
  }

  onContactSubmit() {

  }

}
