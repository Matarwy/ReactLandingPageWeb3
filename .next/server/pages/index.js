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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banner/Banner.js":
/*!*************************************!*\
  !*** ./components/Banner/Banner.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banner-style */ "./components/Banner/banner-style.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Banner\\Banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function Banner(props) {
  const classes = Object(_banner_style__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_9__["useText"])();
  const elem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    t
  } = props;
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  const {
    0: hide,
    1: setHide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down('xs'));

  const handleScroll = () => {
    if (!elem.current) {
      return;
    }

    const doc = document.documentElement;
    const elTop = elem.current.offsetTop - 200;
    const elBottom = elTop + elem.current.getBoundingClientRect().height;

    if (doc.scrollTop > elTop && doc.scrollTop < elBottom) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.particlesJS('particles_backgrond', {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
    window.addEventListener('scroll', handleScroll);
  });
  return __jsx("div", {
    className: classes.root,
    ref: elem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.canvasWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.overlay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.decoInner, hide && classes.hide),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx("div", {
    id: "particles_backgrond",
    className: classes.particleBackground,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  })))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fixed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.bannerWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    alignItems: "center",
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "h4",
    className: text.title2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_title')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "p",
    className: text.subtitle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_subtitle'))), __jsx("div", {
    className: classes.btnArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "https://tradingplanet.finance/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "secondary",
    size: "large",
    fullWidth: isMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_getstarted'))), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "https://medium.com/@TradingPlanetEX",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "outlined",
    className: classes.invert,
    size: "large",
    fullWidth: isMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_learn')))))))), __jsx("div", {
    className: classes.decoBottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, __jsx("svg", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, __jsx("use", {
    xlinkHref: "/images/crypto/deco-banner.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }))));
}

Banner.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])(['crypto-landing'])(Banner));

/***/ }),

/***/ "./components/Banner/banner-style.js":
/*!*******************************************!*\
  !*** ./components/Banner/banner-style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);


const bannerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' // [theme.breakpoints.up('md')]: {
    //   height: 700,
    // },
    // [theme.breakpoints.down('sm')]: {
    //   paddingBottom: theme.spacing(5)
    // }

  },
  canvasWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? `linear-gradient(-45deg, ${theme.palette.secondary.dark} 30%, ${theme.palette.primary.dark} 80%)` : `linear-gradient(-45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 80%)`,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.2)'
    }
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.primary.dark, 0.7) : Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.primary.main, 0.7)
  },
  particleBackground: {
    position: 'absolute',
    width: '100%',
    height: 600,
    '& canvas': {
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    }
  },
  bannerWrap: {
    position: 'relative',
    zIndex: 1
  },
  objectArt: {
    '& img': {
      position: 'relative',
      zIndex: 1,
      left: -130,
      top: 240,
      maxWidth: 560,
      [theme.breakpoints.down('md')]: {
        top: 120
      }
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  text: {
    color: theme.palette.common.white,
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(20)
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(12)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: theme.spacing(20)
    },
    '& h4': {
      marginBottom: theme.spacing(2)
    }
  },
  btnArea: {
    marginTop: theme.spacing(5),
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& button': {
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(3),
        height: 50
      }
    }
  },
  invert: {
    borderColor: theme.palette.common.white,
    color: theme.palette.common.white
  },
  decoBottom: {
    position: 'absolute',
    bottom: -50,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& svg': {
      width: 1400,
      height: 380,
      fill: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])(theme.palette.primary.dark, 0.6) : Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["lighten"])(theme.palette.primary.main, 0.84),
      [theme.breakpoints.up(1200)]: {
        transform: 'scale(2, 1)'
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      }
    }
  },
  decoInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  hide: {
    visibility: 'hidden'
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (bannerStyles);

/***/ }),

/***/ "./components/Banner/index.js":
/*!************************************!*\
  !*** ./components/Banner/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banner */ "./components/Banner/Banner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Banner__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Benefit/Benefit.js":
/*!***************************************!*\
  !*** ./components/Benefit/Benefit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-parallax */ "react-parallax");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/imgAPI */ "./public/images/imgAPI.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _benefit_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./benefit-style */ "./components/Benefit/benefit-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Benefit\\Benefit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function Benefit(props) {
  const classes = Object(_benefit_style__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_11__["useText"])();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  const isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.up('lg'));
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down('xs'));
  const {
    t
  } = props;
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.parallaxWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_8__["Parallax"], {
    bgImage: "/images/easter-battle.png",
    bgImageAlt: "benefit",
    strength: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.parallaxProps,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fixed: isDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    md: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    md: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })))));
}

Benefit.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])(['crypto-landing'])(Benefit));

/***/ }),

/***/ "./components/Benefit/benefit-style.js":
/*!*********************************************!*\
  !*** ./components/Benefit/benefit-style.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_images_crypto_deco_benefit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/images/crypto/deco-benefit.svg */ "./public/images/crypto/deco-benefit.svg");
/* harmony import */ var _public_images_crypto_deco_benefit_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_images_crypto_deco_benefit_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_crypto_deco_list_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/crypto/deco-list.png */ "./public/images/crypto/deco-list.png");
/* harmony import */ var _public_images_crypto_deco_list_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_crypto_deco_list_png__WEBPACK_IMPORTED_MODULE_2__);



const benefitStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    background: theme.palette.common.black
  },
  wrapper: {
    position: 'relative',
    paddingTop: theme.spacing(10),
    height: 800,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  },
  desc: {
    padding: 0,
    color: theme.palette.common.white,
    '& h4': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  list: {
    display: 'block',
    margin: theme.spacing(3, 0, 5),
    listStyle: 'none',
    paddingLeft: 0,
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    },
    '& li': {
      paddingLeft: theme.spacing(4),
      lineHeight: '38px',
      background: `url(${_public_images_crypto_deco_list_png__WEBPACK_IMPORTED_MODULE_2___default.a}) no-repeat 0 10px`
    }
  },
  img: {
    margin: theme.spacing(3, 0, 0, 0),
    // overflow: 'hidden',
    // bottom: -40,
    position: 'relative',
    maxWidth: '300px',
    '& img': {
      maxWidth: '100%',
      display: 'block'
    }
  },
  deco: {
    position: 'absolute',
    top: 40,
    right: 80
  },
  parallaxWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  parallaxProps: {
    background: `url(${_public_images_crypto_deco_benefit_svg__WEBPACK_IMPORTED_MODULE_1___default.a}) no-repeat center center`,
    height: 800
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (benefitStyles);

/***/ }),

/***/ "./components/Benefit/index.js":
/*!*************************************!*\
  !*** ./components/Benefit/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Benefit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Benefit */ "./components/Benefit/Benefit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Benefit__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Cards/Testimonial.js":
/*!*****************************************!*\
  !*** ./components/Cards/Testimonial.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Testimonial; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _cards_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards-style */ "./components/Cards/cards-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Cards\\Testimonial.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Testimonial(props) {
  const classes = Object(_cards_style__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    text,
    name,
    title,
    avatar,
    active
  } = props;
  return __jsx("div", {
    className: classes.testimonial,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.paper, active ? classes.active : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    src: avatar,
    className: classes.avatar,
    alt: "avatar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.text,
    display: "block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, text), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "caption",
    className: classes.caption,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, name)));
}
Testimonial.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  avatar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Testimonial.defaultProps = {
  active: false
};

/***/ }),

/***/ "./components/Cards/cards-style.js":
/*!*****************************************!*\
  !*** ./components/Cards/cards-style.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const cardsStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  testimonial: {
    position: 'relative'
  },
  active: {},
  caption: {
    marginTop: theme.spacing(3),
    display: 'block',
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14
    }
  },
  paper: {
    height: 250,
    margin: theme.spacing(3, 0),
    textAlign: 'center',
    border: '1px solid transparent',
    transition: 'border 0.4s ease-out',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 15)
    },
    '&$active': {
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  text: {
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    height: 80,
    fontSize: 18,
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      '-webkit-line-clamp': 4
    }
  },
  avatar: {
    boxShadow: theme.shadows[8],
    width: 80,
    height: 80,
    margin: '-32px auto 32px',
    [theme.breakpoints.up('sm')]: {
      margin: '-96px auto 32px'
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (cardsStyles);

/***/ }),

/***/ "./components/Counter/Counter.js":
/*!***************************************!*\
  !*** ./components/Counter/Counter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _counter_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./counter-style */ "./components/Counter/counter-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Counter\\Counter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function Counter(props) {
  const classes = Object(_counter_style__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_9__["useText"])();
  const {
    t
  } = props;
  const {
    0: play,
    1: setPlay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const countup = (val, isPlay) => __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, isPlay ? __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
    end: val,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }) : 0);

  const handlePlay = () => {
    setTimeout(() => {
      setPlay(true);
    }, 200);
  };

  return __jsx("div", {
    className: classes.counterWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default.a, {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_3___default.a, {
    animation: "fadeIn",
    offset: 200,
    callback: handlePlay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h3",
    className: text.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, countup(2, play), "\xA0", countup(234, play), "\xA0", countup(567, play)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "p",
    className: text.subtitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, t('common:crypto-landing.footer_counter'))), __jsx("div", {
    className: classes.callAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h4",
    gutterBottom: true,
    className: text.subtitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, t('common:crypto-landing.footer_waiting')), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "contained",
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_7__["default"].crypto.register,
    color: "secondary",
    size: "large",
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, t('common:crypto-landing.getstarted')))));
}

Counter.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])(['crypto-landing'])(Counter));

/***/ }),

/***/ "./components/Counter/counter-style.js":
/*!*********************************************!*\
  !*** ./components/Counter/counter-style.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const counterStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  counterWrap: {
    position: 'relative',
    textAlign: 'center',
    '& h3': {
      color: theme.palette.common.white
    },
    '& p': {
      marginTop: theme.spacing(1.5),
      color: theme.palette.common.white
    }
  },
  callAction: {
    marginTop: theme.spacing(10),
    position: 'relative',
    textAlign: 'center',
    color: theme.palette.common.white
  },
  button: {
    marginTop: theme.spacing(2)
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (counterStyles);

/***/ }),

/***/ "./components/Counter/index.js":
/*!*************************************!*\
  !*** ./components/Counter/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Counter */ "./components/Counter/Counter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Counter__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Faq/Faq.js":
/*!*******************************!*\
  !*** ./components/Faq/Faq.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Accordion */ "@material-ui/core/Accordion");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "@material-ui/core/AccordionSummary");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "@material-ui/core/AccordionDetails");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Parallax_Hexagonal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Parallax/Hexagonal */ "./components/Parallax/Hexagonal.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");
/* harmony import */ var _faq_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./faq-style */ "./components/Faq/faq-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Faq\\Faq.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















const faqData = [{
  q: 'Is the TP coin ERC-20 compatible?',
  a: 'Yes, TP Coin is based on the BSC blockchain platform and ERC-20 compatible.'
}, {
  q: 'Am I buying on my own Risk?',
  a: 'Because it is a decentralized platform Token  that has solutions for many issues related to security, privacy, speed of transections, in addition to very low fees. Do not forget  that our limit is the sky!'
}, {
  q: 'Where and how do I keep my TP Coin?',
  a: 'You can keep your TP Token in Trading Planet wallet and in every wallet Which is BSC compatible and supports the TP Token'
}, {
  q: 'What is the marketing strategy of Trading Planet?',
  a: 'In order to market Trading Planet Swap in a targeted manner, a digital marketing strategy is used above all. On social media mainly the channels Instagram, Facebook and YouTube are used from the beginning and the specific target group is addressed in the best possible way through appropriate posts and story contributions'
}];

function Faq(props) {
  const classes = Object(_faq_style__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_13__["useText"])();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme.breakpoints.down('xs'));
  const {
    t
  } = props;
  const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.parallax,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_Parallax_Hexagonal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fixed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_15__["default"], {
    text: t('common:crypto-landing.faq_title'),
    align: isMobile ? 'center' : 'left',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: text.subtitle2,
    align: isMobile ? 'center' : 'left',
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, t('common:crypto-landing.faq_subtitle')), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
    smDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.illustration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/498-[Converted].png",
    alt: "illustration",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.accordion,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, faqData.map((item, index) => __jsx("div", {
    className: classes.item,
    key: index.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7___default.a, {
    classes: {
      root: classes.paper
    },
    expanded: expanded === index,
    onChange: handleChange(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8___default.a, {
    classes: {
      content: classes.content,
      expanded: classes.expanded
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 23
    }
  }, item.q), __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 23
    }
  })), __jsx(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_9___default.a, {
    classes: {
      root: classes.detail
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 23
    }
  }, item.a))))))))));
}

Faq.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_12__["withTranslation"])(['crypto-landing'])(Faq));

/***/ }),

/***/ "./components/Faq/faq-style.js":
/*!*************************************!*\
  !*** ./components/Faq/faq-style.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_crypto_deco_faq_top_light_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/crypto/deco-faq-top-light.svg */ "./public/images/crypto/deco-faq-top-light.svg");
/* harmony import */ var _public_images_crypto_deco_faq_top_light_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_crypto_deco_faq_top_light_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_images_crypto_deco_faq_top_dark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/crypto/deco-faq-top-dark.svg */ "./public/images/crypto/deco-faq-top-dark.svg");
/* harmony import */ var _public_images_crypto_deco_faq_top_dark_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_crypto_deco_faq_top_dark_svg__WEBPACK_IMPORTED_MODULE_3__);




const faqStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    background: `url(${theme.palette.type === 'dark' ? _public_images_crypto_deco_faq_top_dark_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _public_images_crypto_deco_faq_top_light_svg__WEBPACK_IMPORTED_MODULE_2___default.a}) top center no-repeat`,
    backgroundColor: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])(theme.palette.primary.dark, 0.6) : Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["lighten"])(theme.palette.primary.main, 0.84),
    backgroundSize: '100%',
    marginTop: theme.spacing(-20),
    [theme.breakpoints.up('xl')]: {
      paddingBottom: theme.spacing(15)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(30, 0, 15)
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(10)
    }
  },
  content: {
    '& $icon': {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(1)
    }
  },
  parallax: {
    position: 'absolute',
    top: -1300,
    width: '100%',
    left: 0
  },
  illustration: {
    position: 'relative',
    margin: theme.spacing(6),
    '& img': {
      display: 'block',
      width: 300,
      margin: '0 auto'
    }
  },
  accordion: {
    position: 'relative',
    zIndex: 1
  },
  item: {
    marginBottom: theme.spacing(3)
  },
  paper: {
    borderRadius: `${theme.rounded.medium} !important`,
    overflow: 'hidden'
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2, 1, 0),
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    }
  },
  expanded: {
    background: theme.palette.primary.main,
    '& $heading': {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    '& $icon': {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    '& p': {
      [theme.breakpoints.up('sm')]: {
        fontSize: 18
      }
    }
  },
  icon: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (faqStyles);

/***/ }),

/***/ "./components/Faq/index.js":
/*!*********************************!*\
  !*** ./components/Faq/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faq */ "./components/Faq/Faq.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Faq__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Feature/Feature.js":
/*!***************************************!*\
  !*** ./components/Feature/Feature.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainFeature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainFeature */ "./components/Feature/MainFeature.js");
/* harmony import */ var _MoreFeature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoreFeature */ "./components/Feature/MoreFeature.js");
/* harmony import */ var _feature_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-style */ "./components/Feature/feature-style.js");
/* harmony import */ var _Parallax_Hexagonal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Parallax/Hexagonal */ "./components/Parallax/Hexagonal.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Feature\\Feature.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Feature() {
  const classes = Object(_feature_style__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_Parallax_Hexagonal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(_MainFeature__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(_MoreFeature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/Feature/MainFeature.js":
/*!*******************************************!*\
  !*** ./components/Feature/MainFeature.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-youtube */ "react-youtube");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Zoom */ "@material-ui/core/Zoom");
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/images/imgAPI */ "./public/images/imgAPI.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _youtube__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../youtube */ "./youtube.js");
/* harmony import */ var _youtube__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_youtube__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");
/* harmony import */ var _feature_style__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./feature-style */ "./components/Feature/feature-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Feature\\MainFeature.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






















const Transition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function Transition(props, ref) {
  // eslint-disable-line
  return __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_14___default.a, _extends({
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  }));
});

function MainFeature(props) {
  const classes = Object(_feature_style__WEBPACK_IMPORTED_MODULE_20__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_18__["useText"])();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.down('sm'));
  const {
    t
  } = props;
  const {
    0: player,
    1: setPlayer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: openPopup,
    1: setOpenPopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleClickOpen = () => {
    if (_youtube__WEBPACK_IMPORTED_MODULE_17___default.a.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'https://localhost:3008'
    }
  };
  return __jsx("div", {
    className: classes.mainFeature,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default.a, {
    open: openPopup,
    TransitionComponent: Transition,
    keepMounted: true,
    classes: {
      paper: classes.videoPopup
    },
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-slide-title",
    "aria-describedby": "alert-dialog-slide-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default.a, {
    id: "alert-dialog-slide-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, t('common:crypto-landing.mainfeature_title'), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: handleClose,
    className: classes.closeBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, _youtube__WEBPACK_IMPORTED_MODULE_17___default.a.use && __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_4___default.a, {
    videoId: "h93OfqakVBI",
    onReady: _onReady,
    opts: opts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fixed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    container: true,
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_19__["default"], {
    text: t('common:crypto-landing.mainfeature_title'),
    align: isMobile ? 'center' : 'left',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    display: "block",
    gutterBottom: true,
    align: isMobile ? 'center' : 'left',
    className: text.subtitle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, t('common:crypto-landing.mainfeature_subtitle')), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.video,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/video_cover.jpg",
    alt: "cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.playBtn,
    onClick: handleClickOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "ion-ios-play",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    item: true,
    md: 6,
    xs: 12,
    className: classes.featureWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.deco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/help.svg",
    alt: "deco",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }))))));
}

MainFeature.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_16__["withTranslation"])(['crypto-landing'])(MainFeature));

/***/ }),

/***/ "./components/Feature/MoreFeature.js":
/*!*******************************************!*\
  !*** ./components/Feature/MoreFeature.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "@material-ui/core/LinearProgress");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");
/* harmony import */ var _feature_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./feature-style */ "./components/Feature/feature-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Feature\\MoreFeature.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const coinData = [{
  name: 'BTC',
  logo: '/images/crypto/btc.png',
  progress: 75,
  color: '#FBA630'
}, {
  name: 'DASH',
  logo: '/images/crypto/dash.png',
  progress: 40,
  color: '#21D3D7'
}, {
  name: 'NAN',
  logo: '/images/crypto/nan.png',
  progress: 90,
  color: '#548CCC'
}, {
  name: 'MNR',
  logo: '/images/crypto/mnr.png',
  progress: 35,
  color: '#FF6602'
}, {
  name: 'IOT',
  logo: '/images/crypto/iot.png',
  progress: 80,
  color: '#CE07D4'
}];

function MoreFeature(props) {
  const classes = Object(_feature_style__WEBPACK_IMPORTED_MODULE_14__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_12__["useText"])();
  const {
    0: play,
    1: setPlay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  const isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.up('md'));
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.down('sm'));
  const {
    t
  } = props;

  const themeProgress = color => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
    palette: {
      primary: {
        main: color
      }
    }
  });

  const handlePlay = () => {
    setTimeout(() => {
      setPlay(true);
    }, 200);
  };

  return __jsx("div", {
    className: classes.moreFeature,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fixed: isDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 6,
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(classes.text, isMobile && classes.center),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "ion-ios-lock-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }), __jsx(_Title__WEBPACK_IMPORTED_MODULE_13__["default"], {
    text: t('common:crypto-landing.morefeature_title1'),
    align: isMobile ? 'center' : 'left',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: text.subtitle2,
    display: "block",
    align: isMobile ? 'center' : 'left',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, t('common:crypto-landing.morefeature_subtitle1')))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animation: "fadeInLeftShort",
    delay: "0.3s",
    duration: "0.3s",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx("figure", {
    className: classes.illustration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/crypto/deco-promo.png",
    alt: "feature",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  })))))), __jsx("div", {
    className: classes.item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    direction: isMobile ? 'column-reverse' : 'row',
    spacing: 6,
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animation: "fadeInRightShort",
    offset: -100,
    delay: "0.3s",
    duration: "0.3s",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, __jsx("figure", {
    className: classes.illustration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/burnt-cake.png",
    alt: "feature",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(classes.text, isMobile && classes.center),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "ion-ios-analytics-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }), __jsx(_Title__WEBPACK_IMPORTED_MODULE_13__["default"], {
    text: t('common:crypto-landing.morefeature_title2'),
    align: isMobile ? 'center' : 'left',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: text.subtitle2,
    display: "block",
    align: isMobile ? 'center' : 'left',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, t('common:crypto-landing.morefeature_subtitle2')))))), __jsx("div", {
    className: classes.item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    sm: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(classes.text, classes.center),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "ion-ios-flash-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }), __jsx(_Title__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: text.subtitle2,
    text: t('common:crypto-landing.morefeature_title3'),
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    display: "block",
    align: "center",
    className: text.subtitle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, t('common:crypto-landing.morefeature_subtitle3'))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animation: "fadeIn",
    offset: -100,
    duration: "0s",
    callback: handlePlay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  })))))));
}

MoreFeature.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_11__["withTranslation"])(['crypto-landing'])(MoreFeature));

/***/ }),

/***/ "./components/Feature/feature-style.js":
/*!*********************************************!*\
  !*** ./components/Feature/feature-style.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const featureStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  mainFeature: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(8)
    }
  },
  video: {
    overflow: 'hidden',
    position: 'relative',
    margin: theme.spacing(6, 0, 2),
    '& figure': {
      margin: 0,
      background: theme.palette.common.black,
      '& img': {
        opacity: 0.62,
        minHeight: '100%',
        width: '100%'
      }
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none'
  },
  featureWrap: {
    position: 'relative'
  },
  playBtn: {
    position: 'absolute',
    width: 150,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& span': {
      '&:before': {
        fontSize: 130,
        background: `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      }
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4
  },
  deco: {
    // position: 'absolute',
    marginTop: 80,
    left: 80,
    width: 400,
    '& img': {
      transformOrigin: 'top left'
    }
  },
  counter: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end'
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(8)
    },
    '& > *': {
      [theme.breakpoints.down('xs')]: {
        width: '50%',
        padding: theme.spacing(0.5)
      }
    }
  },
  lower: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(20)
    }
  },
  higher: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  },
  paper: {
    position: 'relative',
    height: 174,
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1, 3),
      margin: theme.spacing(4, 4, 0, 0),
      width: 174
    },
    '& span': {
      color: theme.palette.primary.main,
      fontSize: 48
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold
    },
    '& p': {
      fontSize: 18,
      [theme.breakpoints.down('xs')]: {
        fontSize: 16
      }
    }
  },
  moreFeature: {
    position: 'relative',
    '& figure': {
      margin: 0
    }
  },
  chartDeco: {
    width: '100%',
    height: 420,
    bottom: 0,
    position: 'absolute',
    backgroundSize: 'cover'
  },
  item: {
    position: 'relative',
    paddingTop: theme.spacing(10)
  },
  text: {
    position: 'relative',
    '& > span': {
      position: 'absolute',
      color: 'rgba(0, 0, 0, 0.54)',
      top: -10,
      left: 7,
      fontSize: 38,
      zIndex: 2
    }
  },
  illustration: {
    '& img': {
      width: '80%',
      display: 'block',
      margin: '0 auto'
    }
  },
  center: {
    '& span': {
      left: 'calc(50% - 7px)'
    }
  },
  progressWrap: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 6)
    },
    padding: 0,
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex'
      },
      '& h5': {
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('xs')]: {
          fontSize: 16
        }
      }
    }
  },
  logo: {},
  coin: {
    display: 'flex',
    alignItems: 'center',
    width: 120,
    paddingTop: theme.spacing(),
    '& $logo': {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        marginRight: theme.spacing(),
        width: 20,
        height: 20
      }
    }
  },
  progress: {
    flex: 1,
    marginTop: theme.spacing(),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(6)
    }
  },
  unit: {
    display: 'flex',
    justifyContent: 'space-between',
    '& h6': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 14
      },
      '& span': {
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
          fontSize: 14
        }
      }
    }
  },
  track: {
    background: theme.palette.divider,
    borderRadius: 10,
    height: '8px !important'
  },
  bar: {
    borderRadius: 10
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (featureStyles);

/***/ }),

/***/ "./components/Feature/index.js":
/*!*************************************!*\
  !*** ./components/Feature/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feature */ "./components/Feature/Feature.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Feature__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Language */ "@material-ui/icons/Language");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "@material-ui/core/OutlinedInput");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Logo */ "./components/Logo.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../public/images/imgAPI */ "./public/images/imgAPI.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer-style */ "./components/Footer/footer-style.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "@material-ui/icons/Twitter");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Telegram__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Telegram */ "@material-ui/icons/Telegram");
/* harmony import */ var _material_ui_icons_Telegram__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Telegram__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _icons_medium__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../icons/medium */ "./components/icons/medium.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "body2",
    display: "block",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, "Copyright \xA9 2021 TradingPlanet | All rights reserved.");
}

const footer = {
  description: ['Contact', 'Another resource', 'Blog', 'Privacy policy', 'WhitePaper', 'Terms Condition'],
  link: ['https://t.me/TradingPlanetExchange', 'https://medium.com/@TradingPlanetEX', '#final-resource', "https://tradingplanet.finance/TradingPlanetWhitePaper.pdf", '#terms-of-use']
};
const news = [{
  text: 'Sed imperdiet enim ligula vitae viverra.',
  img: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_16__["default"].photo[5]
}, {
  text: 'Sed imperdiet enim ligula vitae viverra.',
  img: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_16__["default"].photo[6]
}, {
  text: 'Sed imperdiet enim ligula vitae viverra.',
  img: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_16__["default"].photo[7]
}];

function Footer(props) {
  const {
    0: ctn,
    1: setCtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const classes = Object(_footer_style__WEBPACK_IMPORTED_MODULE_18__["default"])();
  const {
    t,
    invert
  } = props;
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    lang: 'eng'
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValues({
      lang: _i18n__WEBPACK_IMPORTED_MODULE_17__["i18n"].language
    });
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    setValues(oldValues => _objectSpread(_objectSpread({}, oldValues), {}, {
      [event.target.name]: event.target.value
    }));

    if (event.target.value === 'ara') {
      _i18n__WEBPACK_IMPORTED_MODULE_17__["i18n"].changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      _i18n__WEBPACK_IMPORTED_MODULE_17__["i18n"].changeLanguage(event.target.value);
      props.toggleDir('ltr');
    }
  }

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fixed: true,
    component: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.footer, invert && classes.invert),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h6",
    color: "textPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_15___default.a.crypto.projectName)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "textPrimary",
    className: classes.footerDesc,
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, t('common:crypto-landing.banner_title'))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.quickLinks,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, t('common:crypto-landing.footer_link')), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, footer.description.map((item, index) => __jsx("li", {
    key: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: footer.link[index],
    variant: "subtitle1",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, item)))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.socmed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "https://twitter.com/tradingplanetx",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "TW",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_19___default.a, {
    style: {
      color: '#fff'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "https://t.me/TradingPlanetExchange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "TM",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Telegram__WEBPACK_IMPORTED_MODULE_20___default.a, {
    style: {
      color: '#fff'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "https://medium.com/@TradingPlanetEX",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "MD",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx(_icons_medium__WEBPACK_IMPORTED_MODULE_21__["default"], {
    style: {
      color: '#fff'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  })))), __jsx(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  })))));
}

Footer.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  invert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  toggleDir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Footer.defaultProps = {
  invert: false,
  toggleDir: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_17__["withTranslation"])(['crypto-landing'])(Footer));

/***/ }),

/***/ "./components/Footer/FooterWithCounter.js":
/*!************************************************!*\
  !*** ./components/Footer/FooterWithCounter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Counter */ "./components/Counter/index.js");
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer-style */ "./components/Footer/footer-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Footer\\FooterWithCounter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function FooterWithDeco(props) {
  const classes = Object(_footer_style__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    toggleDir
  } = props;
  return __jsx("div", {
    className: classes.footerCounter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.decoTop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("svg", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("use", {
    xlinkHref: "/images/crypto/deco-footer.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }))), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    toggleDir: toggleDir,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
}

FooterWithDeco.propTypes = {
  toggleDir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FooterWithDeco);

/***/ }),

/***/ "./components/Footer/footer-style.js":
/*!*******************************************!*\
  !*** ./components/Footer/footer-style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);


const footerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  link: {
    margin: theme.spacing(1, 1.5)
  },
  invert: {},
  footer: {
    position: 'relative',
    padding: theme.spacing(10, 0),
    '& p': {
      color: theme.palette.common.white,
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center'
      }
    },
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      display: 'inline-block',
      width: '100%',
      marginRight: '3%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.common.white,
      // [theme.breakpoints.down('xs')]: {
      //   width: '47%'
      // },
      '& a': {
        fontSize: 14,
        textTransform: 'capitalize',
        textDecoration: 'none !important',
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.primary.light
        }
      }
    },
    '&$invert': {
      '& p': {
        color: theme.palette.text.primary
      },
      '& li a': {
        color: theme.palette.text.primary
      },
      '& $logo': {
        '& h6': {
          color: theme.palette.primary.dark
        }
      },
      '& $title': {
        color: theme.palette.secondary.main
      },
      '& $blogItem': {
        '& $category': {
          color: theme.palette.secondary.main
        }
      },
      '& $selectLang': {
        color: theme.palette.text.primary,
        '& svg': {
          color: theme.palette.text.primary
        }
      }
    }
  },
  title: {
    color: theme.palette.secondary.light,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold
  },
  quickLinks: {
    marginTop: theme.spacing(5)
  },
  logo: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    '& svg': {
      width: 64,
      marginRight: theme.spacing()
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 28,
      textTransform: 'uppercase',
      color: theme.palette.common.white
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  socmed: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.primary.dark,
      background: theme.palette.primary.main,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.common.white
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {},
  selectLang: {
    display: 'inherit',
    margin: theme.spacing(2, 0, 4),
    color: theme.palette.common.white,
    '& $icon': {
      top: 29,
      color: theme.palette.primary.light,
      position: 'relative'
    },
    '& svg': {
      color: theme.palette.secondary.light
    },
    '& fieldset': {
      borderRadius: 10,
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.primary.light, 0.5)} !important`,
      '& legend': {
        top: 5,
        position: 'relative',
        borderTop: `1px solid ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.primary.light, 0.5)}`
      },
      '& + div + div': {
        background: 'none !important',
        padding: theme.spacing(1.5, 1.5, 1.5, 4),
        width: 'calc(100% - 32px)'
      }
    }
  },
  selectMenu: {
    width: 160,
    background: 'none !important'
  },
  footerCounter: {
    position: 'relative',
    background: theme.palette.primary.dark,
    //`linear-gradient(-130deg, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} -20%, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main} 70%)`,
    paddingTop: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(25)
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing(15)
    }
  },
  decoTop: {
    position: 'absolute',
    top: -20,
    left: 0,
    width: 1280,
    height: 400,
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(1.2)'
    },
    [theme.breakpoints.up(1400)]: {
      transform: 'scale(2, 1)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      transform: 'scale(1.4, 1)',
      left: -300
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& svg': {
      width: '100%',
      height: '100%',
      fill: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])(theme.palette.primary.dark, 0.6) : Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["lighten"])(theme.palette.primary.main, 0.84),
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  },
  category: {},
  listText: {},
  blogItem: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    textAlign: 'left',
    justifyContent: 'flex-start',
    '& $category': {
      marginBottom: theme.spacing(),
      display: 'block',
      color: theme.palette.secondary.light
    },
    '& $listText': {
      flex: 1,
      color: theme.palette.primary.light
    },
    '& figure': {
      borderRadius: 4,
      overflow: 'hidden',
      margin: theme.spacing(1, 2, 0, 0),
      width: 80,
      height: 56,
      '& img': {
        display: 'block',
        minHeight: '100%',
        width: '100%'
      }
    },
    '& p': {
      fontSize: 13
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (footerStyles);

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Settings */ "./components/Header/Settings.js");
/* harmony import */ var _MarketPrice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MarketPrice */ "./components/Header/MarketPrice.js");
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MobileMenu */ "./components/Header/MobileMenu.js");
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Logo */ "./components/Logo.js");
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header-style */ "./components/Header/header-style.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./menu */ "./components/Header/menu.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21__);
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Header\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }























