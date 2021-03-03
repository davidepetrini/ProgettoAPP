import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CatUte } from "../model/catUte.model";
import { URL } from "../constants";
import { Injectable } from "@angular/core";

@Injectable()
export class CatUteService{
    constructor(private http: HttpClient) {
    }

    list(): Observable<Array<CatUte>>{
        let listURL = `${URL.CATUTE}`
        return this.http.get<Array<CatUte>>(listURL);
    }

    insert(categoria: CatUte){
        return this.http.post<CatUte>(URL.CATUTE, categoria);
    }

    delete(id:number){
        let apiUrl = `${URL.CATUTE}/idCatUte/${id}`
        return this.http.delete<CatUte>(apiUrl)
    }
}