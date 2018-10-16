import { Component, OnInit } from '@angular/core';

// importo el servicio de autenticado
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent  {

// asigno el servicio a la barra

  constructor( private auth:AuthService) {
    auth.handleAuthentication();
   }


// asigno la funcion de login
login(){
  this.auth.login();
}

// asigno la funcion de salir
salir(){
  this.auth.logout();
}

}
