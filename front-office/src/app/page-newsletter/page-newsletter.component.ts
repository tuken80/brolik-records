import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NewsletterService } from '../newsletter.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-page-newsletter',
  templateUrl: './page-newsletter.component.html',
  styles: [],
  providers: [NewsletterService]
})

export class PageNewsletterComponent implements OnInit {
  email = '';

  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private newsletterService: NewsletterService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  submitFormulaireInscriptionNewsletter() {
    if (this.email) {
      this.newsletterService.create(this.email)
        .then(newsletter => {
          this.snackBar.open('Inscription à la newsletter enregistrée avec succès !', 'OK', {
            duration: 2000
          });
          this.email = '';
        });
    } else {
      return;
    }
  }

}
