export class Categoria {
    id: number;
    nome: string; 
    budget:number;
    segno:string;   
}

export const SEGNO_ENTRATA = "ENTRATA";
export const SEGNO_USCITA = "USCITA";
export const SEGNO = [SEGNO_ENTRATA, SEGNO_USCITA];