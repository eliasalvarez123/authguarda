import { Component, OnInit } from '@angular/core';

// llama el servicio para verificar el usuario
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  profile: any;

  constructor( private auth:AuthService ) { }

// verifica si el perfil del usuario esta en auth0

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      // mensaje en consola sobre la informacion del usuario
      console.log(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        // mensaje en consola sobre la informacion del usuario
        console.log(this.profile);
      });
    }


  }

}
