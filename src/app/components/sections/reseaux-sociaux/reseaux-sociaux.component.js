var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var ReseauxSociauxComponent = (function () {
    function ReseauxSociauxComponent() {
        this.positionTooltip = 'below';
    }
    ReseauxSociauxComponent.prototype.ngOnInit = function () {
    };
    ReseauxSociauxComponent.prototype.redirectYoutube = function () {
        window.location.href = 'https://www.youtube.com/channel/UCP0elXZ7DZHFLYrKrDAqfvg';
    };
    ReseauxSociauxComponent.prototype.redirectFacebook = function () {
        window.location.href = 'https://www.facebook.com/CashBrolikOfficiel/';
    };
    ReseauxSociauxComponent.prototype.redirectTwitter = function () {
        window.location.href = 'https://twitter.com/cash_brolik';
    };
    ReseauxSociauxComponent.prototype.redirectInstagram = function () {
        window.location.href = 'https://www.instagram.com/cash_brolik/';
    };
    return ReseauxSociauxComponent;
}());
ReseauxSociauxComponent = __decorate([
    Component({
        selector: 'app-reseaux-sociaux',
        templateUrl: './reseaux-sociaux.component.html',
        styleUrls: ['./reseaux-sociaux.component.css']
    }),
    __metadata("design:paramtypes", [])
], ReseauxSociauxComponent);
export { ReseauxSociauxComponent };
//# sourceMappingURL=reseaux-sociaux.component.js.map