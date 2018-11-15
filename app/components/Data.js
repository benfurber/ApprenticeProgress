// @flow

import React, { Component } from "react";
import { Content } from "native-base";
import { Query } from "react-apollo";

import { Pending } from "components";
import type { GraphDataType } from "types";

type Props = {
  presentData: any => React$Element<*>,
  query: GraphDataType,
};

class Data extends Component<Props> {
  render() {
    const { presentData, query } = this.props;

    return (
      <Content>
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) {
              return <Pending condition="Loading" />;
            }
            if (error) {
              return <Pending condition="Error" />;
            }
            return presentData(data);
          }}
        </Query>
      </Content>
    );
  }
}

export { Data };
