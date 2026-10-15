import { IsInt, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class loginDto {
    @IsNotEmpty({message:"Email harus di isi"})
    readonly email: string;
    @IsNotEmpty({message:"Password harus di isi"})
    @IsInt({message:"Password harus berupa angka"})
    @MaxLength(16, {message:"Password maksimal 16 angka"})
    readonly password: string;
}