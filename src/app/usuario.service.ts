import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from './libro';
import { Usuario } from './usuario';

@Injectable({//Permite usar servicios desde otras clases
  providedIn: 'root'
})

export class UsuarioService {

    private urlGetUsuarios ="http://localhost:8080/libraryAppDev/GetUsuarios";
    private urlPostUsuarios ="http://localhost:8080/libraryAppDev/PostUsuarios";

    

  constructor(private clienteHttp: HttpClient) { 
    }

  obtenerUsuariosLista(): Observable<Usuario[]>{
      return this.clienteHttp.get<Usuario[]>(this.urlGetUsuarios);
  }

  agregarUsuario(usuario: Usuario): Observable<object>{
    return this.clienteHttp.post(this.urlPostUsuarios, usuario);
  }

  obtenerUsuarioId(id: number){
    return this.clienteHttp.get<Usuario>(`${this.urlGetUsuarios}/${id}`)
  }

  



  
}
