import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ProvinciasComponent } from './app/components/provincias/provincias.component';

bootstrapApplication(ProvinciasComponent, appConfig)
  .catch((err) => console.error(err));
