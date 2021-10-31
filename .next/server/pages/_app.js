module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/GradientDeco/GradientDeco.js":
/*!*************************************************!*\
  !*** ./components/GradientDeco/GradientDeco.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GradientDeco; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\GradientDeco\\GradientDeco.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({
  hide: {
    position: 'absolute',
    top: 0,
    left: 0
  }
}));
function GradientDeco() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  const {
    0: themeState,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('light');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTheme(theme.palette.type);
  });
  return __jsx("div", {
    className: classes.hide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("svg", {
    width: "38px",
    height: "43px",
    viewBox: "0 0 38 43",
    version: "1.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("linearGradient", {
    x1: "34.5063846%",
    y1: "15.1303808%",
    x2: "20.8153155%",
    y2: "110.664023%",
    id: "titleLinearGradient-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("stop", {
    stopColor: themeState === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    offset: "0%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("stop", {
    stopColor: themeState === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    offset: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }))), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("linearGradient", {
    x1: "66.8412844%",
    y1: "30.62426%",
    x2: "-21.0581447%",
    y2: "100%",
    id: "hexaLinearGradient-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("stop", {
    stopColor: theme.palette.secondary.main,
    offset: "0%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx("stop", {
    stopColor: theme.palette.secondary.light,
    offset: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }))), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("linearGradient", {
    x1: "66.8412844%",
    y1: "30.62426%",
    x2: "-21.0581447%",
    y2: "100%",
    id: "hexaLinearGradient-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("stop", {
    stopColor: theme.palette.primary.main,
    offset: "0%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("stop", {
    stopColor: theme.palette.primary.light,
    offset: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }))), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("linearGradient", {
    x1: "33.650521%",
    y1: "14.3140713%",
    x2: "18.9688557%",
    y2: "110.664023%",
    id: "frmDecoLinearGradient-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("stop", {
    stopColor: themeState === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    offset: "0%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx("stop", {
    stopColor: themeState === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main,
    offset: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  })), __jsx("path", {
    d: "M40.0268505,351.888258 C299.475775,-137.933311 505.867463,-306.185765 659.201915,-152.869104 C788.709519,-23.376527 935.329477,275.20658 1099.06179,742.880218 C1145.23269,874.759604 1075.75224,1019.09788 943.872862,1065.26879 C895.054476,1082.36009 842.170492,1084.07787 792.345858,1070.19072 L372.341154,953.126774 C318.012942,937.984384 270.301991,905.123239 236.786543,859.762889 L60.1185534,620.657575 C2.28750686,542.3881 -5.52448856,437.886026 40.0268505,351.888258 Z",
    id: "path-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/GradientDeco/index.js":
/*!******************************************!*\
  !*** ./components/GradientDeco/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradientDeco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradientDeco */ "./components/GradientDeco/GradientDeco.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _GradientDeco__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__(/*! next-i18next */ "next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: 'eng',
  otherLanguages: ['ara'],
  fallbackLng: 'eng',
  initImmediate: false,
  localePath: 'public/locales',
  react: {
    useSuspense: false
  },
  localeSubpaths: {
    ara: 'ar',
    eng: 'en'
  }
});

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://nextjs.org/docs/messages/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://nextjs.org/docs/messages/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-animated-slider/build/horizontal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-animated-slider/build/horizontal.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-page-transitions */ "next-page-transitions");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jss-rtl */ "jss-rtl");
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jss_rtl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-top-loading-bar */ "react-top-loading-bar");
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_appTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../theme/appTheme */ "./theme/appTheme.js");
/* harmony import */ var _components_GradientDeco__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/GradientDeco */ "./components/GradientDeco/index.js");
/* harmony import */ var react_animated_slider_build_horizontal_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-animated-slider/build/horizontal.css */ "./node_modules/react-animated-slider/build/horizontal.css");
/* harmony import */ var react_animated_slider_build_horizontal_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_animated_slider_build_horizontal_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _vendors_animate_slider_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../vendors/animate-slider.css */ "./vendors/animate-slider.css");
/* harmony import */ var _vendors_animate_slider_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_slider_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../vendors/hamburger-menu.css */ "./vendors/hamburger-menu.css");
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _node_modules_animate_css_animate_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../node_modules/animate.css/animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var _node_modules_animate_css_animate_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_node_modules_animate_css_animate_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _vendors_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../vendors/top-loading-bar.css */ "./vendors/top-loading-bar.css");
/* harmony import */ var _vendors_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_vendors_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../vendors/animate-extends.css */ "./vendors/animate-extends.css");
/* harmony import */ var _vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _vendors_page_transition_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../vendors/page-transition.css */ "./vendors/page-transition.css");
/* harmony import */ var _vendors_page_transition_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_vendors_page_transition_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../vendors/slick/slick.css */ "./vendors/slick/slick.css");
/* harmony import */ var _vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../vendors/slick/slick-theme.css */ "./vendors/slick/slick-theme.css");
/* harmony import */ var _vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_21__);
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














/* import css vendors */










let themeType = 'light';

if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function MyApp(props) {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_objectSpread(_objectSpread({}, Object(_theme_appTheme__WEBPACK_IMPORTED_MODULE_11__["default"])('deepBlue', themeType)), {}, {
    direction: _i18n__WEBPACK_IMPORTED_MODULE_10__["i18n"].language === 'ara' ? 'rtl' : 'ltr'
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Set layout direction
    document.dir = _i18n__WEBPACK_IMPORTED_MODULE_10__["i18n"].language === 'ara' ? 'rtl' : 'ltr'; // Remove preloader

    const preloader = document.getElementById('preloader');

    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    } // Remove loading bar


    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, 2000); // Refresh JSS in SSR

    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    setTheme(_objectSpread(_objectSpread({}, Object(_theme_appTheme__WEBPACK_IMPORTED_MODULE_11__["default"])('deepBlue', newPaletteType)), {}, {
      direction: theme.direction
    }));
  };

  const toggleDirection = dir => {
    document.dir = dir;
    setTheme(_objectSpread(_objectSpread({}, theme), {}, {
      direction: dir,
      palette: _objectSpread({}, theme.palette)
    }));
  };

  const muiTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])(theme);
  const {
    Component,
    pageProps,
    router
  } = props; // eslint-disable-line

  const jss = Object(jss__WEBPACK_IMPORTED_MODULE_5__["create"])({
    plugins: [...Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["jssPreset"])().plugins, jss_rtl__WEBPACK_IMPORTED_MODULE_7___default()()]
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["StylesProvider"], {
    jss: jss,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: muiTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }), __jsx(_components_GradientDeco__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }), __jsx(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9___default.a, {
    height: 0,
    color: theme.palette.primary.light,
    progress: loading,
    className: "top-loading-bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }), __jsx("div", {
    id: "main-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__["PageTransition"], {
    timeout: 300,
    classNames: "page-fade-transition",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    onToggleDark: toggleDarkTheme,
    onToggleDir: toggleDirection,
    key: router.route,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  })))))));
}

MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

MyApp.getInitialProps = async appContext => _objectSpread({}, await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(appContext));

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["appWithTranslation"])(MyApp));

/***/ }),

