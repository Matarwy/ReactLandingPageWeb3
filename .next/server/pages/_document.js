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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head-manager-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/palette */ "./theme/palette.js");
/* harmony import */ var _theme_palette__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_palette__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\head.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HeadComponent = () => __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx("meta", {
  charSet: "utf-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "description",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.desc,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "shortcut icon",
  href: "/favicons/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "57x57",
  href: "/favicons/apple-icon-57x57.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "60x60",
  href: "/favicons/apple-icon-60x60.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "72x72",
  href: "/favicons/apple-icon-72x72.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "76x76",
  href: "/favicons/apple-icon-76x76.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "114x114",
  href: "/favicons/apple-icon-114x114.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "120x120",
  href: "/favicons/apple-icon-120x120.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "144x144",
  href: "/favicons/apple-icon-144x144.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "152x152",
  href: "/favicons/apple-icon-152x152.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/favicons/apple-icon-180x180.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "192x192",
  href: "/favicons/android-icon-192x192.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/favicons/favicon-32x32.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "96x96",
  href: "/favicons/favicon-96x96.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/favicons/favicon-16x16.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "manifest",
  href: "/favicons/manifest.json",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "msapplication-TileColor",
  content: "#ffffff",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "msapplication-TileImage",
  content: "/favicons/ms-icon-144x144.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "theme-color",
  content: _theme_palette__WEBPACK_IMPORTED_MODULE_2___default.a.money.palette.primary.main,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }
}), __jsx("link", {
  href: "https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "author",
  content: "luxi",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:site_name",
  content: "luxi.ux-maestro.com",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:locale",
  content: "en_US",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:type",
  content: "website",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "twitter:site",
  content: "luxi.ux-maestro.com",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "twitter:domain",
  content: "luxi.ux-maestro.com",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "twitter:creator",
  content: "luxi",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "twitter:card",
  content: "summary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "twitter:image:src",
  content: "/images/crypto-logo.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "title",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.projectName,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:title",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.desc,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:url",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.url,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:description",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.desc,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:site",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.url,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:image",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.cover,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:image",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.cover,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:image:height",
  content: "630",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (HeadComponent);

/***/ }),

