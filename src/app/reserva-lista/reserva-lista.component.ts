import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaReserva } from '../reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva-lista',
  templateUrl: './reserva-lista.component.html'
})
export class ReservaListaComponent {
  respuestaReservas: RespuestaReserva[];
  filtros:RespuestaReserva =new RespuestaReserva;


  constructor(private reservaServicio:ReservaService, private enrutador : Router){}

  ngOnInit(){
    this.obtenerReservas();
    this.filtros.persona='';
    this.filtros.libro='';
  }
  
  obtenerReservas(){
    this.reservaServicio.obtenerReservaLista().subscribe(
      (datos=>{
        this.respuestaReservas=datos;
        this.respuestaReservas.sort((a,b)=>b.reserva.id-a.reserva.id);
      })
    
    );
      
  }
  
  editarReserva(id:number){
    this.enrutador.navigate(['editar-reserva',id])
  }

  filtrar(){
    
    const resultados= this.respuestaReservas.filter(reserva=>{
      return(
        (this.filtros.persona===''|| reserva.persona.toLowerCase().includes(this.filtros.persona.toLowerCase())) &&
        (this.filtros.libro===''|| reserva.libro.toLowerCase().includes(this.filtros.libro.toLowerCase()))
      );
    })
    return resultados.sort((a,b)=>b.reserva.id- a.reserva.id)
  }
}
