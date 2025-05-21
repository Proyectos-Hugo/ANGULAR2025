import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusqueService {

  constructor(private http:HttpClient) { }

  url:string = "http://localhost:8000/buscador/swagger-ui/index.html#/";

  buscarTematica(tema:string):Observable<Item[]>{
    const url_busqueda = `${this.url}/buscar`;
     return this.http.get<Item[]>(url_busqueda,{params:{"tematica":tema}});
  }

  nuevaTematica(item:Item):Observable<void>{
    console.log(JSON.stringify(item))
    const url_alta = `${this.url}/alta`;
    let head=new HttpHeaders();
    head.set("Content-Type","application/json")
    return this.http.post<void>(url_alta, item,{headers:head});
  }

  eliminarTematica(tema:string){
    const urldelete:string = `${this.url}/eliminar?tematica=${tema}`;
    return this.http.delete<Item[]>(urldelete);
  }
}