/***/ "./theme/appTheme.js":
/*!***************************!*\
  !*** ./theme/appTheme.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ "./theme/palette.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_palette__WEBPACK_IMPORTED_MODULE_0__);


const appTheme = (color, mode) => ({
  palette: {
    type: mode,
    primary: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary,
    secondary: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.secondary,
    action: {
      hover: mode === 'dark' ? 'rgba(128,128,128, 0.9)' : 'rgba(128,128,128, 0.05)',
      hoverOpacity: 0.05
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  },
  shade: {
    light: '0 10px 15px -5px rgba(62, 57, 107, .07)'
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px'
  },
  shadows: mode === 'dark' ? ['none', '0px 1px 3px 0px rgba(50,50,50, 0.2),0px 1px 1px 0px rgba(50,50,50, 0.14),0px 2px 1px -1px rgba(50,50,50, 0.12)', '0px 1px 5px 0px rgba(50,50,50, 0.2),0px 2px 2px 0px rgba(50,50,50, 0.14),0px 3px 1px -2px rgba(50,50,50, 0.12)', '0px 1px 8px 0px rgba(50,50,50, 0.2),0px 3px 4px 0px rgba(50,50,50, 0.14),0px 3px 3px -2px rgba(50,50,50, 0.12)', '0px 2px 4px -1px rgba(50,50,50, 0.2),0px 4px 5px 0px rgba(50,50,50, 0.14),0px 1px 10px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 5px 8px 0px rgba(50,50,50, 0.14),0px 1px 14px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 6px 10px 0px rgba(50,50,50, 0.14),0px 1px 18px 0px rgba(50,50,50, 0.12)', '0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)', '0px 5px 5px -3px rgba(50,50,50, 0.2),0px 8px 10px 1px rgba(50,50,50, 0.14),0px 3px 14px 2px rgba(50,50,50, 0.12)', '0px 5px 6px -3px rgba(50,50,50, 0.2),0px 9px 12px 1px rgba(50,50,50, 0.14),0px 3px 16px 2px rgba(50,50,50, 0.12)', '0px 6px 6px -3px rgba(50,50,50, 0.2),0px 10px 14px 1px rgba(50,50,50, 0.14),0px 4px 18px 3px rgba(50,50,50, 0.12)', '0px 6px 7px -4px rgba(50,50,50, 0.2),0px 11px 15px 1px rgba(50,50,50, 0.14),0px 4px 20px 3px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 12px 17px 2px rgba(50,50,50, 0.14),0px 5px 22px 4px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 13px 19px 2px rgba(50,50,50, 0.14),0px 5px 24px 4px rgba(50,50,50, 0.12)', '0px 7px 9px -4px rgba(50,50,50, 0.2),0px 14px 21px 2px rgba(50,50,50, 0.14),0px 5px 26px 4px rgba(50,50,50, 0.12)', '0px 8px 9px -5px rgba(50,50,50, 0.2),0px 15px 22px 2px rgba(50,50,50, 0.14),0px 6px 28px 5px rgba(50,50,50, 0.12)', '0px 8px 10px -5px rgba(50,50,50, 0.2),0px 16px 24px 2px rgba(50,50,50, 0.14),0px 6px 30px 5px rgba(50,50,50, 0.12)', '0px 8px 11px -5px rgba(50,50,50, 0.2),0px 17px 26px 2px rgba(50,50,50, 0.14),0px 6px 32px 5px rgba(50,50,50, 0.12)', '0px 9px 11px -5px rgba(50,50,50, 0.2),0px 18px 28px 2px rgba(50,50,50, 0.14),0px 7px 34px 6px rgba(50,50,50, 0.12)', '0px 9px 12px -6px rgba(50,50,50, 0.2),0px 19px 29px 2px rgba(50,50,50, 0.14),0px 7px 36px 6px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 20px 31px 3px rgba(50,50,50, 0.14),0px 8px 38px 7px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 21px 33px 3px rgba(50,50,50, 0.14),0px 8px 40px 7px rgba(50,50,50, 0.12)', '0px 10px 14px -6px rgba(50,50,50, 0.2),0px 22px 35px 3px rgba(50,50,50, 0.14),0px 8px 42px 7px rgba(50,50,50, 0.12)', '0px 11px 14px -7px rgba(50,50,50, 0.2),0px 23px 36px 3px rgba(50,50,50, 0.14),0px 9px 44px 8px rgba(50,50,50, 0.12)', '0px 11px 15px -7px rgba(50,50,50, 0.2),0px 24px 38px 3px rgba(850,50,50 0.14),0px 9px 46px 8px rgba(50,50,50, 0.12)'] : ['none', '0px 1px 3px 0px rgba(128,128,128, 0.2),0px 1px 1px 0px rgba(128,128,128, 0.14),0px 2px 1px -1px rgba(128,128,128, 0.12)', '0px 1px 5px 0px rgba(128,128,128, 0.2),0px 2px 2px 0px rgba(128,128,128, 0.14),0px 3px 1px -2px rgba(128,128,128, 0.12)', '0px 1px 8px 0px rgba(128,128,128, 0.2),0px 3px 4px 0px rgba(128,128,128, 0.14),0px 3px 3px -2px rgba(128,128,128, 0.12)', '0px 2px 4px -1px rgba(128,128,128, 0.2),0px 4px 5px 0px rgba(128,128,128, 0.14),0px 1px 10px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 5px 8px 0px rgba(128,128,128, 0.14),0px 1px 14px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 6px 10px 0px rgba(128,128,128, 0.14),0px 1px 18px 0px rgba(128,128,128, 0.12)', '0px 4px 5px -2px rgba(128,128,128, 0.2),0px 7px 10px 1px rgba(128,128,128, 0.14),0px 2px 16px 1px rgba(128,128,128, 0.12)', '0px 5px 5px -3px rgba(128,128,128, 0.2),0px 8px 10px 1px rgba(128,128,128, 0.14),0px 3px 14px 2px rgba(128,128,128, 0.12)', '0px 5px 6px -3px rgba(128,128,128, 0.2),0px 9px 12px 1px rgba(128,128,128, 0.14),0px 3px 16px 2px rgba(128,128,128, 0.12)', '0px 6px 6px -3px rgba(128,128,128, 0.2),0px 10px 14px 1px rgba(128,128,128, 0.14),0px 4px 18px 3px rgba(128,128,128, 0.12)', '0px 6px 7px -4px rgba(128,128,128, 0.2),0px 11px 15px 1px rgba(128,128,128, 0.14),0px 4px 20px 3px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 12px 17px 2px rgba(128,128,128, 0.14),0px 5px 22px 4px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 13px 19px 2px rgba(128,128,128, 0.14),0px 5px 24px 4px rgba(128,128,128, 0.12)', '0px 7px 9px -4px rgba(128,128,128, 0.2),0px 14px 21px 2px rgba(128,128,128, 0.14),0px 5px 26px 4px rgba(128,128,128, 0.12)', '0px 8px 9px -5px rgba(128,128,128, 0.2),0px 15px 22px 2px rgba(128,128,128, 0.14),0px 6px 28px 5px rgba(128,128,128, 0.12)', '0px 8px 10px -5px rgba(128,128,128, 0.2),0px 16px 24px 2px rgba(128,128,128, 0.14),0px 6px 30px 5px rgba(128,128,128, 0.12)', '0px 8px 11px -5px rgba(128,128,128, 0.2),0px 17px 26px 2px rgba(128,128,128, 0.14),0px 6px 32px 5px rgba(128,128,128, 0.12)', '0px 9px 11px -5px rgba(128,128,128, 0.2),0px 18px 28px 2px rgba(128,128,128, 0.14),0px 7px 34px 6px rgba(128,128,128, 0.12)', '0px 9px 12px -6px rgba(128,128,128, 0.2),0px 19px 29px 2px rgba(128,128,128, 0.14),0px 7px 36px 6px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 20px 31px 3px rgba(128,128,128, 0.14),0px 8px 38px 7px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 21px 33px 3px rgba(128,128,128, 0.14),0px 8px 40px 7px rgba(128,128,128, 0.12)', '0px 10px 14px -6px rgba(128,128,128, 0.2),0px 22px 35px 3px rgba(128,128,128, 0.14),0px 8px 42px 7px rgba(128,128,128, 0.12)', '0px 11px 14px -7px rgba(128,128,128, 0.2),0px 23px 36px 3px rgba(128,128,128, 0.14),0px 9px 44px 8px rgba(128,128,128, 0.12)', '0px 11px 15px -7px rgba(128,128,128, 0.2),0px 24px 38px 3px rgba(128,128,128, 0.14),0px 9px 46px 8px rgba(128,128,128, 0.12)'],
  overrides: {
    PrivateTabIndicator: {
      root: {
        borderRadius: '4px 4px 0 0',
        height: 5
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 12
      },
      elevation1: {
        boxShadow: mode === 'dark' ? '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)' : '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)'
      },
      elevation4: {
        boxShadow: mode === 'dark' ? '0px 2px 4px -1px rgba(64, 64, 64, 0.46), 0px 4px 5px 0px rgba(42, 42, 42, 0.32), 0px 1px 10px 0px rgba(20, 20, 20, 0.12)' : '0 1.5px 12px 4px rgba(0, 0, 0, 0.12)'
      }
    },
    MuiButton: {
      containedSecondary: {
        color: '#FFFFFF',
        boxShadow: `0 0 4px -1px ${_palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.secondary.main}`
      },
      containedPrimary: {
        color: '#FFFFFF',
        boxShadow: `0 0 4px -1px ${_palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary.main}`
      },
      root: {
        borderRadius: 6,
        fontWeight: 600,
        boxShadow: 'none',
        padding: '8px 24px'
      },
      sizeSmall: {
        padding: '7px 12px'
      },
      sizeLarge: {
        padding: '7px 36px'
      }
    },
    MuiTypography: {
      button: {
        fontWeight: 600
      }
    },
    MuiInputLabel: {
      root: {
        '&$focused': {
          color: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary.main
        }
      },
      filled: {
        '&$shrink': {
          color: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary.main
        }
      }
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottomColor: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary.main
        }
      },
      multiline: {
        padding: 0,
        '& textarea': {
          paddingTop: 27
        }
      }
    },
    MuiOutlinedInput: {
      inputAdornedStart: {
        paddingLeft: 40
      }
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (appTheme);

/***/ }),

