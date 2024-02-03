import { Controller, Get } from '@nestjs/common';
import { PersonsService } from './persons.service';

@Controller()
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Get()
  getHello(): string {
    return this.personsService.getHello();
  }
}
