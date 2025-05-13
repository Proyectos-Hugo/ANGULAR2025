import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../model/pais';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string = 'https://restcountries.com/v2/all';
  constructor(private http:HttpClient) { }

  obtenerPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url)
  }

  continentes():Observable<string[]>{
    return this.http.get<Pais[]>(this.url)
    .pipe(map(paises=>[...new Set (paises.map(p=>p.region))]));
  }

  paisesContinente(continente:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url)
    .pipe(map(paises=>paises.filter(p=>p.region==continente)));
  }
}
