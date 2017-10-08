import { Component, OnInit } from '@angular/core';

import { Actualite } from '../../../models/actualite';
import { ActualiteService } from '../../../services/actualite.service';

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
