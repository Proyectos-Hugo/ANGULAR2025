import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // edad:number
  data:any;

  saludar():void{
    //recoge en una variable el objeto etiqueta input
    let caja:any=document.getElementById("nombre");

    //recoge el objeto div
    let res:any=document.getElementById("mensaje");
    res.innerHTML=`<b>Bienvenido a mi pagina Sr/a ${caja.value}</b>`
  }
}
