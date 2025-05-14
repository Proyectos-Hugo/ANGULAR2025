import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusqueService {

  constructor(private http:HttpClient) { }

  url:string = "http://localhost:8000/buscador/swagger-ui/index.html#/";

  buscarTematica(tema:string):Observable<Item[]>{
    const urlbus:string = `${this.url}/buscar?tematica=${tema}`;
    return this.http.get<Item[]>(urlbus);
  }

  nuevaTematica(tema:string,url:string,descripcion:string){
    const urlnew:string = `${this.url}/alta`;
    let head= new HttpHeaders();
    head.set('Contnt-Type','application/json');
    return this.http.post<Item[]>(urlnew);
  }

  eliminarTematica(tema:string){
    const urldelete:string = `${this.url}/eliminar?tematica=${tema}`;
    return this.http.delete<Item[]>(urldelete);
  }
}
