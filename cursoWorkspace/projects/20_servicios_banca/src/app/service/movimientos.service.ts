import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimietos } from '../model/Movimientos';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  constructor(private http:HttpClient) { }

 
}
