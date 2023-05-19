import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CarouselComponent} from './carousel/carousel.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TrailerComponent} from './trailer/trailer.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CarouselComponent,
    FontAwesomeModule,
    HeaderComponent,
    HttpClientModule,
    TrailerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
