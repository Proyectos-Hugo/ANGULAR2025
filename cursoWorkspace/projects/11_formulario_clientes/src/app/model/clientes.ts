export class Clientes {
  usuario: string;
  contraseña: string;
  nombre: string;
  email: string;

  constructor(usuario: string, contraseña: string, nombre: string, email: string) {
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.nombre = nombre;
    this.email = email;
  }
}
