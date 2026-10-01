import { Controller, Get, Post, Delete, Put, Patch, Param, Body, } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }


    // GET /books
    @Get()
    getBooks() {
        return this.booksService.findAll();
    }

    // POST /books
    @Post()
    createBook(@Body() createBookDto: CreateBookDto) {
        return this.booksService.create(createBookDto);
    }

    // DELETE /books
    @Delete()
    deleteBook() {
        return {
            message: 'Buku berhasil dihapus'
        };
    }


    // GET /books/:id
    @Get(':id')
    getBookById(@Param('id') id: string) {
        return {
            data: `Buku dengan ID ${id}`
        };
    }

    // PUT /books/:id
    @Put(':id')
    updateBookById(@Param('id') id: string) {
        return {
            data: `Buku dengan ID ${id} berhasil diperbarui`
        };
    }

    // DELETE /books/:id
    @Delete(':id')
    deleteBookById(@Param('id') id: string) {
        return {
            data: `Buku dengan ID ${id} berhasil dihapus`
        };
    }
}