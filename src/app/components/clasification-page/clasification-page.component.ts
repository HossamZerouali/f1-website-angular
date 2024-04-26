import { Component, inject } from '@angular/core';
import { Driver } from '../../models/driver.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clasification-page',
  templateUrl: './clasification-page.component.html',
  styleUrl: './clasification-page.component.css'
})
export class ClasificationPageComponent {
  http = inject(HttpClient);
  drivers: Driver[] = [];

  ngOnInit() {
    this.http.get<Driver[]>('http://localhost:8080/read/drivers')
      .subscribe((data) => {
        this.drivers = data.sort((a, b) => b.points - a.points);
        this.drivers.forEach((driver, index) => {
          driver.position = index + 1;
        });
      });
  }
}
