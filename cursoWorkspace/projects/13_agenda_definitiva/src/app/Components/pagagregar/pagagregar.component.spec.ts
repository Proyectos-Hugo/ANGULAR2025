import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagagregarComponent } from './pagagregar.component';

describe('PagagregarComponent', () => {
  let component: PagagregarComponent;
  let fixture: ComponentFixture<PagagregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagagregarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
