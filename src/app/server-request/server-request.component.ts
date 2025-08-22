import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

Observable;
@Component({
  selector: 'app-server-request',
  templateUrl: './server-request.component.html',
  styleUrls: ['./server-request.component.css'],
})
@Injectable()
export class ServerRequestComponent {
  serverRequestComponent: any;

  url: string = 'http://localhost:8082/earthquakes';
  // url: string = 'http://18.188.176.94:8082/earthquakes';
  constructor(private http: HttpClient) { }

  getEarthquakes() {
    return this.http.get<any>(this.url);
  }
}
