import { Component, Injectable } from '@angular/core';
import { ServerRequestComponent } from './server-request/server-request.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable()
export class AppComponent {
  title = 'geodata-usgs-front';
  jsonData: any;

  constructor(private eqData: ServerRequestComponent) { }

  ngOnInit() {
    // console.log("I AM BEING CALLED");
    this.eqData.getEarthquakes().subscribe((result) => {
      console.log("result", result);
      this.jsonData = result;
      // console.log(this.jsonData);
    });
  }

  sortByMagnitude() {
    this.jsonData.sort(
      (
        a: { featureslocaleCompare: (arg0: any) => any },
        b: { features: any }
      ) => a.featureslocaleCompare(b.features)
    );

    // console.log(this.jsonData);
  }
}
