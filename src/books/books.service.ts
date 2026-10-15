import { Injectable, NotFoundException } from '@nestjs/common';
import { book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {
  private books: book[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '1234567890',
      publishedYear: 1925,
      isAvailable: true,
    },
  ];

  findAll(): book[] {
    return this.books;
  }

  findOne(id: number): book {
    const foundBook = this.books.find((b) => b.id === id);
    if (!foundBook) {
      throw new NotFoundException(`Buku dengan ID ${id} tidak ditemukan`);
    }
    return foundBook;
  }

  create(createBookDto: CreateBookDto): book {
    const newBook: book = {
      id: this.books.length + 1,
      title: createBookDto.title,
      author: createBookDto.author,
      isbn: createBookDto.isbn,
      publishedYear: createBookDto.publishedYear,
      isAvailable: true,
    };
    this.books.push(newBook);
    return newBook;
  }
}