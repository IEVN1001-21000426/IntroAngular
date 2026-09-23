import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class Areas {
areaRectangulo: number= 0;
areaCirculo: number= 0;
areaTriangulo: number= 0;
areaPentagono: number=0;
figuraArea: string= '';

calcularRectangulo(base: number, altura: number){
  this.areaRectangulo = base + altura;
}

calcularCirculo(radio: number){
  this.areaCirculo = Math.PI*radio*radio;
}

calcularTriangulo(base:number, altura:number){
  this.areaTriangulo= (base*altura)/2;
}

calcularPentagono(perimetro:number, apotema:number){
  this.areaPentagono= (perimetro*apotema)/2;
}
}
