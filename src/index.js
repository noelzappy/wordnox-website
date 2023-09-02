// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

import PageScrollTop from "./component/PageScrollTop";

import Home from "./pages/Home";
import CreativePortfolio from "./pages/CreativePortfolio";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PortfolioDetails from "./pages/PortfolioDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import error404 from "./pages/error404";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <PageScrollTop>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio`}
              component={CreativePortfolio}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/service`}
              component={Service}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/services`}
              component={Service}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/services/:slug`}
              component={ServiceDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={Contact}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              component={About}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio/:slug`}
              component={PortfolioDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog`}
              component={Blog}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-details`}
              component={BlogDetails}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/404`}
              component={error404}
            />
            <Route component={error404} />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
