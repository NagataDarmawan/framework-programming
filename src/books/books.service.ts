import { Injectable } from '@nestjs/common';
import { book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()// decorate
export class BooksService {
    private books: book[] = [{
        id: 1,
        title: 'The great gatsby',
        author: 'Penulis 1',
        isbn: '1234567890',
        publishedYear: 2020,
        isAvailable: true
    }];

    findAll(): book[] {
        return this.books;
    }

    // Create
    create(createBookDto: CreateBookDto): book {
        const newBook: book = {
            id: this.books.length + 1,
            title: createBookDto.title,
            author: createBookDto.author,
            isbn: createBookDto.isbn,
            publishedYear: createBookDto.publishedYear,
            isAvailable: true
        };
        this.books.push(newBook);
        return newBook;
    }
    
}