import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PersonType, PseudonymType, DocumentType, AliasType, FileType } from '@app/shared';
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
   * Get persons by id with dependencies
   * @param id
   * @returns Promise<PersonType>
   */
  async getPersonById(id: number): Promise<PersonType> {
    return await this.prisma.person.findUniqueOrThrow({
      where: {
        id: parseInt(id.toString())
      },
      include: {
        aliases: true,
        pseudonyms: true,
        photos: true,
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
   * Update person by id
   * @param personId
   * @param data
   * @returns Promise<PersonType>
   */
  async updatePerson(personId: number, data: Prisma.PersonUpdateInput): Promise<PersonType> {
    data.updatedAt = new Date();
    return await this.prisma.person.update({
      where: {
        id: parseInt(personId.toString())
      },
      data: {
        ...data
      }
    })
  }

  /**
   * Delete person by id with relations
   * @param personId
   */
  async deletePerson(personId: number): Promise<void> {
    const person = await this.getPersonById(personId);

    if (person) {
      await this.prisma.person.delete({
        where: {
          id: personId
        }
      })
    }
  }

  /**
   * Get all files related to person bu person id
   * @param personId
   * @returns Promise<FileType[]>
   */
  async getFilesByPersonId(personId: number): Promise<FileType[]> {
    return this.prisma.file.findMany({
      where: {
        personId,
      }
    });
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
   * Delete pseudonym by id
   * @param pseudonymId
   */
  async deletePseudonym(pseudonymId: number): Promise<void> {
    const pseudonym = await this.getPseudonymByPersonId(pseudonymId);

    if (pseudonym) {
      await this.prisma.pseudonym.delete({
        where: {
          id: pseudonymId
        }
      })
    }
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
   * Delete alias by alias id
   * @param aliasId
   */
  async deleteAlias(aliasId: number): Promise<void> {
    const alias = await this.prisma.alias.findUniqueOrThrow({
      where: {
        id: aliasId
      }
    });

    if (alias) {
      await this.prisma.alias.delete({
        where: {
          id: aliasId
        }
      })
    }
  }

  /**
   * Get document by id
   * @param documentId
   * @returns Promise<DocumentType>
   */
  async getDocumentById(documentId: number): Promise<DocumentType> {
    return this.prisma.document.findUniqueOrThrow({
      where: {
        id: documentId
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
   * Update document for person alias
   * @param data
   * @returns Promise<DocumentType>
   */
  async updateDocument(data: DocumentType): Promise<DocumentType> {
    const id = parseInt(data.id.toString());

    return this.prisma.document.update({
      where: {
        id
      },
      data: {
        ...data,
        updatedAt: new Date()
      },
    })
  }

  /**
   * Create document for person alias
   * @param data
   * @returns Promise<DocumentType>
   */
  async createDocument(data: DocumentType): Promise<DocumentType> {
    return this.prisma.document.create({
      data: {
        ...data,
        createdAt: new Date(),
      },
    })
  }

  /**
   * Delete document attached to person alias
   * @param documentId
   */
  async deleteDocument(documentId: number): Promise<void> {
    const document = await this.getDocumentById(documentId);
    if (document) {
      await this.prisma.document.delete({
        where: {
          id: documentId
        }
      })
    }
  }

  /**
   * Create file entity for person
   * @param data
   * @returns Promise<FileType>
   */
  async addPersonPhoto(data: FileType): Promise<FileType> {
    return await this.prisma.file.create({
      data: {
        ...data,
        createdAt: new Date(),
      }
    })
  }
}