/***/ "./theme/palette.js":
/*!**************************!*\
  !*** ./theme/palette.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  oceanBlue: {
    palette: {
      primary: {
        light: '#BBDEFB',
        main: '#2196F3',
        dark: '#0D47A1'
      },
      secondary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      }
    }
  },
  greenLeaf: {
    palette: {
      primary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#1B5E20'
      },
      secondary: {
        light: '#CFD8DC',
        main: '#607D8B',
        dark: '#37474F'
      }
    }
  },
  money: {
    palette: {
      primary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#2E7D32'
      },
      secondary: {
        light: '#FFECB3',
        main: '#FFA000',
        dark: '#FF6F00'
      }
    }
  },
  grayscale: {
    palette: {
      primary: {
        light: '#CFD8DC',
        main: '#546E7A',
        dark: '#263238'
      },
      secondary: {
        light: '#D7CCC8',
        main: '#6D4C41',
        dark: '#3E2723'
      }
    }
  },
  cloud: {
    palette: {
      primary: {
        light: '#B3E5FC',
        main: '#03A9F4',
        dark: '#01579B'
      },
      secondary: {
        light: '#FFE0B2',
        main: '#FF9800',
        dark: '#E65100'
      }
    }
  },
  joker: {
    palette: {
      primary: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#311B92'
      },
      secondary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      }
    }
  },
  violet: {
    palette: {
      primary: {
        light: '#F8BBD0',
        main: '#EC407A',
        dark: '#880E4F'
      },
      secondary: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#311B92'
      }
    }
  },
  violeta: {
    palette: {
      primary: {
        light: '#E1BEE7',
        main: '#9C27B0',
        dark: '#6A1B9A'
      },
      secondary: {
        light: '#DCEDC8',
        main: '#8BC34A',
        dark: '#558B2F'
      }
    }
  },
  deepBlue: {
    palette: {
      primary: {
        light: '#0c88ed',
        main: '#0c83e4',
        dark: '#0961aa',
        contrastText: '#fff'
      },
      secondary: {
        light: '#8202f2',
        main: '#6202b6',
        dark: '#490188',
        contrastText: '#fff'
      }
    }
  },
  roseGold: {
    palette: {
      primary: {
        light: '#E8EAF6',
        main: '#3F51B5',
        dark: '#283593',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E1F5FE',
        main: '#03A9F4',
        dark: '#0277BD',
        contrastText: '#fff'
      }
    }
  },
  ubuntu: {
    palette: {
      primary: {
        light: '#FFF3E0',
        main: '#EF6C00',
        dark: '#E65100',
        contrastText: '#fff'
      },
      secondary: {
        light: '#F3E5F5',
        main: '#9C27B0',
        dark: '#7B1FA2',
        contrastText: '#fff'
      }
    }
  },
  geenNature: {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#009688',
        dark: '#00695C',
        contrastText: '#fff'
      },
      secondary: {
        light: '#F1F8E9',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff'
      }
    }
  },
  vampire: {
    palette: {
      primary: {
        light: '#FFEBEE',
        main: '#f44336',
        dark: '#E53935',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ECEFF1',
        main: '#607D8B',
        dark: '#455A64',
        contrastText: '#fff'
      }
    }
  },
  mint: {
    palette: {
      primary: {
        light: '#bbdefb',
        main: '#2196f3',
        dark: '#0d47a1',
        contrastText: '#fff'
      },
      secondary: {
        light: '#b3e5fc',
        main: '#03a9f4',
        dark: '#01579b',
        contrastText: '#fff'
      }
    }
  },
  oceanSky: {
    palette: {
      primary: {
        light: '#E3F2FD',
        main: '#2196F3',
        dark: '#1565C0',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0F2F1',
        main: '#00BFA5',
        dark: '#00796B',
        contrastText: '#fff'
      }
    }
  },
  gold: {
    palette: {
      primary: {
        light: '#FFF9C4',
        main: '#FF9100',
        dark: '#FF6D00',
        contrastText: '#fff'
      },
      secondary: {
        light: '#EFEBE9',
        main: '#8D6E63',
        dark: '#4E342E',
        contrastText: '#fff'
      }
    }
  },
  botani: {
    palette: {
      primary: {
        light: '#DCEDC8',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FCE4EC',
        main: '#F06292',
        dark: '#AD1457',
        contrastText: '#fff'
      }
    }
  },
  littleQueen: {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#006064',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FCE4EC',
        main: '#F06292',
        dark: '#AD1457',
        contrastText: '#fff'
      }
    }
  },
  purple: {
    palette: {
      primary: {
        light: '#f3e5f5',
        main: '#9c27b0',
        dark: '#6a1b9a',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ea80fc',
        main: '#aa00ff',
        dark: '#4a148c',
        contrastText: '#fff'
      }
    }
  },
  black: {
    palette: {
      primary: {
        light: '#9e9e9e',
        main: '#212121',
        dark: '#000',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0E0E0',
        main: '#757575',
        dark: '#424242',
        contrastText: '#fff'
      }
    }
  },
  brown: {
    palette: {
      primary: {
        light: '#d7ccc8',
        main: '#795548',
        dark: '#4e342e',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ccb0b0',
        main: '#794848',
        dark: '#3e2723',
        contrastText: '#fff'
      }
    }
  }
};

/***/ }),

