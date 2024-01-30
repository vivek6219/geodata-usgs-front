import { Component, Input } from '@angular/core';

import { ServerRequestComponent } from '../server-request/server-request.component';
import { Chart } from 'chart.js/auto';
import { Feature, FeatureCollection } from '../geojson-interfaces';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  public chart: any;
  data: any[] = [];
  chartData: any[] = [];
  chartLabels: any[] = [];
  chartOptions: any = { aspectRatio: 2.5 };
  chartLegend = true;
  chartType = 'bar';

  constructor(private serverRequest: ServerRequestComponent) {}

  ngOnInit(): void {
    this.serverRequest.getEarthquakes().subscribe((geoJsonData) => {
      this.data = geoJsonData;
      this.processGeoJsonData(geoJsonData);
    });
  }

  private processGeoJsonData(geoJsonData: any): void {
    if (geoJsonData.type === 'FeatureCollection' && geoJsonData.features) {
      // Assuming you want to extract magnitude and place for each earthquake
      this.chartLabels = geoJsonData.features.map(
        (feature: { properties: { place: any } }) => feature.properties.place
      );
      console.log(this.chartLabels);
      this.chartData = [
        {
          data: geoJsonData.features.map(
            (feature: { properties: { mag: any } }) => feature.properties.mag
          ),
          label: 'Earthquake Magnitude',
        },
      ];
    }
  }

  showChartData() {}
}
//   createChart() {
//     const ctx = document.getElementById('MyChart') as HTMLCanvasElement;
//     this.chart = new Chart(ctx, {
//       type: 'bar', //this denotes tha type of chart

//       data: {
//         // values on X-Axis
//         labels: [
//           '2022-05-10',
//           '2022-05-11',
//           '2022-05-12',
//           '2022-05-13',
//           '2022-05-14',
//           '2022-05-15',
//           '2022-05-16',
//           '2022-05-17',
//         ],
//         datasets: [
//           {
//             label: 'Sales',
//             data: ['467', '576', '572', '79', '92', '574', '573', '576'],
//             backgroundColor: 'blue',
//           },
//           {
//             label: 'Profit',
//             data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
//             backgroundColor: 'limegreen',
//           },
//         ],
//       },
//       options: {
//         aspectRatio: 2.5,
//       },
//     });
//   }
// }

export type BarChartData = Chart<
  'bar',
  (number | [number, number] | null)[],
  unknown
>;
