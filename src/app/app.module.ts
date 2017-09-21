import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Requetes
import { HttpModule } from '@angular/http';

// Formulaires
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Angular-Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { MdTooltipModule, MdInputModule, MdButtonModule, MdSnackBarModule } from '@angular/material';

// Composants
import { AppComponent } from './app.component';

import { ReseauxSociauxComponent } from './reseaux-sociaux/reseaux-sociaux.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { PageVideosComponent } from './page-videos/page-videos.component';
import { PageEvenementsComponent } from './page-evenements/page-evenements.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageBoutiqueComponent } from './page-boutique/page-boutique.component';
import { PageLicenseComponent } from './page-license/page-license.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNewsletterComponent } from './page-newsletter/page-newsletter.component';
import { PageActualiteesComponent } from './page-actualitees/page-actualitees.component';

@NgModule({
  declarations: [
    AppComponent,
    ReseauxSociauxComponent,
    PageIndexComponent,
    PageVideosComponent,
    PageEvenementsComponent,
    PageContactComponent,
    PageBoutiqueComponent,
    PageLicenseComponent,
    PageNotFoundComponent,
    PageNewsletterComponent,
    PageActualiteesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdTooltipModule,
    MdInputModule,
    MdButtonModule,
    MdSnackBarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
