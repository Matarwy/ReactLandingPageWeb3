import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  ThemeProvider,
  createMuiTheme,
  StylesProvider,
  jssPreset,
} from "@material-ui/core/styles";
import { create } from "jss";
// import { PageTransition } from "next-page-transitions";
import rtl from "jss-rtl";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoadingBar from "react-top-loading-bar";
import { useTranslation,  } from 'react-i18next';
import appTheme from "../theme/appTheme";
import GradientDeco from "../components/GradientDeco";

/* import css vendors */
import "react-animated-slider/build/horizontal.css";
import "../vendors/animate-slider.css";
import "../vendors/hamburger-menu.css";
import "animate.css/animate.css";
import "../vendors/top-loading-bar.css";
import "../vendors/animate-extends.css";
import "../vendors/page-transition.css";
import "../vendors/slick/slick.css";
import "../vendors/slick/slick-theme.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Home from'./Home';

let themeType = "light";
if (typeof Storage !== "undefined") {
  // eslint-disable-line
  themeType = localStorage.getItem("luxiTheme") || "light";
}

const App = () => {

  const {t, i18n} = useTranslation();
  const [loading, setLoading] = useState(0);
  const [theme, setTheme] = useState({
    ...appTheme("deepBlue", themeType),
    direction: i18n.language === "ara" ? "rtl" : "ltr",
  });

  useEffect(() => {
    // Set layout direction
    document.dir = i18n.language === "ara" ? "rtl" : "ltr";

    // Remove preloader
    const preloader = document.getElementById("preloader");
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, 2000);

    // Refresh JSS in SSR
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    localStorage.setItem(
      "luxiTheme",
      theme.palette.type === "light" ? "dark" : "light"
    );
    setTheme({
      ...appTheme("deepBlue", newPaletteType),
      direction: theme.direction,
    });
  };

  const toggleDirection = (dir) => {
    document.dir = dir;
    setTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette,
      },
    });
  };

  const muiTheme = createMuiTheme(theme);
  // const { Component, pageProps, router } = props; // eslint-disable-line
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  return (
    <div>
      <Router>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <GradientDeco />
          <LoadingBar
            height={0}
            color={theme.palette.primary.light}
            progress={loading}
            className="top-loading-bar"
          />
          <div id="main-wrap">
            {/* <PageTransition timeout={300} classNames="page-fade-transition"> */}
              {/* <Component
                {...pageProps}
                onToggleDark={toggleDarkTheme}
                onToggleDir={toggleDirection}
                key={router.route}
              /> */}

              <Switch>
                <Route path="/">
                  <Home
                  onToggleDark={toggleDarkTheme}
                  onToggleDir={toggleDirection}
                  />
                </Route>
              </Switch>
            {/* </PageTransition> */}
          </div>
        </ThemeProvider>
      </StylesProvider>
      </Router>
    </div>
  );
};
// MyApp.getInitialProps = async (appContext) => ({...await App.getInitialProps(appContext) })

export default App;
