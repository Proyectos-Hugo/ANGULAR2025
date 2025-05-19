import { Productos } from '../model/productos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  url:string = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  devolverProducto(idCategoria:number):Observable<Productos[]>{
    return this.http.get<Productos[]>(`${this.url}/productos?idCategoria=${idCategoria}`); //,{params:{"idCaregoria":idCategoria}})
  }

  alta(producto: Productos): Observable<void> {
    const urlAlta: string = `${this.url}/productos`;
    return this.http.post<void>(urlAlta, producto);
  }

  eliminar(id: string): Observable<void> {
    const urlEliminar: string = `${this.url}/productos?nombre=${id}`;
    return this.http.delete<void>(urlEliminar);
  }

  categoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.url}/categorias`);
  }

}
