import { Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AltaComponent } from './components/alta/alta.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';

export const routes: Routes = [
  {
    path: "busqueda",
    component: BusquedaComponent
  },

  {
    path:"alta",
    component: AltaComponent
  },

  {
    path: "eliminar",
    component: EliminarComponent
  }
];
