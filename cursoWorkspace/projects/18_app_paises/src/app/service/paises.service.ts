import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string = 'http://localhost:3000/pais/';
  constructor(private http:HttpClient) { }

  continentes():Observable<string[]>{
    return this.http.get<string[]>(`${this.url}continentes`);
  }

  paisesContinente(continente:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.url}paisesContinente/${continente}`);
  }
}
