import { Query, Resolver, ResolveField, Parent } from "@nestjs/graphql";
import { Person } from "./models/person.model";
import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Pseudonym } from "./models/pseudonym.model";
import { Alias } from "./models/alias.model";
import { Document } from './models/document.model';

@Resolver(() => Person)
export class PersonsResolver {
  constructor(
    @Inject('PERSONS_SERVICE') private readonly personsService: ClientProxy,
  ) {}

  @Query(() => [Person], { name: 'getPersons' })
  getPersons() {
    const persons = this.personsService.send(
      {
        cmd: 'get-persons',
      },
      {},
    )

    return persons
  }

  @ResolveField('pseudonyms', () => [Pseudonym])
  getPseudonyms(@Parent() person: Person) {
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
  getAliases(@Parent() person: Person) {
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

    console.log('[log] resolve documents', alias)
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
