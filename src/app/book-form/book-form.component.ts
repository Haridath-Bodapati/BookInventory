import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  bookId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.bookId) {
      this.bookService.getBookById(this.bookId).subscribe((book) => {
        this.bookForm.patchValue(book);
      });
    }
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const book: Book = this.bookForm.value;
      if (this.bookId) {
        this.bookService.updateBook(this.bookId, book).subscribe(() => {
          this.router.navigate(['/books']);
        });
      } else {
        this.bookService.addBook(book).subscribe(() => {
          this.router.navigate(['/books']);
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/books']);
  }
}
