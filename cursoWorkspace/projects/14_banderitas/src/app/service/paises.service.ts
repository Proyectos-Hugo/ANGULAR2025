import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../model/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string = 'https://restcountries.com/v2/all';
  constructor(private http:HttpClient) { }

  obtenerPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url);
  }
}
