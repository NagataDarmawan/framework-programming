import { IsInt, IsNotEmpty } from "class-validator";

export class CreateBookDto {
@IsNotEmpty({message:"Title harus di isi"})
readonly title: string;

@IsNotEmpty({message:"Author harus di isi"})
readonly author: string;
@IsNotEmpty({message:"ISBN harus di isi"})
readonly isbn: string;
@IsNotEmpty({message:"Published Year harus di isi"})
@IsInt({message:"Published Year harus berupa angka"})
readonly publishedYear: number;
}