// @flow

import React, { Component } from "react";
import { Content } from "native-base";
import { Query } from "react-apollo";

import { Pending } from "components";

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
              return <Pending />;
            }
            if (error) {
              return <Pending />;
            }
            return presentData(data);
          }}
        </Query>
      </Content>
    );
  }
}

export { Data };
