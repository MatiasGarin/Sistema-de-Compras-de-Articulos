export class Cliente {
  id: number = 0;
  razonSocial: string = '';
  direccion: string = '';
  cuit: number = 0;
  codigoSap: string = '';
  sociedadUte: string = '';
  percepcionIva: boolean;
  puntoDeVenta: string = '';
  condicionDePago: string = '';
  grupo: string = '';
  metodoDeEnvio?: number = 0;
  mail?: string = '';
  contrasenia?: string = '';
  usuario?: string = '';
}

export class ClienteDTO_OUT {
  id: number;
  razonSocial: string;
  direccion: string;
  cuit: number;
  sociedadUte: string;
  percepcionIva: boolean;
  puntoDeVenta: string;
  condicionDePago: string;
}
