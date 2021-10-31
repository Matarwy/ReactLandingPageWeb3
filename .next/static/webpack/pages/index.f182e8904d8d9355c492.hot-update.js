webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Feature/MoreFeature.js":
/*!*******************************************!*\
  !*** ./components/Feature/MoreFeature.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-wow */ "./node_modules/react-wow/dist/index.js");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");
/* harmony import */ var _feature_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./feature-style */ "./components/Feature/feature-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Feature\\MoreFeature.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var coinData = [{
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
  _s();

  var classes = Object(_feature_style__WEBPACK_IMPORTED_MODULE_14__["default"])();
  var text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_12__["useText"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      play = _useState[0],
      setPlay = _useState[1];

  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var isDesktop = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"])(theme.breakpoints.up('md'));
  var isMobile = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"])(theme.breakpoints.down('sm'));
  var t = props.t;

  var themeProgress = function themeProgress(color) {
    return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
      palette: {
        primary: {
          main: color
        }
      }
    });
  };

  var handlePlay = function handlePlay() {// setTimeout(() => { setPlay(true); }, 200);
  };

  return __jsx("div", {
    className: classes.moreFeature,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 6,
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.text, isMobile && classes.center),
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
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: text.subtitle2,
    display: "block",
    align: isMobile ? 'center' : 'left',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, t('common:crypto-landing.morefeature_subtitle1')))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  })))), __jsx("div", {
    className: classes.item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.text, isMobile && classes.center),
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
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    sm: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.text, classes.center),
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
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    display: "block",
    align: "center",
    className: text.subtitle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, t('common:crypto-landing.morefeature_subtitle3'))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

