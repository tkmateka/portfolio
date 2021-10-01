import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact:any = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
