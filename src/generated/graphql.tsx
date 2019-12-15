type Maybe<T> = T | null;
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Company = {
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type Mutation = {
  user: Scalars['String'],
};


export type MutationUserArgs = {
  name?: Maybe<Scalars['String']>
};

export type Query = {
  user?: Maybe<User>,
  company?: Maybe<Company>,
  allUser?: Maybe<Array<Maybe<User>>>,
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>
};


export type QueryCompanyArgs = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>
};


export type User = {
  id: Scalars['ID'],
  name: Scalars['String'],
};


