import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CookieComponent } from './cookie/cookie.component';
import { CookieListComponent } from './cookie-list/cookie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CookieComponent,
    CookieListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
