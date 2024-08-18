import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  salvarSlugPesquisa(slug: string){
    localStorage.setItem('slug', slug);
  }
/*
  obterSlugPesquisa() : string{
    return localStorage.getItem('slug') ?? '';;
  }
*/
  salvarAniversarioId(slug: string, aniversarioId: string){
    localStorage.setItem(`${slug}.aniversarioId`, aniversarioId);
  }

  obterAniversarioId(slug: string): string{
    return localStorage.getItem(`${slug}.aniversarioId`) ?? '';
  }

  salvarResposta(resposta: any){
    localStorage.setItem('resposta', resposta);
  }

  obterResposta(): string{
    return localStorage.getItem('resposta') ?? '';
  }
}
