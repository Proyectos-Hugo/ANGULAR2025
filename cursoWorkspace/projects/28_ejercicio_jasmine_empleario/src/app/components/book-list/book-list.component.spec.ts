import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
import { of } from 'rxjs';
import { BookService } from '../../Service/book.service';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
      providers: [
        {
          provide: BookService,
          useValue: {
            getBooks: () => of([
              { id: 1, title: 'Book 1', author: 'Author 1' },
              { id: 2, title: 'Book 2', author: 'Author 2' }
            ])
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
