import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServerRequestComponent } from './server-request/server-request.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { D3ChartsComponent } from './d3-charts/d3-charts.component';
import { DeckScatterComponent } from "./deck-scatter/deck-scatter.component";

@NgModule({
  declarations: [AppComponent, ServerRequestComponent, BarChartComponent,],
  providers: [ServerRequestComponent, AppComponent],
  bootstrap: [AppComponent],
  imports: [
    NgChartsModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    D3ChartsComponent,
    DeckScatterComponent
  ],
})
export class AppModule { }
