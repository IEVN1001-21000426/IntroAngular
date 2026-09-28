import { Component } from '@angular/core';

@Component({
  selector: 'app-distancias',
  standalone: false,
  templateUrl: './distancias.html',
})

export class Distancias {

  x1: number = 0;
  y1: number = 0;

  x2: number = 0;
  y2: number = 0;

  distancia: number = 0;

  centroX: number = 200;
  centroY: number = 200;

  
  escala: number = 25;


  calcularDistancia() {

    let diferenciaX = this.x2 - this.x1;

    
    let diferenciaY = this.y2 - this.y1;

   
    this.distancia = Math.sqrt(
      (diferenciaX * diferenciaX) +
      (diferenciaY * diferenciaY)
    );

  }

  graficaX(x: number): number {

    return this.centroX + (x * this.escala);

  }


  graficaY(y: number): number {

    return this.centroY - (y * this.escala);

  }

}