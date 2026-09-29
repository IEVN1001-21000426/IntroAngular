import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { Areas } from './3_ejercicios/areas/areas';
import { Usuarios } from './3_ejercicios/usuarios/usuarios';
import { Palindromos } from './3_ejercicios/palindromos/palindromos';
import { FormsModule } from '@angular/forms';
import { Distancias } from './formulario/distancias/distancias';
import { Cinepolis } from './cinepolis/cinepolis';

@NgModule({
  declarations: [App, HeroesList, Areas, Usuarios, Palindromos, Distancias, Cinepolis],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
