var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular-Material
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';
// Composants
import { AppComponent } from './app.component';
import { ReseauxSociauxComponent } from './reseaux-sociaux/reseaux-sociaux.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { PageVideosComponent } from './page-videos/page-videos.component';
import { PageEvenementsComponent } from './page-evenements/page-evenements.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageBoutiqueComponent } from './page-boutique/page-boutique.component';
import { PageLicenseComponent } from './page-license/page-license.component';
import { PageNewsletterComponent } from './page-newsletter/page-newsletter.component';
import { PageActualiteesComponent } from './page-actualitees/page-actualitees.component';
var appRoutes = [
    { path: '', redirectTo: '/index.html', pathMatch: 'full' },
    { path: 'index.html', component: PageIndexComponent },
    { path: 'musiques.html', component: PageVideosComponent },
    { path: 'evenements.html', component: PageEvenementsComponent },
    { path: 'actualitees.html', component: PageActualiteesComponent },
    { path: 'boutique.html', component: PageBoutiqueComponent },
    { path: 'newsletter.html', component: PageNewsletterComponent },
    { path: 'contact.html', component: PageContactComponent },
    { path: 'license.html', component: PageLicenseComponent },
    { path: '**', redirectTo: '/index.html', pathMatch: 'prefix' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            ReseauxSociauxComponent,
            PageIndexComponent,
            PageVideosComponent,
            PageEvenementsComponent,
            PageContactComponent,
            PageBoutiqueComponent,
            PageLicenseComponent,
            PageNewsletterComponent,
            PageActualiteesComponent
        ],
        imports: [
            RouterModule.forRoot(appRoutes, { enableTracing: true }),
            BrowserModule,
            HttpModule,
            FormsModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            NoopAnimationsModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatSnackBarModule,
            MatTooltipModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map