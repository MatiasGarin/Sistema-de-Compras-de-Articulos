import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENDPOINTS } from '../constants/endpoints';
import { map } from 'rxjs';
import { ArticuloDTO_OUT } from '../models/articulo';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
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

  public getAllArticulos<T>(): Promise<ArticuloDTO_OUT[]> {
    let url = `${ENDPOINTS.URL_LOCAL}${ENDPOINTS.ARTICULO}`;
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
