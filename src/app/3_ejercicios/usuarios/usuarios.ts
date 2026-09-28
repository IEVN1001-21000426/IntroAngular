import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
})

export class Usuarios {

  usuarioCorrecto: string = 'anibal';
  contraseniaCorrecta: string = '12345';

  mensaje: string = '';

  
  validarUsuario(usuario: string, contrasenia: string) {
   
    if (usuario !== this.usuarioCorrecto) {

      this.mensaje = 'El nombre de usuario no es valido.';

    }
    
    else if (contrasenia !== this.contraseniaCorrecta) {

      this.mensaje = 'La contraseña no es valida.';
    }

    else {

      this.mensaje = 'Bienvenido al sistema, ' + usuario + '.';

    }

  }

}