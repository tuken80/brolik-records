import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageIndexComponent } from './page-index/page-index.component';
import { PageVideosComponent } from './page-videos/page-videos.component';
import { PageEvenementsComponent } from './page-evenements/page-evenements.component';
import { PageActualiteesComponent } from './page-actualitees/page-actualitees.component';
import { PageNewsletterComponent } from './page-newsletter/page-newsletter.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageBoutiqueComponent } from './page-boutique/page-boutique.component';
import { PageLicenseComponent } from './page-license/page-license.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: PageIndexComponent },
  { path: 'musiques', component: PageVideosComponent },
  { path: 'evenements', component: PageEvenementsComponent },
  { path: 'actualitees', component: PageActualiteesComponent },
  { path: 'boutique', component: PageBoutiqueComponent },
  { path: 'newsletter', component: PageNewsletterComponent },
  { path: 'contact', component: PageContactComponent },
  { path: 'license', component: PageLicenseComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
