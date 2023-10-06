import { Depoimento } from './depoimento';
import { Foto } from "./foto";

export interface Aniversatiante {
  id: string;
  titulo: string;
  nome: string;
  apelido: string;
  descricao: string;
  dataAniversario: Date;
  dataEvento: Date;
  horarioEvento: string;
  endereco: string;
  localizacao: string;
  fotos: Foto[],
  depoimentos: Depoimento[]
}
