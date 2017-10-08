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
import { NewsletterService } from '../../../services/newsletter.service';
import { MatSnackBar } from '@angular/material';
var PageNewsletterComponent = (function () {
    function PageNewsletterComponent(newsletterService, snackBar) {
        this.newsletterService = newsletterService;
        this.snackBar = snackBar;
        this.email = '';
        this.emailFormControl = new FormControl('', [
            Validators.required
        ]);
    }
    PageNewsletterComponent.prototype.ngOnInit = function () {
    };
    PageNewsletterComponent.prototype.submitFormulaireInscriptionNewsletter = function () {
        var _this = this;
        if (this.email) {
            this.newsletterService.create(this.email)
                .then(function (newsletter) {
                _this.snackBar.open('Inscription à la newsletter enregistrée avec succès !', 'OK', {
                    duration: 2000
                });
                _this.email = '';
            });
        }
        else {
            return;
        }
    };
    return PageNewsletterComponent;
}());
PageNewsletterComponent = __decorate([
    Component({
        selector: 'app-page-newsletter',
        templateUrl: './page-newsletter.component.html',
        styleUrls: ['./page-newsletter.component.css'],
        providers: [NewsletterService]
    }),
    __metadata("design:paramtypes", [NewsletterService, MatSnackBar])
], PageNewsletterComponent);
export { PageNewsletterComponent };
//# sourceMappingURL=page-newsletter.component.js.map