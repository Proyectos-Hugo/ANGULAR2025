import { AgenserComponent } from './app/agenser/agenser.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';


bootstrapApplication(AgenserComponent, appConfig)
  .catch((err) => console.error(err));
