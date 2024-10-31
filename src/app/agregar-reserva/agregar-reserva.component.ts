import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { Reserva, RespuestaReserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { SharedService } from '../shared.service';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-agregar-reserva',
  templateUrl: './agregar-reserva.component.html'
})
export class AgregarReservaComponent {

  reserva : Reserva=new Reserva();
  usuarios: Usuario[]=[];
  usuarioSeleccionado: Usuario;
  libros:Libro[]=[];
  libroSeleccionado:Libro| null=null;
  fechareservaSeleccionada:Date|null=null;

  constructor(private reservaService: ReservaService, private enrutador:Router, private usuarioServicio:UsuarioService, private libroServicio:LibroService, private shareService:SharedService){}


  onSubmit(){
    const fechaReservaOriginal=new Date(this.fechareservaSeleccionada!);
    fechaReservaOriginal.setDate(fechaReservaOriginal.getDate()+1)
    this.reserva.fechareserva=fechaReservaOriginal;
    this.reserva.idpersona=this.usuarioSeleccionado!.id;
    this.reserva.idlibro=this.libroSeleccionado!.id;
    this.reserva.estadoreserva=1;
    console.log(this.reserva);
    this.guardarReserva();
    
  }
  
  ngOnInit(){
    this.obtenerUsuarios();
    this.obtenerLibros();
    
  }

  guardarReserva(){



    this.reservaService.guardarReserva(this.reserva).subscribe(
      {

        
        next:(datos:RespuestaReserva)=>{

          if(datos.exitoso){
            this.irListaReservas();
          }else{
            this.shareService.changeRespuesta(datos);
            this.irRespuestaReserva();
          }
                    
        },
        error:(error:any)=>console.log(error)
      }
    )
  }

  irListaReservas(){
    this.enrutador.navigate(['/reservas'], { replaceUrl: true });
  }

  irRespuestaReserva(){
    this.enrutador.navigate(['respuesta-reserva']);

  }

  private obtenerUsuarios() {
    //Consumit los datos del observable de usuario.service
    this.usuarioServicio.obtenerUsuariosLista().subscribe(
      (datos=>{
        this.usuarios=datos;
      })
    );
  }

  private obtenerLibros(){
    this.libroServicio.obtenerLibrosLista().subscribe(
      (datos=>{
        this.libros=datos;
      })
    )

  }

  

}
