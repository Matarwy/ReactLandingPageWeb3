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

  var _this = this;

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
    src: "/images/crypto/illustration2.png",
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
  }, __jsx("ul", {
    className: classes.progressWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, coinData.map(function (item, index) {
    return __jsx("li", {
      key: index.toString(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: classes.coin,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.logo,
      src: item.logo,
      alt: item.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 27
      }
    }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "h5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 27
      }
    }, item.name)), __jsx("div", {
      className: classes.progress,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: classes.unit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 27
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "h6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 31
      }
    }, "USD"), "\xA05.000"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "h6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 31
      }
    }, "USD"), "\xA015.000")), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
      theme: themeProgress(item.color),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 27
      }
    }, __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "determinate",
      value: play ? item.progress : 0,
      classes: {
        root: classes.track,
        bar: classes.bar
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 29
      }
    }))));
  })))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlL01vcmVGZWF0dXJlLmpzIl0sIm5hbWVzIjpbImNvaW5EYXRhIiwibmFtZSIsImxvZ28iLCJwcm9ncmVzcyIsImNvbG9yIiwiTW9yZUZlYXR1cmUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ0ZXh0IiwidXNlVGV4dCIsInVzZVN0YXRlIiwicGxheSIsInNldFBsYXkiLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNEZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJpc01vYmlsZSIsImRvd24iLCJ0IiwidGhlbWVQcm9ncmVzcyIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiaGFuZGxlUGxheSIsInNldFRpbWVvdXQiLCJtb3JlRmVhdHVyZSIsIml0ZW0iLCJjbHN4IiwiY2VudGVyIiwic3VidGl0bGUyIiwiaWxsdXN0cmF0aW9uIiwicHJvZ3Jlc3NXcmFwIiwibWFwIiwiaW5kZXgiLCJ0b1N0cmluZyIsImNvaW4iLCJ1bml0Iiwicm9vdCIsInRyYWNrIiwiYmFyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxNQUFJLEVBQUUsS0FEUjtBQUVFQyxNQUFJLEVBQUUsd0JBRlI7QUFHRUMsVUFBUSxFQUFFLEVBSFo7QUFJRUMsT0FBSyxFQUFFO0FBSlQsQ0FEZSxFQU9mO0FBQ0VILE1BQUksRUFBRSxNQURSO0FBRUVDLE1BQUksRUFBRSx5QkFGUjtBQUdFQyxVQUFRLEVBQUUsRUFI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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsY0FERixFQUtFLE1BQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUxGLENBREYsRUFXRSxNQUFDLHNFQUFEO0FBQWUsV0FBSyxFQUFFbEIsYUFBYSxDQUFDUSxJQUFJLENBQUMzQixLQUFOLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHlFQUFEO0FBQ0UsYUFBTyxFQUFDLGFBRFY7QUFFRSxXQUFLLEVBQUVRLElBQUksR0FBR21CLElBQUksQ0FBQzVCLFFBQVIsR0FBbUIsQ0FGaEM7QUFHRSxhQUFPLEVBQUU7QUFDUHVDLFlBQUksRUFBRW5DLE9BQU8sQ0FBQ29DLEtBRFA7QUFFUEMsV0FBRyxFQUFFckMsT0FBTyxDQUFDcUM7QUFGTixPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQVhGLENBUEYsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQURGLENBREYsQ0FSRixDQURGLENBREYsQ0E5Q0YsQ0FERixDQURGO0FBc0dEOztHQXpIUXZDLFc7VUFDU0csdUQsRUFDSEUsc0QsRUFFQ0ssaUUsRUFDSUUsdUUsRUFDREEsdUU7OztLQU5WWixXO0FBMkhUQSxXQUFXLENBQUN3QyxTQUFaLEdBQXdCO0FBQ3RCdkIsR0FBQyxFQUFFd0IsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURJLENBQXhCO0FBSWVDLDZIQUFlLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQWYsQ0FBb0M1QyxXQUFwQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhkMzM3NTI3OTJlYTZjZGYzYjE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBSZWFjdFdPVyBmcm9tICdyZWFjdC13b3cnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mZWF0dXJlLXN0eWxlJztcclxuXHJcbmNvbnN0IGNvaW5EYXRhID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdCVEMnLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2J0Yy5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDc1LFxyXG4gICAgY29sb3I6ICcjRkJBNjMwJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RBU0gnLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL2Rhc2gucG5nJyxcclxuICAgIHByb2dyZXNzOiA0MCxcclxuICAgIGNvbG9yOiAnIzIxRDNENydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOQU4nLFxyXG4gICAgbG9nbzogJy9pbWFnZXMvY3J5cHRvL25hbi5wbmcnLFxyXG4gICAgcHJvZ3Jlc3M6IDkwLFxyXG4gICAgY29sb3I6ICcjNTQ4Q0NDJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01OUicsXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9jcnlwdG8vbW5yLnBuZycsXHJcbiAgICBwcm9ncmVzczogMzUsXHJcbiAgICBjb2xvcjogJyNGRjY2MDInXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSU9UJyxcclxuICAgIGxvZ286ICcvaW1hZ2VzL2NyeXB0by9pb3QucG5nJyxcclxuICAgIHByb2dyZXNzOiA4MCxcclxuICAgIGNvbG9yOiAnI0NFMDdENCdcclxuICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBNb3JlRmVhdHVyZShwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xyXG4gIGNvbnN0IFtwbGF5LCBzZXRQbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKSk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJykpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdGhlbWVQcm9ncmVzcyA9IGNvbG9yID0+IGNyZWF0ZU11aVRoZW1lKHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIG1haW46IGNvbG9yXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBoYW5kbGVQbGF5ID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHNldFBsYXkodHJ1ZSk7IH0sIDIwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1vcmVGZWF0dXJlfT5cclxuICAgICAgPENvbnRhaW5lciBmaXhlZD17aXNEZXNrdG9wfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs2fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50ZXh0LCBpc01vYmlsZSAmJiBjbGFzc2VzLmNlbnRlcil9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW9uLWlvcy1sb2NrLW91dGxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlIHRleHQ9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV90aXRsZTEnKX0gYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9IC8+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfSBkaXNwbGF5PVwiYmxvY2tcIiBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfc3VidGl0bGUxJyl9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8UmVhY3RXT1cgYW5pbWF0aW9uPVwiZmFkZUluTGVmdFNob3J0XCIgZGVsYXk9XCIwLjNzXCIgZHVyYXRpb249XCIwLjNzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbGx1c3RyYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY3J5cHRvL2RlY28tcHJvbW8ucG5nXCIgYWx0PVwiZmVhdHVyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICA8L1JlYWN0V09XPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgZGlyZWN0aW9uPXtpc01vYmlsZSA/ICdjb2x1bW4tcmV2ZXJzZScgOiAncm93J31cclxuICAgICAgICAgICAgc3BhY2luZz17Nn1cclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFJlYWN0V09XIGFuaW1hdGlvbj1cImZhZGVJblJpZ2h0U2hvcnRcIiBvZmZzZXQ9ey0xMDB9IGRlbGF5PVwiMC4zc1wiIGR1cmF0aW9uPVwiMC4zc1wiPlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMuaWxsdXN0cmF0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NyeXB0by9pbGx1c3RyYXRpb24yLnBuZ1wiIGFsdD1cImZlYXR1cmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgPC9SZWFjdFdPVz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGV4dCwgaXNNb2JpbGUgJiYgY2xhc3Nlcy5jZW50ZXIpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlvbi1pb3MtYW5hbHl0aWNzLW91dGxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlIHRleHQ9e3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5tb3JlZmVhdHVyZV90aXRsZTInKX0gYWxpZ249e2lzTW9iaWxlID8gJ2NlbnRlcicgOiAnbGVmdCd9IC8+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfSBkaXNwbGF5PVwiYmxvY2tcIiBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcubW9yZWZlYXR1cmVfc3VidGl0bGUyJyl9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGV4dCwgY2xhc3Nlcy5jZW50ZXIpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlvbi1pb3MtZmxhc2gtb3V0bGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGUgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0gdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1vcmVmZWF0dXJlX3RpdGxlMycpfSBhbGlnbj1cImNlbnRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBkaXNwbGF5PVwiYmxvY2tcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLm1vcmVmZWF0dXJlX3N1YnRpdGxlMycpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0V09XIGFuaW1hdGlvbj1cImZhZGVJblwiIG9mZnNldD17LTEwMH0gZHVyYXRpb249XCIwc1wiIGNhbGxiYWNrPXtoYW5kbGVQbGF5fT5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc1dyYXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2luRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29pbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30gc3JjPXtpdGVtLmxvZ299IGFsdD17aXRlbS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudW5pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VVNEPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDs1LjAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlVTRDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7MTUuMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lUHJvZ3Jlc3MoaXRlbS5jb2xvcil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVhclByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXRlcm1pbmF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwbGF5ID8gaXRlbS5wcm9ncmVzcyA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLnRyYWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcjogY2xhc3Nlcy5iYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0V09XPlxyXG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuTW9yZUZlYXR1cmUucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKE1vcmVGZWF0dXJlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==