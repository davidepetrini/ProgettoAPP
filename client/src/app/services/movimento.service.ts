import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movimento } from "../model/movimento.model";

import { URL } from '../constants';
import { Injectable } from "@angular/core";
import { sum } from "lodash";

@Injectable({
    providedIn: 'root'
})

export class MovimentoService{
    constructor(private http: HttpClient) {
    }
    


    list(): Observable<Movimento[]> {
        return this.http.get<Movimento[]>(URL.MOVIMENTI);
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