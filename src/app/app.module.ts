import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImagenPrincipalComponent } from './components/imagen-principal/imagen-principal.component';
import { DriverComponent } from './components/driver/driver.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagenPrincipalComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }