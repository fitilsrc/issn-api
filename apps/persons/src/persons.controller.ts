import { Controller } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { PersonType, PseudonymType, DocumentType, AliasType, SharedService } from '@app/shared';
import { Prisma } from '@prisma/client';

@Controller()
export class PersonsController {
  constructor(
    private readonly sharedService: SharedService,
    private readonly personsService: PersonsService
  ) {}

  @MessagePattern({ cmd: 'get-persons' })
  async getPersonById(
    @Ctx() context: RmqContext,
  ): Promise<PersonType[]> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.getPersons()
  }

  @MessagePattern({ cmd: 'create-person' })
  async createPerson(
    @Ctx() context: RmqContext,
    @Payload() payload: Prisma.PersonCreateInput,
  ): Promise<PersonType> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.createPerson(payload)
  }

  @MessagePattern({ cmd: 'get-pseudonyms' })
  async getPseudonymByPersonId(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number }
  ): Promise<PseudonymType[]> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.getPseudonymByPersonId(payload.id);
  }

  @MessagePattern({ cmd: 'create-pseudonym' })
  async createPseudonym(
    @Ctx() context: RmqContext,
    @Payload() payload: Prisma.PseudonymCreateInput,
  ): Promise<PseudonymType> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.createPseudonym(payload)
  }

  @MessagePattern({ cmd: 'get-aliases' })
  async getAliasesByPersonId(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number }
  ): Promise<AliasType[]> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.getAliasesByPersonId(payload.id);
  }

  @MessagePattern({ cmd: 'create-alias' })
  async createAlias(
    @Ctx() context: RmqContext,
    @Payload() payload: Prisma.AliasCreateInput,
  ): Promise<AliasType> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.createAlias(payload)
  }

  @MessagePattern({ cmd: 'get-documents' })
  async getDocumentsByAliasId(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number }
  ): Promise<DocumentType[]> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.getDocumentsByAliasId(payload.id);
  }

  @MessagePattern({ cmd: 'create-document' })
  async createDocument(
    @Ctx() context: RmqContext,
    @Payload() payload: Prisma.DocumentCreateInput,
  ): Promise<DocumentType> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.createDocument(payload)
  }
}
