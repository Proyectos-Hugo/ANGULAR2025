import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MovimientosService } from '../../service/movimientos.service';
import { Movimientos } from '../../model/Movimientos';

@Component({
  selector: 'app-movimientos',
  imports: [FormsModule],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent {

  movimientos: Movimientos = new Movimientos();
  mensaje: string;
  fecha1:string;
  fecha2:string;
  idCuenta:number;

  constructor(private movimiento:MovimientosService){

  }

  findByIdCuenta(){
    return this.movimiento.findByIdCuenta(this.idCuenta);
  }

  findByDate(){
    return this.movimiento.findByDate(this.fecha1,this.fecha2);
  }

  save(){
    this.movimiento.save(this.movimientos)
    .subscribe(data=> {
      if(data){
        this.mensaje ="Movimiento realizado";
      }else{
        this.mensaje = "Nose pudo dar el movimiento pedido!!!";
      }
    })
  }
}
