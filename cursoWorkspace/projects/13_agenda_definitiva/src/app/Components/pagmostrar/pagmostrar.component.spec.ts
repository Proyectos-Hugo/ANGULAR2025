import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagmostrarComponent } from './pagmostrar.component';

describe('PagmostrarComponent', () => {
  let component: PagmostrarComponent;
  let fixture: ComponentFixture<PagmostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagmostrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagmostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
