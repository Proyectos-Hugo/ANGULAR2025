import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FiltroComponent } from './app/filtro/filtro.component';

bootstrapApplication(FiltroComponent, appConfig)
  .catch((err) => console.error(err));
