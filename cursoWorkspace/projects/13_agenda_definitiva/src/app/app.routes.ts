import { Routes } from '@angular/router';
import { PagagregarComponent } from './Components/pagagregar/pagagregar.component';
import { PagbuscarComponent } from './Components/pagbuscar/pagbuscar.component';
import { PagmostrarComponent } from './Components/pagmostrar/pagmostrar.component';

export const routes: Routes = [
  {
    path:"agregar",
    component: PagagregarComponent
  },
  {
    path:"buscar",
    component: PagbuscarComponent
  },
  {
    path:"mostrar",
    component: PagmostrarComponent
  }
];
