import { AniversarianteService } from 'src/app/shared/services/aniversariante.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { ConfirmaPresenca } from 'src/app/shared/Interfaces/confirmaPresenca';
import { MessageService, MessageType } from 'src/app/shared/services/mensagem.service';

@Component({
  selector: 'app-responda-presenca',
  templateUrl: './responda-presenca.component.html',
  styleUrls: ['./responda-presenca.component.css']
})
export class RespondaPresencaComponent implements OnInit{

marcaPresenca : boolean = true;

formResposta: FormGroup = new FormGroup({});

constructor(
  private fb: FormBuilder,
  private aniversarianteService: AniversarianteService,
  private mensagemService : MessageService){}

campoLocalStorage:string = 'resposta'

ngOnInit(): void {

  let respostaSalva = localStorage.getItem(this.campoLocalStorage)

  if(respostaSalva){
    let resposta = JSON.parse(respostaSalva);
    this.marcaPresenca = resposta.marcaPresenca;
    this.createForm(resposta);
    return;
  }
  this.createForm(new ConfirmaPresenca());
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
    this.aniversarianteService
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

}
