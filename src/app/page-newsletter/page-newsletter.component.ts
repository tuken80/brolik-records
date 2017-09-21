import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgModel, NgForm } from '@angular/forms';
import { NewsletterService } from '../newsletter.service';

@Component({
  selector: 'app-page-newsletter',
  templateUrl: './page-newsletter.component.html',
  styles: [],
  providers: [NewsletterService]
})

export class PageNewsletterComponent implements OnInit {
  email: string = '';

  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private newsletterService: NewsletterService) { }

  ngOnInit() {
  }

  submitFormulaireInscriptionNewsletter(emailInput) {
    if (emailInput.value) {
      this.newsletterService.create(emailInput.value)
        .then(newsletter => {
          alert('inscription ok');
        });
    } else {
      return;
    }
  }

}
