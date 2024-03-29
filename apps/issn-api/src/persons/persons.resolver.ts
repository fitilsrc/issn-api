import { Query, Resolver, ResolveField, Parent, Mutation, Args } from "@nestjs/graphql";
import { Inject, UseGuards } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { AliasResponse, DocumentResponse, PersonResponse, PhotoResponse, PseudonymResponse } from "./entities";
import { AliasInput, DocumentInput, MediaBundleInput, MediaInput, PersonInput, PseudonymInput } from "./dto";
import { StatusResponse } from "@app/shared/entities/status-response.entity";
import { firstValueFrom } from "rxjs";
import { JwtAuthGuard, PersonType, RoleType, Roles } from "@app/shared";

@Resolver(() => PersonResponse)
export class PersonsResolver {
  constructor(
    @Inject('PERSONS_SERVICE') private readonly personsService: ClientProxy,
  ) {}

  @Query(() => [PersonResponse], { name: 'getPersons' })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  async getPersons() {
    return await firstValueFrom<PersonType[]>(this.personsService.send(
      {
        cmd: 'get-persons',
      },
      {},
    ));
  }

  @Query(() => PersonResponse, { name: 'getPersonById' })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  async getPersonById(
    @Args('personId') personId: number
  ) {
    return await firstValueFrom<PersonType>(this.personsService.send(
      {
        cmd: 'get-person-by-id',
      },
      {
        id: personId
      },
    ));
  }

  @Mutation(() => PersonResponse, { name: "createPerson" })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  createPerson(
    @Args('personInput') data: PersonInput
  ) {
    return this.personsService.send(
      {
        cmd: 'create-person',
      },
      data
    )
  }

  @Mutation(() => PersonResponse, { name: 'updatePerson' })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  updatePerson(
    @Args('personInput') data: PersonInput
  ) {
    const { id } = data;
    delete data.id;

    return this.personsService.send(
      {
        cmd: 'update-person',
      }, {
        id,
        data
      }
    )
  }

  @Mutation(() => StatusResponse, { name: 'deletePerson' })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  deletePerson(
    @Args('personId') id: number
  ) {
    return this.personsService.send(
      {
        cmd: 'delete-person',
      }, {
        id,
      }
    )
  }

  @Mutation(() => PseudonymResponse, { name: "createPseudonym" })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  createPseudonym(
    @Args('pseudonymInput') data: PseudonymInput
  ) {
    return this.personsService.send(
      {
        cmd: 'create-pseudonym',
      },
      data
    )
  }

  @Mutation(() => StatusResponse, { name: 'deletePseudonym' })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  deletePseudonym(
    @Args('pseudonymId') pseudonymId: number
  ) {
    return this.personsService.send(
      {
        cmd: 'delete-pseudonym-by-id',
      }, {
        pseudonymId,
      }
    )
  }

  @Mutation(() => DocumentResponse, { name: "updateDocument" })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  updateDocument(
    @Args('documentInput') data: DocumentInput
  ) {
    return this.personsService.send(
      {
        cmd: 'update-document',
      },
      data
    )
  }

  @Mutation(() => DocumentResponse, { name: "createDocument" })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  createDocument(
    @Args('documentInput') data: DocumentInput
  ) {
    return this.personsService.send(
      {
        cmd: 'create-document',
      },
      data
    )
  }

  @Mutation(() => StatusResponse, { name: "deleteDocument" })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  deleteDocument(
    @Args('documentId') id: number
  ) {
    return this.personsService.send(
      {
        cmd: 'delete-document-by-id',
      }, {
        id
      }
    )
  }

  @Mutation(() => AliasResponse, { name: "createAlias" })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  createAlias(
    @Args('aliasInput') data: AliasInput
  ) {
    return this.personsService.send(
      {
        cmd: 'create-alias',
      },
      data
    )
  }

  @Mutation(() => AliasResponse, { name: 'updateAlias' })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  updateAlias(
    @Args('aliasInput') data: AliasInput
  ) {
    const { id } = data;
    delete data.id;

    return this.personsService.send(
      {
        cmd: 'update-alias',
      }, {
        id,
        data
      }
    )
  }

  @Mutation(() => StatusResponse, { name: 'deleteAlias' })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  deleteAlias(
    @Args('aliasId') aliasId: number
  ) {
    return this.personsService.send(
      {
        cmd: 'delete-alias-by-id',
      }, {
        aliasId,
      }
    )
  }

  @ResolveField('pseudonyms', () => [PseudonymResponse])
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  getPseudonyms(@Parent() person: PersonResponse) {
    const { id } = person;

    return this.personsService.send(
      {
        cmd: 'get-pseudonyms',
      },
      {
        id
      },
    );
  }

  @ResolveField('aliases', () => [AliasResponse])
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  getAliases(@Parent() person: PersonResponse) {
    const { id } = person;

    return this.personsService.send(
      {
        cmd: 'get-aliases',
      },
      {
        id
      },
    );
  }

  @ResolveField('photos', () => [PhotoResponse])
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  getFiles(@Parent() person: PersonResponse) {
    const { id } = person;

    return this.personsService.send(
      {
        cmd: 'get-files',
      },
      {
        id
      },
    );
  }

  @ResolveField('documents', () => [DocumentResponse])
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  getDocuments(@Parent() alias: AliasResponse) {
    const { id } = alias;

    return this.personsService.send(
      {
        cmd: 'get-documents',
      },
      {
        id
      },
    );
  }

  @Mutation(() => PhotoResponse, { name: "addPersonPhoto" })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  createFile(
    @Args('mediaInput') data: MediaInput
  ) {
    return this.personsService.send(
      {
        cmd: 'add-photo-to-person',
      },
      data
    )
  }

  @Mutation(() => StatusResponse, { name: "addBundleMediaToPerson" })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  addBundleMediaToPerson(
    @Args('mediaBundleInput') data: MediaBundleInput
  ) {
    return this.personsService.send(
      {
        cmd: 'add-bundle-media-to-person',
      },
      data.media
    )
  }

  @Mutation(() => StatusResponse, { name: "deleteMediaObject" })
  @UseGuards(JwtAuthGuard)
  @Roles(RoleType.ISSN_ADMIN, RoleType.ISSN_USER)
  deleteMediaObject(
    @Args('mediaId') id: number
  ) {
    return this.personsService.send(
      {
        cmd: 'delete-media-object-by-id',
      }, {
        id
      }
    )
  }
}
