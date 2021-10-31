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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/Forms/Contact.js":
/*!*************************************!*\
  !*** ./components/Forms/Contact.js ***!
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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-material-ui-form-validator */ "react-material-ui-form-validator");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../public/images/crypto-logo.svg */ "./public/images/crypto-logo.svg");
/* harmony import */ var _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Parallax_Hexagonal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Parallax/Hexagonal */ "./components/Parallax/Hexagonal.js");
/* harmony import */ var _Decoration__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Decoration */ "./components/Forms/Decoration.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Checkbox */ "./components/Forms/Checkbox.js");
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Forms\\Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























function Contact(props) {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_23__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_19__["useText"])();
  const {
    t
  } = props;
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down('sm'));
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["ValidatorForm"].addValidationRule('isTruthy', value => value);
  });
  const {
    0: openNotif,
    1: setNotif
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: check,
    1: setCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleChange = name => event => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: event.target.value
    }));
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return __jsx("div", {
    className: classes.pageWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(_Decoration__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.parallax, classes.parallaxLeft),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_Parallax_Hexagonal__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.parallax, classes.parallaxRight),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_Parallax_Hexagonal__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13___default.a, {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    key: "top right",
    open: openNotif,
    autoHideDuration: 4000,
    onClose: handleClose,
    ContentProps: {
      'aria-describedby': 'message-id'
    },
    message: __jsx("span", {
      id: "message-id",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 18
      }
    }, "Message Sent"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    mdUp: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.logo, classes.logoHeader),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_16__["default"].crypto.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    component: "span",
    className: text.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_15___default.a.crypto.projectName)))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10___default.a, {
    maxWidth: "md",
    className: classes.innerWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_16__["default"].crypto.home,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.backtohome, classes.invert),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "ion-ios-home-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), __jsx("i", {
    className: "ion-ios-arrow-round-back",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.formBox, 'fragment-fadeUp'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.fullFromWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "h3",
    align: "center",
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.title, text.title),
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, t('common:contact_title2')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.desc, text.subtitle2),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, t('common:contact_subtitle')), __jsx("div", {
    className: classes.form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["ValidatorForm"], {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
    container: true,
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:form_name'),
    onChange: handleChange('name'),
    name: "Name",
    value: values.name,
    validators: ['required'],
    errorMessages: ['This field is required'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:form_email'),
    onChange: handleChange('email'),
    name: "Email",
    value: values.email,
    validators: ['required', 'isEmail'],
    errorMessages: ['This field is required', 'email is not valid'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:form_phone'),
    onChange: handleChange('phone'),
    name: "Phone",
    value: values.phone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:form_company'),
    onChange: handleChange('company'),
    name: "Company",
    value: values.company,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    variant: "filled",
    multiline: true,
    rows: "6",
    className: classes.input,
    label: t('common:form_message'),
    onChange: handleChange('message'),
    name: "Message",
    value: values.message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.btnArea, classes.flex),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    control: __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_22__["default"], {
      validators: ['isTruthy'],
      errorMessages: "This field is required",
      checked: check,
      value: check,
      onChange: e => handleCheck(e),
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 23
      }
    }),
    label: __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 23
      }
    }, t('common:form_terms'), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 25
      }
    }), __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 25
      }
    }, t('common:form_privacy'))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "contained",
    fullWidth: isMobile,
    type: "submit",
    color: "secondary",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 19
    }
  }, t('common:form_send')))))))));
}

Contact.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_17__["withTranslation"])(['common'])(Contact));

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

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
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
/* harmony import */ var _components_Forms_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Forms/Contact */ "./components/Forms/Contact.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\pages\\contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Contact() {
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
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_2___default.a.crypto.name, "\xA0 - Contact")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_components_Forms_Contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })));
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

