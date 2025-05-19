import { Routes } from '@angular/router';
import { BuscarComponent } from './component/buscar/buscar.component';
import { EliminarComponent } from './component/eliminar/eliminar.component';
import { NuevoComponent } from './component/nuevo/nuevo.component';

export const routes: Routes = [
  {
    path: "buscar",
    component: BuscarComponent
  },
  {
    path: "nuevo",
    component: NuevoComponent
  },
  {
    path: "eliminar",
    component: EliminarComponent
  }
];