/***/ "./node_modules/next/dist/client/experimental-script.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/client/experimental-script.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../next-server/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR

  const {
    updateScripts,
    scripts
  } = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  (0, _react.useEffect)(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (true) {
    return null;
  }

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([(0, _extends2.default)({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

var _experimentalScript = _interopRequireDefault(__webpack_require__(/*! ../client/experimental-script */ "./node_modules/next/dist/client/experimental-script.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map(file => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, ["strategy"]);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var _buildManifest$lowPri;

  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _experimentalScript.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && false,  false && /*#__PURE__*/false, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\pages\\_document.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Html"], {
      lang: "en",
      dir: "ltr",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "preloader",
      style: {
        position: 'fixed',
        zIndex: 10000,
        background: '#fafafa',
        width: '100%',
        height: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, __jsx("img", {
      style: {
        opacity: 0.5,
        position: 'fixed',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)'
      },
      src: "/images/loading.gif",
      alt: "loading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    })), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    })));
  }

}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ServerStyleSheets"]();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    // eslint-disable-line
    enhanceApp: App => props => sheets.collect(__jsx(App, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 50
      }
    }))) // eslint-disable-line

  });

  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
  return _objectSpread(_objectSpread({}, initialProps), {}, {
    namespacesRequired: ['crypto-landing', 'common'],
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(initialProps.styles),  true && sheets.getStyleElement()]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

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

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

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

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvZXhwZXJpbWVudGFsLXNjcmlwdC50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9oZWFkLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19kb2N1bWVudC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdGV4dC9icmFuZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS9wYWxldHRlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc2VydmVyXCIiXSwibmFtZXMiOlsiSGVhZENvbXBvbmVudCIsImJyYW5kIiwiY3J5cHRvIiwiZGVzYyIsInRoZW1lIiwibW9uZXkiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJwcm9qZWN0TmFtZSIsInVybCIsImNvdmVyIiwiU2NyaXB0Q2FjaGUiLCJMb2FkQ2FjaGUiLCJpZ25vcmVQcm9wcyIsImxvYWRTY3JpcHQiLCJwcm9wcyIsIm9uTG9hZCIsImNoaWxkcmVuIiwiY2FjaGVLZXkiLCJpZCIsImVsIiwiZG9jdW1lbnQiLCJsb2FkUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbkVycm9yIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJBcnJheSIsIk9iamVjdCIsInZhbHVlIiwiYXR0ciIsIkRPTUF0dHJpYnV0ZU5hbWVzIiwiayIsInN0cmF0ZWd5Iiwid2luZG93Iiwic2NyaXB0TG9hZGVySXRlbXMiLCJzcmMiLCJyZXN0UHJvcHMiLCJIZWFkTWFuYWdlckNvbnRleHQiLCJsb2FkTGF6eVNjcmlwdCIsInNjcmlwdHMiLCJ1cGRhdGVTY3JpcHRzIiwiU2NyaXB0IiwiYWNjZXB0Q2hhcnNldCIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJodHRwRXF1aXYiLCJub01vZHVsZSIsInAiLCJ0eXBlIiwiaGVhZEVsIiwiaGVhZENvdW50RWwiLCJjb25zb2xlIiwiaGVhZENvdW50IiwiTnVtYmVyIiwib2xkVGFncyIsImkiLCJqIiwibmV3VGFncyIsImNvbXBvbmVudHMiLCJuZXdUYWciLCJsZW4iLCJvbGRUYWciLCJ0IiwidXBkYXRlUHJvbWlzZSIsIm1vdW50ZWRJbnN0YW5jZXMiLCJ1cGRhdGVIZWFkIiwiaGVhZCIsInByb21pc2UiLCJ0YWdzIiwiaCIsInRpdGxlQ29tcG9uZW50IiwidGl0bGUiLCJ1cGRhdGVFbGVtZW50cyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0Iiwic2hhcmVkRmlsZXMiLCJwYWdlRmlsZXMiLCJpbkFtcE1vZGUiLCJhbGxGaWxlcyIsImJ1aWxkTWFuaWZlc3QiLCJwb2x5ZmlsbCIsInByb2Nlc3MiLCJhc3NldFByZWZpeCIsImRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIiwic2NyaXB0TG9hZGVyIiwiZmlsZSIsImR5bmFtaWNJbXBvcnRzIiwiZmlsZXMiLCJlbmNvZGVVUkkiLCJub3JtYWxTY3JpcHRzIiwibG93UHJpb3JpdHlTY3JpcHRzIiwiQ29tcG9uZW50IiwiZW5oYW5jZUFwcCIsIkFwcCIsImN0eCIsInN0eWxlcyIsInJlbmRlciIsIkRvY3VtZW50Q29tcG9uZW50Q29udGV4dCIsImRvY0NvbXBvbmVudHNSZW5kZXJlZCIsImdldENzc0xpbmtzIiwiY3NzRmlsZXMiLCJmIiwidW5tYW5nZWRGaWxlcyIsImR5bmFtaWNDc3NGaWxlcyIsImV4aXN0aW5nIiwiY3NzTGlua0VsZW1lbnRzIiwiaXNTaGFyZWRGaWxlIiwiaXNVbm1hbmFnZWRGaWxlIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJnZXRQcmVsb2FkTWFpbkxpbmtzIiwicHJlbG9hZEZpbGVzIiwiZ2V0RHluYW1pY0NodW5rcyIsImdldFByZU5leHRTY3JpcHRzIiwiZ2V0U2NyaXB0cyIsImdldFBvbHlmaWxsU2NyaXB0cyIsImhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMiLCJmaWx0ZXJlZENoaWxkcmVuIiwiUmVhY3QiLCJjaGlsZCIsIm1ha2VTdHlsZXNoZWV0SW5lcnQiLCJjIiwiT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTIiwibmV3UHJvcHMiLCJkaXNhYmxlUnVudGltZUpTIiwidW5zdGFibGVfcnVudGltZUpTIiwiZGlzYWJsZUpzUHJlbG9hZCIsInVuc3RhYmxlX0pzUHJlbG9hZCIsImNzc1ByZWxvYWRzIiwib3RoZXJIZWFkRWxlbWVudHMiLCJpc1JlYWN0SGVsbWV0IiwiaGFzQW1waHRtbFJlbCIsImhhc0Nhbm9uaWNhbFJlbCIsImJhZFByb3AiLCJwcm9wIiwiX19ORVhUX0RBVEFfXyIsInBhZ2UiLCJjdXJTdHlsZXMiLCJoYXNTdHlsZXMiLCJnZXREb2N1bWVudEZpbGVzIiwiX19odG1sIiwiY2Fub25pY2FsQmFzZSIsInN0eWxlIiwiZ2V0QW1wUGF0aCIsImhlYWRUYWdzIiwiSGVhZCIsImNvbnRleHRUeXBlIiwicHJvcFR5cGVzIiwibm9uY2UiLCJQcm9wVHlwZXMiLCJjcm9zc09yaWdpbiIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiZGF0YSIsIkpTT04iLCJlcnIiLCJhbXBEZXZGaWxlcyIsIk5leHRTY3JpcHQiLCJkaXNhYmxlT3B0aW1pemVkTG9hZGluZyIsInNhZmFyaU5vbW9kdWxlRml4IiwiYW1wUGF0aCIsImFzUGF0aCIsIk15RG9jdW1lbnQiLCJEb2N1bWVudCIsInBvc2l0aW9uIiwiekluZGV4IiwiYmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0Iiwib3BhY2l0eSIsInRvcCIsImxlZnQiLCJnZXRJbml0aWFsUHJvcHMiLCJzaGVldHMiLCJTZXJ2ZXJTdHlsZVNoZWV0cyIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJjb2xsZWN0IiwiaW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiZ2V0U3R5bGVFbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJwcmVmaXgiLCJsb2dvVGV4dCIsImltZyIsIm5vdGlmTXNnIiwib2NlYW5CbHVlIiwibGlnaHQiLCJkYXJrIiwic2Vjb25kYXJ5IiwiZ3JlZW5MZWFmIiwiZ3JheXNjYWxlIiwiY2xvdWQiLCJqb2tlciIsInZpb2xldCIsInZpb2xldGEiLCJkZWVwQmx1ZSIsImNvbnRyYXN0VGV4dCIsInJvc2VHb2xkIiwidWJ1bnR1IiwiZ2Vlbk5hdHVyZSIsInZhbXBpcmUiLCJtaW50Iiwib2NlYW5Ta3kiLCJnb2xkIiwiYm90YW5pIiwibGl0dGxlUXVlZW4iLCJwdXJwbGUiLCJibGFjayIsImJyb3duIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIs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VFMsb0JBQVksRUFBRTtBQUpMO0FBUEo7QUFESixHQWpTUTtBQWlUZlksT0FBSyxFQUFFO0FBQ0x4TixXQUFPLEVBQUU7QUFDUEMsYUFBTyxFQUFFO0FBQ1BpTSxhQUFLLEVBQUUsU0FEQTtBQUVQaE0sWUFBSSxFQUFFLFNBRkM7QUFHUGlNLFlBQUksRUFBRSxTQUhDO0FBSVBTLG9CQUFZLEVBQUU7QUFKUCxPQURGO0FBT1BSLGVBQVMsRUFBRTtBQUNURixhQUFLLEVBQUUsU0FERTtBQUVUaE0sWUFBSSxFQUFFLFNBRkc7QUFHVGlNLFlBQUksRUFBRSxTQUhHO0FBSVRTLG9CQUFZLEVBQUU7QUFKTDtBQVBKO0FBREo7QUFqVFEsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkIH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZS9wYWxldHRlJztcclxuaW1wb3J0IGJyYW5kIGZyb20gJy4uL3B1YmxpYy90ZXh0L2JyYW5kJztcclxuXHJcbmNvbnN0IEhlYWRDb21wb25lbnQgPSAoKSA9PiAoXHJcbiAgPEhlYWQ+XHJcbiAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgey8qIFVzZSBtaW5pbXVtLXNjYWxlPTEgdG8gZW5hYmxlIEdQVSByYXN0ZXJpemF0aW9uICovfVxyXG4gICAgPG1ldGFcclxuICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgY29udGVudD17YnJhbmQuY3J5cHRvLmRlc2N9XHJcbiAgICAvPlxyXG4gICAgey8qIEZhdmljb24gKi99XHJcbiAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29ucy9mYXZpY29uLmljb1wiIC8+XHJcbiAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI1N3g1N1wiIGhyZWY9XCIvZmF2aWNvbnMvYXBwbGUtaWNvbi01N3g1Ny5wbmdcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNjB4NjBcIiBocmVmPVwiL2Zhdmljb25zL2FwcGxlLWljb24tNjB4NjAucG5nXCIgLz5cclxuICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgaHJlZj1cIi9mYXZpY29ucy9hcHBsZS1pY29uLTcyeDcyLnBuZ1wiIC8+XHJcbiAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIGhyZWY9XCIvZmF2aWNvbnMvYXBwbGUtaWNvbi03Nng3Ni5wbmdcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTE0eDExNFwiIGhyZWY9XCIvZmF2aWNvbnMvYXBwbGUtaWNvbi0xMTR4MTE0LnBuZ1wiIC8+XHJcbiAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjB4MTIwXCIgaHJlZj1cIi9mYXZpY29ucy9hcHBsZS1pY29uLTEyMHgxMjAucG5nXCIgLz5cclxuICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE0NHgxNDRcIiBocmVmPVwiL2Zhdmljb25zL2FwcGxlLWljb24tMTQ0eDE0NC5wbmdcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTUyeDE1MlwiIGhyZWY9XCIvZmF2aWNvbnMvYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZ1wiIC8+XHJcbiAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9mYXZpY29ucy9hcHBsZS1pY29uLTE4MHgxODAucG5nXCIgLz5cclxuICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgaHJlZj1cIi9mYXZpY29ucy9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XHJcbiAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiOTZ4OTZcIiBocmVmPVwiL2Zhdmljb25zL2Zhdmljb24tOTZ4OTYucG5nXCIgLz5cclxuICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL2Zhdmljb25zL21hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIgY29udGVudD1cIi9mYXZpY29ucy9tcy1pY29uLTE0NHgxNDQucG5nXCIgLz5cclxuICAgIHsvKiBQV0EgcHJpbWFyeSBjb2xvciAqL31cclxuICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9e3RoZW1lLm1vbmV5LnBhbGV0dGUucHJpbWFyeS5tYWlufSAvPlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgLz5cclxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9pb25pY29uc0AzLjAuMC9kaXN0L2Nzcy9pb25pY29ucy5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICB7LyogIEZhY2Vib29rICovfVxyXG4gICAgPG1ldGEgcHJvcGVydHk9XCJhdXRob3JcIiBjb250ZW50PVwibHV4aVwiIC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJsdXhpLnV4LW1hZXN0cm8uY29tXCIgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgIHsvKiAgVHdpdHRlciAqL31cclxuICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cImx1eGkudXgtbWFlc3Ryby5jb21cIiAvPlxyXG4gICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRvbWFpblwiIGNvbnRlbnQ9XCJsdXhpLnV4LW1hZXN0cm8uY29tXCIgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cImx1eGlcIiAvPlxyXG4gICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6aW1hZ2U6c3JjXCIgY29udGVudD1cIi9pbWFnZXMvY3J5cHRvLWxvZ28ucG5nXCIgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwidGl0bGVcIiBjb250ZW50PXticmFuZC5jcnlwdG8ucHJvamVjdE5hbWV9IC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YnJhbmQuY3J5cHRvLmRlc2N9IC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2JyYW5kLmNyeXB0by51cmx9IC8+XHJcbiAgICA8bWV0YVxyXG4gICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgY29udGVudD17YnJhbmQuY3J5cHRvLmRlc2N9XHJcbiAgICAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9e2JyYW5kLmNyeXB0by51cmx9IC8+XHJcbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXticmFuZC5jcnlwdG8uY292ZXJ9IC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YnJhbmQuY3J5cHRvLmNvdmVyfSAvPlxyXG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjAwXCIgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYzMFwiIC8+XHJcbiAgPC9IZWFkPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZENvbXBvbmVudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2NyaXB0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlYWRNYW5hZ2VyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dCdcbmltcG9ydCB7IERPTUF0dHJpYnV0ZU5hbWVzIH0gZnJvbSAnLi9oZWFkLW1hbmFnZXInXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbmNvbnN0IFNjcmlwdENhY2hlID0gbmV3IE1hcCgpXG5jb25zdCBMb2FkQ2FjaGUgPSBuZXcgU2V0KClcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIFNjcmlwdEhUTUxBdHRyaWJ1dGVzPEhUTUxTY3JpcHRFbGVtZW50PiB7XG4gIHN0cmF0ZWd5PzogJ2FmdGVySW50ZXJhY3RpdmUnIHwgJ2xhenlPbmxvYWQnIHwgJ2JlZm9yZUludGVyYWN0aXZlJ1xuICBpZD86IHN0cmluZ1xuICBvbkxvYWQ/OiAoKSA9PiB2b2lkXG4gIG9uRXJyb3I/OiAoKSA9PiB2b2lkXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmNvbnN0IGlnbm9yZVByb3BzID0gW1xuICAnb25Mb2FkJyxcbiAgJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJyxcbiAgJ2NoaWxkcmVuJyxcbiAgJ29uRXJyb3InLFxuICAnc3RyYXRlZ3knLFxuXVxuXG5jb25zdCBsb2FkU2NyaXB0ID0gKHByb3BzOiBQcm9wcyk6IHZvaWQgPT4ge1xuICBjb25zdCB7XG4gICAgc3JjLFxuICAgIGlkLFxuICAgIG9uTG9hZCA9ICgpID0+IHt9LFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLFxuICAgIGNoaWxkcmVuID0gJycsXG4gICAgb25FcnJvcixcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgY2FjaGVLZXkgPSBpZCB8fCBzcmNcbiAgaWYgKFNjcmlwdENhY2hlLmhhcyhzcmMpKSB7XG4gICAgaWYgKCFMb2FkQ2FjaGUuaGFzKGNhY2hlS2V5KSkge1xuICAgICAgTG9hZENhY2hlLmFkZChjYWNoZUtleSlcbiAgICAgIC8vIEV4ZWN1dGUgb25Mb2FkIHNpbmNlIHRoZSBzY3JpcHQgbG9hZGluZyBoYXMgYmVndW5cbiAgICAgIFNjcmlwdENhY2hlLmdldChzcmMpLnRoZW4ob25Mb2FkLCBvbkVycm9yKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICBjb25zdCBsb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZSgpXG4gICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgIG9uTG9hZC5jYWxsKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlamVjdCgpXG4gICAgICBpZiAob25FcnJvcikge1xuICAgICAgICBvbkVycm9yKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGlmIChzcmMpIHtcbiAgICBTY3JpcHRDYWNoZS5zZXQoc3JjLCBsb2FkUHJvbWlzZSlcbiAgICBMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KVxuICB9XG5cbiAgaWYgKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sIHx8ICcnXG4gIH0gZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICBlbC50ZXh0Q29udGVudCA9XG4gICAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgICA/IGNoaWxkcmVuLmpvaW4oJycpXG4gICAgICAgIDogJydcbiAgfSBlbHNlIGlmIChzcmMpIHtcbiAgICBlbC5zcmMgPSBzcmNcbiAgfVxuXG4gIGZvciAoY29uc3QgW2ssIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpZ25vcmVQcm9wcy5pbmNsdWRlcyhrKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyID0gRE9NQXR0cmlidXRlTmFtZXNba10gfHwgay50b0xvd2VyQ2FzZSgpXG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xpZW50U2NyaXB0TG9hZChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBzdHJhdGVneSA9ICdhZnRlckludGVyYWN0aXZlJyB9ID0gcHJvcHNcbiAgaWYgKHN0cmF0ZWd5ID09PSAnYWZ0ZXJJbnRlcmFjdGl2ZScpIHtcbiAgICBsb2FkU2NyaXB0KHByb3BzKVxuICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnbGF6eU9ubG9hZCcpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gbG9hZFNjcmlwdChwcm9wcykpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTGF6eVNjcmlwdChwcm9wczogUHJvcHMpIHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IGxvYWRTY3JpcHQocHJvcHMpKVxuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBsb2FkU2NyaXB0KHByb3BzKSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U2NyaXB0TG9hZGVyKHNjcmlwdExvYWRlckl0ZW1zOiBQcm9wc1tdKSB7XG4gIHNjcmlwdExvYWRlckl0ZW1zLmZvckVhY2goaGFuZGxlQ2xpZW50U2NyaXB0TG9hZClcbn1cblxuZnVuY3Rpb24gU2NyaXB0KHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHtcbiAgICBzcmMgPSAnJyxcbiAgICBvbkxvYWQgPSAoKSA9PiB7fSxcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTCxcbiAgICBzdHJhdGVneSA9ICdhZnRlckludGVyYWN0aXZlJyxcbiAgICBvbkVycm9yLFxuICAgIC4uLnJlc3RQcm9wc1xuICB9ID0gcHJvcHNcblxuICAvLyBDb250ZXh0IGlzIGF2YWlsYWJsZSBvbmx5IGR1cmluZyBTU1JcbiAgY29uc3QgeyB1cGRhdGVTY3JpcHRzLCBzY3JpcHRzIH0gPSB1c2VDb250ZXh0KEhlYWRNYW5hZ2VyQ29udGV4dClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdHJhdGVneSA9PT0gJ2FmdGVySW50ZXJhY3RpdmUnKSB7XG4gICAgICBsb2FkU2NyaXB0KHByb3BzKVxuICAgIH0gZWxzZSBpZiAoc3RyYXRlZ3kgPT09ICdsYXp5T25sb2FkJykge1xuICAgICAgbG9hZExhenlTY3JpcHQocHJvcHMpXG4gICAgfVxuICB9LCBbcHJvcHMsIHN0cmF0ZWd5XSlcblxuICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JJUFRfTE9BREVSKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChzdHJhdGVneSA9PT0gJ2JlZm9yZUludGVyYWN0aXZlJykge1xuICAgIGlmICh1cGRhdGVTY3JpcHRzKSB7XG4gICAgICBzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlID0gKHNjcmlwdHMuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLmNvbmNhdChbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmMsXG4gICAgICAgICAgb25Mb2FkLFxuICAgICAgICAgIG9uRXJyb3IsXG4gICAgICAgICAgLi4ucmVzdFByb3BzLFxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICAgIHVwZGF0ZVNjcmlwdHMoc2NyaXB0cylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRcbiIsImV4cG9ydCBjb25zdCBET01BdHRyaWJ1dGVOYW1lczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgYWNjZXB0Q2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0JyxcbiAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICBodG1sRm9yOiAnZm9yJyxcbiAgaHR0cEVxdWl2OiAnaHR0cC1lcXVpdicsXG4gIG5vTW9kdWxlOiAnbm9Nb2R1bGUnLFxufVxuXG5mdW5jdGlvbiByZWFjdEVsZW1lbnRUb0RPTSh7IHR5cGUsIHByb3BzIH06IEpTWC5FbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBlbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gIGZvciAoY29uc3QgcCBpbiBwcm9wcykge1xuICAgIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkocCkpIGNvbnRpbnVlXG4gICAgaWYgKHAgPT09ICdjaGlsZHJlbicgfHwgcCA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykgY29udGludWVcblxuICAgIC8vIHdlIGRvbid0IHJlbmRlciB1bmRlZmluZWQgcHJvcHMgdG8gdGhlIERPTVxuICAgIGlmIChwcm9wc1twXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZVxuXG4gICAgY29uc3QgYXR0ciA9IERPTUF0dHJpYnV0ZU5hbWVzW3BdIHx8IHAudG9Mb3dlckNhc2UoKVxuICAgIGlmIChcbiAgICAgIHR5cGUgPT09ICdzY3JpcHQnICYmXG4gICAgICAoYXR0ciA9PT0gJ2FzeW5jJyB8fCBhdHRyID09PSAnZGVmZXInIHx8IGF0dHIgPT09ICdub01vZHVsZScpXG4gICAgKSB7XG4gICAgICA7KGVsIGFzIEhUTUxTY3JpcHRFbGVtZW50KVthdHRyXSA9ICEhcHJvcHNbcF1cbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHByb3BzW3BdKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIH0gPSBwcm9wc1xuICBpZiAoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwgfHwgJydcbiAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgIGVsLnRleHRDb250ZW50ID1cbiAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBjaGlsZHJlblxuICAgICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICAgID8gY2hpbGRyZW4uam9pbignJylcbiAgICAgICAgOiAnJ1xuICB9XG4gIHJldHVybiBlbFxufVxuXG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50cyh0eXBlOiBzdHJpbmcsIGNvbXBvbmVudHM6IEpTWC5FbGVtZW50W10pOiB2b2lkIHtcbiAgY29uc3QgaGVhZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICBjb25zdCBoZWFkQ291bnRFbDogSFRNTE1ldGFFbGVtZW50ID0gaGVhZEVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ21ldGFbbmFtZT1uZXh0LWhlYWQtY291bnRdJ1xuICApIGFzIEhUTUxNZXRhRWxlbWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghaGVhZENvdW50RWwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdXYXJuaW5nOiBuZXh0LWhlYWQtY291bnQgaXMgbWlzc2luZy4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1oZWFkLWNvdW50LW1pc3NpbmcnXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWFkQ291bnQgPSBOdW1iZXIoaGVhZENvdW50RWwuY29udGVudClcbiAgY29uc3Qgb2xkVGFnczogRWxlbWVudFtdID0gW11cblxuICBmb3IgKFxuICAgIGxldCBpID0gMCwgaiA9IGhlYWRDb3VudEVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaSA8IGhlYWRDb3VudDtcbiAgICBpKyssIGogPSBqIS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICkge1xuICAgIGlmIChqIS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHR5cGUpIHtcbiAgICAgIG9sZFRhZ3MucHVzaChqISlcbiAgICB9XG4gIH1cbiAgY29uc3QgbmV3VGFncyA9IChjb21wb25lbnRzLm1hcChyZWFjdEVsZW1lbnRUb0RPTSkgYXMgSFRNTEVsZW1lbnRbXSkuZmlsdGVyKFxuICAgIChuZXdUYWcpID0+IHtcbiAgICAgIGZvciAobGV0IGsgPSAwLCBsZW4gPSBvbGRUYWdzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGNvbnN0IG9sZFRhZyA9IG9sZFRhZ3Nba11cbiAgICAgICAgaWYgKG9sZFRhZy5pc0VxdWFsTm9kZShuZXdUYWcpKSB7XG4gICAgICAgICAgb2xkVGFncy5zcGxpY2UoaywgMSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIClcblxuICBvbGRUYWdzLmZvckVhY2goKHQpID0+IHQucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQodCkpXG4gIG5ld1RhZ3MuZm9yRWFjaCgodCkgPT4gaGVhZEVsLmluc2VydEJlZm9yZSh0LCBoZWFkQ291bnRFbCkpXG4gIGhlYWRDb3VudEVsLmNvbnRlbnQgPSAoaGVhZENvdW50IC0gb2xkVGFncy5sZW5ndGggKyBuZXdUYWdzLmxlbmd0aCkudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SGVhZE1hbmFnZXIoKToge1xuICBtb3VudGVkSW5zdGFuY2VzOiBTZXQ8dW5rbm93bj5cbiAgdXBkYXRlSGVhZDogKGhlYWQ6IEpTWC5FbGVtZW50W10pID0+IHZvaWRcbn0ge1xuICBsZXQgdXBkYXRlUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsXG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudGVkSW5zdGFuY2VzOiBuZXcgU2V0KCksXG4gICAgdXBkYXRlSGVhZDogKGhlYWQ6IEpTWC5FbGVtZW50W10pID0+IHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSAodXBkYXRlUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAocHJvbWlzZSAhPT0gdXBkYXRlUHJvbWlzZSkgcmV0dXJuXG5cbiAgICAgICAgdXBkYXRlUHJvbWlzZSA9IG51bGxcbiAgICAgICAgY29uc3QgdGFnczogUmVjb3JkPHN0cmluZywgSlNYLkVsZW1lbnRbXT4gPSB7fVxuXG4gICAgICAgIGhlYWQuZm9yRWFjaCgoaCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vIElmIHRoZSBmb250IHRhZyBpcyBsb2FkZWQgb25seSBvbiBjbGllbnQgbmF2aWdhdGlvblxuICAgICAgICAgICAgLy8gaXQgd29uJ3QgYmUgaW5saW5lZC4gSW4gdGhpcyBjYXNlIHJldmVydCB0byB0aGUgb3JpZ2luYWwgYmVoYXZpb3JcbiAgICAgICAgICAgIGgudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgICBoLnByb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddICYmXG4gICAgICAgICAgICAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYHN0eWxlW2RhdGEtaHJlZj1cIiR7aC5wcm9wc1snZGF0YS1ocmVmJ119XCJdYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaC5wcm9wcy5ocmVmID0gaC5wcm9wc1snZGF0YS1ocmVmJ11cbiAgICAgICAgICAgIGgucHJvcHNbJ2RhdGEtaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0YWdzW2gudHlwZV0gfHwgW11cbiAgICAgICAgICBjb21wb25lbnRzLnB1c2goaClcbiAgICAgICAgICB0YWdzW2gudHlwZV0gPSBjb21wb25lbnRzXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgdGl0bGVDb21wb25lbnQgPSB0YWdzLnRpdGxlID8gdGFncy50aXRsZVswXSA6IG51bGxcbiAgICAgICAgbGV0IHRpdGxlID0gJydcbiAgICAgICAgaWYgKHRpdGxlQ29tcG9uZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGl0bGVDb21wb25lbnQucHJvcHNcbiAgICAgICAgICB0aXRsZSA9XG4gICAgICAgICAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgICAgICAgICA/IGNoaWxkcmVuLmpvaW4oJycpXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgICBpZiAodGl0bGUgIT09IGRvY3VtZW50LnRpdGxlKSBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gICAgICAgIDtbJ21ldGEnLCAnYmFzZScsICdsaW5rJywgJ3N0eWxlJywgJ3NjcmlwdCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgICB1cGRhdGVFbGVtZW50cyh0eXBlLCB0YWdzW3R5cGVdIHx8IFtdKVxuICAgICAgICB9KVxuICAgICAgfSkpXG4gICAgfSxcbiAgfVxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCB7XG4gIEFNUF9SRU5ERVJfVEFSR0VULFxuICBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgeyBEb2N1bWVudENvbnRleHQgYXMgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQnXG5pbXBvcnQge1xuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQge1xuICBCdWlsZE1hbmlmZXN0LFxuICBnZXRQYWdlRmlsZXMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IGNsZWFuQW1wUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci91dGlscydcbmltcG9ydCB7IGh0bWxFc2NhcGVKc29uU3RyaW5nIH0gZnJvbSAnLi4vc2VydmVyL2h0bWxlc2NhcGUnXG5pbXBvcnQgU2NyaXB0LCB7XG4gIFByb3BzIGFzIFNjcmlwdExvYWRlclByb3BzLFxufSBmcm9tICcuLi9jbGllbnQvZXhwZXJpbWVudGFsLXNjcmlwdCdcblxuZXhwb3J0IHsgRG9jdW1lbnRDb250ZXh0LCBEb2N1bWVudEluaXRpYWxQcm9wcywgRG9jdW1lbnRQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIE9yaWdpblByb3BzID0ge1xuICBub25jZT86IHN0cmluZ1xuICBjcm9zc09yaWdpbj86IHN0cmluZ1xufVxuXG50eXBlIERvY3VtZW50RmlsZXMgPSB7XG4gIHNoYXJlZEZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxuICBwYWdlRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdXG4gIGFsbEZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudEZpbGVzKFxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0LFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBpbkFtcE1vZGU6IGJvb2xlYW5cbik6IERvY3VtZW50RmlsZXMge1xuICBjb25zdCBzaGFyZWRGaWxlczogcmVhZG9ubHkgc3RyaW5nW10gPSBnZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgJy9fYXBwJylcbiAgY29uc3QgcGFnZUZpbGVzOiByZWFkb25seSBzdHJpbmdbXSA9IGluQW1wTW9kZVxuICAgID8gW11cbiAgICA6IGdldFBhZ2VGaWxlcyhidWlsZE1hbmlmZXN0LCBwYXRobmFtZSlcblxuICByZXR1cm4ge1xuICAgIHNoYXJlZEZpbGVzLFxuICAgIHBhZ2VGaWxlcyxcbiAgICBhbGxGaWxlczogWy4uLm5ldyBTZXQoWy4uLnNoYXJlZEZpbGVzLCAuLi5wYWdlRmlsZXNdKV0sXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UG9seWZpbGxTY3JpcHRzKGNvbnRleHQ6IERvY3VtZW50UHJvcHMsIHByb3BzOiBPcmlnaW5Qcm9wcykge1xuICAvLyBwb2x5ZmlsbHMuanMgaGFzIHRvIGJlIHJlbmRlcmVkIGFzIG5vbW9kdWxlIHdpdGhvdXQgYXN5bmNcbiAgLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG4gIGNvbnN0IHtcbiAgICBhc3NldFByZWZpeCxcbiAgICBidWlsZE1hbmlmZXN0LFxuICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICB9ID0gY29udGV4dFxuXG4gIHJldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXNcbiAgICAuZmlsdGVyKFxuICAgICAgKHBvbHlmaWxsKSA9PiBwb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykgJiYgIXBvbHlmaWxsLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICApXG4gICAgLm1hcCgocG9seWZpbGwpID0+IChcbiAgICAgIDxzY3JpcHRcbiAgICAgICAga2V5PXtwb2x5ZmlsbH1cbiAgICAgICAgZGVmZXI9eyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZ31cbiAgICAgICAgbm9uY2U9e3Byb3BzLm5vbmNlfVxuICAgICAgICBjcm9zc09yaWdpbj17cHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn1cbiAgICAgICAgbm9Nb2R1bGU9e3RydWV9XG4gICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgLz5cbiAgICApKVxufVxuXG5mdW5jdGlvbiBnZXRQcmVOZXh0U2NyaXB0cyhjb250ZXh0OiBEb2N1bWVudFByb3BzLCBwcm9wczogT3JpZ2luUHJvcHMpIHtcbiAgY29uc3QgeyBzY3JpcHRMb2FkZXIsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nIH0gPSBjb250ZXh0XG5cbiAgcmV0dXJuIChzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLm1hcChcbiAgICAoZmlsZTogU2NyaXB0TG9hZGVyUHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyYXRlZ3ksIC4uLnNjcmlwdFByb3BzIH0gPSBmaWxlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgey4uLnNjcmlwdFByb3BzfVxuICAgICAgICAgIGRlZmVyPXshZGlzYWJsZU9wdGltaXplZExvYWRpbmd9XG4gICAgICAgICAgbm9uY2U9e3Byb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtwcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBnZXREeW5hbWljQ2h1bmtzKFxuICBjb250ZXh0OiBEb2N1bWVudFByb3BzLFxuICBwcm9wczogT3JpZ2luUHJvcHMsXG4gIGZpbGVzOiBEb2N1bWVudEZpbGVzXG4pIHtcbiAgY29uc3Qge1xuICAgIGR5bmFtaWNJbXBvcnRzLFxuICAgIGFzc2V0UHJlZml4LFxuICAgIGlzRGV2ZWxvcG1lbnQsXG4gICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gIH0gPSBjb250ZXh0XG5cbiAgcmV0dXJuIGR5bmFtaWNJbXBvcnRzLm1hcCgoZmlsZSkgPT4ge1xuICAgIGlmICghZmlsZS5lbmRzV2l0aCgnLmpzJykgfHwgZmlsZXMuYWxsRmlsZXMuaW5jbHVkZXMoZmlsZSkpIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNjcmlwdFxuICAgICAgICBhc3luYz17IWlzRGV2ZWxvcG1lbnQgJiYgZGlzYWJsZU9wdGltaXplZExvYWRpbmd9XG4gICAgICAgIGRlZmVyPXshZGlzYWJsZU9wdGltaXplZExvYWRpbmd9XG4gICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgZmlsZVxuICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgbm9uY2U9e3Byb3BzLm5vbmNlfVxuICAgICAgICBjcm9zc09yaWdpbj17cHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn1cbiAgICAgIC8+XG4gICAgKVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRTY3JpcHRzKFxuICBjb250ZXh0OiBEb2N1bWVudFByb3BzLFxuICBwcm9wczogT3JpZ2luUHJvcHMsXG4gIGZpbGVzOiBEb2N1bWVudEZpbGVzXG4pIHtcbiAgY29uc3Qge1xuICAgIGFzc2V0UHJlZml4LFxuICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgaXNEZXZlbG9wbWVudCxcbiAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgfSA9IGNvbnRleHRcblxuICBjb25zdCBub3JtYWxTY3JpcHRzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKSlcbiAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gYnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzPy5maWx0ZXIoKGZpbGUpID0+XG4gICAgZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgKVxuXG4gIHJldHVybiBbLi4ubm9ybWFsU2NyaXB0cywgLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoKGZpbGUpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNjcmlwdFxuICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgIG5vbmNlPXtwcm9wcy5ub25jZX1cbiAgICAgICAgYXN5bmM9eyFpc0RldmVsb3BtZW50ICYmIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICBkZWZlcj17IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICBjcm9zc09yaWdpbj17cHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn1cbiAgICAgIC8+XG4gICAgKVxuICB9KVxufVxuXG4vKipcbiAqIGBEb2N1bWVudGAgY29tcG9uZW50IGhhbmRsZXMgdGhlIGluaXRpYWwgYGRvY3VtZW50YCBtYXJrdXAgYW5kIHJlbmRlcnMgb25seSBvbiB0aGUgc2VydmVyIHNpZGUuXG4gKiBDb21tb25seSB1c2VkIGZvciBpbXBsZW1lbnRpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGZvciBgY3NzLWluLWpzYCBsaWJyYXJpZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50PFAgPSB7fT4gZXh0ZW5kcyBDb21wb25lbnQ8RG9jdW1lbnRQcm9wcyAmIFA+IHtcbiAgLyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoXG4gICAgY3R4OiBEb2N1bWVudENvbnRleHRcbiAgKTogUHJvbWlzZTxEb2N1bWVudEluaXRpYWxQcm9wcz4ge1xuICAgIGNvbnN0IGVuaGFuY2VBcHAgPSAoQXBwOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAocHJvcHM6IGFueSkgPT4gPEFwcCB7Li4ucHJvcHN9IC8+XG4gICAgfVxuXG4gICAgY29uc3QgeyBodG1sLCBoZWFkIH0gPSBhd2FpdCBjdHgucmVuZGVyUGFnZSh7IGVuaGFuY2VBcHAgfSlcbiAgICBjb25zdCBzdHlsZXMgPSBbLi4uZmx1c2goKV1cbiAgICByZXR1cm4geyBodG1sLCBoZWFkLCBzdHlsZXMgfVxuICB9XG5cbiAgc3RhdGljIHJlbmRlckRvY3VtZW50PFk+KFxuICAgIERvY3VtZW50Q29tcG9uZW50OiBuZXcgKCkgPT4gRG9jdW1lbnQ8WT4sXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHMgJiBZXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2N1bWVudENvbXBvbmVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb3BzfT5cbiAgICAgICAgPERvY3VtZW50Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvRG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWw+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSHRtbChcbiAgcHJvcHM6IFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgIFJlYWN0Lkh0bWxIVE1MQXR0cmlidXRlczxIVE1MSHRtbEVsZW1lbnQ+LFxuICAgIEhUTUxIdG1sRWxlbWVudFxuICA+XG4pIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCwgbG9jYWxlIH0gPSB1c2VDb250ZXh0KFxuICAgIERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuICApXG5cbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWwgPSB0cnVlXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbFxuICAgICAgey4uLnByb3BzfVxuICAgICAgbGFuZz17cHJvcHMubGFuZyB8fCBsb2NhbGUgfHwgdW5kZWZpbmVkfVxuICAgICAgYW1wPXtpbkFtcE1vZGUgPyAnJyA6IHVuZGVmaW5lZH1cbiAgICAgIGRhdGEtYW1wZGV2bW9kZT17XG4gICAgICAgIGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkIGV4dGVuZHMgQ29tcG9uZW50PFxuICBPcmlnaW5Qcm9wcyAmXG4gICAgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MSGVhZEVsZW1lbnQ+LFxuICAgICAgSFRNTEhlYWRFbGVtZW50XG4gICAgPlxuPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICBnZXRDc3NMaW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcyk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGNzc0ZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmKSA9PiBmLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgY29uc3Qgc2hhcmVkRmlsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcylcblxuICAgIC8vIFVubWFuYWdlZCBmaWxlcyBhcmUgQ1NTIGZpbGVzIHRoYXQgd2lsbCBiZSBoYW5kbGVkIGRpcmVjdGx5IGJ5IHRoZVxuICAgIC8vIHdlYnBhY2sgcnVudGltZSAoYG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luYCkuXG4gICAgbGV0IHVubWFuZ2VkRmlsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbXSlcbiAgICBsZXQgZHluYW1pY0Nzc0ZpbGVzID0gQXJyYXkuZnJvbShcbiAgICAgIG5ldyBTZXQoZHluYW1pY0ltcG9ydHMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKCcuY3NzJykpKVxuICAgIClcbiAgICBpZiAoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXcgU2V0KGNzc0ZpbGVzKVxuICAgICAgZHluYW1pY0Nzc0ZpbGVzID0gZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcihcbiAgICAgICAgKGYpID0+ICEoZXhpc3RpbmcuaGFzKGYpIHx8IHNoYXJlZEZpbGVzLmhhcyhmKSlcbiAgICAgIClcbiAgICAgIHVubWFuZ2VkRmlsZXMgPSBuZXcgU2V0KGR5bmFtaWNDc3NGaWxlcylcbiAgICAgIGNzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKVxuICAgIH1cblxuICAgIGxldCBjc3NMaW5rRWxlbWVudHM6IEpTWC5FbGVtZW50W10gPSBbXVxuICAgIGNzc0ZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGlzU2hhcmVkRmlsZSA9IHNoYXJlZEZpbGVzLmhhcyhmaWxlKVxuXG4gICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MpIHtcbiAgICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17YCR7ZmlsZX0tcHJlbG9hZGB9XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzVW5tYW5hZ2VkRmlsZSA9IHVubWFuZ2VkRmlsZXMuaGFzKGZpbGUpXG4gICAgICBjc3NMaW5rRWxlbWVudHMucHVzaChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhLW4tZz17aXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICAgICAgZGF0YS1uLXA9e2lzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/IHVuZGVmaW5lZCA6ICcnfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTXG4gICAgKSB7XG4gICAgICBjc3NMaW5rRWxlbWVudHMgPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoXG4gICAgICAgIGNzc0xpbmtFbGVtZW50c1xuICAgICAgKSBhcyBSZWFjdEVsZW1lbnRbXVxuICAgIH1cblxuICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50c1xuICB9XG5cbiAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoXG4gICAgICBkeW5hbWljSW1wb3J0c1xuICAgICAgICAubWFwKChmaWxlKSA9PiB7XG4gICAgICAgICAgaWYgKCFmaWxlLmVuZHNXaXRoKCcuanMnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIC8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgIClcbiAgfVxuXG4gIGdldFByZWxvYWRNYWluTGlua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICAgIHNjcmlwdExvYWRlcixcbiAgICB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgcHJlbG9hZEZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gW1xuICAgICAgLi4uKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkubWFwKChmaWxlKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlLnNyY31cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtmaWxlLnNyY31cbiAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSksXG4gICAgICAuLi5wcmVsb2FkRmlsZXMubWFwKChmaWxlOiBzdHJpbmcpID0+IChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApKSxcbiAgICBdXG4gIH1cblxuICBnZXREeW5hbWljQ2h1bmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgcmV0dXJuIGdldER5bmFtaWNDaHVua3ModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcylcbiAgfVxuXG4gIGdldFByZU5leHRTY3JpcHRzKCkge1xuICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpXG4gIH1cblxuICBnZXRTY3JpcHRzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgcmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcylcbiAgfVxuXG4gIGdldFBvbHlmaWxsU2NyaXB0cygpIHtcbiAgICByZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcylcbiAgfVxuXG4gIGhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSk6IFJlYWN0Tm9kZVtdIHtcbiAgICBjb25zdCB7IHNjcmlwdExvYWRlciB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3Qgc2NyaXB0TG9hZGVySXRlbXM6IFNjcmlwdExvYWRlclByb3BzW10gPSBbXVxuICAgIGNvbnN0IGZpbHRlcmVkQ2hpbGRyZW46IFJlYWN0Tm9kZVtdID0gW11cblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gU2NyaXB0KSB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcy5zdHJhdGVneSA9PT0gJ2JlZm9yZUludGVyYWN0aXZlJykge1xuICAgICAgICAgIHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSA9IChcbiAgICAgICAgICAgIHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXVxuICAgICAgICAgICkuY29uY2F0KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLi4uY2hpbGQucHJvcHMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgWydsYXp5T25sb2FkJywgJ2FmdGVySW50ZXJhY3RpdmUnXS5pbmNsdWRlcyhjaGlsZC5wcm9wcy5zdHJhdGVneSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2NyaXB0TG9hZGVySXRlbXMucHVzaChjaGlsZC5wcm9wcylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmaWx0ZXJlZENoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnNjcmlwdExvYWRlciA9IHNjcmlwdExvYWRlckl0ZW1zXG5cbiAgICByZXR1cm4gZmlsdGVyZWRDaGlsZHJlblxuICB9XG5cbiAgbWFrZVN0eWxlc2hlZXRJbmVydChub2RlOiBSZWFjdE5vZGUpOiBSZWFjdE5vZGVbXSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChub2RlLCAoYzogYW55KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgIGMucHJvcHNbJ2hyZWYnXSAmJlxuICAgICAgICBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMuc29tZSgodXJsKSA9PiBjLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb3BzID0geyAuLi4oYy5wcm9wcyB8fCB7fSkgfVxuICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddXG4gICAgICAgIG5ld1Byb3BzWydocmVmJ10gPSB1bmRlZmluZWRcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcylcbiAgICAgIH0gZWxzZSBpZiAoYy5wcm9wcyAmJiBjLnByb3BzWydjaGlsZHJlbiddKSB7XG4gICAgICAgIGMucHJvcHNbJ2NoaWxkcmVuJ10gPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoYy5wcm9wc1snY2hpbGRyZW4nXSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBjXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdHlsZXMsXG4gICAgICBhbXBQYXRoLFxuICAgICAgaW5BbXBNb2RlLFxuICAgICAgaHlicmlkQW1wLFxuICAgICAgY2Fub25pY2FsQmFzZSxcbiAgICAgIF9fTkVYVF9EQVRBX18sXG4gICAgICBkYW5nZXJvdXNBc1BhdGgsXG4gICAgICBoZWFkVGFncyxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICAgIHVuc3RhYmxlX0pzUHJlbG9hZCxcbiAgICAgIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG4gICAgY29uc3QgZGlzYWJsZUpzUHJlbG9hZCA9XG4gICAgICB1bnN0YWJsZV9Kc1ByZWxvYWQgPT09IGZhbHNlIHx8ICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZ1xuXG4gICAgdGhpcy5jb250ZXh0LmRvY0NvbXBvbmVudHNSZW5kZXJlZC5IZWFkID0gdHJ1ZVxuXG4gICAgbGV0IHsgaGVhZCB9ID0gdGhpcy5jb250ZXh0XG4gICAgbGV0IGNzc1ByZWxvYWRzOiBBcnJheTxKU1guRWxlbWVudD4gPSBbXVxuICAgIGxldCBvdGhlckhlYWRFbGVtZW50czogQXJyYXk8SlNYLkVsZW1lbnQ+ID0gW11cbiAgICBpZiAoaGVhZCkge1xuICAgICAgaGVhZC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjICYmXG4gICAgICAgICAgYy50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgICBjLnByb3BzWydyZWwnXSA9PT0gJ3ByZWxvYWQnICYmXG4gICAgICAgICAgYy5wcm9wc1snYXMnXSA9PT0gJ3N0eWxlJ1xuICAgICAgICApIHtcbiAgICAgICAgICBjc3NQcmVsb2Fkcy5wdXNoKGMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYyAmJiBvdGhlckhlYWRFbGVtZW50cy5wdXNoKGMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBoZWFkID0gY3NzUHJlbG9hZHMuY29uY2F0KG90aGVySGVhZEVsZW1lbnRzKVxuICAgIH1cbiAgICBsZXQgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZpbHRlcihCb29sZWFuKVxuICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZD8ucHJvcHM/LlsnZGF0YS1yZWFjdC1oZWxtZXQnXVxuICAgICAgICBpZiAoIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQ/LnR5cGUgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXRpdGxlXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgY2hpbGQ/LnR5cGUgPT09ICdtZXRhJyAmJlxuICAgICAgICAgICAgY2hpbGQ/LnByb3BzPy5uYW1lID09PSAndmlld3BvcnQnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiV2FybmluZzogdmlld3BvcnQgbWV0YSB0YWdzIHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXZpZXdwb3J0LW1ldGFcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH0pXG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmXG4gICAgICAhaW5BbXBNb2RlXG4gICAgKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjaGlsZHJlbilcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUklQVF9MT0FERVIpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKVxuICAgIH1cblxuICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2VcbiAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2VcblxuICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICBoZWFkID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkXG4gICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBjaGlsZFxuICAgICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgICBsZXQgYmFkUHJvcDogc3RyaW5nID0gJydcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ21ldGEnICYmIHByb3BzLm5hbWUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICBiYWRQcm9wID0gJ25hbWU9XCJ2aWV3cG9ydFwiJ1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdjYW5vbmljYWwnKSB7XG4gICAgICAgICAgaGFzQ2Fub25pY2FsUmVsID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY3JpcHQnKSB7XG4gICAgICAgICAgLy8gb25seSBibG9jayBpZlxuICAgICAgICAgIC8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuICAgICAgICAgIC8vIDIuIGl0IGlzIHVzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHdpdGhvdXQgYSB0eXBlIG9yXG4gICAgICAgICAgLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChwcm9wcy5zcmMgJiYgcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKSA8IC0xKSB8fFxuICAgICAgICAgICAgKHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmXG4gICAgICAgICAgICAgICghcHJvcHMudHlwZSB8fCBwcm9wcy50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBiYWRQcm9wID0gJzxzY3JpcHQnXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgICAgICBiYWRQcm9wICs9IGAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmFkUHJvcCArPSAnLz4nXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJhZFByb3ApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NvbmZsaWN0aW5nLWFtcC10YWdgXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vbi1hbXAgbW9kZVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2FtcGh0bWwnKSB7XG4gICAgICAgICAgaGFzQW1waHRtbFJlbCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfSlcblxuICAgIC8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIGNvbnN0IGN1clN0eWxlczogUmVhY3QuUmVhY3RFbGVtZW50W10gPSBBcnJheS5pc0FycmF5KHN0eWxlcylcbiAgICAgID8gKHN0eWxlcyBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXSlcbiAgICAgIDogW11cbiAgICBpZiAoXG4gICAgICBpbkFtcE1vZGUgJiZcbiAgICAgIHN0eWxlcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWw6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT5cbiAgICAgICAgZWw/LnByb3BzPy5kYW5nZXJvdXNseVNldElubmVySFRNTD8uX19odG1sXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgIGNoaWxkLmZvckVhY2goKGVsKSA9PiBoYXNTdHlsZXMoZWwpICYmIGN1clN0eWxlcy5wdXNoKGVsKSlcbiAgICAgICAgfSBlbHNlIGlmIChoYXNTdHlsZXMoY2hpbGQpKSB7XG4gICAgICAgICAgY3VyU3R5bGVzLnB1c2goY2hpbGQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmlsZXM6IERvY3VtZW50RmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKFxuICAgICAgdGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsXG4gICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLFxuICAgICAgaW5BbXBNb2RlXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHRcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtoZWFkfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJuZXh0LWhlYWQtY291bnRcIlxuICAgICAgICAgIGNvbnRlbnQ9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaGFzQ2Fub25pY2FsUmVsICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBjbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogaHR0cHM6Ly93d3cuYW1wcHJvamVjdC5vcmcvZG9jcy9mdW5kYW1lbnRhbHMvb3B0aW1pemVfYW1wI29wdGltaXplLXRoZS1hbXAtcnVudGltZS1sb2FkaW5nICovfVxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogQWRkIGN1c3RvbSBzdHlsZXMgYmVmb3JlIEFNUCBzdHlsZXMgdG8gcHJldmVudCBhY2NpZGVudGFsIG92ZXJyaWRlcyAqL31cbiAgICAgICAgICAgIHtzdHlsZXMgJiYgKFxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtY3VzdG9tPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3R5bGUpID0+IHN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IWluQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHshaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImFtcGh0bWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIHRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAgeyFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIChcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGRhdGEtbi1jc3M9e3RoaXMucHJvcHMubm9uY2UgPz8gJyd9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlSnNQcmVsb2FkICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZUpzUHJlbG9hZCAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAgeyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpfVxuICAgICAgICAgICAgeyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFByZU5leHRTY3JpcHRzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0U2NyaXB0cyhmaWxlcyl9XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIChcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGRhdGEtbi1jc3M9e3RoaXMucHJvcHMubm9uY2UgPz8gJyd9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICAgICAgLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuICAgICAgICAgICAgICAvLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBpZD1cIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N0eWxlcyB8fCBudWxsfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIC4uLihoZWFkVGFncyB8fCBbXSkpfVxuICAgICAgPC9oZWFkPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGh0bWwsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCB9ID0gdXNlQ29udGV4dChcbiAgICBEb2N1bWVudENvbXBvbmVudENvbnRleHRcbiAgKVxuXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5NYWluID0gdHJ1ZVxuXG4gIGlmIChpbkFtcE1vZGUpIHJldHVybiA8PntBTVBfUkVOREVSX1RBUkdFVH08Lz5cbiAgcmV0dXJuIDxkaXYgaWQ9XCJfX25leHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz5cbn1cblxuZXhwb3J0IGNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBDb21wb25lbnQ8T3JpZ2luUHJvcHM+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBub25jZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcm9zc09yaWdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIC8vIFNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vc2FtdGhvci82NGIxMTRlNGE0ZjUzOTkxNWE5NWI5MWZmZDM0MGFjY1xuICBzdGF0aWMgc2FmYXJpTm9tb2R1bGVGaXggPVxuICAgICchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOydcblxuICBnZXREeW5hbWljQ2h1bmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgcmV0dXJuIGdldER5bmFtaWNDaHVua3ModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcylcbiAgfVxuXG4gIGdldFByZU5leHRTY3JpcHRzKCkge1xuICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpXG4gIH1cblxuICBnZXRTY3JpcHRzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgcmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcylcbiAgfVxuXG4gIGdldFBvbHlmaWxsU2NyaXB0cygpIHtcbiAgICByZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcylcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wczogUmVhZG9ubHk8RG9jdW1lbnRQcm9wcz4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyB9ID0gZG9jdW1lbnRQcm9wc1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXylcbiAgICAgIHJldHVybiBodG1sRXNjYXBlSnNvblN0cmluZyhkYXRhKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvY2lyY3VsYXItc3RydWN0dXJlYFxuICAgICAgICApXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBidWlsZE1hbmlmZXN0LFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2VcblxuICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5OZXh0U2NyaXB0ID0gdHJ1ZVxuXG4gICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgYW1wRGV2RmlsZXMgPSBbXG4gICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMsXG4gICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlcyxcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5hbXBEZXZGaWxlcyxcbiAgICAgIF1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2FtcERldkZpbGVzLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgZmlsZXM6IERvY3VtZW50RmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKFxuICAgICAgdGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsXG4gICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLFxuICAgICAgaW5BbXBNb2RlXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBidWlsZE1hbmlmZXN0LmRldkZpbGVzXG4gICAgICAgICAgPyBidWlsZE1hbmlmZXN0LmRldkZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7ZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiZcbiAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCl9XG4gICAgICAgIHtkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgdGhpcy5nZXRQcmVOZXh0U2NyaXB0cygpfVxuICAgICAgICB7ZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiZcbiAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgIHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyl9XG4gICAgICAgIHtkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFNjcmlwdHMoZmlsZXMpfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aDogc3RyaW5nLCBhc1BhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBhbXBQYXRoIHx8IGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nfWFtcD0xYFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGVzY2FwZS5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fZG9jdW1lbnQnKVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcclxuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSGVhZENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2hlYWQnO1xyXG5cclxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIiBkaXI9XCJsdHJcIj5cclxuICAgICAgICA8SGVhZENvbXBvbmVudCAvPlxyXG4gICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cInByZWxvYWRlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgekluZGV4OiAxMDAwMCxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZhZmFmYScsXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgICAgIHRvcDogJ2NhbGMoNTAlIC0gNTBweCknLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogJ2NhbGMoNTAlIC0gNTBweCknXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvYWRpbmcuZ2lmXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJsb2FkaW5nXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICA8L0h0bWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuTXlEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gIC8vIFJlc29sdXRpb24gb3JkZXJcclxuICAvL1xyXG4gIC8vIE9uIHRoZSBzZXJ2ZXI6XHJcbiAgLy8gMS4gYXBwLmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDIuIHBhZ2UuZ2V0SW5pdGlhbFByb3BzXHJcbiAgLy8gMy4gZG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzXHJcbiAgLy8gNC4gYXBwLnJlbmRlclxyXG4gIC8vIDUuIHBhZ2UucmVuZGVyXHJcbiAgLy8gNi4gZG9jdW1lbnQucmVuZGVyXHJcbiAgLy9cclxuICAvLyBPbiB0aGUgc2VydmVyIHdpdGggZXJyb3I6XHJcbiAgLy8gMS4gZG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzXHJcbiAgLy8gMi4gYXBwLnJlbmRlclxyXG4gIC8vIDMuIHBhZ2UucmVuZGVyXHJcbiAgLy8gNC4gZG9jdW1lbnQucmVuZGVyXHJcbiAgLy9cclxuICAvLyBPbiB0aGUgY2xpZW50XHJcbiAgLy8gMS4gYXBwLmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDIuIHBhZ2UuZ2V0SW5pdGlhbFByb3BzXHJcbiAgLy8gMy4gYXBwLnJlbmRlclxyXG4gIC8vIDQuIHBhZ2UucmVuZGVyXHJcblxyXG4gIC8vIFJlbmRlciBhcHAgYW5kIHBhZ2UgYW5kIGdldCB0aGUgY29udGV4dCBvZiB0aGUgcGFnZSB3aXRoIGNvbGxlY3RlZCBzaWRlIGVmZmVjdHMuXHJcbiAgY29uc3Qgc2hlZXRzID0gbmV3IFNlcnZlclN0eWxlU2hlZXRzKCk7XHJcbiAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XHJcblxyXG4gIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cclxuICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgZW5oYW5jZUFwcDogQXBwID0+IHByb3BzID0+IHNoZWV0cy5jb2xsZWN0KDxBcHAgey4uLnByb3BzfSAvPiksIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmluaXRpYWxQcm9wcyxcclxuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjcnlwdG8tbGFuZGluZycsICdjb21tb24nXSxcclxuICAgIC8vIFN0eWxlcyBmcmFnbWVudCBpcyByZW5kZXJlZCBhZnRlciB0aGUgYXBwIGFuZCBwYWdlIHJlbmRlcmluZyBmaW5pc2guXHJcbiAgICBzdHlsZXM6IFsuLi5SZWFjdC5DaGlsZHJlbi50b0FycmF5KGluaXRpYWxQcm9wcy5zdHlsZXMpLCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiBzaGVldHMuZ2V0U3R5bGVFbGVtZW50KCldXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGNyeXB0bzoge1xyXG4gICAgbmFtZTogJ1RyYWRpbmdQbGFuZXQnLFxyXG4gICAgZGVzYzogJ1dpdGggVFAsIG91ciBnb3Zlcm5hbmNlIHRva2VuLCB5b3UgY2FuIGhlbHAgZGVjaWRlIHRoZSBmdXR1cmUgb2YgdGhlIGV4Y2hhbmdlLiBBcyB3ZSBncm93LCB5b3UgZ3JvdyEnLFxyXG4gICAgcHJlZml4OiAndHAnLFxyXG4gICAgbG9nb1RleHQ6ICdUcmFkaW5nUGxhbmV0JyxcclxuICAgIHByb2plY3ROYW1lOiAnVHJhZGluZ1BsYW5ldCcsXHJcbiAgICAvLyB1cmw6ICdsdXhpcmVhY3QudXgtbWFlc3Ryby5jb20vY29pbnonLFxyXG4gICAgaW1nOiAnL3N0YXRpYy9pbWFnZXMvbG9nby5wbmcnLFxyXG4gICAgbm90aWZNc2c6ICdEb25lYyBzaXQgYW1ldCBudWxsYSBzZWQgYXJjdSBwdWx2aW5hciB1bHRyaWNpZXMgY29tbW9kbyBpZCBsaWd1bGEuJyxcclxuICAgIGNvdmVyOiBcIi9zdGF0aWMvaW1hZ2VzL2Vhc3Rlci1iYXR0bGUucG5nXCJcclxuICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIG9jZWFuQmx1ZToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjQkJERUZCJyxcclxuICAgICAgICBtYWluOiAnIzIxOTZGMycsXHJcbiAgICAgICAgZGFyazogJyMwRDQ3QTEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0IyRUJGMicsXHJcbiAgICAgICAgbWFpbjogJyMwMEJDRDQnLFxyXG4gICAgICAgIGRhcms6ICcjMDA2MDY0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBncmVlbkxlYWY6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0M4RTZDOScsXHJcbiAgICAgICAgbWFpbjogJyM0Q0FGNTAnLFxyXG4gICAgICAgIGRhcms6ICcjMUI1RTIwJ1xyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNDRkQ4REMnLFxyXG4gICAgICAgIG1haW46ICcjNjA3RDhCJyxcclxuICAgICAgICBkYXJrOiAnIzM3NDc0RidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9uZXk6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0M4RTZDOScsXHJcbiAgICAgICAgbWFpbjogJyM0Q0FGNTAnLFxyXG4gICAgICAgIGRhcms6ICcjMkU3RDMyJ1xyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGRkVDQjMnLFxyXG4gICAgICAgIG1haW46ICcjRkZBMDAwJyxcclxuICAgICAgICBkYXJrOiAnI0ZGNkYwMCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JheXNjYWxlOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNDRkQ4REMnLFxyXG4gICAgICAgIG1haW46ICcjNTQ2RTdBJyxcclxuICAgICAgICBkYXJrOiAnIzI2MzIzOCdcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRDdDQ0M4JyxcclxuICAgICAgICBtYWluOiAnIzZENEM0MScsXHJcbiAgICAgICAgZGFyazogJyMzRTI3MjMnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNsb3VkOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNCM0U1RkMnLFxyXG4gICAgICAgIG1haW46ICcjMDNBOUY0JyxcclxuICAgICAgICBkYXJrOiAnIzAxNTc5QidcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRkZFMEIyJyxcclxuICAgICAgICBtYWluOiAnI0ZGOTgwMCcsXHJcbiAgICAgICAgZGFyazogJyNFNjUxMDAnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGpva2VyOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNEMUM0RTknLFxyXG4gICAgICAgIG1haW46ICcjNjczQUI3JyxcclxuICAgICAgICBkYXJrOiAnIzMxMUI5MidcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjQjJFQkYyJyxcclxuICAgICAgICBtYWluOiAnIzAwQkNENCcsXHJcbiAgICAgICAgZGFyazogJyMwMDYwNjQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHZpb2xldDoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRjhCQkQwJyxcclxuICAgICAgICBtYWluOiAnI0VDNDA3QScsXHJcbiAgICAgICAgZGFyazogJyM4ODBFNEYnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0QxQzRFOScsXHJcbiAgICAgICAgbWFpbjogJyM2NzNBQjcnLFxyXG4gICAgICAgIGRhcms6ICcjMzExQjkyJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB2aW9sZXRhOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFMUJFRTcnLFxyXG4gICAgICAgIG1haW46ICcjOUMyN0IwJyxcclxuICAgICAgICBkYXJrOiAnIzZBMUI5QSdcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRENFREM4JyxcclxuICAgICAgICBtYWluOiAnIzhCQzM0QScsXHJcbiAgICAgICAgZGFyazogJyM1NThCMkYnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGRlZXBCbHVlOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyMwYzg4ZWQnLFxyXG4gICAgICAgIG1haW46ICcjMGM4M2U0JyxcclxuICAgICAgICBkYXJrOiAnIzA5NjFhYScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnIzgyMDJmMicsXHJcbiAgICAgICAgbWFpbjogJyM2MjAyYjYnLFxyXG4gICAgICAgIGRhcms6ICcjNDkwMTg4JyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByb3NlR29sZDoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRThFQUY2JyxcclxuICAgICAgICBtYWluOiAnIzNGNTFCNScsXHJcbiAgICAgICAgZGFyazogJyMyODM1OTMnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFMUY1RkUnLFxyXG4gICAgICAgIG1haW46ICcjMDNBOUY0JyxcclxuICAgICAgICBkYXJrOiAnIzAyNzdCRCcsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdWJ1bnR1OiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGRkYzRTAnLFxyXG4gICAgICAgIG1haW46ICcjRUY2QzAwJyxcclxuICAgICAgICBkYXJrOiAnI0U2NTEwMCcsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0YzRTVGNScsXHJcbiAgICAgICAgbWFpbjogJyM5QzI3QjAnLFxyXG4gICAgICAgIGRhcms6ICcjN0IxRkEyJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBnZWVuTmF0dXJlOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFMEY3RkEnLFxyXG4gICAgICAgIG1haW46ICcjMDA5Njg4JyxcclxuICAgICAgICBkYXJrOiAnIzAwNjk1QycsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0YxRjhFOScsXHJcbiAgICAgICAgbWFpbjogJyM2ODlGMzgnLFxyXG4gICAgICAgIGRhcms6ICcjMzM2OTFFJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB2YW1waXJlOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGRkVCRUUnLFxyXG4gICAgICAgIG1haW46ICcjZjQ0MzM2JyxcclxuICAgICAgICBkYXJrOiAnI0U1MzkzNScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0VDRUZGMScsXHJcbiAgICAgICAgbWFpbjogJyM2MDdEOEInLFxyXG4gICAgICAgIGRhcms6ICcjNDU1QTY0JyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtaW50OiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNiYmRlZmInLFxyXG4gICAgICAgIG1haW46ICcjMjE5NmYzJyxcclxuICAgICAgICBkYXJrOiAnIzBkNDdhMScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI2IzZTVmYycsXHJcbiAgICAgICAgbWFpbjogJyMwM2E5ZjQnLFxyXG4gICAgICAgIGRhcms6ICcjMDE1NzliJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvY2VhblNreToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRTNGMkZEJyxcclxuICAgICAgICBtYWluOiAnIzIxOTZGMycsXHJcbiAgICAgICAgZGFyazogJyMxNTY1QzAnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFMEYyRjEnLFxyXG4gICAgICAgIG1haW46ICcjMDBCRkE1JyxcclxuICAgICAgICBkYXJrOiAnIzAwNzk2QicsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZ29sZDoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRkZGOUM0JyxcclxuICAgICAgICBtYWluOiAnI0ZGOTEwMCcsXHJcbiAgICAgICAgZGFyazogJyNGRjZEMDAnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFRkVCRTknLFxyXG4gICAgICAgIG1haW46ICcjOEQ2RTYzJyxcclxuICAgICAgICBkYXJrOiAnIzRFMzQyRScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYm90YW5pOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNEQ0VEQzgnLFxyXG4gICAgICAgIG1haW46ICcjNjg5RjM4JyxcclxuICAgICAgICBkYXJrOiAnIzMzNjkxRScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0ZDRTRFQycsXHJcbiAgICAgICAgbWFpbjogJyNGMDYyOTInLFxyXG4gICAgICAgIGRhcms6ICcjQUQxNDU3JyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaXR0bGVRdWVlbjoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRTBGN0ZBJyxcclxuICAgICAgICBtYWluOiAnIzAwQkNENCcsXHJcbiAgICAgICAgZGFyazogJyMwMDYwNjQnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGQ0U0RUMnLFxyXG4gICAgICAgIG1haW46ICcjRjA2MjkyJyxcclxuICAgICAgICBkYXJrOiAnI0FEMTQ1NycsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHVycGxlOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNmM2U1ZjUnLFxyXG4gICAgICAgIG1haW46ICcjOWMyN2IwJyxcclxuICAgICAgICBkYXJrOiAnIzZhMWI5YScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI2VhODBmYycsXHJcbiAgICAgICAgbWFpbjogJyNhYTAwZmYnLFxyXG4gICAgICAgIGRhcms6ICcjNGExNDhjJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBibGFjazoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjOWU5ZTllJyxcclxuICAgICAgICBtYWluOiAnIzIxMjEyMScsXHJcbiAgICAgICAgZGFyazogJyMwMDAnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFMEUwRTAnLFxyXG4gICAgICAgIG1haW46ICcjNzU3NTc1JyxcclxuICAgICAgICBkYXJrOiAnIzQyNDI0MicsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnJvd246IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI2Q3Y2NjOCcsXHJcbiAgICAgICAgbWFpbjogJyM3OTU1NDgnLFxyXG4gICAgICAgIGRhcms6ICcjNGUzNDJlJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjY2NiMGIwJyxcclxuICAgICAgICBtYWluOiAnIzc5NDg0OCcsXHJcbiAgICAgICAgZGFyazogJyMzZTI3MjMnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=