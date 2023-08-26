import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle} | Wordnox.com </title>
          <meta
            name="description"
            content="Wordnox: Premier Digital Agency in Africa | Mobile App/Web Development
      and Digital Marketing"
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
