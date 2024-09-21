import { Injectable } from '@angular/core';
import {
  ApiGenericService,
  ApiMultipartService,
  ApiService,
} from './api.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../constants/endpoints';
import { map } from 'rxjs';
import { ArticuloDTO_OUT } from '../models/articulo';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService extends ApiGenericService {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
  ) {
    super(httpClient, ENDPOINTS.URL_LOCAL, ENDPOINTS.ARTICULO);
  }

  async getAllArticulos(): Promise<ArticuloDTO_OUT[]> {
    return await this.apiService
      .get<any>(ENDPOINTS.URL_LOCAL, ENDPOINTS.ARTICULO)
      .pipe(
        map((response) => {
          if (response) {
            // console.log("response: ",response);
            return response;
          }
          return null;
        })
      )
      .toPromise();
  }
}
