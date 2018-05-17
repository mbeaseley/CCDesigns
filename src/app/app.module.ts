import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home-component/home.component';
import { PortfolioComponent } from './portfolio-component/portfolio.component';
import { ContactComponent } from './contact-component/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
<<<<<<< HEAD
=======
    SlideshowModule,
    FormsModule,
    ReactiveFormsModule
>>>>>>> c19441d9413d478d21f5aca07630d7bd6c177e2e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
