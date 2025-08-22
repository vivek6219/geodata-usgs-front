import { Component, OnInit } from '@angular/core';

import { ServerRequestComponent } from '../server-request/server-request.component';
import { ScatterDataPoint } from './ScatterDataPointInterface';
import { Chart, Tooltip, TooltipItem, plugins } from 'chart.js/auto';
import { map } from 'rxjs';
import { callback } from 'chart.js/dist/helpers/helpers.core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  public scatterChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        type: 'linear',
        position: 'left',
      },
      mag: {
        type: 'linear',
        position: 'left',
      },
      // plugins: {
      //   tooltip: {
      //     backgroundColor: 'rgba(0, 0, 0, 0.8)',
      //     callbacks: {
      //       label: function (context: TooltipItem<'scatter'>) {
      //         const data = context.raw as ScatterDataPoint;
      //         return `Place: ${data.label}, Mag: ${data.mag}`;
      //       },
      //     },
      //   },
      // },
    },
  };

  public scatterChartLabels: string[] = [];
  public scatterChartData: any[] = [{ data: [] }];
  data: any;
  chartType = 'scatterChartType';

  constructor(private request: ServerRequestComponent) { }

  ngOnInit(): void {
    //fetch earthquake data
    this.request.getEarthquakes().subscribe((geoJsonData) => {
      this.processGeoJsonData(geoJsonData);
    });
  }

  processGeoJsonData(geoJsonData: any): void {
    if (geoJsonData.type === 'FeatureCollection' && geoJsonData.features) {
      this.scatterChartLabels = geoJsonData.features.map(
        (feature: { properties: { place: any } }) => feature.properties.place
      );
      this.scatterChartData[0].data = geoJsonData.features.map(
        (feature: {
          geometry: { coordinates: any[] };
          properties: { mag: number; place: string };
        }) => ({
          x: feature.geometry.coordinates[0], // Longitude
          y: feature.geometry.coordinates[1], // Latitude
          r: feature.properties.mag * 5, // Radius proportional to magnitude
          mag: feature.properties.mag,
        })
      );
    }
    console.log(this.scatterChartLabels);
    // this.scatterChartLabels = Array.from(
    //   Array(this.scatterChartData[0].data.length).keys()
    // ).map(String);
  }
}
