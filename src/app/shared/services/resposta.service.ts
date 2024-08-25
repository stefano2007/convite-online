import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfirmaPresenca } from '../Interfaces/confirmaPresenca';

@Injectable({
  providedIn: 'root'
})
export class RespostaService {

  headersRequest = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  salvarRespostaPresenca(resposta : ConfirmaPresenca): Observable<ConfirmaPresenca> {

    if(resposta.id){
      return this.httpClient
      .put<ConfirmaPresenca>(`${environment.url_API}/respostas/${resposta.id}`,
      resposta,
      {
        headers: this.headersRequest
      })
      .pipe(
        retry(0)
      );
    }

    return this.httpClient
    .post<ConfirmaPresenca>(`${environment.url_API}/respostas`,
    resposta,
    {
      headers: this.headersRequest
    })
    .pipe(
      retry(0)
    );
  }

}
