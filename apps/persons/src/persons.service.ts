import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PersonType, PseudonymType, DocumentType, AliasType } from '@app/shared';

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
   * Get all pseudonyms associated with person
   * @param personId
   * @returns Promise<PseudonymType[]>
   */
  async getPseudonymByPersonId(personId: number): Promise<PseudonymType[]> {
    return await this.prisma.pseudonym.findMany({
      where: {
        personId
      }
    });
  }

  /**
   * Gey all alias associated with person
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
}
