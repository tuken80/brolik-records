import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Actualite } from '../models/actualite';

@Injectable()
export class ActualiteService {
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  getLast(): Promise<Actualite[]> {
    return this.http.get('http://localhost:8081/actualites/last')
      .toPromise()
      .then(response => response.json().data as Actualite[])
      .catch(this.handleError);
  }

  getAll(): Promise<Actualite[]> {
    return this.http.get('http://localhost:8081/actualites/all')
      .toPromise()
      .then(response => response.json().data as Actualite[])
      .catch(this.handleError);
  }

}
