import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styles: []
})

export class PageContactComponent implements OnInit {
  Sujet: string = '';
  Email: string = '';
  Message: string = '';

  sujetFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  messageFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  ngOnInit() {
  }

}
