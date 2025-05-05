import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenserComponent } from './agenser.component';

describe('AgenserComponent', () => {
  let component: AgenserComponent;
  let fixture: ComponentFixture<AgenserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
