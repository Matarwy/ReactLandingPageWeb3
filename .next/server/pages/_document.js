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
  property: "og:url",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.url,
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
  property: "og:description",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.desc,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:site",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.url,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:image",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.img,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:image",
  content: _public_text_brand__WEBPACK_IMPORTED_MODULE_3___default.a.crypto.img,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:image:height",
  content: "630",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvZXhwZXJpbWVudGFsLXNjcmlwdC50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9oZWFkLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19kb2N1bWVudC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdGV4dC9icmFuZC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS9wYWxldHRlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc2VydmVyXCIiXSwibmFtZXMiOlsiSGVhZENvbXBvbmVudCIsImJyYW5kIiwiY3J5cHRvIiwiZGVzYyIsInRoZW1lIiwibW9uZXkiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJ1cmwiLCJpbWciLCJTY3JpcHRDYWNoZSIsIkxvYWRDYWNoZSIsImlnbm9yZVByb3BzIiwibG9hZFNjcmlwdCIsInByb3BzIiwib25Mb2FkIiwiY2hpbGRyZW4iLCJjYWNoZUtleSIsImlkIiwiZWwiLCJkb2N1bWVudCIsImxvYWRQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uRXJyb3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIkFycmF5IiwiT2JqZWN0IiwidmFsdWUiLCJhdHRyIiwiRE9NQXR0cmlidXRlTmFtZXMiLCJrIiwic3RyYXRlZ3kiLCJ3aW5kb3ciLCJzY3JpcHRMb2FkZXJJdGVtcyIsInNyYyIsInJlc3RQcm9wcyIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImxvYWRMYXp5U2NyaXB0Iiwic2NyaXB0cyIsInVwZGF0ZVNjcmlwdHMiLCJTY3JpcHQiLCJhY2NlcHRDaGFyc2V0IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImh0dHBFcXVpdiIsIm5vTW9kdWxlIiwicCIsInR5cGUiLCJoZWFkRWwiLCJoZWFkQ291bnRFbCIsImNvbnNvbGUiLCJoZWFkQ291bnQiLCJOdW1iZXIiLCJvbGRUYWdzIiwiaSIsImoiLCJuZXdUYWdzIiwiY29tcG9uZW50cyIsIm5ld1RhZyIsImxlbiIsIm9sZFRhZyIsInQiLCJ1cGRhdGVQcm9taXNlIiwibW91bnRlZEluc3RhbmNlcyIsInVwZGF0ZUhlYWQiLCJoZWFkIiwicHJvbWlzZSIsInRhZ3MiLCJoIiwidGl0bGVDb21wb25lbnQiLCJ0aXRsZSIsInVwZGF0ZUVsZW1lbnRzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJzaGFyZWRGaWxlcyIsInBhZ2VGaWxlcyIsImluQW1wTW9kZSIsImFsbEZpbGVzIiwiYnVpbGRNYW5pZmVzdCIsInBvbHlmaWxsIiwicHJvY2VzcyIsImFzc2V0UHJlZml4IiwiZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmciLCJzY3JpcHRMb2FkZXIiLCJmaWxlIiwiZHluYW1pY0ltcG9ydHMiLCJmaWxlcyIsImVuY29kZVVSSSIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJDb21wb25lbnQiLCJlbmhhbmNlQXBwIiwiQXBwIiwiY3R4Iiwic3R5bGVzIiwicmVuZGVyIiwiRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IiwiZG9jQ29tcG9uZW50c1JlbmRlcmVkIiwiZ2V0Q3NzTGlua3MiLCJjc3NGaWxlcyIsImYiLCJ1bm1hbmdlZEZpbGVzIiwiZHluYW1pY0Nzc0ZpbGVzIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJpc1NoYXJlZEZpbGUiLCJpc1VubWFuYWdlZEZpbGUiLCJnZXRQcmVsb2FkRHluYW1pY0NodW5rcyIsImdldFByZWxvYWRNYWluTGlua3MiLCJwcmVsb2FkRmlsZXMiLCJnZXREeW5hbWljQ2h1bmtzIiwiZ2V0UHJlTmV4dFNjcmlwdHMiLCJnZXRTY3JpcHRzIiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwiaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyIsImZpbHRlcmVkQ2hpbGRyZW4iLCJSZWFjdCIsImNoaWxkIiwibWFrZVN0eWxlc2hlZXRJbmVydCIsImMiLCJPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMiLCJuZXdQcm9wcyIsImRpc2FibGVSdW50aW1lSlMiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJkaXNhYmxlSnNQcmVsb2FkIiwidW5zdGFibGVfSnNQcmVsb2FkIiwiY3NzUHJlbG9hZHMiLCJvdGhlckhlYWRFbGVtZW50cyIsImlzUmVhY3RIZWxtZXQiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsInByb3AiLCJfX05FWFRfREFUQV9fIiwicGFnZSIsImN1clN0eWxlcyIsImhhc1N0eWxlcyIsImdldERvY3VtZW50RmlsZXMiLCJfX2h0bWwiLCJjYW5vbmljYWxCYXNlIiwic3R5bGUiLCJnZXRBbXBQYXRoIiwiaGVhZFRhZ3MiLCJIZWFkIiwiY29udGV4dFR5cGUiLCJwcm9wVHlwZXMiLCJub25jZSIsIlByb3BUeXBlcyIsImNyb3NzT3JpZ2luIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJkYXRhIiwiSlNPTiIsImVyciIsImFtcERldkZpbGVzIiwiTmV4dFNjcmlwdCIsImRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nIiwic2FmYXJpTm9tb2R1bGVGaXgiLCJhbXBQYXRoIiwiYXNQYXRoIiwiTXlEb2N1bWVudCIsIkRvY3VtZW50IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJvcGFjaXR5IiwidG9wIiwibGVmdCIsImdldEluaXRpYWxQcm9wcyIsInNoZWV0cyIsIlNlcnZlclN0eWxlU2hlZXRzIiwib3JpZ2luYWxSZW5kZXJQYWdlIiwicmVuZGVyUGFnZSIsImNvbGxlY3QiLCJpbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJnZXRTdHlsZUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsInByZWZpeCIsImZvb3RlclRleHQiLCJsb2dvVGV4dCIsInByb2plY3ROYW1lIiwibm90aWZNc2ciLCJvY2VhbkJsdWUiLCJsaWdodCIsImRhcmsiLCJzZWNvbmRhcnkiLCJncmVlbkxlYWYiLCJncmF5c2NhbGUiLCJjbG91ZCIsImpva2VyIiwidmlvbGV0IiwidmlvbGV0YSIsImRlZXBCbHVlIiwiY29udHJhc3RUZXh0Iiwicm9zZUdvbGQiLCJ1YnVudHUiLCJnZWVuTmF0dXJlIiwidmFtcGlyZSIsIm1pbnQiLCJvY2VhblNreSIsImdvbGQiLCJib3RhbmkiLCJsaXR0bGVRdWVlbiIsInB1cnBsZSIsImJsYWNrIiwiYnJvd24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBC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QUFLLEVBQUUsU0FEQTtBQUVQaE0sWUFBSSxFQUFFLFNBRkM7QUFHUGlNLFlBQUksRUFBRSxTQUhDO0FBSVBTLG9CQUFZLEVBQUU7QUFKUCxPQURGO0FBT1BSLGVBQVMsRUFBRTtBQUNURixhQUFLLEVBQUUsU0FERTtBQUVUaE0sWUFBSSxFQUFFLFNBRkc7QUFHVGlNLFlBQUksRUFBRSxTQUhHO0FBSVRTLG9CQUFZLEVBQUU7QUFKTDtBQVBKO0FBREo7QUFqVFEsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkIH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZS9wYWxldHRlJztcclxuaW1wb3J0IGJyYW5kIGZyb20gJy4uL3B1YmxpYy90ZXh0L2JyYW5kJztcclxuXHJcbmNvbnN0IEhlYWRDb21wb25lbnQgPSAoKSA9PiAoXHJcbiAgPEhlYWQ+XHJcbiAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgey8qIFVzZSBtaW5pbXVtLXNjYWxlPTEgdG8gZW5hYmxlIEdQVSByYXN0ZXJpemF0aW9uICovfVxyXG4gICAgPG1ldGFcclxuICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgY29udGVudD17YnJhbmQuY3J5cHRvLmRlc2N9XHJcbiAgICAvPlxyXG4gICAgey8qIEZhdmljb24gKi99XHJcbiAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29ucy9mYXZpY29uLmljb1wiIC8+XHJcbiAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI1N3g1N1wiIGhyZWY9XCIvZmF2aWNvbnMvYXBwbGUtaWNvbi01N3g1Ny5wbmdcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNjB4NjBcIiBocmVmPVwiL2Zhdmljb25zL2FwcGxlLWljb24tNjB4NjAucG5nXCIgLz5cclxuICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgaHJlZj1cIi9mYXZpY29ucy9hcHBsZS1pY29uLTcyeDcyLnBuZ1wiIC8+XHJcbiAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIGhyZWY9XCIvZmF2aWNvbnMvYXBwbGUtaWNvbi03Nng3Ni5wbmdcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTE0eDExNFwiIGhyZWY9XCIvZmF2aWNvbnMvYXBwbGUtaWNvbi0xMTR4MTE0LnBuZ1wiIC8+XHJcbiAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjB4MTIwXCIgaHJlZj1cIi9mYXZpY29ucy9hcHBsZS1pY29uLTEyMHgxMjAucG5nXCIgLz5cclxuICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE0NHgxNDRcIiBocmVmPVwiL2Zhdmljb25zL2FwcGxlLWljb24tMTQ0eDE0NC5wbmdcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTUyeDE1MlwiIGhyZWY9XCIvZmF2aWNvbnMvYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZ1wiIC8+XHJcbiAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9mYXZpY29ucy9hcHBsZS1pY29uLTE4MHgxODAucG5nXCIgLz5cclxuICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgaHJlZj1cIi9mYXZpY29ucy9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XHJcbiAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiOTZ4OTZcIiBocmVmPVwiL2Zhdmljb25zL2Zhdmljb24tOTZ4OTYucG5nXCIgLz5cclxuICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL2Zhdmljb25zL21hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIgY29udGVudD1cIi9mYXZpY29ucy9tcy1pY29uLTE0NHgxNDQucG5nXCIgLz5cclxuICAgIHsvKiBQV0EgcHJpbWFyeSBjb2xvciAqL31cclxuICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9e3RoZW1lLm1vbmV5LnBhbGV0dGUucHJpbWFyeS5tYWlufSAvPlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgLz5cclxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9pb25pY29uc0AzLjAuMC9kaXN0L2Nzcy9pb25pY29ucy5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICB7LyogIEZhY2Vib29rICovfVxyXG4gICAgPG1ldGEgcHJvcGVydHk9XCJhdXRob3JcIiBjb250ZW50PVwibHV4aVwiIC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJsdXhpLnV4LW1hZXN0cm8uY29tXCIgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgIHsvKiAgVHdpdHRlciAqL31cclxuICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cImx1eGkudXgtbWFlc3Ryby5jb21cIiAvPlxyXG4gICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRvbWFpblwiIGNvbnRlbnQ9XCJsdXhpLnV4LW1hZXN0cm8uY29tXCIgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cImx1eGlcIiAvPlxyXG4gICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6aW1hZ2U6c3JjXCIgY29udGVudD1cIi9pbWFnZXMvY3J5cHRvLWxvZ28ucG5nXCIgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YnJhbmQuY3J5cHRvLnVybH0gLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXticmFuZC5jcnlwdG8uZGVzY30gLz5cclxuICAgIDxtZXRhXHJcbiAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICBjb250ZW50PXticmFuZC5jcnlwdG8uZGVzY31cclxuICAgIC8+XHJcbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD17YnJhbmQuY3J5cHRvLnVybH0gLz5cclxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2JyYW5kLmNyeXB0by5pbWd9IC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YnJhbmQuY3J5cHRvLmltZ30gLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMTIwMFwiIC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI2MzBcIiAvPlxyXG4gIDwvSGVhZD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRDb21wb25lbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNjcmlwdEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgeyBET01BdHRyaWJ1dGVOYW1lcyB9IGZyb20gJy4vaGVhZC1tYW5hZ2VyJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG5jb25zdCBTY3JpcHRDYWNoZSA9IG5ldyBNYXAoKVxuY29uc3QgTG9hZENhY2hlID0gbmV3IFNldCgpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBTY3JpcHRIVE1MQXR0cmlidXRlczxIVE1MU2NyaXB0RWxlbWVudD4ge1xuICBzdHJhdGVneT86ICdhZnRlckludGVyYWN0aXZlJyB8ICdsYXp5T25sb2FkJyB8ICdiZWZvcmVJbnRlcmFjdGl2ZSdcbiAgaWQ/OiBzdHJpbmdcbiAgb25Mb2FkPzogKCkgPT4gdm9pZFxuICBvbkVycm9yPzogKCkgPT4gdm9pZFxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5jb25zdCBpZ25vcmVQcm9wcyA9IFtcbiAgJ29uTG9hZCcsXG4gICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsXG4gICdjaGlsZHJlbicsXG4gICdvbkVycm9yJyxcbiAgJ3N0cmF0ZWd5Jyxcbl1cblxuY29uc3QgbG9hZFNjcmlwdCA9IChwcm9wczogUHJvcHMpOiB2b2lkID0+IHtcbiAgY29uc3Qge1xuICAgIHNyYyxcbiAgICBpZCxcbiAgICBvbkxvYWQgPSAoKSA9PiB7fSxcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTCxcbiAgICBjaGlsZHJlbiA9ICcnLFxuICAgIG9uRXJyb3IsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNhY2hlS2V5ID0gaWQgfHwgc3JjXG4gIGlmIChTY3JpcHRDYWNoZS5oYXMoc3JjKSkge1xuICAgIGlmICghTG9hZENhY2hlLmhhcyhjYWNoZUtleSkpIHtcbiAgICAgIExvYWRDYWNoZS5hZGQoY2FjaGVLZXkpXG4gICAgICAvLyBFeGVjdXRlIG9uTG9hZCBzaW5jZSB0aGUgc2NyaXB0IGxvYWRpbmcgaGFzIGJlZ3VuXG4gICAgICBTY3JpcHRDYWNoZS5nZXQoc3JjKS50aGVuKG9uTG9hZCwgb25FcnJvcilcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgY29uc3QgbG9hZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc29sdmUoKVxuICAgICAgaWYgKG9uTG9hZCkge1xuICAgICAgICBvbkxvYWQuY2FsbCh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZWplY3QoKVxuICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgb25FcnJvcigpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBpZiAoc3JjKSB7XG4gICAgU2NyaXB0Q2FjaGUuc2V0KHNyYywgbG9hZFByb21pc2UpXG4gICAgTG9hZENhY2hlLmFkZChjYWNoZUtleSlcbiAgfVxuXG4gIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCkge1xuICAgIGVsLmlubmVySFRNTCA9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCB8fCAnJ1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgZWwudGV4dENvbnRlbnQgPVxuICAgICAgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgICAgPyBjaGlsZHJlbi5qb2luKCcnKVxuICAgICAgICA6ICcnXG4gIH0gZWxzZSBpZiAoc3JjKSB7XG4gICAgZWwuc3JjID0gc3JjXG4gIH1cblxuICBmb3IgKGNvbnN0IFtrLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgaWdub3JlUHJvcHMuaW5jbHVkZXMoaykpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0ciA9IERPTUF0dHJpYnV0ZU5hbWVzW2tdIHx8IGsudG9Mb3dlckNhc2UoKVxuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWVudFNjcmlwdExvYWQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgc3RyYXRlZ3kgPSAnYWZ0ZXJJbnRlcmFjdGl2ZScgfSA9IHByb3BzXG4gIGlmIChzdHJhdGVneSA9PT0gJ2FmdGVySW50ZXJhY3RpdmUnKSB7XG4gICAgbG9hZFNjcmlwdChwcm9wcylcbiAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2xhenlPbmxvYWQnKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IGxvYWRTY3JpcHQocHJvcHMpKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZExhenlTY3JpcHQocHJvcHM6IFByb3BzKSB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBsb2FkU2NyaXB0KHByb3BzKSlcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gbG9hZFNjcmlwdChwcm9wcykpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNjcmlwdExvYWRlcihzY3JpcHRMb2FkZXJJdGVtczogUHJvcHNbXSkge1xuICBzY3JpcHRMb2FkZXJJdGVtcy5mb3JFYWNoKGhhbmRsZUNsaWVudFNjcmlwdExvYWQpXG59XG5cbmZ1bmN0aW9uIFNjcmlwdChwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7XG4gICAgc3JjID0gJycsXG4gICAgb25Mb2FkID0gKCkgPT4ge30sXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsXG4gICAgc3RyYXRlZ3kgPSAnYWZ0ZXJJbnRlcmFjdGl2ZScsXG4gICAgb25FcnJvcixcbiAgICAuLi5yZXN0UHJvcHNcbiAgfSA9IHByb3BzXG5cbiAgLy8gQ29udGV4dCBpcyBhdmFpbGFibGUgb25seSBkdXJpbmcgU1NSXG4gIGNvbnN0IHsgdXBkYXRlU2NyaXB0cywgc2NyaXB0cyB9ID0gdXNlQ29udGV4dChIZWFkTWFuYWdlckNvbnRleHQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RyYXRlZ3kgPT09ICdhZnRlckludGVyYWN0aXZlJykge1xuICAgICAgbG9hZFNjcmlwdChwcm9wcylcbiAgICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnbGF6eU9ubG9hZCcpIHtcbiAgICAgIGxvYWRMYXp5U2NyaXB0KHByb3BzKVxuICAgIH1cbiAgfSwgW3Byb3BzLCBzdHJhdGVneV0pXG5cbiAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfU0NSSVBUX0xPQURFUikge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAoc3RyYXRlZ3kgPT09ICdiZWZvcmVJbnRlcmFjdGl2ZScpIHtcbiAgICBpZiAodXBkYXRlU2NyaXB0cykge1xuICAgICAgc2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZSA9IChzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5jb25jYXQoW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjLFxuICAgICAgICAgIG9uTG9hZCxcbiAgICAgICAgICBvbkVycm9yLFxuICAgICAgICAgIC4uLnJlc3RQcm9wcyxcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgICB1cGRhdGVTY3JpcHRzKHNjcmlwdHMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NyaXB0XG4iLCJleHBvcnQgY29uc3QgRE9NQXR0cmlidXRlTmFtZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGFjY2VwdENoYXJzZXQ6ICdhY2NlcHQtY2hhcnNldCcsXG4gIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgaHRtbEZvcjogJ2ZvcicsXG4gIGh0dHBFcXVpdjogJ2h0dHAtZXF1aXYnLFxuICBub01vZHVsZTogJ25vTW9kdWxlJyxcbn1cblxuZnVuY3Rpb24gcmVhY3RFbGVtZW50VG9ET00oeyB0eXBlLCBwcm9wcyB9OiBKU1guRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgZWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuICBmb3IgKGNvbnN0IHAgaW4gcHJvcHMpIHtcbiAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KHApKSBjb250aW51ZVxuICAgIGlmIChwID09PSAnY2hpbGRyZW4nIHx8IHAgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIGNvbnRpbnVlXG5cbiAgICAvLyB3ZSBkb24ndCByZW5kZXIgdW5kZWZpbmVkIHByb3BzIHRvIHRoZSBET01cbiAgICBpZiAocHJvcHNbcF0gPT09IHVuZGVmaW5lZCkgY29udGludWVcblxuICAgIGNvbnN0IGF0dHIgPSBET01BdHRyaWJ1dGVOYW1lc1twXSB8fCBwLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoXG4gICAgICB0eXBlID09PSAnc2NyaXB0JyAmJlxuICAgICAgKGF0dHIgPT09ICdhc3luYycgfHwgYXR0ciA9PT0gJ2RlZmVyJyB8fCBhdHRyID09PSAnbm9Nb2R1bGUnKVxuICAgICkge1xuICAgICAgOyhlbCBhcyBIVE1MU2NyaXB0RWxlbWVudClbYXR0cl0gPSAhIXByb3BzW3BdXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBwcm9wc1twXSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IGNoaWxkcmVuLCBkYW5nZXJvdXNseVNldElubmVySFRNTCB9ID0gcHJvcHNcbiAgaWYgKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sIHx8ICcnXG4gIH0gZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICBlbC50ZXh0Q29udGVudCA9XG4gICAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgICA/IGNoaWxkcmVuLmpvaW4oJycpXG4gICAgICAgIDogJydcbiAgfVxuICByZXR1cm4gZWxcbn1cblxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudHModHlwZTogc3RyaW5nLCBjb21wb25lbnRzOiBKU1guRWxlbWVudFtdKTogdm9pZCB7XG4gIGNvbnN0IGhlYWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgY29uc3QgaGVhZENvdW50RWw6IEhUTUxNZXRhRWxlbWVudCA9IGhlYWRFbC5xdWVyeVNlbGVjdG9yKFxuICAgICdtZXRhW25hbWU9bmV4dC1oZWFkLWNvdW50XSdcbiAgKSBhcyBIVE1MTWV0YUVsZW1lbnRcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIWhlYWRDb3VudEVsKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnV2FybmluZzogbmV4dC1oZWFkLWNvdW50IGlzIG1pc3NpbmcuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaGVhZC1jb3VudC1taXNzaW5nJ1xuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGVhZENvdW50ID0gTnVtYmVyKGhlYWRDb3VudEVsLmNvbnRlbnQpXG4gIGNvbnN0IG9sZFRhZ3M6IEVsZW1lbnRbXSA9IFtdXG5cbiAgZm9yIChcbiAgICBsZXQgaSA9IDAsIGogPSBoZWFkQ291bnRFbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGkgPCBoZWFkQ291bnQ7XG4gICAgaSsrLCBqID0gaiEucHJldmlvdXNFbGVtZW50U2libGluZ1xuICApIHtcbiAgICBpZiAoaiEudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0eXBlKSB7XG4gICAgICBvbGRUYWdzLnB1c2goaiEpXG4gICAgfVxuICB9XG4gIGNvbnN0IG5ld1RhZ3MgPSAoY29tcG9uZW50cy5tYXAocmVhY3RFbGVtZW50VG9ET00pIGFzIEhUTUxFbGVtZW50W10pLmZpbHRlcihcbiAgICAobmV3VGFnKSA9PiB7XG4gICAgICBmb3IgKGxldCBrID0gMCwgbGVuID0gb2xkVGFncy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICBjb25zdCBvbGRUYWcgPSBvbGRUYWdzW2tdXG4gICAgICAgIGlmIChvbGRUYWcuaXNFcXVhbE5vZGUobmV3VGFnKSkge1xuICAgICAgICAgIG9sZFRhZ3Muc3BsaWNlKGssIDEpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICApXG5cbiAgb2xkVGFncy5mb3JFYWNoKCh0KSA9PiB0LnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKHQpKVxuICBuZXdUYWdzLmZvckVhY2goKHQpID0+IGhlYWRFbC5pbnNlcnRCZWZvcmUodCwgaGVhZENvdW50RWwpKVxuICBoZWFkQ291bnRFbC5jb250ZW50ID0gKGhlYWRDb3VudCAtIG9sZFRhZ3MubGVuZ3RoICsgbmV3VGFncy5sZW5ndGgpLnRvU3RyaW5nKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEhlYWRNYW5hZ2VyKCk6IHtcbiAgbW91bnRlZEluc3RhbmNlczogU2V0PHVua25vd24+XG4gIHVwZGF0ZUhlYWQ6IChoZWFkOiBKU1guRWxlbWVudFtdKSA9PiB2b2lkXG59IHtcbiAgbGV0IHVwZGF0ZVByb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbFxuXG4gIHJldHVybiB7XG4gICAgbW91bnRlZEluc3RhbmNlczogbmV3IFNldCgpLFxuICAgIHVwZGF0ZUhlYWQ6IChoZWFkOiBKU1guRWxlbWVudFtdKSA9PiB7XG4gICAgICBjb25zdCBwcm9taXNlID0gKHVwZGF0ZVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHByb21pc2UgIT09IHVwZGF0ZVByb21pc2UpIHJldHVyblxuXG4gICAgICAgIHVwZGF0ZVByb21pc2UgPSBudWxsXG4gICAgICAgIGNvbnN0IHRhZ3M6IFJlY29yZDxzdHJpbmcsIEpTWC5FbGVtZW50W10+ID0ge31cblxuICAgICAgICBoZWFkLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBJZiB0aGUgZm9udCB0YWcgaXMgbG9hZGVkIG9ubHkgb24gY2xpZW50IG5hdmlnYXRpb25cbiAgICAgICAgICAgIC8vIGl0IHdvbid0IGJlIGlubGluZWQuIEluIHRoaXMgY2FzZSByZXZlcnQgdG8gdGhlIG9yaWdpbmFsIGJlaGF2aW9yXG4gICAgICAgICAgICBoLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICAgICAgaC5wcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSAmJlxuICAgICAgICAgICAgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBzdHlsZVtkYXRhLWhyZWY9XCIke2gucHJvcHNbJ2RhdGEtaHJlZiddfVwiXWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGgucHJvcHMuaHJlZiA9IGgucHJvcHNbJ2RhdGEtaHJlZiddXG4gICAgICAgICAgICBoLnByb3BzWydkYXRhLWhyZWYnXSA9IHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBjb21wb25lbnRzID0gdGFnc1toLnR5cGVdIHx8IFtdXG4gICAgICAgICAgY29tcG9uZW50cy5wdXNoKGgpXG4gICAgICAgICAgdGFnc1toLnR5cGVdID0gY29tcG9uZW50c1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHRpdGxlQ29tcG9uZW50ID0gdGFncy50aXRsZSA/IHRhZ3MudGl0bGVbMF0gOiBudWxsXG4gICAgICAgIGxldCB0aXRsZSA9ICcnXG4gICAgICAgIGlmICh0aXRsZUNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRpdGxlQ29tcG9uZW50LnByb3BzXG4gICAgICAgICAgdGl0bGUgPVxuICAgICAgICAgICAgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgICAgICAgICAgPyBjaGlsZHJlbi5qb2luKCcnKVxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpdGxlICE9PSBkb2N1bWVudC50aXRsZSkgZG9jdW1lbnQudGl0bGUgPSB0aXRsZVxuICAgICAgICA7WydtZXRhJywgJ2Jhc2UnLCAnbGluaycsICdzdHlsZScsICdzY3JpcHQnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgICAgdXBkYXRlRWxlbWVudHModHlwZSwgdGFnc1t0eXBlXSB8fCBbXSlcbiAgICAgICAgfSlcbiAgICAgIH0pKVxuICAgIH0sXG4gIH1cbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInXG5pbXBvcnQge1xuICBBTVBfUkVOREVSX1RBUkdFVCxcbiAgT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IHsgRG9jdW1lbnRDb250ZXh0IGFzIERvY3VtZW50Q29tcG9uZW50Q29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0J1xuaW1wb3J0IHtcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wcyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHtcbiAgQnVpbGRNYW5pZmVzdCxcbiAgZ2V0UGFnZUZpbGVzLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBjbGVhbkFtcFBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMnXG5pbXBvcnQgeyBodG1sRXNjYXBlSnNvblN0cmluZyB9IGZyb20gJy4uL3NlcnZlci9odG1sZXNjYXBlJ1xuaW1wb3J0IFNjcmlwdCwge1xuICBQcm9wcyBhcyBTY3JpcHRMb2FkZXJQcm9wcyxcbn0gZnJvbSAnLi4vY2xpZW50L2V4cGVyaW1lbnRhbC1zY3JpcHQnXG5cbmV4cG9ydCB7IERvY3VtZW50Q29udGV4dCwgRG9jdW1lbnRJbml0aWFsUHJvcHMsIERvY3VtZW50UHJvcHMgfVxuXG5leHBvcnQgdHlwZSBPcmlnaW5Qcm9wcyA9IHtcbiAgbm9uY2U/OiBzdHJpbmdcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmdcbn1cblxudHlwZSBEb2N1bWVudEZpbGVzID0ge1xuICBzaGFyZWRGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbiAgcGFnZUZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxuICBhbGxGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdCxcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4pOiBEb2N1bWVudEZpbGVzIHtcbiAgY29uc3Qgc2hhcmVkRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdID0gZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsICcvX2FwcCcpXG4gIGNvbnN0IHBhZ2VGaWxlczogcmVhZG9ubHkgc3RyaW5nW10gPSBpbkFtcE1vZGVcbiAgICA/IFtdXG4gICAgOiBnZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUpXG5cbiAgcmV0dXJuIHtcbiAgICBzaGFyZWRGaWxlcyxcbiAgICBwYWdlRmlsZXMsXG4gICAgYWxsRmlsZXM6IFsuLi5uZXcgU2V0KFsuLi5zaGFyZWRGaWxlcywgLi4ucGFnZUZpbGVzXSldLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlmaWxsU2NyaXB0cyhjb250ZXh0OiBEb2N1bWVudFByb3BzLCBwcm9wczogT3JpZ2luUHJvcHMpIHtcbiAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4gIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICBjb25zdCB7XG4gICAgYXNzZXRQcmVmaXgsXG4gICAgYnVpbGRNYW5pZmVzdCxcbiAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgfSA9IGNvbnRleHRcblxuICByZXR1cm4gYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzXG4gICAgLmZpbHRlcihcbiAgICAgIChwb2x5ZmlsbCkgPT4gcG9seWZpbGwuZW5kc1dpdGgoJy5qcycpICYmICFwb2x5ZmlsbC5lbmRzV2l0aCgnLm1vZHVsZS5qcycpXG4gICAgKVxuICAgIC5tYXAoKHBvbHlmaWxsKSA9PiAoXG4gICAgICA8c2NyaXB0XG4gICAgICAgIGtleT17cG9seWZpbGx9XG4gICAgICAgIGRlZmVyPXshZGlzYWJsZU9wdGltaXplZExvYWRpbmd9XG4gICAgICAgIG5vbmNlPXtwcm9wcy5ub25jZX1cbiAgICAgICAgY3Jvc3NPcmlnaW49e3Byb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59XG4gICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgIC8+XG4gICAgKSlcbn1cblxuZnVuY3Rpb24gZ2V0UHJlTmV4dFNjcmlwdHMoY29udGV4dDogRG9jdW1lbnRQcm9wcywgcHJvcHM6IE9yaWdpblByb3BzKSB7XG4gIGNvbnN0IHsgc2NyaXB0TG9hZGVyLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyB9ID0gY29udGV4dFxuXG4gIHJldHVybiAoc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5tYXAoXG4gICAgKGZpbGU6IFNjcmlwdExvYWRlclByb3BzKSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmF0ZWd5LCAuLi5zY3JpcHRQcm9wcyB9ID0gZmlsZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHsuLi5zY3JpcHRQcm9wc31cbiAgICAgICAgICBkZWZlcj17IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICAgIG5vbmNlPXtwcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17cHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gZ2V0RHluYW1pY0NodW5rcyhcbiAgY29udGV4dDogRG9jdW1lbnRQcm9wcyxcbiAgcHJvcHM6IE9yaWdpblByb3BzLFxuICBmaWxlczogRG9jdW1lbnRGaWxlc1xuKSB7XG4gIGNvbnN0IHtcbiAgICBkeW5hbWljSW1wb3J0cyxcbiAgICBhc3NldFByZWZpeCxcbiAgICBpc0RldmVsb3BtZW50LFxuICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICB9ID0gY29udGV4dFxuXG4gIHJldHVybiBkeW5hbWljSW1wb3J0cy5tYXAoKGZpbGUpID0+IHtcbiAgICBpZiAoIWZpbGUuZW5kc1dpdGgoJy5qcycpIHx8IGZpbGVzLmFsbEZpbGVzLmluY2x1ZGVzKGZpbGUpKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzY3JpcHRcbiAgICAgICAgYXN5bmM9eyFpc0RldmVsb3BtZW50ICYmIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICBkZWZlcj17IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgIG5vbmNlPXtwcm9wcy5ub25jZX1cbiAgICAgICAgY3Jvc3NPcmlnaW49e3Byb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59XG4gICAgICAvPlxuICAgIClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0U2NyaXB0cyhcbiAgY29udGV4dDogRG9jdW1lbnRQcm9wcyxcbiAgcHJvcHM6IE9yaWdpblByb3BzLFxuICBmaWxlczogRG9jdW1lbnRGaWxlc1xuKSB7XG4gIGNvbnN0IHtcbiAgICBhc3NldFByZWZpeCxcbiAgICBidWlsZE1hbmlmZXN0LFxuICAgIGlzRGV2ZWxvcG1lbnQsXG4gICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gIH0gPSBjb250ZXh0XG5cbiAgY29uc3Qgbm9ybWFsU2NyaXB0cyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJykpXG4gIGNvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cyA9IGJ1aWxkTWFuaWZlc3QubG93UHJpb3JpdHlGaWxlcz8uZmlsdGVyKChmaWxlKSA9PlxuICAgIGZpbGUuZW5kc1dpdGgoJy5qcycpXG4gIClcblxuICByZXR1cm4gWy4uLm5vcm1hbFNjcmlwdHMsIC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKChmaWxlKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzY3JpcHRcbiAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICBmaWxlXG4gICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICBub25jZT17cHJvcHMubm9uY2V9XG4gICAgICAgIGFzeW5jPXshaXNEZXZlbG9wbWVudCAmJiBkaXNhYmxlT3B0aW1pemVkTG9hZGluZ31cbiAgICAgICAgZGVmZXI9eyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZ31cbiAgICAgICAgY3Jvc3NPcmlnaW49e3Byb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59XG4gICAgICAvPlxuICAgIClcbiAgfSlcbn1cblxuLyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudDxQID0ge30+IGV4dGVuZHMgQ29tcG9uZW50PERvY3VtZW50UHJvcHMgJiBQPiB7XG4gIC8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKFxuICAgIGN0eDogRG9jdW1lbnRDb250ZXh0XG4gICk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcbiAgICBjb25zdCBlbmhhbmNlQXBwID0gKEFwcDogYW55KSA9PiB7XG4gICAgICByZXR1cm4gKHByb3BzOiBhbnkpID0+IDxBcHAgey4uLnByb3BzfSAvPlxuICAgIH1cblxuICAgIGNvbnN0IHsgaHRtbCwgaGVhZCB9ID0gYXdhaXQgY3R4LnJlbmRlclBhZ2UoeyBlbmhhbmNlQXBwIH0pXG4gICAgY29uc3Qgc3R5bGVzID0gWy4uLmZsdXNoKCldXG4gICAgcmV0dXJuIHsgaHRtbCwgaGVhZCwgc3R5bGVzIH1cbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJEb2N1bWVudDxZPihcbiAgICBEb2N1bWVudENvbXBvbmVudDogbmV3ICgpID0+IERvY3VtZW50PFk+LFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzICYgWVxuICApOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9wc30+XG4gICAgICAgIDxEb2N1bWVudENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L0RvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sPlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEh0bWwoXG4gIHByb3BzOiBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICBSZWFjdC5IdG1sSFRNTEF0dHJpYnV0ZXM8SFRNTEh0bWxFbGVtZW50PixcbiAgICBIVE1MSHRtbEVsZW1lbnRcbiAgPlxuKSB7XG4gIGNvbnN0IHsgaW5BbXBNb2RlLCBkb2NDb21wb25lbnRzUmVuZGVyZWQsIGxvY2FsZSB9ID0gdXNlQ29udGV4dChcbiAgICBEb2N1bWVudENvbXBvbmVudENvbnRleHRcbiAgKVxuXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5IdG1sID0gdHJ1ZVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWxcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGxhbmc9e3Byb3BzLmxhbmcgfHwgbG9jYWxlIHx8IHVuZGVmaW5lZH1cbiAgICAgIGFtcD17aW5BbXBNb2RlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICBkYXRhLWFtcGRldm1vZGU9e1xuICAgICAgICBpbkFtcE1vZGUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZCBleHRlbmRzIENvbXBvbmVudDxcbiAgT3JpZ2luUHJvcHMgJlxuICAgIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgICAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEhlYWRFbGVtZW50PixcbiAgICAgIEhUTUxIZWFkRWxlbWVudFxuICAgID5cbj4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5vbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgZ2V0Q3NzTGlua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICAgIGR5bmFtaWNJbXBvcnRzLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBjc3NGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZikgPT4gZi5lbmRzV2l0aCgnLmNzcycpKVxuICAgIGNvbnN0IHNoYXJlZEZpbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoZmlsZXMuc2hhcmVkRmlsZXMpXG5cbiAgICAvLyBVbm1hbmFnZWQgZmlsZXMgYXJlIENTUyBmaWxlcyB0aGF0IHdpbGwgYmUgaGFuZGxlZCBkaXJlY3RseSBieSB0aGVcbiAgICAvLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxuICAgIGxldCB1bm1hbmdlZEZpbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoW10pXG4gICAgbGV0IGR5bmFtaWNDc3NGaWxlcyA9IEFycmF5LmZyb20oXG4gICAgICBuZXcgU2V0KGR5bmFtaWNJbXBvcnRzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmNzcycpKSlcbiAgICApXG4gICAgaWYgKGR5bmFtaWNDc3NGaWxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gbmV3IFNldChjc3NGaWxlcylcbiAgICAgIGR5bmFtaWNDc3NGaWxlcyA9IGR5bmFtaWNDc3NGaWxlcy5maWx0ZXIoXG4gICAgICAgIChmKSA9PiAhKGV4aXN0aW5nLmhhcyhmKSB8fCBzaGFyZWRGaWxlcy5oYXMoZikpXG4gICAgICApXG4gICAgICB1bm1hbmdlZEZpbGVzID0gbmV3IFNldChkeW5hbWljQ3NzRmlsZXMpXG4gICAgICBjc3NGaWxlcy5wdXNoKC4uLmR5bmFtaWNDc3NGaWxlcylcbiAgICB9XG5cbiAgICBsZXQgY3NzTGlua0VsZW1lbnRzOiBKU1guRWxlbWVudFtdID0gW11cbiAgICBjc3NGaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBpc1NoYXJlZEZpbGUgPSBzaGFyZWRGaWxlcy5oYXMoZmlsZSlcblxuICAgICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTKSB7XG4gICAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKFxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e2Ake2ZpbGV9LXByZWxvYWRgfVxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICBhcz1cInN0eWxlXCJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1VubWFuYWdlZEZpbGUgPSB1bm1hbmdlZEZpbGVzLmhhcyhmaWxlKVxuICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YS1uLWc9e2lzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/ICcnIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGRhdGEtbi1wPXtpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyB1bmRlZmluZWQgOiAnJ31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiZcbiAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UU1xuICAgICkge1xuICAgICAgY3NzTGlua0VsZW1lbnRzID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KFxuICAgICAgICBjc3NMaW5rRWxlbWVudHNcbiAgICAgICkgYXMgUmVhY3RFbGVtZW50W11cbiAgICB9XG5cbiAgICByZXR1cm4gY3NzTGlua0VsZW1lbnRzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBjc3NMaW5rRWxlbWVudHNcbiAgfVxuXG4gIGdldFByZWxvYWREeW5hbWljQ2h1bmtzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGR5bmFtaWNJbXBvcnRzLFxuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gKFxuICAgICAgZHluYW1pY0ltcG9ydHNcbiAgICAgICAgLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgICAgIGlmICghZmlsZS5lbmRzV2l0aCgnLmpzJykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICAvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cblxuICBnZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgICBzY3JpcHRMb2FkZXIsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgICB9KVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17ZmlsZS5zcmN9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17ZmlsZS5zcmN9XG4gICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICkpLFxuICAgICAgLi4ucHJlbG9hZEZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSksXG4gICAgXVxuICB9XG5cbiAgZ2V0RHluYW1pY0NodW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIHJldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpXG4gIH1cblxuICBnZXRQcmVOZXh0U2NyaXB0cygpIHtcbiAgICByZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKVxuICB9XG5cbiAgZ2V0U2NyaXB0cyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIHJldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpXG4gIH1cblxuICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgcmV0dXJuIGdldFBvbHlmaWxsU2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpXG4gIH1cblxuICBoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUpOiBSZWFjdE5vZGVbXSB7XG4gICAgY29uc3QgeyBzY3JpcHRMb2FkZXIgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHNjcmlwdExvYWRlckl0ZW1zOiBTY3JpcHRMb2FkZXJQcm9wc1tdID0gW11cbiAgICBjb25zdCBmaWx0ZXJlZENoaWxkcmVuOiBSZWFjdE5vZGVbXSA9IFtdXG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFNjcmlwdCkge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMuc3RyYXRlZ3kgPT09ICdiZWZvcmVJbnRlcmFjdGl2ZScpIHtcbiAgICAgICAgICBzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgPSAoXG4gICAgICAgICAgICBzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW11cbiAgICAgICAgICApLmNvbmNhdChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLmNoaWxkLnByb3BzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIFsnbGF6eU9ubG9hZCcsICdhZnRlckludGVyYWN0aXZlJ10uaW5jbHVkZXMoY2hpbGQucHJvcHMuc3RyYXRlZ3kpXG4gICAgICAgICkge1xuICAgICAgICAgIHNjcmlwdExvYWRlckl0ZW1zLnB1c2goY2hpbGQucHJvcHMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZmlsdGVyZWRDaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5zY3JpcHRMb2FkZXIgPSBzY3JpcHRMb2FkZXJJdGVtc1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hpbGRyZW5cbiAgfVxuXG4gIG1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZTogUmVhY3ROb2RlKTogUmVhY3ROb2RlW10ge1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAobm9kZSwgKGM6IGFueSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICBjLnByb3BzWydocmVmJ10gJiZcbiAgICAgICAgT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHVybCkgPT4gYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICB9IGVsc2UgaWYgKGMucHJvcHMgJiYgYy5wcm9wc1snY2hpbGRyZW4nXSkge1xuICAgICAgICBjLnByb3BzWydjaGlsZHJlbiddID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pXG4gICAgICB9XG4gICAgICByZXR1cm4gY1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGVzLFxuICAgICAgYW1wUGF0aCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGh5YnJpZEFtcCxcbiAgICAgIGNhbm9uaWNhbEJhc2UsXG4gICAgICBfX05FWFRfREFUQV9fLFxuICAgICAgZGFuZ2Vyb3VzQXNQYXRoLFxuICAgICAgaGVhZFRhZ3MsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgICB1bnN0YWJsZV9Kc1ByZWxvYWQsXG4gICAgICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuICAgIGNvbnN0IGRpc2FibGVKc1ByZWxvYWQgPVxuICAgICAgdW5zdGFibGVfSnNQcmVsb2FkID09PSBmYWxzZSB8fCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmdcblxuICAgIHRoaXMuY29udGV4dC5kb2NDb21wb25lbnRzUmVuZGVyZWQuSGVhZCA9IHRydWVcblxuICAgIGxldCB7IGhlYWQgfSA9IHRoaXMuY29udGV4dFxuICAgIGxldCBjc3NQcmVsb2FkczogQXJyYXk8SlNYLkVsZW1lbnQ+ID0gW11cbiAgICBsZXQgb3RoZXJIZWFkRWxlbWVudHM6IEFycmF5PEpTWC5FbGVtZW50PiA9IFtdXG4gICAgaWYgKGhlYWQpIHtcbiAgICAgIGhlYWQuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYyAmJlxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1sncmVsJ10gPT09ICdwcmVsb2FkJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2FzJ10gPT09ICdzdHlsZSdcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3NzUHJlbG9hZHMucHVzaChjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGMgJiYgb3RoZXJIZWFkRWxlbWVudHMucHVzaChjKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaGVhZCA9IGNzc1ByZWxvYWRzLmNvbmNhdChvdGhlckhlYWRFbGVtZW50cylcbiAgICB9XG4gICAgbGV0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKS5maWx0ZXIoQm9vbGVhbilcbiAgICAvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlYWN0SGVsbWV0ID0gY2hpbGQ/LnByb3BzPy5bJ2RhdGEtcmVhY3QtaGVsbWV0J11cbiAgICAgICAgaWYgKCFpc1JlYWN0SGVsbWV0KSB7XG4gICAgICAgICAgaWYgKGNoaWxkPy50eXBlID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiV2FybmluZzogPHRpdGxlPiBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC10aXRsZVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGNoaWxkPy50eXBlID09PSAnbWV0YScgJiZcbiAgICAgICAgICAgIGNoaWxkPy5wcm9wcz8ubmFtZSA9PT0gJ3ZpZXdwb3J0J1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBcIldhcm5pbmc6IHZpZXdwb3J0IG1ldGEgdGFncyBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC12aWV3cG9ydC1tZXRhXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiZcbiAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJlxuICAgICAgIWluQW1wTW9kZVxuICAgICkge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JJUFRfTE9BREVSKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMuaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbilcbiAgICB9XG5cbiAgICBsZXQgaGFzQW1waHRtbFJlbCA9IGZhbHNlXG4gICAgbGV0IGhhc0Nhbm9uaWNhbFJlbCA9IGZhbHNlXG5cbiAgICAvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG4gICAgaGVhZCA9IFJlYWN0LkNoaWxkcmVuLm1hcChoZWFkIHx8IFtdLCAoY2hpbGQpID0+IHtcbiAgICAgIGlmICghY2hpbGQpIHJldHVybiBjaGlsZFxuICAgICAgY29uc3QgeyB0eXBlLCBwcm9wcyB9ID0gY2hpbGRcbiAgICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgICAgbGV0IGJhZFByb3A6IHN0cmluZyA9ICcnXG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdtZXRhJyAmJiBwcm9wcy5uYW1lID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgYmFkUHJvcCA9ICduYW1lPVwidmlld3BvcnRcIidcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnY2Fub25pY2FsJykge1xuICAgICAgICAgIGhhc0Nhbm9uaWNhbFJlbCA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2NyaXB0Jykge1xuICAgICAgICAgIC8vIG9ubHkgYmxvY2sgaWZcbiAgICAgICAgICAvLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbiAgICAgICAgICAvLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuICAgICAgICAgIC8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAocHJvcHMuc3JjICYmIHByb3BzLnNyYy5pbmRleE9mKCdhbXBwcm9qZWN0JykgPCAtMSkgfHxcbiAgICAgICAgICAgIChwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAmJlxuICAgICAgICAgICAgICAoIXByb3BzLnR5cGUgfHwgcHJvcHMudHlwZSA9PT0gJ3RleHQvamF2YXNjcmlwdCcpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYmFkUHJvcCA9ICc8c2NyaXB0J1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICAgICAgYmFkUHJvcCArPSBgICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJhZFByb3AgKz0gJy8+J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYWRQcm9wKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jb25mbGljdGluZy1hbXAtdGFnYFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub24tYW1wIG1vZGVcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdhbXBodG1sJykge1xuICAgICAgICAgIGhhc0FtcGh0bWxSZWwgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH0pXG5cbiAgICAvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBjb25zdCBjdXJTdHlsZXM6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0gQXJyYXkuaXNBcnJheShzdHlsZXMpXG4gICAgICA/IChzdHlsZXMgYXMgUmVhY3QuUmVhY3RFbGVtZW50W10pXG4gICAgICA6IFtdXG4gICAgaWYgKFxuICAgICAgaW5BbXBNb2RlICYmXG4gICAgICBzdHlsZXMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIEFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKVxuICAgICkge1xuICAgICAgY29uc3QgaGFzU3R5bGVzID0gKGVsOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+XG4gICAgICAgIGVsPy5wcm9wcz8uZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw/Ll9faHRtbFxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZC5mb3JFYWNoKChlbCkgPT4gaGFzU3R5bGVzKGVsKSAmJiBjdXJTdHlsZXMucHVzaChlbCkpXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzU3R5bGVzKGNoaWxkKSkge1xuICAgICAgICAgIGN1clN0eWxlcy5wdXNoKGNoaWxkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzOiBEb2N1bWVudEZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgICAgIHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LFxuICAgICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSxcbiAgICAgIGluQW1wTW9kZVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8aGVhZCB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBkYXRhLW5leHQtaGlkZS1mb3VjXG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZT17aW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpub25lfWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0XG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6YmxvY2t9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7aGVhZH1cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwibmV4dC1oZWFkLWNvdW50XCJcbiAgICAgICAgICBjb250ZW50PXtSZWFjdC5DaGlsZHJlbi5jb3VudChoZWFkIHx8IFtdKS50b1N0cmluZygpfVxuICAgICAgICAvPlxuICAgICAgICB7aW5BbXBNb2RlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IWhhc0Nhbm9uaWNhbFJlbCAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgY2xlYW5BbXBQYXRoKGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIGh0dHBzOi8vd3d3LmFtcHByb2plY3Qub3JnL2RvY3MvZnVuZGFtZW50YWxzL29wdGltaXplX2FtcCNvcHRpbWl6ZS10aGUtYW1wLXJ1bnRpbWUtbG9hZGluZyAqL31cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIEFkZCBjdXN0b20gc3R5bGVzIGJlZm9yZSBBTVAgc3R5bGVzIHRvIHByZXZlbnQgYWNjaWRlbnRhbCBvdmVycmlkZXMgKi99XG4gICAgICAgICAgICB7c3R5bGVzICYmIChcbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWN1c3RvbT1cIlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogY3VyU3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHN0eWxlKSA9PiBzdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csICcnKSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbW96LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tcy1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDthbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aH1ALXdlYmtpdC1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbXMta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtby1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWJvaWxlcnBsYXRlPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7IWhhc0FtcGh0bWxSZWwgJiYgaHlicmlkQW1wICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJhbXBodG1sXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgZ2V0QW1wUGF0aChhbXBQYXRoLCBkYW5nZXJvdXNBc1BhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIHshcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAoXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBkYXRhLW4tY3NzPXt0aGlzLnByb3BzLm5vbmNlID8/ICcnfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZUpzUHJlbG9hZCAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFByZWxvYWREeW5hbWljQ2h1bmtzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVKc1ByZWxvYWQgJiZcbiAgICAgICAgICAgICAgdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIHshZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICAgICAgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICAgICAgdGhpcy5nZXRQcmVOZXh0U2NyaXB0cygpfVxuICAgICAgICAgICAgeyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICB0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpfVxuICAgICAgICAgICAgeyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFNjcmlwdHMoZmlsZXMpfVxuICAgICAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAoXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBkYXRhLW4tY3NzPXt0aGlzLnByb3BzLm5vbmNlID8/ICcnfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgICAgIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbiAgICAgICAgICAgICAgLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4gICAgICAgICAgICAgIC8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuICAgICAgICAgICAgICA8bm9zY3JpcHQgaWQ9XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzdHlsZXMgfHwgbnVsbH1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCAuLi4oaGVhZFRhZ3MgfHwgW10pKX1cbiAgICAgIDwvaGVhZD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHsgaW5BbXBNb2RlLCBodG1sLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgfSA9IHVzZUNvbnRleHQoXG4gICAgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG4gIClcblxuICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTWFpbiA9IHRydWVcblxuICBpZiAoaW5BbXBNb2RlKSByZXR1cm4gPD57QU1QX1JFTkRFUl9UQVJHRVR9PC8+XG4gIHJldHVybiA8ZGl2IGlkPVwiX19uZXh0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+XG59XG5cbmV4cG9ydCBjbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgQ29tcG9uZW50PE9yaWdpblByb3BzPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICAvLyBTb3VyY2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3NhbXRob3IvNjRiMTE0ZTRhNGY1Mzk5MTVhOTViOTFmZmQzNDBhY2NcbiAgc3RhdGljIHNhZmFyaU5vbW9kdWxlRml4ID1cbiAgICAnIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnXG5cbiAgZ2V0RHluYW1pY0NodW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIHJldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpXG4gIH1cblxuICBnZXRQcmVOZXh0U2NyaXB0cygpIHtcbiAgICByZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKVxuICB9XG5cbiAgZ2V0U2NyaXB0cyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIHJldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpXG4gIH1cblxuICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgcmV0dXJuIGdldFBvbHlmaWxsU2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpXG4gIH1cblxuICBzdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHM6IFJlYWRvbmx5PERvY3VtZW50UHJvcHM+KTogc3RyaW5nIHtcbiAgICBjb25zdCB7IF9fTkVYVF9EQVRBX18gfSA9IGRvY3VtZW50UHJvcHNcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pXG4gICAgICByZXR1cm4gaHRtbEVzY2FwZUpzb25TdHJpbmcoZGF0YSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NpcmN1bGFyLXN0cnVjdHVyZWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaW5BbXBNb2RlLFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgICAgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG5cbiAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTmV4dFNjcmlwdCA9IHRydWVcblxuICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFtcERldkZpbGVzID0gW1xuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmRldkZpbGVzLFxuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMsXG4gICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXMsXG4gICAgICBdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthbXBEZXZGaWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzOiBEb2N1bWVudEZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgICAgIHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LFxuICAgICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSxcbiAgICAgIGluQW1wTW9kZVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgYnVpbGRNYW5pZmVzdC5kZXZGaWxlc1xuICAgICAgICAgID8gYnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2Rpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgIWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpfVxuICAgICAgICB7ZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiZcbiAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgIHRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKX1cbiAgICAgICAge2Rpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgIWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICB0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpfVxuICAgICAgICB7ZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRTY3JpcHRzKGZpbGVzKX1cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGg6IHN0cmluZywgYXNQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYW1wUGF0aCB8fCBgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J31hbXA9MWBcbn1cbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaHRtbEVzY2FwZUpzb25TdHJpbmc9aHRtbEVzY2FwZUpzb25TdHJpbmc7Ly8gVGhpcyB1dGlsaXR5IGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGVcbi8vIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGUvYmxvYi8wNTI3Y2E3MTU2YTUyNGQyNTYxMDFiYjMxMGE5Zjk3MGY2MzA3OGFkL0xJQ0VOU0VcbmNvbnN0IEVTQ0FQRV9MT09LVVA9eycmJzonXFxcXHUwMDI2JywnPic6J1xcXFx1MDAzZScsJzwnOidcXFxcdTAwM2MnLCdcXHUyMDI4JzonXFxcXHUyMDI4JywnXFx1MjAyOSc6J1xcXFx1MjAyOSd9O2NvbnN0IEVTQ0FQRV9SRUdFWD0vWyY+PFxcdTIwMjhcXHUyMDI5XS9nO2Z1bmN0aW9uIGh0bWxFc2NhcGVKc29uU3RyaW5nKHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWCxtYXRjaD0+RVNDQVBFX0xPT0tVUFttYXRjaF0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWxlc2NhcGUuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XHJcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXRzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEhlYWRDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJztcclxuXHJcbmNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEh0bWwgbGFuZz1cImVuXCIgZGlyPVwibHRyXCI+XHJcbiAgICAgICAgPEhlYWRDb21wb25lbnQgLz5cclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJwcmVsb2FkZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAgIHpJbmRleDogMTAwMDAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmYWZhZmEnLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgICB0b3A6ICdjYWxjKDUwJSAtIDUwcHgpJyxcclxuICAgICAgICAgICAgICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDUwcHgpJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2FkaW5nLmdpZlwiXHJcbiAgICAgICAgICAgICAgYWx0PVwibG9hZGluZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9IdG1sPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbk15RG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAvLyBSZXNvbHV0aW9uIG9yZGVyXHJcbiAgLy9cclxuICAvLyBPbiB0aGUgc2VydmVyOlxyXG4gIC8vIDEuIGFwcC5nZXRJbml0aWFsUHJvcHNcclxuICAvLyAyLiBwYWdlLmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDMuIGRvY3VtZW50LmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDQuIGFwcC5yZW5kZXJcclxuICAvLyA1LiBwYWdlLnJlbmRlclxyXG4gIC8vIDYuIGRvY3VtZW50LnJlbmRlclxyXG4gIC8vXHJcbiAgLy8gT24gdGhlIHNlcnZlciB3aXRoIGVycm9yOlxyXG4gIC8vIDEuIGRvY3VtZW50LmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDIuIGFwcC5yZW5kZXJcclxuICAvLyAzLiBwYWdlLnJlbmRlclxyXG4gIC8vIDQuIGRvY3VtZW50LnJlbmRlclxyXG4gIC8vXHJcbiAgLy8gT24gdGhlIGNsaWVudFxyXG4gIC8vIDEuIGFwcC5nZXRJbml0aWFsUHJvcHNcclxuICAvLyAyLiBwYWdlLmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDMuIGFwcC5yZW5kZXJcclxuICAvLyA0LiBwYWdlLnJlbmRlclxyXG5cclxuICAvLyBSZW5kZXIgYXBwIGFuZCBwYWdlIGFuZCBnZXQgdGhlIGNvbnRleHQgb2YgdGhlIHBhZ2Ugd2l0aCBjb2xsZWN0ZWQgc2lkZSBlZmZlY3RzLlxyXG4gIGNvbnN0IHNoZWV0cyA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0cygpO1xyXG4gIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlO1xyXG5cclxuICBjdHgucmVuZGVyUGFnZSA9ICgpID0+XHJcbiAgICBvcmlnaW5hbFJlbmRlclBhZ2UoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgIGVuaGFuY2VBcHA6IEFwcCA9PiBwcm9wcyA9PiBzaGVldHMuY29sbGVjdCg8QXBwIHsuLi5wcm9wc30gLz4pLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5pbml0aWFsUHJvcHMsXHJcbiAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY3J5cHRvLWxhbmRpbmcnLCAnY29tbW9uJ10sXHJcbiAgICAvLyBTdHlsZXMgZnJhZ21lbnQgaXMgcmVuZGVyZWQgYWZ0ZXIgdGhlIGFwcCBhbmQgcGFnZSByZW5kZXJpbmcgZmluaXNoLlxyXG4gICAgc3R5bGVzOiBbLi4uUmVhY3QuQ2hpbGRyZW4udG9BcnJheShpbml0aWFsUHJvcHMuc3R5bGVzKSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgc2hlZXRzLmdldFN0eWxlRWxlbWVudCgpXVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeURvY3VtZW50O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBjcnlwdG86IHtcclxuICAgIG5hbWU6ICdDb2lueicsXHJcbiAgICBkZXNjOiAnTHV4aXJlbiBDcnlwdG9jdXJyZW5jeSAtIFJlYWN0IFNpbmdsZSBMYW5kaW5nIFBhZ2UgVGVtcGxhdGUnLFxyXG4gICAgcHJlZml4OiAnbHV4aXJlbicsXHJcbiAgICBmb290ZXJUZXh0OiAnTHV4aXJlbiBUaGVtZSAyMDIxJyxcclxuICAgIGxvZ29UZXh0OiAnTHV4aXJlbiBDb2lueicsXHJcbiAgICBwcm9qZWN0TmFtZTogJ0NvaW56JyxcclxuICAgIHVybDogJ2x1eGlyZWFjdC51eC1tYWVzdHJvLmNvbS9jb2lueicsXHJcbiAgICBpbWc6ICcvc3RhdGljL2ltYWdlcy9jcnlwdG8tbG9nby5wbmcnLFxyXG4gICAgbm90aWZNc2c6ICdEb25lYyBzaXQgYW1ldCBudWxsYSBzZWQgYXJjdSBwdWx2aW5hciB1bHRyaWNpZXMgY29tbW9kbyBpZCBsaWd1bGEuJ1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgb2NlYW5CbHVlOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNCQkRFRkInLFxyXG4gICAgICAgIG1haW46ICcjMjE5NkYzJyxcclxuICAgICAgICBkYXJrOiAnIzBENDdBMSdcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjQjJFQkYyJyxcclxuICAgICAgICBtYWluOiAnIzAwQkNENCcsXHJcbiAgICAgICAgZGFyazogJyMwMDYwNjQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGdyZWVuTGVhZjoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjQzhFNkM5JyxcclxuICAgICAgICBtYWluOiAnIzRDQUY1MCcsXHJcbiAgICAgICAgZGFyazogJyMxQjVFMjAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0NGRDhEQycsXHJcbiAgICAgICAgbWFpbjogJyM2MDdEOEInLFxyXG4gICAgICAgIGRhcms6ICcjMzc0NzRGJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtb25leToge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjQzhFNkM5JyxcclxuICAgICAgICBtYWluOiAnIzRDQUY1MCcsXHJcbiAgICAgICAgZGFyazogJyMyRTdEMzInXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0ZGRUNCMycsXHJcbiAgICAgICAgbWFpbjogJyNGRkEwMDAnLFxyXG4gICAgICAgIGRhcms6ICcjRkY2RjAwJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBncmF5c2NhbGU6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0NGRDhEQycsXHJcbiAgICAgICAgbWFpbjogJyM1NDZFN0EnLFxyXG4gICAgICAgIGRhcms6ICcjMjYzMjM4J1xyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNEN0NDQzgnLFxyXG4gICAgICAgIG1haW46ICcjNkQ0QzQxJyxcclxuICAgICAgICBkYXJrOiAnIzNFMjcyMydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2xvdWQ6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0IzRTVGQycsXHJcbiAgICAgICAgbWFpbjogJyMwM0E5RjQnLFxyXG4gICAgICAgIGRhcms6ICcjMDE1NzlCJ1xyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGRkUwQjInLFxyXG4gICAgICAgIG1haW46ICcjRkY5ODAwJyxcclxuICAgICAgICBkYXJrOiAnI0U2NTEwMCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgam9rZXI6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0QxQzRFOScsXHJcbiAgICAgICAgbWFpbjogJyM2NzNBQjcnLFxyXG4gICAgICAgIGRhcms6ICcjMzExQjkyJ1xyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNCMkVCRjInLFxyXG4gICAgICAgIG1haW46ICcjMDBCQ0Q0JyxcclxuICAgICAgICBkYXJrOiAnIzAwNjA2NCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdmlvbGV0OiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGOEJCRDAnLFxyXG4gICAgICAgIG1haW46ICcjRUM0MDdBJyxcclxuICAgICAgICBkYXJrOiAnIzg4MEU0RidcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRDFDNEU5JyxcclxuICAgICAgICBtYWluOiAnIzY3M0FCNycsXHJcbiAgICAgICAgZGFyazogJyMzMTFCOTInXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHZpb2xldGE6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0UxQkVFNycsXHJcbiAgICAgICAgbWFpbjogJyM5QzI3QjAnLFxyXG4gICAgICAgIGRhcms6ICcjNkExQjlBJ1xyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNEQ0VEQzgnLFxyXG4gICAgICAgIG1haW46ICcjOEJDMzRBJyxcclxuICAgICAgICBkYXJrOiAnIzU1OEIyRidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVlcEJsdWU6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnIzBjODhlZCcsXHJcbiAgICAgICAgbWFpbjogJyMwYzgzZTQnLFxyXG4gICAgICAgIGRhcms6ICcjMDk2MWFhJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjODIwMmYyJyxcclxuICAgICAgICBtYWluOiAnIzYyMDJiNicsXHJcbiAgICAgICAgZGFyazogJyM0OTAxODgnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJvc2VHb2xkOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFOEVBRjYnLFxyXG4gICAgICAgIG1haW46ICcjM0Y1MUI1JyxcclxuICAgICAgICBkYXJrOiAnIzI4MzU5MycsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0UxRjVGRScsXHJcbiAgICAgICAgbWFpbjogJyMwM0E5RjQnLFxyXG4gICAgICAgIGRhcms6ICcjMDI3N0JEJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB1YnVudHU6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0ZGRjNFMCcsXHJcbiAgICAgICAgbWFpbjogJyNFRjZDMDAnLFxyXG4gICAgICAgIGRhcms6ICcjRTY1MTAwJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRjNFNUY1JyxcclxuICAgICAgICBtYWluOiAnIzlDMjdCMCcsXHJcbiAgICAgICAgZGFyazogJyM3QjFGQTInLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGdlZW5OYXR1cmU6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0UwRjdGQScsXHJcbiAgICAgICAgbWFpbjogJyMwMDk2ODgnLFxyXG4gICAgICAgIGRhcms6ICcjMDA2OTVDJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRjFGOEU5JyxcclxuICAgICAgICBtYWluOiAnIzY4OUYzOCcsXHJcbiAgICAgICAgZGFyazogJyMzMzY5MUUnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHZhbXBpcmU6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0ZGRUJFRScsXHJcbiAgICAgICAgbWFpbjogJyNmNDQzMzYnLFxyXG4gICAgICAgIGRhcms6ICcjRTUzOTM1JyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRUNFRkYxJyxcclxuICAgICAgICBtYWluOiAnIzYwN0Q4QicsXHJcbiAgICAgICAgZGFyazogJyM0NTVBNjQnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1pbnQ6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI2JiZGVmYicsXHJcbiAgICAgICAgbWFpbjogJyMyMTk2ZjMnLFxyXG4gICAgICAgIGRhcms6ICcjMGQ0N2ExJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjYjNlNWZjJyxcclxuICAgICAgICBtYWluOiAnIzAzYTlmNCcsXHJcbiAgICAgICAgZGFyazogJyMwMTU3OWInLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG9jZWFuU2t5OiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFM0YyRkQnLFxyXG4gICAgICAgIG1haW46ICcjMjE5NkYzJyxcclxuICAgICAgICBkYXJrOiAnIzE1NjVDMCcsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0UwRjJGMScsXHJcbiAgICAgICAgbWFpbjogJyMwMEJGQTUnLFxyXG4gICAgICAgIGRhcms6ICcjMDA3OTZCJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBnb2xkOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNGRkY5QzQnLFxyXG4gICAgICAgIG1haW46ICcjRkY5MTAwJyxcclxuICAgICAgICBkYXJrOiAnI0ZGNkQwMCcsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0VGRUJFOScsXHJcbiAgICAgICAgbWFpbjogJyM4RDZFNjMnLFxyXG4gICAgICAgIGRhcms6ICcjNEUzNDJFJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBib3Rhbmk6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0RDRURDOCcsXHJcbiAgICAgICAgbWFpbjogJyM2ODlGMzgnLFxyXG4gICAgICAgIGRhcms6ICcjMzM2OTFFJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjRkNFNEVDJyxcclxuICAgICAgICBtYWluOiAnI0YwNjI5MicsXHJcbiAgICAgICAgZGFyazogJyNBRDE0NTcnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpdHRsZVF1ZWVuOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyNFMEY3RkEnLFxyXG4gICAgICAgIG1haW46ICcjMDBCQ0Q0JyxcclxuICAgICAgICBkYXJrOiAnIzAwNjA2NCcsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0ZDRTRFQycsXHJcbiAgICAgICAgbWFpbjogJyNGMDYyOTInLFxyXG4gICAgICAgIGRhcms6ICcjQUQxNDU3JyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwdXJwbGU6IHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI2YzZTVmNScsXHJcbiAgICAgICAgbWFpbjogJyM5YzI3YjAnLFxyXG4gICAgICAgIGRhcms6ICcjNmExYjlhJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjZWE4MGZjJyxcclxuICAgICAgICBtYWluOiAnI2FhMDBmZicsXHJcbiAgICAgICAgZGFyazogJyM0YTE0OGMnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJsYWNrOiB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBsaWdodDogJyM5ZTllOWUnLFxyXG4gICAgICAgIG1haW46ICcjMjEyMTIxJyxcclxuICAgICAgICBkYXJrOiAnIzAwMCcsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGxpZ2h0OiAnI0UwRTBFMCcsXHJcbiAgICAgICAgbWFpbjogJyM3NTc1NzUnLFxyXG4gICAgICAgIGRhcms6ICcjNDI0MjQyJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBicm93bjoge1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbGlnaHQ6ICcjZDdjY2M4JyxcclxuICAgICAgICBtYWluOiAnIzc5NTU0OCcsXHJcbiAgICAgICAgZGFyazogJyM0ZTM0MmUnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBsaWdodDogJyNjY2IwYjAnLFxyXG4gICAgICAgIG1haW46ICcjNzk0ODQ4JyxcclxuICAgICAgICBkYXJrOiAnIzNlMjcyMycsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==