let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

const LinkBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_11___default.a, _extends({
    to: props.to
  }, props, {
    innerRef: ref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 10
    }
  })); // eslint-disable-line
});

function Header(props) {
  const {
    0: fixed,
    1: setFixed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 80;

    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const classes = Object(_header_style__WEBPACK_IMPORTED_MODULE_19__["default"])();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["useTheme"])();
  const {
    onToggleDark,
    onToggleDir,
    invert,
    t
  } = props;
  const isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9___default()(theme.breakpoints.up('lg'));
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9___default()(theme.breakpoints.down('md'));
  const {
    0: menuList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([createData(_menu__WEBPACK_IMPORTED_MODULE_20__["default"][0], '#' + _menu__WEBPACK_IMPORTED_MODULE_20__["default"][0], 100), createData(_menu__WEBPACK_IMPORTED_MODULE_20__["default"][1], '#' + _menu__WEBPACK_IMPORTED_MODULE_20__["default"][1]), createData(_menu__WEBPACK_IMPORTED_MODULE_20__["default"][2], '#' + _menu__WEBPACK_IMPORTED_MODULE_20__["default"][2]), createData(_menu__WEBPACK_IMPORTED_MODULE_20__["default"][3], '#' + _menu__WEBPACK_IMPORTED_MODULE_20__["default"][3])]);
  const {
    0: openDrawer,
    1: setOpenDrawer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, isMobile && __jsx(_MobileMenu__WEBPACK_IMPORTED_MODULE_16__["default"], {
    open: openDrawer,
    toggleDrawer: handleOpenDrawer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 22
    }
  }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "header",
    position: "relative",
    id: "header",
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.header, fixed && classes.fixed, invert && classes.invert, openDrawer && classes.openDrawer),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fixed: isDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.headerContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("nav", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.navMenu, invert && classes.invert),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, isMobile && __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: handleOpenDrawer,
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "hamburger-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.bar, 'hamburger-inner'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, invert ? __jsx("a", {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_17__["default"].crypto.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  })) : __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "#home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }))), isDesktop && __jsx(react_scrollspy__WEBPACK_IMPORTED_MODULE_12___default.a, {
    items: _menu__WEBPACK_IMPORTED_MODULE_20__["default"],
    currentClassName: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, menuList.map(item => __jsx("li", {
    key: item.id.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, invert ? // eslint-disable-next-line
  __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    offset: item.offset || 0,
    href: '/' + item.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, t('common:crypto-landing.header_' + item.name)) : // eslint-disable-next-line
  __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_11___default.a,
    offset: item.offset || 0,
    href: item.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, t('common:crypto-landing.header_' + item.name)))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_17__["default"].crypto.contact,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, t('common:crypto-landing.header_contact'))))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  })), __jsx("nav", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.navMenu, classes.navAuth),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    xsDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "https://tradingplanet.finance/",
    target: "_blank",
    variant: "contained",
    color: "secondary",
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, t('common:crypto-landing.header_launch'))), __jsx(_Settings__WEBPACK_IMPORTED_MODULE_14__["default"], {
    toggleDark: onToggleDark,
    toggleDir: onToggleDir,
    invert: invert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }))))));
}

Header.propTypes = {
  onToggleDark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onToggleDir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  invert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
Header.defaultProps = {
  sticky: false,
  invert: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_13__["withTranslation"])(['crypto-landing'])(Header));

/***/ }),

/***/ "./components/Header/MarketPrice.js":
/*!******************************************!*\
  !*** ./components/Header/MarketPrice.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarketPrice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-style */ "./components/Header/header-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Header\\MarketPrice.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const marketList = [{
  logo: '/images/crypto/btc.png',
  name: 'BTC',
  price: 10200,
  status: 'up',
  percent: 8
}, {
  logo: '/images/crypto/xrp.png',
  name: 'XRP',
  price: 0.003,
  status: 'down',
  percent: 3
}, {
  logo: '/images/crypto/nem.png',
  name: 'NEM',
  price: 0.003,
  status: 'up',
  percent: 8
}, {
  logo: '/images/crypto/iot.png',
  name: 'IOTA',
  price: 0.010,
  status: 'down',
  percent: 3
}, {
  logo: '/images/crypto/mnr.png',
  name: 'MNR',
  price: 1.45,
  status: 'up',
  percent: 8
}, {
  logo: '/images/crypto/byc.png',
  name: 'BYC',
  price: 22.34,
  status: 'down',
  percent: 3
}, {
  logo: '/images/crypto/iot.png',
  name: 'IOTA',
  price: 0.010,
  status: 'down',
  percent: 3
}, {
  logo: '/images/crypto/mnr.png',
  name: 'MNR',
  price: 1.45,
  status: 'up',
  percent: 8
}, {
  logo: '/images/crypto/byc.png',
  name: 'BYC',
  price: 22.34,
  status: 'down',
  percent: 3
}];
function MarketPrice() {
  const classes = Object(_header_style__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    cssEase: 'linear',
    pauseOnHover: true
  };

  const renderPercent = (arrow, percent) => {
    switch (arrow) {
      case 'down':
        return __jsx("span", {
          className: classes.down,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 11
          }
        }, __jsx("i", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }
        }, "\u25BC"), percent, "%");

      case 'up':
        return __jsx("span", {
          className: classes.up,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }
        }, __jsx("i", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }
        }, "\u25B2"), percent, "%");

      default:
        return __jsx("span", {
          className: classes.stay,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }
        }, __jsx("i", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }
        }, "-"), percent, "%");
    }
  };

  return __jsx("div", {
    className: classes.market,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }), marketList.map((item, index) => __jsx("div", {
    className: classes.item,
    key: index.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.coin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.logo,
    src: item.logo,
    alt: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }), item.name, "\xA0$\xA0", item.price, "\xA0(", renderPercent(item.status, item.percent), ")")))));
}

/***/ }),

/***/ "./components/Header/MobileMenu.js":
/*!*****************************************!*\
  !*** ./components/Header/MobileMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/SwipeableDrawer */ "@material-ui/core/SwipeableDrawer");
/* harmony import */ var _material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header-style */ "./components/Header/header-style.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu */ "./components/Header/menu.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Header\\MobileMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function MobileMenu(props) {
  const classes = Object(_header_style__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const {
    toggleDrawer,
    open,
    t
  } = props;

  const SideList = () => __jsx("div", {
    className: classes.mobileNav,
    role: "presentation",
    onClick: toggleDrawer,
    onKeyDown: toggleDrawer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.menu, open && classes.menuOpen),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, _menu__WEBPACK_IMPORTED_MODULE_11__["default"].map((item, index) => __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    button: true,
    component: "a",
    href: `#${item}`,
    key: index.toString(),
    style: {
      animationDuration: index * 0.15 + 's'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: t('common:crypto-landing.header_' + item),
    className: classes.menuList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    button: true,
    component: "a",
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_9__["default"].crypto.contact,
    style: {
      animationDuration: _menu__WEBPACK_IMPORTED_MODULE_11__["default"].length * 0.15 + 's'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: t('common:crypto-landing.header_contact'),
    className: classes.menuList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.dividerSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), ['login', 'register'].map((item, index) => __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    button: true,
    component: "a",
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_9__["default"].crypto[item],
    key: index.toString(),
    style: {
      animationDuration: _menu__WEBPACK_IMPORTED_MODULE_11__["default"].length * 0.15 + 's'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: t('common:crypto-landing.header_' + item),
    className: classes.menuList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }))))));

  return __jsx(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    open: open,
    onClose: toggleDrawer,
    onOpen: toggleDrawer,
    classes: {
      paper: classes.paperNav
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(SideList, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }));
}

MobileMenu.propTypes = {
  toggleDrawer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])(['crypto-landing'])(MobileMenu));

/***/ }),

/***/ "./components/Header/Settings.js":
/*!***************************************!*\
  !*** ./components/Header/Settings.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "@material-ui/core/ListSubheader");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header-style */ "./components/Header/header-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Header\\Settings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















let themeType = 'light';

if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props) {
  const {
    0: ctn,
    1: setCtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const classes = Object(_header_style__WEBPACK_IMPORTED_MODULE_18__["default"])();
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: isDark,
    1: setDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(themeType === 'dark');

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  function handleChangeLang(lang) {
    if (lang === 'ara') {
      _i18n__WEBPACK_IMPORTED_MODULE_17__["i18n"].changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      _i18n__WEBPACK_IMPORTED_MODULE_17__["i18n"].changeLanguage(lang);
      props.toggleDir('ltr');
    }

    setAnchorEl(null);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCtn(document.getElementById('main-wrap'));
  });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const {
    invert,
    t
  } = props;
  return __jsx("div", {
    className: classes.setting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-describedby": id,
    "aria-label": "Settings",
    onClick: handleClick,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.icon, open && classes.active, invert && classes.invert),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    container: ctn,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
    component: "nav",
    className: classes.modeMenu,
    "aria-label": "Mode-menu",
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8___default.a, {
      component: "div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, t('common:crypto-landing.header_theme')),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    component: "label",
    container: true,
    alignItems: "center",
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, t('common:crypto-landing.header_light')), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13___default.a, {
    checked: isDark,
    onChange: handleChangeMode,
    value: isDark,
    inputProps: {
      'aria-label': 'checkbox'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, t('common:crypto-landing.header_dark')))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
    component: "nav",
    className: classes.langMenu,
    "aria-label": "Language-menu",
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8___default.a, {
      component: "div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, t('common:crypto-landing.header_language')),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, _i18n__WEBPACK_IMPORTED_MODULE_17__["i18n"].options.allLanguages && _i18n__WEBPACK_IMPORTED_MODULE_17__["i18n"].options.allLanguages.map(val => __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    key: val,
    role: undefined,
    dense: true,
    button: true,
    onClick: () => handleChangeLang(val),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: val,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12___default.a, {
    primary: t('common:' + val),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }), _i18n__WEBPACK_IMPORTED_MODULE_17__["i18n"].language === val && __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  })))))));
}

Settings.propTypes = {
  toggleDark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  toggleDir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  invert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Settings.defaultProps = {
  invert: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_17__["withTranslation"])(['common', 'crypto-landing'])(Settings));

/***/ }),

/***/ "./components/Header/header-style.js":
/*!*******************************************!*\
  !*** ./components/Header/header-style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/flag-logo.png */ "./public/images/flag-logo.png");
/* harmony import */ var _public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${_public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ara"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zho"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="eng"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="deu"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="ind"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="prt"]': {
    backgroundPosition: '0 -79px'
  }
};
const headerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  invert: {
    color: theme.palette.text.primary,
    '& $mobileMenu': {
      '& $bar': {
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        }
      }
    },
    '& svg': {
      fill: theme.palette.text.primary
    }
  },
  openDrawer: {},
  header: {
    position: 'absolute',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(7)
    },
    '& > *': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0
      }
    },
    '&$fixed': {
      position: 'fixed',
      background: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])(theme.palette.primary.dark, 0.5) : theme.palette.primary.dark,
      paddingTop: 0,
      transition: 'background 0.3s ease',
      boxShadow: theme.shadows[5],
      '& $logo': {
        '& svg': {
          height: 48,
          width: 48
        }
      },
      '& $headerContent': {
        '& nav': {
          padding: theme.spacing()
        }
      },
      '& $navMenu': {
        '& svg': {
          fill: theme.palette.common.white
        },
        '& a': {
          color: theme.palette.common.white
        }
      },
      '& $divider': {
        borderLeftColor: 'rgba(255, 255, 255, 0.5)'
      },
      '& $mobileMenu': {
        '& $bar': {
          backgroundColor: theme.palette.common.white,
          '&:after, &:before': {
            backgroundColor: theme.palette.common.white
          }
        }
      }
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none'
    },
    '&$invert': {
      paddingTop: 0,
      '& $navMenu': {
        '& svg': {
          fill: theme.palette.text.primary
        },
        '& a': {
          color: theme.palette.text.primary,
          '&$button': {
            color: theme.palette.common.white
          }
        }
      },
      '& $divider': {
        borderLeftColor: theme.palette.divider
      },
      '& $mobileMenu': {
        '& $bar': {
          backgroundColor: `${theme.palette.text.primary}`,
          '&:after, &:before': {
            backgroundColor: `${theme.palette.text.primary}`
          }
        }
      }
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 0)
      },
      display: 'flex'
    }
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.common.white,
      alignItems: 'center',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      margin: '0 auto',
      width: 64,
      height: 64,
      marginBottom: theme.spacing(),
      [theme.breakpoints.down('sm')]: {
        height: 48,
        width: 48
      }
    }
  },
  active: {},
  button: {
    width: theme.spacing(15),
    padding: theme.spacing(0.5)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1)
      }
    },
    '& a': {
      color: theme.palette.common.white,
      fontSize: 16,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0.5, 1),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0, 3)
      },
      [theme.breakpoints.down('xs')]: {
        margin: 0
      }
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: theme.spacing(0, 1.5),
          borderRadius: 6,
          transition: 'all 0.3s ease-out',
          border: '1px solid transparent',
          '&:hover': {
            border: `1px solid ${theme.palette.common.white}`
          }
        },
        '&[class="active"]': {
          '& a': {
            boxShadow: '0 1.5px 32px -8px rgba(0, 0, 0, 0.22)',
            color: `${theme.palette.primary.main} !important`,
            background: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.common.black, 0.3) : Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.common.white, 0.84)
          }
        }
      }
    }
  },
  navAuth: {
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('lg')]: {
      flex: 1
    }
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': _objectSpread({}, flagIcon)
  },
  modeMenu: {
    textTransform: 'capitalize'
  },
  icon: {},
  setting: {
    '& $icon': {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  bar: {},
  menu: {},
  paperNav: {
    width: '100%',
    background: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])(theme.palette.primary.dark, 0.5) : theme.palette.primary.dark,
    [theme.breakpoints.up(680)]: {
      width: 300
    }
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    '& $bar': {
      backgroundColor: `${theme.palette.common.white}`,
      '&:after, &:before': {
        backgroundColor: `${theme.palette.common.white}`
      }
    },
    '&[class*="is-active"]': {
      '& $bar': {
        backgroundColor: `${theme.palette.common.white} !important`,
        '&:after, &:before': {
          backgroundColor: `${theme.palette.common.white} !important`
        }
      }
    }
  },
  mobileNav: {
    background: theme.palette.background.paper,
    '& $menu': {
      padding: theme.spacing(0, 5),
      overflow: 'auto',
      top: 80,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      }
    }
  },
  menuList: {
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    '& span': {
      fontSize: 24
    }
  },
  divider: {
    background: 'none',
    borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
    height: 28
  },
  market: {
    position: 'absolute',
    top: 0,
    zIndex: 1200,
    left: 0,
    width: '100%',
    height: 40,
    background: 'rgba(0, 0, 0, 0.5)',
    padding: theme.spacing()
  },
  item: {
    color: theme.palette.common.white,
    padding: theme.spacing(0.5, 4),
    '&:focus': {
      outline: 'none'
    }
  },
  coin: {
    display: 'flex',
    '& $logo': {
      width: 20,
      height: 'auto',
      marginRight: theme.spacing(),
      '& img': {
        width: '100%',
        height: 'auto'
      }
    },
    '& i': {
      fontStyle: 'normal'
    }
  },
  down: {
    color: '#FF7272'
  },
  up: {
    color: '#5DD662'
  },
  stay: {
    color: '#b2b2b2'
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (headerStyles);

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Header/menu.js":
/*!***********************************!*\
  !*** ./components/Header/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menu = ['promotions', 'feature', 'benefit', 'testimonials'];
/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function Logo(props) {
  const fill = "#0b0055";
  return __jsx("svg", _extends({
    viewBox: "0 0 900 900"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: fill,
    d: "M1516.8,656.84H1205.42V775.12h108.16v362.67h0a118.29,118.29,0,0,0,118.28-118.28v-242h97.64V993.42h0a108,108,0,0,0,108-108v-108h0A120.66,120.66,0,0,0,1516.8,656.84Z",
    transform: "translate(-753.59 -431.68)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }), __jsx("path", {
    fill: fill,
    d: "M1318,532.12a340,340,0,0,1,107.34-19.67,67.91,67.91,0,0,0,125.31,21.39,339.63,339.63,0,0,1,202,205q1.21,3.42,2.35,6.84-4.14-15.78-9.71-31.47a381.09,381.09,0,0,0-185.48-212c0-.47.05-.93.06-1.4A67.9,67.9,0,0,0,1434.8,463a380.83,380.83,0,0,0-177.9,18.89c-199,70.73-303,289.42-232.32,488.45a384.64,384.64,0,0,0,27.85,61,85.53,85.53,0,0,0,107.19,120c98.62,71.78,229.8,95.27,353.41,51.35a380.59,380.59,0,0,0,165-114.6A338.87,338.87,0,0,1,1546,1173.58c-121.17,43.06-250.52,13.33-340.31-66.45a85.53,85.53,0,0,0-76.44-120.61,87.93,87.93,0,0,0-10,.42c-2.81-6.58-5.46-13.28-7.9-20.12C1048.31,789.69,1140.87,595.06,1318,532.12Z",
    transform: "translate(-753.59 -431.68)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }));
}

/***/ }),

/***/ "./components/Notification/Notification.js":
/*!*************************************************!*\
  !*** ./components/Notification/Notification.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "@material-ui/core/SnackbarContent");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _notification_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification-style */ "./components/Notification/notification-style.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Notification\\Notification.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











function TransitionUp(props) {
  return __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({}, props, {
    direction: "up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }));
}

function Notification(props) {
  const {
    t
  } = props;
  const classes = Object(_notification_style__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const handleClose = () => {
    setOpen(false);
  };

  return __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    TransitionComponent: TransitionUp,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    classes: {
      root: classes.notification
    },
    open: open,
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    message: __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "message-id",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 18
      }
    }, t('common:notif_msg')),
    classes: {
      action: classes.action
    },
    action: __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      color: "secondary",
      variant: "contained",
      className: classes.button,
      onClick: handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }, t('common:accept')),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
}

Notification.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])(['common'])(Notification));

/***/ }),

/***/ "./components/Notification/index.js":
/*!******************************************!*\
  !*** ./components/Notification/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "./components/Notification/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Notification__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Notification/notification-style.js":
/*!*******************************************************!*\
  !*** ./components/Notification/notification-style.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const notificationStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  notification: {
    width: '95%',
    [theme.breakpoints.up('lg')]: {
      width: '80%'
    },
    '& > div': {
      width: '100%',
      color: theme.palette.common.white,
      background: '#424242',
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 4)
      },
      '& > div:first-child': {
        [theme.breakpoints.up('sm')]: {
          flex: 1,
          marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center'
        }
      }
    }
  },
  button: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 150
    }
  },
  action: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
      margin: 0
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (notificationStyles);

/***/ }),

/***/ "./components/PageNav/PageNav.js":
/*!***************************************!*\
  !*** ./components/PageNav/PageNav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "@material-ui/icons/ArrowUpward");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Header_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Header/menu */ "./components/Header/menu.js");
/* harmony import */ var _pagenav_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pagenav-style */ "./components/PageNav/pagenav-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\PageNav\\PageNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













function createData(id, name, url) {
  return {
    id,
    name,
    url
  };
}

const LinkBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    to: props.to
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  })); // eslint-disable-line
});

function PageNav(props) {
  const {
    t
  } = props;
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = scroll > 500;

    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
    console.log();
  }, []);
  const classes = Object(_pagenav_style__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const {
    0: menuList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([createData(1, _Header_menu__WEBPACK_IMPORTED_MODULE_9__["default"][0], '#' + _Header_menu__WEBPACK_IMPORTED_MODULE_9__["default"][0].replace(/ /g, '_')), createData(2, _Header_menu__WEBPACK_IMPORTED_MODULE_9__["default"][1], '#' + _Header_menu__WEBPACK_IMPORTED_MODULE_9__["default"][1].replace(/ /g, '_')), createData(3, _Header_menu__WEBPACK_IMPORTED_MODULE_9__["default"][2], '#' + _Header_menu__WEBPACK_IMPORTED_MODULE_9__["default"][2].replace(/ /g, '_')), createData(4, _Header_menu__WEBPACK_IMPORTED_MODULE_9__["default"][3], '#' + _Header_menu__WEBPACK_IMPORTED_MODULE_9__["default"][3].replace(/ /g, '_'))]);
  return __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.pageNav, show && classes.show),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: classes.sectionNav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default.a, {
    items: _Header_menu__WEBPACK_IMPORTED_MODULE_9__["default"],
    currentClassName: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, menuList.map(item => __jsx("li", {
    key: item.id.toString(),
    style: {
      top: 30 * (_Header_menu__WEBPACK_IMPORTED_MODULE_9__["default"].length - item.id)
    },
    "data-id": item.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: t('common:crypto-landing.header_' + item.name),
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: item.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: "To Top",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "primary",
    "aria-label": "To top",
    component: LinkBtn,
    href: "#home",
    className: classes.fab,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }))));
}

PageNav.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])(['crypto-landing'])(PageNav));

/***/ }),

/***/ "./components/PageNav/index.js":
/*!*************************************!*\
  !*** ./components/PageNav/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav */ "./components/PageNav/PageNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PageNav__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/PageNav/pagenav-style.js":
/*!*********************************************!*\
  !*** ./components/PageNav/pagenav-style.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const pagenav = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    borderRadius: 10,
    background: theme.palette.secondary.dark,
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: theme.palette.common.white,
      width: 40,
      height: 40
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.light
      }
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      overflow: 'hidden'
    },
    '&$show': {
      '& $fab': {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    '& ul': {
      margin: '0 0 16px 22px',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: theme.palette.common.white,
        border: `1px solid ${theme.palette.primary.dark}`,
        opacity: 0.3,
        display: 'block',
        transition: 'all 0.4s ease',
        borderRadius: 3
      },
      '&[class="active"] a': {
        opacity: 1,
        background: theme.palette.primary.dark,
        border: `1px solid ${theme.palette.primary.light}`
      }
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important'
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: theme.palette.primary.dark,
    fontSize: 14
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (pagenav);

/***/ }),

/***/ "./components/Parallax/Hexagonal.js":
/*!******************************************!*\
  !*** ./components/Parallax/Hexagonal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParallaxCloud; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ "react-scroll-parallax");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parallax_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parallax-style */ "./components/Parallax/parallax-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Parallax\\Hexagonal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ParallaxCloud() {
  const classes = Object(_parallax_style__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.parallaxWrap, classes.dotsWrap),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.innerParallax, classes.large),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.hexaWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    y: [20, 20],
    tagOuter: "figure",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.rightTopBack, classes.big),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("svg", {
    className: classes.hexaBack,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, __jsx("use", {
    xlinkHref: "/images/crypto/parallax-back2.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }))), __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    y: [20, 20],
    tagOuter: "figure",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.rightTopFront, classes.small),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "585px",
    height: "151px",
    viewBox: "0 0 585 151",
    version: "1.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("g", {
    transform: "translate(-143.000000, -88.000000)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  }, __jsx("g", {
    transform: "translate(132.623862, 70.912032)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M520.561173,148.252603 C520.561173,151.131802 522.101234,153.792433 524.601342,155.232033 L551.404725,170.666509 C553.904833,172.106108 556.984955,172.106108 559.485063,170.666509 L586.288446,155.232033 C588.788553,153.792433 590.328615,151.131802 590.328615,148.252603 L590.328615,117.383522 C590.328615,114.504194 588.788553,111.843692 586.288446,110.403963 L559.485063,94.9694871 C556.984955,93.5298879 553.904833,93.5298879 551.404725,94.9694871 L524.601342,110.403963 C522.101234,111.843692 520.561173,114.504194 520.561173,117.383522 L520.561173,148.252603 Z",
    fill: "url(#hexaLinearGradient-2)",
    transform: "translate(555.444894, 132.817998) rotate(-330.000000) translate(-555.444894, -132.817998)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 23
    }
  }))))))), __jsx("div", {
    className: classes.hexaWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    y: [40, 40],
    tagOuter: "figure",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.leftBottomBack, classes.big),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("svg", {
    className: classes.hexaBack,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("use", {
    xlinkHref: "/images/crypto/parallax-back3.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }))), __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    y: [40, 40],
    tagOuter: "figure",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.leftBottomFront, classes.small),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "585px",
    height: "151px",
    viewBox: "0 0 585 151",
    version: "1.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("g", {
    transform: "translate(-143.000000, -88.000000)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, __jsx("g", {
    transform: "translate(132.623862, 70.912032)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M15,67.3628158 C15,70.2420142 16.5400613,72.9026456 19.0401691,74.3422448 L45.8435518,89.7767212 C48.3436597,91.2163204 51.4237822,91.2163204 53.9238901,89.7767212 L80.7272727,74.3422448 C83.2273806,72.9026456 84.7674419,70.2420142 84.7674419,67.3628158 L84.7674419,36.4937339 C84.7674419,33.6144064 83.2273806,30.9539041 80.7272727,29.5141758 L53.9238901,14.0796994 C51.4237822,12.6401002 48.3436597,12.6401002 45.8435518,14.0796994 L19.0401691,29.5141758 C16.5400613,30.9539041 15,33.6144064 15,36.4937339 L15,67.3628158 Z",
    fill: "url(#hexaLinearGradient-3)",
    transform: "translate(49.883721, 51.928210) rotate(-330.000000) translate(-49.883721, -51.928210)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }))))))))));
}

/***/ }),

/***/ "./components/Parallax/parallax-style.js":
/*!***********************************************!*\
  !*** ./components/Parallax/parallax-style.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const parallaxStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  innerParallax: {
    height: 2500,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& figure': {
      height: 2500,
      margin: 0,
      width: '100%',
      display: 'block',
      position: 'absolute'
    },
    '& figure > div': {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      '& svg': {
        position: 'absolute'
      }
    }
  },
  rightTopBack: {
    textAlign: 'right',
    '& svg': {
      right: -240
    }
  },
  rightTopFront: {
    textAlign: 'right',
    '& svg': {
      right: 50
    }
  },
  leftBottomBack: {
    textAlign: 'left',
    '& svg': {
      left: -110
    }
  },
  leftBottomFront: {
    textAlign: 'left',
    '& svg': {
      left: -50
    }
  },
  hexaBack: {
    opacity: theme.palette.type === 'dark' ? 0.12 : 0.03,
    fill: theme.palette.common.black,
    width: 550,
    height: 500
  },
  hexaTop: {},
  hexaWrap: {
    position: 'relative',
    height: 700
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (parallaxStyles);

/***/ }),

/***/ "./components/Promotion/Promotion.js":
/*!*******************************************!*\
  !*** ./components/Promotion/Promotion.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "@material-ui/icons/ArrowForward");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_animated_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-animated-slider */ "react-animated-slider");
/* harmony import */ var react_animated_slider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_animated_slider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _promotion_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./promotion-style */ "./components/Promotion/promotion-style.js");
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/images/imgAPI */ "./public/images/imgAPI.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Promotion\\Promotion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const sliderData = [{
  image: "/images/crypto/trade.png",
  desc: "prelaunch marketing, company and software development",
  date: 'May 2021'
}, {
  image: "/images/crypto/trade.png",
  desc: "Marketing and community development",
  date: 'June 2021'
}, {
  image: "/images/crypto/trade.png",
  desc: "launch trading planet swap platform",
  date: 'OCT 2021'
}, {
  image: "/images/crypto/trade.png",
  desc: "Launch presale on dexale",
  date: 'NOV 2021'
}, {
  image: "/images/crypto/trade.png",
  desc: "launch other features to swap platform",
  date: 'Dec 2021'
}, {
  image: "/images/crypto/trade.png",
  desc: "TP will be listed on CMC coingecko and centralia zed platform",
  date: 'Q1 2022'
}, {
  image: "/images/crypto/trade.png",
  desc: "launch trading planet centralized platform",
  date: 'Q2 2022'
}, {
  image: "/images/crypto/trade.png",
  desc: "Start The work on TP blockchain",
  date: 'Q1 2023'
}, {
  image: "/images/crypto/trade.png",
  desc: "Launch Trading Planet Prepaid card",
  date: 'Q3 2021'
}];

function Promotion(props) {
  const classes = Object(_promotion_style__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const {
    t
  } = props;
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.sliderWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(react_animated_slider__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: "slider-wrapper",
    previousButton: __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }),
    nextButton: __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, sliderData.map((item, index) => __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.item, index % 2 === 1 ? classes.odd : classes.even),
    key: index.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    lg: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "\xA0"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    lg: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: classes.imgWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: classes.decoration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }), __jsx("figure", {
    className: classes.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: item.image,
    alt: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 27
    }
  }))))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, item.desc), __jsx("section", {
    className: classes.time,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    component: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 23
    }
  }, t('common:crypto-landing.promo_periode'), ":\xA0", item.date))))))))));
}

Promotion.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_12__["withTranslation"])(['crypto-landing'])(Promotion));

/***/ }),

/***/ "./components/Promotion/index.js":
/*!***************************************!*\
  !*** ./components/Promotion/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Promotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Promotion */ "./components/Promotion/Promotion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Promotion__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Promotion/promotion-style.js":
/*!*************************************************!*\
  !*** ./components/Promotion/promotion-style.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_crypto_deco_bottom_light_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/crypto/deco-bottom-light.svg */ "./public/images/crypto/deco-bottom-light.svg");
/* harmony import */ var _public_images_crypto_deco_bottom_light_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_crypto_deco_bottom_light_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_images_crypto_deco_bottom_dark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/crypto/deco-bottom-dark.svg */ "./public/images/crypto/deco-bottom-dark.svg");
/* harmony import */ var _public_images_crypto_deco_bottom_dark_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_crypto_deco_bottom_dark_svg__WEBPACK_IMPORTED_MODULE_3__);




const promotionStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  root: {
    background: `url(${theme.palette.type === 'dark' ? _public_images_crypto_deco_bottom_dark_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _public_images_crypto_deco_bottom_light_svg__WEBPACK_IMPORTED_MODULE_2___default.a}) bottom center no-repeat`,
    backgroundColor: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])(theme.palette.primary.dark, 0.6) : Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["lighten"])(theme.palette.primary.main, 0.84),
    backgroundSize: '100%',
    position: 'relative',
    backgroundPosition: 'center 101%',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  sliderWrap: {
    '& a[class*="previousButton"]': {
      right: 120,
      left: 'auto',
      top: 200,
      [theme.breakpoints.down('md')]: {
        right: 20
      }
    },
    '& a[class*="nextButton"]': {
      left: 'auto',
      top: 140,
      right: 120,
      [theme.breakpoints.down('md')]: {
        right: 20
      }
    },
    '& > div': {
      height: 500,
      [theme.breakpoints.down('sm')]: {
        height: 320
      },
      '& > a': {
        background: theme.palette.background.paper,
        borderRadius: '50%',
        width: 40,
        height: 40,
        transition: 'all 0.3s ease',
        position: 'absolute',
        zIndex: 11,
        boxShadow: theme.shadows[2],
        [theme.breakpoints.down('xs')]: {
          display: 'none'
        },
        '&:hover': {
          backgroundImage: 'none'
        },
        '& svg': {
          width: 35,
          height: 35,
          position: 'absolute',
          left: 3,
          top: 3,
          fill: theme.palette.text.secondary
        }
      }
    }
  },
  paper: {},
  time: {},
  even: {
    '& h1': {
      color: theme.palette.secondary.main
    },
    '& $decoration': {
      '& svg': {
        fill: theme.palette.secondary.main
      }
    }
  },
  odd: {
    '& h1': {
      color: theme.palette.primary.main
    },
    '& $decoration': {
      '& svg': {
        fill: theme.palette.primary.main
      }
    }
  },
  hexa: {},
  item: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0, 1),
    maxHeight: 500,
    zIndex: 10,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(8)
    },
    '& svg': {
      width: 450,
      height: 450
    },
    '& section': {
      position: 'relative',
      zIndex: 10,
      opacity: 0,
      transform: 'translateX(40px)',
      transition: 'all 0.5s ease'
    },
    '&[class*="current"]': {
      '& section': {
        transform: 'translateX(0px)',
        opacity: 1
      }
    },
    '& figure': {
      margin: 0,
      lineHeight: '450px',
      width: 450,
      height: 450,
      textAlign: 'center',
      left: 0,
      top: 17,
      position: 'absolute',
      transition: 'none !important',
      '& img': {
        transition: 'none',
        verticalAlign: 'middle',
        width: 350,
        objectFit: 'cover',
        // height: 393,
        opacity: 1
      }
    },
    '& $paper': {
      position: 'relative',
      padding: theme.spacing(9, 6, 9, 16),
      borderRadius: 24,
      [theme.breakpoints.up('lg')]: {
        left: -80
      },
      [theme.breakpoints.up('md')]: {
        marginTop: 60
      },
      [theme.breakpoints.down('md')]: {
        width: 'calc(100% - 80px)'
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(6)
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        padding: theme.spacing(2)
      },
      '& button': {
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center'
        }
      }
    },
    '& h1': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3),
      lineHeight: '42px',
      '& button': {
        textAlign: 'left',
        fontSize: 36,
        display: 'block',
        maxWidth: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontFamily: 'Montserrat',
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('md')]: {
          width: '100%',
          fontSize: 28,
          lineHeight: '36px',
          textAlign: 'center'
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: 20,
          lineHeight: '28px'
        }
      },
      [theme.breakpoints.down('xs')]: {
        whiteSpace: 'normal',
        lineHeight: '32px'
      }
    },
    '& p': {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
        fontSize: 14
      }
    },
    '& $time': {
      '& h6': {
        fontSize: 14,
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center'
        }
      }
    },
    '&:before': {
      display: 'none'
    }
  },
  decoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    opacity: 0.5
  },
  imgWrap: {
    position: 'relative',
    top: -24,
    left: -400
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (promotionStyles);

/***/ }),

