import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENDPOINTS } from '../constants/endpoints';
import { map } from 'rxjs';
import { VendedorDTO_OUT } from '../models/vendedor';

@Injectable({
  providedIn: 'root',
})
export class VendedorService {
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


  public getAllVendedores<T>(): Promise<VendedorDTO_OUT[]> {
    let url = `${ENDPOINTS.URL_LOCAL}${ENDPOINTS.VENDEDOR}`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(
        map((response) => {
          // console.log('Response from API:', response);
          if (!response.isError) {
            return response;
          }
          return response.responseException;
        })
      )
      .toPromise();
  }
}
