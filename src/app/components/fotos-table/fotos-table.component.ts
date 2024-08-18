import { Component, Input, OnInit } from '@angular/core';
import { Foto } from 'src/app/shared/Interfaces/foto';

import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { FotosFormComponent } from '../fotos-form/fotos-form.component';
import { TipoFoto, FotoService } from 'src/app/shared/services/foto.service';
import { MessageService, MessageType } from 'src/app/shared/services/mensagem.service';

@Component({
  selector: 'app-fotos-table',
  templateUrl: './fotos-table.component.html',
  styleUrls: ['./fotos-table.component.css']
})
export class FotosTableComponent implements OnInit {
  @Input({required: true}) aniversarioId: string = '';
  @Input({required: true}) tituloFotos: string = '';
  @Input() listaFotos: Foto[] = [];
  @Input() tipoFoto: TipoFoto = TipoFoto.GALERIA;

  constructor(
    private dialog: MatDialog,
    private fotoService : FotoService,
    private mensagemService : MessageService
  ) {}
  ngOnInit(): void {
  }

  protected criarImagem(){
    let dialogRef = this.dialog.open(FotosFormComponent);
    dialogRef.componentInstance.aniversarioId = this.aniversarioId;
    dialogRef.componentInstance.tipoFoto = this.tipoFoto;
    dialogRef.componentInstance.foto = {};
  }

  protected alterarImagem(foto : Foto){
    let dialogRef = this.dialog.open(FotosFormComponent);
    dialogRef.componentInstance.aniversarioId = foto.aniversarioId;
    dialogRef.componentInstance.tipoFoto = this.tipoFoto;
    dialogRef.componentInstance.foto = foto;
  }

  protected excluirFoto(foto : Foto){
    this.fotoService
      .excluirFoto(foto, this.tipoFoto)
      .subscribe({
        next: () =>{
          this.mensagemService.showMessage('Sucesso','Excluido com sucesso!');
        },
        error: (error) => {
          console.error(error);
          this.mensagemService.showMessage('Erro','Ocorreu um erro ao excluir o registro.', MessageType.error);
        }
      });
  }

  protected get PodeEditar()  : boolean {
    return this.tipoFoto === TipoFoto.GALERIA;
  }

}