/***/ "./components/Testimonials/Testimonials.js":
/*!*************************************************!*\
  !*** ./components/Testimonials/Testimonials.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/imgAPI */ "./public/images/imgAPI.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");
/* harmony import */ var _Cards_Testimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Cards/Testimonial */ "./components/Cards/Testimonial.js");
/* harmony import */ var _testi_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./testi-style */ "./components/Testimonials/testi-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Testimonials\\Testimonials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















const testiContent = [{
  text: 'Great team Good charity work',
  name: '	Mallori McLees',
  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_9__["default"].avatar[6],
  title: 'Chief Digital Officer'
}, {
  text: 'im very happy with stellar its ah good coin and it have ah good future vision =)',
  name: 'Arius',
  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_9__["default"].avatar[7],
  title: 'Chief Digital Officer'
} // {
//   text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
//   name: 'Jena Doe',
//   avatar: imgApi.avatar[1],
//   title: 'Graphic Designer',
// },
// {
//   text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
//   name: 'Jovelin Doe',
//   avatar: imgApi.avatar[2],
//   title: 'Senior Graphic Designer',
// },
// {
//   text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
//   name: 'Jihan Doe',
//   avatar: imgApi.avatar[3],
//   title: 'CEO Software House',
// },
// {
//   text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
//   name: 'John Doe',
//   avatar: imgApi.avatar[9],
//   title: 'Senior Graphic Designer',
// },
];

function Testimonials(props) {
  const slider = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const classes = Object(_testi_style__WEBPACK_IMPORTED_MODULE_14__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_11__["useText"])();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.up('lg'));
  const {
    t
  } = props;
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: activeTransition,
    1: setActiveTransition
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    afterChange: current => setActive(current),
    beforeChange: (current, next) => setActiveTransition(next)
  };

  const slideState = index => {
    if (index === activeTransition - 1 || index === active - 1) {
      return classes.past;
    }

    if (index === activeTransition + 1 || index === active + 1) {
      return classes.future;
    }

    if (index === activeTransition || index === active) {
      return classes.current;
    }

    return classes.slide;
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fixed: isDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_12__["default"], {
    text: t('common:crypto-landing.testi_title'),
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: text.subtitle2,
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, t('common:crypto-landing.testi_subtitle')), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    md: 1,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    md: 10,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.sliderWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.carousel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx("button", {
    type: "button",
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.nav, classes.prev),
    onClick: () => slider.current.slickPrev(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "ion-ios-arrow-back",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  })), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_7___default.a, _extends({
    ref: slider
  }, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }), testiContent.map((item, index) => __jsx("div", {
    key: index.toString(),
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.item, slideState(index)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: classes.slideContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 23
    }
  }, __jsx(_Cards_Testimonial__WEBPACK_IMPORTED_MODULE_13__["default"], {
    text: item.text,
    name: item.name,
    title: item.title,
    avatar: item.avatar,
    active: index === active,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }))))), __jsx("button", {
    type: "button",
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.nav, classes.next),
    onClick: () => slider.current.slickNext(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "ion-ios-arrow-forward",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: classes.pagination,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, [...Array(testiContent.length)].map((e, index) => __jsx("li", {
    key: index.toString(),
    className: index === active ? classes.active : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    onClick: () => slider.current.slickGoTo(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 23
    }
  }))))))))));
}

Testimonials.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])(['crypto-landing'])(Testimonials));

/***/ }),

/***/ "./components/Testimonials/index.js":
/*!******************************************!*\
  !*** ./components/Testimonials/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Testimonials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Testimonials */ "./components/Testimonials/Testimonials.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Testimonials__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Testimonials/testi-style.js":
/*!************************************************!*\
  !*** ./components/Testimonials/testi-style.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_crypto_hexa_nav_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/crypto/hexa-nav.png */ "./public/images/crypto/hexa-nav.png");
/* harmony import */ var _public_images_crypto_hexa_nav_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_crypto_hexa_nav_png__WEBPACK_IMPORTED_MODULE_2__);



const testiStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(20)
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 200
    }
  },
  carousel: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 2)
    },
    '& > div': {
      zIndex: 10
    },
    '&:after, &:before': {
      content: '""',
      borderRadius: 12,
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      height: 150,
      position: 'absolute'
    },
    '&:after': {
      width: '90%',
      bottom: 5,
      left: '50%',
      transform: 'translate(-50%, 0)'
    },
    '&:before': {
      width: '80%',
      bottom: -15,
      left: '50%',
      transform: 'translate(-50%, 0)'
    },
    '& > button': {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  },
  item: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(7, 1, 0)
    },
    '&:focus': {
      outline: 'none'
    }
  },
  slideContent: {
    animationDuration: '1s',
    animationFillMode: 'both'
  },
  slide: {
    background: 'none'
  },
  future: {
    '& $slideContent': {
      animation: 'fadeInUp',
      animationDuration: '1s',
      animationDelay: '0.1s',
      animationFillMode: 'both'
    }
  },
  past: {
    '& $slideContent': {
      animation: 'fadeOutUp',
      animationDuration: '1s',
      animationFillMode: 'both'
    }
  },
  nav: {
    position: 'absolute',
    border: 'none',
    zIndex: 12,
    top: '48%',
    width: 50,
    height: 64,
    padding: 0,
    minWidth: 0,
    background: `url(${_public_images_crypto_hexa_nav_png__WEBPACK_IMPORTED_MODULE_2___default.a}) no-repeat center`,
    backgroundSize: '100%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)',
    '& i': {
      color: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.text.secondary, 0.33),
      position: 'relative',
      fontSize: 26
    },
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      opacity: 0.6
    }
  },
  prev: {
    left: 56,
    '& svg': {
      right: 2,
      marginTop: 3
    }
  },
  next: {
    right: 56,
    '& svg': {
      left: 2,
      marginTop: 3
    }
  },
  active: {},
  pagination: {
    zIndex: 22,
    position: 'relative',
    '& ul': {
      position: 'absolute',
      display: 'block',
      width: '100%',
      padding: 0,
      margin: 0,
      listStyle: 'none',
      textAlign: 'center',
      bottom: theme.spacing(-12),
      '& li': {
        position: 'relative',
        display: 'inline-block',
        width: 15,
        height: 15,
        margin: '0 5px',
        padding: 0,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '50%',
        transition: 'all 0.5s ease-out',
        '&$active': {
          background: theme.palette.primary.main
        },
        '&:hover': {
          opacity: 0.5
        },
        '& button': {
          opacity: 0,
          cursor: 'pointer',
          padding: 0,
          width: '100%',
          height: '100%'
        }
      }
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (testiStyles);

/***/ }),

/***/ "./components/Title/Title.js":
/*!***********************************!*\
  !*** ./components/Title/Title.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Title; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _title_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title-style */ "./components/Title/title-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Title\\Title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Title(props) {
  const classes = Object(_title_style__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    text,
    align
  } = props;

  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;

      case 'right':
        return classes.right;

      case 'center':
        return classes.center;

      default:
        return classes.left;
    }
  };

  return __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.title, setAlign(align)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.deco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("svg", {
    width: "38px",
    height: "43px",
    viewBox: "0 0 38 43",
    version: "1.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M0,30.0245126 C0,31.6146901 0.838820037,33.0841534 2.20054545,33.8792422 L16.7994545,42.4036834 C18.16118,43.1987722 19.83882,43.1987722 21.2005455,42.4036834 L35.7994545,33.8792422 C37.16118,33.0841534 38,31.6146901 38,30.0245126 L38,12.9755587 C38,11.3853099 37.16118,9.91591793 35.7994545,9.12075784 L21.2005455,0.596316588 C19.83882,-0.198772196 18.16118,-0.198772196 16.7994545,0.596316588 L2.20054545,9.12075784 C0.838820037,9.91591793 0,11.3853099 0,12.9755587 L0,30.0245126 Z",
    fill: "url(#titleLinearGradient-1)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, text));
}
Title.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Title.defaultProps = {
  align: 'left'
};

/***/ }),

/***/ "./components/Title/index.js":
/*!***********************************!*\
  !*** ./components/Title/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title */ "./components/Title/Title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Title__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Title/title-style.js":
/*!*****************************************!*\
  !*** ./components/Title/title-style.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const titleStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  left: {
    textAlign: 'left',
    '&:after': {
      left: 0
    }
  },
  right: {
    textAlign: 'right',
    '&:after': {
      right: 0
    }
  },
  center: {
    textAlign: 'center',
    '&:after': {
      left: '50%',
      marginLeft: -35
    }
  },
  deco: {
    '& svg': {}
  },
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(3),
    '& h4': {
      marginTop: theme.spacing(2),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 36,
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    }
  },
  titleSecondary: {
    display: 'block',
    position: 'relative',
    '& h4': {
      color: theme.palette.text.primary,
      textTransform: 'capitalize',
      fontSize: 36,
      lineHeight: '56px',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    },
    '& strong': {
      color: theme.palette.text.primary
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (titleStyles);

/***/ }),

/***/ "./components/icons/medium.js":
/*!************************************!*\
  !*** ./components/icons/medium.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Medium; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\icons\\medium.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function Medium(props) {
  return __jsx("svg", _extends({
    fill: "#fff",
    viewBox: "0 0 50 50",
    width: "20px",
    height: "20px"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M45,4H5C4.448,4,4,4.448,4,5v40c0,0.552,0.448,1,1,1h40c0.552,0,1-0.448,1-1V5C46,4.448,45.552,4,45,4z M40,13.5 l-1.821,2.197C38.064,15.811,38,15.965,38,16.125V32.75c0,0.16,0.064,0.314,0.179,0.428L40,35.546V36H30v-0.454l2.821-2.368 C32.936,33.064,33,32.91,33,32.75V17.879L24.848,36h-0.001h-1.543l0,0L15,18.375v13.108c0,0.22,0.076,0.433,0.215,0.605L18,35.546 V36h-8v-0.454l2.783-3.438C12.923,31.936,13,31.721,13,31.5V16.388c0-0.142-0.05-0.279-0.142-0.388L11,13.5V13h7.097l7.624,16.183 L33.002,13H40V13.5z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
}

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner/index.js");
/* harmony import */ var _components_Promotion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Promotion */ "./components/Promotion/index.js");
/* harmony import */ var _components_Feature__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Feature */ "./components/Feature/index.js");
/* harmony import */ var _components_Benefit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Benefit */ "./components/Benefit/index.js");
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Testimonials */ "./components/Testimonials/index.js");
/* harmony import */ var _components_Faq__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Faq */ "./components/Faq/index.js");
/* harmony import */ var _components_Footer_FooterWithCounter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Footer/FooterWithCounter */ "./components/Footer/FooterWithCounter.js");
/* harmony import */ var _components_PageNav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PageNav */ "./components/PageNav/index.js");
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Notification */ "./components/Notification/index.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















const sectionMargin = margin => margin * 20;

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6)
    }
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2)
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  const isTablet = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.only('md'));
  const {
    onToggleDark,
    onToggleDir
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_17___default.a.crypto.name, "\xA0 - Home Page")), __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx("section", {
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.mainWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onToggleDark: onToggleDark,
    onToggleDir: onToggleDir,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("main", {
    className: classes.containerWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("section", {
    id: "banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  })), __jsx("section", {
    id: "promotions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_components_Promotion__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })), __jsx("section", {
    id: "feature",
    className: isTablet ? classes.spaceTopShort : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx(_components_Feature__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  })), __jsx("section", {
    id: "benefit",
    className: classes.spaceTopShort,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx(_components_Benefit__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  })), __jsx("section", {
    id: "testimonials",
    className: classes.spaceTop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(_components_Testimonials__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  })), __jsx("section", {
    id: "faq",
    className: classes.spaceTop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx(_components_Faq__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }))), __jsx(_components_Footer_FooterWithCounter__WEBPACK_IMPORTED_MODULE_14__["default"], {
    toggleDir: onToggleDir,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_components_PageNav__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  })), __jsx("script", {
    src: "/scripts/particles.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "/scripts/stats.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  })));
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'crypto-landing']
});

Landing.propTypes = {
  onToggleDark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onToggleDir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./public/images/crypto/deco-benefit.svg":
/*!***********************************************!*\
  !*** ./public/images/crypto/deco-benefit.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjYzMHB4IiBoZWlnaHQ9IjQ1MnB4IiB2aWV3Qm94PSIwIDAgNjMwIDQ1MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4NCiAgICA8dGl0bGU+R3JvdXAgNDwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbC1vcGFjaXR5PSIwLjE4Ij4NCiAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAtNDkuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDAuNDAwNDA0KSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQxMS41MjY3OTUsMTk3LjcyNDg0NyBDNDExLjUyNjc5NSwyMDYuMjM3MjU5IDQxNi4wODAwMTksMjE0LjEwMzQ3NCA0MjMuNDcxNjQzLDIxOC4zNTk2OCBMNTAyLjcxNjQyNiwyNjMuOTkyMDQ1IEM1MTAuMTA4MDQ5LDI2OC4yNDgyNTIgNTE5LjIxNDQ5OSwyNjguMjQ4MjUyIDUyNi42MDYxMjIsMjYzLjk5MjA0NSBMNjA1Ljg1MDkwNSwyMTguMzU5NjggQzYxMy4yNDI1MjksMjE0LjEwMzQ3NCA2MTcuNzk1NzUzLDIwNi4yMzcyNTkgNjE3Ljc5NTc1MywxOTcuNzI0ODQ3IEw2MTcuNzk1NzUzLDEwNi40NTk3MzUgQzYxNy43OTU3NTMsOTcuOTQ2OTQwNiA2MTMuMjQyNTI5LDkwLjA4MTEwNzggNjA1Ljg1MDkwNSw4NS44MjQ1MTk3IEw1MjYuNjA2MTIyLDQwLjE5MjE1NDggQzUxOS4yMTQ0OTksMzUuOTM1OTQ4NCA1MTAuMTA4MDQ5LDM1LjkzNTk0ODQgNTAyLjcxNjQyNiw0MC4xOTIxNTQ4IEw0MjMuNDcxNjQzLDg1LjgyNDUxOTcgQzQxNi4wODAwMTksOTAuMDgxMTA3OCA0MTEuNTI2Nzk1LDk3Ljk0Njk0MDYgNDExLjUyNjc5NSwxMDYuNDU5NzM1IEw0MTEuNTI2Nzk1LDE5Ny43MjQ4NDcgWiIgaWQ9IkZpbGwtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTE0LjY2MTI3NCwgMTUyLjA5MjEwMCkgcm90YXRlKC0zMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTUxNC42NjEyNzQsIC0xNTIuMDkyMTAwKSAiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCw0MzAuNzg4NTQ3IEMwLDQzOS4zMDA5NiA0LjU1MzIyNDYyLDQ0Ny4xNjcxNzUgMTEuOTQ0ODQ3OSw0NTEuNDIzMzgxIEw5MS4xODk2MzE0LDQ5Ny4wNTU3NDYgQzk4LjU4MTI1NDcsNTAxLjMxMTk1MiAxMDcuNjg3NzA0LDUwMS4zMTE5NTIgMTE1LjA3OTMyNyw0OTcuMDU1NzQ2IEwxOTQuMzI0MTExLDQ1MS40MjMzODEgQzIwMS43MTU3MzQsNDQ3LjE2NzE3NSAyMDYuMjY4OTU5LDQzOS4zMDA5NiAyMDYuMjY4OTU5LDQzMC43ODg1NDcgTDIwNi4yNjg5NTksMzM5LjUyMzQzNiBDMjA2LjI2ODk1OSwzMzEuMDEwNjQxIDIwMS43MTU3MzQsMzIzLjE0NDgwOSAxOTQuMzI0MTExLDMxOC44ODgyMiBMMTE1LjA3OTMyNywyNzMuMjU1ODU2IEMxMDcuNjg3NzA0LDI2OC45OTk2NDkgOTguNTgxMjU0NywyNjguOTk5NjQ5IDkxLjE4OTYzMTQsMjczLjI1NTg1NiBMMTEuOTQ0ODQ3OSwzMTguODg4MjIgQzQuNTUzMjI0NjIsMzIzLjE0NDgwOSAwLDMzMS4wMTA2NDEgMCwzMzkuNTIzNDM2IEwwLDQzMC43ODg1NDcgWiIgaWQ9IkZpbGwtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAzLjEzNDQ3OSwgMzg1LjE1NTgwMSkgcm90YXRlKC0zNjAuMDAwMDAwKSB0cmFuc2xhdGUoLTEwMy4xMzQ0NzksIC0zODUuMTU1ODAxKSAiPjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="

/***/ }),

/***/ "./public/images/crypto/deco-bottom-dark.svg":
/*!***************************************************!*\
  !*** ./public/images/crypto/deco-bottom-dark.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMjgwIDIzNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4MCAyMzc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMzMDMwMzA7fQ0KPC9zdHlsZT4NCjx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+DQo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCjxnIGlkPSJQYWdlLTEiPg0KCTxwYXRoIGlkPSJDb21iaW5lZC1TaGFwZSIgY2xhc3M9InN0MCIgZD0iTTEyODAsMC44VjIzN0gwVjgzYzkuOSwyLjksMjAsNS4xLDMwLjMsNi44bDc3NC45LDEyMy45YzU4LjIsOS4zLDExNy45LTIsMTY4LjctMzINCgkJTDEyODAsMC44eiIvPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./public/images/crypto/deco-bottom-light.svg":
/*!****************************************************!*\
  !*** ./public/images/crypto/deco-bottom-light.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEyODBweCIgaGVpZ2h0PSIyMzdweCIgdmlld0JveD0iMCAwIDEyODAgMjM3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTUuMiAoNzgxODEpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPg0KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxwYXRoIGQ9Ik0xMjgwLDAuNzkwMzAyOTY4IEwxMjgwLDIzNyBMMCwyMzcgTDAsODMuMDQ3MzMwNyBDOS44Nzk0MDI3OCw4NS45MDA4NjMyIDE5Ljk5MzYzOTgsODguMTY5MDMyIDMwLjI5OTE1OTEsODkuODE2Njg3MiBMODA1LjIzNDYxNSwyMTMuNzE0MDE0IEM4NjMuNDY5NzQ4LDIyMy4wMjQ2OTYgOTIzLjEyNzk1MiwyMTEuNjk4NzEgOTczLjg5OTAzLDE4MS42OTM0MjYgTDEyODAsMC43OTAzMDI5NjggWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+DQogICAgPC9nPg0KPC9zdmc+"

/***/ }),

/***/ "./public/images/crypto/deco-faq-top-dark.svg":
/*!****************************************************!*\
  !*** ./public/images/crypto/deco-faq-top-dark.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMjgwIDQxMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4MCA0MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMzMDMwMzA7fQ0KPC9zdHlsZT4NCjx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+DQo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCjxnIGlkPSJQYWdlLTEiPg0KCTxwYXRoIGlkPSJDb21iaW5lZC1TaGFwZSIgY2xhc3M9InN0MCIgZD0iTTEyODAsMzc1Yy00MC4yLTQ3LjMtODMuMi05Ni4yLTEyOS4xLTE0Ni43Yy02MC40LTY2LjUtMTUxLjYtOTYtMjM5LjUtNzcuNEwxNTIuNiwzMTENCgkJYy01Ny43LDEyLjItMTA5LjMsNDQuMS0xNDYsOTAuM0wwLDQwOS43VjBoMTI4MFYzNzVMMTI4MCwzNzV6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./public/images/crypto/deco-faq-top-light.svg":
/*!*****************************************************!*\
  !*** ./public/images/crypto/deco-faq-top-light.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEyODBweCIgaGVpZ2h0PSI0MTBweCIgdmlld0JveD0iMCAwIDEyODAgNDEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTUuMiAoNzgxODEpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPg0KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxwYXRoIGQ9Ik0xMjgwLjAwMDAyLDM3NC45OTk5ODUgQzEyMzkuODEyNDEsMzI3LjcxNzc3MiAxMTk2Ljc2NTMxLDI3OC44MTU2NjEgMTE1MC44NTg3MiwyMjguMjkzNjUzIEMxMDkwLjQzNzQ1LDE2MS43OTc2NzIgOTk5LjI4MjUxNSwxMzIuMzM0NDI0IDkxMS4zNzE5MjksMTUwLjg4NjM0IEwxNTIuNjQxODc3LDMxMS4wMDI0MDIgQzk0LjkzODA0NzMsMzIzLjE3OTczNyA0My4zMDExODYxLDM1NS4xMzMwNDQgNi42NTUyMzMyMiw0MDEuMzQwMTE4IEwwLDQwOS43MzE3MzYgTDAsMCBMMTI4MCwwIEwxMjgwLDM3NC45OTk5NiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4NCiAgICA8L2c+DQo8L3N2Zz4="

/***/ }),

/***/ "./public/images/crypto/deco-list.png":
/*!********************************************!*\
  !*** ./public/images/crypto/deco-list.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAARCAYAAAF1DcY3AAAABGdBTUEAALGPC/xhBQAAAN5JREFUOBFjYACC////NzACif0gDhiARKBMBgZUKZAwSGQOkFaGqWGCMVBoZFPQDbmLrkUZXeAu2CwUM0AiQAFnIFUDlkUQLYyMjHvRLUFIQ1nodmAqABrjCBRtwZABikHlIFJAd0gB8WYQDVPMCGIABVYDKRGYIJB+A9QZitdxeB1GK0mof94guRTEBLkWFAYQgNOfSAo4gewoIA4HYlaYOJD+DcQrgXgZ0MTvMHFQOIBCrAKIdWGCRNCXgWo68AYiIUPwhuPg1hwNdB4oAEgBIPXR4CQJ0wUMeZKiCgApMGE9uqurKgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/images/crypto/hexa-nav.png":
/*!*******************************************!*\
  !*** ./public/images/crypto/hexa-nav.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA7CAYAAAFDKZmoAAAABGdBTUEAALGPC/xhBQAAA/lJREFUaAXtmody1DAQhkMooRPKQKh5/+cKfSChQwIE/s93q5FlNZ/PThnvzMaytKutXpXLxkYbHrdfF28Xgs5de9+xRvjcVMdW2GnvDCYhO2hcToFlR6hg031Nf68aR/i8HXaEU4bjk763lHki0Y9y4u9ocNsjeKF21COtaT2GsHlZHUjdqGVwE1RFz1EvGysxwQtjH+aHS4Hu4Qx1PYtGld0XRfs8YMy++rMSH+KUhGcaQUIM7qvzpj+AHdkU8YidFje8zprmLq7+XkPp0/SJj+M7r0zO987SfOOPDXcibgPeM5kxMakUxqqMgZk8jE2STFBPK9ekoNwTHgn/CfkYHwgPhc5OtXsDyY92TcUqcGM2tEnTw7ppjv8opm+FyVPDzPlUiBtfCv8KGyDN0WaldF9Mkf2LixEcD16Wtf9gUx76s63AMZa7OqrMgjouqe3AdXzZfReZ2vk7dFYFkl92h6PcYXM2lSWsDLDTR9nF2taXrfcSJCtLTFA4Gds9tn2fhJ+DQfhtX7KnNsU2CjWCfEbqFyUFtyD4i7AKYOwDbM6J43XhT2HSAo21oFYQywCFEQ+8E/4WcvIhW78Ki1ByXSkGufgVhRsBLmL5SB5yjFBPUhhaYheFmEXsMUlTFj4WwFogDHwWLHSvhK34+YKyhGKshayiRdNrpXh05nrnTrKpc7zwGIY0qS7ErlmOaIwJfAI7jaQxpWhuThJbUwhq7JgFrRzO2XWz65wH5mRwrujRoKge4joOumMuExyo3wsbGH3hm2wp9wWZddk134giT9tzHGuMPXtrcxKhd1225o+23XKS1MDi3Cbe7nzZ/LMXT0LMdTFirMLCX8IPwitCMpWt8WthEWoF2URs8tkGI4CUdbciamehr6DsZMtB5rwlxK2pEkfC4G4OCNVJI9oirMugS5J0V8ixCaDYHAh/8BIB6KCHD4AOevgGwRCD1qVUX2dkDe5jEOlDGtkvTGOkTSxdOY2TnsgrQskgfrvjspYqAHCVQ2rwnAKQT2rab4hHau8Lk/JDgwZ7SMLGgqoMMYOIAD+z8l76oMdSuO+8/jdMpXwrPLKIkFbU/DfCtZZRzTc2YAP3RBz79wkjCxjAJdJZMwa90RndgW0MAoHq1XhBfqr+mu6bZsyp0m6IMrNBQ7w3Be8coSm8PETGHKEh3puCd47QFF4eIuNcRsgOTrU/Ig5x4Fi8pvsxDTZ3/BMkuOr/roj1xIDdNkcfbDngBThX56GFSYu/dj7i7sC+r15nen+yNbfRp3inYRFKyT7zdwopw+iv8lBugoqxwRlSilBOB/9MD92ql4Undi+XM66vUutyRkenIRHqTLbsiKVNSDvGJWUj4z9hG6z7I5YiyQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/images/flag-logo.png":
/*!*************************************!*\
  !*** ./public/images/flag-logo.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flag-logo-b6c0a3b52dae2bf98f199dc6022dc689.png";

/***/ }),

/***/ "./public/images/imgAPI.js":
/*!*********************************!*\
  !*** ./public/images/imgAPI.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  crypto: ['/images/crypto/hexa-orange.png', '/images/crypto/hexa-green.png', '/images/crypto/hexa-orange.png', '/images/crypto/hexa-green.png', 'https://via.placeholder.com/600x341/cac142/FFFFFF', 'https://via.placeholder.com/1280x677/204473/FFFFFF', '/images/crypto/crypto_laptop.png']
};
/* harmony default export */ __webpack_exports__["default"] = (imgAPI);

/***/ }),

/***/ "./public/text/brand.js":
/*!******************************!*\
  !*** ./public/text/brand.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  crypto: {
    name: 'TradingPlanet',
    desc: 'With TP, our governance token, you can help decide the future of the exchange. As we grow, you grow!',
    prefix: 'tp',
    logoText: 'TradingPlanet',
    projectName: 'TradingPlanet',
    // url: 'luxireact.ux-maestro.com/coinz',
    img: '/static/images/logo.png',
    notifMsg: 'Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.',
    cover: "/static/images/easter-battle.png"
  }
};

/***/ }),

/***/ "./public/text/link.js":
/*!*****************************!*\
  !*** ./public/text/link.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const link = {
  crypto: {
    home: '/',
    contact: '/contact',
    login: '/login',
    register: '/register'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (link);

/***/ }),

/***/ "./theme/common.js":
/*!*************************!*\
  !*** ./theme/common.js ***!
  \*************************/
/*! exports provided: useTextAlign, useFloat, useText, useHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTextAlign", function() { return useTextAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFloat", function() { return useFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useText", function() { return useText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHidden", function() { return useHidden; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useTextAlign = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});
const useFloat = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  }
});
const useText = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 28,
      lineHeight: '44px'
    }
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      lineHeight: '36px'
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
      lineHeight: '36px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      lineHeight: '28px'
    }
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
      lineHeight: '32px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '22px'
    }
  }
}));
const useHidden = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  lgDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

/***/ }),

/***/ "./youtube.js":
/*!********************!*\
  !*** ./youtube.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  use: true
};

/***/ }),

/***/ "@material-ui/core/Accordion":
/*!**********************************************!*\
  !*** external "@material-ui/core/Accordion" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Accordion");

/***/ }),

/***/ "@material-ui/core/AccordionDetails":
/*!*****************************************************!*\
  !*** external "@material-ui/core/AccordionDetails" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),

/***/ "@material-ui/core/AccordionSummary":
/*!*****************************************************!*\
  !*** external "@material-ui/core/AccordionSummary" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionSummary");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ButtonBase":
/*!***********************************************!*\
  !*** external "@material-ui/core/ButtonBase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/OutlinedInput":
/*!**************************************************!*\
  !*** external "@material-ui/core/OutlinedInput" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popover":
/*!********************************************!*\
  !*** external "@material-ui/core/Popover" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Slide":
/*!******************************************!*\
  !*** external "@material-ui/core/Slide" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/SnackbarContent":
/*!****************************************************!*\
  !*** external "@material-ui/core/SnackbarContent" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),

/***/ "@material-ui/core/SwipeableDrawer":
/*!****************************************************!*\
  !*** external "@material-ui/core/SwipeableDrawer" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/Zoom":
/*!*****************************************!*\
  !*** external "@material-ui/core/Zoom" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Zoom");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/colorManipulator":
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/colorManipulator" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "@material-ui/icons/ArrowForward":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowForward");

/***/ }),

/***/ "@material-ui/icons/ArrowUpward":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ArrowUpward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),

/***/ "@material-ui/icons/Check":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Language":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Language" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Language");

/***/ }),

/***/ "@material-ui/icons/Settings":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "@material-ui/icons/Telegram":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Telegram" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Telegram");

/***/ }),

/***/ "@material-ui/icons/Twitter":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Twitter" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

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

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-animated-slider":
/*!****************************************!*\
  !*** external "react-animated-slider" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animated-slider");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-parallax":
/*!*********************************!*\
  !*** external "react-parallax" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-parallax");

/***/ }),

