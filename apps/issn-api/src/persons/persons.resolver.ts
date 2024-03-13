import { Query, Resolver, ResolveField, Parent, Mutation, Args } from "@nestjs/graphql";
import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { AliasResponse, DocumentResponse, FileResponse, PersonResponse, PseudonymResponse } from "./entities";
import { AliasInput, DocumentInput, PersonInput, PseudonymInput } from "./dto";
import { StatusResponse } from "@app/shared/entities/status-response.entity";

@Resolver(() => PersonResponse)
export class PersonsResolver {
  constructor(
    @Inject('PERSONS_SERVICE') private readonly personsService: ClientProxy,
  ) {}

  @Query(() => [PersonResponse], { name: 'getPersons' })
  getPersons() {
    const persons = this.personsService.send(
      {
        cmd: 'get-persons',
      },
      {},
    )

    return persons
  }

  @Query(() => PersonResponse, { name: 'getPersonById' })
  getPersonById(
    @Args('personId') personId: number
  ) {
    return this.personsService.send(
      {
        cmd: 'get-person-by-id',
      },
      {
        id: personId
      },
    )
  }

  @Mutation(() => PersonResponse, { name: "createPerson" })
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

  @ResolveField('files', () => [FileResponse])
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
}
