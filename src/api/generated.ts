/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTimeUtc: any;
  /** Uuid */
  Uuid: any;
};


export type Message = {
  readonly __typename?: 'Message';
  readonly id: Scalars['Uuid'];
  readonly sender: Scalars['String'];
  readonly message: Scalars['String'];
  readonly sentAt: Scalars['DateTimeUtc'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly login: Scalars['String'];
  readonly sendMessage: Scalars['Boolean'];
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  serverPassword: Scalars['String'];
};


export type MutationSendMessageArgs = {
  message: Scalars['String'];
};

export type Query = {
  readonly __typename?: 'Query';
  readonly apiVersion: Scalars['String'];
  readonly messages: ReadonlyArray<Message>;
};


export type QueryMessagesArgs = {
  after?: Maybe<Scalars['DateTimeUtc']>;
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly getMessages: Message;
};


export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { readonly __typename?: 'Mutation', readonly token: string };


export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  token: login(username: $username, serverPassword: $password)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;