// importo el modulo de rutas
import { RouterModule, Routes } from '@angular/router';

// importo los componentes que cree home y protegido
import {HomeComponent} from './components/home/home.component';
import {ProtegidaComponent} from './components/protegida/protegida.component';

// importo el authguard para el acceso protegido
import { AuthGuardService } from './services/auth-guard.service';


// asigno las rutas que voy a utilizar

const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },

// asigno el authGuard al link de protegido
{ path: 'protegida',
 component: ProtegidaComponent,
 canActivate: [ AuthGuardService ]
 },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


