import "../styles/globals.css";
import { Provider } from "react-redux";
import configureAppStore from "../src/stores/store";
import { Component } from "react";
import { withRouter } from "next/router";

const store = configureAppStore();

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

class MyApp extends Component {
  componentDidMount() {
    const { router } = this.props;

    router.events.on("routeChangeStart", this.handleRouteChange);
    router.events.on("routeChangeComplete", this.handleRouteChangeComplete);
  }

  componentWillUnmount() {
    const { router } = this.props;

    router.events.on("routeChangeStart", this.handleRouteChange);
    router.events.on("routeChangeComplete", this.handleRouteChangeComplete);
  }

  handleRouteChangeComplete = (url) => {
    window.history.scrollRestoration = "manual";

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  handleRouteChange = (url) => {};

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRouter(MyApp);
