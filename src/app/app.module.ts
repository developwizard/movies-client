import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CarouselComponent} from './carousel/carousel.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarouselComponent,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
