import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matricula } from '../model/matricula';
import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class MatricularService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:3000/matriculacion';

  matricula(codigoCurso: number): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(`${this.url}/Curso/${codigoCurso}`);
  }

  cursos():Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.url}/cursos`);
  }
}
