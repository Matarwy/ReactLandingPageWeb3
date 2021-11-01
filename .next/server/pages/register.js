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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Forms/AuthFrame.js":
/*!***************************************!*\
  !*** ./components/Forms/AuthFrame.js ***!
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/images/crypto-logo.svg */ "./public/images/crypto-logo.svg");
/* harmony import */ var _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Parallax_Hexagonal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Parallax/Hexagonal */ "./components/Parallax/Hexagonal.js");
/* harmony import */ var _Decoration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Decoration */ "./components/Forms/Decoration.js");
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Forms\\AuthFrame.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















function AuthFrame(props) {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_13__["useText"])();
  const {
    children,
    title,
    subtitle
  } = props;
  return __jsx("div", {
    className: classes.pageWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.deco, classes.lower),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_Decoration__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.parallax, classes.parallaxLeft),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_Parallax_Hexagonal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.parallax, classes.parallaxRight),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(_Parallax_Hexagonal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
    mdUp: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.logo, classes.logoHeader),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_11__["default"].crypto.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    component: "span",
    className: text.subtitle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_10___default.a.crypto.projectName)))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8___default.a, {
    maxWidth: "lg",
    className: classes.innerWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.formBox, 'fragment-fadeUp'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_11__["default"].crypto.home,
    className: classes.backtohome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "ion-ios-home-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx("i", {
    className: "ion-ios-arrow-round-back",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.decoInner),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx(_Decoration__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.authFrame,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    md: 5,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
    smDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.greeting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 23
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: text.subtitle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_10___default.a.crypto.projectName)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    gutterBottom: true,
    variant: "h4",
    className: text.title2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h6",
    className: text.paragraph,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, subtitle), __jsx("div", {
    className: classes.decoSm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "55px",
    height: "49px",
    viewBox: "0 0 55 49",
    version: "1.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  }, __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("linearGradient", {
    x1: "34.4430017%",
    y1: "14.3140713%",
    x2: "131.062329%",
    y2: "100%",
    id: "linearGradient-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 27
    }
  }, __jsx("stop", {
    stopColor: theme.palette.secondary.main,
    offset: "0%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }), __jsx("stop", {
    stopColor: theme.palette.secondary.light,
    offset: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }))), __jsx("g", {
    id: "Auth-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M3.56921938,35.4705736 C3.56921938,37.4675408 4.62878153,39.3129133 6.34885575,40.3113968 L24.789583,51.0165091 C26.5096572,52.0149927 28.6287815,52.0149927 30.3488557,51.0165091 L48.789583,40.3113968 C50.5096572,39.3129133 51.5692194,37.4675408 51.5692194,35.4705736 L51.5692194,14.0602595 C51.5692194,12.0632028 50.5096572,10.2179199 48.789583,9.21934677 L30.3488557,-1.4857655 C28.6287815,-2.48424909 26.5096572,-2.48424909 24.789583,-1.4857655 L6.34885575,9.21934677 C4.62878153,10.2179199 3.56921938,12.0632028 3.56921938,14.0602595 L3.56921938,35.4705736 Z",
    id: "AuthFill-1",
    fill: "url(#linearGradient-sm)",
    transform: "translate(27.569219, 24.765372) rotate(-330.000000) translate(-27.569219, -24.765372) ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 27
    }
  }))))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    md: 7,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: classes.formWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, children)))))));
}

AuthFrame.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
AuthFrame.defaultProps = {
  subtitle: ''
};
/* harmony default export */ __webpack_exports__["default"] = (AuthFrame);

/***/ }),

/***/ "./components/Forms/Checkbox.js":
/*!**************************************!*\
  !*** ./components/Forms/Checkbox.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-material-ui-form-validator */ "react-material-ui-form-validator");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Forms\\Checkbox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const red300 = _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default.a['500'];

const styles = theme => ({
  checkbox: {
    left: 42,
    fontSize: 12,
    color: red300,
    position: 'absolute',
    marginTop: theme.spacing()
  }
});

class CheckboxValidatorElement extends react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4__["ValidatorComponent"] {
  errorText() {
    const {
      isValid
    } = this.state;
    const {
      classes
    } = this.props;

    if (isValid) {
      return null;
    }

    return __jsx("div", {
      className: classes.checkbox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, this.getErrorMessage());
  }

  render() {
    const _this$props = this.props,
          {
      errorMessages,
      validators,
      requiredError,
      value,
      checked,
      validatorListener,
      classes
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["errorMessages", "validators", "requiredError", "value", "checked", "validatorListener", "classes"]);

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
      value: value,
      checked: checked
    }, rest, {
      ref: r => {
        this.input = r;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    })), this.errorText());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(CheckboxValidatorElement));

/***/ }),

/***/ "./components/Forms/Decoration.js":
/*!****************************************!*\
  !*** ./components/Forms/Decoration.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Decoration; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Forms\\Decoration.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Decoration() {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return __jsx("div", {
    className: classes.deco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("svg", {
    width: "1274px",
    height: "1018px",
    viewBox: "0 0 1274 1018",
    version: "1.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("mask", {
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("use", {
    xlinkHref: "#path-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  })), __jsx("use", {
    fill: "url(#frmDecoLinearGradient-1)",
    transform: "translate(607.224351, 494.641126) rotate(-45.000000) translate(-607.224351, -494.641126) ",
    xlinkHref: "#path-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/Forms/Register.js":
/*!**************************************!*\
  !*** ./components/Forms/Register.js ***!
  \**************************************/
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
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-material-ui-form-validator */ "react-material-ui-form-validator");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Checkbox */ "./components/Forms/Checkbox.js");
/* harmony import */ var _SocialAuth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SocialAuth */ "./components/Forms/SocialAuth.js");
/* harmony import */ var _Title_TitleSecondary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Title/TitleSecondary */ "./components/Title/TitleSecondary.js");
/* harmony import */ var _AuthFrame__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AuthFrame */ "./components/Forms/AuthFrame.js");
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Forms\\Register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function Register(props) {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_11__["useText"])();
  const {
    t
  } = props;
  const {
    0: check,
    1: setCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_8__["ValidatorForm"].addValidationRule('isPasswordMatch', value => {
      if (value !== values.password) {
        return false;
      }

      return true;
    });
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_8__["ValidatorForm"].addValidationRule('isTruthy', value => value);
  });

  const handleChange = name => event => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: event.target.value
    }));
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('data submited');
  };

  return __jsx(_AuthFrame__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: t('common:register_title'),
    subtitle: t('common:register_subtitle'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.head,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_Title_TitleSecondary__WEBPACK_IMPORTED_MODULE_14__["default"], {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, t('common:register')), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "small",
    className: classes.buttonLink,
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_10__["default"].crypto.login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.icon, classes.signArrow),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "arrow_forward"), t('common:register_already'))), __jsx(_SocialAuth__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: classes.separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, t('common:register_or'))), __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_8__["ValidatorForm"], {
    onError: errors => console.log(errors),
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_8__["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:register_name'),
    onChange: handleChange('name'),
    name: "name",
    value: values.name,
    validators: ['required'],
    errorMessages: ['This field is required'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_8__["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:register_email'),
    onChange: handleChange('email'),
    name: "email",
    value: values.email,
    validators: ['required', 'isEmail'],
    errorMessages: ['This field is required', 'Email is not valid'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_8__["TextValidator"], {
    variant: "filled",
    type: "password",
    className: classes.input,
    label: t('common:register_password'),
    validators: ['required'],
    onChange: handleChange('password'),
    errorMessages: ['This field is required'],
    name: "password",
    value: values.password,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_8__["TextValidator"], {
    variant: "filled",
    type: "password",
    className: classes.input,
    label: t('common:register_confirm'),
    validators: ['isPasswordMatch', 'required'],
    errorMessages: ['Password mismatch', 'This field is required'],
    onChange: handleChange('confirmPassword'),
    name: "confirm",
    value: values.confirmPassword,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.btnArea, classes.flex),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    control: __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
      validators: ['isTruthy'],
      errorMessages: "This field is required",
      checked: check,
      value: check,
      onChange: e => handleCheck(e),
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }),
    label: __jsx("span", {
      className: text.caption,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }
    }, t('common:form_terms'), "\xA0", __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    }, t('common:form_privacy'))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "contained",
    type: "submit",
    color: "secondary",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, t('common:continue'))))));
}

