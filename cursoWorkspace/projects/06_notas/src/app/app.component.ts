import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nota:number;
  notas:number[]=[];

  agregarNota():void {
    if(this.notas.some(c=>c==this.nota)==false){
      this.notas.push(this.nota);
      this.nota=0;
    }
  }

  mostrar():void {
    let suma:number=0;
    let media:number=0;
    let contador:number=0;
    let notAlta:number=0;
    let notBaja:number=10000;

    for(let i=0;i<this.notas.length;i++){
      suma+=this.notas[i];
      notAlta=Math.max(this.notas[i],notAlta);
      notBaja=Math.min(this.notas[i],notBaja);
      let contador:number=0;
      if(this.notas[i]>=5){
        contador++;
      }
    }
    media=suma/this.notas.length;

    let resultado:string = document.getElementById("divResultado").innerHTML;
    resultado = `La media es: ${media} <br> La nota mas alta es: ${notAlta} <br> La nota mas baja es: ${notBaja} <br> El numero de aprobados es: ${contador}`;
    document.getElementById("divResultado").innerHTML = resultado;
  }
}
