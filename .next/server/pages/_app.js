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
  // otherLanguages: ['ara'],
  fallbackLng: 'eng',
  initImmediate: false,
  localePath: 'public/locales',
  react: {
    useSuspense: false
  },
  localeSubpaths: {
    // ara: 'ar',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JhZGllbnREZWNvL0dyYWRpZW50RGVjby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyYWRpZW50RGVjby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pMThuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUvYXBwVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUvcGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzcy1ydGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXBhZ2UtdHJhbnNpdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b3AtbG9hZGluZy1iYXJcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiaGlkZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIkdyYWRpZW50RGVjbyIsImNsYXNzZXMiLCJ0aGVtZSIsInVzZVRoZW1lIiwidGhlbWVTdGF0ZSIsInNldFRoZW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwYWxldHRlIiwidHlwZSIsInByaW1hcnkiLCJkYXJrIiwibGlnaHQiLCJzZWNvbmRhcnkiLCJtYWluIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJmYWxsYmFja0xuZyIsImluaXRJbW1lZGlhdGUiLCJsb2NhbGVQYXRoIiwicmVhY3QiLCJ1c2VTdXNwZW5zZSIsImxvY2FsZVN1YnBhdGhzIiwiZW5nIiwicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJ0aGVtZVR5cGUiLCJTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIk15QXBwIiwicHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImFwcFRoZW1lIiwiZGlyZWN0aW9uIiwiaTE4biIsImxhbmd1YWdlIiwiZG9jdW1lbnQiLCJkaXIiLCJwcmVsb2FkZXIiLCJnZXRFbGVtZW50QnlJZCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJqc3NTdHlsZXMiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidG9nZ2xlRGFya1RoZW1lIiwibmV3UGFsZXR0ZVR5cGUiLCJzZXRJdGVtIiwidG9nZ2xlRGlyZWN0aW9uIiwibXVpVGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsImpzcyIsImNyZWF0ZSIsInBsdWdpbnMiLCJqc3NQcmVzZXQiLCJydGwiLCJyb3V0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImFwcENvbnRleHQiLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJjb2xvciIsIm1vZGUiLCJhY3Rpb24iLCJob3ZlciIsImhvdmVyT3BhY2l0eSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwiam9pbiIsImZvbnRXZWlnaHRSZWd1bGFyIiwiZm9udFdlaWdodE1lZGl1bSIsImZvbnRXZWlnaHRCb2xkIiwic2hhZGUiLCJyb3VuZGVkIiwic21hbGwiLCJtZWRpdW0iLCJiaWciLCJzaGFkb3dzIiwib3ZlcnJpZGVzIiwiUHJpdmF0ZVRhYkluZGljYXRvciIsInJvb3QiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJNdWlQYXBlciIsImVsZXZhdGlvbjEiLCJib3hTaGFkb3ciLCJlbGV2YXRpb240IiwiTXVpQnV0dG9uIiwiY29udGFpbmVkU2Vjb25kYXJ5IiwiY29udGFpbmVkUHJpbWFyeSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nIiwic2l6ZVNtYWxsIiwic2l6ZUxhcmdlIiwiTXVpVHlwb2dyYXBoeSIsImJ1dHRvbiIsIk11aUlucHV0TGFiZWwiLCJmaWxsZWQiLCJNdWlGaWxsZWRJbnB1dCIsInVuZGVybGluZSIsImJvcmRlckJvdHRvbUNvbG9yIiwibXVsdGlsaW5lIiwicGFkZGluZ1RvcCIsIk11aU91dGxpbmVkSW5wdXQiLCJpbnB1dEFkb3JuZWRTdGFydCIsInBhZGRpbmdMZWZ0Iiwib2NlYW5CbHVlIiwiZ3JlZW5MZWFmIiwibW9uZXkiLCJncmF5c2NhbGUiLCJjbG91ZCIsImpva2VyIiwidmlvbGV0IiwidmlvbGV0YSIsImRlZXBCbHVlIiwiY29udHJhc3RUZXh0Iiwicm9zZUdvbGQiLCJ1YnVudHUiLCJnZWVuTmF0dXJlIiwidmFtcGlyZSIsIm1pbnQiLCJvY2VhblNreSIsImdvbGQiLCJib3RhbmkiLCJsaXR0bGVRdWVlbiIsInB1cnBsZSIsImJsYWNrIiwiYnJvd24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLE9BQU87QUFDbENDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUUsVUFETjtBQUVKQyxPQUFHLEVBQUUsQ0FGRDtBQUdKQyxRQUFJLEVBQUU7QUFIRjtBQUQ0QixDQUFQLENB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LEVBQUUsU0FGRztBQUdUSCxZQUFJLEVBQUUsU0FIRztBQUlUNEksb0JBQVksRUFBRTtBQUpMO0FBUEo7QUFESixHQWpTUTtBQWlUZlksT0FBSyxFQUFFO0FBQ0wzSixXQUFPLEVBQUU7QUFDUEUsYUFBTyxFQUFFO0FBQ1BFLGFBQUssRUFBRSxTQURBO0FBRVBFLFlBQUksRUFBRSxTQUZDO0FBR1BILFlBQUksRUFBRSxTQUhDO0FBSVA0SSxvQkFBWSxFQUFFO0FBSlAsT0FERjtBQU9QMUksZUFBUyxFQUFFO0FBQ1RELGFBQUssRUFBRSxTQURFO0FBRVRFLFlBQUksRUFBRSxTQUZHO0FBR1RILFlBQUksRUFBRSxTQUhHO0FBSVQ0SSxvQkFBWSxFQUFFO0FBSkw7QUFQSjtBQURKO0FBalRRLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIGhpZGU6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMFxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JhZGllbnREZWNvKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgW3RoZW1lU3RhdGUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaGVtZSh0aGVtZS5wYWxldHRlLnR5cGUpO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oaWRlfT5cclxuICAgICAgPHN2ZyB3aWR0aD1cIjM4cHhcIiBoZWlnaHQ9XCI0M3B4XCIgdmlld0JveD1cIjAgMCAzOCA0M1wiIHZlcnNpb249XCIxLjFcIj5cclxuICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT1cIjM0LjUwNjM4NDYlXCIgeTE9XCIxNS4xMzAzODA4JVwiIHgyPVwiMjAuODE1MzE1NSVcIiB5Mj1cIjExMC42NjQwMjMlXCIgaWQ9XCJ0aXRsZUxpbmVhckdyYWRpZW50LTFcIj5cclxuICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPXt0aGVtZVN0YXRlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodH0gb2Zmc2V0PVwiMCVcIiAvPlxyXG4gICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lU3RhdGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmsgOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodH0gb2Zmc2V0PVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDwvZGVmcz5cclxuICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT1cIjY2Ljg0MTI4NDQlXCIgeTE9XCIzMC42MjQyNiVcIiB4Mj1cIi0yMS4wNTgxNDQ3JVwiIHkyPVwiMTAwJVwiIGlkPVwiaGV4YUxpbmVhckdyYWRpZW50LTNcIj5cclxuICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPXt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSBvZmZzZXQ9XCIwJVwiIC8+XHJcbiAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHR9IG9mZnNldD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9XCI2Ni44NDEyODQ0JVwiIHkxPVwiMzAuNjI0MjYlXCIgeDI9XCItMjEuMDU4MTQ0NyVcIiB5Mj1cIjEwMCVcIiBpZD1cImhleGFMaW5lYXJHcmFkaWVudC0yXCI+XHJcbiAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IG9mZnNldD1cIjAlXCIgLz5cclxuICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPXt0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHR9IG9mZnNldD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9XCIzMy42NTA1MjElXCIgeTE9XCIxNC4zMTQwNzEzJVwiIHgyPVwiMTguOTY4ODU1NyVcIiB5Mj1cIjExMC42NjQwMjMlXCIgaWQ9XCJmcm1EZWNvTGluZWFyR3JhZGllbnQtMVwiPlxyXG4gICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lU3RhdGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrIDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IG9mZnNldD1cIjAlXCIgLz5cclxuICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPXt0aGVtZVN0YXRlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrIDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbn0gb2Zmc2V0PVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgPHBhdGggZD1cIk00MC4wMjY4NTA1LDM1MS44ODgyNTggQzI5OS40NzU3NzUsLTEzNy45MzMzMTEgNTA1Ljg2NzQ2MywtMzA2LjE4NTc2NSA2NTkuMjAxOTE1LC0xNTIuODY5MTA0IEM3ODguNzA5NTE5LC0yMy4zNzY1MjcgOTM1LjMyOTQ3NywyNzUuMjA2NTggMTA5OS4wNjE3OSw3NDIuODgwMjE4IEMxMTQ1LjIzMjY5LDg3NC43NTk2MDQgMTA3NS43NTIyNCwxMDE5LjA5Nzg4IDk0My44NzI4NjIsMTA2NS4yNjg3OSBDODk1LjA1NDQ3NiwxMDgyLjM2MDA5IDg0Mi4xNzA0OTIsMTA4NC4wNzc4NyA3OTIuMzQ1ODU4LDEwNzAuMTkwNzIgTDM3Mi4zNDExNTQsOTUzLjEyNjc3NCBDMzE4LjAxMjk0Miw5MzcuOTg0Mzg0IDI3MC4zMDE5OTEsOTA1LjEyMzIzOSAyMzYuNzg2NTQzLDg1OS43NjI4ODkgTDYwLjExODU1MzQsNjIwLjY1NzU3NSBDMi4yODc1MDY4Niw1NDIuMzg4MSAtNS41MjQ0ODg1Niw0MzcuODg2MDI2IDQwLjAyNjg1MDUsMzUxLjg4ODI1OCBaXCIgaWQ9XCJwYXRoLTJcIiAvPlxyXG4gICAgICAgIDwvZGVmcz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0dyYWRpZW50RGVjbyc7XHJcbiIsImNvbnN0IE5leHRJMThOZXh0ID0gcmVxdWlyZSgnbmV4dC1pMThuZXh0JykuZGVmYXVsdDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcclxuICBkZWZhdWx0TGFuZ3VhZ2U6ICdlbmcnLFxyXG4gIC8vIG90aGVyTGFuZ3VhZ2VzOiBbJ2FyYSddLFxyXG4gIGZhbGxiYWNrTG5nOiAnZW5nJyxcclxuICBpbml0SW1tZWRpYXRlOiBmYWxzZSxcclxuICBsb2NhbGVQYXRoOiAncHVibGljL2xvY2FsZXMnLFxyXG4gIHJlYWN0OiB7XHJcbiAgICB1c2VTdXNwZW5zZTogZmFsc2UsXHJcbiAgfSxcclxuICBsb2NhbGVTdWJwYXRoczoge1xyXG4gICAgLy8gYXJhOiAnYXInLFxyXG4gICAgZW5nOiAnZW4nLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7XHJcbiAgVGhlbWVQcm92aWRlcixcclxuICBjcmVhdGVNdWlUaGVtZSxcclxuICBTdHlsZXNQcm92aWRlcixcclxuICBqc3NQcmVzZXRcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdqc3MnO1xyXG5pbXBvcnQgeyBQYWdlVHJhbnNpdGlvbiB9IGZyb20gJ25leHQtcGFnZS10cmFuc2l0aW9ucyc7XHJcbmltcG9ydCBydGwgZnJvbSAnanNzLXJ0bCc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBMb2FkaW5nQmFyIGZyb20gJ3JlYWN0LXRvcC1sb2FkaW5nLWJhcic7XHJcbmltcG9ydCB7IGkxOG4sIGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2kxOG4nO1xyXG5pbXBvcnQgYXBwVGhlbWUgZnJvbSAnLi4vdGhlbWUvYXBwVGhlbWUnO1xyXG5pbXBvcnQgR3JhZGllbnREZWNvIGZyb20gJy4uL2NvbXBvbmVudHMvR3JhZGllbnREZWNvJztcclxuLyogaW1wb3J0IGNzcyB2ZW5kb3JzICovXHJcbmltcG9ydCAncmVhY3QtYW5pbWF0ZWQtc2xpZGVyL2J1aWxkL2hvcml6b250YWwuY3NzJztcclxuaW1wb3J0ICd+L3ZlbmRvcnMvYW5pbWF0ZS1zbGlkZXIuY3NzJztcclxuaW1wb3J0ICd+L3ZlbmRvcnMvaGFtYnVyZ2VyLW1lbnUuY3NzJztcclxuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3ZlbmRvcnMvdG9wLWxvYWRpbmctYmFyLmNzcyc7XHJcbmltcG9ydCAnLi4vdmVuZG9ycy9hbmltYXRlLWV4dGVuZHMuY3NzJztcclxuaW1wb3J0ICcuLi92ZW5kb3JzL3BhZ2UtdHJhbnNpdGlvbi5jc3MnO1xyXG5pbXBvcnQgJy4uL3ZlbmRvcnMvc2xpY2svc2xpY2suY3NzJztcclxuaW1wb3J0ICcuLi92ZW5kb3JzL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XHJcblxyXG5sZXQgdGhlbWVUeXBlID0gJ2xpZ2h0JztcclxuaWYgKHR5cGVvZiBTdG9yYWdlICE9PSAndW5kZWZpbmVkJykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgdGhlbWVUeXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2x1eGlUaGVtZScpIHx8ICdsaWdodCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAuLi5hcHBUaGVtZSgnZGVlcEJsdWUnLCB0aGVtZVR5cGUpLFxyXG4gICAgZGlyZWN0aW9uOiBpMThuLmxhbmd1YWdlID09PSAnYXJhJyA/ICdydGwnIDogJ2x0cidcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFNldCBsYXlvdXQgZGlyZWN0aW9uXHJcbiAgICBkb2N1bWVudC5kaXIgPSBpMThuLmxhbmd1YWdlID09PSAnYXJhJyA/ICdydGwnIDogJ2x0cic7XHJcblxyXG4gICAgLy8gUmVtb3ZlIHByZWxvYWRlclxyXG4gICAgY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZWxvYWRlcicpO1xyXG4gICAgaWYgKHByZWxvYWRlciAhPT0gbnVsbCB8fCB1bmRlZmluZWQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcHJlbG9hZGVyLnJlbW92ZSgpO1xyXG4gICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgbG9hZGluZyBiYXJcclxuICAgIHNldExvYWRpbmcoMCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2V0TG9hZGluZygxMDApOyB9LCAyMDAwKTtcclxuXHJcbiAgICAvLyBSZWZyZXNoIEpTUyBpbiBTU1JcclxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcclxuICAgIGlmIChqc3NTdHlsZXMpIHtcclxuICAgICAganNzU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURhcmtUaGVtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1BhbGV0dGVUeXBlID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsdXhpVGhlbWUnLCB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKTtcclxuICAgIHNldFRoZW1lKHtcclxuICAgICAgLi4uYXBwVGhlbWUoJ2RlZXBCbHVlJywgbmV3UGFsZXR0ZVR5cGUpLFxyXG4gICAgICBkaXJlY3Rpb246IHRoZW1lLmRpcmVjdGlvbixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURpcmVjdGlvbiA9IGRpciA9PiB7XHJcbiAgICBkb2N1bWVudC5kaXIgPSBkaXI7XHJcbiAgICBzZXRUaGVtZSh7XHJcbiAgICAgIC4uLnRoZW1lLFxyXG4gICAgICBkaXJlY3Rpb246IGRpcixcclxuICAgICAgcGFsZXR0ZToge1xyXG4gICAgICAgIC4uLnRoZW1lLnBhbGV0dGVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbXVpVGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh0aGVtZSk7XHJcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0gPSBwcm9wczsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gIGNvbnN0IGpzcyA9IGNyZWF0ZSh7IHBsdWdpbnM6IFsuLi5qc3NQcmVzZXQoKS5wbHVnaW5zLCBydGwoKV0gfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgsIHNocmluay10by1maXQ9bm9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFN0eWxlc1Byb3ZpZGVyIGpzcz17anNzfT5cclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17bXVpVGhlbWV9PlxyXG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICA8R3JhZGllbnREZWNvIC8+XHJcbiAgICAgICAgICA8TG9hZGluZ0JhclxyXG4gICAgICAgICAgICBoZWlnaHQ9ezB9XHJcbiAgICAgICAgICAgIGNvbG9yPXt0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHR9XHJcbiAgICAgICAgICAgIHByb2dyZXNzPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3AtbG9hZGluZy1iYXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLXdyYXBcIj5cclxuICAgICAgICAgICAgPFBhZ2VUcmFuc2l0aW9uIHRpbWVvdXQ9ezMwMH0gY2xhc3NOYW1lcz1cInBhZ2UtZmFkZS10cmFuc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgey4uLnBhZ2VQcm9wc31cclxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlRGFyaz17dG9nZ2xlRGFya1RoZW1lfVxyXG4gICAgICAgICAgICAgICAgb25Ub2dnbGVEaXI9e3RvZ2dsZURpcmVjdGlvbn1cclxuICAgICAgICAgICAgICAgIGtleT17cm91dGVyLnJvdXRlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFnZVRyYW5zaXRpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDwvU3R5bGVzUHJvdmlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5NeUFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+ICh7Li4uYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KSB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwV2l0aFRyYW5zbGF0aW9uKE15QXBwKTtcclxuIiwiaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi9wYWxldHRlJztcclxuY29uc3QgYXBwVGhlbWUgPSAoY29sb3IsIG1vZGUpID0+ICh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgdHlwZTogbW9kZSxcclxuICAgIHByaW1hcnk6IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUucHJpbWFyeSxcclxuICAgIHNlY29uZGFyeTogcGFsZXR0ZVtjb2xvcl0ucGFsZXR0ZS5zZWNvbmRhcnksXHJcbiAgICBhY3Rpb246IHtcclxuICAgICAgaG92ZXI6IG1vZGUgPT09ICdkYXJrJyA/ICdyZ2JhKDEyOCwxMjgsMTI4LCAwLjkpJyA6ICdyZ2JhKDEyOCwxMjgsMTI4LCAwLjA1KScsXHJcbiAgICAgIGhvdmVyT3BhY2l0eTogMC4wNVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgZm9udEZhbWlseTogW1xyXG4gICAgICAnTW9udHNlcnJhdCcsXHJcbiAgICAgICdzYW5zLXNlcmlmJyxcclxuICAgIF0uam9pbignLCcpLFxyXG4gICAgZm9udFdlaWdodFJlZ3VsYXI6IDQwMCxcclxuICAgIGZvbnRXZWlnaHRNZWRpdW06IDUwMCxcclxuICAgIGZvbnRXZWlnaHRCb2xkOiA2MDAsXHJcbiAgfSxcclxuICBzaGFkZToge1xyXG4gICAgbGlnaHQ6ICcwIDEwcHggMTVweCAtNXB4IHJnYmEoNjIsIDU3LCAxMDcsIC4wNyknLFxyXG4gIH0sXHJcbiAgcm91bmRlZDoge1xyXG4gICAgc21hbGw6ICc4cHgnLFxyXG4gICAgbWVkaXVtOiAnMTJweCcsXHJcbiAgICBiaWc6ICcyMHB4J1xyXG4gIH0sXHJcbiAgc2hhZG93czogbW9kZSA9PT0gJ2RhcmsnXHJcbiAgICA/IFtcclxuICAgICAgJ25vbmUnLFxyXG4gICAgICAnMHB4IDFweCAzcHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCAycHggMXB4IC0xcHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDFweCA1cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCAzcHggMXB4IC0ycHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDFweCA4cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDNweCA0cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCAzcHggM3B4IC0ycHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDJweCA0cHggLTFweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCAzcHggNXB4IC0xcHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggNXB4IDhweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDFweCAxNHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggM3B4IDVweCAtMXB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCA0cHggNXB4IC0ycHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggN3B4IDEwcHggMXB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCAycHggMTZweCAxcHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDVweCA1cHggLTNweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDNweCAxNHB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggNXB4IDZweCAtM3B4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDlweCAxMnB4IDFweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggM3B4IDE2cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCA2cHggNnB4IC0zcHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTBweCAxNHB4IDFweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNHB4IDE4cHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCA2cHggN3B4IC00cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTFweCAxNXB4IDFweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNHB4IDIwcHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCA3cHggOHB4IC00cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNXB4IDIycHggNHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCA3cHggOHB4IC00cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTNweCAxOXB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNXB4IDI0cHggNHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCA3cHggOXB4IC00cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTRweCAyMXB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNXB4IDI2cHggNHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCA4cHggOXB4IC01cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTVweCAyMnB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNnB4IDI4cHggNXB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCA4cHggMTBweCAtNXB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDE2cHggMjRweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggOHB4IDExcHggLTVweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxN3B4IDI2cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA2cHggMzJweCA1cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDlweCAxMXB4IC01cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMThweCAyOHB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggN3B4IDM0cHggNnB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCA5cHggMTJweCAtNnB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDE5cHggMjlweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDdweCAzNnB4IDZweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggMTBweCAxM3B4IC02cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMjBweCAzMXB4IDNweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggOHB4IDM4cHggN3B4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCAxMHB4IDEzcHggLTZweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyMXB4IDMzcHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA4cHggNDBweCA3cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDEwcHggMTRweCAtNnB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDIycHggMzVweCAzcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDhweCA0MnB4IDdweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXHJcbiAgICAgICcwcHggMTFweCAxNHB4IC03cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMjNweCAzNnB4IDNweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggOXB4IDQ0cHggOHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcclxuICAgICAgJzBweCAxMXB4IDE1cHggLTdweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoODUwLDUwLDUwIDAuMTQpLDBweCA5cHggNDZweCA4cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxyXG4gICAgXVxyXG4gICAgOiBbXHJcbiAgICAgICdub25lJyxcclxuICAgICAgJzBweCAxcHggM3B4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxcHggMXB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggMnB4IDFweCAtMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcclxuICAgICAgJzBweCAxcHggNXB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggM3B4IDFweCAtMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcclxuICAgICAgJzBweCAxcHggOHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggM3B4IDNweCAtMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcclxuICAgICAgJzBweCAycHggNHB4IC0xcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggM3B4IDVweCAtMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDVweCA4cHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAxcHggMTRweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDNweCA1cHggLTFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDFweCAxOHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggNHB4IDVweCAtMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDdweCAxMHB4IDFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggMnB4IDE2cHggMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcclxuICAgICAgJzBweCA1cHggNXB4IC0zcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggOHB4IDEwcHggMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDVweCA2cHggLTNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA5cHggMTJweCAxcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDNweCAxNnB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggNnB4IDZweCAtM3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDEwcHggMTRweCAxcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDRweCAxOHB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggNnB4IDdweCAtNHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDExcHggMTVweCAxcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDRweCAyMHB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggN3B4IDhweCAtNHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDEycHggMTdweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggN3B4IDhweCAtNHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDEzcHggMTlweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDVweCAyNHB4IDRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggN3B4IDlweCAtNHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDE0cHggMjFweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDVweCAyNnB4IDRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggOHB4IDlweCAtNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDE1cHggMjJweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDZweCAyOHB4IDVweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggOHB4IDEwcHggLTVweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA2cHggMzBweCA1cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDhweCAxMXB4IC01cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTdweCAyNnB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggNnB4IDMycHggNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcclxuICAgICAgJzBweCA5cHggMTFweCAtNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDE4cHggMjhweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDdweCAzNHB4IDZweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggOXB4IDEycHggLTZweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxOXB4IDI5cHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA3cHggMzZweCA2cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDIwcHggMzFweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDhweCAzOHB4IDdweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggMTBweCAxM3B4IC02cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjFweCAzM3B4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOHB4IDQwcHggN3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcclxuICAgICAgJzBweCAxMHB4IDE0cHggLTZweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAyMnB4IDM1cHggM3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA4cHggNDJweCA3cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxyXG4gICAgICAnMHB4IDExcHggMTRweCAtN3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDIzcHggMzZweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDlweCA0NHB4IDhweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXHJcbiAgICAgICcwcHggMTFweCAxNXB4IC03cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjRweCAzOHB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcclxuICAgIF0sXHJcbiAgb3ZlcnJpZGVzOiB7XHJcbiAgICBQcml2YXRlVGFiSW5kaWNhdG9yOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHggNHB4IDAgMCcsXHJcbiAgICAgICAgaGVpZ2h0OiA1XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBNdWlQYXBlcjoge1xyXG4gICAgICByb3VuZGVkOiB7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMlxyXG4gICAgICB9LFxyXG4gICAgICBlbGV2YXRpb24xOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiBtb2RlID09PSAnZGFyaycgPyAnMHB4IDFweCAzcHggMHB4IHJnYmEoNjQsIDY0LCA2NCwgMSksIDBweCAxcHggMXB4IDBweCByZ2JhKDQyLCA0MiwgNDIsIDEpLCAwcHggMnB4IDFweCAtMXB4IHJnYmEoMjAsIDIwLCAyMCwgMSknIDogJzAgMS41cHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KSdcclxuICAgICAgfSxcclxuICAgICAgZWxldmF0aW9uNDoge1xyXG4gICAgICAgIGJveFNoYWRvdzogbW9kZSA9PT0gJ2RhcmsnID8gJzBweCAycHggNHB4IC0xcHggcmdiYSg2NCwgNjQsIDY0LCAwLjQ2KSwgMHB4IDRweCA1cHggMHB4IHJnYmEoNDIsIDQyLCA0MiwgMC4zMiksIDBweCAxcHggMTBweCAwcHggcmdiYSgyMCwgMjAsIDIwLCAwLjEyKScgOiAnMCAxLjVweCAxMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgIGNvbnRhaW5lZFNlY29uZGFyeToge1xyXG4gICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDRweCAtMXB4ICR7cGFsZXR0ZVtjb2xvcl0ucGFsZXR0ZS5zZWNvbmRhcnkubWFpbn1gXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRhaW5lZFByaW1hcnk6IHtcclxuICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgICAgIGJveFNoYWRvdzogYDAgMCA0cHggLTFweCAke3BhbGV0dGVbY29sb3JdLnBhbGV0dGUucHJpbWFyeS5tYWlufWBcclxuICAgICAgfSxcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogNixcclxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICAgICAgcGFkZGluZzogJzhweCAyNHB4J1xyXG4gICAgICB9LFxyXG4gICAgICBzaXplU21hbGw6IHtcclxuICAgICAgICBwYWRkaW5nOiAnN3B4IDEycHgnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemVMYXJnZToge1xyXG4gICAgICAgIHBhZGRpbmc6ICc3cHggMzZweCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIE11aVR5cG9ncmFwaHk6IHtcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogNjAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBNdWlJbnB1dExhYmVsOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICAnJiRmb2N1c2VkJzoge1xyXG4gICAgICAgICAgY29sb3I6IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUucHJpbWFyeS5tYWluXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmaWxsZWQ6IHtcclxuICAgICAgICAnJiRzaHJpbmsnOiB7XHJcbiAgICAgICAgICBjb2xvcjogcGFsZXR0ZVtjb2xvcl0ucGFsZXR0ZS5wcmltYXJ5Lm1haW5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBNdWlGaWxsZWRJbnB1dDoge1xyXG4gICAgICB1bmRlcmxpbmU6IHtcclxuICAgICAgICAnJjphZnRlcic6IHtcclxuICAgICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiBwYWxldHRlW2NvbG9yXS5wYWxldHRlLnByaW1hcnkubWFpblxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG11bHRpbGluZToge1xyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgJyYgdGV4dGFyZWEnOiB7XHJcbiAgICAgICAgICBwYWRkaW5nVG9wOiAyN1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIE11aU91dGxpbmVkSW5wdXQ6IHtcclxuICAgICAgaW5wdXRBZG9ybmVkU3RhcnQ6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogNDBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwVGhlbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIG9jZWFuQmx1ZToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjQkJERUZCJyxcclxuICAgICAgICBtYWluOiAnIzIxOTZGMycsXHJcbiAgICAgICAgZGFyazogJyMwRDQ3QTEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0IyRUJGMicsXHJcbiAgICAgICAgbWFpbjogJyMwMEJDRDQnLFxyXG4gICAgICAgIGRhcms6ICcjMDA2MDY0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBncmVlbkxlYWY6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0M4RTZDOScsXHJcbiAgICAgICAgbWFpbjogJyM0Q0FGNTAnLFxyXG4gICAgICAgIGRhcms6ICcjMUI1RTIwJ1xyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNDRkQ4REMnLFxyXG4gICAgICAgIG1haW46ICcjNjA3RDhCJyxcclxuICAgICAgICBkYXJrOiAnIzM3NDc0RidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9uZXk6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0M4RTZDOScsXHJcbiAgICAgICAgbWFpbjogJyM0Q0FGNTAnLFxyXG4gICAgICAgIGRhcms6ICcjMkU3RDMyJ1xyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGRkVDQjMnLFxyXG4gICAgICAgIG1haW46ICcjRkZBMDAwJyxcclxuICAgICAgICBkYXJrOiAnI0ZGNkYwMCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JheXNjYWxlOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNDRkQ4REMnLFxyXG4gICAgICAgIG1haW46ICcjNTQ2RTdBJyxcclxuICAgICAgICBkYXJrOiAnIzI2MzIzOCdcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRDdDQ0M4JyxcclxuICAgICAgICBtYWluOiAnIzZENEM0MScsXHJcbiAgICAgICAgZGFyazogJyMzRTI3MjMnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNsb3VkOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNCM0U1RkMnLFxyXG4gICAgICAgIG1haW46ICcjMDNBOUY0JyxcclxuICAgICAgICBkYXJrOiAnIzAxNTc5QidcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRkZFMEIyJyxcclxuICAgICAgICBtYWluOiAnI0ZGOTgwMCcsXHJcbiAgICAgICAgZGFyazogJyNFNjUxMDAnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGpva2VyOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNEMUM0RTknLFxyXG4gICAgICAgIG1haW46ICcjNjczQUI3JyxcclxuICAgICAgICBkYXJrOiAnIzMxMUI5MidcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjQjJFQkYyJyxcclxuICAgICAgICBtYWluOiAnIzAwQkNENCcsXHJcbiAgICAgICAgZGFyazogJyMwMDYwNjQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHZpb2xldDoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRjhCQkQwJyxcclxuICAgICAgICBtYWluOiAnI0VDNDA3QScsXHJcbiAgICAgICAgZGFyazogJyM4ODBFNEYnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0QxQzRFOScsXHJcbiAgICAgICAgbWFpbjogJyM2NzNBQjcnLFxyXG4gICAgICAgIGRhcms6ICcjMzExQjkyJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB2aW9sZXRhOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFMUJFRTcnLFxyXG4gICAgICAgIG1haW46ICcjOUMyN0IwJyxcclxuICAgICAgICBkYXJrOiAnIzZBMUI5QSdcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRENFREM4JyxcclxuICAgICAgICBtYWluOiAnIzhCQzM0QScsXHJcbiAgICAgICAgZGFyazogJyM1NThCMkYnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGRlZXBCbHVlOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyMwYzg4ZWQnLFxyXG4gICAgICAgIG1haW46ICcjMGM4M2U0JyxcclxuICAgICAgICBkYXJrOiAnIzA5NjFhYScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnIzgyMDJmMicsXHJcbiAgICAgICAgbWFpbjogJyM2MjAyYjYnLFxyXG4gICAgICAgIGRhcms6ICcjNDkwMTg4JyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByb3NlR29sZDoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRThFQUY2JyxcclxuICAgICAgICBtYWluOiAnIzNGNTFCNScsXHJcbiAgICAgICAgZGFyazogJyMyODM1OTMnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFMUY1RkUnLFxyXG4gICAgICAgIG1haW46ICcjMDNBOUY0JyxcclxuICAgICAgICBkYXJrOiAnIzAyNzdCRCcsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdWJ1bnR1OiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGRkYzRTAnLFxyXG4gICAgICAgIG1haW46ICcjRUY2QzAwJyxcclxuICAgICAgICBkYXJrOiAnI0U2NTEwMCcsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0YzRTVGNScsXHJcbiAgICAgICAgbWFpbjogJyM5QzI3QjAnLFxyXG4gICAgICAgIGRhcms6ICcjN0IxRkEyJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBnZWVuTmF0dXJlOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFMEY3RkEnLFxyXG4gICAgICAgIG1haW46ICcjMDA5Njg4JyxcclxuICAgICAgICBkYXJrOiAnIzAwNjk1QycsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0YxRjhFOScsXHJcbiAgICAgICAgbWFpbjogJyM2ODlGMzgnLFxyXG4gICAgICAgIGRhcms6ICcjMzM2OTFFJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB2YW1waXJlOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGRkVCRUUnLFxyXG4gICAgICAgIG1haW46ICcjZjQ0MzM2JyxcclxuICAgICAgICBkYXJrOiAnI0U1MzkzNScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0VDRUZGMScsXHJcbiAgICAgICAgbWFpbjogJyM2MDdEOEInLFxyXG4gICAgICAgIGRhcms6ICcjNDU1QTY0JyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtaW50OiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNiYmRlZmInLFxyXG4gICAgICAgIG1haW46ICcjMjE5NmYzJyxcclxuICAgICAgICBkYXJrOiAnIzBkNDdhMScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI2IzZTVmYycsXHJcbiAgICAgICAgbWFpbjogJyMwM2E5ZjQnLFxyXG4gICAgICAgIGRhcms6ICcjMDE1NzliJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvY2VhblNreToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRTNGMkZEJyxcclxuICAgICAgICBtYWluOiAnIzIxOTZGMycsXHJcbiAgICAgICAgZGFyazogJyMxNTY1QzAnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFMEYyRjEnLFxyXG4gICAgICAgIG1haW46ICcjMDBCRkE1JyxcclxuICAgICAgICBkYXJrOiAnIzAwNzk2QicsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZ29sZDoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRkZGOUM0JyxcclxuICAgICAgICBtYWluOiAnI0ZGOTEwMCcsXHJcbiAgICAgICAgZGFyazogJyNGRjZEMDAnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFRkVCRTknLFxyXG4gICAgICAgIG1haW46ICcjOEQ2RTYzJyxcclxuICAgICAgICBkYXJrOiAnIzRFMzQyRScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYm90YW5pOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNEQ0VEQzgnLFxyXG4gICAgICAgIG1haW46ICcjNjg5RjM4JyxcclxuICAgICAgICBkYXJrOiAnIzMzNjkxRScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0ZDRTRFQycsXHJcbiAgICAgICAgbWFpbjogJyNGMDYyOTInLFxyXG4gICAgICAgIGRhcms6ICcjQUQxNDU3JyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaXR0bGVRdWVlbjoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRTBGN0ZBJyxcclxuICAgICAgICBtYWluOiAnIzAwQkNENCcsXHJcbiAgICAgICAgZGFyazogJyMwMDYwNjQnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGQ0U0RUMnLFxyXG4gICAgICAgIG1haW46ICcjRjA2MjkyJyxcclxuICAgICAgICBkYXJrOiAnI0FEMTQ1NycsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHVycGxlOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNmM2U1ZjUnLFxyXG4gICAgICAgIG1haW46ICcjOWMyN2IwJyxcclxuICAgICAgICBkYXJrOiAnIzZhMWI5YScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI2VhODBmYycsXHJcbiAgICAgICAgbWFpbjogJyNhYTAwZmYnLFxyXG4gICAgICAgIGRhcms6ICcjNGExNDhjJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBibGFjazoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjOWU5ZTllJyxcclxuICAgICAgICBtYWluOiAnIzIxMjEyMScsXHJcbiAgICAgICAgZGFyazogJyMwMDAnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFMEUwRTAnLFxyXG4gICAgICAgIG1haW46ICcjNzU3NTc1JyxcclxuICAgICAgICBkYXJrOiAnIzQyNDI0MicsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnJvd246IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI2Q3Y2NjOCcsXHJcbiAgICAgICAgbWFpbjogJyM3OTU1NDgnLFxyXG4gICAgICAgIGRhcms6ICcjNGUzNDJlJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjY2NiMGIwJyxcclxuICAgICAgICBtYWluOiAnIzc5NDg0OCcsXHJcbiAgICAgICAgZGFyazogJyMzZTI3MjMnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNzLXJ0bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1wYWdlLXRyYW5zaXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvcC1sb2FkaW5nLWJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9