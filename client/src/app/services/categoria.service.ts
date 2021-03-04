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
    
    

    list(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(URL.CATEGORIE);
    }

    findByNome(nome: String): Observable<Categoria>{
        let apiURL= `${URL.CATEGORIE}/nome/${nome}`;
        return this.http.get<Categoria>(apiURL);
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
        const deleteUrl = `${URL.CATEGORIE}/${categoria.id}`;
        return this.http.delete<Categoria>(deleteUrl);
    }

    updateCategoria(categoria: Categoria) {
        return this.http.put<Categoria>(URL.CATEGORIE, categoria);
    }
}