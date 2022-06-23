import { Injectable } from '@nestjs/common';
import { Address } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressInput } from './dto/inputs/create-address.input';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async getAllAddresses() {
    return this.prisma.address.findMany();
  }

  async createAddress(creatAddressInput: CreateAddressInput): Promise<Address> {
    const address = await this.prisma.address.create({
      data: {
        title: creatAddressInput.title,
        country: creatAddressInput.title,
        city: creatAddressInput.city,
        state: creatAddressInput.state,
        street: creatAddressInput.street,
        zip: creatAddressInput.zip,
        number: creatAddressInput.number,
        description: creatAddressInput.description,
        user_id: creatAddressInput.user_id,
      },
    });

    this.prisma.user.update({
      where: {
        id: creatAddressInput.user_id,
      },
      data: {
        addresses: [123],
      },
    });
    return address;
  }
}
