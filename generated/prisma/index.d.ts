
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model Child
 * 
 */
export type Child = $Result.DefaultSelection<Prisma.$ChildPayload>
/**
 * Model TypeCarePackage
 * 
 */
export type TypeCarePackage = $Result.DefaultSelection<Prisma.$TypeCarePackagePayload>
/**
 * Model CarePackageItem
 * 
 */
export type CarePackageItem = $Result.DefaultSelection<Prisma.$CarePackageItemPayload>
/**
 * Model CarePackage
 * 
 */
export type CarePackage = $Result.DefaultSelection<Prisma.$CarePackagePayload>
/**
 * Model CarePackageSchedule
 * 
 */
export type CarePackageSchedule = $Result.DefaultSelection<Prisma.$CarePackageSchedulePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.child`: Exposes CRUD operations for the **Child** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Children
    * const children = await prisma.child.findMany()
    * ```
    */
  get child(): Prisma.ChildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.typeCarePackage`: Exposes CRUD operations for the **TypeCarePackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TypeCarePackages
    * const typeCarePackages = await prisma.typeCarePackage.findMany()
    * ```
    */
  get typeCarePackage(): Prisma.TypeCarePackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carePackageItem`: Exposes CRUD operations for the **CarePackageItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarePackageItems
    * const carePackageItems = await prisma.carePackageItem.findMany()
    * ```
    */
  get carePackageItem(): Prisma.CarePackageItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carePackage`: Exposes CRUD operations for the **CarePackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarePackages
    * const carePackages = await prisma.carePackage.findMany()
    * ```
    */
  get carePackage(): Prisma.CarePackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carePackageSchedule`: Exposes CRUD operations for the **CarePackageSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarePackageSchedules
    * const carePackageSchedules = await prisma.carePackageSchedule.findMany()
    * ```
    */
  get carePackageSchedule(): Prisma.CarePackageScheduleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Person: 'Person',
    Child: 'Child',
    TypeCarePackage: 'TypeCarePackage',
    CarePackageItem: 'CarePackageItem',
    CarePackage: 'CarePackage',
    CarePackageSchedule: 'CarePackageSchedule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "person" | "child" | "typeCarePackage" | "carePackageItem" | "carePackage" | "carePackageSchedule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      Child: {
        payload: Prisma.$ChildPayload<ExtArgs>
        fields: Prisma.ChildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          findFirst: {
            args: Prisma.ChildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          findMany: {
            args: Prisma.ChildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>[]
          }
          create: {
            args: Prisma.ChildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          createMany: {
            args: Prisma.ChildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>[]
          }
          delete: {
            args: Prisma.ChildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          update: {
            args: Prisma.ChildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          deleteMany: {
            args: Prisma.ChildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>[]
          }
          upsert: {
            args: Prisma.ChildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          aggregate: {
            args: Prisma.ChildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChild>
          }
          groupBy: {
            args: Prisma.ChildGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChildGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChildCountArgs<ExtArgs>
            result: $Utils.Optional<ChildCountAggregateOutputType> | number
          }
        }
      }
      TypeCarePackage: {
        payload: Prisma.$TypeCarePackagePayload<ExtArgs>
        fields: Prisma.TypeCarePackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeCarePackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCarePackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeCarePackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCarePackagePayload>
          }
          findFirst: {
            args: Prisma.TypeCarePackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCarePackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeCarePackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCarePackagePayload>
          }
          findMany: {
            args: Prisma.TypeCarePackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCarePackagePayload>[]
          }
          create: {
            args: Prisma.TypeCarePackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCarePackagePayload>
          }
          createMany: {
            args: Prisma.TypeCarePackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeCarePackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCarePackagePayload>[]
          }
          delete: {
            args: Prisma.TypeCarePackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCarePackagePayload>
          }
          update: {
            args: Prisma.TypeCarePackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCarePackagePayload>
          }
          deleteMany: {
            args: Prisma.TypeCarePackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeCarePackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypeCarePackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCarePackagePayload>[]
          }
          upsert: {
            args: Prisma.TypeCarePackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCarePackagePayload>
          }
          aggregate: {
            args: Prisma.TypeCarePackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypeCarePackage>
          }
          groupBy: {
            args: Prisma.TypeCarePackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeCarePackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeCarePackageCountArgs<ExtArgs>
            result: $Utils.Optional<TypeCarePackageCountAggregateOutputType> | number
          }
        }
      }
      CarePackageItem: {
        payload: Prisma.$CarePackageItemPayload<ExtArgs>
        fields: Prisma.CarePackageItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarePackageItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarePackageItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageItemPayload>
          }
          findFirst: {
            args: Prisma.CarePackageItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarePackageItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageItemPayload>
          }
          findMany: {
            args: Prisma.CarePackageItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageItemPayload>[]
          }
          create: {
            args: Prisma.CarePackageItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageItemPayload>
          }
          createMany: {
            args: Prisma.CarePackageItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarePackageItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageItemPayload>[]
          }
          delete: {
            args: Prisma.CarePackageItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageItemPayload>
          }
          update: {
            args: Prisma.CarePackageItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageItemPayload>
          }
          deleteMany: {
            args: Prisma.CarePackageItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarePackageItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarePackageItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageItemPayload>[]
          }
          upsert: {
            args: Prisma.CarePackageItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageItemPayload>
          }
          aggregate: {
            args: Prisma.CarePackageItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarePackageItem>
          }
          groupBy: {
            args: Prisma.CarePackageItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarePackageItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarePackageItemCountArgs<ExtArgs>
            result: $Utils.Optional<CarePackageItemCountAggregateOutputType> | number
          }
        }
      }
      CarePackage: {
        payload: Prisma.$CarePackagePayload<ExtArgs>
        fields: Prisma.CarePackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarePackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarePackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackagePayload>
          }
          findFirst: {
            args: Prisma.CarePackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarePackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackagePayload>
          }
          findMany: {
            args: Prisma.CarePackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackagePayload>[]
          }
          create: {
            args: Prisma.CarePackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackagePayload>
          }
          createMany: {
            args: Prisma.CarePackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarePackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackagePayload>[]
          }
          delete: {
            args: Prisma.CarePackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackagePayload>
          }
          update: {
            args: Prisma.CarePackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackagePayload>
          }
          deleteMany: {
            args: Prisma.CarePackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarePackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarePackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackagePayload>[]
          }
          upsert: {
            args: Prisma.CarePackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackagePayload>
          }
          aggregate: {
            args: Prisma.CarePackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarePackage>
          }
          groupBy: {
            args: Prisma.CarePackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarePackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarePackageCountArgs<ExtArgs>
            result: $Utils.Optional<CarePackageCountAggregateOutputType> | number
          }
        }
      }
      CarePackageSchedule: {
        payload: Prisma.$CarePackageSchedulePayload<ExtArgs>
        fields: Prisma.CarePackageScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarePackageScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarePackageScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageSchedulePayload>
          }
          findFirst: {
            args: Prisma.CarePackageScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarePackageScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageSchedulePayload>
          }
          findMany: {
            args: Prisma.CarePackageScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageSchedulePayload>[]
          }
          create: {
            args: Prisma.CarePackageScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageSchedulePayload>
          }
          createMany: {
            args: Prisma.CarePackageScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarePackageScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageSchedulePayload>[]
          }
          delete: {
            args: Prisma.CarePackageScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageSchedulePayload>
          }
          update: {
            args: Prisma.CarePackageScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageSchedulePayload>
          }
          deleteMany: {
            args: Prisma.CarePackageScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarePackageScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarePackageScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageSchedulePayload>[]
          }
          upsert: {
            args: Prisma.CarePackageScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarePackageSchedulePayload>
          }
          aggregate: {
            args: Prisma.CarePackageScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarePackageSchedule>
          }
          groupBy: {
            args: Prisma.CarePackageScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarePackageScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarePackageScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<CarePackageScheduleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    person?: PersonOmit
    child?: ChildOmit
    typeCarePackage?: TypeCarePackageOmit
    carePackageItem?: CarePackageItemOmit
    carePackage?: CarePackageOmit
    carePackageSchedule?: CarePackageScheduleOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    PersonCreatedBy: number
    PersonUpdatedBy: number
    ChildCreatedBy: number
    ChildUpdatedBy: number
    TypeCarePackageCreatedBy: number
    TypeCarePackageUpdatedBy: number
    CarePackageItemCreatedBy: number
    CarePackageItemUpdatedBy: number
    CarePackageCreatedBy: number
    CarePackageUpdatedBy: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonCreatedBy?: boolean | UserCountOutputTypeCountPersonCreatedByArgs
    PersonUpdatedBy?: boolean | UserCountOutputTypeCountPersonUpdatedByArgs
    ChildCreatedBy?: boolean | UserCountOutputTypeCountChildCreatedByArgs
    ChildUpdatedBy?: boolean | UserCountOutputTypeCountChildUpdatedByArgs
    TypeCarePackageCreatedBy?: boolean | UserCountOutputTypeCountTypeCarePackageCreatedByArgs
    TypeCarePackageUpdatedBy?: boolean | UserCountOutputTypeCountTypeCarePackageUpdatedByArgs
    CarePackageItemCreatedBy?: boolean | UserCountOutputTypeCountCarePackageItemCreatedByArgs
    CarePackageItemUpdatedBy?: boolean | UserCountOutputTypeCountCarePackageItemUpdatedByArgs
    CarePackageCreatedBy?: boolean | UserCountOutputTypeCountCarePackageCreatedByArgs
    CarePackageUpdatedBy?: boolean | UserCountOutputTypeCountCarePackageUpdatedByArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPersonCreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPersonUpdatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChildCreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChildWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChildUpdatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChildWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTypeCarePackageCreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeCarePackageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTypeCarePackageUpdatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeCarePackageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCarePackageItemCreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarePackageItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCarePackageItemUpdatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarePackageItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCarePackageCreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarePackageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCarePackageUpdatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarePackageWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    Child: number
    CarePackage: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Child?: boolean | PersonCountOutputTypeCountChildArgs
    CarePackage?: boolean | PersonCountOutputTypeCountCarePackageArgs
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
  export type PersonCountOutputTypeCountChildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChildWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountCarePackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarePackageWhereInput
  }


  /**
   * Count Type TypeCarePackageCountOutputType
   */

  export type TypeCarePackageCountOutputType = {
    CarePackage: number
  }

  export type TypeCarePackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CarePackage?: boolean | TypeCarePackageCountOutputTypeCountCarePackageArgs
  }

  // Custom InputTypes
  /**
   * TypeCarePackageCountOutputType without action
   */
  export type TypeCarePackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackageCountOutputType
     */
    select?: TypeCarePackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeCarePackageCountOutputType without action
   */
  export type TypeCarePackageCountOutputTypeCountCarePackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarePackageWhereInput
  }


  /**
   * Count Type CarePackageScheduleCountOutputType
   */

  export type CarePackageScheduleCountOutputType = {
    CarePackage: number
  }

  export type CarePackageScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CarePackage?: boolean | CarePackageScheduleCountOutputTypeCountCarePackageArgs
  }

  // Custom InputTypes
  /**
   * CarePackageScheduleCountOutputType without action
   */
  export type CarePackageScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageScheduleCountOutputType
     */
    select?: CarePackageScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarePackageScheduleCountOutputType without action
   */
  export type CarePackageScheduleCountOutputTypeCountCarePackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarePackageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    modified_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    modified_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    modified_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    modified_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    modified_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    modified_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    modified_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    modified_at?: boolean
    PersonCreatedBy?: boolean | User$PersonCreatedByArgs<ExtArgs>
    PersonUpdatedBy?: boolean | User$PersonUpdatedByArgs<ExtArgs>
    ChildCreatedBy?: boolean | User$ChildCreatedByArgs<ExtArgs>
    ChildUpdatedBy?: boolean | User$ChildUpdatedByArgs<ExtArgs>
    TypeCarePackageCreatedBy?: boolean | User$TypeCarePackageCreatedByArgs<ExtArgs>
    TypeCarePackageUpdatedBy?: boolean | User$TypeCarePackageUpdatedByArgs<ExtArgs>
    CarePackageItemCreatedBy?: boolean | User$CarePackageItemCreatedByArgs<ExtArgs>
    CarePackageItemUpdatedBy?: boolean | User$CarePackageItemUpdatedByArgs<ExtArgs>
    CarePackageCreatedBy?: boolean | User$CarePackageCreatedByArgs<ExtArgs>
    CarePackageUpdatedBy?: boolean | User$CarePackageUpdatedByArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    modified_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    modified_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    modified_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "modified_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonCreatedBy?: boolean | User$PersonCreatedByArgs<ExtArgs>
    PersonUpdatedBy?: boolean | User$PersonUpdatedByArgs<ExtArgs>
    ChildCreatedBy?: boolean | User$ChildCreatedByArgs<ExtArgs>
    ChildUpdatedBy?: boolean | User$ChildUpdatedByArgs<ExtArgs>
    TypeCarePackageCreatedBy?: boolean | User$TypeCarePackageCreatedByArgs<ExtArgs>
    TypeCarePackageUpdatedBy?: boolean | User$TypeCarePackageUpdatedByArgs<ExtArgs>
    CarePackageItemCreatedBy?: boolean | User$CarePackageItemCreatedByArgs<ExtArgs>
    CarePackageItemUpdatedBy?: boolean | User$CarePackageItemUpdatedByArgs<ExtArgs>
    CarePackageCreatedBy?: boolean | User$CarePackageCreatedByArgs<ExtArgs>
    CarePackageUpdatedBy?: boolean | User$CarePackageUpdatedByArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      PersonCreatedBy: Prisma.$PersonPayload<ExtArgs>[]
      PersonUpdatedBy: Prisma.$PersonPayload<ExtArgs>[]
      ChildCreatedBy: Prisma.$ChildPayload<ExtArgs>[]
      ChildUpdatedBy: Prisma.$ChildPayload<ExtArgs>[]
      TypeCarePackageCreatedBy: Prisma.$TypeCarePackagePayload<ExtArgs>[]
      TypeCarePackageUpdatedBy: Prisma.$TypeCarePackagePayload<ExtArgs>[]
      CarePackageItemCreatedBy: Prisma.$CarePackageItemPayload<ExtArgs>[]
      CarePackageItemUpdatedBy: Prisma.$CarePackageItemPayload<ExtArgs>[]
      CarePackageCreatedBy: Prisma.$CarePackagePayload<ExtArgs>[]
      CarePackageUpdatedBy: Prisma.$CarePackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      modified_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PersonCreatedBy<T extends User$PersonCreatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$PersonCreatedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PersonUpdatedBy<T extends User$PersonUpdatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$PersonUpdatedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChildCreatedBy<T extends User$ChildCreatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$ChildCreatedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChildUpdatedBy<T extends User$ChildUpdatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$ChildUpdatedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TypeCarePackageCreatedBy<T extends User$TypeCarePackageCreatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$TypeCarePackageCreatedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TypeCarePackageUpdatedBy<T extends User$TypeCarePackageUpdatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$TypeCarePackageUpdatedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CarePackageItemCreatedBy<T extends User$CarePackageItemCreatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$CarePackageItemCreatedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CarePackageItemUpdatedBy<T extends User$CarePackageItemUpdatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$CarePackageItemUpdatedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CarePackageCreatedBy<T extends User$CarePackageCreatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$CarePackageCreatedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CarePackageUpdatedBy<T extends User$CarePackageUpdatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$CarePackageUpdatedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly modified_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.PersonCreatedBy
   */
  export type User$PersonCreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * User.PersonUpdatedBy
   */
  export type User$PersonUpdatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * User.ChildCreatedBy
   */
  export type User$ChildCreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    where?: ChildWhereInput
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    cursor?: ChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * User.ChildUpdatedBy
   */
  export type User$ChildUpdatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    where?: ChildWhereInput
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    cursor?: ChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * User.TypeCarePackageCreatedBy
   */
  export type User$TypeCarePackageCreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageInclude<ExtArgs> | null
    where?: TypeCarePackageWhereInput
    orderBy?: TypeCarePackageOrderByWithRelationInput | TypeCarePackageOrderByWithRelationInput[]
    cursor?: TypeCarePackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TypeCarePackageScalarFieldEnum | TypeCarePackageScalarFieldEnum[]
  }

  /**
   * User.TypeCarePackageUpdatedBy
   */
  export type User$TypeCarePackageUpdatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageInclude<ExtArgs> | null
    where?: TypeCarePackageWhereInput
    orderBy?: TypeCarePackageOrderByWithRelationInput | TypeCarePackageOrderByWithRelationInput[]
    cursor?: TypeCarePackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TypeCarePackageScalarFieldEnum | TypeCarePackageScalarFieldEnum[]
  }

  /**
   * User.CarePackageItemCreatedBy
   */
  export type User$CarePackageItemCreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemInclude<ExtArgs> | null
    where?: CarePackageItemWhereInput
    orderBy?: CarePackageItemOrderByWithRelationInput | CarePackageItemOrderByWithRelationInput[]
    cursor?: CarePackageItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarePackageItemScalarFieldEnum | CarePackageItemScalarFieldEnum[]
  }

  /**
   * User.CarePackageItemUpdatedBy
   */
  export type User$CarePackageItemUpdatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemInclude<ExtArgs> | null
    where?: CarePackageItemWhereInput
    orderBy?: CarePackageItemOrderByWithRelationInput | CarePackageItemOrderByWithRelationInput[]
    cursor?: CarePackageItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarePackageItemScalarFieldEnum | CarePackageItemScalarFieldEnum[]
  }

  /**
   * User.CarePackageCreatedBy
   */
  export type User$CarePackageCreatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    where?: CarePackageWhereInput
    orderBy?: CarePackageOrderByWithRelationInput | CarePackageOrderByWithRelationInput[]
    cursor?: CarePackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarePackageScalarFieldEnum | CarePackageScalarFieldEnum[]
  }

  /**
   * User.CarePackageUpdatedBy
   */
  export type User$CarePackageUpdatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    where?: CarePackageWhereInput
    orderBy?: CarePackageOrderByWithRelationInput | CarePackageOrderByWithRelationInput[]
    cursor?: CarePackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarePackageScalarFieldEnum | CarePackageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


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
    document: number | null
  }

  export type PersonSumAggregateOutputType = {
    document: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    name: string | null
    lastName: string | null
    document: number | null
    hasChild: boolean | null
    dateBirth: Date | null
    gender: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lastName: string | null
    document: number | null
    hasChild: boolean | null
    dateBirth: Date | null
    gender: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    document: number
    hasChild: number
    dateBirth: number
    gender: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    document?: true
  }

  export type PersonSumAggregateInputType = {
    document?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    document?: true
    hasChild?: true
    dateBirth?: true
    gender?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    document?: true
    hasChild?: true
    dateBirth?: true
    gender?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    document?: true
    hasChild?: true
    dateBirth?: true
    gender?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date
    gender: string
    createdBy: string
    updatedBy: string
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    lastName?: boolean
    document?: boolean
    hasChild?: boolean
    dateBirth?: boolean
    gender?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
    Child?: boolean | Person$ChildArgs<ExtArgs>
    CarePackage?: boolean | Person$CarePackageArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    document?: boolean
    hasChild?: boolean
    dateBirth?: boolean
    gender?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    document?: boolean
    hasChild?: boolean
    dateBirth?: boolean
    gender?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    name?: boolean
    lastName?: boolean
    document?: boolean
    hasChild?: boolean
    dateBirth?: boolean
    gender?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastName" | "document" | "hasChild" | "dateBirth" | "gender" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
    Child?: boolean | Person$ChildArgs<ExtArgs>
    CarePackage?: boolean | Person$CarePackageArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      CreatedBy: Prisma.$UserPayload<ExtArgs>
      UpdatedBy: Prisma.$UserPayload<ExtArgs>
      Child: Prisma.$ChildPayload<ExtArgs>[]
      CarePackage: Prisma.$CarePackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      lastName: string
      document: number
      hasChild: boolean
      dateBirth: Date
      gender: string
      createdBy: string
      updatedBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CreatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UpdatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Child<T extends Person$ChildArgs<ExtArgs> = {}>(args?: Subset<T, Person$ChildArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CarePackage<T extends Person$CarePackageArgs<ExtArgs> = {}>(args?: Subset<T, Person$CarePackageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'String'>
    readonly name: FieldRef<"Person", 'String'>
    readonly lastName: FieldRef<"Person", 'String'>
    readonly document: FieldRef<"Person", 'Int'>
    readonly hasChild: FieldRef<"Person", 'Boolean'>
    readonly dateBirth: FieldRef<"Person", 'DateTime'>
    readonly gender: FieldRef<"Person", 'String'>
    readonly createdBy: FieldRef<"Person", 'String'>
    readonly updatedBy: FieldRef<"Person", 'String'>
    readonly createdAt: FieldRef<"Person", 'DateTime'>
    readonly updatedAt: FieldRef<"Person", 'DateTime'>
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
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
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
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.Child
   */
  export type Person$ChildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    where?: ChildWhereInput
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    cursor?: ChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * Person.CarePackage
   */
  export type Person$CarePackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    where?: CarePackageWhereInput
    orderBy?: CarePackageOrderByWithRelationInput | CarePackageOrderByWithRelationInput[]
    cursor?: CarePackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarePackageScalarFieldEnum | CarePackageScalarFieldEnum[]
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
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model Child
   */

  export type AggregateChild = {
    _count: ChildCountAggregateOutputType | null
    _min: ChildMinAggregateOutputType | null
    _max: ChildMaxAggregateOutputType | null
  }

  export type ChildMinAggregateOutputType = {
    id: string | null
    name: string | null
    lastName: string | null
    dateBirh: Date | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    responsibleId: string | null
  }

  export type ChildMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lastName: string | null
    dateBirh: Date | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    responsibleId: string | null
  }

  export type ChildCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    dateBirh: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    responsibleId: number
    _all: number
  }


  export type ChildMinAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    dateBirh?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    responsibleId?: true
  }

  export type ChildMaxAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    dateBirh?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    responsibleId?: true
  }

  export type ChildCountAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    dateBirh?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    responsibleId?: true
    _all?: true
  }

  export type ChildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Child to aggregate.
     */
    where?: ChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Children to fetch.
     */
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Children from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Children.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Children
    **/
    _count?: true | ChildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChildMaxAggregateInputType
  }

  export type GetChildAggregateType<T extends ChildAggregateArgs> = {
        [P in keyof T & keyof AggregateChild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChild[P]>
      : GetScalarType<T[P], AggregateChild[P]>
  }




  export type ChildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChildWhereInput
    orderBy?: ChildOrderByWithAggregationInput | ChildOrderByWithAggregationInput[]
    by: ChildScalarFieldEnum[] | ChildScalarFieldEnum
    having?: ChildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChildCountAggregateInputType | true
    _min?: ChildMinAggregateInputType
    _max?: ChildMaxAggregateInputType
  }

  export type ChildGroupByOutputType = {
    id: string
    name: string
    lastName: string
    dateBirh: Date
    createdBy: string
    updatedBy: string
    createdAt: Date
    updatedAt: Date
    responsibleId: string
    _count: ChildCountAggregateOutputType | null
    _min: ChildMinAggregateOutputType | null
    _max: ChildMaxAggregateOutputType | null
  }

  type GetChildGroupByPayload<T extends ChildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChildGroupByOutputType[P]>
            : GetScalarType<T[P], ChildGroupByOutputType[P]>
        }
      >
    >


  export type ChildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    dateBirh?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    responsibleId?: boolean
    PersonResponsible?: boolean | PersonDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["child"]>

  export type ChildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    dateBirh?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    responsibleId?: boolean
    PersonResponsible?: boolean | PersonDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["child"]>

  export type ChildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    dateBirh?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    responsibleId?: boolean
    PersonResponsible?: boolean | PersonDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["child"]>

  export type ChildSelectScalar = {
    id?: boolean
    name?: boolean
    lastName?: boolean
    dateBirh?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    responsibleId?: boolean
  }

  export type ChildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastName" | "dateBirh" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt" | "responsibleId", ExtArgs["result"]["child"]>
  export type ChildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonResponsible?: boolean | PersonDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonResponsible?: boolean | PersonDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonResponsible?: boolean | PersonDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Child"
    objects: {
      PersonResponsible: Prisma.$PersonPayload<ExtArgs>
      CreatedBy: Prisma.$UserPayload<ExtArgs>
      UpdatedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      lastName: string
      dateBirh: Date
      createdBy: string
      updatedBy: string
      createdAt: Date
      updatedAt: Date
      responsibleId: string
    }, ExtArgs["result"]["child"]>
    composites: {}
  }

  type ChildGetPayload<S extends boolean | null | undefined | ChildDefaultArgs> = $Result.GetResult<Prisma.$ChildPayload, S>

  type ChildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChildCountAggregateInputType | true
    }

  export interface ChildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Child'], meta: { name: 'Child' } }
    /**
     * Find zero or one Child that matches the filter.
     * @param {ChildFindUniqueArgs} args - Arguments to find a Child
     * @example
     * // Get one Child
     * const child = await prisma.child.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChildFindUniqueArgs>(args: SelectSubset<T, ChildFindUniqueArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Child that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChildFindUniqueOrThrowArgs} args - Arguments to find a Child
     * @example
     * // Get one Child
     * const child = await prisma.child.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChildFindUniqueOrThrowArgs>(args: SelectSubset<T, ChildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Child that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildFindFirstArgs} args - Arguments to find a Child
     * @example
     * // Get one Child
     * const child = await prisma.child.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChildFindFirstArgs>(args?: SelectSubset<T, ChildFindFirstArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Child that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildFindFirstOrThrowArgs} args - Arguments to find a Child
     * @example
     * // Get one Child
     * const child = await prisma.child.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChildFindFirstOrThrowArgs>(args?: SelectSubset<T, ChildFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Children that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Children
     * const children = await prisma.child.findMany()
     * 
     * // Get first 10 Children
     * const children = await prisma.child.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const childWithIdOnly = await prisma.child.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChildFindManyArgs>(args?: SelectSubset<T, ChildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Child.
     * @param {ChildCreateArgs} args - Arguments to create a Child.
     * @example
     * // Create one Child
     * const Child = await prisma.child.create({
     *   data: {
     *     // ... data to create a Child
     *   }
     * })
     * 
     */
    create<T extends ChildCreateArgs>(args: SelectSubset<T, ChildCreateArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Children.
     * @param {ChildCreateManyArgs} args - Arguments to create many Children.
     * @example
     * // Create many Children
     * const child = await prisma.child.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChildCreateManyArgs>(args?: SelectSubset<T, ChildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Children and returns the data saved in the database.
     * @param {ChildCreateManyAndReturnArgs} args - Arguments to create many Children.
     * @example
     * // Create many Children
     * const child = await prisma.child.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Children and only return the `id`
     * const childWithIdOnly = await prisma.child.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChildCreateManyAndReturnArgs>(args?: SelectSubset<T, ChildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Child.
     * @param {ChildDeleteArgs} args - Arguments to delete one Child.
     * @example
     * // Delete one Child
     * const Child = await prisma.child.delete({
     *   where: {
     *     // ... filter to delete one Child
     *   }
     * })
     * 
     */
    delete<T extends ChildDeleteArgs>(args: SelectSubset<T, ChildDeleteArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Child.
     * @param {ChildUpdateArgs} args - Arguments to update one Child.
     * @example
     * // Update one Child
     * const child = await prisma.child.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChildUpdateArgs>(args: SelectSubset<T, ChildUpdateArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Children.
     * @param {ChildDeleteManyArgs} args - Arguments to filter Children to delete.
     * @example
     * // Delete a few Children
     * const { count } = await prisma.child.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChildDeleteManyArgs>(args?: SelectSubset<T, ChildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Children.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Children
     * const child = await prisma.child.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChildUpdateManyArgs>(args: SelectSubset<T, ChildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Children and returns the data updated in the database.
     * @param {ChildUpdateManyAndReturnArgs} args - Arguments to update many Children.
     * @example
     * // Update many Children
     * const child = await prisma.child.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Children and only return the `id`
     * const childWithIdOnly = await prisma.child.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChildUpdateManyAndReturnArgs>(args: SelectSubset<T, ChildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Child.
     * @param {ChildUpsertArgs} args - Arguments to update or create a Child.
     * @example
     * // Update or create a Child
     * const child = await prisma.child.upsert({
     *   create: {
     *     // ... data to create a Child
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Child we want to update
     *   }
     * })
     */
    upsert<T extends ChildUpsertArgs>(args: SelectSubset<T, ChildUpsertArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Children.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildCountArgs} args - Arguments to filter Children to count.
     * @example
     * // Count the number of Children
     * const count = await prisma.child.count({
     *   where: {
     *     // ... the filter for the Children we want to count
     *   }
     * })
    **/
    count<T extends ChildCountArgs>(
      args?: Subset<T, ChildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Child.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChildAggregateArgs>(args: Subset<T, ChildAggregateArgs>): Prisma.PrismaPromise<GetChildAggregateType<T>>

    /**
     * Group by Child.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildGroupByArgs} args - Group by arguments.
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
      T extends ChildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChildGroupByArgs['orderBy'] }
        : { orderBy?: ChildGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Child model
   */
  readonly fields: ChildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Child.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PersonResponsible<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CreatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UpdatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Child model
   */
  interface ChildFieldRefs {
    readonly id: FieldRef<"Child", 'String'>
    readonly name: FieldRef<"Child", 'String'>
    readonly lastName: FieldRef<"Child", 'String'>
    readonly dateBirh: FieldRef<"Child", 'DateTime'>
    readonly createdBy: FieldRef<"Child", 'String'>
    readonly updatedBy: FieldRef<"Child", 'String'>
    readonly createdAt: FieldRef<"Child", 'DateTime'>
    readonly updatedAt: FieldRef<"Child", 'DateTime'>
    readonly responsibleId: FieldRef<"Child", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Child findUnique
   */
  export type ChildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Child to fetch.
     */
    where: ChildWhereUniqueInput
  }

  /**
   * Child findUniqueOrThrow
   */
  export type ChildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Child to fetch.
     */
    where: ChildWhereUniqueInput
  }

  /**
   * Child findFirst
   */
  export type ChildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Child to fetch.
     */
    where?: ChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Children to fetch.
     */
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Children.
     */
    cursor?: ChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Children from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Children.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Children.
     */
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * Child findFirstOrThrow
   */
  export type ChildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Child to fetch.
     */
    where?: ChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Children to fetch.
     */
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Children.
     */
    cursor?: ChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Children from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Children.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Children.
     */
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * Child findMany
   */
  export type ChildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Children to fetch.
     */
    where?: ChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Children to fetch.
     */
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Children.
     */
    cursor?: ChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Children from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Children.
     */
    skip?: number
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * Child create
   */
  export type ChildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * The data needed to create a Child.
     */
    data: XOR<ChildCreateInput, ChildUncheckedCreateInput>
  }

  /**
   * Child createMany
   */
  export type ChildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Children.
     */
    data: ChildCreateManyInput | ChildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Child createManyAndReturn
   */
  export type ChildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * The data used to create many Children.
     */
    data: ChildCreateManyInput | ChildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Child update
   */
  export type ChildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * The data needed to update a Child.
     */
    data: XOR<ChildUpdateInput, ChildUncheckedUpdateInput>
    /**
     * Choose, which Child to update.
     */
    where: ChildWhereUniqueInput
  }

  /**
   * Child updateMany
   */
  export type ChildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Children.
     */
    data: XOR<ChildUpdateManyMutationInput, ChildUncheckedUpdateManyInput>
    /**
     * Filter which Children to update
     */
    where?: ChildWhereInput
    /**
     * Limit how many Children to update.
     */
    limit?: number
  }

  /**
   * Child updateManyAndReturn
   */
  export type ChildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * The data used to update Children.
     */
    data: XOR<ChildUpdateManyMutationInput, ChildUncheckedUpdateManyInput>
    /**
     * Filter which Children to update
     */
    where?: ChildWhereInput
    /**
     * Limit how many Children to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Child upsert
   */
  export type ChildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * The filter to search for the Child to update in case it exists.
     */
    where: ChildWhereUniqueInput
    /**
     * In case the Child found by the `where` argument doesn't exist, create a new Child with this data.
     */
    create: XOR<ChildCreateInput, ChildUncheckedCreateInput>
    /**
     * In case the Child was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChildUpdateInput, ChildUncheckedUpdateInput>
  }

  /**
   * Child delete
   */
  export type ChildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter which Child to delete.
     */
    where: ChildWhereUniqueInput
  }

  /**
   * Child deleteMany
   */
  export type ChildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Children to delete
     */
    where?: ChildWhereInput
    /**
     * Limit how many Children to delete.
     */
    limit?: number
  }

  /**
   * Child without action
   */
  export type ChildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
  }


  /**
   * Model TypeCarePackage
   */

  export type AggregateTypeCarePackage = {
    _count: TypeCarePackageCountAggregateOutputType | null
    _min: TypeCarePackageMinAggregateOutputType | null
    _max: TypeCarePackageMaxAggregateOutputType | null
  }

  export type TypeCarePackageMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TypeCarePackageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TypeCarePackageCountAggregateOutputType = {
    id: number
    name: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TypeCarePackageMinAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TypeCarePackageMaxAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TypeCarePackageCountAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TypeCarePackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeCarePackage to aggregate.
     */
    where?: TypeCarePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeCarePackages to fetch.
     */
    orderBy?: TypeCarePackageOrderByWithRelationInput | TypeCarePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeCarePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeCarePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeCarePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TypeCarePackages
    **/
    _count?: true | TypeCarePackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeCarePackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeCarePackageMaxAggregateInputType
  }

  export type GetTypeCarePackageAggregateType<T extends TypeCarePackageAggregateArgs> = {
        [P in keyof T & keyof AggregateTypeCarePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypeCarePackage[P]>
      : GetScalarType<T[P], AggregateTypeCarePackage[P]>
  }




  export type TypeCarePackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeCarePackageWhereInput
    orderBy?: TypeCarePackageOrderByWithAggregationInput | TypeCarePackageOrderByWithAggregationInput[]
    by: TypeCarePackageScalarFieldEnum[] | TypeCarePackageScalarFieldEnum
    having?: TypeCarePackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCarePackageCountAggregateInputType | true
    _min?: TypeCarePackageMinAggregateInputType
    _max?: TypeCarePackageMaxAggregateInputType
  }

  export type TypeCarePackageGroupByOutputType = {
    id: string
    name: string
    createdBy: string
    updatedBy: string
    createdAt: Date
    updatedAt: Date
    _count: TypeCarePackageCountAggregateOutputType | null
    _min: TypeCarePackageMinAggregateOutputType | null
    _max: TypeCarePackageMaxAggregateOutputType | null
  }

  type GetTypeCarePackageGroupByPayload<T extends TypeCarePackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeCarePackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeCarePackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeCarePackageGroupByOutputType[P]>
            : GetScalarType<T[P], TypeCarePackageGroupByOutputType[P]>
        }
      >
    >


  export type TypeCarePackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
    CarePackage?: boolean | TypeCarePackage$CarePackageArgs<ExtArgs>
    _count?: boolean | TypeCarePackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeCarePackage"]>

  export type TypeCarePackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeCarePackage"]>

  export type TypeCarePackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeCarePackage"]>

  export type TypeCarePackageSelectScalar = {
    id?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TypeCarePackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["typeCarePackage"]>
  export type TypeCarePackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
    CarePackage?: boolean | TypeCarePackage$CarePackageArgs<ExtArgs>
    _count?: boolean | TypeCarePackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeCarePackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TypeCarePackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TypeCarePackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TypeCarePackage"
    objects: {
      CreatedBy: Prisma.$UserPayload<ExtArgs>
      UpdatedBy: Prisma.$UserPayload<ExtArgs>
      CarePackage: Prisma.$CarePackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdBy: string
      updatedBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["typeCarePackage"]>
    composites: {}
  }

  type TypeCarePackageGetPayload<S extends boolean | null | undefined | TypeCarePackageDefaultArgs> = $Result.GetResult<Prisma.$TypeCarePackagePayload, S>

  type TypeCarePackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeCarePackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeCarePackageCountAggregateInputType | true
    }

  export interface TypeCarePackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TypeCarePackage'], meta: { name: 'TypeCarePackage' } }
    /**
     * Find zero or one TypeCarePackage that matches the filter.
     * @param {TypeCarePackageFindUniqueArgs} args - Arguments to find a TypeCarePackage
     * @example
     * // Get one TypeCarePackage
     * const typeCarePackage = await prisma.typeCarePackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeCarePackageFindUniqueArgs>(args: SelectSubset<T, TypeCarePackageFindUniqueArgs<ExtArgs>>): Prisma__TypeCarePackageClient<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TypeCarePackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeCarePackageFindUniqueOrThrowArgs} args - Arguments to find a TypeCarePackage
     * @example
     * // Get one TypeCarePackage
     * const typeCarePackage = await prisma.typeCarePackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeCarePackageFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeCarePackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeCarePackageClient<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypeCarePackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCarePackageFindFirstArgs} args - Arguments to find a TypeCarePackage
     * @example
     * // Get one TypeCarePackage
     * const typeCarePackage = await prisma.typeCarePackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeCarePackageFindFirstArgs>(args?: SelectSubset<T, TypeCarePackageFindFirstArgs<ExtArgs>>): Prisma__TypeCarePackageClient<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypeCarePackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCarePackageFindFirstOrThrowArgs} args - Arguments to find a TypeCarePackage
     * @example
     * // Get one TypeCarePackage
     * const typeCarePackage = await prisma.typeCarePackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeCarePackageFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeCarePackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeCarePackageClient<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TypeCarePackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCarePackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeCarePackages
     * const typeCarePackages = await prisma.typeCarePackage.findMany()
     * 
     * // Get first 10 TypeCarePackages
     * const typeCarePackages = await prisma.typeCarePackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeCarePackageWithIdOnly = await prisma.typeCarePackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeCarePackageFindManyArgs>(args?: SelectSubset<T, TypeCarePackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TypeCarePackage.
     * @param {TypeCarePackageCreateArgs} args - Arguments to create a TypeCarePackage.
     * @example
     * // Create one TypeCarePackage
     * const TypeCarePackage = await prisma.typeCarePackage.create({
     *   data: {
     *     // ... data to create a TypeCarePackage
     *   }
     * })
     * 
     */
    create<T extends TypeCarePackageCreateArgs>(args: SelectSubset<T, TypeCarePackageCreateArgs<ExtArgs>>): Prisma__TypeCarePackageClient<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TypeCarePackages.
     * @param {TypeCarePackageCreateManyArgs} args - Arguments to create many TypeCarePackages.
     * @example
     * // Create many TypeCarePackages
     * const typeCarePackage = await prisma.typeCarePackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeCarePackageCreateManyArgs>(args?: SelectSubset<T, TypeCarePackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TypeCarePackages and returns the data saved in the database.
     * @param {TypeCarePackageCreateManyAndReturnArgs} args - Arguments to create many TypeCarePackages.
     * @example
     * // Create many TypeCarePackages
     * const typeCarePackage = await prisma.typeCarePackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TypeCarePackages and only return the `id`
     * const typeCarePackageWithIdOnly = await prisma.typeCarePackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeCarePackageCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeCarePackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TypeCarePackage.
     * @param {TypeCarePackageDeleteArgs} args - Arguments to delete one TypeCarePackage.
     * @example
     * // Delete one TypeCarePackage
     * const TypeCarePackage = await prisma.typeCarePackage.delete({
     *   where: {
     *     // ... filter to delete one TypeCarePackage
     *   }
     * })
     * 
     */
    delete<T extends TypeCarePackageDeleteArgs>(args: SelectSubset<T, TypeCarePackageDeleteArgs<ExtArgs>>): Prisma__TypeCarePackageClient<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TypeCarePackage.
     * @param {TypeCarePackageUpdateArgs} args - Arguments to update one TypeCarePackage.
     * @example
     * // Update one TypeCarePackage
     * const typeCarePackage = await prisma.typeCarePackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeCarePackageUpdateArgs>(args: SelectSubset<T, TypeCarePackageUpdateArgs<ExtArgs>>): Prisma__TypeCarePackageClient<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TypeCarePackages.
     * @param {TypeCarePackageDeleteManyArgs} args - Arguments to filter TypeCarePackages to delete.
     * @example
     * // Delete a few TypeCarePackages
     * const { count } = await prisma.typeCarePackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeCarePackageDeleteManyArgs>(args?: SelectSubset<T, TypeCarePackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeCarePackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCarePackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeCarePackages
     * const typeCarePackage = await prisma.typeCarePackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeCarePackageUpdateManyArgs>(args: SelectSubset<T, TypeCarePackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeCarePackages and returns the data updated in the database.
     * @param {TypeCarePackageUpdateManyAndReturnArgs} args - Arguments to update many TypeCarePackages.
     * @example
     * // Update many TypeCarePackages
     * const typeCarePackage = await prisma.typeCarePackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TypeCarePackages and only return the `id`
     * const typeCarePackageWithIdOnly = await prisma.typeCarePackage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TypeCarePackageUpdateManyAndReturnArgs>(args: SelectSubset<T, TypeCarePackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TypeCarePackage.
     * @param {TypeCarePackageUpsertArgs} args - Arguments to update or create a TypeCarePackage.
     * @example
     * // Update or create a TypeCarePackage
     * const typeCarePackage = await prisma.typeCarePackage.upsert({
     *   create: {
     *     // ... data to create a TypeCarePackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeCarePackage we want to update
     *   }
     * })
     */
    upsert<T extends TypeCarePackageUpsertArgs>(args: SelectSubset<T, TypeCarePackageUpsertArgs<ExtArgs>>): Prisma__TypeCarePackageClient<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TypeCarePackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCarePackageCountArgs} args - Arguments to filter TypeCarePackages to count.
     * @example
     * // Count the number of TypeCarePackages
     * const count = await prisma.typeCarePackage.count({
     *   where: {
     *     // ... the filter for the TypeCarePackages we want to count
     *   }
     * })
    **/
    count<T extends TypeCarePackageCountArgs>(
      args?: Subset<T, TypeCarePackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCarePackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TypeCarePackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCarePackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeCarePackageAggregateArgs>(args: Subset<T, TypeCarePackageAggregateArgs>): Prisma.PrismaPromise<GetTypeCarePackageAggregateType<T>>

    /**
     * Group by TypeCarePackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCarePackageGroupByArgs} args - Group by arguments.
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
      T extends TypeCarePackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeCarePackageGroupByArgs['orderBy'] }
        : { orderBy?: TypeCarePackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TypeCarePackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeCarePackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TypeCarePackage model
   */
  readonly fields: TypeCarePackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TypeCarePackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeCarePackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CreatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UpdatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CarePackage<T extends TypeCarePackage$CarePackageArgs<ExtArgs> = {}>(args?: Subset<T, TypeCarePackage$CarePackageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TypeCarePackage model
   */
  interface TypeCarePackageFieldRefs {
    readonly id: FieldRef<"TypeCarePackage", 'String'>
    readonly name: FieldRef<"TypeCarePackage", 'String'>
    readonly createdBy: FieldRef<"TypeCarePackage", 'String'>
    readonly updatedBy: FieldRef<"TypeCarePackage", 'String'>
    readonly createdAt: FieldRef<"TypeCarePackage", 'DateTime'>
    readonly updatedAt: FieldRef<"TypeCarePackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TypeCarePackage findUnique
   */
  export type TypeCarePackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageInclude<ExtArgs> | null
    /**
     * Filter, which TypeCarePackage to fetch.
     */
    where: TypeCarePackageWhereUniqueInput
  }

  /**
   * TypeCarePackage findUniqueOrThrow
   */
  export type TypeCarePackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageInclude<ExtArgs> | null
    /**
     * Filter, which TypeCarePackage to fetch.
     */
    where: TypeCarePackageWhereUniqueInput
  }

  /**
   * TypeCarePackage findFirst
   */
  export type TypeCarePackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageInclude<ExtArgs> | null
    /**
     * Filter, which TypeCarePackage to fetch.
     */
    where?: TypeCarePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeCarePackages to fetch.
     */
    orderBy?: TypeCarePackageOrderByWithRelationInput | TypeCarePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeCarePackages.
     */
    cursor?: TypeCarePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeCarePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeCarePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeCarePackages.
     */
    distinct?: TypeCarePackageScalarFieldEnum | TypeCarePackageScalarFieldEnum[]
  }

  /**
   * TypeCarePackage findFirstOrThrow
   */
  export type TypeCarePackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageInclude<ExtArgs> | null
    /**
     * Filter, which TypeCarePackage to fetch.
     */
    where?: TypeCarePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeCarePackages to fetch.
     */
    orderBy?: TypeCarePackageOrderByWithRelationInput | TypeCarePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeCarePackages.
     */
    cursor?: TypeCarePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeCarePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeCarePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeCarePackages.
     */
    distinct?: TypeCarePackageScalarFieldEnum | TypeCarePackageScalarFieldEnum[]
  }

  /**
   * TypeCarePackage findMany
   */
  export type TypeCarePackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageInclude<ExtArgs> | null
    /**
     * Filter, which TypeCarePackages to fetch.
     */
    where?: TypeCarePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeCarePackages to fetch.
     */
    orderBy?: TypeCarePackageOrderByWithRelationInput | TypeCarePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TypeCarePackages.
     */
    cursor?: TypeCarePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeCarePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeCarePackages.
     */
    skip?: number
    distinct?: TypeCarePackageScalarFieldEnum | TypeCarePackageScalarFieldEnum[]
  }

  /**
   * TypeCarePackage create
   */
  export type TypeCarePackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageInclude<ExtArgs> | null
    /**
     * The data needed to create a TypeCarePackage.
     */
    data: XOR<TypeCarePackageCreateInput, TypeCarePackageUncheckedCreateInput>
  }

  /**
   * TypeCarePackage createMany
   */
  export type TypeCarePackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeCarePackages.
     */
    data: TypeCarePackageCreateManyInput | TypeCarePackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeCarePackage createManyAndReturn
   */
  export type TypeCarePackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * The data used to create many TypeCarePackages.
     */
    data: TypeCarePackageCreateManyInput | TypeCarePackageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TypeCarePackage update
   */
  export type TypeCarePackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageInclude<ExtArgs> | null
    /**
     * The data needed to update a TypeCarePackage.
     */
    data: XOR<TypeCarePackageUpdateInput, TypeCarePackageUncheckedUpdateInput>
    /**
     * Choose, which TypeCarePackage to update.
     */
    where: TypeCarePackageWhereUniqueInput
  }

  /**
   * TypeCarePackage updateMany
   */
  export type TypeCarePackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeCarePackages.
     */
    data: XOR<TypeCarePackageUpdateManyMutationInput, TypeCarePackageUncheckedUpdateManyInput>
    /**
     * Filter which TypeCarePackages to update
     */
    where?: TypeCarePackageWhereInput
    /**
     * Limit how many TypeCarePackages to update.
     */
    limit?: number
  }

  /**
   * TypeCarePackage updateManyAndReturn
   */
  export type TypeCarePackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * The data used to update TypeCarePackages.
     */
    data: XOR<TypeCarePackageUpdateManyMutationInput, TypeCarePackageUncheckedUpdateManyInput>
    /**
     * Filter which TypeCarePackages to update
     */
    where?: TypeCarePackageWhereInput
    /**
     * Limit how many TypeCarePackages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TypeCarePackage upsert
   */
  export type TypeCarePackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageInclude<ExtArgs> | null
    /**
     * The filter to search for the TypeCarePackage to update in case it exists.
     */
    where: TypeCarePackageWhereUniqueInput
    /**
     * In case the TypeCarePackage found by the `where` argument doesn't exist, create a new TypeCarePackage with this data.
     */
    create: XOR<TypeCarePackageCreateInput, TypeCarePackageUncheckedCreateInput>
    /**
     * In case the TypeCarePackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeCarePackageUpdateInput, TypeCarePackageUncheckedUpdateInput>
  }

  /**
   * TypeCarePackage delete
   */
  export type TypeCarePackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageInclude<ExtArgs> | null
    /**
     * Filter which TypeCarePackage to delete.
     */
    where: TypeCarePackageWhereUniqueInput
  }

  /**
   * TypeCarePackage deleteMany
   */
  export type TypeCarePackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeCarePackages to delete
     */
    where?: TypeCarePackageWhereInput
    /**
     * Limit how many TypeCarePackages to delete.
     */
    limit?: number
  }

  /**
   * TypeCarePackage.CarePackage
   */
  export type TypeCarePackage$CarePackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    where?: CarePackageWhereInput
    orderBy?: CarePackageOrderByWithRelationInput | CarePackageOrderByWithRelationInput[]
    cursor?: CarePackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarePackageScalarFieldEnum | CarePackageScalarFieldEnum[]
  }

  /**
   * TypeCarePackage without action
   */
  export type TypeCarePackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCarePackage
     */
    select?: TypeCarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeCarePackage
     */
    omit?: TypeCarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCarePackageInclude<ExtArgs> | null
  }


  /**
   * Model CarePackageItem
   */

  export type AggregateCarePackageItem = {
    _count: CarePackageItemCountAggregateOutputType | null
    _min: CarePackageItemMinAggregateOutputType | null
    _max: CarePackageItemMaxAggregateOutputType | null
  }

  export type CarePackageItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarePackageItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarePackageItemCountAggregateOutputType = {
    id: number
    name: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarePackageItemMinAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarePackageItemMaxAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarePackageItemCountAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarePackageItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarePackageItem to aggregate.
     */
    where?: CarePackageItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarePackageItems to fetch.
     */
    orderBy?: CarePackageItemOrderByWithRelationInput | CarePackageItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarePackageItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarePackageItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarePackageItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarePackageItems
    **/
    _count?: true | CarePackageItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarePackageItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarePackageItemMaxAggregateInputType
  }

  export type GetCarePackageItemAggregateType<T extends CarePackageItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCarePackageItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarePackageItem[P]>
      : GetScalarType<T[P], AggregateCarePackageItem[P]>
  }




  export type CarePackageItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarePackageItemWhereInput
    orderBy?: CarePackageItemOrderByWithAggregationInput | CarePackageItemOrderByWithAggregationInput[]
    by: CarePackageItemScalarFieldEnum[] | CarePackageItemScalarFieldEnum
    having?: CarePackageItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarePackageItemCountAggregateInputType | true
    _min?: CarePackageItemMinAggregateInputType
    _max?: CarePackageItemMaxAggregateInputType
  }

  export type CarePackageItemGroupByOutputType = {
    id: string
    name: string
    createdBy: string
    updatedBy: string
    createdAt: Date
    updatedAt: Date
    _count: CarePackageItemCountAggregateOutputType | null
    _min: CarePackageItemMinAggregateOutputType | null
    _max: CarePackageItemMaxAggregateOutputType | null
  }

  type GetCarePackageItemGroupByPayload<T extends CarePackageItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarePackageItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarePackageItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarePackageItemGroupByOutputType[P]>
            : GetScalarType<T[P], CarePackageItemGroupByOutputType[P]>
        }
      >
    >


  export type CarePackageItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carePackageItem"]>

  export type CarePackageItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carePackageItem"]>

  export type CarePackageItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carePackageItem"]>

  export type CarePackageItemSelectScalar = {
    id?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarePackageItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["carePackageItem"]>
  export type CarePackageItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CarePackageItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CarePackageItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CarePackageItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarePackageItem"
    objects: {
      CreatedBy: Prisma.$UserPayload<ExtArgs>
      UpdatedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdBy: string
      updatedBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["carePackageItem"]>
    composites: {}
  }

  type CarePackageItemGetPayload<S extends boolean | null | undefined | CarePackageItemDefaultArgs> = $Result.GetResult<Prisma.$CarePackageItemPayload, S>

  type CarePackageItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarePackageItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarePackageItemCountAggregateInputType | true
    }

  export interface CarePackageItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarePackageItem'], meta: { name: 'CarePackageItem' } }
    /**
     * Find zero or one CarePackageItem that matches the filter.
     * @param {CarePackageItemFindUniqueArgs} args - Arguments to find a CarePackageItem
     * @example
     * // Get one CarePackageItem
     * const carePackageItem = await prisma.carePackageItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarePackageItemFindUniqueArgs>(args: SelectSubset<T, CarePackageItemFindUniqueArgs<ExtArgs>>): Prisma__CarePackageItemClient<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarePackageItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarePackageItemFindUniqueOrThrowArgs} args - Arguments to find a CarePackageItem
     * @example
     * // Get one CarePackageItem
     * const carePackageItem = await prisma.carePackageItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarePackageItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CarePackageItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarePackageItemClient<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarePackageItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageItemFindFirstArgs} args - Arguments to find a CarePackageItem
     * @example
     * // Get one CarePackageItem
     * const carePackageItem = await prisma.carePackageItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarePackageItemFindFirstArgs>(args?: SelectSubset<T, CarePackageItemFindFirstArgs<ExtArgs>>): Prisma__CarePackageItemClient<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarePackageItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageItemFindFirstOrThrowArgs} args - Arguments to find a CarePackageItem
     * @example
     * // Get one CarePackageItem
     * const carePackageItem = await prisma.carePackageItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarePackageItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CarePackageItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarePackageItemClient<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarePackageItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarePackageItems
     * const carePackageItems = await prisma.carePackageItem.findMany()
     * 
     * // Get first 10 CarePackageItems
     * const carePackageItems = await prisma.carePackageItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carePackageItemWithIdOnly = await prisma.carePackageItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarePackageItemFindManyArgs>(args?: SelectSubset<T, CarePackageItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarePackageItem.
     * @param {CarePackageItemCreateArgs} args - Arguments to create a CarePackageItem.
     * @example
     * // Create one CarePackageItem
     * const CarePackageItem = await prisma.carePackageItem.create({
     *   data: {
     *     // ... data to create a CarePackageItem
     *   }
     * })
     * 
     */
    create<T extends CarePackageItemCreateArgs>(args: SelectSubset<T, CarePackageItemCreateArgs<ExtArgs>>): Prisma__CarePackageItemClient<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarePackageItems.
     * @param {CarePackageItemCreateManyArgs} args - Arguments to create many CarePackageItems.
     * @example
     * // Create many CarePackageItems
     * const carePackageItem = await prisma.carePackageItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarePackageItemCreateManyArgs>(args?: SelectSubset<T, CarePackageItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarePackageItems and returns the data saved in the database.
     * @param {CarePackageItemCreateManyAndReturnArgs} args - Arguments to create many CarePackageItems.
     * @example
     * // Create many CarePackageItems
     * const carePackageItem = await prisma.carePackageItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarePackageItems and only return the `id`
     * const carePackageItemWithIdOnly = await prisma.carePackageItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarePackageItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CarePackageItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarePackageItem.
     * @param {CarePackageItemDeleteArgs} args - Arguments to delete one CarePackageItem.
     * @example
     * // Delete one CarePackageItem
     * const CarePackageItem = await prisma.carePackageItem.delete({
     *   where: {
     *     // ... filter to delete one CarePackageItem
     *   }
     * })
     * 
     */
    delete<T extends CarePackageItemDeleteArgs>(args: SelectSubset<T, CarePackageItemDeleteArgs<ExtArgs>>): Prisma__CarePackageItemClient<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarePackageItem.
     * @param {CarePackageItemUpdateArgs} args - Arguments to update one CarePackageItem.
     * @example
     * // Update one CarePackageItem
     * const carePackageItem = await prisma.carePackageItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarePackageItemUpdateArgs>(args: SelectSubset<T, CarePackageItemUpdateArgs<ExtArgs>>): Prisma__CarePackageItemClient<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarePackageItems.
     * @param {CarePackageItemDeleteManyArgs} args - Arguments to filter CarePackageItems to delete.
     * @example
     * // Delete a few CarePackageItems
     * const { count } = await prisma.carePackageItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarePackageItemDeleteManyArgs>(args?: SelectSubset<T, CarePackageItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarePackageItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarePackageItems
     * const carePackageItem = await prisma.carePackageItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarePackageItemUpdateManyArgs>(args: SelectSubset<T, CarePackageItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarePackageItems and returns the data updated in the database.
     * @param {CarePackageItemUpdateManyAndReturnArgs} args - Arguments to update many CarePackageItems.
     * @example
     * // Update many CarePackageItems
     * const carePackageItem = await prisma.carePackageItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarePackageItems and only return the `id`
     * const carePackageItemWithIdOnly = await prisma.carePackageItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarePackageItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CarePackageItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarePackageItem.
     * @param {CarePackageItemUpsertArgs} args - Arguments to update or create a CarePackageItem.
     * @example
     * // Update or create a CarePackageItem
     * const carePackageItem = await prisma.carePackageItem.upsert({
     *   create: {
     *     // ... data to create a CarePackageItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarePackageItem we want to update
     *   }
     * })
     */
    upsert<T extends CarePackageItemUpsertArgs>(args: SelectSubset<T, CarePackageItemUpsertArgs<ExtArgs>>): Prisma__CarePackageItemClient<$Result.GetResult<Prisma.$CarePackageItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarePackageItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageItemCountArgs} args - Arguments to filter CarePackageItems to count.
     * @example
     * // Count the number of CarePackageItems
     * const count = await prisma.carePackageItem.count({
     *   where: {
     *     // ... the filter for the CarePackageItems we want to count
     *   }
     * })
    **/
    count<T extends CarePackageItemCountArgs>(
      args?: Subset<T, CarePackageItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarePackageItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarePackageItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarePackageItemAggregateArgs>(args: Subset<T, CarePackageItemAggregateArgs>): Prisma.PrismaPromise<GetCarePackageItemAggregateType<T>>

    /**
     * Group by CarePackageItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageItemGroupByArgs} args - Group by arguments.
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
      T extends CarePackageItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarePackageItemGroupByArgs['orderBy'] }
        : { orderBy?: CarePackageItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarePackageItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarePackageItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarePackageItem model
   */
  readonly fields: CarePackageItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarePackageItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarePackageItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CreatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UpdatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarePackageItem model
   */
  interface CarePackageItemFieldRefs {
    readonly id: FieldRef<"CarePackageItem", 'String'>
    readonly name: FieldRef<"CarePackageItem", 'String'>
    readonly createdBy: FieldRef<"CarePackageItem", 'String'>
    readonly updatedBy: FieldRef<"CarePackageItem", 'String'>
    readonly createdAt: FieldRef<"CarePackageItem", 'DateTime'>
    readonly updatedAt: FieldRef<"CarePackageItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CarePackageItem findUnique
   */
  export type CarePackageItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemInclude<ExtArgs> | null
    /**
     * Filter, which CarePackageItem to fetch.
     */
    where: CarePackageItemWhereUniqueInput
  }

  /**
   * CarePackageItem findUniqueOrThrow
   */
  export type CarePackageItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemInclude<ExtArgs> | null
    /**
     * Filter, which CarePackageItem to fetch.
     */
    where: CarePackageItemWhereUniqueInput
  }

  /**
   * CarePackageItem findFirst
   */
  export type CarePackageItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemInclude<ExtArgs> | null
    /**
     * Filter, which CarePackageItem to fetch.
     */
    where?: CarePackageItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarePackageItems to fetch.
     */
    orderBy?: CarePackageItemOrderByWithRelationInput | CarePackageItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarePackageItems.
     */
    cursor?: CarePackageItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarePackageItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarePackageItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarePackageItems.
     */
    distinct?: CarePackageItemScalarFieldEnum | CarePackageItemScalarFieldEnum[]
  }

  /**
   * CarePackageItem findFirstOrThrow
   */
  export type CarePackageItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemInclude<ExtArgs> | null
    /**
     * Filter, which CarePackageItem to fetch.
     */
    where?: CarePackageItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarePackageItems to fetch.
     */
    orderBy?: CarePackageItemOrderByWithRelationInput | CarePackageItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarePackageItems.
     */
    cursor?: CarePackageItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarePackageItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarePackageItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarePackageItems.
     */
    distinct?: CarePackageItemScalarFieldEnum | CarePackageItemScalarFieldEnum[]
  }

  /**
   * CarePackageItem findMany
   */
  export type CarePackageItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemInclude<ExtArgs> | null
    /**
     * Filter, which CarePackageItems to fetch.
     */
    where?: CarePackageItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarePackageItems to fetch.
     */
    orderBy?: CarePackageItemOrderByWithRelationInput | CarePackageItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarePackageItems.
     */
    cursor?: CarePackageItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarePackageItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarePackageItems.
     */
    skip?: number
    distinct?: CarePackageItemScalarFieldEnum | CarePackageItemScalarFieldEnum[]
  }

  /**
   * CarePackageItem create
   */
  export type CarePackageItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CarePackageItem.
     */
    data: XOR<CarePackageItemCreateInput, CarePackageItemUncheckedCreateInput>
  }

  /**
   * CarePackageItem createMany
   */
  export type CarePackageItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarePackageItems.
     */
    data: CarePackageItemCreateManyInput | CarePackageItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarePackageItem createManyAndReturn
   */
  export type CarePackageItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * The data used to create many CarePackageItems.
     */
    data: CarePackageItemCreateManyInput | CarePackageItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarePackageItem update
   */
  export type CarePackageItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CarePackageItem.
     */
    data: XOR<CarePackageItemUpdateInput, CarePackageItemUncheckedUpdateInput>
    /**
     * Choose, which CarePackageItem to update.
     */
    where: CarePackageItemWhereUniqueInput
  }

  /**
   * CarePackageItem updateMany
   */
  export type CarePackageItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarePackageItems.
     */
    data: XOR<CarePackageItemUpdateManyMutationInput, CarePackageItemUncheckedUpdateManyInput>
    /**
     * Filter which CarePackageItems to update
     */
    where?: CarePackageItemWhereInput
    /**
     * Limit how many CarePackageItems to update.
     */
    limit?: number
  }

  /**
   * CarePackageItem updateManyAndReturn
   */
  export type CarePackageItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * The data used to update CarePackageItems.
     */
    data: XOR<CarePackageItemUpdateManyMutationInput, CarePackageItemUncheckedUpdateManyInput>
    /**
     * Filter which CarePackageItems to update
     */
    where?: CarePackageItemWhereInput
    /**
     * Limit how many CarePackageItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarePackageItem upsert
   */
  export type CarePackageItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CarePackageItem to update in case it exists.
     */
    where: CarePackageItemWhereUniqueInput
    /**
     * In case the CarePackageItem found by the `where` argument doesn't exist, create a new CarePackageItem with this data.
     */
    create: XOR<CarePackageItemCreateInput, CarePackageItemUncheckedCreateInput>
    /**
     * In case the CarePackageItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarePackageItemUpdateInput, CarePackageItemUncheckedUpdateInput>
  }

  /**
   * CarePackageItem delete
   */
  export type CarePackageItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemInclude<ExtArgs> | null
    /**
     * Filter which CarePackageItem to delete.
     */
    where: CarePackageItemWhereUniqueInput
  }

  /**
   * CarePackageItem deleteMany
   */
  export type CarePackageItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarePackageItems to delete
     */
    where?: CarePackageItemWhereInput
    /**
     * Limit how many CarePackageItems to delete.
     */
    limit?: number
  }

  /**
   * CarePackageItem without action
   */
  export type CarePackageItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageItem
     */
    select?: CarePackageItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageItem
     */
    omit?: CarePackageItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageItemInclude<ExtArgs> | null
  }


  /**
   * Model CarePackage
   */

  export type AggregateCarePackage = {
    _count: CarePackageCountAggregateOutputType | null
    _avg: CarePackageAvgAggregateOutputType | null
    _sum: CarePackageSumAggregateOutputType | null
    _min: CarePackageMinAggregateOutputType | null
    _max: CarePackageMaxAggregateOutputType | null
  }

  export type CarePackageAvgAggregateOutputType = {
    numberControl: number | null
  }

  export type CarePackageSumAggregateOutputType = {
    numberControl: number | null
  }

  export type CarePackageMinAggregateOutputType = {
    id: string | null
    numberControl: number | null
    typeCarePackageId: string | null
    personId: string | null
    carePackageScheduleId: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarePackageMaxAggregateOutputType = {
    id: string | null
    numberControl: number | null
    typeCarePackageId: string | null
    personId: string | null
    carePackageScheduleId: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarePackageCountAggregateOutputType = {
    id: number
    numberControl: number
    typeCarePackageId: number
    personId: number
    carePackageScheduleId: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarePackageAvgAggregateInputType = {
    numberControl?: true
  }

  export type CarePackageSumAggregateInputType = {
    numberControl?: true
  }

  export type CarePackageMinAggregateInputType = {
    id?: true
    numberControl?: true
    typeCarePackageId?: true
    personId?: true
    carePackageScheduleId?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarePackageMaxAggregateInputType = {
    id?: true
    numberControl?: true
    typeCarePackageId?: true
    personId?: true
    carePackageScheduleId?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarePackageCountAggregateInputType = {
    id?: true
    numberControl?: true
    typeCarePackageId?: true
    personId?: true
    carePackageScheduleId?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarePackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarePackage to aggregate.
     */
    where?: CarePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarePackages to fetch.
     */
    orderBy?: CarePackageOrderByWithRelationInput | CarePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarePackages
    **/
    _count?: true | CarePackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarePackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarePackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarePackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarePackageMaxAggregateInputType
  }

  export type GetCarePackageAggregateType<T extends CarePackageAggregateArgs> = {
        [P in keyof T & keyof AggregateCarePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarePackage[P]>
      : GetScalarType<T[P], AggregateCarePackage[P]>
  }




  export type CarePackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarePackageWhereInput
    orderBy?: CarePackageOrderByWithAggregationInput | CarePackageOrderByWithAggregationInput[]
    by: CarePackageScalarFieldEnum[] | CarePackageScalarFieldEnum
    having?: CarePackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarePackageCountAggregateInputType | true
    _avg?: CarePackageAvgAggregateInputType
    _sum?: CarePackageSumAggregateInputType
    _min?: CarePackageMinAggregateInputType
    _max?: CarePackageMaxAggregateInputType
  }

  export type CarePackageGroupByOutputType = {
    id: string
    numberControl: number
    typeCarePackageId: string
    personId: string
    carePackageScheduleId: string
    createdBy: string
    updatedBy: string
    createdAt: Date
    updatedAt: Date
    _count: CarePackageCountAggregateOutputType | null
    _avg: CarePackageAvgAggregateOutputType | null
    _sum: CarePackageSumAggregateOutputType | null
    _min: CarePackageMinAggregateOutputType | null
    _max: CarePackageMaxAggregateOutputType | null
  }

  type GetCarePackageGroupByPayload<T extends CarePackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarePackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarePackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarePackageGroupByOutputType[P]>
            : GetScalarType<T[P], CarePackageGroupByOutputType[P]>
        }
      >
    >


  export type CarePackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberControl?: boolean
    typeCarePackageId?: boolean
    personId?: boolean
    carePackageScheduleId?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    TypeCarePackage?: boolean | TypeCarePackageDefaultArgs<ExtArgs>
    Person?: boolean | PersonDefaultArgs<ExtArgs>
    CarePackageSchedule?: boolean | CarePackageScheduleDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carePackage"]>

  export type CarePackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberControl?: boolean
    typeCarePackageId?: boolean
    personId?: boolean
    carePackageScheduleId?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    TypeCarePackage?: boolean | TypeCarePackageDefaultArgs<ExtArgs>
    Person?: boolean | PersonDefaultArgs<ExtArgs>
    CarePackageSchedule?: boolean | CarePackageScheduleDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carePackage"]>

  export type CarePackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberControl?: boolean
    typeCarePackageId?: boolean
    personId?: boolean
    carePackageScheduleId?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    TypeCarePackage?: boolean | TypeCarePackageDefaultArgs<ExtArgs>
    Person?: boolean | PersonDefaultArgs<ExtArgs>
    CarePackageSchedule?: boolean | CarePackageScheduleDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carePackage"]>

  export type CarePackageSelectScalar = {
    id?: boolean
    numberControl?: boolean
    typeCarePackageId?: boolean
    personId?: boolean
    carePackageScheduleId?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarePackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numberControl" | "typeCarePackageId" | "personId" | "carePackageScheduleId" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["carePackage"]>
  export type CarePackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TypeCarePackage?: boolean | TypeCarePackageDefaultArgs<ExtArgs>
    Person?: boolean | PersonDefaultArgs<ExtArgs>
    CarePackageSchedule?: boolean | CarePackageScheduleDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CarePackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TypeCarePackage?: boolean | TypeCarePackageDefaultArgs<ExtArgs>
    Person?: boolean | PersonDefaultArgs<ExtArgs>
    CarePackageSchedule?: boolean | CarePackageScheduleDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CarePackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TypeCarePackage?: boolean | TypeCarePackageDefaultArgs<ExtArgs>
    Person?: boolean | PersonDefaultArgs<ExtArgs>
    CarePackageSchedule?: boolean | CarePackageScheduleDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CarePackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarePackage"
    objects: {
      TypeCarePackage: Prisma.$TypeCarePackagePayload<ExtArgs>
      Person: Prisma.$PersonPayload<ExtArgs>
      CarePackageSchedule: Prisma.$CarePackageSchedulePayload<ExtArgs>
      CreatedBy: Prisma.$UserPayload<ExtArgs>
      UpdatedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numberControl: number
      typeCarePackageId: string
      personId: string
      carePackageScheduleId: string
      createdBy: string
      updatedBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["carePackage"]>
    composites: {}
  }

  type CarePackageGetPayload<S extends boolean | null | undefined | CarePackageDefaultArgs> = $Result.GetResult<Prisma.$CarePackagePayload, S>

  type CarePackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarePackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarePackageCountAggregateInputType | true
    }

  export interface CarePackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarePackage'], meta: { name: 'CarePackage' } }
    /**
     * Find zero or one CarePackage that matches the filter.
     * @param {CarePackageFindUniqueArgs} args - Arguments to find a CarePackage
     * @example
     * // Get one CarePackage
     * const carePackage = await prisma.carePackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarePackageFindUniqueArgs>(args: SelectSubset<T, CarePackageFindUniqueArgs<ExtArgs>>): Prisma__CarePackageClient<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarePackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarePackageFindUniqueOrThrowArgs} args - Arguments to find a CarePackage
     * @example
     * // Get one CarePackage
     * const carePackage = await prisma.carePackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarePackageFindUniqueOrThrowArgs>(args: SelectSubset<T, CarePackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarePackageClient<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarePackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageFindFirstArgs} args - Arguments to find a CarePackage
     * @example
     * // Get one CarePackage
     * const carePackage = await prisma.carePackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarePackageFindFirstArgs>(args?: SelectSubset<T, CarePackageFindFirstArgs<ExtArgs>>): Prisma__CarePackageClient<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarePackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageFindFirstOrThrowArgs} args - Arguments to find a CarePackage
     * @example
     * // Get one CarePackage
     * const carePackage = await prisma.carePackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarePackageFindFirstOrThrowArgs>(args?: SelectSubset<T, CarePackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarePackageClient<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarePackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarePackages
     * const carePackages = await prisma.carePackage.findMany()
     * 
     * // Get first 10 CarePackages
     * const carePackages = await prisma.carePackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carePackageWithIdOnly = await prisma.carePackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarePackageFindManyArgs>(args?: SelectSubset<T, CarePackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarePackage.
     * @param {CarePackageCreateArgs} args - Arguments to create a CarePackage.
     * @example
     * // Create one CarePackage
     * const CarePackage = await prisma.carePackage.create({
     *   data: {
     *     // ... data to create a CarePackage
     *   }
     * })
     * 
     */
    create<T extends CarePackageCreateArgs>(args: SelectSubset<T, CarePackageCreateArgs<ExtArgs>>): Prisma__CarePackageClient<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarePackages.
     * @param {CarePackageCreateManyArgs} args - Arguments to create many CarePackages.
     * @example
     * // Create many CarePackages
     * const carePackage = await prisma.carePackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarePackageCreateManyArgs>(args?: SelectSubset<T, CarePackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarePackages and returns the data saved in the database.
     * @param {CarePackageCreateManyAndReturnArgs} args - Arguments to create many CarePackages.
     * @example
     * // Create many CarePackages
     * const carePackage = await prisma.carePackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarePackages and only return the `id`
     * const carePackageWithIdOnly = await prisma.carePackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarePackageCreateManyAndReturnArgs>(args?: SelectSubset<T, CarePackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarePackage.
     * @param {CarePackageDeleteArgs} args - Arguments to delete one CarePackage.
     * @example
     * // Delete one CarePackage
     * const CarePackage = await prisma.carePackage.delete({
     *   where: {
     *     // ... filter to delete one CarePackage
     *   }
     * })
     * 
     */
    delete<T extends CarePackageDeleteArgs>(args: SelectSubset<T, CarePackageDeleteArgs<ExtArgs>>): Prisma__CarePackageClient<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarePackage.
     * @param {CarePackageUpdateArgs} args - Arguments to update one CarePackage.
     * @example
     * // Update one CarePackage
     * const carePackage = await prisma.carePackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarePackageUpdateArgs>(args: SelectSubset<T, CarePackageUpdateArgs<ExtArgs>>): Prisma__CarePackageClient<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarePackages.
     * @param {CarePackageDeleteManyArgs} args - Arguments to filter CarePackages to delete.
     * @example
     * // Delete a few CarePackages
     * const { count } = await prisma.carePackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarePackageDeleteManyArgs>(args?: SelectSubset<T, CarePackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarePackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarePackages
     * const carePackage = await prisma.carePackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarePackageUpdateManyArgs>(args: SelectSubset<T, CarePackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarePackages and returns the data updated in the database.
     * @param {CarePackageUpdateManyAndReturnArgs} args - Arguments to update many CarePackages.
     * @example
     * // Update many CarePackages
     * const carePackage = await prisma.carePackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarePackages and only return the `id`
     * const carePackageWithIdOnly = await prisma.carePackage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarePackageUpdateManyAndReturnArgs>(args: SelectSubset<T, CarePackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarePackage.
     * @param {CarePackageUpsertArgs} args - Arguments to update or create a CarePackage.
     * @example
     * // Update or create a CarePackage
     * const carePackage = await prisma.carePackage.upsert({
     *   create: {
     *     // ... data to create a CarePackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarePackage we want to update
     *   }
     * })
     */
    upsert<T extends CarePackageUpsertArgs>(args: SelectSubset<T, CarePackageUpsertArgs<ExtArgs>>): Prisma__CarePackageClient<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarePackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageCountArgs} args - Arguments to filter CarePackages to count.
     * @example
     * // Count the number of CarePackages
     * const count = await prisma.carePackage.count({
     *   where: {
     *     // ... the filter for the CarePackages we want to count
     *   }
     * })
    **/
    count<T extends CarePackageCountArgs>(
      args?: Subset<T, CarePackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarePackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarePackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarePackageAggregateArgs>(args: Subset<T, CarePackageAggregateArgs>): Prisma.PrismaPromise<GetCarePackageAggregateType<T>>

    /**
     * Group by CarePackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageGroupByArgs} args - Group by arguments.
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
      T extends CarePackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarePackageGroupByArgs['orderBy'] }
        : { orderBy?: CarePackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarePackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarePackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarePackage model
   */
  readonly fields: CarePackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarePackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarePackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TypeCarePackage<T extends TypeCarePackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeCarePackageDefaultArgs<ExtArgs>>): Prisma__TypeCarePackageClient<$Result.GetResult<Prisma.$TypeCarePackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CarePackageSchedule<T extends CarePackageScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarePackageScheduleDefaultArgs<ExtArgs>>): Prisma__CarePackageScheduleClient<$Result.GetResult<Prisma.$CarePackageSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CreatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UpdatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarePackage model
   */
  interface CarePackageFieldRefs {
    readonly id: FieldRef<"CarePackage", 'String'>
    readonly numberControl: FieldRef<"CarePackage", 'Int'>
    readonly typeCarePackageId: FieldRef<"CarePackage", 'String'>
    readonly personId: FieldRef<"CarePackage", 'String'>
    readonly carePackageScheduleId: FieldRef<"CarePackage", 'String'>
    readonly createdBy: FieldRef<"CarePackage", 'String'>
    readonly updatedBy: FieldRef<"CarePackage", 'String'>
    readonly createdAt: FieldRef<"CarePackage", 'DateTime'>
    readonly updatedAt: FieldRef<"CarePackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CarePackage findUnique
   */
  export type CarePackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    /**
     * Filter, which CarePackage to fetch.
     */
    where: CarePackageWhereUniqueInput
  }

  /**
   * CarePackage findUniqueOrThrow
   */
  export type CarePackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    /**
     * Filter, which CarePackage to fetch.
     */
    where: CarePackageWhereUniqueInput
  }

  /**
   * CarePackage findFirst
   */
  export type CarePackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    /**
     * Filter, which CarePackage to fetch.
     */
    where?: CarePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarePackages to fetch.
     */
    orderBy?: CarePackageOrderByWithRelationInput | CarePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarePackages.
     */
    cursor?: CarePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarePackages.
     */
    distinct?: CarePackageScalarFieldEnum | CarePackageScalarFieldEnum[]
  }

  /**
   * CarePackage findFirstOrThrow
   */
  export type CarePackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    /**
     * Filter, which CarePackage to fetch.
     */
    where?: CarePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarePackages to fetch.
     */
    orderBy?: CarePackageOrderByWithRelationInput | CarePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarePackages.
     */
    cursor?: CarePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarePackages.
     */
    distinct?: CarePackageScalarFieldEnum | CarePackageScalarFieldEnum[]
  }

  /**
   * CarePackage findMany
   */
  export type CarePackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    /**
     * Filter, which CarePackages to fetch.
     */
    where?: CarePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarePackages to fetch.
     */
    orderBy?: CarePackageOrderByWithRelationInput | CarePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarePackages.
     */
    cursor?: CarePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarePackages.
     */
    skip?: number
    distinct?: CarePackageScalarFieldEnum | CarePackageScalarFieldEnum[]
  }

  /**
   * CarePackage create
   */
  export type CarePackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    /**
     * The data needed to create a CarePackage.
     */
    data: XOR<CarePackageCreateInput, CarePackageUncheckedCreateInput>
  }

  /**
   * CarePackage createMany
   */
  export type CarePackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarePackages.
     */
    data: CarePackageCreateManyInput | CarePackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarePackage createManyAndReturn
   */
  export type CarePackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * The data used to create many CarePackages.
     */
    data: CarePackageCreateManyInput | CarePackageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarePackage update
   */
  export type CarePackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    /**
     * The data needed to update a CarePackage.
     */
    data: XOR<CarePackageUpdateInput, CarePackageUncheckedUpdateInput>
    /**
     * Choose, which CarePackage to update.
     */
    where: CarePackageWhereUniqueInput
  }

  /**
   * CarePackage updateMany
   */
  export type CarePackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarePackages.
     */
    data: XOR<CarePackageUpdateManyMutationInput, CarePackageUncheckedUpdateManyInput>
    /**
     * Filter which CarePackages to update
     */
    where?: CarePackageWhereInput
    /**
     * Limit how many CarePackages to update.
     */
    limit?: number
  }

  /**
   * CarePackage updateManyAndReturn
   */
  export type CarePackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * The data used to update CarePackages.
     */
    data: XOR<CarePackageUpdateManyMutationInput, CarePackageUncheckedUpdateManyInput>
    /**
     * Filter which CarePackages to update
     */
    where?: CarePackageWhereInput
    /**
     * Limit how many CarePackages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarePackage upsert
   */
  export type CarePackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    /**
     * The filter to search for the CarePackage to update in case it exists.
     */
    where: CarePackageWhereUniqueInput
    /**
     * In case the CarePackage found by the `where` argument doesn't exist, create a new CarePackage with this data.
     */
    create: XOR<CarePackageCreateInput, CarePackageUncheckedCreateInput>
    /**
     * In case the CarePackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarePackageUpdateInput, CarePackageUncheckedUpdateInput>
  }

  /**
   * CarePackage delete
   */
  export type CarePackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    /**
     * Filter which CarePackage to delete.
     */
    where: CarePackageWhereUniqueInput
  }

  /**
   * CarePackage deleteMany
   */
  export type CarePackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarePackages to delete
     */
    where?: CarePackageWhereInput
    /**
     * Limit how many CarePackages to delete.
     */
    limit?: number
  }

  /**
   * CarePackage without action
   */
  export type CarePackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
  }


  /**
   * Model CarePackageSchedule
   */

  export type AggregateCarePackageSchedule = {
    _count: CarePackageScheduleCountAggregateOutputType | null
    _avg: CarePackageScheduleAvgAggregateOutputType | null
    _sum: CarePackageScheduleSumAggregateOutputType | null
    _min: CarePackageScheduleMinAggregateOutputType | null
    _max: CarePackageScheduleMaxAggregateOutputType | null
  }

  export type CarePackageScheduleAvgAggregateOutputType = {
    carePackageCount: number | null
  }

  export type CarePackageScheduleSumAggregateOutputType = {
    carePackageCount: number | null
  }

  export type CarePackageScheduleMinAggregateOutputType = {
    id: string | null
    deliveryDate: Date | null
    carePackageCount: number | null
  }

  export type CarePackageScheduleMaxAggregateOutputType = {
    id: string | null
    deliveryDate: Date | null
    carePackageCount: number | null
  }

  export type CarePackageScheduleCountAggregateOutputType = {
    id: number
    deliveryDate: number
    carePackageCount: number
    _all: number
  }


  export type CarePackageScheduleAvgAggregateInputType = {
    carePackageCount?: true
  }

  export type CarePackageScheduleSumAggregateInputType = {
    carePackageCount?: true
  }

  export type CarePackageScheduleMinAggregateInputType = {
    id?: true
    deliveryDate?: true
    carePackageCount?: true
  }

  export type CarePackageScheduleMaxAggregateInputType = {
    id?: true
    deliveryDate?: true
    carePackageCount?: true
  }

  export type CarePackageScheduleCountAggregateInputType = {
    id?: true
    deliveryDate?: true
    carePackageCount?: true
    _all?: true
  }

  export type CarePackageScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarePackageSchedule to aggregate.
     */
    where?: CarePackageScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarePackageSchedules to fetch.
     */
    orderBy?: CarePackageScheduleOrderByWithRelationInput | CarePackageScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarePackageScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarePackageSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarePackageSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarePackageSchedules
    **/
    _count?: true | CarePackageScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarePackageScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarePackageScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarePackageScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarePackageScheduleMaxAggregateInputType
  }

  export type GetCarePackageScheduleAggregateType<T extends CarePackageScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateCarePackageSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarePackageSchedule[P]>
      : GetScalarType<T[P], AggregateCarePackageSchedule[P]>
  }




  export type CarePackageScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarePackageScheduleWhereInput
    orderBy?: CarePackageScheduleOrderByWithAggregationInput | CarePackageScheduleOrderByWithAggregationInput[]
    by: CarePackageScheduleScalarFieldEnum[] | CarePackageScheduleScalarFieldEnum
    having?: CarePackageScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarePackageScheduleCountAggregateInputType | true
    _avg?: CarePackageScheduleAvgAggregateInputType
    _sum?: CarePackageScheduleSumAggregateInputType
    _min?: CarePackageScheduleMinAggregateInputType
    _max?: CarePackageScheduleMaxAggregateInputType
  }

  export type CarePackageScheduleGroupByOutputType = {
    id: string
    deliveryDate: Date
    carePackageCount: number
    _count: CarePackageScheduleCountAggregateOutputType | null
    _avg: CarePackageScheduleAvgAggregateOutputType | null
    _sum: CarePackageScheduleSumAggregateOutputType | null
    _min: CarePackageScheduleMinAggregateOutputType | null
    _max: CarePackageScheduleMaxAggregateOutputType | null
  }

  type GetCarePackageScheduleGroupByPayload<T extends CarePackageScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarePackageScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarePackageScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarePackageScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], CarePackageScheduleGroupByOutputType[P]>
        }
      >
    >


  export type CarePackageScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryDate?: boolean
    carePackageCount?: boolean
    CarePackage?: boolean | CarePackageSchedule$CarePackageArgs<ExtArgs>
    _count?: boolean | CarePackageScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carePackageSchedule"]>

  export type CarePackageScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryDate?: boolean
    carePackageCount?: boolean
  }, ExtArgs["result"]["carePackageSchedule"]>

  export type CarePackageScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryDate?: boolean
    carePackageCount?: boolean
  }, ExtArgs["result"]["carePackageSchedule"]>

  export type CarePackageScheduleSelectScalar = {
    id?: boolean
    deliveryDate?: boolean
    carePackageCount?: boolean
  }

  export type CarePackageScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deliveryDate" | "carePackageCount", ExtArgs["result"]["carePackageSchedule"]>
  export type CarePackageScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CarePackage?: boolean | CarePackageSchedule$CarePackageArgs<ExtArgs>
    _count?: boolean | CarePackageScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarePackageScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarePackageScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarePackageSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarePackageSchedule"
    objects: {
      CarePackage: Prisma.$CarePackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deliveryDate: Date
      carePackageCount: number
    }, ExtArgs["result"]["carePackageSchedule"]>
    composites: {}
  }

  type CarePackageScheduleGetPayload<S extends boolean | null | undefined | CarePackageScheduleDefaultArgs> = $Result.GetResult<Prisma.$CarePackageSchedulePayload, S>

  type CarePackageScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarePackageScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarePackageScheduleCountAggregateInputType | true
    }

  export interface CarePackageScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarePackageSchedule'], meta: { name: 'CarePackageSchedule' } }
    /**
     * Find zero or one CarePackageSchedule that matches the filter.
     * @param {CarePackageScheduleFindUniqueArgs} args - Arguments to find a CarePackageSchedule
     * @example
     * // Get one CarePackageSchedule
     * const carePackageSchedule = await prisma.carePackageSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarePackageScheduleFindUniqueArgs>(args: SelectSubset<T, CarePackageScheduleFindUniqueArgs<ExtArgs>>): Prisma__CarePackageScheduleClient<$Result.GetResult<Prisma.$CarePackageSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarePackageSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarePackageScheduleFindUniqueOrThrowArgs} args - Arguments to find a CarePackageSchedule
     * @example
     * // Get one CarePackageSchedule
     * const carePackageSchedule = await prisma.carePackageSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarePackageScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, CarePackageScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarePackageScheduleClient<$Result.GetResult<Prisma.$CarePackageSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarePackageSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageScheduleFindFirstArgs} args - Arguments to find a CarePackageSchedule
     * @example
     * // Get one CarePackageSchedule
     * const carePackageSchedule = await prisma.carePackageSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarePackageScheduleFindFirstArgs>(args?: SelectSubset<T, CarePackageScheduleFindFirstArgs<ExtArgs>>): Prisma__CarePackageScheduleClient<$Result.GetResult<Prisma.$CarePackageSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarePackageSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageScheduleFindFirstOrThrowArgs} args - Arguments to find a CarePackageSchedule
     * @example
     * // Get one CarePackageSchedule
     * const carePackageSchedule = await prisma.carePackageSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarePackageScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, CarePackageScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarePackageScheduleClient<$Result.GetResult<Prisma.$CarePackageSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarePackageSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarePackageSchedules
     * const carePackageSchedules = await prisma.carePackageSchedule.findMany()
     * 
     * // Get first 10 CarePackageSchedules
     * const carePackageSchedules = await prisma.carePackageSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carePackageScheduleWithIdOnly = await prisma.carePackageSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarePackageScheduleFindManyArgs>(args?: SelectSubset<T, CarePackageScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackageSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarePackageSchedule.
     * @param {CarePackageScheduleCreateArgs} args - Arguments to create a CarePackageSchedule.
     * @example
     * // Create one CarePackageSchedule
     * const CarePackageSchedule = await prisma.carePackageSchedule.create({
     *   data: {
     *     // ... data to create a CarePackageSchedule
     *   }
     * })
     * 
     */
    create<T extends CarePackageScheduleCreateArgs>(args: SelectSubset<T, CarePackageScheduleCreateArgs<ExtArgs>>): Prisma__CarePackageScheduleClient<$Result.GetResult<Prisma.$CarePackageSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarePackageSchedules.
     * @param {CarePackageScheduleCreateManyArgs} args - Arguments to create many CarePackageSchedules.
     * @example
     * // Create many CarePackageSchedules
     * const carePackageSchedule = await prisma.carePackageSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarePackageScheduleCreateManyArgs>(args?: SelectSubset<T, CarePackageScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarePackageSchedules and returns the data saved in the database.
     * @param {CarePackageScheduleCreateManyAndReturnArgs} args - Arguments to create many CarePackageSchedules.
     * @example
     * // Create many CarePackageSchedules
     * const carePackageSchedule = await prisma.carePackageSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarePackageSchedules and only return the `id`
     * const carePackageScheduleWithIdOnly = await prisma.carePackageSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarePackageScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, CarePackageScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackageSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarePackageSchedule.
     * @param {CarePackageScheduleDeleteArgs} args - Arguments to delete one CarePackageSchedule.
     * @example
     * // Delete one CarePackageSchedule
     * const CarePackageSchedule = await prisma.carePackageSchedule.delete({
     *   where: {
     *     // ... filter to delete one CarePackageSchedule
     *   }
     * })
     * 
     */
    delete<T extends CarePackageScheduleDeleteArgs>(args: SelectSubset<T, CarePackageScheduleDeleteArgs<ExtArgs>>): Prisma__CarePackageScheduleClient<$Result.GetResult<Prisma.$CarePackageSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarePackageSchedule.
     * @param {CarePackageScheduleUpdateArgs} args - Arguments to update one CarePackageSchedule.
     * @example
     * // Update one CarePackageSchedule
     * const carePackageSchedule = await prisma.carePackageSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarePackageScheduleUpdateArgs>(args: SelectSubset<T, CarePackageScheduleUpdateArgs<ExtArgs>>): Prisma__CarePackageScheduleClient<$Result.GetResult<Prisma.$CarePackageSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarePackageSchedules.
     * @param {CarePackageScheduleDeleteManyArgs} args - Arguments to filter CarePackageSchedules to delete.
     * @example
     * // Delete a few CarePackageSchedules
     * const { count } = await prisma.carePackageSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarePackageScheduleDeleteManyArgs>(args?: SelectSubset<T, CarePackageScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarePackageSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarePackageSchedules
     * const carePackageSchedule = await prisma.carePackageSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarePackageScheduleUpdateManyArgs>(args: SelectSubset<T, CarePackageScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarePackageSchedules and returns the data updated in the database.
     * @param {CarePackageScheduleUpdateManyAndReturnArgs} args - Arguments to update many CarePackageSchedules.
     * @example
     * // Update many CarePackageSchedules
     * const carePackageSchedule = await prisma.carePackageSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarePackageSchedules and only return the `id`
     * const carePackageScheduleWithIdOnly = await prisma.carePackageSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarePackageScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, CarePackageScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackageSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarePackageSchedule.
     * @param {CarePackageScheduleUpsertArgs} args - Arguments to update or create a CarePackageSchedule.
     * @example
     * // Update or create a CarePackageSchedule
     * const carePackageSchedule = await prisma.carePackageSchedule.upsert({
     *   create: {
     *     // ... data to create a CarePackageSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarePackageSchedule we want to update
     *   }
     * })
     */
    upsert<T extends CarePackageScheduleUpsertArgs>(args: SelectSubset<T, CarePackageScheduleUpsertArgs<ExtArgs>>): Prisma__CarePackageScheduleClient<$Result.GetResult<Prisma.$CarePackageSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarePackageSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageScheduleCountArgs} args - Arguments to filter CarePackageSchedules to count.
     * @example
     * // Count the number of CarePackageSchedules
     * const count = await prisma.carePackageSchedule.count({
     *   where: {
     *     // ... the filter for the CarePackageSchedules we want to count
     *   }
     * })
    **/
    count<T extends CarePackageScheduleCountArgs>(
      args?: Subset<T, CarePackageScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarePackageScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarePackageSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarePackageScheduleAggregateArgs>(args: Subset<T, CarePackageScheduleAggregateArgs>): Prisma.PrismaPromise<GetCarePackageScheduleAggregateType<T>>

    /**
     * Group by CarePackageSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarePackageScheduleGroupByArgs} args - Group by arguments.
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
      T extends CarePackageScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarePackageScheduleGroupByArgs['orderBy'] }
        : { orderBy?: CarePackageScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarePackageScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarePackageScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarePackageSchedule model
   */
  readonly fields: CarePackageScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarePackageSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarePackageScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CarePackage<T extends CarePackageSchedule$CarePackageArgs<ExtArgs> = {}>(args?: Subset<T, CarePackageSchedule$CarePackageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarePackageSchedule model
   */
  interface CarePackageScheduleFieldRefs {
    readonly id: FieldRef<"CarePackageSchedule", 'String'>
    readonly deliveryDate: FieldRef<"CarePackageSchedule", 'DateTime'>
    readonly carePackageCount: FieldRef<"CarePackageSchedule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CarePackageSchedule findUnique
   */
  export type CarePackageScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageSchedule
     */
    select?: CarePackageScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageSchedule
     */
    omit?: CarePackageScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageScheduleInclude<ExtArgs> | null
    /**
     * Filter, which CarePackageSchedule to fetch.
     */
    where: CarePackageScheduleWhereUniqueInput
  }

  /**
   * CarePackageSchedule findUniqueOrThrow
   */
  export type CarePackageScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageSchedule
     */
    select?: CarePackageScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageSchedule
     */
    omit?: CarePackageScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageScheduleInclude<ExtArgs> | null
    /**
     * Filter, which CarePackageSchedule to fetch.
     */
    where: CarePackageScheduleWhereUniqueInput
  }

  /**
   * CarePackageSchedule findFirst
   */
  export type CarePackageScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageSchedule
     */
    select?: CarePackageScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageSchedule
     */
    omit?: CarePackageScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageScheduleInclude<ExtArgs> | null
    /**
     * Filter, which CarePackageSchedule to fetch.
     */
    where?: CarePackageScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarePackageSchedules to fetch.
     */
    orderBy?: CarePackageScheduleOrderByWithRelationInput | CarePackageScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarePackageSchedules.
     */
    cursor?: CarePackageScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarePackageSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarePackageSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarePackageSchedules.
     */
    distinct?: CarePackageScheduleScalarFieldEnum | CarePackageScheduleScalarFieldEnum[]
  }

  /**
   * CarePackageSchedule findFirstOrThrow
   */
  export type CarePackageScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageSchedule
     */
    select?: CarePackageScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageSchedule
     */
    omit?: CarePackageScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageScheduleInclude<ExtArgs> | null
    /**
     * Filter, which CarePackageSchedule to fetch.
     */
    where?: CarePackageScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarePackageSchedules to fetch.
     */
    orderBy?: CarePackageScheduleOrderByWithRelationInput | CarePackageScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarePackageSchedules.
     */
    cursor?: CarePackageScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarePackageSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarePackageSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarePackageSchedules.
     */
    distinct?: CarePackageScheduleScalarFieldEnum | CarePackageScheduleScalarFieldEnum[]
  }

  /**
   * CarePackageSchedule findMany
   */
  export type CarePackageScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageSchedule
     */
    select?: CarePackageScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageSchedule
     */
    omit?: CarePackageScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageScheduleInclude<ExtArgs> | null
    /**
     * Filter, which CarePackageSchedules to fetch.
     */
    where?: CarePackageScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarePackageSchedules to fetch.
     */
    orderBy?: CarePackageScheduleOrderByWithRelationInput | CarePackageScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarePackageSchedules.
     */
    cursor?: CarePackageScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarePackageSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarePackageSchedules.
     */
    skip?: number
    distinct?: CarePackageScheduleScalarFieldEnum | CarePackageScheduleScalarFieldEnum[]
  }

  /**
   * CarePackageSchedule create
   */
  export type CarePackageScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageSchedule
     */
    select?: CarePackageScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageSchedule
     */
    omit?: CarePackageScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a CarePackageSchedule.
     */
    data: XOR<CarePackageScheduleCreateInput, CarePackageScheduleUncheckedCreateInput>
  }

  /**
   * CarePackageSchedule createMany
   */
  export type CarePackageScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarePackageSchedules.
     */
    data: CarePackageScheduleCreateManyInput | CarePackageScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarePackageSchedule createManyAndReturn
   */
  export type CarePackageScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageSchedule
     */
    select?: CarePackageScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageSchedule
     */
    omit?: CarePackageScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many CarePackageSchedules.
     */
    data: CarePackageScheduleCreateManyInput | CarePackageScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarePackageSchedule update
   */
  export type CarePackageScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageSchedule
     */
    select?: CarePackageScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageSchedule
     */
    omit?: CarePackageScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a CarePackageSchedule.
     */
    data: XOR<CarePackageScheduleUpdateInput, CarePackageScheduleUncheckedUpdateInput>
    /**
     * Choose, which CarePackageSchedule to update.
     */
    where: CarePackageScheduleWhereUniqueInput
  }

  /**
   * CarePackageSchedule updateMany
   */
  export type CarePackageScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarePackageSchedules.
     */
    data: XOR<CarePackageScheduleUpdateManyMutationInput, CarePackageScheduleUncheckedUpdateManyInput>
    /**
     * Filter which CarePackageSchedules to update
     */
    where?: CarePackageScheduleWhereInput
    /**
     * Limit how many CarePackageSchedules to update.
     */
    limit?: number
  }

  /**
   * CarePackageSchedule updateManyAndReturn
   */
  export type CarePackageScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageSchedule
     */
    select?: CarePackageScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageSchedule
     */
    omit?: CarePackageScheduleOmit<ExtArgs> | null
    /**
     * The data used to update CarePackageSchedules.
     */
    data: XOR<CarePackageScheduleUpdateManyMutationInput, CarePackageScheduleUncheckedUpdateManyInput>
    /**
     * Filter which CarePackageSchedules to update
     */
    where?: CarePackageScheduleWhereInput
    /**
     * Limit how many CarePackageSchedules to update.
     */
    limit?: number
  }

  /**
   * CarePackageSchedule upsert
   */
  export type CarePackageScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageSchedule
     */
    select?: CarePackageScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageSchedule
     */
    omit?: CarePackageScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the CarePackageSchedule to update in case it exists.
     */
    where: CarePackageScheduleWhereUniqueInput
    /**
     * In case the CarePackageSchedule found by the `where` argument doesn't exist, create a new CarePackageSchedule with this data.
     */
    create: XOR<CarePackageScheduleCreateInput, CarePackageScheduleUncheckedCreateInput>
    /**
     * In case the CarePackageSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarePackageScheduleUpdateInput, CarePackageScheduleUncheckedUpdateInput>
  }

  /**
   * CarePackageSchedule delete
   */
  export type CarePackageScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageSchedule
     */
    select?: CarePackageScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageSchedule
     */
    omit?: CarePackageScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageScheduleInclude<ExtArgs> | null
    /**
     * Filter which CarePackageSchedule to delete.
     */
    where: CarePackageScheduleWhereUniqueInput
  }

  /**
   * CarePackageSchedule deleteMany
   */
  export type CarePackageScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarePackageSchedules to delete
     */
    where?: CarePackageScheduleWhereInput
    /**
     * Limit how many CarePackageSchedules to delete.
     */
    limit?: number
  }

  /**
   * CarePackageSchedule.CarePackage
   */
  export type CarePackageSchedule$CarePackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackage
     */
    select?: CarePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackage
     */
    omit?: CarePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageInclude<ExtArgs> | null
    where?: CarePackageWhereInput
    orderBy?: CarePackageOrderByWithRelationInput | CarePackageOrderByWithRelationInput[]
    cursor?: CarePackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarePackageScalarFieldEnum | CarePackageScalarFieldEnum[]
  }

  /**
   * CarePackageSchedule without action
   */
  export type CarePackageScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarePackageSchedule
     */
    select?: CarePackageScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarePackageSchedule
     */
    omit?: CarePackageScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarePackageScheduleInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    modified_at: 'modified_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    document: 'document',
    hasChild: 'hasChild',
    dateBirth: 'dateBirth',
    gender: 'gender',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const ChildScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    dateBirh: 'dateBirh',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    responsibleId: 'responsibleId'
  };

  export type ChildScalarFieldEnum = (typeof ChildScalarFieldEnum)[keyof typeof ChildScalarFieldEnum]


  export const TypeCarePackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TypeCarePackageScalarFieldEnum = (typeof TypeCarePackageScalarFieldEnum)[keyof typeof TypeCarePackageScalarFieldEnum]


  export const CarePackageItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarePackageItemScalarFieldEnum = (typeof CarePackageItemScalarFieldEnum)[keyof typeof CarePackageItemScalarFieldEnum]


  export const CarePackageScalarFieldEnum: {
    id: 'id',
    numberControl: 'numberControl',
    typeCarePackageId: 'typeCarePackageId',
    personId: 'personId',
    carePackageScheduleId: 'carePackageScheduleId',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarePackageScalarFieldEnum = (typeof CarePackageScalarFieldEnum)[keyof typeof CarePackageScalarFieldEnum]


  export const CarePackageScheduleScalarFieldEnum: {
    id: 'id',
    deliveryDate: 'deliveryDate',
    carePackageCount: 'carePackageCount'
  };

  export type CarePackageScheduleScalarFieldEnum = (typeof CarePackageScheduleScalarFieldEnum)[keyof typeof CarePackageScheduleScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    modified_at?: DateTimeFilter<"User"> | Date | string
    PersonCreatedBy?: PersonListRelationFilter
    PersonUpdatedBy?: PersonListRelationFilter
    ChildCreatedBy?: ChildListRelationFilter
    ChildUpdatedBy?: ChildListRelationFilter
    TypeCarePackageCreatedBy?: TypeCarePackageListRelationFilter
    TypeCarePackageUpdatedBy?: TypeCarePackageListRelationFilter
    CarePackageItemCreatedBy?: CarePackageItemListRelationFilter
    CarePackageItemUpdatedBy?: CarePackageItemListRelationFilter
    CarePackageCreatedBy?: CarePackageListRelationFilter
    CarePackageUpdatedBy?: CarePackageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    modified_at?: SortOrder
    PersonCreatedBy?: PersonOrderByRelationAggregateInput
    PersonUpdatedBy?: PersonOrderByRelationAggregateInput
    ChildCreatedBy?: ChildOrderByRelationAggregateInput
    ChildUpdatedBy?: ChildOrderByRelationAggregateInput
    TypeCarePackageCreatedBy?: TypeCarePackageOrderByRelationAggregateInput
    TypeCarePackageUpdatedBy?: TypeCarePackageOrderByRelationAggregateInput
    CarePackageItemCreatedBy?: CarePackageItemOrderByRelationAggregateInput
    CarePackageItemUpdatedBy?: CarePackageItemOrderByRelationAggregateInput
    CarePackageCreatedBy?: CarePackageOrderByRelationAggregateInput
    CarePackageUpdatedBy?: CarePackageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    modified_at?: DateTimeFilter<"User"> | Date | string
    PersonCreatedBy?: PersonListRelationFilter
    PersonUpdatedBy?: PersonListRelationFilter
    ChildCreatedBy?: ChildListRelationFilter
    ChildUpdatedBy?: ChildListRelationFilter
    TypeCarePackageCreatedBy?: TypeCarePackageListRelationFilter
    TypeCarePackageUpdatedBy?: TypeCarePackageListRelationFilter
    CarePackageItemCreatedBy?: CarePackageItemListRelationFilter
    CarePackageItemUpdatedBy?: CarePackageItemListRelationFilter
    CarePackageCreatedBy?: CarePackageListRelationFilter
    CarePackageUpdatedBy?: CarePackageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    modified_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: StringFilter<"Person"> | string
    name?: StringFilter<"Person"> | string
    lastName?: StringFilter<"Person"> | string
    document?: IntFilter<"Person"> | number
    hasChild?: BoolFilter<"Person"> | boolean
    dateBirth?: DateTimeFilter<"Person"> | Date | string
    gender?: StringFilter<"Person"> | string
    createdBy?: StringFilter<"Person"> | string
    updatedBy?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    Child?: ChildListRelationFilter
    CarePackage?: CarePackageListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    document?: SortOrder
    hasChild?: SortOrder
    dateBirth?: SortOrder
    gender?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    CreatedBy?: UserOrderByWithRelationInput
    UpdatedBy?: UserOrderByWithRelationInput
    Child?: ChildOrderByRelationAggregateInput
    CarePackage?: CarePackageOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    document?: number
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    name?: StringFilter<"Person"> | string
    lastName?: StringFilter<"Person"> | string
    hasChild?: BoolFilter<"Person"> | boolean
    dateBirth?: DateTimeFilter<"Person"> | Date | string
    gender?: StringFilter<"Person"> | string
    createdBy?: StringFilter<"Person"> | string
    updatedBy?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    Child?: ChildListRelationFilter
    CarePackage?: CarePackageListRelationFilter
  }, "id" | "document">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    document?: SortOrder
    hasChild?: SortOrder
    dateBirth?: SortOrder
    gender?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"Person"> | string
    name?: StringWithAggregatesFilter<"Person"> | string
    lastName?: StringWithAggregatesFilter<"Person"> | string
    document?: IntWithAggregatesFilter<"Person"> | number
    hasChild?: BoolWithAggregatesFilter<"Person"> | boolean
    dateBirth?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    gender?: StringWithAggregatesFilter<"Person"> | string
    createdBy?: StringWithAggregatesFilter<"Person"> | string
    updatedBy?: StringWithAggregatesFilter<"Person"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
  }

  export type ChildWhereInput = {
    AND?: ChildWhereInput | ChildWhereInput[]
    OR?: ChildWhereInput[]
    NOT?: ChildWhereInput | ChildWhereInput[]
    id?: StringFilter<"Child"> | string
    name?: StringFilter<"Child"> | string
    lastName?: StringFilter<"Child"> | string
    dateBirh?: DateTimeFilter<"Child"> | Date | string
    createdBy?: StringFilter<"Child"> | string
    updatedBy?: StringFilter<"Child"> | string
    createdAt?: DateTimeFilter<"Child"> | Date | string
    updatedAt?: DateTimeFilter<"Child"> | Date | string
    responsibleId?: StringFilter<"Child"> | string
    PersonResponsible?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChildOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    dateBirh?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    responsibleId?: SortOrder
    PersonResponsible?: PersonOrderByWithRelationInput
    CreatedBy?: UserOrderByWithRelationInput
    UpdatedBy?: UserOrderByWithRelationInput
  }

  export type ChildWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChildWhereInput | ChildWhereInput[]
    OR?: ChildWhereInput[]
    NOT?: ChildWhereInput | ChildWhereInput[]
    name?: StringFilter<"Child"> | string
    lastName?: StringFilter<"Child"> | string
    dateBirh?: DateTimeFilter<"Child"> | Date | string
    createdBy?: StringFilter<"Child"> | string
    updatedBy?: StringFilter<"Child"> | string
    createdAt?: DateTimeFilter<"Child"> | Date | string
    updatedAt?: DateTimeFilter<"Child"> | Date | string
    responsibleId?: StringFilter<"Child"> | string
    PersonResponsible?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChildOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    dateBirh?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    responsibleId?: SortOrder
    _count?: ChildCountOrderByAggregateInput
    _max?: ChildMaxOrderByAggregateInput
    _min?: ChildMinOrderByAggregateInput
  }

  export type ChildScalarWhereWithAggregatesInput = {
    AND?: ChildScalarWhereWithAggregatesInput | ChildScalarWhereWithAggregatesInput[]
    OR?: ChildScalarWhereWithAggregatesInput[]
    NOT?: ChildScalarWhereWithAggregatesInput | ChildScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Child"> | string
    name?: StringWithAggregatesFilter<"Child"> | string
    lastName?: StringWithAggregatesFilter<"Child"> | string
    dateBirh?: DateTimeWithAggregatesFilter<"Child"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Child"> | string
    updatedBy?: StringWithAggregatesFilter<"Child"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Child"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Child"> | Date | string
    responsibleId?: StringWithAggregatesFilter<"Child"> | string
  }

  export type TypeCarePackageWhereInput = {
    AND?: TypeCarePackageWhereInput | TypeCarePackageWhereInput[]
    OR?: TypeCarePackageWhereInput[]
    NOT?: TypeCarePackageWhereInput | TypeCarePackageWhereInput[]
    id?: StringFilter<"TypeCarePackage"> | string
    name?: StringFilter<"TypeCarePackage"> | string
    createdBy?: StringFilter<"TypeCarePackage"> | string
    updatedBy?: StringFilter<"TypeCarePackage"> | string
    createdAt?: DateTimeFilter<"TypeCarePackage"> | Date | string
    updatedAt?: DateTimeFilter<"TypeCarePackage"> | Date | string
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    CarePackage?: CarePackageListRelationFilter
  }

  export type TypeCarePackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    CreatedBy?: UserOrderByWithRelationInput
    UpdatedBy?: UserOrderByWithRelationInput
    CarePackage?: CarePackageOrderByRelationAggregateInput
  }

  export type TypeCarePackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TypeCarePackageWhereInput | TypeCarePackageWhereInput[]
    OR?: TypeCarePackageWhereInput[]
    NOT?: TypeCarePackageWhereInput | TypeCarePackageWhereInput[]
    createdBy?: StringFilter<"TypeCarePackage"> | string
    updatedBy?: StringFilter<"TypeCarePackage"> | string
    createdAt?: DateTimeFilter<"TypeCarePackage"> | Date | string
    updatedAt?: DateTimeFilter<"TypeCarePackage"> | Date | string
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    CarePackage?: CarePackageListRelationFilter
  }, "id" | "name">

  export type TypeCarePackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TypeCarePackageCountOrderByAggregateInput
    _max?: TypeCarePackageMaxOrderByAggregateInput
    _min?: TypeCarePackageMinOrderByAggregateInput
  }

  export type TypeCarePackageScalarWhereWithAggregatesInput = {
    AND?: TypeCarePackageScalarWhereWithAggregatesInput | TypeCarePackageScalarWhereWithAggregatesInput[]
    OR?: TypeCarePackageScalarWhereWithAggregatesInput[]
    NOT?: TypeCarePackageScalarWhereWithAggregatesInput | TypeCarePackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TypeCarePackage"> | string
    name?: StringWithAggregatesFilter<"TypeCarePackage"> | string
    createdBy?: StringWithAggregatesFilter<"TypeCarePackage"> | string
    updatedBy?: StringWithAggregatesFilter<"TypeCarePackage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TypeCarePackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TypeCarePackage"> | Date | string
  }

  export type CarePackageItemWhereInput = {
    AND?: CarePackageItemWhereInput | CarePackageItemWhereInput[]
    OR?: CarePackageItemWhereInput[]
    NOT?: CarePackageItemWhereInput | CarePackageItemWhereInput[]
    id?: StringFilter<"CarePackageItem"> | string
    name?: StringFilter<"CarePackageItem"> | string
    createdBy?: StringFilter<"CarePackageItem"> | string
    updatedBy?: StringFilter<"CarePackageItem"> | string
    createdAt?: DateTimeFilter<"CarePackageItem"> | Date | string
    updatedAt?: DateTimeFilter<"CarePackageItem"> | Date | string
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CarePackageItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    CreatedBy?: UserOrderByWithRelationInput
    UpdatedBy?: UserOrderByWithRelationInput
  }

  export type CarePackageItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CarePackageItemWhereInput | CarePackageItemWhereInput[]
    OR?: CarePackageItemWhereInput[]
    NOT?: CarePackageItemWhereInput | CarePackageItemWhereInput[]
    createdBy?: StringFilter<"CarePackageItem"> | string
    updatedBy?: StringFilter<"CarePackageItem"> | string
    createdAt?: DateTimeFilter<"CarePackageItem"> | Date | string
    updatedAt?: DateTimeFilter<"CarePackageItem"> | Date | string
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "name">

  export type CarePackageItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarePackageItemCountOrderByAggregateInput
    _max?: CarePackageItemMaxOrderByAggregateInput
    _min?: CarePackageItemMinOrderByAggregateInput
  }

  export type CarePackageItemScalarWhereWithAggregatesInput = {
    AND?: CarePackageItemScalarWhereWithAggregatesInput | CarePackageItemScalarWhereWithAggregatesInput[]
    OR?: CarePackageItemScalarWhereWithAggregatesInput[]
    NOT?: CarePackageItemScalarWhereWithAggregatesInput | CarePackageItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CarePackageItem"> | string
    name?: StringWithAggregatesFilter<"CarePackageItem"> | string
    createdBy?: StringWithAggregatesFilter<"CarePackageItem"> | string
    updatedBy?: StringWithAggregatesFilter<"CarePackageItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CarePackageItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CarePackageItem"> | Date | string
  }

  export type CarePackageWhereInput = {
    AND?: CarePackageWhereInput | CarePackageWhereInput[]
    OR?: CarePackageWhereInput[]
    NOT?: CarePackageWhereInput | CarePackageWhereInput[]
    id?: StringFilter<"CarePackage"> | string
    numberControl?: IntFilter<"CarePackage"> | number
    typeCarePackageId?: StringFilter<"CarePackage"> | string
    personId?: StringFilter<"CarePackage"> | string
    carePackageScheduleId?: StringFilter<"CarePackage"> | string
    createdBy?: StringFilter<"CarePackage"> | string
    updatedBy?: StringFilter<"CarePackage"> | string
    createdAt?: DateTimeFilter<"CarePackage"> | Date | string
    updatedAt?: DateTimeFilter<"CarePackage"> | Date | string
    TypeCarePackage?: XOR<TypeCarePackageScalarRelationFilter, TypeCarePackageWhereInput>
    Person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    CarePackageSchedule?: XOR<CarePackageScheduleScalarRelationFilter, CarePackageScheduleWhereInput>
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CarePackageOrderByWithRelationInput = {
    id?: SortOrder
    numberControl?: SortOrder
    typeCarePackageId?: SortOrder
    personId?: SortOrder
    carePackageScheduleId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    TypeCarePackage?: TypeCarePackageOrderByWithRelationInput
    Person?: PersonOrderByWithRelationInput
    CarePackageSchedule?: CarePackageScheduleOrderByWithRelationInput
    CreatedBy?: UserOrderByWithRelationInput
    UpdatedBy?: UserOrderByWithRelationInput
  }

  export type CarePackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarePackageWhereInput | CarePackageWhereInput[]
    OR?: CarePackageWhereInput[]
    NOT?: CarePackageWhereInput | CarePackageWhereInput[]
    numberControl?: IntFilter<"CarePackage"> | number
    typeCarePackageId?: StringFilter<"CarePackage"> | string
    personId?: StringFilter<"CarePackage"> | string
    carePackageScheduleId?: StringFilter<"CarePackage"> | string
    createdBy?: StringFilter<"CarePackage"> | string
    updatedBy?: StringFilter<"CarePackage"> | string
    createdAt?: DateTimeFilter<"CarePackage"> | Date | string
    updatedAt?: DateTimeFilter<"CarePackage"> | Date | string
    TypeCarePackage?: XOR<TypeCarePackageScalarRelationFilter, TypeCarePackageWhereInput>
    Person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    CarePackageSchedule?: XOR<CarePackageScheduleScalarRelationFilter, CarePackageScheduleWhereInput>
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CarePackageOrderByWithAggregationInput = {
    id?: SortOrder
    numberControl?: SortOrder
    typeCarePackageId?: SortOrder
    personId?: SortOrder
    carePackageScheduleId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarePackageCountOrderByAggregateInput
    _avg?: CarePackageAvgOrderByAggregateInput
    _max?: CarePackageMaxOrderByAggregateInput
    _min?: CarePackageMinOrderByAggregateInput
    _sum?: CarePackageSumOrderByAggregateInput
  }

  export type CarePackageScalarWhereWithAggregatesInput = {
    AND?: CarePackageScalarWhereWithAggregatesInput | CarePackageScalarWhereWithAggregatesInput[]
    OR?: CarePackageScalarWhereWithAggregatesInput[]
    NOT?: CarePackageScalarWhereWithAggregatesInput | CarePackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CarePackage"> | string
    numberControl?: IntWithAggregatesFilter<"CarePackage"> | number
    typeCarePackageId?: StringWithAggregatesFilter<"CarePackage"> | string
    personId?: StringWithAggregatesFilter<"CarePackage"> | string
    carePackageScheduleId?: StringWithAggregatesFilter<"CarePackage"> | string
    createdBy?: StringWithAggregatesFilter<"CarePackage"> | string
    updatedBy?: StringWithAggregatesFilter<"CarePackage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CarePackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CarePackage"> | Date | string
  }

  export type CarePackageScheduleWhereInput = {
    AND?: CarePackageScheduleWhereInput | CarePackageScheduleWhereInput[]
    OR?: CarePackageScheduleWhereInput[]
    NOT?: CarePackageScheduleWhereInput | CarePackageScheduleWhereInput[]
    id?: StringFilter<"CarePackageSchedule"> | string
    deliveryDate?: DateTimeFilter<"CarePackageSchedule"> | Date | string
    carePackageCount?: IntFilter<"CarePackageSchedule"> | number
    CarePackage?: CarePackageListRelationFilter
  }

  export type CarePackageScheduleOrderByWithRelationInput = {
    id?: SortOrder
    deliveryDate?: SortOrder
    carePackageCount?: SortOrder
    CarePackage?: CarePackageOrderByRelationAggregateInput
  }

  export type CarePackageScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deliveryDate?: Date | string
    AND?: CarePackageScheduleWhereInput | CarePackageScheduleWhereInput[]
    OR?: CarePackageScheduleWhereInput[]
    NOT?: CarePackageScheduleWhereInput | CarePackageScheduleWhereInput[]
    carePackageCount?: IntFilter<"CarePackageSchedule"> | number
    CarePackage?: CarePackageListRelationFilter
  }, "id" | "deliveryDate">

  export type CarePackageScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    deliveryDate?: SortOrder
    carePackageCount?: SortOrder
    _count?: CarePackageScheduleCountOrderByAggregateInput
    _avg?: CarePackageScheduleAvgOrderByAggregateInput
    _max?: CarePackageScheduleMaxOrderByAggregateInput
    _min?: CarePackageScheduleMinOrderByAggregateInput
    _sum?: CarePackageScheduleSumOrderByAggregateInput
  }

  export type CarePackageScheduleScalarWhereWithAggregatesInput = {
    AND?: CarePackageScheduleScalarWhereWithAggregatesInput | CarePackageScheduleScalarWhereWithAggregatesInput[]
    OR?: CarePackageScheduleScalarWhereWithAggregatesInput[]
    NOT?: CarePackageScheduleScalarWhereWithAggregatesInput | CarePackageScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CarePackageSchedule"> | string
    deliveryDate?: DateTimeWithAggregatesFilter<"CarePackageSchedule"> | Date | string
    carePackageCount?: IntWithAggregatesFilter<"CarePackageSchedule"> | number
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonUncheckedCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonUncheckedCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildUncheckedCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildUncheckedCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUncheckedUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUncheckedUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUncheckedUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUncheckedUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    createdAt: Date | string
    updatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutPersonCreatedByInput
    UpdatedBy: UserCreateNestedOneWithoutPersonUpdatedByInput
    Child?: ChildCreateNestedManyWithoutPersonResponsibleInput
    CarePackage?: CarePackageCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
    Child?: ChildUncheckedCreateNestedManyWithoutPersonResponsibleInput
    CarePackage?: CarePackageUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutPersonCreatedByNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutPersonUpdatedByNestedInput
    Child?: ChildUpdateManyWithoutPersonResponsibleNestedInput
    CarePackage?: CarePackageUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Child?: ChildUncheckedUpdateManyWithoutPersonResponsibleNestedInput
    CarePackage?: CarePackageUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildCreateInput = {
    id?: string
    name: string
    lastName: string
    dateBirh: Date | string
    createdAt: Date | string
    updatedAt: Date | string
    PersonResponsible: PersonCreateNestedOneWithoutChildInput
    CreatedBy: UserCreateNestedOneWithoutChildCreatedByInput
    UpdatedBy: UserCreateNestedOneWithoutChildUpdatedByInput
  }

  export type ChildUncheckedCreateInput = {
    id?: string
    name: string
    lastName: string
    dateBirh: Date | string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
    responsibleId: string
  }

  export type ChildUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonResponsible?: PersonUpdateOneRequiredWithoutChildNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutChildCreatedByNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutChildUpdatedByNestedInput
  }

  export type ChildUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsibleId?: StringFieldUpdateOperationsInput | string
  }

  export type ChildCreateManyInput = {
    id?: string
    name: string
    lastName: string
    dateBirh: Date | string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
    responsibleId: string
  }

  export type ChildUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsibleId?: StringFieldUpdateOperationsInput | string
  }

  export type TypeCarePackageCreateInput = {
    id?: string
    name: string
    createdAt: Date | string
    updatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutTypeCarePackageCreatedByInput
    UpdatedBy: UserCreateNestedOneWithoutTypeCarePackageUpdatedByInput
    CarePackage?: CarePackageCreateNestedManyWithoutTypeCarePackageInput
  }

  export type TypeCarePackageUncheckedCreateInput = {
    id?: string
    name: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
    CarePackage?: CarePackageUncheckedCreateNestedManyWithoutTypeCarePackageInput
  }

  export type TypeCarePackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutTypeCarePackageCreatedByNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutTypeCarePackageUpdatedByNestedInput
    CarePackage?: CarePackageUpdateManyWithoutTypeCarePackageNestedInput
  }

  export type TypeCarePackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CarePackage?: CarePackageUncheckedUpdateManyWithoutTypeCarePackageNestedInput
  }

  export type TypeCarePackageCreateManyInput = {
    id?: string
    name: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type TypeCarePackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeCarePackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageItemCreateInput = {
    id?: string
    name: string
    createdAt: Date | string
    updatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutCarePackageItemCreatedByInput
    UpdatedBy: UserCreateNestedOneWithoutCarePackageItemUpdatedByInput
  }

  export type CarePackageItemUncheckedCreateInput = {
    id?: string
    name: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutCarePackageItemCreatedByNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutCarePackageItemUpdatedByNestedInput
  }

  export type CarePackageItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageItemCreateManyInput = {
    id?: string
    name: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageCreateInput = {
    id?: string
    numberControl?: number
    createdAt: Date | string
    updatedAt: Date | string
    TypeCarePackage: TypeCarePackageCreateNestedOneWithoutCarePackageInput
    Person: PersonCreateNestedOneWithoutCarePackageInput
    CarePackageSchedule: CarePackageScheduleCreateNestedOneWithoutCarePackageInput
    CreatedBy: UserCreateNestedOneWithoutCarePackageCreatedByInput
    UpdatedBy: UserCreateNestedOneWithoutCarePackageUpdatedByInput
  }

  export type CarePackageUncheckedCreateInput = {
    id?: string
    numberControl?: number
    typeCarePackageId: string
    personId: string
    carePackageScheduleId: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TypeCarePackage?: TypeCarePackageUpdateOneRequiredWithoutCarePackageNestedInput
    Person?: PersonUpdateOneRequiredWithoutCarePackageNestedInput
    CarePackageSchedule?: CarePackageScheduleUpdateOneRequiredWithoutCarePackageNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCarePackageCreatedByNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutCarePackageUpdatedByNestedInput
  }

  export type CarePackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    typeCarePackageId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    carePackageScheduleId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageCreateManyInput = {
    id?: string
    numberControl?: number
    typeCarePackageId: string
    personId: string
    carePackageScheduleId: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    typeCarePackageId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    carePackageScheduleId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageScheduleCreateInput = {
    id?: string
    deliveryDate: Date | string
    carePackageCount: number
    CarePackage?: CarePackageCreateNestedManyWithoutCarePackageScheduleInput
  }

  export type CarePackageScheduleUncheckedCreateInput = {
    id?: string
    deliveryDate: Date | string
    carePackageCount: number
    CarePackage?: CarePackageUncheckedCreateNestedManyWithoutCarePackageScheduleInput
  }

  export type CarePackageScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carePackageCount?: IntFieldUpdateOperationsInput | number
    CarePackage?: CarePackageUpdateManyWithoutCarePackageScheduleNestedInput
  }

  export type CarePackageScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carePackageCount?: IntFieldUpdateOperationsInput | number
    CarePackage?: CarePackageUncheckedUpdateManyWithoutCarePackageScheduleNestedInput
  }

  export type CarePackageScheduleCreateManyInput = {
    id?: string
    deliveryDate: Date | string
    carePackageCount: number
  }

  export type CarePackageScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carePackageCount?: IntFieldUpdateOperationsInput | number
  }

  export type CarePackageScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carePackageCount?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PersonListRelationFilter = {
    every?: PersonWhereInput
    some?: PersonWhereInput
    none?: PersonWhereInput
  }

  export type ChildListRelationFilter = {
    every?: ChildWhereInput
    some?: ChildWhereInput
    none?: ChildWhereInput
  }

  export type TypeCarePackageListRelationFilter = {
    every?: TypeCarePackageWhereInput
    some?: TypeCarePackageWhereInput
    none?: TypeCarePackageWhereInput
  }

  export type CarePackageItemListRelationFilter = {
    every?: CarePackageItemWhereInput
    some?: CarePackageItemWhereInput
    none?: CarePackageItemWhereInput
  }

  export type CarePackageListRelationFilter = {
    every?: CarePackageWhereInput
    some?: CarePackageWhereInput
    none?: CarePackageWhereInput
  }

  export type PersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeCarePackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarePackageItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarePackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    modified_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    modified_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    modified_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    document?: SortOrder
    hasChild?: SortOrder
    dateBirth?: SortOrder
    gender?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    document?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    document?: SortOrder
    hasChild?: SortOrder
    dateBirth?: SortOrder
    gender?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    document?: SortOrder
    hasChild?: SortOrder
    dateBirth?: SortOrder
    gender?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
    document?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PersonScalarRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type ChildCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    dateBirh?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    responsibleId?: SortOrder
  }

  export type ChildMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    dateBirh?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    responsibleId?: SortOrder
  }

  export type ChildMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    dateBirh?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    responsibleId?: SortOrder
  }

  export type TypeCarePackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TypeCarePackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TypeCarePackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarePackageItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarePackageItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarePackageItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TypeCarePackageScalarRelationFilter = {
    is?: TypeCarePackageWhereInput
    isNot?: TypeCarePackageWhereInput
  }

  export type CarePackageScheduleScalarRelationFilter = {
    is?: CarePackageScheduleWhereInput
    isNot?: CarePackageScheduleWhereInput
  }

  export type CarePackageCountOrderByAggregateInput = {
    id?: SortOrder
    numberControl?: SortOrder
    typeCarePackageId?: SortOrder
    personId?: SortOrder
    carePackageScheduleId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarePackageAvgOrderByAggregateInput = {
    numberControl?: SortOrder
  }

  export type CarePackageMaxOrderByAggregateInput = {
    id?: SortOrder
    numberControl?: SortOrder
    typeCarePackageId?: SortOrder
    personId?: SortOrder
    carePackageScheduleId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarePackageMinOrderByAggregateInput = {
    id?: SortOrder
    numberControl?: SortOrder
    typeCarePackageId?: SortOrder
    personId?: SortOrder
    carePackageScheduleId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarePackageSumOrderByAggregateInput = {
    numberControl?: SortOrder
  }

  export type CarePackageScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    deliveryDate?: SortOrder
    carePackageCount?: SortOrder
  }

  export type CarePackageScheduleAvgOrderByAggregateInput = {
    carePackageCount?: SortOrder
  }

  export type CarePackageScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    deliveryDate?: SortOrder
    carePackageCount?: SortOrder
  }

  export type CarePackageScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    deliveryDate?: SortOrder
    carePackageCount?: SortOrder
  }

  export type CarePackageScheduleSumOrderByAggregateInput = {
    carePackageCount?: SortOrder
  }

  export type PersonCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PersonCreateWithoutCreatedByInput, PersonUncheckedCreateWithoutCreatedByInput> | PersonCreateWithoutCreatedByInput[] | PersonUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutCreatedByInput | PersonCreateOrConnectWithoutCreatedByInput[]
    createMany?: PersonCreateManyCreatedByInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<PersonCreateWithoutUpdatedByInput, PersonUncheckedCreateWithoutUpdatedByInput> | PersonCreateWithoutUpdatedByInput[] | PersonUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutUpdatedByInput | PersonCreateOrConnectWithoutUpdatedByInput[]
    createMany?: PersonCreateManyUpdatedByInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type ChildCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ChildCreateWithoutCreatedByInput, ChildUncheckedCreateWithoutCreatedByInput> | ChildCreateWithoutCreatedByInput[] | ChildUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutCreatedByInput | ChildCreateOrConnectWithoutCreatedByInput[]
    createMany?: ChildCreateManyCreatedByInputEnvelope
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
  }

  export type ChildCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<ChildCreateWithoutUpdatedByInput, ChildUncheckedCreateWithoutUpdatedByInput> | ChildCreateWithoutUpdatedByInput[] | ChildUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutUpdatedByInput | ChildCreateOrConnectWithoutUpdatedByInput[]
    createMany?: ChildCreateManyUpdatedByInputEnvelope
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
  }

  export type TypeCarePackageCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TypeCarePackageCreateWithoutCreatedByInput, TypeCarePackageUncheckedCreateWithoutCreatedByInput> | TypeCarePackageCreateWithoutCreatedByInput[] | TypeCarePackageUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TypeCarePackageCreateOrConnectWithoutCreatedByInput | TypeCarePackageCreateOrConnectWithoutCreatedByInput[]
    createMany?: TypeCarePackageCreateManyCreatedByInputEnvelope
    connect?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
  }

  export type TypeCarePackageCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<TypeCarePackageCreateWithoutUpdatedByInput, TypeCarePackageUncheckedCreateWithoutUpdatedByInput> | TypeCarePackageCreateWithoutUpdatedByInput[] | TypeCarePackageUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TypeCarePackageCreateOrConnectWithoutUpdatedByInput | TypeCarePackageCreateOrConnectWithoutUpdatedByInput[]
    createMany?: TypeCarePackageCreateManyUpdatedByInputEnvelope
    connect?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
  }

  export type CarePackageItemCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CarePackageItemCreateWithoutCreatedByInput, CarePackageItemUncheckedCreateWithoutCreatedByInput> | CarePackageItemCreateWithoutCreatedByInput[] | CarePackageItemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CarePackageItemCreateOrConnectWithoutCreatedByInput | CarePackageItemCreateOrConnectWithoutCreatedByInput[]
    createMany?: CarePackageItemCreateManyCreatedByInputEnvelope
    connect?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
  }

  export type CarePackageItemCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CarePackageItemCreateWithoutUpdatedByInput, CarePackageItemUncheckedCreateWithoutUpdatedByInput> | CarePackageItemCreateWithoutUpdatedByInput[] | CarePackageItemUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CarePackageItemCreateOrConnectWithoutUpdatedByInput | CarePackageItemCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CarePackageItemCreateManyUpdatedByInputEnvelope
    connect?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
  }

  export type CarePackageCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CarePackageCreateWithoutCreatedByInput, CarePackageUncheckedCreateWithoutCreatedByInput> | CarePackageCreateWithoutCreatedByInput[] | CarePackageUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutCreatedByInput | CarePackageCreateOrConnectWithoutCreatedByInput[]
    createMany?: CarePackageCreateManyCreatedByInputEnvelope
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
  }

  export type CarePackageCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CarePackageCreateWithoutUpdatedByInput, CarePackageUncheckedCreateWithoutUpdatedByInput> | CarePackageCreateWithoutUpdatedByInput[] | CarePackageUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutUpdatedByInput | CarePackageCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CarePackageCreateManyUpdatedByInputEnvelope
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PersonCreateWithoutCreatedByInput, PersonUncheckedCreateWithoutCreatedByInput> | PersonCreateWithoutCreatedByInput[] | PersonUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutCreatedByInput | PersonCreateOrConnectWithoutCreatedByInput[]
    createMany?: PersonCreateManyCreatedByInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<PersonCreateWithoutUpdatedByInput, PersonUncheckedCreateWithoutUpdatedByInput> | PersonCreateWithoutUpdatedByInput[] | PersonUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutUpdatedByInput | PersonCreateOrConnectWithoutUpdatedByInput[]
    createMany?: PersonCreateManyUpdatedByInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type ChildUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ChildCreateWithoutCreatedByInput, ChildUncheckedCreateWithoutCreatedByInput> | ChildCreateWithoutCreatedByInput[] | ChildUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutCreatedByInput | ChildCreateOrConnectWithoutCreatedByInput[]
    createMany?: ChildCreateManyCreatedByInputEnvelope
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
  }

  export type ChildUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<ChildCreateWithoutUpdatedByInput, ChildUncheckedCreateWithoutUpdatedByInput> | ChildCreateWithoutUpdatedByInput[] | ChildUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutUpdatedByInput | ChildCreateOrConnectWithoutUpdatedByInput[]
    createMany?: ChildCreateManyUpdatedByInputEnvelope
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
  }

  export type TypeCarePackageUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TypeCarePackageCreateWithoutCreatedByInput, TypeCarePackageUncheckedCreateWithoutCreatedByInput> | TypeCarePackageCreateWithoutCreatedByInput[] | TypeCarePackageUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TypeCarePackageCreateOrConnectWithoutCreatedByInput | TypeCarePackageCreateOrConnectWithoutCreatedByInput[]
    createMany?: TypeCarePackageCreateManyCreatedByInputEnvelope
    connect?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
  }

  export type TypeCarePackageUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<TypeCarePackageCreateWithoutUpdatedByInput, TypeCarePackageUncheckedCreateWithoutUpdatedByInput> | TypeCarePackageCreateWithoutUpdatedByInput[] | TypeCarePackageUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TypeCarePackageCreateOrConnectWithoutUpdatedByInput | TypeCarePackageCreateOrConnectWithoutUpdatedByInput[]
    createMany?: TypeCarePackageCreateManyUpdatedByInputEnvelope
    connect?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
  }

  export type CarePackageItemUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CarePackageItemCreateWithoutCreatedByInput, CarePackageItemUncheckedCreateWithoutCreatedByInput> | CarePackageItemCreateWithoutCreatedByInput[] | CarePackageItemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CarePackageItemCreateOrConnectWithoutCreatedByInput | CarePackageItemCreateOrConnectWithoutCreatedByInput[]
    createMany?: CarePackageItemCreateManyCreatedByInputEnvelope
    connect?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
  }

  export type CarePackageItemUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CarePackageItemCreateWithoutUpdatedByInput, CarePackageItemUncheckedCreateWithoutUpdatedByInput> | CarePackageItemCreateWithoutUpdatedByInput[] | CarePackageItemUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CarePackageItemCreateOrConnectWithoutUpdatedByInput | CarePackageItemCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CarePackageItemCreateManyUpdatedByInputEnvelope
    connect?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
  }

  export type CarePackageUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CarePackageCreateWithoutCreatedByInput, CarePackageUncheckedCreateWithoutCreatedByInput> | CarePackageCreateWithoutCreatedByInput[] | CarePackageUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutCreatedByInput | CarePackageCreateOrConnectWithoutCreatedByInput[]
    createMany?: CarePackageCreateManyCreatedByInputEnvelope
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
  }

  export type CarePackageUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CarePackageCreateWithoutUpdatedByInput, CarePackageUncheckedCreateWithoutUpdatedByInput> | CarePackageCreateWithoutUpdatedByInput[] | CarePackageUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutUpdatedByInput | CarePackageCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CarePackageCreateManyUpdatedByInputEnvelope
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PersonCreateWithoutCreatedByInput, PersonUncheckedCreateWithoutCreatedByInput> | PersonCreateWithoutCreatedByInput[] | PersonUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutCreatedByInput | PersonCreateOrConnectWithoutCreatedByInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutCreatedByInput | PersonUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PersonCreateManyCreatedByInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutCreatedByInput | PersonUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutCreatedByInput | PersonUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type PersonUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<PersonCreateWithoutUpdatedByInput, PersonUncheckedCreateWithoutUpdatedByInput> | PersonCreateWithoutUpdatedByInput[] | PersonUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutUpdatedByInput | PersonCreateOrConnectWithoutUpdatedByInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutUpdatedByInput | PersonUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: PersonCreateManyUpdatedByInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutUpdatedByInput | PersonUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutUpdatedByInput | PersonUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type ChildUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ChildCreateWithoutCreatedByInput, ChildUncheckedCreateWithoutCreatedByInput> | ChildCreateWithoutCreatedByInput[] | ChildUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutCreatedByInput | ChildCreateOrConnectWithoutCreatedByInput[]
    upsert?: ChildUpsertWithWhereUniqueWithoutCreatedByInput | ChildUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ChildCreateManyCreatedByInputEnvelope
    set?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    disconnect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    delete?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    update?: ChildUpdateWithWhereUniqueWithoutCreatedByInput | ChildUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ChildUpdateManyWithWhereWithoutCreatedByInput | ChildUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ChildScalarWhereInput | ChildScalarWhereInput[]
  }

  export type ChildUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<ChildCreateWithoutUpdatedByInput, ChildUncheckedCreateWithoutUpdatedByInput> | ChildCreateWithoutUpdatedByInput[] | ChildUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutUpdatedByInput | ChildCreateOrConnectWithoutUpdatedByInput[]
    upsert?: ChildUpsertWithWhereUniqueWithoutUpdatedByInput | ChildUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: ChildCreateManyUpdatedByInputEnvelope
    set?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    disconnect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    delete?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    update?: ChildUpdateWithWhereUniqueWithoutUpdatedByInput | ChildUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: ChildUpdateManyWithWhereWithoutUpdatedByInput | ChildUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: ChildScalarWhereInput | ChildScalarWhereInput[]
  }

  export type TypeCarePackageUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TypeCarePackageCreateWithoutCreatedByInput, TypeCarePackageUncheckedCreateWithoutCreatedByInput> | TypeCarePackageCreateWithoutCreatedByInput[] | TypeCarePackageUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TypeCarePackageCreateOrConnectWithoutCreatedByInput | TypeCarePackageCreateOrConnectWithoutCreatedByInput[]
    upsert?: TypeCarePackageUpsertWithWhereUniqueWithoutCreatedByInput | TypeCarePackageUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TypeCarePackageCreateManyCreatedByInputEnvelope
    set?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    disconnect?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    delete?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    connect?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    update?: TypeCarePackageUpdateWithWhereUniqueWithoutCreatedByInput | TypeCarePackageUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TypeCarePackageUpdateManyWithWhereWithoutCreatedByInput | TypeCarePackageUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TypeCarePackageScalarWhereInput | TypeCarePackageScalarWhereInput[]
  }

  export type TypeCarePackageUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<TypeCarePackageCreateWithoutUpdatedByInput, TypeCarePackageUncheckedCreateWithoutUpdatedByInput> | TypeCarePackageCreateWithoutUpdatedByInput[] | TypeCarePackageUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TypeCarePackageCreateOrConnectWithoutUpdatedByInput | TypeCarePackageCreateOrConnectWithoutUpdatedByInput[]
    upsert?: TypeCarePackageUpsertWithWhereUniqueWithoutUpdatedByInput | TypeCarePackageUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: TypeCarePackageCreateManyUpdatedByInputEnvelope
    set?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    disconnect?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    delete?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    connect?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    update?: TypeCarePackageUpdateWithWhereUniqueWithoutUpdatedByInput | TypeCarePackageUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: TypeCarePackageUpdateManyWithWhereWithoutUpdatedByInput | TypeCarePackageUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: TypeCarePackageScalarWhereInput | TypeCarePackageScalarWhereInput[]
  }

  export type CarePackageItemUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CarePackageItemCreateWithoutCreatedByInput, CarePackageItemUncheckedCreateWithoutCreatedByInput> | CarePackageItemCreateWithoutCreatedByInput[] | CarePackageItemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CarePackageItemCreateOrConnectWithoutCreatedByInput | CarePackageItemCreateOrConnectWithoutCreatedByInput[]
    upsert?: CarePackageItemUpsertWithWhereUniqueWithoutCreatedByInput | CarePackageItemUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CarePackageItemCreateManyCreatedByInputEnvelope
    set?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    disconnect?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    delete?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    connect?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    update?: CarePackageItemUpdateWithWhereUniqueWithoutCreatedByInput | CarePackageItemUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CarePackageItemUpdateManyWithWhereWithoutCreatedByInput | CarePackageItemUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CarePackageItemScalarWhereInput | CarePackageItemScalarWhereInput[]
  }

  export type CarePackageItemUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CarePackageItemCreateWithoutUpdatedByInput, CarePackageItemUncheckedCreateWithoutUpdatedByInput> | CarePackageItemCreateWithoutUpdatedByInput[] | CarePackageItemUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CarePackageItemCreateOrConnectWithoutUpdatedByInput | CarePackageItemCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CarePackageItemUpsertWithWhereUniqueWithoutUpdatedByInput | CarePackageItemUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CarePackageItemCreateManyUpdatedByInputEnvelope
    set?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    disconnect?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    delete?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    connect?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    update?: CarePackageItemUpdateWithWhereUniqueWithoutUpdatedByInput | CarePackageItemUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CarePackageItemUpdateManyWithWhereWithoutUpdatedByInput | CarePackageItemUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CarePackageItemScalarWhereInput | CarePackageItemScalarWhereInput[]
  }

  export type CarePackageUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CarePackageCreateWithoutCreatedByInput, CarePackageUncheckedCreateWithoutCreatedByInput> | CarePackageCreateWithoutCreatedByInput[] | CarePackageUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutCreatedByInput | CarePackageCreateOrConnectWithoutCreatedByInput[]
    upsert?: CarePackageUpsertWithWhereUniqueWithoutCreatedByInput | CarePackageUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CarePackageCreateManyCreatedByInputEnvelope
    set?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    disconnect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    delete?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    update?: CarePackageUpdateWithWhereUniqueWithoutCreatedByInput | CarePackageUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CarePackageUpdateManyWithWhereWithoutCreatedByInput | CarePackageUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CarePackageScalarWhereInput | CarePackageScalarWhereInput[]
  }

  export type CarePackageUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CarePackageCreateWithoutUpdatedByInput, CarePackageUncheckedCreateWithoutUpdatedByInput> | CarePackageCreateWithoutUpdatedByInput[] | CarePackageUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutUpdatedByInput | CarePackageCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CarePackageUpsertWithWhereUniqueWithoutUpdatedByInput | CarePackageUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CarePackageCreateManyUpdatedByInputEnvelope
    set?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    disconnect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    delete?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    update?: CarePackageUpdateWithWhereUniqueWithoutUpdatedByInput | CarePackageUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CarePackageUpdateManyWithWhereWithoutUpdatedByInput | CarePackageUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CarePackageScalarWhereInput | CarePackageScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PersonCreateWithoutCreatedByInput, PersonUncheckedCreateWithoutCreatedByInput> | PersonCreateWithoutCreatedByInput[] | PersonUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutCreatedByInput | PersonCreateOrConnectWithoutCreatedByInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutCreatedByInput | PersonUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PersonCreateManyCreatedByInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutCreatedByInput | PersonUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutCreatedByInput | PersonUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<PersonCreateWithoutUpdatedByInput, PersonUncheckedCreateWithoutUpdatedByInput> | PersonCreateWithoutUpdatedByInput[] | PersonUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutUpdatedByInput | PersonCreateOrConnectWithoutUpdatedByInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutUpdatedByInput | PersonUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: PersonCreateManyUpdatedByInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutUpdatedByInput | PersonUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutUpdatedByInput | PersonUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type ChildUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ChildCreateWithoutCreatedByInput, ChildUncheckedCreateWithoutCreatedByInput> | ChildCreateWithoutCreatedByInput[] | ChildUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutCreatedByInput | ChildCreateOrConnectWithoutCreatedByInput[]
    upsert?: ChildUpsertWithWhereUniqueWithoutCreatedByInput | ChildUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ChildCreateManyCreatedByInputEnvelope
    set?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    disconnect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    delete?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    update?: ChildUpdateWithWhereUniqueWithoutCreatedByInput | ChildUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ChildUpdateManyWithWhereWithoutCreatedByInput | ChildUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ChildScalarWhereInput | ChildScalarWhereInput[]
  }

  export type ChildUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<ChildCreateWithoutUpdatedByInput, ChildUncheckedCreateWithoutUpdatedByInput> | ChildCreateWithoutUpdatedByInput[] | ChildUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutUpdatedByInput | ChildCreateOrConnectWithoutUpdatedByInput[]
    upsert?: ChildUpsertWithWhereUniqueWithoutUpdatedByInput | ChildUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: ChildCreateManyUpdatedByInputEnvelope
    set?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    disconnect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    delete?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    update?: ChildUpdateWithWhereUniqueWithoutUpdatedByInput | ChildUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: ChildUpdateManyWithWhereWithoutUpdatedByInput | ChildUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: ChildScalarWhereInput | ChildScalarWhereInput[]
  }

  export type TypeCarePackageUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TypeCarePackageCreateWithoutCreatedByInput, TypeCarePackageUncheckedCreateWithoutCreatedByInput> | TypeCarePackageCreateWithoutCreatedByInput[] | TypeCarePackageUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TypeCarePackageCreateOrConnectWithoutCreatedByInput | TypeCarePackageCreateOrConnectWithoutCreatedByInput[]
    upsert?: TypeCarePackageUpsertWithWhereUniqueWithoutCreatedByInput | TypeCarePackageUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TypeCarePackageCreateManyCreatedByInputEnvelope
    set?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    disconnect?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    delete?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    connect?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    update?: TypeCarePackageUpdateWithWhereUniqueWithoutCreatedByInput | TypeCarePackageUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TypeCarePackageUpdateManyWithWhereWithoutCreatedByInput | TypeCarePackageUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TypeCarePackageScalarWhereInput | TypeCarePackageScalarWhereInput[]
  }

  export type TypeCarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<TypeCarePackageCreateWithoutUpdatedByInput, TypeCarePackageUncheckedCreateWithoutUpdatedByInput> | TypeCarePackageCreateWithoutUpdatedByInput[] | TypeCarePackageUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TypeCarePackageCreateOrConnectWithoutUpdatedByInput | TypeCarePackageCreateOrConnectWithoutUpdatedByInput[]
    upsert?: TypeCarePackageUpsertWithWhereUniqueWithoutUpdatedByInput | TypeCarePackageUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: TypeCarePackageCreateManyUpdatedByInputEnvelope
    set?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    disconnect?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    delete?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    connect?: TypeCarePackageWhereUniqueInput | TypeCarePackageWhereUniqueInput[]
    update?: TypeCarePackageUpdateWithWhereUniqueWithoutUpdatedByInput | TypeCarePackageUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: TypeCarePackageUpdateManyWithWhereWithoutUpdatedByInput | TypeCarePackageUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: TypeCarePackageScalarWhereInput | TypeCarePackageScalarWhereInput[]
  }

  export type CarePackageItemUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CarePackageItemCreateWithoutCreatedByInput, CarePackageItemUncheckedCreateWithoutCreatedByInput> | CarePackageItemCreateWithoutCreatedByInput[] | CarePackageItemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CarePackageItemCreateOrConnectWithoutCreatedByInput | CarePackageItemCreateOrConnectWithoutCreatedByInput[]
    upsert?: CarePackageItemUpsertWithWhereUniqueWithoutCreatedByInput | CarePackageItemUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CarePackageItemCreateManyCreatedByInputEnvelope
    set?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    disconnect?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    delete?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    connect?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    update?: CarePackageItemUpdateWithWhereUniqueWithoutCreatedByInput | CarePackageItemUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CarePackageItemUpdateManyWithWhereWithoutCreatedByInput | CarePackageItemUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CarePackageItemScalarWhereInput | CarePackageItemScalarWhereInput[]
  }

  export type CarePackageItemUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CarePackageItemCreateWithoutUpdatedByInput, CarePackageItemUncheckedCreateWithoutUpdatedByInput> | CarePackageItemCreateWithoutUpdatedByInput[] | CarePackageItemUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CarePackageItemCreateOrConnectWithoutUpdatedByInput | CarePackageItemCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CarePackageItemUpsertWithWhereUniqueWithoutUpdatedByInput | CarePackageItemUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CarePackageItemCreateManyUpdatedByInputEnvelope
    set?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    disconnect?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    delete?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    connect?: CarePackageItemWhereUniqueInput | CarePackageItemWhereUniqueInput[]
    update?: CarePackageItemUpdateWithWhereUniqueWithoutUpdatedByInput | CarePackageItemUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CarePackageItemUpdateManyWithWhereWithoutUpdatedByInput | CarePackageItemUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CarePackageItemScalarWhereInput | CarePackageItemScalarWhereInput[]
  }

  export type CarePackageUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CarePackageCreateWithoutCreatedByInput, CarePackageUncheckedCreateWithoutCreatedByInput> | CarePackageCreateWithoutCreatedByInput[] | CarePackageUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutCreatedByInput | CarePackageCreateOrConnectWithoutCreatedByInput[]
    upsert?: CarePackageUpsertWithWhereUniqueWithoutCreatedByInput | CarePackageUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CarePackageCreateManyCreatedByInputEnvelope
    set?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    disconnect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    delete?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    update?: CarePackageUpdateWithWhereUniqueWithoutCreatedByInput | CarePackageUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CarePackageUpdateManyWithWhereWithoutCreatedByInput | CarePackageUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CarePackageScalarWhereInput | CarePackageScalarWhereInput[]
  }

  export type CarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CarePackageCreateWithoutUpdatedByInput, CarePackageUncheckedCreateWithoutUpdatedByInput> | CarePackageCreateWithoutUpdatedByInput[] | CarePackageUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutUpdatedByInput | CarePackageCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CarePackageUpsertWithWhereUniqueWithoutUpdatedByInput | CarePackageUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CarePackageCreateManyUpdatedByInputEnvelope
    set?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    disconnect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    delete?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    update?: CarePackageUpdateWithWhereUniqueWithoutUpdatedByInput | CarePackageUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CarePackageUpdateManyWithWhereWithoutUpdatedByInput | CarePackageUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CarePackageScalarWhereInput | CarePackageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPersonCreatedByInput = {
    create?: XOR<UserCreateWithoutPersonCreatedByInput, UserUncheckedCreateWithoutPersonCreatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonCreatedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPersonUpdatedByInput = {
    create?: XOR<UserCreateWithoutPersonUpdatedByInput, UserUncheckedCreateWithoutPersonUpdatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonUpdatedByInput
    connect?: UserWhereUniqueInput
  }

  export type ChildCreateNestedManyWithoutPersonResponsibleInput = {
    create?: XOR<ChildCreateWithoutPersonResponsibleInput, ChildUncheckedCreateWithoutPersonResponsibleInput> | ChildCreateWithoutPersonResponsibleInput[] | ChildUncheckedCreateWithoutPersonResponsibleInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutPersonResponsibleInput | ChildCreateOrConnectWithoutPersonResponsibleInput[]
    createMany?: ChildCreateManyPersonResponsibleInputEnvelope
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
  }

  export type CarePackageCreateNestedManyWithoutPersonInput = {
    create?: XOR<CarePackageCreateWithoutPersonInput, CarePackageUncheckedCreateWithoutPersonInput> | CarePackageCreateWithoutPersonInput[] | CarePackageUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutPersonInput | CarePackageCreateOrConnectWithoutPersonInput[]
    createMany?: CarePackageCreateManyPersonInputEnvelope
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
  }

  export type ChildUncheckedCreateNestedManyWithoutPersonResponsibleInput = {
    create?: XOR<ChildCreateWithoutPersonResponsibleInput, ChildUncheckedCreateWithoutPersonResponsibleInput> | ChildCreateWithoutPersonResponsibleInput[] | ChildUncheckedCreateWithoutPersonResponsibleInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutPersonResponsibleInput | ChildCreateOrConnectWithoutPersonResponsibleInput[]
    createMany?: ChildCreateManyPersonResponsibleInputEnvelope
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
  }

  export type CarePackageUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<CarePackageCreateWithoutPersonInput, CarePackageUncheckedCreateWithoutPersonInput> | CarePackageCreateWithoutPersonInput[] | CarePackageUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutPersonInput | CarePackageCreateOrConnectWithoutPersonInput[]
    createMany?: CarePackageCreateManyPersonInputEnvelope
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPersonCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutPersonCreatedByInput, UserUncheckedCreateWithoutPersonCreatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonCreatedByInput
    upsert?: UserUpsertWithoutPersonCreatedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonCreatedByInput, UserUpdateWithoutPersonCreatedByInput>, UserUncheckedUpdateWithoutPersonCreatedByInput>
  }

  export type UserUpdateOneRequiredWithoutPersonUpdatedByNestedInput = {
    create?: XOR<UserCreateWithoutPersonUpdatedByInput, UserUncheckedCreateWithoutPersonUpdatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonUpdatedByInput
    upsert?: UserUpsertWithoutPersonUpdatedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonUpdatedByInput, UserUpdateWithoutPersonUpdatedByInput>, UserUncheckedUpdateWithoutPersonUpdatedByInput>
  }

  export type ChildUpdateManyWithoutPersonResponsibleNestedInput = {
    create?: XOR<ChildCreateWithoutPersonResponsibleInput, ChildUncheckedCreateWithoutPersonResponsibleInput> | ChildCreateWithoutPersonResponsibleInput[] | ChildUncheckedCreateWithoutPersonResponsibleInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutPersonResponsibleInput | ChildCreateOrConnectWithoutPersonResponsibleInput[]
    upsert?: ChildUpsertWithWhereUniqueWithoutPersonResponsibleInput | ChildUpsertWithWhereUniqueWithoutPersonResponsibleInput[]
    createMany?: ChildCreateManyPersonResponsibleInputEnvelope
    set?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    disconnect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    delete?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    update?: ChildUpdateWithWhereUniqueWithoutPersonResponsibleInput | ChildUpdateWithWhereUniqueWithoutPersonResponsibleInput[]
    updateMany?: ChildUpdateManyWithWhereWithoutPersonResponsibleInput | ChildUpdateManyWithWhereWithoutPersonResponsibleInput[]
    deleteMany?: ChildScalarWhereInput | ChildScalarWhereInput[]
  }

  export type CarePackageUpdateManyWithoutPersonNestedInput = {
    create?: XOR<CarePackageCreateWithoutPersonInput, CarePackageUncheckedCreateWithoutPersonInput> | CarePackageCreateWithoutPersonInput[] | CarePackageUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutPersonInput | CarePackageCreateOrConnectWithoutPersonInput[]
    upsert?: CarePackageUpsertWithWhereUniqueWithoutPersonInput | CarePackageUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: CarePackageCreateManyPersonInputEnvelope
    set?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    disconnect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    delete?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    update?: CarePackageUpdateWithWhereUniqueWithoutPersonInput | CarePackageUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: CarePackageUpdateManyWithWhereWithoutPersonInput | CarePackageUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: CarePackageScalarWhereInput | CarePackageScalarWhereInput[]
  }

  export type ChildUncheckedUpdateManyWithoutPersonResponsibleNestedInput = {
    create?: XOR<ChildCreateWithoutPersonResponsibleInput, ChildUncheckedCreateWithoutPersonResponsibleInput> | ChildCreateWithoutPersonResponsibleInput[] | ChildUncheckedCreateWithoutPersonResponsibleInput[]
    connectOrCreate?: ChildCreateOrConnectWithoutPersonResponsibleInput | ChildCreateOrConnectWithoutPersonResponsibleInput[]
    upsert?: ChildUpsertWithWhereUniqueWithoutPersonResponsibleInput | ChildUpsertWithWhereUniqueWithoutPersonResponsibleInput[]
    createMany?: ChildCreateManyPersonResponsibleInputEnvelope
    set?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    disconnect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    delete?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    connect?: ChildWhereUniqueInput | ChildWhereUniqueInput[]
    update?: ChildUpdateWithWhereUniqueWithoutPersonResponsibleInput | ChildUpdateWithWhereUniqueWithoutPersonResponsibleInput[]
    updateMany?: ChildUpdateManyWithWhereWithoutPersonResponsibleInput | ChildUpdateManyWithWhereWithoutPersonResponsibleInput[]
    deleteMany?: ChildScalarWhereInput | ChildScalarWhereInput[]
  }

  export type CarePackageUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<CarePackageCreateWithoutPersonInput, CarePackageUncheckedCreateWithoutPersonInput> | CarePackageCreateWithoutPersonInput[] | CarePackageUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutPersonInput | CarePackageCreateOrConnectWithoutPersonInput[]
    upsert?: CarePackageUpsertWithWhereUniqueWithoutPersonInput | CarePackageUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: CarePackageCreateManyPersonInputEnvelope
    set?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    disconnect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    delete?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    update?: CarePackageUpdateWithWhereUniqueWithoutPersonInput | CarePackageUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: CarePackageUpdateManyWithWhereWithoutPersonInput | CarePackageUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: CarePackageScalarWhereInput | CarePackageScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutChildInput = {
    create?: XOR<PersonCreateWithoutChildInput, PersonUncheckedCreateWithoutChildInput>
    connectOrCreate?: PersonCreateOrConnectWithoutChildInput
    connect?: PersonWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChildCreatedByInput = {
    create?: XOR<UserCreateWithoutChildCreatedByInput, UserUncheckedCreateWithoutChildCreatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildCreatedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChildUpdatedByInput = {
    create?: XOR<UserCreateWithoutChildUpdatedByInput, UserUncheckedCreateWithoutChildUpdatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildUpdatedByInput
    connect?: UserWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutChildNestedInput = {
    create?: XOR<PersonCreateWithoutChildInput, PersonUncheckedCreateWithoutChildInput>
    connectOrCreate?: PersonCreateOrConnectWithoutChildInput
    upsert?: PersonUpsertWithoutChildInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutChildInput, PersonUpdateWithoutChildInput>, PersonUncheckedUpdateWithoutChildInput>
  }

  export type UserUpdateOneRequiredWithoutChildCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutChildCreatedByInput, UserUncheckedCreateWithoutChildCreatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildCreatedByInput
    upsert?: UserUpsertWithoutChildCreatedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChildCreatedByInput, UserUpdateWithoutChildCreatedByInput>, UserUncheckedUpdateWithoutChildCreatedByInput>
  }

  export type UserUpdateOneRequiredWithoutChildUpdatedByNestedInput = {
    create?: XOR<UserCreateWithoutChildUpdatedByInput, UserUncheckedCreateWithoutChildUpdatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildUpdatedByInput
    upsert?: UserUpsertWithoutChildUpdatedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChildUpdatedByInput, UserUpdateWithoutChildUpdatedByInput>, UserUncheckedUpdateWithoutChildUpdatedByInput>
  }

  export type UserCreateNestedOneWithoutTypeCarePackageCreatedByInput = {
    create?: XOR<UserCreateWithoutTypeCarePackageCreatedByInput, UserUncheckedCreateWithoutTypeCarePackageCreatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutTypeCarePackageCreatedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTypeCarePackageUpdatedByInput = {
    create?: XOR<UserCreateWithoutTypeCarePackageUpdatedByInput, UserUncheckedCreateWithoutTypeCarePackageUpdatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutTypeCarePackageUpdatedByInput
    connect?: UserWhereUniqueInput
  }

  export type CarePackageCreateNestedManyWithoutTypeCarePackageInput = {
    create?: XOR<CarePackageCreateWithoutTypeCarePackageInput, CarePackageUncheckedCreateWithoutTypeCarePackageInput> | CarePackageCreateWithoutTypeCarePackageInput[] | CarePackageUncheckedCreateWithoutTypeCarePackageInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutTypeCarePackageInput | CarePackageCreateOrConnectWithoutTypeCarePackageInput[]
    createMany?: CarePackageCreateManyTypeCarePackageInputEnvelope
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
  }

  export type CarePackageUncheckedCreateNestedManyWithoutTypeCarePackageInput = {
    create?: XOR<CarePackageCreateWithoutTypeCarePackageInput, CarePackageUncheckedCreateWithoutTypeCarePackageInput> | CarePackageCreateWithoutTypeCarePackageInput[] | CarePackageUncheckedCreateWithoutTypeCarePackageInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutTypeCarePackageInput | CarePackageCreateOrConnectWithoutTypeCarePackageInput[]
    createMany?: CarePackageCreateManyTypeCarePackageInputEnvelope
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTypeCarePackageCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutTypeCarePackageCreatedByInput, UserUncheckedCreateWithoutTypeCarePackageCreatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutTypeCarePackageCreatedByInput
    upsert?: UserUpsertWithoutTypeCarePackageCreatedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTypeCarePackageCreatedByInput, UserUpdateWithoutTypeCarePackageCreatedByInput>, UserUncheckedUpdateWithoutTypeCarePackageCreatedByInput>
  }

  export type UserUpdateOneRequiredWithoutTypeCarePackageUpdatedByNestedInput = {
    create?: XOR<UserCreateWithoutTypeCarePackageUpdatedByInput, UserUncheckedCreateWithoutTypeCarePackageUpdatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutTypeCarePackageUpdatedByInput
    upsert?: UserUpsertWithoutTypeCarePackageUpdatedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTypeCarePackageUpdatedByInput, UserUpdateWithoutTypeCarePackageUpdatedByInput>, UserUncheckedUpdateWithoutTypeCarePackageUpdatedByInput>
  }

  export type CarePackageUpdateManyWithoutTypeCarePackageNestedInput = {
    create?: XOR<CarePackageCreateWithoutTypeCarePackageInput, CarePackageUncheckedCreateWithoutTypeCarePackageInput> | CarePackageCreateWithoutTypeCarePackageInput[] | CarePackageUncheckedCreateWithoutTypeCarePackageInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutTypeCarePackageInput | CarePackageCreateOrConnectWithoutTypeCarePackageInput[]
    upsert?: CarePackageUpsertWithWhereUniqueWithoutTypeCarePackageInput | CarePackageUpsertWithWhereUniqueWithoutTypeCarePackageInput[]
    createMany?: CarePackageCreateManyTypeCarePackageInputEnvelope
    set?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    disconnect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    delete?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    update?: CarePackageUpdateWithWhereUniqueWithoutTypeCarePackageInput | CarePackageUpdateWithWhereUniqueWithoutTypeCarePackageInput[]
    updateMany?: CarePackageUpdateManyWithWhereWithoutTypeCarePackageInput | CarePackageUpdateManyWithWhereWithoutTypeCarePackageInput[]
    deleteMany?: CarePackageScalarWhereInput | CarePackageScalarWhereInput[]
  }

  export type CarePackageUncheckedUpdateManyWithoutTypeCarePackageNestedInput = {
    create?: XOR<CarePackageCreateWithoutTypeCarePackageInput, CarePackageUncheckedCreateWithoutTypeCarePackageInput> | CarePackageCreateWithoutTypeCarePackageInput[] | CarePackageUncheckedCreateWithoutTypeCarePackageInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutTypeCarePackageInput | CarePackageCreateOrConnectWithoutTypeCarePackageInput[]
    upsert?: CarePackageUpsertWithWhereUniqueWithoutTypeCarePackageInput | CarePackageUpsertWithWhereUniqueWithoutTypeCarePackageInput[]
    createMany?: CarePackageCreateManyTypeCarePackageInputEnvelope
    set?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    disconnect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    delete?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    update?: CarePackageUpdateWithWhereUniqueWithoutTypeCarePackageInput | CarePackageUpdateWithWhereUniqueWithoutTypeCarePackageInput[]
    updateMany?: CarePackageUpdateManyWithWhereWithoutTypeCarePackageInput | CarePackageUpdateManyWithWhereWithoutTypeCarePackageInput[]
    deleteMany?: CarePackageScalarWhereInput | CarePackageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCarePackageItemCreatedByInput = {
    create?: XOR<UserCreateWithoutCarePackageItemCreatedByInput, UserUncheckedCreateWithoutCarePackageItemCreatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarePackageItemCreatedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCarePackageItemUpdatedByInput = {
    create?: XOR<UserCreateWithoutCarePackageItemUpdatedByInput, UserUncheckedCreateWithoutCarePackageItemUpdatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarePackageItemUpdatedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCarePackageItemCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCarePackageItemCreatedByInput, UserUncheckedCreateWithoutCarePackageItemCreatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarePackageItemCreatedByInput
    upsert?: UserUpsertWithoutCarePackageItemCreatedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarePackageItemCreatedByInput, UserUpdateWithoutCarePackageItemCreatedByInput>, UserUncheckedUpdateWithoutCarePackageItemCreatedByInput>
  }

  export type UserUpdateOneRequiredWithoutCarePackageItemUpdatedByNestedInput = {
    create?: XOR<UserCreateWithoutCarePackageItemUpdatedByInput, UserUncheckedCreateWithoutCarePackageItemUpdatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarePackageItemUpdatedByInput
    upsert?: UserUpsertWithoutCarePackageItemUpdatedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarePackageItemUpdatedByInput, UserUpdateWithoutCarePackageItemUpdatedByInput>, UserUncheckedUpdateWithoutCarePackageItemUpdatedByInput>
  }

  export type TypeCarePackageCreateNestedOneWithoutCarePackageInput = {
    create?: XOR<TypeCarePackageCreateWithoutCarePackageInput, TypeCarePackageUncheckedCreateWithoutCarePackageInput>
    connectOrCreate?: TypeCarePackageCreateOrConnectWithoutCarePackageInput
    connect?: TypeCarePackageWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutCarePackageInput = {
    create?: XOR<PersonCreateWithoutCarePackageInput, PersonUncheckedCreateWithoutCarePackageInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCarePackageInput
    connect?: PersonWhereUniqueInput
  }

  export type CarePackageScheduleCreateNestedOneWithoutCarePackageInput = {
    create?: XOR<CarePackageScheduleCreateWithoutCarePackageInput, CarePackageScheduleUncheckedCreateWithoutCarePackageInput>
    connectOrCreate?: CarePackageScheduleCreateOrConnectWithoutCarePackageInput
    connect?: CarePackageScheduleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCarePackageCreatedByInput = {
    create?: XOR<UserCreateWithoutCarePackageCreatedByInput, UserUncheckedCreateWithoutCarePackageCreatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarePackageCreatedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCarePackageUpdatedByInput = {
    create?: XOR<UserCreateWithoutCarePackageUpdatedByInput, UserUncheckedCreateWithoutCarePackageUpdatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarePackageUpdatedByInput
    connect?: UserWhereUniqueInput
  }

  export type TypeCarePackageUpdateOneRequiredWithoutCarePackageNestedInput = {
    create?: XOR<TypeCarePackageCreateWithoutCarePackageInput, TypeCarePackageUncheckedCreateWithoutCarePackageInput>
    connectOrCreate?: TypeCarePackageCreateOrConnectWithoutCarePackageInput
    upsert?: TypeCarePackageUpsertWithoutCarePackageInput
    connect?: TypeCarePackageWhereUniqueInput
    update?: XOR<XOR<TypeCarePackageUpdateToOneWithWhereWithoutCarePackageInput, TypeCarePackageUpdateWithoutCarePackageInput>, TypeCarePackageUncheckedUpdateWithoutCarePackageInput>
  }

  export type PersonUpdateOneRequiredWithoutCarePackageNestedInput = {
    create?: XOR<PersonCreateWithoutCarePackageInput, PersonUncheckedCreateWithoutCarePackageInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCarePackageInput
    upsert?: PersonUpsertWithoutCarePackageInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutCarePackageInput, PersonUpdateWithoutCarePackageInput>, PersonUncheckedUpdateWithoutCarePackageInput>
  }

  export type CarePackageScheduleUpdateOneRequiredWithoutCarePackageNestedInput = {
    create?: XOR<CarePackageScheduleCreateWithoutCarePackageInput, CarePackageScheduleUncheckedCreateWithoutCarePackageInput>
    connectOrCreate?: CarePackageScheduleCreateOrConnectWithoutCarePackageInput
    upsert?: CarePackageScheduleUpsertWithoutCarePackageInput
    connect?: CarePackageScheduleWhereUniqueInput
    update?: XOR<XOR<CarePackageScheduleUpdateToOneWithWhereWithoutCarePackageInput, CarePackageScheduleUpdateWithoutCarePackageInput>, CarePackageScheduleUncheckedUpdateWithoutCarePackageInput>
  }

  export type UserUpdateOneRequiredWithoutCarePackageCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCarePackageCreatedByInput, UserUncheckedCreateWithoutCarePackageCreatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarePackageCreatedByInput
    upsert?: UserUpsertWithoutCarePackageCreatedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarePackageCreatedByInput, UserUpdateWithoutCarePackageCreatedByInput>, UserUncheckedUpdateWithoutCarePackageCreatedByInput>
  }

  export type UserUpdateOneRequiredWithoutCarePackageUpdatedByNestedInput = {
    create?: XOR<UserCreateWithoutCarePackageUpdatedByInput, UserUncheckedCreateWithoutCarePackageUpdatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarePackageUpdatedByInput
    upsert?: UserUpsertWithoutCarePackageUpdatedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarePackageUpdatedByInput, UserUpdateWithoutCarePackageUpdatedByInput>, UserUncheckedUpdateWithoutCarePackageUpdatedByInput>
  }

  export type CarePackageCreateNestedManyWithoutCarePackageScheduleInput = {
    create?: XOR<CarePackageCreateWithoutCarePackageScheduleInput, CarePackageUncheckedCreateWithoutCarePackageScheduleInput> | CarePackageCreateWithoutCarePackageScheduleInput[] | CarePackageUncheckedCreateWithoutCarePackageScheduleInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutCarePackageScheduleInput | CarePackageCreateOrConnectWithoutCarePackageScheduleInput[]
    createMany?: CarePackageCreateManyCarePackageScheduleInputEnvelope
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
  }

  export type CarePackageUncheckedCreateNestedManyWithoutCarePackageScheduleInput = {
    create?: XOR<CarePackageCreateWithoutCarePackageScheduleInput, CarePackageUncheckedCreateWithoutCarePackageScheduleInput> | CarePackageCreateWithoutCarePackageScheduleInput[] | CarePackageUncheckedCreateWithoutCarePackageScheduleInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutCarePackageScheduleInput | CarePackageCreateOrConnectWithoutCarePackageScheduleInput[]
    createMany?: CarePackageCreateManyCarePackageScheduleInputEnvelope
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
  }

  export type CarePackageUpdateManyWithoutCarePackageScheduleNestedInput = {
    create?: XOR<CarePackageCreateWithoutCarePackageScheduleInput, CarePackageUncheckedCreateWithoutCarePackageScheduleInput> | CarePackageCreateWithoutCarePackageScheduleInput[] | CarePackageUncheckedCreateWithoutCarePackageScheduleInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutCarePackageScheduleInput | CarePackageCreateOrConnectWithoutCarePackageScheduleInput[]
    upsert?: CarePackageUpsertWithWhereUniqueWithoutCarePackageScheduleInput | CarePackageUpsertWithWhereUniqueWithoutCarePackageScheduleInput[]
    createMany?: CarePackageCreateManyCarePackageScheduleInputEnvelope
    set?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    disconnect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    delete?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    update?: CarePackageUpdateWithWhereUniqueWithoutCarePackageScheduleInput | CarePackageUpdateWithWhereUniqueWithoutCarePackageScheduleInput[]
    updateMany?: CarePackageUpdateManyWithWhereWithoutCarePackageScheduleInput | CarePackageUpdateManyWithWhereWithoutCarePackageScheduleInput[]
    deleteMany?: CarePackageScalarWhereInput | CarePackageScalarWhereInput[]
  }

  export type CarePackageUncheckedUpdateManyWithoutCarePackageScheduleNestedInput = {
    create?: XOR<CarePackageCreateWithoutCarePackageScheduleInput, CarePackageUncheckedCreateWithoutCarePackageScheduleInput> | CarePackageCreateWithoutCarePackageScheduleInput[] | CarePackageUncheckedCreateWithoutCarePackageScheduleInput[]
    connectOrCreate?: CarePackageCreateOrConnectWithoutCarePackageScheduleInput | CarePackageCreateOrConnectWithoutCarePackageScheduleInput[]
    upsert?: CarePackageUpsertWithWhereUniqueWithoutCarePackageScheduleInput | CarePackageUpsertWithWhereUniqueWithoutCarePackageScheduleInput[]
    createMany?: CarePackageCreateManyCarePackageScheduleInputEnvelope
    set?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    disconnect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    delete?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    connect?: CarePackageWhereUniqueInput | CarePackageWhereUniqueInput[]
    update?: CarePackageUpdateWithWhereUniqueWithoutCarePackageScheduleInput | CarePackageUpdateWithWhereUniqueWithoutCarePackageScheduleInput[]
    updateMany?: CarePackageUpdateManyWithWhereWithoutCarePackageScheduleInput | CarePackageUpdateManyWithWhereWithoutCarePackageScheduleInput[]
    deleteMany?: CarePackageScalarWhereInput | CarePackageScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PersonCreateWithoutCreatedByInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    createdAt: Date | string
    updatedAt: Date | string
    UpdatedBy: UserCreateNestedOneWithoutPersonUpdatedByInput
    Child?: ChildCreateNestedManyWithoutPersonResponsibleInput
    CarePackage?: CarePackageCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
    Child?: ChildUncheckedCreateNestedManyWithoutPersonResponsibleInput
    CarePackage?: CarePackageUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutCreatedByInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutCreatedByInput, PersonUncheckedCreateWithoutCreatedByInput>
  }

  export type PersonCreateManyCreatedByInputEnvelope = {
    data: PersonCreateManyCreatedByInput | PersonCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type PersonCreateWithoutUpdatedByInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    createdAt: Date | string
    updatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutPersonCreatedByInput
    Child?: ChildCreateNestedManyWithoutPersonResponsibleInput
    CarePackage?: CarePackageCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    createdBy: string
    createdAt: Date | string
    updatedAt: Date | string
    Child?: ChildUncheckedCreateNestedManyWithoutPersonResponsibleInput
    CarePackage?: CarePackageUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutUpdatedByInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutUpdatedByInput, PersonUncheckedCreateWithoutUpdatedByInput>
  }

  export type PersonCreateManyUpdatedByInputEnvelope = {
    data: PersonCreateManyUpdatedByInput | PersonCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type ChildCreateWithoutCreatedByInput = {
    id?: string
    name: string
    lastName: string
    dateBirh: Date | string
    createdAt: Date | string
    updatedAt: Date | string
    PersonResponsible: PersonCreateNestedOneWithoutChildInput
    UpdatedBy: UserCreateNestedOneWithoutChildUpdatedByInput
  }

  export type ChildUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    lastName: string
    dateBirh: Date | string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
    responsibleId: string
  }

  export type ChildCreateOrConnectWithoutCreatedByInput = {
    where: ChildWhereUniqueInput
    create: XOR<ChildCreateWithoutCreatedByInput, ChildUncheckedCreateWithoutCreatedByInput>
  }

  export type ChildCreateManyCreatedByInputEnvelope = {
    data: ChildCreateManyCreatedByInput | ChildCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ChildCreateWithoutUpdatedByInput = {
    id?: string
    name: string
    lastName: string
    dateBirh: Date | string
    createdAt: Date | string
    updatedAt: Date | string
    PersonResponsible: PersonCreateNestedOneWithoutChildInput
    CreatedBy: UserCreateNestedOneWithoutChildCreatedByInput
  }

  export type ChildUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    name: string
    lastName: string
    dateBirh: Date | string
    createdBy: string
    createdAt: Date | string
    updatedAt: Date | string
    responsibleId: string
  }

  export type ChildCreateOrConnectWithoutUpdatedByInput = {
    where: ChildWhereUniqueInput
    create: XOR<ChildCreateWithoutUpdatedByInput, ChildUncheckedCreateWithoutUpdatedByInput>
  }

  export type ChildCreateManyUpdatedByInputEnvelope = {
    data: ChildCreateManyUpdatedByInput | ChildCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type TypeCarePackageCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt: Date | string
    updatedAt: Date | string
    UpdatedBy: UserCreateNestedOneWithoutTypeCarePackageUpdatedByInput
    CarePackage?: CarePackageCreateNestedManyWithoutTypeCarePackageInput
  }

  export type TypeCarePackageUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
    CarePackage?: CarePackageUncheckedCreateNestedManyWithoutTypeCarePackageInput
  }

  export type TypeCarePackageCreateOrConnectWithoutCreatedByInput = {
    where: TypeCarePackageWhereUniqueInput
    create: XOR<TypeCarePackageCreateWithoutCreatedByInput, TypeCarePackageUncheckedCreateWithoutCreatedByInput>
  }

  export type TypeCarePackageCreateManyCreatedByInputEnvelope = {
    data: TypeCarePackageCreateManyCreatedByInput | TypeCarePackageCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TypeCarePackageCreateWithoutUpdatedByInput = {
    id?: string
    name: string
    createdAt: Date | string
    updatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutTypeCarePackageCreatedByInput
    CarePackage?: CarePackageCreateNestedManyWithoutTypeCarePackageInput
  }

  export type TypeCarePackageUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    name: string
    createdBy: string
    createdAt: Date | string
    updatedAt: Date | string
    CarePackage?: CarePackageUncheckedCreateNestedManyWithoutTypeCarePackageInput
  }

  export type TypeCarePackageCreateOrConnectWithoutUpdatedByInput = {
    where: TypeCarePackageWhereUniqueInput
    create: XOR<TypeCarePackageCreateWithoutUpdatedByInput, TypeCarePackageUncheckedCreateWithoutUpdatedByInput>
  }

  export type TypeCarePackageCreateManyUpdatedByInputEnvelope = {
    data: TypeCarePackageCreateManyUpdatedByInput | TypeCarePackageCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type CarePackageItemCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt: Date | string
    updatedAt: Date | string
    UpdatedBy: UserCreateNestedOneWithoutCarePackageItemUpdatedByInput
  }

  export type CarePackageItemUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageItemCreateOrConnectWithoutCreatedByInput = {
    where: CarePackageItemWhereUniqueInput
    create: XOR<CarePackageItemCreateWithoutCreatedByInput, CarePackageItemUncheckedCreateWithoutCreatedByInput>
  }

  export type CarePackageItemCreateManyCreatedByInputEnvelope = {
    data: CarePackageItemCreateManyCreatedByInput | CarePackageItemCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CarePackageItemCreateWithoutUpdatedByInput = {
    id?: string
    name: string
    createdAt: Date | string
    updatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutCarePackageItemCreatedByInput
  }

  export type CarePackageItemUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    name: string
    createdBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageItemCreateOrConnectWithoutUpdatedByInput = {
    where: CarePackageItemWhereUniqueInput
    create: XOR<CarePackageItemCreateWithoutUpdatedByInput, CarePackageItemUncheckedCreateWithoutUpdatedByInput>
  }

  export type CarePackageItemCreateManyUpdatedByInputEnvelope = {
    data: CarePackageItemCreateManyUpdatedByInput | CarePackageItemCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type CarePackageCreateWithoutCreatedByInput = {
    id?: string
    numberControl?: number
    createdAt: Date | string
    updatedAt: Date | string
    TypeCarePackage: TypeCarePackageCreateNestedOneWithoutCarePackageInput
    Person: PersonCreateNestedOneWithoutCarePackageInput
    CarePackageSchedule: CarePackageScheduleCreateNestedOneWithoutCarePackageInput
    UpdatedBy: UserCreateNestedOneWithoutCarePackageUpdatedByInput
  }

  export type CarePackageUncheckedCreateWithoutCreatedByInput = {
    id?: string
    numberControl?: number
    typeCarePackageId: string
    personId: string
    carePackageScheduleId: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageCreateOrConnectWithoutCreatedByInput = {
    where: CarePackageWhereUniqueInput
    create: XOR<CarePackageCreateWithoutCreatedByInput, CarePackageUncheckedCreateWithoutCreatedByInput>
  }

  export type CarePackageCreateManyCreatedByInputEnvelope = {
    data: CarePackageCreateManyCreatedByInput | CarePackageCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CarePackageCreateWithoutUpdatedByInput = {
    id?: string
    numberControl?: number
    createdAt: Date | string
    updatedAt: Date | string
    TypeCarePackage: TypeCarePackageCreateNestedOneWithoutCarePackageInput
    Person: PersonCreateNestedOneWithoutCarePackageInput
    CarePackageSchedule: CarePackageScheduleCreateNestedOneWithoutCarePackageInput
    CreatedBy: UserCreateNestedOneWithoutCarePackageCreatedByInput
  }

  export type CarePackageUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    numberControl?: number
    typeCarePackageId: string
    personId: string
    carePackageScheduleId: string
    createdBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageCreateOrConnectWithoutUpdatedByInput = {
    where: CarePackageWhereUniqueInput
    create: XOR<CarePackageCreateWithoutUpdatedByInput, CarePackageUncheckedCreateWithoutUpdatedByInput>
  }

  export type CarePackageCreateManyUpdatedByInputEnvelope = {
    data: CarePackageCreateManyUpdatedByInput | CarePackageCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutCreatedByInput, PersonUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PersonCreateWithoutCreatedByInput, PersonUncheckedCreateWithoutCreatedByInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutCreatedByInput, PersonUncheckedUpdateWithoutCreatedByInput>
  }

  export type PersonUpdateManyWithWhereWithoutCreatedByInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PersonScalarWhereInput = {
    AND?: PersonScalarWhereInput | PersonScalarWhereInput[]
    OR?: PersonScalarWhereInput[]
    NOT?: PersonScalarWhereInput | PersonScalarWhereInput[]
    id?: StringFilter<"Person"> | string
    name?: StringFilter<"Person"> | string
    lastName?: StringFilter<"Person"> | string
    document?: IntFilter<"Person"> | number
    hasChild?: BoolFilter<"Person"> | boolean
    dateBirth?: DateTimeFilter<"Person"> | Date | string
    gender?: StringFilter<"Person"> | string
    createdBy?: StringFilter<"Person"> | string
    updatedBy?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
  }

  export type PersonUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutUpdatedByInput, PersonUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<PersonCreateWithoutUpdatedByInput, PersonUncheckedCreateWithoutUpdatedByInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutUpdatedByInput, PersonUncheckedUpdateWithoutUpdatedByInput>
  }

  export type PersonUpdateManyWithWhereWithoutUpdatedByInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type ChildUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ChildWhereUniqueInput
    update: XOR<ChildUpdateWithoutCreatedByInput, ChildUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ChildCreateWithoutCreatedByInput, ChildUncheckedCreateWithoutCreatedByInput>
  }

  export type ChildUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ChildWhereUniqueInput
    data: XOR<ChildUpdateWithoutCreatedByInput, ChildUncheckedUpdateWithoutCreatedByInput>
  }

  export type ChildUpdateManyWithWhereWithoutCreatedByInput = {
    where: ChildScalarWhereInput
    data: XOR<ChildUpdateManyMutationInput, ChildUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ChildScalarWhereInput = {
    AND?: ChildScalarWhereInput | ChildScalarWhereInput[]
    OR?: ChildScalarWhereInput[]
    NOT?: ChildScalarWhereInput | ChildScalarWhereInput[]
    id?: StringFilter<"Child"> | string
    name?: StringFilter<"Child"> | string
    lastName?: StringFilter<"Child"> | string
    dateBirh?: DateTimeFilter<"Child"> | Date | string
    createdBy?: StringFilter<"Child"> | string
    updatedBy?: StringFilter<"Child"> | string
    createdAt?: DateTimeFilter<"Child"> | Date | string
    updatedAt?: DateTimeFilter<"Child"> | Date | string
    responsibleId?: StringFilter<"Child"> | string
  }

  export type ChildUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: ChildWhereUniqueInput
    update: XOR<ChildUpdateWithoutUpdatedByInput, ChildUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<ChildCreateWithoutUpdatedByInput, ChildUncheckedCreateWithoutUpdatedByInput>
  }

  export type ChildUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: ChildWhereUniqueInput
    data: XOR<ChildUpdateWithoutUpdatedByInput, ChildUncheckedUpdateWithoutUpdatedByInput>
  }

  export type ChildUpdateManyWithWhereWithoutUpdatedByInput = {
    where: ChildScalarWhereInput
    data: XOR<ChildUpdateManyMutationInput, ChildUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type TypeCarePackageUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TypeCarePackageWhereUniqueInput
    update: XOR<TypeCarePackageUpdateWithoutCreatedByInput, TypeCarePackageUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TypeCarePackageCreateWithoutCreatedByInput, TypeCarePackageUncheckedCreateWithoutCreatedByInput>
  }

  export type TypeCarePackageUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TypeCarePackageWhereUniqueInput
    data: XOR<TypeCarePackageUpdateWithoutCreatedByInput, TypeCarePackageUncheckedUpdateWithoutCreatedByInput>
  }

  export type TypeCarePackageUpdateManyWithWhereWithoutCreatedByInput = {
    where: TypeCarePackageScalarWhereInput
    data: XOR<TypeCarePackageUpdateManyMutationInput, TypeCarePackageUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TypeCarePackageScalarWhereInput = {
    AND?: TypeCarePackageScalarWhereInput | TypeCarePackageScalarWhereInput[]
    OR?: TypeCarePackageScalarWhereInput[]
    NOT?: TypeCarePackageScalarWhereInput | TypeCarePackageScalarWhereInput[]
    id?: StringFilter<"TypeCarePackage"> | string
    name?: StringFilter<"TypeCarePackage"> | string
    createdBy?: StringFilter<"TypeCarePackage"> | string
    updatedBy?: StringFilter<"TypeCarePackage"> | string
    createdAt?: DateTimeFilter<"TypeCarePackage"> | Date | string
    updatedAt?: DateTimeFilter<"TypeCarePackage"> | Date | string
  }

  export type TypeCarePackageUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: TypeCarePackageWhereUniqueInput
    update: XOR<TypeCarePackageUpdateWithoutUpdatedByInput, TypeCarePackageUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<TypeCarePackageCreateWithoutUpdatedByInput, TypeCarePackageUncheckedCreateWithoutUpdatedByInput>
  }

  export type TypeCarePackageUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: TypeCarePackageWhereUniqueInput
    data: XOR<TypeCarePackageUpdateWithoutUpdatedByInput, TypeCarePackageUncheckedUpdateWithoutUpdatedByInput>
  }

  export type TypeCarePackageUpdateManyWithWhereWithoutUpdatedByInput = {
    where: TypeCarePackageScalarWhereInput
    data: XOR<TypeCarePackageUpdateManyMutationInput, TypeCarePackageUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type CarePackageItemUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CarePackageItemWhereUniqueInput
    update: XOR<CarePackageItemUpdateWithoutCreatedByInput, CarePackageItemUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CarePackageItemCreateWithoutCreatedByInput, CarePackageItemUncheckedCreateWithoutCreatedByInput>
  }

  export type CarePackageItemUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CarePackageItemWhereUniqueInput
    data: XOR<CarePackageItemUpdateWithoutCreatedByInput, CarePackageItemUncheckedUpdateWithoutCreatedByInput>
  }

  export type CarePackageItemUpdateManyWithWhereWithoutCreatedByInput = {
    where: CarePackageItemScalarWhereInput
    data: XOR<CarePackageItemUpdateManyMutationInput, CarePackageItemUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CarePackageItemScalarWhereInput = {
    AND?: CarePackageItemScalarWhereInput | CarePackageItemScalarWhereInput[]
    OR?: CarePackageItemScalarWhereInput[]
    NOT?: CarePackageItemScalarWhereInput | CarePackageItemScalarWhereInput[]
    id?: StringFilter<"CarePackageItem"> | string
    name?: StringFilter<"CarePackageItem"> | string
    createdBy?: StringFilter<"CarePackageItem"> | string
    updatedBy?: StringFilter<"CarePackageItem"> | string
    createdAt?: DateTimeFilter<"CarePackageItem"> | Date | string
    updatedAt?: DateTimeFilter<"CarePackageItem"> | Date | string
  }

  export type CarePackageItemUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: CarePackageItemWhereUniqueInput
    update: XOR<CarePackageItemUpdateWithoutUpdatedByInput, CarePackageItemUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<CarePackageItemCreateWithoutUpdatedByInput, CarePackageItemUncheckedCreateWithoutUpdatedByInput>
  }

  export type CarePackageItemUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: CarePackageItemWhereUniqueInput
    data: XOR<CarePackageItemUpdateWithoutUpdatedByInput, CarePackageItemUncheckedUpdateWithoutUpdatedByInput>
  }

  export type CarePackageItemUpdateManyWithWhereWithoutUpdatedByInput = {
    where: CarePackageItemScalarWhereInput
    data: XOR<CarePackageItemUpdateManyMutationInput, CarePackageItemUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type CarePackageUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CarePackageWhereUniqueInput
    update: XOR<CarePackageUpdateWithoutCreatedByInput, CarePackageUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CarePackageCreateWithoutCreatedByInput, CarePackageUncheckedCreateWithoutCreatedByInput>
  }

  export type CarePackageUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CarePackageWhereUniqueInput
    data: XOR<CarePackageUpdateWithoutCreatedByInput, CarePackageUncheckedUpdateWithoutCreatedByInput>
  }

  export type CarePackageUpdateManyWithWhereWithoutCreatedByInput = {
    where: CarePackageScalarWhereInput
    data: XOR<CarePackageUpdateManyMutationInput, CarePackageUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CarePackageScalarWhereInput = {
    AND?: CarePackageScalarWhereInput | CarePackageScalarWhereInput[]
    OR?: CarePackageScalarWhereInput[]
    NOT?: CarePackageScalarWhereInput | CarePackageScalarWhereInput[]
    id?: StringFilter<"CarePackage"> | string
    numberControl?: IntFilter<"CarePackage"> | number
    typeCarePackageId?: StringFilter<"CarePackage"> | string
    personId?: StringFilter<"CarePackage"> | string
    carePackageScheduleId?: StringFilter<"CarePackage"> | string
    createdBy?: StringFilter<"CarePackage"> | string
    updatedBy?: StringFilter<"CarePackage"> | string
    createdAt?: DateTimeFilter<"CarePackage"> | Date | string
    updatedAt?: DateTimeFilter<"CarePackage"> | Date | string
  }

  export type CarePackageUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: CarePackageWhereUniqueInput
    update: XOR<CarePackageUpdateWithoutUpdatedByInput, CarePackageUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<CarePackageCreateWithoutUpdatedByInput, CarePackageUncheckedCreateWithoutUpdatedByInput>
  }

  export type CarePackageUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: CarePackageWhereUniqueInput
    data: XOR<CarePackageUpdateWithoutUpdatedByInput, CarePackageUncheckedUpdateWithoutUpdatedByInput>
  }

  export type CarePackageUpdateManyWithWhereWithoutUpdatedByInput = {
    where: CarePackageScalarWhereInput
    data: XOR<CarePackageUpdateManyMutationInput, CarePackageUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type UserCreateWithoutPersonCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonUpdatedBy?: PersonCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutPersonCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonUpdatedBy?: PersonUncheckedCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildUncheckedCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildUncheckedCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutPersonCreatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonCreatedByInput, UserUncheckedCreateWithoutPersonCreatedByInput>
  }

  export type UserCreateWithoutPersonUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonCreateNestedManyWithoutCreatedByInput
    ChildCreatedBy?: ChildCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutPersonUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonUncheckedCreateNestedManyWithoutCreatedByInput
    ChildCreatedBy?: ChildUncheckedCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildUncheckedCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutPersonUpdatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonUpdatedByInput, UserUncheckedCreateWithoutPersonUpdatedByInput>
  }

  export type ChildCreateWithoutPersonResponsibleInput = {
    id?: string
    name: string
    lastName: string
    dateBirh: Date | string
    createdAt: Date | string
    updatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutChildCreatedByInput
    UpdatedBy: UserCreateNestedOneWithoutChildUpdatedByInput
  }

  export type ChildUncheckedCreateWithoutPersonResponsibleInput = {
    id?: string
    name: string
    lastName: string
    dateBirh: Date | string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ChildCreateOrConnectWithoutPersonResponsibleInput = {
    where: ChildWhereUniqueInput
    create: XOR<ChildCreateWithoutPersonResponsibleInput, ChildUncheckedCreateWithoutPersonResponsibleInput>
  }

  export type ChildCreateManyPersonResponsibleInputEnvelope = {
    data: ChildCreateManyPersonResponsibleInput | ChildCreateManyPersonResponsibleInput[]
    skipDuplicates?: boolean
  }

  export type CarePackageCreateWithoutPersonInput = {
    id?: string
    numberControl?: number
    createdAt: Date | string
    updatedAt: Date | string
    TypeCarePackage: TypeCarePackageCreateNestedOneWithoutCarePackageInput
    CarePackageSchedule: CarePackageScheduleCreateNestedOneWithoutCarePackageInput
    CreatedBy: UserCreateNestedOneWithoutCarePackageCreatedByInput
    UpdatedBy: UserCreateNestedOneWithoutCarePackageUpdatedByInput
  }

  export type CarePackageUncheckedCreateWithoutPersonInput = {
    id?: string
    numberControl?: number
    typeCarePackageId: string
    carePackageScheduleId: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageCreateOrConnectWithoutPersonInput = {
    where: CarePackageWhereUniqueInput
    create: XOR<CarePackageCreateWithoutPersonInput, CarePackageUncheckedCreateWithoutPersonInput>
  }

  export type CarePackageCreateManyPersonInputEnvelope = {
    data: CarePackageCreateManyPersonInput | CarePackageCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPersonCreatedByInput = {
    update: XOR<UserUpdateWithoutPersonCreatedByInput, UserUncheckedUpdateWithoutPersonCreatedByInput>
    create: XOR<UserCreateWithoutPersonCreatedByInput, UserUncheckedCreateWithoutPersonCreatedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonCreatedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonCreatedByInput, UserUncheckedUpdateWithoutPersonCreatedByInput>
  }

  export type UserUpdateWithoutPersonCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonUpdatedBy?: PersonUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonUpdatedBy?: PersonUncheckedUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUncheckedUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUncheckedUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUpsertWithoutPersonUpdatedByInput = {
    update: XOR<UserUpdateWithoutPersonUpdatedByInput, UserUncheckedUpdateWithoutPersonUpdatedByInput>
    create: XOR<UserCreateWithoutPersonUpdatedByInput, UserUncheckedCreateWithoutPersonUpdatedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonUpdatedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonUpdatedByInput, UserUncheckedUpdateWithoutPersonUpdatedByInput>
  }

  export type UserUpdateWithoutPersonUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUpdateManyWithoutCreatedByNestedInput
    ChildCreatedBy?: ChildUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUncheckedUpdateManyWithoutCreatedByNestedInput
    ChildCreatedBy?: ChildUncheckedUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUncheckedUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type ChildUpsertWithWhereUniqueWithoutPersonResponsibleInput = {
    where: ChildWhereUniqueInput
    update: XOR<ChildUpdateWithoutPersonResponsibleInput, ChildUncheckedUpdateWithoutPersonResponsibleInput>
    create: XOR<ChildCreateWithoutPersonResponsibleInput, ChildUncheckedCreateWithoutPersonResponsibleInput>
  }

  export type ChildUpdateWithWhereUniqueWithoutPersonResponsibleInput = {
    where: ChildWhereUniqueInput
    data: XOR<ChildUpdateWithoutPersonResponsibleInput, ChildUncheckedUpdateWithoutPersonResponsibleInput>
  }

  export type ChildUpdateManyWithWhereWithoutPersonResponsibleInput = {
    where: ChildScalarWhereInput
    data: XOR<ChildUpdateManyMutationInput, ChildUncheckedUpdateManyWithoutPersonResponsibleInput>
  }

  export type CarePackageUpsertWithWhereUniqueWithoutPersonInput = {
    where: CarePackageWhereUniqueInput
    update: XOR<CarePackageUpdateWithoutPersonInput, CarePackageUncheckedUpdateWithoutPersonInput>
    create: XOR<CarePackageCreateWithoutPersonInput, CarePackageUncheckedCreateWithoutPersonInput>
  }

  export type CarePackageUpdateWithWhereUniqueWithoutPersonInput = {
    where: CarePackageWhereUniqueInput
    data: XOR<CarePackageUpdateWithoutPersonInput, CarePackageUncheckedUpdateWithoutPersonInput>
  }

  export type CarePackageUpdateManyWithWhereWithoutPersonInput = {
    where: CarePackageScalarWhereInput
    data: XOR<CarePackageUpdateManyMutationInput, CarePackageUncheckedUpdateManyWithoutPersonInput>
  }

  export type PersonCreateWithoutChildInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    createdAt: Date | string
    updatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutPersonCreatedByInput
    UpdatedBy: UserCreateNestedOneWithoutPersonUpdatedByInput
    CarePackage?: CarePackageCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutChildInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
    CarePackage?: CarePackageUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutChildInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutChildInput, PersonUncheckedCreateWithoutChildInput>
  }

  export type UserCreateWithoutChildCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonCreateNestedManyWithoutUpdatedByInput
    ChildUpdatedBy?: ChildCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutChildCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonUncheckedCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonUncheckedCreateNestedManyWithoutUpdatedByInput
    ChildUpdatedBy?: ChildUncheckedCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutChildCreatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChildCreatedByInput, UserUncheckedCreateWithoutChildCreatedByInput>
  }

  export type UserCreateWithoutChildUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildCreateNestedManyWithoutCreatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutChildUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonUncheckedCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonUncheckedCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildUncheckedCreateNestedManyWithoutCreatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutChildUpdatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChildUpdatedByInput, UserUncheckedCreateWithoutChildUpdatedByInput>
  }

  export type PersonUpsertWithoutChildInput = {
    update: XOR<PersonUpdateWithoutChildInput, PersonUncheckedUpdateWithoutChildInput>
    create: XOR<PersonCreateWithoutChildInput, PersonUncheckedCreateWithoutChildInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutChildInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutChildInput, PersonUncheckedUpdateWithoutChildInput>
  }

  export type PersonUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutPersonCreatedByNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutPersonUpdatedByNestedInput
    CarePackage?: CarePackageUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CarePackage?: CarePackageUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type UserUpsertWithoutChildCreatedByInput = {
    update: XOR<UserUpdateWithoutChildCreatedByInput, UserUncheckedUpdateWithoutChildCreatedByInput>
    create: XOR<UserCreateWithoutChildCreatedByInput, UserUncheckedCreateWithoutChildCreatedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChildCreatedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChildCreatedByInput, UserUncheckedUpdateWithoutChildCreatedByInput>
  }

  export type UserUpdateWithoutChildCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUpdateManyWithoutUpdatedByNestedInput
    ChildUpdatedBy?: ChildUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutChildCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUncheckedUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUncheckedUpdateManyWithoutUpdatedByNestedInput
    ChildUpdatedBy?: ChildUncheckedUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUpsertWithoutChildUpdatedByInput = {
    update: XOR<UserUpdateWithoutChildUpdatedByInput, UserUncheckedUpdateWithoutChildUpdatedByInput>
    create: XOR<UserCreateWithoutChildUpdatedByInput, UserUncheckedCreateWithoutChildUpdatedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChildUpdatedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChildUpdatedByInput, UserUncheckedUpdateWithoutChildUpdatedByInput>
  }

  export type UserUpdateWithoutChildUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutChildUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUncheckedUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUncheckedUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUncheckedUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserCreateWithoutTypeCarePackageCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutTypeCarePackageCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonUncheckedCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonUncheckedCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildUncheckedCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildUncheckedCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutTypeCarePackageCreatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTypeCarePackageCreatedByInput, UserUncheckedCreateWithoutTypeCarePackageCreatedByInput>
  }

  export type UserCreateWithoutTypeCarePackageUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageCreateNestedManyWithoutCreatedByInput
    CarePackageItemCreatedBy?: CarePackageItemCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutTypeCarePackageUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonUncheckedCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonUncheckedCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildUncheckedCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildUncheckedCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutTypeCarePackageUpdatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTypeCarePackageUpdatedByInput, UserUncheckedCreateWithoutTypeCarePackageUpdatedByInput>
  }

  export type CarePackageCreateWithoutTypeCarePackageInput = {
    id?: string
    numberControl?: number
    createdAt: Date | string
    updatedAt: Date | string
    Person: PersonCreateNestedOneWithoutCarePackageInput
    CarePackageSchedule: CarePackageScheduleCreateNestedOneWithoutCarePackageInput
    CreatedBy: UserCreateNestedOneWithoutCarePackageCreatedByInput
    UpdatedBy: UserCreateNestedOneWithoutCarePackageUpdatedByInput
  }

  export type CarePackageUncheckedCreateWithoutTypeCarePackageInput = {
    id?: string
    numberControl?: number
    personId: string
    carePackageScheduleId: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageCreateOrConnectWithoutTypeCarePackageInput = {
    where: CarePackageWhereUniqueInput
    create: XOR<CarePackageCreateWithoutTypeCarePackageInput, CarePackageUncheckedCreateWithoutTypeCarePackageInput>
  }

  export type CarePackageCreateManyTypeCarePackageInputEnvelope = {
    data: CarePackageCreateManyTypeCarePackageInput | CarePackageCreateManyTypeCarePackageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTypeCarePackageCreatedByInput = {
    update: XOR<UserUpdateWithoutTypeCarePackageCreatedByInput, UserUncheckedUpdateWithoutTypeCarePackageCreatedByInput>
    create: XOR<UserCreateWithoutTypeCarePackageCreatedByInput, UserUncheckedCreateWithoutTypeCarePackageCreatedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTypeCarePackageCreatedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTypeCarePackageCreatedByInput, UserUncheckedUpdateWithoutTypeCarePackageCreatedByInput>
  }

  export type UserUpdateWithoutTypeCarePackageCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTypeCarePackageCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUncheckedUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUncheckedUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUncheckedUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUncheckedUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUpsertWithoutTypeCarePackageUpdatedByInput = {
    update: XOR<UserUpdateWithoutTypeCarePackageUpdatedByInput, UserUncheckedUpdateWithoutTypeCarePackageUpdatedByInput>
    create: XOR<UserCreateWithoutTypeCarePackageUpdatedByInput, UserUncheckedCreateWithoutTypeCarePackageUpdatedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTypeCarePackageUpdatedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTypeCarePackageUpdatedByInput, UserUncheckedUpdateWithoutTypeCarePackageUpdatedByInput>
  }

  export type UserUpdateWithoutTypeCarePackageUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUpdateManyWithoutCreatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTypeCarePackageUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUncheckedUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUncheckedUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUncheckedUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUncheckedUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CarePackageUpsertWithWhereUniqueWithoutTypeCarePackageInput = {
    where: CarePackageWhereUniqueInput
    update: XOR<CarePackageUpdateWithoutTypeCarePackageInput, CarePackageUncheckedUpdateWithoutTypeCarePackageInput>
    create: XOR<CarePackageCreateWithoutTypeCarePackageInput, CarePackageUncheckedCreateWithoutTypeCarePackageInput>
  }

  export type CarePackageUpdateWithWhereUniqueWithoutTypeCarePackageInput = {
    where: CarePackageWhereUniqueInput
    data: XOR<CarePackageUpdateWithoutTypeCarePackageInput, CarePackageUncheckedUpdateWithoutTypeCarePackageInput>
  }

  export type CarePackageUpdateManyWithWhereWithoutTypeCarePackageInput = {
    where: CarePackageScalarWhereInput
    data: XOR<CarePackageUpdateManyMutationInput, CarePackageUncheckedUpdateManyWithoutTypeCarePackageInput>
  }

  export type UserCreateWithoutCarePackageItemCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageCreateNestedManyWithoutUpdatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutCarePackageItemCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonUncheckedCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonUncheckedCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildUncheckedCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildUncheckedCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutCarePackageItemCreatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarePackageItemCreatedByInput, UserUncheckedCreateWithoutCarePackageItemCreatedByInput>
  }

  export type UserCreateWithoutCarePackageItemUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemCreateNestedManyWithoutCreatedByInput
    CarePackageCreatedBy?: CarePackageCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutCarePackageItemUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonUncheckedCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonUncheckedCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildUncheckedCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildUncheckedCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageCreatedBy?: CarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageUpdatedBy?: CarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutCarePackageItemUpdatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarePackageItemUpdatedByInput, UserUncheckedCreateWithoutCarePackageItemUpdatedByInput>
  }

  export type UserUpsertWithoutCarePackageItemCreatedByInput = {
    update: XOR<UserUpdateWithoutCarePackageItemCreatedByInput, UserUncheckedUpdateWithoutCarePackageItemCreatedByInput>
    create: XOR<UserCreateWithoutCarePackageItemCreatedByInput, UserUncheckedCreateWithoutCarePackageItemCreatedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarePackageItemCreatedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarePackageItemCreatedByInput, UserUncheckedUpdateWithoutCarePackageItemCreatedByInput>
  }

  export type UserUpdateWithoutCarePackageItemCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCarePackageItemCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUncheckedUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUncheckedUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUncheckedUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUncheckedUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUpsertWithoutCarePackageItemUpdatedByInput = {
    update: XOR<UserUpdateWithoutCarePackageItemUpdatedByInput, UserUncheckedUpdateWithoutCarePackageItemUpdatedByInput>
    create: XOR<UserCreateWithoutCarePackageItemUpdatedByInput, UserUncheckedCreateWithoutCarePackageItemUpdatedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarePackageItemUpdatedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarePackageItemUpdatedByInput, UserUncheckedUpdateWithoutCarePackageItemUpdatedByInput>
  }

  export type UserUpdateWithoutCarePackageItemUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUpdateManyWithoutCreatedByNestedInput
    CarePackageCreatedBy?: CarePackageUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCarePackageItemUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUncheckedUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUncheckedUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUncheckedUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUncheckedUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageCreatedBy?: CarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type TypeCarePackageCreateWithoutCarePackageInput = {
    id?: string
    name: string
    createdAt: Date | string
    updatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutTypeCarePackageCreatedByInput
    UpdatedBy: UserCreateNestedOneWithoutTypeCarePackageUpdatedByInput
  }

  export type TypeCarePackageUncheckedCreateWithoutCarePackageInput = {
    id?: string
    name: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type TypeCarePackageCreateOrConnectWithoutCarePackageInput = {
    where: TypeCarePackageWhereUniqueInput
    create: XOR<TypeCarePackageCreateWithoutCarePackageInput, TypeCarePackageUncheckedCreateWithoutCarePackageInput>
  }

  export type PersonCreateWithoutCarePackageInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    createdAt: Date | string
    updatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutPersonCreatedByInput
    UpdatedBy: UserCreateNestedOneWithoutPersonUpdatedByInput
    Child?: ChildCreateNestedManyWithoutPersonResponsibleInput
  }

  export type PersonUncheckedCreateWithoutCarePackageInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
    Child?: ChildUncheckedCreateNestedManyWithoutPersonResponsibleInput
  }

  export type PersonCreateOrConnectWithoutCarePackageInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutCarePackageInput, PersonUncheckedCreateWithoutCarePackageInput>
  }

  export type CarePackageScheduleCreateWithoutCarePackageInput = {
    id?: string
    deliveryDate: Date | string
    carePackageCount: number
  }

  export type CarePackageScheduleUncheckedCreateWithoutCarePackageInput = {
    id?: string
    deliveryDate: Date | string
    carePackageCount: number
  }

  export type CarePackageScheduleCreateOrConnectWithoutCarePackageInput = {
    where: CarePackageScheduleWhereUniqueInput
    create: XOR<CarePackageScheduleCreateWithoutCarePackageInput, CarePackageScheduleUncheckedCreateWithoutCarePackageInput>
  }

  export type UserCreateWithoutCarePackageCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemCreateNestedManyWithoutUpdatedByInput
    CarePackageUpdatedBy?: CarePackageCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutCarePackageCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonUncheckedCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonUncheckedCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildUncheckedCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildUncheckedCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageUpdatedBy?: CarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutCarePackageCreatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarePackageCreatedByInput, UserUncheckedCreateWithoutCarePackageCreatedByInput>
  }

  export type UserCreateWithoutCarePackageUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCarePackageUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt: Date | string
    modified_at?: Date | string
    PersonCreatedBy?: PersonUncheckedCreateNestedManyWithoutCreatedByInput
    PersonUpdatedBy?: PersonUncheckedCreateNestedManyWithoutUpdatedByInput
    ChildCreatedBy?: ChildUncheckedCreateNestedManyWithoutCreatedByInput
    ChildUpdatedBy?: ChildUncheckedCreateNestedManyWithoutUpdatedByInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutCreatedByInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutCreatedByInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedCreateNestedManyWithoutUpdatedByInput
    CarePackageCreatedBy?: CarePackageUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCarePackageUpdatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarePackageUpdatedByInput, UserUncheckedCreateWithoutCarePackageUpdatedByInput>
  }

  export type TypeCarePackageUpsertWithoutCarePackageInput = {
    update: XOR<TypeCarePackageUpdateWithoutCarePackageInput, TypeCarePackageUncheckedUpdateWithoutCarePackageInput>
    create: XOR<TypeCarePackageCreateWithoutCarePackageInput, TypeCarePackageUncheckedCreateWithoutCarePackageInput>
    where?: TypeCarePackageWhereInput
  }

  export type TypeCarePackageUpdateToOneWithWhereWithoutCarePackageInput = {
    where?: TypeCarePackageWhereInput
    data: XOR<TypeCarePackageUpdateWithoutCarePackageInput, TypeCarePackageUncheckedUpdateWithoutCarePackageInput>
  }

  export type TypeCarePackageUpdateWithoutCarePackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutTypeCarePackageCreatedByNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutTypeCarePackageUpdatedByNestedInput
  }

  export type TypeCarePackageUncheckedUpdateWithoutCarePackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUpsertWithoutCarePackageInput = {
    update: XOR<PersonUpdateWithoutCarePackageInput, PersonUncheckedUpdateWithoutCarePackageInput>
    create: XOR<PersonCreateWithoutCarePackageInput, PersonUncheckedCreateWithoutCarePackageInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutCarePackageInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutCarePackageInput, PersonUncheckedUpdateWithoutCarePackageInput>
  }

  export type PersonUpdateWithoutCarePackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutPersonCreatedByNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutPersonUpdatedByNestedInput
    Child?: ChildUpdateManyWithoutPersonResponsibleNestedInput
  }

  export type PersonUncheckedUpdateWithoutCarePackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Child?: ChildUncheckedUpdateManyWithoutPersonResponsibleNestedInput
  }

  export type CarePackageScheduleUpsertWithoutCarePackageInput = {
    update: XOR<CarePackageScheduleUpdateWithoutCarePackageInput, CarePackageScheduleUncheckedUpdateWithoutCarePackageInput>
    create: XOR<CarePackageScheduleCreateWithoutCarePackageInput, CarePackageScheduleUncheckedCreateWithoutCarePackageInput>
    where?: CarePackageScheduleWhereInput
  }

  export type CarePackageScheduleUpdateToOneWithWhereWithoutCarePackageInput = {
    where?: CarePackageScheduleWhereInput
    data: XOR<CarePackageScheduleUpdateWithoutCarePackageInput, CarePackageScheduleUncheckedUpdateWithoutCarePackageInput>
  }

  export type CarePackageScheduleUpdateWithoutCarePackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carePackageCount?: IntFieldUpdateOperationsInput | number
  }

  export type CarePackageScheduleUncheckedUpdateWithoutCarePackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carePackageCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutCarePackageCreatedByInput = {
    update: XOR<UserUpdateWithoutCarePackageCreatedByInput, UserUncheckedUpdateWithoutCarePackageCreatedByInput>
    create: XOR<UserCreateWithoutCarePackageCreatedByInput, UserUncheckedCreateWithoutCarePackageCreatedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarePackageCreatedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarePackageCreatedByInput, UserUncheckedUpdateWithoutCarePackageCreatedByInput>
  }

  export type UserUpdateWithoutCarePackageCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUpdateManyWithoutUpdatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCarePackageCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUncheckedUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUncheckedUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUncheckedUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUncheckedUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageUpdatedBy?: CarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUpsertWithoutCarePackageUpdatedByInput = {
    update: XOR<UserUpdateWithoutCarePackageUpdatedByInput, UserUncheckedUpdateWithoutCarePackageUpdatedByInput>
    create: XOR<UserCreateWithoutCarePackageUpdatedByInput, UserUncheckedCreateWithoutCarePackageUpdatedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarePackageUpdatedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarePackageUpdatedByInput, UserUncheckedUpdateWithoutCarePackageUpdatedByInput>
  }

  export type UserUpdateWithoutCarePackageUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCarePackageUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonCreatedBy?: PersonUncheckedUpdateManyWithoutCreatedByNestedInput
    PersonUpdatedBy?: PersonUncheckedUpdateManyWithoutUpdatedByNestedInput
    ChildCreatedBy?: ChildUncheckedUpdateManyWithoutCreatedByNestedInput
    ChildUpdatedBy?: ChildUncheckedUpdateManyWithoutUpdatedByNestedInput
    TypeCarePackageCreatedBy?: TypeCarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
    TypeCarePackageUpdatedBy?: TypeCarePackageUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageItemCreatedBy?: CarePackageItemUncheckedUpdateManyWithoutCreatedByNestedInput
    CarePackageItemUpdatedBy?: CarePackageItemUncheckedUpdateManyWithoutUpdatedByNestedInput
    CarePackageCreatedBy?: CarePackageUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type CarePackageCreateWithoutCarePackageScheduleInput = {
    id?: string
    numberControl?: number
    createdAt: Date | string
    updatedAt: Date | string
    TypeCarePackage: TypeCarePackageCreateNestedOneWithoutCarePackageInput
    Person: PersonCreateNestedOneWithoutCarePackageInput
    CreatedBy: UserCreateNestedOneWithoutCarePackageCreatedByInput
    UpdatedBy: UserCreateNestedOneWithoutCarePackageUpdatedByInput
  }

  export type CarePackageUncheckedCreateWithoutCarePackageScheduleInput = {
    id?: string
    numberControl?: number
    typeCarePackageId: string
    personId: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageCreateOrConnectWithoutCarePackageScheduleInput = {
    where: CarePackageWhereUniqueInput
    create: XOR<CarePackageCreateWithoutCarePackageScheduleInput, CarePackageUncheckedCreateWithoutCarePackageScheduleInput>
  }

  export type CarePackageCreateManyCarePackageScheduleInputEnvelope = {
    data: CarePackageCreateManyCarePackageScheduleInput | CarePackageCreateManyCarePackageScheduleInput[]
    skipDuplicates?: boolean
  }

  export type CarePackageUpsertWithWhereUniqueWithoutCarePackageScheduleInput = {
    where: CarePackageWhereUniqueInput
    update: XOR<CarePackageUpdateWithoutCarePackageScheduleInput, CarePackageUncheckedUpdateWithoutCarePackageScheduleInput>
    create: XOR<CarePackageCreateWithoutCarePackageScheduleInput, CarePackageUncheckedCreateWithoutCarePackageScheduleInput>
  }

  export type CarePackageUpdateWithWhereUniqueWithoutCarePackageScheduleInput = {
    where: CarePackageWhereUniqueInput
    data: XOR<CarePackageUpdateWithoutCarePackageScheduleInput, CarePackageUncheckedUpdateWithoutCarePackageScheduleInput>
  }

  export type CarePackageUpdateManyWithWhereWithoutCarePackageScheduleInput = {
    where: CarePackageScalarWhereInput
    data: XOR<CarePackageUpdateManyMutationInput, CarePackageUncheckedUpdateManyWithoutCarePackageScheduleInput>
  }

  export type PersonCreateManyCreatedByInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type PersonCreateManyUpdatedByInput = {
    id?: string
    name: string
    lastName: string
    document: number
    hasChild: boolean
    dateBirth: Date | string
    gender: string
    createdBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ChildCreateManyCreatedByInput = {
    id?: string
    name: string
    lastName: string
    dateBirh: Date | string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
    responsibleId: string
  }

  export type ChildCreateManyUpdatedByInput = {
    id?: string
    name: string
    lastName: string
    dateBirh: Date | string
    createdBy: string
    createdAt: Date | string
    updatedAt: Date | string
    responsibleId: string
  }

  export type TypeCarePackageCreateManyCreatedByInput = {
    id?: string
    name: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type TypeCarePackageCreateManyUpdatedByInput = {
    id?: string
    name: string
    createdBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageItemCreateManyCreatedByInput = {
    id?: string
    name: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageItemCreateManyUpdatedByInput = {
    id?: string
    name: string
    createdBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageCreateManyCreatedByInput = {
    id?: string
    numberControl?: number
    typeCarePackageId: string
    personId: string
    carePackageScheduleId: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageCreateManyUpdatedByInput = {
    id?: string
    numberControl?: number
    typeCarePackageId: string
    personId: string
    carePackageScheduleId: string
    createdBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type PersonUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: UserUpdateOneRequiredWithoutPersonUpdatedByNestedInput
    Child?: ChildUpdateManyWithoutPersonResponsibleNestedInput
    CarePackage?: CarePackageUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Child?: ChildUncheckedUpdateManyWithoutPersonResponsibleNestedInput
    CarePackage?: CarePackageUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutPersonCreatedByNestedInput
    Child?: ChildUpdateManyWithoutPersonResponsibleNestedInput
    CarePackage?: CarePackageUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Child?: ChildUncheckedUpdateManyWithoutPersonResponsibleNestedInput
    CarePackage?: CarePackageUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    document?: IntFieldUpdateOperationsInput | number
    hasChild?: BoolFieldUpdateOperationsInput | boolean
    dateBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonResponsible?: PersonUpdateOneRequiredWithoutChildNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutChildUpdatedByNestedInput
  }

  export type ChildUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsibleId?: StringFieldUpdateOperationsInput | string
  }

  export type ChildUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsibleId?: StringFieldUpdateOperationsInput | string
  }

  export type ChildUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonResponsible?: PersonUpdateOneRequiredWithoutChildNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutChildCreatedByNestedInput
  }

  export type ChildUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsibleId?: StringFieldUpdateOperationsInput | string
  }

  export type ChildUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsibleId?: StringFieldUpdateOperationsInput | string
  }

  export type TypeCarePackageUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: UserUpdateOneRequiredWithoutTypeCarePackageUpdatedByNestedInput
    CarePackage?: CarePackageUpdateManyWithoutTypeCarePackageNestedInput
  }

  export type TypeCarePackageUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CarePackage?: CarePackageUncheckedUpdateManyWithoutTypeCarePackageNestedInput
  }

  export type TypeCarePackageUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeCarePackageUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutTypeCarePackageCreatedByNestedInput
    CarePackage?: CarePackageUpdateManyWithoutTypeCarePackageNestedInput
  }

  export type TypeCarePackageUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CarePackage?: CarePackageUncheckedUpdateManyWithoutTypeCarePackageNestedInput
  }

  export type TypeCarePackageUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageItemUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: UserUpdateOneRequiredWithoutCarePackageItemUpdatedByNestedInput
  }

  export type CarePackageItemUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageItemUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageItemUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutCarePackageItemCreatedByNestedInput
  }

  export type CarePackageItemUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageItemUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TypeCarePackage?: TypeCarePackageUpdateOneRequiredWithoutCarePackageNestedInput
    Person?: PersonUpdateOneRequiredWithoutCarePackageNestedInput
    CarePackageSchedule?: CarePackageScheduleUpdateOneRequiredWithoutCarePackageNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutCarePackageUpdatedByNestedInput
  }

  export type CarePackageUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    typeCarePackageId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    carePackageScheduleId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    typeCarePackageId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    carePackageScheduleId?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TypeCarePackage?: TypeCarePackageUpdateOneRequiredWithoutCarePackageNestedInput
    Person?: PersonUpdateOneRequiredWithoutCarePackageNestedInput
    CarePackageSchedule?: CarePackageScheduleUpdateOneRequiredWithoutCarePackageNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCarePackageCreatedByNestedInput
  }

  export type CarePackageUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    typeCarePackageId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    carePackageScheduleId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    typeCarePackageId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    carePackageScheduleId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildCreateManyPersonResponsibleInput = {
    id?: string
    name: string
    lastName: string
    dateBirh: Date | string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageCreateManyPersonInput = {
    id?: string
    numberControl?: number
    typeCarePackageId: string
    carePackageScheduleId: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ChildUpdateWithoutPersonResponsibleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutChildCreatedByNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutChildUpdatedByNestedInput
  }

  export type ChildUncheckedUpdateWithoutPersonResponsibleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildUncheckedUpdateManyWithoutPersonResponsibleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateBirh?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TypeCarePackage?: TypeCarePackageUpdateOneRequiredWithoutCarePackageNestedInput
    CarePackageSchedule?: CarePackageScheduleUpdateOneRequiredWithoutCarePackageNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCarePackageCreatedByNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutCarePackageUpdatedByNestedInput
  }

  export type CarePackageUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    typeCarePackageId?: StringFieldUpdateOperationsInput | string
    carePackageScheduleId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    typeCarePackageId?: StringFieldUpdateOperationsInput | string
    carePackageScheduleId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageCreateManyTypeCarePackageInput = {
    id?: string
    numberControl?: number
    personId: string
    carePackageScheduleId: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageUpdateWithoutTypeCarePackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Person?: PersonUpdateOneRequiredWithoutCarePackageNestedInput
    CarePackageSchedule?: CarePackageScheduleUpdateOneRequiredWithoutCarePackageNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCarePackageCreatedByNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutCarePackageUpdatedByNestedInput
  }

  export type CarePackageUncheckedUpdateWithoutTypeCarePackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    personId?: StringFieldUpdateOperationsInput | string
    carePackageScheduleId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageUncheckedUpdateManyWithoutTypeCarePackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    personId?: StringFieldUpdateOperationsInput | string
    carePackageScheduleId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageCreateManyCarePackageScheduleInput = {
    id?: string
    numberControl?: number
    typeCarePackageId: string
    personId: string
    createdBy: string
    updatedBy: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CarePackageUpdateWithoutCarePackageScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TypeCarePackage?: TypeCarePackageUpdateOneRequiredWithoutCarePackageNestedInput
    Person?: PersonUpdateOneRequiredWithoutCarePackageNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCarePackageCreatedByNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutCarePackageUpdatedByNestedInput
  }

  export type CarePackageUncheckedUpdateWithoutCarePackageScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    typeCarePackageId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarePackageUncheckedUpdateManyWithoutCarePackageScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberControl?: IntFieldUpdateOperationsInput | number
    typeCarePackageId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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