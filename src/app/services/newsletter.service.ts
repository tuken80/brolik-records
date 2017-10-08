import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Newsletter } from '../models/newsletter';

@Injectable()
export class NewsletterService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  create(email: string): Promise<Newsletter> {
    return this.http
      .post('http://localhost:8081/newsletter/inscription', JSON.stringify({email: email}), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Newsletter)
      .catch(this.handleError);
  }

}
