import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverPageComponent } from './components/driver-page/driver-page.component';
import { ClasificationPageComponent } from './components/clasification-page/clasification-page.component';
import { ClasificationTeamsPageComponent } from './components/clasification-teams-page/clasification-teams-page.component';
import { TrackPageComponent } from './components/track-page/track-page.component';

const routes: Routes = [
  { path: 'drivers', component: DriverPageComponent },
  { path: 'clasification', component: ClasificationPageComponent },
  { path: 'teams', component: ClasificationTeamsPageComponent },
  { path: 'tracks', component: TrackPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
