import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OfferEntity } from './entities/offer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WishEntity } from '../wishes/entities/wish.entity';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(OfferEntity)
    private offerRepository: Repository<OfferEntity>,
    @InjectRepository(WishEntity)
    private wishesRepository: Repository<WishEntity>
  ) {}

  async create(createOfferDto: CreateOfferDto, user: any) {
    const itemId = createOfferDto.itemId;
    const wish = await this.wishesRepository.findOne({ where: { id: itemId } });
    if (!wish) {
      throw new NotFoundException('Данное желание не найдено');
    }
    if (wish.owner.id === user.id) {
      throw new BadRequestException(
        'Вы не можете внести деньги на собственное желание'
      );
    }
    if (wish.raised > wish.price)
      throw new BadRequestException(
        'Нельзя внести сумму больше, чем необходимо для осуществления желания'
      );

    await this.wishesRepository.update({ id: wish.id }, wish);
    return this.offerRepository.save({ ...createOfferDto, user, itemId: wish });
  }

  async findAll() {
    return await this.offerRepository.find();
  }

  findOne(id: number) {
    return this.offerRepository.findOneBy({ id });
  }

  async update(id: number, updateOfferDto: UpdateOfferDto) {
    await this.offerRepository.update(id, updateOfferDto);
    return this.findOne(id);
  }
  async remove(id: number) {
    const offerToDelete = await this.findOne(id);
    await this.offerRepository.delete(id);
    return offerToDelete;
  }
}
