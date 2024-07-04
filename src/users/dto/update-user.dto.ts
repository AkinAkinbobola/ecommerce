import { IsAlpha, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString({ message: 'Invalid Username' })
  @IsOptional()
  username: string;

  @IsEmail({}, { message: 'Invalid Email' })
  @IsOptional()
  email: string;

  @IsAlpha('en-US', { message: 'Invalid first name' })
  @IsOptional()
  firstName: string;

  @IsAlpha('en-US', { message: 'Invalid last name' })
  @IsOptional()
  lastName: string;
}
