//这里省去其他库的引用
import generatePath from "./generatePath";
/**
 * The public API for updating the location programmatically
 * with a component.
 */
class Redirect extends React.Component {
//这里是从Context中拿到history等数据
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };

  isStatic() {
    return this.context.router && this.context.router.staticContext;
  }

  componentWillMount() {
    invariant(
      this.context.router,
      "You should not use <Redirect> outside a <Router>"
    );

    if (this.isStatic()) this.perform();
  }

  componentDidMount() {
    if (!this.isStatic()) this.perform();
  }

  componentDidUpdate(prevProps) {
    const prevTo = createLocation(prevProps.to);
    const nextTo = createLocation(this.props.to);

    if (locationsAreEqual(prevTo, nextTo)) {
      warning(
        false,
        `You tried to redirect to the same route you're currently on: ` +
          `"${nextTo.pathname}${nextTo.search}"`
      );
      return;
    }

    this.perform();
  }

  computeTo({ computedMatch, to }) {
    if (computedMatch) {
      if (typeof to === "string") {
        return generatePath(to, computedMatch.params);
      } else {
        return {
          ...to,
          pathname: generatePath(to.pathname, computedMatch.params)
        };
      }
    }

    return to;
  }
 //进行路由的匹配操作
  perform() {
    const { history } = this.context.router;
    const { push } = this.props;
    //Router中拿到需要跳转的路径，然后传递给history
    const to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  }

  render() {
    return null;
  }
}

export default Redirect;
