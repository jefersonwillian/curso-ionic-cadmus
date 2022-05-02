/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestMethodEnum } from '../enums/request-method.enum';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public customHeaders = {
    'Content-Type': 'application/json',
  };

  constructor(
    public httpClient: HttpClient,
    public networkService: NetworkService
  ) {}

  public async request(
    url: string,
    body?: any,
    requestMethod = RequestMethodEnum.POST
  ) {
    if (!this.networkService.isOnline()) {
      return this.networkService.messageToastNetwork();
    }

    let request: Promise<any>;

    const httpOptions = { headers: new HttpHeaders(this.customHeaders) };

    switch (requestMethod) {
      case RequestMethodEnum.GET:
        request = this.httpClient.get(url, httpOptions).toPromise();
        break;

      case RequestMethodEnum.DELETE:
        request = this.httpClient.delete(url, httpOptions).toPromise();
        break;

      case RequestMethodEnum.PUT:
        request = this.httpClient.put(url, body, httpOptions).toPromise();
        break;

      case RequestMethodEnum.POST:
        request = this.httpClient.post(url, body, httpOptions).toPromise();
        break;

      default:
        throw new Error('Método ' + requestMethod + ' inválido');
    }

    let response: any;

    try {
      response = await request;
    } catch (error) {
      this.errorHandler(error);
    }

    return response;
  }

  protected errorHandler(error: any) {
    if (error) {
      throw error.toString();
    } else {
      throw 'Não é possível concluir a ação solicitada. Por favor, tente novamente';
    }
  }
}
