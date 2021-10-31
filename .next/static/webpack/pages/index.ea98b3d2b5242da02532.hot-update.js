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

  var handlePlay = function handlePlay() {
    setTimeout(function () {
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
    src: "/images/crypto/coin.png",
    alt: "feature",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlL01vcmVGZWF0dXJlLmpzIl0sIm5hbWVzIjpbImNvaW5EYXRhIiwibmFtZSIsImxvZ28iLCJwcm9ncmVzcyIsImNvbG9yIiwiTW9yZUZlYXR1cmUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ0ZXh0IiwidXNlVGV4dCIsInVzZVN0YXRlIiwicGxheSIsInNldFBsYXkiLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNEZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJpc01vYmlsZSIsImRvd24iLCJ0IiwidGhlbWVQcm9ncmVzcyIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiaGFuZGxlUGxheSIsInNldFRpbWVvdXQiLCJtb3JlRmVhdHVyZSIsIml0ZW0iLCJjbHN4IiwiY2VudGVyIiwic3VidGl0bGUyIiwiaWxsdXN0cmF0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxNQUFJLEVBQUUsS0FEUjtBQUVFQyxNQUFJLEVBQUUsd0JBRlI7QUFHRUMsVUFBUSxFQUFFLEVBSFo7QUFJRUMsT0FBSyxFQUFFO0FBSlQsQ0FEZSxFQU9mO0FBQ0VILE1BQUksRUFBRSxNQURSO0FBRUVDLE1BQUksRUFBRSx5QkFGUjtBQUdFQyxVQUFRLEVBQUUsRUFIWjtBQUlFQyxPQUFLLEVBQUU7QUFKVCxDQVBlLEVBYWY7QUFDRUgsTUFBSSxFQUFFLEtBRFI7QUFFRUMsTUFBSSxFQUFFLHdCQUZS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QUF0QztBQUEyQyxZQUFRLEVBQUMsSUFBcEQ7QUFBeUQsWUFBUSxFQUFFTSxVQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FSRixDQURGLENBREYsQ0E5Q0YsQ0FERixDQURGO0FBc0dEOztHQXpIUXZCLFc7VUFDU0csdUQsRUFDSEUsc0QsRUFFQ0ssaUUsRUFDSUUsdUUsRUFDREEsdUU7OztLQU5WWixXO0FBMkhUQSxXQUFXLENBQUMrQixTQUFaLEdBQXdCO0FBQ3RCZCxHQUFDLEVBQUVlLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFESSxDQUF4QjtBQUllQyw2SEFBZSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFmLENBQW9DbkMsV0FBcEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYTk4YjNkMmI1MjQyZGEwMjUzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSwgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgUmVhY3RXT1cgZnJvbSAncmVhY3Qtd293JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vVGl0bGUnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZmVhdHVyZS1zdHlsZSc7XHJcblxyXG5jb25zdCBjb2luRGF0YSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnQlRDJyxcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9idGMucG5nJyxcclxuICAgIHByb2dyZXNzOiA3NSxcclxuICAgIGNvbG9yOiAnI0ZCQTYzMCdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEQVNIJyxcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9kYXNoLnBuZycsXHJcbiAgICBwcm9ncmVzczogNDAsXHJcbiAgICBjb2xvcjogJyMyMUQzRDcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTkFOJyxcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9uYW4ucG5nJyxcclxuICAgIHByb2dyZXNzOiA5MCxcclxuICAgIGNvbG9yOiAnIzU0OENDQydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNTlInLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL21uci5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDM1LFxyXG4gICAgY29sb3I6ICcjRkY2NjAyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lPVCcsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vaW90LnBuZycsXHJcbiAgICBwcm9ncmVzczogODAsXHJcbiAgICBjb2xvcjogJyNDRTA3RDQnXHJcbiAgfVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gTW9yZUZlYXR1cmUocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCBbcGxheSwgc2V0UGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJykpO1xyXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpKTtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHRoZW1lUHJvZ3Jlc3MgPSBjb2xvciA9PiBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBtYWluOiBjb2xvclxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgaGFuZGxlUGxheSA9ICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyBzZXRQbGF5KHRydWUpOyB9LCAyMDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3JlRmVhdHVyZX0+XHJcbiAgICAgIDxDb250YWluZXIgZml4ZWQ9e2lzRGVza3RvcH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Nn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGV4dCwgaXNNb2JpbGUgJiYgY2xhc3Nlcy5jZW50ZXIpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlvbi1pb3MtbG9jay1vdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSB0ZXh0PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfdGl0bGUxJyl9IGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfSAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0gZGlzcGxheT1cImJsb2NrXCIgYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1vcmVmZWF0dXJlX3N1YnRpdGxlMScpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFJlYWN0V09XIGFuaW1hdGlvbj1cImZhZGVJbkxlZnRTaG9ydFwiIGRlbGF5PVwiMC4zc1wiIGR1cmF0aW9uPVwiMC4zc1wiPlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMuaWxsdXN0cmF0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NyeXB0by9kZWNvLXByb21vLnBuZ1wiIGFsdD1cImZlYXR1cmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgPC9SZWFjdFdPVz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj17aXNNb2JpbGUgPyAnY29sdW1uLXJldmVyc2UnIDogJ3Jvdyd9XHJcbiAgICAgICAgICAgIHNwYWNpbmc9ezZ9XHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxSZWFjdFdPVyBhbmltYXRpb249XCJmYWRlSW5SaWdodFNob3J0XCIgb2Zmc2V0PXstMTAwfSBkZWxheT1cIjAuM3NcIiBkdXJhdGlvbj1cIjAuM3NcIj5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmlsbHVzdHJhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jcnlwdG8vY29pbi5wbmdcIiBhbHQ9XCJmZWF0dXJlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgIDwvUmVhY3RXT1c+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRleHQsIGlzTW9iaWxlICYmIGNsYXNzZXMuY2VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLWFuYWx5dGljcy1vdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSB0ZXh0PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfdGl0bGUyJyl9IGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfSAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0gZGlzcGxheT1cImJsb2NrXCIgYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1vcmVmZWF0dXJlX3N1YnRpdGxlMicpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezEyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRleHQsIGNsYXNzZXMuY2VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpb24taW9zLWZsYXNoLW91dGxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9IHRleHQ9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV90aXRsZTMnKX0gYWxpZ249XCJjZW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZGlzcGxheT1cImJsb2NrXCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV9zdWJ0aXRsZTMnKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgICAgICAgICAgIDxSZWFjdFdPVyBhbmltYXRpb249XCJmYWRlSW5cIiBvZmZzZXQ9ey0xMDB9IGR1cmF0aW9uPVwiMHNcIiBjYWxsYmFjaz17aGFuZGxlUGxheX0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzV3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvaW5EYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSBzcmM9e2l0ZW0ubG9nb30gYWx0PXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51bml0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VU0Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOzUuMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VVNEPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsxNS4wMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVQcm9ncmVzcyhpdGVtLmNvbG9yKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BsYXkgPyBpdGVtLnByb2dyZXNzIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMudHJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyOiBjbGFzc2VzLmJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0V09XPlxyXG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuTW9yZUZlYXR1cmUucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKE1vcmVGZWF0dXJlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==