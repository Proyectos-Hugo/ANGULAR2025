import { Injectable } from '@angular/core';
import { Clientes } from '../model/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor() { }

  registro:Clientes[]=[
    new Clientes ('admin','admin', ' ', ' '),
  ];

  reg: string ;

  visible: boolean = false;

  iniciarSesion(usu:string, contraseña:string) {
    let usuariolimpio = usu.trim();
    let contralimpio = contraseña.trim();
    let usuario = new Clientes(usuariolimpio, contralimpio, '', '');
    let existe = this.registro.find((u) => u.usuario === usuario.usuario && u.contraseña === usuario.contraseña);
    if (existe) {
      return `Bienvenido ${usuario.usuario}`;
    }else{
      return `El usuario ${usuario.usuario} ya existe`;
    }
  }

  registrar(c: Clientes):string {
     let usuariolimpio = c.usuario.trim();
     let contralimpio = c.contraseña.trim();
     let nombrelimpio = c.nombre.trim();
     let emaillimpio = c.email.trim();
     if (usuariolimpio === '' || contralimpio === '' || nombrelimpio === '' || emaillimpio === '') {
       return 'Por favor, completa todos los campos.';
     }
     let usu = new Clientes(usuariolimpio, contralimpio, nombrelimpio, emaillimpio);
     let existe = this.registro.find((u) => u.usuario === usu.usuario && u.contraseña === usu.contraseña);
     if (!existe) {
       this.registro.push(usu);
       return `El usuario fue registrado`
     }else{
       return `El usuario ${usu.usuario} ya existe`;
     }
  }
}
