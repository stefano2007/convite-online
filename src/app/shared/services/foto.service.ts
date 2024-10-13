import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Foto } from '../Interfaces/foto';
import { FotoDTO } from '../Interfaces/fotoDTO';
@Injectable({
  providedIn: 'root'
})
export class FotoService {

  headersRequest = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': environment.API_KEY_PADRAO
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  obterFotoId(id: string): Observable<Foto> {
    return this.httpClient
    .get<Foto>(`${environment.url_API}/Fotos/GetFotoPorId?id=${id}`,{
      headers: this.headersRequest
    })
    .pipe(
      retry(0)
    );
  }

  obterFotosAniversariante(aniversarioId: string): Observable<Foto[]> {
    return this.httpClient
    .get<Foto[]>(`${environment.url_API}/Fotos/GetFotosPorAniversarioId?aniversarioId=${aniversarioId}`,{
      headers: this.headersRequest
    })
    .pipe(
      retry(0)
    );
  }

  salvar(fotoDTO: FotoDTO, image: File, tipoFoto: TipoFoto): Observable<Foto> {

    if((!!fotoDTO.id)){
      return this.atualizarFoto(fotoDTO, fotoDTO.id, tipoFoto);
    }

    const formData = new FormData();
    formData.append('aniversarioId', fotoDTO.aniversarioId);
    formData.append('titulo', fotoDTO.titulo);
    formData.append('subTitulo', fotoDTO.subTitulo);
    formData.append('ordem', fotoDTO.ordem.toString());
    formData.append('arquivo', image);

    return this.inserirFoto(formData, tipoFoto);
  }

  excluirFoto(foto: Foto, tipoFoto: TipoFoto){
    const pathFotos = this.resolverPathFotoRemover(tipoFoto);

    if(tipoFoto === TipoFoto.GALERIA){
      return this.httpClient
        .delete<Foto>(`${environment.url_API}/${pathFotos}/${foto.id}`)
        .pipe(
          retry(0)
        );
    }

    return this.httpClient
    .delete<Foto>(`${environment.url_API}/${pathFotos}?id=${foto.id}&aniversarioId=${foto.aniversarioId}`)
    .pipe(
      retry(0)
    );
  }

  private inserirFoto(formData: FormData, tipoFoto: TipoFoto): Observable<Foto>{
    const pathFotos = this.resolverPathFotoInserir(tipoFoto);

    return this.httpClient
    .post<Foto>(`${environment.url_API}/${pathFotos}`, formData)
    .pipe(
      retry(0)
    );
  }

  private atualizarFoto(fotoDTO: FotoDTO, id: string, tipoFoto: TipoFoto): Observable<Foto>{
    const pathFotos = this.resolverPathFotoAtualizar(tipoFoto);
    return this.httpClient
    .put<Foto>(`${environment.url_API}/${pathFotos}/${id}`, fotoDTO)
    .pipe(
      retry(0)
    );
  }

  private resolverPathFotoInserir(tipoFoto: TipoFoto): string{
    let pathFotos = '';

    switch(tipoFoto) {
      case TipoFoto.GALERIA:
        pathFotos = 'Fotos'
        break;
      case TipoFoto.DESTAQUE:
          pathFotos = 'Aniversarios/AdicionarFotoDestaque'
          break;
      case TipoFoto.CARROSSEL:
        pathFotos = 'Aniversarios/AdicionarFotoCarrossel'
        break;
      default:
        pathFotos = 'Fotos';
    }

    return pathFotos;
  }

  private resolverPathFotoAtualizar(tipoFoto: TipoFoto): string{
    let pathFotos = '';

    switch(tipoFoto) {
      case TipoFoto.GALERIA:
        pathFotos = 'Fotos'
        break;
      //TODO: Implementa Alterar Fotos Carrossel e Destaque
      default:
        pathFotos = 'Fotos';
    }

    return pathFotos;
  }

  private resolverPathFotoRemover(tipoFoto: TipoFoto): string{
    let pathFotos = '';

    switch(tipoFoto) {
      case TipoFoto.GALERIA:
        pathFotos = 'Fotos'
        break;
      case TipoFoto.DESTAQUE:
          pathFotos = 'Aniversarios/RemoverFotoDestaque'
          break;
      case TipoFoto.CARROSSEL:
        pathFotos = 'Aniversarios/RemoverFotoCarrossel'
        break;
      default:
        pathFotos = 'Fotos';
    }

    return pathFotos;
  }
}

export enum TipoFoto{
  DESTAQUE,
  CARROSSEL,
  GALERIA
}
