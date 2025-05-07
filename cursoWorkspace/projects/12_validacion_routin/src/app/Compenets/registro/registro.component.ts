import { FormsModule } from '@angular/forms';
import { ClientesService } from './../../../../../11_formulario_clientes/src/app/Service/clientes.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clientes } from '../../model/clientes';

@Component({
  selector: 'app-registro',
  imports: [FormsModule,CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  usuario:string;
  password:string;
  nombre:string;
  email:string;
  router: any;

  constructor(private usuarioService: ClientesService){

  }

  registrar(){
    let c= new Clientes(this.usuario,this.password,this.email,this.nombre)
    this.usuarioService.registrar(c);
    //navegación al componente de validación
    this.router.navigate(["/validar"]);
  }

}
