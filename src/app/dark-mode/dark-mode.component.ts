import { Component, Injectable } from '@angular/core';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'app-dark-mode',
  // templateUrl: './dark-mode.component.html',
  template: `<button (click)="toggleDarkMode()">Toggle Dark Mode</button> `,
  styleUrls: ['./dark-mode.component.css'],
})
@Injectable()
export class DarkModeComponent {
  private isDarkModeComp = false;
  constructor(private darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.isDarkModeComp = !this.isDarkModeComp;
    this.darkModeService.toggle();
  }
}
