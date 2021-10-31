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
  }, t('common:crypto-landing.banner_viewmarket')))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, __jsx("figure", {
    className: classes.objectArt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/crypto/banner-art.png",
    alt: "illustration",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  })))))), __jsx("div", {
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
    [theme.breakpoints.up('md')]: {
      height: 700
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(5)
    }
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
  }, name, "\xA0-\xA0", title)));
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
    src: "/images/crypto/faq.png",
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
    videoId: "QPMkYyM2Gzg",
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
    src: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_15__["default"].crypto[4],
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
  }, __jsx("svg", {
    width: "404px",
    height: "452px",
    viewBox: "0 0 404 452",
    version: "1.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx("linearGradient", {
    x1: "34.1218989%",
    y1: "15.1303808%",
    x2: "20.0910756%",
    y2: "110.664023%",
    id: "featureLinearGradient-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, __jsx("stop", {
    stopColor: theme.palette.primary.light,
    offset: "0%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }), __jsx("stop", {
    stopColor: theme.palette.primary.light,
    offset: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }))), __jsx("g", {
    id: "Feature-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M2,136.921005 L2,314.197531 C2,330.732338 10.8296846,346.011946 25.1636364,354.27935 L178.836364,442.917242 C193.170315,451.184645 210.829685,451.184645 225.163636,442.917242 L378.836364,354.27935 C393.170315,346.011946 402,330.732338 402,314.197531 L402,136.921005 C402,120.385457 393.170315,105.10659 378.836364,96.8384449 L225.163636,8.2005525 C210.829685,-0.066850833 193.170315,-0.066850833 178.836364,8.2005525 L25.1636364,96.8384449 C10.8296846,105.10659 2,120.385457 2,136.921005",
    id: "FeatureFill-1",
    stroke: "url(#featureLinearGradient-1)",
    strokeWidth: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: classes.counter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.lower,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "ion-ios-ionic-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, "+600"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    display: "block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }, t('common:crypto-landing.mainfeature_supported'))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "ion-ios-people-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  }, "+200K"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    display: "block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 19
    }
  }, t('common:crypto-landing.mainfeature_registered')))), __jsx("div", {
    className: classes.higher,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "ion-ios-archive-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }, "+20M"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    display: "block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 19
    }
  }, t('common:crypto-landing.mainfeature_open'))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "ion-ios-heart-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }, "+50M"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    display: "block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }, t('common:crypto-landing.mainfeature_invested')))))))));
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
    src: "/images/crypto/illustration1.png",
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
    src: "/images/crypto/illustration2.png",
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
  }, __jsx("ul", {
    className: classes.progressWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, coinData.map((item, index) => __jsx("li", {
    key: index.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: classes.coin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.logo,
    src: item.logo,
    alt: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 27
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 27
    }
  }, item.name)), __jsx("div", {
    className: classes.progress,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: classes.unit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 27
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 31
    }
  }, "USD"), "\xA05.000"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 31
    }
  }, "USD"), "\xA015.000")), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: themeProgress(item.color),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 27
    }
  }, __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "determinate",
    value: play ? item.progress : 0,
    classes: {
      root: classes.track,
      bar: classes.bar
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  })))))))))))));
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
    position: 'absolute',
    top: 80,
    left: 80,
    width: 400,
    '& svg': {
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
/* harmony import */ var _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../public/images/crypto-logo.svg */ "./public/images/crypto-logo.svg");
/* harmony import */ var _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_14__);
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
  }, "\xA9\xA0", _public_text_brand__WEBPACK_IMPORTED_MODULE_15___default.a.crypto.footerText);
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
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.footer, invert && classes.invert),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h6",
    color: "textPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_15___default.a.crypto.projectName)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "textPrimary",
    className: classes.footerDesc,
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, t('common:crypto-landing.banner_title')), __jsx("div", {
    className: classes.quickLinks,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
      columnNumber: 15
    }
  }, t('common:crypto-landing.footer_link')), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, footer.description.map((item, index) => __jsx("li", {
    key: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: footer.link[index],
    variant: "subtitle1",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, item)))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, news.map((item, index) => __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.blogItem,
    href: "#",
    key: index.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: item.img,
    alt: "thumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: classes.listText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "button",
    className: classes.category,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, t('common:crypto-landing.footer_news')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    display: "block",
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, "Sed imperdiet enim ligula vitae viverra. "))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.socmed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "FB",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "ion-logo-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "TW",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "ion-logo-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "IG",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "ion-logo-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "LI",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "ion-logo-linkedin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: values.lang,
    onChange: handleChange,
    MenuProps: {
      container: ctn
    },
    startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.icon,
      position: "start",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }, __jsx(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 19
      }
    })),
    className: classes.selectLang,
    classes: {
      selectMenu: classes.selectMenu
    },
    input: __jsx(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default.a, {
      labelWidth: 200,
      name: "lang",
      id: "outlined-lang-simple",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 22
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    value: "eng",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, "English"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    value: "deu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, "Deutsch"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    value: "ara",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0651\u0629"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    value: "ind",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, "Bahasa Indonesia"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    value: "prt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, "Portugu\xEAs"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    value: "zho",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, "\u7B80\u4F53\u4E2D\u6587")), __jsx(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
    '& img': {
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
/* harmony import */ var _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../public/images/crypto-logo.svg */ "./public/images/crypto-logo.svg");
/* harmony import */ var _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_18__);
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
  }, __jsx("img", {
    src: _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
    alt: "logo",
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
  }, __jsx("img", {
    src: _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
    alt: "logo",
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
        '& img': {
          height: 48,
          width: 48,
          marginBottom: 0
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
  image: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_11__["default"].crypto[0],
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
  }, __jsx("svg", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 27
    }
  }, __jsx("use", {
    xlinkHref: "/images/crypto/deco-promo.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }))), __jsx("figure", {
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
        height: 393,
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
  text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  name: 'John Doe',
  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_9__["default"].avatar[6],
  title: 'Chief Digital Officer'
}, {
  text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
  name: 'Jean Doe',
  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_9__["default"].avatar[7],
  title: 'Chief Digital Officer'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  name: 'Jena Doe',
  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_9__["default"].avatar[1],
  title: 'Graphic Designer'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
  name: 'Jovelin Doe',
  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_9__["default"].avatar[2],
  title: 'Senior Graphic Designer'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  name: 'Jihan Doe',
  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_9__["default"].avatar[3],
  title: 'CEO Software House'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  name: 'John Doe',
  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_9__["default"].avatar[9],
  title: 'Senior Graphic Designer'
}];

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

/***/ "./public/images/crypto-logo.svg":
/*!***************************************!*\
  !*** ./public/images/crypto-logo.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTtzdHJva2U6dXJsKCNTVkdJRF8yXyk7c3Ryb2tlLXdpZHRoOjE2O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MTc7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxnPg0KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTQ2LjY3OSIgeTE9IjQ0NS4zNDk2IiB4Mj0iMzY1LjMyMSIgeTI9IjY2LjY1MDQiPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjE4NDYiIHN0eWxlPSJzdG9wLWNvbG9yOiM0Q0FGNTAiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4yMjc3IiBzdHlsZT0ic3RvcC1jb2xvcjojOUZCNzJFIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuODE4OSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGQzEwNyIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyOS4zNTc5IiB5MT0iMjU2IiB4Mj0iNDgyLjY0MjEiIHkyPSIyNTYiPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjE4MTEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkMxMDciLz4NCgkJPHN0b3AgIG9mZnNldD0iMC43NzIzIiBzdHlsZT0ic3RvcC1jb2xvcjojOUZCNzJFIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuODE1NCIgc3R5bGU9InN0b3AtY29sb3I6IzRDQUY1MCIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3LjQsMTcwLjd2MTcwLjZjMCwyNS4zLDEzLjUsNDguNywzNS41LDYxLjRMMjIwLjUsNDg4YzIxLjksMTIuNyw0OSwxMi43LDcwLjksMGwxNDcuNy04NS4zDQoJCWMyMS45LTEyLjcsMzUuNS0zNi4xLDM1LjUtNjEuNFYxNzAuN2MwLTI1LjMtMTMuNS00OC43LTM1LjUtNjEuNEwyOTEuNSwyNGMtMjEuOS0xMi43LTQ5LTEyLjctNzAuOSwwTDcyLjgsMTA5LjMNCgkJQzUwLjksMTIyLDM3LjQsMTQ1LjQsMzcuNCwxNzAuN3oiLz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0MS43LDMyNy45VjE4MS40SDE2MHYxMzAuMkgyMjh2MTYuM0gxNDEuN3oiLz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2Ni40LDI4MS40di03NC4yaDE3LjN2NzMuMWMwLDIxLjUsMTIuMSwzNS4xLDM0LjUsMzUuMWMyMi40LDAsMzQuNy0xMy42LDM0LjctMzUuMXYtNzMuMWgxNy4zdjc0LjINCgkJCWMwLDI5LjktMTcuNiw0OS4yLTUyLDQ5LjJDMjgzLjcsMzMwLjYsMjY2LjQsMzExLDI2Ni40LDI4MS40eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"

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
    name: 'Coinz',
    desc: 'Luxiren Cryptocurrency - React Single Landing Page Template',
    prefix: 'luxiren',
    footerText: 'Luxiren Theme 2021',
    logoText: 'Luxiren Coinz',
    projectName: 'Coinz',
    url: 'luxireact.ux-maestro.com/coinz',
    img: '/static/images/crypto-logo.png',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYW5uZXIvQmFubmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFubmVyL2Jhbm5lci1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhbm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JlbmVmaXQvQmVuZWZpdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JlbmVmaXQvYmVuZWZpdC1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JlbmVmaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy9UZXN0aW1vbmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzL2NhcmRzLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlci9Db3VudGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlci9jb3VudGVyLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZhcS9GYXEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GYXEvZmFxLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmFxL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmVhdHVyZS9GZWF0dXJlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmVhdHVyZS9NYWluRmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZlYXR1cmUvTW9yZUZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWF0dXJlL2ZlYXR1cmUtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWF0dXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJXaXRoQ291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXItc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL01hcmtldFByaWNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL01vYmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb24vTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VOYXYvUGFnZU5hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VOYXYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlTmF2L3BhZ2VuYXYtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJhbGxheC9IZXhhZ29uYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJhbGxheC9wYXJhbGxheC1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb21vdGlvbi9Qcm9tb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9tb3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9tb3Rpb24vcHJvbW90aW9uLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVzdGltb25pYWxzL1Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rlc3RpbW9uaWFscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rlc3RpbW9uaWFscy90ZXN0aS1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpdGxlL1RpdGxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGl0bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS90aXRsZS1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9pMThuLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvLWxvZ28uc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tYmVuZWZpdC5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9jcnlwdG8vZGVjby1ib3R0b20tZGFyay5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9jcnlwdG8vZGVjby1ib3R0b20tbGlnaHQuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tZmFxLXRvcC1kYXJrLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWZhcS10b3AtbGlnaHQuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tbGlzdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9jcnlwdG8vaGV4YS1uYXYucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvZmxhZy1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdGV4dC9icmFuZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdGV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3RoZW1lL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi95b3V0dWJlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJDb250ZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3dpcGVhYmxlRHJhd2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9ab29tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd1Vwd2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGVja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xhbmd1YWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFuY2hvci1saW5rLXNtb290aC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlZC1zbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudHVwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGFyYWxsYXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGwtcGFyYWxsYXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxzcHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXdvd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXlvdXR1YmVcIiJdLCJuYW1lcyI6WyJCYW5uZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ0ZXh0IiwidXNlVGV4dCIsImVsZW0iLCJ1c2VSZWYiLCJ0IiwidGhlbWUiLCJ1c2VUaGVtZSIsImhpZGUiLCJzZXRIaWRlIiwidXNlU3RhdGUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50IiwiZG9jIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJlbFRvcCIsIm9mZnNldFRvcCIsImVsQm90dG9tIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwidXNlRWZmZWN0Iiwid2luZG93IiwicGFydGljbGVzSlMiLCJwYXJ0aWNsZXMiLCJudW1iZXIiLCJ2YWx1ZSIsImRlbnNpdHkiLCJlbmFibGUiLCJ2YWx1ZV9hcmVhIiwiY29sb3IiLCJzaGFwZSIsInR5cGUiLCJzdHJva2UiLCJ3aWR0aCIsInBvbHlnb24iLCJuYl9zaWRlcyIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsInJldGluYV9kZXRlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicm9vdCIsImNhbnZhc1dyYXAiLCJvdmVybGF5IiwiY2xzeCIsImRlY29Jbm5lciIsInBhcnRpY2xlQmFja2dyb3VuZCIsImJhbm5lcldyYXAiLCJ0aXRsZTIiLCJzdWJ0aXRsZTIiLCJidG5BcmVhIiwiaW52ZXJ0Iiwib2JqZWN0QXJ0IiwiZGVjb0JvdHRvbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIiwiYmFubmVyU3R5bGVzIiwibWFrZVN0eWxlcyIsInBvc2l0aW9uIiwidXAiLCJwYWRkaW5nQm90dG9tIiwic3BhY2luZyIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJkYXJrIiwicHJpbWFyeSIsIm1haW4iLCJjb250ZW50IiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImZhZGUiLCJkaXNwbGF5IiwiekluZGV4IiwibWF4V2lkdGgiLCJjb21tb24iLCJ3aGl0ZSIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyQ29sb3IiLCJib3R0b20iLCJmaWxsIiwiZGFya2VuIiwibGlnaHRlbiIsInRyYW5zZm9ybSIsInZpc2liaWxpdHkiLCJCZW5lZml0IiwiaXNEZXNrdG9wIiwicGFyYWxsYXhXcmFwIiwiaW1nQVBJIiwiY3J5cHRvIiwicGFyYWxsYXhQcm9wcyIsIndyYXBwZXIiLCJkZXNjIiwibGlzdCIsImltZyIsImRlY28iLCJsaWdodCIsImJlbmVmaXRTdHlsZXMiLCJibGFjayIsInBhZGRpbmdUb3AiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmciLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRNZWRpdW0iLCJtYXJnaW4iLCJsaXN0U3R5bGUiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJkZWNvTGlzdCIsInJpZ2h0IiwiZGVjb0JlbmVmaXQiLCJUZXN0aW1vbmlhbCIsIm5hbWUiLCJ0aXRsZSIsImF2YXRhciIsImFjdGl2ZSIsInRlc3RpbW9uaWFsIiwicGFwZXIiLCJjYXB0aW9uIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsImNhcmRzU3R5bGVzIiwiYm9yZGVyIiwidHJhbnNpdGlvbiIsInRleHRPdmVyZmxvdyIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJDb3VudGVyIiwicGxheSIsInNldFBsYXkiLCJjb3VudHVwIiwidmFsIiwiaXNQbGF5IiwiaGFuZGxlUGxheSIsInNldFRpbWVvdXQiLCJjb3VudGVyV3JhcCIsInN1YnRpdGxlIiwiY2FsbEFjdGlvbiIsInJvdXRlTGluayIsInJlZ2lzdGVyIiwiYnV0dG9uIiwiY291bnRlclN0eWxlcyIsImZhcURhdGEiLCJxIiwiYSIsIkZhcSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJSZWFjdCIsImhhbmRsZUNoYW5nZSIsInBhbmVsIiwiZXZlbnQiLCJuZXdFeHBhbmRlZCIsInBhcmFsbGF4IiwiaWxsdXN0cmF0aW9uIiwiYWNjb3JkaW9uIiwibWFwIiwiaXRlbSIsImluZGV4IiwidG9TdHJpbmciLCJoZWFkaW5nIiwiaWNvbiIsImRldGFpbCIsImZhcVN0eWxlcyIsImRlY29GYXFEYXJrIiwiZGVjb0ZhcUxpZ2h0IiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJyb3VuZGVkIiwibWVkaXVtIiwiRmVhdHVyZSIsIlRyYW5zaXRpb24iLCJmb3J3YXJkUmVmIiwicmVmIiwiTWFpbkZlYXR1cmUiLCJwbGF5ZXIiLCJzZXRQbGF5ZXIiLCJvcGVuUG9wdXAiLCJzZXRPcGVuUG9wdXAiLCJoYW5kbGVDbGlja09wZW4iLCJ5dCIsInVzZSIsInBsYXlWaWRlbyIsImhhbmRsZUNsb3NlIiwicGF1c2VWaWRlbyIsIl9vblJlYWR5IiwidGFyZ2V0Iiwib3B0cyIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwicmVsIiwic2hvd2luZm8iLCJtdXRlIiwib3JpZ2luIiwibWFpbkZlYXR1cmUiLCJ2aWRlb1BvcHVwIiwiY2xvc2VCdG4iLCJ2aWRlbyIsInBsYXlCdG4iLCJmZWF0dXJlV3JhcCIsImNvdW50ZXIiLCJsb3dlciIsImhpZ2hlciIsImNvaW5EYXRhIiwibG9nbyIsInByb2dyZXNzIiwiTW9yZUZlYXR1cmUiLCJ0aGVtZVByb2dyZXNzIiwiY3JlYXRlTXVpVGhlbWUiLCJtb3JlRmVhdHVyZSIsImNlbnRlciIsInByb2dyZXNzV3JhcCIsImNvaW4iLCJ1bml0IiwidHJhY2siLCJiYXIiLCJmZWF0dXJlU3R5bGVzIiwibWluSGVpZ2h0IiwidHJhbnNmb3JtT3JpZ2luIiwianVzdGlmeUNvbnRlbnQiLCJmb250V2VpZ2h0Qm9sZCIsImNoYXJ0RGVjbyIsImFsaWduSXRlbXMiLCJmbGV4IiwiZGl2aWRlciIsIkNvcHlyaWdodCIsImJyYW5kIiwiZm9vdGVyVGV4dCIsImZvb3RlciIsImRlc2NyaXB0aW9uIiwibGluayIsIm5ld3MiLCJpbWdBcGkiLCJwaG90byIsIkZvb3RlciIsImN0biIsInNldEN0biIsInZhbHVlcyIsInNldFZhbHVlcyIsImxhbmciLCJpMThuIiwibGFuZ3VhZ2UiLCJnZXRFbGVtZW50QnlJZCIsIm9sZFZhbHVlcyIsImNoYW5nZUxhbmd1YWdlIiwidG9nZ2xlRGlyIiwicHJvamVjdE5hbWUiLCJmb290ZXJEZXNjIiwicXVpY2tMaW5rcyIsImJsb2dJdGVtIiwibGlzdFRleHQiLCJjYXRlZ29yeSIsInNvY21lZCIsImNvbnRhaW5lciIsInNlbGVjdExhbmciLCJzZWxlY3RNZW51IiwiRm9vdGVyV2l0aERlY28iLCJmb290ZXJDb3VudGVyIiwiZGVjb1RvcCIsImZvb3RlclN0eWxlcyIsIndoaXRlU3BhY2UiLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dERlY29yYXRpb24iLCJib3JkZXJUb3AiLCJjcmVhdGVEYXRhIiwidXJsIiwib2Zmc2V0IiwiaWQiLCJMaW5rQnRuIiwidG8iLCJIZWFkZXIiLCJmaXhlZCIsInNldEZpeGVkIiwiZmxhZ0ZpeGVkIiwic2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJuZXdGbGFnRml4ZWQiLCJvblRvZ2dsZURhcmsiLCJvblRvZ2dsZURpciIsIm1lbnVMaXN0IiwibmF2TWVudSIsIm9wZW5EcmF3ZXIiLCJzZXRPcGVuRHJhd2VyIiwiaGFuZGxlT3BlbkRyYXdlciIsImhlYWRlciIsImhlYWRlckNvbnRlbnQiLCJtb2JpbGVNZW51IiwiaG9tZSIsIkFuY2hvckxpbmsiLCJjb250YWN0IiwibmF2QXV0aCIsInN0aWNreSIsIm1hcmtldExpc3QiLCJwcmljZSIsInN0YXR1cyIsInBlcmNlbnQiLCJNYXJrZXRQcmljZSIsInNldHRpbmdzIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheVNwZWVkIiwiY3NzRWFzZSIsInBhdXNlT25Ib3ZlciIsInJlbmRlclBlcmNlbnQiLCJhcnJvdyIsInN0YXkiLCJtYXJrZXQiLCJNb2JpbGVNZW51IiwidG9nZ2xlRHJhd2VyIiwib3BlbiIsIlNpZGVMaXN0IiwibW9iaWxlTmF2IiwibWVudSIsIm1lbnVPcGVuIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJsZW5ndGgiLCJkaXZpZGVyU2lkZWJhciIsInBhcGVyTmF2IiwidGhlbWVUeXBlIiwiU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJTZXR0aW5ncyIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJpc0RhcmsiLCJzZXREYXJrIiwiaGFuZGxlQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2hhbmdlTW9kZSIsInRvZ2dsZURhcmsiLCJoYW5kbGVDaGFuZ2VMYW5nIiwiQm9vbGVhbiIsInVuZGVmaW5lZCIsInNldHRpbmciLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtb2RlTWVudSIsImxhbmdNZW51Iiwib3B0aW9ucyIsImFsbExhbmd1YWdlcyIsImZsYWdJY29uIiwiZmxhZyIsImJhY2tncm91bmRQb3NpdGlvbiIsImhlYWRlclN0eWxlcyIsImZyb20iLCJib3JkZXJMZWZ0Q29sb3IiLCJtYXJnaW5MZWZ0IiwibWluV2lkdGgiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJib3JkZXJMZWZ0Iiwib3V0bGluZSIsImZvbnRTdHlsZSIsIlRyYW5zaXRpb25VcCIsIk5vdGlmaWNhdGlvbiIsInNldE9wZW4iLCJub3RpZmljYXRpb24iLCJhY3Rpb24iLCJub3RpZmljYXRpb25TdHlsZXMiLCJQYWdlTmF2Iiwic2hvdyIsInNldFNob3ciLCJmbGFnU2hvdyIsIm5ld0ZsYWdTaG93IiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJwYWdlTmF2Iiwic2VjdGlvbk5hdiIsInRvb2x0aXAiLCJmYWIiLCJwYWdlbmF2IiwidHJhbnNpdGlvbkRlbGF5IiwiUGFyYWxsYXhDbG91ZCIsImRvdHNXcmFwIiwiaW5uZXJQYXJhbGxheCIsImxhcmdlIiwiaGV4YVdyYXAiLCJyaWdodFRvcEJhY2siLCJiaWciLCJoZXhhQmFjayIsInJpZ2h0VG9wRnJvbnQiLCJzbWFsbCIsImxlZnRCb3R0b21CYWNrIiwibGVmdEJvdHRvbUZyb250IiwicGFyYWxsYXhTdHlsZXMiLCJoZXhhVG9wIiwic2xpZGVyRGF0YSIsImltYWdlIiwiZGF0ZSIsIlByb21vdGlvbiIsInNsaWRlcldyYXAiLCJvZGQiLCJldmVuIiwiaW1nV3JhcCIsImRlY29yYXRpb24iLCJ0aW1lIiwicHJvbW90aW9uU3R5bGVzIiwiZGVjb0JvdHRvbURhcmsiLCJkZWNvQm90dG9tTGlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZXhhIiwibWF4SGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImZvbnRGYW1pbHkiLCJ0ZXN0aUNvbnRlbnQiLCJUZXN0aW1vbmlhbHMiLCJzbGlkZXIiLCJ1c2VTdHlsZSIsInNldEFjdGl2ZSIsImFjdGl2ZVRyYW5zaXRpb24iLCJzZXRBY3RpdmVUcmFuc2l0aW9uIiwiYWZ0ZXJDaGFuZ2UiLCJiZWZvcmVDaGFuZ2UiLCJuZXh0Iiwic2xpZGVTdGF0ZSIsInBhc3QiLCJmdXR1cmUiLCJzbGlkZSIsImNhcm91c2VsIiwibmF2IiwicHJldiIsInNsaWNrUHJldiIsInNsaWRlQ29udGVudCIsInNsaWNrTmV4dCIsInBhZ2luYXRpb24iLCJBcnJheSIsImUiLCJzbGlja0dvVG8iLCJ0ZXN0aVN0eWxlcyIsImFuaW1hdGlvbkZpbGxNb2RlIiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uRGVsYXkiLCJoZXhhQmciLCJjdXJzb3IiLCJUaXRsZSIsImFsaWduIiwic2V0QWxpZ24iLCJhbGlnbm1lbnQiLCJ0aXRsZVN0eWxlcyIsInRpdGxlU2Vjb25kYXJ5IiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvdGhlckxhbmd1YWdlcyIsImZhbGxiYWNrTG5nIiwiaW5pdEltbWVkaWF0ZSIsImxvY2FsZVBhdGgiLCJyZWFjdCIsInVzZVN1c3BlbnNlIiwibG9jYWxlU3VicGF0aHMiLCJhcmEiLCJlbmciLCJzZWN0aW9uTWFyZ2luIiwibWFpbldyYXAiLCJzcGFjZUJvdHRvbSIsInNwYWNlVG9wIiwic3BhY2VCb3R0b21TaG9ydCIsInNwYWNlVG9wU2hvcnQiLCJjb250YWluZXJXcmFwIiwiTGFuZGluZyIsImlzVGFibGV0Iiwib25seSIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsInByZWZpeCIsImxvZ29UZXh0Iiwibm90aWZNc2ciLCJsb2dpbiIsInVzZVRleHRBbGlnbiIsInRleHRDZW50ZXIiLCJ0ZXh0TGVmdCIsInRleHRSaWdodCIsInVzZUZsb2F0IiwiZmxvYXRMZWZ0IiwiZmxvYXQiLCJmbG9hdFJpZ2h0IiwiZm9udFdlaWdodFJlZ3VsYXIiLCJwYXJhZ3JhcGgiLCJ1c2VIaWRkZW4iLCJsZ0Rvd24iLCJtZERvd24iLCJzbURvd24iLCJ4c0Rvd24iLCJsZ1VwIiwibWRVcCIsInNtVXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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QSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gJ34vdGhlbWUvY29tbW9uJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2Jhbm5lci1zdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBCYW5uZXIocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCBlbGVtID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgY29uc3QgW2hpZGUsIHNldEhpZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmICghZWxlbS5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIGNvbnN0IGVsVG9wID0gZWxlbS5jdXJyZW50Lm9mZnNldFRvcCAtIDIwMDtcclxuICAgIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyBlbGVtLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgaWYgKGRvYy5zY3JvbGxUb3AgPiBlbFRvcCAmJiBkb2Muc2Nyb2xsVG9wIDwgZWxCb3R0b20pIHtcclxuICAgICAgc2V0SGlkZShmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRIaWRlKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cucGFydGljbGVzSlMoJ3BhcnRpY2xlc19iYWNrZ3JvbmQnLCB7XHJcbiAgICAgIHBhcnRpY2xlczoge1xyXG4gICAgICAgIG51bWJlcjoge1xyXG4gICAgICAgICAgdmFsdWU6IDEwMCxcclxuICAgICAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICB2YWx1ZTogJyNmZmZmZmYnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgdHlwZTogJ2NpcmNsZScsXHJcbiAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwMCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwb2x5Z29uOiB7XHJcbiAgICAgICAgICAgIG5iX3NpZGVzOiA1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICB2YWx1ZTogMC41LFxyXG4gICAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgICAgIG9wYWNpdHlfbWluOiAwLjEsXHJcbiAgICAgICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICB2YWx1ZTogMyxcclxuICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDQwLFxyXG4gICAgICAgICAgICBzaXplX21pbjogMC4xLFxyXG4gICAgICAgICAgICBzeW5jOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGRpc3RhbmNlOiAxNTAsXHJcbiAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICAgICAgd2lkdGg6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdmU6IHtcclxuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHNwZWVkOiAyLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgb3V0X21vZGU6ICdvdXQnLFxyXG4gICAgICAgICAgYm91bmNlOiBmYWxzZSxcclxuICAgICAgICAgIGF0dHJhY3Q6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgcm90YXRlWDogNjAwLFxyXG4gICAgICAgICAgICByb3RhdGVZOiAxMjAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICAgICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcclxuICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgIG9uaG92ZXI6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RlOiAncmVwdWxzZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvbmNsaWNrOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbW9kZTogJ3B1c2gnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2Rlczoge1xyXG4gICAgICAgICAgZ3JhYjoge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJ1YmJsZToge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgICAgICBzaXplOiA0MCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDgsXHJcbiAgICAgICAgICAgIHNwZWVkOiAzXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVwdWxzZToge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogMjAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMC40XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHVzaDoge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZW1vdmU6IHtcclxuICAgICAgICAgICAgcGFydGljbGVzX25iOiAyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICByZXRpbmFfZGV0ZWN0OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtlbGVtfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FudmFzV3JhcH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub3ZlcmxheX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRlY29Jbm5lciwgaGlkZSAmJiBjbGFzc2VzLmhpZGUpfT5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInBhcnRpY2xlc19iYWNrZ3JvbmRcIiBjbGFzc05hbWU9e2NsYXNzZXMucGFydGljbGVCYWNrZ3JvdW5kfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhbm5lcldyYXB9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNsYXNzTmFtZT17dGV4dC50aXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl90aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl9zdWJ0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bkFyZWF9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIiBmdWxsV2lkdGg9e2lzTW9iaWxlfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5iYW5uZXJfZ2V0c3RhcnRlZCcpfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnZlcnR9IHNpemU9XCJsYXJnZVwiIGZ1bGxXaWR0aD17aXNNb2JpbGV9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl92aWV3bWFya2V0Jyl9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLm9iamVjdEFydH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY3J5cHRvL2Jhbm5lci1hcnQucG5nXCIgYWx0PVwiaWxsdXN0cmF0aW9uXCIgLz5cclxuICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb0JvdHRvbX0+XHJcbiAgICAgICAgPHN2Zz5cclxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiL2ltYWdlcy9jcnlwdG8vZGVjby1iYW5uZXIuc3ZnI21haW5cIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkJhbm5lci5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoQmFubmVyKTtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGxpZ2h0ZW4sIGRhcmtlbiwgZmFkZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcclxuXHJcbmNvbnN0IGJhbm5lclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgaGVpZ2h0OiA3MDAsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoNSlcclxuICAgIH1cclxuICB9LFxyXG4gIGNhbnZhc1dyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBgbGluZWFyLWdyYWRpZW50KC00NWRlZywgJHt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrfSAzMCUsICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmt9IDgwJSlgIDogYGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICR7dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbn0gMzAlLCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSA4MCUpYCxcclxuICAgICcmOmFmdGVyJzoge1xyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjIpJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb3ZlcmxheToge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyaywgMC43KSA6IGZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIDAuNyksXHJcbiAgfSxcclxuICBwYXJ0aWNsZUJhY2tncm91bmQ6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogNjAwLFxyXG4gICAgJyYgY2FudmFzJzoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYmFubmVyV3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB6SW5kZXg6IDFcclxuICB9LFxyXG4gIG9iamVjdEFydDoge1xyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgekluZGV4OiAxLFxyXG4gICAgICBsZWZ0OiAtMTMwLFxyXG4gICAgICB0b3A6IDI0MCxcclxuICAgICAgbWF4V2lkdGg6IDU2MCxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgdG9wOiAxMjBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIwKSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEyKSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIwKSxcclxuICAgIH0sXHJcbiAgICAnJiBoNCc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYnRuQXJlYToge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB6SW5kZXg6IDIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgICcmIGJ1dHRvbic6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICBoZWlnaHQ6IDUwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGludmVydDoge1xyXG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gIH0sXHJcbiAgZGVjb0JvdHRvbToge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206IC01MCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICB3aWR0aDogMTQwMCxcclxuICAgICAgaGVpZ2h0OiAzODAsXHJcbiAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZGFya2VuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjYpIDogbGlnaHRlbih0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC44NCksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgxMjAwKV06IHtcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgyLCAxKSdcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4bCcpXToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVjb0lubmVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJSdcclxuICB9LFxyXG4gIGhpZGU6IHtcclxuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYW5uZXJTdHlsZXM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Jhbm5lcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xyXG5pbXBvcnQgaW1nQVBJIGZyb20gJ34vcHVibGljL2ltYWdlcy9pbWdBUEknO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vYmVuZWZpdC1zdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBCZW5lZml0KHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJykpO1xyXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpKTtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWxsYXhXcmFwfT5cclxuICAgICAgICA8UGFyYWxsYXhcclxuICAgICAgICAgIGJnSW1hZ2U9e2ltZ0FQSS5jcnlwdG9bNV19XHJcbiAgICAgICAgICBiZ0ltYWdlQWx0PVwiYmVuZWZpdFwiXHJcbiAgICAgICAgICBzdHJlbmd0aD17MH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhbGxheFByb3BzfSAvPlxyXG4gICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPXtpc0Rlc2t0b3B9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs1fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17dGV4dC50aXRsZTJ9IHZhcmlhbnQ9XCJoM1wiIGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5iZW5lZml0X3RpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICA8bGk+VmVzdGlidWx1bSBmYXVjaWJ1czwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5WaXZhbXVzIHNpdCBhbWV0IGludGVyZHVtIGVsaXQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+RG9uZWMgZGlnbmlzc2ltPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlF1aXNxdWUgbGFjaW5pYSBwdXJ1czwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5GdXNjZSBwbGFjZXJhdCBlbmltIGV0IG9kaW8gbW9sZXN0aWU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+UGVsbGVudGVzcXVlIGFjIGJpYmVuZHVtIHRvcnRvcjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5BbmQgbW9yZeKApjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nQVBJLmNyeXB0b1s2XX0gYWx0PVwiYmVuZWZpdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlY299PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNTg1cHhcIiBoZWlnaHQ9XCIxNTFweFwiIHZpZXdCb3g9XCIwIDAgNTg1IDE1MVwiIHZlcnNpb249XCIxLjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT1cIjY2Ljg0MTI4NDQlXCIgeTE9XCIzMC42MjQyNiVcIiB4Mj1cIi0yMS4wNTgxNDQ3JVwiIHkyPVwiMTAwJVwiIGlkPVwiYmVuZWZpdExpbmVhckdyYWRpZW50LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPXt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0gb2Zmc2V0PVwiMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodH0gb2Zmc2V0PVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPVwiNjYuODQxMjg0NCVcIiB5MT1cIjMwLjYyNDI2JVwiIHgyPVwiLTIxLjA1ODE0NDclXCIgeTI9XCIxMDAlXCIgaWQ9XCJiZW5lZml0TGluZWFyR3JhZGllbnQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59IG9mZnNldD1cIjAlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPXt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodH0gb2Zmc2V0PVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkJlbmVmaXQtMVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJCZW5lZml0LTJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE0My4wMDAwMDAsIC04OC4wMDAwMDApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiQmVuZWZpdC0zXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzMi42MjM4NjIsIDcwLjkxMjAzMilcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LDY3LjM2MjgxNTggQzE1LDcwLjI0MjAxNDIgMTYuNTQwMDYxMyw3Mi45MDI2NDU2IDE5LjA0MDE2OTEsNzQuMzQyMjQ0OCBMNDUuODQzNTUxOCw4OS43NzY3MjEyIEM0OC4zNDM2NTk3LDkxLjIxNjMyMDQgNTEuNDIzNzgyMiw5MS4yMTYzMjA0IDUzLjkyMzg5MDEsODkuNzc2NzIxMiBMODAuNzI3MjcyNyw3NC4zNDIyNDQ4IEM4My4yMjczODA2LDcyLjkwMjY0NTYgODQuNzY3NDQxOSw3MC4yNDIwMTQyIDg0Ljc2NzQ0MTksNjcuMzYyODE1OCBMODQuNzY3NDQxOSwzNi40OTM3MzM5IEM4NC43Njc0NDE5LDMzLjYxNDQwNjQgODMuMjI3MzgwNiwzMC45NTM5MDQxIDgwLjcyNzI3MjcsMjkuNTE0MTc1OCBMNTMuOTIzODkwMSwxNC4wNzk2OTk0IEM1MS40MjM3ODIyLDEyLjY0MDEwMDIgNDguMzQzNjU5NywxMi42NDAxMDAyIDQ1Ljg0MzU1MTgsMTQuMDc5Njk5NCBMMTkuMDQwMTY5MSwyOS41MTQxNzU4IEMxNi41NDAwNjEzLDMwLjk1MzkwNDEgMTUsMzMuNjE0NDA2NCAxNSwzNi40OTM3MzM5IEwxNSw2Ny4zNjI4MTU4IFpcIiBpZD1cIkJlbmVmaXRGaWxsLTFcIiBmaWxsPVwidXJsKCNiZW5lZml0TGluZWFyR3JhZGllbnQtMylcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDkuODgzNzIxLCA1MS45MjgyMTApIHJvdGF0ZSgtMzMwLjAwMDAwMCkgdHJhbnNsYXRlKC00OS44ODM3MjEsIC01MS45MjgyMTApXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUyMC41NjExNzMsMTQ4LjI1MjYwMyBDNTIwLjU2MTE3MywxNTEuMTMxODAyIDUyMi4xMDEyMzQsMTUzLjc5MjQzMyA1MjQuNjAxMzQyLDE1NS4yMzIwMzMgTDU1MS40MDQ3MjUsMTcwLjY2NjUwOSBDNTUzLjkwNDgzMywxNzIuMTA2MTA4IDU1Ni45ODQ5NTUsMTcyLjEwNjEwOCA1NTkuNDg1MDYzLDE3MC42NjY1MDkgTDU4Ni4yODg0NDYsMTU1LjIzMjAzMyBDNTg4Ljc4ODU1MywxNTMuNzkyNDMzIDU5MC4zMjg2MTUsMTUxLjEzMTgwMiA1OTAuMzI4NjE1LDE0OC4yNTI2MDMgTDU5MC4zMjg2MTUsMTE3LjM4MzUyMiBDNTkwLjMyODYxNSwxMTQuNTA0MTk0IDU4OC43ODg1NTMsMTExLjg0MzY5MiA1ODYuMjg4NDQ2LDExMC40MDM5NjMgTDU1OS40ODUwNjMsOTQuOTY5NDg3MSBDNTU2Ljk4NDk1NSw5My41Mjk4ODc5IDU1My45MDQ4MzMsOTMuNTI5ODg3OSA1NTEuNDA0NzI1LDk0Ljk2OTQ4NzEgTDUyNC42MDEzNDIsMTEwLjQwMzk2MyBDNTIyLjEwMTIzNCwxMTEuODQzNjkyIDUyMC41NjExNzMsMTE0LjUwNDE5NCA1MjAuNTYxMTczLDExNy4zODM1MjIgTDUyMC41NjExNzMsMTQ4LjI1MjYwMyBaXCIgaWQ9XCJCZW5lZml0RmlsbC0yXCIgZmlsbD1cInVybCgjYmVuZWZpdExpbmVhckdyYWRpZW50LTIpXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU1NS40NDQ4OTQsIDEzMi44MTc5OTgpIHJvdGF0ZSgtMzMwLjAwMDAwMCkgdHJhbnNsYXRlKC01NTUuNDQ0ODk0LCAtMTMyLjgxNzk5OClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuQmVuZWZpdC5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoQmVuZWZpdCk7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgZGVjb0JlbmVmaXQgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWJlbmVmaXQuc3ZnJztcclxuaW1wb3J0IGRlY29MaXN0IGZyb20gJ34vcHVibGljL2ltYWdlcy9jcnlwdG8vZGVjby1saXN0LnBuZyc7XHJcblxyXG5jb25zdCBiZW5lZml0U3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMTApLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDgpXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDQpXHJcbiAgICB9XHJcbiAgfSxcclxuICBkZXNjOiB7XHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgJyYgaDQnOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCA1KSxcclxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgcGFkZGluZ0xlZnQ6IDAsXHJcbiAgICBmb250U2l6ZTogMTgsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgfSxcclxuICAgICcmIGxpJzoge1xyXG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgbGluZUhlaWdodDogJzM4cHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7ZGVjb0xpc3R9KSBuby1yZXBlYXQgMCAxMHB4YFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMCwgMCksXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBib3R0b206IC00MCxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWNvOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogNDAsXHJcbiAgICByaWdodDogODAsXHJcbiAgfSxcclxuICBwYXJhbGxheFdyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9LFxyXG4gIHBhcmFsbGF4UHJvcHM6IHtcclxuICAgIGJhY2tncm91bmQ6IGB1cmwoJHtkZWNvQmVuZWZpdH0pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyYCxcclxuICAgIGhlaWdodDogNTQwLFxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmVuZWZpdFN0eWxlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQmVuZWZpdCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vY2FyZHMtc3R5bGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWwocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgdGV4dCxcclxuICAgIG5hbWUsXHJcbiAgICB0aXRsZSxcclxuICAgIGF2YXRhcixcclxuICAgIGFjdGl2ZVxyXG4gIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGVzdGltb25pYWx9PlxyXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucGFwZXIsIGFjdGl2ZSA/IGNsYXNzZXMuYWN0aXZlIDogJycpfT5cclxuICAgICAgICA8QXZhdGFyIHNyYz17YXZhdGFyfSBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fSBkaXNwbGF5PVwiYmxvY2tcIj57dGV4dH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMuY2FwdGlvbn0+XHJcbiAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICZuYnNwOy0mbmJzcDtcclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5UZXN0aW1vbmlhbC5wcm9wVHlwZXMgPSB7XHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5UZXN0aW1vbmlhbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZVxyXG59O1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IGNhcmRzU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHRlc3RpbW9uaWFsOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gIH0sXHJcbiAgYWN0aXZlOiB7fSxcclxuICBjYXB0aW9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIGhlaWdodDogMjUwLFxyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDApLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYm9yZGVyIDAuNHMgZWFzZS1vdXQnLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAxNSksXHJcbiAgICB9LFxyXG4gICAgJyYkYWN0aXZlJzoge1xyXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn1gXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgZGlzcGxheTogJy13ZWJraXQtYm94JyxcclxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGhlaWdodDogODAsXHJcbiAgICBmb250U2l6ZTogMTgsXHJcbiAgICAnLXdlYmtpdC1saW5lLWNsYW1wJzogMyxcclxuICAgICctd2Via2l0LWJveC1vcmllbnQnOiAndmVydGljYWwnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgJy13ZWJraXQtbGluZS1jbGFtcCc6IDQsXHJcbiAgICB9XHJcbiAgfSxcclxuICBhdmF0YXI6IHtcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s4XSxcclxuICAgIHdpZHRoOiA4MCxcclxuICAgIGhlaWdodDogODAsXHJcbiAgICBtYXJnaW46ICctMzJweCBhdXRvIDMycHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBtYXJnaW46ICctOTZweCBhdXRvIDMycHgnLFxyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcmRzU3R5bGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDb3VudFVwIGZyb20gJ3JlYWN0LWNvdW50dXAnO1xyXG5pbXBvcnQgUmVhY3RXT1cgZnJvbSAncmVhY3Qtd293JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgcm91dGVMaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9jb3VudGVyLXN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIENvdW50ZXIocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtwbGF5LCBzZXRQbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjb3VudHVwID0gKHZhbCwgaXNQbGF5KSA9PiAoXHJcbiAgICA8c3Bhbj5cclxuICAgICAge2lzUGxheSA/IDxDb3VudFVwIGVuZD17dmFsfSAvPiA6IDB9XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxuICBjb25zdCBoYW5kbGVQbGF5ID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHNldFBsYXkodHJ1ZSk7IH0sIDIwMCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY291bnRlcldyYXB9PlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgICA8UmVhY3RXT1cgYW5pbWF0aW9uPVwiZmFkZUluXCIgb2Zmc2V0PXsyMDB9IGNhbGxiYWNrPXtoYW5kbGVQbGF5fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17dGV4dC50aXRsZX0+XHJcbiAgICAgICAgICAgIHtjb3VudHVwKDIsIHBsYXkpfVxyXG4gICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAge2NvdW50dXAoMjM0LCBwbGF5KX1cclxuICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIHtjb3VudHVwKDU2NywgcGxheSl9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlfT5cclxuICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5mb290ZXJfY291bnRlcicpfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvUmVhY3RXT1c+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FsbEFjdGlvbn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20gY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlfT5cclxuICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5mb290ZXJfd2FpdGluZycpfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgaHJlZj17cm91dGVMaW5rLmNyeXB0by5yZWdpc3Rlcn0gY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5nZXRzdGFydGVkJyl9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5Db3VudGVyLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShDb3VudGVyKTtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBjb3VudGVyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGNvdW50ZXJXcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAnJiBoMyc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfSxcclxuICAgICcmIHAnOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjUpLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcclxuICAgIH1cclxuICB9LFxyXG4gIGNhbGxBY3Rpb246IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTdHlsZXM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NvdW50ZXInO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uJztcclxuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeSc7XHJcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHMnO1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gJ34vdGhlbWUvY29tbW9uJztcclxuaW1wb3J0IFBhcmFsbGF4IGZyb20gJy4uL1BhcmFsbGF4L0hleGFnb25hbCc7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mYXEtc3R5bGUnO1xyXG5cclxuY29uc3QgZmFxRGF0YSA9IFtcclxuICB7XHJcbiAgICBxOiAnSXMgdGhlIFRQIGNvaW4gRVJDLTIwIGNvbXBhdGlibGU/JyxcclxuICAgIGE6ICdZZXMsIFRQIENvaW4gaXMgYmFzZWQgb24gdGhlIEV0aGVyZXVtIGJsb2NrY2hhaW4gcGxhdGZvcm0gYW5kIEVSQy0yMCBjb21wYXRpYmxlLidcclxuICB9LFxyXG4gIHtcclxuICAgIHE6ICdBbSBJIGJ1eWluZyBvbiBteSBvd24gUmlzaz8nLFxyXG4gICAgYTogJ1llcywgeW91IGFyZSB0aGUgb25seSBwZXJzb24gcmVzcG9uc2libGUgZm9yIHlvdXIgb3duIGRlY2lzaW9ucy4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBxOiAnV2hlcmUgYW5kIGhvdyBkbyBJIGtlZXAgbXkgVFAgQ29pbj8nLFxyXG4gICAgYTogJ1lvdSBjYW4ga2VlcCB5b3VyIFRQIENvaW4gaW4gZXZlcnkgd2FsbGV0LCB3aGljaCBpcyBFUkMtMjAgY29tcGF0aWJsZSBhbmQgc3VwcG9ydHMgdGhlIFRQIENvaW4uJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcTogJ0lzIHRoZXJlIGEgcmVmdW5kIHJ1bGU/JyxcclxuICAgIGE6ICcgTm8uIEl0IGlzIG5vdCByZWZ1bmRhYmxlLidcclxuICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBGYXEocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJykpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBwYW5lbCA9PiAoZXZlbnQsIG5ld0V4cGFuZGVkKSA9PiB7XHJcbiAgICBzZXRFeHBhbmRlZChuZXdFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhbGxheH0+XHJcbiAgICAgICAgPFBhcmFsbGF4IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICA8VGl0bGUgdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmZhcV90aXRsZScpfSBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0gYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9IGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmZhcV9zdWJ0aXRsZScpfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlsbHVzdHJhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY3J5cHRvL2ZhcS5wbmdcIiBhbHQ9XCJpbGx1c3RyYXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY2NvcmRpb259PlxyXG4gICAgICAgICAgICAgIHtmYXFEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19IGtleT17aW5kZXgudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLnBhcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWQgPT09IGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY2xhc3Nlcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogY2xhc3Nlcy5leHBhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PntpdGVtLnF9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEV4cGFuZE1vcmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLmRldGFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuRmFxLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShGYXEpO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgbGlnaHRlbiwgZGFya2VuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xyXG5pbXBvcnQgZGVjb0ZhcUxpZ2h0IGZyb20gJ34vcHVibGljL2ltYWdlcy9jcnlwdG8vZGVjby1mYXEtdG9wLWxpZ2h0LnN2Zyc7XHJcbmltcG9ydCBkZWNvRmFxRGFyayBmcm9tICd+L3B1YmxpYy9pbWFnZXMvY3J5cHRvL2RlY28tZmFxLXRvcC1kYXJrLnN2Zyc7XHJcblxyXG5jb25zdCBmYXFTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7dGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkZWNvRmFxRGFyayA6IGRlY29GYXFMaWdodH0pIHRvcCBjZW50ZXIgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssIDAuNikgOiBsaWdodGVuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCAwLjg0KSxcclxuICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoLTIwKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneGwnKV06IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygxNSksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMwLCAwLCAxNSksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMTApLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgJyYgJGljb24nOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMi41KSxcclxuICAgICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSlcclxuICAgIH1cclxuICB9LFxyXG4gIHBhcmFsbGF4OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogLTEzMDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbGVmdDogMFxyXG4gIH0sXHJcbiAgaWxsdXN0cmF0aW9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgICcmIGltZyc6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgbWFyZ2luOiAnMCBhdXRvJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWNjb3JkaW9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMVxyXG4gIH0sXHJcbiAgaXRlbToge1xyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUucm91bmRlZC5tZWRpdW19ICFpbXBvcnRhbnRgLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAyLCAxLCAwKSxcclxuICAgIGZvbnRTaXplOiAxOCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICB9XHJcbiAgfSxcclxuICBleHBhbmRlZDoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAnJiAkaGVhZGluZyc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAwXHJcbiAgICB9LFxyXG4gICAgJyYgJGljb24nOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknXHJcbiAgICB9XHJcbiAgfSxcclxuICBkZXRhaWw6IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAnJiBwJzoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE4XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmYXFTdHlsZXM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ZhcSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluRmVhdHVyZSBmcm9tICcuL01haW5GZWF0dXJlJztcclxuaW1wb3J0IE1vcmVGZWF0dXJlIGZyb20gJy4vTW9yZUZlYXR1cmUnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZmVhdHVyZS1zdHlsZSc7XHJcbmltcG9ydCBQYXJhbGxheCBmcm9tICcuLi9QYXJhbGxheC9IZXhhZ29uYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZSgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8UGFyYWxsYXggLz5cclxuICAgICAgPE1haW5GZWF0dXJlIC8+XHJcbiAgICAgIDxNb3JlRmVhdHVyZSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFpvb20gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvWm9vbSc7XHJcbmltcG9ydCBpbWdBUEkgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB5dCBmcm9tICd+L3lvdXR1YmUnO1xyXG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vVGl0bGUnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZmVhdHVyZS1zdHlsZSc7XHJcblxyXG5jb25zdCBUcmFuc2l0aW9uID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCByZWYpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gIHJldHVybiA8Wm9vbSByZWY9e3JlZn0gey4uLnByb3BzfSAvPjtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBNYWluRmVhdHVyZShwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKSk7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCBbcGxheWVyLCBzZXRQbGF5ZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcGVuUG9wdXAsIHNldE9wZW5Qb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcclxuICAgIGlmICh5dC51c2UpIHtcclxuICAgICAgc2V0T3BlblBvcHVwKHRydWUpO1xyXG4gICAgICBwbGF5ZXJbMF0ucGxheVZpZGVvKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuUG9wdXAoZmFsc2UpO1xyXG4gICAgcGxheWVyWzBdLnBhdXNlVmlkZW8oKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBfb25SZWFkeSA9IGV2ZW50ID0+IHtcclxuICAgIHBsYXllci5wdXNoKGV2ZW50LnRhcmdldCk7XHJcbiAgICBzZXRQbGF5ZXIocGxheWVyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcHRzID0ge1xyXG4gICAgaGVpZ2h0OiAnMzYwJyxcclxuICAgIHdpZHRoOiAnNjQwJyxcclxuICAgIHBsYXllclZhcnM6IHsgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9wbGF5ZXJfcGFyYW1ldGVyc1xyXG4gICAgICBhdXRvcGxheTogMCxcclxuICAgICAgY29udHJvbHM6IDEsXHJcbiAgICAgIHJlbDogMCxcclxuICAgICAgc2hvd2luZm86IDEsXHJcbiAgICAgIG11dGU6IDAsXHJcbiAgICAgIG9yaWdpbjogJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDgnXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5GZWF0dXJlfT5cclxuICAgICAgPERpYWxvZ1xyXG4gICAgICAgIG9wZW49e29wZW5Qb3B1cH1cclxuICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtUcmFuc2l0aW9ufVxyXG4gICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgY2xhc3Nlcz17eyBwYXBlcjogY2xhc3Nlcy52aWRlb1BvcHVwIH19XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXNsaWRlLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYWxlcnQtZGlhbG9nLXNsaWRlLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy1zbGlkZS10aXRsZVwiPlxyXG4gICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tYWluZmVhdHVyZV90aXRsZScpfVxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ0bn0+XHJcbiAgICAgICAgICAgIDxDbG9zZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIHt5dC51c2UgJiYgKFxyXG4gICAgICAgICAgICA8WW91VHViZVxyXG4gICAgICAgICAgICAgIHZpZGVvSWQ9XCJRUE1rWXlNMkd6Z1wiXHJcbiAgICAgICAgICAgICAgb25SZWFkeT17X29uUmVhZHl9XHJcbiAgICAgICAgICAgICAgb3B0cz17b3B0c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgICAgPENvbnRhaW5lciBmaXhlZD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Nn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VGl0bGUgdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1haW5mZWF0dXJlX3RpdGxlJyl9IGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBkaXNwbGF5PVwiYmxvY2tcIiBndXR0ZXJCb3R0b20gYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9IGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9PlxyXG4gICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubWFpbmZlYXR1cmVfc3VidGl0bGUnKX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZGVvfT5cclxuICAgICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ0FQSS5jcnlwdG9bNF19IGFsdD1cImNvdmVyXCIgLz5cclxuICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMucGxheUJ0bn0gb25DbGljaz17aGFuZGxlQ2xpY2tPcGVufT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlvbi1pb3MtcGxheVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuZmVhdHVyZVdyYXB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvfT5cclxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNDA0cHhcIiBoZWlnaHQ9XCI0NTJweFwiIHZpZXdCb3g9XCIwIDAgNDA0IDQ1MlwiIHZlcnNpb249XCIxLjFcIj5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9XCIzNC4xMjE4OTg5JVwiIHkxPVwiMTUuMTMwMzgwOCVcIiB4Mj1cIjIwLjA5MTA3NTYlXCIgeTI9XCIxMTAuNjY0MDIzJVwiIGlkPVwiZmVhdHVyZUxpbmVhckdyYWRpZW50LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodH0gb2Zmc2V0PVwiMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0fSBvZmZzZXQ9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDxnIGlkPVwiRmVhdHVyZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMiwxMzYuOTIxMDA1IEwyLDMxNC4xOTc1MzEgQzIsMzMwLjczMjMzOCAxMC44Mjk2ODQ2LDM0Ni4wMTE5NDYgMjUuMTYzNjM2NCwzNTQuMjc5MzUgTDE3OC44MzYzNjQsNDQyLjkxNzI0MiBDMTkzLjE3MDMxNSw0NTEuMTg0NjQ1IDIxMC44Mjk2ODUsNDUxLjE4NDY0NSAyMjUuMTYzNjM2LDQ0Mi45MTcyNDIgTDM3OC44MzYzNjQsMzU0LjI3OTM1IEMzOTMuMTcwMzE1LDM0Ni4wMTE5NDYgNDAyLDMzMC43MzIzMzggNDAyLDMxNC4xOTc1MzEgTDQwMiwxMzYuOTIxMDA1IEM0MDIsMTIwLjM4NTQ1NyAzOTMuMTcwMzE1LDEwNS4xMDY1OSAzNzguODM2MzY0LDk2LjgzODQ0NDkgTDIyNS4xNjM2MzYsOC4yMDA1NTI1IEMyMTAuODI5Njg1LC0wLjA2Njg1MDgzMyAxOTMuMTcwMzE1LC0wLjA2Njg1MDgzMyAxNzguODM2MzY0LDguMjAwNTUyNSBMMjUuMTYzNjM2NCw5Ni44Mzg0NDQ5IEMxMC44Mjk2ODQ2LDEwNS4xMDY1OSAyLDEyMC4zODU0NTcgMiwxMzYuOTIxMDA1XCIgaWQ9XCJGZWF0dXJlRmlsbC0xXCIgc3Ryb2tlPVwidXJsKCNmZWF0dXJlTGluZWFyR3JhZGllbnQtMSlcIiBzdHJva2VXaWR0aD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY291bnRlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG93ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlvbi1pb3MtaW9uaWMtb3V0bGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICs2MDBcclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBkaXNwbGF5PVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1haW5mZWF0dXJlX3N1cHBvcnRlZCcpfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlvbi1pb3MtcGVvcGxlLW91dGxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICArMjAwS1xyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGRpc3BsYXk9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubWFpbmZlYXR1cmVfcmVnaXN0ZXJlZCcpfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhpZ2hlcn0+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW9uLWlvcy1hcmNoaXZlLW91dGxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICArMjBNXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZGlzcGxheT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tYWluZmVhdHVyZV9vcGVuJyl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW9uLWlvcy1oZWFydC1vdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgKzUwTVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGRpc3BsYXk9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubWFpbmZlYXR1cmVfaW52ZXN0ZWQnKX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbk1haW5GZWF0dXJlLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShNYWluRmVhdHVyZSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0V09XIGZyb20gJ3JlYWN0LXdvdyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gJ34vdGhlbWUvY29tbW9uJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL1RpdGxlJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2ZlYXR1cmUtc3R5bGUnO1xyXG5cclxuY29uc3QgY29pbkRhdGEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0JUQycsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vYnRjLnBuZycsXHJcbiAgICBwcm9ncmVzczogNzUsXHJcbiAgICBjb2xvcjogJyNGQkE2MzAnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnREFTSCcsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vZGFzaC5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDQwLFxyXG4gICAgY29sb3I6ICcjMjFEM0Q3J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05BTicsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vbmFuLnBuZycsXHJcbiAgICBwcm9ncmVzczogOTAsXHJcbiAgICBjb2xvcjogJyM1NDhDQ0MnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTU5SJyxcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9tbnIucG5nJyxcclxuICAgIHByb2dyZXNzOiAzNSxcclxuICAgIGNvbG9yOiAnI0ZGNjYwMidcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdJT1QnLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2lvdC5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDgwLFxyXG4gICAgY29sb3I6ICcjQ0UwN0Q0J1xyXG4gIH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIE1vcmVGZWF0dXJlKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgW3BsYXksIHNldFBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpKTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKSk7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCB0aGVtZVByb2dyZXNzID0gY29sb3IgPT4gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogY29sb3JcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IGhhbmRsZVBsYXkgPSAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2V0UGxheSh0cnVlKTsgfSwgMjAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubW9yZUZlYXR1cmV9PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPXtpc0Rlc2t0b3B9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezZ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRleHQsIGlzTW9iaWxlICYmIGNsYXNzZXMuY2VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLWxvY2stb3V0bGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGUgdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1vcmVmZWF0dXJlX3RpdGxlMScpfSBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30gLz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9IGRpc3BsYXk9XCJibG9ja1wiIGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV9zdWJ0aXRsZTEnKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxSZWFjdFdPVyBhbmltYXRpb249XCJmYWRlSW5MZWZ0U2hvcnRcIiBkZWxheT1cIjAuM3NcIiBkdXJhdGlvbj1cIjAuM3NcIj5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmlsbHVzdHJhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jcnlwdG8vaWxsdXN0cmF0aW9uMS5wbmdcIiBhbHQ9XCJmZWF0dXJlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgIDwvUmVhY3RXT1c+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBkaXJlY3Rpb249e2lzTW9iaWxlID8gJ2NvbHVtbi1yZXZlcnNlJyA6ICdyb3cnfVxyXG4gICAgICAgICAgICBzcGFjaW5nPXs2fVxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8UmVhY3RXT1cgYW5pbWF0aW9uPVwiZmFkZUluUmlnaHRTaG9ydFwiIG9mZnNldD17LTEwMH0gZGVsYXk9XCIwLjNzXCIgZHVyYXRpb249XCIwLjNzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbGx1c3RyYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY3J5cHRvL2lsbHVzdHJhdGlvbjIucG5nXCIgYWx0PVwiZmVhdHVyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICA8L1JlYWN0V09XPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50ZXh0LCBpc01vYmlsZSAmJiBjbGFzc2VzLmNlbnRlcil9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW9uLWlvcy1hbmFseXRpY3Mtb3V0bGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGUgdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1vcmVmZWF0dXJlX3RpdGxlMicpfSBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30gLz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9IGRpc3BsYXk9XCJibG9ja1wiIGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV9zdWJ0aXRsZTInKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHNtPXsxMn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50ZXh0LCBjbGFzc2VzLmNlbnRlcil9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW9uLWlvcy1mbGFzaC1vdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfSB0ZXh0PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfdGl0bGUzJyl9IGFsaWduPVwiY2VudGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGRpc3BsYXk9XCJibG9ja1wiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfc3VidGl0bGUzJyl9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RXT1cgYW5pbWF0aW9uPVwiZmFkZUluXCIgb2Zmc2V0PXstMTAwfSBkdXJhdGlvbj1cIjBzXCIgY2FsbGJhY2s9e2hhbmRsZVBsYXl9PlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzV3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvaW5EYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSBzcmM9e2l0ZW0ubG9nb30gYWx0PXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51bml0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VU0Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOzUuMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VVNEPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsxNS4wMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVQcm9ncmVzcyhpdGVtLmNvbG9yKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BsYXkgPyBpdGVtLnByb2dyZXNzIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMudHJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyOiBjbGFzc2VzLmJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3RXT1c+XHJcbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5Nb3JlRmVhdHVyZS5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoTW9yZUZlYXR1cmUpO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IGZlYXR1cmVTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbWFpbkZlYXR1cmU6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIH1cclxuICB9LFxyXG4gIHZpZGVvOiB7XHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg2LCAwLCAyKSxcclxuICAgICcmIGZpZ3VyZSc6IHtcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgJyYgaW1nJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjIsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdmlkZW9Qb3B1cDoge1xyXG4gICAgd2lkdGg6IDY5MCxcclxuICAgIG1heFdpZHRoOiAnbm9uZSdcclxuICB9LFxyXG4gIGZlYXR1cmVXcmFwOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gIH0sXHJcbiAgcGxheUJ0bjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB3aWR0aDogMTUwLFxyXG4gICAgdG9wOiAnNTAlJyxcclxuICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgICcmIHNwYW4nOiB7XHJcbiAgICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgICBmb250U2l6ZTogMTMwLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAke3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0fSwgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHR9KWAsXHJcbiAgICAgICAgJy13ZWJraXQtYmFja2dyb3VuZC1jbGlwJzogJ3RleHQnLFxyXG4gICAgICAgICctd2Via2l0LXRleHQtZmlsbC1jb2xvcic6ICd0cmFuc3BhcmVudCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2xvc2VCdG46IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiA0LFxyXG4gICAgcmlnaHQ6IDQsXHJcbiAgfSxcclxuICBkZWNvOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogODAsXHJcbiAgICBsZWZ0OiA4MCxcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBsZWZ0JyxcclxuICAgIH1cclxuICB9LFxyXG4gIGNvdW50ZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICB9LFxyXG4gICAgJyYgPiAqJzoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLjUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGxvd2VyOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyMClcclxuICAgIH1cclxuICB9LFxyXG4gIGhpZ2hlcjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTApXHJcbiAgICB9XHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBoZWlnaHQ6IDE3NCxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSwgMCksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMyksXHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0LCA0LCAwLCAwKSxcclxuICAgICAgd2lkdGg6IDE3NCxcclxuICAgIH0sXHJcbiAgICAnJiBzcGFuJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIGZvbnRTaXplOiA0OFxyXG4gICAgfSxcclxuICAgICcmIGg2Jzoge1xyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkXHJcbiAgICB9LFxyXG4gICAgJyYgcCc6IHtcclxuICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICBmb250U2l6ZTogMTZcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9yZUZlYXR1cmU6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyYgZmlndXJlJzoge1xyXG4gICAgICBtYXJnaW46IDBcclxuICAgIH1cclxuICB9LFxyXG4gIGNoYXJ0RGVjbzoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogNDIwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICB9LFxyXG4gIGl0ZW06IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmID4gc3Bhbic6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXHJcbiAgICAgIHRvcDogLTEwLFxyXG4gICAgICBsZWZ0OiA3LFxyXG4gICAgICBmb250U2l6ZTogMzgsXHJcbiAgICAgIHpJbmRleDogMixcclxuICAgIH1cclxuICB9LFxyXG4gIGlsbHVzdHJhdGlvbjoge1xyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICB3aWR0aDogJzgwJScsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1hcmdpbjogJzAgYXV0bydcclxuICAgIH1cclxuICB9LFxyXG4gIGNlbnRlcjoge1xyXG4gICAgJyYgc3Bhbic6IHtcclxuICAgICAgbGVmdDogJ2NhbGMoNTAlIC0gN3B4KSdcclxuICAgIH1cclxuICB9LFxyXG4gIHByb2dyZXNzV3JhcDoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDYpLFxyXG4gICAgfSxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICAnJiBsaSc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgfSxcclxuICAgICAgJyYgaDUnOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgIGZvbnRTaXplOiAxNlxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGxvZ286IHt9LFxyXG4gIGNvaW46IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgd2lkdGg6IDEyMCxcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICcmICRsb2dvJzoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICAgICB3aWR0aDogMjAsXHJcbiAgICAgICAgaGVpZ2h0OiAyMFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByb2dyZXNzOiB7XHJcbiAgICBmbGV4OiAxLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdW5pdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICcmIGg2Jzoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIHNwYW4nOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHRyYWNrOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmRpdmlkZXIsXHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgaGVpZ2h0OiAnOHB4ICFpbXBvcnRhbnQnLFxyXG4gIH0sXHJcbiAgYmFyOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZlYXR1cmVTdHlsZXM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ZlYXR1cmUnO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBMYW5nSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGFuZ3VhZ2UnO1xyXG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IE91dGxpbmVkSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvT3V0bGluZWRJbnB1dCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by1sb2dvLnN2Zyc7XHJcbmltcG9ydCBicmFuZCBmcm9tICd+L3B1YmxpYy90ZXh0L2JyYW5kJztcclxuaW1wb3J0IGltZ0FwaSBmcm9tICd+L3B1YmxpYy9pbWFnZXMvaW1nQVBJJztcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2Zvb3Rlci1zdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGRpc3BsYXk9XCJibG9ja1wiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAmY29weTsmbmJzcDtcclxuICAgICAge2JyYW5kLmNyeXB0by5mb290ZXJUZXh0fVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IGZvb3RlciA9IHtcclxuICBkZXNjcmlwdGlvbjogWydSZXNvdXJjZScsICdBbm90aGVyIHJlc291cmNlJywgJ0ZpbmFsIHJlc291cmNlJywgJ1ByaXZhY3kgcG9saWN5JywgJ1Rlcm1zIG9mIHVzZScsICdUZXJtcyBDb25kaXRpb24nXSxcclxuICBsaW5rOiBbJyNyZXNvdXJjZScsICcjYW5vdGhlci1yZXNvdXJjZScsICcjZmluYWwtcmVzb3VyY2UnLCAnI3ByaXZhY3ktcG9saWN5JywgJyN0ZXJtcy1vZi11c2UnXSxcclxufTtcclxuXHJcbmNvbnN0IG5ld3MgPSBbXHJcbiAge1xyXG4gICAgdGV4dDogJ1NlZCBpbXBlcmRpZXQgZW5pbSBsaWd1bGEgdml0YWUgdml2ZXJyYS4nLFxyXG4gICAgaW1nOiBpbWdBcGkucGhvdG9bNV1cclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdTZWQgaW1wZXJkaWV0IGVuaW0gbGlndWxhIHZpdGFlIHZpdmVycmEuJyxcclxuICAgIGltZzogaW1nQXBpLnBob3RvWzZdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnU2VkIGltcGVyZGlldCBlbmltIGxpZ3VsYSB2aXRhZSB2aXZlcnJhLicsXHJcbiAgICBpbWc6IGltZ0FwaS5waG90b1s3XVxyXG4gIH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcihwcm9wcykge1xyXG4gIGNvbnN0IFtjdG4sIHNldEN0bl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyB0LCBpbnZlcnQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBsYW5nOiAnZW5nJyxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFZhbHVlcyh7IGxhbmc6IGkxOG4ubGFuZ3VhZ2UgfSk7XHJcbiAgICBzZXRDdG4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td3JhcCcpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgc2V0VmFsdWVzKG9sZFZhbHVlcyA9PiAoe1xyXG4gICAgICAuLi5vbGRWYWx1ZXMsXHJcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgIH0pKTtcclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09ICdhcmEnKSB7XHJcbiAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoJ2FyYScpO1xyXG4gICAgICBwcm9wcy50b2dnbGVEaXIoJ3J0bCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBwcm9wcy50b2dnbGVEaXIoJ2x0cicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgZml4ZWQgY29tcG9uZW50PVwiZm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZm9vdGVyLCBpbnZlcnQgJiYgY2xhc3Nlcy5pbnZlcnQpfT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Nn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAge2JyYW5kLmNyeXB0by5wcm9qZWN0TmFtZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRQcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckRlc2N9IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl90aXRsZScpfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnF1aWNrTGlua3N9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuZm9vdGVyX2xpbmsnKX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2Zvb3Rlci5kZXNjcmlwdGlvbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Zvb3Rlci5saW5rW2luZGV4XX0gdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICB7bmV3cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbkJhc2UgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2dJdGVtfSBocmVmPVwiI1wiIGtleT17aW5kZXgudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWd9IGFsdD1cInRodW1iXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFRleHR9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmZvb3Rlcl9uZXdzJyl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZGlzcGxheT1cImJsb2NrXCIgY29tcG9uZW50PVwic3BhblwiPlNlZCBpbXBlcmRpZXQgZW5pbSBsaWd1bGEgdml0YWUgdml2ZXJyYS4gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNvY21lZH0+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkZCXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tbG9nby10d2l0dGVyXCIgLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIlRXXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tbG9nby1mYWNlYm9va1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJJR1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLWxvZ28taW5zdGFncmFtXCIgLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkxJXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tbG9nby1saW5rZWRpblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubGFuZ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIE1lbnVQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBjdG5cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXsoXHJcbiAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IHBvc2l0aW9uPVwic3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgPExhbmdJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlbGVjdExhbmd9XHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0TWVudTogY2xhc3Nlcy5zZWxlY3RNZW51XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBpbnB1dD17PE91dGxpbmVkSW5wdXQgbGFiZWxXaWR0aD17MjAwfSBuYW1lPVwibGFuZ1wiIGlkPVwib3V0bGluZWQtbGFuZy1zaW1wbGVcIiAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cImVuZ1wiPkVuZ2xpc2g8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cImRldVwiPkRldXRzY2g8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cImFyYVwiPtin2YTYudix2KjZitmR2Kk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cImluZFwiPkJhaGFzYSBJbmRvbmVzaWE8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInBydFwiPlBvcnR1Z3XDqnM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInpob1wiPueugOS9k+S4reaWhzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBpbnZlcnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIHRvZ2dsZURpcjogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5Gb290ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGludmVydDogZmFsc2UsXHJcbiAgdG9nZ2xlRGlyOiAoKSA9PiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKEZvb3Rlcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tICcuLi9Db3VudGVyJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2Zvb3Rlci1zdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBGb290ZXJXaXRoRGVjbyhwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHRvZ2dsZURpciB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckNvdW50ZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvVG9wfT5cclxuICAgICAgICA8c3ZnPlxyXG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIvaW1hZ2VzL2NyeXB0by9kZWNvLWZvb3Rlci5zdmcjbWFpblwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPENvdW50ZXIgLz4gKi99XHJcbiAgICAgIDxGb290ZXIgdG9nZ2xlRGlyPXt0b2dnbGVEaXJ9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5Gb290ZXJXaXRoRGVjby5wcm9wVHlwZXMgPSB7XHJcbiAgdG9nZ2xlRGlyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJXaXRoRGVjbztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGZhZGUsIGxpZ2h0ZW4sIGRhcmtlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcclxuXHJcbmNvbnN0IGZvb3RlclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBsaW5rOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSwgMS41KSxcclxuICB9LFxyXG4gIGludmVydDoge30sXHJcbiAgZm9vdGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMTAsIDApLFxyXG4gICAgJyYgcCc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgdWwnOiB7XHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgIH0sXHJcbiAgICAnJiBsaSc6IHtcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgd2lkdGg6ICczMCUnLFxyXG4gICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIHdpZHRoOiAnNDclJ1xyXG4gICAgICB9LFxyXG4gICAgICAnJiBhJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lICFpbXBvcnRhbnQnLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiRpbnZlcnQnOiB7XHJcbiAgICAgICcmIHAnOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5XHJcbiAgICAgIH0sXHJcbiAgICAgICcmIGxpIGEnOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5XHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRsb2dvJzoge1xyXG4gICAgICAgICcmIGg2Jzoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkdGl0bGUnOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cclxuICAgICAgfSxcclxuICAgICAgJyYgJGJsb2dJdGVtJzoge1xyXG4gICAgICAgICcmICRjYXRlZ29yeSc6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkc2VsZWN0TGFuZyc6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgfSxcclxuICBxdWlja0xpbmtzOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSlcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgICcmIGltZyc6IHtcclxuICAgICAgd2lkdGg6IDY0LFxyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgfSxcclxuICAgICcmIGg2Jzoge1xyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICBmb250U2l6ZTogMjgsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICB9XHJcbiAgfSxcclxuICBmb290ZXJEZXNjOiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgfSxcclxuICBzb2NtZWQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICcmIGJ1dHRvbic6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIHdpZHRoOiAzNixcclxuICAgICAgaGVpZ2h0OiAzNixcclxuICAgICAgJyYgaSc6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBpJzoge1xyXG4gICAgICBmb250U2l6ZTogMjRcclxuICAgIH1cclxuICB9LFxyXG4gIGljb246IHt9LFxyXG4gIHNlbGVjdExhbmc6IHtcclxuICAgIGRpc3BsYXk6ICdpbmhlcml0JyxcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwLCA0KSxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICcmICRpY29uJzoge1xyXG4gICAgICB0b3A6IDI5LFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIH0sXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodCxcclxuICAgIH0sXHJcbiAgICAnJiBmaWVsZHNldCc6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgICAgYm94U2hhZG93OiAnMCAxLjVweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpJyxcclxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7ZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsIDAuNSl9ICFpbXBvcnRhbnRgLFxyXG4gICAgICAnJiBsZWdlbmQnOiB7XHJcbiAgICAgICAgdG9wOiA1LFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke2ZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LCAwLjUpfWBcclxuICAgICAgfSxcclxuICAgICAgJyYgKyBkaXYgKyBkaXYnOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLjUsIDEuNSwgMS41LCA0KSxcclxuICAgICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDMycHgpJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VsZWN0TWVudToge1xyXG4gICAgd2lkdGg6IDE2MCxcclxuICAgIGJhY2tncm91bmQ6ICdub25lICFpbXBvcnRhbnQnXHJcbiAgfSxcclxuICBmb290ZXJDb3VudGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoLTEzMGRlZywgJHt0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmsgOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSAtMjAlLCAke3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmsgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0gNzAlKWAsXHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDEwKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygyNSksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4bCcpXToge1xyXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDE1KSxcclxuICAgIH1cclxuICB9LFxyXG4gIGRlY29Ub3A6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAtMjAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6IDEyODAsXHJcbiAgICBoZWlnaHQ6IDQwMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yKSdcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoMTQwMCldOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDIsIDEpJ1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneGwnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuNCwgMSknLFxyXG4gICAgICBsZWZ0OiAtMzAwXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfSxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZGFya2VuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjYpIDogbGlnaHRlbih0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC44NCksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYXRlZ29yeToge30sXHJcbiAgbGlzdFRleHQ6IHt9LFxyXG4gIGJsb2dJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwKSxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgICcmICRjYXRlZ29yeSc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodFxyXG4gICAgfSxcclxuICAgICcmICRsaXN0VGV4dCc6IHtcclxuICAgICAgZmxleDogMSxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodFxyXG4gICAgfSxcclxuICAgICcmIGZpZ3VyZSc6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAyLCAwLCAwKSxcclxuICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICBoZWlnaHQ6IDU2LFxyXG4gICAgICAnJiBpbWcnOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgcCc6IHtcclxuICAgICAgZm9udFNpemU6IDEzLFxyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlclN0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBbmNob3JMaW5rIGZyb20gJ3JlYWN0LWFuY2hvci1saW5rLXNtb290aC1zY3JvbGwnO1xyXG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gJ3JlYWN0LXNjcm9sbHNweSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL1NldHRpbmdzJztcclxuaW1wb3J0IE1hcmtldFByaWNlIGZyb20gJy4vTWFya2V0UHJpY2UnO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuL01vYmlsZU1lbnUnO1xyXG5pbXBvcnQgcm91dGVMaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XHJcbmltcG9ydCBsb2dvIGZyb20gJ34vcHVibGljL2ltYWdlcy9jcnlwdG8tbG9nby5zdmcnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vaGVhZGVyLXN0eWxlJztcclxuaW1wb3J0IG5hdk1lbnUgZnJvbSAnLi9tZW51JztcclxuXHJcbmxldCBjb3VudGVyID0gMDtcclxuZnVuY3Rpb24gY3JlYXRlRGF0YShuYW1lLCB1cmwsIG9mZnNldCkge1xyXG4gIGNvdW50ZXIgKz0gMTtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IGNvdW50ZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgdXJsLFxyXG4gICAgb2Zmc2V0LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IExpbmtCdG4gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIExpbmtCdG4ocHJvcHMsIHJlZikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgcmV0dXJuIDxBbmNob3JMaW5rIHRvPXtwcm9wcy50b30gey4uLnByb3BzfSBpbm5lclJlZj17cmVmfSAvPjsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG4gIGNvbnN0IFtmaXhlZCwgc2V0Rml4ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGxldCBmbGFnRml4ZWQgPSBmYWxzZTtcclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzY3JvbGwgPSAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApIC0gKGRvYy5jbGllbnRUb3AgfHwgMCk7XHJcbiAgICBjb25zdCBuZXdGbGFnRml4ZWQgPSAoc2Nyb2xsID4gODApO1xyXG4gICAgaWYgKGZsYWdGaXhlZCAhPT0gbmV3RmxhZ0ZpeGVkKSB7XHJcbiAgICAgIHNldEZpeGVkKG5ld0ZsYWdGaXhlZCk7XHJcbiAgICAgIGZsYWdGaXhlZCA9IG5ld0ZsYWdGaXhlZDtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCB7XHJcbiAgICBvblRvZ2dsZURhcmssXHJcbiAgICBvblRvZ2dsZURpcixcclxuICAgIGludmVydCxcclxuICAgIHRcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKSk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJykpO1xyXG4gIGNvbnN0IFttZW51TGlzdF0gPSB1c2VTdGF0ZShbXHJcbiAgICBjcmVhdGVEYXRhKG5hdk1lbnVbMF0sICcjJyArIG5hdk1lbnVbMF0sIDEwMCksXHJcbiAgICBjcmVhdGVEYXRhKG5hdk1lbnVbMV0sICcjJyArIG5hdk1lbnVbMV0pLFxyXG4gICAgY3JlYXRlRGF0YShuYXZNZW51WzJdLCAnIycgKyBuYXZNZW51WzJdKSxcclxuICAgIGNyZWF0ZURhdGEobmF2TWVudVszXSwgJyMnICsgbmF2TWVudVszXSksXHJcbiAgXSk7XHJcbiAgY29uc3QgW29wZW5EcmF3ZXIsIHNldE9wZW5EcmF3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5EcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRHJhd2VyKCFvcGVuRHJhd2VyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHsgaXNNb2JpbGUgJiYgKDxNb2JpbGVNZW51IG9wZW49e29wZW5EcmF3ZXJ9IHRvZ2dsZURyYXdlcj17aGFuZGxlT3BlbkRyYXdlcn0gLz4pIH1cclxuICAgICAgeyFpbnZlcnQgJiYgKFxyXG4gICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgPE1hcmtldFByaWNlIC8+XHJcbiAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICl9XHJcbiAgICAgIDxBcHBCYXJcclxuICAgICAgICBjb21wb25lbnQ9XCJoZWFkZXJcIlxyXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgIGlkPVwiaGVhZGVyXCJcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICBjbGFzc2VzLmhlYWRlcixcclxuICAgICAgICAgIGZpeGVkICYmIGNsYXNzZXMuZml4ZWQsXHJcbiAgICAgICAgICBpbnZlcnQgJiYgY2xhc3Nlcy5pbnZlcnQsXHJcbiAgICAgICAgICBvcGVuRHJhd2VyICYmIGNsYXNzZXMub3BlbkRyYXdlclxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyIGZpeGVkPXtpc0Rlc2t0b3B9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyQ29udGVudH0+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubmF2TWVudSwgaW52ZXJ0ICYmIGNsYXNzZXMuaW52ZXJ0KX0+XHJcbiAgICAgICAgICAgICAgeyBpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVuRHJhd2VyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2hhbWJ1cmdlciBoYW1idXJnZXItLXNwaW4nLCBjbGFzc2VzLm1vYmlsZU1lbnUsIG9wZW5EcmF3ZXIgJiYgJ2lzLWFjdGl2ZScpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYmFyLCAnaGFtYnVyZ2VyLWlubmVyJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAge2ludmVydCA/IChcclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cm91dGVMaW5rLmNyeXB0by5ob21lfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxBbmNob3JMaW5rIGhyZWY9XCIjaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9BbmNob3JMaW5rPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7aXNEZXNrdG9wICYmIChcclxuICAgICAgICAgICAgICAgIDxTY3JvbGxzcHlcclxuICAgICAgICAgICAgICAgICAgaXRlbXM9e25hdk1lbnV9XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bWVudUxpc3QubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWQudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aW52ZXJ0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvZmZzZXQ9e2l0ZW0ub2Zmc2V0IHx8IDB9IGhyZWY9eycvJyArIGl0ZW0udXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl8nICsgaXRlbS5uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0FuY2hvckxpbmt9IG9mZnNldD17aXRlbS5vZmZzZXQgfHwgMH0gaHJlZj17aXRlbS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyXycgKyBpdGVtLm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9e3JvdXRlTGluay5jcnlwdG8uY29udGFjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl9jb250YWN0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L1Njcm9sbHNweT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm5hdk1lbnUsIGNsYXNzZXMubmF2QXV0aCl9PlxyXG4gICAgICAgICAgICAgIDxIaWRkZW4geHNEb3duPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXtyb3V0ZUxpbmsuY3J5cHRvLnJlZ2lzdGVyfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfbGF1bmNoJyl9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICA8U2V0dGluZ3MgdG9nZ2xlRGFyaz17b25Ub2dnbGVEYXJrfSB0b2dnbGVEaXI9e29uVG9nZ2xlRGlyfSBpbnZlcnQ9e2ludmVydH0gLz5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgb25Ub2dnbGVEYXJrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uVG9nZ2xlRGlyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGludmVydDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdGlja3k6IGZhbHNlLFxyXG4gIGludmVydDogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKEhlYWRlcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2hlYWRlci1zdHlsZSc7XHJcblxyXG5jb25zdCBtYXJrZXRMaXN0ID0gW1xyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9idGMucG5nJyxcclxuICAgIG5hbWU6ICdCVEMnLFxyXG4gICAgcHJpY2U6IDEwMjAwLFxyXG4gICAgc3RhdHVzOiAndXAnLFxyXG4gICAgcGVyY2VudDogOCxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by94cnAucG5nJyxcclxuICAgIG5hbWU6ICdYUlAnLFxyXG4gICAgcHJpY2U6IDAuMDAzLFxyXG4gICAgc3RhdHVzOiAnZG93bicsXHJcbiAgICBwZXJjZW50OiAzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL25lbS5wbmcnLFxyXG4gICAgbmFtZTogJ05FTScsXHJcbiAgICBwcmljZTogMC4wMDMsXHJcbiAgICBzdGF0dXM6ICd1cCcsXHJcbiAgICBwZXJjZW50OiA4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2lvdC5wbmcnLFxyXG4gICAgbmFtZTogJ0lPVEEnLFxyXG4gICAgcHJpY2U6IDAuMDEwLFxyXG4gICAgc3RhdHVzOiAnZG93bicsXHJcbiAgICBwZXJjZW50OiAzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL21uci5wbmcnLFxyXG4gICAgbmFtZTogJ01OUicsXHJcbiAgICBwcmljZTogMS40NSxcclxuICAgIHN0YXR1czogJ3VwJyxcclxuICAgIHBlcmNlbnQ6IDgsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vYnljLnBuZycsXHJcbiAgICBuYW1lOiAnQllDJyxcclxuICAgIHByaWNlOiAyMi4zNCxcclxuICAgIHN0YXR1czogJ2Rvd24nLFxyXG4gICAgcGVyY2VudDogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9pb3QucG5nJyxcclxuICAgIG5hbWU6ICdJT1RBJyxcclxuICAgIHByaWNlOiAwLjAxMCxcclxuICAgIHN0YXR1czogJ2Rvd24nLFxyXG4gICAgcGVyY2VudDogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9tbnIucG5nJyxcclxuICAgIG5hbWU6ICdNTlInLFxyXG4gICAgcHJpY2U6IDEuNDUsXHJcbiAgICBzdGF0dXM6ICd1cCcsXHJcbiAgICBwZXJjZW50OiA4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2J5Yy5wbmcnLFxyXG4gICAgbmFtZTogJ0JZQycsXHJcbiAgICBwcmljZTogMjIuMzQsXHJcbiAgICBzdGF0dXM6ICdkb3duJyxcclxuICAgIHBlcmNlbnQ6IDMsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcmtldFByaWNlKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgY3NzRWFzZTogJ2xpbmVhcicsXHJcbiAgICBwYXVzZU9uSG92ZXI6IHRydWVcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclBlcmNlbnQgPSAoYXJyb3csIHBlcmNlbnQpID0+IHtcclxuICAgIHN3aXRjaCAoYXJyb3cpIHtcclxuICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5kb3dufT5cclxuICAgICAgICAgICAgPGk+4pa8PC9pPlxyXG4gICAgICAgICAgICB7cGVyY2VudH1cclxuICAgICAgICAgICAgJVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnVwfT5cclxuICAgICAgICAgICAgPGk+4payPC9pPlxyXG4gICAgICAgICAgICB7cGVyY2VudH1cclxuICAgICAgICAgICAgJVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGF5fT5cclxuICAgICAgICAgICAgPGk+LTwvaT5cclxuICAgICAgICAgICAge3BlcmNlbnR9XHJcbiAgICAgICAgICAgICVcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmtldH0+XHJcbiAgICAgIDxDYXJvdXNlbCB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgIHttYXJrZXRMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19IGtleT17aW5kZXgudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvaW59PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299IHNyYz17aXRlbS5sb2dvfSBhbHQ9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICZuYnNwOyQmbmJzcDtcclxuICAgICAgICAgICAgICB7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAmbmJzcDsoXHJcbiAgICAgICAgICAgICAge3JlbmRlclBlcmNlbnQoaXRlbS5zdGF0dXMsIGl0ZW0ucGVyY2VudCl9XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFN3aXBlYWJsZURyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2lwZWFibGVEcmF3ZXInO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHJvdXRlTGluayBmcm9tICd+L3B1YmxpYy90ZXh0L2xpbmsnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vaGVhZGVyLXN0eWxlJztcclxuaW1wb3J0IG5hdk1lbnUgZnJvbSAnLi9tZW51JztcclxuXHJcbmZ1bmN0aW9uIE1vYmlsZU1lbnUocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyB0b2dnbGVEcmF3ZXIsIG9wZW4sIHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFNpZGVMaXN0ID0gKCkgPT4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9iaWxlTmF2fVxyXG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcn1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5tZW51LCBvcGVuICYmIGNsYXNzZXMubWVudU9wZW4pfT5cclxuICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuICAgICAgICAgIHtuYXZNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXHJcbiAgICAgICAgICAgICAgaHJlZj17YCMke2l0ZW19YH1cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4LnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRHVyYXRpb246IGluZGV4ICogMC4xNSArICdzJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyXycgKyBpdGVtKX0gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVMaXN0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxyXG4gICAgICAgICAgICBocmVmPXtyb3V0ZUxpbmsuY3J5cHRvLmNvbnRhY3R9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkR1cmF0aW9uOiBuYXZNZW51Lmxlbmd0aCAqIDAuMTUgKyAncycgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyX2NvbnRhY3QnKX0gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVMaXN0fSAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyU2lkZWJhcn0gLz5cclxuICAgICAgICAgIHtbJ2xvZ2luJywgJ3JlZ2lzdGVyJ10ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICAgICAgICBocmVmPXtyb3V0ZUxpbmsuY3J5cHRvW2l0ZW1dfVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXgudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EdXJhdGlvbjogbmF2TWVudS5sZW5ndGggKiAwLjE1ICsgJ3MnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfJyArIGl0ZW0pfSBjbGFzc05hbWU9e2NsYXNzZXMubWVudUxpc3R9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTd2lwZWFibGVEcmF3ZXJcclxuICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgb25DbG9zZT17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICBvbk9wZW49e3RvZ2dsZURyYXdlcn1cclxuICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgIHBhcGVyOiBjbGFzc2VzLnBhcGVyTmF2XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxTaWRlTGlzdCAvPlxyXG4gICAgPC9Td2lwZWFibGVEcmF3ZXI+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbk1vYmlsZU1lbnUucHJvcFR5cGVzID0ge1xyXG4gIHRvZ2dsZURyYXdlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShNb2JpbGVNZW51KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcclxuaW1wb3J0IENoZWNrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2snO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlcic7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9oZWFkZXItc3R5bGUnO1xyXG5cclxubGV0IHRoZW1lVHlwZSA9ICdsaWdodCc7XHJcbmlmICh0eXBlb2YgU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICB0aGVtZVR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbHV4aVRoZW1lJykgfHwgJ2xpZ2h0JztcclxufVxyXG5cclxuZnVuY3Rpb24gU2V0dGluZ3MocHJvcHMpIHtcclxuICBjb25zdCBbY3RuLCBzZXRDdG5dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzRGFyaywgc2V0RGFya10gPSB1c2VTdGF0ZSh0aGVtZVR5cGUgPT09ICdkYXJrJyk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCkge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VNb2RlID0gKCkgPT4ge1xyXG4gICAgc2V0RGFyayghaXNEYXJrKTtcclxuICAgIHByb3BzLnRvZ2dsZURhcmsoKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VMYW5nKGxhbmcpIHtcclxuICAgIGlmIChsYW5nID09PSAnYXJhJykge1xyXG4gICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKCdhcmEnKTtcclxuICAgICAgcHJvcHMudG9nZ2xlRGlyKCdydGwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UobGFuZyk7XHJcbiAgICAgIHByb3BzLnRvZ2dsZURpcignbHRyJyk7XHJcbiAgICB9XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDdG4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td3JhcCcpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG4gIGNvbnN0IGlkID0gb3BlbiA/ICdzaW1wbGUtcG9wb3ZlcicgOiB1bmRlZmluZWQ7XHJcbiAgY29uc3QgeyBpbnZlcnQsIHQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nfT5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtpZH1cclxuICAgICAgICBhcmlhLWxhYmVsPVwiU2V0dGluZ3NcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBjbHN4KFxyXG4gICAgICAgICAgICBjbGFzc2VzLmljb24sXHJcbiAgICAgICAgICAgIG9wZW4gJiYgY2xhc3Nlcy5hY3RpdmUsXHJcbiAgICAgICAgICAgIGludmVydCAmJiBjbGFzc2VzLmludmVydFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxTZXR0aW5nc0ljb24gZm9udFNpemU9XCJpbmhlcml0XCIgLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8UG9wb3ZlclxyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjb250YWluZXI9e2N0bn1cclxuICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcclxuICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kZU1lbnV9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiTW9kZS1tZW51XCJcclxuICAgICAgICAgIHN1YmhlYWRlcj17KFxyXG4gICAgICAgICAgICA8TGlzdFN1YmhlYWRlciBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl90aGVtZScpfVxyXG4gICAgICAgICAgICA8L0xpc3RTdWJoZWFkZXI+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29tcG9uZW50PVwibGFiZWxcIiBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT57dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl9saWdodCcpfTwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0Rhcmt9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZU1vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lzRGFya31cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ2NoZWNrYm94JyB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT57dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl9kYXJrJyl9PC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibmF2XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYW5nTWVudX1cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJMYW5ndWFnZS1tZW51XCJcclxuICAgICAgICAgIHN1YmhlYWRlcj17KFxyXG4gICAgICAgICAgICA8TGlzdFN1YmhlYWRlciBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl9sYW5ndWFnZScpfVxyXG4gICAgICAgICAgICA8L0xpc3RTdWJoZWFkZXI+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpMThuLm9wdGlvbnMuYWxsTGFuZ3VhZ2VzICYmIGkxOG4ub3B0aW9ucy5hbGxMYW5ndWFnZXMubWFwKHZhbCA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGtleT17dmFsfVxyXG4gICAgICAgICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZUxhbmcodmFsKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3ZhbH0gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3QoJ2NvbW1vbjonICsgdmFsKX0gLz5cclxuICAgICAgICAgICAgICB7aTE4bi5sYW5ndWFnZSA9PT0gdmFsICYmIChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L1BvcG92ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5TZXR0aW5ncy5wcm9wVHlwZXMgPSB7XHJcbiAgdG9nZ2xlRGFyazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICB0b2dnbGVEaXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBpbnZlcnQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuU2V0dGluZ3MuZGVmYXVsdFByb3BzID0ge1xyXG4gIGludmVydDogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NvbW1vbicsICdjcnlwdG8tbGFuZGluZyddKShTZXR0aW5ncyk7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBmYWRlLCBkYXJrZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XHJcbmltcG9ydCBmbGFnIGZyb20gJ34vcHVibGljL2ltYWdlcy9mbGFnLWxvZ28ucG5nJztcclxuXHJcbmNvbnN0IGZsYWdJY29uID0ge1xyXG4gIHdpZHRoOiAxNixcclxuICBoZWlnaHQ6IDE2LFxyXG4gIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgbWFyZ2luUmlnaHQ6IDUsXHJcbiAgdG9wOiAxLFxyXG4gIGJhY2tncm91bmQ6IGB1cmwoJHtmbGFnfSkgbm8tcmVwZWF0IHRyYW5zcGFyZW50YCxcclxuICBiYWNrZ3JvdW5kU2l6ZTogJzE2cHggYXV0bycsXHJcbiAgJyZbY2xhc3M9XCJhcmFcIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwIDNweCdcclxuICB9LFxyXG4gICcmW2NsYXNzPVwiemhvXCJdJzoge1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCAtMTJweCdcclxuICB9LFxyXG4gICcmW2NsYXNzPVwiZW5nXCJdJzoge1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCAtMjhweCdcclxuICB9LFxyXG4gICcmW2NsYXNzPVwiZGV1XCJdJzoge1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCAtNDRweCdcclxuICB9LFxyXG4gICcmW2NsYXNzPVwiaW5kXCJdJzoge1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCAtNjJweCdcclxuICB9LFxyXG4gICcmW2NsYXNzPVwicHJ0XCJdJzoge1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCAtNzlweCdcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgaGVhZGVyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICdAa2V5ZnJhbWVzIHNsaWRlUmlnaHQnOiB7XHJcbiAgICBmcm9tOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMHB4KSdcclxuICAgIH0sXHJcbiAgICB0bzoge1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB0cmFuc2Zvcm06ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZml4ZWQ6IHt9LFxyXG4gIGludmVydDoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgJyYgJG1vYmlsZU1lbnUnOiB7XHJcbiAgICAgICcmICRiYXInOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gICAgICAgICcmOmFmdGVyLCAmOmJlZm9yZSc6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG9wZW5EcmF3ZXI6IHt9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgIH0sXHJcbiAgICAnJiA+IConOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiRmaXhlZCc6IHtcclxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZGFya2VuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjUpIDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICAgIHBhZGRpbmdUb3A6IDAsXHJcbiAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kIDAuM3MgZWFzZScsXHJcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgICAgJyYgJGxvZ28nOiB7XHJcbiAgICAgICAgJyYgaW1nJzoge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0OCxcclxuICAgICAgICAgIHdpZHRoOiA0OCxcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRoZWFkZXJDb250ZW50Jzoge1xyXG4gICAgICAgICcmIG5hdic6IHtcclxuICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRuYXZNZW51Jzoge1xyXG4gICAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiBhJzoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJyYgJGRpdmlkZXInOiB7XHJcbiAgICAgICAgYm9yZGVyTGVmdENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcclxuICAgICAgfSxcclxuICAgICAgJyYgJG1vYmlsZU1lbnUnOiB7XHJcbiAgICAgICAgJyYgJGJhcic6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgICAnJjphZnRlciwgJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmJG9wZW5EcmF3ZXInOiB7XHJcbiAgICAgIHpJbmRleDogMTYwMCxcclxuICAgICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgJyYkaW52ZXJ0Jzoge1xyXG4gICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICAnJiAkbmF2TWVudSc6IHtcclxuICAgICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyYgYSc6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICAgICcmJGJ1dHRvbic6IHtcclxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkZGl2aWRlcic6IHtcclxuICAgICAgICBib3JkZXJMZWZ0Q29sb3I6IHRoZW1lLnBhbGV0dGUuZGl2aWRlclxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkbW9iaWxlTWVudSc6IHtcclxuICAgICAgICAnJiAkYmFyJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeX1gLFxyXG4gICAgICAgICAgJyY6YWZ0ZXIsICY6YmVmb3JlJzoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5fWBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBoZWFkZXJDb250ZW50OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAnJiBuYXYnOiB7XHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDApLFxyXG4gICAgICB9LFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCdcclxuICAgIH1cclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgICcmIGEnOiB7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICB3aWR0aDogNjQsXHJcbiAgICAgIGhlaWdodDogNjQsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgICBoZWlnaHQ6IDQ4LFxyXG4gICAgICAgIHdpZHRoOiA0OCxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZlOiB7fSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDE1KSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC41KVxyXG4gIH0sXHJcbiAgbmF2TWVudToge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICAnJiA+IConOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIGEnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLjUsIDEpLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMyksXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIG1hcmdpbjogMFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIHVsJzoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgbWFyZ2luTGVmdDogMCxcclxuICAgICAgcGFkZGluZ0xlZnQ6IDAsXHJcbiAgICAgICcmIGxpJzoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAnJiBhJzoge1xyXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxyXG4gICAgICAgICAgbWluV2lkdGg6IDAsXHJcbiAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEuNSksXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDYsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1vdXQnLFxyXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcclxuICAgICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZX1gLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyZbY2xhc3M9XCJhY3RpdmVcIl0nOiB7XHJcbiAgICAgICAgICAnJiBhJzoge1xyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwIDEuNXB4IDMycHggLThweCByZ2JhKDAsIDAsIDAsIDAuMjIpJyxcclxuICAgICAgICAgICAgY29sb3I6IGAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSAhaW1wb3J0YW50YCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLCAwLjMpIDogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC44NCksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBuYXZBdXRoOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIGZsZXg6IDEsXHJcbiAgICB9XHJcbiAgfSxcclxuICBsYW5nTWVudToge1xyXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxyXG4gICAgJyYgaSc6IHtcclxuICAgICAgLi4uZmxhZ0ljb25cclxuICAgIH1cclxuICB9LFxyXG4gIG1vZGVNZW51OiB7XHJcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgfSxcclxuICBpY29uOiB7fSxcclxuICBzZXR0aW5nOiB7XHJcbiAgICAnJiAkaWNvbic6IHtcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICB9LFxyXG4gICAgJyYgJGFjdGl2ZSc6IHtcclxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDMwZGVnKSdcclxuICAgIH1cclxuICB9LFxyXG4gIGJhcjoge30sXHJcbiAgbWVudToge30sXHJcbiAgcGFwZXJOYXY6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGRhcmtlbih0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyaywgMC41KSA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDY4MCldOiB7XHJcbiAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW9iaWxlTWVudToge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gICAgJyYgJGJhcic6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZX1gLFxyXG4gICAgICAnJjphZnRlciwgJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZX1gXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJltjbGFzcyo9XCJpcy1hY3RpdmVcIl0nOiB7XHJcbiAgICAgICcmICRiYXInOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZX0gIWltcG9ydGFudGAsXHJcbiAgICAgICAgJyY6YWZ0ZXIsICY6YmVmb3JlJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZX0gIWltcG9ydGFudGBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb2JpbGVOYXY6IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICcmICRtZW51Jzoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDUpLFxyXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICB0b3A6IDgwLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgaGVpZ2h0OiAnY2FsYygxMDAlIC0gODBweCknLFxyXG4gICAgICAnJiBhJzoge1xyXG4gICAgICAgIGFuaW1hdGlvbk5hbWU6ICckc2xpZGVSaWdodCcsXHJcbiAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdlYXNlJ1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWVudUxpc3Q6IHtcclxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICcmIHNwYW4nOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyNFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGl2aWRlcjoge1xyXG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxyXG4gICAgYm9yZGVyTGVmdDogJzFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxyXG4gICAgaGVpZ2h0OiAyOFxyXG4gIH0sXHJcbiAgbWFya2V0OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIHpJbmRleDogMTIwMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiA0MCxcclxuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygpLFxyXG4gIH0sXHJcbiAgaXRlbToge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLjUsIDQpLFxyXG4gICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgIG91dGxpbmU6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29pbjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgJyYgJGxvZ28nOiB7XHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgICcmIGltZyc6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIGknOiB7XHJcbiAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCdcclxuICAgIH1cclxuICB9LFxyXG4gIGRvd246IHtcclxuICAgIGNvbG9yOiAnI0ZGNzI3MidcclxuICB9LFxyXG4gIHVwOiB7XHJcbiAgICBjb2xvcjogJyM1REQ2NjInXHJcbiAgfSxcclxuICBzdGF5OiB7XHJcbiAgICBjb2xvcjogJyNiMmIyYjInXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyU3R5bGVzO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZWFkZXInO1xyXG4iLCJjb25zdCBtZW51ID0gW1xyXG4gICdwcm9tb3Rpb25zJyxcclxuICAnZmVhdHVyZScsXHJcbiAgJ2JlbmVmaXQnLFxyXG4gICd0ZXN0aW1vbmlhbHMnXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCBTbmFja2JhckNvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJDb250ZW50JztcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL25vdGlmaWNhdGlvbi1zdHlsZSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcblxyXG5mdW5jdGlvbiBUcmFuc2l0aW9uVXAocHJvcHMpIHtcclxuICByZXR1cm4gPFNsaWRlIHsuLi5wcm9wc30gZGlyZWN0aW9uPVwidXBcIiAvPjtcclxufVxyXG5cclxuZnVuY3Rpb24gTm90aWZpY2F0aW9uKHByb3BzKSB7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8U25hY2tiYXJcclxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17VHJhbnNpdGlvblVwfVxyXG4gICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICByb290OiBjbGFzc2VzLm5vdGlmaWNhdGlvbixcclxuICAgICAgfX1cclxuICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxTbmFja2JhckNvbnRlbnRcclxuICAgICAgICBtZXNzYWdlPXs8VHlwb2dyYXBoeSBpZD1cIm1lc3NhZ2UtaWRcIj57dCgnY29tbW9uOm5vdGlmX21zZycpfTwvVHlwb2dyYXBoeT59XHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgYWN0aW9uOiBjbGFzc2VzLmFjdGlvblxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYWN0aW9uPXsoXHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAge3QoJ2NvbW1vbjphY2NlcHQnKX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L1NuYWNrYmFyPlxyXG4gICk7XHJcbn1cclxuXHJcbk5vdGlmaWNhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NvbW1vbiddKShOb3RpZmljYXRpb24pO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ob3RpZmljYXRpb24nO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IG5vdGlmaWNhdGlvblN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBub3RpZmljYXRpb246IHtcclxuICAgIHdpZHRoOiAnOTUlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgfSxcclxuICAgICcmID4gZGl2Jzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjNDI0MjQyJyxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgNCksXHJcbiAgICAgIH0sXHJcbiAgICAgICcmID4gZGl2OmZpcnN0LWNoaWxkJzoge1xyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWN0aW9uOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbWFyZ2luOiAwXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3RpZmljYXRpb25TdHlsZXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IEFuY2hvckxpbmsgZnJvbSAncmVhY3QtYW5jaG9yLWxpbmstc21vb3RoLXNjcm9sbCc7XHJcbmltcG9ydCBTY3JvbGxzcHkgZnJvbSAncmVhY3Qtc2Nyb2xsc3B5JztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5pbXBvcnQgQXJyb3dJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1Vwd2FyZCc7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgbmF2TWVudSBmcm9tICcuLi9IZWFkZXIvbWVudSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9wYWdlbmF2LXN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEoaWQsIG5hbWUsIHVybCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZCxcclxuICAgIG5hbWUsXHJcbiAgICB1cmwsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgTGlua0J0biA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlua0J0bihwcm9wcywgcmVmKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICByZXR1cm4gPEFuY2hvckxpbmsgdG89e3Byb3BzLnRvfSB7Li4ucHJvcHN9IC8+OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gUGFnZU5hdihwcm9wcykge1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGxldCBmbGFnU2hvdyA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzY3JvbGwgPSAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApIC0gKGRvYy5jbGllbnRUb3AgfHwgMCk7XHJcbiAgICBjb25zdCBuZXdGbGFnU2hvdyA9IChzY3JvbGwgPiA1MDApO1xyXG4gICAgaWYgKGZsYWdTaG93ICE9PSBuZXdGbGFnU2hvdykge1xyXG4gICAgICBzZXRTaG93KG5ld0ZsYWdTaG93KTtcclxuICAgICAgZmxhZ1Nob3cgPSBuZXdGbGFnU2hvdztcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbbWVudUxpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgY3JlYXRlRGF0YSgxLCBuYXZNZW51WzBdLCAnIycgKyBuYXZNZW51WzBdLnJlcGxhY2UoLyAvZywgJ18nKSksXHJcbiAgICBjcmVhdGVEYXRhKDIsIG5hdk1lbnVbMV0sICcjJyArIG5hdk1lbnVbMV0ucmVwbGFjZSgvIC9nLCAnXycpKSxcclxuICAgIGNyZWF0ZURhdGEoMywgbmF2TWVudVsyXSwgJyMnICsgbmF2TWVudVsyXS5yZXBsYWNlKC8gL2csICdfJykpLFxyXG4gICAgY3JlYXRlRGF0YSg0LCBuYXZNZW51WzNdLCAnIycgKyBuYXZNZW51WzNdLnJlcGxhY2UoLyAvZywgJ18nKSksXHJcbiAgXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucGFnZU5hdiwgc2hvdyAmJiBjbGFzc2VzLnNob3cpfT5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk5hdn0+XHJcbiAgICAgICAgPFNjcm9sbHNweVxyXG4gICAgICAgICAgaXRlbXM9e25hdk1lbnV9XHJcbiAgICAgICAgICBjdXJyZW50Q2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IG1lbnVMaXN0Lm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiAzMCAqIChuYXZNZW51Lmxlbmd0aCAtIGl0ZW0uaWQpIH19XHJcbiAgICAgICAgICAgICAgZGF0YS1pZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl8nICsgaXRlbS5uYW1lKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICB0b29sdGlwOiBjbGFzc2VzLnRvb2x0aXBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFuY2hvckxpbmsgaHJlZj17aXRlbS51cmx9IC8+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSkgfVxyXG4gICAgICAgIDwvU2Nyb2xsc3B5PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPFRvb2x0aXBcclxuICAgICAgICB0aXRsZT1cIlRvIFRvcFwiXHJcbiAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgdG9vbHRpcDogY2xhc3Nlcy50b29sdGlwXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGYWJcclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG8gdG9wXCJcclxuICAgICAgICAgIGNvbXBvbmVudD17TGlua0J0bn1cclxuICAgICAgICAgIGhyZWY9XCIjaG9tZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmFifVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBcnJvd0ljb24gLz5cclxuICAgICAgICA8L0ZhYj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuUGFnZU5hdi5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKFBhZ2VOYXYpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYWdlTmF2JztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBwYWdlbmF2ID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHNob3c6IHt9LFxyXG4gIGZhYjoge1xyXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC41KScsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgZWFzZScsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICBoZWlnaHQ6IDQwXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBwYWdlTmF2OiB7XHJcbiAgICB6SW5kZXg6IDIwMCxcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgYm90dG9tOiA0MCxcclxuICAgIHJpZ2h0OiA0MCxcclxuICAgICcmIG5hdic6IHtcclxuICAgICAgdHJhbnNpdGlvbjogJ2hlaWdodCAwLjVzIGVhc2UnLFxyXG4gICAgICB0cmFuc2l0aW9uRGVsYXk6ICcwLjVzJyxcclxuICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcclxuICAgIH0sXHJcbiAgICAnJiRzaG93Jzoge1xyXG4gICAgICAnJiAkZmFiJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgdWwnOiB7XHJcbiAgICAgIG1hcmdpbjogJzAgMCAxNnB4IDIycHgnLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgfSxcclxuICAgICcmIGxpJzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxyXG4gICAgICAnJiBhJzoge1xyXG4gICAgICAgIHdpZHRoOiAxMixcclxuICAgICAgICBoZWlnaHQ6IDEyLFxyXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFya31gLFxyXG4gICAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmW2NsYXNzPVwiYWN0aXZlXCJdIGEnOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHR9YCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgJyYgbGknOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0b3A6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiBuYXYnOiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbkRlbGF5OiAnMHMnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2VuYXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCwgUGFyYWxsYXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9wYXJhbGxheC1zdHlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbGxheENsb3VkKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5wYXJhbGxheFdyYXAsIGNsYXNzZXMuZG90c1dyYXApfT5cclxuICAgICAgPFBhcmFsbGF4UHJvdmlkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5pbm5lclBhcmFsbGF4LCBjbGFzc2VzLmxhcmdlKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXhhV3JhcH0+XHJcbiAgICAgICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgICAgIHk9e1syMCwgMjBdfVxyXG4gICAgICAgICAgICAgIHRhZ091dGVyPVwiZmlndXJlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yaWdodFRvcEJhY2ssIGNsYXNzZXMuYmlnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzLmhleGFCYWNrfT5cclxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiL2ltYWdlcy9jcnlwdG8vcGFyYWxsYXgtYmFjazIuc3ZnI21haW5cIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgICA8UGFyYWxsYXhcclxuICAgICAgICAgICAgICB5PXtbMjAsIDIwXX1cclxuICAgICAgICAgICAgICB0YWdPdXRlcj1cImZpZ3VyZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucmlnaHRUb3BGcm9udCwgY2xhc3Nlcy5zbWFsbCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNTg1cHhcIiBoZWlnaHQ9XCIxNTFweFwiIHZpZXdCb3g9XCIwIDAgNTg1IDE1MVwiIHZlcnNpb249XCIxLjFcIj5cclxuICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE0My4wMDAwMDAsIC04OC4wMDAwMDApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzMi42MjM4NjIsIDcwLjkxMjAzMilcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTIwLjU2MTE3MywxNDguMjUyNjAzIEM1MjAuNTYxMTczLDE1MS4xMzE4MDIgNTIyLjEwMTIzNCwxNTMuNzkyNDMzIDUyNC42MDEzNDIsMTU1LjIzMjAzMyBMNTUxLjQwNDcyNSwxNzAuNjY2NTA5IEM1NTMuOTA0ODMzLDE3Mi4xMDYxMDggNTU2Ljk4NDk1NSwxNzIuMTA2MTA4IDU1OS40ODUwNjMsMTcwLjY2NjUwOSBMNTg2LjI4ODQ0NiwxNTUuMjMyMDMzIEM1ODguNzg4NTUzLDE1My43OTI0MzMgNTkwLjMyODYxNSwxNTEuMTMxODAyIDU5MC4zMjg2MTUsMTQ4LjI1MjYwMyBMNTkwLjMyODYxNSwxMTcuMzgzNTIyIEM1OTAuMzI4NjE1LDExNC41MDQxOTQgNTg4Ljc4ODU1MywxMTEuODQzNjkyIDU4Ni4yODg0NDYsMTEwLjQwMzk2MyBMNTU5LjQ4NTA2Myw5NC45Njk0ODcxIEM1NTYuOTg0OTU1LDkzLjUyOTg4NzkgNTUzLjkwNDgzMyw5My41Mjk4ODc5IDU1MS40MDQ3MjUsOTQuOTY5NDg3MSBMNTI0LjYwMTM0MiwxMTAuNDAzOTYzIEM1MjIuMTAxMjM0LDExMS44NDM2OTIgNTIwLjU2MTE3MywxMTQuNTA0MTk0IDUyMC41NjExNzMsMTE3LjM4MzUyMiBMNTIwLjU2MTE3MywxNDguMjUyNjAzIFpcIiBmaWxsPVwidXJsKCNoZXhhTGluZWFyR3JhZGllbnQtMilcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTU1LjQ0NDg5NCwgMTMyLjgxNzk5OCkgcm90YXRlKC0zMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTU1NS40NDQ4OTQsIC0xMzIuODE3OTk4KVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhleGFXcmFwfT5cclxuICAgICAgICAgICAgPFBhcmFsbGF4XHJcbiAgICAgICAgICAgICAgeT17WzQwLCA0MF19XHJcbiAgICAgICAgICAgICAgdGFnT3V0ZXI9XCJmaWd1cmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxlZnRCb3R0b21CYWNrLCBjbGFzc2VzLmJpZyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXhhQmFja30+XHJcbiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIi9pbWFnZXMvY3J5cHRvL3BhcmFsbGF4LWJhY2szLnN2ZyNtYWluXCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgICAgPFBhcmFsbGF4XHJcbiAgICAgICAgICAgICAgeT17WzQwLCA0MF19XHJcbiAgICAgICAgICAgICAgdGFnT3V0ZXI9XCJmaWd1cmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxlZnRCb3R0b21Gcm9udCwgY2xhc3Nlcy5zbWFsbCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNTg1cHhcIiBoZWlnaHQ9XCIxNTFweFwiIHZpZXdCb3g9XCIwIDAgNTg1IDE1MVwiIHZlcnNpb249XCIxLjFcIj5cclxuICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE0My4wMDAwMDAsIC04OC4wMDAwMDApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzMi42MjM4NjIsIDcwLjkxMjAzMilcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUsNjcuMzYyODE1OCBDMTUsNzAuMjQyMDE0MiAxNi41NDAwNjEzLDcyLjkwMjY0NTYgMTkuMDQwMTY5MSw3NC4zNDIyNDQ4IEw0NS44NDM1NTE4LDg5Ljc3NjcyMTIgQzQ4LjM0MzY1OTcsOTEuMjE2MzIwNCA1MS40MjM3ODIyLDkxLjIxNjMyMDQgNTMuOTIzODkwMSw4OS43NzY3MjEyIEw4MC43MjcyNzI3LDc0LjM0MjI0NDggQzgzLjIyNzM4MDYsNzIuOTAyNjQ1NiA4NC43Njc0NDE5LDcwLjI0MjAxNDIgODQuNzY3NDQxOSw2Ny4zNjI4MTU4IEw4NC43Njc0NDE5LDM2LjQ5MzczMzkgQzg0Ljc2NzQ0MTksMzMuNjE0NDA2NCA4My4yMjczODA2LDMwLjk1MzkwNDEgODAuNzI3MjcyNywyOS41MTQxNzU4IEw1My45MjM4OTAxLDE0LjA3OTY5OTQgQzUxLjQyMzc4MjIsMTIuNjQwMTAwMiA0OC4zNDM2NTk3LDEyLjY0MDEwMDIgNDUuODQzNTUxOCwxNC4wNzk2OTk0IEwxOS4wNDAxNjkxLDI5LjUxNDE3NTggQzE2LjU0MDA2MTMsMzAuOTUzOTA0MSAxNSwzMy42MTQ0MDY0IDE1LDM2LjQ5MzczMzkgTDE1LDY3LjM2MjgxNTggWlwiIGZpbGw9XCJ1cmwoI2hleGFMaW5lYXJHcmFkaWVudC0zKVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0OS44ODM3MjEsIDUxLjkyODIxMCkgcm90YXRlKC0zMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTQ5Ljg4MzcyMSwgLTUxLjkyODIxMClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXhQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBwYXJhbGxheFN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBwYXJhbGxheFdyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIHpJbmRleDogMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbm5lclBhcmFsbGF4OiB7XHJcbiAgICBoZWlnaHQ6IDI1MDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgJyYgZmlndXJlJzoge1xyXG4gICAgICBoZWlnaHQ6IDI1MDAsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB9LFxyXG4gICAgJyYgZmlndXJlID4gZGl2Jzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICByaWdodFRvcEJhY2s6IHtcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgcmlnaHQ6IC0yNDBcclxuICAgIH1cclxuICB9LFxyXG4gIHJpZ2h0VG9wRnJvbnQ6IHtcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgcmlnaHQ6IDUwXHJcbiAgICB9XHJcbiAgfSxcclxuICBsZWZ0Qm90dG9tQmFjazoge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIGxlZnQ6IC0xMTBcclxuICAgIH1cclxuICB9LFxyXG4gIGxlZnRCb3R0b21Gcm9udDoge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIGxlZnQ6IC01MFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGV4YUJhY2s6IHtcclxuICAgIG9wYWNpdHk6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gMC4xMiA6IDAuMDMsXHJcbiAgICBmaWxsOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIHdpZHRoOiA1NTAsXHJcbiAgICBoZWlnaHQ6IDUwMFxyXG4gIH0sXHJcbiAgaGV4YVRvcDoge30sXHJcbiAgaGV4YVdyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgaGVpZ2h0OiA3MDBcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXJhbGxheFN0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgTmV4dEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LWFuaW1hdGVkLXNsaWRlcic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9wcm9tb3Rpb24tc3R5bGUnO1xyXG5pbXBvcnQgaW1nQVBJIGZyb20gJ34vcHVibGljL2ltYWdlcy9pbWdBUEknO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5cclxuY29uc3Qgc2xpZGVyRGF0YSA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogaW1nQVBJLmNyeXB0b1swXSxcclxuICAgIHRpdGxlOiAnb3VyIHRhcmdldCBpcyB0byBiZSB1c2VkIGJ5IG1pbGxpb25zJyxcclxuICAgIGRlc2M6IFwiT24gVHJhZGluZyBQbGFuZXQgU3dhcCwgeW91IGNhbiBtYWtlIHRyYWRlcyBvbiB0aGUgQmluYW5jZSBTbWFydCBDaGFpbi4gSXQncyBvbiBvZiB0aGUgbGFyZ2VzdCBkZWNlbnRyYWxpemVkIG5ldHdvcmsgaW4gdGhlIHdvcmxkIG9mIGJsb2NrY2hhaW4sIGl0J3MgaW1wb3NzaWJsZSB0byBydW4gYW4gZXhjaGFuZ2Ugd2l0aG91dCB1c2luZyBpdC5CaW5hbmNlIFNtYXJ0IENoYWluIGNhbWUgcmVjZW50bHkgYW5kIGhlbHBlZCBzb2x2ZSB0aGUgcHJvYmxlbXMgb2YgRXRoZXJpdW0gQmxvY2tjaGFpbi4gV2l0aCBmYXN0ZXIgdHJhZGVzIGFuZCBsb3dlciBmZWVzLCBCaW5hbmNlIGlzIGRlZmluaXRlbHkgb25lIHRvIHdhdGNoIG91dCBmb3IuXCIsXHJcbiAgICBkYXRlOiAnMTIgSnVsIC0gMTAgQXVnJ1xyXG4gIH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIFByb21vdGlvbihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVyV3JhcH0+XHJcbiAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLXdyYXBwZXJcIlxyXG4gICAgICAgICAgcHJldmlvdXNCdXR0b249eyhcclxuICAgICAgICAgICAgPE5leHRJY29uIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgbmV4dEJ1dHRvbj17KFxyXG4gICAgICAgICAgICA8TmV4dEljb24gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3NsaWRlckRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLml0ZW0sIGluZGV4ICUgMiA9PT0gMSA/IGNsYXNzZXMub2RkIDogY2xhc3Nlcy5ldmVuKX0ga2V5PXtpbmRleC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17N30+XHJcbiAgICAgICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nV3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlY29yYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIi9pbWFnZXMvY3J5cHRvL2RlY28tcHJvbW8uc3ZnI21haW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQmFzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcucHJvbW9fcGVyaW9kZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5Qcm9tb3Rpb24ucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKFByb21vdGlvbik7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1Byb21vdGlvbic7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBsaWdodGVuLCBkYXJrZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XHJcbmltcG9ydCBkZWNvQm90dG9tTGlnaHQgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWJvdHRvbS1saWdodC5zdmcnO1xyXG5pbXBvcnQgZGVjb0JvdHRvbURhcmsgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by9kZWNvLWJvdHRvbS1kYXJrLnN2Zyc7XHJcblxyXG5jb25zdCBwcm9tb3Rpb25TdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgYmFja2dyb3VuZDogYHVybCgke3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZGVjb0JvdHRvbURhcmsgOiBkZWNvQm90dG9tTGlnaHR9KSBib3R0b20gY2VudGVyIG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZGFya2VuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjYpIDogbGlnaHRlbih0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC44NCksXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgMTAxJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxMCwgMyksXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IDBcclxuICAgIH0sXHJcbiAgfSxcclxuICBzbGlkZXJXcmFwOiB7XHJcbiAgICAnJiBhW2NsYXNzKj1cInByZXZpb3VzQnV0dG9uXCJdJzoge1xyXG4gICAgICByaWdodDogMTIwLFxyXG4gICAgICBsZWZ0OiAnYXV0bycsXHJcbiAgICAgIHRvcDogMjAwLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICByaWdodDogMjBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmIGFbY2xhc3MqPVwibmV4dEJ1dHRvblwiXSc6IHtcclxuICAgICAgbGVmdDogJ2F1dG8nLFxyXG4gICAgICB0b3A6IDE0MCxcclxuICAgICAgcmlnaHQ6IDEyMCxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgcmlnaHQ6IDIwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiA+IGRpdic6IHtcclxuICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICAgIGhlaWdodDogMzIwXHJcbiAgICAgIH0sXHJcbiAgICAgICcmID4gYSc6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICB3aWR0aDogNDAsXHJcbiAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgekluZGV4OiAxMSxcclxuICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICAgIHdpZHRoOiAzNSxcclxuICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgIGxlZnQ6IDMsXHJcbiAgICAgICAgICB0b3A6IDMsXHJcbiAgICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBwYXBlcjoge30sXHJcbiAgdGltZToge30sXHJcbiAgZXZlbjoge1xyXG4gICAgJyYgaDEnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgfSxcclxuICAgICcmICRkZWNvcmF0aW9uJzoge1xyXG4gICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBvZGQ6IHtcclxuICAgICcmIGgxJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB9LFxyXG4gICAgJyYgJGRlY29yYXRpb24nOiB7XHJcbiAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBoZXhhOiB7fSxcclxuICBpdGVtOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgMCksXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gICAgbWF4SGVpZ2h0OiA1MDAsXHJcbiAgICB6SW5kZXg6IDEwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIH0sXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIHdpZHRoOiA0NTAsXHJcbiAgICAgIGhlaWdodDogNDUwXHJcbiAgICB9LFxyXG4gICAgJyYgc2VjdGlvbic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHpJbmRleDogMTAsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNDBweCknLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgZWFzZScsXHJcbiAgICB9LFxyXG4gICAgJyZbY2xhc3MqPVwiY3VycmVudFwiXSc6IHtcclxuICAgICAgJyYgc2VjdGlvbic6IHtcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCknLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiBmaWd1cmUnOiB7XHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgbGluZUhlaWdodDogJzQ1MHB4JyxcclxuICAgICAgd2lkdGg6IDQ1MCxcclxuICAgICAgaGVpZ2h0OiA0NTAsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHRvcDogMTcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSAhaW1wb3J0YW50JyxcclxuICAgICAgJyYgaW1nJzoge1xyXG4gICAgICAgIHRyYW5zaXRpb246ICdub25lJyxcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgICB3aWR0aDogMzUwLFxyXG4gICAgICAgIGhlaWdodDogMzkzLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmICRwYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOSwgNiwgOSwgMTYpLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDI0LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgICAgbGVmdDogLTgwLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiA2MCxcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSA4MHB4KScsXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgfSxcclxuICAgICAgJyYgYnV0dG9uJzoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYgaDEnOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgbGluZUhlaWdodDogJzQycHgnLFxyXG4gICAgICAnJiBidXR0b24nOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgZm9udFNpemU6IDM2LFxyXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgbWF4V2lkdGg6IDUwMCxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdNb250c2VycmF0JyxcclxuICAgICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIGZvbnRTaXplOiAyOCxcclxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogJzI4cHgnLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vcm1hbCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzMycHgnXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgcCc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmICR0aW1lJzoge1xyXG4gICAgICAnJiBoNic6IHtcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGRlY29yYXRpb246IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHpJbmRleDogMixcclxuICAgIG9wYWNpdHk6IDAuNVxyXG4gIH0sXHJcbiAgaW1nV3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0b3A6IC0yNCxcclxuICAgIGxlZnQ6IC00MDBcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb21vdGlvblN0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IGltZ0FwaSBmcm9tICd+L3B1YmxpYy9pbWFnZXMvaW1nQVBJJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gJ34vdGhlbWUvY29tbW9uJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL1RpdGxlJztcclxuaW1wb3J0IFRlc3RpQ2FyZCBmcm9tICcuLi9DYXJkcy9UZXN0aW1vbmlhbCc7XHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3Rlc3RpLXN0eWxlJztcclxuXHJcbmNvbnN0IHRlc3RpQ29udGVudCA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiAnVml2YW11cyBzaXQgYW1ldCBpbnRlcmR1bSBlbGl0LiBQcm9pbiBsYWNpbmlhIGVyYXQgYWMgdmVsaXQgdGVtcHVzIGF1Y3Rvci4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBBbGlxdWFtIG5lYyBleCBhbGlxdWV0LCBhbGlxdWFtIG5lcXVlIG5vbi4nLFxyXG4gICAgbmFtZTogJ0pvaG4gRG9lJyxcclxuICAgIGF2YXRhcjogaW1nQXBpLmF2YXRhcls2XSxcclxuICAgIHRpdGxlOiAnQ2hpZWYgRGlnaXRhbCBPZmZpY2VyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdWZXN0aWJ1bHVtIHNpdCBhbWV0IHRvcnRvciBzaXQgYW1ldCBsaWJlcm8gbG9ib3J0aXMgc2VtcGVyIGF0IGV0IG9kaW8uIEluIGV1IHRlbGx1cyB0ZWxsdXMuIFBlbGxlbnRlc3F1ZSB1bGxhbWNvcnBlciBhbGlxdWV0IHVsdHJpY2VzLiBBZW5lYW4gZmFjaWxpc2lzIHZpdGFlIHB1cnVzIGZhY2lsaXNpcyBzZW1wZXIuIE5hbSB2aXRhZSBzY2VsZXJpc3F1ZSBsb3JlbSwgcXVpcyB0ZW1wdXMgbGliZXJvLicsXHJcbiAgICBuYW1lOiAnSmVhbiBEb2UnLFxyXG4gICAgYXZhdGFyOiBpbWdBcGkuYXZhdGFyWzddLFxyXG4gICAgdGl0bGU6ICdDaGllZiBEaWdpdGFsIE9mZmljZXInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ0NyYXMgY29udmFsbGlzIGxhY3VzIG9yY2ksIHRyaXN0aXF1ZSB0aW5jaWR1bnQgbWFnbmEgY29uc2VxdWF0IGluLiBJbiB2ZWwgcHVsdmluYXIgZXN0LCBhdCBldWlzbW9kIGxpYmVyby4nLFxyXG4gICAgbmFtZTogJ0plbmEgRG9lJyxcclxuICAgIGF2YXRhcjogaW1nQXBpLmF2YXRhclsxXSxcclxuICAgIHRpdGxlOiAnR3JhcGhpYyBEZXNpZ25lcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnU2VkIGltcGVyZGlldCBlbmltIGxpZ3VsYSwgdml0YWUgdml2ZXJyYSBqdXN0byBwb3J0YSB2ZWwuJyxcclxuICAgIG5hbWU6ICdKb3ZlbGluIERvZScsXHJcbiAgICBhdmF0YXI6IGltZ0FwaS5hdmF0YXJbMl0sXHJcbiAgICB0aXRsZTogJ1NlbmlvciBHcmFwaGljIERlc2lnbmVyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdDcmFzIGNvbnZhbGxpcyBsYWN1cyBvcmNpLCB0cmlzdGlxdWUgdGluY2lkdW50IG1hZ25hIGNvbnNlcXVhdCBpbi4gSW4gdmVsIHB1bHZpbmFyIGVzdCwgYXQgZXVpc21vZCBsaWJlcm8uJyxcclxuICAgIG5hbWU6ICdKaWhhbiBEb2UnLFxyXG4gICAgYXZhdGFyOiBpbWdBcGkuYXZhdGFyWzNdLFxyXG4gICAgdGl0bGU6ICdDRU8gU29mdHdhcmUgSG91c2UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ0NyYXMgY29udmFsbGlzIGxhY3VzIG9yY2ksIHRyaXN0aXF1ZSB0aW5jaWR1bnQgbWFnbmEgY29uc2VxdWF0IGluLiBJbiB2ZWwgcHVsdmluYXIgZXN0LCBhdCBldWlzbW9kIGxpYmVyby4nLFxyXG4gICAgbmFtZTogJ0pvaG4gRG9lJyxcclxuICAgIGF2YXRhcjogaW1nQXBpLmF2YXRhcls5XSxcclxuICAgIHRpdGxlOiAnU2VuaW9yIEdyYXBoaWMgRGVzaWduZXInLFxyXG4gIH0sXHJcbl07XHJcblxyXG5cclxuZnVuY3Rpb24gVGVzdGltb25pYWxzKHByb3BzKSB7XHJcbiAgY29uc3Qgc2xpZGVyID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJykpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY3RpdmVUcmFuc2l0aW9uLCBzZXRBY3RpdmVUcmFuc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBmYWRlOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxyXG4gICAgYWZ0ZXJDaGFuZ2U6IChjdXJyZW50KSA9PiBzZXRBY3RpdmUoY3VycmVudCksXHJcbiAgICBiZWZvcmVDaGFuZ2U6IChjdXJyZW50LCBuZXh0KSA9PiBzZXRBY3RpdmVUcmFuc2l0aW9uKG5leHQpLFxyXG4gIH07XHJcbiAgY29uc3Qgc2xpZGVTdGF0ZSA9IGluZGV4ID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gYWN0aXZlVHJhbnNpdGlvbiAtIDEgfHwgaW5kZXggPT09IGFjdGl2ZSAtIDEpIHtcclxuICAgICAgcmV0dXJuIGNsYXNzZXMucGFzdDtcclxuICAgIH1cclxuICAgIGlmIChpbmRleCA9PT0gYWN0aXZlVHJhbnNpdGlvbiArIDEgfHwgaW5kZXggPT09IGFjdGl2ZSArIDEpIHtcclxuICAgICAgcmV0dXJuIGNsYXNzZXMuZnV0dXJlO1xyXG4gICAgfVxyXG4gICAgaWYgKGluZGV4ID09PSBhY3RpdmVUcmFuc2l0aW9uIHx8IGluZGV4ID09PSBhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuIGNsYXNzZXMuY3VycmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc2VzLnNsaWRlO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPXtpc0Rlc2t0b3B9PlxyXG4gICAgICAgIDxUaXRsZSB0ZXh0PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcudGVzdGlfdGl0bGUnKX0gYWxpZ249XCJjZW50ZXJcIiAvPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLnRlc3RpX3N1YnRpdGxlJyl9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezF9IHhzPXsxMn0gLz5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEwfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbGlkZXJXcmFwfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5uYXYsIGNsYXNzZXMucHJldil9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlci5jdXJyZW50LnNsaWNrUHJldigpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24taW9zLWFycm93LWJhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgcmVmPXtzbGlkZXJ9IHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgIHt0ZXN0aUNvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleC50b1N0cmluZygpfSBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5pdGVtLCBzbGlkZVN0YXRlKGluZGV4KSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlc3RpQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtpdGVtLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2luZGV4ID09PSBhY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubmF2LCBjbGFzc2VzLm5leHQpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZXIuY3VycmVudC5zbGlja05leHQoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLWlvcy1hcnJvdy1mb3J3YXJkXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb259PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHRlc3RpQ29udGVudC5sZW5ndGgpXS5tYXAoKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4LnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2luZGV4ID09PSBhY3RpdmUgPyBjbGFzc2VzLmFjdGl2ZSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNsaWRlci5jdXJyZW50LnNsaWNrR29UbyhpbmRleCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuVGVzdGltb25pYWxzLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShUZXN0aW1vbmlhbHMpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UZXN0aW1vbmlhbHMnO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgZmFkZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcclxuaW1wb3J0IGhleGFCZyBmcm9tICd+L3B1YmxpYy9pbWFnZXMvY3J5cHRvL2hleGEtbmF2LnBuZyc7XHJcblxyXG5jb25zdCB0ZXN0aVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIwKVxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiAyMDBcclxuICAgIH1cclxuICB9LFxyXG4gIGNhcm91c2VsOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgIH0sXHJcbiAgICAnJiA+IGRpdic6IHtcclxuICAgICAgekluZGV4OiAxMFxyXG4gICAgfSxcclxuICAgICcmOmFmdGVyLCAmOmJlZm9yZSc6IHtcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEyLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgaGVpZ2h0OiAxNTAsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgfSxcclxuICAgICcmOmFmdGVyJzoge1xyXG4gICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgIGJvdHRvbTogNSxcclxuICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAwKSdcclxuICAgIH0sXHJcbiAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgYm90dG9tOiAtMTUsXHJcbiAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgMCknXHJcbiAgICB9LFxyXG4gICAgJyYgPiBidXR0b24nOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBpdGVtOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDcsIDEsIDApLFxyXG4gICAgfSxcclxuICAgICcmOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHNsaWRlQ29udGVudDoge1xyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICcxcycsXHJcbiAgICBhbmltYXRpb25GaWxsTW9kZTogJ2JvdGgnXHJcbiAgfSxcclxuICBzbGlkZToge1xyXG4gICAgYmFja2dyb3VuZDogJ25vbmUnXHJcbiAgfSxcclxuICBmdXR1cmU6IHtcclxuICAgICcmICRzbGlkZUNvbnRlbnQnOiB7XHJcbiAgICAgIGFuaW1hdGlvbjogJ2ZhZGVJblVwJyxcclxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxcycsXHJcbiAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC4xcycsXHJcbiAgICAgIGFuaW1hdGlvbkZpbGxNb2RlOiAnYm90aCdcclxuICAgIH1cclxuICB9LFxyXG4gIHBhc3Q6IHtcclxuICAgICcmICRzbGlkZUNvbnRlbnQnOiB7XHJcbiAgICAgIGFuaW1hdGlvbjogJ2ZhZGVPdXRVcCcsXHJcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMXMnLFxyXG4gICAgICBhbmltYXRpb25GaWxsTW9kZTogJ2JvdGgnXHJcbiAgICB9XHJcbiAgfSxcclxuICBuYXY6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICB6SW5kZXg6IDEyLFxyXG4gICAgdG9wOiAnNDglJyxcclxuICAgIHdpZHRoOiA1MCxcclxuICAgIGhlaWdodDogNjQsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgbWluV2lkdGg6IDAsXHJcbiAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7aGV4YUJnfSkgbm8tcmVwZWF0IGNlbnRlcmAsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXHJcbiAgICB0cmFuc2Zvcm06IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ3JvdGF0ZSgwZGVnKScsXHJcbiAgICAnJiBpJzoge1xyXG4gICAgICBjb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LCAwLjMzKSxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIGZvbnRTaXplOiAyNixcclxuICAgIH0sXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgb3V0bGluZTogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJldjoge1xyXG4gICAgbGVmdDogNTYsXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIHJpZ2h0OiAyLFxyXG4gICAgICBtYXJnaW5Ub3A6IDNcclxuICAgIH1cclxuICB9LFxyXG4gIG5leHQ6IHtcclxuICAgIHJpZ2h0OiA1NixcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgbGVmdDogMixcclxuICAgICAgbWFyZ2luVG9wOiAzXHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmU6IHt9LFxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIHpJbmRleDogMjIsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmIHVsJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKC0xMiksXHJcbiAgICAgICcmIGxpJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIHdpZHRoOiAxNSxcclxuICAgICAgICBoZWlnaHQ6IDE1LFxyXG4gICAgICAgIG1hcmdpbjogJzAgNXB4JyxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufWAsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgZWFzZS1vdXQnLFxyXG4gICAgICAgICcmJGFjdGl2ZSc6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyYgYnV0dG9uJzoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3RpU3R5bGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi90aXRsZS1zdHlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaXRsZShwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7XHJcbiAgICB0ZXh0LFxyXG4gICAgYWxpZ24sXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHNldEFsaWduID0gYWxpZ25tZW50ID0+IHtcclxuICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIHJldHVybiBjbGFzc2VzLmxlZnQ7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5yaWdodDtcclxuICAgICAgY2FzZSAnY2VudGVyJzpcclxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5jZW50ZXI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMubGVmdDtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRpdGxlLCBzZXRBbGlnbihhbGlnbikpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb30+XHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjM4cHhcIiBoZWlnaHQ9XCI0M3B4XCIgdmlld0JveD1cIjAgMCAzOCA0M1wiIHZlcnNpb249XCIxLjFcIj5cclxuICAgICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTAsMzAuMDI0NTEyNiBDMCwzMS42MTQ2OTAxIDAuODM4ODIwMDM3LDMzLjA4NDE1MzQgMi4yMDA1NDU0NSwzMy44NzkyNDIyIEwxNi43OTk0NTQ1LDQyLjQwMzY4MzQgQzE4LjE2MTE4LDQzLjE5ODc3MjIgMTkuODM4ODIsNDMuMTk4NzcyMiAyMS4yMDA1NDU1LDQyLjQwMzY4MzQgTDM1Ljc5OTQ1NDUsMzMuODc5MjQyMiBDMzcuMTYxMTgsMzMuMDg0MTUzNCAzOCwzMS42MTQ2OTAxIDM4LDMwLjAyNDUxMjYgTDM4LDEyLjk3NTU1ODcgQzM4LDExLjM4NTMwOTkgMzcuMTYxMTgsOS45MTU5MTc5MyAzNS43OTk0NTQ1LDkuMTIwNzU3ODQgTDIxLjIwMDU0NTUsMC41OTYzMTY1ODggQzE5LjgzODgyLC0wLjE5ODc3MjE5NiAxOC4xNjExOCwtMC4xOTg3NzIxOTYgMTYuNzk5NDU0NSwwLjU5NjMxNjU4OCBMMi4yMDA1NDU0NSw5LjEyMDc1Nzg0IEMwLjgzODgyMDAzNyw5LjkxNTkxNzkzIDAsMTEuMzg1MzA5OSAwLDEyLjk3NTU1ODcgTDAsMzAuMDI0NTEyNiBaXCIgZmlsbD1cInVybCgjdGl0bGVMaW5lYXJHcmFkaWVudC0xKVwiIC8+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuVGl0bGUucHJvcFR5cGVzID0ge1xyXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcblRpdGxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2xlZnQnLFxyXG59O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UaXRsZSc7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdGl0bGVTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbGVmdDoge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAnJjphZnRlcic6IHtcclxuICAgICAgbGVmdDogMCxcclxuICAgIH1cclxuICB9LFxyXG4gIHJpZ2h0OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICAnJjphZnRlcic6IHtcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjZW50ZXI6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAnJjphZnRlcic6IHtcclxuICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IC0zNSxcclxuICAgIH1cclxuICB9LFxyXG4gIGRlY286IHtcclxuICAgICcmIHN2Zyc6IHt9XHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgJyYgaDQnOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAzMixcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDhweCdcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDI4LFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0NHB4JyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlU2Vjb25kYXJ5OiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJiBoNCc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgbGluZUhlaWdodDogJzU2cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ4cHgnXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAyOCxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDRweCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBzdHJvbmcnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIH1cclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRpdGxlU3R5bGVzO1xyXG4iLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHQ7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgZGVmYXVsdExhbmd1YWdlOiAnZW5nJyxcclxuICBvdGhlckxhbmd1YWdlczogWydhcmEnXSxcclxuICBmYWxsYmFja0xuZzogJ2VuZycsXHJcbiAgaW5pdEltbWVkaWF0ZTogZmFsc2UsXHJcbiAgbG9jYWxlUGF0aDogJ3B1YmxpYy9sb2NhbGVzJyxcclxuICByZWFjdDoge1xyXG4gICAgdXNlU3VzcGVuc2U6IGZhbHNlLFxyXG4gIH0sXHJcbiAgbG9jYWxlU3VicGF0aHM6IHtcclxuICAgIGFyYTogJ2FyJyxcclxuICAgIGVuZzogJ2VuJyxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlVGhlbWUsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcic7XHJcbmltcG9ydCBQcm9tb3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9tb3Rpb24nO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICcuLi9jb21wb25lbnRzL0ZlYXR1cmUnO1xyXG5pbXBvcnQgQmVuZWZpdCBmcm9tICcuLi9jb21wb25lbnRzL0JlbmVmaXQnO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdGltb25pYWxzJztcclxuaW1wb3J0IEZhcSBmcm9tICcuLi9jb21wb25lbnRzL0ZhcSc7XHJcbmltcG9ydCBGb290ZXJXaXRoQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJXaXRoQ291bnRlcic7XHJcbmltcG9ydCBQYWdlTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZU5hdic7XHJcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb24nO1xyXG5pbXBvcnQgYnJhbmQgZnJvbSAnLi4vcHVibGljL3RleHQvYnJhbmQnO1xyXG5cclxuY29uc3Qgc2VjdGlvbk1hcmdpbiA9IG1hcmdpbiA9PiAobWFyZ2luICogMjApO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbWFpbldyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQgOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBzcGFjZUJvdHRvbToge1xyXG4gICAgbWFyZ2luQm90dG9tOiBzZWN0aW9uTWFyZ2luKHRoZW1lLnNwYWNpbmcoKSksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBzZWN0aW9uTWFyZ2luKDYpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3BhY2VUb3A6IHtcclxuICAgIG1hcmdpblRvcDogc2VjdGlvbk1hcmdpbih0aGVtZS5zcGFjaW5nKCkpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogc2VjdGlvbk1hcmdpbig2KSxcclxuICAgIH1cclxuICB9LFxyXG4gIHNwYWNlQm90dG9tU2hvcnQ6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogc2VjdGlvbk1hcmdpbih0aGVtZS5zcGFjaW5nKCkgLyAyKSxcclxuICB9LFxyXG4gIHNwYWNlVG9wU2hvcnQ6IHtcclxuICAgIG1hcmdpblRvcDogc2VjdGlvbk1hcmdpbih0aGVtZS5zcGFjaW5nKCkgLyAyKSxcclxuICB9LFxyXG4gIGNvbnRhaW5lcldyYXA6IHtcclxuICAgIG1hcmdpblRvcDogLTQwLFxyXG4gICAgJyYgPiBzZWN0aW9uJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgfVxyXG4gIH1cclxufSkpO1xyXG5cclxuZnVuY3Rpb24gTGFuZGluZyhwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLm9ubHkoJ21kJykpO1xyXG4gIGNvbnN0IHsgb25Ub2dnbGVEYXJrLCBvblRvZ2dsZURpciB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgeyBicmFuZC5jcnlwdG8ubmFtZSB9XHJcbiAgICAgICAgICAmbmJzcDsgLSBIb21lIFBhZ2VcclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImhvbWVcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluV3JhcH0+XHJcbiAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgb25Ub2dnbGVEYXJrPXtvblRvZ2dsZURhcmt9XHJcbiAgICAgICAgICBvblRvZ2dsZURpcj17b25Ub2dnbGVEaXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyV3JhcH0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImJhbm5lclwiPlxyXG4gICAgICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBpZD1cInByb21vdGlvbnNcIj5cclxuICAgICAgICAgICAgPFByb21vdGlvbiAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlXCIgY2xhc3NOYW1lPXtpc1RhYmxldCA/IGNsYXNzZXMuc3BhY2VUb3BTaG9ydCA6ICcnfT5cclxuICAgICAgICAgICAgPEZlYXR1cmUgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwiYmVuZWZpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZVRvcFNob3J0fT5cclxuICAgICAgICAgICAgPEJlbmVmaXQgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlVG9wfT5cclxuICAgICAgICAgICAgPFRlc3RpbW9uaWFscyAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJmYXFcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2VUb3B9PlxyXG4gICAgICAgICAgICA8RmFxIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbiAvPlxyXG4gICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxGb290ZXJXaXRoQ291bnRlciB0b2dnbGVEaXI9e29uVG9nZ2xlRGlyfSAvPlxyXG4gICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgPFBhZ2VOYXYgLz5cclxuICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9zY3JpcHRzL3BhcnRpY2xlcy5taW4uanNcIiAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL3NjcmlwdHMvc3RhdHMubWluLmpzXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkxhbmRpbmcuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcclxuICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJywgJ2NyeXB0by1sYW5kaW5nJ10sXHJcbn0pO1xyXG5cclxuTGFuZGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgb25Ub2dnbGVEYXJrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uVG9nZ2xlRGlyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NE5DandoTFMwZ1IyVnVaWEpoZEc5eU9pQkJaRzlpWlNCSmJHeDFjM1J5WVhSdmNpQXlNaTR3TGpBc0lGTldSeUJGZUhCdmNuUWdVR3gxWnkxSmJpQXVJRk5XUnlCV1pYSnphVzl1T2lBMkxqQXdJRUoxYVd4a0lEQXBJQ0F0TFQ0TkNqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpVEdGNVpYSmZNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaURRb0pJSFpwWlhkQ2IzZzlJakFnTUNBMU1USWdOVEV5SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0ExTVRJZ05URXlPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0RRbzhjM1I1YkdVZ2RIbHdaVDBpZEdWNGRDOWpjM01pUGcwS0NTNXpkREI3Wm1sc2JEcDFjbXdvSTFOV1IwbEVYekZmS1R0emRISnZhMlU2ZFhKc0tDTlRWa2RKUkY4eVh5azdjM1J5YjJ0bExYZHBaSFJvT2pFMk8zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qRXdPMzBOQ2drdWMzUXhlMlpwYkd3NmJtOXVaVHR6ZEhKdmEyVTZJMFpHUmtaR1JqdHpkSEp2YTJVdGQybGtkR2c2TVRjN2MzUnliMnRsTFcxcGRHVnliR2x0YVhRNk1UQTdmUTBLUEM5emRIbHNaVDROQ2p4blBnMEtDVHhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpVTFaSFNVUmZNVjhpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElpQjRNVDBpTVRRMkxqWTNPU0lnZVRFOUlqUTBOUzR6TkRrMklpQjRNajBpTXpZMUxqTXlNU0lnZVRJOUlqWTJMalkxTURRaVBnMEtDUWs4YzNSdmNDQWdiMlptYzJWMFBTSXdMakU0TkRZaUlITjBlV3hsUFNKemRHOXdMV052Ykc5eU9pTTBRMEZHTlRBaUx6NE5DZ2tKUEhOMGIzQWdJRzltWm5ObGREMGlNQzR5TWpjM0lpQnpkSGxzWlQwaWMzUnZjQzFqYjJ4dmNqb2pPVVpDTnpKRklpOCtEUW9KQ1R4emRHOXdJQ0J2Wm1aelpYUTlJakF1T0RFNE9TSWdjM1I1YkdVOUluTjBiM0F0WTI5c2IzSTZJMFpHUXpFd055SXZQZzBLQ1R3dmJHbHVaV0Z5UjNKaFpHbGxiblErRFFvSlBHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSlRWa2RKUkY4eVh5SWdaM0poWkdsbGJuUlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpSUhneFBTSXlPUzR6TlRjNUlpQjVNVDBpTWpVMklpQjRNajBpTkRneUxqWTBNakVpSUhreVBTSXlOVFlpUGcwS0NRazhjM1J2Y0NBZ2IyWm1jMlYwUFNJd0xqRTRNVEVpSUhOMGVXeGxQU0p6ZEc5d0xXTnZiRzl5T2lOR1JrTXhNRGNpTHo0TkNna0pQSE4wYjNBZ0lHOW1abk5sZEQwaU1DNDNOekl6SWlCemRIbHNaVDBpYzNSdmNDMWpiMnh2Y2pvak9VWkNOekpGSWk4K0RRb0pDVHh6ZEc5d0lDQnZabVp6WlhROUlqQXVPREUxTkNJZ2MzUjViR1U5SW5OMGIzQXRZMjlzYjNJNkl6UkRRVVkxTUNJdlBnMEtDVHd2YkdsdVpXRnlSM0poWkdsbGJuUStEUW9KUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRUTTNMalFzTVRjd0xqZDJNVGN3TGpaak1Dd3lOUzR6TERFekxqVXNORGd1Tnl3ek5TNDFMRFl4TGpSTU1qSXdMalVzTkRnNFl6SXhMamtzTVRJdU55dzBPU3d4TWk0M0xEY3dMamtzTUd3eE5EY3VOeTA0TlM0ekRRb0pDV015TVM0NUxURXlMamNzTXpVdU5TMHpOaTR4TERNMUxqVXROakV1TkZZeE56QXVOMk13TFRJMUxqTXRNVE11TlMwME9DNDNMVE0xTGpVdE5qRXVORXd5T1RFdU5Td3lOR010TWpFdU9TMHhNaTQzTFRRNUxURXlMamN0TnpBdU9Td3dURGN5TGpnc01UQTVMak1OQ2drSlF6VXdMamtzTVRJeUxETTNMalFzTVRRMUxqUXNNemN1TkN3eE56QXVOM29pTHo0TkNnazhaejROQ2drSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTVNJZ1pEMGlUVEUwTVM0M0xETXlOeTQ1VmpFNE1TNDBTREUyTUhZeE16QXVNa2d5TWpoMk1UWXVNMGd4TkRFdU4zb2lMejROQ2drSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTVNJZ1pEMGlUVEkyTmk0MExESTRNUzQwZGkwM05DNHlhREUzTGpOMk56TXVNV013TERJeExqVXNNVEl1TVN3ek5TNHhMRE0wTGpVc016VXVNV015TWk0MExEQXNNelF1TnkweE15NDJMRE0wTGpjdE16VXVNWFl0TnpNdU1XZ3hOeTR6ZGpjMExqSU5DZ2tKQ1dNd0xESTVMamt0TVRjdU5pdzBPUzR5TFRVeUxEUTVMakpETWpnekxqY3NNek13TGpZc01qWTJMalFzTXpFeExESTJOaTQwTERJNE1TNDBlaUl2UGcwS0NUd3ZaejROQ2p3dlp6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NE5Danh6ZG1jZ2QybGtkR2c5SWpZek1IQjRJaUJvWldsbmFIUTlJalExTW5CNElpQjJhV1YzUW05NFBTSXdJREFnTmpNd0lEUTFNaUlnZG1WeWMybHZiajBpTVM0eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWo0TkNpQWdJQ0E4SVMwdElFZGxibVZ5WVhSdmNqb2dVMnRsZEdOb0lEVTFMaklnS0RjNE1UZ3hLU0F0SUdoMGRIQnpPaTh2YzJ0bGRHTm9ZWEJ3TG1OdmJTQXRMVDROQ2lBZ0lDQThkR2wwYkdVK1IzSnZkWEFnTkR3dmRHbDBiR1UrRFFvZ0lDQWdQR1JsYzJNK1EzSmxZWFJsWkNCM2FYUm9JRk5yWlhSamFDNDhMMlJsYzJNK0RRb2dJQ0FnUEdjZ2FXUTlJbEJoWjJVdE1TSWdjM1J5YjJ0bFBTSnViMjVsSWlCemRISnZhMlV0ZDJsa2RHZzlJakVpSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdabWxzYkMxdmNHRmphWFI1UFNJd0xqRTRJajROQ2lBZ0lDQWdJQ0FnUEdjZ2FXUTlJa2R5YjNWd0xUSWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RBdU1EQXdNREF3TENBdE5Ea3VNREF3TURBd0tTSWdabWxzYkQwaUkwWkdSa1pHUmlJK0RRb2dJQ0FnSUNBZ0lDQWdJQ0E4WnlCcFpEMGlSM0p2ZFhBdE5DSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTUM0d01EQXdNREFzSURBdU5EQXdOREEwS1NJK0RRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUUXhNUzQxTWpZM09UVXNNVGszTGpjeU5EZzBOeUJETkRFeExqVXlOamM1TlN3eU1EWXVNak0zTWpVNUlEUXhOaTR3T0RBd01Ua3NNakUwTGpFd016UTNOQ0EwTWpNdU5EY3hOalF6TERJeE9DNHpOVGsyT0NCTU5UQXlMamN4TmpReU5pd3lOak11T1RreU1EUTFJRU0xTVRBdU1UQTRNRFE1TERJMk9DNHlORGd5TlRJZ05URTVMakl4TkRRNU9Td3lOamd1TWpRNE1qVXlJRFV5Tmk0Mk1EWXhNaklzTWpZekxqazVNakEwTlNCTU5qQTFMamcxTURrd05Td3lNVGd1TXpVNU5qZ2dRell4TXk0eU5ESTFNamtzTWpFMExqRXdNelEzTkNBMk1UY3VOemsxTnpVekxESXdOaTR5TXpjeU5Ua2dOakUzTGpjNU5UYzFNeXd4T1RjdU56STBPRFEzSUV3Mk1UY3VOemsxTnpVekxERXdOaTQwTlRrM016VWdRell4Tnk0M09UVTNOVE1zT1RjdU9UUTJPVFF3TmlBMk1UTXVNalF5TlRJNUxEa3dMakE0TVRFd056Z2dOakExTGpnMU1Ea3dOU3c0TlM0NE1qUTFNVGszSUV3MU1qWXVOakEyTVRJeUxEUXdMakU1TWpFMU5EZ2dRelV4T1M0eU1UUTBPVGtzTXpVdU9UTTFPVFE0TkNBMU1UQXVNVEE0TURRNUxETTFMamt6TlRrME9EUWdOVEF5TGpjeE5qUXlOaXcwTUM0eE9USXhOVFE0SUV3ME1qTXVORGN4TmpRekxEZzFMamd5TkRVeE9UY2dRelF4Tmk0d09EQXdNVGtzT1RBdU1EZ3hNVEEzT0NBME1URXVOVEkyTnprMUxEazNMamswTmprME1EWWdOREV4TGpVeU5qYzVOU3d4TURZdU5EVTVOek0xSUV3ME1URXVOVEkyTnprMUxERTVOeTQzTWpRNE5EY2dXaUlnYVdROUlrWnBiR3d0TVNJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9OVEUwTGpZMk1USTNOQ3dnTVRVeUxqQTVNakV3TUNrZ2NtOTBZWFJsS0Mwek16QXVNREF3TURBd0tTQjBjbUZ1YzJ4aGRHVW9MVFV4TkM0Mk5qRXlOelFzSUMweE5USXVNRGt5TVRBd0tTQWlQand2Y0dGMGFENE5DaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NQ3cwTXpBdU56ZzROVFEzSUVNd0xEUXpPUzR6TURBNU5pQTBMalUxTXpJeU5EWXlMRFEwTnk0eE5qY3hOelVnTVRFdU9UUTBPRFEzT1N3ME5URXVOREl6TXpneElFdzVNUzR4T0RrMk16RTBMRFE1Tnk0d05UVTNORFlnUXprNExqVTRNVEkxTkRjc05UQXhMak14TVRrMU1pQXhNRGN1TmpnM056QTBMRFV3TVM0ek1URTVOVElnTVRFMUxqQTNPVE15Tnl3ME9UY3VNRFUxTnpRMklFd3hPVFF1TXpJME1URXhMRFExTVM0ME1qTXpPREVnUXpJd01TNDNNVFUzTXpRc05EUTNMakUyTnpFM05TQXlNRFl1TWpZNE9UVTVMRFF6T1M0ek1EQTVOaUF5TURZdU1qWTRPVFU1TERRek1DNDNPRGcxTkRjZ1RESXdOaTR5TmpnNU5Ua3NNek01TGpVeU16UXpOaUJETWpBMkxqSTJPRGsxT1N3ek16RXVNREV3TmpReElESXdNUzQzTVRVM016UXNNekl6TGpFME5EZ3dPU0F4T1RRdU16STBNVEV4TERNeE9DNDRPRGd5TWlCTU1URTFMakEzT1RNeU55d3lOek11TWpVMU9EVTJJRU14TURjdU5qZzNOekEwTERJMk9DNDVPVGsyTkRrZ09UZ3VOVGd4TWpVME55d3lOamd1T1RrNU5qUTVJRGt4TGpFNE9UWXpNVFFzTWpjekxqSTFOVGcxTmlCTU1URXVPVFEwT0RRM09Td3pNVGd1T0RnNE1qSWdRelF1TlRVek1qSTBOaklzTXpJekxqRTBORGd3T1NBd0xETXpNUzR3TVRBMk5ERWdNQ3d6TXprdU5USXpORE0ySUV3d0xEUXpNQzQzT0RnMU5EY2dXaUlnYVdROUlrWnBiR3d0TVNJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9NVEF6TGpFek5EUTNPU3dnTXpnMUxqRTFOVGd3TVNrZ2NtOTBZWFJsS0Mwek5qQXVNREF3TURBd0tTQjBjbUZ1YzJ4aGRHVW9MVEV3TXk0eE16UTBOemtzSUMwek9EVXVNVFUxT0RBeEtTQWlQand2Y0dGMGFENE5DaUFnSUNBZ0lDQWdJQ0FnSUR3dlp6NE5DaUFnSUNBZ0lDQWdQQzluUGcwS0lDQWdJRHd2Wno0TkNqd3ZjM1puUGc9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeU1pNHdMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p4emRtY2dkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlUR0Y1WlhKZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpRFFvSklIWnBaWGRDYjNnOUlqQWdNQ0F4TWpnd0lESXpOeUlnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdNVEk0TUNBeU16YzdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0TkNqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrRFFvSkxuTjBNSHRtYVd4c09pTXpNRE13TXpBN2ZRMEtQQzl6ZEhsc1pUNE5DangwYVhSc1pUNURiMjFpYVc1bFpDQlRhR0Z3WlR3dmRHbDBiR1UrRFFvOFpHVnpZejVEY21WaGRHVmtJSGRwZEdnZ1UydGxkR05vTGp3dlpHVnpZejROQ2p4bklHbGtQU0pRWVdkbExURWlQZzBLQ1R4d1lYUm9JR2xrUFNKRGIyMWlhVzVsWkMxVGFHRndaU0lnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUVEV5T0RBc01DNDRWakl6TjBnd1ZqZ3pZemt1T1N3eUxqa3NNakFzTlM0eExETXdMak1zTmk0NGJEYzNOQzQ1TERFeU15NDVZelU0TGpJc09TNHpMREV4Tnk0NUxUSXNNVFk0TGpjdE16SU5DZ2tKVERFeU9EQXNNQzQ0ZWlJdlBnMEtQQzluUGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0TkNqeHpkbWNnZDJsa2RHZzlJakV5T0RCd2VDSWdhR1ZwWjJoMFBTSXlNemR3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREV5T0RBZ01qTTNJaUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGcwS0lDQWdJRHdoTFMwZ1IyVnVaWEpoZEc5eU9pQlRhMlYwWTJnZ05UVXVNaUFvTnpneE9ERXBJQzBnYUhSMGNITTZMeTl6YTJWMFkyaGhjSEF1WTI5dElDMHRQZzBLSUNBZ0lEeDBhWFJzWlQ1RGIyMWlhVzVsWkNCVGFHRndaVHd2ZEdsMGJHVStEUW9nSUNBZ1BHUmxjMk0rUTNKbFlYUmxaQ0IzYVhSb0lGTnJaWFJqYUM0OEwyUmxjMk0rRFFvZ0lDQWdQR2NnYVdROUlsQmhaMlV0TVNJZ2MzUnliMnRsUFNKdWIyNWxJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRWlJR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK0RRb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHhNamd3TERBdU56a3dNekF5T1RZNElFd3hNamd3TERJek55Qk1NQ3d5TXpjZ1REQXNPRE11TURRM016TXdOeUJET1M0NE56azBNREkzT0N3NE5TNDVNREE0TmpNeUlERTVMams1TXpZek9UZ3NPRGd1TVRZNU1ETXlJRE13TGpJNU9URTFPVEVzT0RrdU9ERTJOamczTWlCTU9EQTFMakl6TkRZeE5Td3lNVE11TnpFME1ERTBJRU00TmpNdU5EWTVOelE0TERJeU15NHdNalEyT1RZZ09USXpMakV5TnprMU1pd3lNVEV1TmprNE56RWdPVGN6TGpnNU9UQXpMREU0TVM0Mk9UTTBNallnVERFeU9EQXNNQzQzT1RBek1ESTVOamdnV2lJZ2FXUTlJa052YldKcGJtVmtMVk5vWVhCbElpQm1hV3hzUFNJalJrWkdSa1pHSWo0OEwzQmhkR2crRFFvZ0lDQWdQQzluUGcwS1BDOXpkbWMrXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejROQ2p3aExTMGdSMlZ1WlhKaGRHOXlPaUJCWkc5aVpTQkpiR3gxYzNSeVlYUnZjaUF5TWk0d0xqQXNJRk5XUnlCRmVIQnZjblFnVUd4MVp5MUpiaUF1SUZOV1J5QldaWEp6YVc5dU9pQTJMakF3SUVKMWFXeGtJREFwSUNBdExUNE5Danh6ZG1jZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVRHRjVaWEpmTVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZUQwaU1IQjRJaUI1UFNJd2NIZ2lEUW9KSUhacFpYZENiM2c5SWpBZ01DQXhNamd3SURReE1DSWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01USTRNQ0EwTVRBN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajROQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStEUW9KTG5OME1IdG1hV3hzT2lNek1ETXdNekE3ZlEwS1BDOXpkSGxzWlQ0TkNqeDBhWFJzWlQ1RGIyMWlhVzVsWkNCVGFHRndaVHd2ZEdsMGJHVStEUW84WkdWell6NURjbVZoZEdWa0lIZHBkR2dnVTJ0bGRHTm9Mand2WkdWell6NE5DanhuSUdsa1BTSlFZV2RsTFRFaVBnMEtDVHh3WVhSb0lHbGtQU0pEYjIxaWFXNWxaQzFUYUdGd1pTSWdZMnhoYzNNOUluTjBNQ0lnWkQwaVRURXlPREFzTXpjMVl5MDBNQzR5TFRRM0xqTXRPRE11TWkwNU5pNHlMVEV5T1M0eExURTBOaTQzWXkwMk1DNDBMVFkyTGpVdE1UVXhMall0T1RZdE1qTTVMalV0TnpjdU5Fd3hOVEl1Tml3ek1URU5DZ2tKWXkwMU55NDNMREV5TGpJdE1UQTVMak1zTkRRdU1TMHhORFlzT1RBdU0wd3dMRFF3T1M0M1ZqQm9NVEk0TUZZek56Vk1NVEk0TUN3ek56VjZJaTgrRFFvOEwyYytEUW84TDNOMlp6NE5DZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejROQ2p4emRtY2dkMmxrZEdnOUlqRXlPREJ3ZUNJZ2FHVnBaMmgwUFNJME1UQndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lERXlPREFnTkRFd0lpQjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQZzBLSUNBZ0lEd2hMUzBnUjJWdVpYSmhkRzl5T2lCVGEyVjBZMmdnTlRVdU1pQW9Oemd4T0RFcElDMGdhSFIwY0hNNkx5OXphMlYwWTJoaGNIQXVZMjl0SUMwdFBnMEtJQ0FnSUR4MGFYUnNaVDVEYjIxaWFXNWxaQ0JUYUdGd1pUd3ZkR2wwYkdVK0RRb2dJQ0FnUEdSbGMyTStRM0psWVhSbFpDQjNhWFJvSUZOclpYUmphQzQ4TDJSbGMyTStEUW9nSUNBZ1BHY2dhV1E5SWxCaFoyVXRNU0lnYzNSeWIydGxQU0p1YjI1bElpQnpkSEp2YTJVdGQybGtkR2c5SWpFaUlHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krRFFvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweE1qZ3dMakF3TURBeUxETTNOQzQ1T1RrNU9EVWdRekV5TXprdU9ERXlOREVzTXpJM0xqY3hOemMzTWlBeE1UazJMamMyTlRNeExESTNPQzQ0TVRVMk5qRWdNVEUxTUM0NE5UZzNNaXd5TWpndU1qa3pOalV6SUVNeE1Ea3dMalF6TnpRMUxERTJNUzQzT1RjMk56SWdPVGs1TGpJNE1qVXhOU3d4TXpJdU16TTBOREkwSURreE1TNHpOekU1TWprc01UVXdMamc0TmpNMElFd3hOVEl1TmpReE9EYzNMRE14TVM0d01ESTBNRElnUXprMExqa3pPREEwTnpNc016SXpMakUzT1Rjek55QTBNeTR6TURFeE9EWXhMRE0xTlM0eE16TXdORFFnTmk0Mk5UVXlNek15TWl3ME1ERXVNelF3TVRFNElFd3dMRFF3T1M0M016RTNNellnVERBc01DQk1NVEk0TUN3d0lFd3hNamd3TERNM05DNDVPVGs1TmlCYUlpQnBaRDBpUTI5dFltbHVaV1F0VTJoaGNHVWlJR1pwYkd3OUlpTkdSa1pHUmtZaVBqd3ZjR0YwYUQ0TkNpQWdJQ0E4TDJjK0RRbzhMM04yWno0PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQThBQUFBUkNBWUFBQUYxRGNZM0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFONUpSRUZVT0JGallBQ0MvLy8vTnpBQ2lmMGdEaGlBUktCTUJnWlVLWkF3U0dRT2tGYUdxV0dDTVZCb1pGUFFEYm1McmtVWlhlQXUyQ3dVTTBBaVFBRm5JRlVEbGtVUUxZeU1qSHZSTFVGSVExbm9kbUFxQUJyakNCUnR3WkFCaWtIbElGSkFkMGdCOFdZUURWUE1DR0lBQlZZREtSR1lJSkIrQTlRWml0ZHhlQjFHSzBtb2Y5NGd1UlRFQkxrV0ZBWVFnTk9mU0FvNGdld29JQTRIWWxhWU9KRCtEY1FyZ1hnWjBNVHZNSEZRT0lCQ3JBS0lkV0dDUk5DWGdXbzY4QVlpSVVQd2h1UGcxaHdOZEI0b0FFZ0JJUFhSNENRSjB3VU1lWktpQ2dBcE1HRTl1cXVyS2dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURRQUFBQTdDQVlBQUFGREtabW9BQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBL2xKUkVGVWFBWHRtb2R5MURBUWhrTW9vUlBLUUtoNS8rY0tmU0NoUXdJRS9zOTNxNUZsTlovUFRobnZ6TWF5dEt1dFhwWEx4a1liSHJkZkYyOFhnczVkZTkreFJ2amNWTWRXMkdudkRDWWhPMmhjVG9GbFI2aGcwMzFOZjY4YVIvaThIWGFFVTRiams3NjNsSGtpMFk5eTR1OW9jTnNqZUtGMjFDT3RhVDJHc0hsWkhVamRxR1Z3RTFSRnoxRXZHeXN4d1F0akgrYUhTNEh1NFF4MVBZdEdsZDBYUmZzOFlNeSsrck1TSCtLVWhHY2FRVUlNN3F2enBqK0FIZGtVOFlpZEZqZTh6cHJtTHE3K1hrUHAwL1NKaitNN3Iwek85ODdTZk9PUERYY2liZ1BlTTVreE1ha1V4cXFNZ1prOGpFMlNURkJQSzlla29Od1RIZ24vQ2ZrWUh3Z1BoYzVPdFhzRHlZOTJUY1VxY0dNMnRFblR3N3BwanY4b3BtK0Z5VlBEelBsVWlCdGZDdjhLR3lETjBXYWxkRjlNa2YyTGl4RWNEMTZXdGY5Z1V4NzZzNjNBTVphN09xck1nam91cWUzQWRYelpmUmVaMnZrN2RGWUZrbDkyaDZQY1lYTTJsU1dzRExEVFI5bkYydGFYcmZjU0pDdExURkE0R2RzOXRuMmZoSitEUWZodFg3S25Oc1UyQ2pXQ2ZFYnFGeVVGdHlENGk3QUtZT3dEYk02SjQzWGhUMkhTQW8yMW9GWVF5d0NGRVErOEUvNFdjdkloVzc4S2kxQnlYU2tHdWZnVmhSc0JMbUw1U0I1eWpGQlBVaGhhWWhlRm1FWHNNVWxURmo0V3dGb2dESHdXTEhTdmhLMzQrWUt5aEdLc2hheWlSZE5ycFhoMDVucm5UcktwYzd6d0dJWTBxUzdFcmxtT2FJd0pmQUk3amFReHBXaHVUaEpiVXdocTdKZ0ZyUnpPMlhXejY1d0g1bVJ3cnVqUm9LZ2U0am9PdW1NdUV4eW8zd3NiR0gzaG0yd3A5d1daZGRrMTM0Z2lUOXR6SEd1TVBYdHJjeEtoZDEyMjVvKzIzWEtTMU1EaTNDYmU3bnpaL0xNWFQwTE1kVEZpck1MQ1g4SVB3aXRDTXBXdDhXdGhFV29GMlVSczh0a0dJNENVZGJjaWFtZWhyNkRzWk10QjVyd2x4SzJwRWtmQzRHNE9DTlZKSTlvaXJNdWdTNUowVjhpeENhRFlIQWgvOEJJQjZLQ0hENEFPZXZnR3dSQ0QxcVZVWDJka0RlNWpFT2xER3RrdlRHT2tUU3hkT1kyVG5zZ3JRc2tnZnJ2anNwWXFBSENWUTJyd25BS1FUMnJhYjRoSGF1OExrL0pEZ3daN1NNTEdncW9NTVlPSUFEK3o4bDc2b01kU3VPKzgvamRNcFh3clBMS0lrRmJVL0RmQ3RaWlJ6VGMyWUFQM1JCejc5d2tqQ3hqQUpkSlpNd2E5MFJuZGdXME1Bb0hxMVhoQmZxcittdTZiWnN5cDBtNklNck5CUTd3M0JlOGNvU204UEVUR0hLRWgzcHVDZDQ3UUZGNGVJdU5jUnNnT1RyVS9JZzV4NEZpOHB2c3hEVFozL0JNa3VPci9yb2oxeElEZE5rY2ZiRG5nQlRoWDU2R0ZTWXUvZGo3aTdzQytyMTVuZW4reU5iZlJwM2luWVJGS3lUN3pkd29wdytpdjhsQnVnb3F4d1JsU2lsQk9CLzlNRDkycWw0VW5kaStYTTY2dlV1dHlSa2VuSVJIcVRMYnNpS1ZOU0R2R0pXVWo0ejloRzZ6N0k1WWl5UUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ZsYWctbG9nby1iNmMwYTNiNTJkYWUyYmY5OGYxOTlkYzYwMjJkYzY4OS5wbmdcIjsiLCJjb25zdCBpbWdBUEkgPSB7XHJcbiAgYXZhdGFyOiBbXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2dpcmwuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybDIuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybDMuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybDQuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybDUuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybC5zdmcnLFxyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9ib3kuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfYm95Mi5zdmcnLFxyXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9ib3kzLnN2ZycsXHJcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2JveTQuc3ZnJyxcclxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfYm95NS5zdmcnXHJcbiAgXSxcclxuICBwaG90bzogW1xyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NzV4OTAwL2UxYWQ5Mi9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS85Njd4NzI1L2VhNmQ2ZC9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMjgweDg0OS9lYTZkYjcvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vOTY3eDcyNS9iYjZkZWEvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA0OHg3MDEvNmQ2ZmVhL2ZmZicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwLzZkYzBlYS9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS85NzB4NzI1LzZkZWFhNi9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUxeDcwMC9iOGRlMjcvZmZmJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MXg3MDEvZGU5ZjI3L2ZmZicsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwL2VmNDU0NS9mZmYnLFxyXG4gICAgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9mZmM0YzQvNzU3NTc1JyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDQ0Ny9mZGZmYzQvNzU3NTc1JyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTI4MHg4NTEvYzRmZmQ3Lzc1NzU3NScsXHJcbiAgICAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY0MHg0MjUvYzRjZGZmLzc1NzU3NScsXHJcbiAgXSxcclxuICBjcnlwdG86IFtcclxuICAgICcvaW1hZ2VzL2NyeXB0by9oZXhhLW9yYW5nZS5wbmcnLFxyXG4gICAgJy9pbWFnZXMvY3J5cHRvL2hleGEtZ3JlZW4ucG5nJyxcclxuICAgICcvaW1hZ2VzL2NyeXB0by9oZXhhLW9yYW5nZS5wbmcnLFxyXG4gICAgJy9pbWFnZXMvY3J5cHRvL2hleGEtZ3JlZW4ucG5nJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjAweDM0MS9jYWMxNDIvRkZGRkZGJyxcclxuICAgICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTI4MHg2NzcvMjA0NDczL0ZGRkZGRicsXHJcbiAgICAnL2ltYWdlcy9jcnlwdG8vY3J5cHRvX2xhcHRvcC5wbmcnXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGltZ0FQSTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgY3J5cHRvOiB7XHJcbiAgICBuYW1lOiAnQ29pbnonLFxyXG4gICAgZGVzYzogJ0x1eGlyZW4gQ3J5cHRvY3VycmVuY3kgLSBSZWFjdCBTaW5nbGUgTGFuZGluZyBQYWdlIFRlbXBsYXRlJyxcclxuICAgIHByZWZpeDogJ2x1eGlyZW4nLFxyXG4gICAgZm9vdGVyVGV4dDogJ0x1eGlyZW4gVGhlbWUgMjAyMScsXHJcbiAgICBsb2dvVGV4dDogJ0x1eGlyZW4gQ29pbnonLFxyXG4gICAgcHJvamVjdE5hbWU6ICdDb2lueicsXHJcbiAgICB1cmw6ICdsdXhpcmVhY3QudXgtbWFlc3Ryby5jb20vY29pbnonLFxyXG4gICAgaW1nOiAnL3N0YXRpYy9pbWFnZXMvY3J5cHRvLWxvZ28ucG5nJyxcclxuICAgIG5vdGlmTXNnOiAnRG9uZWMgc2l0IGFtZXQgbnVsbGEgc2VkIGFyY3UgcHVsdmluYXIgdWx0cmljaWVzIGNvbW1vZG8gaWQgbGlndWxhLidcclxuICB9XHJcbn07XHJcbiIsImNvbnN0IGxpbmsgPSB7XHJcbiAgY3J5cHRvOiB7XHJcbiAgICBob21lOiAnLycsXHJcbiAgICBjb250YWN0OiAnL2NvbnRhY3QnLFxyXG4gICAgbG9naW46ICcvbG9naW4nLFxyXG4gICAgcmVnaXN0ZXI6ICcvcmVnaXN0ZXInXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGluaztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGV4dEFsaWduID0gbWFrZVN0eWxlcyh7XHJcbiAgdGV4dENlbnRlcjoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgdGV4dExlZnQ6IHtcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnXHJcbiAgfSxcclxuICB0ZXh0UmlnaHQ6IHtcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0J1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRmxvYXQgPSBtYWtlU3R5bGVzKHtcclxuICBmbG9hdExlZnQ6IHtcclxuICAgIGZsb2F0OiAnbGVmdCdcclxuICB9LFxyXG4gIGZsb2F0UmlnaHQ6IHtcclxuICAgIGZsb2F0OiAncmlnaHQnXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGV4dCA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgIGZvbnRTaXplOiA0OCxcclxuICAgIGxpbmVIZWlnaHQ6ICc3MnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBmb250U2l6ZTogMzgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4J1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMjgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0NHB4J1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlMjoge1xyXG4gICAgZm9udFNpemU6IDM2LFxyXG4gICAgbGluZUhlaWdodDogJzU2cHgnLFxyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4J1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMjQsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICczNnB4JyxcclxuICAgIH1cclxuICB9LFxyXG4gIHN1YnRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICBmb250U2l6ZTogMjgsXHJcbiAgICBsaW5lSGVpZ2h0OiAnNDRweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzZweCcsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgbGluZUhlaWdodDogJzI4cHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHN1YnRpdGxlMjoge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcclxuICAgIGZvbnRTaXplOiAyMixcclxuICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFyYWdyYXBoOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgbGluZUhlaWdodDogJzI0cHgnXHJcbiAgfSxcclxuICBjYXB0aW9uOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgbGluZUhlaWdodDogJzI0cHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgbGluZUhlaWdodDogJzIycHgnLFxyXG4gICAgfSxcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VIaWRkZW4gPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbGdEb3duOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbGcnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZERvd246IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHNtRG93bjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgeHNEb3duOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBsZ1VwOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWRVcDoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHNtVXA6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHVzZTogdHJ1ZVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Td2lwZWFibGVEcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9ab29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93VXB3YXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xhbmd1YWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5nc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmNob3ItbGluay1zbW9vdGgtc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFuaW1hdGVkLXNsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb3VudHVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBhcmFsbGF4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbC1wYXJhbGxheFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxzcHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtd293XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXlvdXR1YmVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==