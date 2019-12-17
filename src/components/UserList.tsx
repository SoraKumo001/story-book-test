import React, { useEffect, useState } from "react";
import { Query, useQuery, useApolloClient } from "react-apollo";
import gql from "graphql-tag";
import * as GQL from "../generated/graphql";
import { User } from "../generated/graphql";
const GET_ALL_ACCOUNT = gql`
  query {
    allUser {
      id
      name
    }
  }
`;
const GET_USER = gql`
  query getUser($id: String) {
    user(id: $id) {
      id
      name
    }
  }
`;

export function UserList() {
  const client = useApolloClient();
  const [users, setUsers] = useState<GQL.Query["user"][]>([]);
  useEffect(() => {
    client
      .query<GQL.Query>({
        query: GET_USER,
        variables: { id: "80607894-fd3e-4258-8d49-53f440cf85f8" }
      })
      .then(({ data, loading }) => {
        if (!loading && data) setUsers([...users, data!.user]);
      });
  }, []);

  return (
    <div>
      <button onClick={load}>ロード</button>
      {users!.map((user, index) => (
        <div key={index}>{user?.id}:{user?.name}</div>
      ))}
    </div>
  );
  function load(){
    client
    .query<GQL.Query>({
      query: GET_USER,
      variables: { id: "80607894-fd3e-4258-8d49-53f440cf85f9" }
    })
    .then(({ data, loading }) => {
      if (!loading && data) setUsers([...users, data!.user]);
    });
  }
}
