import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { domainToASCII } from 'url';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html'
})
export class EditarLibroComponent {

  libro:Libro=new Libro;
  id:number;
  constructor (private libroService:LibroService, private ruta:ActivatedRoute, private enrutador:Router){}

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.libroService.obtenerLibroId(this.id).subscribe(
      {
        next: (datos)=> this.libro = datos
        ,
        error:(errores:any)=>console.log(errores)
      }
    )

  }

  onSubmit(){
    this.guardarLibro();
  }

  guardarLibro(){
    this.libroService.guardarLibro(this.libro).subscribe(
      {
        next:(datos)=>{
          this.irListaLibros();
        },
        error:(errores:any)=>console.log(errores)
          
      }
    )
  }

  irListaLibros(){
    this.enrutador.navigate(['/libros']);
  }

}
