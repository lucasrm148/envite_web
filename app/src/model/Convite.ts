export interface IConvite {
    id: number;
    confirmados?: number; // Campo opcional
    convidados?: number;   // Campo opcional
    hash_evento: string;
    senha: string;
    hash_convite: string;
    presente:string
  }
  