import { Depoimento } from './depoimento';
import { Foto } from "./foto";

export interface Aniversariante {
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
  fotosDestaque: Foto[];
  fotosCarrossel: Foto[];
  depoimentos: Depoimento[]
}
