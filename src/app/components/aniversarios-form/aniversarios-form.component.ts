import { TipoFoto } from 'src/app/shared/services/foto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Aniversariante } from 'src/app/shared/Interfaces/aniversariante';
import { AniversarianteDTO } from 'src/app/shared/Interfaces/aniversarianteDTO';
import { AniversarianteService } from 'src/app/shared/services/aniversariante.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { MessageService, MessageType } from 'src/app/shared/services/mensagem.service';

@Component({
  selector: 'app-aniversarios-form',
  templateUrl: './aniversarios-form.component.html',
  styleUrls: ['./aniversarios-form.component.css']
})
export class AniversariosFormComponent implements OnInit{

  protected formAniversariante: FormGroup = new FormGroup({});
  protected aniversariante : Aniversariante | any = {};
  private slug: string='';

    constructor(
      private route: ActivatedRoute,
      private fb: FormBuilder,
      private aniversarianteService: AniversarianteService,
      private mensagemService : MessageService
    ){
      this.createForm();
    }

  ngOnInit(): void {
    this.slug = this.route.obterSlugPath();
    this.popularAniversariante();
  }

  popularAniversariante(){
    this.aniversarianteService.obterAniversariante(this.slug)
        .subscribe({
          next: (response: Aniversariante) => {
            this.aniversariante = response;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.createForm();
          }
        });
  }

  createForm(){
    this.formAniversariante = this.fb.group({
      id: [this.aniversariante.id],
      slug: [this.aniversariante.slug, Validators.minLength(10)],
      nome: [this.aniversariante.nome, Validators.minLength(5)],
      idade: [this.aniversariante.idade, Validators.min(1)],
      descricao: [this.aniversariante.descricao, Validators.maxLength(500)],
      titulo: [this.aniversariante.titulo, Validators.maxLength(255)],
      informativos: [this.aniversariante.informativos, Validators.maxLength(1000)],
      dataAniversario: [this.aniversariante.dataAniversario],
      dataEvento: [this.aniversariante.dataEvento],
      diaSemanaEvento : [this.aniversariante.diaSemanaEvento],
      horarioEvento: [this.aniversariante.horarioEvento],
      local: [this.aniversariante.local],
      endereco: [this.aniversariante.endereco],
      localizacaoUrl: [this.aniversariante.localizacaoUrl],
      dataLimiteConfirmaPresenca: [this.aniversariante.dataLimiteConfirmaPresenca]
    });
  }

  protected onSubmit(){
    let requisicao : AniversarianteDTO = {... this.formAniversariante.value};

    this.aniversarianteService
      .salvar(requisicao)
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

  public get TipoFotoDestaque() : TipoFoto {
    return TipoFoto.DESTAQUE;
  }

  public get TipoFotoCarrossel() : TipoFoto {
    return TipoFoto.CARROSSEL;
  }
}
