import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  number1:number;
  number2:number;
  resultado:number=0

  sumar():void{

    this.resultado=this.number1+this.number2;

    let divResultado:any=document.getElementById("divResultado");
    divResultado.innerHTML=`<h3><b>${this.resultado}</b></h3>`;
  }

  multiplicar():void{
    this.resultado=this.number1*this.number2;

    let divResultado:any=document.getElementById("divResultado");
    divResultado.innerHTML=`<h3><b>${this.resultado}</b></h3>`;
  }
}
