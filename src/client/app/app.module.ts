import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SlideshowModule } from "ng-simple-slideshow";

import { AppComponent } from "./app.component";

import { HomeComponent } from "./home-component/home.component";
import { PortfolioComponent } from "./portfolio-component/portfolio.component";
import { ContactComponent } from "./contact-component/contact.component";
import { HoverBoxComponent } from "./components/hover-box-component/hover-box.component";

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
    ContactComponent,
    HoverBoxComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), SlideshowModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
