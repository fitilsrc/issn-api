
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model Alias
 * 
 */
export type Alias = $Result.DefaultSelection<Prisma.$AliasPayload>
/**
 * Model Pseudonym
 * 
 */
export type Pseudonym = $Result.DefaultSelection<Prisma.$PseudonymPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more People
 * const people = await prisma.person.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more People
   * const people = await prisma.person.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs>;

  /**
   * `prisma.alias`: Exposes CRUD operations for the **Alias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aliases
    * const aliases = await prisma.alias.findMany()
    * ```
    */
  get alias(): Prisma.AliasDelegate<ExtArgs>;

  /**
   * `prisma.pseudonym`: Exposes CRUD operations for the **Pseudonym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pseudonyms
    * const pseudonyms = await prisma.pseudonym.findMany()
    * ```
    */
  get pseudonym(): Prisma.PseudonymDelegate<ExtArgs>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Person: 'Person',
    Alias: 'Alias',
    Pseudonym: 'Pseudonym',
    Document: 'Document',
    File: 'File'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'person' | 'alias' | 'pseudonym' | 'document' | 'file'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>,
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      Alias: {
        payload: Prisma.$AliasPayload<ExtArgs>
        fields: Prisma.AliasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AliasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AliasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AliasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AliasPayload>
          }
          findFirst: {
            args: Prisma.AliasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AliasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AliasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AliasPayload>
          }
          findMany: {
            args: Prisma.AliasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AliasPayload>[]
          }
          create: {
            args: Prisma.AliasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AliasPayload>
          }
          createMany: {
            args: Prisma.AliasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AliasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AliasPayload>
          }
          update: {
            args: Prisma.AliasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AliasPayload>
          }
          deleteMany: {
            args: Prisma.AliasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AliasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AliasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AliasPayload>
          }
          aggregate: {
            args: Prisma.AliasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlias>
          }
          groupBy: {
            args: Prisma.AliasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AliasGroupByOutputType>[]
          }
          count: {
            args: Prisma.AliasCountArgs<ExtArgs>,
            result: $Utils.Optional<AliasCountAggregateOutputType> | number
          }
        }
      }
      Pseudonym: {
        payload: Prisma.$PseudonymPayload<ExtArgs>
        fields: Prisma.PseudonymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PseudonymFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PseudonymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PseudonymFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PseudonymPayload>
          }
          findFirst: {
            args: Prisma.PseudonymFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PseudonymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PseudonymFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PseudonymPayload>
          }
          findMany: {
            args: Prisma.PseudonymFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PseudonymPayload>[]
          }
          create: {
            args: Prisma.PseudonymCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PseudonymPayload>
          }
          createMany: {
            args: Prisma.PseudonymCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PseudonymDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PseudonymPayload>
          }
          update: {
            args: Prisma.PseudonymUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PseudonymPayload>
          }
          deleteMany: {
            args: Prisma.PseudonymDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PseudonymUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PseudonymUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PseudonymPayload>
          }
          aggregate: {
            args: Prisma.PseudonymAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePseudonym>
          }
          groupBy: {
            args: Prisma.PseudonymGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PseudonymGroupByOutputType>[]
          }
          count: {
            args: Prisma.PseudonymCountArgs<ExtArgs>,
            result: $Utils.Optional<PseudonymCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>,
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>,
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    pseudonyms: number
    aliases: number
    photos: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pseudonyms?: boolean | PersonCountOutputTypeCountPseudonymsArgs
    aliases?: boolean | PersonCountOutputTypeCountAliasesArgs
    photos?: boolean | PersonCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountPseudonymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PseudonymWhereInput
  }


  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountAliasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AliasWhereInput
  }


  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }



  /**
   * Count Type AliasCountOutputType
   */

  export type AliasCountOutputType = {
    documents: number
  }

  export type AliasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | AliasCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes

  /**
   * AliasCountOutputType without action
   */
  export type AliasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AliasCountOutputType
     */
    select?: AliasCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AliasCountOutputType without action
   */
  export type AliasCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    id: number | null
  }

  export type PersonSumAggregateOutputType = {
    id: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    birthday: Date | null
    birthPlace: string | null
    deathday: Date | null
    details: string | null
    signs: string | null
    nationality: string | null
    gender: string | null
    religion: string | null
    ideology: string | null
  }

  export type PersonMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    birthday: Date | null
    birthPlace: string | null
    deathday: Date | null
    details: string | null
    signs: string | null
    nationality: string | null
    gender: string | null
    religion: string | null
    ideology: string | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    createdBy: number
    updatedBy: number
    birthday: number
    birthPlace: number
    deathday: number
    details: number
    signs: number
    nationality: number
    gender: number
    religion: number
    ideology: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    id?: true
  }

  export type PersonSumAggregateInputType = {
    id?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    birthday?: true
    birthPlace?: true
    deathday?: true
    details?: true
    signs?: true
    nationality?: true
    gender?: true
    religion?: true
    ideology?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    birthday?: true
    birthPlace?: true
    deathday?: true
    details?: true
    signs?: true
    nationality?: true
    gender?: true
    religion?: true
    ideology?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    birthday?: true
    birthPlace?: true
    deathday?: true
    details?: true
    signs?: true
    nationality?: true
    gender?: true
    religion?: true
    ideology?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: number
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    birthday: Date | null
    birthPlace: string | null
    deathday: Date | null
    details: string | null
    signs: string | null
    nationality: string | null
    gender: string | null
    religion: string | null
    ideology: string | null
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    birthday?: boolean
    birthPlace?: boolean
    deathday?: boolean
    details?: boolean
    signs?: boolean
    nationality?: boolean
    gender?: boolean
    religion?: boolean
    ideology?: boolean
    pseudonyms?: boolean | Person$pseudonymsArgs<ExtArgs>
    aliases?: boolean | Person$aliasesArgs<ExtArgs>
    photos?: boolean | Person$photosArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    birthday?: boolean
    birthPlace?: boolean
    deathday?: boolean
    details?: boolean
    signs?: boolean
    nationality?: boolean
    gender?: boolean
    religion?: boolean
    ideology?: boolean
  }

  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pseudonyms?: boolean | Person$pseudonymsArgs<ExtArgs>
    aliases?: boolean | Person$aliasesArgs<ExtArgs>
    photos?: boolean | Person$photosArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      pseudonyms: Prisma.$PseudonymPayload<ExtArgs>[]
      aliases: Prisma.$AliasPayload<ExtArgs>[]
      photos: Prisma.$FilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date | null
      updatedAt: Date | null
      createdBy: string | null
      updatedBy: string | null
      birthday: Date | null
      birthPlace: string | null
      deathday: Date | null
      details: string | null
      signs: string | null
      nationality: string | null
      gender: string | null
      religion: string | null
      ideology: string | null
    }, ExtArgs["result"]["person"]>
    composites: {}
  }


  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PersonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Person that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PersonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PersonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
    **/
    create<T extends PersonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PersonCreateArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many People.
     *     @param {PersonCreateManyArgs} args - Arguments to create many People.
     *     @example
     *     // Create many People
     *     const person = await prisma.person.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PersonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
    **/
    delete<T extends PersonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PersonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PersonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PersonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
    **/
    upsert<T extends PersonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pseudonyms<T extends Person$pseudonymsArgs<ExtArgs> = {}>(args?: Subset<T, Person$pseudonymsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PseudonymPayload<ExtArgs>, T, 'findMany'> | Null>;

    aliases<T extends Person$aliasesArgs<ExtArgs> = {}>(args?: Subset<T, Person$aliasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AliasPayload<ExtArgs>, T, 'findMany'> | Null>;

    photos<T extends Person$photosArgs<ExtArgs> = {}>(args?: Subset<T, Person$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Person model
   */ 
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'Int'>
    readonly createdAt: FieldRef<"Person", 'DateTime'>
    readonly updatedAt: FieldRef<"Person", 'DateTime'>
    readonly createdBy: FieldRef<"Person", 'String'>
    readonly updatedBy: FieldRef<"Person", 'String'>
    readonly birthday: FieldRef<"Person", 'DateTime'>
    readonly birthPlace: FieldRef<"Person", 'String'>
    readonly deathday: FieldRef<"Person", 'DateTime'>
    readonly details: FieldRef<"Person", 'String'>
    readonly signs: FieldRef<"Person", 'String'>
    readonly nationality: FieldRef<"Person", 'String'>
    readonly gender: FieldRef<"Person", 'String'>
    readonly religion: FieldRef<"Person", 'String'>
    readonly ideology: FieldRef<"Person", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }


  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }


  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }


  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data?: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }


  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
  }


  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }


  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
  }


  /**
   * Person.pseudonyms
   */
  export type Person$pseudonymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pseudonym
     */
    select?: PseudonymSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PseudonymInclude<ExtArgs> | null
    where?: PseudonymWhereInput
    orderBy?: PseudonymOrderByWithRelationInput | PseudonymOrderByWithRelationInput[]
    cursor?: PseudonymWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PseudonymScalarFieldEnum | PseudonymScalarFieldEnum[]
  }


  /**
   * Person.aliases
   */
  export type Person$aliasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alias
     */
    select?: AliasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AliasInclude<ExtArgs> | null
    where?: AliasWhereInput
    orderBy?: AliasOrderByWithRelationInput | AliasOrderByWithRelationInput[]
    cursor?: AliasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AliasScalarFieldEnum | AliasScalarFieldEnum[]
  }


  /**
   * Person.photos
   */
  export type Person$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
  }



  /**
   * Model Alias
   */

  export type AggregateAlias = {
    _count: AliasCountAggregateOutputType | null
    _avg: AliasAvgAggregateOutputType | null
    _sum: AliasSumAggregateOutputType | null
    _min: AliasMinAggregateOutputType | null
    _max: AliasMaxAggregateOutputType | null
  }

  export type AliasAvgAggregateOutputType = {
    id: number | null
    personId: number | null
  }

  export type AliasSumAggregateOutputType = {
    id: number | null
    personId: number | null
  }

  export type AliasMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    description: string | null
    firstName: string | null
    secondName: string | null
    surname: string | null
    citizenship: string | null
    personId: number | null
  }

  export type AliasMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    description: string | null
    firstName: string | null
    secondName: string | null
    surname: string | null
    citizenship: string | null
    personId: number | null
  }

  export type AliasCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    createdBy: number
    updatedBy: number
    description: number
    firstName: number
    secondName: number
    surname: number
    citizenship: number
    personId: number
    _all: number
  }


  export type AliasAvgAggregateInputType = {
    id?: true
    personId?: true
  }

  export type AliasSumAggregateInputType = {
    id?: true
    personId?: true
  }

  export type AliasMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    description?: true
    firstName?: true
    secondName?: true
    surname?: true
    citizenship?: true
    personId?: true
  }

  export type AliasMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    description?: true
    firstName?: true
    secondName?: true
    surname?: true
    citizenship?: true
    personId?: true
  }

  export type AliasCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    description?: true
    firstName?: true
    secondName?: true
    surname?: true
    citizenship?: true
    personId?: true
    _all?: true
  }

  export type AliasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alias to aggregate.
     */
    where?: AliasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aliases to fetch.
     */
    orderBy?: AliasOrderByWithRelationInput | AliasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AliasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aliases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aliases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aliases
    **/
    _count?: true | AliasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AliasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AliasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AliasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AliasMaxAggregateInputType
  }

  export type GetAliasAggregateType<T extends AliasAggregateArgs> = {
        [P in keyof T & keyof AggregateAlias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlias[P]>
      : GetScalarType<T[P], AggregateAlias[P]>
  }




  export type AliasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AliasWhereInput
    orderBy?: AliasOrderByWithAggregationInput | AliasOrderByWithAggregationInput[]
    by: AliasScalarFieldEnum[] | AliasScalarFieldEnum
    having?: AliasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AliasCountAggregateInputType | true
    _avg?: AliasAvgAggregateInputType
    _sum?: AliasSumAggregateInputType
    _min?: AliasMinAggregateInputType
    _max?: AliasMaxAggregateInputType
  }

  export type AliasGroupByOutputType = {
    id: number
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    description: string | null
    firstName: string | null
    secondName: string | null
    surname: string | null
    citizenship: string | null
    personId: number
    _count: AliasCountAggregateOutputType | null
    _avg: AliasAvgAggregateOutputType | null
    _sum: AliasSumAggregateOutputType | null
    _min: AliasMinAggregateOutputType | null
    _max: AliasMaxAggregateOutputType | null
  }

  type GetAliasGroupByPayload<T extends AliasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AliasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AliasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AliasGroupByOutputType[P]>
            : GetScalarType<T[P], AliasGroupByOutputType[P]>
        }
      >
    >


  export type AliasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    description?: boolean
    firstName?: boolean
    secondName?: boolean
    surname?: boolean
    citizenship?: boolean
    personId?: boolean
    documents?: boolean | Alias$documentsArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
    _count?: boolean | AliasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alias"]>

  export type AliasSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    description?: boolean
    firstName?: boolean
    secondName?: boolean
    surname?: boolean
    citizenship?: boolean
    personId?: boolean
  }

  export type AliasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Alias$documentsArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
    _count?: boolean | AliasCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AliasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alias"
    objects: {
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date | null
      updatedAt: Date | null
      createdBy: string | null
      updatedBy: string | null
      description: string | null
      firstName: string | null
      secondName: string | null
      surname: string | null
      citizenship: string | null
      personId: number
    }, ExtArgs["result"]["alias"]>
    composites: {}
  }


  type AliasGetPayload<S extends boolean | null | undefined | AliasDefaultArgs> = $Result.GetResult<Prisma.$AliasPayload, S>

  type AliasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AliasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AliasCountAggregateInputType | true
    }

  export interface AliasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alias'], meta: { name: 'Alias' } }
    /**
     * Find zero or one Alias that matches the filter.
     * @param {AliasFindUniqueArgs} args - Arguments to find a Alias
     * @example
     * // Get one Alias
     * const alias = await prisma.alias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AliasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AliasFindUniqueArgs<ExtArgs>>
    ): Prisma__AliasClient<$Result.GetResult<Prisma.$AliasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Alias that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AliasFindUniqueOrThrowArgs} args - Arguments to find a Alias
     * @example
     * // Get one Alias
     * const alias = await prisma.alias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AliasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AliasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AliasClient<$Result.GetResult<Prisma.$AliasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Alias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AliasFindFirstArgs} args - Arguments to find a Alias
     * @example
     * // Get one Alias
     * const alias = await prisma.alias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AliasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AliasFindFirstArgs<ExtArgs>>
    ): Prisma__AliasClient<$Result.GetResult<Prisma.$AliasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Alias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AliasFindFirstOrThrowArgs} args - Arguments to find a Alias
     * @example
     * // Get one Alias
     * const alias = await prisma.alias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AliasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AliasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AliasClient<$Result.GetResult<Prisma.$AliasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Aliases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AliasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aliases
     * const aliases = await prisma.alias.findMany()
     * 
     * // Get first 10 Aliases
     * const aliases = await prisma.alias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aliasWithIdOnly = await prisma.alias.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AliasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AliasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AliasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Alias.
     * @param {AliasCreateArgs} args - Arguments to create a Alias.
     * @example
     * // Create one Alias
     * const Alias = await prisma.alias.create({
     *   data: {
     *     // ... data to create a Alias
     *   }
     * })
     * 
    **/
    create<T extends AliasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AliasCreateArgs<ExtArgs>>
    ): Prisma__AliasClient<$Result.GetResult<Prisma.$AliasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Aliases.
     *     @param {AliasCreateManyArgs} args - Arguments to create many Aliases.
     *     @example
     *     // Create many Aliases
     *     const alias = await prisma.alias.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AliasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AliasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alias.
     * @param {AliasDeleteArgs} args - Arguments to delete one Alias.
     * @example
     * // Delete one Alias
     * const Alias = await prisma.alias.delete({
     *   where: {
     *     // ... filter to delete one Alias
     *   }
     * })
     * 
    **/
    delete<T extends AliasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AliasDeleteArgs<ExtArgs>>
    ): Prisma__AliasClient<$Result.GetResult<Prisma.$AliasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Alias.
     * @param {AliasUpdateArgs} args - Arguments to update one Alias.
     * @example
     * // Update one Alias
     * const alias = await prisma.alias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AliasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AliasUpdateArgs<ExtArgs>>
    ): Prisma__AliasClient<$Result.GetResult<Prisma.$AliasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Aliases.
     * @param {AliasDeleteManyArgs} args - Arguments to filter Aliases to delete.
     * @example
     * // Delete a few Aliases
     * const { count } = await prisma.alias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AliasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AliasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aliases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AliasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aliases
     * const alias = await prisma.alias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AliasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AliasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alias.
     * @param {AliasUpsertArgs} args - Arguments to update or create a Alias.
     * @example
     * // Update or create a Alias
     * const alias = await prisma.alias.upsert({
     *   create: {
     *     // ... data to create a Alias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alias we want to update
     *   }
     * })
    **/
    upsert<T extends AliasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AliasUpsertArgs<ExtArgs>>
    ): Prisma__AliasClient<$Result.GetResult<Prisma.$AliasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Aliases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AliasCountArgs} args - Arguments to filter Aliases to count.
     * @example
     * // Count the number of Aliases
     * const count = await prisma.alias.count({
     *   where: {
     *     // ... the filter for the Aliases we want to count
     *   }
     * })
    **/
    count<T extends AliasCountArgs>(
      args?: Subset<T, AliasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AliasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AliasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AliasAggregateArgs>(args: Subset<T, AliasAggregateArgs>): Prisma.PrismaPromise<GetAliasAggregateType<T>>

    /**
     * Group by Alias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AliasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AliasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AliasGroupByArgs['orderBy'] }
        : { orderBy?: AliasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AliasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAliasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alias model
   */
  readonly fields: AliasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AliasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    documents<T extends Alias$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Alias$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, 'findMany'> | Null>;

    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Alias model
   */ 
  interface AliasFieldRefs {
    readonly id: FieldRef<"Alias", 'Int'>
    readonly createdAt: FieldRef<"Alias", 'DateTime'>
    readonly updatedAt: FieldRef<"Alias", 'DateTime'>
    readonly createdBy: FieldRef<"Alias", 'String'>
    readonly updatedBy: FieldRef<"Alias", 'String'>
    readonly description: FieldRef<"Alias", 'String'>
    readonly firstName: FieldRef<"Alias", 'String'>
    readonly secondName: FieldRef<"Alias", 'String'>
    readonly surname: FieldRef<"Alias", 'String'>
    readonly citizenship: FieldRef<"Alias", 'String'>
    readonly personId: FieldRef<"Alias", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Alias findUnique
   */
  export type AliasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alias
     */
    select?: AliasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AliasInclude<ExtArgs> | null
    /**
     * Filter, which Alias to fetch.
     */
    where: AliasWhereUniqueInput
  }


  /**
   * Alias findUniqueOrThrow
   */
  export type AliasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alias
     */
    select?: AliasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AliasInclude<ExtArgs> | null
    /**
     * Filter, which Alias to fetch.
     */
    where: AliasWhereUniqueInput
  }


  /**
   * Alias findFirst
   */
  export type AliasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alias
     */
    select?: AliasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AliasInclude<ExtArgs> | null
    /**
     * Filter, which Alias to fetch.
     */
    where?: AliasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aliases to fetch.
     */
    orderBy?: AliasOrderByWithRelationInput | AliasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aliases.
     */
    cursor?: AliasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aliases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aliases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aliases.
     */
    distinct?: AliasScalarFieldEnum | AliasScalarFieldEnum[]
  }


  /**
   * Alias findFirstOrThrow
   */
  export type AliasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alias
     */
    select?: AliasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AliasInclude<ExtArgs> | null
    /**
     * Filter, which Alias to fetch.
     */
    where?: AliasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aliases to fetch.
     */
    orderBy?: AliasOrderByWithRelationInput | AliasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aliases.
     */
    cursor?: AliasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aliases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aliases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aliases.
     */
    distinct?: AliasScalarFieldEnum | AliasScalarFieldEnum[]
  }


  /**
   * Alias findMany
   */
  export type AliasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alias
     */
    select?: AliasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AliasInclude<ExtArgs> | null
    /**
     * Filter, which Aliases to fetch.
     */
    where?: AliasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aliases to fetch.
     */
    orderBy?: AliasOrderByWithRelationInput | AliasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aliases.
     */
    cursor?: AliasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aliases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aliases.
     */
    skip?: number
    distinct?: AliasScalarFieldEnum | AliasScalarFieldEnum[]
  }


  /**
   * Alias create
   */
  export type AliasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alias
     */
    select?: AliasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AliasInclude<ExtArgs> | null
    /**
     * The data needed to create a Alias.
     */
    data: XOR<AliasCreateInput, AliasUncheckedCreateInput>
  }


  /**
   * Alias createMany
   */
  export type AliasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aliases.
     */
    data: AliasCreateManyInput | AliasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Alias update
   */
  export type AliasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alias
     */
    select?: AliasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AliasInclude<ExtArgs> | null
    /**
     * The data needed to update a Alias.
     */
    data: XOR<AliasUpdateInput, AliasUncheckedUpdateInput>
    /**
     * Choose, which Alias to update.
     */
    where: AliasWhereUniqueInput
  }


  /**
   * Alias updateMany
   */
  export type AliasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aliases.
     */
    data: XOR<AliasUpdateManyMutationInput, AliasUncheckedUpdateManyInput>
    /**
     * Filter which Aliases to update
     */
    where?: AliasWhereInput
  }


  /**
   * Alias upsert
   */
  export type AliasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alias
     */
    select?: AliasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AliasInclude<ExtArgs> | null
    /**
     * The filter to search for the Alias to update in case it exists.
     */
    where: AliasWhereUniqueInput
    /**
     * In case the Alias found by the `where` argument doesn't exist, create a new Alias with this data.
     */
    create: XOR<AliasCreateInput, AliasUncheckedCreateInput>
    /**
     * In case the Alias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AliasUpdateInput, AliasUncheckedUpdateInput>
  }


  /**
   * Alias delete
   */
  export type AliasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alias
     */
    select?: AliasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AliasInclude<ExtArgs> | null
    /**
     * Filter which Alias to delete.
     */
    where: AliasWhereUniqueInput
  }


  /**
   * Alias deleteMany
   */
  export type AliasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aliases to delete
     */
    where?: AliasWhereInput
  }


  /**
   * Alias.documents
   */
  export type Alias$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }


  /**
   * Alias without action
   */
  export type AliasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alias
     */
    select?: AliasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AliasInclude<ExtArgs> | null
  }



  /**
   * Model Pseudonym
   */

  export type AggregatePseudonym = {
    _count: PseudonymCountAggregateOutputType | null
    _avg: PseudonymAvgAggregateOutputType | null
    _sum: PseudonymSumAggregateOutputType | null
    _min: PseudonymMinAggregateOutputType | null
    _max: PseudonymMaxAggregateOutputType | null
  }

  export type PseudonymAvgAggregateOutputType = {
    id: number | null
    personId: number | null
  }

  export type PseudonymSumAggregateOutputType = {
    id: number | null
    personId: number | null
  }

  export type PseudonymMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    title: string | null
    personId: number | null
  }

  export type PseudonymMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    title: string | null
    personId: number | null
  }

  export type PseudonymCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    createdBy: number
    updatedBy: number
    title: number
    personId: number
    _all: number
  }


  export type PseudonymAvgAggregateInputType = {
    id?: true
    personId?: true
  }

  export type PseudonymSumAggregateInputType = {
    id?: true
    personId?: true
  }

  export type PseudonymMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    title?: true
    personId?: true
  }

  export type PseudonymMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    title?: true
    personId?: true
  }

  export type PseudonymCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    title?: true
    personId?: true
    _all?: true
  }

  export type PseudonymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pseudonym to aggregate.
     */
    where?: PseudonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pseudonyms to fetch.
     */
    orderBy?: PseudonymOrderByWithRelationInput | PseudonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PseudonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pseudonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pseudonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pseudonyms
    **/
    _count?: true | PseudonymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PseudonymAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PseudonymSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PseudonymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PseudonymMaxAggregateInputType
  }

  export type GetPseudonymAggregateType<T extends PseudonymAggregateArgs> = {
        [P in keyof T & keyof AggregatePseudonym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePseudonym[P]>
      : GetScalarType<T[P], AggregatePseudonym[P]>
  }




  export type PseudonymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PseudonymWhereInput
    orderBy?: PseudonymOrderByWithAggregationInput | PseudonymOrderByWithAggregationInput[]
    by: PseudonymScalarFieldEnum[] | PseudonymScalarFieldEnum
    having?: PseudonymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PseudonymCountAggregateInputType | true
    _avg?: PseudonymAvgAggregateInputType
    _sum?: PseudonymSumAggregateInputType
    _min?: PseudonymMinAggregateInputType
    _max?: PseudonymMaxAggregateInputType
  }

  export type PseudonymGroupByOutputType = {
    id: number
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    title: string | null
    personId: number
    _count: PseudonymCountAggregateOutputType | null
    _avg: PseudonymAvgAggregateOutputType | null
    _sum: PseudonymSumAggregateOutputType | null
    _min: PseudonymMinAggregateOutputType | null
    _max: PseudonymMaxAggregateOutputType | null
  }

  type GetPseudonymGroupByPayload<T extends PseudonymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PseudonymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PseudonymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PseudonymGroupByOutputType[P]>
            : GetScalarType<T[P], PseudonymGroupByOutputType[P]>
        }
      >
    >


  export type PseudonymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    title?: boolean
    personId?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pseudonym"]>

  export type PseudonymSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    title?: boolean
    personId?: boolean
  }

  export type PseudonymInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }


  export type $PseudonymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pseudonym"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date | null
      updatedAt: Date | null
      createdBy: string | null
      updatedBy: string | null
      title: string | null
      personId: number
    }, ExtArgs["result"]["pseudonym"]>
    composites: {}
  }


  type PseudonymGetPayload<S extends boolean | null | undefined | PseudonymDefaultArgs> = $Result.GetResult<Prisma.$PseudonymPayload, S>

  type PseudonymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PseudonymFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PseudonymCountAggregateInputType | true
    }

  export interface PseudonymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pseudonym'], meta: { name: 'Pseudonym' } }
    /**
     * Find zero or one Pseudonym that matches the filter.
     * @param {PseudonymFindUniqueArgs} args - Arguments to find a Pseudonym
     * @example
     * // Get one Pseudonym
     * const pseudonym = await prisma.pseudonym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PseudonymFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PseudonymFindUniqueArgs<ExtArgs>>
    ): Prisma__PseudonymClient<$Result.GetResult<Prisma.$PseudonymPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pseudonym that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PseudonymFindUniqueOrThrowArgs} args - Arguments to find a Pseudonym
     * @example
     * // Get one Pseudonym
     * const pseudonym = await prisma.pseudonym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PseudonymFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PseudonymFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PseudonymClient<$Result.GetResult<Prisma.$PseudonymPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pseudonym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PseudonymFindFirstArgs} args - Arguments to find a Pseudonym
     * @example
     * // Get one Pseudonym
     * const pseudonym = await prisma.pseudonym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PseudonymFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PseudonymFindFirstArgs<ExtArgs>>
    ): Prisma__PseudonymClient<$Result.GetResult<Prisma.$PseudonymPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pseudonym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PseudonymFindFirstOrThrowArgs} args - Arguments to find a Pseudonym
     * @example
     * // Get one Pseudonym
     * const pseudonym = await prisma.pseudonym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PseudonymFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PseudonymFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PseudonymClient<$Result.GetResult<Prisma.$PseudonymPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pseudonyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PseudonymFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pseudonyms
     * const pseudonyms = await prisma.pseudonym.findMany()
     * 
     * // Get first 10 Pseudonyms
     * const pseudonyms = await prisma.pseudonym.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pseudonymWithIdOnly = await prisma.pseudonym.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PseudonymFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PseudonymFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PseudonymPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pseudonym.
     * @param {PseudonymCreateArgs} args - Arguments to create a Pseudonym.
     * @example
     * // Create one Pseudonym
     * const Pseudonym = await prisma.pseudonym.create({
     *   data: {
     *     // ... data to create a Pseudonym
     *   }
     * })
     * 
    **/
    create<T extends PseudonymCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PseudonymCreateArgs<ExtArgs>>
    ): Prisma__PseudonymClient<$Result.GetResult<Prisma.$PseudonymPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pseudonyms.
     *     @param {PseudonymCreateManyArgs} args - Arguments to create many Pseudonyms.
     *     @example
     *     // Create many Pseudonyms
     *     const pseudonym = await prisma.pseudonym.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PseudonymCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PseudonymCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pseudonym.
     * @param {PseudonymDeleteArgs} args - Arguments to delete one Pseudonym.
     * @example
     * // Delete one Pseudonym
     * const Pseudonym = await prisma.pseudonym.delete({
     *   where: {
     *     // ... filter to delete one Pseudonym
     *   }
     * })
     * 
    **/
    delete<T extends PseudonymDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PseudonymDeleteArgs<ExtArgs>>
    ): Prisma__PseudonymClient<$Result.GetResult<Prisma.$PseudonymPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pseudonym.
     * @param {PseudonymUpdateArgs} args - Arguments to update one Pseudonym.
     * @example
     * // Update one Pseudonym
     * const pseudonym = await prisma.pseudonym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PseudonymUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PseudonymUpdateArgs<ExtArgs>>
    ): Prisma__PseudonymClient<$Result.GetResult<Prisma.$PseudonymPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pseudonyms.
     * @param {PseudonymDeleteManyArgs} args - Arguments to filter Pseudonyms to delete.
     * @example
     * // Delete a few Pseudonyms
     * const { count } = await prisma.pseudonym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PseudonymDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PseudonymDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pseudonyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PseudonymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pseudonyms
     * const pseudonym = await prisma.pseudonym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PseudonymUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PseudonymUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pseudonym.
     * @param {PseudonymUpsertArgs} args - Arguments to update or create a Pseudonym.
     * @example
     * // Update or create a Pseudonym
     * const pseudonym = await prisma.pseudonym.upsert({
     *   create: {
     *     // ... data to create a Pseudonym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pseudonym we want to update
     *   }
     * })
    **/
    upsert<T extends PseudonymUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PseudonymUpsertArgs<ExtArgs>>
    ): Prisma__PseudonymClient<$Result.GetResult<Prisma.$PseudonymPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pseudonyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PseudonymCountArgs} args - Arguments to filter Pseudonyms to count.
     * @example
     * // Count the number of Pseudonyms
     * const count = await prisma.pseudonym.count({
     *   where: {
     *     // ... the filter for the Pseudonyms we want to count
     *   }
     * })
    **/
    count<T extends PseudonymCountArgs>(
      args?: Subset<T, PseudonymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PseudonymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pseudonym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PseudonymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PseudonymAggregateArgs>(args: Subset<T, PseudonymAggregateArgs>): Prisma.PrismaPromise<GetPseudonymAggregateType<T>>

    /**
     * Group by Pseudonym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PseudonymGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PseudonymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PseudonymGroupByArgs['orderBy'] }
        : { orderBy?: PseudonymGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PseudonymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPseudonymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pseudonym model
   */
  readonly fields: PseudonymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pseudonym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PseudonymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Pseudonym model
   */ 
  interface PseudonymFieldRefs {
    readonly id: FieldRef<"Pseudonym", 'Int'>
    readonly createdAt: FieldRef<"Pseudonym", 'DateTime'>
    readonly updatedAt: FieldRef<"Pseudonym", 'DateTime'>
    readonly createdBy: FieldRef<"Pseudonym", 'String'>
    readonly updatedBy: FieldRef<"Pseudonym", 'String'>
    readonly title: FieldRef<"Pseudonym", 'String'>
    readonly personId: FieldRef<"Pseudonym", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Pseudonym findUnique
   */
  export type PseudonymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pseudonym
     */
    select?: PseudonymSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PseudonymInclude<ExtArgs> | null
    /**
     * Filter, which Pseudonym to fetch.
     */
    where: PseudonymWhereUniqueInput
  }


  /**
   * Pseudonym findUniqueOrThrow
   */
  export type PseudonymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pseudonym
     */
    select?: PseudonymSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PseudonymInclude<ExtArgs> | null
    /**
     * Filter, which Pseudonym to fetch.
     */
    where: PseudonymWhereUniqueInput
  }


  /**
   * Pseudonym findFirst
   */
  export type PseudonymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pseudonym
     */
    select?: PseudonymSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PseudonymInclude<ExtArgs> | null
    /**
     * Filter, which Pseudonym to fetch.
     */
    where?: PseudonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pseudonyms to fetch.
     */
    orderBy?: PseudonymOrderByWithRelationInput | PseudonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pseudonyms.
     */
    cursor?: PseudonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pseudonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pseudonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pseudonyms.
     */
    distinct?: PseudonymScalarFieldEnum | PseudonymScalarFieldEnum[]
  }


  /**
   * Pseudonym findFirstOrThrow
   */
  export type PseudonymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pseudonym
     */
    select?: PseudonymSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PseudonymInclude<ExtArgs> | null
    /**
     * Filter, which Pseudonym to fetch.
     */
    where?: PseudonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pseudonyms to fetch.
     */
    orderBy?: PseudonymOrderByWithRelationInput | PseudonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pseudonyms.
     */
    cursor?: PseudonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pseudonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pseudonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pseudonyms.
     */
    distinct?: PseudonymScalarFieldEnum | PseudonymScalarFieldEnum[]
  }


  /**
   * Pseudonym findMany
   */
  export type PseudonymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pseudonym
     */
    select?: PseudonymSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PseudonymInclude<ExtArgs> | null
    /**
     * Filter, which Pseudonyms to fetch.
     */
    where?: PseudonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pseudonyms to fetch.
     */
    orderBy?: PseudonymOrderByWithRelationInput | PseudonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pseudonyms.
     */
    cursor?: PseudonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pseudonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pseudonyms.
     */
    skip?: number
    distinct?: PseudonymScalarFieldEnum | PseudonymScalarFieldEnum[]
  }


  /**
   * Pseudonym create
   */
  export type PseudonymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pseudonym
     */
    select?: PseudonymSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PseudonymInclude<ExtArgs> | null
    /**
     * The data needed to create a Pseudonym.
     */
    data: XOR<PseudonymCreateInput, PseudonymUncheckedCreateInput>
  }


  /**
   * Pseudonym createMany
   */
  export type PseudonymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pseudonyms.
     */
    data: PseudonymCreateManyInput | PseudonymCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Pseudonym update
   */
  export type PseudonymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pseudonym
     */
    select?: PseudonymSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PseudonymInclude<ExtArgs> | null
    /**
     * The data needed to update a Pseudonym.
     */
    data: XOR<PseudonymUpdateInput, PseudonymUncheckedUpdateInput>
    /**
     * Choose, which Pseudonym to update.
     */
    where: PseudonymWhereUniqueInput
  }


  /**
   * Pseudonym updateMany
   */
  export type PseudonymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pseudonyms.
     */
    data: XOR<PseudonymUpdateManyMutationInput, PseudonymUncheckedUpdateManyInput>
    /**
     * Filter which Pseudonyms to update
     */
    where?: PseudonymWhereInput
  }


  /**
   * Pseudonym upsert
   */
  export type PseudonymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pseudonym
     */
    select?: PseudonymSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PseudonymInclude<ExtArgs> | null
    /**
     * The filter to search for the Pseudonym to update in case it exists.
     */
    where: PseudonymWhereUniqueInput
    /**
     * In case the Pseudonym found by the `where` argument doesn't exist, create a new Pseudonym with this data.
     */
    create: XOR<PseudonymCreateInput, PseudonymUncheckedCreateInput>
    /**
     * In case the Pseudonym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PseudonymUpdateInput, PseudonymUncheckedUpdateInput>
  }


  /**
   * Pseudonym delete
   */
  export type PseudonymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pseudonym
     */
    select?: PseudonymSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PseudonymInclude<ExtArgs> | null
    /**
     * Filter which Pseudonym to delete.
     */
    where: PseudonymWhereUniqueInput
  }


  /**
   * Pseudonym deleteMany
   */
  export type PseudonymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pseudonyms to delete
     */
    where?: PseudonymWhereInput
  }


  /**
   * Pseudonym without action
   */
  export type PseudonymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pseudonym
     */
    select?: PseudonymSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PseudonymInclude<ExtArgs> | null
  }



  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
    aliasId: number | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
    aliasId: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    title: string | null
    series: string | null
    issued: Date | null
    aliasId: number | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    title: string | null
    series: string | null
    issued: Date | null
    aliasId: number | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    createdBy: number
    updatedBy: number
    title: number
    series: number
    issued: number
    aliasId: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
    aliasId?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
    aliasId?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    title?: true
    series?: true
    issued?: true
    aliasId?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    title?: true
    series?: true
    issued?: true
    aliasId?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    title?: true
    series?: true
    issued?: true
    aliasId?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: number
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    title: string | null
    series: string | null
    issued: Date | null
    aliasId: number
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    title?: boolean
    series?: boolean
    issued?: boolean
    aliasId?: boolean
    alias?: boolean | AliasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    title?: boolean
    series?: boolean
    issued?: boolean
    aliasId?: boolean
  }

  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alias?: boolean | AliasDefaultArgs<ExtArgs>
  }


  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      alias: Prisma.$AliasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date | null
      updatedAt: Date | null
      createdBy: string | null
      updatedBy: string | null
      title: string | null
      series: string | null
      issued: Date | null
      aliasId: number
    }, ExtArgs["result"]["document"]>
    composites: {}
  }


  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DocumentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>
    ): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Document that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DocumentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>
    ): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DocumentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
    **/
    create<T extends DocumentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>
    ): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Documents.
     *     @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     *     @example
     *     // Create many Documents
     *     const document = await prisma.document.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DocumentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
    **/
    delete<T extends DocumentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>
    ): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DocumentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>
    ): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DocumentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DocumentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
    **/
    upsert<T extends DocumentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>
    ): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    alias<T extends AliasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AliasDefaultArgs<ExtArgs>>): Prisma__AliasClient<$Result.GetResult<Prisma.$AliasPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Document model
   */ 
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'Int'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
    readonly createdBy: FieldRef<"Document", 'String'>
    readonly updatedBy: FieldRef<"Document", 'String'>
    readonly title: FieldRef<"Document", 'String'>
    readonly series: FieldRef<"Document", 'String'>
    readonly issued: FieldRef<"Document", 'DateTime'>
    readonly aliasId: FieldRef<"Document", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }


  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }


  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }


  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }


  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }


  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }


  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }


  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
  }


  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }


  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }


  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
  }


  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocumentInclude<ExtArgs> | null
  }



  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    personId: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
    personId: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    filename: string | null
    bucket: string | null
    mime: string | null
    personId: number | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    filename: string | null
    bucket: string | null
    mime: string | null
    personId: number | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    createdBy: number
    updatedBy: number
    filename: number
    bucket: number
    mime: number
    personId: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
    personId?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
    personId?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    filename?: true
    bucket?: true
    mime?: true
    personId?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    filename?: true
    bucket?: true
    mime?: true
    personId?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    filename?: true
    bucket?: true
    mime?: true
    personId?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    filename: string | null
    bucket: string | null
    mime: string | null
    personId: number
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    filename?: boolean
    bucket?: boolean
    mime?: boolean
    personId?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    filename?: boolean
    bucket?: boolean
    mime?: boolean
    personId?: boolean
  }

  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }


  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date | null
      updatedAt: Date | null
      createdBy: string | null
      updatedBy: string | null
      filename: string | null
      bucket: string | null
      mime: string | null
      personId: number
    }, ExtArgs["result"]["file"]>
    composites: {}
  }


  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one File that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
    **/
    create<T extends FileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FileCreateArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Files.
     *     @param {FileCreateManyArgs} args - Arguments to create many Files.
     *     @example
     *     // Create many Files
     *     const file = await prisma.file.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
    **/
    delete<T extends FileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FileDeleteArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FileUpdateArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
    **/
    upsert<T extends FileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FileUpsertArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the File model
   */ 
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'Int'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly updatedAt: FieldRef<"File", 'DateTime'>
    readonly createdBy: FieldRef<"File", 'String'>
    readonly updatedBy: FieldRef<"File", 'String'>
    readonly filename: FieldRef<"File", 'String'>
    readonly bucket: FieldRef<"File", 'String'>
    readonly mime: FieldRef<"File", 'String'>
    readonly personId: FieldRef<"File", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }


  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
  }


  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }


  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
  }


  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    birthday: 'birthday',
    birthPlace: 'birthPlace',
    deathday: 'deathday',
    details: 'details',
    signs: 'signs',
    nationality: 'nationality',
    gender: 'gender',
    religion: 'religion',
    ideology: 'ideology'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const AliasScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    description: 'description',
    firstName: 'firstName',
    secondName: 'secondName',
    surname: 'surname',
    citizenship: 'citizenship',
    personId: 'personId'
  };

  export type AliasScalarFieldEnum = (typeof AliasScalarFieldEnum)[keyof typeof AliasScalarFieldEnum]


  export const PseudonymScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    title: 'title',
    personId: 'personId'
  };

  export type PseudonymScalarFieldEnum = (typeof PseudonymScalarFieldEnum)[keyof typeof PseudonymScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    title: 'title',
    series: 'series',
    issued: 'issued',
    aliasId: 'aliasId'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    filename: 'filename',
    bucket: 'bucket',
    mime: 'mime',
    personId: 'personId'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: IntFilter<"Person"> | number
    createdAt?: DateTimeNullableFilter<"Person"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Person"> | Date | string | null
    createdBy?: StringNullableFilter<"Person"> | string | null
    updatedBy?: StringNullableFilter<"Person"> | string | null
    birthday?: DateTimeNullableFilter<"Person"> | Date | string | null
    birthPlace?: StringNullableFilter<"Person"> | string | null
    deathday?: DateTimeNullableFilter<"Person"> | Date | string | null
    details?: StringNullableFilter<"Person"> | string | null
    signs?: StringNullableFilter<"Person"> | string | null
    nationality?: StringNullableFilter<"Person"> | string | null
    gender?: StringNullableFilter<"Person"> | string | null
    religion?: StringNullableFilter<"Person"> | string | null
    ideology?: StringNullableFilter<"Person"> | string | null
    pseudonyms?: PseudonymListRelationFilter
    aliases?: AliasListRelationFilter
    photos?: FileListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    birthPlace?: SortOrderInput | SortOrder
    deathday?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    signs?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    ideology?: SortOrderInput | SortOrder
    pseudonyms?: PseudonymOrderByRelationAggregateInput
    aliases?: AliasOrderByRelationAggregateInput
    photos?: FileOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    createdAt?: DateTimeNullableFilter<"Person"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Person"> | Date | string | null
    createdBy?: StringNullableFilter<"Person"> | string | null
    updatedBy?: StringNullableFilter<"Person"> | string | null
    birthday?: DateTimeNullableFilter<"Person"> | Date | string | null
    birthPlace?: StringNullableFilter<"Person"> | string | null
    deathday?: DateTimeNullableFilter<"Person"> | Date | string | null
    details?: StringNullableFilter<"Person"> | string | null
    signs?: StringNullableFilter<"Person"> | string | null
    nationality?: StringNullableFilter<"Person"> | string | null
    gender?: StringNullableFilter<"Person"> | string | null
    religion?: StringNullableFilter<"Person"> | string | null
    ideology?: StringNullableFilter<"Person"> | string | null
    pseudonyms?: PseudonymListRelationFilter
    aliases?: AliasListRelationFilter
    photos?: FileListRelationFilter
  }, "id" | "id">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    birthPlace?: SortOrderInput | SortOrder
    deathday?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    signs?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    ideology?: SortOrderInput | SortOrder
    _count?: PersonCountOrderByAggregateInput
    _avg?: PersonAvgOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
    _sum?: PersonSumOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Person"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null
    createdBy?: StringNullableWithAggregatesFilter<"Person"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Person"> | string | null
    birthday?: DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null
    birthPlace?: StringNullableWithAggregatesFilter<"Person"> | string | null
    deathday?: DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null
    details?: StringNullableWithAggregatesFilter<"Person"> | string | null
    signs?: StringNullableWithAggregatesFilter<"Person"> | string | null
    nationality?: StringNullableWithAggregatesFilter<"Person"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Person"> | string | null
    religion?: StringNullableWithAggregatesFilter<"Person"> | string | null
    ideology?: StringNullableWithAggregatesFilter<"Person"> | string | null
  }

  export type AliasWhereInput = {
    AND?: AliasWhereInput | AliasWhereInput[]
    OR?: AliasWhereInput[]
    NOT?: AliasWhereInput | AliasWhereInput[]
    id?: IntFilter<"Alias"> | number
    createdAt?: DateTimeNullableFilter<"Alias"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Alias"> | Date | string | null
    createdBy?: StringNullableFilter<"Alias"> | string | null
    updatedBy?: StringNullableFilter<"Alias"> | string | null
    description?: StringNullableFilter<"Alias"> | string | null
    firstName?: StringNullableFilter<"Alias"> | string | null
    secondName?: StringNullableFilter<"Alias"> | string | null
    surname?: StringNullableFilter<"Alias"> | string | null
    citizenship?: StringNullableFilter<"Alias"> | string | null
    personId?: IntFilter<"Alias"> | number
    documents?: DocumentListRelationFilter
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type AliasOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    secondName?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    citizenship?: SortOrderInput | SortOrder
    personId?: SortOrder
    documents?: DocumentOrderByRelationAggregateInput
    person?: PersonOrderByWithRelationInput
  }

  export type AliasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AliasWhereInput | AliasWhereInput[]
    OR?: AliasWhereInput[]
    NOT?: AliasWhereInput | AliasWhereInput[]
    createdAt?: DateTimeNullableFilter<"Alias"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Alias"> | Date | string | null
    createdBy?: StringNullableFilter<"Alias"> | string | null
    updatedBy?: StringNullableFilter<"Alias"> | string | null
    description?: StringNullableFilter<"Alias"> | string | null
    firstName?: StringNullableFilter<"Alias"> | string | null
    secondName?: StringNullableFilter<"Alias"> | string | null
    surname?: StringNullableFilter<"Alias"> | string | null
    citizenship?: StringNullableFilter<"Alias"> | string | null
    personId?: IntFilter<"Alias"> | number
    documents?: DocumentListRelationFilter
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }, "id" | "id">

  export type AliasOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    secondName?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    citizenship?: SortOrderInput | SortOrder
    personId?: SortOrder
    _count?: AliasCountOrderByAggregateInput
    _avg?: AliasAvgOrderByAggregateInput
    _max?: AliasMaxOrderByAggregateInput
    _min?: AliasMinOrderByAggregateInput
    _sum?: AliasSumOrderByAggregateInput
  }

  export type AliasScalarWhereWithAggregatesInput = {
    AND?: AliasScalarWhereWithAggregatesInput | AliasScalarWhereWithAggregatesInput[]
    OR?: AliasScalarWhereWithAggregatesInput[]
    NOT?: AliasScalarWhereWithAggregatesInput | AliasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alias"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"Alias"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Alias"> | Date | string | null
    createdBy?: StringNullableWithAggregatesFilter<"Alias"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Alias"> | string | null
    description?: StringNullableWithAggregatesFilter<"Alias"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"Alias"> | string | null
    secondName?: StringNullableWithAggregatesFilter<"Alias"> | string | null
    surname?: StringNullableWithAggregatesFilter<"Alias"> | string | null
    citizenship?: StringNullableWithAggregatesFilter<"Alias"> | string | null
    personId?: IntWithAggregatesFilter<"Alias"> | number
  }

  export type PseudonymWhereInput = {
    AND?: PseudonymWhereInput | PseudonymWhereInput[]
    OR?: PseudonymWhereInput[]
    NOT?: PseudonymWhereInput | PseudonymWhereInput[]
    id?: IntFilter<"Pseudonym"> | number
    createdAt?: DateTimeNullableFilter<"Pseudonym"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Pseudonym"> | Date | string | null
    createdBy?: StringNullableFilter<"Pseudonym"> | string | null
    updatedBy?: StringNullableFilter<"Pseudonym"> | string | null
    title?: StringNullableFilter<"Pseudonym"> | string | null
    personId?: IntFilter<"Pseudonym"> | number
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type PseudonymOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    personId?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type PseudonymWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PseudonymWhereInput | PseudonymWhereInput[]
    OR?: PseudonymWhereInput[]
    NOT?: PseudonymWhereInput | PseudonymWhereInput[]
    createdAt?: DateTimeNullableFilter<"Pseudonym"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Pseudonym"> | Date | string | null
    createdBy?: StringNullableFilter<"Pseudonym"> | string | null
    updatedBy?: StringNullableFilter<"Pseudonym"> | string | null
    title?: StringNullableFilter<"Pseudonym"> | string | null
    personId?: IntFilter<"Pseudonym"> | number
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }, "id" | "id">

  export type PseudonymOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    personId?: SortOrder
    _count?: PseudonymCountOrderByAggregateInput
    _avg?: PseudonymAvgOrderByAggregateInput
    _max?: PseudonymMaxOrderByAggregateInput
    _min?: PseudonymMinOrderByAggregateInput
    _sum?: PseudonymSumOrderByAggregateInput
  }

  export type PseudonymScalarWhereWithAggregatesInput = {
    AND?: PseudonymScalarWhereWithAggregatesInput | PseudonymScalarWhereWithAggregatesInput[]
    OR?: PseudonymScalarWhereWithAggregatesInput[]
    NOT?: PseudonymScalarWhereWithAggregatesInput | PseudonymScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pseudonym"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"Pseudonym"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Pseudonym"> | Date | string | null
    createdBy?: StringNullableWithAggregatesFilter<"Pseudonym"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Pseudonym"> | string | null
    title?: StringNullableWithAggregatesFilter<"Pseudonym"> | string | null
    personId?: IntWithAggregatesFilter<"Pseudonym"> | number
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: IntFilter<"Document"> | number
    createdAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdBy?: StringNullableFilter<"Document"> | string | null
    updatedBy?: StringNullableFilter<"Document"> | string | null
    title?: StringNullableFilter<"Document"> | string | null
    series?: StringNullableFilter<"Document"> | string | null
    issued?: DateTimeNullableFilter<"Document"> | Date | string | null
    aliasId?: IntFilter<"Document"> | number
    alias?: XOR<AliasRelationFilter, AliasWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    series?: SortOrderInput | SortOrder
    issued?: SortOrderInput | SortOrder
    aliasId?: SortOrder
    alias?: AliasOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    createdAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdBy?: StringNullableFilter<"Document"> | string | null
    updatedBy?: StringNullableFilter<"Document"> | string | null
    title?: StringNullableFilter<"Document"> | string | null
    series?: StringNullableFilter<"Document"> | string | null
    issued?: DateTimeNullableFilter<"Document"> | Date | string | null
    aliasId?: IntFilter<"Document"> | number
    alias?: XOR<AliasRelationFilter, AliasWhereInput>
  }, "id" | "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    series?: SortOrderInput | SortOrder
    issued?: SortOrderInput | SortOrder
    aliasId?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Document"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    createdBy?: StringNullableWithAggregatesFilter<"Document"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Document"> | string | null
    title?: StringNullableWithAggregatesFilter<"Document"> | string | null
    series?: StringNullableWithAggregatesFilter<"Document"> | string | null
    issued?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    aliasId?: IntWithAggregatesFilter<"Document"> | number
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: IntFilter<"File"> | number
    createdAt?: DateTimeNullableFilter<"File"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    createdBy?: StringNullableFilter<"File"> | string | null
    updatedBy?: StringNullableFilter<"File"> | string | null
    filename?: StringNullableFilter<"File"> | string | null
    bucket?: StringNullableFilter<"File"> | string | null
    mime?: StringNullableFilter<"File"> | string | null
    personId?: IntFilter<"File"> | number
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    bucket?: SortOrderInput | SortOrder
    mime?: SortOrderInput | SortOrder
    personId?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    createdAt?: DateTimeNullableFilter<"File"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    createdBy?: StringNullableFilter<"File"> | string | null
    updatedBy?: StringNullableFilter<"File"> | string | null
    filename?: StringNullableFilter<"File"> | string | null
    bucket?: StringNullableFilter<"File"> | string | null
    mime?: StringNullableFilter<"File"> | string | null
    personId?: IntFilter<"File"> | number
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }, "id" | "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    bucket?: SortOrderInput | SortOrder
    mime?: SortOrderInput | SortOrder
    personId?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"File"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"File"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"File"> | Date | string | null
    createdBy?: StringNullableWithAggregatesFilter<"File"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"File"> | string | null
    filename?: StringNullableWithAggregatesFilter<"File"> | string | null
    bucket?: StringNullableWithAggregatesFilter<"File"> | string | null
    mime?: StringNullableWithAggregatesFilter<"File"> | string | null
    personId?: IntWithAggregatesFilter<"File"> | number
  }

  export type PersonCreateInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    birthday?: Date | string | null
    birthPlace?: string | null
    deathday?: Date | string | null
    details?: string | null
    signs?: string | null
    nationality?: string | null
    gender?: string | null
    religion?: string | null
    ideology?: string | null
    pseudonyms?: PseudonymCreateNestedManyWithoutPersonInput
    aliases?: AliasCreateNestedManyWithoutPersonInput
    photos?: FileCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    birthday?: Date | string | null
    birthPlace?: string | null
    deathday?: Date | string | null
    details?: string | null
    signs?: string | null
    nationality?: string | null
    gender?: string | null
    religion?: string | null
    ideology?: string | null
    pseudonyms?: PseudonymUncheckedCreateNestedManyWithoutPersonInput
    aliases?: AliasUncheckedCreateNestedManyWithoutPersonInput
    photos?: FileUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    signs?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ideology?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonyms?: PseudonymUpdateManyWithoutPersonNestedInput
    aliases?: AliasUpdateManyWithoutPersonNestedInput
    photos?: FileUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    signs?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ideology?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonyms?: PseudonymUncheckedUpdateManyWithoutPersonNestedInput
    aliases?: AliasUncheckedUpdateManyWithoutPersonNestedInput
    photos?: FileUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    birthday?: Date | string | null
    birthPlace?: string | null
    deathday?: Date | string | null
    details?: string | null
    signs?: string | null
    nationality?: string | null
    gender?: string | null
    religion?: string | null
    ideology?: string | null
  }

  export type PersonUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    signs?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ideology?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    signs?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ideology?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AliasCreateInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    description?: string | null
    firstName?: string | null
    secondName?: string | null
    surname?: string | null
    citizenship?: string | null
    documents?: DocumentCreateNestedManyWithoutAliasInput
    person: PersonCreateNestedOneWithoutAliasesInput
  }

  export type AliasUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    description?: string | null
    firstName?: string | null
    secondName?: string | null
    surname?: string | null
    citizenship?: string | null
    personId: number
    documents?: DocumentUncheckedCreateNestedManyWithoutAliasInput
  }

  export type AliasUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    citizenship?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUpdateManyWithoutAliasNestedInput
    person?: PersonUpdateOneRequiredWithoutAliasesNestedInput
  }

  export type AliasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    citizenship?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    documents?: DocumentUncheckedUpdateManyWithoutAliasNestedInput
  }

  export type AliasCreateManyInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    description?: string | null
    firstName?: string | null
    secondName?: string | null
    surname?: string | null
    citizenship?: string | null
    personId: number
  }

  export type AliasUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    citizenship?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AliasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    citizenship?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
  }

  export type PseudonymCreateInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    title?: string | null
    person: PersonCreateNestedOneWithoutPseudonymsInput
  }

  export type PseudonymUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    title?: string | null
    personId: number
  }

  export type PseudonymUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    person?: PersonUpdateOneRequiredWithoutPseudonymsNestedInput
  }

  export type PseudonymUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
  }

  export type PseudonymCreateManyInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    title?: string | null
    personId: number
  }

  export type PseudonymUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PseudonymUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentCreateInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    title?: string | null
    series?: string | null
    issued?: Date | string | null
    alias: AliasCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    title?: string | null
    series?: string | null
    issued?: Date | string | null
    aliasId: number
  }

  export type DocumentUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: AliasUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aliasId?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentCreateManyInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    title?: string | null
    series?: string | null
    issued?: Date | string | null
    aliasId: number
  }

  export type DocumentUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aliasId?: IntFieldUpdateOperationsInput | number
  }

  export type FileCreateInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    filename?: string | null
    bucket?: string | null
    mime?: string | null
    person: PersonCreateNestedOneWithoutPhotosInput
  }

  export type FileUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    filename?: string | null
    bucket?: string | null
    mime?: string | null
    personId: number
  }

  export type FileUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    person?: PersonUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
  }

  export type FileCreateManyInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    filename?: string | null
    bucket?: string | null
    mime?: string | null
    personId: number
  }

  export type FileUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PseudonymListRelationFilter = {
    every?: PseudonymWhereInput
    some?: PseudonymWhereInput
    none?: PseudonymWhereInput
  }

  export type AliasListRelationFilter = {
    every?: AliasWhereInput
    some?: AliasWhereInput
    none?: AliasWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PseudonymOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AliasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    birthday?: SortOrder
    birthPlace?: SortOrder
    deathday?: SortOrder
    details?: SortOrder
    signs?: SortOrder
    nationality?: SortOrder
    gender?: SortOrder
    religion?: SortOrder
    ideology?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    birthday?: SortOrder
    birthPlace?: SortOrder
    deathday?: SortOrder
    details?: SortOrder
    signs?: SortOrder
    nationality?: SortOrder
    gender?: SortOrder
    religion?: SortOrder
    ideology?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    birthday?: SortOrder
    birthPlace?: SortOrder
    deathday?: SortOrder
    details?: SortOrder
    signs?: SortOrder
    nationality?: SortOrder
    gender?: SortOrder
    religion?: SortOrder
    ideology?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type PersonRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AliasCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    description?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    surname?: SortOrder
    citizenship?: SortOrder
    personId?: SortOrder
  }

  export type AliasAvgOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
  }

  export type AliasMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    description?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    surname?: SortOrder
    citizenship?: SortOrder
    personId?: SortOrder
  }

  export type AliasMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    description?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    surname?: SortOrder
    citizenship?: SortOrder
    personId?: SortOrder
  }

  export type AliasSumOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
  }

  export type PseudonymCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    title?: SortOrder
    personId?: SortOrder
  }

  export type PseudonymAvgOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
  }

  export type PseudonymMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    title?: SortOrder
    personId?: SortOrder
  }

  export type PseudonymMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    title?: SortOrder
    personId?: SortOrder
  }

  export type PseudonymSumOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
  }

  export type AliasRelationFilter = {
    is?: AliasWhereInput
    isNot?: AliasWhereInput
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    title?: SortOrder
    series?: SortOrder
    issued?: SortOrder
    aliasId?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    aliasId?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    title?: SortOrder
    series?: SortOrder
    issued?: SortOrder
    aliasId?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    title?: SortOrder
    series?: SortOrder
    issued?: SortOrder
    aliasId?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    id?: SortOrder
    aliasId?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    filename?: SortOrder
    bucket?: SortOrder
    mime?: SortOrder
    personId?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    filename?: SortOrder
    bucket?: SortOrder
    mime?: SortOrder
    personId?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    filename?: SortOrder
    bucket?: SortOrder
    mime?: SortOrder
    personId?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
  }

  export type PseudonymCreateNestedManyWithoutPersonInput = {
    create?: XOR<PseudonymCreateWithoutPersonInput, PseudonymUncheckedCreateWithoutPersonInput> | PseudonymCreateWithoutPersonInput[] | PseudonymUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PseudonymCreateOrConnectWithoutPersonInput | PseudonymCreateOrConnectWithoutPersonInput[]
    createMany?: PseudonymCreateManyPersonInputEnvelope
    connect?: PseudonymWhereUniqueInput | PseudonymWhereUniqueInput[]
  }

  export type AliasCreateNestedManyWithoutPersonInput = {
    create?: XOR<AliasCreateWithoutPersonInput, AliasUncheckedCreateWithoutPersonInput> | AliasCreateWithoutPersonInput[] | AliasUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: AliasCreateOrConnectWithoutPersonInput | AliasCreateOrConnectWithoutPersonInput[]
    createMany?: AliasCreateManyPersonInputEnvelope
    connect?: AliasWhereUniqueInput | AliasWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutPersonInput = {
    create?: XOR<FileCreateWithoutPersonInput, FileUncheckedCreateWithoutPersonInput> | FileCreateWithoutPersonInput[] | FileUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: FileCreateOrConnectWithoutPersonInput | FileCreateOrConnectWithoutPersonInput[]
    createMany?: FileCreateManyPersonInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type PseudonymUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<PseudonymCreateWithoutPersonInput, PseudonymUncheckedCreateWithoutPersonInput> | PseudonymCreateWithoutPersonInput[] | PseudonymUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PseudonymCreateOrConnectWithoutPersonInput | PseudonymCreateOrConnectWithoutPersonInput[]
    createMany?: PseudonymCreateManyPersonInputEnvelope
    connect?: PseudonymWhereUniqueInput | PseudonymWhereUniqueInput[]
  }

  export type AliasUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<AliasCreateWithoutPersonInput, AliasUncheckedCreateWithoutPersonInput> | AliasCreateWithoutPersonInput[] | AliasUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: AliasCreateOrConnectWithoutPersonInput | AliasCreateOrConnectWithoutPersonInput[]
    createMany?: AliasCreateManyPersonInputEnvelope
    connect?: AliasWhereUniqueInput | AliasWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<FileCreateWithoutPersonInput, FileUncheckedCreateWithoutPersonInput> | FileCreateWithoutPersonInput[] | FileUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: FileCreateOrConnectWithoutPersonInput | FileCreateOrConnectWithoutPersonInput[]
    createMany?: FileCreateManyPersonInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PseudonymUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PseudonymCreateWithoutPersonInput, PseudonymUncheckedCreateWithoutPersonInput> | PseudonymCreateWithoutPersonInput[] | PseudonymUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PseudonymCreateOrConnectWithoutPersonInput | PseudonymCreateOrConnectWithoutPersonInput[]
    upsert?: PseudonymUpsertWithWhereUniqueWithoutPersonInput | PseudonymUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PseudonymCreateManyPersonInputEnvelope
    set?: PseudonymWhereUniqueInput | PseudonymWhereUniqueInput[]
    disconnect?: PseudonymWhereUniqueInput | PseudonymWhereUniqueInput[]
    delete?: PseudonymWhereUniqueInput | PseudonymWhereUniqueInput[]
    connect?: PseudonymWhereUniqueInput | PseudonymWhereUniqueInput[]
    update?: PseudonymUpdateWithWhereUniqueWithoutPersonInput | PseudonymUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PseudonymUpdateManyWithWhereWithoutPersonInput | PseudonymUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PseudonymScalarWhereInput | PseudonymScalarWhereInput[]
  }

  export type AliasUpdateManyWithoutPersonNestedInput = {
    create?: XOR<AliasCreateWithoutPersonInput, AliasUncheckedCreateWithoutPersonInput> | AliasCreateWithoutPersonInput[] | AliasUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: AliasCreateOrConnectWithoutPersonInput | AliasCreateOrConnectWithoutPersonInput[]
    upsert?: AliasUpsertWithWhereUniqueWithoutPersonInput | AliasUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: AliasCreateManyPersonInputEnvelope
    set?: AliasWhereUniqueInput | AliasWhereUniqueInput[]
    disconnect?: AliasWhereUniqueInput | AliasWhereUniqueInput[]
    delete?: AliasWhereUniqueInput | AliasWhereUniqueInput[]
    connect?: AliasWhereUniqueInput | AliasWhereUniqueInput[]
    update?: AliasUpdateWithWhereUniqueWithoutPersonInput | AliasUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: AliasUpdateManyWithWhereWithoutPersonInput | AliasUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: AliasScalarWhereInput | AliasScalarWhereInput[]
  }

  export type FileUpdateManyWithoutPersonNestedInput = {
    create?: XOR<FileCreateWithoutPersonInput, FileUncheckedCreateWithoutPersonInput> | FileCreateWithoutPersonInput[] | FileUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: FileCreateOrConnectWithoutPersonInput | FileCreateOrConnectWithoutPersonInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutPersonInput | FileUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: FileCreateManyPersonInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutPersonInput | FileUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: FileUpdateManyWithWhereWithoutPersonInput | FileUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PseudonymUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PseudonymCreateWithoutPersonInput, PseudonymUncheckedCreateWithoutPersonInput> | PseudonymCreateWithoutPersonInput[] | PseudonymUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PseudonymCreateOrConnectWithoutPersonInput | PseudonymCreateOrConnectWithoutPersonInput[]
    upsert?: PseudonymUpsertWithWhereUniqueWithoutPersonInput | PseudonymUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PseudonymCreateManyPersonInputEnvelope
    set?: PseudonymWhereUniqueInput | PseudonymWhereUniqueInput[]
    disconnect?: PseudonymWhereUniqueInput | PseudonymWhereUniqueInput[]
    delete?: PseudonymWhereUniqueInput | PseudonymWhereUniqueInput[]
    connect?: PseudonymWhereUniqueInput | PseudonymWhereUniqueInput[]
    update?: PseudonymUpdateWithWhereUniqueWithoutPersonInput | PseudonymUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PseudonymUpdateManyWithWhereWithoutPersonInput | PseudonymUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PseudonymScalarWhereInput | PseudonymScalarWhereInput[]
  }

  export type AliasUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<AliasCreateWithoutPersonInput, AliasUncheckedCreateWithoutPersonInput> | AliasCreateWithoutPersonInput[] | AliasUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: AliasCreateOrConnectWithoutPersonInput | AliasCreateOrConnectWithoutPersonInput[]
    upsert?: AliasUpsertWithWhereUniqueWithoutPersonInput | AliasUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: AliasCreateManyPersonInputEnvelope
    set?: AliasWhereUniqueInput | AliasWhereUniqueInput[]
    disconnect?: AliasWhereUniqueInput | AliasWhereUniqueInput[]
    delete?: AliasWhereUniqueInput | AliasWhereUniqueInput[]
    connect?: AliasWhereUniqueInput | AliasWhereUniqueInput[]
    update?: AliasUpdateWithWhereUniqueWithoutPersonInput | AliasUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: AliasUpdateManyWithWhereWithoutPersonInput | AliasUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: AliasScalarWhereInput | AliasScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<FileCreateWithoutPersonInput, FileUncheckedCreateWithoutPersonInput> | FileCreateWithoutPersonInput[] | FileUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: FileCreateOrConnectWithoutPersonInput | FileCreateOrConnectWithoutPersonInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutPersonInput | FileUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: FileCreateManyPersonInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutPersonInput | FileUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: FileUpdateManyWithWhereWithoutPersonInput | FileUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type DocumentCreateNestedManyWithoutAliasInput = {
    create?: XOR<DocumentCreateWithoutAliasInput, DocumentUncheckedCreateWithoutAliasInput> | DocumentCreateWithoutAliasInput[] | DocumentUncheckedCreateWithoutAliasInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAliasInput | DocumentCreateOrConnectWithoutAliasInput[]
    createMany?: DocumentCreateManyAliasInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type PersonCreateNestedOneWithoutAliasesInput = {
    create?: XOR<PersonCreateWithoutAliasesInput, PersonUncheckedCreateWithoutAliasesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAliasesInput
    connect?: PersonWhereUniqueInput
  }

  export type DocumentUncheckedCreateNestedManyWithoutAliasInput = {
    create?: XOR<DocumentCreateWithoutAliasInput, DocumentUncheckedCreateWithoutAliasInput> | DocumentCreateWithoutAliasInput[] | DocumentUncheckedCreateWithoutAliasInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAliasInput | DocumentCreateOrConnectWithoutAliasInput[]
    createMany?: DocumentCreateManyAliasInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentUpdateManyWithoutAliasNestedInput = {
    create?: XOR<DocumentCreateWithoutAliasInput, DocumentUncheckedCreateWithoutAliasInput> | DocumentCreateWithoutAliasInput[] | DocumentUncheckedCreateWithoutAliasInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAliasInput | DocumentCreateOrConnectWithoutAliasInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutAliasInput | DocumentUpsertWithWhereUniqueWithoutAliasInput[]
    createMany?: DocumentCreateManyAliasInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutAliasInput | DocumentUpdateWithWhereUniqueWithoutAliasInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutAliasInput | DocumentUpdateManyWithWhereWithoutAliasInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type PersonUpdateOneRequiredWithoutAliasesNestedInput = {
    create?: XOR<PersonCreateWithoutAliasesInput, PersonUncheckedCreateWithoutAliasesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAliasesInput
    upsert?: PersonUpsertWithoutAliasesInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutAliasesInput, PersonUpdateWithoutAliasesInput>, PersonUncheckedUpdateWithoutAliasesInput>
  }

  export type DocumentUncheckedUpdateManyWithoutAliasNestedInput = {
    create?: XOR<DocumentCreateWithoutAliasInput, DocumentUncheckedCreateWithoutAliasInput> | DocumentCreateWithoutAliasInput[] | DocumentUncheckedCreateWithoutAliasInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAliasInput | DocumentCreateOrConnectWithoutAliasInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutAliasInput | DocumentUpsertWithWhereUniqueWithoutAliasInput[]
    createMany?: DocumentCreateManyAliasInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutAliasInput | DocumentUpdateWithWhereUniqueWithoutAliasInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutAliasInput | DocumentUpdateManyWithWhereWithoutAliasInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutPseudonymsInput = {
    create?: XOR<PersonCreateWithoutPseudonymsInput, PersonUncheckedCreateWithoutPseudonymsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPseudonymsInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutPseudonymsNestedInput = {
    create?: XOR<PersonCreateWithoutPseudonymsInput, PersonUncheckedCreateWithoutPseudonymsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPseudonymsInput
    upsert?: PersonUpsertWithoutPseudonymsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutPseudonymsInput, PersonUpdateWithoutPseudonymsInput>, PersonUncheckedUpdateWithoutPseudonymsInput>
  }

  export type AliasCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<AliasCreateWithoutDocumentsInput, AliasUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: AliasCreateOrConnectWithoutDocumentsInput
    connect?: AliasWhereUniqueInput
  }

  export type AliasUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<AliasCreateWithoutDocumentsInput, AliasUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: AliasCreateOrConnectWithoutDocumentsInput
    upsert?: AliasUpsertWithoutDocumentsInput
    connect?: AliasWhereUniqueInput
    update?: XOR<XOR<AliasUpdateToOneWithWhereWithoutDocumentsInput, AliasUpdateWithoutDocumentsInput>, AliasUncheckedUpdateWithoutDocumentsInput>
  }

  export type PersonCreateNestedOneWithoutPhotosInput = {
    create?: XOR<PersonCreateWithoutPhotosInput, PersonUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPhotosInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<PersonCreateWithoutPhotosInput, PersonUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPhotosInput
    upsert?: PersonUpsertWithoutPhotosInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutPhotosInput, PersonUpdateWithoutPhotosInput>, PersonUncheckedUpdateWithoutPhotosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PseudonymCreateWithoutPersonInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    title?: string | null
  }

  export type PseudonymUncheckedCreateWithoutPersonInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    title?: string | null
  }

  export type PseudonymCreateOrConnectWithoutPersonInput = {
    where: PseudonymWhereUniqueInput
    create: XOR<PseudonymCreateWithoutPersonInput, PseudonymUncheckedCreateWithoutPersonInput>
  }

  export type PseudonymCreateManyPersonInputEnvelope = {
    data: PseudonymCreateManyPersonInput | PseudonymCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type AliasCreateWithoutPersonInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    description?: string | null
    firstName?: string | null
    secondName?: string | null
    surname?: string | null
    citizenship?: string | null
    documents?: DocumentCreateNestedManyWithoutAliasInput
  }

  export type AliasUncheckedCreateWithoutPersonInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    description?: string | null
    firstName?: string | null
    secondName?: string | null
    surname?: string | null
    citizenship?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutAliasInput
  }

  export type AliasCreateOrConnectWithoutPersonInput = {
    where: AliasWhereUniqueInput
    create: XOR<AliasCreateWithoutPersonInput, AliasUncheckedCreateWithoutPersonInput>
  }

  export type AliasCreateManyPersonInputEnvelope = {
    data: AliasCreateManyPersonInput | AliasCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutPersonInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    filename?: string | null
    bucket?: string | null
    mime?: string | null
  }

  export type FileUncheckedCreateWithoutPersonInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    filename?: string | null
    bucket?: string | null
    mime?: string | null
  }

  export type FileCreateOrConnectWithoutPersonInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutPersonInput, FileUncheckedCreateWithoutPersonInput>
  }

  export type FileCreateManyPersonInputEnvelope = {
    data: FileCreateManyPersonInput | FileCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type PseudonymUpsertWithWhereUniqueWithoutPersonInput = {
    where: PseudonymWhereUniqueInput
    update: XOR<PseudonymUpdateWithoutPersonInput, PseudonymUncheckedUpdateWithoutPersonInput>
    create: XOR<PseudonymCreateWithoutPersonInput, PseudonymUncheckedCreateWithoutPersonInput>
  }

  export type PseudonymUpdateWithWhereUniqueWithoutPersonInput = {
    where: PseudonymWhereUniqueInput
    data: XOR<PseudonymUpdateWithoutPersonInput, PseudonymUncheckedUpdateWithoutPersonInput>
  }

  export type PseudonymUpdateManyWithWhereWithoutPersonInput = {
    where: PseudonymScalarWhereInput
    data: XOR<PseudonymUpdateManyMutationInput, PseudonymUncheckedUpdateManyWithoutPersonInput>
  }

  export type PseudonymScalarWhereInput = {
    AND?: PseudonymScalarWhereInput | PseudonymScalarWhereInput[]
    OR?: PseudonymScalarWhereInput[]
    NOT?: PseudonymScalarWhereInput | PseudonymScalarWhereInput[]
    id?: IntFilter<"Pseudonym"> | number
    createdAt?: DateTimeNullableFilter<"Pseudonym"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Pseudonym"> | Date | string | null
    createdBy?: StringNullableFilter<"Pseudonym"> | string | null
    updatedBy?: StringNullableFilter<"Pseudonym"> | string | null
    title?: StringNullableFilter<"Pseudonym"> | string | null
    personId?: IntFilter<"Pseudonym"> | number
  }

  export type AliasUpsertWithWhereUniqueWithoutPersonInput = {
    where: AliasWhereUniqueInput
    update: XOR<AliasUpdateWithoutPersonInput, AliasUncheckedUpdateWithoutPersonInput>
    create: XOR<AliasCreateWithoutPersonInput, AliasUncheckedCreateWithoutPersonInput>
  }

  export type AliasUpdateWithWhereUniqueWithoutPersonInput = {
    where: AliasWhereUniqueInput
    data: XOR<AliasUpdateWithoutPersonInput, AliasUncheckedUpdateWithoutPersonInput>
  }

  export type AliasUpdateManyWithWhereWithoutPersonInput = {
    where: AliasScalarWhereInput
    data: XOR<AliasUpdateManyMutationInput, AliasUncheckedUpdateManyWithoutPersonInput>
  }

  export type AliasScalarWhereInput = {
    AND?: AliasScalarWhereInput | AliasScalarWhereInput[]
    OR?: AliasScalarWhereInput[]
    NOT?: AliasScalarWhereInput | AliasScalarWhereInput[]
    id?: IntFilter<"Alias"> | number
    createdAt?: DateTimeNullableFilter<"Alias"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Alias"> | Date | string | null
    createdBy?: StringNullableFilter<"Alias"> | string | null
    updatedBy?: StringNullableFilter<"Alias"> | string | null
    description?: StringNullableFilter<"Alias"> | string | null
    firstName?: StringNullableFilter<"Alias"> | string | null
    secondName?: StringNullableFilter<"Alias"> | string | null
    surname?: StringNullableFilter<"Alias"> | string | null
    citizenship?: StringNullableFilter<"Alias"> | string | null
    personId?: IntFilter<"Alias"> | number
  }

  export type FileUpsertWithWhereUniqueWithoutPersonInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutPersonInput, FileUncheckedUpdateWithoutPersonInput>
    create: XOR<FileCreateWithoutPersonInput, FileUncheckedCreateWithoutPersonInput>
  }

  export type FileUpdateWithWhereUniqueWithoutPersonInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutPersonInput, FileUncheckedUpdateWithoutPersonInput>
  }

  export type FileUpdateManyWithWhereWithoutPersonInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutPersonInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: IntFilter<"File"> | number
    createdAt?: DateTimeNullableFilter<"File"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    createdBy?: StringNullableFilter<"File"> | string | null
    updatedBy?: StringNullableFilter<"File"> | string | null
    filename?: StringNullableFilter<"File"> | string | null
    bucket?: StringNullableFilter<"File"> | string | null
    mime?: StringNullableFilter<"File"> | string | null
    personId?: IntFilter<"File"> | number
  }

  export type DocumentCreateWithoutAliasInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    title?: string | null
    series?: string | null
    issued?: Date | string | null
  }

  export type DocumentUncheckedCreateWithoutAliasInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    title?: string | null
    series?: string | null
    issued?: Date | string | null
  }

  export type DocumentCreateOrConnectWithoutAliasInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutAliasInput, DocumentUncheckedCreateWithoutAliasInput>
  }

  export type DocumentCreateManyAliasInputEnvelope = {
    data: DocumentCreateManyAliasInput | DocumentCreateManyAliasInput[]
    skipDuplicates?: boolean
  }

  export type PersonCreateWithoutAliasesInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    birthday?: Date | string | null
    birthPlace?: string | null
    deathday?: Date | string | null
    details?: string | null
    signs?: string | null
    nationality?: string | null
    gender?: string | null
    religion?: string | null
    ideology?: string | null
    pseudonyms?: PseudonymCreateNestedManyWithoutPersonInput
    photos?: FileCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutAliasesInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    birthday?: Date | string | null
    birthPlace?: string | null
    deathday?: Date | string | null
    details?: string | null
    signs?: string | null
    nationality?: string | null
    gender?: string | null
    religion?: string | null
    ideology?: string | null
    pseudonyms?: PseudonymUncheckedCreateNestedManyWithoutPersonInput
    photos?: FileUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutAliasesInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutAliasesInput, PersonUncheckedCreateWithoutAliasesInput>
  }

  export type DocumentUpsertWithWhereUniqueWithoutAliasInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutAliasInput, DocumentUncheckedUpdateWithoutAliasInput>
    create: XOR<DocumentCreateWithoutAliasInput, DocumentUncheckedCreateWithoutAliasInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutAliasInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutAliasInput, DocumentUncheckedUpdateWithoutAliasInput>
  }

  export type DocumentUpdateManyWithWhereWithoutAliasInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutAliasInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: IntFilter<"Document"> | number
    createdAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdBy?: StringNullableFilter<"Document"> | string | null
    updatedBy?: StringNullableFilter<"Document"> | string | null
    title?: StringNullableFilter<"Document"> | string | null
    series?: StringNullableFilter<"Document"> | string | null
    issued?: DateTimeNullableFilter<"Document"> | Date | string | null
    aliasId?: IntFilter<"Document"> | number
  }

  export type PersonUpsertWithoutAliasesInput = {
    update: XOR<PersonUpdateWithoutAliasesInput, PersonUncheckedUpdateWithoutAliasesInput>
    create: XOR<PersonCreateWithoutAliasesInput, PersonUncheckedCreateWithoutAliasesInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutAliasesInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutAliasesInput, PersonUncheckedUpdateWithoutAliasesInput>
  }

  export type PersonUpdateWithoutAliasesInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    signs?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ideology?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonyms?: PseudonymUpdateManyWithoutPersonNestedInput
    photos?: FileUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutAliasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    signs?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ideology?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonyms?: PseudonymUncheckedUpdateManyWithoutPersonNestedInput
    photos?: FileUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutPseudonymsInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    birthday?: Date | string | null
    birthPlace?: string | null
    deathday?: Date | string | null
    details?: string | null
    signs?: string | null
    nationality?: string | null
    gender?: string | null
    religion?: string | null
    ideology?: string | null
    aliases?: AliasCreateNestedManyWithoutPersonInput
    photos?: FileCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutPseudonymsInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    birthday?: Date | string | null
    birthPlace?: string | null
    deathday?: Date | string | null
    details?: string | null
    signs?: string | null
    nationality?: string | null
    gender?: string | null
    religion?: string | null
    ideology?: string | null
    aliases?: AliasUncheckedCreateNestedManyWithoutPersonInput
    photos?: FileUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutPseudonymsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutPseudonymsInput, PersonUncheckedCreateWithoutPseudonymsInput>
  }

  export type PersonUpsertWithoutPseudonymsInput = {
    update: XOR<PersonUpdateWithoutPseudonymsInput, PersonUncheckedUpdateWithoutPseudonymsInput>
    create: XOR<PersonCreateWithoutPseudonymsInput, PersonUncheckedCreateWithoutPseudonymsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutPseudonymsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutPseudonymsInput, PersonUncheckedUpdateWithoutPseudonymsInput>
  }

  export type PersonUpdateWithoutPseudonymsInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    signs?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ideology?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: AliasUpdateManyWithoutPersonNestedInput
    photos?: FileUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutPseudonymsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    signs?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ideology?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: AliasUncheckedUpdateManyWithoutPersonNestedInput
    photos?: FileUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type AliasCreateWithoutDocumentsInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    description?: string | null
    firstName?: string | null
    secondName?: string | null
    surname?: string | null
    citizenship?: string | null
    person: PersonCreateNestedOneWithoutAliasesInput
  }

  export type AliasUncheckedCreateWithoutDocumentsInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    description?: string | null
    firstName?: string | null
    secondName?: string | null
    surname?: string | null
    citizenship?: string | null
    personId: number
  }

  export type AliasCreateOrConnectWithoutDocumentsInput = {
    where: AliasWhereUniqueInput
    create: XOR<AliasCreateWithoutDocumentsInput, AliasUncheckedCreateWithoutDocumentsInput>
  }

  export type AliasUpsertWithoutDocumentsInput = {
    update: XOR<AliasUpdateWithoutDocumentsInput, AliasUncheckedUpdateWithoutDocumentsInput>
    create: XOR<AliasCreateWithoutDocumentsInput, AliasUncheckedCreateWithoutDocumentsInput>
    where?: AliasWhereInput
  }

  export type AliasUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: AliasWhereInput
    data: XOR<AliasUpdateWithoutDocumentsInput, AliasUncheckedUpdateWithoutDocumentsInput>
  }

  export type AliasUpdateWithoutDocumentsInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    citizenship?: NullableStringFieldUpdateOperationsInput | string | null
    person?: PersonUpdateOneRequiredWithoutAliasesNestedInput
  }

  export type AliasUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    citizenship?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
  }

  export type PersonCreateWithoutPhotosInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    birthday?: Date | string | null
    birthPlace?: string | null
    deathday?: Date | string | null
    details?: string | null
    signs?: string | null
    nationality?: string | null
    gender?: string | null
    religion?: string | null
    ideology?: string | null
    pseudonyms?: PseudonymCreateNestedManyWithoutPersonInput
    aliases?: AliasCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutPhotosInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    birthday?: Date | string | null
    birthPlace?: string | null
    deathday?: Date | string | null
    details?: string | null
    signs?: string | null
    nationality?: string | null
    gender?: string | null
    religion?: string | null
    ideology?: string | null
    pseudonyms?: PseudonymUncheckedCreateNestedManyWithoutPersonInput
    aliases?: AliasUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutPhotosInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutPhotosInput, PersonUncheckedCreateWithoutPhotosInput>
  }

  export type PersonUpsertWithoutPhotosInput = {
    update: XOR<PersonUpdateWithoutPhotosInput, PersonUncheckedUpdateWithoutPhotosInput>
    create: XOR<PersonCreateWithoutPhotosInput, PersonUncheckedCreateWithoutPhotosInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutPhotosInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutPhotosInput, PersonUncheckedUpdateWithoutPhotosInput>
  }

  export type PersonUpdateWithoutPhotosInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    signs?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ideology?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonyms?: PseudonymUpdateManyWithoutPersonNestedInput
    aliases?: AliasUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    signs?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ideology?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonyms?: PseudonymUncheckedUpdateManyWithoutPersonNestedInput
    aliases?: AliasUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PseudonymCreateManyPersonInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    title?: string | null
  }

  export type AliasCreateManyPersonInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    description?: string | null
    firstName?: string | null
    secondName?: string | null
    surname?: string | null
    citizenship?: string | null
  }

  export type FileCreateManyPersonInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    filename?: string | null
    bucket?: string | null
    mime?: string | null
  }

  export type PseudonymUpdateWithoutPersonInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PseudonymUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PseudonymUncheckedUpdateManyWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AliasUpdateWithoutPersonInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    citizenship?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUpdateManyWithoutAliasNestedInput
  }

  export type AliasUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    citizenship?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutAliasNestedInput
  }

  export type AliasUncheckedUpdateManyWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    citizenship?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileUpdateWithoutPersonInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileUncheckedUpdateManyWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentCreateManyAliasInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    title?: string | null
    series?: string | null
    issued?: Date | string | null
  }

  export type DocumentUpdateWithoutAliasInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentUncheckedUpdateWithoutAliasInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutAliasInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    issued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PersonCountOutputTypeDefaultArgs instead
     */
    export type PersonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AliasCountOutputTypeDefaultArgs instead
     */
    export type AliasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AliasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonDefaultArgs instead
     */
    export type PersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AliasDefaultArgs instead
     */
    export type AliasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AliasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PseudonymDefaultArgs instead
     */
    export type PseudonymArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PseudonymDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DocumentDefaultArgs instead
     */
    export type DocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileDefaultArgs instead
     */
    export type FileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}