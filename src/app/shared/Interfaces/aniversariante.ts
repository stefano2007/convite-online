import { Depoimento } from './depoimento';
import { Fotos } from "./fotos";

export interface Aniversatiante {
  id: string;
  titulo: string;
  nome: string;
  descricao: string;
  data: Date;
  horario: string;
  endereco: string;
  localizacao: string;
  fotos: Fotos[],
  depoimentos: Depoimento[]
}
