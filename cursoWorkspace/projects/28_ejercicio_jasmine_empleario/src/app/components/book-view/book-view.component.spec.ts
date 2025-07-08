import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookViewComponent } from './book-view.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BookService } from '../../Service/book.service';

describe('BookViewComponent', () => {
  let component: BookViewComponent;
  let fixture: ComponentFixture<BookViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookViewComponent],
      providers: [
        {
          provide: BookService,
          useValue: {
            getBook: () => of({ id: 1, title: 'Test Book', author: 'Author' })
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: 1 } }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
