import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { AgregarReservaComponent } from './agregar-reserva/agregar-reserva.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { EditarReservaComponent } from './editar-reserva/editar-reserva.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { ReservaListaComponent } from './reserva-lista/reserva-lista.component';
import { RespuestaReservaComponent } from './respuesta-reserva/respuesta-reserva.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';

const routes: Routes = [
  {path:'usuarios',component:UsuarioListaComponent},
  {path:'',redirectTo:'usuarios',pathMatch:'full'},
  {path:'agregar-usuario',component: AgregarUsuarioComponent},
  {path:'editar-usuario/:id', component: EditarUsuarioComponent},
  {path: 'libros',component: LibroListaComponent},
  {path:'',redirectTo:'libros',pathMatch:'full'},
  {path:'editar-libro/:id',component:EditarLibroComponent},
  {path:'agregar-libro', component: AgregarLibroComponent},
  {path: 'reservas' , component:ReservaListaComponent},
  {path:'',redirectTo:'reservas',pathMatch:'full'},
  {path:'agregar-reserva',component:AgregarReservaComponent},
  {path: 'respuesta-reserva', component:RespuestaReservaComponent},
  {path:'editar-reserva/:id', component:EditarReservaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
