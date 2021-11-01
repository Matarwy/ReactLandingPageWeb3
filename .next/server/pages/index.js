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
  }, t('common:crypto-landing.banner_learn'))))))), __jsx("div", {
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
  }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIvQmFubmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFubmVyL2Jhbm5lci1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhbm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JlbmVmaXQvQmVuZWZpdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JlbmVmaXQvYmVuZWZpdC1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JlbmVmaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy9UZXN0aW1vbmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzL2NhcmRzLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlci9Db3VudGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlci9jb3VudGVyLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZhcS9GYXEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GYXEvZmFxLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmFxL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmVhdHVyZS9GZWF0dXJlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmVhdHVyZS9NYWluRmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZlYXR1cmUvTW9yZUZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWF0dXJlL2ZlYXR1cmUtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWF0dXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJXaXRoQ291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXItc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL01hcmtldFByaWNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL01vYmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24tc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlTmF2L1BhZ2VOYXYuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlTmF2L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnZU5hdi9wYWdlbmF2LXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFyYWxsYXgvSGV4YWdvbmFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFyYWxsYXgvcGFyYWxsYXgtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9tb3Rpb24vUHJvbW90aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvbW90aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvbW90aW9uL3Byb21vdGlvbi1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXN0aW1vbmlhbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXN0aW1vbmlhbHMvdGVzdGktc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpdGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGl0bGUvdGl0bGUtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9tZWRpdW0uanMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWJlbmVmaXQuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tYm90dG9tLWRhcmsuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tYm90dG9tLWxpZ2h0LnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWZhcS10b3AtZGFyay5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9jcnlwdG8vZGVjby1mYXEtdG9wLWxpZ2h0LnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWxpc3QucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvL2hleGEtbmF2LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ZsYWctbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pbWdBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RleHQvYnJhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RleHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4veW91dHViZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXBlYWJsZURyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvWm9vbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dVcHdhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MYW5ndWFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5nc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9UZWxlZ3JhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFuY2hvci1saW5rLXNtb290aC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlZC1zbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudHVwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGFyYWxsYXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGwtcGFyYWxsYXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxzcHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXdvd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXlvdXR1YmVcIiJdLCJuYW1lcyI6WyJCYW5uZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ0ZXh0IiwidXNlVGV4dCIsImVsZW0iLCJ1c2VSZWYiLCJ0IiwidGhlbWUiLCJ1c2VUaGVtZSIsImhpZGUiLCJzZXRIaWRlIiwidXNlU3RhdGUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50IiwiZG9jIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJlbFRvcCIsIm9mZnNldFRvcCIsImVsQm90dG9tIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwidXNlRWZmZWN0Iiwid2luZG93IiwicGFydGljbGVzSlMiLCJwYXJ0aWNsZXMiLCJudW1iZXIiLCJ2YWx1ZSIsImRlbnNpdHkiLCJlbmFibGUiLCJ2YWx1ZV9hcmVhIiwiY29sb3IiLCJzaGFwZSIsInR5cGUiLCJzdHJva2UiLCJ3aWR0aCIsInBvbHlnb24iLCJuYl9zaWRlcyIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsInJldGluYV9kZXRlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicm9vdCIsImNhbnZhc1dyYXAiLCJvdmVybGF5IiwiY2xzeCIsImRlY29Jbm5lciIsInBhcnRpY2xlQmFja2dyb3VuZCIsImJhbm5lcldyYXAiLCJ0aXRsZTIiLCJzdWJ0aXRsZTIiLCJidG5BcmVhIiwiaW52ZXJ0IiwiZGVjb0JvdHRvbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIiwiYmFubmVyU3R5bGVzIiwibWFrZVN0eWxlcyIsInBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4Iiwib2JqZWN0QXJ0IiwibWF4V2lkdGgiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJ1cCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImJvcmRlckNvbG9yIiwiYm90dG9tIiwiZmlsbCIsImRhcmtlbiIsInByaW1hcnkiLCJkYXJrIiwibGlnaHRlbiIsIm1haW4iLCJ0cmFuc2Zvcm0iLCJ2aXNpYmlsaXR5IiwiQmVuZWZpdCIsImlzRGVza3RvcCIsInBhcmFsbGF4V3JhcCIsInBhcmFsbGF4UHJvcHMiLCJ3cmFwcGVyIiwiZGVzYyIsImxpc3QiLCJkZWNvIiwibGlnaHQiLCJzZWNvbmRhcnkiLCJiZW5lZml0U3R5bGVzIiwiYmxhY2siLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nIiwiZm9udFdlaWdodCIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0TWVkaXVtIiwibWFyZ2luIiwibGlzdFN0eWxlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZGVjb0xpc3QiLCJpbWciLCJyaWdodCIsImRlY29CZW5lZml0IiwiVGVzdGltb25pYWwiLCJuYW1lIiwidGl0bGUiLCJhdmF0YXIiLCJhY3RpdmUiLCJ0ZXN0aW1vbmlhbCIsInBhcGVyIiwiY2FwdGlvbiIsInN0cmluZyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJjYXJkc1N0eWxlcyIsImJvcmRlciIsInRyYW5zaXRpb24iLCJ0ZXh0T3ZlcmZsb3ciLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiQ291bnRlciIsInBsYXkiLCJzZXRQbGF5IiwiY291bnR1cCIsInZhbCIsImlzUGxheSIsImhhbmRsZVBsYXkiLCJzZXRUaW1lb3V0IiwiY291bnRlcldyYXAiLCJzdWJ0aXRsZSIsImNhbGxBY3Rpb24iLCJyb3V0ZUxpbmsiLCJjcnlwdG8iLCJyZWdpc3RlciIsImJ1dHRvbiIsImNvdW50ZXJTdHlsZXMiLCJmYXFEYXRhIiwicSIsImEiLCJGYXEiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiUmVhY3QiLCJoYW5kbGVDaGFuZ2UiLCJwYW5lbCIsImV2ZW50IiwibmV3RXhwYW5kZWQiLCJwYXJhbGxheCIsImlsbHVzdHJhdGlvbiIsImFjY29yZGlvbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRvU3RyaW5nIiwiaGVhZGluZyIsImljb24iLCJkZXRhaWwiLCJmYXFTdHlsZXMiLCJkZWNvRmFxRGFyayIsImRlY29GYXFMaWdodCIsImJhY2tncm91bmRTaXplIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlclJhZGl1cyIsInJvdW5kZWQiLCJtZWRpdW0iLCJGZWF0dXJlIiwiVHJhbnNpdGlvbiIsImZvcndhcmRSZWYiLCJyZWYiLCJNYWluRmVhdHVyZSIsInBsYXllciIsInNldFBsYXllciIsIm9wZW5Qb3B1cCIsInNldE9wZW5Qb3B1cCIsImhhbmRsZUNsaWNrT3BlbiIsInl0IiwidXNlIiwicGxheVZpZGVvIiwiaGFuZGxlQ2xvc2UiLCJwYXVzZVZpZGVvIiwiX29uUmVhZHkiLCJ0YXJnZXQiLCJvcHRzIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwiY29udHJvbHMiLCJyZWwiLCJzaG93aW5mbyIsIm11dGUiLCJvcmlnaW4iLCJtYWluRmVhdHVyZSIsInZpZGVvUG9wdXAiLCJjbG9zZUJ0biIsInZpZGVvIiwicGxheUJ0biIsImZlYXR1cmVXcmFwIiwiY29pbkRhdGEiLCJsb2dvIiwicHJvZ3Jlc3MiLCJNb3JlRmVhdHVyZSIsInRoZW1lUHJvZ3Jlc3MiLCJjcmVhdGVNdWlUaGVtZSIsIm1vcmVGZWF0dXJlIiwiY2VudGVyIiwiZmVhdHVyZVN0eWxlcyIsIm1pbkhlaWdodCIsInRyYW5zZm9ybU9yaWdpbiIsImNvdW50ZXIiLCJsb3dlciIsImhpZ2hlciIsImZvbnRXZWlnaHRCb2xkIiwiY2hhcnREZWNvIiwicHJvZ3Jlc3NXcmFwIiwiY29pbiIsImZsZXgiLCJ1bml0IiwidHJhY2siLCJkaXZpZGVyIiwiYmFyIiwiQ29weXJpZ2h0IiwiZm9vdGVyIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwibmV3cyIsImltZ0FwaSIsInBob3RvIiwiRm9vdGVyIiwiY3RuIiwic2V0Q3RuIiwidmFsdWVzIiwic2V0VmFsdWVzIiwibGFuZyIsImkxOG4iLCJsYW5ndWFnZSIsImdldEVsZW1lbnRCeUlkIiwib2xkVmFsdWVzIiwiY2hhbmdlTGFuZ3VhZ2UiLCJ0b2dnbGVEaXIiLCJicmFuZCIsInByb2plY3ROYW1lIiwiZm9vdGVyRGVzYyIsInF1aWNrTGlua3MiLCJzb2NtZWQiLCJGb290ZXJXaXRoRGVjbyIsImZvb3RlckNvdW50ZXIiLCJkZWNvVG9wIiwiZm9vdGVyU3R5bGVzIiwid2hpdGVTcGFjZSIsInRleHRUcmFuc2Zvcm0iLCJ0ZXh0RGVjb3JhdGlvbiIsInNlbGVjdExhbmciLCJmYWRlIiwiYm9yZGVyVG9wIiwic2VsZWN0TWVudSIsImNhdGVnb3J5IiwibGlzdFRleHQiLCJibG9nSXRlbSIsImNyZWF0ZURhdGEiLCJ1cmwiLCJvZmZzZXQiLCJpZCIsIkxpbmtCdG4iLCJ0byIsIkhlYWRlciIsImZpeGVkIiwic2V0Rml4ZWQiLCJmbGFnRml4ZWQiLCJzY3JvbGwiLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsIm5ld0ZsYWdGaXhlZCIsIm9uVG9nZ2xlRGFyayIsIm9uVG9nZ2xlRGlyIiwibWVudUxpc3QiLCJuYXZNZW51Iiwib3BlbkRyYXdlciIsInNldE9wZW5EcmF3ZXIiLCJoYW5kbGVPcGVuRHJhd2VyIiwiaGVhZGVyIiwiaGVhZGVyQ29udGVudCIsIm1vYmlsZU1lbnUiLCJob21lIiwiQW5jaG9yTGluayIsImNvbnRhY3QiLCJuYXZBdXRoIiwic3RpY2t5IiwibWFya2V0TGlzdCIsInByaWNlIiwic3RhdHVzIiwicGVyY2VudCIsIk1hcmtldFByaWNlIiwic2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5U3BlZWQiLCJjc3NFYXNlIiwicGF1c2VPbkhvdmVyIiwicmVuZGVyUGVyY2VudCIsImFycm93Iiwic3RheSIsIm1hcmtldCIsIk1vYmlsZU1lbnUiLCJ0b2dnbGVEcmF3ZXIiLCJvcGVuIiwiU2lkZUxpc3QiLCJtb2JpbGVOYXYiLCJtZW51IiwibWVudU9wZW4iLCJhbmltYXRpb25EdXJhdGlvbiIsImxlbmd0aCIsImRpdmlkZXJTaWRlYmFyIiwicGFwZXJOYXYiLCJ0aGVtZVR5cGUiLCJTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlNldHRpbmdzIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImlzRGFyayIsInNldERhcmsiLCJoYW5kbGVDbGljayIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDaGFuZ2VNb2RlIiwidG9nZ2xlRGFyayIsImhhbmRsZUNoYW5nZUxhbmciLCJCb29sZWFuIiwidW5kZWZpbmVkIiwic2V0dGluZyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIm1vZGVNZW51IiwibGFuZ01lbnUiLCJvcHRpb25zIiwiYWxsTGFuZ3VhZ2VzIiwiZmxhZ0ljb24iLCJmbGFnIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaGVhZGVyU3R5bGVzIiwiZnJvbSIsImJvcmRlckxlZnRDb2xvciIsIm1hcmdpbkxlZnQiLCJtaW5XaWR0aCIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsImJvcmRlckxlZnQiLCJvdXRsaW5lIiwiZm9udFN0eWxlIiwiTG9nbyIsIlRyYW5zaXRpb25VcCIsIk5vdGlmaWNhdGlvbiIsInNldE9wZW4iLCJub3RpZmljYXRpb24iLCJhY3Rpb24iLCJub3RpZmljYXRpb25TdHlsZXMiLCJQYWdlTmF2Iiwic2hvdyIsInNldFNob3ciLCJmbGFnU2hvdyIsIm5ld0ZsYWdTaG93IiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJwYWdlTmF2Iiwic2VjdGlvbk5hdiIsInRvb2x0aXAiLCJmYWIiLCJwYWdlbmF2IiwidHJhbnNpdGlvbkRlbGF5IiwiUGFyYWxsYXhDbG91ZCIsImRvdHNXcmFwIiwiaW5uZXJQYXJhbGxheCIsImxhcmdlIiwiaGV4YVdyYXAiLCJyaWdodFRvcEJhY2siLCJiaWciLCJoZXhhQmFjayIsInJpZ2h0VG9wRnJvbnQiLCJzbWFsbCIsImxlZnRCb3R0b21CYWNrIiwibGVmdEJvdHRvbUZyb250IiwicGFyYWxsYXhTdHlsZXMiLCJoZXhhVG9wIiwic2xpZGVyRGF0YSIsImltYWdlIiwiZGF0ZSIsIlByb21vdGlvbiIsInNsaWRlcldyYXAiLCJvZGQiLCJldmVuIiwiaW1nV3JhcCIsImRlY29yYXRpb24iLCJ0aW1lIiwicHJvbW90aW9uU3R5bGVzIiwiZGVjb0JvdHRvbURhcmsiLCJkZWNvQm90dG9tTGlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZXhhIiwibWF4SGVpZ2h0IiwidmVydGljYWxBbGlnbiIsIm9iamVjdEZpdCIsImZvbnRGYW1pbHkiLCJ0ZXN0aUNvbnRlbnQiLCJUZXN0aW1vbmlhbHMiLCJzbGlkZXIiLCJ1c2VTdHlsZSIsInNldEFjdGl2ZSIsImFjdGl2ZVRyYW5zaXRpb24iLCJzZXRBY3RpdmVUcmFuc2l0aW9uIiwiYWZ0ZXJDaGFuZ2UiLCJiZWZvcmVDaGFuZ2UiLCJuZXh0Iiwic2xpZGVTdGF0ZSIsInBhc3QiLCJmdXR1cmUiLCJzbGlkZSIsImNhcm91c2VsIiwibmF2IiwicHJldiIsInNsaWNrUHJldiIsInNsaWRlQ29udGVudCIsInNsaWNrTmV4dCIsInBhZ2luYXRpb24iLCJBcnJheSIsImUiLCJzbGlja0dvVG8iLCJ0ZXN0aVN0eWxlcyIsImFuaW1hdGlvbkZpbGxNb2RlIiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uRGVsYXkiLCJoZXhhQmciLCJjdXJzb3IiLCJUaXRsZSIsImFsaWduIiwic2V0QWxpZ24iLCJhbGlnbm1lbnQiLCJ0aXRsZVN0eWxlcyIsInRpdGxlU2Vjb25kYXJ5IiwiTWVkaXVtIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJmYWxsYmFja0xuZyIsImluaXRJbW1lZGlhdGUiLCJsb2NhbGVQYXRoIiwicmVhY3QiLCJ1c2VTdXNwZW5zZSIsImxvY2FsZVN1YnBhdGhzIiwiZW5nIiwic2VjdGlvbk1hcmdpbiIsIm1haW5XcmFwIiwic3BhY2VCb3R0b20iLCJzcGFjZVRvcCIsInNwYWNlQm90dG9tU2hvcnQiLCJzcGFjZVRvcFNob3J0IiwiY29udGFpbmVyV3JhcCIsIkxhbmRpbmciLCJpc1RhYmxldCIsIm9ubHkiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJpbWdBUEkiLCJwcmVmaXgiLCJsb2dvVGV4dCIsIm5vdGlmTXNnIiwiY292ZXIiLCJsb2dpbiIsInVzZVRleHRBbGlnbiIsInRleHRDZW50ZXIiLCJ0ZXh0TGVmdCIsInRleHRSaWdodCIsInVzZUZsb2F0IiwiZmxvYXRMZWZ0IiwiZmxvYXQiLCJmbG9hdFJpZ2h0IiwiZm9udFdlaWdodFJlZ3VsYXIiLCJwYXJhZ3JhcGgiLCJ1c2VIaWRkZW4iLCJsZ0Rvd24iLCJtZERvd24iLCJzbURvd24iLCJ4c0Rvd24iLCJsZ1VwIiwibWRVcCIsInNtVXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJ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Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vYmFubmVyLXN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIEJhbm5lcihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xyXG4gIGNvbnN0IGVsZW0gPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cclxuICBjb25zdCBbaGlkZSwgc2V0SGlkZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKCFlbGVtLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgY29uc3QgZWxUb3AgPSBlbGVtLmN1cnJlbnQub2Zmc2V0VG9wIC0gMjAwO1xyXG4gICAgY29uc3QgZWxCb3R0b20gPSBlbFRvcCArIGVsZW0uY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICBpZiAoZG9jLnNjcm9sbFRvcCA+IGVsVG9wICYmIGRvYy5zY3JvbGxUb3AgPCBlbEJvdHRvbSkge1xyXG4gICAgICBzZXRIaWRlKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEhpZGUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5wYXJ0aWNsZXNKUygncGFydGljbGVzX2JhY2tncm9uZCcsIHtcclxuICAgICAgcGFydGljbGVzOiB7XHJcbiAgICAgICAgbnVtYmVyOiB7XHJcbiAgICAgICAgICB2YWx1ZTogMTAwLFxyXG4gICAgICAgICAgZGVuc2l0eToge1xyXG4gICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlX2FyZWE6IDgwMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgIHZhbHVlOiAnI2ZmZmZmZidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgICB0eXBlOiAnY2lyY2xlJyxcclxuICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBvbHlnb246IHtcclxuICAgICAgICAgICAgbmJfc2lkZXM6IDVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgIHZhbHVlOiAwLjUsXHJcbiAgICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgICAgYW5pbToge1xyXG4gICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICAgICAgb3BhY2l0eV9taW46IDAuMSxcclxuICAgICAgICAgICAgc3luYzogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpemU6IHtcclxuICAgICAgICAgIHZhbHVlOiAzLFxyXG4gICAgICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICAgICAgYW5pbToge1xyXG4gICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGVlZDogNDAsXHJcbiAgICAgICAgICAgIHNpemVfbWluOiAwLjEsXHJcbiAgICAgICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgZGlzdGFuY2U6IDE1MCxcclxuICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjQsXHJcbiAgICAgICAgICB3aWR0aDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW92ZToge1xyXG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3BlZWQ6IDIsXHJcbiAgICAgICAgICBkaXJlY3Rpb246ICdub25lJyxcclxuICAgICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgICBzdHJhaWdodDogZmFsc2UsXHJcbiAgICAgICAgICBvdXRfbW9kZTogJ291dCcsXHJcbiAgICAgICAgICBib3VuY2U6IGZhbHNlLFxyXG4gICAgICAgICAgYXR0cmFjdDoge1xyXG4gICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICByb3RhdGVYOiA2MDAsXHJcbiAgICAgICAgICAgIHJvdGF0ZVk6IDEyMDBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGludGVyYWN0aXZpdHk6IHtcclxuICAgICAgICBkZXRlY3Rfb246ICdjYW52YXMnLFxyXG4gICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgb25ob3Zlcjoge1xyXG4gICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIG1vZGU6ICdyZXB1bHNlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9uY2xpY2s6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RlOiAncHVzaCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXNpemU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGVzOiB7XHJcbiAgICAgICAgICBncmFiOiB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlOiA0MDAsXHJcbiAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYnViYmxlOiB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlOiA0MDAsXHJcbiAgICAgICAgICAgIHNpemU6IDQwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMixcclxuICAgICAgICAgICAgb3BhY2l0eTogOCxcclxuICAgICAgICAgICAgc3BlZWQ6IDNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXB1bHNlOiB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwdXNoOiB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlc19uYjogNFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJlbW92ZToge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHJldGluYV9kZXRlY3Q6IHRydWVcclxuICAgIH0pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByZWY9e2VsZW19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYW52YXNXcmFwfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vdmVybGF5fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZGVjb0lubmVyLCBoaWRlICYmIGNsYXNzZXMuaGlkZSl9PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFydGljbGVzX2JhY2tncm9uZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJ0aWNsZUJhY2tncm91bmR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDb250YWluZXIgZml4ZWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFubmVyV3JhcH0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezZ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY2xhc3NOYW1lPXt0ZXh0LnRpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuYmFubmVyX3RpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuYmFubmVyX3N1YnRpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuQXJlYX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCJsYXJnZVwiIGZ1bGxXaWR0aD17aXNNb2JpbGV9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl9nZXRzdGFydGVkJyl9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmludmVydH0gc2l6ZT1cImxhcmdlXCIgZnVsbFdpZHRoPXtpc01vYmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuYmFubmVyX2xlYXJuJyl9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICB7LyogPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5vYmplY3RBcnR9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NyeXB0by9iYW5uZXItYXJ0LnBuZ1wiIGFsdD1cImlsbHVzdHJhdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvQm90dG9tfT5cclxuICAgICAgICA8c3ZnPlxyXG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIvaW1hZ2VzL2NyeXB0by9kZWNvLWJhbm5lci5zdmcjbWFpblwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuQmFubmVyLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShCYW5uZXIpO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgbGlnaHRlbiwgZGFya2VuLCBmYWRlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xyXG5cclxuY29uc3QgYmFubmVyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAvLyBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAvLyAgIGhlaWdodDogNzAwLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgLy8gICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDUpXHJcbiAgICAvLyB9XHJcbiAgfSxcclxuICBjYW52YXNXcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmQ6ICcjMDAwJywgLy90aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAke3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmt9IDMwJSwgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFya30gODAlKWAgOiBgbGluZWFyLWdyYWRpZW50KC00NWRlZywgJHt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSAzMCUsICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IDgwJSlgLFxyXG4gICAgJyY6YWZ0ZXInOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMiknXHJcbiAgICB9XHJcbiAgfSxcclxuICBvdmVybGF5OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnIC8vdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBmYWRlKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjcpIDogZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC43KSxcclxuICB9LFxyXG4gIHBhcnRpY2xlQmFja2dyb3VuZDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAnJiBjYW52YXMnOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBiYW5uZXJXcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMVxyXG4gIH0sXHJcbiAgb2JqZWN0QXJ0OiB7XHJcbiAgICAnJiBpbWcnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIGxlZnQ6IC0xMzAsXHJcbiAgICAgIHRvcDogMjQwLFxyXG4gICAgICBtYXhXaWR0aDogNTYwLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICB0b3A6IDEyMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMjApLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTIpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMjApLFxyXG4gICAgfSxcclxuICAgICcmIGg0Jzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9XHJcbiAgfSxcclxuICBidG5BcmVhOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgJyYgYnV0dG9uJzoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICAgIGhlaWdodDogNTBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW52ZXJ0OiB7XHJcbiAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgfSxcclxuICBkZWNvQm90dG9tOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogLTUwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIHdpZHRoOiAxNDAwLFxyXG4gICAgICBoZWlnaHQ6IDM4MCxcclxuICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssIDAuNikgOiBsaWdodGVuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCAwLjg0KSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDEyMDApXToge1xyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDIsIDEpJ1xyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hsJyldOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWNvSW5uZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gIH0sXHJcbiAgaGlkZToge1xyXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhbm5lclN0eWxlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQmFubmVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XHJcbmltcG9ydCBpbWdBUEkgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9iZW5lZml0LXN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIEJlbmVmaXQocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKSk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJykpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhbGxheFdyYXB9PlxyXG4gICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgYmdJbWFnZT1cIi9pbWFnZXMvZWFzdGVyLWJhdHRsZS5wbmdcIlxyXG4gICAgICAgICAgYmdJbWFnZUFsdD1cImJlbmVmaXRcIlxyXG4gICAgICAgICAgc3RyZW5ndGg9ezB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWxsYXhQcm9wc30gLz5cclxuICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENvbnRhaW5lciBmaXhlZD17aXNEZXNrdG9wfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17NX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY30+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3RleHQudGl0bGUyfSB2YXJpYW50PVwiaDNcIiBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuYmVuZWZpdF90aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlZlc3RpYnVsdW0gZmF1Y2lidXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+Vml2YW11cyBzaXQgYW1ldCBpbnRlcmR1bSBlbGl0PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPkRvbmVjIGRpZ25pc3NpbTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5RdWlzcXVlIGxhY2luaWEgcHVydXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+RnVzY2UgcGxhY2VyYXQgZW5pbSBldCBvZGlvIG1vbGVzdGllPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlBlbGxlbnRlc3F1ZSBhYyBiaWJlbmR1bSB0b3J0b3I8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+QW5kIG1vcmXigKY8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs3fT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9lYXN0ZXItYmF0dGxlLnBuZ1wiIGFsdD1cImJlbmVmaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb30+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1ODVweFwiIGhlaWdodD1cIjE1MXB4XCIgdmlld0JveD1cIjAgMCA1ODUgMTUxXCIgdmVyc2lvbj1cIjEuMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPVwiNjYuODQxMjg0NCVcIiB5MT1cIjMwLjYyNDI2JVwiIHgyPVwiLTIxLjA1ODE0NDclXCIgeTI9XCIxMDAlXCIgaWQ9XCJiZW5lZml0TGluZWFyR3JhZGllbnQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSBvZmZzZXQ9XCIwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0fSBvZmZzZXQ9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9XCI2Ni44NDEyODQ0JVwiIHkxPVwiMzAuNjI0MjYlXCIgeDI9XCItMjEuMDU4MTQ0NyVcIiB5Mj1cIjEwMCVcIiBpZD1cImJlbmVmaXRMaW5lYXJHcmFkaWVudC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbn0gb2Zmc2V0PVwiMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0fSBvZmZzZXQ9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiQmVuZWZpdC0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkJlbmVmaXQtMlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTQzLjAwMDAwMCwgLTg4LjAwMDAwMClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJCZW5lZml0LTNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTMyLjYyMzg2MiwgNzAuOTEyMDMyKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUsNjcuMzYyODE1OCBDMTUsNzAuMjQyMDE0MiAxNi41NDAwNjEzLDcyLjkwMjY0NTYgMTkuMDQwMTY5MSw3NC4zNDIyNDQ4IEw0NS44NDM1NTE4LDg5Ljc3NjcyMTIgQzQ4LjM0MzY1OTcsOTEuMjE2MzIwNCA1MS40MjM3ODIyLDkxLjIxNjMyMDQgNTMuOTIzODkwMSw4OS43NzY3MjEyIEw4MC43MjcyNzI3LDc0LjM0MjI0NDggQzgzLjIyNzM4MDYsNzIuOTAyNjQ1NiA4NC43Njc0NDE5LDcwLjI0MjAxNDIgODQuNzY3NDQxOSw2Ny4zNjI4MTU4IEw4NC43Njc0NDE5LDM2LjQ5MzczMzkgQzg0Ljc2NzQ0MTksMzMuNjE0NDA2NCA4My4yMjczODA2LDMwLjk1MzkwNDEgODAuNzI3MjcyNywyOS41MTQxNzU4IEw1My45MjM4OTAxLDE0LjA3OTY5OTQgQzUxLjQyMzc4MjIsMTIuNjQwMTAwMiA0OC4zNDM2NTk3LDEyLjY0MDEwMDIgNDUuODQzNTUxOCwxNC4wNzk2OTk0IEwxOS4wNDAxNjkxLDI5LjUxNDE3NTggQzE2LjU0MDA2MTMsMzAuOTUzOTA0MSAxNSwzMy42MTQ0MDY0IDE1LDM2LjQ5MzczMzkgTDE1LDY3LjM2MjgxNTggWlwiIGlkPVwiQmVuZWZpdEZpbGwtMVwiIGZpbGw9XCJ1cmwoI2JlbmVmaXRMaW5lYXJHcmFkaWVudC0zKVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0OS44ODM3MjEsIDUxLjkyODIxMCkgcm90YXRlKC0zMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTQ5Ljg4MzcyMSwgLTUxLjkyODIxMClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTIwLjU2MTE3MywxNDguMjUyNjAzIEM1MjAuNTYxMTczLDE1MS4xMzE4MDIgNTIyLjEwMTIzNCwxNTMuNzkyNDMzIDUyNC42MDEzNDIsMTU1LjIzMjAzMyBMNTUxLjQwNDcyNSwxNzAuNjY2NTA5IEM1NTMuOTA0ODMzLDE3Mi4xMDYxMDggNTU2Ljk4NDk1NSwxNzIuMTA2MTA4IDU1OS40ODUwNjMsMTcwLjY2NjUwOSBMNTg2LjI4ODQ0NiwxNTUuMjMyMDMzIEM1ODguNzg4NTUzLDE1My43OTI0MzMgNTkwLjMyODYxNSwxNTEuMTMxODAyIDU5MC4zMjg2MTUsMTQ4LjI1MjYwMyBMNTkwLjMyODYxNSwxMTcuMzgzNTIyIEM1OTAuMzI4NjE1LDExNC41MDQxOTQgNTg4Ljc4ODU1MywxMTEuODQzNjkyIDU4Ni4yODg0NDYsMTEwLjQwMzk2MyBMNTU5LjQ4NTA2Myw5NC45Njk0ODcxIEM1NTYuOTg0OTU1LDkzLjUyOTg4NzkgNTUzLjkwNDgzMyw5My41Mjk4ODc5IDU1MS40MDQ3MjUsOTQuOTY5NDg3MSBMNTI0LjYwMTM0MiwxMTAuNDAzOTYzIEM1MjIuMTAxMjM0LDExMS44NDM2OTIgNTIwLjU2MTE3MywxMTQuNTA0MTk0IDUyMC41NjExNzMsMTE3LjM4MzUyMiBMNTIwLjU2MTE3MywxNDguMjUyNjAzIFpcIiBpZD1cIkJlbmVmaXRGaWxsLTJcIiBmaWxsPVwidXJsKCNiZW5lZml0TGluZWFyR3JhZGllbnQtMilcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTU1LjQ0NDg5NCwgMTMyLjgxNzk5OCkgcm90YXRlKC0zMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTU1NS40NDQ4OTQsIC0xMzIuODE3OTk4KVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5CZW5lZml0LnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShCZW5lZml0KTtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBkZWNvQmVuZWZpdCBmcm9tICd+L3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tYmVuZWZpdC5zdmcnO1xyXG5pbXBvcnQgZGVjb0xpc3QgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWxpc3QucG5nJztcclxuXHJcbmNvbnN0IGJlbmVmaXRTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoOClcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoNClcclxuICAgIH1cclxuICB9LFxyXG4gIGRlc2M6IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAnJiBoNCc6IHtcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtXHJcbiAgICB9XHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDUpLFxyXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICBwYWRkaW5nTGVmdDogMCxcclxuICAgIGZvbnRTaXplOiAxOCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICB9LFxyXG4gICAgJyYgbGknOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzhweCcsXHJcbiAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtkZWNvTGlzdH0pIG5vLXJlcGVhdCAwIDEwcHhgXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAwLCAwKSxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJvdHRvbTogLTQwLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtYXhXaWR0aDogJzMwMHB4JyxcclxuICAgICcmIGltZyc6IHtcclxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVjbzoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDQwLFxyXG4gICAgcmlnaHQ6IDgwLFxyXG4gIH0sXHJcbiAgcGFyYWxsYXhXcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSxcclxuICBwYXJhbGxheFByb3BzOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7ZGVjb0JlbmVmaXR9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcmAsXHJcbiAgICBoZWlnaHQ6IDU0MCxcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJlbmVmaXRTdHlsZXM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0JlbmVmaXQnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2NhcmRzLXN0eWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHtcclxuICAgIHRleHQsXHJcbiAgICBuYW1lLFxyXG4gICAgdGl0bGUsXHJcbiAgICBhdmF0YXIsXHJcbiAgICBhY3RpdmVcclxuICB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRlc3RpbW9uaWFsfT5cclxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnBhcGVyLCBhY3RpdmUgPyBjbGFzc2VzLmFjdGl2ZSA6ICcnKX0+XHJcbiAgICAgICAgPEF2YXRhciBzcmM9e2F2YXRhcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0gZGlzcGxheT1cImJsb2NrXCI+e3RleHR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcHRpb259PlxyXG4gICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICB7LyogJm5ic3A7LSZuYnNwO1xyXG4gICAgICAgICAge3RpdGxlfSAqL31cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5UZXN0aW1vbmlhbC5wcm9wVHlwZXMgPSB7XHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5UZXN0aW1vbmlhbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZVxyXG59O1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IGNhcmRzU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHRlc3RpbW9uaWFsOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gIH0sXHJcbiAgYWN0aXZlOiB7fSxcclxuICBjYXB0aW9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIGhlaWdodDogMjUwLFxyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDApLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYm9yZGVyIDAuNHMgZWFzZS1vdXQnLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAxNSksXHJcbiAgICB9LFxyXG4gICAgJyYkYWN0aXZlJzoge1xyXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn1gXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgZGlzcGxheTogJy13ZWJraXQtYm94JyxcclxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGhlaWdodDogODAsXHJcbiAgICBmb250U2l6ZTogMTgsXHJcbiAgICAnLXdlYmtpdC1saW5lLWNsYW1wJzogMyxcclxuICAgICctd2Via2l0LWJveC1vcmllbnQnOiAndmVydGljYWwnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgJy13ZWJraXQtbGluZS1jbGFtcCc6IDQsXHJcbiAgICB9XHJcbiAgfSxcclxuICBhdmF0YXI6IHtcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s4XSxcclxuICAgIHdpZHRoOiA4MCxcclxuICAgIGhlaWdodDogODAsXHJcbiAgICBtYXJnaW46ICctMzJweCBhdXRvIDMycHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBtYXJnaW46ICctOTZweCBhdXRvIDMycHgnLFxyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcmRzU3R5bGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDb3VudFVwIGZyb20gJ3JlYWN0LWNvdW50dXAnO1xyXG5pbXBvcnQgUmVhY3RXT1cgZnJvbSAncmVhY3Qtd293JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgcm91dGVMaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9jb3VudGVyLXN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIENvdW50ZXIocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtwbGF5LCBzZXRQbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjb3VudHVwID0gKHZhbCwgaXNQbGF5KSA9PiAoXHJcbiAgICA8c3Bhbj5cclxuICAgICAge2lzUGxheSA/IDxDb3VudFVwIGVuZD17dmFsfSAvPiA6IDB9XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxuICBjb25zdCBoYW5kbGVQbGF5ID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHNldFBsYXkodHJ1ZSk7IH0sIDIwMCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY291bnRlcldyYXB9PlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgICA8UmVhY3RXT1cgYW5pbWF0aW9uPVwiZmFkZUluXCIgb2Zmc2V0PXsyMDB9IGNhbGxiYWNrPXtoYW5kbGVQbGF5fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17dGV4dC50aXRsZX0+XHJcbiAgICAgICAgICAgIHtjb3VudHVwKDIsIHBsYXkpfVxyXG4gICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAge2NvdW50dXAoMjM0LCBwbGF5KX1cclxuICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIHtjb3VudHVwKDU2NywgcGxheSl9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlfT5cclxuICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5mb290ZXJfY291bnRlcicpfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvUmVhY3RXT1c+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FsbEFjdGlvbn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20gY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlfT5cclxuICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5mb290ZXJfd2FpdGluZycpfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgaHJlZj17cm91dGVMaW5rLmNyeXB0by5yZWdpc3Rlcn0gY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5nZXRzdGFydGVkJyl9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5Db3VudGVyLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShDb3VudGVyKTtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBjb3VudGVyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGNvdW50ZXJXcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAnJiBoMyc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfSxcclxuICAgICcmIHAnOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjUpLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcclxuICAgIH1cclxuICB9LFxyXG4gIGNhbGxBY3Rpb246IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTdHlsZXM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NvdW50ZXInO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uJztcclxuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeSc7XHJcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHMnO1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gJ34vdGhlbWUvY29tbW9uJztcclxuaW1wb3J0IFBhcmFsbGF4IGZyb20gJy4uL1BhcmFsbGF4L0hleGFnb25hbCc7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mYXEtc3R5bGUnO1xyXG5cclxuY29uc3QgZmFxRGF0YSA9IFtcclxuICB7XHJcbiAgICBxOiAnSXMgdGhlIFRQIGNvaW4gRVJDLTIwIGNvbXBhdGlibGU/JyxcclxuICAgIGE6ICdZZXMsIFRQIENvaW4gaXMgYmFzZWQgb24gdGhlIEV0aGVyZXVtIGJsb2NrY2hhaW4gcGxhdGZvcm0gYW5kIEVSQy0yMCBjb21wYXRpYmxlLidcclxuICB9LFxyXG4gIHtcclxuICAgIHE6ICdBbSBJIGJ1eWluZyBvbiBteSBvd24gUmlzaz8nLFxyXG4gICAgYTogJ1llcywgeW91IGFyZSB0aGUgb25seSBwZXJzb24gcmVzcG9uc2libGUgZm9yIHlvdXIgb3duIGRlY2lzaW9ucy4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBxOiAnV2hlcmUgYW5kIGhvdyBkbyBJIGtlZXAgbXkgVFAgQ29pbj8nLFxyXG4gICAgYTogJ1lvdSBjYW4ga2VlcCB5b3VyIFRQIENvaW4gaW4gZXZlcnkgd2FsbGV0LCB3aGljaCBpcyBFUkMtMjAgY29tcGF0aWJsZSBhbmQgc3VwcG9ydHMgdGhlIFRQIENvaW4uJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcTogJ0lzIHRoZXJlIGEgcmVmdW5kIHJ1bGU/JyxcclxuICAgIGE6ICcgTm8uIEl0IGlzIG5vdCByZWZ1bmRhYmxlLidcclxuICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBGYXEocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJykpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBwYW5lbCA9PiAoZXZlbnQsIG5ld0V4cGFuZGVkKSA9PiB7XHJcbiAgICBzZXRFeHBhbmRlZChuZXdFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhbGxheH0+XHJcbiAgICAgICAgPFBhcmFsbGF4IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICA8VGl0bGUgdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmZhcV90aXRsZScpfSBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0gYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9IGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmZhcV9zdWJ0aXRsZScpfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlsbHVzdHJhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvNDk4LVtDb252ZXJ0ZWRdLnBuZ1wiIGFsdD1cImlsbHVzdHJhdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjY29yZGlvbn0+XHJcbiAgICAgICAgICAgICAge2ZhcURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0ga2V5PXtpbmRleC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMucGFwZXJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjbGFzc2VzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBjbGFzc2VzLmV4cGFuZGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+e2l0ZW0ucX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RXhwYW5kTW9yZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuZGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uYX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5GYXEucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKEZhcSk7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBsaWdodGVuLCBkYXJrZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XHJcbmltcG9ydCBkZWNvRmFxTGlnaHQgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWZhcS10b3AtbGlnaHQuc3ZnJztcclxuaW1wb3J0IGRlY29GYXFEYXJrIGZyb20gJ34vcHVibGljL2ltYWdlcy9jcnlwdG8vZGVjby1mYXEtdG9wLWRhcmsuc3ZnJztcclxuXHJcbmNvbnN0IGZhcVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGJhY2tncm91bmQ6IGB1cmwoJHt0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGRlY29GYXFEYXJrIDogZGVjb0ZhcUxpZ2h0fSkgdG9wIGNlbnRlciBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGRhcmtlbih0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyaywgMC42KSA6IGxpZ2h0ZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIDAuODQpLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygtMjApLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4bCcpXToge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDE1KSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMzAsIDAsIDE1KSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICAnJiAkaWNvbic6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogdGhlbWUuc3BhY2luZygyLjUpLFxyXG4gICAgICByaWdodDogdGhlbWUuc3BhY2luZygxKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFyYWxsYXg6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAtMTMwMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBsZWZ0OiAwXHJcbiAgfSxcclxuICBpbGx1c3RyYXRpb246IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICB3aWR0aDogMzAwLFxyXG4gICAgICBtYXJnaW46ICcwIGF1dG8nXHJcbiAgICB9XHJcbiAgfSxcclxuICBhY2NvcmRpb246IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgekluZGV4OiAxXHJcbiAgfSxcclxuICBpdGVtOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS5yb3VuZGVkLm1lZGl1bX0gIWltcG9ydGFudGAsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDIsIDEsIDApLFxyXG4gICAgZm9udFNpemU6IDE4LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgIH1cclxuICB9LFxyXG4gIGV4cGFuZGVkOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICcmICRoZWFkaW5nJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDAsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDBcclxuICAgIH0sXHJcbiAgICAnJiAkaWNvbic6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKSdcclxuICAgIH1cclxuICB9LFxyXG4gIGRldGFpbDoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICcmIHAnOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICBmb250U2l6ZTogMThcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0IDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZhcVN0eWxlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRmFxJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5GZWF0dXJlIGZyb20gJy4vTWFpbkZlYXR1cmUnO1xyXG5pbXBvcnQgTW9yZUZlYXR1cmUgZnJvbSAnLi9Nb3JlRmVhdHVyZSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mZWF0dXJlLXN0eWxlJztcclxuaW1wb3J0IFBhcmFsbGF4IGZyb20gJy4uL1BhcmFsbGF4L0hleGFnb25hbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxQYXJhbGxheCAvPlxyXG4gICAgICA8TWFpbkZlYXR1cmUgLz5cclxuICAgICAgPE1vcmVGZWF0dXJlIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgWm9vbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9ab29tJztcclxuaW1wb3J0IGltZ0FQSSBmcm9tICd+L3B1YmxpYy9pbWFnZXMvaW1nQVBJJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHl0IGZyb20gJ34veW91dHViZSc7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mZWF0dXJlLXN0eWxlJztcclxuXHJcbmNvbnN0IFRyYW5zaXRpb24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIHJlZikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgcmV0dXJuIDxab29tIHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+O1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIE1haW5GZWF0dXJlKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpKTtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtwbGF5ZXIsIHNldFBsYXllcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wZW5Qb3B1cCwgc2V0T3BlblBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgaWYgKHl0LnVzZSkge1xyXG4gICAgICBzZXRPcGVuUG9wdXAodHJ1ZSk7XHJcbiAgICAgIHBsYXllclswXS5wbGF5VmlkZW8oKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5Qb3B1cChmYWxzZSk7XHJcbiAgICBwbGF5ZXJbMF0ucGF1c2VWaWRlbygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IF9vblJlYWR5ID0gZXZlbnQgPT4ge1xyXG4gICAgcGxheWVyLnB1c2goZXZlbnQudGFyZ2V0KTtcclxuICAgIHNldFBsYXllcihwbGF5ZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wdHMgPSB7XHJcbiAgICBoZWlnaHQ6ICczNjAnLFxyXG4gICAgd2lkdGg6ICc2NDAnLFxyXG4gICAgcGxheWVyVmFyczogeyAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3BsYXllcl9wYXJhbWV0ZXJzXHJcbiAgICAgIGF1dG9wbGF5OiAwLFxyXG4gICAgICBjb250cm9sczogMSxcclxuICAgICAgcmVsOiAwLFxyXG4gICAgICBzaG93aW5mbzogMSxcclxuICAgICAgbXV0ZTogMCxcclxuICAgICAgb3JpZ2luOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwOCdcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkZlYXR1cmV9PlxyXG4gICAgICA8RGlhbG9nXHJcbiAgICAgICAgb3Blbj17b3BlblBvcHVwfVxyXG4gICAgICAgIFRyYW5zaXRpb25Db21wb25lbnQ9e1RyYW5zaXRpb259XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBjbGFzc2VzPXt7IHBhcGVyOiBjbGFzc2VzLnZpZGVvUG9wdXAgfX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJhbGVydC1kaWFsb2ctc2xpZGUtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctc2xpZGUtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXNsaWRlLXRpdGxlXCI+XHJcbiAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1haW5mZWF0dXJlX3RpdGxlJyl9XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnRufT5cclxuICAgICAgICAgICAgPENsb3NlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAge3l0LnVzZSAmJiAoXHJcbiAgICAgICAgICAgIDxZb3VUdWJlXHJcbiAgICAgICAgICAgICAgdmlkZW9JZD1cImg5M09mcWFrVkJJXCJcclxuICAgICAgICAgICAgICBvblJlYWR5PXtfb25SZWFkeX1cclxuICAgICAgICAgICAgICBvcHRzPXtvcHRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUaXRsZSB0ZXh0PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubWFpbmZlYXR1cmVfdGl0bGUnKX0gYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGRpc3BsYXk9XCJibG9ja1wiIGd1dHRlckJvdHRvbSBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30gY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0+XHJcbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tYWluZmVhdHVyZV9zdWJ0aXRsZScpfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMudmlkZW99PlxyXG4gICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvaW1hZ2VzL3ZpZGVvX2NvdmVyLmpwZ1wifSBhbHQ9XCJjb3ZlclwiIC8+XHJcbiAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnBsYXlCdG59IG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLXBsYXlcIiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmZlYXR1cmVXcmFwfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb30+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2ltYWdlcy9oZWxwLnN2Z1wifSBhbHQ9XCJkZWNvXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbk1haW5GZWF0dXJlLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShNYWluRmVhdHVyZSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0V09XIGZyb20gJ3JlYWN0LXdvdyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gJ34vdGhlbWUvY29tbW9uJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL1RpdGxlJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2ZlYXR1cmUtc3R5bGUnO1xyXG5cclxuY29uc3QgY29pbkRhdGEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0JUQycsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vYnRjLnBuZycsXHJcbiAgICBwcm9ncmVzczogNzUsXHJcbiAgICBjb2xvcjogJyNGQkE2MzAnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnREFTSCcsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vZGFzaC5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDQwLFxyXG4gICAgY29sb3I6ICcjMjFEM0Q3J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05BTicsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vbmFuLnBuZycsXHJcbiAgICBwcm9ncmVzczogOTAsXHJcbiAgICBjb2xvcjogJyM1NDhDQ0MnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTU5SJyxcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9tbnIucG5nJyxcclxuICAgIHByb2dyZXNzOiAzNSxcclxuICAgIGNvbG9yOiAnI0ZGNjYwMidcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdJT1QnLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2lvdC5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDgwLFxyXG4gICAgY29sb3I6ICcjQ0UwN0Q0J1xyXG4gIH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIE1vcmVGZWF0dXJlKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgW3BsYXksIHNldFBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpKTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKSk7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCB0aGVtZVByb2dyZXNzID0gY29sb3IgPT4gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogY29sb3JcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IGhhbmRsZVBsYXkgPSAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2V0UGxheSh0cnVlKTsgfSwgMjAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubW9yZUZlYXR1cmV9PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPXtpc0Rlc2t0b3B9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezZ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRleHQsIGlzTW9iaWxlICYmIGNsYXNzZXMuY2VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLWxvY2stb3V0bGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGUgdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1vcmVmZWF0dXJlX3RpdGxlMScpfSBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30gLz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9IGRpc3BsYXk9XCJibG9ja1wiIGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV9zdWJ0aXRsZTEnKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxSZWFjdFdPVyBhbmltYXRpb249XCJmYWRlSW5MZWZ0U2hvcnRcIiBkZWxheT1cIjAuM3NcIiBkdXJhdGlvbj1cIjAuM3NcIj5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmlsbHVzdHJhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jcnlwdG8vZGVjby1wcm9tby5wbmdcIiBhbHQ9XCJmZWF0dXJlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgIDwvUmVhY3RXT1c+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBkaXJlY3Rpb249e2lzTW9iaWxlID8gJ2NvbHVtbi1yZXZlcnNlJyA6ICdyb3cnfVxyXG4gICAgICAgICAgICBzcGFjaW5nPXs2fVxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8UmVhY3RXT1cgYW5pbWF0aW9uPVwiZmFkZUluUmlnaHRTaG9ydFwiIG9mZnNldD17LTEwMH0gZGVsYXk9XCIwLjNzXCIgZHVyYXRpb249XCIwLjNzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbGx1c3RyYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYnVybnQtY2FrZS5wbmdcIiBhbHQ9XCJmZWF0dXJlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgIDwvUmVhY3RXT1c+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRleHQsIGlzTW9iaWxlICYmIGNsYXNzZXMuY2VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLWFuYWx5dGljcy1vdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSB0ZXh0PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfdGl0bGUyJyl9IGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfSAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0gZGlzcGxheT1cImJsb2NrXCIgYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1vcmVmZWF0dXJlX3N1YnRpdGxlMicpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezEyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRleHQsIGNsYXNzZXMuY2VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLWZsYXNoLW91dGxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9IHRleHQ9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV90aXRsZTMnKX0gYWxpZ249XCJjZW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZGlzcGxheT1cImJsb2NrXCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV9zdWJ0aXRsZTMnKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgICAgICAgICAgIDxSZWFjdFdPVyBhbmltYXRpb249XCJmYWRlSW5cIiBvZmZzZXQ9ey0xMDB9IGR1cmF0aW9uPVwiMHNcIiBjYWxsYmFjaz17aGFuZGxlUGxheX0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzV3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvaW5EYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSBzcmM9e2l0ZW0ubG9nb30gYWx0PXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51bml0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VU0Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOzUuMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VVNEPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsxNS4wMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVQcm9ncmVzcyhpdGVtLmNvbG9yKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BsYXkgPyBpdGVtLnByb2dyZXNzIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMudHJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyOiBjbGFzc2VzLmJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0V09XPlxyXG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuTW9yZUZlYXR1cmUucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKE1vcmVGZWF0dXJlKTtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBmZWF0dXJlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIG1haW5GZWF0dXJlOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICB9XHJcbiAgfSxcclxuICB2aWRlbzoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNiwgMCwgMiksXHJcbiAgICAnJiBmaWd1cmUnOiB7XHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgICcmIGltZyc6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLjYyLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHZpZGVvUG9wdXA6IHtcclxuICAgIHdpZHRoOiA2OTAsXHJcbiAgICBtYXhXaWR0aDogJ25vbmUnXHJcbiAgfSxcclxuICBmZWF0dXJlV3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICB9LFxyXG4gIHBsYXlCdG46IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6IDE1MCxcclxuICAgIHRvcDogJzUwJScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICAnJiBzcGFuJzoge1xyXG4gICAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDEzMCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEyMGRlZywgJHt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodH0sICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0fSlgLFxyXG4gICAgICAgICctd2Via2l0LWJhY2tncm91bmQtY2xpcCc6ICd0ZXh0JyxcclxuICAgICAgICAnLXdlYmtpdC10ZXh0LWZpbGwtY29sb3InOiAndHJhbnNwYXJlbnQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNsb3NlQnRuOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogNCxcclxuICAgIHJpZ2h0OiA0LFxyXG4gIH0sXHJcbiAgZGVjbzoge1xyXG4gICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBtYXJnaW5Ub3A6IDgwLFxyXG4gICAgbGVmdDogODAsXHJcbiAgICB3aWR0aDogNDAwLFxyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgbGVmdCcsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb3VudGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgfSxcclxuICAgICcmID4gKic6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC41KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBsb3dlcjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMjApXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaWdoZXI6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgaGVpZ2h0OiAxNzQsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEsIDApLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDMpLFxyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCwgNCwgMCwgMCksXHJcbiAgICAgIHdpZHRoOiAxNzQsXHJcbiAgICB9LFxyXG4gICAgJyYgc3Bhbic6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBmb250U2l6ZTogNDhcclxuICAgIH0sXHJcbiAgICAnJiBoNic6IHtcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZFxyXG4gICAgfSxcclxuICAgICcmIHAnOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE2XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1vcmVGZWF0dXJlOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmIGZpZ3VyZSc6IHtcclxuICAgICAgbWFyZ2luOiAwXHJcbiAgICB9XHJcbiAgfSxcclxuICBjaGFydERlY286IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6IDQyMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgfSxcclxuICBpdGVtOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMTApLFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJiA+IHNwYW4nOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxyXG4gICAgICB0b3A6IC0xMCxcclxuICAgICAgbGVmdDogNyxcclxuICAgICAgZm9udFNpemU6IDM4LFxyXG4gICAgICB6SW5kZXg6IDIsXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbGx1c3RyYXRpb246IHtcclxuICAgICcmIGltZyc6IHtcclxuICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBtYXJnaW46ICcwIGF1dG8nXHJcbiAgICB9XHJcbiAgfSxcclxuICBjZW50ZXI6IHtcclxuICAgICcmIHNwYW4nOiB7XHJcbiAgICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDdweCknXHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9ncmVzc1dyYXA6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCA2KSxcclxuICAgIH0sXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgJyYgbGknOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIGg1Jzoge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogMTZcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBsb2dvOiB7fSxcclxuICBjb2luOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHdpZHRoOiAxMjAsXHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAnJiAkbG9nbyc6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICAgIGhlaWdodDogMjBcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcm9ncmVzczoge1xyXG4gICAgZmxleDogMSxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgIH1cclxuICB9LFxyXG4gIHVuaXQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAnJiBoNic6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICB9LFxyXG4gICAgICAnJiBzcGFuJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB0cmFjazoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5kaXZpZGVyLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIGhlaWdodDogJzhweCAhaW1wb3J0YW50JyxcclxuICB9LFxyXG4gIGJhcjoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZWF0dXJlU3R5bGVzO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9GZWF0dXJlJztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgTGFuZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xhbmd1YWdlJztcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXQnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL0xvZ28nO1xyXG5pbXBvcnQgYnJhbmQgZnJvbSAnfi9wdWJsaWMvdGV4dC9icmFuZCc7XHJcbmltcG9ydCBpbWdBcGkgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSSc7XHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mb290ZXItc3R5bGUnO1xyXG5cclxuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyJztcclxuaW1wb3J0IFRlbGVncmFtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVGVsZWdyYW0nO1xyXG5pbXBvcnQgTWVkaXVtSWNvbiBmcm9tICcuLi9pY29ucy9tZWRpdW0nO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBkaXNwbGF5PVwiYmxvY2tcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgQ29weXJpZ2h0IMKpIDIwMjEgVHJhZGluZ1BsYW5ldCB8IEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgZm9vdGVyID0ge1xyXG4gIGRlc2NyaXB0aW9uOiBbJ1Jlc291cmNlJywgJ0Fub3RoZXIgcmVzb3VyY2UnLCAnRmluYWwgcmVzb3VyY2UnLCAnUHJpdmFjeSBwb2xpY3knLCAnVGVybXMgb2YgdXNlJywgJ1Rlcm1zIENvbmRpdGlvbiddLFxyXG4gIGxpbms6IFsnI3Jlc291cmNlJywgJyNhbm90aGVyLXJlc291cmNlJywgJyNmaW5hbC1yZXNvdXJjZScsICcjcHJpdmFjeS1wb2xpY3knLCAnI3Rlcm1zLW9mLXVzZSddLFxyXG59O1xyXG5cclxuY29uc3QgbmV3cyA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiAnU2VkIGltcGVyZGlldCBlbmltIGxpZ3VsYSB2aXRhZSB2aXZlcnJhLicsXHJcbiAgICBpbWc6IGltZ0FwaS5waG90b1s1XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ1NlZCBpbXBlcmRpZXQgZW5pbSBsaWd1bGEgdml0YWUgdml2ZXJyYS4nLFxyXG4gICAgaW1nOiBpbWdBcGkucGhvdG9bNl1cclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdTZWQgaW1wZXJkaWV0IGVuaW0gbGlndWxhIHZpdGFlIHZpdmVycmEuJyxcclxuICAgIGltZzogaW1nQXBpLnBob3RvWzddXHJcbiAgfVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0biwgc2V0Q3RuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHQsIGludmVydCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIGxhbmc6ICdlbmcnLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VmFsdWVzKHsgbGFuZzogaTE4bi5sYW5ndWFnZSB9KTtcclxuICAgIHNldEN0bihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi13cmFwJykpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICBzZXRWYWx1ZXMob2xkVmFsdWVzID0+ICh7XHJcbiAgICAgIC4uLm9sZFZhbHVlcyxcclxuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSkpO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ2FyYScpIHtcclxuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZSgnYXJhJyk7XHJcbiAgICAgIHByb3BzLnRvZ2dsZURpcigncnRsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIHByb3BzLnRvZ2dsZURpcignbHRyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBmaXhlZCBjb21wb25lbnQ9XCJmb290ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5mb290ZXIsIGludmVydCAmJiBjbGFzc2VzLmludmVydCl9PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxyXG4gICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAge2JyYW5kLmNyeXB0by5wcm9qZWN0TmFtZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRQcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckRlc2N9IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl90aXRsZScpfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5xdWlja0xpbmtzfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuZm9vdGVyX2xpbmsnKX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2Zvb3Rlci5kZXNjcmlwdGlvbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Zvb3Rlci5saW5rW2luZGV4XX0gdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiB7bmV3cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbkJhc2UgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2dJdGVtfSBocmVmPVwiI1wiIGtleT17aW5kZXgudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWd9IGFsdD1cInRodW1iXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFRleHR9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmZvb3Rlcl9uZXdzJyl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZGlzcGxheT1cImJsb2NrXCIgY29tcG9uZW50PVwic3BhblwiPlNlZCBpbXBlcmRpZXQgZW5pbSBsaWd1bGEgdml0YWUgdml2ZXJyYS4gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICAgICAgICApKX0gKi99XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NtZWR9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3RyYWRpbmdwbGFuZXR4XCI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiVFdcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJJY29uIHN0eWxlPXt7Y29sb3I6ICcjZmZmJ319Lz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3QubWUvVHJhZGluZ1BsYW5ldEV4Y2hhbmdlXCI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiVE1cIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgPFRlbGVncmFtSWNvbiAgc3R5bGU9e3tjb2xvcjogJyNmZmYnfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcblxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vQFRyYWRpbmdQbGFuZXRFWFwiPlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIk1EXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNZWRpdW1JY29uIHN0eWxlPXt7Y29sb3I6ICcjZmZmJ319Lz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENvcHlyaWdodCAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5Gb290ZXIucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaW52ZXJ0OiBQcm9wVHlwZXMuYm9vbCxcclxuICB0b2dnbGVEaXI6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuRm9vdGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpbnZlcnQ6IGZhbHNlLFxyXG4gIHRvZ2dsZURpcjogKCkgPT4ge30sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShGb290ZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vQ291bnRlcic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mb290ZXItc3R5bGUnO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyV2l0aERlY28ocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyB0b2dnbGVEaXIgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJDb3VudGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb1RvcH0+XHJcbiAgICAgICAgPHN2Zz5cclxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiL2ltYWdlcy9jcnlwdG8vZGVjby1mb290ZXIuc3ZnI21haW5cIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxDb3VudGVyIC8+ICovfVxyXG4gICAgICA8Rm9vdGVyIHRvZ2dsZURpcj17dG9nZ2xlRGlyfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuRm9vdGVyV2l0aERlY28ucHJvcFR5cGVzID0ge1xyXG4gIHRvZ2dsZURpcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyV2l0aERlY287XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBmYWRlLCBsaWdodGVuLCBkYXJrZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XHJcblxyXG5jb25zdCBmb290ZXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbGluazoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEsIDEuNSksXHJcbiAgfSxcclxuICBpbnZlcnQ6IHt9LFxyXG4gIGZvb3Rlcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEwLCAwKSxcclxuICAgICcmIHAnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIHVsJzoge1xyXG4gICAgICBtYXJnaW46IDAsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICB9LFxyXG4gICAgJyYgbGknOiB7XHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgIHdpZHRoOiAnMzAlJyxcclxuICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICB3aWR0aDogJzQ3JSdcclxuICAgICAgfSxcclxuICAgICAgJyYgYSc6IHtcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSAhaW1wb3J0YW50JyxcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYkaW52ZXJ0Jzoge1xyXG4gICAgICAnJiBwJzoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxyXG4gICAgICB9LFxyXG4gICAgICAnJiBsaSBhJzoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkbG9nbyc6IHtcclxuICAgICAgICAnJiBoNic6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFya1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJyYgJHRpdGxlJzoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRibG9nSXRlbSc6IHtcclxuICAgICAgICAnJiAkY2F0ZWdvcnknOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJyYgJHNlbGVjdExhbmcnOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0LFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gIH0sXHJcbiAgcXVpY2tMaW5rczoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIHdpZHRoOiA2NCxcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgIH0sXHJcbiAgICAnJiBoNic6IHtcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgICAgZm9udFNpemU6IDI4LFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZm9vdGVyRGVzYzoge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc29jbWVkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAnJiBidXR0b24nOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICB3aWR0aDogMzYsXHJcbiAgICAgIGhlaWdodDogMzYsXHJcbiAgICAgICcmIGknOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgaSc6IHtcclxuICAgICAgZm9udFNpemU6IDI0XHJcbiAgICB9XHJcbiAgfSxcclxuICBpY29uOiB7fSxcclxuICBzZWxlY3RMYW5nOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5oZXJpdCcsXHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgMCwgNCksXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAnJiAkaWNvbic6IHtcclxuICAgICAgdG9wOiAyOSxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB9LFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXHJcbiAgICB9LFxyXG4gICAgJyYgZmllbGRzZXQnOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICAgIGJveFNoYWRvdzogJzAgMS41cHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXHJcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2ZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LCAwLjUpfSAhaW1wb3J0YW50YCxcclxuICAgICAgJyYgbGVnZW5kJzoge1xyXG4gICAgICAgIHRvcDogNSxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHtmYWRlKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCwgMC41KX1gXHJcbiAgICAgIH0sXHJcbiAgICAgICcmICsgZGl2ICsgZGl2Jzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lICFpbXBvcnRhbnQnLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMS41LCAxLjUsIDEuNSwgNCksXHJcbiAgICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSAzMnB4KScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHNlbGVjdE1lbnU6IHtcclxuICAgIHdpZHRoOiAxNjAsXHJcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZSAhaW1wb3J0YW50J1xyXG4gIH0sXHJcbiAgZm9vdGVyQ291bnRlcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyaywvL2BsaW5lYXItZ3JhZGllbnQoLTEzMGRlZywgJHt0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmsgOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSAtMjAlLCAke3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmsgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0gNzAlKWAsXHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDEwKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygyNSksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4bCcpXToge1xyXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDE1KSxcclxuICAgIH1cclxuICB9LFxyXG4gIGRlY29Ub3A6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAtMjAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6IDEyODAsXHJcbiAgICBoZWlnaHQ6IDQwMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yKSdcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoMTQwMCldOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDIsIDEpJ1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneGwnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuNCwgMSknLFxyXG4gICAgICBsZWZ0OiAtMzAwXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfSxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZGFya2VuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjYpIDogbGlnaHRlbih0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC44NCksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYXRlZ29yeToge30sXHJcbiAgbGlzdFRleHQ6IHt9LFxyXG4gIGJsb2dJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwKSxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgICcmICRjYXRlZ29yeSc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodFxyXG4gICAgfSxcclxuICAgICcmICRsaXN0VGV4dCc6IHtcclxuICAgICAgZmxleDogMSxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodFxyXG4gICAgfSxcclxuICAgICcmIGZpZ3VyZSc6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAyLCAwLCAwKSxcclxuICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICBoZWlnaHQ6IDU2LFxyXG4gICAgICAnJiBpbWcnOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgcCc6IHtcclxuICAgICAgZm9udFNpemU6IDEzLFxyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlclN0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBbmNob3JMaW5rIGZyb20gJ3JlYWN0LWFuY2hvci1saW5rLXNtb290aC1zY3JvbGwnO1xyXG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gJ3JlYWN0LXNjcm9sbHNweSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL1NldHRpbmdzJztcclxuaW1wb3J0IE1hcmtldFByaWNlIGZyb20gJy4vTWFya2V0UHJpY2UnO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuL01vYmlsZU1lbnUnO1xyXG5pbXBvcnQgcm91dGVMaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL0xvZ28nO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vaGVhZGVyLXN0eWxlJztcclxuaW1wb3J0IG5hdk1lbnUgZnJvbSAnLi9tZW51JztcclxuXHJcbmxldCBjb3VudGVyID0gMDtcclxuZnVuY3Rpb24gY3JlYXRlRGF0YShuYW1lLCB1cmwsIG9mZnNldCkge1xyXG4gIGNvdW50ZXIgKz0gMTtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IGNvdW50ZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgdXJsLFxyXG4gICAgb2Zmc2V0LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IExpbmtCdG4gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIExpbmtCdG4ocHJvcHMsIHJlZikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgcmV0dXJuIDxBbmNob3JMaW5rIHRvPXtwcm9wcy50b30gey4uLnByb3BzfSBpbm5lclJlZj17cmVmfSAvPjsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG4gIGNvbnN0IFtmaXhlZCwgc2V0Rml4ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGxldCBmbGFnRml4ZWQgPSBmYWxzZTtcclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzY3JvbGwgPSAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApIC0gKGRvYy5jbGllbnRUb3AgfHwgMCk7XHJcbiAgICBjb25zdCBuZXdGbGFnRml4ZWQgPSAoc2Nyb2xsID4gODApO1xyXG4gICAgaWYgKGZsYWdGaXhlZCAhPT0gbmV3RmxhZ0ZpeGVkKSB7XHJcbiAgICAgIHNldEZpeGVkKG5ld0ZsYWdGaXhlZCk7XHJcbiAgICAgIGZsYWdGaXhlZCA9IG5ld0ZsYWdGaXhlZDtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCB7XHJcbiAgICBvblRvZ2dsZURhcmssXHJcbiAgICBvblRvZ2dsZURpcixcclxuICAgIGludmVydCxcclxuICAgIHRcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKSk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJykpO1xyXG4gIGNvbnN0IFttZW51TGlzdF0gPSB1c2VTdGF0ZShbXHJcbiAgICBjcmVhdGVEYXRhKG5hdk1lbnVbMF0sICcjJyArIG5hdk1lbnVbMF0sIDEwMCksXHJcbiAgICBjcmVhdGVEYXRhKG5hdk1lbnVbMV0sICcjJyArIG5hdk1lbnVbMV0pLFxyXG4gICAgY3JlYXRlRGF0YShuYXZNZW51WzJdLCAnIycgKyBuYXZNZW51WzJdKSxcclxuICAgIGNyZWF0ZURhdGEobmF2TWVudVszXSwgJyMnICsgbmF2TWVudVszXSksXHJcbiAgXSk7XHJcbiAgY29uc3QgW29wZW5EcmF3ZXIsIHNldE9wZW5EcmF3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5EcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRHJhd2VyKCFvcGVuRHJhd2VyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHsgaXNNb2JpbGUgJiYgKDxNb2JpbGVNZW51IG9wZW49e29wZW5EcmF3ZXJ9IHRvZ2dsZURyYXdlcj17aGFuZGxlT3BlbkRyYXdlcn0gLz4pIH1cclxuICAgICAgeyFpbnZlcnQgJiYgKFxyXG4gICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgPE1hcmtldFByaWNlIC8+XHJcbiAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICl9XHJcbiAgICAgIDxBcHBCYXJcclxuICAgICAgICBjb21wb25lbnQ9XCJoZWFkZXJcIlxyXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgIGlkPVwiaGVhZGVyXCJcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICBjbGFzc2VzLmhlYWRlcixcclxuICAgICAgICAgIGZpeGVkICYmIGNsYXNzZXMuZml4ZWQsXHJcbiAgICAgICAgICBpbnZlcnQgJiYgY2xhc3Nlcy5pbnZlcnQsXHJcbiAgICAgICAgICBvcGVuRHJhd2VyICYmIGNsYXNzZXMub3BlbkRyYXdlclxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyIGZpeGVkPXtpc0Rlc2t0b3B9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyQ29udGVudH0+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubmF2TWVudSwgaW52ZXJ0ICYmIGNsYXNzZXMuaW52ZXJ0KX0+XHJcbiAgICAgICAgICAgICAgeyBpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVuRHJhd2VyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2hhbWJ1cmdlciBoYW1idXJnZXItLXNwaW4nLCBjbGFzc2VzLm1vYmlsZU1lbnUsIG9wZW5EcmF3ZXIgJiYgJ2lzLWFjdGl2ZScpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYmFyLCAnaGFtYnVyZ2VyLWlubmVyJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAge2ludmVydCA/IChcclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cm91dGVMaW5rLmNyeXB0by5ob21lfT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QW5jaG9yTGluayBocmVmPVwiI2hvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0FuY2hvckxpbms+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtpc0Rlc2t0b3AgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFNjcm9sbHNweVxyXG4gICAgICAgICAgICAgICAgICBpdGVtcz17bmF2TWVudX1cclxuICAgICAgICAgICAgICAgICAgY3VycmVudENsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHttZW51TGlzdC5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpbnZlcnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9mZnNldD17aXRlbS5vZmZzZXQgfHwgMH0gaHJlZj17Jy8nICsgaXRlbS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyXycgKyBpdGVtLm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17QW5jaG9yTGlua30gb2Zmc2V0PXtpdGVtLm9mZnNldCB8fCAwfSBocmVmPXtpdGVtLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfJyArIGl0ZW0ubmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj17cm91dGVMaW5rLmNyeXB0by5jb250YWN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyX2NvbnRhY3QnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsc3B5PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gLz5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubmF2TWVudSwgY2xhc3Nlcy5uYXZBdXRoKX0+XHJcbiAgICAgICAgICAgICAgPEhpZGRlbiB4c0Rvd24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9e3JvdXRlTGluay5jcnlwdG8ucmVnaXN0ZXJ9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl9sYXVuY2gnKX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5ncyB0b2dnbGVEYXJrPXtvblRvZ2dsZURhcmt9IHRvZ2dsZURpcj17b25Ub2dnbGVEaXJ9IGludmVydD17aW52ZXJ0fSAvPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBvblRvZ2dsZURhcms6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgb25Ub2dnbGVEaXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaW52ZXJ0OiBQcm9wVHlwZXMuYm9vbCxcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0aWNreTogZmFsc2UsXHJcbiAgaW52ZXJ0OiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoSGVhZGVyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vaGVhZGVyLXN0eWxlJztcclxuXHJcbmNvbnN0IG1hcmtldExpc3QgPSBbXHJcbiAge1xyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2J0Yy5wbmcnLFxyXG4gICAgbmFtZTogJ0JUQycsXHJcbiAgICBwcmljZTogMTAyMDAsXHJcbiAgICBzdGF0dXM6ICd1cCcsXHJcbiAgICBwZXJjZW50OiA4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL3hycC5wbmcnLFxyXG4gICAgbmFtZTogJ1hSUCcsXHJcbiAgICBwcmljZTogMC4wMDMsXHJcbiAgICBzdGF0dXM6ICdkb3duJyxcclxuICAgIHBlcmNlbnQ6IDMsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vbmVtLnBuZycsXHJcbiAgICBuYW1lOiAnTkVNJyxcclxuICAgIHByaWNlOiAwLjAwMyxcclxuICAgIHN0YXR1czogJ3VwJyxcclxuICAgIHBlcmNlbnQ6IDgsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vaW90LnBuZycsXHJcbiAgICBuYW1lOiAnSU9UQScsXHJcbiAgICBwcmljZTogMC4wMTAsXHJcbiAgICBzdGF0dXM6ICdkb3duJyxcclxuICAgIHBlcmNlbnQ6IDMsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vbW5yLnBuZycsXHJcbiAgICBuYW1lOiAnTU5SJyxcclxuICAgIHByaWNlOiAxLjQ1LFxyXG4gICAgc3RhdHVzOiAndXAnLFxyXG4gICAgcGVyY2VudDogOCxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9ieWMucG5nJyxcclxuICAgIG5hbWU6ICdCWUMnLFxyXG4gICAgcHJpY2U6IDIyLjM0LFxyXG4gICAgc3RhdHVzOiAnZG93bicsXHJcbiAgICBwZXJjZW50OiAzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2lvdC5wbmcnLFxyXG4gICAgbmFtZTogJ0lPVEEnLFxyXG4gICAgcHJpY2U6IDAuMDEwLFxyXG4gICAgc3RhdHVzOiAnZG93bicsXHJcbiAgICBwZXJjZW50OiAzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL21uci5wbmcnLFxyXG4gICAgbmFtZTogJ01OUicsXHJcbiAgICBwcmljZTogMS40NSxcclxuICAgIHN0YXR1czogJ3VwJyxcclxuICAgIHBlcmNlbnQ6IDgsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vYnljLnBuZycsXHJcbiAgICBuYW1lOiAnQllDJyxcclxuICAgIHByaWNlOiAyMi4zNCxcclxuICAgIHN0YXR1czogJ2Rvd24nLFxyXG4gICAgcGVyY2VudDogMyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFya2V0UHJpY2UoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZVxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUGVyY2VudCA9IChhcnJvdywgcGVyY2VudCkgPT4ge1xyXG4gICAgc3dpdGNoIChhcnJvdykge1xyXG4gICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRvd259PlxyXG4gICAgICAgICAgICA8aT7ilrw8L2k+XHJcbiAgICAgICAgICAgIHtwZXJjZW50fVxyXG4gICAgICAgICAgICAlXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudXB9PlxyXG4gICAgICAgICAgICA8aT7ilrI8L2k+XHJcbiAgICAgICAgICAgIHtwZXJjZW50fVxyXG4gICAgICAgICAgICAlXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnN0YXl9PlxyXG4gICAgICAgICAgICA8aT4tPC9pPlxyXG4gICAgICAgICAgICB7cGVyY2VudH1cclxuICAgICAgICAgICAgJVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFya2V0fT5cclxuICAgICAgPENhcm91c2VsIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge21hcmtldExpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0ga2V5PXtpbmRleC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29pbn0+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30gc3JjPXtpdGVtLmxvZ299IGFsdD17aXRlbS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgJm5ic3A7JCZuYnNwO1xyXG4gICAgICAgICAgICAgIHtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICZuYnNwOyhcclxuICAgICAgICAgICAgICB7cmVuZGVyUGVyY2VudChpdGVtLnN0YXR1cywgaXRlbS5wZXJjZW50KX1cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgU3dpcGVhYmxlRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXBlYWJsZURyYXdlcic7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgcm91dGVMaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9oZWFkZXItc3R5bGUnO1xyXG5pbXBvcnQgbmF2TWVudSBmcm9tICcuL21lbnUnO1xyXG5cclxuZnVuY3Rpb24gTW9iaWxlTWVudShwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHRvZ2dsZURyYXdlciwgb3BlbiwgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgU2lkZUxpc3QgPSAoKSA9PiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2JpbGVOYXZ9XHJcbiAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm1lbnUsIG9wZW4gJiYgY2xhc3Nlcy5tZW51T3Blbil9PlxyXG4gICAgICAgIDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiPlxyXG4gICAgICAgICAge25hdk1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICAgICAgICBocmVmPXtgIyR7aXRlbX1gfVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXgudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EdXJhdGlvbjogaW5kZXggKiAwLjE1ICsgJ3MnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfJyArIGl0ZW0pfSBjbGFzc05hbWU9e2NsYXNzZXMubWVudUxpc3R9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXHJcbiAgICAgICAgICAgIGhyZWY9e3JvdXRlTGluay5jcnlwdG8uY29udGFjdH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRHVyYXRpb246IG5hdk1lbnUubGVuZ3RoICogMC4xNSArICdzJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfY29udGFjdCcpfSBjbGFzc05hbWU9e2NsYXNzZXMubWVudUxpc3R9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJTaWRlYmFyfSAvPlxyXG4gICAgICAgICAge1snbG9naW4nLCAncmVnaXN0ZXInXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxyXG4gICAgICAgICAgICAgIGhyZWY9e3JvdXRlTGluay5jcnlwdG9baXRlbV19XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkR1cmF0aW9uOiBuYXZNZW51Lmxlbmd0aCAqIDAuMTUgKyAncycgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl8nICsgaXRlbSl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51TGlzdH0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN3aXBlYWJsZURyYXdlclxyXG4gICAgICBvcGVuPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgIG9uT3Blbj17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgcGFwZXI6IGNsYXNzZXMucGFwZXJOYXZcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFNpZGVMaXN0IC8+XHJcbiAgICA8L1N3aXBlYWJsZURyYXdlcj5cclxuICApO1xyXG59XHJcblxyXG5cclxuTW9iaWxlTWVudS5wcm9wVHlwZXMgPSB7XHJcbiAgdG9nZ2xlRHJhd2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKE1vYmlsZU1lbnUpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQb3BvdmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xyXG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVjayc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xyXG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2hlYWRlci1zdHlsZSc7XHJcblxyXG5sZXQgdGhlbWVUeXBlID0gJ2xpZ2h0JztcclxuaWYgKHR5cGVvZiBTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIHRoZW1lVHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsdXhpVGhlbWUnKSB8fCAnbGlnaHQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZXR0aW5ncyhwcm9wcykge1xyXG4gIGNvbnN0IFtjdG4sIHNldEN0bl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNEYXJrLCBzZXREYXJrXSA9IHVzZVN0YXRlKHRoZW1lVHlwZSA9PT0gJ2RhcmsnKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZU1vZGUgPSAoKSA9PiB7XHJcbiAgICBzZXREYXJrKCFpc0RhcmspO1xyXG4gICAgcHJvcHMudG9nZ2xlRGFyaygpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUxhbmcobGFuZykge1xyXG4gICAgaWYgKGxhbmcgPT09ICdhcmEnKSB7XHJcbiAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoJ2FyYScpO1xyXG4gICAgICBwcm9wcy50b2dnbGVEaXIoJ3J0bCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShsYW5nKTtcclxuICAgICAgcHJvcHMudG9nZ2xlRGlyKCdsdHInKTtcclxuICAgIH1cclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEN0bihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi13cmFwJykpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaWQgPSBvcGVuID8gJ3NpbXBsZS1wb3BvdmVyJyA6IHVuZGVmaW5lZDtcclxuICBjb25zdCB7IGludmVydCwgdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmd9PlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2lkfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTZXR0aW5nc1wiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGNsc3goXHJcbiAgICAgICAgICAgIGNsYXNzZXMuaWNvbixcclxuICAgICAgICAgICAgb3BlbiAmJiBjbGFzc2VzLmFjdGl2ZSxcclxuICAgICAgICAgICAgaW52ZXJ0ICYmIGNsYXNzZXMuaW52ZXJ0XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNldHRpbmdzSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNvbnRhaW5lcj17Y3RufVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcclxuICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcclxuICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibmF2XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RlTWVudX1cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJNb2RlLW1lbnVcIlxyXG4gICAgICAgICAgc3ViaGVhZGVyPXsoXHJcbiAgICAgICAgICAgIDxMaXN0U3ViaGVhZGVyIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyX3RoZW1lJyl9XHJcbiAgICAgICAgICAgIDwvTGlzdFN1YmhlYWRlcj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICA8R3JpZCBjb21wb25lbnQ9XCJsYWJlbFwiIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPnt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyX2xpZ2h0Jyl9PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzRGFya31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTW9kZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXNEYXJrfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnY2hlY2tib3gnIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPnt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyX2RhcmsnKX08L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhbmdNZW51fVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkxhbmd1YWdlLW1lbnVcIlxyXG4gICAgICAgICAgc3ViaGVhZGVyPXsoXHJcbiAgICAgICAgICAgIDxMaXN0U3ViaGVhZGVyIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyX2xhbmd1YWdlJyl9XHJcbiAgICAgICAgICAgIDwvTGlzdFN1YmhlYWRlcj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2kxOG4ub3B0aW9ucy5hbGxMYW5ndWFnZXMgJiYgaTE4bi5vcHRpb25zLmFsbExhbmd1YWdlcy5tYXAodmFsID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAga2V5PXt2YWx9XHJcbiAgICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlTGFuZyh2YWwpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17dmFsfSAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dCgnY29tbW9uOicgKyB2YWwpfSAvPlxyXG4gICAgICAgICAgICAgIHtpMThuLmxhbmd1YWdlID09PSB2YWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uIGNvbG9yPVwicHJpbWFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvUG9wb3Zlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblNldHRpbmdzLnByb3BUeXBlcyA9IHtcclxuICB0b2dnbGVEYXJrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHRvZ2dsZURpcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGludmVydDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5TZXR0aW5ncy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaW52ZXJ0OiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY29tbW9uJywgJ2NyeXB0by1sYW5kaW5nJ10pKFNldHRpbmdzKTtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGZhZGUsIGRhcmtlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcclxuaW1wb3J0IGZsYWcgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2ZsYWctbG9nby5wbmcnO1xyXG5cclxuY29uc3QgZmxhZ0ljb24gPSB7XHJcbiAgd2lkdGg6IDE2LFxyXG4gIGhlaWdodDogMTYsXHJcbiAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICBtYXJnaW5SaWdodDogNSxcclxuICB0b3A6IDEsXHJcbiAgYmFja2dyb3VuZDogYHVybCgke2ZsYWd9KSBuby1yZXBlYXQgdHJhbnNwYXJlbnRgLFxyXG4gIGJhY2tncm91bmRTaXplOiAnMTZweCBhdXRvJyxcclxuICAnJltjbGFzcz1cImFyYVwiXSc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgM3B4J1xyXG4gIH0sXHJcbiAgJyZbY2xhc3M9XCJ6aG9cIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwIC0xMnB4J1xyXG4gIH0sXHJcbiAgJyZbY2xhc3M9XCJlbmdcIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwIC0yOHB4J1xyXG4gIH0sXHJcbiAgJyZbY2xhc3M9XCJkZXVcIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwIC00NHB4J1xyXG4gIH0sXHJcbiAgJyZbY2xhc3M9XCJpbmRcIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwIC02MnB4J1xyXG4gIH0sXHJcbiAgJyZbY2xhc3M9XCJwcnRcIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwIC03OXB4J1xyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBoZWFkZXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgJ0BrZXlmcmFtZXMgc2xpZGVSaWdodCc6IHtcclxuICAgIGZyb206IHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwcHgpJ1xyXG4gICAgfSxcclxuICAgIHRvOiB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHRyYW5zZm9ybTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBmaXhlZDoge30sXHJcbiAgaW52ZXJ0OiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAnJiAkbW9iaWxlTWVudSc6IHtcclxuICAgICAgJyYgJGJhcic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgICAgICAgJyY6YWZ0ZXIsICY6YmVmb3JlJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb3BlbkRyYXdlcjoge30sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgfSxcclxuICAgICcmID4gKic6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmJGZpeGVkJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssIDAuNSkgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgcGFkZGluZ1RvcDogMCxcclxuICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQgMC4zcyBlYXNlJyxcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgICAnJiAkbG9nbyc6IHtcclxuICAgICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ4LFxyXG4gICAgICAgICAgd2lkdGg6IDQ4LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJyYgJGhlYWRlckNvbnRlbnQnOiB7XHJcbiAgICAgICAgJyYgbmF2Jzoge1xyXG4gICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJyYgJG5hdk1lbnUnOiB7XHJcbiAgICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkZGl2aWRlcic6IHtcclxuICAgICAgICBib3JkZXJMZWZ0Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkbW9iaWxlTWVudSc6IHtcclxuICAgICAgICAnJiAkYmFyJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICAgICcmOmFmdGVyLCAmOmJlZm9yZSc6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYkb3BlbkRyYXdlcic6IHtcclxuICAgICAgekluZGV4OiAxNjAwLFxyXG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICAnJiRpbnZlcnQnOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IDAsXHJcbiAgICAgICcmICRuYXZNZW51Jzoge1xyXG4gICAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiBhJzoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgICAgJyYkYnV0dG9uJzoge1xyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRkaXZpZGVyJzoge1xyXG4gICAgICAgIGJvcmRlckxlZnRDb2xvcjogdGhlbWUucGFsZXR0ZS5kaXZpZGVyXHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRtb2JpbGVNZW51Jzoge1xyXG4gICAgICAgICcmICRiYXInOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5fWAsXHJcbiAgICAgICAgICAnJjphZnRlciwgJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnl9YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH1cclxuICB9LFxyXG4gIGhlYWRlckNvbnRlbnQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICcmIG5hdic6IHtcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgMCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgJyYgYSc6IHtcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICAnJiBpbWcnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgIHdpZHRoOiA2NCxcclxuICAgICAgaGVpZ2h0OiA2NCxcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgICAgd2lkdGg6IDQ4LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmU6IHt9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMTUpLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLjUpXHJcbiAgfSxcclxuICBuYXZNZW51OiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgICcmID4gKic6IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgYSc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAuNSwgMSksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAzKSxcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgbWFyZ2luOiAwXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgdWwnOiB7XHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMCxcclxuICAgICAgJyYgbGknOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICAgICAgICBtaW5XaWR0aDogMCxcclxuICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMS41KSxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogNixcclxuICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLW91dCcsXHJcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlfWAsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJltjbGFzcz1cImFjdGl2ZVwiXSc6IHtcclxuICAgICAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMS41cHggMzJweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4yMiknLFxyXG4gICAgICAgICAgICBjb2xvcjogYCR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59ICFpbXBvcnRhbnRgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssIDAuMykgOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjg0KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG5hdkF1dGg6IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgZmxleDogMSxcclxuICAgIH1cclxuICB9LFxyXG4gIGxhbmdNZW51OiB7XHJcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICAnJiBpJzoge1xyXG4gICAgICAuLi5mbGFnSWNvblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9kZU1lbnU6IHtcclxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICB9LFxyXG4gIGljb246IHt9LFxyXG4gIHNldHRpbmc6IHtcclxuICAgICcmICRpY29uJzoge1xyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICAnJiAkYWN0aXZlJzoge1xyXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMzBkZWcpJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYmFyOiB7fSxcclxuICBtZW51OiB7fSxcclxuICBwYXBlck5hdjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZGFya2VuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjUpIDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoNjgwKV06IHtcclxuICAgICAgd2lkdGg6IDMwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb2JpbGVNZW51OiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgICAnJiAkYmFyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlfWAsXHJcbiAgICAgICcmOmFmdGVyLCAmOmJlZm9yZSc6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlfWBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmW2NsYXNzKj1cImlzLWFjdGl2ZVwiXSc6IHtcclxuICAgICAgJyYgJGJhcic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlfSAhaW1wb3J0YW50YCxcclxuICAgICAgICAnJjphZnRlciwgJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlfSAhaW1wb3J0YW50YFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH1cclxuICB9LFxyXG4gIG1vYmlsZU5hdjoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgJyYgJG1lbnUnOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgNSksXHJcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgIHRvcDogODAsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBoZWlnaHQ6ICdjYWxjKDEwMCUgLSA4MHB4KScsXHJcbiAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uTmFtZTogJyRzbGlkZVJpZ2h0JyxcclxuICAgICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2Vhc2UnXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZW51TGlzdDoge1xyXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgJyYgc3Bhbic6IHtcclxuICAgICAgZm9udFNpemU6IDI0XHJcbiAgICB9XHJcbiAgfSxcclxuICBkaXZpZGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXHJcbiAgICBoZWlnaHQ6IDI4XHJcbiAgfSxcclxuICBtYXJrZXQ6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgekluZGV4OiAxMjAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6IDQwLFxyXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC41KScsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgfSxcclxuICBpdGVtOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSwgNCksXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgb3V0bGluZTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb2luOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAnJiAkbG9nbyc6IHtcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICAgJyYgaW1nJzoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgaSc6IHtcclxuICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZG93bjoge1xyXG4gICAgY29sb3I6ICcjRkY3MjcyJ1xyXG4gIH0sXHJcbiAgdXA6IHtcclxuICAgIGNvbG9yOiAnIzVERDY2MidcclxuICB9LFxyXG4gIHN0YXk6IHtcclxuICAgIGNvbG9yOiAnI2IyYjJiMidcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTdHlsZXM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0hlYWRlcic7XHJcbiIsImNvbnN0IG1lbnUgPSBbXHJcbiAgJ3Byb21vdGlvbnMnLFxyXG4gICdmZWF0dXJlJyxcclxuICAnYmVuZWZpdCcsXHJcbiAgJ3Rlc3RpbW9uaWFscydcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28ocHJvcHMpIHtcclxuICAgIGNvbnN0IGZpbGwgPSBcIiMwYjAwNTVcIlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDkwMCA5MDBcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD17ZmlsbH1kPVwiTTE1MTYuOCw2NTYuODRIMTIwNS40MlY3NzUuMTJoMTA4LjE2djM2Mi42N2gwYTExOC4yOSwxMTguMjksMCwwLDAsMTE4LjI4LTExOC4yOHYtMjQyaDk3LjY0Vjk5My40MmgwYTEwOCwxMDgsMCwwLDAsMTA4LTEwOHYtMTA4aDBBMTIwLjY2LDEyMC42NiwwLDAsMCwxNTE2LjgsNjU2Ljg0WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNzUzLjU5IC00MzEuNjgpXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9e2ZpbGx9ZD1cIk0xMzE4LDUzMi4xMmEzNDAsMzQwLDAsMCwxLDEwNy4zNC0xOS42Nyw2Ny45MSw2Ny45MSwwLDAsMCwxMjUuMzEsMjEuMzksMzM5LjYzLDMzOS42MywwLDAsMSwyMDIsMjA1cTEuMjEsMy40MiwyLjM1LDYuODQtNC4xNC0xNS43OC05LjcxLTMxLjQ3YTM4MS4wOSwzODEuMDksMCwwLDAtMTg1LjQ4LTIxMmMwLS40Ny4wNS0uOTMuMDYtMS40QTY3LjksNjcuOSwwLDAsMCwxNDM0LjgsNDYzYTM4MC44MywzODAuODMsMCwwLDAtMTc3LjksMTguODljLTE5OSw3MC43My0zMDMsMjg5LjQyLTIzMi4zMiw0ODguNDVhMzg0LjY0LDM4NC42NCwwLDAsMCwyNy44NSw2MSw4NS41Myw4NS41MywwLDAsMCwxMDcuMTksMTIwYzk4LjYyLDcxLjc4LDIyOS44LDk1LjI3LDM1My40MSw1MS4zNWEzODAuNTksMzgwLjU5LDAsMCwwLDE2NS0xMTQuNkEzMzguODcsMzM4Ljg3LDAsMCwxLDE1NDYsMTE3My41OGMtMTIxLjE3LDQzLjA2LTI1MC41MiwxMy4zMy0zNDAuMzEtNjYuNDVhODUuNTMsODUuNTMsMCwwLDAtNzYuNDQtMTIwLjYxLDg3LjkzLDg3LjkzLDAsMCwwLTEwLC40MmMtMi44MS02LjU4LTUuNDYtMTMuMjgtNy45LTIwLjEyQzEwNDguMzEsNzg5LjY5LDExNDAuODcsNTk1LjA2LDEzMTgsNTMyLjEyWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNzUzLjU5IC00MzEuNjgpXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQgU25hY2tiYXJDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyQ29udGVudCc7XHJcbmltcG9ydCBTbGlkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9ub3RpZmljYXRpb24tc3R5bGUnO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5cclxuZnVuY3Rpb24gVHJhbnNpdGlvblVwKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxTbGlkZSB7Li4ucHJvcHN9IGRpcmVjdGlvbj1cInVwXCIgLz47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbihwcm9wcykge1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNuYWNrYmFyXHJcbiAgICAgIFRyYW5zaXRpb25Db21wb25lbnQ9e1RyYW5zaXRpb25VcH1cclxuICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgcm9vdDogY2xhc3Nlcy5ub3RpZmljYXRpb24sXHJcbiAgICAgIH19XHJcbiAgICAgIG9wZW49e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgPlxyXG4gICAgICA8U25hY2tiYXJDb250ZW50XHJcbiAgICAgICAgbWVzc2FnZT17PFR5cG9ncmFwaHkgaWQ9XCJtZXNzYWdlLWlkXCI+e3QoJ2NvbW1vbjpub3RpZl9tc2cnKX08L1R5cG9ncmFwaHk+fVxyXG4gICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgIGFjdGlvbjogY2xhc3Nlcy5hY3Rpb25cclxuICAgICAgICB9fVxyXG4gICAgICAgIGFjdGlvbj17KFxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgIHt0KCdjb21tb246YWNjZXB0Jyl9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9TbmFja2Jhcj5cclxuICApO1xyXG59XHJcblxyXG5Ob3RpZmljYXRpb24ucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjb21tb24nXSkoTm90aWZpY2F0aW9uKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTm90aWZpY2F0aW9uJztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBub3RpZmljYXRpb25TdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbm90aWZpY2F0aW9uOiB7XHJcbiAgICB3aWR0aDogJzk1JScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgIH0sXHJcbiAgICAnJiA+IGRpdic6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnIzQyNDI0MicsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDQpLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiA+IGRpdjpmaXJzdC1jaGlsZCc6IHtcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMilcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogMTUwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFjdGlvbjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIG1hcmdpbjogMFxyXG4gICAgfVxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90aWZpY2F0aW9uU3R5bGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBBbmNob3JMaW5rIGZyb20gJ3JlYWN0LWFuY2hvci1saW5rLXNtb290aC1zY3JvbGwnO1xyXG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gJ3JlYWN0LXNjcm9sbHNweSc7XHJcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcclxuaW1wb3J0IEFycm93SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dVcHdhcmQnO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IG5hdk1lbnUgZnJvbSAnLi4vSGVhZGVyL21lbnUnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vcGFnZW5hdi1zdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKGlkLCBuYW1lLCB1cmwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQsXHJcbiAgICBuYW1lLFxyXG4gICAgdXJsLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IExpbmtCdG4gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIExpbmtCdG4ocHJvcHMsIHJlZikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgcmV0dXJuIDxBbmNob3JMaW5rIHRvPXtwcm9wcy50b30gey4uLnByb3BzfSAvPjsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFBhZ2VOYXYocHJvcHMpIHtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBsZXQgZmxhZ1Nob3cgPSBmYWxzZTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgY29uc3Qgc2Nyb2xsID0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2Muc2Nyb2xsVG9wKSAtIChkb2MuY2xpZW50VG9wIHx8IDApO1xyXG4gICAgY29uc3QgbmV3RmxhZ1Nob3cgPSAoc2Nyb2xsID4gNTAwKTtcclxuICAgIGlmIChmbGFnU2hvdyAhPT0gbmV3RmxhZ1Nob3cpIHtcclxuICAgICAgc2V0U2hvdyhuZXdGbGFnU2hvdyk7XHJcbiAgICAgIGZsYWdTaG93ID0gbmV3RmxhZ1Nob3c7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBjb25zb2xlLmxvZygpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW21lbnVMaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgIGNyZWF0ZURhdGEoMSwgbmF2TWVudVswXSwgJyMnICsgbmF2TWVudVswXS5yZXBsYWNlKC8gL2csICdfJykpLFxyXG4gICAgY3JlYXRlRGF0YSgyLCBuYXZNZW51WzFdLCAnIycgKyBuYXZNZW51WzFdLnJlcGxhY2UoLyAvZywgJ18nKSksXHJcbiAgICBjcmVhdGVEYXRhKDMsIG5hdk1lbnVbMl0sICcjJyArIG5hdk1lbnVbMl0ucmVwbGFjZSgvIC9nLCAnXycpKSxcclxuICAgIGNyZWF0ZURhdGEoNCwgbmF2TWVudVszXSwgJyMnICsgbmF2TWVudVszXS5yZXBsYWNlKC8gL2csICdfJykpLFxyXG4gIF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnBhZ2VOYXYsIHNob3cgJiYgY2xhc3Nlcy5zaG93KX0+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25OYXZ9PlxyXG4gICAgICAgIDxTY3JvbGxzcHlcclxuICAgICAgICAgIGl0ZW1zPXtuYXZNZW51fVxyXG4gICAgICAgICAgY3VycmVudENsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyBtZW51TGlzdC5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRvcDogMzAgKiAobmF2TWVudS5sZW5ndGggLSBpdGVtLmlkKSB9fVxyXG4gICAgICAgICAgICAgIGRhdGEtaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfJyArIGl0ZW0ubmFtZSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBbmNob3JMaW5rIGhyZWY9e2l0ZW0udXJsfSAvPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpIH1cclxuICAgICAgICA8L1Njcm9sbHNweT5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgdGl0bGU9XCJUbyBUb3BcIlxyXG4gICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgIHRvb2x0aXA6IGNsYXNzZXMudG9vbHRpcFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8RmFiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvIHRvcFwiXHJcbiAgICAgICAgICBjb21wb25lbnQ9e0xpbmtCdG59XHJcbiAgICAgICAgICBocmVmPVwiI2hvbWVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZhYn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QXJyb3dJY29uIC8+XHJcbiAgICAgICAgPC9GYWI+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblBhZ2VOYXYucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShQYWdlTmF2KTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUGFnZU5hdic7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgcGFnZW5hdiA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBzaG93OiB7fSxcclxuICBmYWI6IHtcclxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuNSknLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzIGVhc2UnLFxyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgaGVpZ2h0OiA0MFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZU5hdjoge1xyXG4gICAgekluZGV4OiAyMDAsXHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIGJvdHRvbTogNDAsXHJcbiAgICByaWdodDogNDAsXHJcbiAgICAnJiBuYXYnOiB7XHJcbiAgICAgIHRyYW5zaXRpb246ICdoZWlnaHQgMC41cyBlYXNlJyxcclxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiAnMC41cycsXHJcbiAgICAgIGhlaWdodDogMCxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgJyYkc2hvdyc6IHtcclxuICAgICAgJyYgJGZhYic6IHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmIHVsJzoge1xyXG4gICAgICBtYXJnaW46ICcwIDAgMTZweCAyMnB4JyxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgIH0sXHJcbiAgICAnJiBsaSc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcclxuICAgICAgJyYgYSc6IHtcclxuICAgICAgICB3aWR0aDogMTIsXHJcbiAgICAgICAgaGVpZ2h0OiAxMixcclxuICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmt9YCxcclxuICAgICAgICBvcGFjaXR5OiAwLjMsXHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNHMgZWFzZScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxyXG4gICAgICB9LFxyXG4gICAgICAnJltjbGFzcz1cImFjdGl2ZVwiXSBhJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0fWAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICcmIGxpJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdG9wOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgfSxcclxuICAgICAgJyYgbmF2Jzoge1xyXG4gICAgICAgIHRyYW5zaXRpb25EZWxheTogJzBzJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b29sdGlwOiB7XHJcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlbmF2O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgUGFyYWxsYXgsIFBhcmFsbGF4UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vcGFyYWxsYXgtc3R5bGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFyYWxsYXhDbG91ZCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucGFyYWxsYXhXcmFwLCBjbGFzc2VzLmRvdHNXcmFwKX0+XHJcbiAgICAgIDxQYXJhbGxheFByb3ZpZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaW5uZXJQYXJhbGxheCwgY2xhc3Nlcy5sYXJnZSl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGV4YVdyYXB9PlxyXG4gICAgICAgICAgICA8UGFyYWxsYXhcclxuICAgICAgICAgICAgICB5PXtbMjAsIDIwXX1cclxuICAgICAgICAgICAgICB0YWdPdXRlcj1cImZpZ3VyZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucmlnaHRUb3BCYWNrLCBjbGFzc2VzLmJpZyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXhhQmFja30+XHJcbiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIi9pbWFnZXMvY3J5cHRvL3BhcmFsbGF4LWJhY2syLnN2ZyNtYWluXCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgICAgPFBhcmFsbGF4XHJcbiAgICAgICAgICAgICAgeT17WzIwLCAyMF19XHJcbiAgICAgICAgICAgICAgdGFnT3V0ZXI9XCJmaWd1cmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJpZ2h0VG9wRnJvbnQsIGNsYXNzZXMuc21hbGwpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjU4NXB4XCIgaGVpZ2h0PVwiMTUxcHhcIiB2aWV3Qm94PVwiMCAwIDU4NSAxNTFcIiB2ZXJzaW9uPVwiMS4xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNDMuMDAwMDAwLCAtODguMDAwMDAwKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzIuNjIzODYyLCA3MC45MTIwMzIpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUyMC41NjExNzMsMTQ4LjI1MjYwMyBDNTIwLjU2MTE3MywxNTEuMTMxODAyIDUyMi4xMDEyMzQsMTUzLjc5MjQzMyA1MjQuNjAxMzQyLDE1NS4yMzIwMzMgTDU1MS40MDQ3MjUsMTcwLjY2NjUwOSBDNTUzLjkwNDgzMywxNzIuMTA2MTA4IDU1Ni45ODQ5NTUsMTcyLjEwNjEwOCA1NTkuNDg1MDYzLDE3MC42NjY1MDkgTDU4Ni4yODg0NDYsMTU1LjIzMjAzMyBDNTg4Ljc4ODU1MywxNTMuNzkyNDMzIDU5MC4zMjg2MTUsMTUxLjEzMTgwMiA1OTAuMzI4NjE1LDE0OC4yNTI2MDMgTDU5MC4zMjg2MTUsMTE3LjM4MzUyMiBDNTkwLjMyODYxNSwxMTQuNTA0MTk0IDU4OC43ODg1NTMsMTExLjg0MzY5MiA1ODYuMjg4NDQ2LDExMC40MDM5NjMgTDU1OS40ODUwNjMsOTQuOTY5NDg3MSBDNTU2Ljk4NDk1NSw5My41Mjk4ODc5IDU1My45MDQ4MzMsOTMuNTI5ODg3OSA1NTEuNDA0NzI1LDk0Ljk2OTQ4NzEgTDUyNC42MDEzNDIsMTEwLjQwMzk2MyBDNTIyLjEwMTIzNCwxMTEuODQzNjkyIDUyMC41NjExNzMsMTE0LjUwNDE5NCA1MjAuNTYxMTczLDExNy4zODM1MjIgTDUyMC41NjExNzMsMTQ4LjI1MjYwMyBaXCIgZmlsbD1cInVybCgjaGV4YUxpbmVhckdyYWRpZW50LTIpXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU1NS40NDQ4OTQsIDEzMi44MTc5OTgpIHJvdGF0ZSgtMzMwLjAwMDAwMCkgdHJhbnNsYXRlKC01NTUuNDQ0ODk0LCAtMTMyLjgxNzk5OClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXhhV3JhcH0+XHJcbiAgICAgICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgICAgIHk9e1s0MCwgNDBdfVxyXG4gICAgICAgICAgICAgIHRhZ091dGVyPVwiZmlndXJlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5sZWZ0Qm90dG9tQmFjaywgY2xhc3Nlcy5iaWcpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXMuaGV4YUJhY2t9PlxyXG4gICAgICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIvaW1hZ2VzL2NyeXB0by9wYXJhbGxheC1iYWNrMy5zdmcjbWFpblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgICAgIHk9e1s0MCwgNDBdfVxyXG4gICAgICAgICAgICAgIHRhZ091dGVyPVwiZmlndXJlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5sZWZ0Qm90dG9tRnJvbnQsIGNsYXNzZXMuc21hbGwpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjU4NXB4XCIgaGVpZ2h0PVwiMTUxcHhcIiB2aWV3Qm94PVwiMCAwIDU4NSAxNTFcIiB2ZXJzaW9uPVwiMS4xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNDMuMDAwMDAwLCAtODguMDAwMDAwKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzIuNjIzODYyLCA3MC45MTIwMzIpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LDY3LjM2MjgxNTggQzE1LDcwLjI0MjAxNDIgMTYuNTQwMDYxMyw3Mi45MDI2NDU2IDE5LjA0MDE2OTEsNzQuMzQyMjQ0OCBMNDUuODQzNTUxOCw4OS43NzY3MjEyIEM0OC4zNDM2NTk3LDkxLjIxNjMyMDQgNTEuNDIzNzgyMiw5MS4yMTYzMjA0IDUzLjkyMzg5MDEsODkuNzc2NzIxMiBMODAuNzI3MjcyNyw3NC4zNDIyNDQ4IEM4My4yMjczODA2LDcyLjkwMjY0NTYgODQuNzY3NDQxOSw3MC4yNDIwMTQyIDg0Ljc2NzQ0MTksNjcuMzYyODE1OCBMODQuNzY3NDQxOSwzNi40OTM3MzM5IEM4NC43Njc0NDE5LDMzLjYxNDQwNjQgODMuMjI3MzgwNiwzMC45NTM5MDQxIDgwLjcyNzI3MjcsMjkuNTE0MTc1OCBMNTMuOTIzODkwMSwxNC4wNzk2OTk0IEM1MS40MjM3ODIyLDEyLjY0MDEwMDIgNDguMzQzNjU5NywxMi42NDAxMDAyIDQ1Ljg0MzU1MTgsMTQuMDc5Njk5NCBMMTkuMDQwMTY5MSwyOS41MTQxNzU4IEMxNi41NDAwNjEzLDMwLjk1MzkwNDEgMTUsMzMuNjE0NDA2NCAxNSwzNi40OTM3MzM5IEwxNSw2Ny4zNjI4MTU4IFpcIiBmaWxsPVwidXJsKCNoZXhhTGluZWFyR3JhZGllbnQtMylcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDkuODgzNzIxLCA1MS45MjgyMTApIHJvdGF0ZSgtMzMwLjAwMDAwMCkgdHJhbnNsYXRlKC00OS44ODM3MjEsIC01MS45MjgyMTApXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BhcmFsbGF4UHJvdmlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgcGFyYWxsYXhTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcGFyYWxsYXhXcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgICB6SW5kZXg6IDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5uZXJQYXJhbGxheDoge1xyXG4gICAgaGVpZ2h0OiAyNTAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICcmIGZpZ3VyZSc6IHtcclxuICAgICAgaGVpZ2h0OiAyNTAwLFxyXG4gICAgICBtYXJnaW46IDAsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgfSxcclxuICAgICcmIGZpZ3VyZSA+IGRpdic6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmlnaHRUb3BCYWNrOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIHJpZ2h0OiAtMjQwXHJcbiAgICB9XHJcbiAgfSxcclxuICByaWdodFRvcEZyb250OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIHJpZ2h0OiA1MFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGVmdEJvdHRvbUJhY2s6IHtcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICBsZWZ0OiAtMTEwXHJcbiAgICB9XHJcbiAgfSxcclxuICBsZWZ0Qm90dG9tRnJvbnQ6IHtcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICBsZWZ0OiAtNTBcclxuICAgIH1cclxuICB9LFxyXG4gIGhleGFCYWNrOiB7XHJcbiAgICBvcGFjaXR5OiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IDAuMTIgOiAwLjAzLFxyXG4gICAgZmlsbDogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICB3aWR0aDogNTUwLFxyXG4gICAgaGVpZ2h0OiA1MDBcclxuICB9LFxyXG4gIGhleGFUb3A6IHt9LFxyXG4gIGhleGFXcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGhlaWdodDogNzAwXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFyYWxsYXhTdHlsZXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcclxuaW1wb3J0IE5leHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1hbmltYXRlZC1zbGlkZXInO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vcHJvbW90aW9uLXN0eWxlJztcclxuaW1wb3J0IGltZ0FQSSBmcm9tICd+L3B1YmxpYy9pbWFnZXMvaW1nQVBJJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuXHJcbmNvbnN0IHNsaWRlckRhdGEgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9jcnlwdG8vdHJhZGUucG5nXCIsXHJcbiAgICBkZXNjOiBcInByZWxhdW5jaCBtYXJrZXRpbmcsIGNvbXBhbnkgYW5kIHNvZnR3YXJlIGRldmVsb3BtZW50XCIsXHJcbiAgICBkYXRlOiAnTWF5IDIwMjEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2NyeXB0by90cmFkZS5wbmdcIixcclxuICAgIGRlc2M6IFwiTWFya2V0aW5nIGFuZCBjb21tdW5pdHkgZGV2ZWxvcG1lbnRcIixcclxuICAgIGRhdGU6ICdKdW5lIDIwMjEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2NyeXB0by90cmFkZS5wbmdcIixcclxuICAgIGRlc2M6IFwibGF1bmNoIHRyYWRpbmcgcGxhbmV0IHN3YXAgcGxhdGZvcm1cIixcclxuICAgIGRhdGU6ICdPQ1QgMjAyMSdcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvY3J5cHRvL3RyYWRlLnBuZ1wiLFxyXG4gICAgZGVzYzogXCJMYXVuY2ggcHJlc2FsZSBvbiBkZXhhbGVcIixcclxuICAgIGRhdGU6ICdOT1YgMjAyMSdcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvY3J5cHRvL3RyYWRlLnBuZ1wiLFxyXG4gICAgZGVzYzogXCJsYXVuY2ggb3RoZXIgZmVhdHVyZXMgdG8gc3dhcCBwbGF0Zm9ybVwiLFxyXG4gICAgZGF0ZTogJ0RlYyAyMDIxJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9jcnlwdG8vdHJhZGUucG5nXCIsXHJcbiAgICBkZXNjOiBcIlRQIHdpbGwgYmUgbGlzdGVkIG9uIENNQyBjb2luZ2Vja28gYW5kIGNlbnRyYWxpYSB6ZWQgcGxhdGZvcm1cIixcclxuICAgIGRhdGU6ICdRMSAyMDIyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9jcnlwdG8vdHJhZGUucG5nXCIsXHJcbiAgICBkZXNjOiBcImxhdW5jaCB0cmFkaW5nIHBsYW5ldCBjZW50cmFsaXplZCBwbGF0Zm9ybVwiLFxyXG4gICAgZGF0ZTogJ1EyIDIwMjInXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2NyeXB0by90cmFkZS5wbmdcIixcclxuICAgIGRlc2M6IFwiU3RhcnQgVGhlIHdvcmsgb24gVFAgYmxvY2tjaGFpblwiLFxyXG4gICAgZGF0ZTogJ1ExIDIwMjMnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2NyeXB0by90cmFkZS5wbmdcIixcclxuICAgIGRlc2M6IFwiTGF1bmNoIFRyYWRpbmcgUGxhbmV0IFByZXBhaWQgY2FyZFwiLFxyXG4gICAgZGF0ZTogJ1EzIDIwMjEnXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIFByb21vdGlvbihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVyV3JhcH0+XHJcbiAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLXdyYXBwZXJcIlxyXG4gICAgICAgICAgcHJldmlvdXNCdXR0b249eyhcclxuICAgICAgICAgICAgPE5leHRJY29uIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgbmV4dEJ1dHRvbj17KFxyXG4gICAgICAgICAgICA8TmV4dEljb24gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3NsaWRlckRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLml0ZW0sIGluZGV4ICUgMiA9PT0gMSA/IGNsYXNzZXMub2RkIDogY2xhc3Nlcy5ldmVuKX0ga2V5PXtpbmRleC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17N30+XHJcbiAgICAgICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nV3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlY29yYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3ZnPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dXNlIHhsaW5rSHJlZj1cIi9lbi9pbWFnZXMvY3J5cHRvL2RlY28tcHJvbW8ucG5nXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvc3ZnPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gYWx0PXtpdGVtLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25CYXNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcucHJvbW9fcGVyaW9kZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5Qcm9tb3Rpb24ucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKFByb21vdGlvbik7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1Byb21vdGlvbic7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBsaWdodGVuLCBkYXJrZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XHJcbmltcG9ydCBkZWNvQm90dG9tTGlnaHQgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWJvdHRvbS1saWdodC5zdmcnO1xyXG5pbXBvcnQgZGVjb0JvdHRvbURhcmsgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWJvdHRvbS1kYXJrLnN2Zyc7XHJcblxyXG5jb25zdCBwcm9tb3Rpb25TdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgYmFja2dyb3VuZDogYHVybCgke3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZGVjb0JvdHRvbURhcmsgOiBkZWNvQm90dG9tTGlnaHR9KSBib3R0b20gY2VudGVyIG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZGFya2VuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjYpIDogbGlnaHRlbih0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC44NCksXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgMTAxJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxMCwgMyksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IDBcclxuICAgIH0sXHJcbiAgfSxcclxuICBzbGlkZXJXcmFwOiB7XHJcbiAgICAnJiBhW2NsYXNzKj1cInByZXZpb3VzQnV0dG9uXCJdJzoge1xyXG4gICAgICByaWdodDogMTIwLFxyXG4gICAgICBsZWZ0OiAnYXV0bycsXHJcbiAgICAgIHRvcDogMjAwLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICByaWdodDogMjBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmIGFbY2xhc3MqPVwibmV4dEJ1dHRvblwiXSc6IHtcclxuICAgICAgbGVmdDogJ2F1dG8nLFxyXG4gICAgICB0b3A6IDE0MCxcclxuICAgICAgcmlnaHQ6IDEyMCxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgcmlnaHQ6IDIwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiA+IGRpdic6IHtcclxuICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICAgIGhlaWdodDogMzIwXHJcbiAgICAgIH0sXHJcbiAgICAgICcmID4gYSc6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICB3aWR0aDogNDAsXHJcbiAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgekluZGV4OiAxMSxcclxuICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICAgIHdpZHRoOiAzNSxcclxuICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgIGxlZnQ6IDMsXHJcbiAgICAgICAgICB0b3A6IDMsXHJcbiAgICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBwYXBlcjoge30sXHJcbiAgdGltZToge30sXHJcbiAgZXZlbjoge1xyXG4gICAgJyYgaDEnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgfSxcclxuICAgICcmICRkZWNvcmF0aW9uJzoge1xyXG4gICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBvZGQ6IHtcclxuICAgICcmIGgxJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB9LFxyXG4gICAgJyYgJGRlY29yYXRpb24nOiB7XHJcbiAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBoZXhhOiB7fSxcclxuICBpdGVtOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgMCksXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gICAgbWF4SGVpZ2h0OiA1MDAsXHJcbiAgICB6SW5kZXg6IDEwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIH0sXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIHdpZHRoOiA0NTAsXHJcbiAgICAgIGhlaWdodDogNDUwXHJcbiAgICB9LFxyXG4gICAgJyYgc2VjdGlvbic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHpJbmRleDogMTAsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNDBweCknLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgZWFzZScsXHJcbiAgICB9LFxyXG4gICAgJyZbY2xhc3MqPVwiY3VycmVudFwiXSc6IHtcclxuICAgICAgJyYgc2VjdGlvbic6IHtcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCknLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiBmaWd1cmUnOiB7XHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgbGluZUhlaWdodDogJzQ1MHB4JyxcclxuICAgICAgd2lkdGg6IDQ1MCxcclxuICAgICAgaGVpZ2h0OiA0NTAsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHRvcDogMTcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSAhaW1wb3J0YW50JyxcclxuICAgICAgJyYgaW1nJzoge1xyXG4gICAgICAgIHRyYW5zaXRpb246ICdub25lJyxcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgICB3aWR0aDogMzUwLFxyXG4gICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAvLyBoZWlnaHQ6IDM5MyxcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiAkcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDksIDYsIDksIDE2KSxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAyNCxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICAgIGxlZnQ6IC04MCxcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICAgIG1hcmdpblRvcDogNjAsXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIHdpZHRoOiAnY2FsYygxMDAlIC0gODBweCknLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIGJ1dHRvbic6IHtcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmIGgxJzoge1xyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0MnB4JyxcclxuICAgICAgJyYgYnV0dG9uJzoge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIG1heFdpZHRoOiA1MDAsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICBmb250RmFtaWx5OiAnTW9udHNlcnJhdCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBmb250U2l6ZTogMjgsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyOHB4JyxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3JtYWwnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICczMnB4J1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIHAnOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiAkdGltZSc6IHtcclxuICAgICAgJyYgaDYnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWNvcmF0aW9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB6SW5kZXg6IDIsXHJcbiAgICBvcGFjaXR5OiAwLjVcclxuICB9LFxyXG4gIGltZ1dyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgdG9wOiAtMjQsXHJcbiAgICBsZWZ0OiAtNDAwXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9tb3Rpb25TdHlsZXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBpbWdBcGkgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSc7XHJcbmltcG9ydCBUZXN0aUNhcmQgZnJvbSAnLi4vQ2FyZHMvVGVzdGltb25pYWwnO1xyXG5pbXBvcnQgdXNlU3R5bGUgZnJvbSAnLi90ZXN0aS1zdHlsZSc7XHJcblxyXG5jb25zdCB0ZXN0aUNvbnRlbnQgPSBbXHJcbiAge1xyXG4gICAgdGV4dDogJ0dyZWF0IHRlYW0gR29vZCBjaGFyaXR5IHdvcmsnLFxyXG4gICAgbmFtZTogJ1x0TWFsbG9yaSBNY0xlZXMnLFxyXG4gICAgYXZhdGFyOiBpbWdBcGkuYXZhdGFyWzZdLFxyXG4gICAgdGl0bGU6ICdDaGllZiBEaWdpdGFsIE9mZmljZXInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ2ltIHZlcnkgaGFwcHkgd2l0aCBzdGVsbGFyIGl0cyBhaCBnb29kIGNvaW4gYW5kIGl0IGhhdmUgYWggZ29vZCBmdXR1cmUgdmlzaW9uID0pJyxcclxuICAgIG5hbWU6ICdBcml1cycsXHJcbiAgICBhdmF0YXI6IGltZ0FwaS5hdmF0YXJbN10sXHJcbiAgICB0aXRsZTogJ0NoaWVmIERpZ2l0YWwgT2ZmaWNlcicsXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICB0ZXh0OiAnQ3JhcyBjb252YWxsaXMgbGFjdXMgb3JjaSwgdHJpc3RpcXVlIHRpbmNpZHVudCBtYWduYSBjb25zZXF1YXQgaW4uIEluIHZlbCBwdWx2aW5hciBlc3QsIGF0IGV1aXNtb2QgbGliZXJvLicsXHJcbiAgLy8gICBuYW1lOiAnSmVuYSBEb2UnLFxyXG4gIC8vICAgYXZhdGFyOiBpbWdBcGkuYXZhdGFyWzFdLFxyXG4gIC8vICAgdGl0bGU6ICdHcmFwaGljIERlc2lnbmVyJyxcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRleHQ6ICdTZWQgaW1wZXJkaWV0IGVuaW0gbGlndWxhLCB2aXRhZSB2aXZlcnJhIGp1c3RvIHBvcnRhIHZlbC4nLFxyXG4gIC8vICAgbmFtZTogJ0pvdmVsaW4gRG9lJyxcclxuICAvLyAgIGF2YXRhcjogaW1nQXBpLmF2YXRhclsyXSxcclxuICAvLyAgIHRpdGxlOiAnU2VuaW9yIEdyYXBoaWMgRGVzaWduZXInLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgdGV4dDogJ0NyYXMgY29udmFsbGlzIGxhY3VzIG9yY2ksIHRyaXN0aXF1ZSB0aW5jaWR1bnQgbWFnbmEgY29uc2VxdWF0IGluLiBJbiB2ZWwgcHVsdmluYXIgZXN0LCBhdCBldWlzbW9kIGxpYmVyby4nLFxyXG4gIC8vICAgbmFtZTogJ0ppaGFuIERvZScsXHJcbiAgLy8gICBhdmF0YXI6IGltZ0FwaS5hdmF0YXJbM10sXHJcbiAgLy8gICB0aXRsZTogJ0NFTyBTb2Z0d2FyZSBIb3VzZScsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICB0ZXh0OiAnQ3JhcyBjb252YWxsaXMgbGFjdXMgb3JjaSwgdHJpc3RpcXVlIHRpbmNpZHVudCBtYWduYSBjb25zZXF1YXQgaW4uIEluIHZlbCBwdWx2aW5hciBlc3QsIGF0IGV1aXNtb2QgbGliZXJvLicsXHJcbiAgLy8gICBuYW1lOiAnSm9obiBEb2UnLFxyXG4gIC8vICAgYXZhdGFyOiBpbWdBcGkuYXZhdGFyWzldLFxyXG4gIC8vICAgdGl0bGU6ICdTZW5pb3IgR3JhcGhpYyBEZXNpZ25lcicsXHJcbiAgLy8gfSxcclxuXTtcclxuXHJcblxyXG5mdW5jdGlvbiBUZXN0aW1vbmlhbHMocHJvcHMpIHtcclxuICBjb25zdCBzbGlkZXIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKSk7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2FjdGl2ZVRyYW5zaXRpb24sIHNldEFjdGl2ZVRyYW5zaXRpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIGZhZGU6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXHJcbiAgICBhZnRlckNoYW5nZTogKGN1cnJlbnQpID0+IHNldEFjdGl2ZShjdXJyZW50KSxcclxuICAgIGJlZm9yZUNoYW5nZTogKGN1cnJlbnQsIG5leHQpID0+IHNldEFjdGl2ZVRyYW5zaXRpb24obmV4dCksXHJcbiAgfTtcclxuICBjb25zdCBzbGlkZVN0YXRlID0gaW5kZXggPT4ge1xyXG4gICAgaWYgKGluZGV4ID09PSBhY3RpdmVUcmFuc2l0aW9uIC0gMSB8fCBpbmRleCA9PT0gYWN0aXZlIC0gMSkge1xyXG4gICAgICByZXR1cm4gY2xhc3Nlcy5wYXN0O1xyXG4gICAgfVxyXG4gICAgaWYgKGluZGV4ID09PSBhY3RpdmVUcmFuc2l0aW9uICsgMSB8fCBpbmRleCA9PT0gYWN0aXZlICsgMSkge1xyXG4gICAgICByZXR1cm4gY2xhc3Nlcy5mdXR1cmU7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5kZXggPT09IGFjdGl2ZVRyYW5zaXRpb24gfHwgaW5kZXggPT09IGFjdGl2ZSkge1xyXG4gICAgICByZXR1cm4gY2xhc3Nlcy5jdXJyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzZXMuc2xpZGU7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxDb250YWluZXIgZml4ZWQ9e2lzRGVza3RvcH0+XHJcbiAgICAgICAgPFRpdGxlIHRleHQ9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy50ZXN0aV90aXRsZScpfSBhbGlnbj1cImNlbnRlclwiIC8+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcudGVzdGlfc3VidGl0bGUnKX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezZ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17MX0geHM9ezEyfSAvPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17MTB9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlcldyYXB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm5hdiwgY2xhc3Nlcy5wcmV2KX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVyLmN1cnJlbnQuc2xpY2tQcmV2KCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1pb3MtYXJyb3ctYmFja1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCByZWY9e3NsaWRlcn0gey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAge3Rlc3RpQ29udGVudC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4LnRvU3RyaW5nKCl9IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLml0ZW0sIHNsaWRlU3RhdGUoaW5kZXgpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbGlkZUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVzdGlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e2l0ZW0uYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aW5kZXggPT09IGFjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5uYXYsIGNsYXNzZXMubmV4dCl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlci5jdXJyZW50LnNsaWNrTmV4dCgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24taW9zLWFycm93LWZvcndhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFnaW5hdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkodGVzdGlDb250ZW50Lmxlbmd0aCldLm1hcCgoZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXgudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXggPT09IGFjdGl2ZSA/IGNsYXNzZXMuYWN0aXZlIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2xpZGVyLmN1cnJlbnQuc2xpY2tHb1RvKGluZGV4KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5UZXN0aW1vbmlhbHMucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKFRlc3RpbW9uaWFscyk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1Rlc3RpbW9uaWFscyc7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBmYWRlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xyXG5pbXBvcnQgaGV4YUJnIGZyb20gJ34vcHVibGljL2ltYWdlcy9jcnlwdG8vaGV4YS1uYXYucG5nJztcclxuXHJcbmNvbnN0IHRlc3RpU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMjApXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDIwMFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2Fyb3VzZWw6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgfSxcclxuICAgICcmID4gZGl2Jzoge1xyXG4gICAgICB6SW5kZXg6IDEwXHJcbiAgICB9LFxyXG4gICAgJyY6YWZ0ZXIsICY6YmVmb3JlJzoge1xyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTIsXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBoZWlnaHQ6IDE1MCxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB9LFxyXG4gICAgJyY6YWZ0ZXInOiB7XHJcbiAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgYm90dG9tOiA1LFxyXG4gICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIDApJ1xyXG4gICAgfSxcclxuICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICBib3R0b206IC0xNSxcclxuICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAwKSdcclxuICAgIH0sXHJcbiAgICAnJiA+IGJ1dHRvbic6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGl0ZW06IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNywgMSwgMCksXHJcbiAgICB9LFxyXG4gICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgIG91dGxpbmU6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2xpZGVDb250ZW50OiB7XHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogJzFzJyxcclxuICAgIGFuaW1hdGlvbkZpbGxNb2RlOiAnYm90aCdcclxuICB9LFxyXG4gIHNsaWRlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZSdcclxuICB9LFxyXG4gIGZ1dHVyZToge1xyXG4gICAgJyYgJHNsaWRlQ29udGVudCc6IHtcclxuICAgICAgYW5pbWF0aW9uOiAnZmFkZUluVXAnLFxyXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogJzFzJyxcclxuICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjFzJyxcclxuICAgICAgYW5pbWF0aW9uRmlsbE1vZGU6ICdib3RoJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFzdDoge1xyXG4gICAgJyYgJHNsaWRlQ29udGVudCc6IHtcclxuICAgICAgYW5pbWF0aW9uOiAnZmFkZU91dFVwJyxcclxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxcycsXHJcbiAgICAgIGFuaW1hdGlvbkZpbGxNb2RlOiAnYm90aCdcclxuICAgIH1cclxuICB9LFxyXG4gIG5hdjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIHpJbmRleDogMTIsXHJcbiAgICB0b3A6ICc0OCUnLFxyXG4gICAgd2lkdGg6IDUwLFxyXG4gICAgaGVpZ2h0OiA2NCxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBtaW5XaWR0aDogMCxcclxuICAgIGJhY2tncm91bmQ6IGB1cmwoJHtoZXhhQmd9KSBuby1yZXBlYXQgY2VudGVyYCxcclxuICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcclxuICAgIHRyYW5zZm9ybTogdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAncm90YXRlKDBkZWcpJyxcclxuICAgICcmIGknOiB7XHJcbiAgICAgIGNvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksIDAuMzMpLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgZm9udFNpemU6IDI2LFxyXG4gICAgfSxcclxuICAgICcmOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgb3BhY2l0eTogMC42XHJcbiAgICB9XHJcbiAgfSxcclxuICBwcmV2OiB7XHJcbiAgICBsZWZ0OiA1NixcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgcmlnaHQ6IDIsXHJcbiAgICAgIG1hcmdpblRvcDogM1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmV4dDoge1xyXG4gICAgcmlnaHQ6IDU2LFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICBsZWZ0OiAyLFxyXG4gICAgICBtYXJnaW5Ub3A6IDNcclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2ZToge30sXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgekluZGV4OiAyMixcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyYgdWwnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBtYXJnaW46IDAsXHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoLTEyKSxcclxuICAgICAgJyYgbGknOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgd2lkdGg6IDE1LFxyXG4gICAgICAgIGhlaWdodDogMTUsXHJcbiAgICAgICAgbWFyZ2luOiAnMCA1cHgnLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59YCxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cyBlYXNlLW91dCcsXHJcbiAgICAgICAgJyYkYWN0aXZlJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cclxuICAgICAgICB9LFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiBidXR0b24nOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVzdGlTdHlsZXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL3RpdGxlLXN0eWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpdGxlKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHtcclxuICAgIHRleHQsXHJcbiAgICBhbGlnbixcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgc2V0QWxpZ24gPSBhbGlnbm1lbnQgPT4ge1xyXG4gICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMubGVmdDtcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHJldHVybiBjbGFzc2VzLnJpZ2h0O1xyXG4gICAgICBjYXNlICdjZW50ZXInOlxyXG4gICAgICAgIHJldHVybiBjbGFzc2VzLmNlbnRlcjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5sZWZ0O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGl0bGUsIHNldEFsaWduKGFsaWduKSl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvfT5cclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMzhweFwiIGhlaWdodD1cIjQzcHhcIiB2aWV3Qm94PVwiMCAwIDM4IDQzXCIgdmVyc2lvbj1cIjEuMVwiPlxyXG4gICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCwzMC4wMjQ1MTI2IEMwLDMxLjYxNDY5MDEgMC44Mzg4MjAwMzcsMzMuMDg0MTUzNCAyLjIwMDU0NTQ1LDMzLjg3OTI0MjIgTDE2Ljc5OTQ1NDUsNDIuNDAzNjgzNCBDMTguMTYxMTgsNDMuMTk4NzcyMiAxOS44Mzg4Miw0My4xOTg3NzIyIDIxLjIwMDU0NTUsNDIuNDAzNjgzNCBMMzUuNzk5NDU0NSwzMy44NzkyNDIyIEMzNy4xNjExOCwzMy4wODQxNTM0IDM4LDMxLjYxNDY5MDEgMzgsMzAuMDI0NTEyNiBMMzgsMTIuOTc1NTU4NyBDMzgsMTEuMzg1MzA5OSAzNy4xNjExOCw5LjkxNTkxNzkzIDM1Ljc5OTQ1NDUsOS4xMjA3NTc4NCBMMjEuMjAwNTQ1NSwwLjU5NjMxNjU4OCBDMTkuODM4ODIsLTAuMTk4NzcyMTk2IDE4LjE2MTE4LC0wLjE5ODc3MjE5NiAxNi43OTk0NTQ1LDAuNTk2MzE2NTg4IEwyLjIwMDU0NTQ1LDkuMTIwNzU3ODQgQzAuODM4ODIwMDM3LDkuOTE1OTE3OTMgMCwxMS4zODUzMDk5IDAsMTIuOTc1NTU4NyBMMCwzMC4wMjQ1MTI2IFpcIiBmaWxsPVwidXJsKCN0aXRsZUxpbmVhckdyYWRpZW50LTEpXCIgLz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5UaXRsZS5wcm9wVHlwZXMgPSB7XHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuVGl0bGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnbGVmdCcsXHJcbn07XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RpdGxlJztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB0aXRsZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBsZWZ0OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICcmOmFmdGVyJzoge1xyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmlnaHQ6IHtcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgICcmOmFmdGVyJzoge1xyXG4gICAgICByaWdodDogMCxcclxuICAgIH1cclxuICB9LFxyXG4gIGNlbnRlcjoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICcmOmFmdGVyJzoge1xyXG4gICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgbWFyZ2luTGVmdDogLTM1LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVjbzoge1xyXG4gICAgJyYgc3ZnJzoge31cclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAnJiBoNCc6IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDMyLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4J1xyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICBmb250U2l6ZTogMjgsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ0cHgnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGVTZWNvbmRhcnk6IHtcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmIGg0Jzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgICAgZm9udFNpemU6IDM2LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNTZweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAzMixcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDhweCdcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDI4LFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0NHB4JyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmIHN0cm9uZyc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgfVxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGl0bGVTdHlsZXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lZGl1bShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgdmlld0JveD1cIjAgMCA1MCA1MFwiXHJcbiAgICAgIHdpZHRoPVwiMjBweFwiXHJcbiAgICAgIGhlaWdodD1cIjIwcHhcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDUsNEg1QzQuNDQ4LDQsNCw0LjQ0OCw0LDV2NDBjMCwwLjU1MiwwLjQ0OCwxLDEsMWg0MGMwLjU1MiwwLDEtMC40NDgsMS0xVjVDNDYsNC40NDgsNDUuNTUyLDQsNDUsNHogTTQwLDEzLjUgbC0xLjgyMSwyLjE5N0MzOC4wNjQsMTUuODExLDM4LDE1Ljk2NSwzOCwxNi4xMjVWMzIuNzVjMCwwLjE2LDAuMDY0LDAuMzE0LDAuMTc5LDAuNDI4TDQwLDM1LjU0NlYzNkgzMHYtMC40NTRsMi44MjEtMi4zNjggQzMyLjkzNiwzMy4wNjQsMzMsMzIuOTEsMzMsMzIuNzVWMTcuODc5TDI0Ljg0OCwzNmgtMC4wMDFoLTEuNTQzbDAsMEwxNSwxOC4zNzV2MTMuMTA4YzAsMC4yMiwwLjA3NiwwLjQzMywwLjIxNSwwLjYwNUwxOCwzNS41NDYgVjM2aC04di0wLjQ1NGwyLjc4My0zLjQzOEMxMi45MjMsMzEuOTM2LDEzLDMxLjcyMSwxMywzMS41VjE2LjM4OGMwLTAuMTQyLTAuMDUtMC4yNzktMC4xNDItMC4zODhMMTEsMTMuNVYxM2g3LjA5N2w3LjYyNCwxNi4xODMgTDMzLjAwMiwxM0g0MFYxMy41elwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcbiIsImNvbnN0IE5leHRJMThOZXh0ID0gcmVxdWlyZSgnbmV4dC1pMThuZXh0JykuZGVmYXVsdDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcclxuICBkZWZhdWx0TGFuZ3VhZ2U6ICdlbmcnLFxyXG4gIC8vIG90aGVyTGFuZ3VhZ2VzOiBbJ2FyYSddLFxyXG4gIGZhbGxiYWNrTG5nOiAnZW5nJyxcclxuICBpbml0SW1tZWRpYXRlOiBmYWxzZSxcclxuICBsb2NhbGVQYXRoOiAncHVibGljL2xvY2FsZXMnLFxyXG4gIHJlYWN0OiB7XHJcbiAgICB1c2VTdXNwZW5zZTogZmFsc2UsXHJcbiAgfSxcclxuICBsb2NhbGVTdWJwYXRoczoge1xyXG4gICAgLy8gYXJhOiAnYXInLFxyXG4gICAgZW5nOiAnZW4nLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJztcclxuaW1wb3J0IFByb21vdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1Byb21vdGlvbic7XHJcbmltcG9ydCBGZWF0dXJlIGZyb20gJy4uL2NvbXBvbmVudHMvRmVhdHVyZSc7XHJcbmltcG9ydCBCZW5lZml0IGZyb20gJy4uL2NvbXBvbmVudHMvQmVuZWZpdCc7XHJcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0aW1vbmlhbHMnO1xyXG5pbXBvcnQgRmFxIGZyb20gJy4uL2NvbXBvbmVudHMvRmFxJztcclxuaW1wb3J0IEZvb3RlcldpdGhDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcldpdGhDb3VudGVyJztcclxuaW1wb3J0IFBhZ2VOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlTmF2JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbic7XHJcbmltcG9ydCBicmFuZCBmcm9tICcuLi9wdWJsaWMvdGV4dC9icmFuZCc7XHJcblxyXG5jb25zdCBzZWN0aW9uTWFyZ2luID0gbWFyZ2luID0+IChtYXJnaW4gKiAyMCk7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBtYWluV3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCA6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIHNwYWNlQm90dG9tOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IHNlY3Rpb25NYXJnaW4odGhlbWUuc3BhY2luZygpKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHNlY3Rpb25NYXJnaW4oNiksXHJcbiAgICB9XHJcbiAgfSxcclxuICBzcGFjZVRvcDoge1xyXG4gICAgbWFyZ2luVG9wOiBzZWN0aW9uTWFyZ2luKHRoZW1lLnNwYWNpbmcoKSksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiBzZWN0aW9uTWFyZ2luKDYpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3BhY2VCb3R0b21TaG9ydDoge1xyXG4gICAgbWFyZ2luQm90dG9tOiBzZWN0aW9uTWFyZ2luKHRoZW1lLnNwYWNpbmcoKSAvIDIpLFxyXG4gIH0sXHJcbiAgc3BhY2VUb3BTaG9ydDoge1xyXG4gICAgbWFyZ2luVG9wOiBzZWN0aW9uTWFyZ2luKHRoZW1lLnNwYWNpbmcoKSAvIDIpLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyV3JhcDoge1xyXG4gICAgbWFyZ2luVG9wOiAtNDAsXHJcbiAgICAnJiA+IHNlY3Rpb24nOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBMYW5kaW5nKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc1RhYmxldCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMub25seSgnbWQnKSk7XHJcbiAgY29uc3QgeyBvblRvZ2dsZURhcmssIG9uVG9nZ2xlRGlyIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICB7IGJyYW5kLmNyeXB0by5uYW1lIH1cclxuICAgICAgICAgICZuYnNwOyAtIEhvbWUgUGFnZVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaG9tZVwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5XcmFwfT5cclxuICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICBvblRvZ2dsZURhcms9e29uVG9nZ2xlRGFya31cclxuICAgICAgICAgIG9uVG9nZ2xlRGlyPXtvblRvZ2dsZURpcn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJXcmFwfT5cclxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwiYmFubmVyXCI+XHJcbiAgICAgICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwicHJvbW90aW9uc1wiPlxyXG4gICAgICAgICAgICA8UHJvbW90aW9uIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVcIiBjbGFzc05hbWU9e2lzVGFibGV0ID8gY2xhc3Nlcy5zcGFjZVRvcFNob3J0IDogJyd9PlxyXG4gICAgICAgICAgICA8RmVhdHVyZSAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJiZW5lZml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlVG9wU2hvcnR9PlxyXG4gICAgICAgICAgICA8QmVuZWZpdCAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbHNcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2VUb3B9PlxyXG4gICAgICAgICAgICA8VGVzdGltb25pYWxzIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImZhcVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZVRvcH0+XHJcbiAgICAgICAgICAgIDxGYXEgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uIC8+XHJcbiAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPEZvb3RlcldpdGhDb3VudGVyIHRvZ2dsZURpcj17b25Ub2dnbGVEaXJ9IC8+XHJcbiAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICA8UGFnZU5hdiAvPlxyXG4gICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL3NjcmlwdHMvcGFydGljbGVzLm1pbi5qc1wiIC8+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvc2NyaXB0cy9zdGF0cy5taW4uanNcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuTGFuZGluZy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xyXG4gIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nLCAnY3J5cHRvLWxhbmRpbmcnXSxcclxufSk7XHJcblxyXG5MYW5kaW5nLnByb3BUeXBlcyA9IHtcclxuICBvblRvZ2dsZURhcms6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgb25Ub2dnbGVEaXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0TkNqeHpkbWNnZDJsa2RHZzlJall6TUhCNElpQm9aV2xuYUhROUlqUTFNbkI0SWlCMmFXVjNRbTk0UFNJd0lEQWdOak13SURRMU1pSWdkbVZ5YzJsdmJqMGlNUzR4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJajROQ2lBZ0lDQThJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1UydGxkR05vSURVMUxqSWdLRGM0TVRneEtTQXRJR2gwZEhCek9pOHZjMnRsZEdOb1lYQndMbU52YlNBdExUNE5DaUFnSUNBOGRHbDBiR1UrUjNKdmRYQWdORHd2ZEdsMGJHVStEUW9nSUNBZ1BHUmxjMk0rUTNKbFlYUmxaQ0IzYVhSb0lGTnJaWFJqYUM0OEwyUmxjMk0rRFFvZ0lDQWdQR2NnYVdROUlsQmhaMlV0TVNJZ2MzUnliMnRsUFNKdWIyNWxJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRWlJR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1ptbHNiQzF2Y0dGamFYUjVQU0l3TGpFNElqNE5DaUFnSUNBZ0lDQWdQR2NnYVdROUlrZHliM1Z3TFRJaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREF1TURBd01EQXdMQ0F0TkRrdU1EQXdNREF3S1NJZ1ptbHNiRDBpSTBaR1JrWkdSaUkrRFFvZ0lDQWdJQ0FnSUNBZ0lDQThaeUJwWkQwaVIzSnZkWEF0TkNJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9NQzR3TURBd01EQXNJREF1TkRBd05EQTBLU0krRFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRReE1TNDFNalkzT1RVc01UazNMamN5TkRnME55QkROREV4TGpVeU5qYzVOU3d5TURZdU1qTTNNalU1SURReE5pNHdPREF3TVRrc01qRTBMakV3TXpRM05DQTBNak11TkRjeE5qUXpMREl4T0M0ek5UazJPQ0JNTlRBeUxqY3hOalF5Tml3eU5qTXVPVGt5TURRMUlFTTFNVEF1TVRBNE1EUTVMREkyT0M0eU5EZ3lOVElnTlRFNUxqSXhORFE1T1N3eU5qZ3VNalE0TWpVeUlEVXlOaTQyTURZeE1qSXNNall6TGprNU1qQTBOU0JNTmpBMUxqZzFNRGt3TlN3eU1UZ3VNelU1TmpnZ1F6WXhNeTR5TkRJMU1qa3NNakUwTGpFd016UTNOQ0EyTVRjdU56azFOelV6TERJd05pNHlNemN5TlRrZ05qRTNMamM1TlRjMU15d3hPVGN1TnpJME9EUTNJRXcyTVRjdU56azFOelV6TERFd05pNDBOVGszTXpVZ1F6WXhOeTQzT1RVM05UTXNPVGN1T1RRMk9UUXdOaUEyTVRNdU1qUXlOVEk1TERrd0xqQTRNVEV3TnpnZ05qQTFMamcxTURrd05TdzROUzQ0TWpRMU1UazNJRXcxTWpZdU5qQTJNVEl5TERRd0xqRTVNakUxTkRnZ1F6VXhPUzR5TVRRME9Ua3NNelV1T1RNMU9UUTROQ0ExTVRBdU1UQTRNRFE1TERNMUxqa3pOVGswT0RRZ05UQXlMamN4TmpReU5pdzBNQzR4T1RJeE5UUTRJRXcwTWpNdU5EY3hOalF6TERnMUxqZ3lORFV4T1RjZ1F6UXhOaTR3T0RBd01Ua3NPVEF1TURneE1UQTNPQ0EwTVRFdU5USTJOemsxTERrM0xqazBOamswTURZZ05ERXhMalV5TmpjNU5Td3hNRFl1TkRVNU56TTFJRXcwTVRFdU5USTJOemsxTERFNU55NDNNalE0TkRjZ1dpSWdhV1E5SWtacGJHd3RNU0lnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb05URTBMalkyTVRJM05Dd2dNVFV5TGpBNU1qRXdNQ2tnY205MFlYUmxLQzB6TXpBdU1EQXdNREF3S1NCMGNtRnVjMnhoZEdVb0xUVXhOQzQyTmpFeU56UXNJQzB4TlRJdU1Ea3lNVEF3S1NBaVBqd3ZjR0YwYUQ0TkNpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1DdzBNekF1TnpnNE5UUTNJRU13TERRek9TNHpNREE1TmlBMExqVTFNekl5TkRZeUxEUTBOeTR4TmpjeE56VWdNVEV1T1RRME9EUTNPU3cwTlRFdU5ESXpNemd4SUV3NU1TNHhPRGsyTXpFMExEUTVOeTR3TlRVM05EWWdRems0TGpVNE1USTFORGNzTlRBeExqTXhNVGsxTWlBeE1EY3VOamczTnpBMExEVXdNUzR6TVRFNU5USWdNVEUxTGpBM09UTXlOeXcwT1RjdU1EVTFOelEySUV3eE9UUXVNekkwTVRFeExEUTFNUzQwTWpNek9ERWdRekl3TVM0M01UVTNNelFzTkRRM0xqRTJOekUzTlNBeU1EWXVNalk0T1RVNUxEUXpPUzR6TURBNU5pQXlNRFl1TWpZNE9UVTVMRFF6TUM0M09EZzFORGNnVERJd05pNHlOamc1TlRrc016TTVMalV5TXpRek5pQkRNakEyTGpJMk9EazFPU3d6TXpFdU1ERXdOalF4SURJd01TNDNNVFUzTXpRc016SXpMakUwTkRnd09TQXhPVFF1TXpJME1URXhMRE14T0M0NE9EZ3lNaUJNTVRFMUxqQTNPVE15Tnl3eU56TXVNalUxT0RVMklFTXhNRGN1TmpnM056QTBMREkyT0M0NU9UazJORGtnT1RndU5UZ3hNalUwTnl3eU5qZ3VPVGs1TmpRNUlEa3hMakU0T1RZek1UUXNNamN6TGpJMU5UZzFOaUJNTVRFdU9UUTBPRFEzT1N3ek1UZ3VPRGc0TWpJZ1F6UXVOVFV6TWpJME5qSXNNekl6TGpFME5EZ3dPU0F3TERNek1TNHdNVEEyTkRFZ01Dd3pNemt1TlRJek5ETTJJRXd3TERRek1DNDNPRGcxTkRjZ1dpSWdhV1E5SWtacGJHd3RNU0lnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01UQXpMakV6TkRRM09Td2dNemcxTGpFMU5UZ3dNU2tnY205MFlYUmxLQzB6TmpBdU1EQXdNREF3S1NCMGNtRnVjMnhoZEdVb0xURXdNeTR4TXpRME56a3NJQzB6T0RVdU1UVTFPREF4S1NBaVBqd3ZjR0YwYUQ0TkNpQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0TkNpQWdJQ0FnSUNBZ1BDOW5QZzBLSUNBZ0lEd3ZaejROQ2p3dmMzWm5QZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejROQ2p3aExTMGdSMlZ1WlhKaGRHOXlPaUJCWkc5aVpTQkpiR3gxYzNSeVlYUnZjaUF5TWk0d0xqQXNJRk5XUnlCRmVIQnZjblFnVUd4MVp5MUpiaUF1SUZOV1J5QldaWEp6YVc5dU9pQTJMakF3SUVKMWFXeGtJREFwSUNBdExUNE5Danh6ZG1jZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVRHRjVaWEpmTVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZUQwaU1IQjRJaUI1UFNJd2NIZ2lEUW9KSUhacFpYZENiM2c5SWpBZ01DQXhNamd3SURJek55SWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01USTRNQ0F5TXpjN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajROQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStEUW9KTG5OME1IdG1hV3hzT2lNek1ETXdNekE3ZlEwS1BDOXpkSGxzWlQ0TkNqeDBhWFJzWlQ1RGIyMWlhVzVsWkNCVGFHRndaVHd2ZEdsMGJHVStEUW84WkdWell6NURjbVZoZEdWa0lIZHBkR2dnVTJ0bGRHTm9Mand2WkdWell6NE5DanhuSUdsa1BTSlFZV2RsTFRFaVBnMEtDVHh3WVhSb0lHbGtQU0pEYjIxaWFXNWxaQzFUYUdGd1pTSWdZMnhoYzNNOUluTjBNQ0lnWkQwaVRURXlPREFzTUM0NFZqSXpOMGd3Vmpnell6a3VPU3d5TGprc01qQXNOUzR4TERNd0xqTXNOaTQ0YkRjM05DNDVMREV5TXk0NVl6VTRMaklzT1M0ekxERXhOeTQ1TFRJc01UWTRMamN0TXpJTkNna0pUREV5T0RBc01DNDRlaUl2UGcwS1BDOW5QZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejROQ2p4emRtY2dkMmxrZEdnOUlqRXlPREJ3ZUNJZ2FHVnBaMmgwUFNJeU16ZHdlQ0lnZG1sbGQwSnZlRDBpTUNBd0lERXlPREFnTWpNM0lpQjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQZzBLSUNBZ0lEd2hMUzBnUjJWdVpYSmhkRzl5T2lCVGEyVjBZMmdnTlRVdU1pQW9Oemd4T0RFcElDMGdhSFIwY0hNNkx5OXphMlYwWTJoaGNIQXVZMjl0SUMwdFBnMEtJQ0FnSUR4MGFYUnNaVDVEYjIxaWFXNWxaQ0JUYUdGd1pUd3ZkR2wwYkdVK0RRb2dJQ0FnUEdSbGMyTStRM0psWVhSbFpDQjNhWFJvSUZOclpYUmphQzQ4TDJSbGMyTStEUW9nSUNBZ1BHY2dhV1E5SWxCaFoyVXRNU0lnYzNSeWIydGxQU0p1YjI1bElpQnpkSEp2YTJVdGQybGtkR2c5SWpFaUlHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krRFFvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweE1qZ3dMREF1Tnprd016QXlPVFk0SUV3eE1qZ3dMREl6TnlCTU1Dd3lNemNnVERBc09ETXVNRFEzTXpNd055QkRPUzQ0TnprME1ESTNPQ3c0TlM0NU1EQTROak15SURFNUxqazVNell6T1Rnc09EZ3VNVFk1TURNeUlETXdMakk1T1RFMU9URXNPRGt1T0RFMk5qZzNNaUJNT0RBMUxqSXpORFl4TlN3eU1UTXVOekUwTURFMElFTTROak11TkRZNU56UTRMREl5TXk0d01qUTJPVFlnT1RJekxqRXlOemsxTWl3eU1URXVOams0TnpFZ09UY3pMamc1T1RBekxERTRNUzQyT1RNME1qWWdUREV5T0RBc01DNDNPVEF6TURJNU5qZ2dXaUlnYVdROUlrTnZiV0pwYm1Wa0xWTm9ZWEJsSWlCbWFXeHNQU0lqUmtaR1JrWkdJajQ4TDNCaGRHZytEUW9nSUNBZ1BDOW5QZzBLUEM5emRtYytcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NE5DandoTFMwZ1IyVnVaWEpoZEc5eU9pQkJaRzlpWlNCSmJHeDFjM1J5WVhSdmNpQXlNaTR3TGpBc0lGTldSeUJGZUhCdmNuUWdVR3gxWnkxSmJpQXVJRk5XUnlCV1pYSnphVzl1T2lBMkxqQXdJRUoxYVd4a0lEQXBJQ0F0TFQ0TkNqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpVEdGNVpYSmZNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaURRb0pJSFpwWlhkQ2IzZzlJakFnTUNBeE1qZ3dJRFF4TUNJZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTVRJNE1DQTBNVEE3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5Danh6ZEhsc1pTQjBlWEJsUFNKMFpYaDBMMk56Y3lJK0RRb0pMbk4wTUh0bWFXeHNPaU16TURNd016QTdmUTBLUEM5emRIbHNaVDROQ2p4MGFYUnNaVDVEYjIxaWFXNWxaQ0JUYUdGd1pUd3ZkR2wwYkdVK0RRbzhaR1Z6WXo1RGNtVmhkR1ZrSUhkcGRHZ2dVMnRsZEdOb0xqd3ZaR1Z6WXo0TkNqeG5JR2xrUFNKUVlXZGxMVEVpUGcwS0NUeHdZWFJvSUdsa1BTSkRiMjFpYVc1bFpDMVRhR0Z3WlNJZ1kyeGhjM005SW5OME1DSWdaRDBpVFRFeU9EQXNNemMxWXkwME1DNHlMVFEzTGpNdE9ETXVNaTA1Tmk0eUxURXlPUzR4TFRFME5pNDNZeTAyTUM0MExUWTJMalV0TVRVeExqWXRPVFl0TWpNNUxqVXROemN1TkV3eE5USXVOaXd6TVRFTkNna0pZeTAxTnk0M0xERXlMakl0TVRBNUxqTXNORFF1TVMweE5EWXNPVEF1TTB3d0xEUXdPUzQzVmpCb01USTRNRll6TnpWTU1USTRNQ3d6TnpWNklpOCtEUW84TDJjK0RRbzhMM04yWno0TkNnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NE5Danh6ZG1jZ2QybGtkR2c5SWpFeU9EQndlQ0lnYUdWcFoyaDBQU0kwTVRCd2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURFeU9EQWdOREV3SWlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaVBnMEtJQ0FnSUR3aExTMGdSMlZ1WlhKaGRHOXlPaUJUYTJWMFkyZ2dOVFV1TWlBb056Z3hPREVwSUMwZ2FIUjBjSE02THk5emEyVjBZMmhoY0hBdVkyOXRJQzB0UGcwS0lDQWdJRHgwYVhSc1pUNURiMjFpYVc1bFpDQlRhR0Z3WlR3dmRHbDBiR1UrRFFvZ0lDQWdQR1JsYzJNK1EzSmxZWFJsWkNCM2FYUm9JRk5yWlhSamFDNDhMMlJsYzJNK0RRb2dJQ0FnUEdjZ2FXUTlJbEJoWjJVdE1TSWdjM1J5YjJ0bFBTSnViMjVsSWlCemRISnZhMlV0ZDJsa2RHZzlJakVpSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStEUW9nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB4TWpnd0xqQXdNREF5TERNM05DNDVPVGs1T0RVZ1F6RXlNemt1T0RFeU5ERXNNekkzTGpjeE56YzNNaUF4TVRrMkxqYzJOVE14TERJM09DNDRNVFUyTmpFZ01URTFNQzQ0TlRnM01pd3lNamd1TWprek5qVXpJRU14TURrd0xqUXpOelExTERFMk1TNDNPVGMyTnpJZ09UazVMakk0TWpVeE5Td3hNekl1TXpNME5ESTBJRGt4TVM0ek56RTVNamtzTVRVd0xqZzROak0wSUV3eE5USXVOalF4T0RjM0xETXhNUzR3TURJME1ESWdRemswTGprek9EQTBOek1zTXpJekxqRTNPVGN6TnlBME15NHpNREV4T0RZeExETTFOUzR4TXpNd05EUWdOaTQyTlRVeU16TXlNaXcwTURFdU16UXdNVEU0SUV3d0xEUXdPUzQzTXpFM016WWdUREFzTUNCTU1USTRNQ3d3SUV3eE1qZ3dMRE0zTkM0NU9UazVOaUJhSWlCcFpEMGlRMjl0WW1sdVpXUXRVMmhoY0dVaUlHWnBiR3c5SWlOR1JrWkdSa1lpUGp3dmNHRjBhRDROQ2lBZ0lDQThMMmMrRFFvOEwzTjJaejQ9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBOEFBQUFSQ0FZQUFBRjFEY1kzQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQU41SlJFRlVPQkZqWUFDQy8vLy9OekFDaWYwZ0RoaUFSS0JNQmdaVUtaQXdTR1FPa0ZhR3FXR0NNVkJvWkZQUURibUxya1VaWGVBdTJDd1VNMEFpUUFGbklGVURsa1VRTFl5TWpIdlJMVUZJUTFub2RtQXFBQnJqQ0JSdHdaQUJpa0hsSUZKQWQwZ0I4V1lRRFZQTUNHSUFCVllES1JHWUlKQitBOVFaaXRkeGVCMUdLMG1vZjk0Z3VSVEVCTGtXRkFZUWdOT2ZTQW80Z2V3b0lBNEhZbGFZT0pEK0RjUXJnWGdaME1Udk1IRlFPSUJDckFLSWRXR0NSTkNYZ1dvNjhBWWlJVVB3aHVQZzFod05kQjRvQUVnQklQWFI0Q1FKMHdVTWVaS2lDZ0FwTUdFOXVxdXJLZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRFFBQUFBN0NBWUFBQUZES1ptb0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUEvbEpSRUZVYUFYdG1vZHkxREFRaGtNb29SUEtRS2g1LytjS2ZTQ2hRd0lFL3M5M3E1RmxOWi9QVGhudnpNYXl0S3V0WHBYTHhrWWJIcmRmRjI4WGdzNWRlOSt4UnZqY1ZNZFcyR252RENZaE8yaGNUb0ZsUjZoZzAzMU5mNjhhUi9pOEhYYUVVNGJqazc2M2xIa2kwWTl5NHU5b2NOc2plS0YyMUNPdGFUMkdzSGxaSFVqZHFHVndFMVJGejFFdkd5c3h3UXRqSCthSFM0SHU0UXgxUFl0R2xkMFhSZnM4WU15KytyTVNIK0tVaEdjYVFVSU03cXZ6cGorQUhka1U4WWlkRmplOHpwcm1McTcrWGtQcDAvU0pqK003cjB6Tzk4N1NmT09QRFhjaWJnUGVNNWt4TWFrVXhxcU1nWms4akUyU1RGQlBLOWVrb053VEhnbi9DZmtZSHdnUGhjNU90WHNEeVk5MlRjVXFjR00ydEVuVHc3cHBqdjhvcG0rRnlWUER6UGxVaUJ0ZkN2OEtHeUROMFdhbGRGOU1rZjJMaXhFY0QxNld0ZjlnVXg3NnM2M0FNWmE3T3FyTWdqb3VxZTNBZFh6WmZSZVoydms3ZEZZRmtsOTJoNlBjWVhNMmxTV3NETERUUjluRjJ0YVhyZmNTSkN0TFRGQTRHZHM5dG4yZmhKK0RRZmh0WDdLbk5zVTJDaldDZkVicUZ5VUZ0eUQ0aTdBS1lPd0RiTTZKNDNYaFQySFNBbzIxb0ZZUXl3Q0ZFUSs4RS80V2N2SWhXNzhLaTFCeVhTa0d1ZmdWaFJzQkxtTDVTQjV5akZCUFVoaGFZaGVGbUVYc01VbFRGajRXd0ZvZ0RId1dMSFN2aEszNCtZS3loR0tzaGF5aVJkTnJwWGgwNW5yblRyS3BjN3p3R0lZMHFTN0VybG1PYUl3SmZBSTdqYVF4cFdodVRoSmJVd2hxN0pnRnJSek8yWFd6NjV3SDVtUndydWpSb0tnZTRqb091bU11RXh5bzN3c2JHSDNobTJ3cDl3V1pkZGsxMzRnaVQ5dHpIR3VNUFh0cmN4S2hkMTIyNW8rMjNYS1MxTURpM0NiZTduelovTE1YVDBMTWRURmlyTUxDWDhJUHdpdENNcFd0OFd0aEVXb0YyVVJzOHRrR0k0Q1VkYmNpYW1laHI2RHNaTXRCNXJ3bHhLMnBFa2ZDNEc0T0NOVkpJOW9pck11Z1M1SjBWOGl4Q2FEWUhBaC84QklCNktDSEQ0QU9ldmdHd1JDRDFxVlVYMmRrRGU1akVPbERHdGt2VEdPa1RTeGRPWTJUbnNnclFza2dmcnZqc3BZcUFIQ1ZRMnJ3bkFLUVQycmFiNGhIYXU4TGsvSkRnd1o3U01MR2dxb01NWU9JQUQrejhsNzZvTWRTdU8rOC9qZE1wWHdyUExLSWtGYlUvRGZDdFpaUnpUYzJZQVAzUkJ6Nzl3a2pDeGpBSmRKWk13YTkwUm5kZ1cwTUFvSHExWGhCZnFyK211NmJac3lwMG02SU1yTkJRN3czQmU4Y29TbThQRVRHSEtFaDNwdUNkNDdRRkY0ZUl1TmNSc2dPVHJVL0lnNXg0Rmk4cHZzeERUWjMvQk1rdU9yL3JvajF4SURkTmtjZmJEbmdCVGhYNTZHRlNZdS9kajdpN3NDK3IxNW5lbit5TmJmUnAzaW5ZUkZLeVQ3emR3b3B3K2l2OGxCdWdvcXh3UmxTaWxCT0IvOU1EOTJxbDRVbmRpK1hNNjZ2VXV0eVJrZW5JUkhxVExic2lLVk5TRHZHSldVajR6OWhHNno3STVZaXlRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmxhZy1sb2dvLWI2YzBhM2I1MmRhZTJiZjk4ZjE5OWRjNjAyMmRjNjg5LnBuZ1wiOyIsImNvbnN0IGltZ0FQSSA9IHtcclxuICBhdmF0YXI6IFtcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybC5zdmcnLFxyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9naXJsMi5zdmcnLFxyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9naXJsMy5zdmcnLFxyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9naXJsNC5zdmcnLFxyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9naXJsNS5zdmcnLFxyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9naXJsLnN2ZycsXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2JveS5zdmcnLFxyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9ib3kyLnN2ZycsXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2JveTMuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfYm95NC5zdmcnLFxyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9ib3k1LnN2ZydcclxuICBdLFxyXG4gIHBob3RvOiBbXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY3NXg5MDAvZTFhZDkyL2ZmZicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzk2N3g3MjUvZWE2ZDZkL2ZmZicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEyODB4ODQ5L2VhNmRiNy9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS85Njd4NzI1L2JiNmRlYS9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDQ4eDcwMS82ZDZmZWEvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvNmRjMGVhL2ZmZicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzk3MHg3MjUvNmRlYWE2L2ZmZicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTF4NzAwL2I4ZGUyNy9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUxeDcwMS9kZTlmMjcvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvZWY0NTQ1L2ZmZicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwL2ZmYzRjNC83NTc1NzUnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4NDQ3L2ZkZmZjNC83NTc1NzUnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMjgweDg1MS9jNGZmZDcvNzU3NTc1JyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDQyNS9jNGNkZmYvNzU3NTc1JyxcclxuICBdLFxyXG4gIGNyeXB0bzogW1xyXG4gICAgJy9pbWFnZXMvY3J5cHRvL2hleGEtb3JhbmdlLnBuZycsXHJcbiAgICAnL2ltYWdlcy9jcnlwdG8vaGV4YS1ncmVlbi5wbmcnLFxyXG4gICAgJy9pbWFnZXMvY3J5cHRvL2hleGEtb3JhbmdlLnBuZycsXHJcbiAgICAnL2ltYWdlcy9jcnlwdG8vaGV4YS1ncmVlbi5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82MDB4MzQxL2NhYzE0Mi9GRkZGRkYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMjgweDY3Ny8yMDQ0NzMvRkZGRkZGJyxcclxuICAgICcvaW1hZ2VzL2NyeXB0by9jcnlwdG9fbGFwdG9wLnBuZydcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW1nQVBJO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBjcnlwdG86IHtcclxuICAgIG5hbWU6ICdUcmFkaW5nUGxhbmV0JyxcclxuICAgIGRlc2M6ICdXaXRoIFRQLCBvdXIgZ292ZXJuYW5jZSB0b2tlbiwgeW91IGNhbiBoZWxwIGRlY2lkZSB0aGUgZnV0dXJlIG9mIHRoZSBleGNoYW5nZS4gQXMgd2UgZ3JvdywgeW91IGdyb3chJyxcclxuICAgIHByZWZpeDogJ3RwJyxcclxuICAgIGxvZ29UZXh0OiAnVHJhZGluZ1BsYW5ldCcsXHJcbiAgICBwcm9qZWN0TmFtZTogJ1RyYWRpbmdQbGFuZXQnLFxyXG4gICAgLy8gdXJsOiAnbHV4aXJlYWN0LnV4LW1hZXN0cm8uY29tL2NvaW56JyxcclxuICAgIGltZzogJy9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nJyxcclxuICAgIG5vdGlmTXNnOiAnRG9uZWMgc2l0IGFtZXQgbnVsbGEgc2VkIGFyY3UgcHVsdmluYXIgdWx0cmljaWVzIGNvbW1vZG8gaWQgbGlndWxhLicsXHJcbiAgICBjb3ZlcjogXCIvc3RhdGljL2ltYWdlcy9lYXN0ZXItYmF0dGxlLnBuZ1wiXHJcbiAgfVxyXG59O1xyXG4iLCJjb25zdCBsaW5rID0ge1xyXG4gIGNyeXB0bzoge1xyXG4gICAgaG9tZTogJy8nLFxyXG4gICAgY29udGFjdDogJy9jb250YWN0JyxcclxuICAgIGxvZ2luOiAnL2xvZ2luJyxcclxuICAgIHJlZ2lzdGVyOiAnL3JlZ2lzdGVyJ1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpbms7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVRleHRBbGlnbiA9IG1ha2VTdHlsZXMoe1xyXG4gIHRleHRDZW50ZXI6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9LFxyXG4gIHRleHRMZWZ0OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0J1xyXG4gIH0sXHJcbiAgdGV4dFJpZ2h0OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCdcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUZsb2F0ID0gbWFrZVN0eWxlcyh7XHJcbiAgZmxvYXRMZWZ0OiB7XHJcbiAgICBmbG9hdDogJ2xlZnQnXHJcbiAgfSxcclxuICBmbG9hdFJpZ2h0OiB7XHJcbiAgICBmbG9hdDogJ3JpZ2h0J1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVRleHQgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICBmb250U2l6ZTogNDgsXHJcbiAgICBsaW5lSGVpZ2h0OiAnNzJweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZm9udFNpemU6IDM4LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNjBweCdcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6IDI4LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDRweCdcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZTI6IHtcclxuICAgIGZvbnRTaXplOiAzNixcclxuICAgIGxpbmVIZWlnaHQ6ICc1NnB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZm9udFNpemU6IDMyLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDhweCdcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzZweCcsXHJcbiAgICB9XHJcbiAgfSxcclxuICBzdWJ0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxyXG4gICAgZm9udFNpemU6IDI4LFxyXG4gICAgbGluZUhlaWdodDogJzQ0cHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgbGluZUhlaWdodDogJzM2cHgnLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcyOHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdWJ0aXRsZTI6IHtcclxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXHJcbiAgICBmb250U2l6ZTogMjIsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMzJweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzJweCcsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgbGluZUhlaWdodDogJzI0cHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcmFncmFwaDoge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcclxuICAgIGZvbnRTaXplOiAxNixcclxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4J1xyXG4gIH0sXHJcbiAgY2FwdGlvbjoge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcclxuICAgIGZvbnRTaXplOiAxNixcclxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcclxuICAgIH0sXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlSGlkZGVuID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGxnRG93bjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ2xnJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWREb3duOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBzbURvd246IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHhzRG93bjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGdVcDoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIG1kVXA6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBzbVVwOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH1cclxufSkpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICB1c2U6IHRydWVcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ZhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvT3V0bGluZWRJbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhckNvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU3dpcGVhYmxlRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvWm9vbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd1Vwd2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MYW5ndWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1RlbGVncmFtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFuY2hvci1saW5rLXNtb290aC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYW5pbWF0ZWQtc2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvdW50dXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGFyYWxsYXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsLXBhcmFsbGF4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbHNweVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC13b3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QteW91dHViZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9