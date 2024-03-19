import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

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

  salvarResposta(resposta: any){
    localStorage.setItem('resposta', resposta);
  }

  obterResposta(): string{
    return localStorage.getItem('resposta') ?? '';
  }
}
