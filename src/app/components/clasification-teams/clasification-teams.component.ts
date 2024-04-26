import { Component, Input } from '@angular/core';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-clasification-teams',
  templateUrl: './clasification-teams.component.html',
  styleUrl: './clasification-teams.component.css'
})
export class ClasificationTeamsComponent {
  @Input() team!: Team;
}
