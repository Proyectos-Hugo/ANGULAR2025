import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../model/Contacto';
import { ContactosService } from '../service/contactos.service';

@Component({
  selector: 'app-alta',
  imports: [FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  mensaje:string;
  contacto:Contacto=new Contacto();
  constructor(private contactoService:ContactosService){
  }

  alta(){
    // this.contactoService.alta(this.contacto).subscribe({
    //     next: data=>this.mensaje="Contacto agregado",
    //     error: err=>this.mensaje="No se pudo dar de alta el contacto!!!"
    //   }
    // );

    this.contactoService.alta(this.contacto)
    .subscribe(data=> {
      if(data){
        this.mensaje ="Contacto agregado";
      }else{
        this.mensaje = "Nose pudo dar de alta el contacto!!!";
      }
    })
  }
}
