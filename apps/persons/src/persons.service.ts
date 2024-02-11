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
      }
    });
  }

  /**
   * Create new alias for person
   * @param data
   * @returns Promise<AliasType>
   */
  async createAlias(data: Prisma.AliasCreateInput): Promise<AliasType> {
    data.createdAt = new Date();

    return await this.prisma.alias.create({
      data,
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
   * Create new document for persons alias
   * @param data
   * @returns Promise<DocumentType>
   */
  async createDocument(data: Prisma.DocumentCreateInput): Promise<DocumentType> {
    data.createdAt = new Date();

    return this.prisma.document.create({
      data,
    })
  }
}