Register.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_9__["withTranslation"])(['common'])(Register));

/***/ }),

/***/ "./components/Forms/SocialAuth.js":
/*!****************************************!*\
  !*** ./components/Forms/SocialAuth.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Forms\\SocialAuth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function SocialAuth() {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx("div", {
    className: classes.socmedSideLogin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    className: classes.naviBtn,
    type: "button",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "ion-logo-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), "Facebook"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    className: classes.blueBtn,
    type: "button",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "ion-logo-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), "Twitter"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    className: classes.redBtn,
    type: "button",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "ion-logo-google",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), "Google"));
}

/* harmony default export */ __webpack_exports__["default"] = (SocialAuth);

/***/ }),

/***/ "./components/Forms/form-style.js":
/*!****************************************!*\
  !*** ./components/Forms/form-style.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);


const contactStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  title: {},
  pageWrap: {
    padding: theme.spacing(11, 5),
    position: 'relative',
    textAlign: 'center',
    overflow: 'hidden',
    background: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 0)
    },
    '& $title': {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      [theme.breakpoints.down('xs')]: {
        fontSize: 32
      }
    },
    '& a': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  frmDeco: {},
  innerWrap: {
    textAlign: 'left'
  },
  fullFromWrap: {
    background: theme.palette.background.paper,
    padding: theme.spacing(9, 0)
  },
  formBox: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])(theme.palette.primary.dark, 0.4) : theme.palette.primary.light,
    boxShadow: '0 0 12px 2px rgba(0, 0, 0, 0.05)'
  },
  desc: {
    fontSize: 20,
    textAlign: 'center',
    padding: theme.spacing(0, 12),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
      fontSize: 16
    }
  },
  light: {},
  input: {
    width: '100%',
    '& label': {
      left: theme.spacing(0.5)
    },
    '& > div': {
      overflow: 'hidden',
      background: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#eeeeee',
      '&:hover': {
        background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])(theme.palette.background.paper, 0.1)
      },
      '& input, textarea': {
        paddingLeft: theme.spacing(2),
        '&:focus': {
          background: theme.palette.background.default
        }
      }
    },
    '&$light': {
      '& label': {
        color: theme.palette.common.white
      },
      '& > div': {
        border: `1px solid ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.primary.light, 0.5)}`,
        '& input': {
          color: theme.palette.common.white,
          '&:focus': {
            background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.text.hint, 0.2)
          },
          '&:hover': {
            background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.text.hint, 0.2)
          }
        }
      }
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    padding: theme.spacing(0, 15, 10),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 6, 10)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2, 10)
    }
  },
  formHelper: {
    display: 'flex',
    marginTop: theme.spacing(),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  flex: {},
  btnArea: {
    marginTop: theme.spacing(5),
    '& label': {
      position: 'relative'
    },
    '& button': {
      marginTop: theme.spacing(2)
    },
    '& span': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 14
      },
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
      }
    },
    '&$flex': {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    }
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  invert: {},
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 20,
    '&$invert': {
      '& i': {
        color: theme.palette.text.secondary
      }
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 32,
      color: theme.palette.common.white
    },
    '& > span i:first-child': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-child': {
        opacity: 0
      },
      '& > span i:last-child': {
        right: 30,
        opacity: 1
      }
    }
  },
  check: {
    '& svg': {
      fill: theme.palette.primary.main
    }
  },
  authFrame: {
    display: 'block',
    position: 'relative'
  },
  greeting: {
    padding: theme.spacing(15, 6),
    height: '100%',
    '& h4': {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold
    },
    '& h6': {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    '&$logoHeader': {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64
    },
    '& p, span': {
      display: 'block',
      textTransform: 'uppercase',
      fontSize: 24,
      paddingBottom: 4,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      '& a': {
        display: 'none'
      }
    }
  },
  signArrow: {},
  formWrap: {
    minHeight: 760,
    background: theme.palette.background.paper,
    position: 'relative',
    paddingBottom: theme.spacing(10),
    overflow: 'hidden',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(8)
    },
    '& $frmDeco': {
      left: '58.333333%',
      transform: 'translateX(-72%)',
      bottom: '-75px'
    }
  },
  socmedSideLogin: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      display: 'block'
    },
    '& > *': {
      color: theme.palette.common.white,
      width: 160,
      padding: theme.spacing(),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0, 0.5)
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(2),
        width: '100%'
      }
    },
    '& i': {
      color: theme.palette.common.white,
      marginRight: theme.spacing()
    }
  },
  blueBtn: {
    background: '#28aae1',
    '&:hover': {
      background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])('#28aae1', 0.2)
    }
  },
  naviBtn: {
    background: '#3b579d',
    '&:hover': {
      background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])('#3b579d', 0.2)
    }
  },
  redBtn: {
    background: '#dd493c',
    '&:hover': {
      background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])('#dd493c', 0.2)
    }
  },
  separator: {
    margin: `${theme.spacing(5)}px auto`,
    maxWidth: 340,
    minWidth: 256,
    textAlign: 'center',
    position: 'relative',
    '& p': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 12
      }
    },
    '&:before, &:after': {
      content: '""',
      borderTop: `1px solid ${theme.palette.text.hint}`,
      top: '50%',
      position: 'absolute',
      width: '20%'
    },
    '&:before': {
      left: 0
    },
    '&:after': {
      right: 0
    }
  },
  lower: {},
  deco: {
    width: '100%',
    height: '150%',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    top: -300,
    transform: 'scale(1.1)',
    transformOrigin: 'center',
    [theme.breakpoints.down('xs')]: {
      '& svg': {
        left: '-150%',
        position: 'relative'
      }
    },
    '&$lower': {
      top: -150
    }
  },
  parallax: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    top: 0
  },
  parallaxLeft: {
    '& > div': {
      top: -1500
    }
  },
  parallaxRight: {
    '& > div': {
      top: -400
    }
  },
  decoInner: {
    width: '100%',
    height: '150%',
    position: 'absolute',
    overflow: 'hidden',
    left: -114,
    top: -300,
    transform: 'scale(1.1)',
    transformOrigin: 'center',
    '& $deco': {
      [theme.breakpoints.up(1281)]: {
        left: 50
      }
    }
  },
  decoSm: {
    textAlign: 'center',
    marginTop: theme.spacing(10)
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (contactStyles);

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

/***/ "./components/Title/TitleSecondary.js":
/*!********************************************!*\
  !*** ./components/Title/TitleSecondary.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TitleSecondary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _title_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title-style */ "./components/Title/title-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Title\\TitleSecondary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function TitleSecondary(props) {
  const classes = Object(_title_style__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    children,
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
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.titleSecondary, setAlign(align)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, children));
}
TitleSecondary.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
TitleSecondary.defaultProps = {
  align: 'left'
};

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

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Forms_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Forms/Register */ "./components/Forms/Register.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\pages\\register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Register() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_2___default.a.crypto.name, "\xA0 - Register")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_components_Forms_Register__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })));
}

Register.getInitialProps = async () => ({
  namespacesRequired: ['common', 'hosting-landing']
});

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./public/images/crypto-logo.svg":
/*!***************************************!*\
  !*** ./public/images/crypto-logo.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTtzdHJva2U6dXJsKCNTVkdJRF8yXyk7c3Ryb2tlLXdpZHRoOjE2O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MTc7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxnPg0KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTQ2LjY3OSIgeTE9IjQ0NS4zNDk2IiB4Mj0iMzY1LjMyMSIgeTI9IjY2LjY1MDQiPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjE4NDYiIHN0eWxlPSJzdG9wLWNvbG9yOiM0Q0FGNTAiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4yMjc3IiBzdHlsZT0ic3RvcC1jb2xvcjojOUZCNzJFIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuODE4OSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGQzEwNyIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyOS4zNTc5IiB5MT0iMjU2IiB4Mj0iNDgyLjY0MjEiIHkyPSIyNTYiPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjE4MTEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkMxMDciLz4NCgkJPHN0b3AgIG9mZnNldD0iMC43NzIzIiBzdHlsZT0ic3RvcC1jb2xvcjojOUZCNzJFIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuODE1NCIgc3R5bGU9InN0b3AtY29sb3I6IzRDQUY1MCIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3LjQsMTcwLjd2MTcwLjZjMCwyNS4zLDEzLjUsNDguNywzNS41LDYxLjRMMjIwLjUsNDg4YzIxLjksMTIuNyw0OSwxMi43LDcwLjksMGwxNDcuNy04NS4zDQoJCWMyMS45LTEyLjcsMzUuNS0zNi4xLDM1LjUtNjEuNFYxNzAuN2MwLTI1LjMtMTMuNS00OC43LTM1LjUtNjEuNEwyOTEuNSwyNGMtMjEuOS0xMi43LTQ5LTEyLjctNzAuOSwwTDcyLjgsMTA5LjMNCgkJQzUwLjksMTIyLDM3LjQsMTQ1LjQsMzcuNCwxNzAuN3oiLz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0MS43LDMyNy45VjE4MS40SDE2MHYxMzAuMkgyMjh2MTYuM0gxNDEuN3oiLz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2Ni40LDI4MS40di03NC4yaDE3LjN2NzMuMWMwLDIxLjUsMTIuMSwzNS4xLDM0LjUsMzUuMWMyMi40LDAsMzQuNy0xMy42LDM0LjctMzUuMXYtNzMuMWgxNy4zdjc0LjINCgkJCWMwLDI5LjktMTcuNiw0OS4yLTUyLDQ5LjJDMjgzLjcsMzMwLjYsMjY2LjQsMzExLDI2Ni40LDI4MS40eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"

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

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

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

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

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

/***/ "react-material-ui-form-validator":
/*!***************************************************!*\
  !*** external "react-material-ui-form-validator" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-material-ui-form-validator");

/***/ }),

