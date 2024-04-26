import { Component, inject } from '@angular/core';
import { Team } from '../../models/team.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clasification-teams-page',
  templateUrl: './clasification-teams-page.component.html',
  styleUrl: './clasification-teams-page.component.css'
})
export class ClasificationTeamsPageComponent {
  http = inject(HttpClient);
  teams: Team[] = [];

  ngOnInit() {
    this.http.get<Team[]>('http://localhost:8080/read/teams')
      .subscribe((data) => {
        this.teams = data.sort((a, b) => b.points - a.points);
        this.teams.forEach((team, index) => {
          team.position = index + 1;
        });
      }
    );
  }
}
