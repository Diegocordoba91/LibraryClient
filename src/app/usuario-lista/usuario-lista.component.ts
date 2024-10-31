import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
})
export class UsuarioListaComponent {
  usuarios: Usuario[];
  
  constructor (private usuarioServicio: UsuarioService, private enrutador: Router ){}
    //Se cargan los usuarios
    ngOnInit(){
      this.obtenerUsuarios();
    }

    private obtenerUsuarios() {
      //Consumit los datos del observable de usuario.service
      this.usuarioServicio.obtenerUsuariosLista().subscribe(
        (datos=>{
          this.usuarios=datos;
        })
      );
    }

    editarUsuario(id: number){
      this.enrutador.navigate(['editar-usuario',id]);    
    }

  
}
