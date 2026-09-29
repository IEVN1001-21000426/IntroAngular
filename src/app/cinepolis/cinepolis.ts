import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  nombre:string='';
  cantidadCompradores:number=0;
  tarjetaCineco:string='no';
  cantidadBoletos:number=0;
  valorPagar:number=0;
  mensaje:string='';

  procesar(): void{
const precioBoleto=12;
const maximoBoletos=this.cantidadCompradores*7;
if(this.cantidadBoletos>maximoBoletos){

  this.mensaje='no se pueden comprar más de 7 boletos por persona';
  this.valorPagar=0;
  return;
}

let total=this.cantidadBoletos*precioBoleto;

if(this.cantidadBoletos>5){
  total=total-(total*0.15);
}

else if(this.cantidadBoletos>=3){
  total=total-(total*0.10);
}

if(this.tarjetaCineco==='sí'){
  total=total-(total*0.10)
}

this.valorPagar=total;

this.mensaje='compra procesada correctamente';
  }

  salir():void{
    this.nombre='';
    this.cantidadCompradores=0;
    this.tarjetaCineco='no';
    this.cantidadBoletos=0;
    this.valorPagar=0;
    this.mensaje=''
  }
}
