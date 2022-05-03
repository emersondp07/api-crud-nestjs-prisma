import { Delete, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import axios from 'axios';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try{
      const birthdate = createUserDto.birthdate
      let data_atual = await new Date();
      let data_nascimento = await new Date(birthdate);
      let anos = await data_atual.getFullYear() - data_nascimento.getFullYear();
  
      if(await data_atual.getMonth() != data_nascimento.getMonth())
      if(await data_atual.getMonth() <= data_nascimento.getMonth())
      if(await data_atual.getDate() < data_nascimento.getDate())
      if(await anos < 18)
      return "Você não é maior de idade"

    const zipcode = await createUserDto.zipcode

    const address = (await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)).data

    const data = await ({
      ...createUserDto,
      street: address.logradouro,
      neighborhood: address.bairro,
      city: address.localidade,
      state: address.uf,
    });

    const createdUser = await this.prisma.user.create({ data })

    return  { createdUser }

    } catch (err) {
      return err
    }
  }

  findAll() {
    return this.prisma.user.findMany({});
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        ...UpdateUserDto,
        updatedAt: new Date(),
      }
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
