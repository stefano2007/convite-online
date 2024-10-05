import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aniversariante } from '../Interfaces/aniversariante';
import { retry, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AniversarianteDTO } from '../Interfaces/aniversarianteDTO';

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

  obterAniversariante(slug: string): Observable<Aniversariante> {
    return this.httpClient
    .get<Aniversariante>(`${environment.url_API}/Aniversarios/GetAniversarioPorSlug?slug=${slug}`,{
      headers: this.headersRequest
    })
    .pipe(
      retry(0)
    );
  }

  salvar(requisicao : AniversarianteDTO): Observable<AniversarianteDTO> {

    if(requisicao.id){
      return this.httpClient
      .put<AniversarianteDTO>(`${environment.url_API}/Aniversarios?id=${requisicao.id}`,
        requisicao,
      {
        headers: this.headersRequest
      })
      .pipe(
        retry(0)
      );
    }

    return this.httpClient
    .post<AniversarianteDTO>(`${environment.url_API}/Aniversarios`,
      requisicao,
    {
      headers: this.headersRequest
    })
    .pipe(
      retry(0)
    );
  }

}