/***/ "./vendors/animate-extends.css":
/*!*************************************!*\
  !*** ./vendors/animate-extends.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/animate-slider.css":
/*!************************************!*\
  !*** ./vendors/animate-slider.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/hamburger-menu.css":
/*!************************************!*\
  !*** ./vendors/hamburger-menu.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/page-transition.css":
/*!*************************************!*\
  !*** ./vendors/page-transition.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/slick/slick-theme.css":
/*!***************************************!*\
  !*** ./vendors/slick/slick-theme.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/slick/slick.css":
/*!*********************************!*\
  !*** ./vendors/slick/slick.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/top-loading-bar.css":
/*!*************************************!*\
  !*** ./vendors/top-loading-bar.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "jss-rtl":
/*!**************************!*\
  !*** external "jss-rtl" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-rtl");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next-page-transitions":
/*!****************************************!*\
  !*** external "next-page-transitions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-page-transitions");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-top-loading-bar":
/*!****************************************!*\
  !*** external "react-top-loading-bar" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-top-loading-bar");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JhZGllbnREZWNvL0dyYWRpZW50RGVjby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyYWRpZW50RGVjby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pMThuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUvYXBwVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUvcGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzcy1ydGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXBhZ2UtdHJhbnNpdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b3AtbG9hZGluZy1iYXJcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiaGlkZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIkdyYWRpZW50RGVjbyIsImNsYXNzZXMiLCJ0aGVtZSIsInVzZVRoZW1lIiwidGhlbWVTdGF0ZSIsInNldFRoZW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwYWxldHRlIiwidHlwZSIsInByaW1hcnkiLCJkYXJrIiwibGlnaHQiLCJzZWNvbmRhcnkiLCJtYWluIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvdGhlckxhbmd1YWdlcyIsImZhbGxiYWNrTG5nIiwiaW5pdEltbWVkaWF0ZSIsImxvY2FsZVBhdGgiLCJyZWFjdCIsInVzZVN1c3BlbnNlIiwibG9jYWxlU3VicGF0aHMiLCJhcmEiLCJlbmciLCJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsInRoZW1lVHlwZSIsIlN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTXlBcHAiLCJwcm9wcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYXBwVGhlbWUiLCJkaXJlY3Rpb24iLCJpMThuIiwibGFuZ3VhZ2UiLCJkb2N1bWVudCIsImRpciIsInByZWxvYWRlciIsImdldEVsZW1lbnRCeUlkIiwidW5kZWZpbmVkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImpzc1N0eWxlcyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ0b2dnbGVEYXJrVGhlbWUiLCJuZXdQYWxldHRlVHlwZSIsInNldEl0ZW0iLCJ0b2dnbGVEaXJlY3Rpb24iLCJtdWlUaGVtZSIsImNyZWF0ZU11aVRoZW1lIiwianNzIiwiY3JlYXRlIiwicGx1Z2lucyIsImpzc1ByZXNldCIsInJ0bCIsInJvdXRlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiYXBwQ29udGV4dCIsImFwcFdpdGhUcmFuc2xhdGlvbiIsImNvbG9yIiwibW9kZSIsImFjdGlvbiIsImhvdmVyIiwiaG92ZXJPcGFjaXR5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwiZm9udFdlaWdodFJlZ3VsYXIiLCJmb250V2VpZ2h0TWVkaXVtIiwiZm9udFdlaWdodEJvbGQiLCJzaGFkZSIsInJvdW5kZWQiLCJzbWFsbCIsIm1lZGl1bSIsImJpZyIsInNoYWRvd3MiLCJvdmVycmlkZXMiLCJQcml2YXRlVGFiSW5kaWNhdG9yIiwicm9vdCIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIk11aVBhcGVyIiwiZWxldmF0aW9uMSIsImJveFNoYWRvdyIsImVsZXZhdGlvbjQiLCJNdWlCdXR0b24iLCJjb250YWluZWRTZWNvbmRhcnkiLCJjb250YWluZWRQcmltYXJ5IiwiZm9udFdlaWdodCIsInBhZGRpbmciLCJzaXplU21hbGwiLCJzaXplTGFyZ2UiLCJNdWlUeXBvZ3JhcGh5IiwiYnV0dG9uIiwiTXVpSW5wdXRMYWJlbCIsImZpbGxlZCIsIk11aUZpbGxlZElucHV0IiwidW5kZXJsaW5lIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJtdWx0aWxpbmUiLCJwYWRkaW5nVG9wIiwiTXVpT3V0bGluZWRJbnB1dCIsImlucHV0QWRvcm5lZFN0YXJ0IiwicGFkZGluZ0xlZnQiLCJvY2VhbkJsdWUiLCJncmVlbkxlYWYiLCJtb25leSIsImdyYXlzY2FsZSIsImNsb3VkIiwiam9rZXIiLCJ2aW9sZXQiLCJ2aW9sZXRhIiwiZGVlcEJsdWUiLCJjb250cmFzdFRleHQiLCJyb3NlR29sZCIsInVidW50dSIsImdlZW5OYXR1cmUiLCJ2YW1waXJlIiwibWludCIsIm9jZWFuU2t5IiwiZ29sZCIsImJvdGFuaSIsImxpdHRsZVF1ZWVuIiwicHVycGxlIiwiYmxhY2siLCJicm93biJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsT0FBTztBQUNsQ0MsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxVQUROO0FBRUpDLE9BQUcsRUFBRSxDQUZEO0FBR0pDLFFBQUks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QUFZLEVBQUU7QUFKUCxPQURGO0FBT1A1SSxlQUFTLEVBQUU7QUFDVEQsYUFBSyxFQUFFLFNBREU7QUFFVEUsWUFBSSxFQUFFLFNBRkc7QUFHVEgsWUFBSSxFQUFFLFNBSEc7QUFJVDhJLG9CQUFZLEVBQUU7QUFKTDtBQVBKO0FBREosR0FqU1E7QUFpVGZZLE9BQUssRUFBRTtBQUNMN0osV0FBTyxFQUFFO0FBQ1BFLGFBQU8sRUFBRTtBQUNQRSxhQUFLLEVBQUUsU0FEQTtBQUVQRSxZQUFJLEVBQUUsU0FGQztBQUdQSCxZQUFJLEVBQUUsU0FIQztBQUlQOEksb0JBQVksRUFBRTtBQUpQLE9BREY7QUFPUDVJLGVBQVMsRUFBRTtBQUNURCxhQUFLLEVBQUUsU0FERTtBQUVURSxZQUFJLEVBQUUsU0FGRztBQUdUSCxZQUFJLEVBQUUsU0FIRztBQUlUOEksb0JBQVksRUFBRTtBQUpMO0FBUEo7QUFESjtBQWpUUSxDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICBoaWRlOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDBcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyYWRpZW50RGVjbygpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IFt0aGVtZVN0YXRlLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGhlbWUodGhlbWUucGFsZXR0ZS50eXBlKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGlkZX0+XHJcbiAgICAgIDxzdmcgd2lkdGg9XCIzOHB4XCIgaGVpZ2h0PVwiNDNweFwiIHZpZXdCb3g9XCIwIDAgMzggNDNcIiB2ZXJzaW9uPVwiMS4xXCI+XHJcbiAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9XCIzNC41MDYzODQ2JVwiIHkxPVwiMTUuMTMwMzgwOCVcIiB4Mj1cIjIwLjgxNTMxNTUlXCIgeTI9XCIxMTAuNjY0MDIzJVwiIGlkPVwidGl0bGVMaW5lYXJHcmFkaWVudC0xXCI+XHJcbiAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWVTdGF0ZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmsgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHR9IG9mZnNldD1cIjAlXCIgLz5cclxuICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPXt0aGVtZVN0YXRlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrIDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHR9IG9mZnNldD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9XCI2Ni44NDEyODQ0JVwiIHkxPVwiMzAuNjI0MjYlXCIgeDI9XCItMjEuMDU4MTQ0NyVcIiB5Mj1cIjEwMCVcIiBpZD1cImhleGFMaW5lYXJHcmFkaWVudC0zXCI+XHJcbiAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbn0gb2Zmc2V0PVwiMCVcIiAvPlxyXG4gICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0fSBvZmZzZXQ9XCIxMDAlXCIgLz5cclxuICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPVwiNjYuODQxMjg0NCVcIiB5MT1cIjMwLjYyNDI2JVwiIHgyPVwiLTIxLjA1ODE0NDclXCIgeTI9XCIxMDAlXCIgaWQ9XCJoZXhhTGluZWFyR3JhZGllbnQtMlwiPlxyXG4gICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSBvZmZzZXQ9XCIwJVwiIC8+XHJcbiAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0fSBvZmZzZXQ9XCIxMDAlXCIgLz5cclxuICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPVwiMzMuNjUwNTIxJVwiIHkxPVwiMTQuMzE0MDcxMyVcIiB4Mj1cIjE4Ljk2ODg1NTclXCIgeTI9XCIxMTAuNjY0MDIzJVwiIGlkPVwiZnJtRGVjb0xpbmVhckdyYWRpZW50LTFcIj5cclxuICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPXt0aGVtZVN0YXRlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSBvZmZzZXQ9XCIwJVwiIC8+XHJcbiAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWVTdGF0ZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayA6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59IG9mZnNldD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNNDAuMDI2ODUwNSwzNTEuODg4MjU4IEMyOTkuNDc1Nzc1LC0xMzcuOTMzMzExIDUwNS44Njc0NjMsLTMwNi4xODU3NjUgNjU5LjIwMTkxNSwtMTUyLjg2OTEwNCBDNzg4LjcwOTUxOSwtMjMuMzc2NTI3IDkzNS4zMjk0NzcsMjc1LjIwNjU4IDEwOTkuMDYxNzksNzQyLjg4MDIxOCBDMTE0NS4yMzI2OSw4NzQuNzU5NjA0IDEwNzUuNzUyMjQsMTAxOS4wOTc4OCA5NDMuODcyODYyLDEwNjUuMjY4NzkgQzg5NS4wNTQ0NzYsMTA4Mi4zNjAwOSA4NDIuMTcwNDkyLDEwODQuMDc3ODcgNzkyLjM0NTg1OCwxMDcwLjE5MDcyIEwzNzIuMzQxMTU0LDk1My4xMjY3NzQgQzMxOC4wMTI5NDIsOTM3Ljk4NDM4NCAyNzAuMzAxOTkxLDkwNS4xMjMyMzkgMjM2Ljc4NjU0Myw4NTkuNzYyODg5IEw2MC4xMTg1NTM0LDYyMC42NTc1NzUgQzIuMjg3NTA2ODYsNTQyLjM4ODEgLTUuNTI0NDg4NTYsNDM3Ljg4NjAyNiA0MC4wMjY4NTA1LDM1MS44ODgyNTggWlwiIGlkPVwicGF0aC0yXCIgLz5cclxuICAgICAgICA8L2RlZnM+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9HcmFkaWVudERlY28nO1xyXG4iLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHQ7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgZGVmYXVsdExhbmd1YWdlOiAnZW5nJyxcclxuICBvdGhlckxhbmd1YWdlczogWydhcmEnXSxcclxuICBmYWxsYmFja0xuZzogJ2VuZycsXHJcbiAgaW5pdEltbWVkaWF0ZTogZmFsc2UsXHJcbiAgbG9jYWxlUGF0aDogJ3B1YmxpYy9sb2NhbGVzJyxcclxuICByZWFjdDoge1xyXG4gICAgdXNlU3VzcGVuc2U6IGZhbHNlLFxyXG4gIH0sXHJcbiAgbG9jYWxlU3VicGF0aHM6IHtcclxuICAgIGFyYTogJ2FyJyxcclxuICAgIGVuZzogJ2VuJyxcclxuICB9LFxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gIFRoZW1lUHJvdmlkZXIsXHJcbiAgY3JlYXRlTXVpVGhlbWUsXHJcbiAgU3R5bGVzUHJvdmlkZXIsXHJcbiAganNzUHJlc2V0XHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnanNzJztcclxuaW1wb3J0IHsgUGFnZVRyYW5zaXRpb24gfSBmcm9tICduZXh0LXBhZ2UtdHJhbnNpdGlvbnMnO1xyXG5pbXBvcnQgcnRsIGZyb20gJ2pzcy1ydGwnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICdyZWFjdC10b3AtbG9hZGluZy1iYXInO1xyXG5pbXBvcnQgeyBpMThuLCBhcHBXaXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJztcclxuaW1wb3J0IGFwcFRoZW1lIGZyb20gJy4uL3RoZW1lL2FwcFRoZW1lJztcclxuaW1wb3J0IEdyYWRpZW50RGVjbyBmcm9tICcuLi9jb21wb25lbnRzL0dyYWRpZW50RGVjbyc7XHJcbi8qIGltcG9ydCBjc3MgdmVuZG9ycyAqL1xyXG5pbXBvcnQgJ3JlYWN0LWFuaW1hdGVkLXNsaWRlci9idWlsZC9ob3Jpem9udGFsLmNzcyc7XHJcbmltcG9ydCAnfi92ZW5kb3JzL2FuaW1hdGUtc2xpZGVyLmNzcyc7XHJcbmltcG9ydCAnfi92ZW5kb3JzL2hhbWJ1cmdlci1tZW51LmNzcyc7XHJcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzJztcclxuaW1wb3J0ICcuLi92ZW5kb3JzL3RvcC1sb2FkaW5nLWJhci5jc3MnO1xyXG5pbXBvcnQgJy4uL3ZlbmRvcnMvYW5pbWF0ZS1leHRlbmRzLmNzcyc7XHJcbmltcG9ydCAnLi4vdmVuZG9ycy9wYWdlLXRyYW5zaXRpb24uY3NzJztcclxuaW1wb3J0ICcuLi92ZW5kb3JzL3NsaWNrL3NsaWNrLmNzcyc7XHJcbmltcG9ydCAnLi4vdmVuZG9ycy9zbGljay9zbGljay10aGVtZS5jc3MnO1xyXG5cclxubGV0IHRoZW1lVHlwZSA9ICdsaWdodCc7XHJcbmlmICh0eXBlb2YgU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gIHRoZW1lVHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsdXhpVGhlbWUnKSB8fCAnbGlnaHQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNeUFwcChwcm9wcykge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoe1xyXG4gICAgLi4uYXBwVGhlbWUoJ2RlZXBCbHVlJywgdGhlbWVUeXBlKSxcclxuICAgIGRpcmVjdGlvbjogaTE4bi5sYW5ndWFnZSA9PT0gJ2FyYScgPyAncnRsJyA6ICdsdHInXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBTZXQgbGF5b3V0IGRpcmVjdGlvblxyXG4gICAgZG9jdW1lbnQuZGlyID0gaTE4bi5sYW5ndWFnZSA9PT0gJ2FyYScgPyAncnRsJyA6ICdsdHInO1xyXG5cclxuICAgIC8vIFJlbW92ZSBwcmVsb2FkZXJcclxuICAgIGNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVsb2FkZXInKTtcclxuICAgIGlmIChwcmVsb2FkZXIgIT09IG51bGwgfHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHByZWxvYWRlci5yZW1vdmUoKTtcclxuICAgICAgfSwgMTUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGxvYWRpbmcgYmFyXHJcbiAgICBzZXRMb2FkaW5nKDApO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHNldExvYWRpbmcoMTAwKTsgfSwgMjAwMCk7XHJcblxyXG4gICAgLy8gUmVmcmVzaCBKU1MgaW4gU1NSXHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XHJcbiAgICBpZiAoanNzU3R5bGVzKSB7XHJcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB0b2dnbGVEYXJrVGhlbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQYWxldHRlVHlwZSA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbHV4aVRoZW1lJywgdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0Jyk7XHJcbiAgICBzZXRUaGVtZSh7XHJcbiAgICAgIC4uLmFwcFRoZW1lKCdkZWVwQmx1ZScsIG5ld1BhbGV0dGVUeXBlKSxcclxuICAgICAgZGlyZWN0aW9uOiB0aGVtZS5kaXJlY3Rpb24sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVEaXJlY3Rpb24gPSBkaXIgPT4ge1xyXG4gICAgZG9jdW1lbnQuZGlyID0gZGlyO1xyXG4gICAgc2V0VGhlbWUoe1xyXG4gICAgICAuLi50aGVtZSxcclxuICAgICAgZGlyZWN0aW9uOiBkaXIsXHJcbiAgICAgIHBhbGV0dGU6IHtcclxuICAgICAgICAuLi50aGVtZS5wYWxldHRlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG11aVRoZW1lID0gY3JlYXRlTXVpVGhlbWUodGhlbWUpO1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9ID0gcHJvcHM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICBjb25zdCBqc3MgPSBjcmVhdGUoeyBwbHVnaW5zOiBbLi4uanNzUHJlc2V0KCkucGx1Z2lucywgcnRsKCldIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBzaHJpbmstdG8tZml0PW5vXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTdHlsZXNQcm92aWRlciBqc3M9e2pzc30+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e211aVRoZW1lfT5cclxuICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgPEdyYWRpZW50RGVjbyAvPlxyXG4gICAgICAgICAgPExvYWRpbmdCYXJcclxuICAgICAgICAgICAgaGVpZ2h0PXswfVxyXG4gICAgICAgICAgICBjb2xvcj17dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0fVxyXG4gICAgICAgICAgICBwcm9ncmVzcz17bG9hZGluZ31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLWxvYWRpbmctYmFyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibWFpbi13cmFwXCI+XHJcbiAgICAgICAgICAgIDxQYWdlVHJhbnNpdGlvbiB0aW1lb3V0PXszMDB9IGNsYXNzTmFtZXM9XCJwYWdlLWZhZGUtdHJhbnNpdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHsuLi5wYWdlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBvblRvZ2dsZURhcms9e3RvZ2dsZURhcmtUaGVtZX1cclxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlRGlyPXt0b2dnbGVEaXJlY3Rpb259XHJcbiAgICAgICAgICAgICAgICBrZXk9e3JvdXRlci5yb3V0ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L1N0eWxlc1Byb3ZpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuTXlBcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufTtcclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiAoey4uLmF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCkgfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFdpdGhUcmFuc2xhdGlvbihNeUFwcCk7XHJcbiIsImltcG9ydCBwYWxldHRlIGZyb20gJy4vcGFsZXR0ZSc7XHJcbmNvbnN0IGFwcFRoZW1lID0gKGNvbG9yLCBtb2RlKSA9PiAoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHR5cGU6IG1vZGUsXHJcbiAgICBwcmltYXJ5OiBwYWxldHRlW2NvbG9yXS5wYWxldHRlLnByaW1hcnksXHJcbiAgICBzZWNvbmRhcnk6IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUuc2Vjb25kYXJ5LFxyXG4gICAgYWN0aW9uOiB7XHJcbiAgICAgIGhvdmVyOiBtb2RlID09PSAnZGFyaycgPyAncmdiYSgxMjgsMTI4LDEyOCwgMC45KScgOiAncmdiYSgxMjgsMTI4LDEyOCwgMC4wNSknLFxyXG4gICAgICBob3Zlck9wYWNpdHk6IDAuMDVcclxuICAgIH1cclxuICB9LFxyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIGZvbnRGYW1pbHk6IFtcclxuICAgICAgJ01vbnRzZXJyYXQnLFxyXG4gICAgICAnc2Fucy1zZXJpZicsXHJcbiAgICBdLmpvaW4oJywnKSxcclxuICAgIGZvbnRXZWlnaHRSZWd1bGFyOiA0MDAsXHJcbiAgICBmb250V2VpZ2h0TWVkaXVtOiA1MDAsXHJcbiAgICBmb250V2VpZ2h0Qm9sZDogNjAwLFxyXG4gIH0sXHJcbiAgc2hhZGU6IHtcclxuICAgIGxpZ2h0OiAnMCAxMHB4IDE1cHggLTVweCByZ2JhKDYyLCA1NywgMTA3LCAuMDcpJyxcclxuICB9LFxyXG4gIHJvdW5kZWQ6IHtcclxuICAgIHNtYWxsOiAnOHB4JyxcclxuICAgIG1lZGl1bTogJzEycHgnLFxyXG4gICAgYmlnOiAnMjBweCdcclxuICB9LFxyXG4gIHNoYWRvd3M6IG1vZGUgPT09ICdkYXJrJ1xyXG4gICAgPyBbXHJcbiAgICAgICdub25lJyxcclxuICAgICAgJzBweCAxcHggM3B4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxcHggMXB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggMnB4IDFweCAtMXB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCAxcHggNXB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggM3B4IDFweCAtMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCAxcHggOHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggM3B4IDNweCAtMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCAycHggNHB4IC0xcHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggM3B4IDVweCAtMXB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDVweCA4cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCAxcHggMTRweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDNweCA1cHggLTFweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDFweCAxOHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggNHB4IDVweCAtMnB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDdweCAxMHB4IDFweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggMnB4IDE2cHggMXB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCA1cHggNXB4IC0zcHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggOHB4IDEwcHggMXB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDVweCA2cHggLTNweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCA5cHggMTJweCAxcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDNweCAxNnB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggNnB4IDZweCAtM3B4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDEwcHggMTRweCAxcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDRweCAxOHB4IDNweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggNnB4IDdweCAtNHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDExcHggMTVweCAxcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDRweCAyMHB4IDNweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggN3B4IDhweCAtNHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDEycHggMTdweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggN3B4IDhweCAtNHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDEzcHggMTlweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDVweCAyNHB4IDRweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggN3B4IDlweCAtNHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDE0cHggMjFweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDVweCAyNnB4IDRweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggOHB4IDlweCAtNXB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDE1cHggMjJweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDZweCAyOHB4IDVweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggOHB4IDEwcHggLTVweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA2cHggMzBweCA1cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDhweCAxMXB4IC01cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTdweCAyNnB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNnB4IDMycHggNXB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCA5cHggMTFweCAtNXB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDE4cHggMjhweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDdweCAzNHB4IDZweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggOXB4IDEycHggLTZweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxOXB4IDI5cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA3cHggMzZweCA2cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDIwcHggMzFweCAzcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDhweCAzOHB4IDdweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggMTBweCAxM3B4IC02cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMjFweCAzM3B4IDNweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggOHB4IDQwcHggN3B4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCAxMHB4IDE0cHggLTZweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyMnB4IDM1cHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA4cHggNDJweCA3cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDExcHggMTRweCAtN3B4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDIzcHggMzZweCAzcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDlweCA0NHB4IDhweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggMTFweCAxNXB4IC03cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMjRweCAzOHB4IDNweCByZ2JhKDg1MCw1MCw1MCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgIF1cclxuICAgIDogW1xyXG4gICAgICAnbm9uZScsXHJcbiAgICAgICcwcHggMXB4IDNweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMXB4IDFweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDJweCAxcHggLTFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggMXB4IDVweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDNweCAxcHggLTJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggMXB4IDhweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggM3B4IDRweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDNweCAzcHggLTJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggMnB4IDRweCAtMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDNweCA1cHggLTFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA1cHggOHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggMXB4IDE0cHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcclxuICAgICAgJzBweCAzcHggNXB4IC0xcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggNnB4IDEwcHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDRweCA1cHggLTJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA3cHggMTBweCAxcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDJweCAxNnB4IDFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggNXB4IDVweCAtM3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggM3B4IDE0cHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcclxuICAgICAgJzBweCA1cHggNnB4IC0zcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggOXB4IDEycHggMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAzcHggMTZweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDZweCA2cHggLTNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxMHB4IDE0cHggMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA0cHggMThweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDZweCA3cHggLTRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxMXB4IDE1cHggMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA0cHggMjBweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDdweCA4cHggLTRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDdweCA4cHggLTRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxM3B4IDE5cHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA1cHggMjRweCA0cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDdweCA5cHggLTRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxNHB4IDIxcHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA1cHggMjZweCA0cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDhweCA5cHggLTVweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxNXB4IDIycHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA2cHggMjhweCA1cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDhweCAxMHB4IC01cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTZweCAyNHB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcclxuICAgICAgJzBweCA4cHggMTFweCAtNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDE3cHggMjZweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDZweCAzMnB4IDVweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggOXB4IDExcHggLTVweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxOHB4IDI4cHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA3cHggMzRweCA2cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDlweCAxMnB4IC02cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTlweCAyOXB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggN3B4IDM2cHggNnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcclxuICAgICAgJzBweCAxMHB4IDEzcHggLTZweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAyMHB4IDMxcHggM3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA4cHggMzhweCA3cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDIxcHggMzNweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDhweCA0MHB4IDdweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggMTBweCAxNHB4IC02cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjJweCAzNXB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOHB4IDQycHggN3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcclxuICAgICAgJzBweCAxMXB4IDE0cHggLTdweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAyM3B4IDM2cHggM3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA5cHggNDRweCA4cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDI0cHggMzhweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDlweCA0NnB4IDhweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICBdLFxyXG4gIG92ZXJyaWRlczoge1xyXG4gICAgUHJpdmF0ZVRhYkluZGljYXRvcjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4IDRweCAwIDAnLFxyXG4gICAgICAgIGhlaWdodDogNVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgTXVpUGFwZXI6IHtcclxuICAgICAgcm91bmRlZDoge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTJcclxuICAgICAgfSxcclxuICAgICAgZWxldmF0aW9uMToge1xyXG4gICAgICAgIGJveFNoYWRvdzogbW9kZSA9PT0gJ2RhcmsnID8gJzBweCAxcHggM3B4IDBweCByZ2JhKDY0LCA2NCwgNjQsIDEpLCAwcHggMXB4IDFweCAwcHggcmdiYSg0MiwgNDIsIDQyLCAxKSwgMHB4IDJweCAxcHggLTFweCByZ2JhKDIwLCAyMCwgMjAsIDEpJyA6ICcwIDEuNXB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknXHJcbiAgICAgIH0sXHJcbiAgICAgIGVsZXZhdGlvbjQ6IHtcclxuICAgICAgICBib3hTaGFkb3c6IG1vZGUgPT09ICdkYXJrJyA/ICcwcHggMnB4IDRweCAtMXB4IHJnYmEoNjQsIDY0LCA2NCwgMC40NiksIDBweCA0cHggNXB4IDBweCByZ2JhKDQyLCA0MiwgNDIsIDAuMzIpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMjAsIDIwLCAyMCwgMC4xMiknIDogJzAgMS41cHggMTJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICBjb250YWluZWRTZWNvbmRhcnk6IHtcclxuICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgICAgIGJveFNoYWRvdzogYDAgMCA0cHggLTFweCAke3BhbGV0dGVbY29sb3JdLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59YFxyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZWRQcmltYXJ5OiB7XHJcbiAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgICAgICBib3hTaGFkb3c6IGAwIDAgNHB4IC0xcHggJHtwYWxldHRlW2NvbG9yXS5wYWxldHRlLnByaW1hcnkubWFpbn1gXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDYsXHJcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICc4cHggMjRweCdcclxuICAgICAgfSxcclxuICAgICAgc2l6ZVNtYWxsOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzdweCAxMnB4J1xyXG4gICAgICB9LFxyXG4gICAgICBzaXplTGFyZ2U6IHtcclxuICAgICAgICBwYWRkaW5nOiAnN3B4IDM2cHgnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBNdWlUeXBvZ3JhcGh5OiB7XHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgTXVpSW5wdXRMYWJlbDoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgJyYkZm9jdXNlZCc6IHtcclxuICAgICAgICAgIGNvbG9yOiBwYWxldHRlW2NvbG9yXS5wYWxldHRlLnByaW1hcnkubWFpblxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmlsbGVkOiB7XHJcbiAgICAgICAgJyYkc2hyaW5rJzoge1xyXG4gICAgICAgICAgY29sb3I6IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUucHJpbWFyeS5tYWluXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgTXVpRmlsbGVkSW5wdXQ6IHtcclxuICAgICAgdW5kZXJsaW5lOiB7XHJcbiAgICAgICAgJyY6YWZ0ZXInOiB7XHJcbiAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogcGFsZXR0ZVtjb2xvcl0ucGFsZXR0ZS5wcmltYXJ5Lm1haW5cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBtdWx0aWxpbmU6IHtcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICcmIHRleHRhcmVhJzoge1xyXG4gICAgICAgICAgcGFkZGluZ1RvcDogMjdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBNdWlPdXRsaW5lZElucHV0OiB7XHJcbiAgICAgIGlucHV0QWRvcm5lZFN0YXJ0OiB7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDQwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFRoZW1lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBvY2VhbkJsdWU6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0JCREVGQicsXHJcbiAgICAgICAgbWFpbjogJyMyMTk2RjMnLFxyXG4gICAgICAgIGRhcms6ICcjMEQ0N0ExJ1xyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNCMkVCRjInLFxyXG4gICAgICAgIG1haW46ICcjMDBCQ0Q0JyxcclxuICAgICAgICBkYXJrOiAnIzAwNjA2NCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JlZW5MZWFmOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNDOEU2QzknLFxyXG4gICAgICAgIG1haW46ICcjNENBRjUwJyxcclxuICAgICAgICBkYXJrOiAnIzFCNUUyMCdcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjQ0ZEOERDJyxcclxuICAgICAgICBtYWluOiAnIzYwN0Q4QicsXHJcbiAgICAgICAgZGFyazogJyMzNzQ3NEYnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1vbmV5OiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNDOEU2QzknLFxyXG4gICAgICAgIG1haW46ICcjNENBRjUwJyxcclxuICAgICAgICBkYXJrOiAnIzJFN0QzMidcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRkZFQ0IzJyxcclxuICAgICAgICBtYWluOiAnI0ZGQTAwMCcsXHJcbiAgICAgICAgZGFyazogJyNGRjZGMDAnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGdyYXlzY2FsZToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjQ0ZEOERDJyxcclxuICAgICAgICBtYWluOiAnIzU0NkU3QScsXHJcbiAgICAgICAgZGFyazogJyMyNjMyMzgnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0Q3Q0NDOCcsXHJcbiAgICAgICAgbWFpbjogJyM2RDRDNDEnLFxyXG4gICAgICAgIGRhcms6ICcjM0UyNzIzJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjbG91ZDoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjQjNFNUZDJyxcclxuICAgICAgICBtYWluOiAnIzAzQTlGNCcsXHJcbiAgICAgICAgZGFyazogJyMwMTU3OUInXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0ZGRTBCMicsXHJcbiAgICAgICAgbWFpbjogJyNGRjk4MDAnLFxyXG4gICAgICAgIGRhcms6ICcjRTY1MTAwJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBqb2tlcjoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRDFDNEU5JyxcclxuICAgICAgICBtYWluOiAnIzY3M0FCNycsXHJcbiAgICAgICAgZGFyazogJyMzMTFCOTInXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0IyRUJGMicsXHJcbiAgICAgICAgbWFpbjogJyMwMEJDRDQnLFxyXG4gICAgICAgIGRhcms6ICcjMDA2MDY0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB2aW9sZXQ6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0Y4QkJEMCcsXHJcbiAgICAgICAgbWFpbjogJyNFQzQwN0EnLFxyXG4gICAgICAgIGRhcms6ICcjODgwRTRGJ1xyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNEMUM0RTknLFxyXG4gICAgICAgIG1haW46ICcjNjczQUI3JyxcclxuICAgICAgICBkYXJrOiAnIzMxMUI5MidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdmlvbGV0YToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRTFCRUU3JyxcclxuICAgICAgICBtYWluOiAnIzlDMjdCMCcsXHJcbiAgICAgICAgZGFyazogJyM2QTFCOUEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0RDRURDOCcsXHJcbiAgICAgICAgbWFpbjogJyM4QkMzNEEnLFxyXG4gICAgICAgIGRhcms6ICcjNTU4QjJGJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWVwQmx1ZToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjMGM4OGVkJyxcclxuICAgICAgICBtYWluOiAnIzBjODNlNCcsXHJcbiAgICAgICAgZGFyazogJyMwOTYxYWEnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyM4MjAyZjInLFxyXG4gICAgICAgIG1haW46ICcjNjIwMmI2JyxcclxuICAgICAgICBkYXJrOiAnIzQ5MDE4OCcsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcm9zZUdvbGQ6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0U4RUFGNicsXHJcbiAgICAgICAgbWFpbjogJyMzRjUxQjUnLFxyXG4gICAgICAgIGRhcms6ICcjMjgzNTkzJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRTFGNUZFJyxcclxuICAgICAgICBtYWluOiAnIzAzQTlGNCcsXHJcbiAgICAgICAgZGFyazogJyMwMjc3QkQnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHVidW50dToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRkZGM0UwJyxcclxuICAgICAgICBtYWluOiAnI0VGNkMwMCcsXHJcbiAgICAgICAgZGFyazogJyNFNjUxMDAnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGM0U1RjUnLFxyXG4gICAgICAgIG1haW46ICcjOUMyN0IwJyxcclxuICAgICAgICBkYXJrOiAnIzdCMUZBMicsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZ2Vlbk5hdHVyZToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRTBGN0ZBJyxcclxuICAgICAgICBtYWluOiAnIzAwOTY4OCcsXHJcbiAgICAgICAgZGFyazogJyMwMDY5NUMnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGMUY4RTknLFxyXG4gICAgICAgIG1haW46ICcjNjg5RjM4JyxcclxuICAgICAgICBkYXJrOiAnIzMzNjkxRScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdmFtcGlyZToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRkZFQkVFJyxcclxuICAgICAgICBtYWluOiAnI2Y0NDMzNicsXHJcbiAgICAgICAgZGFyazogJyNFNTM5MzUnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFQ0VGRjEnLFxyXG4gICAgICAgIG1haW46ICcjNjA3RDhCJyxcclxuICAgICAgICBkYXJrOiAnIzQ1NUE2NCcsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWludDoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjYmJkZWZiJyxcclxuICAgICAgICBtYWluOiAnIzIxOTZmMycsXHJcbiAgICAgICAgZGFyazogJyMwZDQ3YTEnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNiM2U1ZmMnLFxyXG4gICAgICAgIG1haW46ICcjMDNhOWY0JyxcclxuICAgICAgICBkYXJrOiAnIzAxNTc5YicsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb2NlYW5Ta3k6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0UzRjJGRCcsXHJcbiAgICAgICAgbWFpbjogJyMyMTk2RjMnLFxyXG4gICAgICAgIGRhcms6ICcjMTU2NUMwJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRTBGMkYxJyxcclxuICAgICAgICBtYWluOiAnIzAwQkZBNScsXHJcbiAgICAgICAgZGFyazogJyMwMDc5NkInLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGdvbGQ6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0ZGRjlDNCcsXHJcbiAgICAgICAgbWFpbjogJyNGRjkxMDAnLFxyXG4gICAgICAgIGRhcms6ICcjRkY2RDAwJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRUZFQkU5JyxcclxuICAgICAgICBtYWluOiAnIzhENkU2MycsXHJcbiAgICAgICAgZGFyazogJyM0RTM0MkUnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJvdGFuaToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRENFREM4JyxcclxuICAgICAgICBtYWluOiAnIzY4OUYzOCcsXHJcbiAgICAgICAgZGFyazogJyMzMzY5MUUnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGQ0U0RUMnLFxyXG4gICAgICAgIG1haW46ICcjRjA2MjkyJyxcclxuICAgICAgICBkYXJrOiAnI0FEMTQ1NycsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGl0dGxlUXVlZW46IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0UwRjdGQScsXHJcbiAgICAgICAgbWFpbjogJyMwMEJDRDQnLFxyXG4gICAgICAgIGRhcms6ICcjMDA2MDY0JyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRkNFNEVDJyxcclxuICAgICAgICBtYWluOiAnI0YwNjI5MicsXHJcbiAgICAgICAgZGFyazogJyNBRDE0NTcnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHB1cnBsZToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjZjNlNWY1JyxcclxuICAgICAgICBtYWluOiAnIzljMjdiMCcsXHJcbiAgICAgICAgZGFyazogJyM2YTFiOWEnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNlYTgwZmMnLFxyXG4gICAgICAgIG1haW46ICcjYWEwMGZmJyxcclxuICAgICAgICBkYXJrOiAnIzRhMTQ4YycsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmxhY2s6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnIzllOWU5ZScsXHJcbiAgICAgICAgbWFpbjogJyMyMTIxMjEnLFxyXG4gICAgICAgIGRhcms6ICcjMDAwJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRTBFMEUwJyxcclxuICAgICAgICBtYWluOiAnIzc1NzU3NScsXHJcbiAgICAgICAgZGFyazogJyM0MjQyNDInLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJyb3duOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNkN2NjYzgnLFxyXG4gICAgICAgIG1haW46ICcjNzk1NTQ4JyxcclxuICAgICAgICBkYXJrOiAnIzRlMzQyZScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI2NjYjBiMCcsXHJcbiAgICAgICAgbWFpbjogJyM3OTQ4NDgnLFxyXG4gICAgICAgIGRhcms6ICcjM2UyNzIzJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzcy1ydGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcGFnZS10cmFuc2l0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b3AtbG9hZGluZy1iYXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==