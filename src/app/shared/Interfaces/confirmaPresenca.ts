export class ConfirmaPresenca {
  id: string = '';
  aniversarioId: string = '';
  qtdAdultos: number = 0;
  qtdCriancas: number = 0;
  mensagem: string = '';
  marcaPresenca: boolean = true;
  dataResposta: Date = new Date();
  dataModificacao?: Date;
}
