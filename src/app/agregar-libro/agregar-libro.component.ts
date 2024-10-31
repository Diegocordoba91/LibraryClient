import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html'
})
export class AgregarLibroComponent {
  libro: Libro = new Libro;

  constructor (private libroService:LibroService, private router:Router){}

  onSubmit(){
    this.guardarLibro();
  }

  guardarLibro(){

    this.libroService.guardarLibro(this.libro).subscribe(

      {
        next:(datos)=>{
          this.irListaLibros();
        },
        error:(error:any)=>console.log(error)
      }

    )

  }

  irListaLibros(){
    this.router.navigate(['/libros']);
  }

}
