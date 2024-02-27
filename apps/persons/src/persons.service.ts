import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PersonType, PseudonymType, DocumentType, AliasType } from '@app/shared';
import { Prisma } from '@prisma/client';

@Injectable()
export class PersonsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Get all persons
   * @returns Promise<PersonType[]>
   */
  async getPersons(): Promise<PersonType[]> {
    return await this.prisma.person.findMany();
  }

  async getPersonById(id: number): Promise<PersonType> {
    return await this.prisma.person.findUniqueOrThrow({
      where: {
        id: parseInt(id.toString())
      }
    })
  }

  /**
   * Create new person
   * @param data
   * @returns Promise<PersonType>
   */
  async createPerson(data: Prisma.PersonCreateInput): Promise<PersonType> {
    data.createdAt = new Date();

    return await this.prisma.person.create({
      data
    })
  }

  /**
   * Get all pseudonyms associated with person
   * @param personId
   * @returns Promise<PseudonymType[]>
   */
  async getPseudonymByPersonId(personId: number): Promise<PseudonymType[]> {
    return await this.prisma.pseudonym.findMany({
      where: {
        personId,
      }
    });
  }

  /**
   * Create new pseudonym
   * @param data
   * @returns Promise<PseudonymType>
   */
  async createPseudonym(data: Prisma.PseudonymCreateInput): Promise<PseudonymType> {
    data.createdAt = new Date();

    return await this.prisma.pseudonym.create({
      data,
    })
  }

  /**
   * Get all alias associated with person
   * @param personId
   * @returns Promise<AliasType[]>
   */
  async getAliasesByPersonId(personId: number): Promise<AliasType[]> {
    return await this.prisma.alias.findMany({
      where: {
        personId
      },
      include: {
        documents: true
      }
    });
  }

  /**
   * Create new alias for person
   * @param data
   * @returns Promise<AliasType>
   */
  async createAlias(data: AliasType): Promise<AliasType> {
    const documents = data.documents;
    data.createdAt = new Date();
    const id = parseInt(data.id.toString());

    return await this.prisma.alias.create({
      data: {
        ...data,
        documents: documents && {
          createMany: {
            data: documents
          }
        }
      },
    })
  }

  /**
   * Update alias associated with person
   * @param id
   * @param data
   * @returns Promise<AliasType>
   */
  async updateAlias(id: number, data: Prisma.AliasUpdateInput): Promise<AliasType> {
    data.updatedAt = new Date();

    return await this.prisma.alias.update({
      where: {
        id: parseInt(id.toString())
      },
      data: {
        ...data,
        documents: {

        }
      }
    })
  }

  /**
   * Get all documents associated with alias of person
   * @param aliasId
   * @returns Promise<DocumentType[]>
   */
  async getDocumentsByAliasId(aliasId: number): Promise<DocumentType[]> {
    return await this.prisma.document.findMany({
      where: {
        aliasId
      }
    });
  }

  /**
   * Create or Update new document for persons alias
   * @param data
   * @returns Promise<DocumentType>
   */
  async createOrUpdateDocument(data: DocumentType): Promise<DocumentType> {
    data.createdAt = new Date();
    const id = parseInt(data.id.toString());

    return this.prisma.document.upsert({
      where: {
        id
      },
      update: {
        ...data,
        id
      },
      create: {
        ...data,
        id: undefined
      }
    })
  }
}