_s(MoreFeature, "OGA7oZErTOjjkXAOCBUK8rDviYE=", false, function () {
  return [_feature_style__WEBPACK_IMPORTED_MODULE_14__["default"], _theme_common__WEBPACK_IMPORTED_MODULE_12__["useText"], _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = MoreFeature;
MoreFeature.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_11__["withTranslation"])(['crypto-landing'])(MoreFeature));

var _c;

$RefreshReg$(_c, "MoreFeature");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlL01vcmVGZWF0dXJlLmpzIl0sIm5hbWVzIjpbImNvaW5EYXRhIiwibmFtZSIsImxvZ28iLCJwcm9ncmVzcyIsImNvbG9yIiwiTW9yZUZlYXR1cmUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ0ZXh0IiwidXNlVGV4dCIsInVzZVN0YXRlIiwicGxheSIsInNldFBsYXkiLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNEZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJpc01vYmlsZSIsImRvd24iLCJ0IiwidGhlbWVQcm9ncmVzcyIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiaGFuZGxlUGxheSIsIm1vcmVGZWF0dXJlIiwiaXRlbSIsImNsc3giLCJjZW50ZXIiLCJzdWJ0aXRsZTIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLE1BQUksRUFBRSxLQURSO0FBRUVDLE1BQUksRUFBRSx3QkFGUjtBQUdFQyxVQUFRLEVBQUUsRUFIWjtBQUlFQyxPQUFLLEVBQUU7QUFKVCxDQURlLEVBT2Y7QUFDRUgsTUFBSSxFQUFFLE1BRFI7QUFFRUMsTUFBSSxFQUFFLHlCQUZSO0FBR0VDLFVBQVEsRUFBRSxFQUhaO0FBSUVDLE9BQUssRUFBRTtBQUpULENBUGUsRUFhZjtBQUNFSCxNQUFJLEVBQUUsS0FEUjtBQUVFQyxNQUFJLEVBQUUsd0JBRlI7QUFHRUMsVUFBUSxFQUFFLEVBSFo7QUFJRUMs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QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBSyxFQUFDLFFBQWxDO0FBQTJDLGFBQVMsRUFBRWIsSUFBSSxDQUFDd0IsU0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxDQUFDLENBQUMsNkNBQUQsQ0FESixDQUhGLENBREYsRUFRRSxNQUFDLG1FQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVUsYUFBUyxFQUFDLFFBQXBCO0FBQTZCLFVBQU0sRUFBRSxDQUFDLEdBQXRDO0FBQTJDLFlBQVEsRUFBQyxJQUFwRDtBQUF5RCxZQUFRLEVBQUVNLFVBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLENBREYsQ0FERixDQTlDRixDQURGLENBREY7QUFzR0Q7O0dBekhRdkIsVztVQUNTRyx1RCxFQUNIRSxzRCxFQUVDSyxpRSxFQUNJRSx1RSxFQUNEQSx1RTs7O0tBTlZaLFc7QUEySFRBLFdBQVcsQ0FBQzZCLFNBQVosR0FBd0I7QUFDdEJaLEdBQUMsRUFBRWEsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURJLENBQXhCO0FBSWVDLDZIQUFlLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQWYsQ0FBb0NqQyxXQUFwQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYxODJlODkwNGQ4ZDkzNTVjNDkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBSZWFjdFdPVyBmcm9tICdyZWFjdC13b3cnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mZWF0dXJlLXN0eWxlJztcclxuXHJcbmNvbnN0IGNvaW5EYXRhID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdCVEMnLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2J0Yy5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDc1LFxyXG4gICAgY29sb3I6ICcjRkJBNjMwJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RBU0gnLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2Rhc2gucG5nJyxcclxuICAgIHByb2dyZXNzOiA0MCxcclxuICAgIGNvbG9yOiAnIzIxRDNENydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOQU4nLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL25hbi5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDkwLFxyXG4gICAgY29sb3I6ICcjNTQ4Q0NDJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01OUicsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vbW5yLnBuZycsXHJcbiAgICBwcm9ncmVzczogMzUsXHJcbiAgICBjb2xvcjogJyNGRjY2MDInXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSU9UJyxcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9pb3QucG5nJyxcclxuICAgIHByb2dyZXNzOiA4MCxcclxuICAgIGNvbG9yOiAnI0NFMDdENCdcclxuICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBNb3JlRmVhdHVyZShwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xyXG4gIGNvbnN0IFtwbGF5LCBzZXRQbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKSk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJykpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdGhlbWVQcm9ncmVzcyA9IGNvbG9yID0+IGNyZWF0ZU11aVRoZW1lKHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIG1haW46IGNvbG9yXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBoYW5kbGVQbGF5ID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7IHNldFBsYXkodHJ1ZSk7IH0sIDIwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1vcmVGZWF0dXJlfT5cclxuICAgICAgPENvbnRhaW5lciBmaXhlZD17aXNEZXNrdG9wfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs2fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50ZXh0LCBpc01vYmlsZSAmJiBjbGFzc2VzLmNlbnRlcil9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW9uLWlvcy1sb2NrLW91dGxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlIHRleHQ9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV90aXRsZTEnKX0gYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9IC8+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfSBkaXNwbGF5PVwiYmxvY2tcIiBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfc3VidGl0bGUxJyl9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8UmVhY3RXT1cgYW5pbWF0aW9uPVwiZmFkZUluTGVmdFNob3J0XCIgZGVsYXk9XCIwLjNzXCIgZHVyYXRpb249XCIwLjNzXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMuaWxsdXN0cmF0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NyeXB0by9kZWNvLXByb21vLnBuZ1wiIGFsdD1cImZlYXR1cmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+ICovfVxyXG4gICAgICAgICAgICAgIDwvUmVhY3RXT1c+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBkaXJlY3Rpb249e2lzTW9iaWxlID8gJ2NvbHVtbi1yZXZlcnNlJyA6ICdyb3cnfVxyXG4gICAgICAgICAgICBzcGFjaW5nPXs2fVxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICB7LyogPFJlYWN0V09XIGFuaW1hdGlvbj1cImZhZGVJblJpZ2h0U2hvcnRcIiBvZmZzZXQ9ey0xMDB9IGRlbGF5PVwiMC4zc1wiIGR1cmF0aW9uPVwiMC4zc1wiPlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMuaWxsdXN0cmF0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NyeXB0by9jb2luLnBuZ1wiIGFsdD1cImZlYXR1cmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgPC9SZWFjdFdPVz4gKi99XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRleHQsIGlzTW9iaWxlICYmIGNsYXNzZXMuY2VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLWFuYWx5dGljcy1vdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSB0ZXh0PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfdGl0bGUyJyl9IGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfSAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0gZGlzcGxheT1cImJsb2NrXCIgYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1vcmVmZWF0dXJlX3N1YnRpdGxlMicpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezEyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRleHQsIGNsYXNzZXMuY2VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLWZsYXNoLW91dGxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9IHRleHQ9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV90aXRsZTMnKX0gYWxpZ249XCJjZW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZGlzcGxheT1cImJsb2NrXCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV9zdWJ0aXRsZTMnKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgICAgICAgICAgIDxSZWFjdFdPVyBhbmltYXRpb249XCJmYWRlSW5cIiBvZmZzZXQ9ey0xMDB9IGR1cmF0aW9uPVwiMHNcIiBjYWxsYmFjaz17aGFuZGxlUGxheX0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzV3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvaW5EYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSBzcmM9e2l0ZW0ubG9nb30gYWx0PXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51bml0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VU0Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOzUuMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VVNEPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsxNS4wMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVQcm9ncmVzcyhpdGVtLmNvbG9yKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BsYXkgPyBpdGVtLnByb2dyZXNzIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMudHJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyOiBjbGFzc2VzLmJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0V09XPlxyXG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuTW9yZUZlYXR1cmUucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKE1vcmVGZWF0dXJlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==