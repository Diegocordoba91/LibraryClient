export class Reserva{
    id: number;
    idpersona: number;
    idlibro: number;
    fechareserva: Date; // Considera usar Date si prefieres manejar fechas como objetos
    estadoreserva: number;
    fechadevolucion: Date; // Igual que arriba, podrías usar Date

}

export class RespuestaReserva{
    exitoso: boolean;
    mensaje: string;
    reserva: Reserva;
    persona: string;
    libro: string;
}
