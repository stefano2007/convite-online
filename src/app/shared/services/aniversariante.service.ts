import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aniversatiante } from '../Interfaces/aniversariante';
import { retry, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  obterAniversariante(nome: string): Observable<Aniversatiante> {
    return this.httpClient
    .get<Aniversatiante>(`${environment.url_API}/aniversarios/${nome}`,{
      headers: this.headersRequest
    })
    .pipe(
      retry(0)
    );
  }
}
