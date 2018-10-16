import { Injectable } from '@angular/core';

// importando modulos de angular router para validar rutas
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate } from '@angular/router';
// importo el servicio para verificar si estoy autenticado         
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService) { }

// utiliza el servicio de CanActive para verificar si esta logueado
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ){

    console.log(next);

// Si esta logueado entra al pagina protegida
  if( this.auth.isAuthenticated() ){
    console.log("Paso el guard");
    return true;
    
// si no muestra en mensaje de consola y no permite el pasoa la pagina protegida
  }else{
    console.error("Bloqueo por el guard");
    return false;
  }
  
  }
}
