import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reseaux-sociaux',
  templateUrl: './reseaux-sociaux.component.html',
  styleUrls: [ './reseaux-sociaux.component.css' ]
})
export class ReseauxSociauxComponent implements OnInit {

  positionTooltip = "below";

  constructor() { }

  ngOnInit() {
  }

  redirectYoutube(event) {
    window.location.href = 'https://www.youtube.com/channel/UCP0elXZ7DZHFLYrKrDAqfvg';
  }

  redirectFacebook(event) {
    window.location.href = 'https://www.facebook.com/CashBrolikOfficiel/';
  }

  redirectTwitter(event) {
    window.location.href = 'https://twitter.com/cash_brolik';
  }

  redirectInstagram(event) {
    window.location.href = 'https://www.instagram.com/cash_brolik/';
  }

}
