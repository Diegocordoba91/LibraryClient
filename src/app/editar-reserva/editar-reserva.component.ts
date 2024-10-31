import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'node:path';
import { domainToASCII } from 'node:url';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { Reserva, RespuestaReserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html'
})

export class EditarReservaComponent {

  respuestaReserva:RespuestaReserva=new RespuestaReserva;
  reserva:Reserva=new Reserva;
  id:Number;
  libroSeleccionado:Libro;
  fechadevolucionSeleccionada:Date|null=null;
  fechaCorregida:Date|null=null;
  constructor(private respuestaService:ReservaService, private ruta:ActivatedRoute,private enrutador:Router,private usuarioServicio:UsuarioService,private libroService:LibroService){}

  onSubmit(){
        
    this.guardarReserva();
    
  }

  private guardarReserva(){
    this.reserva=this.respuestaReserva.reserva;
    const fechaDevolucionOriginal= new Date(this.fechadevolucionSeleccionada!);
    const fechaReservaOriginal=new Date(this.reserva.fechareserva);
    fechaReservaOriginal.setDate(fechaReservaOriginal.getDate()+1);
    fechaDevolucionOriginal.setDate(fechaDevolucionOriginal.getDate()+1)
    this.reserva.fechareserva=fechaReservaOriginal;
    this.reserva.fechadevolucion=fechaDevolucionOriginal;
    this.reserva.estadoreserva=0;
    console.log(this.reserva);
    
    this.respuestaService.guardarReserva(this.reserva).subscribe(
      {
        next:(datos:RespuestaReserva)=>{
          console.log(datos);
          this.irListaReservas();
          
        },error:(error:any)=>{
          console.log(error);
        }
                
      })
  }  


  


  ngOnInit(){

    this.id=this.ruta.snapshot.params['id'];
    this.respuestaService.obtenerReservaID(this.id).subscribe(
      {
        next: (datos)=>this.respuestaReserva=datos
        ,
        error:(errores:any)=>console.log(errores)
      }
    )  
    

  }

  irListaReservas(){

  this.enrutador.navigate(['/reservas'],{ replaceUrl: true })    
  }

  
  


}
