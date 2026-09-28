import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromos',
  standalone: false,
  templateUrl: './palindromos.html',
})
export class Palindromos {
frase: string = '';

  numeroVocales: number = 0;
  numeroConsonantes: number = 0;

  vocales: string = '';
  consonantes: string = '';

  esPalindromo: boolean = false;

  analizar() {

    
    this.numeroVocales = 0;
    this.numeroConsonantes = 0;
    this.vocales = '';
    this.consonantes = '';

    let cadena: string = '';


    for (let i = 0; this.frase[i] !== undefined; i++) {

      let letra = this.frase[i];

      if (letra === 'A') letra = 'a';
      if (letra === 'E') letra = 'e';
      if (letra === 'I') letra = 'i';
      if (letra === 'O') letra = 'o';
      if (letra === 'U') letra = 'u';


      if (
        letra === 'a' ||
        letra === 'e' ||
        letra === 'i' ||
        letra === 'o' ||
        letra === 'u'
      ) 
      {

        this.numeroVocales++;
        this.vocales = this.vocales + letra;

      } else {

        if (
          (letra >= 'a' && letra <= 'z') ||
          (letra >= 'A' && letra <= 'Z')
        ) {

          this.numeroConsonantes++;
          this.consonantes = this.consonantes + letra;
        }
      }

      if (letra !== ' ') {
        cadena = cadena + letra;
      }
    }

    let cantidad: number = 0;

    while (cadena[cantidad] !== undefined) {
      cantidad++;
    }

    this.esPalindromo = true;

    for (let i = 0; i < cantidad; i++) {

      if (cadena[i] !== cadena[cantidad - 1 - i]) {
        this.esPalindromo = false;
      }
    }
  }
}
  

