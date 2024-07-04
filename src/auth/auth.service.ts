import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const SALT = 10;

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async registerUser(data: Prisma.UserCreateInput) {
    const emailInUse = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (emailInUse) throw new BadRequestException('User already exists');

    const { password: rawPassword, ...otherData } = data;
    const password = await bcrypt.hash(rawPassword, SALT);

    return this.prismaService.user.create({
      data: {
        ...otherData,
        password,
      },
    });
  }
}
