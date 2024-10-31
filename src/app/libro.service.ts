import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Libro } from "./libro";
import { Observable } from 'rxjs';




@Injectable({//Permite usar servicios desde otras clases
    providedIn: 'root'
  })


export class LibroService{
    private urlGetLibros ="http://localhost:8080/libraryAppDev/GetLibros";
    private urlPostLibros="http://localhost:8080/libraryAppDev/PostLibros";
    
    libros: Libro[];

    constructor(private clienteHttp: HttpClient){}

    obtenerLibrosLista(): Observable<Libro[]>{
        return this.clienteHttp.get<Libro[]>(this.urlGetLibros);
    }

    obtenerLibroId(id: number):Observable<Libro>{
        return this.clienteHttp.get<Libro>(`${this.urlGetLibros}/${id}`)
    }
    
    guardarLibro(libro: Libro):Observable<object>{
        return this.clienteHttp.post(this.urlPostLibros,libro)

    }
    

    
}