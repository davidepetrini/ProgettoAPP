import { Categoria } from "./categoria.model";
import { Utente } from "./utente.model";

export class Movimento {
    id: number;
    nome: string;
    importo:number;
    data: Date;
    categoria: Categoria;

}

