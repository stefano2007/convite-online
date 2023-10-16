import { Depoimento } from './depoimento';
import { Foto } from "./foto";

export interface Aniversariante {
  id: string;
  titulo: string;
  informativos: string;
  nome: string;
  apelido: string;
  descricao: string;
  dataAniversario: Date;
  diaSemanaEvento : string;
  dataEvento: Date;
  horarioEvento: string;
  endereco: string;
  localizacaoUrl: string;
  imagemConvite: string;
  dataLimiteConfirmaPresenca: Date;
  fotosDestaque: Foto[];
  fotosCarrosel: Foto[];
  depoimentos: Depoimento[]
}
