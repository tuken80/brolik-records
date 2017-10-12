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
import { ActualiteService } from '../actualite.service';
var PageIndexComponent = (function () {
    // lastActualites: Actualite[];
    function PageIndexComponent(actualiteService) {
        this.actualiteService = actualiteService;
    }
    PageIndexComponent.prototype.ngOnInit = function () {
        // this.lastActualites = this.actualiteService.getLast().then(lastActualites => this.lastActualites = lastActualites);
    };
    return PageIndexComponent;
}());
PageIndexComponent = __decorate([
    Component({
        selector: 'app-page-index',
        templateUrl: './page-index.component.html',
        styleUrls: ['./page-index.component.css'],
        providers: [ActualiteService]
    }),
    __metadata("design:paramtypes", [ActualiteService])
], PageIndexComponent);
export { PageIndexComponent };
//# sourceMappingURL=page-index.component.js.map