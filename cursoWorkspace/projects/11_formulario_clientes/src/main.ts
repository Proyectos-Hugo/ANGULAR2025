import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ClienteComponent } from './app/cliente/cliente.component';

bootstrapApplication(ClienteComponent, appConfig)
  .catch((err) => console.error(err));
