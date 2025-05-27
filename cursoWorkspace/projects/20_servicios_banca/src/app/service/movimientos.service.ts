import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimietos } from '../model/Movimientos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  url:string = 'http://localhost:3000/movimientos';
  constructor(private http:HttpClient) { }

  findByIdCuenta(idCuenta:number):Observable<Movimientos[]>{
    return this.http.get<Movimientos[]>(`${this.url}/cuenta/${idCuenta}`);
  }
}
