import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENDPOINTS } from '../constants/endpoints';
import { map } from 'rxjs';
import { PedidoDTO_IN } from '../models/pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'NOSNIFF',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Permitted-Cross-Domain-Policies': 'master-only',
      'X-XSS-Protection': '1;mode=block',
      'Access-Control-Allow-Origin': '*',
      'Referrer-Policy': 'strict-origin',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    }),
  };

  constructor(
    private httpClient: HttpClient,
  ) {
  }


  async validarPedido(pedidoDTO_IN: PedidoDTO_IN): Promise<any> {
    var data = this.generarFormDataPedido(pedidoDTO_IN);
    console.log("data: ", data);
    let url = `${ENDPOINTS.URL_LOCAL}${ENDPOINTS.PEDIDO}`;

    return this.httpClient
    .post<any>(url, data)
      .pipe(
        map((response) => {
          if (!response.isError) {
            return response;
          }
          return response.responseException;
        })
      )
      .toPromise();
  }

  generarFormDataPedido(pedidoDTO_IN: PedidoDTO_IN) {
    var formData = new FormData();
    // console.log("formdata: ", pedidoDTO_IN);
    formData.append('idVendedor', pedidoDTO_IN.idVendedor ? pedidoDTO_IN.idVendedor.toString() : '0');
    
    for(let i = 0; i < pedidoDTO_IN.articulos.length; i++) {
      formData.append(
        `articulos[${i}].codigo`,
        pedidoDTO_IN.articulos[i].codigo
      );
      formData.append(
        `articulos[${i}].descripcion`,
        pedidoDTO_IN.articulos[i].descripcion
      );
      formData.append(
        `articulos[${i}].precio`,
        pedidoDTO_IN.articulos[i].precio ? pedidoDTO_IN.articulos[i].precio.toString() : '0'
      );
      formData.append(
        `articulos[${i}].deposito`,
        pedidoDTO_IN.articulos[i].deposito.toString() ? pedidoDTO_IN.articulos[i].deposito.toString() : '0'
      );
    }

    console.log("formdata", formData);

    return formData;
  }
}
