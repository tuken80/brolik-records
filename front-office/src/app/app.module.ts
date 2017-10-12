import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular-Material
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { MatInputModule, MatButtonModule, MatFormFieldModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';

// Composants
import { AppComponent } from './app.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { PageVideosComponent } from './page-videos/page-videos.component';
import { PageEvenementsComponent } from './page-evenements/page-evenements.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageBoutiqueComponent } from './page-boutique/page-boutique.component';
import { PageLicenseComponent } from './page-license/page-license.component';
import { PageNewsletterComponent } from './page-newsletter/page-newsletter.component';
import { PageActualiteesComponent } from './page-actualitees/page-actualitees.component';
import { ReseauxSociauxComponent } from './reseaux-sociaux/reseaux-sociaux.component';
import { HeaderSecondaireComponent } from './header-secondaire/header-secondaire.component';

const appRoutes: Routes = [
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
    PageNewsletterComponent,
    PageActualiteesComponent,
    HeaderSecondaireComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
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
export class AppModule { }
