import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Foto } from 'src/app/shared/Interfaces/foto';
import { FotoDTO } from 'src/app/shared/Interfaces/fotoDTO';
import { FotoService, TipoFoto } from 'src/app/shared/services/foto.service';
import { MessageService, MessageType } from 'src/app/shared/services/mensagem.service';

@Component({
  selector: 'app-fotos-form',
  templateUrl: './fotos-form.component.html',
  styleUrls: ['./fotos-form.component.css']
})
export class FotosFormComponent implements OnInit {
  @Input({ required: true }) aniversarioId!: string;
  @Input({ required: true }) tipoFoto : TipoFoto = TipoFoto.GALERIA;
  @Input() foto : Foto | any = {}

  protected formFoto: FormGroup = new FormGroup({});

  private selectedFile: File | any;

  constructor(
    private fb: FormBuilder,
    private fotoService : FotoService,
    private mensagemService : MessageService,
  ){}

  ngOnInit(): void {
    this.createForm();
  }

  protected createForm(){
    this.formFoto = this.fb.group({
      id: [this.foto.id],
      titulo: [this.foto.titulo, Validators.maxLength(255)],
      subTitulo: [this.foto.subTitulo, Validators.maxLength(500)],
      ordem: [this.foto.ordem, Validators.min(1)]
    });
  }

  protected onSubmit(){
    let requisicao : FotoDTO = {... this.formFoto.value};
    requisicao.aniversarioId = this.aniversarioId;

    this.fotoService
      .salvar(requisicao, this.selectedFile, this.tipoFoto)
      .subscribe({
        next: () =>{
          this.mensagemService.showMessage('Sucesso','Salvo com sucesso!');
        },
        error: (error) => {
          console.error(error);
          this.mensagemService.showMessage('Erro','Ocorreu um erro ao salvar o registro.', MessageType.error);
        }
      });
  }

  protected processFile(imageInput: any) {
    this.selectedFile = imageInput.files[0];
  }
}
