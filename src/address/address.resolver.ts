import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AddressService } from './address.service';
import { CreateAddressInput } from './dto/inputs/create-address.input';
import { Address } from './models/address';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Query(() => [Address], { name: 'getAllAddresses', nullable: 'items' })
  getAllAddresses() {
    return this.addressService.getAllAddresses();
  }
  @Mutation(() => Address)
  createAddress(
    @Args('createAddresInput') createAddresInput: CreateAddressInput,
  ) {
    return this.addressService.createAddress(createAddresInput);
  }
}
