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
      lineNumber: 150,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.canvasWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.overlay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.decoInner, hide && classes.hide),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx("div", {
    id: "particles_backgrond",
    className: classes.particleBackground,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  })))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fixed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.bannerWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    alignItems: "center",
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "h4",
    className: text.title2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_title')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "p",
    className: text.subtitle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_subtitle'))), __jsx("div", {
    className: classes.btnArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
      lineNumber: 171,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_getstarted')), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "outlined",
    className: classes.invert,
    size: "large",
    fullWidth: isMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_viewmarket'))))))), __jsx("div", {
    className: classes.decoBottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, __jsx("svg", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx("use", {
    xlinkHref: "/images/crypto/deco-banner.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
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
    background: '#000',
    //theme.palette.type === 'dark' ? `linear-gradient(-45deg, ${theme.palette.secondary.dark} 30%, ${theme.palette.primary.dark} 80%)` : `linear-gradient(-45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 80%)`,
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
    backgroundColor: '#000' //theme.palette.type === 'dark' ? fade(theme.palette.primary.dark, 0.7) : fade(theme.palette.primary.main, 0.7),

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
    bgImage: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_9__["default"].crypto[5],
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
  }, __jsx("div", {
    className: classes.desc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: text.title2,
    variant: "h3",
    align: isMobile ? 'center' : 'left',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, t('common:crypto-landing.benefit_title')), __jsx("ul", {
    className: classes.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, "Vestibulum faucibus"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, "Vivamus sit amet interdum elit"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, "Donec dignissim"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, "Quisque lacinia purus"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "Fusce placerat enim et odio molestie"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "Pellentesque ac bibendum tortor"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, "Lorem ipsum dolor sit amet"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, "And more\u2026")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    md: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("figure", {
    className: classes.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_9__["default"].crypto[6],
    alt: "benefit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3___default.a, {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: classes.deco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "585px",
    height: "151px",
    viewBox: "0 0 585 151",
    version: "1.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("linearGradient", {
    x1: "66.8412844%",
    y1: "30.62426%",
    x2: "-21.0581447%",
    y2: "100%",
    id: "benefitLinearGradient-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  }, __jsx("stop", {
    stopColor: theme.palette.primary.main,
    offset: "0%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }), __jsx("stop", {
    stopColor: theme.palette.primary.light,
    offset: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  })), __jsx("linearGradient", {
    x1: "66.8412844%",
    y1: "30.62426%",
    x2: "-21.0581447%",
    y2: "100%",
    id: "benefitLinearGradient-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  }, __jsx("stop", {
    stopColor: theme.palette.secondary.main,
    offset: "0%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }), __jsx("stop", {
    stopColor: theme.palette.secondary.light,
    offset: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }))), __jsx("g", {
    id: "Benefit-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("g", {
    id: "Benefit-2",
    transform: "translate(-143.000000, -88.000000)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  }, __jsx("g", {
    id: "Benefit-3",
    transform: "translate(132.623862, 70.912032)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M15,67.3628158 C15,70.2420142 16.5400613,72.9026456 19.0401691,74.3422448 L45.8435518,89.7767212 C48.3436597,91.2163204 51.4237822,91.2163204 53.9238901,89.7767212 L80.7272727,74.3422448 C83.2273806,72.9026456 84.7674419,70.2420142 84.7674419,67.3628158 L84.7674419,36.4937339 C84.7674419,33.6144064 83.2273806,30.9539041 80.7272727,29.5141758 L53.9238901,14.0796994 C51.4237822,12.6401002 48.3436597,12.6401002 45.8435518,14.0796994 L19.0401691,29.5141758 C16.5400613,30.9539041 15,33.6144064 15,36.4937339 L15,67.3628158 Z",
    id: "BenefitFill-1",
    fill: "url(#benefitLinearGradient-3)",
    transform: "translate(49.883721, 51.928210) rotate(-330.000000) translate(-49.883721, -51.928210)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 27
    }
  }), __jsx("path", {
    d: "M520.561173,148.252603 C520.561173,151.131802 522.101234,153.792433 524.601342,155.232033 L551.404725,170.666509 C553.904833,172.106108 556.984955,172.106108 559.485063,170.666509 L586.288446,155.232033 C588.788553,153.792433 590.328615,151.131802 590.328615,148.252603 L590.328615,117.383522 C590.328615,114.504194 588.788553,111.843692 586.288446,110.403963 L559.485063,94.9694871 C556.984955,93.5298879 553.904833,93.5298879 551.404725,94.9694871 L524.601342,110.403963 C522.101234,111.843692 520.561173,114.504194 520.561173,117.383522 L520.561173,148.252603 Z",
    id: "BenefitFill-2",
    fill: "url(#benefitLinearGradient-2)",
    transform: "translate(555.444894, 132.817998) rotate(-330.000000) translate(-555.444894, -132.817998)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 27
    }
  }))))))))))));
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
    overflow: 'hidden',
    bottom: -40,
    position: 'relative',
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
    height: 540
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
  a: 'Yes, TP Coin is based on the Ethereum blockchain platform and ERC-20 compatible.'
}, {
  q: 'Am I buying on my own Risk?',
  a: 'Yes, you are the only person responsible for your own decisions.'
}, {
  q: 'Where and how do I keep my TP Coin?',
  a: 'You can keep your TP Coin in every wallet, which is ERC-20 compatible and supports the TP Coin.'
}, {
  q: 'Is there a refund rule?',
  a: ' No. It is not refundable.'
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
      lineNumber: 23,
      columnNumber: 5
    }
  }, "Copyright \xA9 2021 TradingPlanet | All rights reserved.");
}

