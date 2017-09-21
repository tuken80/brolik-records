import { Component, OnInit } from '@angular/core';

import { Actualite } from '../actualite';
import { ActualiteService } from '../actualite.service';

@Component({
  selector: 'app-page-actualitees',
  templateUrl: './page-actualitees.component.html',
  styles: [],
  providers: [ActualiteService]
})

export class PageActualiteesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
