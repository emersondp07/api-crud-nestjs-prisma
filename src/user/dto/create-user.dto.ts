import { User } from '../entities/user.entity';
import { IsBoolean, IsDate, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto extends User {
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    name: string;

    @IsString()
    birthdate: string;

    @IsString()
    document: string;

    @IsBoolean()
    acceptedTerms: boolean;

    @IsString()
    zipcode: string;

    @IsString()
    @IsOptional()
    street?: string;

    @IsString()
    @IsOptional()
    neighborhood?: string;

    @IsString()
    @IsOptional()
    city?: string;

    @IsString()
    @IsOptional()
    state?: string;

    @IsDate()
    @IsOptional()
    createdAt?: Date | string;

    @IsDate()
    @IsOptional()
    updatedAt?: Date | string;
}