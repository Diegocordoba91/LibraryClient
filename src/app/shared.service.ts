import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RespuestaReserva } from './reserva';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private respuestaSource= new BehaviorSubject<RespuestaReserva | null>(null);
  currentRespuesta$= this.respuestaSource.asObservable();

  changeRespuesta(respuesta:RespuestaReserva){
    this.respuestaSource.next(respuesta);

  }
}
