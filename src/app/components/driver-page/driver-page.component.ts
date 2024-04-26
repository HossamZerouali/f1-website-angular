import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from './../../models/driver.model';

@Component({
  selector: 'app-driver-page',
  templateUrl: './driver-page.component.html',
  styleUrl: './driver-page.component.css'
})
export class DriverPageComponent {

  http = inject(HttpClient);
  drivers: Driver[] = [];

  ngOnInit() {
    this.http.get<Driver[]>('http://localhost:8080/read/drivers')
      .subscribe((data) => {
        this.drivers = data.sort((a, b) => b.points - a.points);

      });
  }

}
