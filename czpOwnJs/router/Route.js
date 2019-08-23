/**
 * The public API for matching a single path and rendering.
 */
class Route extends React.Component {
    //从Router中获取信息
    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.object.isRequired,
            route: PropTypes.object.isRequired,
            staticContext: PropTypes.object
        })
    };
    //自己定义了一套Contex用于子组件的使用
    static childContextTypes = {
        router: PropTypes.object.isRequired
    };
    //自己定义了一套Contex用于子组件的使用
    getChildContext() {
        return {
            router: {
                ...this.context.router,
                route: {
                    location: this.props.location || this.context.router.route.location,
                    match: this.state.match
                }
            }
        };
    }

    state = {
        match: this.computeMatch(this.props, this.context.router)// matching a URL pathname to a path pattern.如果不匹配，返回null,也就是找不到页面信息
    };
    // 计算匹配的路径，匹配的话，会返回一个匹配对象，否则返回null
    computeMatch(
        { computedMatch, location, path, strict, exact, sensitive },
        router
    ) {
        if (computedMatch) return computedMatch;

        // ......

        const { route } = router;
        const pathname = (location || route.location).pathname;

        return matchPath(pathname, { path, strict, exact, sensitive }, route.match);
    }
    render() {
        const { match } = this.state;
        const { children, component, render } = this.props;//从Router结构中获取对应的处理方法
        const { history, route, staticContext } = this.context.router;//从Context中获取数据
        const location = this.props.location || route.location;
        const props = { match, location, history, staticContext };
        //如果页面匹配成功，进行createElement的渲染。在这里就会调用component的render===>页面刷新 这是处理第一次页面渲染
        if (component) return match ? React.createElement(component, props) : null;
        //这里针对首页已经被渲染，在进行路由处理的时候，根据props中的信息，进行页面的跳转或者刷新
        if (render) return match ? render(props) : null;

        return null;
    }
}

export default Route;