import { Controller, Get, Post, Delete, Put, Param, Body, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks() {
    return this.booksService.findAll();
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  // GET /books/:id
  @Get(':id')
  getBookById(@Param('id', ParseIntPipe) id: number) {
    // Panggil service langsung (jangaan dibungkus { data: ... } lagi)
    return this.booksService.findOne(id);
  }

  @Put(':id')
  updateBookById(@Param('id', ParseIntPipe) id: number) {
    return `Buku dengan ID ${id} berhasil diperbarui`;
  }

  @Delete(':id')
  deleteBookById(@Param('id', ParseIntPipe) id: number) {
    return `Buku dengan ID ${id} berhasil dihapus`;
  }
}