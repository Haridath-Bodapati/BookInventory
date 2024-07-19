import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add',
  standalone: true,
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
  imports: [ReactiveFormsModule] // Add ReactiveFormsModule here
})
export class BookAddComponent {
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: [''],
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/books']);
  }
}
