import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculadoraService } from '../service/CalculadoraService';


@Component({
  selector: 'app-calcul',
  imports: [CommonModule, FormsModule],
  templateUrl: './calcul.component.html',
  styleUrl: './calcul.component.css'
})
export class CalculComponent {

  num1:number;
  num2:number;
  resultado:number;
  calService:CalculadoraService;

  constructor(){
    this.calService=new CalculadoraService();
  }

  suma():void{
    this.resultado=this.calService.suma(this.num1, this.num2);
  }

  resta():void{
    this.resultado=this.calService.resta(this.num1, this.num2);
  }
  multiplicacion():void{
    this.resultado=this.calService.multiplicacion(this.num1, this.num2);
  }
  division():void{
    this.resultado=this.calService.division(this.num1, this.num2);
  }

  factorial():void{
    this.resultado=this.calService.factorial(this.num1);
  }

}