/***/ "react-scroll-parallax":
/*!****************************************!*\
  !*** external "react-scroll-parallax" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9BdXRoRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL0RlY29yYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL1NvY2lhbEF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9mb3JtLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFyYWxsYXgvSGV4YWdvbmFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFyYWxsYXgvcGFyYWxsYXgtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS9UaXRsZVNlY29uZGFyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpdGxlL3RpdGxlLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9jcnlwdG8tbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RleHQvYnJhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RleHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS9jb21tb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1hdGVyaWFsLXVpLWZvcm0tdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsLXBhcmFsbGF4XCIiXSwibmFtZXMiOlsiQXV0aEZyYW1lIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidGhlbWUiLCJ1c2VUaGVtZSIsInRleHQiLCJ1c2VUZXh0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsInN1YnRpdGxlIiwicGFnZVdyYXAiLCJjbHN4IiwiZGVjbyIsImxvd2VyIiwicGFyYWxsYXgiLCJwYXJhbGxheExlZnQiLCJwYXJhbGxheFJpZ2h0IiwibG9nbyIsImxvZ29IZWFkZXIiLCJyb3V0ZXJMaW5rIiwiY3J5cHRvIiwiaG9tZSIsInN1YnRpdGxlMiIsImJyYW5kIiwicHJvamVjdE5hbWUiLCJpbm5lcldyYXAiLCJmb3JtQm94IiwiYmFja3RvaG9tZSIsImRlY29Jbm5lciIsImF1dGhGcmFtZSIsImdyZWV0aW5nIiwidGl0bGUyIiwicGFyYWdyYXBoIiwiZGVjb1NtIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJsaWdodCIsImZvcm1XcmFwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJyZWQzMDAiLCJyZWQiLCJzdHlsZXMiLCJjaGVja2JveCIsImxlZnQiLCJmb250U2l6ZSIsImNvbG9yIiwicG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiQ2hlY2tib3hWYWxpZGF0b3JFbGVtZW50IiwiVmFsaWRhdG9yQ29tcG9uZW50IiwiZXJyb3JUZXh0IiwiaXNWYWxpZCIsInN0YXRlIiwiZ2V0RXJyb3JNZXNzYWdlIiwicmVuZGVyIiwiZXJyb3JNZXNzYWdlcyIsInZhbGlkYXRvcnMiLCJyZXF1aXJlZEVycm9yIiwidmFsdWUiLCJjaGVja2VkIiwidmFsaWRhdG9yTGlzdGVuZXIiLCJyZXN0IiwiciIsImlucHV0Iiwid2l0aFN0eWxlcyIsIkRlY29yYXRpb24iLCJSZWdpc3RlciIsInQiLCJjaGVjayIsInNldENoZWNrIiwidXNlU3RhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsInVzZUVmZmVjdCIsIlZhbGlkYXRvckZvcm0iLCJhZGRWYWxpZGF0aW9uUnVsZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQ2hlY2siLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiaGVhZCIsImJ1dHRvbkxpbmsiLCJyb3V0ZUxpbmsiLCJsb2dpbiIsImljb24iLCJzaWduQXJyb3ciLCJzZXBhcmF0b3IiLCJlcnJvcnMiLCJidG5BcmVhIiwiZmxleCIsImUiLCJjYXB0aW9uIiwiZnVuYyIsIndpdGhUcmFuc2xhdGlvbiIsIlNvY2lhbEF1dGgiLCJzb2NtZWRTaWRlTG9naW4iLCJuYXZpQnRuIiwiYmx1ZUJ0biIsInJlZEJ0biIsImNvbnRhY3RTdHlsZXMiLCJtYWtlU3R5bGVzIiwicGFkZGluZyIsInRleHRBbGlnbiIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJicmVha3BvaW50cyIsImRvd24iLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRCb2xkIiwidHlwZSIsInByaW1hcnkiLCJkYXJrIiwidGV4dFRyYW5zZm9ybSIsInRleHREZWNvcmF0aW9uIiwiZm9udFdlaWdodFJlZ3VsYXIiLCJmcm1EZWNvIiwiZnVsbEZyb21XcmFwIiwicGFwZXIiLCJib3JkZXJSYWRpdXMiLCJkYXJrZW4iLCJib3hTaGFkb3ciLCJkZXNjIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsImNvbW1vbiIsIndoaXRlIiwiYm9yZGVyIiwiZmFkZSIsImhpbnQiLCJmb3JtIiwiZm9ybUhlbHBlciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwicmlnaHRJY29uIiwibWFyZ2luTGVmdCIsImludmVydCIsImhlaWdodCIsInpJbmRleCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwicmlnaHQiLCJmaWxsIiwiZm9udFdlaWdodE1lZGl1bSIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJtaW5IZWlnaHQiLCJ1cCIsInRyYW5zZm9ybSIsImJvdHRvbSIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsImNvbnRlbnQiLCJib3JkZXJUb3AiLCJ0b3AiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJQYXJhbGxheENsb3VkIiwicGFyYWxsYXhXcmFwIiwiZG90c1dyYXAiLCJpbm5lclBhcmFsbGF4IiwibGFyZ2UiLCJoZXhhV3JhcCIsInJpZ2h0VG9wQmFjayIsImJpZyIsImhleGFCYWNrIiwicmlnaHRUb3BGcm9udCIsInNtYWxsIiwibGVmdEJvdHRvbUJhY2siLCJsZWZ0Qm90dG9tRnJvbnQiLCJwYXJhbGxheFN0eWxlcyIsImJsYWNrIiwiaGV4YVRvcCIsIlRpdGxlU2Vjb25kYXJ5IiwiYWxpZ24iLCJzZXRBbGlnbiIsImFsaWdubWVudCIsImNlbnRlciIsInRpdGxlU2Vjb25kYXJ5IiwidGl0bGVTdHlsZXMiLCJsaW5lSGVpZ2h0IiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHRMYW5ndWFnZSIsImZhbGxiYWNrTG5nIiwiaW5pdEltbWVkaWF0ZSIsImxvY2FsZVBhdGgiLCJyZWFjdCIsInVzZVN1c3BlbnNlIiwibG9jYWxlU3VicGF0aHMiLCJlbmciLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJwcmVmaXgiLCJsb2dvVGV4dCIsImltZyIsIm5vdGlmTXNnIiwiY292ZXIiLCJsaW5rIiwiY29udGFjdCIsInJlZ2lzdGVyIiwidXNlVGV4dEFsaWduIiwidGV4dENlbnRlciIsInRleHRMZWZ0IiwidGV4dFJpZ2h0IiwidXNlRmxvYXQiLCJmbG9hdExlZnQiLCJmbG9hdCIsImZsb2F0UmlnaHQiLCJ1c2VIaWRkZW4iLCJsZ0Rvd24iLCJtZERvd24iLCJzbURvd24iLCJ4c0Rvd24iLCJsZ1VwIiwibWRVcCIsInNtVXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QThCO0FBQzVCakIsYUFBTyxFQUFFO0FBRG1CO0FBRDFCO0FBL0JzQyxDQUFMLENBQU4sQ0FBNUIsQzs7Ozs7Ozs7Ozs7QUM1RlAscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3JlZ2lzdGVyLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBicmFuZCBmcm9tICd+L3B1YmxpYy90ZXh0L2JyYW5kJztcclxuaW1wb3J0IHJvdXRlckxpbmsgZnJvbSAnfi9wdWJsaWMvdGV4dC9saW5rJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2NyeXB0by1sb2dvLnN2Zyc7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCBQYXJhbGxheCBmcm9tICcuLi9QYXJhbGxheC9IZXhhZ29uYWwnO1xyXG5pbXBvcnQgRGVjb3JhdGlvbiBmcm9tICcuL0RlY29yYXRpb24nO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZm9ybS1zdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBBdXRoRnJhbWUocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgdGl0bGUsIHN1YnRpdGxlIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2VXcmFwfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5kZWNvLCBjbGFzc2VzLmxvd2VyKX0+XHJcbiAgICAgICAgPERlY29yYXRpb24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucGFyYWxsYXgsIGNsYXNzZXMucGFyYWxsYXhMZWZ0KX0+XHJcbiAgICAgICAgPFBhcmFsbGF4IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnBhcmFsbGF4LCBjbGFzc2VzLnBhcmFsbGF4UmlnaHQpfT5cclxuICAgICAgICA8UGFyYWxsYXggLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxIaWRkZW4gbWRVcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxvZ28sIGNsYXNzZXMubG9nb0hlYWRlcil9PlxyXG4gICAgICAgICAgPGEgaHJlZj17cm91dGVyTGluay5jcnlwdG8uaG9tZX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwic3BhblwiIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9PlxyXG4gICAgICAgICAgICAgIHticmFuZC5jcnlwdG8ucHJvamVjdE5hbWV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9IaWRkZW4+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lcldyYXB9PlxyXG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5mb3JtQm94LCAnZnJhZ21lbnQtZmFkZVVwJyl9PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gaHJlZj17cm91dGVyTGluay5jcnlwdG8uaG9tZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2t0b2hvbWV9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24taW9zLWhvbWUtb3V0bGluZVwiIC8+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1pb3MtYXJyb3ctcm91bmQtYmFja1wiIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRlY29Jbm5lcil9PlxyXG4gICAgICAgICAgICA8RGVjb3JhdGlvbiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRoRnJhbWV9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17NX0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmVldGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JyYW5kLmNyeXB0by5wcm9qZWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg0XCIgY2xhc3NOYW1lPXt0ZXh0LnRpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXt0ZXh0LnBhcmFncmFwaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IHN1YnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb1NtfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1NXB4XCIgaGVpZ2h0PVwiNDlweFwiIHZpZXdCb3g9XCIwIDAgNTUgNDlcIiB2ZXJzaW9uPVwiMS4xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT1cIjM0LjQ0MzAwMTclXCIgeTE9XCIxNC4zMTQwNzEzJVwiIHgyPVwiMTMxLjA2MjMyOSVcIiB5Mj1cIjEwMCVcIiBpZD1cImxpbmVhckdyYWRpZW50LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59IG9mZnNldD1cIjAlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHR9IG9mZnNldD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJBdXRoLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMuNTY5MjE5MzgsMzUuNDcwNTczNiBDMy41NjkyMTkzOCwzNy40Njc1NDA4IDQuNjI4NzgxNTMsMzkuMzEyOTEzMyA2LjM0ODg1NTc1LDQwLjMxMTM5NjggTDI0Ljc4OTU4Myw1MS4wMTY1MDkxIEMyNi41MDk2NTcyLDUyLjAxNDk5MjcgMjguNjI4NzgxNSw1Mi4wMTQ5OTI3IDMwLjM0ODg1NTcsNTEuMDE2NTA5MSBMNDguNzg5NTgzLDQwLjMxMTM5NjggQzUwLjUwOTY1NzIsMzkuMzEyOTEzMyA1MS41NjkyMTk0LDM3LjQ2NzU0MDggNTEuNTY5MjE5NCwzNS40NzA1NzM2IEw1MS41NjkyMTk0LDE0LjA2MDI1OTUgQzUxLjU2OTIxOTQsMTIuMDYzMjAyOCA1MC41MDk2NTcyLDEwLjIxNzkxOTkgNDguNzg5NTgzLDkuMjE5MzQ2NzcgTDMwLjM0ODg1NTcsLTEuNDg1NzY1NSBDMjguNjI4NzgxNSwtMi40ODQyNDkwOSAyNi41MDk2NTcyLC0yLjQ4NDI0OTA5IDI0Ljc4OTU4MywtMS40ODU3NjU1IEw2LjM0ODg1NTc1LDkuMjE5MzQ2NzcgQzQuNjI4NzgxNTMsMTAuMjE3OTE5OSAzLjU2OTIxOTM4LDEyLjA2MzIwMjggMy41NjkyMTkzOCwxNC4wNjAyNTk1IEwzLjU2OTIxOTM4LDM1LjQ3MDU3MzYgWlwiIGlkPVwiQXV0aEZpbGwtMVwiIGZpbGw9XCJ1cmwoI2xpbmVhckdyYWRpZW50LXNtKVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNy41NjkyMTksIDI0Ljc2NTM3Mikgcm90YXRlKC0zMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTI3LjU2OTIxOSwgLTI0Ljc2NTM3MikgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezd9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtV3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5BdXRoRnJhbWUucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5BdXRoRnJhbWUuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN1YnRpdGxlOiAnJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGcmFtZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHJlZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XHJcbmltcG9ydCB7IFZhbGlkYXRvckNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWZvcm0tdmFsaWRhdG9yJztcclxuXHJcbmNvbnN0IHJlZDMwMCA9IHJlZFsnNTAwJ107XHJcblxyXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xyXG4gIGNoZWNrYm94OiB7XHJcbiAgICBsZWZ0OiA0MixcclxuICAgIGZvbnRTaXplOiAxMixcclxuICAgIGNvbG9yOiByZWQzMDAsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygpXHJcbiAgfVxyXG59KTtcclxuXHJcbmNsYXNzIENoZWNrYm94VmFsaWRhdG9yRWxlbWVudCBleHRlbmRzIFZhbGlkYXRvckNvbXBvbmVudCB7XHJcbiAgZXJyb3JUZXh0KCkge1xyXG4gICAgY29uc3QgeyBpc1ZhbGlkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveH0+XHJcbiAgICAgICAge3RoaXMuZ2V0RXJyb3JNZXNzYWdlKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZXJyb3JNZXNzYWdlcyxcclxuICAgICAgdmFsaWRhdG9ycyxcclxuICAgICAgcmVxdWlyZWRFcnJvcixcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIGNoZWNrZWQsXHJcbiAgICAgIHZhbGlkYXRvckxpc3RlbmVyLFxyXG4gICAgICBjbGFzc2VzLFxyXG4gICAgICAuLi5yZXN0XHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgcmVmPXsocikgPT4geyB0aGlzLmlucHV0ID0gcjsgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHt0aGlzLmVycm9yVGV4dCgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQ2hlY2tib3hWYWxpZGF0b3JFbGVtZW50KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2Zvcm0tc3R5bGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVjb3JhdGlvbigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvfT5cclxuICAgICAgPHN2ZyB3aWR0aD1cIjEyNzRweFwiIGhlaWdodD1cIjEwMThweFwiIHZpZXdCb3g9XCIwIDAgMTI3NCAxMDE4XCIgdmVyc2lvbj1cIjEuMVwiPlxyXG4gICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgPG1hc2sgZmlsbD1cIndoaXRlXCI+XHJcbiAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI3BhdGgtMlwiIC8+XHJcbiAgICAgICAgICA8L21hc2s+XHJcbiAgICAgICAgICA8dXNlIGZpbGw9XCJ1cmwoI2ZybURlY29MaW5lYXJHcmFkaWVudC0xKVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2MDcuMjI0MzUxLCA0OTQuNjQxMTI2KSByb3RhdGUoLTQ1LjAwMDAwMCkgdHJhbnNsYXRlKC02MDcuMjI0MzUxLCAtNDk0LjY0MTEyNikgXCIgeGxpbmtIcmVmPVwiI3BhdGgtMlwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JGb3JtLCBUZXh0VmFsaWRhdG9yIH0gZnJvbSAncmVhY3QtbWF0ZXJpYWwtdWktZm9ybS12YWxpZGF0b3InO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgcm91dGVMaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICcuL0NoZWNrYm94JztcclxuaW1wb3J0IFNvY2lhbEF1dGggZnJvbSAnLi9Tb2NpYWxBdXRoJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL1RpdGxlL1RpdGxlU2Vjb25kYXJ5JztcclxuaW1wb3J0IEF1dGhGcmFtZSBmcm9tICcuL0F1dGhGcmFtZSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mb3JtLXN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIFJlZ2lzdGVyKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCBbY2hlY2ssIHNldENoZWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6ICcnLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgVmFsaWRhdG9yRm9ybS5hZGRWYWxpZGF0aW9uUnVsZSgnaXNQYXNzd29yZE1hdGNoJywgKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWVzLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICBWYWxpZGF0b3JGb3JtLmFkZFZhbGlkYXRpb25SdWxlKCdpc1RydXRoeScsIHZhbHVlID0+IHZhbHVlKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBldmVudCA9PiB7XHJcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0Q2hlY2soZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIHN1Ym1pdGVkJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoRnJhbWUgdGl0bGU9e3QoJ2NvbW1vbjpyZWdpc3Rlcl90aXRsZScpfSBzdWJ0aXRsZT17dCgnY29tbW9uOnJlZ2lzdGVyX3N1YnRpdGxlJyl9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWR9PlxyXG4gICAgICAgICAgPFRpdGxlIGFsaWduPVwibGVmdFwiPnt0KCdjb21tb246cmVnaXN0ZXInKX08L1RpdGxlPlxyXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uTGlua30gaHJlZj17cm91dGVMaW5rLmNyeXB0by5sb2dpbn0+XHJcbiAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmljb24sIGNsYXNzZXMuc2lnbkFycm93KX0+YXJyb3dfZm9yd2FyZDwvSWNvbj5cclxuICAgICAgICAgICAge3QoJ2NvbW1vbjpyZWdpc3Rlcl9hbHJlYWR5Jyl9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U29jaWFsQXV0aCAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlcGFyYXRvcn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeT57dCgnY29tbW9uOnJlZ2lzdGVyX29yJyl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxWYWxpZGF0b3JGb3JtXHJcbiAgICAgICAgICBvbkVycm9yPXtlcnJvcnMgPT4gY29uc29sZS5sb2coZXJyb3JzKX1cclxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRleHRWYWxpZGF0b3JcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2NvbW1vbjpyZWdpc3Rlcl9uYW1lJyl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCduYW1lJyl9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbJ3JlcXVpcmVkJ119XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzPXtbJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8VGV4dFZhbGlkYXRvclxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnY29tbW9uOnJlZ2lzdGVyX2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbJ3JlcXVpcmVkJywgJ2lzRW1haWwnXX1cclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXM9e1snVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcsICdFbWFpbCBpcyBub3QgdmFsaWQnXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRleHRWYWxpZGF0b3JcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdjb21tb246cmVnaXN0ZXJfcGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e1sncmVxdWlyZWQnXX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzPXtbJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8VGV4dFZhbGlkYXRvclxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2NvbW1vbjpyZWdpc3Rlcl9jb25maXJtJyl9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbJ2lzUGFzc3dvcmRNYXRjaCcsICdyZXF1aXJlZCddfVxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcz17WydQYXNzd29yZCBtaXNtYXRjaCcsICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ119XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdjb25maXJtUGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYnRuQXJlYSwgY2xhc3Nlcy5mbGV4KX0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgY29udHJvbD17KFxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e1snaXNUcnV0aHknXX1cclxuICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcz1cIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja31cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoZWNrfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoZWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXsoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RleHQuY2FwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Zm9ybV90ZXJtcycpfVxyXG4gICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmZvcm1fcHJpdmFjeScpfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cImxhcmdlXCI+XHJcbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjb250aW51ZScpfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVmFsaWRhdG9yRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0F1dGhGcmFtZT5cclxuICApO1xyXG59XHJcblxyXG5cclxuUmVnaXN0ZXIucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NvbW1vbiddKShSZWdpc3Rlcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2Zvcm0tc3R5bGUnO1xyXG5cclxuZnVuY3Rpb24gU29jaWFsQXV0aCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NtZWRTaWRlTG9naW59PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdmlCdG59XHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1sb2dvLWZhY2Vib29rXCIgLz5cclxuICAgICAgICBGYWNlYm9va1xyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibHVlQnRufVxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tbG9nby10d2l0dGVyXCIgLz5cclxuICAgICAgICBUd2l0dGVyXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZEJ0bn1cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLWxvZ28tZ29vZ2xlXCIgLz5cclxuICAgICAgICBHb29nbGVcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29jaWFsQXV0aDtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGZhZGUsIGRhcmtlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcclxuXHJcbmNvbnN0IGNvbnRhY3RTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgdGl0bGU6IHt9LFxyXG4gIHBhZ2VXcmFwOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDExLCA1KSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCwgMCksXHJcbiAgICB9LFxyXG4gICAgJyYgJHRpdGxlJzoge1xyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDMyXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBhJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXJcclxuICAgIH1cclxuICB9LFxyXG4gIGZybURlY286IHt9LFxyXG4gIGlubmVyV3JhcDoge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgfSxcclxuICBmdWxsRnJvbVdyYXA6IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOSwgMCksXHJcbiAgfSxcclxuICBmb3JtQm94OiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGRhcmtlbih0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyaywgMC40KSA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuICAgIGJveFNoYWRvdzogJzAgMCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcclxuICB9LFxyXG4gIGRlc2M6IHtcclxuICAgIGZvbnRTaXplOiAyMCxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEyKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDUpXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICAgIGZvbnRTaXplOiAxNlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGlnaHQ6IHt9LFxyXG4gIGlucHV0OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgJyYgbGFiZWwnOiB7XHJcbiAgICAgIGxlZnQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgIH0sXHJcbiAgICAnJiA+IGRpdic6IHtcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknIDogJyNlZWVlZWUnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4odGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLCAwLjEpXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIGlucHV0LCB0ZXh0YXJlYSc6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0XHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmJGxpZ2h0Jzoge1xyXG4gICAgICAnJiBsYWJlbCc6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmID4gZGl2Jzoge1xyXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2ZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LCAwLjUpfWAsXHJcbiAgICAgICAgJyYgaW5wdXQnOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZSh0aGVtZS5wYWxldHRlLnRleHQuaGludCwgMC4yKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKHRoZW1lLnBhbGV0dGUudGV4dC5oaW50LCAwLjIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZm9ybToge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMTUsIDEwKSxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDYsIDEwKSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyLCAxMCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9ybUhlbHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGZsZXg6IHt9LFxyXG4gIGJ0bkFyZWE6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg1KSxcclxuICAgICcmIGxhYmVsJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgfSxcclxuICAgICcmIGJ1dHRvbic6IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9LFxyXG4gICAgJyYgc3Bhbic6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE0XHJcbiAgICAgIH0sXHJcbiAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lICFpbXBvcnRhbnQnLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYkZmxleCc6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICByaWdodEljb246IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoKVxyXG4gIH0sXHJcbiAgaW52ZXJ0OiB7fSxcclxuICBiYWNrdG9ob21lOiB7XHJcbiAgICB3aWR0aDogODAsXHJcbiAgICBoZWlnaHQ6IDgwLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBtYXJnaW5Ub3A6IDIwLFxyXG4gICAgbWFyZ2luTGVmdDogMjAsXHJcbiAgICB6SW5kZXg6IDIwLFxyXG4gICAgJyYkaW52ZXJ0Jzoge1xyXG4gICAgICAnJiBpJzoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgJyYgaSc6IHtcclxuICAgICAgZm9udFNpemU6IDMyLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcclxuICAgIH0sXHJcbiAgICAnJiA+IHNwYW4gaTpmaXJzdC1jaGlsZCc6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4zcyBlYXNlJ1xyXG4gICAgfSxcclxuICAgICcmID4gc3BhbiBpOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICcmID4gc3BhbiBpOmZpcnN0LWNoaWxkJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmID4gc3BhbiBpOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgcmlnaHQ6IDMwLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBjaGVjazoge1xyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXV0aEZyYW1lOiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBncmVldGluZzoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxNSwgNiksXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICcmIGg0Jzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICB9LFxyXG4gICAgJyYgaDYnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9nb0hlYWRlcjoge30sXHJcbiAgbG9nbzoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICAnJiRsb2dvSGVhZGVyJzoge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDEwXHJcbiAgICB9LFxyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICB3aWR0aDogNjRcclxuICAgIH0sXHJcbiAgICAnJiBwLCBzcGFuJzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiA0LFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGRcclxuICAgIH1cclxuICB9LFxyXG4gIGhlYWQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDUpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAnJiBhJzoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBzaWduQXJyb3c6IHt9LFxyXG4gIGZvcm1XcmFwOiB7XHJcbiAgICBtaW5IZWlnaHQ6IDc2MCxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDUpXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgpXHJcbiAgICB9LFxyXG4gICAgJyYgJGZybURlY28nOiB7XHJcbiAgICAgIGxlZnQ6ICc1OC4zMzMzMzMlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNzIlKScsXHJcbiAgICAgIGJvdHRvbTogJy03NXB4J1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHNvY21lZFNpZGVMb2dpbjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICB9LFxyXG4gICAgJyYgPiAqJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIHdpZHRoOiAxNjAsXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDAuNSlcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBpJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKClcclxuICAgIH1cclxuICB9LFxyXG4gIGJsdWVCdG46IHtcclxuICAgIGJhY2tncm91bmQ6ICcjMjhhYWUxJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJyMyOGFhZTEnLCAwLjIpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmF2aUJ0bjoge1xyXG4gICAgYmFja2dyb3VuZDogJyMzYjU3OWQnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbignIzNiNTc5ZCcsIDAuMiksXHJcbiAgICB9XHJcbiAgfSxcclxuICByZWRCdG46IHtcclxuICAgIGJhY2tncm91bmQ6ICcjZGQ0OTNjJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJyNkZDQ5M2MnLCAwLjIpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VwYXJhdG9yOiB7XHJcbiAgICBtYXJnaW46IGAke3RoZW1lLnNwYWNpbmcoNSl9cHggYXV0b2AsXHJcbiAgICBtYXhXaWR0aDogMzQwLFxyXG4gICAgbWluV2lkdGg6IDI1NixcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmIHAnOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAxMlxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnRleHQuaGludH1gLFxyXG4gICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6ICcyMCUnXHJcbiAgICB9LFxyXG4gICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgfSxcclxuICAgICcmOmFmdGVyJzoge1xyXG4gICAgICByaWdodDogMCxcclxuICAgIH1cclxuICB9LFxyXG4gIGxvd2VyOiB7fSxcclxuICBkZWNvOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTUwJScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB0b3A6IC0zMDAsXHJcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjEpJyxcclxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlcicsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgIGxlZnQ6ICctMTUwJScsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiRsb3dlcic6IHtcclxuICAgICAgdG9wOiAtMTUwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcmFsbGF4OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgfSxcclxuICBwYXJhbGxheExlZnQ6IHtcclxuICAgICcmID4gZGl2Jzoge1xyXG4gICAgICB0b3A6IC0xNTAwLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFyYWxsYXhSaWdodDoge1xyXG4gICAgJyYgPiBkaXYnOiB7XHJcbiAgICAgIHRvcDogLTQwMCxcclxuICAgIH1cclxuICB9LFxyXG4gIGRlY29Jbm5lcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzE1MCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBsZWZ0OiAtMTE0LFxyXG4gICAgdG9wOiAtMzAwLFxyXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKScsXHJcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXInLFxyXG4gICAgJyYgJGRlY28nOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgxMjgxKV06IHtcclxuICAgICAgICBsZWZ0OiA1MFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVjb1NtOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKVxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFN0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IFBhcmFsbGF4LCBQYXJhbGxheFByb3ZpZGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL3BhcmFsbGF4LXN0eWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcmFsbGF4Q2xvdWQoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnBhcmFsbGF4V3JhcCwgY2xhc3Nlcy5kb3RzV3JhcCl9PlxyXG4gICAgICA8UGFyYWxsYXhQcm92aWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmlubmVyUGFyYWxsYXgsIGNsYXNzZXMubGFyZ2UpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhleGFXcmFwfT5cclxuICAgICAgICAgICAgPFBhcmFsbGF4XHJcbiAgICAgICAgICAgICAgeT17WzIwLCAyMF19XHJcbiAgICAgICAgICAgICAgdGFnT3V0ZXI9XCJmaWd1cmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJpZ2h0VG9wQmFjaywgY2xhc3Nlcy5iaWcpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXMuaGV4YUJhY2t9PlxyXG4gICAgICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIvaW1hZ2VzL2NyeXB0by9wYXJhbGxheC1iYWNrMi5zdmcjbWFpblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgICAgIHk9e1syMCwgMjBdfVxyXG4gICAgICAgICAgICAgIHRhZ091dGVyPVwiZmlndXJlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yaWdodFRvcEZyb250LCBjbGFzc2VzLnNtYWxsKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1ODVweFwiIGhlaWdodD1cIjE1MXB4XCIgdmlld0JveD1cIjAgMCA1ODUgMTUxXCIgdmVyc2lvbj1cIjEuMVwiPlxyXG4gICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTQzLjAwMDAwMCwgLTg4LjAwMDAwMClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTMyLjYyMzg2MiwgNzAuOTEyMDMyKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01MjAuNTYxMTczLDE0OC4yNTI2MDMgQzUyMC41NjExNzMsMTUxLjEzMTgwMiA1MjIuMTAxMjM0LDE1My43OTI0MzMgNTI0LjYwMTM0MiwxNTUuMjMyMDMzIEw1NTEuNDA0NzI1LDE3MC42NjY1MDkgQzU1My45MDQ4MzMsMTcyLjEwNjEwOCA1NTYuOTg0OTU1LDE3Mi4xMDYxMDggNTU5LjQ4NTA2MywxNzAuNjY2NTA5IEw1ODYuMjg4NDQ2LDE1NS4yMzIwMzMgQzU4OC43ODg1NTMsMTUzLjc5MjQzMyA1OTAuMzI4NjE1LDE1MS4xMzE4MDIgNTkwLjMyODYxNSwxNDguMjUyNjAzIEw1OTAuMzI4NjE1LDExNy4zODM1MjIgQzU5MC4zMjg2MTUsMTE0LjUwNDE5NCA1ODguNzg4NTUzLDExMS44NDM2OTIgNTg2LjI4ODQ0NiwxMTAuNDAzOTYzIEw1NTkuNDg1MDYzLDk0Ljk2OTQ4NzEgQzU1Ni45ODQ5NTUsOTMuNTI5ODg3OSA1NTMuOTA0ODMzLDkzLjUyOTg4NzkgNTUxLjQwNDcyNSw5NC45Njk0ODcxIEw1MjQuNjAxMzQyLDExMC40MDM5NjMgQzUyMi4xMDEyMzQsMTExLjg0MzY5MiA1MjAuNTYxMTczLDExNC41MDQxOTQgNTIwLjU2MTE3MywxMTcuMzgzNTIyIEw1MjAuNTYxMTczLDE0OC4yNTI2MDMgWlwiIGZpbGw9XCJ1cmwoI2hleGFMaW5lYXJHcmFkaWVudC0yKVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NTUuNDQ0ODk0LCAxMzIuODE3OTk4KSByb3RhdGUoLTMzMC4wMDAwMDApIHRyYW5zbGF0ZSgtNTU1LjQ0NDg5NCwgLTEzMi44MTc5OTgpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGV4YVdyYXB9PlxyXG4gICAgICAgICAgICA8UGFyYWxsYXhcclxuICAgICAgICAgICAgICB5PXtbNDAsIDQwXX1cclxuICAgICAgICAgICAgICB0YWdPdXRlcj1cImZpZ3VyZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubGVmdEJvdHRvbUJhY2ssIGNsYXNzZXMuYmlnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzLmhleGFCYWNrfT5cclxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiL2ltYWdlcy9jcnlwdG8vcGFyYWxsYXgtYmFjazMuc3ZnI21haW5cIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgICA8UGFyYWxsYXhcclxuICAgICAgICAgICAgICB5PXtbNDAsIDQwXX1cclxuICAgICAgICAgICAgICB0YWdPdXRlcj1cImZpZ3VyZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubGVmdEJvdHRvbUZyb250LCBjbGFzc2VzLnNtYWxsKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1ODVweFwiIGhlaWdodD1cIjE1MXB4XCIgdmlld0JveD1cIjAgMCA1ODUgMTUxXCIgdmVyc2lvbj1cIjEuMVwiPlxyXG4gICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTQzLjAwMDAwMCwgLTg4LjAwMDAwMClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTMyLjYyMzg2MiwgNzAuOTEyMDMyKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNSw2Ny4zNjI4MTU4IEMxNSw3MC4yNDIwMTQyIDE2LjU0MDA2MTMsNzIuOTAyNjQ1NiAxOS4wNDAxNjkxLDc0LjM0MjI0NDggTDQ1Ljg0MzU1MTgsODkuNzc2NzIxMiBDNDguMzQzNjU5Nyw5MS4yMTYzMjA0IDUxLjQyMzc4MjIsOTEuMjE2MzIwNCA1My45MjM4OTAxLDg5Ljc3NjcyMTIgTDgwLjcyNzI3MjcsNzQuMzQyMjQ0OCBDODMuMjI3MzgwNiw3Mi45MDI2NDU2IDg0Ljc2NzQ0MTksNzAuMjQyMDE0MiA4NC43Njc0NDE5LDY3LjM2MjgxNTggTDg0Ljc2NzQ0MTksMzYuNDkzNzMzOSBDODQuNzY3NDQxOSwzMy42MTQ0MDY0IDgzLjIyNzM4MDYsMzAuOTUzOTA0MSA4MC43MjcyNzI3LDI5LjUxNDE3NTggTDUzLjkyMzg5MDEsMTQuMDc5Njk5NCBDNTEuNDIzNzgyMiwxMi42NDAxMDAyIDQ4LjM0MzY1OTcsMTIuNjQwMTAwMiA0NS44NDM1NTE4LDE0LjA3OTY5OTQgTDE5LjA0MDE2OTEsMjkuNTE0MTc1OCBDMTYuNTQwMDYxMywzMC45NTM5MDQxIDE1LDMzLjYxNDQwNjQgMTUsMzYuNDkzNzMzOSBMMTUsNjcuMzYyODE1OCBaXCIgZmlsbD1cInVybCgjaGV4YUxpbmVhckdyYWRpZW50LTMpXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQ5Ljg4MzcyMSwgNTEuOTI4MjEwKSByb3RhdGUoLTMzMC4wMDAwMDApIHRyYW5zbGF0ZSgtNDkuODgzNzIxLCAtNTEuOTI4MjEwKVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHBhcmFsbGF4U3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHBhcmFsbGF4V3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgekluZGV4OiAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGlubmVyUGFyYWxsYXg6IHtcclxuICAgIGhlaWdodDogMjUwMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAnJiBmaWd1cmUnOiB7XHJcbiAgICAgIGhlaWdodDogMjUwMCxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIH0sXHJcbiAgICAnJiBmaWd1cmUgPiBkaXYnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHJpZ2h0VG9wQmFjazoge1xyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICByaWdodDogLTI0MFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmlnaHRUb3BGcm9udDoge1xyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICByaWdodDogNTBcclxuICAgIH1cclxuICB9LFxyXG4gIGxlZnRCb3R0b21CYWNrOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgbGVmdDogLTExMFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGVmdEJvdHRvbUZyb250OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgbGVmdDogLTUwXHJcbiAgICB9XHJcbiAgfSxcclxuICBoZXhhQmFjazoge1xyXG4gICAgb3BhY2l0eTogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyAwLjEyIDogMC4wMyxcclxuICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgd2lkdGg6IDU1MCxcclxuICAgIGhlaWdodDogNTAwXHJcbiAgfSxcclxuICBoZXhhVG9wOiB7fSxcclxuICBoZXhhV3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBoZWlnaHQ6IDcwMFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcmFsbGF4U3R5bGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi90aXRsZS1zdHlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaXRsZVNlY29uZGFyeShwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGNoaWxkcmVuLCBhbGlnbiB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgc2V0QWxpZ24gPSBhbGlnbm1lbnQgPT4ge1xyXG4gICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMubGVmdDtcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHJldHVybiBjbGFzc2VzLnJpZ2h0O1xyXG4gICAgICBjYXNlICdjZW50ZXInOlxyXG4gICAgICAgIHJldHVybiBjbGFzc2VzLmNlbnRlcjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5sZWZ0O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGl0bGVTZWNvbmRhcnksIHNldEFsaWduKGFsaWduKSl9PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblRpdGxlU2Vjb25kYXJ5LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBhbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcblRpdGxlU2Vjb25kYXJ5LmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2xlZnQnXHJcbn07XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdGl0bGVTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbGVmdDoge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAnJjphZnRlcic6IHtcclxuICAgICAgbGVmdDogMCxcclxuICAgIH1cclxuICB9LFxyXG4gIHJpZ2h0OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICAnJjphZnRlcic6IHtcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjZW50ZXI6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAnJjphZnRlcic6IHtcclxuICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IC0zNSxcclxuICAgIH1cclxuICB9LFxyXG4gIGRlY286IHtcclxuICAgICcmIHN2Zyc6IHt9XHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgJyYgaDQnOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAzMixcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDhweCdcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDI4LFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0NHB4JyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlU2Vjb25kYXJ5OiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJiBoNCc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgbGluZUhlaWdodDogJzU2cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ4cHgnXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAyOCxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDRweCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBzdHJvbmcnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIH1cclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRpdGxlU3R5bGVzO1xyXG4iLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHQ7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgZGVmYXVsdExhbmd1YWdlOiAnZW5nJyxcclxuICAvLyBvdGhlckxhbmd1YWdlczogWydhcmEnXSxcclxuICBmYWxsYmFja0xuZzogJ2VuZycsXHJcbiAgaW5pdEltbWVkaWF0ZTogZmFsc2UsXHJcbiAgbG9jYWxlUGF0aDogJ3B1YmxpYy9sb2NhbGVzJyxcclxuICByZWFjdDoge1xyXG4gICAgdXNlU3VzcGVuc2U6IGZhbHNlLFxyXG4gIH0sXHJcbiAgbG9jYWxlU3VicGF0aHM6IHtcclxuICAgIC8vIGFyYTogJ2FyJyxcclxuICAgIGVuZzogJ2VuJyxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgYnJhbmQgZnJvbSAnLi4vcHVibGljL3RleHQvYnJhbmQnO1xyXG5pbXBvcnQgUmVnaXN0ZXJGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybXMvUmVnaXN0ZXInO1xyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgeyBicmFuZC5jcnlwdG8ubmFtZSB9XHJcbiAgICAgICAgICAmbmJzcDsgLSBSZWdpc3RlclxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8UmVnaXN0ZXJGb3JtIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5SZWdpc3Rlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xyXG4gIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nLCAnaG9zdGluZy1sYW5kaW5nJ10sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NE5DandoTFMwZ1IyVnVaWEpoZEc5eU9pQkJaRzlpWlNCSmJHeDFjM1J5WVhSdmNpQXlNaTR3TGpBc0lGTldSeUJGZUhCdmNuUWdVR3gxWnkxSmJpQXVJRk5XUnlCV1pYSnphVzl1T2lBMkxqQXdJRUoxYVd4a0lEQXBJQ0F0TFQ0TkNqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpVEdGNVpYSmZNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaURRb0pJSFpwWlhkQ2IzZzlJakFnTUNBMU1USWdOVEV5SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0ExTVRJZ05URXlPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0RRbzhjM1I1YkdVZ2RIbHdaVDBpZEdWNGRDOWpjM01pUGcwS0NTNXpkREI3Wm1sc2JEcDFjbXdvSTFOV1IwbEVYekZmS1R0emRISnZhMlU2ZFhKc0tDTlRWa2RKUkY4eVh5azdjM1J5YjJ0bExYZHBaSFJvT2pFMk8zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qRXdPMzBOQ2drdWMzUXhlMlpwYkd3NmJtOXVaVHR6ZEhKdmEyVTZJMFpHUmtaR1JqdHpkSEp2YTJVdGQybGtkR2c2TVRjN2MzUnliMnRsTFcxcGRHVnliR2x0YVhRNk1UQTdmUTBLUEM5emRIbHNaVDROQ2p4blBnMEtDVHhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpVTFaSFNVUmZNVjhpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElpQjRNVDBpTVRRMkxqWTNPU0lnZVRFOUlqUTBOUzR6TkRrMklpQjRNajBpTXpZMUxqTXlNU0lnZVRJOUlqWTJMalkxTURRaVBnMEtDUWs4YzNSdmNDQWdiMlptYzJWMFBTSXdMakU0TkRZaUlITjBlV3hsUFNKemRHOXdMV052Ykc5eU9pTTBRMEZHTlRBaUx6NE5DZ2tKUEhOMGIzQWdJRzltWm5ObGREMGlNQzR5TWpjM0lpQnpkSGxzWlQwaWMzUnZjQzFqYjJ4dmNqb2pPVVpDTnpKRklpOCtEUW9KQ1R4emRHOXdJQ0J2Wm1aelpYUTlJakF1T0RFNE9TSWdjM1I1YkdVOUluTjBiM0F0WTI5c2IzSTZJMFpHUXpFd055SXZQZzBLQ1R3dmJHbHVaV0Z5UjNKaFpHbGxiblErRFFvSlBHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSlRWa2RKUkY4eVh5SWdaM0poWkdsbGJuUlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpSUhneFBTSXlPUzR6TlRjNUlpQjVNVDBpTWpVMklpQjRNajBpTkRneUxqWTBNakVpSUhreVBTSXlOVFlpUGcwS0NRazhjM1J2Y0NBZ2IyWm1jMlYwUFNJd0xqRTRNVEVpSUhOMGVXeGxQU0p6ZEc5d0xXTnZiRzl5T2lOR1JrTXhNRGNpTHo0TkNna0pQSE4wYjNBZ0lHOW1abk5sZEQwaU1DNDNOekl6SWlCemRIbHNaVDBpYzNSdmNDMWpiMnh2Y2pvak9VWkNOekpGSWk4K0RRb0pDVHh6ZEc5d0lDQnZabVp6WlhROUlqQXVPREUxTkNJZ2MzUjViR1U5SW5OMGIzQXRZMjlzYjNJNkl6UkRRVVkxTUNJdlBnMEtDVHd2YkdsdVpXRnlSM0poWkdsbGJuUStEUW9KUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRUTTNMalFzTVRjd0xqZDJNVGN3TGpaak1Dd3lOUzR6TERFekxqVXNORGd1Tnl3ek5TNDFMRFl4TGpSTU1qSXdMalVzTkRnNFl6SXhMamtzTVRJdU55dzBPU3d4TWk0M0xEY3dMamtzTUd3eE5EY3VOeTA0TlM0ekRRb0pDV015TVM0NUxURXlMamNzTXpVdU5TMHpOaTR4TERNMUxqVXROakV1TkZZeE56QXVOMk13TFRJMUxqTXRNVE11TlMwME9DNDNMVE0xTGpVdE5qRXVORXd5T1RFdU5Td3lOR010TWpFdU9TMHhNaTQzTFRRNUxURXlMamN0TnpBdU9Td3dURGN5TGpnc01UQTVMak1OQ2drSlF6VXdMamtzTVRJeUxETTNMalFzTVRRMUxqUXNNemN1TkN3eE56QXVOM29pTHo0TkNnazhaejROQ2drSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTVNJZ1pEMGlUVEUwTVM0M0xETXlOeTQ1VmpFNE1TNDBTREUyTUhZeE16QXVNa2d5TWpoMk1UWXVNMGd4TkRFdU4zb2lMejROQ2drSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTVNJZ1pEMGlUVEkyTmk0MExESTRNUzQwZGkwM05DNHlhREUzTGpOMk56TXVNV013TERJeExqVXNNVEl1TVN3ek5TNHhMRE0wTGpVc016VXVNV015TWk0MExEQXNNelF1TnkweE15NDJMRE0wTGpjdE16VXVNWFl0TnpNdU1XZ3hOeTR6ZGpjMExqSU5DZ2tKQ1dNd0xESTVMamt0TVRjdU5pdzBPUzR5TFRVeUxEUTVMakpETWpnekxqY3NNek13TGpZc01qWTJMalFzTXpFeExESTJOaTQwTERJNE1TNDBlaUl2UGcwS0NUd3ZaejROQ2p3dlp6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGNyeXB0bzoge1xyXG4gICAgbmFtZTogJ1RyYWRpbmdQbGFuZXQnLFxyXG4gICAgZGVzYzogJ1dpdGggVFAsIG91ciBnb3Zlcm5hbmNlIHRva2VuLCB5b3UgY2FuIGhlbHAgZGVjaWRlIHRoZSBmdXR1cmUgb2YgdGhlIGV4Y2hhbmdlLiBBcyB3ZSBncm93LCB5b3UgZ3JvdyEnLFxyXG4gICAgcHJlZml4OiAndHAnLFxyXG4gICAgbG9nb1RleHQ6ICdUcmFkaW5nUGxhbmV0JyxcclxuICAgIHByb2plY3ROYW1lOiAnVHJhZGluZ1BsYW5ldCcsXHJcbiAgICAvLyB1cmw6ICdsdXhpcmVhY3QudXgtbWFlc3Ryby5jb20vY29pbnonLFxyXG4gICAgaW1nOiAnL3N0YXRpYy9pbWFnZXMvbG9nby5wbmcnLFxyXG4gICAgbm90aWZNc2c6ICdEb25lYyBzaXQgYW1ldCBudWxsYSBzZWQgYXJjdSBwdWx2aW5hciB1bHRyaWNpZXMgY29tbW9kbyBpZCBsaWd1bGEuJyxcclxuICAgIGNvdmVyOiBcIi9zdGF0aWMvaW1hZ2VzL2Vhc3Rlci1iYXR0bGUucG5nXCJcclxuICB9XHJcbn07XHJcbiIsImNvbnN0IGxpbmsgPSB7XHJcbiAgY3J5cHRvOiB7XHJcbiAgICBob21lOiAnLycsXHJcbiAgICBjb250YWN0OiAnL2NvbnRhY3QnLFxyXG4gICAgbG9naW46ICcvbG9naW4nLFxyXG4gICAgcmVnaXN0ZXI6ICcvcmVnaXN0ZXInXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGluaztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGV4dEFsaWduID0gbWFrZVN0eWxlcyh7XHJcbiAgdGV4dENlbnRlcjoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgdGV4dExlZnQ6IHtcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnXHJcbiAgfSxcclxuICB0ZXh0UmlnaHQ6IHtcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0J1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRmxvYXQgPSBtYWtlU3R5bGVzKHtcclxuICBmbG9hdExlZnQ6IHtcclxuICAgIGZsb2F0OiAnbGVmdCdcclxuICB9LFxyXG4gIGZsb2F0UmlnaHQ6IHtcclxuICAgIGZsb2F0OiAncmlnaHQnXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGV4dCA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgIGZvbnRTaXplOiA0OCxcclxuICAgIGxpbmVIZWlnaHQ6ICc3MnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBmb250U2l6ZTogMzgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4J1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMjgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0NHB4J1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlMjoge1xyXG4gICAgZm9udFNpemU6IDM2LFxyXG4gICAgbGluZUhlaWdodDogJzU2cHgnLFxyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4J1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMjQsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICczNnB4JyxcclxuICAgIH1cclxuICB9LFxyXG4gIHN1YnRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICBmb250U2l6ZTogMjgsXHJcbiAgICBsaW5lSGVpZ2h0OiAnNDRweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzZweCcsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgbGluZUhlaWdodDogJzI4cHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHN1YnRpdGxlMjoge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcclxuICAgIGZvbnRTaXplOiAyMixcclxuICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFyYWdyYXBoOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgbGluZUhlaWdodDogJzI0cHgnXHJcbiAgfSxcclxuICBjYXB0aW9uOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgbGluZUhlaWdodDogJzI0cHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgbGluZUhlaWdodDogJzIycHgnLFxyXG4gICAgfSxcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VIaWRkZW4gPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbGdEb3duOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbGcnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZERvd246IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHNtRG93bjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgeHNEb3duOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBsZ1VwOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWRVcDoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHNtVXA6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXRlcmlhbC11aS1mb3JtLXZhbGlkYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGwtcGFyYWxsYXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==