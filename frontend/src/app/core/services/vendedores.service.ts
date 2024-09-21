import { Injectable } from '@angular/core';
import {
  ApiGenericService,
  ApiMultipartService,
  ApiService,
} from './api.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../constants/endpoints';
import { map } from 'rxjs';
import { VendedorDTO_OUT } from '../models/vendedor';

@Injectable({
  providedIn: 'root',
})
export class VendedorService extends ApiGenericService {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
    private apiMultiPartService: ApiMultipartService
  ) {
    super(httpClient, ENDPOINTS.URL_LOCAL, ENDPOINTS.VENDEDOR);
  }

  async getAllArticulos(): Promise<VendedorDTO_OUT[]> {
    return await this.apiService
      .get<any>(ENDPOINTS.URL_LOCAL, ENDPOINTS.VENDEDOR)
      .pipe(
        map((response) => {
          if (response) {
            return response;
          }
          return null;
        })
      )
      .toPromise();
  }
}
