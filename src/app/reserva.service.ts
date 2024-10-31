import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Reserva, RespuestaReserva} from './reserva';


@Injectable({//Permite usar servicios desde otras clases
    providedIn: 'root'
  })

export class ReservaService{
    
    private  urlGetReservas="http://localhost:8080/libraryAppDev/GetReservas"
    private urlPostReservas="http://localhost:8080/libraryAppDev/PostGuardarReserva"

    constructor (private httpclient: HttpClient){}

    obtenerReservaLista():Observable<RespuestaReserva[]>{
      return this.httpclient.get<RespuestaReserva[]>(this.urlGetReservas);
    }

    guardarReserva(reserva: Reserva):Observable<RespuestaReserva>{
      return this.httpclient.post<RespuestaReserva>(this.urlPostReservas, reserva);

    }

    obtenerReservaID(id: Number):Observable<RespuestaReserva>{
      return this.httpclient.get<RespuestaReserva>(`${this.urlGetReservas}/${id}`)
    }
}