import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: '{{message}}'
})
export class WelcomeComponent {
  message = 'Welcome to Brolik Records application engine which is proud to present Cash Brolik ! Loading, please wait ...';
}
