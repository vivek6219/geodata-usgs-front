import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServerRequestComponent } from './server-request/server-request.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';

@NgModule({
  declarations: [AppComponent, ServerRequestComponent, DarkModeComponent],
  imports: [BrowserModule, NgbModule, HttpClientModule],
  providers: [ServerRequestComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
