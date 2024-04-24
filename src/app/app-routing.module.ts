import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverPageComponent } from './components/driver-page/driver-page.component';

const routes: Routes = [
  {path: 'drivers', component: DriverPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
