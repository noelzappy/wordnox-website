import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle} || Wordnox.com </title>
          <meta
            name="description"
            content="Wordnox – Ghana's first web agency"
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
