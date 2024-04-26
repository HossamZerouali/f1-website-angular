import { Component, Input } from '@angular/core';
import { Track } from './../../models/track.model';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrl: './track.component.css'
})
export class TrackComponent {
  @Input() track!: Track;
}
