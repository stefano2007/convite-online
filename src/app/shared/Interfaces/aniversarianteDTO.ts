export interface AniversarianteDTO {
  id: string;
  slug: string;
  nome: string;
  idade: number;
  descricao: string;
  titulo: string;
  informativos: string;
  dataAniversario: Date;
  dataEvento: Date;
  diaSemanaEvento : string;
  horarioEvento: string;
  local: string;
  endereco: string;
  localizacaoUrl: string;
  imagemConvite: string;
  dataLimiteConfirmaPresenca: Date;
}
