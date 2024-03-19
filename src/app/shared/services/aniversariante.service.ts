import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aniversariante } from '../Interfaces/aniversariante';
import { retry, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AniversarianteService {

  headersRequest = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private httpClient: HttpClient,
    private repoLocalStorage: LocalStorageService
  ) { }

  obterAniversariante(slug: string = ''): Observable<Aniversariante> {
    let nome = this.repoLocalStorage.obterSlugPesquisa();
    return this.httpClient
    .get<Aniversariante>(`${environment.url_API}/aniversarios/GetAniversarioPorSlug?slug=${nome}`,{
      headers: this.headersRequest
    })
    .pipe(
      retry(0)
    );
  }
}
