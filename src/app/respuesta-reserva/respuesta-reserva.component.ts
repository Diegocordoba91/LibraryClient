import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { console } from 'inspector';
import { RespuestaReserva } from '../reserva';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-respuesta-reserva',
  templateUrl: './respuesta-reserva.component.html'
})
export class RespuestaReservaComponent {
  reservaRespuesta: RespuestaReserva=new RespuestaReserva;
  constructor(private shareService:SharedService, private enrutador:Router){}

  ngOnInit(){
    this.shareService.currentRespuesta$.subscribe(
      respuesta=>{
        if(respuesta){
          this.reservaRespuesta=respuesta;
        }
      }
    )
  }

  cerrarModal(){
    this.enrutador.navigate(['/reservas']);
  }
}
