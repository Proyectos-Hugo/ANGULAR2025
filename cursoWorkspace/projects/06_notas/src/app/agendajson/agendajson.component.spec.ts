import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendajsonComponent } from './agendajson.component';

describe('AgendajsonComponent', () => {
  let component: AgendajsonComponent;
  let fixture: ComponentFixture<AgendajsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendajsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendajsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
