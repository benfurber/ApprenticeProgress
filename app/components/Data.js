// @flow

import React, { Component } from "react";
import { Content } from "native-base";
import { Query } from "react-apollo";

import { Loading } from "components";

type Props = {
  presentData: any => any,
  query: any,
};

class Data extends Component<Props> {
  render() {
    const { presentData, query } = this.props;

    return (
      <Content>
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) {
              return <Loading />;
            }
            if (error) {
              return <Loading />;
            }
            return presentData(data);
          }}
        </Query>
      </Content>
    );
  }
}

export { Data };
