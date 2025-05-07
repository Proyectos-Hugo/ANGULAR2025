import { Injectable } from '@angular/core';
import { Clientes } from '../model/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  registro:Clientes[]=[
    new Clientes ('admin','admin', 'admin'),
  ];

  buscar(email: string) {
    let emaillimpio = email.trim();
    let existe = this.registro.find((u) => u.email.toLowerCase() === emaillimpio.toLowerCase());

    if (existe) {
      return `Nombre: ${existe.nombre} Email: ${existe.email} Teléfono: ${existe.telefono}`;
    } else {
      return `El usuario con el email ${emaillimpio} no existe.`;
    }
  }

  guardar(c: Clientes): string {
    let nombrelimpio = c.nombre.trim();
    let emaillimpio = c.email.trim();
    let telefonolimpio = c.telefono.trim();

    if (nombrelimpio === '' || emaillimpio === '' || telefonolimpio === '') {
      return 'Por favor, completa todos los campos.';
    }

    let usu = new Clientes(nombrelimpio, emaillimpio, telefonolimpio);
    let existe = this.registro.find(
      (u) =>
        (u.nombre.toLowerCase() === usu.nombre.toLowerCase() &&
        u.email.toLowerCase() === usu.email.toLowerCase() &&
        u.telefono === usu.telefono)
    );

    let admin = this.registro.find(
      (e) =>
        ('admin' === e.nombre.toLowerCase() &&
        'admin' === e.email.toLowerCase() &&
        'admin' === e.telefono.toLowerCase())
    );


    if (!existe) {
      this.registro.push(usu);
      console.log('Usuario registrado:', usu); // Depuración
      return `El usuario fue registrado`;
    }else if (admin){
      return `Bienvenido admin`;
    }else{
      console.log('Usuario ya existe:', existe); // Depuración
      return `El usuario ${usu.email} ya existe`;
    }

  }

  eliminar(c:Clientes){
    let index= this.registro.indexOf(c);
    if(index>0){
      this.registro.splice(index,1);
    }
  }

  mostrar(){
    this.registro.forEach;
  }
}