/* harmony default export */ __webpack_exports__["default"] = (Contact);

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

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

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

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9EZWNvcmF0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybXMvZm9ybS1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhcmFsbGF4L0hleGFnb25hbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhcmFsbGF4L3BhcmFsbGF4LXN0eWxlLmpzIiwid2VicGFjazovLy8uL2kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2NyeXB0by1sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdGV4dC9icmFuZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdGV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3RoZW1lL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXRlcmlhbC11aS1mb3JtLXZhbGlkYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbC1wYXJhbGxheFwiIl0sIm5hbWVzIjpbInJlZDMwMCIsInJlZCIsInN0eWxlcyIsInRoZW1lIiwiY2hlY2tib3giLCJsZWZ0IiwiZm9udFNpemUiLCJjb2xvciIsInBvc2l0aW9uIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIkNoZWNrYm94VmFsaWRhdG9yRWxlbWVudCIsIlZhbGlkYXRvckNvbXBvbmVudCIsImVycm9yVGV4dCIsImlzVmFsaWQiLCJzdGF0ZSIsImNsYXNzZXMiLCJwcm9wcyIsImdldEVycm9yTWVzc2FnZSIsInJlbmRlciIsImVycm9yTWVzc2FnZXMiLCJ2YWxpZGF0b3JzIiwicmVxdWlyZWRFcnJvciIsInZhbHVlIiwiY2hlY2tlZCIsInZhbGlkYXRvckxpc3RlbmVyIiwicmVzdCIsInIiLCJpbnB1dCIsIndpdGhTdHlsZXMiLCJDb250YWN0IiwidXNlU3R5bGVzIiwidGV4dCIsInVzZVRleHQiLCJ0IiwidXNlVGhlbWUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwiY29tcGFueSIsIm1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJWYWxpZGF0b3JGb3JtIiwiYWRkVmFsaWRhdGlvblJ1bGUiLCJvcGVuTm90aWYiLCJzZXROb3RpZiIsImNoZWNrIiwic2V0Q2hlY2siLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUNoZWNrIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2xvc2UiLCJwYWdlV3JhcCIsImNsc3giLCJwYXJhbGxheCIsInBhcmFsbGF4TGVmdCIsInBhcmFsbGF4UmlnaHQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJsb2dvIiwibG9nb0hlYWRlciIsInJvdXRlTGluayIsImNyeXB0byIsImhvbWUiLCJ0aXRsZSIsImJyYW5kIiwicHJvamVjdE5hbWUiLCJpbm5lcldyYXAiLCJiYWNrdG9ob21lIiwiaW52ZXJ0IiwiZm9ybUJveCIsImZ1bGxGcm9tV3JhcCIsImRlc2MiLCJzdWJ0aXRsZTIiLCJmb3JtIiwiYnRuQXJlYSIsImZsZXgiLCJlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iLCJEZWNvcmF0aW9uIiwiZGVjbyIsImNvbnRhY3RTdHlsZXMiLCJtYWtlU3R5bGVzIiwicGFkZGluZyIsInRleHRBbGlnbiIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJkZWZhdWx0IiwiZm9udFdlaWdodCIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0Qm9sZCIsInR5cGUiLCJwcmltYXJ5IiwibGlnaHQiLCJkYXJrIiwidGV4dFRyYW5zZm9ybSIsInRleHREZWNvcmF0aW9uIiwiZm9udFdlaWdodFJlZ3VsYXIiLCJmcm1EZWNvIiwicGFwZXIiLCJib3JkZXJSYWRpdXMiLCJkYXJrZW4iLCJib3hTaGFkb3ciLCJ3aWR0aCIsInBhZGRpbmdMZWZ0IiwiY29tbW9uIiwid2hpdGUiLCJib3JkZXIiLCJmYWRlIiwiaGludCIsImZvcm1IZWxwZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInJpZ2h0SWNvbiIsIm1hcmdpbkxlZnQiLCJoZWlnaHQiLCJ6SW5kZXgiLCJzZWNvbmRhcnkiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInJpZ2h0IiwiZmlsbCIsIm1haW4iLCJhdXRoRnJhbWUiLCJncmVldGluZyIsImZvbnRXZWlnaHRNZWRpdW0iLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwiaGVhZCIsInNpZ25BcnJvdyIsImZvcm1XcmFwIiwibWluSGVpZ2h0IiwidXAiLCJ0cmFuc2Zvcm0iLCJib3R0b20iLCJzb2NtZWRTaWRlTG9naW4iLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsImJsdWVCdG4iLCJuYXZpQnRuIiwicmVkQnRuIiwic2VwYXJhdG9yIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsImNvbnRlbnQiLCJib3JkZXJUb3AiLCJ0b3AiLCJsb3dlciIsInRyYW5zZm9ybU9yaWdpbiIsImRlY29Jbm5lciIsImRlY29TbSIsIlBhcmFsbGF4Q2xvdWQiLCJwYXJhbGxheFdyYXAiLCJkb3RzV3JhcCIsImlubmVyUGFyYWxsYXgiLCJsYXJnZSIsImhleGFXcmFwIiwicmlnaHRUb3BCYWNrIiwiYmlnIiwiaGV4YUJhY2siLCJyaWdodFRvcEZyb250Iiwic21hbGwiLCJsZWZ0Qm90dG9tQmFjayIsImxlZnRCb3R0b21Gcm9udCIsInBhcmFsbGF4U3R5bGVzIiwiYmxhY2siLCJoZXhhVG9wIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHRMYW5ndWFnZSIsIm90aGVyTGFuZ3VhZ2VzIiwiZmFsbGJhY2tMbmciLCJpbml0SW1tZWRpYXRlIiwibG9jYWxlUGF0aCIsInJlYWN0IiwidXNlU3VzcGVuc2UiLCJsb2NhbGVTdWJwYXRocyIsImFyYSIsImVuZyIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsInByZWZpeCIsImZvb3RlclRleHQiLCJsb2dvVGV4dCIsInVybCIsImltZyIsIm5vdGlmTXNnIiwibGluayIsImNvbnRhY3QiLCJsb2dpbiIsInJlZ2lzdGVyIiwidXNlVGV4dEFsaWduIiwidGV4dENlbnRlciIsInRleHRMZWZ0IiwidGV4dFJpZ2h0IiwidXNlRmxvYXQiLCJmbG9hdExlZnQiLCJmbG9hdCIsImZsb2F0UmlnaHQiLCJsaW5lSGVpZ2h0IiwidGl0bGUyIiwic3VidGl0bGUiLCJwYXJhZ3JhcGgiLCJjYXB0aW9uIiwidXNlSGlkZGVuIiwibGdEb3duIiwibWREb3duIiwic21Eb3duIiwieHNEb3duIiwibGdVcCIsIm1kVXAiLCJzbVVwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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LFdBQU4sQ0FBa0I4RyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCdkIsYUFBTyxFQUFFO0FBRG1CO0FBRDFCLEdBMUJzQztBQStCNUN3RyxNQUFJLEVBQUU7QUFDSixLQUFDbE8sS0FBSyxDQUFDbUMsV0FBTixDQUFrQjhHLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDNUJ2QixhQUFPLEVBQUU7QUFEbUI7QUFEMUI7QUEvQnNDLENBQUwsQ0FBTixDQUE1QixDOzs7Ozs7Ozs7OztBQzVGUCxxRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9jb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jb250YWN0LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHJlZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XHJcbmltcG9ydCB7IFZhbGlkYXRvckNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWZvcm0tdmFsaWRhdG9yJztcclxuXHJcbmNvbnN0IHJlZDMwMCA9IHJlZFsnNTAwJ107XHJcblxyXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xyXG4gIGNoZWNrYm94OiB7XHJcbiAgICBsZWZ0OiA0MixcclxuICAgIGZvbnRTaXplOiAxMixcclxuICAgIGNvbG9yOiByZWQzMDAsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygpXHJcbiAgfVxyXG59KTtcclxuXHJcbmNsYXNzIENoZWNrYm94VmFsaWRhdG9yRWxlbWVudCBleHRlbmRzIFZhbGlkYXRvckNvbXBvbmVudCB7XHJcbiAgZXJyb3JUZXh0KCkge1xyXG4gICAgY29uc3QgeyBpc1ZhbGlkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveH0+XHJcbiAgICAgICAge3RoaXMuZ2V0RXJyb3JNZXNzYWdlKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZXJyb3JNZXNzYWdlcyxcclxuICAgICAgdmFsaWRhdG9ycyxcclxuICAgICAgcmVxdWlyZWRFcnJvcixcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIGNoZWNrZWQsXHJcbiAgICAgIHZhbGlkYXRvckxpc3RlbmVyLFxyXG4gICAgICBjbGFzc2VzLFxyXG4gICAgICAuLi5yZXN0XHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgcmVmPXsocikgPT4geyB0aGlzLmlucHV0ID0gcjsgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHt0aGlzLmVycm9yVGV4dCgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQ2hlY2tib3hWYWxpZGF0b3JFbGVtZW50KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yRm9ybSwgVGV4dFZhbGlkYXRvciB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWZvcm0tdmFsaWRhdG9yJztcclxuaW1wb3J0IGJyYW5kIGZyb20gJ34vcHVibGljL3RleHQvYnJhbmQnO1xyXG5pbXBvcnQgcm91dGVMaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCBsb2dvIGZyb20gJ34vcHVibGljL2ltYWdlcy9jcnlwdG8tbG9nby5zdmcnO1xyXG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xyXG5pbXBvcnQgUGFyYWxsYXggZnJvbSAnLi4vUGFyYWxsYXgvSGV4YWdvbmFsJztcclxuaW1wb3J0IERlY29yYXRpb24gZnJvbSAnLi9EZWNvcmF0aW9uJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZm9ybS1zdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBDb250YWN0KHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJykpO1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBob25lOiAnJyxcclxuICAgIGNvbXBhbnk6ICcnLFxyXG4gICAgbWVzc2FnZTogJydcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFZhbGlkYXRvckZvcm0uYWRkVmFsaWRhdGlvblJ1bGUoJ2lzVHJ1dGh5JywgdmFsdWUgPT4gdmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbb3Blbk5vdGlmLCBzZXROb3RpZl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtjaGVjaywgc2V0Q2hlY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGV2ZW50ID0+IHtcclxuICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2sgPSBldmVudCA9PiB7XHJcbiAgICBzZXRDaGVjayhldmVudC50YXJnZXQuY2hlY2tlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgc2V0Tm90aWYodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXROb3RpZihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2VXcmFwfT5cclxuICAgICAgPERlY29yYXRpb24gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5wYXJhbGxheCwgY2xhc3Nlcy5wYXJhbGxheExlZnQpfT5cclxuICAgICAgICA8UGFyYWxsYXggLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucGFyYWxsYXgsIGNsYXNzZXMucGFyYWxsYXhSaWdodCl9PlxyXG4gICAgICAgIDxQYXJhbGxheCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fVxyXG4gICAgICAgIGtleT1cInRvcCByaWdodFwiXHJcbiAgICAgICAgb3Blbj17b3Blbk5vdGlmfVxyXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezQwMDB9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgQ29udGVudFByb3BzPXt7XHJcbiAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6ICdtZXNzYWdlLWlkJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG1lc3NhZ2U9ezxzcGFuIGlkPVwibWVzc2FnZS1pZFwiPk1lc3NhZ2UgU2VudDwvc3Bhbj59XHJcbiAgICAgIC8+XHJcbiAgICAgIDxIaWRkZW4gbWRVcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxvZ28sIGNsYXNzZXMubG9nb0hlYWRlcil9PlxyXG4gICAgICAgICAgPGEgaHJlZj17cm91dGVMaW5rLmNyeXB0by5ob21lfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJzcGFuXCIgY2xhc3NOYW1lPXt0ZXh0LnRpdGxlfT5cclxuICAgICAgICAgICAgICB7YnJhbmQuY3J5cHRvLnByb2plY3ROYW1lfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSGlkZGVuPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJXcmFwfT5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBocmVmPXtyb3V0ZUxpbmsuY3J5cHRvLmhvbWV9IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmJhY2t0b2hvbWUsIGNsYXNzZXMuaW52ZXJ0KX0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24taW9zLWhvbWUtb3V0bGluZVwiIC8+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24taW9zLWFycm93LXJvdW5kLWJhY2tcIiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZm9ybUJveCwgJ2ZyYWdtZW50LWZhZGVVcCcpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxGcm9tV3JhcH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCJcclxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGl0bGUsIHRleHQudGl0bGUpfVxyXG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjb250YWN0X3RpdGxlMicpfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRlc2MsIHRleHQuc3VidGl0bGUyKX0+XHJcbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjb250YWN0X3N1YnRpdGxlJyl9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XHJcbiAgICAgICAgICAgICAgPFZhbGlkYXRvckZvcm1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0VmFsaWRhdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdjb21tb246Zm9ybV9uYW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCduYW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbJ3JlcXVpcmVkJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzPXtbJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRWYWxpZGF0b3JcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2NvbW1vbjpmb3JtX2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbJ3JlcXVpcmVkJywgJ2lzRW1haWwnXX1cclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXM9e1snVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcsICdlbWFpbCBpcyBub3QgdmFsaWQnXX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRWYWxpZGF0b3JcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2NvbW1vbjpmb3JtX3Bob25lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwaG9uZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0VmFsaWRhdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdjb21tb246Zm9ybV9jb21wYW55Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdjb21wYW55Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ29tcGFueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbXBhbnl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRWYWxpZGF0b3JcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dCgnY29tbW9uOmZvcm1fbWVzc2FnZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbWVzc2FnZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYnRuQXJlYSwgY2xhc3Nlcy5mbGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17KFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e1snaXNUcnV0aHknXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcz1cIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoZWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoZWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXsoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpmb3JtX3Rlcm1zJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Zm9ybV9wcml2YWN5Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBmdWxsV2lkdGg9e2lzTW9iaWxlfSB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmZvcm1fc2VuZCcpfVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvVmFsaWRhdG9yRm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRhY3QucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NvbW1vbiddKShDb250YWN0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2Zvcm0tc3R5bGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVjb3JhdGlvbigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvfT5cclxuICAgICAgPHN2ZyB3aWR0aD1cIjEyNzRweFwiIGhlaWdodD1cIjEwMThweFwiIHZpZXdCb3g9XCIwIDAgMTI3NCAxMDE4XCIgdmVyc2lvbj1cIjEuMVwiPlxyXG4gICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgPG1hc2sgZmlsbD1cIndoaXRlXCI+XHJcbiAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI3BhdGgtMlwiIC8+XHJcbiAgICAgICAgICA8L21hc2s+XHJcbiAgICAgICAgICA8dXNlIGZpbGw9XCJ1cmwoI2ZybURlY29MaW5lYXJHcmFkaWVudC0xKVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2MDcuMjI0MzUxLCA0OTQuNjQxMTI2KSByb3RhdGUoLTQ1LjAwMDAwMCkgdHJhbnNsYXRlKC02MDcuMjI0MzUxLCAtNDk0LjY0MTEyNikgXCIgeGxpbmtIcmVmPVwiI3BhdGgtMlwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGZhZGUsIGRhcmtlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcclxuXHJcbmNvbnN0IGNvbnRhY3RTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgdGl0bGU6IHt9LFxyXG4gIHBhZ2VXcmFwOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDExLCA1KSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCwgMCksXHJcbiAgICB9LFxyXG4gICAgJyYgJHRpdGxlJzoge1xyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDMyXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBhJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXJcclxuICAgIH1cclxuICB9LFxyXG4gIGZybURlY286IHt9LFxyXG4gIGlubmVyV3JhcDoge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgfSxcclxuICBmdWxsRnJvbVdyYXA6IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOSwgMCksXHJcbiAgfSxcclxuICBmb3JtQm94OiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGRhcmtlbih0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyaywgMC40KSA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuICAgIGJveFNoYWRvdzogJzAgMCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcclxuICB9LFxyXG4gIGRlc2M6IHtcclxuICAgIGZvbnRTaXplOiAyMCxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEyKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDUpXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICAgIGZvbnRTaXplOiAxNlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGlnaHQ6IHt9LFxyXG4gIGlucHV0OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgJyYgbGFiZWwnOiB7XHJcbiAgICAgIGxlZnQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgIH0sXHJcbiAgICAnJiA+IGRpdic6IHtcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknIDogJyNlZWVlZWUnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4odGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLCAwLjEpXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIGlucHV0LCB0ZXh0YXJlYSc6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0XHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmJGxpZ2h0Jzoge1xyXG4gICAgICAnJiBsYWJlbCc6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmID4gZGl2Jzoge1xyXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2ZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LCAwLjUpfWAsXHJcbiAgICAgICAgJyYgaW5wdXQnOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZSh0aGVtZS5wYWxldHRlLnRleHQuaGludCwgMC4yKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKHRoZW1lLnBhbGV0dGUudGV4dC5oaW50LCAwLjIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZm9ybToge1xyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMTUsIDEwKSxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDYsIDEwKSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyLCAxMCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9ybUhlbHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGZsZXg6IHt9LFxyXG4gIGJ0bkFyZWE6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg1KSxcclxuICAgICcmIGxhYmVsJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgfSxcclxuICAgICcmIGJ1dHRvbic6IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9LFxyXG4gICAgJyYgc3Bhbic6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE0XHJcbiAgICAgIH0sXHJcbiAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lICFpbXBvcnRhbnQnLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJyYkZmxleCc6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICByaWdodEljb246IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoKVxyXG4gIH0sXHJcbiAgaW52ZXJ0OiB7fSxcclxuICBiYWNrdG9ob21lOiB7XHJcbiAgICB3aWR0aDogODAsXHJcbiAgICBoZWlnaHQ6IDgwLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBtYXJnaW5Ub3A6IDIwLFxyXG4gICAgbWFyZ2luTGVmdDogMjAsXHJcbiAgICB6SW5kZXg6IDIwLFxyXG4gICAgJyYkaW52ZXJ0Jzoge1xyXG4gICAgICAnJiBpJzoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgJyYgaSc6IHtcclxuICAgICAgZm9udFNpemU6IDMyLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcclxuICAgIH0sXHJcbiAgICAnJiA+IHNwYW4gaTpmaXJzdC1jaGlsZCc6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4zcyBlYXNlJ1xyXG4gICAgfSxcclxuICAgICcmID4gc3BhbiBpOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICcmID4gc3BhbiBpOmZpcnN0LWNoaWxkJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmID4gc3BhbiBpOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgcmlnaHQ6IDMwLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBjaGVjazoge1xyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXV0aEZyYW1lOiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBncmVldGluZzoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxNSwgNiksXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICcmIGg0Jzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgICB9LFxyXG4gICAgJyYgaDYnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9nb0hlYWRlcjoge30sXHJcbiAgbG9nbzoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICAnJiRsb2dvSGVhZGVyJzoge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDEwXHJcbiAgICB9LFxyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICB3aWR0aDogNjRcclxuICAgIH0sXHJcbiAgICAnJiBwLCBzcGFuJzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiA0LFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGRcclxuICAgIH1cclxuICB9LFxyXG4gIGhlYWQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDUpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAnJiBhJzoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBzaWduQXJyb3c6IHt9LFxyXG4gIGZvcm1XcmFwOiB7XHJcbiAgICBtaW5IZWlnaHQ6IDc2MCxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDUpXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgpXHJcbiAgICB9LFxyXG4gICAgJyYgJGZybURlY28nOiB7XHJcbiAgICAgIGxlZnQ6ICc1OC4zMzMzMzMlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNzIlKScsXHJcbiAgICAgIGJvdHRvbTogJy03NXB4J1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHNvY21lZFNpZGVMb2dpbjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICB9LFxyXG4gICAgJyYgPiAqJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIHdpZHRoOiAxNjAsXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDAuNSlcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBpJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKClcclxuICAgIH1cclxuICB9LFxyXG4gIGJsdWVCdG46IHtcclxuICAgIGJhY2tncm91bmQ6ICcjMjhhYWUxJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJyMyOGFhZTEnLCAwLjIpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmF2aUJ0bjoge1xyXG4gICAgYmFja2dyb3VuZDogJyMzYjU3OWQnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbignIzNiNTc5ZCcsIDAuMiksXHJcbiAgICB9XHJcbiAgfSxcclxuICByZWRCdG46IHtcclxuICAgIGJhY2tncm91bmQ6ICcjZGQ0OTNjJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJyNkZDQ5M2MnLCAwLjIpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VwYXJhdG9yOiB7XHJcbiAgICBtYXJnaW46IGAke3RoZW1lLnNwYWNpbmcoNSl9cHggYXV0b2AsXHJcbiAgICBtYXhXaWR0aDogMzQwLFxyXG4gICAgbWluV2lkdGg6IDI1NixcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmIHAnOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIGZvbnRTaXplOiAxMlxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnRleHQuaGludH1gLFxyXG4gICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6ICcyMCUnXHJcbiAgICB9LFxyXG4gICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgfSxcclxuICAgICcmOmFmdGVyJzoge1xyXG4gICAgICByaWdodDogMCxcclxuICAgIH1cclxuICB9LFxyXG4gIGxvd2VyOiB7fSxcclxuICBkZWNvOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTUwJScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB0b3A6IC0zMDAsXHJcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjEpJyxcclxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlcicsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgIGxlZnQ6ICctMTUwJScsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiRsb3dlcic6IHtcclxuICAgICAgdG9wOiAtMTUwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcmFsbGF4OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgfSxcclxuICBwYXJhbGxheExlZnQ6IHtcclxuICAgICcmID4gZGl2Jzoge1xyXG4gICAgICB0b3A6IC0xNTAwLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFyYWxsYXhSaWdodDoge1xyXG4gICAgJyYgPiBkaXYnOiB7XHJcbiAgICAgIHRvcDogLTQwMCxcclxuICAgIH1cclxuICB9LFxyXG4gIGRlY29Jbm5lcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzE1MCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBsZWZ0OiAtMTE0LFxyXG4gICAgdG9wOiAtMzAwLFxyXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKScsXHJcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXInLFxyXG4gICAgJyYgJGRlY28nOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgxMjgxKV06IHtcclxuICAgICAgICBsZWZ0OiA1MFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVjb1NtOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKVxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFN0eWxlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IFBhcmFsbGF4LCBQYXJhbGxheFByb3ZpZGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL3BhcmFsbGF4LXN0eWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcmFsbGF4Q2xvdWQoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnBhcmFsbGF4V3JhcCwgY2xhc3Nlcy5kb3RzV3JhcCl9PlxyXG4gICAgICA8UGFyYWxsYXhQcm92aWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmlubmVyUGFyYWxsYXgsIGNsYXNzZXMubGFyZ2UpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhleGFXcmFwfT5cclxuICAgICAgICAgICAgPFBhcmFsbGF4XHJcbiAgICAgICAgICAgICAgeT17WzIwLCAyMF19XHJcbiAgICAgICAgICAgICAgdGFnT3V0ZXI9XCJmaWd1cmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJpZ2h0VG9wQmFjaywgY2xhc3Nlcy5iaWcpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXMuaGV4YUJhY2t9PlxyXG4gICAgICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIvaW1hZ2VzL2NyeXB0by9wYXJhbGxheC1iYWNrMi5zdmcjbWFpblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgICAgIDxQYXJhbGxheFxyXG4gICAgICAgICAgICAgIHk9e1syMCwgMjBdfVxyXG4gICAgICAgICAgICAgIHRhZ091dGVyPVwiZmlndXJlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yaWdodFRvcEZyb250LCBjbGFzc2VzLnNtYWxsKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1ODVweFwiIGhlaWdodD1cIjE1MXB4XCIgdmlld0JveD1cIjAgMCA1ODUgMTUxXCIgdmVyc2lvbj1cIjEuMVwiPlxyXG4gICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTQzLjAwMDAwMCwgLTg4LjAwMDAwMClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTMyLjYyMzg2MiwgNzAuOTEyMDMyKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01MjAuNTYxMTczLDE0OC4yNTI2MDMgQzUyMC41NjExNzMsMTUxLjEzMTgwMiA1MjIuMTAxMjM0LDE1My43OTI0MzMgNTI0LjYwMTM0MiwxNTUuMjMyMDMzIEw1NTEuNDA0NzI1LDE3MC42NjY1MDkgQzU1My45MDQ4MzMsMTcyLjEwNjEwOCA1NTYuOTg0OTU1LDE3Mi4xMDYxMDggNTU5LjQ4NTA2MywxNzAuNjY2NTA5IEw1ODYuMjg4NDQ2LDE1NS4yMzIwMzMgQzU4OC43ODg1NTMsMTUzLjc5MjQzMyA1OTAuMzI4NjE1LDE1MS4xMzE4MDIgNTkwLjMyODYxNSwxNDguMjUyNjAzIEw1OTAuMzI4NjE1LDExNy4zODM1MjIgQzU5MC4zMjg2MTUsMTE0LjUwNDE5NCA1ODguNzg4NTUzLDExMS44NDM2OTIgNTg2LjI4ODQ0NiwxMTAuNDAzOTYzIEw1NTkuNDg1MDYzLDk0Ljk2OTQ4NzEgQzU1Ni45ODQ5NTUsOTMuNTI5ODg3OSA1NTMuOTA0ODMzLDkzLjUyOTg4NzkgNTUxLjQwNDcyNSw5NC45Njk0ODcxIEw1MjQuNjAxMzQyLDExMC40MDM5NjMgQzUyMi4xMDEyMzQsMTExLjg0MzY5MiA1MjAuNTYxMTczLDExNC41MDQxOTQgNTIwLjU2MTE3MywxMTcuMzgzNTIyIEw1MjAuNTYxMTczLDE0OC4yNTI2MDMgWlwiIGZpbGw9XCJ1cmwoI2hleGFMaW5lYXJHcmFkaWVudC0yKVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NTUuNDQ0ODk0LCAxMzIuODE3OTk4KSByb3RhdGUoLTMzMC4wMDAwMDApIHRyYW5zbGF0ZSgtNTU1LjQ0NDg5NCwgLTEzMi44MTc5OTgpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGV4YVdyYXB9PlxyXG4gICAgICAgICAgICA8UGFyYWxsYXhcclxuICAgICAgICAgICAgICB5PXtbNDAsIDQwXX1cclxuICAgICAgICAgICAgICB0YWdPdXRlcj1cImZpZ3VyZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubGVmdEJvdHRvbUJhY2ssIGNsYXNzZXMuYmlnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzLmhleGFCYWNrfT5cclxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiL2ltYWdlcy9jcnlwdG8vcGFyYWxsYXgtYmFjazMuc3ZnI21haW5cIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgICA8UGFyYWxsYXhcclxuICAgICAgICAgICAgICB5PXtbNDAsIDQwXX1cclxuICAgICAgICAgICAgICB0YWdPdXRlcj1cImZpZ3VyZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubGVmdEJvdHRvbUZyb250LCBjbGFzc2VzLnNtYWxsKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1ODVweFwiIGhlaWdodD1cIjE1MXB4XCIgdmlld0JveD1cIjAgMCA1ODUgMTUxXCIgdmVyc2lvbj1cIjEuMVwiPlxyXG4gICAgICAgICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTQzLjAwMDAwMCwgLTg4LjAwMDAwMClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTMyLjYyMzg2MiwgNzAuOTEyMDMyKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNSw2Ny4zNjI4MTU4IEMxNSw3MC4yNDIwMTQyIDE2LjU0MDA2MTMsNzIuOTAyNjQ1NiAxOS4wNDAxNjkxLDc0LjM0MjI0NDggTDQ1Ljg0MzU1MTgsODkuNzc2NzIxMiBDNDguMzQzNjU5Nyw5MS4yMTYzMjA0IDUxLjQyMzc4MjIsOTEuMjE2MzIwNCA1My45MjM4OTAxLDg5Ljc3NjcyMTIgTDgwLjcyNzI3MjcsNzQuMzQyMjQ0OCBDODMuMjI3MzgwNiw3Mi45MDI2NDU2IDg0Ljc2NzQ0MTksNzAuMjQyMDE0MiA4NC43Njc0NDE5LDY3LjM2MjgxNTggTDg0Ljc2NzQ0MTksMzYuNDkzNzMzOSBDODQuNzY3NDQxOSwzMy42MTQ0MDY0IDgzLjIyNzM4MDYsMzAuOTUzOTA0MSA4MC43MjcyNzI3LDI5LjUxNDE3NTggTDUzLjkyMzg5MDEsMTQuMDc5Njk5NCBDNTEuNDIzNzgyMiwxMi42NDAxMDAyIDQ4LjM0MzY1OTcsMTIuNjQwMTAwMiA0NS44NDM1NTE4LDE0LjA3OTY5OTQgTDE5LjA0MDE2OTEsMjkuNTE0MTc1OCBDMTYuNTQwMDYxMywzMC45NTM5MDQxIDE1LDMzLjYxNDQwNjQgMTUsMzYuNDkzNzMzOSBMMTUsNjcuMzYyODE1OCBaXCIgZmlsbD1cInVybCgjaGV4YUxpbmVhckdyYWRpZW50LTMpXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQ5Ljg4MzcyMSwgNTEuOTI4MjEwKSByb3RhdGUoLTMzMC4wMDAwMDApIHRyYW5zbGF0ZSgtNDkuODgzNzIxLCAtNTEuOTI4MjEwKVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHBhcmFsbGF4U3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHBhcmFsbGF4V3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgekluZGV4OiAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGlubmVyUGFyYWxsYXg6IHtcclxuICAgIGhlaWdodDogMjUwMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAnJiBmaWd1cmUnOiB7XHJcbiAgICAgIGhlaWdodDogMjUwMCxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIH0sXHJcbiAgICAnJiBmaWd1cmUgPiBkaXYnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHJpZ2h0VG9wQmFjazoge1xyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICByaWdodDogLTI0MFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmlnaHRUb3BGcm9udDoge1xyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICByaWdodDogNTBcclxuICAgIH1cclxuICB9LFxyXG4gIGxlZnRCb3R0b21CYWNrOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgbGVmdDogLTExMFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGVmdEJvdHRvbUZyb250OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgbGVmdDogLTUwXHJcbiAgICB9XHJcbiAgfSxcclxuICBoZXhhQmFjazoge1xyXG4gICAgb3BhY2l0eTogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyAwLjEyIDogMC4wMyxcclxuICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgd2lkdGg6IDU1MCxcclxuICAgIGhlaWdodDogNTAwXHJcbiAgfSxcclxuICBoZXhhVG9wOiB7fSxcclxuICBoZXhhV3JhcDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBoZWlnaHQ6IDcwMFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcmFsbGF4U3R5bGVzO1xyXG4iLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHQ7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgZGVmYXVsdExhbmd1YWdlOiAnZW5nJyxcclxuICBvdGhlckxhbmd1YWdlczogWydhcmEnXSxcclxuICBmYWxsYmFja0xuZzogJ2VuZycsXHJcbiAgaW5pdEltbWVkaWF0ZTogZmFsc2UsXHJcbiAgbG9jYWxlUGF0aDogJ3B1YmxpYy9sb2NhbGVzJyxcclxuICByZWFjdDoge1xyXG4gICAgdXNlU3VzcGVuc2U6IGZhbHNlLFxyXG4gIH0sXHJcbiAgbG9jYWxlU3VicGF0aHM6IHtcclxuICAgIGFyYTogJ2FyJyxcclxuICAgIGVuZzogJ2VuJyxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgYnJhbmQgZnJvbSAnLi4vcHVibGljL3RleHQvYnJhbmQnO1xyXG5pbXBvcnQgQ29udGFjdEZybSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1zL0NvbnRhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICB7IGJyYW5kLmNyeXB0by5uYW1lIH1cclxuICAgICAgICAgICZuYnNwOyAtIENvbnRhY3RcclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPENvbnRhY3RGcm0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRhY3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcclxuICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJ10sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeU1pNHdMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p4emRtY2dkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlUR0Y1WlhKZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpRFFvSklIWnBaWGRDYjNnOUlqQWdNQ0ExTVRJZ05URXlJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQTFNVElnTlRFeU95SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krRFFvOGMzUjViR1VnZEhsd1pUMGlkR1Y0ZEM5amMzTWlQZzBLQ1M1emREQjdabWxzYkRwMWNtd29JMU5XUjBsRVh6RmZLVHR6ZEhKdmEyVTZkWEpzS0NOVFZrZEpSRjh5WHlrN2MzUnliMnRsTFhkcFpIUm9PakUyTzNOMGNtOXJaUzF0YVhSbGNteHBiV2wwT2pFd08zME5DZ2t1YzNReGUyWnBiR3c2Ym05dVpUdHpkSEp2YTJVNkkwWkdSa1pHUmp0emRISnZhMlV0ZDJsa2RHZzZNVGM3YzNSeWIydGxMVzFwZEdWeWJHbHRhWFE2TVRBN2ZRMEtQQzl6ZEhsc1pUNE5DanhuUGcwS0NUeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGlVMVpIU1VSZk1WOGlJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCNE1UMGlNVFEyTGpZM09TSWdlVEU5SWpRME5TNHpORGsySWlCNE1qMGlNelkxTGpNeU1TSWdlVEk5SWpZMkxqWTFNRFFpUGcwS0NRazhjM1J2Y0NBZ2IyWm1jMlYwUFNJd0xqRTRORFlpSUhOMGVXeGxQU0p6ZEc5d0xXTnZiRzl5T2lNMFEwRkdOVEFpTHo0TkNna0pQSE4wYjNBZ0lHOW1abk5sZEQwaU1DNHlNamMzSWlCemRIbHNaVDBpYzNSdmNDMWpiMnh2Y2pvak9VWkNOekpGSWk4K0RRb0pDVHh6ZEc5d0lDQnZabVp6WlhROUlqQXVPREU0T1NJZ2MzUjViR1U5SW5OMGIzQXRZMjlzYjNJNkkwWkdRekV3TnlJdlBnMEtDVHd2YkdsdVpXRnlSM0poWkdsbGJuUStEUW9KUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKVFZrZEpSRjh5WHlJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlJSGd4UFNJeU9TNHpOVGM1SWlCNU1UMGlNalUySWlCNE1qMGlORGd5TGpZME1qRWlJSGt5UFNJeU5UWWlQZzBLQ1FrOGMzUnZjQ0FnYjJabWMyVjBQU0l3TGpFNE1URWlJSE4wZVd4bFBTSnpkRzl3TFdOdmJHOXlPaU5HUmtNeE1EY2lMejROQ2drSlBITjBiM0FnSUc5bVpuTmxkRDBpTUM0M056SXpJaUJ6ZEhsc1pUMGljM1J2Y0MxamIyeHZjam9qT1VaQ056SkZJaTgrRFFvSkNUeHpkRzl3SUNCdlptWnpaWFE5SWpBdU9ERTFOQ0lnYzNSNWJHVTlJbk4wYjNBdFkyOXNiM0k2SXpSRFFVWTFNQ0l2UGcwS0NUd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0RRb0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFRNM0xqUXNNVGN3TGpkMk1UY3dMalpqTUN3eU5TNHpMREV6TGpVc05EZ3VOeXd6TlM0MUxEWXhMalJNTWpJd0xqVXNORGc0WXpJeExqa3NNVEl1Tnl3ME9Td3hNaTQzTERjd0xqa3NNR3d4TkRjdU55MDROUzR6RFFvSkNXTXlNUzQ1TFRFeUxqY3NNelV1TlMwek5pNHhMRE0xTGpVdE5qRXVORll4TnpBdU4yTXdMVEkxTGpNdE1UTXVOUzAwT0M0M0xUTTFMalV0TmpFdU5Fd3lPVEV1TlN3eU5HTXRNakV1T1MweE1pNDNMVFE1TFRFeUxqY3ROekF1T1N3d1REY3lMamdzTVRBNUxqTU5DZ2tKUXpVd0xqa3NNVEl5TERNM0xqUXNNVFExTGpRc016Y3VOQ3d4TnpBdU4zb2lMejROQ2drOFp6NE5DZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNU0lnWkQwaVRURTBNUzQzTERNeU55NDVWakU0TVM0MFNERTJNSFl4TXpBdU1rZ3lNamgyTVRZdU0wZ3hOREV1TjNvaUx6NE5DZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNU0lnWkQwaVRUSTJOaTQwTERJNE1TNDBkaTAzTkM0eWFERTNMak4yTnpNdU1XTXdMREl4TGpVc01USXVNU3d6TlM0eExETTBMalVzTXpVdU1XTXlNaTQwTERBc016UXVOeTB4TXk0MkxETTBMamN0TXpVdU1YWXROek11TVdneE55NHpkamMwTGpJTkNna0pDV013TERJNUxqa3RNVGN1Tml3ME9TNHlMVFV5TERRNUxqSkRNamd6TGpjc016TXdMallzTWpZMkxqUXNNekV4TERJMk5pNDBMREk0TVM0MGVpSXZQZzBLQ1R3dlp6NE5Dand2Wno0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgY3J5cHRvOiB7XHJcbiAgICBuYW1lOiAnQ29pbnonLFxyXG4gICAgZGVzYzogJ0x1eGlyZW4gQ3J5cHRvY3VycmVuY3kgLSBSZWFjdCBTaW5nbGUgTGFuZGluZyBQYWdlIFRlbXBsYXRlJyxcclxuICAgIHByZWZpeDogJ2x1eGlyZW4nLFxyXG4gICAgZm9vdGVyVGV4dDogJ0x1eGlyZW4gVGhlbWUgMjAyMScsXHJcbiAgICBsb2dvVGV4dDogJ0x1eGlyZW4gQ29pbnonLFxyXG4gICAgcHJvamVjdE5hbWU6ICdDb2lueicsXHJcbiAgICB1cmw6ICdsdXhpcmVhY3QudXgtbWFlc3Ryby5jb20vY29pbnonLFxyXG4gICAgaW1nOiAnL3N0YXRpYy9pbWFnZXMvY3J5cHRvLWxvZ28ucG5nJyxcclxuICAgIG5vdGlmTXNnOiAnRG9uZWMgc2l0IGFtZXQgbnVsbGEgc2VkIGFyY3UgcHVsdmluYXIgdWx0cmljaWVzIGNvbW1vZG8gaWQgbGlndWxhLidcclxuICB9XHJcbn07XHJcbiIsImNvbnN0IGxpbmsgPSB7XHJcbiAgY3J5cHRvOiB7XHJcbiAgICBob21lOiAnLycsXHJcbiAgICBjb250YWN0OiAnL2NvbnRhY3QnLFxyXG4gICAgbG9naW46ICcvbG9naW4nLFxyXG4gICAgcmVnaXN0ZXI6ICcvcmVnaXN0ZXInXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGluaztcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGV4dEFsaWduID0gbWFrZVN0eWxlcyh7XHJcbiAgdGV4dENlbnRlcjoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgdGV4dExlZnQ6IHtcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnXHJcbiAgfSxcclxuICB0ZXh0UmlnaHQ6IHtcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0J1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRmxvYXQgPSBtYWtlU3R5bGVzKHtcclxuICBmbG9hdExlZnQ6IHtcclxuICAgIGZsb2F0OiAnbGVmdCdcclxuICB9LFxyXG4gIGZsb2F0UmlnaHQ6IHtcclxuICAgIGZsb2F0OiAncmlnaHQnXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGV4dCA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgIGZvbnRTaXplOiA0OCxcclxuICAgIGxpbmVIZWlnaHQ6ICc3MnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBmb250U2l6ZTogMzgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4J1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMjgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0NHB4J1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlMjoge1xyXG4gICAgZm9udFNpemU6IDM2LFxyXG4gICAgbGluZUhlaWdodDogJzU2cHgnLFxyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4J1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogMjQsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICczNnB4JyxcclxuICAgIH1cclxuICB9LFxyXG4gIHN1YnRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICBmb250U2l6ZTogMjgsXHJcbiAgICBsaW5lSGVpZ2h0OiAnNDRweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzZweCcsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgbGluZUhlaWdodDogJzI4cHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHN1YnRpdGxlMjoge1xyXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcclxuICAgIGZvbnRTaXplOiAyMixcclxuICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFyYWdyYXBoOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgbGluZUhlaWdodDogJzI0cHgnXHJcbiAgfSxcclxuICBjYXB0aW9uOiB7XHJcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxyXG4gICAgZm9udFNpemU6IDE2LFxyXG4gICAgbGluZUhlaWdodDogJzI0cHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgbGluZUhlaWdodDogJzIycHgnLFxyXG4gICAgfSxcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VIaWRkZW4gPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbGdEb3duOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbGcnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZERvd246IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHNtRG93bjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgeHNEb3duOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBsZ1VwOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWRVcDoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIHNtVXA6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXRlcmlhbC11aS1mb3JtLXZhbGlkYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGwtcGFyYWxsYXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==