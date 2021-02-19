import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categoria } from "../model/categoria.model";

import { URL } from '../constants';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService{
    constructor(private http: HttpClient) {
    }
    
    list(): Observable<Array<Categoria>> {        
        let categorieUrl = `${URL.CATEGORIE}`;
        return this.http.get<Array<Categoria>>(categorieUrl);
    }

    findById(categoriaId: number): Observable<Categoria> {
        let apiURL = `${URL.CATEGORIE}/${categoriaId}`;
        return this.http.get<Categoria>(apiURL);
    }

    insertCategoria(){

    }

    createCategoria(categoria: Categoria) {
        return this.http.post<Categoria>(URL.CATEGORIE, categoria);
    }

    deleteCategoria(categoria: Categoria) {
        let deleteUrl = `${URL.CATEGORIE}/${categoria.id}`;
        return this.http.delete<Categoria>(deleteUrl);
    }

    updateCategoria(movimento: Categoria) {
        return this.http.put<Categoria>(URL.CATEGORIE, movimento);
    }
}