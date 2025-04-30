import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AgendaComponent } from '../../05_agenda_nombres/src/app/agenda/agenda.component';
import { AgendajsonComponent } from './app/agendajson/agendajson.component';

bootstrapApplication(AgendajsonComponent, appConfig)
  .catch((err) => console.error(err));
