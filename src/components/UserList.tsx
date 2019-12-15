import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import * as GQL from "../generated/graphql"
const GET_ALL_ACCOUNT = gql`
  query {
    allUser {
      id
      name
    }
  }
`;

export function UserList() {
  return (
    <Query<GQL.Query> query={GET_ALL_ACCOUNT}>
      {({ data, loading }) => {

        if (loading || !data) {
          return <div>Loading</div>;
        }
        const { allUser } = data;
        return <div>{allUser!.map(user=><div>{user!.name}さん</div>)}</div>;
      }}
    </Query>
  );
}
