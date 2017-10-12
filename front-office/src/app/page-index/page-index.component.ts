import { Component, OnInit } from '@angular/core';

import { Actualite } from '../actualite';
import { ActualiteService } from '../actualite.service';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: [ './page-index.component.css' ],
  providers: [ActualiteService]
})

export class PageIndexComponent implements OnInit {
  // lastActualites: Actualite[];

  constructor(private actualiteService: ActualiteService) { }

  ngOnInit() {
    // this.lastActualites = this.actualiteService.getLast().then(lastActualites => this.lastActualites = lastActualites);
  }

}
