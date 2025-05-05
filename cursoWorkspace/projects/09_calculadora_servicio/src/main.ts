import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { CalculComponent } from './app/calcul/calcul.component';

bootstrapApplication(CalculComponent, appConfig)
  .catch((err) => console.error(err));
