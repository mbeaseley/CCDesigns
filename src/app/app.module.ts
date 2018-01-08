import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    PortfolioComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
