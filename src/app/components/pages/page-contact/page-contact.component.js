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
import { FormControl, Validators } from '@angular/forms';
var PageContactComponent = (function () {
    function PageContactComponent() {
        this.Sujet = '';
        this.Email = '';
        this.Message = '';
        this.sujetFormControl = new FormControl('', [
            Validators.required
        ]);
        this.emailFormControl = new FormControl('', [
            Validators.required
        ]);
        this.messageFormControl = new FormControl('', [
            Validators.required
        ]);
    }
    PageContactComponent.prototype.ngOnInit = function () {
    };
    return PageContactComponent;
}());
PageContactComponent = __decorate([
    Component({
        selector: 'app-page-contact',
        templateUrl: './page-contact.component.html',
        styleUrls: ['./page-contact.component.css']
    }),
    __metadata("design:paramtypes", [])
], PageContactComponent);
export { PageContactComponent };
//# sourceMappingURL=page-contact.component.js.map