import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagbuscarComponent } from './pagbuscar.component';

describe('PagbuscarComponent', () => {
  let component: PagbuscarComponent;
  let fixture: ComponentFixture<PagbuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagbuscarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagbuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
