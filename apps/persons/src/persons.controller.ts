import { Controller } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { PersonType, PseudonymType, DocumentType, AliasType, SharedService, StatusResponseType, StatusType, FileType } from '@app/shared';
import { Prisma } from '@prisma/client';

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

  @MessagePattern({ cmd: 'update-person' })
  async updatePerson(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number, data: Prisma.PersonUpdateInput },
  ): Promise<PersonType> {
    this.sharedService.acknowledgeMessage(context);
    return this.personsService.updatePerson(payload.id, payload.data)
  }

  @MessagePattern({ cmd: 'delete-person' })
  async deletePerson(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number },
  ): Promise<StatusResponseType> {
    this.sharedService.acknowledgeMessage(context);

    try {
      const result = await this.personsService.deletePerson(payload.id);
      return {
        status: StatusType.SUCCESS
      }
    } catch (error) {
      let message = 'Unknown error'
      if (error instanceof Error) message = error.message
      return {
        status: StatusType.ERROR,
        message
      }
    }
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

  @MessagePattern({ cmd: 'delete-pseudonym-by-id' })
  async deletePseudonym(
    @Ctx() context: RmqContext,
    @Payload() payload: { pseudonymId: number },
  ): Promise<StatusResponseType> {
    this.sharedService.acknowledgeMessage(context);

    try {
      await this.personsService.deletePseudonym(payload.pseudonymId);
      return {
        status: StatusType.SUCCESS
      }
    } catch (error) {
      let message = 'Unknown error'
      if (error instanceof Error) message = error.message
      return {
        status: StatusType.ERROR,
        message
      }
    }
  }

  @MessagePattern({ cmd: 'get-aliases' })
  async getAliasesByPersonId(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number }
  ): Promise<AliasType[]> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.getAliasesByPersonId(payload.id);
  }

  @MessagePattern({ cmd: 'get-files' })
  async getFilesByPersonId(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number }
  ): Promise<FileType[]> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.getFilesByPersonId(payload.id);
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

  @MessagePattern({ cmd: 'delete-alias-by-id' })
  async deleteAlias(
    @Ctx() context: RmqContext,
    @Payload() payload: { aliasId: number },
  ): Promise<StatusResponseType> {
    this.sharedService.acknowledgeMessage(context);

    try {
      await this.personsService.deleteAlias(payload.aliasId);
      return {
        status: StatusType.SUCCESS
      }
    } catch (error) {
      let message = 'Unknown error'
      if (error instanceof Error) message = error.message
      return {
        status: StatusType.ERROR,
        message
      }
    }
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

    return this.personsService.updateDocument(payload);
  }

  @MessagePattern({ cmd: 'create-document' })
  async createDocument(
    @Ctx() context: RmqContext,
    @Payload() payload: DocumentType,
  ): Promise<DocumentType> {
    this.sharedService.acknowledgeMessage(context);

    return this.personsService.createDocument(payload);
  }

  @MessagePattern({ cmd: 'delete-document-by-id' })
  async deleteDocument(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number },
  ): Promise<StatusResponseType> {
    this.sharedService.acknowledgeMessage(context);

    try {
      const result = await this.personsService.deleteDocument(payload.id);
      return {
        status: StatusType.SUCCESS
      }
    } catch (error) {
      let message = 'Unknown error'
      if (error instanceof Error) message = error.message
      return {
        status: StatusType.ERROR,
        message
      }
    }
  }
}
