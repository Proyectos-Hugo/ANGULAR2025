import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimientos } from '../model/Movimientos';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  url:string = 'http://localhost:3000/movimientos';
  constructor(private http:HttpClient) { }

  findByIdCuenta(idCuenta: number):Observable<Movimientos[]>{
    return this.http.get<Movimientos[]>(`${this.url}/cuenta/${idCuenta}`);
  }

  findByDate(fecha1:string,fecha2:string):Observable<Movimientos[]>{
    return this.http.get<Movimientos[]>(`${this.url}/fecha?fecha1=${fecha1}&fecha2=${fecha2}`);
  }

  save(movimiento:Movimientos):Observable<boolean>{
    return this.http.post(`${this.url}/guardar/`,movimiento)
    .pipe(map(()=>true),
              catchError(e=>of(false)));
  }

}
