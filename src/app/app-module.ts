import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { Areas } from './formularios/areas/areas';
import { Usuarios } from './formularios/usuarios/usuarios';

@NgModule({
  declarations: [App, HeroesList, Areas, Usuarios],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
