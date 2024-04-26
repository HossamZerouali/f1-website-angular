import { Component, inject } from '@angular/core';
import { Track } from '../../models/track.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.css'
})
export class TrackPageComponent {

  http = inject(HttpClient);
  tracks: Track[] = [];

  ngOnInit() {
    this.http.get<Track[]>('http://localhost:8080/read/tracks')
    .subscribe((data) => {
      this.tracks = data;
    });
  }
}
