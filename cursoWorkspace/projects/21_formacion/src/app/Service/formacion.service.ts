import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Curso } from '../model/Curso';
import { Alumno } from '../model/Alumno';
import { Matricula } from '../model/Matricula';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  constructor(private http:HttpClient) { }
  url:string = 'http://localhost:3000/formacion/';

  findByNoMatriculadoEnCurso(codigoCurso:number){
    return this.http.get<Curso[]>(`${this.url}/buscarNoMatriculado/${codigoCurso}`);
  }

  cursos(){
    return this.http.get<Alumno[]>(`${this.url}/cursos`);
  }

  matricular(matricula:Matricula){
    return this.http.post<boolean>(`${this.url}/matricular/`,matricula);
  }
}
