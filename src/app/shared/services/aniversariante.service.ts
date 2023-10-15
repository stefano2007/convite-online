import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aniversariante } from '../Interfaces/aniversariante';
import { retry, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Foto } from '../Interfaces/foto';
import { ConfirmaPresenca } from '../Interfaces/confirmaPresenca';

@Injectable({
  providedIn: 'root'
})
export class AniversarianteService {

  headersRequest = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  obterAniversariante(nome: string): Observable<Aniversariante> {
    return this.httpClient
    .get<Aniversariante>(`${environment.url_API}/aniversarios/${nome}`,{
      headers: this.headersRequest
    })
    .pipe(
      retry(0)
    );
  }

  obterFotosAniversariante(): Observable<Foto[]> {
    return this.httpClient
    .get<Foto[]>(`${environment.url_API}/fotos`,{
      headers: this.headersRequest
    })
    .pipe(
      retry(0)
    );
  }

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