const footer = {
  description: ['Resource', 'Another resource', 'Final resource', 'Privacy policy', 'Terms of use', 'Terms Condition'],
  link: ['#resource', '#another-resource', '#final-resource', '#privacy-policy', '#terms-of-use']
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
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.footer, invert && classes.invert),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h6",
    color: "textPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_15___default.a.crypto.projectName)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "textPrimary",
    className: classes.footerDesc,
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, t('common:crypto-landing.banner_title'))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.quickLinks,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h6",
    className: classes.title,
    color: "textPrimary",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, t('common:crypto-landing.footer_link')), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, footer.description.map((item, index) => __jsx("li", {
    key: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: footer.link[index],
    variant: "subtitle1",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, item)))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.socmed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "https://twitter.com/tradingplanetx",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "TW",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "ion-logo-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "https://t.me/TradingPlanetExchange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "TM",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "ion-logo-telegram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "https://medium.com/@TradingPlanetEX",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "MD",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "ion-logo-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  })))), __jsx(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
      width: '30%',
      marginRight: '3%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.common.white,
      [theme.breakpoints.down('xs')]: {
        width: '47%'
      },
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
    background: `linear-gradient(-130deg, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} -20%, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main} 70%)`,
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
      lineNumber: 35,
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
      lineNumber: 74,
      columnNumber: 5
    }
  }, isMobile && __jsx(_MobileMenu__WEBPACK_IMPORTED_MODULE_16__["default"], {
    open: openDrawer,
    toggleDrawer: handleOpenDrawer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 22
    }
  }), !invert && __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(_MarketPrice__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "header",
    position: "relative",
    id: "header",
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.header, fixed && classes.fixed, invert && classes.invert, openDrawer && classes.openDrawer),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fixed: isDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.headerContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx("nav", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.navMenu, invert && classes.invert),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, isMobile && __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: handleOpenDrawer,
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "hamburger-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.bar, 'hamburger-inner'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, invert ? __jsx("a", {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_17__["default"].crypto.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  })) : __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "#home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }))), isDesktop && __jsx(react_scrollspy__WEBPACK_IMPORTED_MODULE_12___default.a, {
    items: _menu__WEBPACK_IMPORTED_MODULE_20__["default"],
    currentClassName: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, menuList.map(item => __jsx("li", {
    key: item.id.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, invert ? // eslint-disable-next-line
  __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    offset: item.offset || 0,
    href: '/' + item.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
      lineNumber: 130,
      columnNumber: 25
    }
  }, t('common:crypto-landing.header_' + item.name)))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_17__["default"].crypto.contact,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, t('common:crypto-landing.header_contact'))))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  })), __jsx("nav", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.navMenu, classes.navAuth),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    xsDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_17__["default"].crypto.register,
    variant: "contained",
    color: "secondary",
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, t('common:crypto-landing.header_launch'))), __jsx(_Settings__WEBPACK_IMPORTED_MODULE_14__["default"], {
    toggleDark: onToggleDark,
    toggleDir: onToggleDir,
    invert: invert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
            lineNumber: 90,
            columnNumber: 11
          }
        }, __jsx("i", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }
        }, "\u25BC"), percent, "%");

      case 'up':
        return __jsx("span", {
          className: classes.up,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }
        }, __jsx("i", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }
        }, "\u25B2"), percent, "%");

      default:
        return __jsx("span", {
          className: classes.stay,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 11
          }
        }, __jsx("i", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
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
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }), marketList.map((item, index) => __jsx("div", {
    className: classes.item,
    key: index.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.coin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.logo,
    src: item.logo,
    alt: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
  title: 'our target is to be used by millions',
  desc: "On Trading Planet Swap, you can make trades on the Binance Smart Chain. It's on of the largest decentralized network in the world of blockchain, it's impossible to run an exchange without using it.Binance Smart Chain came recently and helped solve the problems of Etherium Blockchain. With faster trades and lower fees, Binance is definitely one to watch out for.",
  date: '12 Jul - 10 Aug'
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
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.sliderWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(react_animated_slider__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: "slider-wrapper",
    previousButton: __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }),
    nextButton: __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, sliderData.map((item, index) => __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.item, index % 2 === 1 ? classes.odd : classes.even),
    key: index.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    lg: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "\xA0"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    lg: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: classes.imgWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: classes.decoration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }), __jsx("figure", {
    className: classes.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: item.image,
    alt: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 27
    }
  }))))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }, item.title)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, item.desc), __jsx("section", {
    className: classes.time,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    component: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
  })), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(_components_Notification__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }))), __jsx(_components_Footer_FooterWithCounter__WEBPACK_IMPORTED_MODULE_14__["default"], {
    toggleDir: onToggleDir,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_components_PageNav__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  })), __jsx("script", {
    src: "/scripts/particles.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "/scripts/stats.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
    notifMsg: 'Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIvQmFubmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFubmVyL2Jhbm5lci1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhbm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JlbmVmaXQvQmVuZWZpdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JlbmVmaXQvYmVuZWZpdC1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JlbmVmaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy9UZXN0aW1vbmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzL2NhcmRzLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlci9Db3VudGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlci9jb3VudGVyLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZhcS9GYXEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GYXEvZmFxLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmFxL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmVhdHVyZS9GZWF0dXJlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmVhdHVyZS9NYWluRmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZlYXR1cmUvTW9yZUZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWF0dXJlL2ZlYXR1cmUtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWF0dXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJXaXRoQ291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXItc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL01hcmtldFByaWNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL01vYmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24tc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlTmF2L1BhZ2VOYXYuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlTmF2L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnZU5hdi9wYWdlbmF2LXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFyYWxsYXgvSGV4YWdvbmFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFyYWxsYXgvcGFyYWxsYXgtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9tb3Rpb24vUHJvbW90aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvbW90aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvbW90aW9uL3Byb21vdGlvbi1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXN0aW1vbmlhbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXN0aW1vbmlhbHMvdGVzdGktc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpdGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGl0bGUvdGl0bGUtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWJlbmVmaXQuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tYm90dG9tLWRhcmsuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tYm90dG9tLWxpZ2h0LnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWZhcS10b3AtZGFyay5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9jcnlwdG8vZGVjby1mYXEtdG9wLWxpZ2h0LnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWxpc3QucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvL2hleGEtbmF2LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ZsYWctbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pbWdBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RleHQvYnJhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RleHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4veW91dHViZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXBlYWJsZURyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvWm9vbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dVcHdhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MYW5ndWFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5nc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmNob3ItbGluay1zbW9vdGgtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYW5pbWF0ZWQtc2xpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY291bnR1cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBhcmFsbGF4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsLXBhcmFsbGF4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsc3B5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC13b3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC15b3V0dWJlXCIiXSwibmFtZXMiOlsiQmFubmVyIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidGV4dCIsInVzZVRleHQiLCJlbGVtIiwidXNlUmVmIiwidCIsInRoZW1lIiwidXNlVGhlbWUiLCJoaWRlIiwic2V0SGlkZSIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudCIsImRvYyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZWxUb3AiLCJvZmZzZXRUb3AiLCJlbEJvdHRvbSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsInNjcm9sbFRvcCIsInVzZUVmZmVjdCIsIndpbmRvdyIsInBhcnRpY2xlc0pTIiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwic2hhcGUiLCJ0eXBlIiwic3Ryb2tlIiwid2lkdGgiLCJwb2x5Z29uIiwibmJfc2lkZXMiLCJvcGFjaXR5IiwicmFuZG9tIiwiYW5pbSIsInNwZWVkIiwib3BhY2l0eV9taW4iLCJzeW5jIiwic2l6ZSIsInNpemVfbWluIiwibGluZV9saW5rZWQiLCJkaXN0YW5jZSIsIm1vdmUiLCJkaXJlY3Rpb24iLCJzdHJhaWdodCIsIm91dF9tb2RlIiwiYm91bmNlIiwiYXR0cmFjdCIsInJvdGF0ZVgiLCJyb3RhdGVZIiwiaW50ZXJhY3Rpdml0eSIsImRldGVjdF9vbiIsImV2ZW50cyIsIm9uaG92ZXIiLCJtb2RlIiwib25jbGljayIsInJlc2l6ZSIsIm1vZGVzIiwiZ3JhYiIsImJ1YmJsZSIsImR1cmF0aW9uIiwicmVwdWxzZSIsInB1c2giLCJwYXJ0aWNsZXNfbmIiLCJyZW1vdmUiLCJyZXRpbmFfZGV0ZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvb3QiLCJjYW52YXNXcmFwIiwib3ZlcmxheSIsImNsc3giLCJkZWNvSW5uZXIiLCJwYXJ0aWNsZUJhY2tncm91bmQiLCJiYW5uZXJXcmFwIiwidGl0bGUyIiwic3VidGl0bGUyIiwiYnRuQXJlYSIsImludmVydCIsImRlY29Cb3R0b20iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiIsImJhbm5lclN0eWxlcyIsIm1ha2VTdHlsZXMiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIm9iamVjdEFydCIsIm1heFdpZHRoIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwidXAiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJib3JkZXJDb2xvciIsImJvdHRvbSIsImZpbGwiLCJkYXJrZW4iLCJwcmltYXJ5IiwiZGFyayIsImxpZ2h0ZW4iLCJtYWluIiwidHJhbnNmb3JtIiwidmlzaWJpbGl0eSIsIkJlbmVmaXQiLCJpc0Rlc2t0b3AiLCJwYXJhbGxheFdyYXAiLCJpbWdBUEkiLCJjcnlwdG8iLCJwYXJhbGxheFByb3BzIiwid3JhcHBlciIsImRlc2MiLCJsaXN0IiwiaW1nIiwiZGVjbyIsImxpZ2h0Iiwic2Vjb25kYXJ5IiwiYmVuZWZpdFN0eWxlcyIsImJsYWNrIiwicGFkZGluZ1RvcCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZyIsImZvbnRXZWlnaHQiLCJ0eXBvZ3JhcGh5IiwiZm9udFdlaWdodE1lZGl1bSIsIm1hcmdpbiIsImxpc3RTdHlsZSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImRlY29MaXN0IiwicmlnaHQiLCJkZWNvQmVuZWZpdCIsIlRlc3RpbW9uaWFsIiwibmFtZSIsInRpdGxlIiwiYXZhdGFyIiwiYWN0aXZlIiwidGVzdGltb25pYWwiLCJwYXBlciIsImNhcHRpb24iLCJzdHJpbmciLCJib29sIiwiZGVmYXVsdFByb3BzIiwiY2FyZHNTdHlsZXMiLCJib3JkZXIiLCJ0cmFuc2l0aW9uIiwidGV4dE92ZXJmbG93IiwiYm94U2hhZG93Iiwic2hhZG93cyIsIkNvdW50ZXIiLCJwbGF5Iiwic2V0UGxheSIsImNvdW50dXAiLCJ2YWwiLCJpc1BsYXkiLCJoYW5kbGVQbGF5Iiwic2V0VGltZW91dCIsImNvdW50ZXJXcmFwIiwic3VidGl0bGUiLCJjYWxsQWN0aW9uIiwicm91dGVMaW5rIiwicmVnaXN0ZXIiLCJidXR0b24iLCJjb3VudGVyU3R5bGVzIiwiZmFxRGF0YSIsInEiLCJhIiwiRmFxIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsIlJlYWN0IiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJldmVudCIsIm5ld0V4cGFuZGVkIiwicGFyYWxsYXgiLCJpbGx1c3RyYXRpb24iLCJhY2NvcmRpb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0b1N0cmluZyIsImhlYWRpbmciLCJpY29uIiwiZGV0YWlsIiwiZmFxU3R5bGVzIiwiZGVjb0ZhcURhcmsiLCJkZWNvRmFxTGlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJSYWRpdXMiLCJyb3VuZGVkIiwibWVkaXVtIiwiRmVhdHVyZSIsIlRyYW5zaXRpb24iLCJmb3J3YXJkUmVmIiwicmVmIiwiTWFpbkZlYXR1cmUiLCJwbGF5ZXIiLCJzZXRQbGF5ZXIiLCJvcGVuUG9wdXAiLCJzZXRPcGVuUG9wdXAiLCJoYW5kbGVDbGlja09wZW4iLCJ5dCIsInVzZSIsInBsYXlWaWRlbyIsImhhbmRsZUNsb3NlIiwicGF1c2VWaWRlbyIsIl9vblJlYWR5IiwidGFyZ2V0Iiwib3B0cyIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwicmVsIiwic2hvd2luZm8iLCJtdXRlIiwib3JpZ2luIiwibWFpbkZlYXR1cmUiLCJ2aWRlb1BvcHVwIiwiY2xvc2VCdG4iLCJ2aWRlbyIsInBsYXlCdG4iLCJmZWF0dXJlV3JhcCIsImNvaW5EYXRhIiwibG9nbyIsInByb2dyZXNzIiwiTW9yZUZlYXR1cmUiLCJ0aGVtZVByb2dyZXNzIiwiY3JlYXRlTXVpVGhlbWUiLCJtb3JlRmVhdHVyZSIsImNlbnRlciIsImZlYXR1cmVTdHlsZXMiLCJtaW5IZWlnaHQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJjb3VudGVyIiwibG93ZXIiLCJoaWdoZXIiLCJmb250V2VpZ2h0Qm9sZCIsImNoYXJ0RGVjbyIsInByb2dyZXNzV3JhcCIsImNvaW4iLCJmbGV4IiwidW5pdCIsInRyYWNrIiwiZGl2aWRlciIsImJhciIsIkNvcHlyaWdodCIsImZvb3RlciIsImRlc2NyaXB0aW9uIiwibGluayIsIm5ld3MiLCJpbWdBcGkiLCJwaG90byIsIkZvb3RlciIsImN0biIsInNldEN0biIsInZhbHVlcyIsInNldFZhbHVlcyIsImxhbmciLCJpMThuIiwibGFuZ3VhZ2UiLCJnZXRFbGVtZW50QnlJZCIsIm9sZFZhbHVlcyIsImNoYW5nZUxhbmd1YWdlIiwidG9nZ2xlRGlyIiwiYnJhbmQiLCJwcm9qZWN0TmFtZSIsImZvb3RlckRlc2MiLCJxdWlja0xpbmtzIiwic29jbWVkIiwiRm9vdGVyV2l0aERlY28iLCJmb290ZXJDb3VudGVyIiwiZGVjb1RvcCIsImZvb3RlclN0eWxlcyIsIndoaXRlU3BhY2UiLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dERlY29yYXRpb24iLCJzZWxlY3RMYW5nIiwiZmFkZSIsImJvcmRlclRvcCIsInNlbGVjdE1lbnUiLCJjYXRlZ29yeSIsImxpc3RUZXh0IiwiYmxvZ0l0ZW0iLCJjcmVhdGVEYXRhIiwidXJsIiwib2Zmc2V0IiwiaWQiLCJMaW5rQnRuIiwidG8iLCJIZWFkZXIiLCJmaXhlZCIsInNldEZpeGVkIiwiZmxhZ0ZpeGVkIiwic2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJuZXdGbGFnRml4ZWQiLCJvblRvZ2dsZURhcmsiLCJvblRvZ2dsZURpciIsIm1lbnVMaXN0IiwibmF2TWVudSIsIm9wZW5EcmF3ZXIiLCJzZXRPcGVuRHJhd2VyIiwiaGFuZGxlT3BlbkRyYXdlciIsImhlYWRlciIsImhlYWRlckNvbnRlbnQiLCJtb2JpbGVNZW51IiwiaG9tZSIsIkFuY2hvckxpbmsiLCJjb250YWN0IiwibmF2QXV0aCIsInN0aWNreSIsIm1hcmtldExpc3QiLCJwcmljZSIsInN0YXR1cyIsInBlcmNlbnQiLCJNYXJrZXRQcmljZSIsInNldHRpbmdzIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheVNwZWVkIiwiY3NzRWFzZSIsInBhdXNlT25Ib3ZlciIsInJlbmRlclBlcmNlbnQiLCJhcnJvdyIsInN0YXkiLCJtYXJrZXQiLCJNb2JpbGVNZW51IiwidG9nZ2xlRHJhd2VyIiwib3BlbiIsIlNpZGVMaXN0IiwibW9iaWxlTmF2IiwibWVudSIsIm1lbnVPcGVuIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJsZW5ndGgiLCJkaXZpZGVyU2lkZWJhciIsInBhcGVyTmF2IiwidGhlbWVUeXBlIiwiU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJTZXR0aW5ncyIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJpc0RhcmsiLCJzZXREYXJrIiwiaGFuZGxlQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2hhbmdlTW9kZSIsInRvZ2dsZURhcmsiLCJoYW5kbGVDaGFuZ2VMYW5nIiwiQm9vbGVhbiIsInVuZGVmaW5lZCIsInNldHRpbmciLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtb2RlTWVudSIsImxhbmdNZW51Iiwib3B0aW9ucyIsImFsbExhbmd1YWdlcyIsImZsYWdJY29uIiwiZmxhZyIsImJhY2tncm91bmRQb3NpdGlvbiIsImhlYWRlclN0eWxlcyIsImZyb20iLCJib3JkZXJMZWZ0Q29sb3IiLCJtYXJnaW5MZWZ0IiwibWluV2lkdGgiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJib3JkZXJMZWZ0Iiwib3V0bGluZSIsImZvbnRTdHlsZSIsIkxvZ28iLCJUcmFuc2l0aW9uVXAiLCJOb3RpZmljYXRpb24iLCJzZXRPcGVuIiwibm90aWZpY2F0aW9uIiwiYWN0aW9uIiwibm90aWZpY2F0aW9uU3R5bGVzIiwiUGFnZU5hdiIsInNob3ciLCJzZXRTaG93IiwiZmxhZ1Nob3ciLCJuZXdGbGFnU2hvdyIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwicGFnZU5hdiIsInNlY3Rpb25OYXYiLCJ0b29sdGlwIiwiZmFiIiwicGFnZW5hdiIsInRyYW5zaXRpb25EZWxheSIsIlBhcmFsbGF4Q2xvdWQiLCJkb3RzV3JhcCIsImlubmVyUGFyYWxsYXgiLCJsYXJnZSIsImhleGFXcmFwIiwicmlnaHRUb3BCYWNrIiwiYmlnIiwiaGV4YUJhY2siLCJyaWdodFRvcEZyb250Iiwic21hbGwiLCJsZWZ0Qm90dG9tQmFjayIsImxlZnRCb3R0b21Gcm9udCIsInBhcmFsbGF4U3R5bGVzIiwiaGV4YVRvcCIsInNsaWRlckRhdGEiLCJpbWFnZSIsImRhdGUiLCJQcm9tb3Rpb24iLCJzbGlkZXJXcmFwIiwib2RkIiwiZXZlbiIsImltZ1dyYXAiLCJkZWNvcmF0aW9uIiwidGltZSIsInByb21vdGlvblN0eWxlcyIsImRlY29Cb3R0b21EYXJrIiwiZGVjb0JvdHRvbUxpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiaGV4YSIsIm1heEhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJvYmplY3RGaXQiLCJmb250RmFtaWx5IiwidGVzdGlDb250ZW50IiwiVGVzdGltb25pYWxzIiwic2xpZGVyIiwidXNlU3R5bGUiLCJzZXRBY3RpdmUiLCJhY3RpdmVUcmFuc2l0aW9uIiwic2V0QWN0aXZlVHJhbnNpdGlvbiIsImFmdGVyQ2hhbmdlIiwiYmVmb3JlQ2hhbmdlIiwibmV4dCIsInNsaWRlU3RhdGUiLCJwYXN0IiwiZnV0dXJlIiwic2xpZGUiLCJjYXJvdXNlbCIsIm5hdiIsInByZXYiLCJzbGlja1ByZXYiLCJzbGlkZUNvbnRlbnQiLCJzbGlja05leHQiLCJwYWdpbmF0aW9uIiwiQXJyYXkiLCJlIiwic2xpY2tHb1RvIiwidGVzdGlTdHlsZXMiLCJhbmltYXRpb25GaWxsTW9kZSIsImFuaW1hdGlvbiIsImFuaW1hdGlvbkRlbGF5IiwiaGV4YUJnIiwiY3Vyc29yIiwiVGl0bGUiLCJhbGlnbiIsInNldEFsaWduIiwiYWxpZ25tZW50IiwidGl0bGVTdHlsZXMiLCJ0aXRsZVNlY29uZGFyeSIsIk5leHRJMThOZXh0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJmYWxsYmFja0xuZyIsImluaXRJbW1lZGlhdGUiLCJsb2NhbGVQYXRoIiwicmVhY3QiLCJ1c2VTdXNwZW5zZSIsImxvY2FsZVN1YnBhdGhzIiwiYXJhIiwiZW5nIiwic2VjdGlvbk1hcmdpbiIsIm1haW5XcmFwIiwic3BhY2VCb3R0b20iLCJzcGFjZVRvcCIsInNwYWNlQm90dG9tU2hvcnQiLCJzcGFjZVRvcFNob3J0IiwiY29udGFpbmVyV3JhcCIsIkxhbmRpbmciLCJpc1RhYmxldCIsIm9ubHkiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJwcmVmaXgiLCJsb2dvVGV4dCIsIm5vdGlmTXNnIiwibG9naW4iLCJ1c2VUZXh0QWxpZ24iLCJ0ZXh0Q2VudGVyIiwidGV4dExlZnQiLCJ0ZXh0UmlnaHQiLCJ1c2VGbG9hdCIsImZsb2F0TGVmdCIsImZsb2F0IiwiZmxvYXRSaWdodCIsImZvbnRXZWlnaHRSZWd1bGFyIiwicGFyYWdyYXBoIiwidXNlSGlkZGVuIiwibGdEb3duIiwibWREb3duIiwic21Eb3duIiwieHNEb3duIiwibGdVcCIsIm1kVXAiLCJzbVVwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFr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RUFBRTtBQURtQjtBQUQxQixHQTFCc0M7QUErQjVDNmIsTUFBSSxFQUFFO0FBQ0osS0FBQ3hoQixLQUFLLENBQUNPLFdBQU4sQ0FBa0JtRyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCZixhQUFPLEVBQUU7QUFEbUI7QUFEMUI7QUEvQnNDLENBQUwsQ0FBTixDQUE1QixDOzs7Ozs7Ozs7OztBQzVGUGdaLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmN1EsS0FBRyxFQUFFO0FBRFUsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gJ34vdGhlbWUvY29tbW9uJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2Jhbm5lci1zdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBCYW5uZXIocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCBlbGVtID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgY29uc3QgW2hpZGUsIHNldEhpZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmICghZWxlbS5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIGNvbnN0IGVsVG9wID0gZWxlbS5jdXJyZW50Lm9mZnNldFRvcCAtIDIwMDtcclxuICAgIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyBlbGVtLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgaWYgKGRvYy5zY3JvbGxUb3AgPiBlbFRvcCAmJiBkb2Muc2Nyb2xsVG9wIDwgZWxCb3R0b20pIHtcclxuICAgICAgc2V0SGlkZShmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRIaWRlKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cucGFydGljbGVzSlMoJ3BhcnRpY2xlc19iYWNrZ3JvbmQnLCB7XHJcbiAgICAgIHBhcnRpY2xlczoge1xyXG4gICAgICAgIG51bWJlcjoge1xyXG4gICAgICAgICAgdmFsdWU6IDEwMCxcclxuICAgICAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICB2YWx1ZTogJyNmZmZmZmYnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgdHlwZTogJ2NpcmNsZScsXHJcbiAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwMCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwb2x5Z29uOiB7XHJcbiAgICAgICAgICAgIG5iX3NpZGVzOiA1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICB2YWx1ZTogMC41LFxyXG4gICAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgICAgIG9wYWNpdHlfbWluOiAwLjEsXHJcbiAgICAgICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICB2YWx1ZTogMyxcclxuICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDQwLFxyXG4gICAgICAgICAgICBzaXplX21pbjogMC4xLFxyXG4gICAgICAgICAgICBzeW5jOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGRpc3RhbmNlOiAxNTAsXHJcbiAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICAgICAgd2lkdGg6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdmU6IHtcclxuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHNwZWVkOiAyLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgb3V0X21vZGU6ICdvdXQnLFxyXG4gICAgICAgICAgYm91bmNlOiBmYWxzZSxcclxuICAgICAgICAgIGF0dHJhY3Q6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgcm90YXRlWDogNjAwLFxyXG4gICAgICAgICAgICByb3RhdGVZOiAxMjAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICAgICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcclxuICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgIG9uaG92ZXI6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RlOiAncmVwdWxzZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvbmNsaWNrOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbW9kZTogJ3B1c2gnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2Rlczoge1xyXG4gICAgICAgICAgZ3JhYjoge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJ1YmJsZToge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgICAgICBzaXplOiA0MCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDgsXHJcbiAgICAgICAgICAgIHNwZWVkOiAzXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVwdWxzZToge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogMjAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMC40XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHVzaDoge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZW1vdmU6IHtcclxuICAgICAgICAgICAgcGFydGljbGVzX25iOiAyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICByZXRpbmFfZGV0ZWN0OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtlbGVtfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FudmFzV3JhcH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub3ZlcmxheX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRlY29Jbm5lciwgaGlkZSAmJiBjbGFzc2VzLmhpZGUpfT5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInBhcnRpY2xlc19iYWNrZ3JvbmRcIiBjbGFzc05hbWU9e2NsYXNzZXMucGFydGljbGVCYWNrZ3JvdW5kfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhbm5lcldyYXB9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNsYXNzTmFtZT17dGV4dC50aXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl90aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl9zdWJ0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bkFyZWF9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIiBmdWxsV2lkdGg9e2lzTW9iaWxlfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5iYW5uZXJfZ2V0c3RhcnRlZCcpfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnZlcnR9IHNpemU9XCJsYXJnZVwiIGZ1bGxXaWR0aD17aXNNb2JpbGV9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl92aWV3bWFya2V0Jyl9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICB7LyogPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5vYmplY3RBcnR9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NyeXB0by9iYW5uZXItYXJ0LnBuZ1wiIGFsdD1cImlsbHVzdHJhdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvQm90dG9tfT5cclxuICAgICAgICA8c3ZnPlxyXG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIvaW1hZ2VzL2NyeXB0by9kZWNvLWJhbm5lci5zdmcjbWFpblwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuQmFubmVyLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShCYW5uZXIpO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgbGlnaHRlbiwgZGFya2VuLCBmYWRlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xyXG5cclxuY29uc3QgYmFubmVyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAvLyBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAvLyAgIGhlaWdodDogNzAwLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgLy8gICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDUpXHJcbiAgICAvLyB9XHJcbiAgfSxcclxuICBjYW52YXNXcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmQ6ICcjMDAwJywgLy90aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAke3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmt9IDMwJSwgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFya30gODAlKWAgOiBgbGluZWFyLWdyYWRpZW50KC00NWRlZywgJHt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSAzMCUsICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IDgwJSlgLFxyXG4gICAgJyY6YWZ0ZXInOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMiknXHJcbiAgICB9XHJcbiAgfSxcclxuICBvdmVybGF5OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnIC8vdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBmYWRlKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjcpIDogZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC43KSxcclxuICB9LFxyXG4gIHBhcnRpY2xlQmFja2dyb3VuZDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAnJiBjYW52YXMnOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBiYW5uZXJXcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMVxyXG4gIH0sXHJcbiAgb2JqZWN0QXJ0OiB7XHJcbiAgICAnJiBpbWcnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIGxlZnQ6IC0xMzAsXHJcbiAgICAgIHRvcDogMjQwLFxyXG4gICAgICBtYXhXaWR0aDogNTYwLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICB0b3A6IDEyMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMjApLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTIpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMjApLFxyXG4gICAgfSxcclxuICAgICcmIGg0Jzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9XHJcbiAgfSxcclxuICBidG5BcmVhOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgJyYgYnV0dG9uJzoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICAgIGhlaWdodDogNTBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW52ZXJ0OiB7XHJcbiAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgfSxcclxuICBkZWNvQm90dG9tOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogLTUwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIHdpZHRoOiAxNDAwLFxyXG4gICAgICBoZWlnaHQ6IDM4MCxcclxuICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssIDAuNikgOiBsaWdodGVuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCAwLjg0KSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDEyMDApXToge1xyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDIsIDEpJ1xyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hsJyldOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWNvSW5uZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gIH0sXHJcbiAgaGlkZToge1xyXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhbm5lclN0eWxlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQmFubmVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBpbWdBUEkgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9iZW5lZml0LXN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIEJlbmVmaXQocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKSk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJykpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhbGxheFdyYXB9PlxyXG4gICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgYmdJbWFnZT17aW1nQVBJLmNyeXB0b1s1XX1cclxuICAgICAgICAgIGJnSW1hZ2VBbHQ9XCJiZW5lZml0XCJcclxuICAgICAgICAgIHN0cmVuZ3RoPXswfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFsbGF4UHJvcHN9IC8+XHJcbiAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDb250YWluZXIgZml4ZWQ9e2lzRGVza3RvcH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2N9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXt0ZXh0LnRpdGxlMn0gdmFyaWFudD1cImgzXCIgYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJlbmVmaXRfdGl0bGUnKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5WZXN0aWJ1bHVtIGZhdWNpYnVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlZpdmFtdXMgc2l0IGFtZXQgaW50ZXJkdW0gZWxpdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5Eb25lYyBkaWduaXNzaW08L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+UXVpc3F1ZSBsYWNpbmlhIHB1cnVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPkZ1c2NlIHBsYWNlcmF0IGVuaW0gZXQgb2RpbyBtb2xlc3RpZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5QZWxsZW50ZXNxdWUgYWMgYmliZW5kdW0gdG9ydG9yPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPkFuZCBtb3Jl4oCmPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17N30+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdBUEkuY3J5cHRvWzZdfSBhbHQ9XCJiZW5lZml0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb30+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1ODVweFwiIGhlaWdodD1cIjE1MXB4XCIgdmlld0JveD1cIjAgMCA1ODUgMTUxXCIgdmVyc2lvbj1cIjEuMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPVwiNjYuODQxMjg0NCVcIiB5MT1cIjMwLjYyNDI2JVwiIHgyPVwiLTIxLjA1ODE0NDclXCIgeTI9XCIxMDAlXCIgaWQ9XCJiZW5lZml0TGluZWFyR3JhZGllbnQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSBvZmZzZXQ9XCIwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0fSBvZmZzZXQ9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9XCI2Ni44NDEyODQ0JVwiIHkxPVwiMzAuNjI0MjYlXCIgeDI9XCItMjEuMDU4MTQ0NyVcIiB5Mj1cIjEwMCVcIiBpZD1cImJlbmVmaXRMaW5lYXJHcmFkaWVudC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbn0gb2Zmc2V0PVwiMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0fSBvZmZzZXQ9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiQmVuZWZpdC0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkJlbmVmaXQtMlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTQzLjAwMDAwMCwgLTg4LjAwMDAwMClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJCZW5lZml0LTNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTMyLjYyMzg2MiwgNzAuOTEyMDMyKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUsNjcuMzYyODE1OCBDMTUsNzAuMjQyMDE0MiAxNi41NDAwNjEzLDcyLjkwMjY0NTYgMTkuMDQwMTY5MSw3NC4zNDIyNDQ4IEw0NS44NDM1NTE4LDg5Ljc3NjcyMTIgQzQ4LjM0MzY1OTcsOTEuMjE2MzIwNCA1MS40MjM3ODIyLDkxLjIxNjMyMDQgNTMuOTIzODkwMSw4OS43NzY3MjEyIEw4MC43MjcyNzI3LDc0LjM0MjI0NDggQzgzLjIyNzM4MDYsNzIuOTAyNjQ1NiA4NC43Njc0NDE5LDcwLjI0MjAxNDIgODQuNzY3NDQxOSw2Ny4zNjI4MTU4IEw4NC43Njc0NDE5LDM2LjQ5MzczMzkgQzg0Ljc2NzQ0MTksMzMuNjE0NDA2NCA4My4yMjczODA2LDMwLjk1MzkwNDEgODAuNzI3MjcyNywyOS41MTQxNzU4IEw1My45MjM4OTAxLDE0LjA3OTY5OTQgQzUxLjQyMzc4MjIsMTIuNjQwMTAwMiA0OC4zNDM2NTk3LDEyLjY0MDEwMDIgNDUuODQzNTUxOCwxNC4wNzk2OTk0IEwxOS4wNDAxNjkxLDI5LjUxNDE3NTggQzE2LjU0MDA2MTMsMzAuOTUzOTA0MSAxNSwzMy42MTQ0MDY0IDE1LDM2LjQ5MzczMzkgTDE1LDY3LjM2MjgxNTggWlwiIGlkPVwiQmVuZWZpdEZpbGwtMVwiIGZpbGw9XCJ1cmwoI2JlbmVmaXRMaW5lYXJHcmFkaWVudC0zKVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0OS44ODM3MjEsIDUxLjkyODIxMCkgcm90YXRlKC0zMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTQ5Ljg4MzcyMSwgLTUxLjkyODIxMClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTIwLjU2MTE3MywxNDguMjUyNjAzIEM1MjAuNTYxMTczLDE1MS4xMzE4MDIgNTIyLjEwMTIzNCwxNTMuNzkyNDMzIDUyNC42MDEzNDIsMTU1LjIzMjAzMyBMNTUxLjQwNDcyNSwxNzAuNjY2NTA5IEM1NTMuOTA0ODMzLDE3Mi4xMDYxMDggNTU2Ljk4NDk1NSwxNzIuMTA2MTA4IDU1OS40ODUwNjMsMTcwLjY2NjUwOSBMNTg2LjI4ODQ0NiwxNTUuMjMyMDMzIEM1ODguNzg4NTUzLDE1My43OTI0MzMgNTkwLjMyODYxNSwxNTEuMTMxODAyIDU5MC4zMjg2MTUsMTQ4LjI1MjYwMyBMNTkwLjMyODYxNSwxMTcuMzgzNTIyIEM1OTAuMzI4NjE1LDExNC41MDQxOTQgNTg4Ljc4ODU1MywxMTEuODQzNjkyIDU4Ni4yODg0NDYsMTEwLjQwMzk2MyBMNTU5LjQ4NTA2Myw5NC45Njk0ODcxIEM1NTYuOTg0OTU1LDkzLjUyOTg4NzkgNTUzLjkwNDgzMyw5My41Mjk4ODc5IDU1MS40MDQ3MjUsOTQuOTY5NDg3MSBMNTI0LjYwMTM0MiwxMTAuNDAzOTYzIEM1MjIuMTAxMjM0LDExMS44NDM2OTIgNTIwLjU2MTE3MywxMTQuNTA0MTk0IDUyMC41NjExNzMsMTE3LjM4MzUyMiBMNTIwLjU2MTE3MywxNDguMjUyNjAzIFpcIiBpZD1cIkJlbmVmaXRGaWxsLTJcIiBmaWxsPVwidXJsKCNiZW5lZml0TGluZWFyR3JhZGllbnQtMilcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTU1LjQ0NDg5NCwgMTMyLjgxNzk5OCkgcm90YXRlKC0zMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTU1NS40NDQ4OTQsIC0xMzIuODE3OTk4KVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5CZW5lZml0LnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShCZW5lZml0KTtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBkZWNvQmVuZWZpdCBmcm9tICd+L3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tYmVuZWZpdC5zdmcnO1xyXG5pbXBvcnQgZGVjb0xpc3QgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWxpc3QucG5nJztcclxuXHJcbmNvbnN0IGJlbmVmaXRTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoOClcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoNClcclxuICAgIH1cclxuICB9LFxyXG4gIGRlc2M6IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAnJiBoNCc6IHtcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtXHJcbiAgICB9XHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDUpLFxyXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICBwYWRkaW5nTGVmdDogMCxcclxuICAgIGZvbnRTaXplOiAxOCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICB9LFxyXG4gICAgJyYgbGknOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzhweCcsXHJcbiAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtkZWNvTGlzdH0pIG5vLXJlcGVhdCAwIDEwcHhgXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAwLCAwKSxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJvdHRvbTogLTQwLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJiBpbWcnOiB7XHJcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgIH1cclxuICB9LFxyXG4gIGRlY286IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiA0MCxcclxuICAgIHJpZ2h0OiA4MCxcclxuICB9LFxyXG4gIHBhcmFsbGF4V3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgcGFyYWxsYXhQcm9wczoge1xyXG4gICAgYmFja2dyb3VuZDogYHVybCgke2RlY29CZW5lZml0fSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJgLFxyXG4gICAgaGVpZ2h0OiA1NDAsXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiZW5lZml0U3R5bGVzO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9CZW5lZml0JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9jYXJkcy1zdHlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbChwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7XHJcbiAgICB0ZXh0LFxyXG4gICAgbmFtZSxcclxuICAgIHRpdGxlLFxyXG4gICAgYXZhdGFyLFxyXG4gICAgYWN0aXZlXHJcbiAgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXN0aW1vbmlhbH0+XHJcbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5wYXBlciwgYWN0aXZlID8gY2xhc3Nlcy5hY3RpdmUgOiAnJyl9PlxyXG4gICAgICAgIDxBdmF0YXIgc3JjPXthdmF0YXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9IGFsdD1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9IGRpc3BsYXk9XCJibG9ja1wiPnt0ZXh0fTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXB0aW9ufT5cclxuICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgey8qICZuYnNwOy0mbmJzcDtcclxuICAgICAgICAgIHt0aXRsZX0gKi99XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuVGVzdGltb25pYWwucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuVGVzdGltb25pYWwuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFjdGl2ZTogZmFsc2VcclxufTtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBjYXJkc1N0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICB0ZXN0aW1vbmlhbDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICB9LFxyXG4gIGFjdGl2ZToge30sXHJcbiAgY2FwdGlvbjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIGZvbnRTaXplOiAxNixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMTRcclxuICAgIH1cclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBoZWlnaHQ6IDI1MCxcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwKSxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2JvcmRlciAwLjRzIGVhc2Utb3V0JyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgMTUpLFxyXG4gICAgfSxcclxuICAgICcmJGFjdGl2ZSc6IHtcclxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59YFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIGRpc3BsYXk6ICctd2Via2l0LWJveCcsXHJcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBoZWlnaHQ6IDgwLFxyXG4gICAgZm9udFNpemU6IDE4LFxyXG4gICAgJy13ZWJraXQtbGluZS1jbGFtcCc6IDMsXHJcbiAgICAnLXdlYmtpdC1ib3gtb3JpZW50JzogJ3ZlcnRpY2FsJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICctd2Via2l0LWxpbmUtY2xhbXAnOiA0LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXZhdGFyOiB7XHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbOF0sXHJcbiAgICB3aWR0aDogODAsXHJcbiAgICBoZWlnaHQ6IDgwLFxyXG4gICAgbWFyZ2luOiAnLTMycHggYXV0byAzMnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgbWFyZ2luOiAnLTk2cHggYXV0byAzMnB4JyxcclxuICAgIH1cclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJkc1N0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQ291bnRVcCBmcm9tICdyZWFjdC1jb3VudHVwJztcclxuaW1wb3J0IFJlYWN0V09XIGZyb20gJ3JlYWN0LXdvdyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IHJvdXRlTGluayBmcm9tICd+L3B1YmxpYy90ZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vY291bnRlci1zdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBDb3VudGVyKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCBbcGxheSwgc2V0UGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY291bnR1cCA9ICh2YWwsIGlzUGxheSkgPT4gKFxyXG4gICAgPHNwYW4+XHJcbiAgICAgIHtpc1BsYXkgPyA8Q291bnRVcCBlbmQ9e3ZhbH0gLz4gOiAwfVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbiAgY29uc3QgaGFuZGxlUGxheSA9ICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyBzZXRQbGF5KHRydWUpOyB9LCAyMDApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdW50ZXJXcmFwfT5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgPFJlYWN0V09XIGFuaW1hdGlvbj1cImZhZGVJblwiIG9mZnNldD17MjAwfSBjYWxsYmFjaz17aGFuZGxlUGxheX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e3RleHQudGl0bGV9PlxyXG4gICAgICAgICAgICB7Y291bnR1cCgyLCBwbGF5KX1cclxuICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIHtjb3VudHVwKDIzNCwgcGxheSl9XHJcbiAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICB7Y291bnR1cCg1NjcsIHBsYXkpfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuZm9vdGVyX2NvdW50ZXInKX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L1JlYWN0V09XPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhbGxBY3Rpb259PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuZm9vdGVyX3dhaXRpbmcnKX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGhyZWY9e3JvdXRlTGluay5jcnlwdG8ucmVnaXN0ZXJ9IGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cImxhcmdlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuZ2V0c3RhcnRlZCcpfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuQ291bnRlci5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoQ291bnRlcik7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgY291bnRlclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBjb3VudGVyV3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgJyYgaDMnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICAnJiBwJzoge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS41KSxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlXHJcbiAgICB9XHJcbiAgfSxcclxuICBjYWxsQWN0aW9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTApLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3VudGVyU3R5bGVzO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db3VudGVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbic7XHJcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnknO1xyXG5pbXBvcnQgQWNjb3JkaW9uRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzJztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCBQYXJhbGxheCBmcm9tICcuLi9QYXJhbGxheC9IZXhhZ29uYWwnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vVGl0bGUnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZmFxLXN0eWxlJztcclxuXHJcbmNvbnN0IGZhcURhdGEgPSBbXHJcbiAge1xyXG4gICAgcTogJ0lzIHRoZSBUUCBjb2luIEVSQy0yMCBjb21wYXRpYmxlPycsXHJcbiAgICBhOiAnWWVzLCBUUCBDb2luIGlzIGJhc2VkIG9uIHRoZSBFdGhlcmV1bSBibG9ja2NoYWluIHBsYXRmb3JtIGFuZCBFUkMtMjAgY29tcGF0aWJsZS4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBxOiAnQW0gSSBidXlpbmcgb24gbXkgb3duIFJpc2s/JyxcclxuICAgIGE6ICdZZXMsIHlvdSBhcmUgdGhlIG9ubHkgcGVyc29uIHJlc3BvbnNpYmxlIGZvciB5b3VyIG93biBkZWNpc2lvbnMuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcTogJ1doZXJlIGFuZCBob3cgZG8gSSBrZWVwIG15IFRQIENvaW4/JyxcclxuICAgIGE6ICdZb3UgY2FuIGtlZXAgeW91ciBUUCBDb2luIGluIGV2ZXJ5IHdhbGxldCwgd2hpY2ggaXMgRVJDLTIwIGNvbXBhdGlibGUgYW5kIHN1cHBvcnRzIHRoZSBUUCBDb2luLidcclxuICB9LFxyXG4gIHtcclxuICAgIHE6ICdJcyB0aGVyZSBhIHJlZnVuZCBydWxlPycsXHJcbiAgICBhOiAnIE5vLiBJdCBpcyBub3QgcmVmdW5kYWJsZS4nXHJcbiAgfVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gRmFxKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpKTtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gcGFuZWwgPT4gKGV2ZW50LCBuZXdFeHBhbmRlZCkgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWQobmV3RXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWxsYXh9PlxyXG4gICAgICAgIDxQYXJhbGxheCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENvbnRhaW5lciBmaXhlZD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Nn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fT5cclxuICAgICAgICAgICAgPFRpdGxlIHRleHQ9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5mYXFfdGl0bGUnKX0gYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9IGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfSBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5mYXFfc3VidGl0bGUnKX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SGlkZGVuIHNtRG93bj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbGx1c3RyYXRpb259PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzLzQ5OC1bQ29udmVydGVkXS5wbmdcIiBhbHQ9XCJpbGx1c3RyYXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY2NvcmRpb259PlxyXG4gICAgICAgICAgICAgIHtmYXFEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19IGtleT17aW5kZXgudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLnBhcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWQgPT09IGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY2xhc3Nlcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogY2xhc3Nlcy5leHBhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PntpdGVtLnF9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEV4cGFuZE1vcmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLmRldGFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuRmFxLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShGYXEpO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgbGlnaHRlbiwgZGFya2VuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xyXG5pbXBvcnQgZGVjb0ZhcUxpZ2h0IGZyb20gJ34vcHVibGljL2ltYWdlcy9jcnlwdG8vZGVjby1mYXEtdG9wLWxpZ2h0LnN2Zyc7XHJcbmltcG9ydCBkZWNvRmFxRGFyayBmcm9tICd+L3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tZmFxLXRvcC1kYXJrLnN2Zyc7XHJcblxyXG5jb25zdCBmYXFTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7dGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkZWNvRmFxRGFyayA6IGRlY29GYXFMaWdodH0pIHRvcCBjZW50ZXIgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssIDAuNikgOiBsaWdodGVuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCAwLjg0KSxcclxuICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoLTIwKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneGwnKV06IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygxNSksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMwLCAwLCAxNSksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMTApLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgJyYgJGljb24nOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMi41KSxcclxuICAgICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSlcclxuICAgIH1cclxuICB9LFxyXG4gIHBhcmFsbGF4OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogLTEzMDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbGVmdDogMFxyXG4gIH0sXHJcbiAgaWxsdXN0cmF0aW9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgICcmIGltZyc6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgbWFyZ2luOiAnMCBhdXRvJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWNjb3JkaW9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMVxyXG4gIH0sXHJcbiAgaXRlbToge1xyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUucm91bmRlZC5tZWRpdW19ICFpbXBvcnRhbnRgLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAyLCAxLCAwKSxcclxuICAgIGZvbnRTaXplOiAxOCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICB9XHJcbiAgfSxcclxuICBleHBhbmRlZDoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAnJiAkaGVhZGluZyc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAwXHJcbiAgICB9LFxyXG4gICAgJyYgJGljb24nOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknXHJcbiAgICB9XHJcbiAgfSxcclxuICBkZXRhaWw6IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAnJiBwJzoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE4XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmYXFTdHlsZXM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ZhcSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluRmVhdHVyZSBmcm9tICcuL01haW5GZWF0dXJlJztcclxuaW1wb3J0IE1vcmVGZWF0dXJlIGZyb20gJy4vTW9yZUZlYXR1cmUnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZmVhdHVyZS1zdHlsZSc7XHJcbmltcG9ydCBQYXJhbGxheCBmcm9tICcuLi9QYXJhbGxheC9IZXhhZ29uYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZSgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8UGFyYWxsYXggLz5cclxuICAgICAgPE1haW5GZWF0dXJlIC8+XHJcbiAgICAgIDxNb3JlRmVhdHVyZSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFpvb20gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvWm9vbSc7XHJcbmltcG9ydCBpbWdBUEkgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB5dCBmcm9tICd+L3lvdXR1YmUnO1xyXG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vVGl0bGUnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZmVhdHVyZS1zdHlsZSc7XHJcblxyXG5jb25zdCBUcmFuc2l0aW9uID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCByZWYpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gIHJldHVybiA8Wm9vbSByZWY9e3JlZn0gey4uLnByb3BzfSAvPjtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBNYWluRmVhdHVyZShwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKSk7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCBbcGxheWVyLCBzZXRQbGF5ZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcGVuUG9wdXAsIHNldE9wZW5Qb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcclxuICAgIGlmICh5dC51c2UpIHtcclxuICAgICAgc2V0T3BlblBvcHVwKHRydWUpO1xyXG4gICAgICBwbGF5ZXJbMF0ucGxheVZpZGVvKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuUG9wdXAoZmFsc2UpO1xyXG4gICAgcGxheWVyWzBdLnBhdXNlVmlkZW8oKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBfb25SZWFkeSA9IGV2ZW50ID0+IHtcclxuICAgIHBsYXllci5wdXNoKGV2ZW50LnRhcmdldCk7XHJcbiAgICBzZXRQbGF5ZXIocGxheWVyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcHRzID0ge1xyXG4gICAgaGVpZ2h0OiAnMzYwJyxcclxuICAgIHdpZHRoOiAnNjQwJyxcclxuICAgIHBsYXllclZhcnM6IHsgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9wbGF5ZXJfcGFyYW1ldGVyc1xyXG4gICAgICBhdXRvcGxheTogMCxcclxuICAgICAgY29udHJvbHM6IDEsXHJcbiAgICAgIHJlbDogMCxcclxuICAgICAgc2hvd2luZm86IDEsXHJcbiAgICAgIG11dGU6IDAsXHJcbiAgICAgIG9yaWdpbjogJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDgnXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5GZWF0dXJlfT5cclxuICAgICAgPERpYWxvZ1xyXG4gICAgICAgIG9wZW49e29wZW5Qb3B1cH1cclxuICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtUcmFuc2l0aW9ufVxyXG4gICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgY2xhc3Nlcz17eyBwYXBlcjogY2xhc3Nlcy52aWRlb1BvcHVwIH19XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXNsaWRlLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYWxlcnQtZGlhbG9nLXNsaWRlLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy1zbGlkZS10aXRsZVwiPlxyXG4gICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tYWluZmVhdHVyZV90aXRsZScpfVxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ0bn0+XHJcbiAgICAgICAgICAgIDxDbG9zZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIHt5dC51c2UgJiYgKFxyXG4gICAgICAgICAgICA8WW91VHViZVxyXG4gICAgICAgICAgICAgIHZpZGVvSWQ9XCJoOTNPZnFha1ZCSVwiXHJcbiAgICAgICAgICAgICAgb25SZWFkeT17X29uUmVhZHl9XHJcbiAgICAgICAgICAgICAgb3B0cz17b3B0c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgICAgPENvbnRhaW5lciBmaXhlZD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Nn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VGl0bGUgdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1haW5mZWF0dXJlX3RpdGxlJyl9IGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBkaXNwbGF5PVwiYmxvY2tcIiBndXR0ZXJCb3R0b20gYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9IGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9PlxyXG4gICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubWFpbmZlYXR1cmVfc3VidGl0bGUnKX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZGVvfT5cclxuICAgICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2ltYWdlcy92aWRlb19jb3Zlci5qcGdcIn0gYWx0PVwiY292ZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5wbGF5QnRufSBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW59PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW9uLWlvcy1wbGF5XCIgLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mZWF0dXJlV3JhcH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlY299PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9pbWFnZXMvaGVscC5zdmdcIn0gYWx0PVwiZGVjb1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5NYWluRmVhdHVyZS5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoTWFpbkZlYXR1cmUpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBSZWFjdFdPVyBmcm9tICdyZWFjdC13b3cnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mZWF0dXJlLXN0eWxlJztcclxuXHJcbmNvbnN0IGNvaW5EYXRhID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdCVEMnLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2J0Yy5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDc1LFxyXG4gICAgY29sb3I6ICcjRkJBNjMwJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RBU0gnLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2Rhc2gucG5nJyxcclxuICAgIHByb2dyZXNzOiA0MCxcclxuICAgIGNvbG9yOiAnIzIxRDNENydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOQU4nLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL25hbi5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDkwLFxyXG4gICAgY29sb3I6ICcjNTQ4Q0NDJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01OUicsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vbW5yLnBuZycsXHJcbiAgICBwcm9ncmVzczogMzUsXHJcbiAgICBjb2xvcjogJyNGRjY2MDInXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSU9UJyxcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9pb3QucG5nJyxcclxuICAgIHByb2dyZXNzOiA4MCxcclxuICAgIGNvbG9yOiAnI0NFMDdENCdcclxuICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBNb3JlRmVhdHVyZShwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xyXG4gIGNvbnN0IFtwbGF5LCBzZXRQbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKSk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJykpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdGhlbWVQcm9ncmVzcyA9IGNvbG9yID0+IGNyZWF0ZU11aVRoZW1lKHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIG1haW46IGNvbG9yXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBoYW5kbGVQbGF5ID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHNldFBsYXkodHJ1ZSk7IH0sIDIwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1vcmVGZWF0dXJlfT5cclxuICAgICAgPENvbnRhaW5lciBmaXhlZD17aXNEZXNrdG9wfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs2fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50ZXh0LCBpc01vYmlsZSAmJiBjbGFzc2VzLmNlbnRlcil9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW9uLWlvcy1sb2NrLW91dGxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlIHRleHQ9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV90aXRsZTEnKX0gYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9IC8+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfSBkaXNwbGF5PVwiYmxvY2tcIiBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfc3VidGl0bGUxJyl9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8UmVhY3RXT1cgYW5pbWF0aW9uPVwiZmFkZUluTGVmdFNob3J0XCIgZGVsYXk9XCIwLjNzXCIgZHVyYXRpb249XCIwLjNzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbGx1c3RyYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY3J5cHRvL2RlY28tcHJvbW8ucG5nXCIgYWx0PVwiZmVhdHVyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICA8L1JlYWN0V09XPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgZGlyZWN0aW9uPXtpc01vYmlsZSA/ICdjb2x1bW4tcmV2ZXJzZScgOiAncm93J31cclxuICAgICAgICAgICAgc3BhY2luZz17Nn1cclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFJlYWN0V09XIGFuaW1hdGlvbj1cImZhZGVJblJpZ2h0U2hvcnRcIiBvZmZzZXQ9ey0xMDB9IGRlbGF5PVwiMC4zc1wiIGR1cmF0aW9uPVwiMC4zc1wiPlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMuaWxsdXN0cmF0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2J1cm50LWNha2UucG5nXCIgYWx0PVwiZmVhdHVyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICA8L1JlYWN0V09XPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50ZXh0LCBpc01vYmlsZSAmJiBjbGFzc2VzLmNlbnRlcil9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW9uLWlvcy1hbmFseXRpY3Mtb3V0bGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGUgdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1vcmVmZWF0dXJlX3RpdGxlMicpfSBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30gLz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9IGRpc3BsYXk9XCJibG9ja1wiIGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV9zdWJ0aXRsZTInKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHNtPXsxMn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50ZXh0LCBjbGFzc2VzLmNlbnRlcil9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW9uLWlvcy1mbGFzaC1vdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfSB0ZXh0PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfdGl0bGUzJyl9IGFsaWduPVwiY2VudGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGRpc3BsYXk9XCJibG9ja1wiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfc3VidGl0bGUzJyl9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RXT1cgYW5pbWF0aW9uPVwiZmFkZUluXCIgb2Zmc2V0PXstMTAwfSBkdXJhdGlvbj1cIjBzXCIgY2FsbGJhY2s9e2hhbmRsZVBsYXl9PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc1dyYXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2luRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29pbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30gc3JjPXtpdGVtLmxvZ299IGFsdD17aXRlbS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudW5pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VVNEPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDs1LjAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlVTRDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7MTUuMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lUHJvZ3Jlc3MoaXRlbS5jb2xvcil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVhclByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXRlcm1pbmF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwbGF5ID8gaXRlbS5wcm9ncmVzcyA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLnRyYWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcjogY2xhc3Nlcy5iYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdFdPVz5cclxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbk1vcmVGZWF0dXJlLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShNb3JlRmVhdHVyZSk7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgZmVhdHVyZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBtYWluRmVhdHVyZToge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdmlkZW86IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDYsIDAsIDIpLFxyXG4gICAgJyYgZmlndXJlJzoge1xyXG4gICAgICBtYXJnaW46IDAsXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgICAnJiBpbWcnOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42MixcclxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB2aWRlb1BvcHVwOiB7XHJcbiAgICB3aWR0aDogNjkwLFxyXG4gICAgbWF4V2lkdGg6ICdub25lJ1xyXG4gIH0sXHJcbiAgZmVhdHVyZVdyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgfSxcclxuICBwbGF5QnRuOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHdpZHRoOiAxNTAsXHJcbiAgICB0b3A6ICc1MCUnLFxyXG4gICAgbGVmdDogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgJyYgc3Bhbic6IHtcclxuICAgICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAxMzAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICR7dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHR9LCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodH0pYCxcclxuICAgICAgICAnLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXAnOiAndGV4dCcsXHJcbiAgICAgICAgJy13ZWJraXQtdGV4dC1maWxsLWNvbG9yJzogJ3RyYW5zcGFyZW50J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjbG9zZUJ0bjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDQsXHJcbiAgICByaWdodDogNCxcclxuICB9LFxyXG4gIGRlY286IHtcclxuICAgIC8vIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbWFyZ2luVG9wOiA4MCxcclxuICAgIGxlZnQ6IDgwLFxyXG4gICAgd2lkdGg6IDQwMCxcclxuICAgICcmIGltZyc6IHtcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGxlZnQnLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY291bnRlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIH0sXHJcbiAgICAnJiA+IConOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG93ZXI6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIwKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlnaGVyOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxMClcclxuICAgIH1cclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGhlaWdodDogMTc0LFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAwKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAzKSxcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQsIDQsIDAsIDApLFxyXG4gICAgICB3aWR0aDogMTc0LFxyXG4gICAgfSxcclxuICAgICcmIHNwYW4nOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgZm9udFNpemU6IDQ4XHJcbiAgICB9LFxyXG4gICAgJyYgaDYnOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGRcclxuICAgIH0sXHJcbiAgICAnJiBwJzoge1xyXG4gICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAxNlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3JlRmVhdHVyZToge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJiBmaWd1cmUnOiB7XHJcbiAgICAgIG1hcmdpbjogMFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2hhcnREZWNvOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiA0MjAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gIH0sXHJcbiAgaXRlbToge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDEwKSxcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyYgPiBzcGFuJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcclxuICAgICAgdG9wOiAtMTAsXHJcbiAgICAgIGxlZnQ6IDcsXHJcbiAgICAgIGZvbnRTaXplOiAzOCxcclxuICAgICAgekluZGV4OiAyLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaWxsdXN0cmF0aW9uOiB7XHJcbiAgICAnJiBpbWcnOiB7XHJcbiAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgbWFyZ2luOiAnMCBhdXRvJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2VudGVyOiB7XHJcbiAgICAnJiBzcGFuJzoge1xyXG4gICAgICBsZWZ0OiAnY2FsYyg1MCUgLSA3cHgpJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJvZ3Jlc3NXcmFwOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgNiksXHJcbiAgICB9LFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgICcmIGxpJzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiBoNSc6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgZm9udFNpemU6IDE2XHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9nbzoge30sXHJcbiAgY29pbjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB3aWR0aDogMTIwLFxyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgJyYgJGxvZ28nOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICBoZWlnaHQ6IDIwXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJvZ3Jlc3M6IHtcclxuICAgIGZsZXg6IDEsXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgICB9XHJcbiAgfSxcclxuICB1bml0OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgJyYgaDYnOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgfSxcclxuICAgICAgJyYgc3Bhbic6IHtcclxuICAgICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdHJhY2s6IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuZGl2aWRlcixcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICBoZWlnaHQ6ICc4cHggIWltcG9ydGFudCcsXHJcbiAgfSxcclxuICBiYXI6IHtcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmVhdHVyZVN0eWxlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRmVhdHVyZSc7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IExhbmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MYW5ndWFnZSc7XHJcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5pbXBvcnQgT3V0bGluZWRJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9Mb2dvJztcclxuaW1wb3J0IGJyYW5kIGZyb20gJ34vcHVibGljL3RleHQvYnJhbmQnO1xyXG5pbXBvcnQgaW1nQXBpIGZyb20gJ34vcHVibGljL2ltYWdlcy9pbWdBUEknO1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZm9vdGVyLXN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgZGlzcGxheT1cImJsb2NrXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgIENvcHlyaWdodCDCqSAyMDIxIFRyYWRpbmdQbGFuZXQgfCBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IGZvb3RlciA9IHtcclxuICBkZXNjcmlwdGlvbjogWydSZXNvdXJjZScsICdBbm90aGVyIHJlc291cmNlJywgJ0ZpbmFsIHJlc291cmNlJywgJ1ByaXZhY3kgcG9saWN5JywgJ1Rlcm1zIG9mIHVzZScsICdUZXJtcyBDb25kaXRpb24nXSxcclxuICBsaW5rOiBbJyNyZXNvdXJjZScsICcjYW5vdGhlci1yZXNvdXJjZScsICcjZmluYWwtcmVzb3VyY2UnLCAnI3ByaXZhY3ktcG9saWN5JywgJyN0ZXJtcy1vZi11c2UnXSxcclxufTtcclxuXHJcbmNvbnN0IG5ld3MgPSBbXHJcbiAge1xyXG4gICAgdGV4dDogJ1NlZCBpbXBlcmRpZXQgZW5pbSBsaWd1bGEgdml0YWUgdml2ZXJyYS4nLFxyXG4gICAgaW1nOiBpbWdBcGkucGhvdG9bNV1cclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdTZWQgaW1wZXJkaWV0IGVuaW0gbGlndWxhIHZpdGFlIHZpdmVycmEuJyxcclxuICAgIGltZzogaW1nQXBpLnBob3RvWzZdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnU2VkIGltcGVyZGlldCBlbmltIGxpZ3VsYSB2aXRhZSB2aXZlcnJhLicsXHJcbiAgICBpbWc6IGltZ0FwaS5waG90b1s3XVxyXG4gIH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcihwcm9wcykge1xyXG4gIGNvbnN0IFtjdG4sIHNldEN0bl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyB0LCBpbnZlcnQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBsYW5nOiAnZW5nJyxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFZhbHVlcyh7IGxhbmc6IGkxOG4ubGFuZ3VhZ2UgfSk7XHJcbiAgICBzZXRDdG4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td3JhcCcpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgc2V0VmFsdWVzKG9sZFZhbHVlcyA9PiAoe1xyXG4gICAgICAuLi5vbGRWYWx1ZXMsXHJcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgIH0pKTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09ICdhcmEnKSB7XHJcbiAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoJ2FyYScpO1xyXG4gICAgICBwcm9wcy50b2dnbGVEaXIoJ3J0bCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBwcm9wcy50b2dnbGVEaXIoJ2x0cicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgZml4ZWQgY29tcG9uZW50PVwiZm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZm9vdGVyLCBpbnZlcnQgJiYgY2xhc3Nlcy5pbnZlcnQpfT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Nn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cclxuICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIHticmFuZC5jcnlwdG8ucHJvamVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJEZXNjfSBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5iYW5uZXJfdGl0bGUnKX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucXVpY2tMaW5rc30+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBjb2xvcj1cInRleHRQcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5mb290ZXJfbGluaycpfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7Zm9vdGVyLmRlc2NyaXB0aW9uLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Zm9vdGVyLmxpbmtbaW5kZXhdfSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIHtuZXdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8QnV0dG9uQmFzZSBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ0l0ZW19IGhyZWY9XCIjXCIga2V5PXtpbmRleC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ30gYWx0PVwidGh1bWJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0VGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzZXMuY2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuZm9vdGVyX25ld3MnKX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBkaXNwbGF5PVwiYmxvY2tcIiBjb21wb25lbnQ9XCJzcGFuXCI+U2VkIGltcGVyZGlldCBlbmltIGxpZ3VsYSB2aXRhZSB2aXZlcnJhLiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgICAgICkpfSAqL31cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNvY21lZH0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vdHJhZGluZ3BsYW5ldHhcIj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJUV1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tbG9nby10d2l0dGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3QubWUvVHJhZGluZ1BsYW5ldEV4Y2hhbmdlXCI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiVE1cIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLWxvZ28tdGVsZWdyYW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcblxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vQFRyYWRpbmdQbGFuZXRFWFwiPlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIk1EXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1sb2dvLW1lZGl1bVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuRm9vdGVyLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGludmVydDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgdG9nZ2xlRGlyOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbkZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaW52ZXJ0OiBmYWxzZSxcclxuICB0b2dnbGVEaXI6ICgpID0+IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoRm9vdGVyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL0NvdW50ZXInO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZm9vdGVyLXN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIEZvb3RlcldpdGhEZWNvKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgdG9nZ2xlRGlyIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyQ291bnRlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlY29Ub3B9PlxyXG4gICAgICAgIDxzdmc+XHJcbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIi9pbWFnZXMvY3J5cHRvL2RlY28tZm9vdGVyLnN2ZyNtYWluXCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8Q291bnRlciAvPiAqL31cclxuICAgICAgPEZvb3RlciB0b2dnbGVEaXI9e3RvZ2dsZURpcn0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkZvb3RlcldpdGhEZWNvLnByb3BUeXBlcyA9IHtcclxuICB0b2dnbGVEaXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcldpdGhEZWNvO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgZmFkZSwgbGlnaHRlbiwgZGFya2VuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xyXG5cclxuY29uc3QgZm9vdGVyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGxpbms6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAxLjUpLFxyXG4gIH0sXHJcbiAgaW52ZXJ0OiB7fSxcclxuICBmb290ZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxMCwgMCksXHJcbiAgICAnJiBwJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiB1bCc6IHtcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgfSxcclxuICAgICcmIGxpJzoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICB3aWR0aDogJzMwJScsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgd2lkdGg6ICc0NyUnXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmJGludmVydCc6IHtcclxuICAgICAgJyYgcCc6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcclxuICAgICAgfSxcclxuICAgICAgJyYgbGkgYSc6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcclxuICAgICAgfSxcclxuICAgICAgJyYgJGxvZ28nOiB7XHJcbiAgICAgICAgJyYgaDYnOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICcmICR0aXRsZSc6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkYmxvZ0l0ZW0nOiB7XHJcbiAgICAgICAgJyYgJGNhdGVnb3J5Jzoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRzZWxlY3RMYW5nJzoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodCxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICB9LFxyXG4gIHF1aWNrTGlua3M6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg1KVxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICB3aWR0aDogNjQsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICB9LFxyXG4gICAgJyYgaDYnOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICAgIGZvbnRTaXplOiAyOCxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH1cclxuICB9LFxyXG4gIGZvb3RlckRlc2M6IHtcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHNvY21lZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgJyYgYnV0dG9uJzoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgd2lkdGg6IDM2LFxyXG4gICAgICBoZWlnaHQ6IDM2LFxyXG4gICAgICAnJiBpJzoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmIGknOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyNFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaWNvbjoge30sXHJcbiAgc2VsZWN0TGFuZzoge1xyXG4gICAgZGlzcGxheTogJ2luaGVyaXQnLFxyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDAsIDQpLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgJyYgJGljb24nOiB7XHJcbiAgICAgIHRvcDogMjksXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgfSxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0LFxyXG4gICAgfSxcclxuICAgICcmIGZpZWxkc2V0Jzoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICBib3hTaGFkb3c6ICcwIDEuNXB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknLFxyXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtmYWRlKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCwgMC41KX0gIWltcG9ydGFudGAsXHJcbiAgICAgICcmIGxlZ2VuZCc6IHtcclxuICAgICAgICB0b3A6IDUsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7ZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsIDAuNSl9YFxyXG4gICAgICB9LFxyXG4gICAgICAnJiArIGRpdiArIGRpdic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZSAhaW1wb3J0YW50JyxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEuNSwgMS41LCAxLjUsIDQpLFxyXG4gICAgICAgIHdpZHRoOiAnY2FsYygxMDAlIC0gMzJweCknLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBzZWxlY3RNZW51OiB7XHJcbiAgICB3aWR0aDogMTYwLFxyXG4gICAgYmFja2dyb3VuZDogJ25vbmUgIWltcG9ydGFudCdcclxuICB9LFxyXG4gIGZvb3RlckNvdW50ZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgtMTMwZGVnLCAke3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayA6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59IC0yMCUsICR7dGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSA3MCUpYCxcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMTApLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDI1KSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hsJyldOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMTUpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVjb1RvcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IC0yMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB3aWR0aDogMTI4MCxcclxuICAgIGhlaWdodDogNDAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIpJ1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgxNDAwKV06IHtcclxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMiwgMSknXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4bCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS40LCAxKScsXHJcbiAgICAgIGxlZnQ6IC0zMDBcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssIDAuNikgOiBsaWdodGVuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCAwLjg0KSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNhdGVnb3J5OiB7fSxcclxuICBsaXN0VGV4dDoge30sXHJcbiAgYmxvZ0l0ZW06IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDApLFxyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgJyYgJGNhdGVnb3J5Jzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0XHJcbiAgICB9LFxyXG4gICAgJyYgJGxpc3RUZXh0Jzoge1xyXG4gICAgICBmbGV4OiAxLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0XHJcbiAgICB9LFxyXG4gICAgJyYgZmlndXJlJzoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEsIDIsIDAsIDApLFxyXG4gICAgICB3aWR0aDogODAsXHJcbiAgICAgIGhlaWdodDogNTYsXHJcbiAgICAgICcmIGltZyc6IHtcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBwJzoge1xyXG4gICAgICBmb250U2l6ZTogMTMsXHJcbiAgICB9XHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyU3R5bGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFuY2hvckxpbmsgZnJvbSAncmVhY3QtYW5jaG9yLWxpbmstc21vb3RoLXNjcm9sbCc7XHJcbmltcG9ydCBTY3JvbGxzcHkgZnJvbSAncmVhY3Qtc2Nyb2xsc3B5JztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vU2V0dGluZ3MnO1xyXG5pbXBvcnQgTWFya2V0UHJpY2UgZnJvbSAnLi9NYXJrZXRQcmljZSc7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vTW9iaWxlTWVudSc7XHJcbmltcG9ydCByb3V0ZUxpbmsgZnJvbSAnfi9wdWJsaWMvdGV4dC9saW5rJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vTG9nbyc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9oZWFkZXItc3R5bGUnO1xyXG5pbXBvcnQgbmF2TWVudSBmcm9tICcuL21lbnUnO1xyXG5cclxubGV0IGNvdW50ZXIgPSAwO1xyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIHVybCwgb2Zmc2V0KSB7XHJcbiAgY291bnRlciArPSAxO1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogY291bnRlcixcclxuICAgIG5hbWUsXHJcbiAgICB1cmwsXHJcbiAgICBvZmZzZXQsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgTGlua0J0biA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlua0J0bihwcm9wcywgcmVmKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICByZXR1cm4gPEFuY2hvckxpbmsgdG89e3Byb3BzLnRvfSB7Li4ucHJvcHN9IGlubmVyUmVmPXtyZWZ9IC8+OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgY29uc3QgW2ZpeGVkLCBzZXRGaXhlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgbGV0IGZsYWdGaXhlZCA9IGZhbHNlO1xyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIGNvbnN0IHNjcm9sbCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLnNjcm9sbFRvcCkgLSAoZG9jLmNsaWVudFRvcCB8fCAwKTtcclxuICAgIGNvbnN0IG5ld0ZsYWdGaXhlZCA9IChzY3JvbGwgPiA4MCk7XHJcbiAgICBpZiAoZmxhZ0ZpeGVkICE9PSBuZXdGbGFnRml4ZWQpIHtcclxuICAgICAgc2V0Rml4ZWQobmV3RmxhZ0ZpeGVkKTtcclxuICAgICAgZmxhZ0ZpeGVkID0gbmV3RmxhZ0ZpeGVkO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IHtcclxuICAgIG9uVG9nZ2xlRGFyayxcclxuICAgIG9uVG9nZ2xlRGlyLFxyXG4gICAgaW52ZXJ0LFxyXG4gICAgdFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpKTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKSk7XHJcbiAgY29uc3QgW21lbnVMaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgIGNyZWF0ZURhdGEobmF2TWVudVswXSwgJyMnICsgbmF2TWVudVswXSwgMTAwKSxcclxuICAgIGNyZWF0ZURhdGEobmF2TWVudVsxXSwgJyMnICsgbmF2TWVudVsxXSksXHJcbiAgICBjcmVhdGVEYXRhKG5hdk1lbnVbMl0sICcjJyArIG5hdk1lbnVbMl0pLFxyXG4gICAgY3JlYXRlRGF0YShuYXZNZW51WzNdLCAnIycgKyBuYXZNZW51WzNdKSxcclxuICBdKTtcclxuICBjb25zdCBbb3BlbkRyYXdlciwgc2V0T3BlbkRyYXdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlT3BlbkRyYXdlciA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EcmF3ZXIoIW9wZW5EcmF3ZXIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgeyBpc01vYmlsZSAmJiAoPE1vYmlsZU1lbnUgb3Blbj17b3BlbkRyYXdlcn0gdG9nZ2xlRHJhd2VyPXtoYW5kbGVPcGVuRHJhd2VyfSAvPikgfVxyXG4gICAgICB7IWludmVydCAmJiAoXHJcbiAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICA8TWFya2V0UHJpY2UgLz5cclxuICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgKX1cclxuICAgICAgPEFwcEJhclxyXG4gICAgICAgIGNvbXBvbmVudD1cImhlYWRlclwiXHJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgaWQ9XCJoZWFkZXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgIGNsYXNzZXMuaGVhZGVyLFxyXG4gICAgICAgICAgZml4ZWQgJiYgY2xhc3Nlcy5maXhlZCxcclxuICAgICAgICAgIGludmVydCAmJiBjbGFzc2VzLmludmVydCxcclxuICAgICAgICAgIG9wZW5EcmF3ZXIgJiYgY2xhc3Nlcy5vcGVuRHJhd2VyXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgZml4ZWQ9e2lzRGVza3RvcH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJDb250ZW50fT5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5uYXZNZW51LCBpbnZlcnQgJiYgY2xhc3Nlcy5pbnZlcnQpfT5cclxuICAgICAgICAgICAgICB7IGlzTW9iaWxlICYmIChcclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW5EcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaGFtYnVyZ2VyIGhhbWJ1cmdlci0tc3BpbicsIGNsYXNzZXMubW9iaWxlTWVudSwgb3BlbkRyYXdlciAmJiAnaXMtYWN0aXZlJyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5iYXIsICdoYW1idXJnZXItaW5uZXInKX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgICB7aW52ZXJ0ID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtyb3V0ZUxpbmsuY3J5cHRvLmhvbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxBbmNob3JMaW5rIGhyZWY9XCIjaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQW5jaG9yTGluaz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2lzRGVza3RvcCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U2Nyb2xsc3B5XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPXtuYXZNZW51fVxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50Q2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge21lbnVMaXN0Lm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkLnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2ludmVydCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb2Zmc2V0PXtpdGVtLm9mZnNldCB8fCAwfSBocmVmPXsnLycgKyBpdGVtLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfJyArIGl0ZW0ubmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtBbmNob3JMaW5rfSBvZmZzZXQ9e2l0ZW0ub2Zmc2V0IHx8IDB9IGhyZWY9e2l0ZW0udXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl8nICsgaXRlbS5uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXtyb3V0ZUxpbmsuY3J5cHRvLmNvbnRhY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfY29udGFjdCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9TY3JvbGxzcHk+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSAvPlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5uYXZNZW51LCBjbGFzc2VzLm5hdkF1dGgpfT5cclxuICAgICAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj17cm91dGVMaW5rLmNyeXB0by5yZWdpc3Rlcn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyX2xhdW5jaCcpfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdzIHRvZ2dsZURhcms9e29uVG9nZ2xlRGFya30gdG9nZ2xlRGlyPXtvblRvZ2dsZURpcn0gaW52ZXJ0PXtpbnZlcnR9IC8+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIG9uVG9nZ2xlRGFyazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvblRvZ2dsZURpcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBpbnZlcnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc3RpY2t5OiBmYWxzZSxcclxuICBpbnZlcnQ6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShIZWFkZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9oZWFkZXItc3R5bGUnO1xyXG5cclxuY29uc3QgbWFya2V0TGlzdCA9IFtcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vYnRjLnBuZycsXHJcbiAgICBuYW1lOiAnQlRDJyxcclxuICAgIHByaWNlOiAxMDIwMCxcclxuICAgIHN0YXR1czogJ3VwJyxcclxuICAgIHBlcmNlbnQ6IDgsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8veHJwLnBuZycsXHJcbiAgICBuYW1lOiAnWFJQJyxcclxuICAgIHByaWNlOiAwLjAwMyxcclxuICAgIHN0YXR1czogJ2Rvd24nLFxyXG4gICAgcGVyY2VudDogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9uZW0ucG5nJyxcclxuICAgIG5hbWU6ICdORU0nLFxyXG4gICAgcHJpY2U6IDAuMDAzLFxyXG4gICAgc3RhdHVzOiAndXAnLFxyXG4gICAgcGVyY2VudDogOCxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9pb3QucG5nJyxcclxuICAgIG5hbWU6ICdJT1RBJyxcclxuICAgIHByaWNlOiAwLjAxMCxcclxuICAgIHN0YXR1czogJ2Rvd24nLFxyXG4gICAgcGVyY2VudDogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9tbnIucG5nJyxcclxuICAgIG5hbWU6ICdNTlInLFxyXG4gICAgcHJpY2U6IDEuNDUsXHJcbiAgICBzdGF0dXM6ICd1cCcsXHJcbiAgICBwZXJjZW50OiA4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2J5Yy5wbmcnLFxyXG4gICAgbmFtZTogJ0JZQycsXHJcbiAgICBwcmljZTogMjIuMzQsXHJcbiAgICBzdGF0dXM6ICdkb3duJyxcclxuICAgIHBlcmNlbnQ6IDMsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vaW90LnBuZycsXHJcbiAgICBuYW1lOiAnSU9UQScsXHJcbiAgICBwcmljZTogMC4wMTAsXHJcbiAgICBzdGF0dXM6ICdkb3duJyxcclxuICAgIHBlcmNlbnQ6IDMsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vbW5yLnBuZycsXHJcbiAgICBuYW1lOiAnTU5SJyxcclxuICAgIHByaWNlOiAxLjQ1LFxyXG4gICAgc3RhdHVzOiAndXAnLFxyXG4gICAgcGVyY2VudDogOCxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9ieWMucG5nJyxcclxuICAgIG5hbWU6ICdCWUMnLFxyXG4gICAgcHJpY2U6IDIyLjM0LFxyXG4gICAgc3RhdHVzOiAnZG93bicsXHJcbiAgICBwZXJjZW50OiAzLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJrZXRQcmljZSgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgcGF1c2VPbkhvdmVyOiB0cnVlXHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJQZXJjZW50ID0gKGFycm93LCBwZXJjZW50KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFycm93KSB7XHJcbiAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZG93bn0+XHJcbiAgICAgICAgICAgIDxpPuKWvDwvaT5cclxuICAgICAgICAgICAge3BlcmNlbnR9XHJcbiAgICAgICAgICAgICVcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy51cH0+XHJcbiAgICAgICAgICAgIDxpPuKWsjwvaT5cclxuICAgICAgICAgICAge3BlcmNlbnR9XHJcbiAgICAgICAgICAgICVcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3RheX0+XHJcbiAgICAgICAgICAgIDxpPi08L2k+XHJcbiAgICAgICAgICAgIHtwZXJjZW50fVxyXG4gICAgICAgICAgICAlXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJrZXR9PlxyXG4gICAgICA8Q2Fyb3VzZWwgey4uLnNldHRpbmdzfT5cclxuICAgICAgICB7bWFya2V0TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2lufT5cclxuICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSBzcmM9e2l0ZW0ubG9nb30gYWx0PXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAmbmJzcDskJm5ic3A7XHJcbiAgICAgICAgICAgICAge2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgJm5ic3A7KFxyXG4gICAgICAgICAgICAgIHtyZW5kZXJQZXJjZW50KGl0ZW0uc3RhdHVzLCBpdGVtLnBlcmNlbnQpfVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBTd2lwZWFibGVEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpcGVhYmxlRHJhd2VyJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCByb3V0ZUxpbmsgZnJvbSAnfi9wdWJsaWMvdGV4dC9saW5rJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2hlYWRlci1zdHlsZSc7XHJcbmltcG9ydCBuYXZNZW51IGZyb20gJy4vbWVudSc7XHJcblxyXG5mdW5jdGlvbiBNb2JpbGVNZW51KHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgdG9nZ2xlRHJhd2VyLCBvcGVuLCB0IH0gPSBwcm9wcztcclxuICBjb25zdCBTaWRlTGlzdCA9ICgpID0+IChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vYmlsZU5hdn1cclxuICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgb25LZXlEb3duPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubWVudSwgb3BlbiAmJiBjbGFzc2VzLm1lbnVPcGVuKX0+XHJcbiAgICAgICAgPExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcbiAgICAgICAgICB7bmF2TWVudS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxyXG4gICAgICAgICAgICAgIGhyZWY9e2AjJHtpdGVtfWB9XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkR1cmF0aW9uOiBpbmRleCAqIDAuMTUgKyAncycgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl8nICsgaXRlbSl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51TGlzdH0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICAgICAgaHJlZj17cm91dGVMaW5rLmNyeXB0by5jb250YWN0fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EdXJhdGlvbjogbmF2TWVudS5sZW5ndGggKiAwLjE1ICsgJ3MnIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl9jb250YWN0Jyl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51TGlzdH0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlclNpZGViYXJ9IC8+XHJcbiAgICAgICAgICB7Wydsb2dpbicsICdyZWdpc3RlciddLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXHJcbiAgICAgICAgICAgICAgaHJlZj17cm91dGVMaW5rLmNyeXB0b1tpdGVtXX1cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4LnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRHVyYXRpb246IG5hdk1lbnUubGVuZ3RoICogMC4xNSArICdzJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyXycgKyBpdGVtKX0gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVMaXN0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3dpcGVhYmxlRHJhd2VyXHJcbiAgICAgIG9wZW49e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgb25PcGVuPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICBwYXBlcjogY2xhc3Nlcy5wYXBlck5hdlxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8U2lkZUxpc3QgLz5cclxuICAgIDwvU3dpcGVhYmxlRHJhd2VyPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5Nb2JpbGVNZW51LnByb3BUeXBlcyA9IHtcclxuICB0b2dnbGVEcmF3ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoTW9iaWxlTWVudSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFBvcG92ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBDaGVja0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vaGVhZGVyLXN0eWxlJztcclxuXHJcbmxldCB0aGVtZVR5cGUgPSAnbGlnaHQnO1xyXG5pZiAodHlwZW9mIFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgdGhlbWVUeXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2x1eGlUaGVtZScpIHx8ICdsaWdodCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNldHRpbmdzKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0biwgc2V0Q3RuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0RhcmssIHNldERhcmtdID0gdXNlU3RhdGUodGhlbWVUeXBlID09PSAnZGFyaycpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZSgpIHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlTW9kZSA9ICgpID0+IHtcclxuICAgIHNldERhcmsoIWlzRGFyayk7XHJcbiAgICBwcm9wcy50b2dnbGVEYXJrKCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlTGFuZyhsYW5nKSB7XHJcbiAgICBpZiAobGFuZyA9PT0gJ2FyYScpIHtcclxuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZSgnYXJhJyk7XHJcbiAgICAgIHByb3BzLnRvZ2dsZURpcigncnRsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGxhbmcpO1xyXG4gICAgICBwcm9wcy50b2dnbGVEaXIoJ2x0cicpO1xyXG4gICAgfVxyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q3RuKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXdyYXAnKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICBjb25zdCBpZCA9IG9wZW4gPyAnc2ltcGxlLXBvcG92ZXInIDogdW5kZWZpbmVkO1xyXG4gIGNvbnN0IHsgaW52ZXJ0LCB0IH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ30+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT17aWR9XHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlNldHRpbmdzXCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgY2xzeChcclxuICAgICAgICAgICAgY2xhc3Nlcy5pY29uLFxyXG4gICAgICAgICAgICBvcGVuICYmIGNsYXNzZXMuYWN0aXZlLFxyXG4gICAgICAgICAgICBpbnZlcnQgJiYgY2xhc3Nlcy5pbnZlcnRcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8U2V0dGluZ3NJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPFBvcG92ZXJcclxuICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY29udGFpbmVyPXtjdG59XHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGVNZW51fVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk1vZGUtbWVudVwiXHJcbiAgICAgICAgICBzdWJoZWFkZXI9eyhcclxuICAgICAgICAgICAgPExpc3RTdWJoZWFkZXIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfdGhlbWUnKX1cclxuICAgICAgICAgICAgPC9MaXN0U3ViaGVhZGVyPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbXBvbmVudD1cImxhYmVsXCIgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfbGlnaHQnKX08L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNEYXJrfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VNb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpc0Rhcmt9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdjaGVja2JveCcgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfZGFyaycpfTwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFuZ01lbnV9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiTGFuZ3VhZ2UtbWVudVwiXHJcbiAgICAgICAgICBzdWJoZWFkZXI9eyhcclxuICAgICAgICAgICAgPExpc3RTdWJoZWFkZXIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfbGFuZ3VhZ2UnKX1cclxuICAgICAgICAgICAgPC9MaXN0U3ViaGVhZGVyPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aTE4bi5vcHRpb25zLmFsbExhbmd1YWdlcyAmJiBpMThuLm9wdGlvbnMuYWxsTGFuZ3VhZ2VzLm1hcCh2YWwgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e3ZhbH1cclxuICAgICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgZGVuc2VcclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VMYW5nKHZhbCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXt2YWx9IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0KCdjb21tb246JyArIHZhbCl9IC8+XHJcbiAgICAgICAgICAgICAge2kxOG4ubGFuZ3VhZ2UgPT09IHZhbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja0ljb24gY29sb3I9XCJwcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuU2V0dGluZ3MucHJvcFR5cGVzID0ge1xyXG4gIHRvZ2dsZURhcms6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgdG9nZ2xlRGlyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaW52ZXJ0OiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcblNldHRpbmdzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpbnZlcnQ6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjb21tb24nLCAnY3J5cHRvLWxhbmRpbmcnXSkoU2V0dGluZ3MpO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgZmFkZSwgZGFya2VuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xyXG5pbXBvcnQgZmxhZyBmcm9tICd+L3B1YmxpYy9pbWFnZXMvZmxhZy1sb2dvLnBuZyc7XHJcblxyXG5jb25zdCBmbGFnSWNvbiA9IHtcclxuICB3aWR0aDogMTYsXHJcbiAgaGVpZ2h0OiAxNixcclxuICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIG1hcmdpblJpZ2h0OiA1LFxyXG4gIHRvcDogMSxcclxuICBiYWNrZ3JvdW5kOiBgdXJsKCR7ZmxhZ30pIG5vLXJlcGVhdCB0cmFuc3BhcmVudGAsXHJcbiAgYmFja2dyb3VuZFNpemU6ICcxNnB4IGF1dG8nLFxyXG4gICcmW2NsYXNzPVwiYXJhXCJdJzoge1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCAzcHgnXHJcbiAgfSxcclxuICAnJltjbGFzcz1cInpob1wiXSc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTEycHgnXHJcbiAgfSxcclxuICAnJltjbGFzcz1cImVuZ1wiXSc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTI4cHgnXHJcbiAgfSxcclxuICAnJltjbGFzcz1cImRldVwiXSc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTQ0cHgnXHJcbiAgfSxcclxuICAnJltjbGFzcz1cImluZFwiXSc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTYycHgnXHJcbiAgfSxcclxuICAnJltjbGFzcz1cInBydFwiXSc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTc5cHgnXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGhlYWRlclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAnQGtleWZyYW1lcyBzbGlkZVJpZ2h0Jzoge1xyXG4gICAgZnJvbToge1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDBweCknXHJcbiAgICB9LFxyXG4gICAgdG86IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgdHJhbnNmb3JtOiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGZpeGVkOiB7fSxcclxuICBpbnZlcnQ6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICcmICRtb2JpbGVNZW51Jzoge1xyXG4gICAgICAnJiAkYmFyJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICAgICAgICAnJjphZnRlciwgJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnlcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvcGVuRHJhd2VyOiB7fSxcclxuICBoZWFkZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxyXG4gICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICB9LFxyXG4gICAgJyYgPiAqJzoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYkZml4ZWQnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGRhcmtlbih0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyaywgMC41KSA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAwLjNzIGVhc2UnLFxyXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgICcmICRsb2dvJzoge1xyXG4gICAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgICAgICB3aWR0aDogNDgsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkaGVhZGVyQ29udGVudCc6IHtcclxuICAgICAgICAnJiBuYXYnOiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkbmF2TWVudSc6IHtcclxuICAgICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyYgYSc6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRkaXZpZGVyJzoge1xyXG4gICAgICAgIGJvcmRlckxlZnRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRtb2JpbGVNZW51Jzoge1xyXG4gICAgICAgICcmICRiYXInOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAgICAgJyY6YWZ0ZXIsICY6YmVmb3JlJzoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiRvcGVuRHJhd2VyJzoge1xyXG4gICAgICB6SW5kZXg6IDE2MDAsXHJcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgICcmJGludmVydCc6IHtcclxuICAgICAgcGFkZGluZ1RvcDogMCxcclxuICAgICAgJyYgJG5hdk1lbnUnOiB7XHJcbiAgICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICAgICAnJiRidXR0b24nOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJyYgJGRpdmlkZXInOiB7XHJcbiAgICAgICAgYm9yZGVyTGVmdENvbG9yOiB0aGVtZS5wYWxldHRlLmRpdmlkZXJcclxuICAgICAgfSxcclxuICAgICAgJyYgJG1vYmlsZU1lbnUnOiB7XHJcbiAgICAgICAgJyYgJGJhcic6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnl9YCxcclxuICAgICAgICAgICcmOmFmdGVyLCAmOmJlZm9yZSc6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeX1gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGVhZGVyQ29udGVudDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgJyYgbmF2Jzoge1xyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCAwKSxcclxuICAgICAgfSxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnXHJcbiAgICB9XHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICAnJiBhJzoge1xyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgICcmIGltZyc6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgd2lkdGg6IDY0LFxyXG4gICAgICBoZWlnaHQ6IDY0LFxyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0OCxcclxuICAgICAgICB3aWR0aDogNDgsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2ZToge30sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxNSksXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSlcclxuICB9LFxyXG4gIG5hdk1lbnU6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgJyYgPiAqJzoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiBhJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMC41LCAxKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDMpLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICBtYXJnaW46IDBcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiB1bCc6IHtcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgICAnJiBsaSc6IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgJyYgYSc6IHtcclxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgICAgICAgIG1pbldpZHRoOiAwLFxyXG4gICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxLjUpLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA2LFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2Utb3V0JyxcclxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGV9YCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICcmW2NsYXNzPVwiYWN0aXZlXCJdJzoge1xyXG4gICAgICAgICAgJyYgYSc6IHtcclxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCAxLjVweCAzMnB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjIyKScsXHJcbiAgICAgICAgICAgIGNvbG9yOiBgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0gIWltcG9ydGFudGAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjaywgMC4zKSA6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuODQpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmF2QXV0aDoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBmbGV4OiAxLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGFuZ01lbnU6IHtcclxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgICcmIGknOiB7XHJcbiAgICAgIC4uLmZsYWdJY29uXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb2RlTWVudToge1xyXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxyXG4gIH0sXHJcbiAgaWNvbjoge30sXHJcbiAgc2V0dGluZzoge1xyXG4gICAgJyYgJGljb24nOiB7XHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfSxcclxuICAgICcmICRhY3RpdmUnOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgzMGRlZyknXHJcbiAgICB9XHJcbiAgfSxcclxuICBiYXI6IHt9LFxyXG4gIG1lbnU6IHt9LFxyXG4gIHBhcGVyTmF2OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssIDAuNSkgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCg2ODApXToge1xyXG4gICAgICB3aWR0aDogMzAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vYmlsZU1lbnU6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgICcmICRiYXInOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGV9YCxcclxuICAgICAgJyY6YWZ0ZXIsICY6YmVmb3JlJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGV9YFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyZbY2xhc3MqPVwiaXMtYWN0aXZlXCJdJzoge1xyXG4gICAgICAnJiAkYmFyJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGV9ICFpbXBvcnRhbnRgLFxyXG4gICAgICAgICcmOmFmdGVyLCAmOmJlZm9yZSc6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGV9ICFpbXBvcnRhbnRgXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9iaWxlTmF2OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAnJiAkbWVudSc6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCA1KSxcclxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgdG9wOiA4MCxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGhlaWdodDogJ2NhbGMoMTAwJSAtIDgwcHgpJyxcclxuICAgICAgJyYgYSc6IHtcclxuICAgICAgICBhbmltYXRpb25OYW1lOiAnJHNsaWRlUmlnaHQnLFxyXG4gICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZSdcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9LFxyXG4gIG1lbnVMaXN0OiB7XHJcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAnJiBzcGFuJzoge1xyXG4gICAgICBmb250U2l6ZTogMjRcclxuICAgIH1cclxuICB9LFxyXG4gIGRpdmlkZXI6IHtcclxuICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuICAgIGJvcmRlckxlZnQ6ICcxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcclxuICAgIGhlaWdodDogMjhcclxuICB9LFxyXG4gIG1hcmtldDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICB6SW5kZXg6IDEyMDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogNDAsXHJcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoKSxcclxuICB9LFxyXG4gIGl0ZW06IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC41LCA0KSxcclxuICAgICcmOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGNvaW46IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICcmICRsb2dvJzoge1xyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgICAnJiBpbWcnOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiBpJzoge1xyXG4gICAgICBmb250U3R5bGU6ICdub3JtYWwnXHJcbiAgICB9XHJcbiAgfSxcclxuICBkb3duOiB7XHJcbiAgICBjb2xvcjogJyNGRjcyNzInXHJcbiAgfSxcclxuICB1cDoge1xyXG4gICAgY29sb3I6ICcjNURENjYyJ1xyXG4gIH0sXHJcbiAgc3RheToge1xyXG4gICAgY29sb3I6ICcjYjJiMmIyJ1xyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlclN0eWxlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVhZGVyJztcclxuIiwiY29uc3QgbWVudSA9IFtcclxuICAncHJvbW90aW9ucycsXHJcbiAgJ2ZlYXR1cmUnLFxyXG4gICdiZW5lZml0JyxcclxuICAndGVzdGltb25pYWxzJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbyhwcm9wcykge1xyXG4gICAgY29uc3QgZmlsbCA9IFwiIzBiMDA1NVwiXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgOTAwIDkwMFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPXtmaWxsfWQ9XCJNMTUxNi44LDY1Ni44NEgxMjA1LjQyVjc3NS4xMmgxMDguMTZ2MzYyLjY3aDBhMTE4LjI5LDExOC4yOSwwLDAsMCwxMTguMjgtMTE4LjI4di0yNDJoOTcuNjRWOTkzLjQyaDBhMTA4LDEwOCwwLDAsMCwxMDgtMTA4di0xMDhoMEExMjAuNjYsMTIwLjY2LDAsMCwwLDE1MTYuOCw2NTYuODRaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC03NTMuNTkgLTQzMS42OClcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD17ZmlsbH1kPVwiTTEzMTgsNTMyLjEyYTM0MCwzNDAsMCwwLDEsMTA3LjM0LTE5LjY3LDY3LjkxLDY3LjkxLDAsMCwwLDEyNS4zMSwyMS4zOSwzMzkuNjMsMzM5LjYzLDAsMCwxLDIwMiwyMDVxMS4yMSwzLjQyLDIuMzUsNi44NC00LjE0LTE1Ljc4LTkuNzEtMzEuNDdhMzgxLjA5LDM4MS4wOSwwLDAsMC0xODUuNDgtMjEyYzAtLjQ3LjA1LS45My4wNi0xLjRBNjcuOSw2Ny45LDAsMCwwLDE0MzQuOCw0NjNhMzgwLjgzLDM4MC44MywwLDAsMC0xNzcuOSwxOC44OWMtMTk5LDcwLjczLTMwMywyODkuNDItMjMyLjMyLDQ4OC40NWEzODQuNjQsMzg0LjY0LDAsMCwwLDI3Ljg1LDYxLDg1LjUzLDg1LjUzLDAsMCwwLDEwNy4xOSwxMjBjOTguNjIsNzEuNzgsMjI5LjgsOTUuMjcsMzUzLjQxLDUxLjM1YTM4MC41OSwzODAuNTksMCwwLDAsMTY1LTExNC42QTMzOC44NywzMzguODcsMCwwLDEsMTU0NiwxMTczLjU4Yy0xMjEuMTcsNDMuMDYtMjUwLjUyLDEzLjMzLTM0MC4zMS02Ni40NWE4NS41Myw4NS41MywwLDAsMC03Ni40NC0xMjAuNjEsODcuOTMsODcuOTMsMCwwLDAtMTAsLjQyYy0yLjgxLTYuNTgtNS40Ni0xMy4yOC03LjktMjAuMTJDMTA0OC4zMSw3ODkuNjksMTE0MC44Nyw1OTUuMDYsMTMxOCw1MzIuMTJaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC03NTMuNTkgLTQzMS42OClcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCBTbmFja2JhckNvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJDb250ZW50JztcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL25vdGlmaWNhdGlvbi1zdHlsZSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcblxyXG5mdW5jdGlvbiBUcmFuc2l0aW9uVXAocHJvcHMpIHtcclxuICByZXR1cm4gPFNsaWRlIHsuLi5wcm9wc30gZGlyZWN0aW9uPVwidXBcIiAvPjtcclxufVxyXG5cclxuZnVuY3Rpb24gTm90aWZpY2F0aW9uKHByb3BzKSB7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8U25hY2tiYXJcclxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17VHJhbnNpdGlvblVwfVxyXG4gICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICByb290OiBjbGFzc2VzLm5vdGlmaWNhdGlvbixcclxuICAgICAgfX1cclxuICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxTbmFja2JhckNvbnRlbnRcclxuICAgICAgICBtZXNzYWdlPXs8VHlwb2dyYXBoeSBpZD1cIm1lc3NhZ2UtaWRcIj57dCgnY29tbW9uOm5vdGlmX21zZycpfTwvVHlwb2dyYXBoeT59XHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgYWN0aW9uOiBjbGFzc2VzLmFjdGlvblxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYWN0aW9uPXsoXHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAge3QoJ2NvbW1vbjphY2NlcHQnKX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L1NuYWNrYmFyPlxyXG4gICk7XHJcbn1cclxuXHJcbk5vdGlmaWNhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NvbW1vbiddKShOb3RpZmljYXRpb24pO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ob3RpZmljYXRpb24nO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IG5vdGlmaWNhdGlvblN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBub3RpZmljYXRpb246IHtcclxuICAgIHdpZHRoOiAnOTUlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgfSxcclxuICAgICcmID4gZGl2Jzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjNDI0MjQyJyxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgNCksXHJcbiAgICAgIH0sXHJcbiAgICAgICcmID4gZGl2OmZpcnN0LWNoaWxkJzoge1xyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWN0aW9uOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbWFyZ2luOiAwXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3RpZmljYXRpb25TdHlsZXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IEFuY2hvckxpbmsgZnJvbSAncmVhY3QtYW5jaG9yLWxpbmstc21vb3RoLXNjcm9sbCc7XHJcbmltcG9ydCBTY3JvbGxzcHkgZnJvbSAncmVhY3Qtc2Nyb2xsc3B5JztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5pbXBvcnQgQXJyb3dJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1Vwd2FyZCc7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgbmF2TWVudSBmcm9tICcuLi9IZWFkZXIvbWVudSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9wYWdlbmF2LXN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEoaWQsIG5hbWUsIHVybCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZCxcclxuICAgIG5hbWUsXHJcbiAgICB1cmwsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgTGlua0J0biA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlua0J0bihwcm9wcywgcmVmKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICByZXR1cm4gPEFuY2hvckxpbmsgdG89e3Byb3BzLnRvfSB7Li4ucHJvcHN9IC8+OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gUGFnZU5hdihwcm9wcykge1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGxldCBmbGFnU2hvdyA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzY3JvbGwgPSAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApIC0gKGRvYy5jbGllbnRUb3AgfHwgMCk7XHJcbiAgICBjb25zdCBuZXdGbGFnU2hvdyA9IChzY3JvbGwgPiA1MDApO1xyXG4gICAgaWYgKGZsYWdTaG93ICE9PSBuZXdGbGFnU2hvdykge1xyXG4gICAgICBzZXRTaG93KG5ld0ZsYWdTaG93KTtcclxuICAgICAgZmxhZ1Nob3cgPSBuZXdGbGFnU2hvdztcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbbWVudUxpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgY3JlYXRlRGF0YSgxLCBuYXZNZW51WzBdLCAnIycgKyBuYXZNZW51WzBdLnJlcGxhY2UoLyAvZywgJ18nKSksXHJcbiAgICBjcmVhdGVEYXRhKDIsIG5hdk1lbnVbMV0sICcjJyArIG5hdk1lbnVbMV0ucmVwbGFjZSgvIC9nLCAnXycpKSxcclxuICAgIGNyZWF0ZURhdGEoMywgbmF2TWVudVsyXSwgJyMnICsgbmF2TWVudVsyXS5yZXBsYWNlKC8gL2csICdfJykpLFxyXG4gICAgY3JlYXRlRGF0YSg0LCBuYXZNZW51WzNdLCAnIycgKyBuYXZNZW51WzNdLnJlcGxhY2UoLyAvZywgJ18nKSksXHJcbiAgXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucGFnZU5hdiwgc2hvdyAmJiBjbGFzc2VzLnNob3cpfT5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk5hdn0+XHJcbiAgICAgICAgPFNjcm9sbHNweVxyXG4gICAgICAgICAgaXRlbXM9e25hdk1lbnV9XHJcbiAgICAgICAgICBjdXJyZW50Q2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IG1lbnVMaXN0Lm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiAzMCAqIChuYXZNZW51Lmxlbmd0aCAtIGl0ZW0uaWQpIH19XHJcbiAgICAgICAgICAgICAgZGF0YS1pZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl8nICsgaXRlbS5uYW1lKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICB0b29sdGlwOiBjbGFzc2VzLnRvb2x0aXBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFuY2hvckxpbmsgaHJlZj17aXRlbS51cmx9IC8+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSkgfVxyXG4gICAgICAgIDwvU2Nyb2xsc3B5PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPFRvb2x0aXBcclxuICAgICAgICB0aXRsZT1cIlRvIFRvcFwiXHJcbiAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGYWJcclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG8gdG9wXCJcclxuICAgICAgICAgIGNvbXBvbmVudD17TGlua0J0bn1cclxuICAgICAgICAgIGhyZWY9XCIjaG9tZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmFifVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBcnJvd0ljb24gLz5cclxuICAgICAgICA8L0ZhYj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuUGFnZU5hdi5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKFBhZ2VOYXYpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYWdlTmF2JztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBwYWdlbmF2ID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHNob3c6IHt9LFxyXG4gIGZhYjoge1xyXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC41KScsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgZWFzZScsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICBoZWlnaHQ6IDQwXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBwYWdlTmF2OiB7XHJcbiAgICB6SW5kZXg6IDIwMCxcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgYm90dG9tOiA0MCxcclxuICAgIHJpZ2h0OiA0MCxcclxuICAgICcmIG5hdic6IHtcclxuICAgICAgdHJhbnNpdGlvbjogJ2hlaWdodCAwLjVzIGVhc2UnLFxyXG4gICAgICB0cmFuc2l0aW9uRGVsYXk6ICcwLjVzJyxcclxuICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcclxuICAgIH0sXHJcbiAgICAnJiRzaG93Jzoge1xyXG4gICAgICAnJiAkZmFiJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgdWwnOiB7XHJcbiAgICAgIG1hcmdpbjogJzAgMCAxNnB4IDIycHgnLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgfSxcclxuICAgICcmIGxpJzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxyXG4gICAgICAnJiBhJzoge1xyXG4gICAgICAgIHdpZHRoOiAxMixcclxuICAgICAgICBoZWlnaHQ6IDEyLFxyXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFya31gLFxyXG4gICAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmW2NsYXNzPVwiYWN0aXZlXCJdIGEnOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHR9YCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgJyYgbGknOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0b3A6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiBuYXYnOiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbkRlbGF5OiAnMHMnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2VuYXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCwgUGFyYWxsYXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9wYXJhbGxheC1zdHlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbGxheENsb3VkKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5wYXJhbGxheFdyYXAsIGNsYXNzZXMuZG90c1dyYXApfT5cclxuICAgICAgPFBhcmFsbGF4UHJvdmlkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5pbm5lclBhcmFsbGF4LCBjbGFzc2VzLmxhcmdlKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXhhV3JhcH0+XHJcbiAgICAgICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgICAgIHk9e1syMCwgMjBdfVxyXG4gICAgICAgICAgICAgIHRhZ091dGVyPVwiZmlndXJlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yaWdodFRvcEJhY2ssIGNsYXNzZXMuYmlnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzLmhleGFCYWNrfT5cclxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiL2ltYWdlcy9jcnlwdG8vcGFyYWxsYXgtYmFjazIuc3ZnI21haW5cIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgICA8UGFyYWxsYXhcclxuICAgICAgICAgICAgICB5PXtbMjAsIDIwXX1cclxuICAgICAgICAgICAgICB0YWdPdXRlcj1cImZpZ3VyZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucmlnaHRUb3BGcm9udCwgY2xhc3Nlcy5zbWFsbCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNTg1cHhcIiBoZWlnaHQ9XCIxNTFweFwiIHZpZXdCb3g9XCIwIDAgNTg1IDE1MVwiIHZlcnNpb249XCIxLjFcIj5cclxuICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE0My4wMDAwMDAsIC04OC4wMDAwMDApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzMi42MjM4NjIsIDcwLjkxMjAzMilcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTIwLjU2MTE3MywxNDguMjUyNjAzIEM1MjAuNTYxMTczLDE1MS4xMzE4MDIgNTIyLjEwMTIzNCwxNTMuNzkyNDMzIDUyNC42MDEzNDIsMTU1LjIzMjAzMyBMNTUxLjQwNDcyNSwxNzAuNjY2NTA5IEM1NTMuOTA0ODMzLDE3Mi4xMDYxMDggNTU2Ljk4NDk1NSwxNzIuMTA2MTA4IDU1OS40ODUwNjMsMTcwLjY2NjUwOSBMNTg2LjI4ODQ0NiwxNTUuMjMyMDMzIEM1ODguNzg4NTUzLDE1My43OTI0MzMgNTkwLjMyODYxNSwxNTEuMTMxODAyIDU5MC4zMjg2MTUsMTQ4LjI1MjYwMyBMNTkwLjMyODYxNSwxMTcuMzgzNTIyIEM1OTAuMzI4NjE1LDExNC41MDQxOTQgNTg4Ljc4ODU1MywxMTEuODQzNjkyIDU4Ni4yODg0NDYsMTEwLjQwMzk2MyBMNTU5LjQ4NTA2Myw5NC45Njk0ODcxIEM1NTYuOTg0OTU1LDkzLjUyOTg4NzkgNTUzLjkwNDgzMyw5My41Mjk4ODc5IDU1MS40MDQ3MjUsOTQuOTY5NDg3MSBMNTI0LjYwMTM0MiwxMTAuNDAzOTYzIEM1MjIuMTAxMjM0LDExMS44NDM2OTIgNTIwLjU2MTE3MywxMTQuNTA0MTk0IDUyMC41NjExNzMsMTE3LjM4MzUyMiBMNTIwLjU2MTE3MywxNDguMjUyNjAzIFpcIiBmaWxsPVwidXJsKCNoZXhhTGluZWFyR3JhZGllbnQtMilcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTU1LjQ0NDg5NCwgMTMyLjgxNzk5OCkgcm90YXRlKC0zMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTU1NS40NDQ4OTQsIC0xMzIuODE3OTk4KVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhleGFXcmFwfT5cclxuICAgICAgICAgICAgPFBhcmFsbGF4XHJcbiAgICAgICAgICAgICAgeT17WzQwLCA0MF19XHJcbiAgICAgICAgICAgICAgdGFnT3V0ZXI9XCJmaWd1cmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxlZnRCb3R0b21CYWNrLCBjbGFzc2VzLmJpZyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXhhQmFja30+XHJcbiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIi9pbWFnZXMvY3J5cHRvL3BhcmFsbGF4LWJhY2szLnN2ZyNtYWluXCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgICAgPFBhcmFsbGF4XHJcbiAgICAgICAgICAgICAgeT17WzQwLCA0MF19XHJcbiAgICAgICAgICAgICAgdGFnT3V0ZXI9XCJmaWd1cmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxlZnRCb3R0b21Gcm9udCwgY2xhc3Nlcy5zbWFsbCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNTg1cHhcIiBoZWlnaHQ9XCIxNTFweFwiIHZpZXdCb3g9XCIwIDAgNTg1IDE1MVwiIHZlcnNpb249XCIxLjFcIj5cclxuICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE0My4wMDAwMDAsIC04OC4wMDAwMDApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzMi42MjM4NjIsIDcwLjkxMjAzMilcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUsNjcuMzYyODE1OCBDMTUsNzAuMjQyMDE0MiAxNi41NDAwNjEzLDcyLjkwMjY0NTYgMTkuMDQwMTY5MSw3NC4zNDIyNDQ4IEw0NS44NDM1NTE4LDg5Ljc3NjcyMTIgQzQ4LjM0MzY1OTcsOTEuMjE2MzIwNCA1MS40MjM3ODIyLDkxLjIxNjMyMDQgNTMuOTIzODkwMSw4OS43NzY3MjEyIEw4MC43MjcyNzI3LDc0LjM0MjI0NDggQzgzLjIyNzM4MDYsNzIuOTAyNjQ1NiA4NC43Njc0NDE5LDcwLjI0MjAxNDIgODQuNzY3NDQxOSw2Ny4zNjI4MTU4IEw4NC43Njc0NDE5LDM2LjQ5MzczMzkgQzg0Ljc2NzQ0MTksMzMuNjE0NDA2NCA4My4yMjczODA2LDMwLjk1MzkwNDEgODAuNzI3MjcyNywyOS41MTQxNzU4IEw1My45MjM4OTAxLDE0LjA3OTY5OTQgQzUxLjQyMzc4MjIsMTIuNjQwMTAwMiA0OC4zNDM2NTk3LDEyLjY0MDEwMDIgNDUuODQzNTUxOCwxNC4wNzk2OTk0IEwxOS4wNDAxNjkxLDI5LjUxNDE3NTggQzE2LjU0MDA2MTMsMzAuOTUzOTA0MSAxNSwzMy42MTQ0MDY0IDE1LDM2LjQ5MzczMzkgTDE1LDY3LjM2MjgxNTggWlwiIGZpbGw9XCJ1cmwoI2hleGFMaW5lYXJHcmFkaWVudC0zKVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0OS44ODM3MjEsIDUxLjkyODIxMCkgcm90YXRlKC0zMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTQ5Ljg4MzcyMSwgLTUxLjkyODIxMClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXhQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBwYXJhbGxheFN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBwYXJhbGxheFdyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIHpJbmRleDogMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbm5lclBhcmFsbGF4OiB7XHJcbiAgICBoZWlnaHQ6IDI1MDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgJyYgZmlndXJlJzoge1xyXG4gICAgICBoZWlnaHQ6IDI1MDAsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB9LFxyXG4gICAgJyYgZmlndXJlID4gZGl2Jzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICByaWdodFRvcEJhY2s6IHtcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgcmlnaHQ6IC0yNDBcclxuICAgIH1cclxuICB9LFxyXG4gIHJpZ2h0VG9wRnJvbnQ6IHtcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgcmlnaHQ6IDUwXHJcbiAgICB9XHJcbiAgfSxcclxuICBsZWZ0Qm90dG9tQmFjazoge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIGxlZnQ6IC0xMTBcclxuICAgIH1cclxuICB9LFxyXG4gIGxlZnRCb3R0b21Gcm9udDoge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIGxlZnQ6IC01MFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGV4YUJhY2s6IHtcclxuICAgIG9wYWNpdHk6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gMC4xMiA6IDAuMDMsXHJcbiAgICBmaWxsOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIHdpZHRoOiA1NTAsXHJcbiAgICBoZWlnaHQ6IDUwMFxyXG4gIH0sXHJcbiAgaGV4YVRvcDoge30sXHJcbiAgaGV4YVdyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgaGVpZ2h0OiA3MDBcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXJhbGxheFN0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgTmV4dEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LWFuaW1hdGVkLXNsaWRlcic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9wcm9tb3Rpb24tc3R5bGUnO1xyXG5pbXBvcnQgaW1nQVBJIGZyb20gJ34vcHVibGljL2ltYWdlcy9pbWdBUEknO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5cclxuY29uc3Qgc2xpZGVyRGF0YSA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2NyeXB0by90cmFkZS5wbmdcIixcclxuICAgIHRpdGxlOiAnb3VyIHRhcmdldCBpcyB0byBiZSB1c2VkIGJ5IG1pbGxpb25zJyxcclxuICAgIGRlc2M6IFwiT24gVHJhZGluZyBQbGFuZXQgU3dhcCwgeW91IGNhbiBtYWtlIHRyYWRlcyBvbiB0aGUgQmluYW5jZSBTbWFydCBDaGFpbi4gSXQncyBvbiBvZiB0aGUgbGFyZ2VzdCBkZWNlbnRyYWxpemVkIG5ldHdvcmsgaW4gdGhlIHdvcmxkIG9mIGJsb2NrY2hhaW4sIGl0J3MgaW1wb3NzaWJsZSB0byBydW4gYW4gZXhjaGFuZ2Ugd2l0aG91dCB1c2luZyBpdC5CaW5hbmNlIFNtYXJ0IENoYWluIGNhbWUgcmVjZW50bHkgYW5kIGhlbHBlZCBzb2x2ZSB0aGUgcHJvYmxlbXMgb2YgRXRoZXJpdW0gQmxvY2tjaGFpbi4gV2l0aCBmYXN0ZXIgdHJhZGVzIGFuZCBsb3dlciBmZWVzLCBCaW5hbmNlIGlzIGRlZmluaXRlbHkgb25lIHRvIHdhdGNoIG91dCBmb3IuXCIsXHJcbiAgICBkYXRlOiAnMTIgSnVsIC0gMTAgQXVnJ1xyXG4gIH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIFByb21vdGlvbihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVyV3JhcH0+XHJcbiAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLXdyYXBwZXJcIlxyXG4gICAgICAgICAgcHJldmlvdXNCdXR0b249eyhcclxuICAgICAgICAgICAgPE5leHRJY29uIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgbmV4dEJ1dHRvbj17KFxyXG4gICAgICAgICAgICA8TmV4dEljb24gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3NsaWRlckRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLml0ZW0sIGluZGV4ICUgMiA9PT0gMSA/IGNsYXNzZXMub2RkIDogY2xhc3Nlcy5ldmVuKX0ga2V5PXtpbmRleC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17N30+XHJcbiAgICAgICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nV3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlY29yYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3ZnPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dXNlIHhsaW5rSHJlZj1cIi9lbi9pbWFnZXMvY3J5cHRvL2RlY28tcHJvbW8ucG5nXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvc3ZnPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gYWx0PXtpdGVtLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkJhc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLnByb21vX3BlcmlvZGUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuUHJvbW90aW9uLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShQcm9tb3Rpb24pO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Qcm9tb3Rpb24nO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgbGlnaHRlbiwgZGFya2VuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xyXG5pbXBvcnQgZGVjb0JvdHRvbUxpZ2h0IGZyb20gJ34vcHVibGljL2ltYWdlcy9jcnlwdG8vZGVjby1ib3R0b20tbGlnaHQuc3ZnJztcclxuaW1wb3J0IGRlY29Cb3R0b21EYXJrIGZyb20gJ34vcHVibGljL2ltYWdlcy9jcnlwdG8vZGVjby1ib3R0b20tZGFyay5zdmcnO1xyXG5cclxuY29uc3QgcHJvbW90aW9uU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGJhY2tncm91bmQ6IGB1cmwoJHt0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGRlY29Cb3R0b21EYXJrIDogZGVjb0JvdHRvbUxpZ2h0fSkgYm90dG9tIGNlbnRlciBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGRhcmtlbih0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyaywgMC42KSA6IGxpZ2h0ZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIDAuODQpLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIDEwMSUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMTAsIDMpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBwYWRkaW5nOiAwXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2xpZGVyV3JhcDoge1xyXG4gICAgJyYgYVtjbGFzcyo9XCJwcmV2aW91c0J1dHRvblwiXSc6IHtcclxuICAgICAgcmlnaHQ6IDEyMCxcclxuICAgICAgbGVmdDogJ2F1dG8nLFxyXG4gICAgICB0b3A6IDIwMCxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgcmlnaHQ6IDIwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBhW2NsYXNzKj1cIm5leHRCdXR0b25cIl0nOiB7XHJcbiAgICAgIGxlZnQ6ICdhdXRvJyxcclxuICAgICAgdG9wOiAxNDAsXHJcbiAgICAgIHJpZ2h0OiAxMjAsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIHJpZ2h0OiAyMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgPiBkaXYnOiB7XHJcbiAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgICBoZWlnaHQ6IDMyMFxyXG4gICAgICB9LFxyXG4gICAgICAnJiA+IGEnOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHpJbmRleDogMTEsXHJcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ25vbmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgICB3aWR0aDogMzUsXHJcbiAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICBsZWZ0OiAzLFxyXG4gICAgICAgICAgdG9wOiAzLFxyXG4gICAgICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFwZXI6IHt9LFxyXG4gIHRpbWU6IHt9LFxyXG4gIGV2ZW46IHtcclxuICAgICcmIGgxJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIH0sXHJcbiAgICAnJiAkZGVjb3JhdGlvbic6IHtcclxuICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb2RkOiB7XHJcbiAgICAnJiBoMSc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgfSxcclxuICAgICcmICRkZWNvcmF0aW9uJzoge1xyXG4gICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGV4YToge30sXHJcbiAgaXRlbToge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDApLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgIG1heEhlaWdodDogNTAwLFxyXG4gICAgekluZGV4OiAxMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICB9LFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICB3aWR0aDogNDUwLFxyXG4gICAgICBoZWlnaHQ6IDQ1MFxyXG4gICAgfSxcclxuICAgICcmIHNlY3Rpb24nOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDEwLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDQwcHgpJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzIGVhc2UnLFxyXG4gICAgfSxcclxuICAgICcmW2NsYXNzKj1cImN1cnJlbnRcIl0nOiB7XHJcbiAgICAgICcmIHNlY3Rpb24nOiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpJyxcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgZmlndXJlJzoge1xyXG4gICAgICBtYXJnaW46IDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0NTBweCcsXHJcbiAgICAgIHdpZHRoOiA0NTAsXHJcbiAgICAgIGhlaWdodDogNDUwLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICB0b3A6IDE3LFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ25vbmUgIWltcG9ydGFudCcsXHJcbiAgICAgICcmIGltZyc6IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXHJcbiAgICAgICAgd2lkdGg6IDM1MCxcclxuICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgLy8gaGVpZ2h0OiAzOTMsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgJHBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg5LCA2LCA5LCAxNiksXHJcbiAgICAgIGJvcmRlclJhZGl1czogMjQsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgICBsZWZ0OiAtODAsXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IDYwLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDgwcHgpJyxcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiBidXR0b24nOiB7XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBoMSc6IHtcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDJweCcsXHJcbiAgICAgICcmIGJ1dHRvbic6IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICBtYXhXaWR0aDogNTAwLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgZm9udEZhbWlseTogJ01vbnRzZXJyYXQnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgZm9udFNpemU6IDI4LFxyXG4gICAgICAgICAgbGluZUhlaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjhweCcsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm9ybWFsJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnMzJweCdcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiBwJzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgJHRpbWUnOiB7XHJcbiAgICAgICcmIGg2Jzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVjb3JhdGlvbjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgekluZGV4OiAyLFxyXG4gICAgb3BhY2l0eTogMC41XHJcbiAgfSxcclxuICBpbWdXcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHRvcDogLTI0LFxyXG4gICAgbGVmdDogLTQwMFxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvbW90aW9uU3R5bGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgaW1nQXBpIGZyb20gJ34vcHVibGljL2ltYWdlcy9pbWdBUEknO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vVGl0bGUnO1xyXG5pbXBvcnQgVGVzdGlDYXJkIGZyb20gJy4uL0NhcmRzL1Rlc3RpbW9uaWFsJztcclxuaW1wb3J0IHVzZVN0eWxlIGZyb20gJy4vdGVzdGktc3R5bGUnO1xyXG5cclxuY29uc3QgdGVzdGlDb250ZW50ID0gW1xyXG4gIHtcclxuICAgIHRleHQ6ICdHcmVhdCB0ZWFtIEdvb2QgY2hhcml0eSB3b3JrJyxcclxuICAgIG5hbWU6ICdcdE1hbGxvcmkgTWNMZWVzJyxcclxuICAgIGF2YXRhcjogaW1nQXBpLmF2YXRhcls2XSxcclxuICAgIHRpdGxlOiAnQ2hpZWYgRGlnaXRhbCBPZmZpY2VyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdpbSB2ZXJ5IGhhcHB5IHdpdGggc3RlbGxhciBpdHMgYWggZ29vZCBjb2luIGFuZCBpdCBoYXZlIGFoIGdvb2QgZnV0dXJlIHZpc2lvbiA9KScsXHJcbiAgICBuYW1lOiAnQXJpdXMnLFxyXG4gICAgYXZhdGFyOiBpbWdBcGkuYXZhdGFyWzddLFxyXG4gICAgdGl0bGU6ICdDaGllZiBEaWdpdGFsIE9mZmljZXInLFxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgdGV4dDogJ0NyYXMgY29udmFsbGlzIGxhY3VzIG9yY2ksIHRyaXN0aXF1ZSB0aW5jaWR1bnQgbWFnbmEgY29uc2VxdWF0IGluLiBJbiB2ZWwgcHVsdmluYXIgZXN0LCBhdCBldWlzbW9kIGxpYmVyby4nLFxyXG4gIC8vICAgbmFtZTogJ0plbmEgRG9lJyxcclxuICAvLyAgIGF2YXRhcjogaW1nQXBpLmF2YXRhclsxXSxcclxuICAvLyAgIHRpdGxlOiAnR3JhcGhpYyBEZXNpZ25lcicsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICB0ZXh0OiAnU2VkIGltcGVyZGlldCBlbmltIGxpZ3VsYSwgdml0YWUgdml2ZXJyYSBqdXN0byBwb3J0YSB2ZWwuJyxcclxuICAvLyAgIG5hbWU6ICdKb3ZlbGluIERvZScsXHJcbiAgLy8gICBhdmF0YXI6IGltZ0FwaS5hdmF0YXJbMl0sXHJcbiAgLy8gICB0aXRsZTogJ1NlbmlvciBHcmFwaGljIERlc2lnbmVyJyxcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRleHQ6ICdDcmFzIGNvbnZhbGxpcyBsYWN1cyBvcmNpLCB0cmlzdGlxdWUgdGluY2lkdW50IG1hZ25hIGNvbnNlcXVhdCBpbi4gSW4gdmVsIHB1bHZpbmFyIGVzdCwgYXQgZXVpc21vZCBsaWJlcm8uJyxcclxuICAvLyAgIG5hbWU6ICdKaWhhbiBEb2UnLFxyXG4gIC8vICAgYXZhdGFyOiBpbWdBcGkuYXZhdGFyWzNdLFxyXG4gIC8vICAgdGl0bGU6ICdDRU8gU29mdHdhcmUgSG91c2UnLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgdGV4dDogJ0NyYXMgY29udmFsbGlzIGxhY3VzIG9yY2ksIHRyaXN0aXF1ZSB0aW5jaWR1bnQgbWFnbmEgY29uc2VxdWF0IGluLiBJbiB2ZWwgcHVsdmluYXIgZXN0LCBhdCBldWlzbW9kIGxpYmVyby4nLFxyXG4gIC8vICAgbmFtZTogJ0pvaG4gRG9lJyxcclxuICAvLyAgIGF2YXRhcjogaW1nQXBpLmF2YXRhcls5XSxcclxuICAvLyAgIHRpdGxlOiAnU2VuaW9yIEdyYXBoaWMgRGVzaWduZXInLFxyXG4gIC8vIH0sXHJcbl07XHJcblxyXG5cclxuZnVuY3Rpb24gVGVzdGltb25pYWxzKHByb3BzKSB7XHJcbiAgY29uc3Qgc2xpZGVyID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJykpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY3RpdmVUcmFuc2l0aW9uLCBzZXRBY3RpdmVUcmFuc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBmYWRlOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxyXG4gICAgYWZ0ZXJDaGFuZ2U6IChjdXJyZW50KSA9PiBzZXRBY3RpdmUoY3VycmVudCksXHJcbiAgICBiZWZvcmVDaGFuZ2U6IChjdXJyZW50LCBuZXh0KSA9PiBzZXRBY3RpdmVUcmFuc2l0aW9uKG5leHQpLFxyXG4gIH07XHJcbiAgY29uc3Qgc2xpZGVTdGF0ZSA9IGluZGV4ID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gYWN0aXZlVHJhbnNpdGlvbiAtIDEgfHwgaW5kZXggPT09IGFjdGl2ZSAtIDEpIHtcclxuICAgICAgcmV0dXJuIGNsYXNzZXMucGFzdDtcclxuICAgIH1cclxuICAgIGlmIChpbmRleCA9PT0gYWN0aXZlVHJhbnNpdGlvbiArIDEgfHwgaW5kZXggPT09IGFjdGl2ZSArIDEpIHtcclxuICAgICAgcmV0dXJuIGNsYXNzZXMuZnV0dXJlO1xyXG4gICAgfVxyXG4gICAgaWYgKGluZGV4ID09PSBhY3RpdmVUcmFuc2l0aW9uIHx8IGluZGV4ID09PSBhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuIGNsYXNzZXMuY3VycmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc2VzLnNsaWRlO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPXtpc0Rlc2t0b3B9PlxyXG4gICAgICAgIDxUaXRsZSB0ZXh0PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcudGVzdGlfdGl0bGUnKX0gYWxpZ249XCJjZW50ZXJcIiAvPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLnRlc3RpX3N1YnRpdGxlJyl9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezF9IHhzPXsxMn0gLz5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEwfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbGlkZXJXcmFwfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5uYXYsIGNsYXNzZXMucHJldil9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlci5jdXJyZW50LnNsaWNrUHJldigpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24taW9zLWFycm93LWJhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgcmVmPXtzbGlkZXJ9IHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgIHt0ZXN0aUNvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleC50b1N0cmluZygpfSBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5pdGVtLCBzbGlkZVN0YXRlKGluZGV4KSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlc3RpQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtpdGVtLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2luZGV4ID09PSBhY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubmF2LCBjbGFzc2VzLm5leHQpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZXIuY3VycmVudC5zbGlja05leHQoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLWlvcy1hcnJvdy1mb3J3YXJkXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb259PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHRlc3RpQ29udGVudC5sZW5ndGgpXS5tYXAoKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4LnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2luZGV4ID09PSBhY3RpdmUgPyBjbGFzc2VzLmFjdGl2ZSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNsaWRlci5jdXJyZW50LnNsaWNrR29UbyhpbmRleCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuVGVzdGltb25pYWxzLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShUZXN0aW1vbmlhbHMpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UZXN0aW1vbmlhbHMnO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgZmFkZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcclxuaW1wb3J0IGhleGFCZyBmcm9tICd+L3B1YmxpYy9pbWFnZXMvY3J5cHRvL2hleGEtbmF2LnBuZyc7XHJcblxyXG5jb25zdCB0ZXN0aVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIwKVxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiAyMDBcclxuICAgIH1cclxuICB9LFxyXG4gIGNhcm91c2VsOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgIH0sXHJcbiAgICAnJiA+IGRpdic6IHtcclxuICAgICAgekluZGV4OiAxMFxyXG4gICAgfSxcclxuICAgICcmOmFmdGVyLCAmOmJlZm9yZSc6IHtcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEyLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgaGVpZ2h0OiAxNTAsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgfSxcclxuICAgICcmOmFmdGVyJzoge1xyXG4gICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgIGJvdHRvbTogNSxcclxuICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAwKSdcclxuICAgIH0sXHJcbiAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgYm90dG9tOiAtMTUsXHJcbiAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgMCknXHJcbiAgICB9LFxyXG4gICAgJyYgPiBidXR0b24nOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBpdGVtOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDcsIDEsIDApLFxyXG4gICAgfSxcclxuICAgICcmOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHNsaWRlQ29udGVudDoge1xyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICcxcycsXHJcbiAgICBhbmltYXRpb25GaWxsTW9kZTogJ2JvdGgnXHJcbiAgfSxcclxuICBzbGlkZToge1xyXG4gICAgYmFja2dyb3VuZDogJ25vbmUnXHJcbiAgfSxcclxuICBmdXR1cmU6IHtcclxuICAgICcmICRzbGlkZUNvbnRlbnQnOiB7XHJcbiAgICAgIGFuaW1hdGlvbjogJ2ZhZGVJblVwJyxcclxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxcycsXHJcbiAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC4xcycsXHJcbiAgICAgIGFuaW1hdGlvbkZpbGxNb2RlOiAnYm90aCdcclxuICAgIH1cclxuICB9LFxyXG4gIHBhc3Q6IHtcclxuICAgICcmICRzbGlkZUNvbnRlbnQnOiB7XHJcbiAgICAgIGFuaW1hdGlvbjogJ2ZhZGVPdXRVcCcsXHJcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMXMnLFxyXG4gICAgICBhbmltYXRpb25GaWxsTW9kZTogJ2JvdGgnXHJcbiAgICB9XHJcbiAgfSxcclxuICBuYXY6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICB6SW5kZXg6IDEyLFxyXG4gICAgdG9wOiAnNDglJyxcclxuICAgIHdpZHRoOiA1MCxcclxuICAgIGhlaWdodDogNjQsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgbWluV2lkdGg6IDAsXHJcbiAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7aGV4YUJnfSkgbm8tcmVwZWF0IGNlbnRlcmAsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXHJcbiAgICB0cmFuc2Zvcm06IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ3JvdGF0ZSgwZGVnKScsXHJcbiAgICAnJiBpJzoge1xyXG4gICAgICBjb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LCAwLjMzKSxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIGZvbnRTaXplOiAyNixcclxuICAgIH0sXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgb3V0bGluZTogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJldjoge1xyXG4gICAgbGVmdDogNTYsXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIHJpZ2h0OiAyLFxyXG4gICAgICBtYXJnaW5Ub3A6IDNcclxuICAgIH1cclxuICB9LFxyXG4gIG5leHQ6IHtcclxuICAgIHJpZ2h0OiA1NixcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgbGVmdDogMixcclxuICAgICAgbWFyZ2luVG9wOiAzXHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmU6IHt9LFxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIHpJbmRleDogMjIsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmIHVsJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKC0xMiksXHJcbiAgICAgICcmIGxpJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIHdpZHRoOiAxNSxcclxuICAgICAgICBoZWlnaHQ6IDE1LFxyXG4gICAgICAgIG1hcmdpbjogJzAgNXB4JyxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufWAsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgZWFzZS1vdXQnLFxyXG4gICAgICAgICcmJGFjdGl2ZSc6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyYgYnV0dG9uJzoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3RpU3R5bGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi90aXRsZS1zdHlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaXRsZShwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7XHJcbiAgICB0ZXh0LFxyXG4gICAgYWxpZ24sXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHNldEFsaWduID0gYWxpZ25tZW50ID0+IHtcclxuICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIHJldHVybiBjbGFzc2VzLmxlZnQ7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5yaWdodDtcclxuICAgICAgY2FzZSAnY2VudGVyJzpcclxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5jZW50ZXI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMubGVmdDtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRpdGxlLCBzZXRBbGlnbihhbGlnbikpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb30+XHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjM4cHhcIiBoZWlnaHQ9XCI0M3B4XCIgdmlld0JveD1cIjAgMCAzOCA0M1wiIHZlcnNpb249XCIxLjFcIj5cclxuICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTAsMzAuMDI0NTEyNiBDMCwzMS42MTQ2OTAxIDAuODM4ODIwMDM3LDMzLjA4NDE1MzQgMi4yMDA1NDU0NSwzMy44NzkyNDIyIEwxNi43OTk0NTQ1LDQyLjQwMzY4MzQgQzE4LjE2MTE4LDQzLjE5ODc3MjIgMTkuODM4ODIsNDMuMTk4NzcyMiAyMS4yMDA1NDU1LDQyLjQwMzY4MzQgTDM1Ljc5OTQ1NDUsMzMuODc5MjQyMiBDMzcuMTYxMTgsMzMuMDg0MTUzNCAzOCwzMS42MTQ2OTAxIDM4LDMwLjAyNDUxMjYgTDM4LDEyLjk3NTU1ODcgQzM4LDExLjM4NTMwOTkgMzcuMTYxMTgsOS45MTU5MTc5MyAzNS43OTk0NTQ1LDkuMTIwNzU3ODQgTDIxLjIwMDU0NTUsMC41OTYzMTY1ODggQzE5LjgzODgyLC0wLjE5ODc3MjE5NiAxOC4xNjExOCwtMC4xOTg3NzIxOTYgMTYuNzk5NDU0NSwwLjU5NjMxNjU4OCBMMi4yMDA1NDU0NSw5LjEyMDc1Nzg0IEMwLjgzODgyMDAzNyw5LjkxNTkxNzkzIDAsMTEuMzg1MzA5OSAwLDEyLjk3NTU1ODcgTDAsMzAuMDI0NTEyNiBaXCIgZmlsbD1cInVybCgjdGl0bGVMaW5lYXJHcmFkaWVudC0xKVwiIC8+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuVGl0bGUucHJvcFR5cGVzID0ge1xyXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcblRpdGxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2xlZnQnLFxyXG59O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UaXRsZSc7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdGl0bGVTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbGVmdDoge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAnJjphZnRlcic6IHtcclxuICAgICAgbGVmdDogMCxcclxuICAgIH1cclxuICB9LFxyXG4gIHJpZ2h0OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICAnJjphZnRlcic6IHtcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjZW50ZXI6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAnJjphZnRlcic6IHtcclxuICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IC0zNSxcclxuICAgIH1cclxuICB9LFxyXG4gIGRlY286IHtcclxuICAgICcmIHN2Zyc6IHt9XHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgJyYgaDQnOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAzMixcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDhweCdcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDI4LFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0NHB4JyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlU2Vjb25kYXJ5OiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJiBoNCc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgbGluZUhlaWdodDogJzU2cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ4cHgnXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAyOCxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDRweCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBzdHJvbmcnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIH1cclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRpdGxlU3R5bGVzO1xyXG4iLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHQ7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgZGVmYXVsdExhbmd1YWdlOiAnZW5nJyxcclxuICBvdGhlckxhbmd1YWdlczogWydhcmEnXSxcclxuICBmYWxsYmFja0xuZzogJ2VuZycsXHJcbiAgaW5pdEltbWVkaWF0ZTogZmFsc2UsXHJcbiAgbG9jYWxlUGF0aDogJ3B1YmxpYy9sb2NhbGVzJyxcclxuICByZWFjdDoge1xyXG4gICAgdXNlU3VzcGVuc2U6IGZhbHNlLFxyXG4gIH0sXHJcbiAgbG9jYWxlU3VicGF0aHM6IHtcclxuICAgIGFyYTogJ2FyJyxcclxuICAgIGVuZzogJ2VuJyxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlVGhlbWUsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcic7XHJcbmltcG9ydCBQcm9tb3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9tb3Rpb24nO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICcuLi9jb21wb25lbnRzL0ZlYXR1cmUnO1xyXG5pbXBvcnQgQmVuZWZpdCBmcm9tICcuLi9jb21wb25lbnRzL0JlbmVmaXQnO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdGltb25pYWxzJztcclxuaW1wb3J0IEZhcSBmcm9tICcuLi9jb21wb25lbnRzL0ZhcSc7XHJcbmltcG9ydCBGb290ZXJXaXRoQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJXaXRoQ291bnRlcic7XHJcbmltcG9ydCBQYWdlTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZU5hdic7XHJcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb24nO1xyXG5pbXBvcnQgYnJhbmQgZnJvbSAnLi4vcHVibGljL3RleHQvYnJhbmQnO1xyXG5cclxuY29uc3Qgc2VjdGlvbk1hcmdpbiA9IG1hcmdpbiA9PiAobWFyZ2luICogMjApO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbWFpbldyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQgOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBzcGFjZUJvdHRvbToge1xyXG4gICAgbWFyZ2luQm90dG9tOiBzZWN0aW9uTWFyZ2luKHRoZW1lLnNwYWNpbmcoKSksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBzZWN0aW9uTWFyZ2luKDYpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3BhY2VUb3A6IHtcclxuICAgIG1hcmdpblRvcDogc2VjdGlvbk1hcmdpbih0aGVtZS5zcGFjaW5nKCkpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogc2VjdGlvbk1hcmdpbig2KSxcclxuICAgIH1cclxuICB9LFxyXG4gIHNwYWNlQm90dG9tU2hvcnQ6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogc2VjdGlvbk1hcmdpbih0aGVtZS5zcGFjaW5nKCkgLyAyKSxcclxuICB9LFxyXG4gIHNwYWNlVG9wU2hvcnQ6IHtcclxuICAgIG1hcmdpblRvcDogc2VjdGlvbk1hcmdpbih0aGVtZS5zcGFjaW5nKCkgLyAyKSxcclxuICB9LFxyXG4gIGNvbnRhaW5lcldyYXA6IHtcclxuICAgIG1hcmdpblRvcDogLTQwLFxyXG4gICAgJyYgPiBzZWN0aW9uJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgfVxyXG4gIH1cclxufSkpO1xyXG5cclxuZnVuY3Rpb24gTGFuZGluZyhwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLm9ubHkoJ21kJykpO1xyXG4gIGNvbnN0IHsgb25Ub2dnbGVEYXJrLCBvblRvZ2dsZURpciB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgeyBicmFuZC5jcnlwdG8ubmFtZSB9XHJcbiAgICAgICAgICAmbmJzcDsgLSBIb21lIFBhZ2VcclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImhvbWVcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluV3JhcH0+XHJcbiAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgb25Ub2dnbGVEYXJrPXtvblRvZ2dsZURhcmt9XHJcbiAgICAgICAgICBvblRvZ2dsZURpcj17b25Ub2dnbGVEaXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyV3JhcH0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImJhbm5lclwiPlxyXG4gICAgICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBpZD1cInByb21vdGlvbnNcIj5cclxuICAgICAgICAgICAgPFByb21vdGlvbiAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlXCIgY2xhc3NOYW1lPXtpc1RhYmxldCA/IGNsYXNzZXMuc3BhY2VUb3BTaG9ydCA6ICcnfT5cclxuICAgICAgICAgICAgPEZlYXR1cmUgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwiYmVuZWZpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZVRvcFNob3J0fT5cclxuICAgICAgICAgICAgPEJlbmVmaXQgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlVG9wfT5cclxuICAgICAgICAgICAgPFRlc3RpbW9uaWFscyAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJmYXFcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2VUb3B9PlxyXG4gICAgICAgICAgICA8RmFxIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbiAvPlxyXG4gICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxGb290ZXJXaXRoQ291bnRlciB0b2dnbGVEaXI9e29uVG9nZ2xlRGlyfSAvPlxyXG4gICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgPFBhZ2VOYXYgLz5cclxuICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9zY3JpcHRzL3BhcnRpY2xlcy5taW4uanNcIiAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL3NjcmlwdHMvc3RhdHMubWluLmpzXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkxhbmRpbmcuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcclxuICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJywgJ2NyeXB0by1sYW5kaW5nJ10sXHJcbn0pO1xyXG5cclxuTGFuZGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgb25Ub2dnbGVEYXJrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uVG9nZ2xlRGlyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NE5Danh6ZG1jZ2QybGtkR2c5SWpZek1IQjRJaUJvWldsbmFIUTlJalExTW5CNElpQjJhV1YzUW05NFBTSXdJREFnTmpNd0lEUTFNaUlnZG1WeWMybHZiajBpTVM0eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWo0TkNpQWdJQ0E4SVMwdElFZGxibVZ5WVhSdmNqb2dVMnRsZEdOb0lEVTFMaklnS0RjNE1UZ3hLU0F0SUdoMGRIQnpPaTh2YzJ0bGRHTm9ZWEJ3TG1OdmJTQXRMVDROQ2lBZ0lDQThkR2wwYkdVK1IzSnZkWEFnTkR3dmRHbDBiR1UrRFFvZ0lDQWdQR1JsYzJNK1EzSmxZWFJsWkNCM2FYUm9JRk5yWlhSamFDNDhMMlJsYzJNK0RRb2dJQ0FnUEdjZ2FXUTlJbEJoWjJVdE1TSWdjM1J5YjJ0bFBTSnViMjVsSWlCemRISnZhMlV0ZDJsa2RHZzlJakVpSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdabWxzYkMxdmNHRmphWFI1UFNJd0xqRTRJajROQ2lBZ0lDQWdJQ0FnUEdjZ2FXUTlJa2R5YjNWd0xUSWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RBdU1EQXdNREF3TENBdE5Ea3VNREF3TURBd0tTSWdabWxzYkQwaUkwWkdSa1pHUmlJK0RRb2dJQ0FnSUNBZ0lDQWdJQ0E4WnlCcFpEMGlSM0p2ZFhBdE5DSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTUM0d01EQXdNREFzSURBdU5EQXdOREEwS1NJK0RRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUUXhNUzQxTWpZM09UVXNNVGszTGpjeU5EZzBOeUJETkRFeExqVXlOamM1TlN3eU1EWXVNak0zTWpVNUlEUXhOaTR3T0RBd01Ua3NNakUwTGpFd016UTNOQ0EwTWpNdU5EY3hOalF6TERJeE9DNHpOVGsyT0NCTU5UQXlMamN4TmpReU5pd3lOak11T1RreU1EUTFJRU0xTVRBdU1UQTRNRFE1TERJMk9DNHlORGd5TlRJZ05URTVMakl4TkRRNU9Td3lOamd1TWpRNE1qVXlJRFV5Tmk0Mk1EWXhNaklzTWpZekxqazVNakEwTlNCTU5qQTFMamcxTURrd05Td3lNVGd1TXpVNU5qZ2dRell4TXk0eU5ESTFNamtzTWpFMExqRXdNelEzTkNBMk1UY3VOemsxTnpVekxESXdOaTR5TXpjeU5Ua2dOakUzTGpjNU5UYzFNeXd4T1RjdU56STBPRFEzSUV3Mk1UY3VOemsxTnpVekxERXdOaTQwTlRrM016VWdRell4Tnk0M09UVTNOVE1zT1RjdU9UUTJPVFF3TmlBMk1UTXVNalF5TlRJNUxEa3dMakE0TVRFd056Z2dOakExTGpnMU1Ea3dOU3c0TlM0NE1qUTFNVGszSUV3MU1qWXVOakEyTVRJeUxEUXdMakU1TWpFMU5EZ2dRelV4T1M0eU1UUTBPVGtzTXpVdU9UTTFPVFE0TkNBMU1UQXVNVEE0TURRNUxETTFMamt6TlRrME9EUWdOVEF5TGpjeE5qUXlOaXcwTUM0eE9USXhOVFE0SUV3ME1qTXVORGN4TmpRekxEZzFMamd5TkRVeE9UY2dRelF4Tmk0d09EQXdNVGtzT1RBdU1EZ3hNVEEzT0NBME1URXVOVEkyTnprMUxEazNMamswTmprME1EWWdOREV4TGpVeU5qYzVOU3d4TURZdU5EVTVOek0xSUV3ME1URXVOVEkyTnprMUxERTVOeTQzTWpRNE5EY2dXaUlnYVdROUlrWnBiR3d0TVNJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9OVEUwTGpZMk1USTNOQ3dnTVRVeUxqQTVNakV3TUNrZ2NtOTBZWFJsS0Mwek16QXVNREF3TURBd0tTQjBjbUZ1YzJ4aGRHVW9MVFV4TkM0Mk5qRXlOelFzSUMweE5USXVNRGt5TVRBd0tTQWlQand2Y0dGMGFENE5DaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NQ3cwTXpBdU56ZzROVFEzSUVNd0xEUXpPUzR6TURBNU5pQTBMalUxTXpJeU5EWXlMRFEwTnk0eE5qY3hOelVnTVRFdU9UUTBPRFEzT1N3ME5URXVOREl6TXpneElFdzVNUzR4T0RrMk16RTBMRFE1Tnk0d05UVTNORFlnUXprNExqVTRNVEkxTkRjc05UQXhMak14TVRrMU1pQXhNRGN1TmpnM056QTBMRFV3TVM0ek1URTVOVElnTVRFMUxqQTNPVE15Tnl3ME9UY3VNRFUxTnpRMklFd3hPVFF1TXpJME1URXhMRFExTVM0ME1qTXpPREVnUXpJd01TNDNNVFUzTXpRc05EUTNMakUyTnpFM05TQXlNRFl1TWpZNE9UVTVMRFF6T1M0ek1EQTVOaUF5TURZdU1qWTRPVFU1TERRek1DNDNPRGcxTkRjZ1RESXdOaTR5TmpnNU5Ua3NNek01TGpVeU16UXpOaUJETWpBMkxqSTJPRGsxT1N3ek16RXVNREV3TmpReElESXdNUzQzTVRVM016UXNNekl6TGpFME5EZ3dPU0F4T1RRdU16STBNVEV4TERNeE9DNDRPRGd5TWlCTU1URTFMakEzT1RNeU55d3lOek11TWpVMU9EVTJJRU14TURjdU5qZzNOekEwTERJMk9DNDVPVGsyTkRrZ09UZ3VOVGd4TWpVME55d3lOamd1T1RrNU5qUTVJRGt4TGpFNE9UWXpNVFFzTWpjekxqSTFOVGcxTmlCTU1URXVPVFEwT0RRM09Td3pNVGd1T0RnNE1qSWdRelF1TlRVek1qSTBOaklzTXpJekxqRTBORGd3T1NBd0xETXpNUzR3TVRBMk5ERWdNQ3d6TXprdU5USXpORE0ySUV3d0xEUXpNQzQzT0RnMU5EY2dXaUlnYVdROUlrWnBiR3d0TVNJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9NVEF6TGpFek5EUTNPU3dnTXpnMUxqRTFOVGd3TVNrZ2NtOTBZWFJsS0Mwek5qQXVNREF3TURBd0tTQjBjbUZ1YzJ4aGRHVW9MVEV3TXk0eE16UTBOemtzSUMwek9EVXVNVFUxT0RBeEtTQWlQand2Y0dGMGFENE5DaUFnSUNBZ0lDQWdJQ0FnSUR3dlp6NE5DaUFnSUNBZ0lDQWdQQzluUGcwS0lDQWdJRHd2Wno0TkNqd3ZjM1puUGc9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeU1pNHdMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p4emRtY2dkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlUR0Y1WlhKZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpRFFvSklIWnBaWGRDYjNnOUlqQWdNQ0F4TWpnd0lESXpOeUlnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdNVEk0TUNBeU16YzdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0TkNqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrRFFvSkxuTjBNSHRtYVd4c09pTXpNRE13TXpBN2ZRMEtQQzl6ZEhsc1pUNE5DangwYVhSc1pUNURiMjFpYVc1bFpDQlRhR0Z3WlR3dmRHbDBiR1UrRFFvOFpHVnpZejVEY21WaGRHVmtJSGRwZEdnZ1UydGxkR05vTGp3dlpHVnpZejROQ2p4bklHbGtQU0pRWVdkbExURWlQZzBLQ1R4d1lYUm9JR2xrUFNKRGIyMWlhVzVsWkMxVGFHRndaU0lnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUVEV5T0RBc01DNDRWakl6TjBnd1ZqZ3pZemt1T1N3eUxqa3NNakFzTlM0eExETXdMak1zTmk0NGJEYzNOQzQ1TERFeU15NDVZelU0TGpJc09TNHpMREV4Tnk0NUxUSXNNVFk0TGpjdE16SU5DZ2tKVERFeU9EQXNNQzQ0ZWlJdlBnMEtQQzluUGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0TkNqeHpkbWNnZDJsa2RHZzlJakV5T0RCd2VDSWdhR1ZwWjJoMFBTSXlNemR3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREV5T0RBZ01qTTNJaUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGcwS0lDQWdJRHdoTFMwZ1IyVnVaWEpoZEc5eU9pQlRhMlYwWTJnZ05UVXVNaUFvTnpneE9ERXBJQzBnYUhSMGNITTZMeTl6YTJWMFkyaGhjSEF1WTI5dElDMHRQZzBLSUNBZ0lEeDBhWFJzWlQ1RGIyMWlhVzVsWkNCVGFHRndaVHd2ZEdsMGJHVStEUW9nSUNBZ1BHUmxjMk0rUTNKbFlYUmxaQ0IzYVhSb0lGTnJaWFJqYUM0OEwyUmxjMk0rRFFvZ0lDQWdQR2NnYVdROUlsQmhaMlV0TVNJZ2MzUnliMnRsUFNKdWIyNWxJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRWlJR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK0RRb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHhNamd3TERBdU56a3dNekF5T1RZNElFd3hNamd3TERJek55Qk1NQ3d5TXpjZ1REQXNPRE11TURRM016TXdOeUJET1M0NE56azBNREkzT0N3NE5TNDVNREE0TmpNeUlERTVMams1TXpZek9UZ3NPRGd1TVRZNU1ETXlJRE13TGpJNU9URTFPVEVzT0RrdU9ERTJOamczTWlCTU9EQTFMakl6TkRZeE5Td3lNVE11TnpFME1ERTBJRU00TmpNdU5EWTVOelE0TERJeU15NHdNalEyT1RZZ09USXpMakV5TnprMU1pd3lNVEV1TmprNE56RWdPVGN6TGpnNU9UQXpMREU0TVM0Mk9UTTBNallnVERFeU9EQXNNQzQzT1RBek1ESTVOamdnV2lJZ2FXUTlJa052YldKcGJtVmtMVk5vWVhCbElpQm1hV3hzUFNJalJrWkdSa1pHSWo0OEwzQmhkR2crRFFvZ0lDQWdQQzluUGcwS1BDOXpkbWMrXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejROQ2p3aExTMGdSMlZ1WlhKaGRHOXlPaUJCWkc5aVpTQkpiR3gxYzNSeVlYUnZjaUF5TWk0d0xqQXNJRk5XUnlCRmVIQnZjblFnVUd4MVp5MUpiaUF1SUZOV1J5QldaWEp6YVc5dU9pQTJMakF3SUVKMWFXeGtJREFwSUNBdExUNE5Danh6ZG1jZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVRHRjVaWEpmTVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZUQwaU1IQjRJaUI1UFNJd2NIZ2lEUW9KSUhacFpYZENiM2c5SWpBZ01DQXhNamd3SURReE1DSWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01USTRNQ0EwTVRBN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajROQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStEUW9KTG5OME1IdG1hV3hzT2lNek1ETXdNekE3ZlEwS1BDOXpkSGxzWlQ0TkNqeDBhWFJzWlQ1RGIyMWlhVzVsWkNCVGFHRndaVHd2ZEdsMGJHVStEUW84WkdWell6NURjbVZoZEdWa0lIZHBkR2dnVTJ0bGRHTm9Mand2WkdWell6NE5DanhuSUdsa1BTSlFZV2RsTFRFaVBnMEtDVHh3WVhSb0lHbGtQU0pEYjIxaWFXNWxaQzFUYUdGd1pTSWdZMnhoYzNNOUluTjBNQ0lnWkQwaVRURXlPREFzTXpjMVl5MDBNQzR5TFRRM0xqTXRPRE11TWkwNU5pNHlMVEV5T1M0eExURTBOaTQzWXkwMk1DNDBMVFkyTGpVdE1UVXhMall0T1RZdE1qTTVMalV0TnpjdU5Fd3hOVEl1Tml3ek1URU5DZ2tKWXkwMU55NDNMREV5TGpJdE1UQTVMak1zTkRRdU1TMHhORFlzT1RBdU0wd3dMRFF3T1M0M1ZqQm9NVEk0TUZZek56Vk1NVEk0TUN3ek56VjZJaTgrRFFvOEwyYytEUW84TDNOMlp6NE5DZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejROQ2p4emRtY2dkMmxrZEdnOUlqRXlPREJ3ZUNJZ2FHVnBaMmgwUFNJME1UQndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lERXlPREFnTkRFd0lpQjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQZzBLSUNBZ0lEd2hMUzBnUjJWdVpYSmhkRzl5T2lCVGEyVjBZMmdnTlRVdU1pQW9Oemd4T0RFcElDMGdhSFIwY0hNNkx5OXphMlYwWTJoaGNIQXVZMjl0SUMwdFBnMEtJQ0FnSUR4MGFYUnNaVDVEYjIxaWFXNWxaQ0JUYUdGd1pUd3ZkR2wwYkdVK0RRb2dJQ0FnUEdSbGMyTStRM0psWVhSbFpDQjNhWFJvSUZOclpYUmphQzQ4TDJSbGMyTStEUW9nSUNBZ1BHY2dhV1E5SWxCaFoyVXRNU0lnYzNSeWIydGxQU0p1YjI1bElpQnpkSEp2YTJVdGQybGtkR2c5SWpFaUlHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krRFFvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweE1qZ3dMakF3TURBeUxETTNOQzQ1T1RrNU9EVWdRekV5TXprdU9ERXlOREVzTXpJM0xqY3hOemMzTWlBeE1UazJMamMyTlRNeExESTNPQzQ0TVRVMk5qRWdNVEUxTUM0NE5UZzNNaXd5TWpndU1qa3pOalV6SUVNeE1Ea3dMalF6TnpRMUxERTJNUzQzT1RjMk56SWdPVGs1TGpJNE1qVXhOU3d4TXpJdU16TTBOREkwSURreE1TNHpOekU1TWprc01UVXdMamc0TmpNMElFd3hOVEl1TmpReE9EYzNMRE14TVM0d01ESTBNRElnUXprMExqa3pPREEwTnpNc016SXpMakUzT1Rjek55QTBNeTR6TURFeE9EWXhMRE0xTlM0eE16TXdORFFnTmk0Mk5UVXlNek15TWl3ME1ERXVNelF3TVRFNElFd3dMRFF3T1M0M016RTNNellnVERBc01DQk1NVEk0TUN3d0lFd3hNamd3TERNM05DNDVPVGs1TmlCYUlpQnBaRDBpUTI5dFltbHVaV1F0VTJoaGNHVWlJR1pwYkd3OUlpTkdSa1pHUmtZaVBqd3ZjR0YwYUQ0TkNpQWdJQ0E4TDJjK0RRbzhMM04yWno0PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQThBQUFBUkNBWUFBQUYxRGNZM0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFONUpSRUZVT0JGallBQ0MvLy8vTnpBQ2lmMGdEaGlBUktCTUJnWlVLWkF3U0dRT2tGYUdxV0dDTVZCb1pGUFFEYm1McmtVWlhlQXUyQ3dVTTBBaVFBRm5JRlVEbGtVUUxZeU1qSHZSTFVGSVExbm9kbUFxQUJyakNCUnR3WkFCaWtIbElGSkFkMGdCOFdZUURWUE1DR0lBQlZZREtSR1lJSkIrQTlRWml0ZHhlQjFHSzBtb2Y5NGd1UlRFQkxrV0ZBWVFnTk9mU0FvNGdld29JQTRIWWxhWU9KRCtEY1FyZ1hnWjBNVHZNSEZRT0lCQ3JBS0lkV0dDUk5DWGdXbzY4QVlpSVVQd2h1UGcxaHdOZEI0b0FFZ0JJUFhSNENRSjB3VU1lWktpQ2dBcE1HRTl1cXVyS2dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURRQUFBQTdDQVlBQUFGREtabW9BQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBL2xKUkVGVWFBWHRtb2R5MURBUWhrTW9vUlBLUUtoNS8rY0tmU0NoUXdJRS9zOTNxNUZsTlovUFRobnZ6TWF5dEt1dFhwWEx4a1liSHJkZkYyOFhnczVkZTkreFJ2amNWTWRXMkdudkRDWWhPMmhjVG9GbFI2aGcwMzFOZjY4YVIvaThIWGFFVTRiams3NjNsSGtpMFk5eTR1OW9jTnNqZUtGMjFDT3RhVDJHc0hsWkhVamRxR1Z3RTFSRnoxRXZHeXN4d1F0akgrYUhTNEh1NFF4MVBZdEdsZDBYUmZzOFlNeSsrck1TSCtLVWhHY2FRVUlNN3F2enBqK0FIZGtVOFlpZEZqZTh6cHJtTHE3K1hrUHAwL1NKaitNN3Iwek85ODdTZk9PUERYY2liZ1BlTTVreE1ha1V4cXFNZ1prOGpFMlNURkJQSzlla29Od1RIZ24vQ2ZrWUh3Z1BoYzVPdFhzRHlZOTJUY1VxY0dNMnRFblR3N3BwanY4b3BtK0Z5VlBEelBsVWlCdGZDdjhLR3lETjBXYWxkRjlNa2YyTGl4RWNEMTZXdGY5Z1V4NzZzNjNBTVphN09xck1nam91cWUzQWRYelpmUmVaMnZrN2RGWUZrbDkyaDZQY1lYTTJsU1dzRExEVFI5bkYydGFYcmZjU0pDdExURkE0R2RzOXRuMmZoSitEUWZodFg3S25Oc1UyQ2pXQ2ZFYnFGeVVGdHlENGk3QUtZT3dEYk02SjQzWGhUMkhTQW8yMW9GWVF5d0NGRVErOEUvNFdjdkloVzc4S2kxQnlYU2tHdWZnVmhSc0JMbUw1U0I1eWpGQlBVaGhhWWhlRm1FWHNNVWxURmo0V3dGb2dESHdXTEhTdmhLMzQrWUt5aEdLc2hheWlSZE5ycFhoMDVucm5UcktwYzd6d0dJWTBxUzdFcmxtT2FJd0pmQUk3amFReHBXaHVUaEpiVXdocTdKZ0ZyUnpPMlhXejY1d0g1bVJ3cnVqUm9LZ2U0am9PdW1NdUV4eW8zd3NiR0gzaG0yd3A5d1daZGRrMTM0Z2lUOXR6SEd1TVBYdHJjeEtoZDEyMjVvKzIzWEtTMU1EaTNDYmU3bnpaL0xNWFQwTE1kVEZpck1MQ1g4SVB3aXRDTXBXdDhXdGhFV29GMlVSczh0a0dJNENVZGJjaWFtZWhyNkRzWk10QjVyd2x4SzJwRWtmQzRHNE9DTlZKSTlvaXJNdWdTNUowVjhpeENhRFlIQWgvOEJJQjZLQ0hENEFPZXZnR3dSQ0QxcVZVWDJka0RlNWpFT2xER3RrdlRHT2tUU3hkT1kyVG5zZ3JRc2tnZnJ2anNwWXFBSENWUTJyd25BS1FUMnJhYjRoSGF1OExrL0pEZ3daN1NNTEdncW9NTVlPSUFEK3o4bDc2b01kU3VPKzgvamRNcFh3clBMS0lrRmJVL0RmQ3RaWlJ6VGMyWUFQM1JCejc5d2tqQ3hqQUpkSlpNd2E5MFJuZGdXME1Bb0hxMVhoQmZxcittdTZiWnN5cDBtNklNck5CUTd3M0JlOGNvU204UEVUR0hLRWgzcHVDZDQ3UUZGNGVJdU5jUnNnT1RyVS9JZzV4NEZpOHB2c3hEVFozL0JNa3VPci9yb2oxeElEZE5rY2ZiRG5nQlRoWDU2R0ZTWXUvZGo3aTdzQytyMTVuZW4reU5iZlJwM2luWVJGS3lUN3pkd29wdytpdjhsQnVnb3F4d1JsU2lsQk9CLzlNRDkycWw0VW5kaStYTTY2dlV1dHlSa2VuSVJIcVRMYnNpS1ZOU0R2R0pXVWo0ejloRzZ6N0k1WWl5UUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ZsYWctbG9nby1iNmMwYTNiNTJkYWUyYmY5OGYxOTlkYzYwMjJkYzY4OS5wbmdcIjsiLCJjb25zdCBpbWdBUEkgPSB7XHJcbiAgYXZhdGFyOiBbXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2dpcmwuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybDIuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybDMuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybDQuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybDUuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybC5zdmcnLFxyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9ib3kuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfYm95Mi5zdmcnLFxyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9ib3kzLnN2ZycsXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2JveTQuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfYm95NS5zdmcnXHJcbiAgXSxcclxuICBwaG90bzogW1xyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NzV4OTAwL2UxYWQ5Mi9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS85Njd4NzI1L2VhNmQ2ZC9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMjgweDg0OS9lYTZkYjcvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vOTY3eDcyNS9iYjZkZWEvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA0OHg3MDEvNmQ2ZmVhL2ZmZicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwLzZkYzBlYS9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS85NzB4NzI1LzZkZWFhNi9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUxeDcwMC9iOGRlMjcvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MXg3MDEvZGU5ZjI3L2ZmZicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwL2VmNDU0NS9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9mZmM0YzQvNzU3NTc1JyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDQ0Ny9mZGZmYzQvNzU3NTc1JyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTI4MHg4NTEvYzRmZmQ3Lzc1NzU3NScsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY0MHg0MjUvYzRjZGZmLzc1NzU3NScsXHJcbiAgXSxcclxuICBjcnlwdG86IFtcclxuICAgICcvaW1hZ2VzL2NyeXB0by9oZXhhLW9yYW5nZS5wbmcnLFxyXG4gICAgJy9pbWFnZXMvY3J5cHRvL2hleGEtZ3JlZW4ucG5nJyxcclxuICAgICcvaW1hZ2VzL2NyeXB0by9oZXhhLW9yYW5nZS5wbmcnLFxyXG4gICAgJy9pbWFnZXMvY3J5cHRvL2hleGEtZ3JlZW4ucG5nJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjAweDM0MS9jYWMxNDIvRkZGRkZGJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTI4MHg2NzcvMjA0NDczL0ZGRkZGRicsXHJcbiAgICAnL2ltYWdlcy9jcnlwdG8vY3J5cHRvX2xhcHRvcC5wbmcnXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGltZ0FQSTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgY3J5cHRvOiB7XHJcbiAgICBuYW1lOiAnVHJhZGluZ1BsYW5ldCcsXHJcbiAgICBkZXNjOiAnV2l0aCBUUCwgb3VyIGdvdmVybmFuY2UgdG9rZW4sIHlvdSBjYW4gaGVscCBkZWNpZGUgdGhlIGZ1dHVyZSBvZiB0aGUgZXhjaGFuZ2UuIEFzIHdlIGdyb3csIHlvdSBncm93IScsXHJcbiAgICBwcmVmaXg6ICd0cCcsXHJcbiAgICBsb2dvVGV4dDogJ1RyYWRpbmdQbGFuZXQnLFxyXG4gICAgcHJvamVjdE5hbWU6ICdUcmFkaW5nUGxhbmV0JyxcclxuICAgIC8vIHVybDogJ2x1eGlyZWFjdC51eC1tYWVzdHJvLmNvbS9jb2lueicsXHJcbiAgICBpbWc6ICcvc3RhdGljL2ltYWdlcy9sb2dvLnBuZycsXHJcbiAgICBub3RpZk1zZzogJ0RvbmVjIHNpdCBhbWV0IG51bGxhIHNlZCBhcmN1IHB1bHZpbmFyIHVsdHJpY2llcyBjb21tb2RvIGlkIGxpZ3VsYS4nXHJcbiAgfVxyXG59O1xyXG4iLCJjb25zdCBsaW5rID0ge1xyXG4gIGNyeXB0bzoge1xyXG4gICAgaG9tZTogJy8nLFxyXG4gICAgY29udGFjdDogJy9jb250YWN0JyxcclxuICAgIGxvZ2luOiAnL2xvZ2luJyxcclxuICAgIHJlZ2lzdGVyOiAnL3JlZ2lzdGVyJ1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpbms7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVRleHRBbGlnbiA9IG1ha2VTdHlsZXMoe1xyXG4gIHRleHRDZW50ZXI6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9LFxyXG4gIHRleHRMZWZ0OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0J1xyXG4gIH0sXHJcbiAgdGV4dFJpZ2h0OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCdcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUZsb2F0ID0gbWFrZVN0eWxlcyh7XHJcbiAgZmxvYXRMZWZ0OiB7XHJcbiAgICBmbG9hdDogJ2xlZnQnXHJcbiAgfSxcclxuICBmbG9hdFJpZ2h0OiB7XHJcbiAgICBmbG9hdDogJ3JpZ2h0J1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVRleHQgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICBmb250U2l6ZTogNDgsXHJcbiAgICBsaW5lSGVpZ2h0OiAnNzJweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZm9udFNpemU6IDM4LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNjBweCdcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6IDI4LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDRweCdcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZTI6IHtcclxuICAgIGZvbnRTaXplOiAzNixcclxuICAgIGxpbmVIZWlnaHQ6ICc1NnB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZm9udFNpemU6IDMyLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDhweCdcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzZweCcsXHJcbiAgICB9XHJcbiAgfSxcclxuICBzdWJ0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxyXG4gICAgZm9udFNpemU6IDI4LFxyXG4gICAgbGluZUhlaWdodDogJzQ0cHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgbGluZUhlaWdodDogJzM2cHgnLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcyOHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdWJ0aXRsZTI6IHtcclxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXHJcbiAgICBmb250U2l6ZTogMjIsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMzJweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzJweCcsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgbGluZUhlaWdodDogJzI0cHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcmFncmFwaDoge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcclxuICAgIGZvbnRTaXplOiAxNixcclxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4J1xyXG4gIH0sXHJcbiAgY2FwdGlvbjoge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcclxuICAgIGZvbnRTaXplOiAxNixcclxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcclxuICAgIH0sXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlSGlkZGVuID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGxnRG93bjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ2xnJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWREb3duOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBzbURvd246IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHhzRG93bjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGdVcDoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIG1kVXA6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBzbVVwOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH1cclxufSkpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICB1c2U6IHRydWVcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ZhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvT3V0bGluZWRJbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhckNvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU3dpcGVhYmxlRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvWm9vbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd1Vwd2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MYW5ndWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xzeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYW5jaG9yLWxpbmstc21vb3RoLXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlZC1zbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnR1cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wYXJhbGxheFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGwtcGFyYWxsYXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsc3B5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC15b3V0dWJlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=