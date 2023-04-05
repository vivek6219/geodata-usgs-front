import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private isDarkMode = false;
  // private flag = false;

  toggle() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    console.log('Dark Mode status:' + this.isDarkMode);

    // if (this.flag == false) this.flag = true;
    // else this.flag = false;
    // console.log(this.flag);
  }
}
