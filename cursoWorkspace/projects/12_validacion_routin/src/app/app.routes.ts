import { Routes } from '@angular/router';
import { RegistroComponent } from './Compenets/registro/registro.component';
import { ValidacionComponent } from './Compenets/validacion/validacion.component';

export const routes: Routes = [
  {
    path:"validar",
    component:ValidacionComponent
  },
  {
    path:"registrar",
    component:RegistroComponent
  }
];
