import { Query, Resolver, ResolveField, Parent, Mutation, Args } from "@nestjs/graphql";
import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Alias } from "./models/alias.model";
import { Document } from './models/document.model';
import { AliasResponse, DocumentResponse, PersonResponse, PseudonymResponse } from "./entities";
import { AliasInput, DocumentInput, PersonInput, PseudonymInput } from "./dto";

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

  @Mutation(() => DocumentResponse, { name: "createOrUpdateDocument" })
  createOrUpdateDocument(
    @Args('documentInput') data: DocumentInput
  ) {
    return this.personsService.send(
      {
        cmd: 'create-or-update-document',
      },
      data
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

  @ResolveField('aliases', () => [Alias])
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

  @ResolveField('documents', () => [Document])
  getDocuments(@Parent() alias: Alias) {
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
