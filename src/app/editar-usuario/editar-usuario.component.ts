import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html'
})
export class EditarUsuarioComponent {

  usuario : Usuario = new Usuario;
  id: number;

  constructor(private usuarioService: UsuarioService, private ruta: ActivatedRoute, private enrutador: Router){}
  
  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.usuarioService.obtenerUsuarioId(this.id).subscribe(
      {
        next: (datos)=> this.usuario = datos
        ,
        error:(errores:any)=>console.log(errores)
      }
    );
    
  }

  onSubmit(){

    this.guardarUsuario();

  }
  guardarUsuario(){
    this.usuarioService.agregarUsuario(this.usuario).subscribe(
      {
        next:(datos)=>{
          this.irListaUsuarios()
        },
        error:(error:any)=>console.log(error)
      
    }
    )
  }

  irListaUsuarios(){
    this.enrutador.navigate(['/usuarios']);
  }




}
