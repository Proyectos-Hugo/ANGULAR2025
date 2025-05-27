import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movimietos } from '../../model/Movimientos';
import { MovimientosService } from '../../service/movimientos.service';

@Component({
  selector: 'app-movimientos',
  imports: [FormsModule],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent {

  url:string = 'http://localhost:3000/movimientos';
  movimientos: Movimietos = new Movimietos();

  constructor(private movimiento:MovimientosService){

  }

  findByIdCuenta(){
    
  }

  findByDate(){

  }

  save(){

  }

}
