import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { FormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { ReservaListaComponent } from './reserva-lista/reserva-lista.component';
import { AgregarReservaComponent } from './agregar-reserva/agregar-reserva.component';
import { RespuestaReservaComponent } from './respuesta-reserva/respuesta-reserva.component';
import { EditarReservaComponent } from './editar-reserva/editar-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListaComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
    LibroListaComponent,
    EditarLibroComponent,
    AgregarLibroComponent,
    ReservaListaComponent,
    AgregarReservaComponent,
    RespuestaReservaComponent,
    EditarReservaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
