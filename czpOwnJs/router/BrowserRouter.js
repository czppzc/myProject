import warning from "warning";
import React from "react";
import PropTypes from "prop-types";
import { createBrowserHistory as createHistory } from "history";//这里的history就是上面第二个例子中的historyModule
import Router from "./Router"; //对应第二个例子中的Router对象

/**
 * The public API for a <Router> that uses HTML5 history. //这里是重点
 */
class BrowserRouter extends React.Component {
  history = createHistory(this.props);
  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}

export default BrowserRouter;