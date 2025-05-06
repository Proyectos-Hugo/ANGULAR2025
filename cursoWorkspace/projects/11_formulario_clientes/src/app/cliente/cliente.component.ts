import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../Service/clientes.service';
import { Clientes } from '../model/clientes';

@Component({
  selector: 'app-cliente',
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  usuario: string;
  usuarioRegistro:string;
  contra: string;
  contraRegistro: string;
  nombre: string;
  nombreRegistro: string;
  email: string;
  emailRegistro: string;

  resultado: any;
  visible: boolean = false;


  constructor(private usuarioService: ClientesService) {

  }

  iniciarSesion() {
    this.resultado = this.usuarioService.iniciarSesion(this.usuario, this.contra);
  }

  registrarse() {
    this.visible =! this.visible;
  }

  registrar() {
     let c = new Clientes(this.usuarioRegistro, this.contraRegistro, this.nombreRegistro, this.emailRegistro);
     this.resultado = this.usuarioService.registrar(c);
     this.visible = true;
  }

}
