import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { SlideshowModule } from "ng-simple-slideshow";

import { AppComponent } from "./app.component";

import { HomeComponent } from "./home-component/home.component";
import { PortfolioComponent } from "./portfolio-component/portfolio.component";
import { ContactComponent } from "./contact-component/contact.component";

const APP_ID = 'ccdesigns';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: APP_ID
    }),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
