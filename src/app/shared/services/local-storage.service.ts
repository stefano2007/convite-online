import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  salvarSlugPesquisa(slug: string){
    localStorage.setItem('slug', slug);
  }

  salvarAniversarioId(slug: string, aniversarioId: string){
    localStorage.setItem(`${slug}.aniversarioId`, aniversarioId);
  }

  obterAniversarioId(slug: string): string{
    return localStorage.getItem(`${slug}.aniversarioId`) ?? '';
  }

  salvarResposta(slug: string, resposta: any){
    localStorage.setItem(`${slug}.resposta`, resposta);
  }

  obterResposta(slug: string): string{
    return localStorage.getItem(`${slug}.resposta`) ?? '';
  }
}
