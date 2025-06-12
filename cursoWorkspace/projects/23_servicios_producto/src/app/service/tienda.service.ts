import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http:HttpClient){
    http.post<any>(this.urlAuth,{username:this.username,password:this.password})
    .subscribe(data=>this.token=data.valorToken);
  }

  urlAuth:string= 'http://localhost:3000/auth/login';
  urlTienda:string= 'http://localhost:3000/tienda';

  token:string;
  username:string="user1";
  password:string="password";

  // getHeaders(){
  //   let head = new HttpHeaders();
  //   head.set("Authorization",`Bearer ${this.token}`);
  // }

  productos():Observable<Producto[]>{
    // this.getHeaders();
    console.log(this.token);
    let head = new HttpHeaders();
    head = head.set("Authorization",`Bearer ${this.token}`);
    return this.http.get<Producto[]>(`${this.urlTienda}/productos`,{headers:head});
  }

  altaPedido(pedido:Pedido):Observable<void>{
    // this.getHeaders();
    let head = new HttpHeaders();
    head = head.set("Authorization",`Bearer ${this.token}`);
    return this.http.post<void>(`${this.urlTienda}/altaPedido`,pedido,{headers:head});
  }

}
