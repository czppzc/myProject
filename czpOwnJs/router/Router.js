/**
 * The public API for putting history on context. //这里的道理类似于例子二中第二步
 */
class Router extends React.Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        children: PropTypes.node
    };
    static childContextTypes = {
        router: PropTypes.object.isRequired
    };

    getChildContext() {
        return {
            router: {
                ...this.context.router,
                history: this.props.history,
                route: {
                    location: this.props.history.location,
                    match: this.state.match
                }
            }
        };
    }

    state = {
        match: this.computeMatch(this.props.history.location.pathname)
    };

    computeMatch(pathname) {
        return {
            path: "/",
            url: "/",
            params: {},
            isExact: pathname === "/"
        };
    }

    componentWillMount() {
        const { children, history } = this.props;
        // Do this here so we can setState when a <Redirect> changes the
        // location in componentWillMount. This happens e.g. when doing
        // server rendering using a <StaticRouter>.
        //history发生改变的话会触发this.setState(),重新渲染Router
        this.unlisten = history.listen(() => {
            this.setState({
                match: this.computeMatch(history.location.pathname)
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        warning(
            this.props.history === nextProps.history,
            "You cannot change <Router history>"
        );
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        const { children } = this.props;
        return children ? React.Children.only(children) : null;
    }
}

export default Router;