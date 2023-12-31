import { AniversarianteService } from 'src/app/shared/services/aniversariante.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { ConfirmaPresenca } from 'src/app/shared/Interfaces/confirmaPresenca';
import { MessageService, MessageType } from 'src/app/shared/services/mensagem.service';
import { Aniversariante } from 'src/app/shared/Interfaces/aniversariante';
import { RespostaService } from 'src/app/shared/services/resposta.service';

@Component({
  selector: 'app-responda-presenca',
  templateUrl: './responda-presenca.component.html',
  styleUrls: ['./responda-presenca.component.css']
})
export class RespondaPresencaComponent implements OnInit{

aniversariante : Aniversariante | any = {};
resposta : ConfirmaPresenca | any = {}
marcaPresenca : boolean = true;
formResposta: FormGroup = new FormGroup({});

constructor(
  private fb: FormBuilder,
  private aniversarianteService: AniversarianteService,
  private respostaService: RespostaService,
  private mensagemService : MessageService){}

campoLocalStorage:string = 'resposta'

ngOnInit(): void {
  let respostaSalva = localStorage.getItem(this.campoLocalStorage)

  this.popularAniversariante();
  if(respostaSalva){
    this.resposta = JSON.parse(respostaSalva);
    this.marcaPresenca = this.resposta.marcaPresenca;
    this.createForm(this.resposta);
    return;
  }
  this.createForm(new ConfirmaPresenca());
}

popularAniversariante(){
  this.aniversarianteService.obterAniversariante()
      .subscribe({
        next: (response: Aniversariante) => {
          this.aniversariante = response;
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {}
      });
}

setaMarcarPresenca(marca: boolean){
  this.marcaPresenca = marca;
}

createForm(resposta: ConfirmaPresenca){
  this.formResposta = this.fb.group({
    id: [resposta.id],
    qtdAdultos: [resposta.qtdAdultos, Validators.min(1)],
    qtdCriancas: [resposta.qtdCriancas],
    mensagem: [resposta.mensagem, Validators.required]
  });
}

onSubmit() {
  if(this.formResposta.valid){
    let confirmaPresenca : ConfirmaPresenca = {...this.formResposta.value }
    confirmaPresenca.marcaPresenca = this.marcaPresenca;
    confirmaPresenca.dataResposta = new Date();

    let aniversarioId = this.aniversarianteService.obterAniversarioId();
    confirmaPresenca.aniversarioId = aniversarioId;

    this.respostaService
      .salvarRespostaPresenca(confirmaPresenca)
      .subscribe({
        next: (resposta : ConfirmaPresenca) =>{
          localStorage.setItem(this.campoLocalStorage, JSON.stringify(resposta));
          if(resposta.marcaPresenca){
            this.mensagemService.showMessage('Sucesso','Confirmação salva, espero você na festa!');
            return;
          }
          this.mensagemService.showMessage('Sucesso','Obrigado por responder!');
        },
        error: (error) => {
          console.error(error);
          this.mensagemService.showMessage('Erro','Ocorreu um erro ao salvar o registro.', MessageType.error);
        }
      });
  }
}

get PodeConfirmacaoPresenca()
{
  return new Date(this.aniversariante.dataLimiteConfirmaPresenca) > new Date();
}

}
