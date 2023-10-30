import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Foto } from '../Interfaces/foto';
@Injectable({
  providedIn: 'root'
})
export class FotoService {

  headersRequest = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  obterFotosAniversariante(aniversarioId: string): Observable<Foto[]> {
    return this.httpClient
    .get<Foto[]>(`${environment.url_API}/fotos/GetFotoPorAniversarioId?aniversarioId=${aniversarioId}`,{
      headers: this.headersRequest
    })
    .pipe(
      retry(0)
    );
  }
}