/***/ "react-scroll-parallax":
/*!****************************************!*\
  !*** external "react-scroll-parallax" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ "react-scrollspy":
/*!**********************************!*\
  !*** external "react-scrollspy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react-wow":
/*!****************************!*\
  !*** external "react-wow" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "react-youtube":
/*!********************************!*\
  !*** external "react-youtube" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIvQmFubmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFubmVyL2Jhbm5lci1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhbm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JlbmVmaXQvQmVuZWZpdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JlbmVmaXQvYmVuZWZpdC1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JlbmVmaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy9UZXN0aW1vbmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzL2NhcmRzLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlci9Db3VudGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlci9jb3VudGVyLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZhcS9GYXEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GYXEvZmFxLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmFxL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmVhdHVyZS9GZWF0dXJlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmVhdHVyZS9NYWluRmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZlYXR1cmUvTW9yZUZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWF0dXJlL2ZlYXR1cmUtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWF0dXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJXaXRoQ291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXItc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL01hcmtldFByaWNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL01vYmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24tc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlTmF2L1BhZ2VOYXYuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlTmF2L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnZU5hdi9wYWdlbmF2LXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFyYWxsYXgvSGV4YWdvbmFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFyYWxsYXgvcGFyYWxsYXgtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9tb3Rpb24vUHJvbW90aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvbW90aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvbW90aW9uL3Byb21vdGlvbi1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXN0aW1vbmlhbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXN0aW1vbmlhbHMvdGVzdGktc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpdGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGl0bGUvdGl0bGUtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9tZWRpdW0uanMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWJlbmVmaXQuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tYm90dG9tLWRhcmsuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tYm90dG9tLWxpZ2h0LnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWZhcS10b3AtZGFyay5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9jcnlwdG8vZGVjby1mYXEtdG9wLWxpZ2h0LnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWxpc3QucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvL2hleGEtbmF2LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ZsYWctbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pbWdBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RleHQvYnJhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RleHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4veW91dHViZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXBlYWJsZURyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvWm9vbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dVcHdhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MYW5ndWFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5nc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9UZWxlZ3JhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFuY2hvci1saW5rLXNtb290aC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlZC1zbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudHVwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGFyYWxsYXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGwtcGFyYWxsYXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxzcHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXdvd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXlvdXR1YmVcIiJdLCJuYW1lcyI6WyJCYW5uZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ0ZXh0IiwidXNlVGV4dCIsImVsZW0iLCJ1c2VSZWYiLCJ0IiwidGhlbWUiLCJ1c2VUaGVtZSIsImhpZGUiLCJzZXRIaWRlIiwidXNlU3RhdGUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50IiwiZG9jIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJlbFRvcCIsIm9mZnNldFRvcCIsImVsQm90dG9tIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwidXNlRWZmZWN0Iiwid2luZG93IiwicGFydGljbGVzSlMiLCJwYXJ0aWNsZXMiLCJudW1iZXIiLCJ2YWx1ZSIsImRlbnNpdHkiLCJlbmFibGUiLCJ2YWx1ZV9hcmVhIiwiY29sb3IiLCJzaGFwZSIsInR5cGUiLCJzdHJva2UiLCJ3aWR0aCIsInBvbHlnb24iLCJuYl9zaWRlcyIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsInJldGluYV9kZXRlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicm9vdCIsImNhbnZhc1dyYXAiLCJvdmVybGF5IiwiY2xzeCIsImRlY29Jbm5lciIsInBhcnRpY2xlQmFja2dyb3VuZCIsImJhbm5lcldyYXAiLCJ0aXRsZTIiLCJzdWJ0aXRsZTIiLCJidG5BcmVhIiwiaW52ZXJ0IiwiZGVjb0JvdHRvbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIiwiYmFubmVyU3R5bGVzIiwibWFrZVN0eWxlcyIsInBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJkYXJrIiwicHJpbWFyeSIsIm1haW4iLCJjb250ZW50IiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImZhZGUiLCJ6SW5kZXgiLCJvYmplY3RBcnQiLCJtYXhXaWR0aCIsImNvbW1vbiIsIndoaXRlIiwidXAiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJib3JkZXJDb2xvciIsImJvdHRvbSIsImZpbGwiLCJkYXJrZW4iLCJsaWdodGVuIiwidHJhbnNmb3JtIiwidmlzaWJpbGl0eSIsIkJlbmVmaXQiLCJpc0Rlc2t0b3AiLCJwYXJhbGxheFdyYXAiLCJwYXJhbGxheFByb3BzIiwid3JhcHBlciIsImJlbmVmaXRTdHlsZXMiLCJibGFjayIsInBhZGRpbmdUb3AiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImRlc2MiLCJwYWRkaW5nIiwiZm9udFdlaWdodCIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0TWVkaXVtIiwibGlzdCIsIm1hcmdpbiIsImxpc3RTdHlsZSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImRlY29MaXN0IiwiaW1nIiwiZGVjbyIsInJpZ2h0IiwiZGVjb0JlbmVmaXQiLCJUZXN0aW1vbmlhbCIsIm5hbWUiLCJ0aXRsZSIsImF2YXRhciIsImFjdGl2ZSIsInRlc3RpbW9uaWFsIiwicGFwZXIiLCJjYXB0aW9uIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsImNhcmRzU3R5bGVzIiwiYm9yZGVyIiwidHJhbnNpdGlvbiIsInRleHRPdmVyZmxvdyIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJDb3VudGVyIiwicGxheSIsInNldFBsYXkiLCJjb3VudHVwIiwidmFsIiwiaXNQbGF5IiwiaGFuZGxlUGxheSIsInNldFRpbWVvdXQiLCJjb3VudGVyV3JhcCIsInN1YnRpdGxlIiwiY2FsbEFjdGlvbiIsInJvdXRlTGluayIsImNyeXB0byIsInJlZ2lzdGVyIiwiYnV0dG9uIiwiY291bnRlclN0eWxlcyIsImZhcURhdGEiLCJxIiwiYSIsIkZhcSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJSZWFjdCIsImhhbmRsZUNoYW5nZSIsInBhbmVsIiwiZXZlbnQiLCJuZXdFeHBhbmRlZCIsInBhcmFsbGF4IiwiaWxsdXN0cmF0aW9uIiwiYWNjb3JkaW9uIiwibWFwIiwiaXRlbSIsImluZGV4IiwidG9TdHJpbmciLCJoZWFkaW5nIiwiaWNvbiIsImRldGFpbCIsImZhcVN0eWxlcyIsImRlY29GYXFEYXJrIiwiZGVjb0ZhcUxpZ2h0IiwiYmFja2dyb3VuZFNpemUiLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwicm91bmRlZCIsIm1lZGl1bSIsImxpZ2h0IiwiRmVhdHVyZSIsIlRyYW5zaXRpb24iLCJmb3J3YXJkUmVmIiwicmVmIiwiTWFpbkZlYXR1cmUiLCJwbGF5ZXIiLCJzZXRQbGF5ZXIiLCJvcGVuUG9wdXAiLCJzZXRPcGVuUG9wdXAiLCJoYW5kbGVDbGlja09wZW4iLCJ5dCIsInVzZSIsInBsYXlWaWRlbyIsImhhbmRsZUNsb3NlIiwicGF1c2VWaWRlbyIsIl9vblJlYWR5IiwidGFyZ2V0Iiwib3B0cyIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwicmVsIiwic2hvd2luZm8iLCJtdXRlIiwib3JpZ2luIiwibWFpbkZlYXR1cmUiLCJ2aWRlb1BvcHVwIiwiY2xvc2VCdG4iLCJ2aWRlbyIsInBsYXlCdG4iLCJmZWF0dXJlV3JhcCIsImNvaW5EYXRhIiwibG9nbyIsInByb2dyZXNzIiwiTW9yZUZlYXR1cmUiLCJ0aGVtZVByb2dyZXNzIiwiY3JlYXRlTXVpVGhlbWUiLCJtb3JlRmVhdHVyZSIsImNlbnRlciIsImZlYXR1cmVTdHlsZXMiLCJtaW5IZWlnaHQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJjb3VudGVyIiwibG93ZXIiLCJoaWdoZXIiLCJmb250V2VpZ2h0Qm9sZCIsImNoYXJ0RGVjbyIsInByb2dyZXNzV3JhcCIsImNvaW4iLCJmbGV4IiwidW5pdCIsInRyYWNrIiwiZGl2aWRlciIsImJhciIsIkNvcHlyaWdodCIsImZvb3RlciIsImRlc2NyaXB0aW9uIiwibGluayIsIm5ld3MiLCJpbWdBcGkiLCJwaG90byIsIkZvb3RlciIsImN0biIsInNldEN0biIsInZhbHVlcyIsInNldFZhbHVlcyIsImxhbmciLCJpMThuIiwibGFuZ3VhZ2UiLCJnZXRFbGVtZW50QnlJZCIsIm9sZFZhbHVlcyIsImNoYW5nZUxhbmd1YWdlIiwidG9nZ2xlRGlyIiwiYnJhbmQiLCJwcm9qZWN0TmFtZSIsImZvb3RlckRlc2MiLCJxdWlja0xpbmtzIiwic29jbWVkIiwiRm9vdGVyV2l0aERlY28iLCJmb290ZXJDb3VudGVyIiwiZGVjb1RvcCIsImZvb3RlclN0eWxlcyIsIndoaXRlU3BhY2UiLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dERlY29yYXRpb24iLCJzZWxlY3RMYW5nIiwiYm9yZGVyVG9wIiwic2VsZWN0TWVudSIsImNhdGVnb3J5IiwibGlzdFRleHQiLCJibG9nSXRlbSIsImNyZWF0ZURhdGEiLCJ1cmwiLCJvZmZzZXQiLCJpZCIsIkxpbmtCdG4iLCJ0byIsIkhlYWRlciIsImZpeGVkIiwic2V0Rml4ZWQiLCJmbGFnRml4ZWQiLCJzY3JvbGwiLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsIm5ld0ZsYWdGaXhlZCIsIm9uVG9nZ2xlRGFyayIsIm9uVG9nZ2xlRGlyIiwibWVudUxpc3QiLCJuYXZNZW51Iiwib3BlbkRyYXdlciIsInNldE9wZW5EcmF3ZXIiLCJoYW5kbGVPcGVuRHJhd2VyIiwiaGVhZGVyIiwiaGVhZGVyQ29udGVudCIsIm1vYmlsZU1lbnUiLCJob21lIiwiQW5jaG9yTGluayIsImNvbnRhY3QiLCJuYXZBdXRoIiwic3RpY2t5IiwibWFya2V0TGlzdCIsInByaWNlIiwic3RhdHVzIiwicGVyY2VudCIsIk1hcmtldFByaWNlIiwic2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5U3BlZWQiLCJjc3NFYXNlIiwicGF1c2VPbkhvdmVyIiwicmVuZGVyUGVyY2VudCIsImFycm93Iiwic3RheSIsIm1hcmtldCIsIk1vYmlsZU1lbnUiLCJ0b2dnbGVEcmF3ZXIiLCJvcGVuIiwiU2lkZUxpc3QiLCJtb2JpbGVOYXYiLCJtZW51IiwibWVudU9wZW4iLCJhbmltYXRpb25EdXJhdGlvbiIsImxlbmd0aCIsImRpdmlkZXJTaWRlYmFyIiwicGFwZXJOYXYiLCJ0aGVtZVR5cGUiLCJTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlNldHRpbmdzIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImlzRGFyayIsInNldERhcmsiLCJoYW5kbGVDbGljayIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDaGFuZ2VNb2RlIiwidG9nZ2xlRGFyayIsImhhbmRsZUNoYW5nZUxhbmciLCJCb29sZWFuIiwidW5kZWZpbmVkIiwic2V0dGluZyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIm1vZGVNZW51IiwibGFuZ01lbnUiLCJvcHRpb25zIiwiYWxsTGFuZ3VhZ2VzIiwiZmxhZ0ljb24iLCJmbGFnIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaGVhZGVyU3R5bGVzIiwiZnJvbSIsImJvcmRlckxlZnRDb2xvciIsIm1hcmdpbkxlZnQiLCJtaW5XaWR0aCIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsImJvcmRlckxlZnQiLCJvdXRsaW5lIiwiZm9udFN0eWxlIiwiTG9nbyIsIlRyYW5zaXRpb25VcCIsIk5vdGlmaWNhdGlvbiIsInNldE9wZW4iLCJub3RpZmljYXRpb24iLCJhY3Rpb24iLCJub3RpZmljYXRpb25TdHlsZXMiLCJQYWdlTmF2Iiwic2hvdyIsInNldFNob3ciLCJmbGFnU2hvdyIsIm5ld0ZsYWdTaG93IiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJwYWdlTmF2Iiwic2VjdGlvbk5hdiIsInRvb2x0aXAiLCJmYWIiLCJwYWdlbmF2IiwidHJhbnNpdGlvbkRlbGF5IiwiUGFyYWxsYXhDbG91ZCIsImRvdHNXcmFwIiwiaW5uZXJQYXJhbGxheCIsImxhcmdlIiwiaGV4YVdyYXAiLCJyaWdodFRvcEJhY2siLCJiaWciLCJoZXhhQmFjayIsInJpZ2h0VG9wRnJvbnQiLCJzbWFsbCIsImxlZnRCb3R0b21CYWNrIiwibGVmdEJvdHRvbUZyb250IiwicGFyYWxsYXhTdHlsZXMiLCJoZXhhVG9wIiwic2xpZGVyRGF0YSIsImltYWdlIiwiZGF0ZSIsIlByb21vdGlvbiIsInNsaWRlcldyYXAiLCJvZGQiLCJldmVuIiwiaW1nV3JhcCIsImRlY29yYXRpb24iLCJ0aW1lIiwicHJvbW90aW9uU3R5bGVzIiwiZGVjb0JvdHRvbURhcmsiLCJkZWNvQm90dG9tTGlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZXhhIiwibWF4SGVpZ2h0IiwidmVydGljYWxBbGlnbiIsIm9iamVjdEZpdCIsImZvbnRGYW1pbHkiLCJ0ZXN0aUNvbnRlbnQiLCJUZXN0aW1vbmlhbHMiLCJzbGlkZXIiLCJ1c2VTdHlsZSIsInNldEFjdGl2ZSIsImFjdGl2ZVRyYW5zaXRpb24iLCJzZXRBY3RpdmVUcmFuc2l0aW9uIiwiYWZ0ZXJDaGFuZ2UiLCJiZWZvcmVDaGFuZ2UiLCJuZXh0Iiwic2xpZGVTdGF0ZSIsInBhc3QiLCJmdXR1cmUiLCJzbGlkZSIsImNhcm91c2VsIiwibmF2IiwicHJldiIsInNsaWNrUHJldiIsInNsaWRlQ29udGVudCIsInNsaWNrTmV4dCIsInBhZ2luYXRpb24iLCJBcnJheSIsImUiLCJzbGlja0dvVG8iLCJ0ZXN0aVN0eWxlcyIsImFuaW1hdGlvbkZpbGxNb2RlIiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uRGVsYXkiLCJoZXhhQmciLCJjdXJzb3IiLCJUaXRsZSIsImFsaWduIiwic2V0QWxpZ24iLCJhbGlnbm1lbnQiLCJ0aXRsZVN0eWxlcyIsInRpdGxlU2Vjb25kYXJ5IiwiTWVkaXVtIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJmYWxsYmFja0xuZyIsImluaXRJbW1lZGlhdGUiLCJsb2NhbGVQYXRoIiwicmVhY3QiLCJ1c2VTdXNwZW5zZSIsImxvY2FsZVN1YnBhdGhzIiwiZW5nIiwic2VjdGlvbk1hcmdpbiIsIm1haW5XcmFwIiwic3BhY2VCb3R0b20iLCJzcGFjZVRvcCIsInNwYWNlQm90dG9tU2hvcnQiLCJzcGFjZVRvcFNob3J0IiwiY29udGFpbmVyV3JhcCIsIkxhbmRpbmciLCJpc1RhYmxldCIsIm9ubHkiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJpbWdBUEkiLCJwcmVmaXgiLCJsb2dvVGV4dCIsIm5vdGlmTXNnIiwiY292ZXIiLCJsb2dpbiIsInVzZVRleHRBbGlnbiIsInRleHRDZW50ZXIiLCJ0ZXh0TGVmdCIsInRleHRSaWdodCIsInVzZUZsb2F0IiwiZmxvYXRMZWZ0IiwiZmxvYXQiLCJmbG9hdFJpZ2h0IiwiZm9udFdlaWdodFJlZ3VsYXIiLCJwYXJhZ3JhcGgiLCJ1c2VIaWRkZW4iLCJsZ0Rvd24iLCJtZERvd24iLCJzbURvd24iLCJ4c0Rvd24iLCJsZ1VwIiwibWRVcCIsInNtVXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJ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QUN2aEIsS0FBSyxDQUFDTyxXQUFOLENBQWtCd0csRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1QnBCLGFBQU8sRUFBRTtBQURtQjtBQUQxQixHQTFCc0M7QUErQjVDNmIsTUFBSSxFQUFFO0FBQ0osS0FBQ3hoQixLQUFLLENBQUNPLFdBQU4sQ0FBa0J3RyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCcEIsYUFBTyxFQUFFO0FBRG1CO0FBRDFCO0FBL0JzQyxDQUFMLENBQU4sQ0FBNUIsQzs7Ozs7Ozs7Ozs7QUM1RlBnWixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZjdRLEtBQUcsRUFBRTtBQURVLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9iYW5uZXItc3R5bGUnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuXHJcblxyXG5mdW5jdGlvbiBCYW5uZXIocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCBlbGVtID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgY29uc3QgW2hpZGUsIHNldEhpZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmICghZWxlbS5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIGNvbnN0IGVsVG9wID0gZWxlbS5jdXJyZW50Lm9mZnNldFRvcCAtIDIwMDtcclxuICAgIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyBlbGVtLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgaWYgKGRvYy5zY3JvbGxUb3AgPiBlbFRvcCAmJiBkb2Muc2Nyb2xsVG9wIDwgZWxCb3R0b20pIHtcclxuICAgICAgc2V0SGlkZShmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRIaWRlKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cucGFydGljbGVzSlMoJ3BhcnRpY2xlc19iYWNrZ3JvbmQnLCB7XHJcbiAgICAgIHBhcnRpY2xlczoge1xyXG4gICAgICAgIG51bWJlcjoge1xyXG4gICAgICAgICAgdmFsdWU6IDEwMCxcclxuICAgICAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICB2YWx1ZTogJyNmZmZmZmYnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgdHlwZTogJ2NpcmNsZScsXHJcbiAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwMCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwb2x5Z29uOiB7XHJcbiAgICAgICAgICAgIG5iX3NpZGVzOiA1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICB2YWx1ZTogMC41LFxyXG4gICAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgICAgIG9wYWNpdHlfbWluOiAwLjEsXHJcbiAgICAgICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICB2YWx1ZTogMyxcclxuICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDQwLFxyXG4gICAgICAgICAgICBzaXplX21pbjogMC4xLFxyXG4gICAgICAgICAgICBzeW5jOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGRpc3RhbmNlOiAxNTAsXHJcbiAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICAgICAgd2lkdGg6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdmU6IHtcclxuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHNwZWVkOiAyLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgb3V0X21vZGU6ICdvdXQnLFxyXG4gICAgICAgICAgYm91bmNlOiBmYWxzZSxcclxuICAgICAgICAgIGF0dHJhY3Q6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgcm90YXRlWDogNjAwLFxyXG4gICAgICAgICAgICByb3RhdGVZOiAxMjAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICAgICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcclxuICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgIG9uaG92ZXI6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RlOiAncmVwdWxzZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvbmNsaWNrOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbW9kZTogJ3B1c2gnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2Rlczoge1xyXG4gICAgICAgICAgZ3JhYjoge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJ1YmJsZToge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgICAgICBzaXplOiA0MCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDgsXHJcbiAgICAgICAgICAgIHNwZWVkOiAzXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVwdWxzZToge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogMjAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMC40XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHVzaDoge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZW1vdmU6IHtcclxuICAgICAgICAgICAgcGFydGljbGVzX25iOiAyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICByZXRpbmFfZGV0ZWN0OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtlbGVtfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FudmFzV3JhcH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub3ZlcmxheX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRlY29Jbm5lciwgaGlkZSAmJiBjbGFzc2VzLmhpZGUpfT5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInBhcnRpY2xlc19iYWNrZ3JvbmRcIiBjbGFzc05hbWU9e2NsYXNzZXMucGFydGljbGVCYWNrZ3JvdW5kfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhbm5lcldyYXB9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNsYXNzTmFtZT17dGV4dC50aXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl90aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl9zdWJ0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bkFyZWF9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RyYWRpbmdwbGFuZXQuZmluYW5jZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cImxhcmdlXCIgZnVsbFdpZHRoPXtpc01vYmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuYmFubmVyX2dldHN0YXJ0ZWQnKX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9AVHJhZGluZ1BsYW5ldEVYXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnZlcnR9IHNpemU9XCJsYXJnZVwiIGZ1bGxXaWR0aD17aXNNb2JpbGV9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl9sZWFybicpfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMub2JqZWN0QXJ0fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jcnlwdG8vYmFubmVyLWFydC5wbmdcIiBhbHQ9XCJpbGx1c3RyYXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb0JvdHRvbX0+XHJcbiAgICAgICAgPHN2Zz5cclxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiL2ltYWdlcy9jcnlwdG8vZGVjby1iYW5uZXIuc3ZnI21haW5cIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkJhbm5lci5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoQmFubmVyKTtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGxpZ2h0ZW4sIGRhcmtlbiwgZmFkZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcclxuXHJcbmNvbnN0IGJhbm5lclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgLy8gW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgLy8gICBoZWlnaHQ6IDcwMCxcclxuICAgIC8vIH0sXHJcbiAgICAvLyBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgIC8vICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg1KVxyXG4gICAgLy8gfVxyXG4gIH0sXHJcbiAgY2FudmFzV3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAke3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmt9IDMwJSwgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFya30gODAlKWAgOiBgbGluZWFyLWdyYWRpZW50KC00NWRlZywgJHt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSAzMCUsICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IDgwJSlgLFxyXG4gICAgJyY6YWZ0ZXInOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMiknXHJcbiAgICB9XHJcbiAgfSxcclxuICBvdmVybGF5OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBmYWRlKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjcpIDogZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC43KSxcclxuICB9LFxyXG4gIHBhcnRpY2xlQmFja2dyb3VuZDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAnJiBjYW52YXMnOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBiYW5uZXJXcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMVxyXG4gIH0sXHJcbiAgb2JqZWN0QXJ0OiB7XHJcbiAgICAnJiBpbWcnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIGxlZnQ6IC0xMzAsXHJcbiAgICAgIHRvcDogMjQwLFxyXG4gICAgICBtYXhXaWR0aDogNTYwLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICB0b3A6IDEyMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMjApLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTIpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMjApLFxyXG4gICAgfSxcclxuICAgICcmIGg0Jzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9XHJcbiAgfSxcclxuICBidG5BcmVhOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgJyYgYnV0dG9uJzoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICAgIGhlaWdodDogNTBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW52ZXJ0OiB7XHJcbiAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgfSxcclxuICBkZWNvQm90dG9tOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogLTUwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIHdpZHRoOiAxNDAwLFxyXG4gICAgICBoZWlnaHQ6IDM4MCxcclxuICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssIDAuNikgOiBsaWdodGVuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCAwLjg0KSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDEyMDApXToge1xyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDIsIDEpJ1xyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hsJyldOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWNvSW5uZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gIH0sXHJcbiAgaGlkZToge1xyXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhbm5lclN0eWxlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQmFubmVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBpbWdBUEkgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9iZW5lZml0LXN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIEJlbmVmaXQocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKSk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJykpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhbGxheFdyYXB9PlxyXG4gICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgYmdJbWFnZT1cIi9pbWFnZXMvZWFzdGVyLWJhdHRsZS5wbmdcIlxyXG4gICAgICAgICAgYmdJbWFnZUFsdD1cImJlbmVmaXRcIlxyXG4gICAgICAgICAgc3RyZW5ndGg9ezB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWxsYXhQcm9wc30gLz5cclxuICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENvbnRhaW5lciBmaXhlZD17aXNEZXNrdG9wfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17NX0+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17N30+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5CZW5lZml0LnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShCZW5lZml0KTtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBkZWNvQmVuZWZpdCBmcm9tICd+L3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tYmVuZWZpdC5zdmcnO1xyXG5pbXBvcnQgZGVjb0xpc3QgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWxpc3QucG5nJztcclxuXHJcbmNvbnN0IGJlbmVmaXRTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICBoZWlnaHQ6IDgwMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZyg4KVxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZyg0KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVzYzoge1xyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICcmIGg0Jzoge1xyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW1cclxuICAgIH1cclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgNSksXHJcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgZm9udFNpemU6IDE4LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgIH0sXHJcbiAgICAnJiBsaSc6IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICczOHB4JyxcclxuICAgICAgYmFja2dyb3VuZDogYHVybCgke2RlY29MaXN0fSkgbm8tcmVwZWF0IDAgMTBweGBcclxuICAgIH1cclxuICB9LFxyXG4gIGltZzoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDAsIDApLFxyXG4gICAgLy8gb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgLy8gYm90dG9tOiAtNDAsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG1heFdpZHRoOiAnMzAwcHgnLFxyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWNvOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogNDAsXHJcbiAgICByaWdodDogODAsXHJcbiAgfSxcclxuICBwYXJhbGxheFdyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9LFxyXG4gIHBhcmFsbGF4UHJvcHM6IHtcclxuICAgIGJhY2tncm91bmQ6IGB1cmwoJHtkZWNvQmVuZWZpdH0pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyYCxcclxuICAgIGhlaWdodDogODAwLFxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmVuZWZpdFN0eWxlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQmVuZWZpdCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vY2FyZHMtc3R5bGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWwocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgdGV4dCxcclxuICAgIG5hbWUsXHJcbiAgICB0aXRsZSxcclxuICAgIGF2YXRhcixcclxuICAgIGFjdGl2ZVxyXG4gIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGVzdGltb25pYWx9PlxyXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucGFwZXIsIGFjdGl2ZSA/IGNsYXNzZXMuYWN0aXZlIDogJycpfT5cclxuICAgICAgICA8QXZhdGFyIHNyYz17YXZhdGFyfSBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fSBkaXNwbGF5PVwiYmxvY2tcIj57dGV4dH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMuY2FwdGlvbn0+XHJcbiAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIHsvKiAmbmJzcDstJm5ic3A7XHJcbiAgICAgICAgICB7dGl0bGV9ICovfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblRlc3RpbW9uaWFsLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcblRlc3RpbW9uaWFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhY3RpdmU6IGZhbHNlXHJcbn07XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgY2FyZHNTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgdGVzdGltb25pYWw6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgfSxcclxuICBhY3RpdmU6IHt9LFxyXG4gIGNhcHRpb246IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBmb250U2l6ZTogMTYsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6IDE0XHJcbiAgICB9XHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgaGVpZ2h0OiAyNTAsXHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCksXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcclxuICAgIHRyYW5zaXRpb246ICdib3JkZXIgMC40cyBlYXNlLW91dCcsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDE1KSxcclxuICAgIH0sXHJcbiAgICAnJiRhY3RpdmUnOiB7XHJcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufWBcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBkaXNwbGF5OiAnLXdlYmtpdC1ib3gnLFxyXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgaGVpZ2h0OiA4MCxcclxuICAgIGZvbnRTaXplOiAxOCxcclxuICAgICctd2Via2l0LWxpbmUtY2xhbXAnOiAzLFxyXG4gICAgJy13ZWJraXQtYm94LW9yaWVudCc6ICd2ZXJ0aWNhbCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAnLXdlYmtpdC1saW5lLWNsYW1wJzogNCxcclxuICAgIH1cclxuICB9LFxyXG4gIGF2YXRhcjoge1xyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzhdLFxyXG4gICAgd2lkdGg6IDgwLFxyXG4gICAgaGVpZ2h0OiA4MCxcclxuICAgIG1hcmdpbjogJy0zMnB4IGF1dG8gMzJweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpbjogJy05NnB4IGF1dG8gMzJweCcsXHJcbiAgICB9XHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZHNTdHlsZXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENvdW50VXAgZnJvbSAncmVhY3QtY291bnR1cCc7XHJcbmltcG9ydCBSZWFjdFdPVyBmcm9tICdyZWFjdC13b3cnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCByb3V0ZUxpbmsgZnJvbSAnfi9wdWJsaWMvdGV4dC9saW5rJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gJ34vdGhlbWUvY29tbW9uJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2NvdW50ZXItc3R5bGUnO1xyXG5cclxuZnVuY3Rpb24gQ291bnRlcihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3BsYXksIHNldFBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvdW50dXAgPSAodmFsLCBpc1BsYXkpID0+IChcclxuICAgIDxzcGFuPlxyXG4gICAgICB7aXNQbGF5ID8gPENvdW50VXAgZW5kPXt2YWx9IC8+IDogMH1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG4gIGNvbnN0IGhhbmRsZVBsYXkgPSAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2V0UGxheSh0cnVlKTsgfSwgMjAwKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3VudGVyV3JhcH0+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG4gICAgICAgIDxSZWFjdFdPVyBhbmltYXRpb249XCJmYWRlSW5cIiBvZmZzZXQ9ezIwMH0gY2FsbGJhY2s9e2hhbmRsZVBsYXl9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY2xhc3NOYW1lPXt0ZXh0LnRpdGxlfT5cclxuICAgICAgICAgICAge2NvdW50dXAoMiwgcGxheSl9XHJcbiAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICB7Y291bnR1cCgyMzQsIHBsYXkpfVxyXG4gICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAge2NvdW50dXAoNTY3LCBwbGF5KX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiBjbGFzc05hbWU9e3RleHQuc3VidGl0bGV9PlxyXG4gICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmZvb3Rlcl9jb3VudGVyJyl9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9SZWFjdFdPVz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYWxsQWN0aW9ufT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbSBjbGFzc05hbWU9e3RleHQuc3VidGl0bGV9PlxyXG4gICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmZvb3Rlcl93YWl0aW5nJyl9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBocmVmPXtyb3V0ZUxpbmsuY3J5cHRvLnJlZ2lzdGVyfSBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCJsYXJnZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmdldHN0YXJ0ZWQnKX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvdW50ZXIucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKENvdW50ZXIpO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IGNvdW50ZXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgY291bnRlcldyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICcmIGgzJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICB9LFxyXG4gICAgJyYgcCc6IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuNSksXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2FsbEFjdGlvbjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY291bnRlclN0eWxlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ291bnRlcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb24nO1xyXG5pbXBvcnQgQWNjb3JkaW9uU3VtbWFyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5JztcclxuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlscyc7XHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xyXG5pbXBvcnQgUGFyYWxsYXggZnJvbSAnLi4vUGFyYWxsYXgvSGV4YWdvbmFsJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL1RpdGxlJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2ZhcS1zdHlsZSc7XHJcblxyXG5jb25zdCBmYXFEYXRhID0gW1xyXG4gIHtcclxuICAgIHE6ICdJcyB0aGUgVFAgY29pbiBFUkMtMjAgY29tcGF0aWJsZT8nLFxyXG4gICAgYTogJ1llcywgVFAgQ29pbiBpcyBiYXNlZCBvbiB0aGUgQlNDIGJsb2NrY2hhaW4gcGxhdGZvcm0gYW5kIEVSQy0yMCBjb21wYXRpYmxlLidcclxuICB9LFxyXG4gIHtcclxuICAgIHE6ICdBbSBJIGJ1eWluZyBvbiBteSBvd24gUmlzaz8nLFxyXG4gICAgYTogJ0JlY2F1c2UgaXQgaXMgYSBkZWNlbnRyYWxpemVkIHBsYXRmb3JtIFRva2VuICB0aGF0IGhhcyBzb2x1dGlvbnMgZm9yIG1hbnkgaXNzdWVzIHJlbGF0ZWQgdG8gc2VjdXJpdHksIHByaXZhY3ksIHNwZWVkIG9mIHRyYW5zZWN0aW9ucywgaW4gYWRkaXRpb24gdG8gdmVyeSBsb3cgZmVlcy4gRG8gbm90IGZvcmdldCAgdGhhdCBvdXIgbGltaXQgaXMgdGhlIHNreSEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBxOiAnV2hlcmUgYW5kIGhvdyBkbyBJIGtlZXAgbXkgVFAgQ29pbj8nLFxyXG4gICAgYTogJ1lvdSBjYW4ga2VlcCB5b3VyIFRQIFRva2VuIGluIFRyYWRpbmcgUGxhbmV0IHdhbGxldCBhbmQgaW4gZXZlcnkgd2FsbGV0IFdoaWNoIGlzIEJTQyBjb21wYXRpYmxlIGFuZCBzdXBwb3J0cyB0aGUgVFAgVG9rZW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBxOiAnV2hhdCBpcyB0aGUgbWFya2V0aW5nIHN0cmF0ZWd5IG9mIFRyYWRpbmcgUGxhbmV0PycsXHJcbiAgICBhOiAnSW4gb3JkZXIgdG8gbWFya2V0IFRyYWRpbmcgUGxhbmV0IFN3YXAgaW4gYSB0YXJnZXRlZCBtYW5uZXIsIGEgZGlnaXRhbCBtYXJrZXRpbmcgc3RyYXRlZ3kgaXMgdXNlZCBhYm92ZSBhbGwuIE9uIHNvY2lhbCBtZWRpYSBtYWlubHkgdGhlIGNoYW5uZWxzIEluc3RhZ3JhbSwgRmFjZWJvb2sgYW5kIFlvdVR1YmUgYXJlIHVzZWQgZnJvbSB0aGUgYmVnaW5uaW5nIGFuZCB0aGUgc3BlY2lmaWMgdGFyZ2V0IGdyb3VwIGlzIGFkZHJlc3NlZCBpbiB0aGUgYmVzdCBwb3NzaWJsZSB3YXkgdGhyb3VnaCBhcHByb3ByaWF0ZSBwb3N0cyBhbmQgc3RvcnkgY29udHJpYnV0aW9ucydcclxuICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBGYXEocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJykpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBwYW5lbCA9PiAoZXZlbnQsIG5ld0V4cGFuZGVkKSA9PiB7XHJcbiAgICBzZXRFeHBhbmRlZChuZXdFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhbGxheH0+XHJcbiAgICAgICAgPFBhcmFsbGF4IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICA8VGl0bGUgdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmZhcV90aXRsZScpfSBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0gYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9IGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmZhcV9zdWJ0aXRsZScpfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlsbHVzdHJhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvNDk4LVtDb252ZXJ0ZWRdLnBuZ1wiIGFsdD1cImlsbHVzdHJhdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjY29yZGlvbn0+XHJcbiAgICAgICAgICAgICAge2ZhcURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0ga2V5PXtpbmRleC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMucGFwZXJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjbGFzc2VzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBjbGFzc2VzLmV4cGFuZGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+e2l0ZW0ucX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RXhwYW5kTW9yZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuZGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uYX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5GYXEucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKEZhcSk7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBsaWdodGVuLCBkYXJrZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XHJcbmltcG9ydCBkZWNvRmFxTGlnaHQgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWZhcS10b3AtbGlnaHQuc3ZnJztcclxuaW1wb3J0IGRlY29GYXFEYXJrIGZyb20gJ34vcHVibGljL2ltYWdlcy9jcnlwdG8vZGVjby1mYXEtdG9wLWRhcmsuc3ZnJztcclxuXHJcbmNvbnN0IGZhcVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGJhY2tncm91bmQ6IGB1cmwoJHt0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGRlY29GYXFEYXJrIDogZGVjb0ZhcUxpZ2h0fSkgdG9wIGNlbnRlciBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGRhcmtlbih0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyaywgMC42KSA6IGxpZ2h0ZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIDAuODQpLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygtMjApLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4bCcpXToge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDE1KSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMzAsIDAsIDE1KSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICAnJiAkaWNvbic6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogdGhlbWUuc3BhY2luZygyLjUpLFxyXG4gICAgICByaWdodDogdGhlbWUuc3BhY2luZygxKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFyYWxsYXg6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAtMTMwMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBsZWZ0OiAwXHJcbiAgfSxcclxuICBpbGx1c3RyYXRpb246IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICB3aWR0aDogMzAwLFxyXG4gICAgICBtYXJnaW46ICcwIGF1dG8nXHJcbiAgICB9XHJcbiAgfSxcclxuICBhY2NvcmRpb246IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgekluZGV4OiAxXHJcbiAgfSxcclxuICBpdGVtOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS5yb3VuZGVkLm1lZGl1bX0gIWltcG9ydGFudGAsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDIsIDEsIDApLFxyXG4gICAgZm9udFNpemU6IDE4LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgIH1cclxuICB9LFxyXG4gIGV4cGFuZGVkOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICcmICRoZWFkaW5nJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDAsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDBcclxuICAgIH0sXHJcbiAgICAnJiAkaWNvbic6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKSdcclxuICAgIH1cclxuICB9LFxyXG4gIGRldGFpbDoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICcmIHAnOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICBmb250U2l6ZTogMThcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0IDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZhcVN0eWxlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRmFxJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5GZWF0dXJlIGZyb20gJy4vTWFpbkZlYXR1cmUnO1xyXG5pbXBvcnQgTW9yZUZlYXR1cmUgZnJvbSAnLi9Nb3JlRmVhdHVyZSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mZWF0dXJlLXN0eWxlJztcclxuaW1wb3J0IFBhcmFsbGF4IGZyb20gJy4uL1BhcmFsbGF4L0hleGFnb25hbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxQYXJhbGxheCAvPlxyXG4gICAgICA8TWFpbkZlYXR1cmUgLz5cclxuICAgICAgPE1vcmVGZWF0dXJlIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgWm9vbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9ab29tJztcclxuaW1wb3J0IGltZ0FQSSBmcm9tICd+L3B1YmxpYy9pbWFnZXMvaW1nQVBJJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHl0IGZyb20gJ34veW91dHViZSc7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mZWF0dXJlLXN0eWxlJztcclxuXHJcbmNvbnN0IFRyYW5zaXRpb24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIHJlZikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgcmV0dXJuIDxab29tIHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+O1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIE1haW5GZWF0dXJlKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpKTtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtwbGF5ZXIsIHNldFBsYXllcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wZW5Qb3B1cCwgc2V0T3BlblBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgaWYgKHl0LnVzZSkge1xyXG4gICAgICBzZXRPcGVuUG9wdXAodHJ1ZSk7XHJcbiAgICAgIHBsYXllclswXS5wbGF5VmlkZW8oKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5Qb3B1cChmYWxzZSk7XHJcbiAgICBwbGF5ZXJbMF0ucGF1c2VWaWRlbygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IF9vblJlYWR5ID0gZXZlbnQgPT4ge1xyXG4gICAgcGxheWVyLnB1c2goZXZlbnQudGFyZ2V0KTtcclxuICAgIHNldFBsYXllcihwbGF5ZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wdHMgPSB7XHJcbiAgICBoZWlnaHQ6ICczNjAnLFxyXG4gICAgd2lkdGg6ICc2NDAnLFxyXG4gICAgcGxheWVyVmFyczogeyAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3BsYXllcl9wYXJhbWV0ZXJzXHJcbiAgICAgIGF1dG9wbGF5OiAwLFxyXG4gICAgICBjb250cm9sczogMSxcclxuICAgICAgcmVsOiAwLFxyXG4gICAgICBzaG93aW5mbzogMSxcclxuICAgICAgbXV0ZTogMCxcclxuICAgICAgb3JpZ2luOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwOCdcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkZlYXR1cmV9PlxyXG4gICAgICA8RGlhbG9nXHJcbiAgICAgICAgb3Blbj17b3BlblBvcHVwfVxyXG4gICAgICAgIFRyYW5zaXRpb25Db21wb25lbnQ9e1RyYW5zaXRpb259XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBjbGFzc2VzPXt7IHBhcGVyOiBjbGFzc2VzLnZpZGVvUG9wdXAgfX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJhbGVydC1kaWFsb2ctc2xpZGUtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctc2xpZGUtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXNsaWRlLXRpdGxlXCI+XHJcbiAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1haW5mZWF0dXJlX3RpdGxlJyl9XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnRufT5cclxuICAgICAgICAgICAgPENsb3NlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAge3l0LnVzZSAmJiAoXHJcbiAgICAgICAgICAgIDxZb3VUdWJlXHJcbiAgICAgICAgICAgICAgdmlkZW9JZD1cImg5M09mcWFrVkJJXCJcclxuICAgICAgICAgICAgICBvblJlYWR5PXtfb25SZWFkeX1cclxuICAgICAgICAgICAgICBvcHRzPXtvcHRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUaXRsZSB0ZXh0PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubWFpbmZlYXR1cmVfdGl0bGUnKX0gYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGRpc3BsYXk9XCJibG9ja1wiIGd1dHRlckJvdHRvbSBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30gY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0+XHJcbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tYWluZmVhdHVyZV9zdWJ0aXRsZScpfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMudmlkZW99PlxyXG4gICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvaW1hZ2VzL3ZpZGVvX2NvdmVyLmpwZ1wifSBhbHQ9XCJjb3ZlclwiIC8+XHJcbiAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnBsYXlCdG59IG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLXBsYXlcIiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmZlYXR1cmVXcmFwfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb30+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2ltYWdlcy9oZWxwLnN2Z1wifSBhbHQ9XCJkZWNvXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbk1haW5GZWF0dXJlLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShNYWluRmVhdHVyZSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0V09XIGZyb20gJ3JlYWN0LXdvdyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gJ34vdGhlbWUvY29tbW9uJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL1RpdGxlJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2ZlYXR1cmUtc3R5bGUnO1xyXG5cclxuY29uc3QgY29pbkRhdGEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0JUQycsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vYnRjLnBuZycsXHJcbiAgICBwcm9ncmVzczogNzUsXHJcbiAgICBjb2xvcjogJyNGQkE2MzAnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnREFTSCcsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vZGFzaC5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDQwLFxyXG4gICAgY29sb3I6ICcjMjFEM0Q3J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05BTicsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vbmFuLnBuZycsXHJcbiAgICBwcm9ncmVzczogOTAsXHJcbiAgICBjb2xvcjogJyM1NDhDQ0MnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTU5SJyxcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9tbnIucG5nJyxcclxuICAgIHByb2dyZXNzOiAzNSxcclxuICAgIGNvbG9yOiAnI0ZGNjYwMidcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdJT1QnLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2lvdC5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDgwLFxyXG4gICAgY29sb3I6ICcjQ0UwN0Q0J1xyXG4gIH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIE1vcmVGZWF0dXJlKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgW3BsYXksIHNldFBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpKTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKSk7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCB0aGVtZVByb2dyZXNzID0gY29sb3IgPT4gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogY29sb3JcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IGhhbmRsZVBsYXkgPSAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2V0UGxheSh0cnVlKTsgfSwgMjAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubW9yZUZlYXR1cmV9PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPXtpc0Rlc2t0b3B9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezZ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRleHQsIGlzTW9iaWxlICYmIGNsYXNzZXMuY2VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLWxvY2stb3V0bGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGUgdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1vcmVmZWF0dXJlX3RpdGxlMScpfSBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30gLz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9IGRpc3BsYXk9XCJibG9ja1wiIGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV9zdWJ0aXRsZTEnKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxSZWFjdFdPVyBhbmltYXRpb249XCJmYWRlSW5MZWZ0U2hvcnRcIiBkZWxheT1cIjAuM3NcIiBkdXJhdGlvbj1cIjAuM3NcIj5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmlsbHVzdHJhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jcnlwdG8vZGVjby1wcm9tby5wbmdcIiBhbHQ9XCJmZWF0dXJlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgIDwvUmVhY3RXT1c+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBkaXJlY3Rpb249e2lzTW9iaWxlID8gJ2NvbHVtbi1yZXZlcnNlJyA6ICdyb3cnfVxyXG4gICAgICAgICAgICBzcGFjaW5nPXs2fVxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8UmVhY3RXT1cgYW5pbWF0aW9uPVwiZmFkZUluUmlnaHRTaG9ydFwiIG9mZnNldD17LTEwMH0gZGVsYXk9XCIwLjNzXCIgZHVyYXRpb249XCIwLjNzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbGx1c3RyYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYnVybnQtY2FrZS5wbmdcIiBhbHQ9XCJmZWF0dXJlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgIDwvUmVhY3RXT1c+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRleHQsIGlzTW9iaWxlICYmIGNsYXNzZXMuY2VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLWFuYWx5dGljcy1vdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSB0ZXh0PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfdGl0bGUyJyl9IGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfSAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0gZGlzcGxheT1cImJsb2NrXCIgYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1vcmVmZWF0dXJlX3N1YnRpdGxlMicpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezEyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRleHQsIGNsYXNzZXMuY2VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLWZsYXNoLW91dGxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9IHRleHQ9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV90aXRsZTMnKX0gYWxpZ249XCJjZW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZGlzcGxheT1cImJsb2NrXCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV9zdWJ0aXRsZTMnKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgICAgICAgICAgIDxSZWFjdFdPVyBhbmltYXRpb249XCJmYWRlSW5cIiBvZmZzZXQ9ey0xMDB9IGR1cmF0aW9uPVwiMHNcIiBjYWxsYmFjaz17aGFuZGxlUGxheX0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzV3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvaW5EYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSBzcmM9e2l0ZW0ubG9nb30gYWx0PXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51bml0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VU0Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOzUuMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VVNEPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsxNS4wMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVQcm9ncmVzcyhpdGVtLmNvbG9yKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BsYXkgPyBpdGVtLnByb2dyZXNzIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMudHJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyOiBjbGFzc2VzLmJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0V09XPlxyXG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuTW9yZUZlYXR1cmUucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKE1vcmVGZWF0dXJlKTtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBmZWF0dXJlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIG1haW5GZWF0dXJlOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICB9XHJcbiAgfSxcclxuICB2aWRlbzoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNiwgMCwgMiksXHJcbiAgICAnJiBmaWd1cmUnOiB7XHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgICcmIGltZyc6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLjYyLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHZpZGVvUG9wdXA6IHtcclxuICAgIHdpZHRoOiA2OTAsXHJcbiAgICBtYXhXaWR0aDogJ25vbmUnXHJcbiAgfSxcclxuICBmZWF0dXJlV3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICB9LFxyXG4gIHBsYXlCdG46IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6IDE1MCxcclxuICAgIHRvcDogJzUwJScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICAnJiBzcGFuJzoge1xyXG4gICAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDEzMCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEyMGRlZywgJHt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodH0sICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0fSlgLFxyXG4gICAgICAgICctd2Via2l0LWJhY2tncm91bmQtY2xpcCc6ICd0ZXh0JyxcclxuICAgICAgICAnLXdlYmtpdC10ZXh0LWZpbGwtY29sb3InOiAndHJhbnNwYXJlbnQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNsb3NlQnRuOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogNCxcclxuICAgIHJpZ2h0OiA0LFxyXG4gIH0sXHJcbiAgZGVjbzoge1xyXG4gICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBtYXJnaW5Ub3A6IDgwLFxyXG4gICAgbGVmdDogODAsXHJcbiAgICB3aWR0aDogNDAwLFxyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgbGVmdCcsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb3VudGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgfSxcclxuICAgICcmID4gKic6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC41KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBsb3dlcjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMjApXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaWdoZXI6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgaGVpZ2h0OiAxNzQsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEsIDApLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDMpLFxyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCwgNCwgMCwgMCksXHJcbiAgICAgIHdpZHRoOiAxNzQsXHJcbiAgICB9LFxyXG4gICAgJyYgc3Bhbic6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBmb250U2l6ZTogNDhcclxuICAgIH0sXHJcbiAgICAnJiBoNic6IHtcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZFxyXG4gICAgfSxcclxuICAgICcmIHAnOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE2XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1vcmVGZWF0dXJlOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmIGZpZ3VyZSc6IHtcclxuICAgICAgbWFyZ2luOiAwXHJcbiAgICB9XHJcbiAgfSxcclxuICBjaGFydERlY286IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6IDQyMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgfSxcclxuICBpdGVtOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMTApLFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJiA+IHNwYW4nOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxyXG4gICAgICB0b3A6IC0xMCxcclxuICAgICAgbGVmdDogNyxcclxuICAgICAgZm9udFNpemU6IDM4LFxyXG4gICAgICB6SW5kZXg6IDIsXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbGx1c3RyYXRpb246IHtcclxuICAgICcmIGltZyc6IHtcclxuICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBtYXJnaW46ICcwIGF1dG8nXHJcbiAgICB9XHJcbiAgfSxcclxuICBjZW50ZXI6IHtcclxuICAgICcmIHNwYW4nOiB7XHJcbiAgICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDdweCknXHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9ncmVzc1dyYXA6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCA2KSxcclxuICAgIH0sXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgJyYgbGknOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIGg1Jzoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogMTZcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBsb2dvOiB7fSxcclxuICBjb2luOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHdpZHRoOiAxMjAsXHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAnJiAkbG9nbyc6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICAgIGhlaWdodDogMjBcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcm9ncmVzczoge1xyXG4gICAgZmxleDogMSxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgIH1cclxuICB9LFxyXG4gIHVuaXQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAnJiBoNic6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICB9LFxyXG4gICAgICAnJiBzcGFuJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB0cmFjazoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5kaXZpZGVyLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIGhlaWdodDogJzhweCAhaW1wb3J0YW50JyxcclxuICB9LFxyXG4gIGJhcjoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZWF0dXJlU3R5bGVzO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9GZWF0dXJlJztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgTGFuZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xhbmd1YWdlJztcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXQnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL0xvZ28nO1xyXG5pbXBvcnQgYnJhbmQgZnJvbSAnfi9wdWJsaWMvdGV4dC9icmFuZCc7XHJcbmltcG9ydCBpbWdBcGkgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSSc7XHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mb290ZXItc3R5bGUnO1xyXG5cclxuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyJztcclxuaW1wb3J0IFRlbGVncmFtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVGVsZWdyYW0nO1xyXG5pbXBvcnQgTWVkaXVtSWNvbiBmcm9tICcuLi9pY29ucy9tZWRpdW0nO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBkaXNwbGF5PVwiYmxvY2tcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgQ29weXJpZ2h0IMKpIDIwMjEgVHJhZGluZ1BsYW5ldCB8IEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgZm9vdGVyID0ge1xyXG4gIGRlc2NyaXB0aW9uOiBbJ0NvbnRhY3QnLCAnQW5vdGhlciByZXNvdXJjZScsICdCbG9nJywgJ1ByaXZhY3kgcG9saWN5JywgJ1doaXRlUGFwZXInLCAnVGVybXMgQ29uZGl0aW9uJ10sXHJcbiAgbGluazogWydodHRwczovL3QubWUvVHJhZGluZ1BsYW5ldEV4Y2hhbmdlJywgJ2h0dHBzOi8vbWVkaXVtLmNvbS9AVHJhZGluZ1BsYW5ldEVYJywgJyNmaW5hbC1yZXNvdXJjZScsIFwiaHR0cHM6Ly90cmFkaW5ncGxhbmV0LmZpbmFuY2UvVHJhZGluZ1BsYW5ldFdoaXRlUGFwZXIucGRmXCIsICcjdGVybXMtb2YtdXNlJ10sXHJcbn07XHJcblxyXG5jb25zdCBuZXdzID0gW1xyXG4gIHtcclxuICAgIHRleHQ6ICdTZWQgaW1wZXJkaWV0IGVuaW0gbGlndWxhIHZpdGFlIHZpdmVycmEuJyxcclxuICAgIGltZzogaW1nQXBpLnBob3RvWzVdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnU2VkIGltcGVyZGlldCBlbmltIGxpZ3VsYSB2aXRhZSB2aXZlcnJhLicsXHJcbiAgICBpbWc6IGltZ0FwaS5waG90b1s2XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ1NlZCBpbXBlcmRpZXQgZW5pbSBsaWd1bGEgdml0YWUgdml2ZXJyYS4nLFxyXG4gICAgaW1nOiBpbWdBcGkucGhvdG9bN11cclxuICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBGb290ZXIocHJvcHMpIHtcclxuICBjb25zdCBbY3RuLCBzZXRDdG5dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgdCwgaW52ZXJ0IH0gPSBwcm9wcztcclxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgbGFuZzogJ2VuZycsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRWYWx1ZXMoeyBsYW5nOiBpMThuLmxhbmd1YWdlIH0pO1xyXG4gICAgc2V0Q3RuKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXdyYXAnKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHNldFZhbHVlcyhvbGRWYWx1ZXMgPT4gKHtcclxuICAgICAgLi4ub2xkVmFsdWVzLFxyXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnYXJhJykge1xyXG4gICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKCdhcmEnKTtcclxuICAgICAgcHJvcHMudG9nZ2xlRGlyKCdydGwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgcHJvcHMudG9nZ2xlRGlyKCdsdHInKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGZpeGVkIGNvbXBvbmVudD1cImZvb3RlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmZvb3RlciwgaW52ZXJ0ICYmIGNsYXNzZXMuaW52ZXJ0KX0+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezZ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICB7YnJhbmQuY3J5cHRvLnByb2plY3ROYW1lfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyRGVzY30gZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuYmFubmVyX3RpdGxlJyl9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnF1aWNrTGlua3N9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5mb290ZXJfbGluaycpfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7Zm9vdGVyLmRlc2NyaXB0aW9uLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Zm9vdGVyLmxpbmtbaW5kZXhdfSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIHtuZXdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8QnV0dG9uQmFzZSBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ0l0ZW19IGhyZWY9XCIjXCIga2V5PXtpbmRleC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ30gYWx0PVwidGh1bWJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0VGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzZXMuY2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuZm9vdGVyX25ld3MnKX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBkaXNwbGF5PVwiYmxvY2tcIiBjb21wb25lbnQ9XCJzcGFuXCI+U2VkIGltcGVyZGlldCBlbmltIGxpZ3VsYSB2aXRhZSB2aXZlcnJhLiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgICAgICkpfSAqL31cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNvY21lZH0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vdHJhZGluZ3BsYW5ldHhcIj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJUV1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8VHdpdHRlckljb24gc3R5bGU9e3tjb2xvcjogJyNmZmYnfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdC5tZS9UcmFkaW5nUGxhbmV0RXhjaGFuZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJUTVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8VGVsZWdyYW1JY29uICBzdHlsZT17e2NvbG9yOiAnI2ZmZid9fS8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9AVHJhZGluZ1BsYW5ldEVYXCI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiTURcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgPE1lZGl1bUljb24gc3R5bGU9e3tjb2xvcjogJyNmZmYnfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBpbnZlcnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIHRvZ2dsZURpcjogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5Gb290ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGludmVydDogZmFsc2UsXHJcbiAgdG9nZ2xlRGlyOiAoKSA9PiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKEZvb3Rlcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tICcuLi9Db3VudGVyJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2Zvb3Rlci1zdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBGb290ZXJXaXRoRGVjbyhwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHRvZ2dsZURpciB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckNvdW50ZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvVG9wfT5cclxuICAgICAgICA8c3ZnPlxyXG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIvaW1hZ2VzL2NyeXB0by9kZWNvLWZvb3Rlci5zdmcjbWFpblwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPENvdW50ZXIgLz4gKi99XHJcbiAgICAgIDxGb290ZXIgdG9nZ2xlRGlyPXt0b2dnbGVEaXJ9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5Gb290ZXJXaXRoRGVjby5wcm9wVHlwZXMgPSB7XHJcbiAgdG9nZ2xlRGlyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJXaXRoRGVjbztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGZhZGUsIGxpZ2h0ZW4sIGRhcmtlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcclxuXHJcbmNvbnN0IGZvb3RlclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBsaW5rOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSwgMS41KSxcclxuICB9LFxyXG4gIGludmVydDoge30sXHJcbiAgZm9vdGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMTAsIDApLFxyXG4gICAgJyYgcCc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgdWwnOiB7XHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgIH0sXHJcbiAgICAnJiBsaSc6IHtcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAvLyBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgLy8gICB3aWR0aDogJzQ3JSdcclxuICAgICAgLy8gfSxcclxuICAgICAgJyYgYSc6IHtcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSAhaW1wb3J0YW50JyxcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYkaW52ZXJ0Jzoge1xyXG4gICAgICAnJiBwJzoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxyXG4gICAgICB9LFxyXG4gICAgICAnJiBsaSBhJzoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkbG9nbyc6IHtcclxuICAgICAgICAnJiBoNic6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFya1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJyYgJHRpdGxlJzoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRibG9nSXRlbSc6IHtcclxuICAgICAgICAnJiAkY2F0ZWdvcnknOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJyYgJHNlbGVjdExhbmcnOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0LFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gIH0sXHJcbiAgcXVpY2tMaW5rczoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIHdpZHRoOiA2NCxcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgIH0sXHJcbiAgICAnJiBoNic6IHtcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgICAgZm9udFNpemU6IDI4LFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZm9vdGVyRGVzYzoge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc29jbWVkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAnJiBidXR0b24nOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICB3aWR0aDogMzYsXHJcbiAgICAgIGhlaWdodDogMzYsXHJcbiAgICAgICcmIGknOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgaSc6IHtcclxuICAgICAgZm9udFNpemU6IDI0XHJcbiAgICB9XHJcbiAgfSxcclxuICBpY29uOiB7fSxcclxuICBzZWxlY3RMYW5nOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5oZXJpdCcsXHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgMCwgNCksXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAnJiAkaWNvbic6IHtcclxuICAgICAgdG9wOiAyOSxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB9LFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXHJcbiAgICB9LFxyXG4gICAgJyYgZmllbGRzZXQnOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICAgIGJveFNoYWRvdzogJzAgMS41cHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXHJcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2ZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LCAwLjUpfSAhaW1wb3J0YW50YCxcclxuICAgICAgJyYgbGVnZW5kJzoge1xyXG4gICAgICAgIHRvcDogNSxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHtmYWRlKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCwgMC41KX1gXHJcbiAgICAgIH0sXHJcbiAgICAgICcmICsgZGl2ICsgZGl2Jzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lICFpbXBvcnRhbnQnLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMS41LCAxLjUsIDEuNSwgNCksXHJcbiAgICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSAzMnB4KScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHNlbGVjdE1lbnU6IHtcclxuICAgIHdpZHRoOiAxNjAsXHJcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZSAhaW1wb3J0YW50J1xyXG4gIH0sXHJcbiAgZm9vdGVyQ291bnRlcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyaywvL2BsaW5lYXItZ3JhZGllbnQoLTEzMGRlZywgJHt0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmsgOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSAtMjAlLCAke3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmsgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0gNzAlKWAsXHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDEwKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygyNSksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4bCcpXToge1xyXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDE1KSxcclxuICAgIH1cclxuICB9LFxyXG4gIGRlY29Ub3A6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAtMjAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6IDEyODAsXHJcbiAgICBoZWlnaHQ6IDQwMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yKSdcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoMTQwMCldOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDIsIDEpJ1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneGwnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuNCwgMSknLFxyXG4gICAgICBsZWZ0OiAtMzAwXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfSxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZGFya2VuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjYpIDogbGlnaHRlbih0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC44NCksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYXRlZ29yeToge30sXHJcbiAgbGlzdFRleHQ6IHt9LFxyXG4gIGJsb2dJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwKSxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgICcmICRjYXRlZ29yeSc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodFxyXG4gICAgfSxcclxuICAgICcmICRsaXN0VGV4dCc6IHtcclxuICAgICAgZmxleDogMSxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodFxyXG4gICAgfSxcclxuICAgICcmIGZpZ3VyZSc6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAyLCAwLCAwKSxcclxuICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICBoZWlnaHQ6IDU2LFxyXG4gICAgICAnJiBpbWcnOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgcCc6IHtcclxuICAgICAgZm9udFNpemU6IDEzLFxyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlclN0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBbmNob3JMaW5rIGZyb20gJ3JlYWN0LWFuY2hvci1saW5rLXNtb290aC1zY3JvbGwnO1xyXG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gJ3JlYWN0LXNjcm9sbHNweSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL1NldHRpbmdzJztcclxuaW1wb3J0IE1hcmtldFByaWNlIGZyb20gJy4vTWFya2V0UHJpY2UnO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuL01vYmlsZU1lbnUnO1xyXG5pbXBvcnQgcm91dGVMaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL0xvZ28nO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vaGVhZGVyLXN0eWxlJztcclxuaW1wb3J0IG5hdk1lbnUgZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcblxyXG5cclxubGV0IGNvdW50ZXIgPSAwO1xyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIHVybCwgb2Zmc2V0KSB7XHJcbiAgY291bnRlciArPSAxO1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogY291bnRlcixcclxuICAgIG5hbWUsXHJcbiAgICB1cmwsXHJcbiAgICBvZmZzZXQsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgTGlua0J0biA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlua0J0bihwcm9wcywgcmVmKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICByZXR1cm4gPEFuY2hvckxpbmsgdG89e3Byb3BzLnRvfSB7Li4ucHJvcHN9IGlubmVyUmVmPXtyZWZ9IC8+OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgY29uc3QgW2ZpeGVkLCBzZXRGaXhlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgbGV0IGZsYWdGaXhlZCA9IGZhbHNlO1xyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIGNvbnN0IHNjcm9sbCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLnNjcm9sbFRvcCkgLSAoZG9jLmNsaWVudFRvcCB8fCAwKTtcclxuICAgIGNvbnN0IG5ld0ZsYWdGaXhlZCA9IChzY3JvbGwgPiA4MCk7XHJcbiAgICBpZiAoZmxhZ0ZpeGVkICE9PSBuZXdGbGFnRml4ZWQpIHtcclxuICAgICAgc2V0Rml4ZWQobmV3RmxhZ0ZpeGVkKTtcclxuICAgICAgZmxhZ0ZpeGVkID0gbmV3RmxhZ0ZpeGVkO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IHtcclxuICAgIG9uVG9nZ2xlRGFyayxcclxuICAgIG9uVG9nZ2xlRGlyLFxyXG4gICAgaW52ZXJ0LFxyXG4gICAgdFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpKTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKSk7XHJcbiAgY29uc3QgW21lbnVMaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgIGNyZWF0ZURhdGEobmF2TWVudVswXSwgJyMnICsgbmF2TWVudVswXSwgMTAwKSxcclxuICAgIGNyZWF0ZURhdGEobmF2TWVudVsxXSwgJyMnICsgbmF2TWVudVsxXSksXHJcbiAgICBjcmVhdGVEYXRhKG5hdk1lbnVbMl0sICcjJyArIG5hdk1lbnVbMl0pLFxyXG4gICAgY3JlYXRlRGF0YShuYXZNZW51WzNdLCAnIycgKyBuYXZNZW51WzNdKSxcclxuICBdKTtcclxuICBjb25zdCBbb3BlbkRyYXdlciwgc2V0T3BlbkRyYXdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlT3BlbkRyYXdlciA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EcmF3ZXIoIW9wZW5EcmF3ZXIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgeyBpc01vYmlsZSAmJiAoPE1vYmlsZU1lbnUgb3Blbj17b3BlbkRyYXdlcn0gdG9nZ2xlRHJhd2VyPXtoYW5kbGVPcGVuRHJhd2VyfSAvPikgfVxyXG4gICAgICB7LyogeyFpbnZlcnQgJiYgKFxyXG4gICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgPE1hcmtldFByaWNlIC8+XHJcbiAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICl9ICovfVxyXG4gICAgICA8QXBwQmFyXHJcbiAgICAgICAgY29tcG9uZW50PVwiaGVhZGVyXCJcclxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICBpZD1cImhlYWRlclwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgY2xhc3Nlcy5oZWFkZXIsXHJcbiAgICAgICAgICBmaXhlZCAmJiBjbGFzc2VzLmZpeGVkLFxyXG4gICAgICAgICAgaW52ZXJ0ICYmIGNsYXNzZXMuaW52ZXJ0LFxyXG4gICAgICAgICAgb3BlbkRyYXdlciAmJiBjbGFzc2VzLm9wZW5EcmF3ZXJcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lciBmaXhlZD17aXNEZXNrdG9wfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm5hdk1lbnUsIGludmVydCAmJiBjbGFzc2VzLmludmVydCl9PlxyXG4gICAgICAgICAgICAgIHsgaXNNb2JpbGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT3BlbkRyYXdlcn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdoYW1idXJnZXIgaGFtYnVyZ2VyLS1zcGluJywgY2xhc3Nlcy5tb2JpbGVNZW51LCBvcGVuRHJhd2VyICYmICdpcy1hY3RpdmUnKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmJhciwgJ2hhbWJ1cmdlci1pbm5lcicpfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgIHtpbnZlcnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3JvdXRlTGluay5jcnlwdG8uaG9tZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEFuY2hvckxpbmsgaHJlZj1cIiNob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgPC9BbmNob3JMaW5rPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7aXNEZXNrdG9wICYmIChcclxuICAgICAgICAgICAgICAgIDxTY3JvbGxzcHlcclxuICAgICAgICAgICAgICAgICAgaXRlbXM9e25hdk1lbnV9XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bWVudUxpc3QubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWQudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aW52ZXJ0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvZmZzZXQ9e2l0ZW0ub2Zmc2V0IHx8IDB9IGhyZWY9eycvJyArIGl0ZW0udXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl8nICsgaXRlbS5uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0FuY2hvckxpbmt9IG9mZnNldD17aXRlbS5vZmZzZXQgfHwgMH0gaHJlZj17aXRlbS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyXycgKyBpdGVtLm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9e3JvdXRlTGluay5jcnlwdG8uY29udGFjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl9jb250YWN0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L1Njcm9sbHNweT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm5hdk1lbnUsIGNsYXNzZXMubmF2QXV0aCl9PlxyXG4gICAgICAgICAgICAgIDxIaWRkZW4geHNEb3duPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9XCJodHRwczovL3RyYWRpbmdwbGFuZXQuZmluYW5jZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl9sYXVuY2gnKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdzIHRvZ2dsZURhcms9e29uVG9nZ2xlRGFya30gdG9nZ2xlRGlyPXtvblRvZ2dsZURpcn0gaW52ZXJ0PXtpbnZlcnR9IC8+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIG9uVG9nZ2xlRGFyazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvblRvZ2dsZURpcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBpbnZlcnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc3RpY2t5OiBmYWxzZSxcclxuICBpbnZlcnQ6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShIZWFkZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9oZWFkZXItc3R5bGUnO1xyXG5cclxuY29uc3QgbWFya2V0TGlzdCA9IFtcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vYnRjLnBuZycsXHJcbiAgICBuYW1lOiAnQlRDJyxcclxuICAgIHByaWNlOiAxMDIwMCxcclxuICAgIHN0YXR1czogJ3VwJyxcclxuICAgIHBlcmNlbnQ6IDgsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8veHJwLnBuZycsXHJcbiAgICBuYW1lOiAnWFJQJyxcclxuICAgIHByaWNlOiAwLjAwMyxcclxuICAgIHN0YXR1czogJ2Rvd24nLFxyXG4gICAgcGVyY2VudDogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9uZW0ucG5nJyxcclxuICAgIG5hbWU6ICdORU0nLFxyXG4gICAgcHJpY2U6IDAuMDAzLFxyXG4gICAgc3RhdHVzOiAndXAnLFxyXG4gICAgcGVyY2VudDogOCxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9pb3QucG5nJyxcclxuICAgIG5hbWU6ICdJT1RBJyxcclxuICAgIHByaWNlOiAwLjAxMCxcclxuICAgIHN0YXR1czogJ2Rvd24nLFxyXG4gICAgcGVyY2VudDogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9tbnIucG5nJyxcclxuICAgIG5hbWU6ICdNTlInLFxyXG4gICAgcHJpY2U6IDEuNDUsXHJcbiAgICBzdGF0dXM6ICd1cCcsXHJcbiAgICBwZXJjZW50OiA4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2J5Yy5wbmcnLFxyXG4gICAgbmFtZTogJ0JZQycsXHJcbiAgICBwcmljZTogMjIuMzQsXHJcbiAgICBzdGF0dXM6ICdkb3duJyxcclxuICAgIHBlcmNlbnQ6IDMsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vaW90LnBuZycsXHJcbiAgICBuYW1lOiAnSU9UQScsXHJcbiAgICBwcmljZTogMC4wMTAsXHJcbiAgICBzdGF0dXM6ICdkb3duJyxcclxuICAgIHBlcmNlbnQ6IDMsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vbW5yLnBuZycsXHJcbiAgICBuYW1lOiAnTU5SJyxcclxuICAgIHByaWNlOiAxLjQ1LFxyXG4gICAgc3RhdHVzOiAndXAnLFxyXG4gICAgcGVyY2VudDogOCxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9ieWMucG5nJyxcclxuICAgIG5hbWU6ICdCWUMnLFxyXG4gICAgcHJpY2U6IDIyLjM0LFxyXG4gICAgc3RhdHVzOiAnZG93bicsXHJcbiAgICBwZXJjZW50OiAzLFxyXG4gIH0sXHJcbl07XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJrZXRQcmljZSgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgcGF1c2VPbkhvdmVyOiB0cnVlXHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJQZXJjZW50ID0gKGFycm93LCBwZXJjZW50KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFycm93KSB7XHJcbiAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZG93bn0+XHJcbiAgICAgICAgICAgIDxpPuKWvDwvaT5cclxuICAgICAgICAgICAge3BlcmNlbnR9XHJcbiAgICAgICAgICAgICVcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy51cH0+XHJcbiAgICAgICAgICAgIDxpPuKWsjwvaT5cclxuICAgICAgICAgICAge3BlcmNlbnR9XHJcbiAgICAgICAgICAgICVcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3RheX0+XHJcbiAgICAgICAgICAgIDxpPi08L2k+XHJcbiAgICAgICAgICAgIHtwZXJjZW50fVxyXG4gICAgICAgICAgICAlXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJrZXR9PlxyXG4gICAgICA8Q2Fyb3VzZWwgey4uLnNldHRpbmdzfT5cclxuICAgICAgICB7bWFya2V0TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2lufT5cclxuICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSBzcmM9e2l0ZW0ubG9nb30gYWx0PXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAmbmJzcDskJm5ic3A7XHJcbiAgICAgICAgICAgICAge2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgJm5ic3A7KFxyXG4gICAgICAgICAgICAgIHtyZW5kZXJQZXJjZW50KGl0ZW0uc3RhdHVzLCBpdGVtLnBlcmNlbnQpfVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBTd2lwZWFibGVEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpcGVhYmxlRHJhd2VyJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCByb3V0ZUxpbmsgZnJvbSAnfi9wdWJsaWMvdGV4dC9saW5rJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2hlYWRlci1zdHlsZSc7XHJcbmltcG9ydCBuYXZNZW51IGZyb20gJy4vbWVudSc7XHJcblxyXG5mdW5jdGlvbiBNb2JpbGVNZW51KHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgdG9nZ2xlRHJhd2VyLCBvcGVuLCB0IH0gPSBwcm9wcztcclxuICBjb25zdCBTaWRlTGlzdCA9ICgpID0+IChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vYmlsZU5hdn1cclxuICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgb25LZXlEb3duPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubWVudSwgb3BlbiAmJiBjbGFzc2VzLm1lbnVPcGVuKX0+XHJcbiAgICAgICAgPExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcbiAgICAgICAgICB7bmF2TWVudS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxyXG4gICAgICAgICAgICAgIGhyZWY9e2AjJHtpdGVtfWB9XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkR1cmF0aW9uOiBpbmRleCAqIDAuMTUgKyAncycgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl8nICsgaXRlbSl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51TGlzdH0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICAgICAgaHJlZj17cm91dGVMaW5rLmNyeXB0by5jb250YWN0fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EdXJhdGlvbjogbmF2TWVudS5sZW5ndGggKiAwLjE1ICsgJ3MnIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl9jb250YWN0Jyl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51TGlzdH0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlclNpZGViYXJ9IC8+XHJcbiAgICAgICAgICB7Wydsb2dpbicsICdyZWdpc3RlciddLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXHJcbiAgICAgICAgICAgICAgaHJlZj17cm91dGVMaW5rLmNyeXB0b1tpdGVtXX1cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4LnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRHVyYXRpb246IG5hdk1lbnUubGVuZ3RoICogMC4xNSArICdzJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyXycgKyBpdGVtKX0gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVMaXN0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3dpcGVhYmxlRHJhd2VyXHJcbiAgICAgIG9wZW49e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgb25PcGVuPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICBwYXBlcjogY2xhc3Nlcy5wYXBlck5hdlxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8U2lkZUxpc3QgLz5cclxuICAgIDwvU3dpcGVhYmxlRHJhd2VyPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5Nb2JpbGVNZW51LnByb3BUeXBlcyA9IHtcclxuICB0b2dnbGVEcmF3ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoTW9iaWxlTWVudSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFBvcG92ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBDaGVja0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vaGVhZGVyLXN0eWxlJztcclxuXHJcbmxldCB0aGVtZVR5cGUgPSAnbGlnaHQnO1xyXG5pZiAodHlwZW9mIFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgdGhlbWVUeXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2x1eGlUaGVtZScpIHx8ICdsaWdodCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNldHRpbmdzKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0biwgc2V0Q3RuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0RhcmssIHNldERhcmtdID0gdXNlU3RhdGUodGhlbWVUeXBlID09PSAnZGFyaycpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZSgpIHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlTW9kZSA9ICgpID0+IHtcclxuICAgIHNldERhcmsoIWlzRGFyayk7XHJcbiAgICBwcm9wcy50b2dnbGVEYXJrKCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlTGFuZyhsYW5nKSB7XHJcbiAgICBpZiAobGFuZyA9PT0gJ2FyYScpIHtcclxuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZSgnYXJhJyk7XHJcbiAgICAgIHByb3BzLnRvZ2dsZURpcigncnRsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGxhbmcpO1xyXG4gICAgICBwcm9wcy50b2dnbGVEaXIoJ2x0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q3RuKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXdyYXAnKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICBjb25zdCBpZCA9IG9wZW4gPyAnc2ltcGxlLXBvcG92ZXInIDogdW5kZWZpbmVkO1xyXG4gIGNvbnN0IHsgaW52ZXJ0LCB0IH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ30+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT17aWR9XHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlNldHRpbmdzXCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgY2xzeChcclxuICAgICAgICAgICAgY2xhc3Nlcy5pY29uLFxyXG4gICAgICAgICAgICBvcGVuICYmIGNsYXNzZXMuYWN0aXZlLFxyXG4gICAgICAgICAgICBpbnZlcnQgJiYgY2xhc3Nlcy5pbnZlcnRcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8U2V0dGluZ3NJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPFBvcG92ZXJcclxuICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY29udGFpbmVyPXtjdG59XHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGVNZW51fVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk1vZGUtbWVudVwiXHJcbiAgICAgICAgICBzdWJoZWFkZXI9eyhcclxuICAgICAgICAgICAgPExpc3RTdWJoZWFkZXIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfdGhlbWUnKX1cclxuICAgICAgICAgICAgPC9MaXN0U3ViaGVhZGVyPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbXBvbmVudD1cImxhYmVsXCIgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfbGlnaHQnKX08L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNEYXJrfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VNb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpc0Rhcmt9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdjaGVja2JveCcgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfZGFyaycpfTwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFuZ01lbnV9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiTGFuZ3VhZ2UtbWVudVwiXHJcbiAgICAgICAgICBzdWJoZWFkZXI9eyhcclxuICAgICAgICAgICAgPExpc3RTdWJoZWFkZXIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfbGFuZ3VhZ2UnKX1cclxuICAgICAgICAgICAgPC9MaXN0U3ViaGVhZGVyPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aTE4bi5vcHRpb25zLmFsbExhbmd1YWdlcyAmJiBpMThuLm9wdGlvbnMuYWxsTGFuZ3VhZ2VzLm1hcCh2YWwgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e3ZhbH1cclxuICAgICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgZGVuc2VcclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VMYW5nKHZhbCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXt2YWx9IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0KCdjb21tb246JyArIHZhbCl9IC8+XHJcbiAgICAgICAgICAgICAge2kxOG4ubGFuZ3VhZ2UgPT09IHZhbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja0ljb24gY29sb3I9XCJwcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuU2V0dGluZ3MucHJvcFR5cGVzID0ge1xyXG4gIHRvZ2dsZURhcms6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgdG9nZ2xlRGlyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaW52ZXJ0OiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcblNldHRpbmdzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpbnZlcnQ6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjb21tb24nLCAnY3J5cHRvLWxhbmRpbmcnXSkoU2V0dGluZ3MpO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgZmFkZSwgZGFya2VuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xyXG5pbXBvcnQgZmxhZyBmcm9tICd+L3B1YmxpYy9pbWFnZXMvZmxhZy1sb2dvLnBuZyc7XHJcblxyXG5jb25zdCBmbGFnSWNvbiA9IHtcclxuICB3aWR0aDogMTYsXHJcbiAgaGVpZ2h0OiAxNixcclxuICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIG1hcmdpblJpZ2h0OiA1LFxyXG4gIHRvcDogMSxcclxuICBiYWNrZ3JvdW5kOiBgdXJsKCR7ZmxhZ30pIG5vLXJlcGVhdCB0cmFuc3BhcmVudGAsXHJcbiAgYmFja2dyb3VuZFNpemU6ICcxNnB4IGF1dG8nLFxyXG4gICcmW2NsYXNzPVwiYXJhXCJdJzoge1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCAzcHgnXHJcbiAgfSxcclxuICAnJltjbGFzcz1cInpob1wiXSc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTEycHgnXHJcbiAgfSxcclxuICAnJltjbGFzcz1cImVuZ1wiXSc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTI4cHgnXHJcbiAgfSxcclxuICAnJltjbGFzcz1cImRldVwiXSc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTQ0cHgnXHJcbiAgfSxcclxuICAnJltjbGFzcz1cImluZFwiXSc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTYycHgnXHJcbiAgfSxcclxuICAnJltjbGFzcz1cInBydFwiXSc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTc5cHgnXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGhlYWRlclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAnQGtleWZyYW1lcyBzbGlkZVJpZ2h0Jzoge1xyXG4gICAgZnJvbToge1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDBweCknXHJcbiAgICB9LFxyXG4gICAgdG86IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgdHJhbnNmb3JtOiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGZpeGVkOiB7fSxcclxuICBpbnZlcnQ6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICcmICRtb2JpbGVNZW51Jzoge1xyXG4gICAgICAnJiAkYmFyJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICAgICAgICAnJjphZnRlciwgJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnlcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvcGVuRHJhd2VyOiB7fSxcclxuICBoZWFkZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxyXG4gICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICB9LFxyXG4gICAgJyYgPiAqJzoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYkZml4ZWQnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGRhcmtlbih0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyaywgMC41KSA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAwLjNzIGVhc2UnLFxyXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgICcmICRsb2dvJzoge1xyXG4gICAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgICAgICB3aWR0aDogNDgsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkaGVhZGVyQ29udGVudCc6IHtcclxuICAgICAgICAnJiBuYXYnOiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkbmF2TWVudSc6IHtcclxuICAgICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyYgYSc6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRkaXZpZGVyJzoge1xyXG4gICAgICAgIGJvcmRlckxlZnRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRtb2JpbGVNZW51Jzoge1xyXG4gICAgICAgICcmICRiYXInOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAgICAgJyY6YWZ0ZXIsICY6YmVmb3JlJzoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiRvcGVuRHJhd2VyJzoge1xyXG4gICAgICB6SW5kZXg6IDE2MDAsXHJcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgICcmJGludmVydCc6IHtcclxuICAgICAgcGFkZGluZ1RvcDogMCxcclxuICAgICAgJyYgJG5hdk1lbnUnOiB7XHJcbiAgICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICAgICAnJiRidXR0b24nOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJyYgJGRpdmlkZXInOiB7XHJcbiAgICAgICAgYm9yZGVyTGVmdENvbG9yOiB0aGVtZS5wYWxldHRlLmRpdmlkZXJcclxuICAgICAgfSxcclxuICAgICAgJyYgJG1vYmlsZU1lbnUnOiB7XHJcbiAgICAgICAgJyYgJGJhcic6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnl9YCxcclxuICAgICAgICAgICcmOmFmdGVyLCAmOmJlZm9yZSc6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeX1gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGVhZGVyQ29udGVudDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgJyYgbmF2Jzoge1xyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCAwKSxcclxuICAgICAgfSxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnXHJcbiAgICB9XHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICAnJiBhJzoge1xyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgICcmIGltZyc6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgd2lkdGg6IDY0LFxyXG4gICAgICBoZWlnaHQ6IDY0LFxyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0OCxcclxuICAgICAgICB3aWR0aDogNDgsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2ZToge30sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxNSksXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSlcclxuICB9LFxyXG4gIG5hdk1lbnU6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgJyYgPiAqJzoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiBhJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMC41LCAxKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDMpLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICBtYXJnaW46IDBcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiB1bCc6IHtcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgICAnJiBsaSc6IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgJyYgYSc6IHtcclxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgICAgICAgIG1pbldpZHRoOiAwLFxyXG4gICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxLjUpLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA2LFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2Utb3V0JyxcclxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGV9YCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICcmW2NsYXNzPVwiYWN0aXZlXCJdJzoge1xyXG4gICAgICAgICAgJyYgYSc6IHtcclxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCAxLjVweCAzMnB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjIyKScsXHJcbiAgICAgICAgICAgIGNvbG9yOiBgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0gIWltcG9ydGFudGAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjaywgMC4zKSA6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuODQpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmF2QXV0aDoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBmbGV4OiAxLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGFuZ01lbnU6IHtcclxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgICcmIGknOiB7XHJcbiAgICAgIC4uLmZsYWdJY29uXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb2RlTWVudToge1xyXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxyXG4gIH0sXHJcbiAgaWNvbjoge30sXHJcbiAgc2V0dGluZzoge1xyXG4gICAgJyYgJGljb24nOiB7XHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfSxcclxuICAgICcmICRhY3RpdmUnOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgzMGRlZyknXHJcbiAgICB9XHJcbiAgfSxcclxuICBiYXI6IHt9LFxyXG4gIG1lbnU6IHt9LFxyXG4gIHBhcGVyTmF2OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssIDAuNSkgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCg2ODApXToge1xyXG4gICAgICB3aWR0aDogMzAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vYmlsZU1lbnU6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgICcmICRiYXInOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGV9YCxcclxuICAgICAgJyY6YWZ0ZXIsICY6YmVmb3JlJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGV9YFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyZbY2xhc3MqPVwiaXMtYWN0aXZlXCJdJzoge1xyXG4gICAgICAnJiAkYmFyJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGV9ICFpbXBvcnRhbnRgLFxyXG4gICAgICAgICcmOmFmdGVyLCAmOmJlZm9yZSc6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGV9ICFpbXBvcnRhbnRgXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9iaWxlTmF2OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAnJiAkbWVudSc6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCA1KSxcclxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgdG9wOiA4MCxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGhlaWdodDogJ2NhbGMoMTAwJSAtIDgwcHgpJyxcclxuICAgICAgJyYgYSc6IHtcclxuICAgICAgICBhbmltYXRpb25OYW1lOiAnJHNsaWRlUmlnaHQnLFxyXG4gICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZSdcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9LFxyXG4gIG1lbnVMaXN0OiB7XHJcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAnJiBzcGFuJzoge1xyXG4gICAgICBmb250U2l6ZTogMjRcclxuICAgIH1cclxuICB9LFxyXG4gIGRpdmlkZXI6IHtcclxuICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuICAgIGJvcmRlckxlZnQ6ICcxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcclxuICAgIGhlaWdodDogMjhcclxuICB9LFxyXG4gIG1hcmtldDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICB6SW5kZXg6IDEyMDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogNDAsXHJcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoKSxcclxuICB9LFxyXG4gIGl0ZW06IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC41LCA0KSxcclxuICAgICcmOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGNvaW46IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICcmICRsb2dvJzoge1xyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgICAnJiBpbWcnOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiBpJzoge1xyXG4gICAgICBmb250U3R5bGU6ICdub3JtYWwnXHJcbiAgICB9XHJcbiAgfSxcclxuICBkb3duOiB7XHJcbiAgICBjb2xvcjogJyNGRjcyNzInXHJcbiAgfSxcclxuICB1cDoge1xyXG4gICAgY29sb3I6ICcjNURENjYyJ1xyXG4gIH0sXHJcbiAgc3RheToge1xyXG4gICAgY29sb3I6ICcjYjJiMmIyJ1xyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlclN0eWxlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVhZGVyJztcclxuIiwiY29uc3QgbWVudSA9IFtcclxuICAncHJvbW90aW9ucycsXHJcbiAgJ2ZlYXR1cmUnLFxyXG4gICdiZW5lZml0JyxcclxuICAndGVzdGltb25pYWxzJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbyhwcm9wcykge1xyXG4gICAgY29uc3QgZmlsbCA9IFwiIzBiMDA1NVwiXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgOTAwIDkwMFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPXtmaWxsfWQ9XCJNMTUxNi44LDY1Ni44NEgxMjA1LjQyVjc3NS4xMmgxMDguMTZ2MzYyLjY3aDBhMTE4LjI5LDExOC4yOSwwLDAsMCwxMTguMjgtMTE4LjI4di0yNDJoOTcuNjRWOTkzLjQyaDBhMTA4LDEwOCwwLDAsMCwxMDgtMTA4di0xMDhoMEExMjAuNjYsMTIwLjY2LDAsMCwwLDE1MTYuOCw2NTYuODRaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC03NTMuNTkgLTQzMS42OClcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD17ZmlsbH1kPVwiTTEzMTgsNTMyLjEyYTM0MCwzNDAsMCwwLDEsMTA3LjM0LTE5LjY3LDY3LjkxLDY3LjkxLDAsMCwwLDEyNS4zMSwyMS4zOSwzMzkuNjMsMzM5LjYzLDAsMCwxLDIwMiwyMDVxMS4yMSwzLjQyLDIuMzUsNi44NC00LjE0LTE1Ljc4LTkuNzEtMzEuNDdhMzgxLjA5LDM4MS4wOSwwLDAsMC0xODUuNDgtMjEyYzAtLjQ3LjA1LS45My4wNi0xLjRBNjcuOSw2Ny45LDAsMCwwLDE0MzQuOCw0NjNhMzgwLjgzLDM4MC44MywwLDAsMC0xNzcuOSwxOC44OWMtMTk5LDcwLjczLTMwMywyODkuNDItMjMyLjMyLDQ4OC40NWEzODQuNjQsMzg0LjY0LDAsMCwwLDI3Ljg1LDYxLDg1LjUzLDg1LjUzLDAsMCwwLDEwNy4xOSwxMjBjOTguNjIsNzEuNzgsMjI5LjgsOTUuMjcsMzUzLjQxLDUxLjM1YTM4MC41OSwzODAuNTksMCwwLDAsMTY1LTExNC42QTMzOC44NywzMzguODcsMCwwLDEsMTU0NiwxMTczLjU4Yy0xMjEuMTcsNDMuMDYtMjUwLjUyLDEzLjMzLTM0MC4zMS02Ni40NWE4NS41Myw4NS41MywwLDAsMC03Ni40NC0xMjAuNjEsODcuOTMsODcuOTMsMCwwLDAtMTAsLjQyYy0yLjgxLTYuNTgtNS40Ni0xMy4yOC03LjktMjAuMTJDMTA0OC4zMSw3ODkuNjksMTE0MC44Nyw1OTUuMDYsMTMxOCw1MzIuMTJaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC03NTMuNTkgLTQzMS42OClcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCBTbmFja2JhckNvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJDb250ZW50JztcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL25vdGlmaWNhdGlvbi1zdHlsZSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcblxyXG5mdW5jdGlvbiBUcmFuc2l0aW9uVXAocHJvcHMpIHtcclxuICByZXR1cm4gPFNsaWRlIHsuLi5wcm9wc30gZGlyZWN0aW9uPVwidXBcIiAvPjtcclxufVxyXG5cclxuZnVuY3Rpb24gTm90aWZpY2F0aW9uKHByb3BzKSB7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8U25hY2tiYXJcclxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17VHJhbnNpdGlvblVwfVxyXG4gICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICByb290OiBjbGFzc2VzLm5vdGlmaWNhdGlvbixcclxuICAgICAgfX1cclxuICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxTbmFja2JhckNvbnRlbnRcclxuICAgICAgICBtZXNzYWdlPXs8VHlwb2dyYXBoeSBpZD1cIm1lc3NhZ2UtaWRcIj57dCgnY29tbW9uOm5vdGlmX21zZycpfTwvVHlwb2dyYXBoeT59XHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgYWN0aW9uOiBjbGFzc2VzLmFjdGlvblxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYWN0aW9uPXsoXHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAge3QoJ2NvbW1vbjphY2NlcHQnKX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L1NuYWNrYmFyPlxyXG4gICk7XHJcbn1cclxuXHJcbk5vdGlmaWNhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NvbW1vbiddKShOb3RpZmljYXRpb24pO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ob3RpZmljYXRpb24nO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IG5vdGlmaWNhdGlvblN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBub3RpZmljYXRpb246IHtcclxuICAgIHdpZHRoOiAnOTUlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgfSxcclxuICAgICcmID4gZGl2Jzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjNDI0MjQyJyxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgNCksXHJcbiAgICAgIH0sXHJcbiAgICAgICcmID4gZGl2OmZpcnN0LWNoaWxkJzoge1xyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWN0aW9uOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbWFyZ2luOiAwXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3RpZmljYXRpb25TdHlsZXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IEFuY2hvckxpbmsgZnJvbSAncmVhY3QtYW5jaG9yLWxpbmstc21vb3RoLXNjcm9sbCc7XHJcbmltcG9ydCBTY3JvbGxzcHkgZnJvbSAncmVhY3Qtc2Nyb2xsc3B5JztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5pbXBvcnQgQXJyb3dJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1Vwd2FyZCc7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgbmF2TWVudSBmcm9tICcuLi9IZWFkZXIvbWVudSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9wYWdlbmF2LXN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEoaWQsIG5hbWUsIHVybCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZCxcclxuICAgIG5hbWUsXHJcbiAgICB1cmwsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgTGlua0J0biA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlua0J0bihwcm9wcywgcmVmKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICByZXR1cm4gPEFuY2hvckxpbmsgdG89e3Byb3BzLnRvfSB7Li4ucHJvcHN9IC8+OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gUGFnZU5hdihwcm9wcykge1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGxldCBmbGFnU2hvdyA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzY3JvbGwgPSAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApIC0gKGRvYy5jbGllbnRUb3AgfHwgMCk7XHJcbiAgICBjb25zdCBuZXdGbGFnU2hvdyA9IChzY3JvbGwgPiA1MDApO1xyXG4gICAgaWYgKGZsYWdTaG93ICE9PSBuZXdGbGFnU2hvdykge1xyXG4gICAgICBzZXRTaG93KG5ld0ZsYWdTaG93KTtcclxuICAgICAgZmxhZ1Nob3cgPSBuZXdGbGFnU2hvdztcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbbWVudUxpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgY3JlYXRlRGF0YSgxLCBuYXZNZW51WzBdLCAnIycgKyBuYXZNZW51WzBdLnJlcGxhY2UoLyAvZywgJ18nKSksXHJcbiAgICBjcmVhdGVEYXRhKDIsIG5hdk1lbnVbMV0sICcjJyArIG5hdk1lbnVbMV0ucmVwbGFjZSgvIC9nLCAnXycpKSxcclxuICAgIGNyZWF0ZURhdGEoMywgbmF2TWVudVsyXSwgJyMnICsgbmF2TWVudVsyXS5yZXBsYWNlKC8gL2csICdfJykpLFxyXG4gICAgY3JlYXRlRGF0YSg0LCBuYXZNZW51WzNdLCAnIycgKyBuYXZNZW51WzNdLnJlcGxhY2UoLyAvZywgJ18nKSksXHJcbiAgXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucGFnZU5hdiwgc2hvdyAmJiBjbGFzc2VzLnNob3cpfT5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk5hdn0+XHJcbiAgICAgICAgPFNjcm9sbHNweVxyXG4gICAgICAgICAgaXRlbXM9e25hdk1lbnV9XHJcbiAgICAgICAgICBjdXJyZW50Q2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IG1lbnVMaXN0Lm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiAzMCAqIChuYXZNZW51Lmxlbmd0aCAtIGl0ZW0uaWQpIH19XHJcbiAgICAgICAgICAgICAgZGF0YS1pZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl8nICsgaXRlbS5uYW1lKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICB0b29sdGlwOiBjbGFzc2VzLnRvb2x0aXBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFuY2hvckxpbmsgaHJlZj17aXRlbS51cmx9IC8+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSkgfVxyXG4gICAgICAgIDwvU2Nyb2xsc3B5PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPFRvb2x0aXBcclxuICAgICAgICB0aXRsZT1cIlRvIFRvcFwiXHJcbiAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGYWJcclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG8gdG9wXCJcclxuICAgICAgICAgIGNvbXBvbmVudD17TGlua0J0bn1cclxuICAgICAgICAgIGhyZWY9XCIjaG9tZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmFifVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBcnJvd0ljb24gLz5cclxuICAgICAgICA8L0ZhYj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuUGFnZU5hdi5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKFBhZ2VOYXYpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYWdlTmF2JztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBwYWdlbmF2ID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHNob3c6IHt9LFxyXG4gIGZhYjoge1xyXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC41KScsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgZWFzZScsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICBoZWlnaHQ6IDQwXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBwYWdlTmF2OiB7XHJcbiAgICB6SW5kZXg6IDIwMCxcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgYm90dG9tOiA0MCxcclxuICAgIHJpZ2h0OiA0MCxcclxuICAgICcmIG5hdic6IHtcclxuICAgICAgdHJhbnNpdGlvbjogJ2hlaWdodCAwLjVzIGVhc2UnLFxyXG4gICAgICB0cmFuc2l0aW9uRGVsYXk6ICcwLjVzJyxcclxuICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcclxuICAgIH0sXHJcbiAgICAnJiRzaG93Jzoge1xyXG4gICAgICAnJiAkZmFiJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgdWwnOiB7XHJcbiAgICAgIG1hcmdpbjogJzAgMCAxNnB4IDIycHgnLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgfSxcclxuICAgICcmIGxpJzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxyXG4gICAgICAnJiBhJzoge1xyXG4gICAgICAgIHdpZHRoOiAxMixcclxuICAgICAgICBoZWlnaHQ6IDEyLFxyXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFya31gLFxyXG4gICAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmW2NsYXNzPVwiYWN0aXZlXCJdIGEnOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHR9YCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgJyYgbGknOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0b3A6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiBuYXYnOiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbkRlbGF5OiAnMHMnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2VuYXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCwgUGFyYWxsYXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9wYXJhbGxheC1zdHlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbGxheENsb3VkKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5wYXJhbGxheFdyYXAsIGNsYXNzZXMuZG90c1dyYXApfT5cclxuICAgICAgPFBhcmFsbGF4UHJvdmlkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5pbm5lclBhcmFsbGF4LCBjbGFzc2VzLmxhcmdlKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXhhV3JhcH0+XHJcbiAgICAgICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgICAgIHk9e1syMCwgMjBdfVxyXG4gICAgICAgICAgICAgIHRhZ091dGVyPVwiZmlndXJlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yaWdodFRvcEJhY2ssIGNsYXNzZXMuYmlnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzLmhleGFCYWNrfT5cclxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiL2ltYWdlcy9jcnlwdG8vcGFyYWxsYXgtYmFjazIuc3ZnI21haW5cIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgICA8UGFyYWxsYXhcclxuICAgICAgICAgICAgICB5PXtbMjAsIDIwXX1cclxuICAgICAgICAgICAgICB0YWdPdXRlcj1cImZpZ3VyZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucmlnaHRUb3BGcm9udCwgY2xhc3Nlcy5zbWFsbCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNTg1cHhcIiBoZWlnaHQ9XCIxNTFweFwiIHZpZXdCb3g9XCIwIDAgNTg1IDE1MVwiIHZlcnNpb249XCIxLjFcIj5cclxuICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE0My4wMDAwMDAsIC04OC4wMDAwMDApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzMi42MjM4NjIsIDcwLjkxMjAzMilcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTIwLjU2MTE3MywxNDguMjUyNjAzIEM1MjAuNTYxMTczLDE1MS4xMzE4MDIgNTIyLjEwMTIzNCwxNTMuNzkyNDMzIDUyNC42MDEzNDIsMTU1LjIzMjAzMyBMNTUxLjQwNDcyNSwxNzAuNjY2NTA5IEM1NTMuOTA0ODMzLDE3Mi4xMDYxMDggNTU2Ljk4NDk1NSwxNzIuMTA2MTA4IDU1OS40ODUwNjMsMTcwLjY2NjUwOSBMNTg2LjI4ODQ0NiwxNTUuMjMyMDMzIEM1ODguNzg4NTUzLDE1My43OTI0MzMgNTkwLjMyODYxNSwxNTEuMTMxODAyIDU5MC4zMjg2MTUsMTQ4LjI1MjYwMyBMNTkwLjMyODYxNSwxMTcuMzgzNTIyIEM1OTAuMzI4NjE1LDExNC41MDQxOTQgNTg4Ljc4ODU1MywxMTEuODQzNjkyIDU4Ni4yODg0NDYsMTEwLjQwMzk2MyBMNTU5LjQ4NTA2Myw5NC45Njk0ODcxIEM1NTYuOTg0OTU1LDkzLjUyOTg4NzkgNTUzLjkwNDgzMyw5My41Mjk4ODc5IDU1MS40MDQ3MjUsOTQuOTY5NDg3MSBMNTI0LjYwMTM0MiwxMTAuNDAzOTYzIEM1MjIuMTAxMjM0LDExMS44NDM2OTIgNTIwLjU2MTE3MywxMTQuNTA0MTk0IDUyMC41NjExNzMsMTE3LjM4MzUyMiBMNTIwLjU2MTE3MywxNDguMjUyNjAzIFpcIiBmaWxsPVwidXJsKCNoZXhhTGluZWFyR3JhZGllbnQtMilcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTU1LjQ0NDg5NCwgMTMyLjgxNzk5OCkgcm90YXRlKC0zMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTU1NS40NDQ4OTQsIC0xMzIuODE3OTk4KVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhleGFXcmFwfT5cclxuICAgICAgICAgICAgPFBhcmFsbGF4XHJcbiAgICAgICAgICAgICAgeT17WzQwLCA0MF19XHJcbiAgICAgICAgICAgICAgdGFnT3V0ZXI9XCJmaWd1cmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxlZnRCb3R0b21CYWNrLCBjbGFzc2VzLmJpZyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXhhQmFja30+XHJcbiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIi9pbWFnZXMvY3J5cHRvL3BhcmFsbGF4LWJhY2szLnN2ZyNtYWluXCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgICAgPFBhcmFsbGF4XHJcbiAgICAgICAgICAgICAgeT17WzQwLCA0MF19XHJcbiAgICAgICAgICAgICAgdGFnT3V0ZXI9XCJmaWd1cmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxlZnRCb3R0b21Gcm9udCwgY2xhc3Nlcy5zbWFsbCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNTg1cHhcIiBoZWlnaHQ9XCIxNTFweFwiIHZpZXdCb3g9XCIwIDAgNTg1IDE1MVwiIHZlcnNpb249XCIxLjFcIj5cclxuICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE0My4wMDAwMDAsIC04OC4wMDAwMDApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzMi42MjM4NjIsIDcwLjkxMjAzMilcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUsNjcuMzYyODE1OCBDMTUsNzAuMjQyMDE0MiAxNi41NDAwNjEzLDcyLjkwMjY0NTYgMTkuMDQwMTY5MSw3NC4zNDIyNDQ4IEw0NS44NDM1NTE4LDg5Ljc3NjcyMTIgQzQ4LjM0MzY1OTcsOTEuMjE2MzIwNCA1MS40MjM3ODIyLDkxLjIxNjMyMDQgNTMuOTIzODkwMSw4OS43NzY3MjEyIEw4MC43MjcyNzI3LDc0LjM0MjI0NDggQzgzLjIyNzM4MDYsNzIuOTAyNjQ1NiA4NC43Njc0NDE5LDcwLjI0MjAxNDIgODQuNzY3NDQxOSw2Ny4zNjI4MTU4IEw4NC43Njc0NDE5LDM2LjQ5MzczMzkgQzg0Ljc2NzQ0MTksMzMuNjE0NDA2NCA4My4yMjczODA2LDMwLjk1MzkwNDEgODAuNzI3MjcyNywyOS41MTQxNzU4IEw1My45MjM4OTAxLDE0LjA3OTY5OTQgQzUxLjQyMzc4MjIsMTIuNjQwMTAwMiA0OC4zNDM2NTk3LDEyLjY0MDEwMDIgNDUuODQzNTUxOCwxNC4wNzk2OTk0IEwxOS4wNDAxNjkxLDI5LjUxNDE3NTggQzE2LjU0MDA2MTMsMzAuOTUzOTA0MSAxNSwzMy42MTQ0MDY0IDE1LDM2LjQ5MzczMzkgTDE1LDY3LjM2MjgxNTggWlwiIGZpbGw9XCJ1cmwoI2hleGFMaW5lYXJHcmFkaWVudC0zKVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0OS44ODM3MjEsIDUxLjkyODIxMCkgcm90YXRlKC0zMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTQ5Ljg4MzcyMSwgLTUxLjkyODIxMClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXhQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBwYXJhbGxheFN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBwYXJhbGxheFdyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIHpJbmRleDogMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbm5lclBhcmFsbGF4OiB7XHJcbiAgICBoZWlnaHQ6IDI1MDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgJyYgZmlndXJlJzoge1xyXG4gICAgICBoZWlnaHQ6IDI1MDAsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB9LFxyXG4gICAgJyYgZmlndXJlID4gZGl2Jzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICByaWdodFRvcEJhY2s6IHtcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgcmlnaHQ6IC0yNDBcclxuICAgIH1cclxuICB9LFxyXG4gIHJpZ2h0VG9wRnJvbnQ6IHtcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgcmlnaHQ6IDUwXHJcbiAgICB9XHJcbiAgfSxcclxuICBsZWZ0Qm90dG9tQmFjazoge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIGxlZnQ6IC0xMTBcclxuICAgIH1cclxuICB9LFxyXG4gIGxlZnRCb3R0b21Gcm9udDoge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIGxlZnQ6IC01MFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGV4YUJhY2s6IHtcclxuICAgIG9wYWNpdHk6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gMC4xMiA6IDAuMDMsXHJcbiAgICBmaWxsOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIHdpZHRoOiA1NTAsXHJcbiAgICBoZWlnaHQ6IDUwMFxyXG4gIH0sXHJcbiAgaGV4YVRvcDoge30sXHJcbiAgaGV4YVdyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgaGVpZ2h0OiA3MDBcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXJhbGxheFN0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgTmV4dEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LWFuaW1hdGVkLXNsaWRlcic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9wcm9tb3Rpb24tc3R5bGUnO1xyXG5pbXBvcnQgaW1nQVBJIGZyb20gJ34vcHVibGljL2ltYWdlcy9pbWdBUEknO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5cclxuY29uc3Qgc2xpZGVyRGF0YSA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2NyeXB0by90cmFkZS5wbmdcIixcclxuICAgIGRlc2M6IFwicHJlbGF1bmNoIG1hcmtldGluZywgY29tcGFueSBhbmQgc29mdHdhcmUgZGV2ZWxvcG1lbnRcIixcclxuICAgIGRhdGU6ICdNYXkgMjAyMSdcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvY3J5cHRvL3RyYWRlLnBuZ1wiLFxyXG4gICAgZGVzYzogXCJNYXJrZXRpbmcgYW5kIGNvbW11bml0eSBkZXZlbG9wbWVudFwiLFxyXG4gICAgZGF0ZTogJ0p1bmUgMjAyMSdcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvY3J5cHRvL3RyYWRlLnBuZ1wiLFxyXG4gICAgZGVzYzogXCJsYXVuY2ggdHJhZGluZyBwbGFuZXQgc3dhcCBwbGF0Zm9ybVwiLFxyXG4gICAgZGF0ZTogJ09DVCAyMDIxJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9jcnlwdG8vdHJhZGUucG5nXCIsXHJcbiAgICBkZXNjOiBcIkxhdW5jaCBwcmVzYWxlIG9uIGRleGFsZVwiLFxyXG4gICAgZGF0ZTogJ05PViAyMDIxJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9jcnlwdG8vdHJhZGUucG5nXCIsXHJcbiAgICBkZXNjOiBcImxhdW5jaCBvdGhlciBmZWF0dXJlcyB0byBzd2FwIHBsYXRmb3JtXCIsXHJcbiAgICBkYXRlOiAnRGVjIDIwMjEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2NyeXB0by90cmFkZS5wbmdcIixcclxuICAgIGRlc2M6IFwiVFAgd2lsbCBiZSBsaXN0ZWQgb24gQ01DIGNvaW5nZWNrbyBhbmQgY2VudHJhbGlhIHplZCBwbGF0Zm9ybVwiLFxyXG4gICAgZGF0ZTogJ1ExIDIwMjInXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2NyeXB0by90cmFkZS5wbmdcIixcclxuICAgIGRlc2M6IFwibGF1bmNoIHRyYWRpbmcgcGxhbmV0IGNlbnRyYWxpemVkIHBsYXRmb3JtXCIsXHJcbiAgICBkYXRlOiAnUTIgMjAyMidcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvY3J5cHRvL3RyYWRlLnBuZ1wiLFxyXG4gICAgZGVzYzogXCJTdGFydCBUaGUgd29yayBvbiBUUCBibG9ja2NoYWluXCIsXHJcbiAgICBkYXRlOiAnUTEgMjAyMydcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvY3J5cHRvL3RyYWRlLnBuZ1wiLFxyXG4gICAgZGVzYzogXCJMYXVuY2ggVHJhZGluZyBQbGFuZXQgUHJlcGFpZCBjYXJkXCIsXHJcbiAgICBkYXRlOiAnUTMgMjAyMSdcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gUHJvbW90aW9uKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbGlkZXJXcmFwfT5cclxuICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItd3JhcHBlclwiXHJcbiAgICAgICAgICBwcmV2aW91c0J1dHRvbj17KFxyXG4gICAgICAgICAgICA8TmV4dEljb24gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBuZXh0QnV0dG9uPXsoXHJcbiAgICAgICAgICAgIDxOZXh0SWNvbiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c2xpZGVyRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaXRlbSwgaW5kZXggJSAyID09PSAxID8gY2xhc3Nlcy5vZGQgOiBjbGFzc2VzLmV2ZW4pfSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs3fT5cclxuICAgICAgICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdXcmFwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb3JhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzdmc+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx1c2UgeGxpbmtIcmVmPVwiL2VuL2ltYWdlcy9jcnlwdG8vZGVjby1wcm9tby5wbmdcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9zdmc+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkJhc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY31cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5wcm9tb19wZXJpb2RlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblByb21vdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoUHJvbW90aW9uKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUHJvbW90aW9uJztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGxpZ2h0ZW4sIGRhcmtlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcclxuaW1wb3J0IGRlY29Cb3R0b21MaWdodCBmcm9tICd+L3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tYm90dG9tLWxpZ2h0LnN2Zyc7XHJcbmltcG9ydCBkZWNvQm90dG9tRGFyayBmcm9tICd+L3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tYm90dG9tLWRhcmsuc3ZnJztcclxuXHJcbmNvbnN0IHByb21vdGlvblN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7dGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkZWNvQm90dG9tRGFyayA6IGRlY29Cb3R0b21MaWdodH0pIGJvdHRvbSBjZW50ZXIgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssIDAuNikgOiBsaWdodGVuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCAwLjg0KSxcclxuICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciAxMDElJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEwLCAzKSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgcGFkZGluZzogMFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNsaWRlcldyYXA6IHtcclxuICAgICcmIGFbY2xhc3MqPVwicHJldmlvdXNCdXR0b25cIl0nOiB7XHJcbiAgICAgIHJpZ2h0OiAxMjAsXHJcbiAgICAgIGxlZnQ6ICdhdXRvJyxcclxuICAgICAgdG9wOiAyMDAsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIHJpZ2h0OiAyMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgYVtjbGFzcyo9XCJuZXh0QnV0dG9uXCJdJzoge1xyXG4gICAgICBsZWZ0OiAnYXV0bycsXHJcbiAgICAgIHRvcDogMTQwLFxyXG4gICAgICByaWdodDogMTIwLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICByaWdodDogMjBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmID4gZGl2Jzoge1xyXG4gICAgICBoZWlnaHQ6IDUwMCxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBcclxuICAgICAgfSxcclxuICAgICAgJyYgPiBhJzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB6SW5kZXg6IDExLFxyXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdub25lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgICAgd2lkdGg6IDM1LFxyXG4gICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgbGVmdDogMyxcclxuICAgICAgICAgIHRvcDogMyxcclxuICAgICAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHBhcGVyOiB7fSxcclxuICB0aW1lOiB7fSxcclxuICBldmVuOiB7XHJcbiAgICAnJiBoMSc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICB9LFxyXG4gICAgJyYgJGRlY29yYXRpb24nOiB7XHJcbiAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG9kZDoge1xyXG4gICAgJyYgaDEnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIH0sXHJcbiAgICAnJiAkZGVjb3JhdGlvbic6IHtcclxuICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGhleGE6IHt9LFxyXG4gIGl0ZW06IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwKSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgICBtYXhIZWlnaHQ6IDUwMCxcclxuICAgIHpJbmRleDogMTAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgfSxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgd2lkdGg6IDQ1MCxcclxuICAgICAgaGVpZ2h0OiA0NTBcclxuICAgIH0sXHJcbiAgICAnJiBzZWN0aW9uJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgekluZGV4OiAxMCxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg0MHB4KScsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cyBlYXNlJyxcclxuICAgIH0sXHJcbiAgICAnJltjbGFzcyo9XCJjdXJyZW50XCJdJzoge1xyXG4gICAgICAnJiBzZWN0aW9uJzoge1xyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KScsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIGZpZ3VyZSc6IHtcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDUwcHgnLFxyXG4gICAgICB3aWR0aDogNDUwLFxyXG4gICAgICBoZWlnaHQ6IDQ1MCxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdG9wOiAxNyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRyYW5zaXRpb246ICdub25lICFpbXBvcnRhbnQnLFxyXG4gICAgICAnJiBpbWcnOiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ25vbmUnLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxyXG4gICAgICAgIHdpZHRoOiAzNTAsXHJcbiAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgIC8vIGhlaWdodDogMzkzLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmICRwYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOSwgNiwgOSwgMTYpLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDI0LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgICAgbGVmdDogLTgwLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiA2MCxcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSA4MHB4KScsXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgfSxcclxuICAgICAgJyYgYnV0dG9uJzoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgaDEnOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgbGluZUhlaWdodDogJzQycHgnLFxyXG4gICAgICAnJiBidXR0b24nOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgZm9udFNpemU6IDM2LFxyXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgbWF4V2lkdGg6IDUwMCxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdNb250c2VycmF0JyxcclxuICAgICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIGZvbnRTaXplOiAyOCxcclxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogJzI4cHgnLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vcm1hbCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzMycHgnXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgcCc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmICR0aW1lJzoge1xyXG4gICAgICAnJiBoNic6IHtcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGRlY29yYXRpb246IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHpJbmRleDogMixcclxuICAgIG9wYWNpdHk6IDAuNVxyXG4gIH0sXHJcbiAgaW1nV3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0b3A6IC0yNCxcclxuICAgIGxlZnQ6IC00MDBcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb21vdGlvblN0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IGltZ0FwaSBmcm9tICd+L3B1YmxpYy9pbWFnZXMvaW1nQVBJJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gJ34vdGhlbWUvY29tbW9uJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL1RpdGxlJztcclxuaW1wb3J0IFRlc3RpQ2FyZCBmcm9tICcuLi9DYXJkcy9UZXN0aW1vbmlhbCc7XHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3Rlc3RpLXN0eWxlJztcclxuXHJcbmNvbnN0IHRlc3RpQ29udGVudCA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiAnR3JlYXQgdGVhbSBHb29kIGNoYXJpdHkgd29yaycsXHJcbiAgICBuYW1lOiAnXHRNYWxsb3JpIE1jTGVlcycsXHJcbiAgICBhdmF0YXI6IGltZ0FwaS5hdmF0YXJbNl0sXHJcbiAgICB0aXRsZTogJ0NoaWVmIERpZ2l0YWwgT2ZmaWNlcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnaW0gdmVyeSBoYXBweSB3aXRoIHN0ZWxsYXIgaXRzIGFoIGdvb2QgY29pbiBhbmQgaXQgaGF2ZSBhaCBnb29kIGZ1dHVyZSB2aXNpb24gPSknLFxyXG4gICAgbmFtZTogJ0FyaXVzJyxcclxuICAgIGF2YXRhcjogaW1nQXBpLmF2YXRhcls3XSxcclxuICAgIHRpdGxlOiAnQ2hpZWYgRGlnaXRhbCBPZmZpY2VyJyxcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRleHQ6ICdDcmFzIGNvbnZhbGxpcyBsYWN1cyBvcmNpLCB0cmlzdGlxdWUgdGluY2lkdW50IG1hZ25hIGNvbnNlcXVhdCBpbi4gSW4gdmVsIHB1bHZpbmFyIGVzdCwgYXQgZXVpc21vZCBsaWJlcm8uJyxcclxuICAvLyAgIG5hbWU6ICdKZW5hIERvZScsXHJcbiAgLy8gICBhdmF0YXI6IGltZ0FwaS5hdmF0YXJbMV0sXHJcbiAgLy8gICB0aXRsZTogJ0dyYXBoaWMgRGVzaWduZXInLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgdGV4dDogJ1NlZCBpbXBlcmRpZXQgZW5pbSBsaWd1bGEsIHZpdGFlIHZpdmVycmEganVzdG8gcG9ydGEgdmVsLicsXHJcbiAgLy8gICBuYW1lOiAnSm92ZWxpbiBEb2UnLFxyXG4gIC8vICAgYXZhdGFyOiBpbWdBcGkuYXZhdGFyWzJdLFxyXG4gIC8vICAgdGl0bGU6ICdTZW5pb3IgR3JhcGhpYyBEZXNpZ25lcicsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICB0ZXh0OiAnQ3JhcyBjb252YWxsaXMgbGFjdXMgb3JjaSwgdHJpc3RpcXVlIHRpbmNpZHVudCBtYWduYSBjb25zZXF1YXQgaW4uIEluIHZlbCBwdWx2aW5hciBlc3QsIGF0IGV1aXNtb2QgbGliZXJvLicsXHJcbiAgLy8gICBuYW1lOiAnSmloYW4gRG9lJyxcclxuICAvLyAgIGF2YXRhcjogaW1nQXBpLmF2YXRhclszXSxcclxuICAvLyAgIHRpdGxlOiAnQ0VPIFNvZnR3YXJlIEhvdXNlJyxcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRleHQ6ICdDcmFzIGNvbnZhbGxpcyBsYWN1cyBvcmNpLCB0cmlzdGlxdWUgdGluY2lkdW50IG1hZ25hIGNvbnNlcXVhdCBpbi4gSW4gdmVsIHB1bHZpbmFyIGVzdCwgYXQgZXVpc21vZCBsaWJlcm8uJyxcclxuICAvLyAgIG5hbWU6ICdKb2huIERvZScsXHJcbiAgLy8gICBhdmF0YXI6IGltZ0FwaS5hdmF0YXJbOV0sXHJcbiAgLy8gICB0aXRsZTogJ1NlbmlvciBHcmFwaGljIERlc2lnbmVyJyxcclxuICAvLyB9LFxyXG5dO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFRlc3RpbW9uaWFscyhwcm9wcykge1xyXG4gIGNvbnN0IHNsaWRlciA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpKTtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWN0aXZlVHJhbnNpdGlvbiwgc2V0QWN0aXZlVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgZmFkZTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNzAwMCxcclxuICAgIGFmdGVyQ2hhbmdlOiAoY3VycmVudCkgPT4gc2V0QWN0aXZlKGN1cnJlbnQpLFxyXG4gICAgYmVmb3JlQ2hhbmdlOiAoY3VycmVudCwgbmV4dCkgPT4gc2V0QWN0aXZlVHJhbnNpdGlvbihuZXh0KSxcclxuICB9O1xyXG4gIGNvbnN0IHNsaWRlU3RhdGUgPSBpbmRleCA9PiB7XHJcbiAgICBpZiAoaW5kZXggPT09IGFjdGl2ZVRyYW5zaXRpb24gLSAxIHx8IGluZGV4ID09PSBhY3RpdmUgLSAxKSB7XHJcbiAgICAgIHJldHVybiBjbGFzc2VzLnBhc3Q7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5kZXggPT09IGFjdGl2ZVRyYW5zaXRpb24gKyAxIHx8IGluZGV4ID09PSBhY3RpdmUgKyAxKSB7XHJcbiAgICAgIHJldHVybiBjbGFzc2VzLmZ1dHVyZTtcclxuICAgIH1cclxuICAgIGlmIChpbmRleCA9PT0gYWN0aXZlVHJhbnNpdGlvbiB8fCBpbmRleCA9PT0gYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybiBjbGFzc2VzLmN1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3Nlcy5zbGlkZTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENvbnRhaW5lciBmaXhlZD17aXNEZXNrdG9wfT5cclxuICAgICAgICA8VGl0bGUgdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLnRlc3RpX3RpdGxlJyl9IGFsaWduPVwiY2VudGVyXCIgLz5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy50ZXN0aV9zdWJ0aXRsZScpfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Nn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxfSB4cz17MTJ9IC8+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxMH0geHM9ezEyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVyV3JhcH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWx9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubmF2LCBjbGFzc2VzLnByZXYpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZXIuY3VycmVudC5zbGlja1ByZXYoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLWlvcy1hcnJvdy1iYWNrXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIHJlZj17c2xpZGVyfSB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICB7dGVzdGlDb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXgudG9TdHJpbmcoKX0gY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaXRlbSwgc2xpZGVTdGF0ZShpbmRleCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXN0aUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17aXRlbS5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpbmRleCA9PT0gYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm5hdiwgY2xhc3Nlcy5uZXh0KX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVyLmN1cnJlbnQuc2xpY2tOZXh0KCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1pb3MtYXJyb3ctZm9yd2FyZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdpbmF0aW9ufT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAge1suLi5BcnJheSh0ZXN0aUNvbnRlbnQubGVuZ3RoKV0ubWFwKChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbmRleCA9PT0gYWN0aXZlID8gY2xhc3Nlcy5hY3RpdmUgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzbGlkZXIuY3VycmVudC5zbGlja0dvVG8oaW5kZXgpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblRlc3RpbW9uaWFscy5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoVGVzdGltb25pYWxzKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGVzdGltb25pYWxzJztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGZhZGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XHJcbmltcG9ydCBoZXhhQmcgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9oZXhhLW5hdi5wbmcnO1xyXG5cclxuY29uc3QgdGVzdGlTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygyMClcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMjAwXHJcbiAgICB9XHJcbiAgfSxcclxuICBjYXJvdXNlbDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICB9LFxyXG4gICAgJyYgPiBkaXYnOiB7XHJcbiAgICAgIHpJbmRleDogMTBcclxuICAgIH0sXHJcbiAgICAnJjphZnRlciwgJjpiZWZvcmUnOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMixcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIGhlaWdodDogMTUwLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIH0sXHJcbiAgICAnJjphZnRlcic6IHtcclxuICAgICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgICBib3R0b206IDUsXHJcbiAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgMCknXHJcbiAgICB9LFxyXG4gICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICB3aWR0aDogJzgwJScsXHJcbiAgICAgIGJvdHRvbTogLTE1LFxyXG4gICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIDApJ1xyXG4gICAgfSxcclxuICAgICcmID4gYnV0dG9uJzoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaXRlbToge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg3LCAxLCAwKSxcclxuICAgIH0sXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgb3V0bGluZTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBzbGlkZUNvbnRlbnQ6IHtcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMXMnLFxyXG4gICAgYW5pbWF0aW9uRmlsbE1vZGU6ICdib3RoJ1xyXG4gIH0sXHJcbiAgc2xpZGU6IHtcclxuICAgIGJhY2tncm91bmQ6ICdub25lJ1xyXG4gIH0sXHJcbiAgZnV0dXJlOiB7XHJcbiAgICAnJiAkc2xpZGVDb250ZW50Jzoge1xyXG4gICAgICBhbmltYXRpb246ICdmYWRlSW5VcCcsXHJcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMXMnLFxyXG4gICAgICBhbmltYXRpb25EZWxheTogJzAuMXMnLFxyXG4gICAgICBhbmltYXRpb25GaWxsTW9kZTogJ2JvdGgnXHJcbiAgICB9XHJcbiAgfSxcclxuICBwYXN0OiB7XHJcbiAgICAnJiAkc2xpZGVDb250ZW50Jzoge1xyXG4gICAgICBhbmltYXRpb246ICdmYWRlT3V0VXAnLFxyXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogJzFzJyxcclxuICAgICAgYW5pbWF0aW9uRmlsbE1vZGU6ICdib3RoJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmF2OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgekluZGV4OiAxMixcclxuICAgIHRvcDogJzQ4JScsXHJcbiAgICB3aWR0aDogNTAsXHJcbiAgICBoZWlnaHQ6IDY0LFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIG1pbldpZHRoOiAwLFxyXG4gICAgYmFja2dyb3VuZDogYHVybCgke2hleGFCZ30pIG5vLXJlcGVhdCBjZW50ZXJgLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnLFxyXG4gICAgdHJhbnNmb3JtOiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdyb3RhdGUoMGRlZyknLFxyXG4gICAgJyYgaSc6IHtcclxuICAgICAgY29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSwgMC4zMyksXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBmb250U2l6ZTogMjYsXHJcbiAgICB9LFxyXG4gICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgIG91dGxpbmU6ICdub25lJ1xyXG4gICAgfSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjZcclxuICAgIH1cclxuICB9LFxyXG4gIHByZXY6IHtcclxuICAgIGxlZnQ6IDU2LFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICByaWdodDogMixcclxuICAgICAgbWFyZ2luVG9wOiAzXHJcbiAgICB9XHJcbiAgfSxcclxuICBuZXh0OiB7XHJcbiAgICByaWdodDogNTYsXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIGxlZnQ6IDIsXHJcbiAgICAgIG1hcmdpblRvcDogM1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZlOiB7fSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICB6SW5kZXg6IDIyLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJiB1bCc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygtMTIpLFxyXG4gICAgICAnJiBsaSc6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICB3aWR0aDogMTUsXHJcbiAgICAgICAgaGVpZ2h0OiAxNSxcclxuICAgICAgICBtYXJnaW46ICcwIDVweCcsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn1gLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzIGVhc2Utb3V0JyxcclxuICAgICAgICAnJiRhY3RpdmUnOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjVcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmIGJ1dHRvbic6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZXN0aVN0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vdGl0bGUtc3R5bGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgdGV4dCxcclxuICAgIGFsaWduLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBzZXRBbGlnbiA9IGFsaWdubWVudCA9PiB7XHJcbiAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5sZWZ0O1xyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMucmlnaHQ7XHJcbiAgICAgIGNhc2UgJ2NlbnRlcic6XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMuY2VudGVyO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBjbGFzc2VzLmxlZnQ7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50aXRsZSwgc2V0QWxpZ24oYWxpZ24pKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlY299PlxyXG4gICAgICAgIDxzdmcgd2lkdGg9XCIzOHB4XCIgaGVpZ2h0PVwiNDNweFwiIHZpZXdCb3g9XCIwIDAgMzggNDNcIiB2ZXJzaW9uPVwiMS4xXCI+XHJcbiAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0wLDMwLjAyNDUxMjYgQzAsMzEuNjE0NjkwMSAwLjgzODgyMDAzNywzMy4wODQxNTM0IDIuMjAwNTQ1NDUsMzMuODc5MjQyMiBMMTYuNzk5NDU0NSw0Mi40MDM2ODM0IEMxOC4xNjExOCw0My4xOTg3NzIyIDE5LjgzODgyLDQzLjE5ODc3MjIgMjEuMjAwNTQ1NSw0Mi40MDM2ODM0IEwzNS43OTk0NTQ1LDMzLjg3OTI0MjIgQzM3LjE2MTE4LDMzLjA4NDE1MzQgMzgsMzEuNjE0NjkwMSAzOCwzMC4wMjQ1MTI2IEwzOCwxMi45NzU1NTg3IEMzOCwxMS4zODUzMDk5IDM3LjE2MTE4LDkuOTE1OTE3OTMgMzUuNzk5NDU0NSw5LjEyMDc1Nzg0IEwyMS4yMDA1NDU1LDAuNTk2MzE2NTg4IEMxOS44Mzg4MiwtMC4xOTg3NzIxOTYgMTguMTYxMTgsLTAuMTk4NzcyMTk2IDE2Ljc5OTQ1NDUsMC41OTYzMTY1ODggTDIuMjAwNTQ1NDUsOS4xMjA3NTc4NCBDMC44Mzg4MjAwMzcsOS45MTU5MTc5MyAwLDExLjM4NTMwOTkgMCwxMi45NzU1NTg3IEwwLDMwLjAyNDUxMjYgWlwiIGZpbGw9XCJ1cmwoI3RpdGxlTGluZWFyR3JhZGllbnQtMSlcIiAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblRpdGxlLnByb3BUeXBlcyA9IHtcclxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5UaXRsZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdsZWZ0JyxcclxufTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGl0bGUnO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHRpdGxlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGxlZnQ6IHtcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgJyY6YWZ0ZXInOiB7XHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICB9XHJcbiAgfSxcclxuICByaWdodDoge1xyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgJyY6YWZ0ZXInOiB7XHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2VudGVyOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgJyY6YWZ0ZXInOiB7XHJcbiAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAtMzUsXHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWNvOiB7XHJcbiAgICAnJiBzdmcnOiB7fVxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICcmIGg0Jzoge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgICAgZm9udFNpemU6IDM2LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ4cHgnXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAyOCxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDRweCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZVNlY29uZGFyeToge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyYgaDQnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxyXG4gICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc1NnB4JyxcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDMyLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4J1xyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICBmb250U2l6ZTogMjgsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ0cHgnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgc3Ryb25nJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aXRsZVN0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVkaXVtKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgZmlsbD1cIiNmZmZcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDUwIDUwXCJcclxuICAgICAgd2lkdGg9XCIyMHB4XCJcclxuICAgICAgaGVpZ2h0PVwiMjBweFwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk00NSw0SDVDNC40NDgsNCw0LDQuNDQ4LDQsNXY0MGMwLDAuNTUyLDAuNDQ4LDEsMSwxaDQwYzAuNTUyLDAsMS0wLjQ0OCwxLTFWNUM0Niw0LjQ0OCw0NS41NTIsNCw0NSw0eiBNNDAsMTMuNSBsLTEuODIxLDIuMTk3QzM4LjA2NCwxNS44MTEsMzgsMTUuOTY1LDM4LDE2LjEyNVYzMi43NWMwLDAuMTYsMC4wNjQsMC4zMTQsMC4xNzksMC40MjhMNDAsMzUuNTQ2VjM2SDMwdi0wLjQ1NGwyLjgyMS0yLjM2OCBDMzIuOTM2LDMzLjA2NCwzMywzMi45MSwzMywzMi43NVYxNy44NzlMMjQuODQ4LDM2aC0wLjAwMWgtMS41NDNsMCwwTDE1LDE4LjM3NXYxMy4xMDhjMCwwLjIyLDAuMDc2LDAuNDMzLDAuMjE1LDAuNjA1TDE4LDM1LjU0NiBWMzZoLTh2LTAuNDU0bDIuNzgzLTMuNDM4QzEyLjkyMywzMS45MzYsMTMsMzEuNzIxLDEzLDMxLjVWMTYuMzg4YzAtMC4xNDItMC4wNS0wLjI3OS0wLjE0Mi0wLjM4OEwxMSwxMy41VjEzaDcuMDk3bDcuNjI0LDE2LjE4MyBMMzMuMDAyLDEzSDQwVjEzLjV6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuIiwiY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xyXG4gIGRlZmF1bHRMYW5ndWFnZTogJ2VuZycsXHJcbiAgLy8gb3RoZXJMYW5ndWFnZXM6IFsnYXJhJ10sXHJcbiAgZmFsbGJhY2tMbmc6ICdlbmcnLFxyXG4gIGluaXRJbW1lZGlhdGU6IGZhbHNlLFxyXG4gIGxvY2FsZVBhdGg6ICdwdWJsaWMvbG9jYWxlcycsXHJcbiAgcmVhY3Q6IHtcclxuICAgIHVzZVN1c3BlbnNlOiBmYWxzZSxcclxuICB9LFxyXG4gIGxvY2FsZVN1YnBhdGhzOiB7XHJcbiAgICAvLyBhcmE6ICdhcicsXHJcbiAgICBlbmc6ICdlbicsXHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVRoZW1lLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CYW5uZXInO1xyXG5pbXBvcnQgUHJvbW90aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvbW90aW9uJztcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSAnLi4vY29tcG9uZW50cy9GZWF0dXJlJztcclxuaW1wb3J0IEJlbmVmaXQgZnJvbSAnLi4vY29tcG9uZW50cy9CZW5lZml0JztcclxuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RpbW9uaWFscyc7XHJcbmltcG9ydCBGYXEgZnJvbSAnLi4vY29tcG9uZW50cy9GYXEnO1xyXG5pbXBvcnQgRm9vdGVyV2l0aENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyV2l0aENvdW50ZXInO1xyXG5pbXBvcnQgUGFnZU5hdiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VOYXYnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uJztcclxuaW1wb3J0IGJyYW5kIGZyb20gJy4uL3B1YmxpYy90ZXh0L2JyYW5kJztcclxuXHJcbmNvbnN0IHNlY3Rpb25NYXJnaW4gPSBtYXJnaW4gPT4gKG1hcmdpbiAqIDIwKTtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIG1haW5XcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0IDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgc3BhY2VCb3R0b206IHtcclxuICAgIG1hcmdpbkJvdHRvbTogc2VjdGlvbk1hcmdpbih0aGVtZS5zcGFjaW5nKCkpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogc2VjdGlvbk1hcmdpbig2KSxcclxuICAgIH1cclxuICB9LFxyXG4gIHNwYWNlVG9wOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHNlY3Rpb25NYXJnaW4odGhlbWUuc3BhY2luZygpKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHNlY3Rpb25NYXJnaW4oNiksXHJcbiAgICB9XHJcbiAgfSxcclxuICBzcGFjZUJvdHRvbVNob3J0OiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IHNlY3Rpb25NYXJnaW4odGhlbWUuc3BhY2luZygpIC8gMiksXHJcbiAgfSxcclxuICBzcGFjZVRvcFNob3J0OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHNlY3Rpb25NYXJnaW4odGhlbWUuc3BhY2luZygpIC8gMiksXHJcbiAgfSxcclxuICBjb250YWluZXJXcmFwOiB7XHJcbiAgICBtYXJnaW5Ub3A6IC00MCxcclxuICAgICcmID4gc2VjdGlvbic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgIH1cclxuICB9XHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIExhbmRpbmcocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzVGFibGV0ID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5vbmx5KCdtZCcpKTtcclxuICBjb25zdCB7IG9uVG9nZ2xlRGFyaywgb25Ub2dnbGVEaXIgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgIHsgYnJhbmQuY3J5cHRvLm5hbWUgfVxyXG4gICAgICAgICAgJm5ic3A7IC0gSG9tZSBQYWdlXHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJob21lXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbldyYXB9PlxyXG4gICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgIG9uVG9nZ2xlRGFyaz17b25Ub2dnbGVEYXJrfVxyXG4gICAgICAgICAgb25Ub2dnbGVEaXI9e29uVG9nZ2xlRGlyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcldyYXB9PlxyXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJiYW5uZXJcIj5cclxuICAgICAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwcm9tb3Rpb25zXCI+XHJcbiAgICAgICAgICAgIDxQcm9tb3Rpb24gLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZVwiIGNsYXNzTmFtZT17aXNUYWJsZXQgPyBjbGFzc2VzLnNwYWNlVG9wU2hvcnQgOiAnJ30+XHJcbiAgICAgICAgICAgIDxGZWF0dXJlIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImJlbmVmaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2VUb3BTaG9ydH0+XHJcbiAgICAgICAgICAgIDxCZW5lZml0IC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsc1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZVRvcH0+XHJcbiAgICAgICAgICAgIDxUZXN0aW1vbmlhbHMgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwiZmFxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlVG9wfT5cclxuICAgICAgICAgICAgPEZhcSAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Rm9vdGVyV2l0aENvdW50ZXIgdG9nZ2xlRGlyPXtvblRvZ2dsZURpcn0gLz5cclxuICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgIDxQYWdlTmF2IC8+XHJcbiAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvc2NyaXB0cy9wYXJ0aWNsZXMubWluLmpzXCIgLz5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9zY3JpcHRzL3N0YXRzLm1pbi5qc1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5MYW5kaW5nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XHJcbiAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2NvbW1vbicsICdjcnlwdG8tbGFuZGluZyddLFxyXG59KTtcclxuXHJcbkxhbmRpbmcucHJvcFR5cGVzID0ge1xyXG4gIG9uVG9nZ2xlRGFyazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvblRvZ2dsZURpcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejROQ2p4emRtY2dkMmxrZEdnOUlqWXpNSEI0SWlCb1pXbG5hSFE5SWpRMU1uQjRJaUIyYVdWM1FtOTRQU0l3SURBZ05qTXdJRFExTWlJZ2RtVnljMmx2YmowaU1TNHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklqNE5DaUFnSUNBOElTMHRJRWRsYm1WeVlYUnZjam9nVTJ0bGRHTm9JRFUxTGpJZ0tEYzRNVGd4S1NBdElHaDBkSEJ6T2k4dmMydGxkR05vWVhCd0xtTnZiU0F0TFQ0TkNpQWdJQ0E4ZEdsMGJHVStSM0p2ZFhBZ05Ed3ZkR2wwYkdVK0RRb2dJQ0FnUEdSbGMyTStRM0psWVhSbFpDQjNhWFJvSUZOclpYUmphQzQ4TDJSbGMyTStEUW9nSUNBZ1BHY2dhV1E5SWxCaFoyVXRNU0lnYzNSeWIydGxQU0p1YjI1bElpQnpkSEp2YTJVdGQybGtkR2c5SWpFaUlHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWm1sc2JDMXZjR0ZqYVhSNVBTSXdMakU0SWo0TkNpQWdJQ0FnSUNBZ1BHY2dhV1E5SWtkeWIzVndMVElpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEQXVNREF3TURBd0xDQXRORGt1TURBd01EQXdLU0lnWm1sc2JEMGlJMFpHUmtaR1JpSStEUW9nSUNBZ0lDQWdJQ0FnSUNBOFp5QnBaRDBpUjNKdmRYQXROQ0lnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01DNHdNREF3TURBc0lEQXVOREF3TkRBMEtTSStEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVFF4TVM0MU1qWTNPVFVzTVRrM0xqY3lORGcwTnlCRE5ERXhMalV5TmpjNU5Td3lNRFl1TWpNM01qVTVJRFF4Tmk0d09EQXdNVGtzTWpFMExqRXdNelEzTkNBME1qTXVORGN4TmpRekxESXhPQzR6TlRrMk9DQk1OVEF5TGpjeE5qUXlOaXd5TmpNdU9Ua3lNRFExSUVNMU1UQXVNVEE0TURRNUxESTJPQzR5TkRneU5USWdOVEU1TGpJeE5EUTVPU3d5TmpndU1qUTRNalV5SURVeU5pNDJNRFl4TWpJc01qWXpMams1TWpBME5TQk1OakExTGpnMU1Ea3dOU3d5TVRndU16VTVOamdnUXpZeE15NHlOREkxTWprc01qRTBMakV3TXpRM05DQTJNVGN1TnprMU56VXpMREl3Tmk0eU16Y3lOVGtnTmpFM0xqYzVOVGMxTXl3eE9UY3VOekkwT0RRM0lFdzJNVGN1TnprMU56VXpMREV3Tmk0ME5UazNNelVnUXpZeE55NDNPVFUzTlRNc09UY3VPVFEyT1RRd05pQTJNVE11TWpReU5USTVMRGt3TGpBNE1URXdOemdnTmpBMUxqZzFNRGt3TlN3NE5TNDRNalExTVRrM0lFdzFNall1TmpBMk1USXlMRFF3TGpFNU1qRTFORGdnUXpVeE9TNHlNVFEwT1Rrc016VXVPVE0xT1RRNE5DQTFNVEF1TVRBNE1EUTVMRE0xTGprek5UazBPRFFnTlRBeUxqY3hOalF5Tml3ME1DNHhPVEl4TlRRNElFdzBNak11TkRjeE5qUXpMRGcxTGpneU5EVXhPVGNnUXpReE5pNHdPREF3TVRrc09UQXVNRGd4TVRBM09DQTBNVEV1TlRJMk56azFMRGszTGprME5qazBNRFlnTkRFeExqVXlOamM1TlN3eE1EWXVORFU1TnpNMUlFdzBNVEV1TlRJMk56azFMREU1Tnk0M01qUTRORGNnV2lJZ2FXUTlJa1pwYkd3dE1TSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTlRFMExqWTJNVEkzTkN3Z01UVXlMakE1TWpFd01Da2djbTkwWVhSbEtDMHpNekF1TURBd01EQXdLU0IwY21GdWMyeGhkR1VvTFRVeE5DNDJOakV5TnpRc0lDMHhOVEl1TURreU1UQXdLU0FpUGp3dmNHRjBhRDROQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTUN3ME16QXVOemc0TlRRM0lFTXdMRFF6T1M0ek1EQTVOaUEwTGpVMU16SXlORFl5TERRME55NHhOamN4TnpVZ01URXVPVFEwT0RRM09TdzBOVEV1TkRJek16Z3hJRXc1TVM0eE9EazJNekUwTERRNU55NHdOVFUzTkRZZ1F6azRMalU0TVRJMU5EY3NOVEF4TGpNeE1UazFNaUF4TURjdU5qZzNOekEwTERVd01TNHpNVEU1TlRJZ01URTFMakEzT1RNeU55dzBPVGN1TURVMU56UTJJRXd4T1RRdU16STBNVEV4TERRMU1TNDBNak16T0RFZ1F6SXdNUzQzTVRVM016UXNORFEzTGpFMk56RTNOU0F5TURZdU1qWTRPVFU1TERRek9TNHpNREE1TmlBeU1EWXVNalk0T1RVNUxEUXpNQzQzT0RnMU5EY2dUREl3Tmk0eU5qZzVOVGtzTXpNNUxqVXlNelF6TmlCRE1qQTJMakkyT0RrMU9Td3pNekV1TURFd05qUXhJREl3TVM0M01UVTNNelFzTXpJekxqRTBORGd3T1NBeE9UUXVNekkwTVRFeExETXhPQzQ0T0RneU1pQk1NVEUxTGpBM09UTXlOeXd5TnpNdU1qVTFPRFUySUVNeE1EY3VOamczTnpBMExESTJPQzQ1T1RrMk5Ea2dPVGd1TlRneE1qVTBOeXd5TmpndU9UazVOalE1SURreExqRTRPVFl6TVRRc01qY3pMakkxTlRnMU5pQk1NVEV1T1RRME9EUTNPU3d6TVRndU9EZzRNaklnUXpRdU5UVXpNakkwTmpJc016SXpMakUwTkRnd09TQXdMRE16TVM0d01UQTJOREVnTUN3ek16a3VOVEl6TkRNMklFd3dMRFF6TUM0M09EZzFORGNnV2lJZ2FXUTlJa1pwYkd3dE1TSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTVRBekxqRXpORFEzT1N3Z016ZzFMakUxTlRnd01Ta2djbTkwWVhSbEtDMHpOakF1TURBd01EQXdLU0IwY21GdWMyeGhkR1VvTFRFd015NHhNelEwTnprc0lDMHpPRFV1TVRVMU9EQXhLU0FpUGp3dmNHRjBhRDROQ2lBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejROQ2lBZ0lDQWdJQ0FnUEM5blBnMEtJQ0FnSUR3dlp6NE5Dand2YzNablBnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NE5DandoTFMwZ1IyVnVaWEpoZEc5eU9pQkJaRzlpWlNCSmJHeDFjM1J5WVhSdmNpQXlNaTR3TGpBc0lGTldSeUJGZUhCdmNuUWdVR3gxWnkxSmJpQXVJRk5XUnlCV1pYSnphVzl1T2lBMkxqQXdJRUoxYVd4a0lEQXBJQ0F0TFQ0TkNqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpVEdGNVpYSmZNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaURRb0pJSFpwWlhkQ2IzZzlJakFnTUNBeE1qZ3dJREl6TnlJZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTVRJNE1DQXlNemM3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5Danh6ZEhsc1pTQjBlWEJsUFNKMFpYaDBMMk56Y3lJK0RRb0pMbk4wTUh0bWFXeHNPaU16TURNd016QTdmUTBLUEM5emRIbHNaVDROQ2p4MGFYUnNaVDVEYjIxaWFXNWxaQ0JUYUdGd1pUd3ZkR2wwYkdVK0RRbzhaR1Z6WXo1RGNtVmhkR1ZrSUhkcGRHZ2dVMnRsZEdOb0xqd3ZaR1Z6WXo0TkNqeG5JR2xrUFNKUVlXZGxMVEVpUGcwS0NUeHdZWFJvSUdsa1BTSkRiMjFpYVc1bFpDMVRhR0Z3WlNJZ1kyeGhjM005SW5OME1DSWdaRDBpVFRFeU9EQXNNQzQ0VmpJek4wZ3dWamd6WXprdU9Td3lMamtzTWpBc05TNHhMRE13TGpNc05pNDRiRGMzTkM0NUxERXlNeTQ1WXpVNExqSXNPUzR6TERFeE55NDVMVElzTVRZNExqY3RNeklOQ2drSlRERXlPREFzTUM0NGVpSXZQZzBLUEM5blBnMEtQQzl6ZG1jK0RRbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NE5Danh6ZG1jZ2QybGtkR2c5SWpFeU9EQndlQ0lnYUdWcFoyaDBQU0l5TXpkd2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURFeU9EQWdNak0zSWlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaVBnMEtJQ0FnSUR3aExTMGdSMlZ1WlhKaGRHOXlPaUJUYTJWMFkyZ2dOVFV1TWlBb056Z3hPREVwSUMwZ2FIUjBjSE02THk5emEyVjBZMmhoY0hBdVkyOXRJQzB0UGcwS0lDQWdJRHgwYVhSc1pUNURiMjFpYVc1bFpDQlRhR0Z3WlR3dmRHbDBiR1UrRFFvZ0lDQWdQR1JsYzJNK1EzSmxZWFJsWkNCM2FYUm9JRk5yWlhSamFDNDhMMlJsYzJNK0RRb2dJQ0FnUEdjZ2FXUTlJbEJoWjJVdE1TSWdjM1J5YjJ0bFBTSnViMjVsSWlCemRISnZhMlV0ZDJsa2RHZzlJakVpSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStEUW9nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB4TWpnd0xEQXVOemt3TXpBeU9UWTRJRXd4TWpnd0xESXpOeUJNTUN3eU16Y2dUREFzT0RNdU1EUTNNek13TnlCRE9TNDROemswTURJM09DdzROUzQ1TURBNE5qTXlJREU1TGprNU16WXpPVGdzT0RndU1UWTVNRE15SURNd0xqSTVPVEUxT1RFc09Ea3VPREUyTmpnM01pQk1PREExTGpJek5EWXhOU3d5TVRNdU56RTBNREUwSUVNNE5qTXVORFk1TnpRNExESXlNeTR3TWpRMk9UWWdPVEl6TGpFeU56azFNaXd5TVRFdU5qazROekVnT1RjekxqZzVPVEF6TERFNE1TNDJPVE0wTWpZZ1RERXlPREFzTUM0M09UQXpNREk1TmpnZ1dpSWdhV1E5SWtOdmJXSnBibVZrTFZOb1lYQmxJaUJtYVd4c1BTSWpSa1pHUmtaR0lqNDhMM0JoZEdnK0RRb2dJQ0FnUEM5blBnMEtQQzl6ZG1jK1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeU1pNHdMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p4emRtY2dkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlUR0Y1WlhKZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpRFFvSklIWnBaWGRDYjNnOUlqQWdNQ0F4TWpnd0lEUXhNQ0lnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdNVEk0TUNBME1UQTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0TkNqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrRFFvSkxuTjBNSHRtYVd4c09pTXpNRE13TXpBN2ZRMEtQQzl6ZEhsc1pUNE5DangwYVhSc1pUNURiMjFpYVc1bFpDQlRhR0Z3WlR3dmRHbDBiR1UrRFFvOFpHVnpZejVEY21WaGRHVmtJSGRwZEdnZ1UydGxkR05vTGp3dlpHVnpZejROQ2p4bklHbGtQU0pRWVdkbExURWlQZzBLQ1R4d1lYUm9JR2xrUFNKRGIyMWlhVzVsWkMxVGFHRndaU0lnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUVEV5T0RBc016YzFZeTAwTUM0eUxUUTNMak10T0RNdU1pMDVOaTR5TFRFeU9TNHhMVEUwTmk0M1l5MDJNQzQwTFRZMkxqVXRNVFV4TGpZdE9UWXRNak01TGpVdE56Y3VORXd4TlRJdU5pd3pNVEVOQ2drSll5MDFOeTQzTERFeUxqSXRNVEE1TGpNc05EUXVNUzB4TkRZc09UQXVNMHd3TERRd09TNDNWakJvTVRJNE1GWXpOelZNTVRJNE1Dd3pOelY2SWk4K0RRbzhMMmMrRFFvOEwzTjJaejROQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0TkNqeHpkbWNnZDJsa2RHZzlJakV5T0RCd2VDSWdhR1ZwWjJoMFBTSTBNVEJ3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREV5T0RBZ05ERXdJaUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGcwS0lDQWdJRHdoTFMwZ1IyVnVaWEpoZEc5eU9pQlRhMlYwWTJnZ05UVXVNaUFvTnpneE9ERXBJQzBnYUhSMGNITTZMeTl6YTJWMFkyaGhjSEF1WTI5dElDMHRQZzBLSUNBZ0lEeDBhWFJzWlQ1RGIyMWlhVzVsWkNCVGFHRndaVHd2ZEdsMGJHVStEUW9nSUNBZ1BHUmxjMk0rUTNKbFlYUmxaQ0IzYVhSb0lGTnJaWFJqYUM0OEwyUmxjMk0rRFFvZ0lDQWdQR2NnYVdROUlsQmhaMlV0TVNJZ2MzUnliMnRsUFNKdWIyNWxJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRWlJR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK0RRb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHhNamd3TGpBd01EQXlMRE0zTkM0NU9UazVPRFVnUXpFeU16a3VPREV5TkRFc016STNMamN4TnpjM01pQXhNVGsyTGpjMk5UTXhMREkzT0M0NE1UVTJOakVnTVRFMU1DNDROVGczTWl3eU1qZ3VNamt6TmpVeklFTXhNRGt3TGpRek56UTFMREUyTVM0M09UYzJOeklnT1RrNUxqSTRNalV4TlN3eE16SXVNek0wTkRJMElEa3hNUzR6TnpFNU1qa3NNVFV3TGpnNE5qTTBJRXd4TlRJdU5qUXhPRGMzTERNeE1TNHdNREkwTURJZ1F6azBMamt6T0RBME56TXNNekl6TGpFM09UY3pOeUEwTXk0ek1ERXhPRFl4TERNMU5TNHhNek13TkRRZ05pNDJOVFV5TXpNeU1pdzBNREV1TXpRd01URTRJRXd3TERRd09TNDNNekUzTXpZZ1REQXNNQ0JNTVRJNE1Dd3dJRXd4TWpnd0xETTNOQzQ1T1RrNU5pQmFJaUJwWkQwaVEyOXRZbWx1WldRdFUyaGhjR1VpSUdacGJHdzlJaU5HUmtaR1JrWWlQand2Y0dGMGFENE5DaUFnSUNBOEwyYytEUW84TDNOMlp6ND1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE4QUFBQVJDQVlBQUFGMURjWTNBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBTjVKUkVGVU9CRmpZQUNDLy8vL056QUNpZjBnRGhpQVJLQk1CZ1pVS1pBd1NHUU9rRmFHcVdHQ01WQm9aRlBRRGJtTHJrVVpYZUF1MkN3VU0wQWlRQUZuSUZVRGxrVVFMWXlNakh2UkxVRklRMW5vZG1BcUFCcmpDQlJ0d1pBQmlrSGxJRkpBZDBnQjhXWVFEVlBNQ0dJQUJWWURLUkdZSUpCK0E5UVppdGR4ZUIxR0swbW9mOTRndVJURUJMa1dGQVlRZ05PZlNBbzRnZXdvSUE0SFlsYVlPSkQrRGNRcmdYZ1owTVR2TUhGUU9JQkNyQUtJZFdHQ1JOQ1hnV282OEFZaUlVUHdodVBnMWh3TmRCNG9BRWdCSVBYUjRDUUowd1VNZVpLaUNnQXBNR0U5dXF1cktnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEUUFBQUE3Q0FZQUFBRkRLWm1vQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQS9sSlJFRlVhQVh0bW9keTFEQVFoa01vb1JQS1FLaDUvK2NLZlNDaFF3SUUvczkzcTVGbE5aL1BUaG52ek1heXRLdXRYcFhMeGtZYkhyZGZGMjhYZ3M1ZGU5K3hSdmpjVk1kVzJHbnZEQ1loTzJoY1RvRmxSNmhnMDMxTmY2OGFSL2k4SFhhRVU0YmprNzYzbEhraTBZOXk0dTlvY05zamVLRjIxQ090YVQyR3NIbFpIVWpkcUdWd0UxUkZ6MUV2R3lzeHdRdGpIK2FIUzRIdTRReDFQWXRHbGQwWFJmczhZTXkrK3JNU0grS1VoR2NhUVVJTTdxdnpwaitBSGRrVThZaWRGamU4enBybUxxNytYa1BwMC9TSmorTTdyMHpPOTg3U2ZPT1BEWGNpYmdQZU01a3hNYWtVeHFxTWdaazhqRTJTVEZCUEs5ZWtvTndUSGduL0Nma1lId2dQaGM1T3RYc0R5WTkyVGNVcWNHTTJ0RW5UdzdwcGp2OG9wbStGeVZQRHpQbFVpQnRmQ3Y4S0d5RE4wV2FsZEY5TWtmMkxpeEVjRDE2V3RmOWdVeDc2czYzQU1aYTdPcXJNZ2pvdXFlM0FkWHpaZlJlWjJ2azdkRllGa2w5Mmg2UGNZWE0ybFNXc0RMRFRSOW5GMnRhWHJmY1NKQ3RMVEZBNEdkczl0bjJmaEorRFFmaHRYN0tuTnNVMkNqV0NmRWJxRnlVRnR5RDRpN0FLWU93RGJNNko0M1hoVDJIU0FvMjFvRllReXdDRkVRKzhFLzRXY3ZJaFc3OEtpMUJ5WFNrR3VmZ1ZoUnNCTG1MNVNCNXlqRkJQVWhoYVloZUZtRVhzTVVsVEZqNFd3Rm9nREh3V0xIU3ZoSzM0K1lLeWhHS3NoYXlpUmROcnBYaDA1bnJuVHJLcGM3endHSVkwcVM3RXJsbU9hSXdKZkFJN2phUXhwV2h1VGhKYlV3aHE3SmdGclJ6TzJYV3o2NXdINW1Sd3J1alJvS2dlNGpvT3VtTXVFeHlvM3dzYkdIM2htMndwOXdXWmRkazEzNGdpVDl0ekhHdU1QWHRyY3hLaGQxMjI1bysyM1hLUzFNRGkzQ2JlN256Wi9MTVhUMExNZFRGaXJNTENYOElQd2l0Q01wV3Q4V3RoRVdvRjJVUnM4dGtHSTRDVWRiY2lhbWVocjZEc1pNdEI1cndseEsycEVrZkM0RzRPQ05WSkk5b2lyTXVnUzVKMFY4aXhDYURZSEFoLzhCSUI2S0NIRDRBT2V2Z0d3UkNEMXFWVVgyZGtEZTVqRU9sREd0a3ZUR09rVFN4ZE9ZMlRuc2dyUXNrZ2ZydmpzcFlxQUhDVlEycnduQUtRVDJyYWI0aEhhdThMay9KRGd3WjdTTUxHZ3FvTU1ZT0lBRCt6OGw3Nm9NZFN1Tys4L2pkTXBYd3JQTEtJa0ZiVS9EZkN0WlpSelRjMllBUDNSQno3OXdrakN4akFKZEpaTXdhOTBSbmRnVzBNQW9IcTFYaEJmcXIrbXU2YlpzeXAwbTZJTXJOQlE3dzNCZThjb1NtOFBFVEdIS0VoM3B1Q2Q0N1FGRjRlSXVOY1JzZ09UclUvSWc1eDRGaThwdnN4RFRaMy9CTWt1T3Ivcm9qMXhJRGROa2NmYkRuZ0JUaFg1NkdGU1l1L2RqN2k3c0MrcjE1bmVuK3lOYmZScDNpbllSRkt5VDd6ZHdvcHcraXY4bEJ1Z29xeHdSbFNpbEJPQi85TUQ5MnFsNFVuZGkrWE02NnZVdXR5UmtlbklSSHFUTGJzaUtWTlNEdkdKV1VqNHo5aEc2ejdJNVlpeVFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mbGFnLWxvZ28tYjZjMGEzYjUyZGFlMmJmOThmMTk5ZGM2MDIyZGM2ODkucG5nXCI7IiwiY29uc3QgaW1nQVBJID0ge1xyXG4gIGF2YXRhcjogW1xyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9naXJsLnN2ZycsXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2dpcmwyLnN2ZycsXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2dpcmwzLnN2ZycsXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2dpcmw0LnN2ZycsXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2dpcmw1LnN2ZycsXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2dpcmwuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfYm95LnN2ZycsXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2JveTIuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfYm95My5zdmcnLFxyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9ib3k0LnN2ZycsXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2JveTUuc3ZnJ1xyXG4gIF0sXHJcbiAgcGhvdG86IFtcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjc1eDkwMC9lMWFkOTIvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vOTY3eDcyNS9lYTZkNmQvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTI4MHg4NDkvZWE2ZGI3L2ZmZicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzk2N3g3MjUvYmI2ZGVhL2ZmZicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNDh4NzAxLzZkNmZlYS9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC82ZGMwZWEvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vOTcweDcyNS82ZGVhYTYvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MXg3MDAvYjhkZTI3L2ZmZicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTF4NzAxL2RlOWYyNy9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9lZjQ1NDUvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvZmZjNGM0Lzc1NzU3NScsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY0MHg0NDcvZmRmZmM0Lzc1NzU3NScsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEyODB4ODUxL2M0ZmZkNy83NTc1NzUnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4NDI1L2M0Y2RmZi83NTc1NzUnLFxyXG4gIF0sXHJcbiAgY3J5cHRvOiBbXHJcbiAgICAnL2ltYWdlcy9jcnlwdG8vaGV4YS1vcmFuZ2UucG5nJyxcclxuICAgICcvaW1hZ2VzL2NyeXB0by9oZXhhLWdyZWVuLnBuZycsXHJcbiAgICAnL2ltYWdlcy9jcnlwdG8vaGV4YS1vcmFuZ2UucG5nJyxcclxuICAgICcvaW1hZ2VzL2NyeXB0by9oZXhhLWdyZWVuLnBuZycsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzYwMHgzNDEvY2FjMTQyL0ZGRkZGRicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEyODB4Njc3LzIwNDQ3My9GRkZGRkYnLFxyXG4gICAgJy9pbWFnZXMvY3J5cHRvL2NyeXB0b19sYXB0b3AucG5nJ1xyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbWdBUEk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGNyeXB0bzoge1xyXG4gICAgbmFtZTogJ1RyYWRpbmdQbGFuZXQnLFxyXG4gICAgZGVzYzogJ1dpdGggVFAsIG91ciBnb3Zlcm5hbmNlIHRva2VuLCB5b3UgY2FuIGhlbHAgZGVjaWRlIHRoZSBmdXR1cmUgb2YgdGhlIGV4Y2hhbmdlLiBBcyB3ZSBncm93LCB5b3UgZ3JvdyEnLFxyXG4gICAgcHJlZml4OiAndHAnLFxyXG4gICAgbG9nb1RleHQ6ICdUcmFkaW5nUGxhbmV0JyxcclxuICAgIHByb2plY3ROYW1lOiAnVHJhZGluZ1BsYW5ldCcsXHJcbiAgICAvLyB1cmw6ICdsdXhpcmVhY3QudXgtbWFlc3Ryby5jb20vY29pbnonLFxyXG4gICAgaW1nOiAnL3N0YXRpYy9pbWFnZXMvbG9nby5wbmcnLFxyXG4gICAgbm90aWZNc2c6ICdEb25lYyBzaXQgYW1ldCBudWxsYSBzZWQgYXJjdSBwdWx2aW5hciB1bHRyaWNpZXMgY29tbW9kbyBpZCBsaWd1bGEuJyxcclxuICAgIGNvdmVyOiBcIi9zdGF0aWMvaW1hZ2VzL2Vhc3Rlci1iYXR0bGUucG5nXCJcclxuICB9XHJcbn07XHJcbiIsImNvbnN0IGxpbmsgPSB7XHJcbiAgY3J5cHRvOiB7XHJcbiAgICBob21lOiAnLycsXHJcbiAgICBjb250YWN0OiAnL2NvbnRhY3QnLFxyXG4gICAgbG9naW46ICcvbG9naW4nLFxyXG4gICAgcmVnaXN0ZXI6ICcvcmVnaXN0ZXInXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGluaztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGV4dEFsaWduID0gbWFrZVN0eWxlcyh7XHJcbiAgdGV4dENlbnRlcjoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgdGV4dExlZnQ6IHtcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnXHJcbiAgfSxcclxuICB0ZXh0UmlnaHQ6IHtcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0J1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRmxvYXQgPSBtYWtlU3R5bGVzKHtcclxuICBmbG9hdExlZnQ6IHtcclxuICAgIGZsb2F0OiAnbGVmdCdcclxuICB9LFxyXG4gIGZsb2F0UmlnaHQ6IHtcclxuICAgIGZsb2F0OiAncmlnaHQnXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGV4dCA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgIGZvbnRTaXplOiA0OCxcclxuICAgIGxpbmVIZWlnaHQ6ICc3MnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBmb250U2l6ZTogMzgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4J1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMjgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0NHB4J1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlMjoge1xyXG4gICAgZm9udFNpemU6IDM2LFxyXG4gICAgbGluZUhlaWdodDogJzU2cHgnLFxyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4J1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMjQsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICczNnB4JyxcclxuICAgIH1cclxuICB9LFxyXG4gIHN1YnRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICBmb250U2l6ZTogMjgsXHJcbiAgICBsaW5lSGVpZ2h0OiAnNDRweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzZweCcsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgbGluZUhlaWdodDogJzI4cHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHN1YnRpdGxlMjoge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcclxuICAgIGZvbnRTaXplOiAyMixcclxuICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFyYWdyYXBoOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgbGluZUhlaWdodDogJzI0cHgnXHJcbiAgfSxcclxuICBjYXB0aW9uOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgbGluZUhlaWdodDogJzI0cHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgbGluZUhlaWdodDogJzIycHgnLFxyXG4gICAgfSxcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VIaWRkZW4gPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbGdEb3duOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbGcnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZERvd246IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHNtRG93bjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgeHNEb3duOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBsZ1VwOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWRVcDoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHNtVXA6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHVzZTogdHJ1ZVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Td2lwZWFibGVEcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9ab29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93VXB3YXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xhbmd1YWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5nc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVGVsZWdyYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xzeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYW5jaG9yLWxpbmstc21vb3RoLXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlZC1zbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnR1cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wYXJhbGxheFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGwtcGFyYWxsYXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsc3B5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC15b3V0dWJlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=