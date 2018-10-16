// importando modulos de angular y el modulo auth0

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

// designando las clase authservice y asignando
// autenticacion para usar el servicio de auth0

@Injectable()
export class AuthService {

  // muestra el perfil del usuario de auth0
  userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: 'c91d0x43OCzNGeVWkh2s4nJKEyVi3E68',
    domain: 'eliasalvarez.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });

  constructor(public router: Router) {}

// metodo de login

  public login(): void {
    this.auth0.authorize();
  }

// estable el servicio que se va a utilizar
public handleAuthentication(): void {
  this.auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      window.location.hash = '';
      this.setSession(authResult);
      this.router.navigate(['/home']);
    } else if (err) {
      this.router.navigate(['/home']);
      console.log(err);
    }
  });
}

private setSession(authResult): void {
  // CArgan las variables que vienen del servicio
  const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);
}

public logout(): void {
  // Metodo para salir del servicio
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
  // Vuelve a ruta de inicio
  this.router.navigate(['/']);
}

public isAuthenticated(): boolean {
  // Metodo que comprueba si esta el usuario autenticado o no

  const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
  return new Date().getTime() < expiresAt;
}
// metodo para mostrar el prefil del usuario autenticado en auth0
public getProfile(cb): void {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    throw new Error('Access Token must exist to fetch profile');
  }

  const self = this;
  this.auth0.client.userInfo(accessToken, (err, profile) => {
    if (profile) {
      self.userProfile = profile;
    }
    cb(err, profile);
  });
}

}