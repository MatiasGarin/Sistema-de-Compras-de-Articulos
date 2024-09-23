import { ArticuloDTO_OUT } from "./articulo";

export class Pedido {
    idVendedor: number = 0;
    articulos: ArticuloDTO_OUT[] = [];
}

export class PedidoDTO_IN {
    idVendedor: number = 0;
    articulos: ArticuloDTO_OUT[] = [];
}