import { IsAlpha, IsEmail, IsString, Matches } from 'class-validator';

export class RegisterUserDto {
  @IsString({ message: 'Invalid Username' })
  username: string;

  @IsEmail({}, { message: 'Invalid Email' })
  email: string;

  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
    {
      message: 'Invalid Password',
    },
  )
  password: string;

  @IsAlpha('en-US', { message: 'Invalid first name' })
  firstName: string;

  @IsAlpha('en-US', { message: 'Invalid last name' })
  lastName: string;
}
