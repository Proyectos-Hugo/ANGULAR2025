import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AltaComponent } from './app/alta/alta.component';

bootstrapApplication(AltaComponent, appConfig)
  .catch((err) => console.error(err));
