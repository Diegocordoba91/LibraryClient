import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html'
})
export class LibroListaComponent {
  libros: Libro[];
  filtrosLibro:Libro=new Libro;

  constructor(private libroServicio:LibroService, private enrutador:Router){}

  ngOnInit(){
    this.obtenerLibros();
    this.filtrosLibro.titulo='';

  }

  private obtenerLibros(){

    this.libroServicio.obtenerLibrosLista().subscribe(
      (datos=>{
        this.libros=datos;
      })
    );


  }


  editarLibro(id: number){
    this.enrutador.navigate(['editar-libro',id]);
    
  }

  filtrar(){

    const resultados = this.libros.filter(libro=>{
      return(
              (this.filtrosLibro.titulo===''||libro.titulo.toLowerCase().toString().includes(this.filtrosLibro.titulo.toLowerCase()))
        )
    })
    return resultados
  }
  

}
