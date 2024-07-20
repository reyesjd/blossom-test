// character.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { CharacterService } from './characters.service';
import { CharacterFilterDto } from './dtos/character-filter.dto';
import { CharacterModel } from 'src/libs';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  async getCharacters(
    @Query() filter: CharacterFilterDto,
  ): Promise<CharacterModel[]> {
    return this.characterService.findAll(filter);
  }
}
