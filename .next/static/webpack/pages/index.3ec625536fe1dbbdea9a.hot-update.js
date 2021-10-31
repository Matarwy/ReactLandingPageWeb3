webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Promotion/Promotion.js":
/*!*******************************************!*\
  !*** ./components/Promotion/Promotion.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_animated_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-animated-slider */ "./node_modules/react-animated-slider/build/index.js");
/* harmony import */ var react_animated_slider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_animated_slider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _promotion_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./promotion-style */ "./components/Promotion/promotion-style.js");
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/images/imgAPI */ "./public/images/imgAPI.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Promotion\\Promotion.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var sliderData = [{
  image: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_11__["default"].crypto[0],
  title: 'our target is to be used by millions',
  desc: "On Trading Planet Swap, you can make trades on the Binance Smart Chain. It's on of the largest decentralized network in the world of blockchain, it's impossible to run an exchange without using it.Binance Smart Chain came recently and helped solve the problems of Etherium Blockchain. With faster trades and lower fees, Binance is definitely one to watch out for.",
  date: '12 Jul - 10 Aug'
}];

function Promotion(props) {
  _s();

  var _this = this;

  var classes = Object(_promotion_style__WEBPACK_IMPORTED_MODULE_10__["default"])();
  var t = props.t;
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
  }, sliderData.map(function (item, index) {
    return __jsx("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.item, index % 2 === 1 ? classes.odd : classes.even),
      key: index.toString(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      container: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: true,
      xs: 12,
      lg: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, "\xA0"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: true,
      xs: 12,
      lg: 7,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__["default"], {
      mdDown: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: classes.imgWrap,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: classes.decoration,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }), __jsx("figure", {
      className: classes.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "/en/images/crypto/deco-promo.png",
      alt: item.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 27
      }
    }))))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.paper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "h1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 23
      }
    }, item.title)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, item.desc), __jsx("section", {
      className: classes.time,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "h6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 23
      }
    }, t('common:crypto-landing.promo_periode'), ":\xA0", item.date))))));
  }))));
}

_s(Promotion, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [_promotion_style__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c = Promotion;
Promotion.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_12__["withTranslation"])(['crypto-landing'])(Promotion));

var _c;

$RefreshReg$(_c, "Promotion");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9tb3Rpb24vUHJvbW90aW9uLmpzIl0sIm5hbWVzIjpbInNsaWRlckRhdGEiLCJpbWFnZSIsImltZ0FQSSIsImNyeXB0byIsInRpdGxlIiwiZGVzYyIsImRhdGUiLCJQcm9tb3Rpb24iLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ0Iiwicm9vdCIsInNsaWRlcldyYXAiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjbHN4Iiwib2RkIiwiZXZlbiIsInRvU3RyaW5nIiwiaW1nV3JhcCIsImRlY29yYXRpb24iLCJwYXBlciIsInRpbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsT0FBSyxFQUFFQyw4REFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBZCxDQURUO0FBRUVDLE9BQUssRUFBRSxzQ0FGVDtBQUdFQyxNQUFJLEVBQUUsNldBSFI7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FEaUIsQ0FBbkI7O0FBU0EsU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsTUFBTUMsT0FBTyxHQUFHQyxpRUFBUyxFQUF6QjtBQUR3QixNQUVoQkMsQ0FGZ0IsR0FFVkgsS0FGVSxDQUVoQkcsQ0FGZ0I7QUFHeEIsU0FDRTtBQUFLLGFBQVMsRUFBRUYsT0FBTyxDQUFDRyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVILE9BQU8sQ0FBQ0ksVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QURGO0FBMEREOztHQTdEUUMsUztVQUNTRyx5RDs7O0tBRFRILFM7QUErRFRBLFNBQVMsQ0FBQ2tCLFNBQVYsR0FBc0I7QUFDcEJkLEdBQUMsRUFBRWUsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURFLENBQXRCO0FBSWVDLDZIQUFlLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQWYsQ0FBb0N0QixTQUFwQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNlYzYyNTUzNmZlMWRiYmRlYTlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSc7XHJcbmltcG9ydCBOZXh0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3QtYW5pbWF0ZWQtc2xpZGVyJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL3Byb21vdGlvbi1zdHlsZSc7XHJcbmltcG9ydCBpbWdBUEkgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcblxyXG5jb25zdCBzbGlkZXJEYXRhID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiBpbWdBUEkuY3J5cHRvWzBdLFxyXG4gICAgdGl0bGU6ICdvdXIgdGFyZ2V0IGlzIHRvIGJlIHVzZWQgYnkgbWlsbGlvbnMnLFxyXG4gICAgZGVzYzogXCJPbiBUcmFkaW5nIFBsYW5ldCBTd2FwLCB5b3UgY2FuIG1ha2UgdHJhZGVzIG9uIHRoZSBCaW5hbmNlIFNtYXJ0IENoYWluLiBJdCdzIG9uIG9mIHRoZSBsYXJnZXN0IGRlY2VudHJhbGl6ZWQgbmV0d29yayBpbiB0aGUgd29ybGQgb2YgYmxvY2tjaGFpbiwgaXQncyBpbXBvc3NpYmxlIHRvIHJ1biBhbiBleGNoYW5nZSB3aXRob3V0IHVzaW5nIGl0LkJpbmFuY2UgU21hcnQgQ2hhaW4gY2FtZSByZWNlbnRseSBhbmQgaGVscGVkIHNvbHZlIHRoZSBwcm9ibGVtcyBvZiBFdGhlcml1bSBCbG9ja2NoYWluLiBXaXRoIGZhc3RlciB0cmFkZXMgYW5kIGxvd2VyIGZlZXMsIEJpbmFuY2UgaXMgZGVmaW5pdGVseSBvbmUgdG8gd2F0Y2ggb3V0IGZvci5cIixcclxuICAgIGRhdGU6ICcxMiBKdWwgLSAxMCBBdWcnXHJcbiAgfVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gUHJvbW90aW9uKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbGlkZXJXcmFwfT5cclxuICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItd3JhcHBlclwiXHJcbiAgICAgICAgICBwcmV2aW91c0J1dHRvbj17KFxyXG4gICAgICAgICAgICA8TmV4dEljb24gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBuZXh0QnV0dG9uPXsoXHJcbiAgICAgICAgICAgIDxOZXh0SWNvbiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c2xpZGVyRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaXRlbSwgaW5kZXggJSAyID09PSAxID8gY2xhc3Nlcy5vZGQgOiBjbGFzc2VzLmV2ZW4pfSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs3fT5cclxuICAgICAgICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdXcmFwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb3JhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzdmc+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx1c2UgeGxpbmtIcmVmPVwiL2VuL2ltYWdlcy9jcnlwdG8vZGVjby1wcm9tby5wbmdcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9zdmc+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2VuL2ltYWdlcy9jcnlwdG8vZGVjby1wcm9tby5wbmdcIiBhbHQ9e2l0ZW0udGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQmFzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcucHJvbW9fcGVyaW9kZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5Qcm9tb3Rpb24ucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKFByb21vdGlvbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=