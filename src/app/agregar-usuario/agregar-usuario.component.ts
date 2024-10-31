import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'node:console';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import {AppModule} from '../app.module'

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
})

export class AgregarUsuarioComponent {
    usuario: Usuario = new Usuario();


    constructor(private usuarioServicio: UsuarioService, private enrutador: Router){}

    onSubmit(){
      this.guardarUsuario();
    }

    guardarUsuario(){
      this.usuarioServicio.agregarUsuario(this.usuario).subscribe(
        {
          next:(datos)=>{
            this.irListaUsuarios();
          },
          error:(error:any)=>console.log(error)
        }
      )
    }

    irListaUsuarios(){
      this.enrutador.navigate(['/usuarios']);
    }
}
