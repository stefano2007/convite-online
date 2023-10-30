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

  obterAniversariante(): Observable<Aniversariante> {

    let nome = this.obterSlugPesquisa();
    return this.httpClient
    .get<Aniversariante>(`${environment.url_API}/aniversarios/GetAniversarioPorSlug?slug=${nome}`,{
      headers: this.headersRequest
    })
    .pipe(
      retry(0)
    );
  }

  salvarSlugPesquisa(slug: string){
    localStorage.setItem('slug', slug);
  }

  obterSlugPesquisa() : string{
    return localStorage.getItem('slug') ?? '';;
  }

  salvarAniversarioId(aniversarioId: string){
    localStorage.setItem('aniversarioId', aniversarioId);
  }

  obterAniversarioId(): string{
    return localStorage.getItem('aniversarioId') ?? '';
  }
}
