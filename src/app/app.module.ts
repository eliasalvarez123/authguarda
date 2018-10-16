import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// agregando los modulos de formularios y http
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// agregando el modulo de rutas
import { APP_ROUTING } from './app.routes';

// agregando modulo de componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

// agregando servicios

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
