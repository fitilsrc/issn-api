import { Controller } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { PersonType, PseudonymType, DocumentType, AliasType, SharedService } from '@app/shared';
import { Prisma } from '@prisma/client';
import { ResponseForItem, prepareResponseForItem } from '@app/shared/types/ResponseForItem';

@Controller()
export class PersonsController {
  constructor(
    private readonly sharedService: SharedService,
    private readonly personsService: PersonsService
  ) {}

  @MessagePattern({ cmd: 'get-persons' })
  async getPersons(
    @Ctx() context: RmqContext,
  ): Promise<PersonType[]> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.getPersons()
  }

  @MessagePattern({ cmd: 'get-person-by-id' })
  async getPersonById(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number }
  ): Promise<PersonType> {
    this.sharedService.acknowledgeMessage(context);

    return await this.personsService.getPersonById(payload.id);
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
    @Payload() payload: AliasType,
  ): Promise<AliasType> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.createAlias(payload)
  }

  @MessagePattern({ cmd: 'update-alias' })
  async updateAlias(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number, data: Prisma.AliasUpdateInput },
  ): Promise<AliasType> {
    this.sharedService.acknowledgeMessage(context);
    return this.personsService.updateAlias(payload.id, payload.data)
  }

  @MessagePattern({ cmd: 'get-documents' })
  async getDocumentsByAliasId(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number }
  ): Promise<DocumentType[]> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.getDocumentsByAliasId(payload.id);
  }

  @MessagePattern({ cmd: 'update-document' })
  async updateDocument(
    @Ctx() context: RmqContext,
    @Payload() payload: DocumentType,
  ): Promise<DocumentType> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.updateDocument(payload)
  }

  @MessagePattern({ cmd: 'create-document' })
  async createDocument(
    @Ctx() context: RmqContext,
    @Payload() payload: DocumentType,
  ): Promise<DocumentType> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.createDocument(payload)
  }
}
