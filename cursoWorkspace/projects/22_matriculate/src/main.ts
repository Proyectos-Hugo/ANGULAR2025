import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MatricularComponent } from './app/matricular/matricular.component';

bootstrapApplication(MatricularComponent, appConfig)
  .catch((err) => console.error(err));
