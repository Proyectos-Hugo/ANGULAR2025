import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PaisesService } from '../../14_banderitas/src/app/service/paises.service';

bootstrapApplication(PaisesService, appConfig)
  .catch((err) => console.error(err));
