import { Municipio } from './../model/municipio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Provincia } from '../model/provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  provincia=Provincia[];
  municipios:Municipio[];
  codigoProvinciaSel:number;
  url:string = 'https://www.el-tiempo.net/api/json/v2/provincias';
  constructor(private http:HttpClient) { }


  obtenerProvincias():Observable<Provincia[]>{
    return this.http.get<Provincia[]>(this.url);
  }


  provincias():Observable<Provincia[]>{
    return this.http.get<any>(this.url)
    .pipe(map(obj=>obj.provincias));
  }

  municipioProvincias(cod:number):Observable<Municipio[]>{
    const urlMun:string = `${this.url}/${cod}/municipios`;
    return this.http.get<any>(urlMun)
    .pipe(map(datos=>datos.Municipios));
  }
}
