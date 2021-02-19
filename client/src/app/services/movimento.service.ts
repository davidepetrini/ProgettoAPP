import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movimento } from "../model/movimento.model";

import { URL } from '../constants';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MovimentoService{
    constructor(private http: HttpClient) {
    }
    
// movimenti --> dashboard
    list(): Observable<Array<Movimento>> {        
        let movimentiUrl = `${URL.MOVIMENTI}`;
        return this.http.get<Array<Movimento>>(movimentiUrl);   //(dashboardUrl)
    }

    findById(movimentoId: number): Observable<Movimento> {
        let apiURL = `${URL.MOVIMENTI}/${movimentoId}`;
        return this.http.get<Movimento>(apiURL);
    }

    createMovimento(movimento: Movimento) {
        return this.http.post<Movimento>(URL.MOVIMENTI, movimento);
    }

    deleteMovimento(movimento: Movimento) {
        let deleteUrl = `${URL.MOVIMENTI}/${movimento.id}`;
        return this.http.delete<Movimento>(deleteUrl);
    }

    updateMovimento(movimento: Movimento) {
        return this.http.put<Movimento>(URL.MOVIMENTI, movimento);
    }
}