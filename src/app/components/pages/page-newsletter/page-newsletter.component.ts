import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NewsletterService } from '../../../services/newsletter.service';
import { MatSnackBar } from '@angular/material';

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

  constructor(private newsletterService: NewsletterService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  submitFormulaireInscriptionNewsletter(emailInput) {
    if (emailInput.value) {
      this.newsletterService.create(emailInput.value)
        .then(newsletter => {
          this.snackBar.open('Inscription à la newsletter enregistrée avec succès !', 'OK', {
            duration: 2000
          });
          emailInput.value = '';
        });
    } else {
      return;
    }
  }

}
