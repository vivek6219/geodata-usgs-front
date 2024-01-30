import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServerRequestComponent } from './server-request/server-request.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent, ServerRequestComponent, BarChartComponent],
  imports: [NgChartsModule, BrowserModule, NgbModule, HttpClientModule],
  providers: [ServerRequestComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
