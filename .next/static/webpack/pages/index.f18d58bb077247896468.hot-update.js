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
    })))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9tb3Rpb24vUHJvbW90aW9uLmpzIl0sIm5hbWVzIjpbInNsaWRlckRhdGEiLCJpbWFnZSIsImltZ0FQSSIsImNyeXB0byIsInRpdGxlIiwiZGVzYyIsImRhdGUiLCJQcm9tb3Rpb24iLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ0Iiwicm9vdCIsInNsaWRlcldyYXAiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjbHN4Iiwib2RkIiwiZXZlbiIsInRvU3RyaW5nIiwiaW1nV3JhcCIsImRlY29yYXRpb24iLCJwYXBlciIsInRpbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsT0FBSyxFQUFFQyw4REFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBZCxDQURUO0FBRUVDLE9BQUssRUFBRSxzQ0FGVDtBQUdFQyxNQUFJLEVBQUUsNldBSFI7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FEaUIsQ0FBbkI7O0FBU0EsU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsTUFBTUMsT0FBTyxHQUFHQyxpRUFBUyxFQUF6QjtBQUR3QixNQUVoQkMsQ0FGZ0IsR0FFVkgsS0FGVSxDQUVoQkcsQ0FGZ0I7QUFHeEIsU0FDRTtBQUFLLGFBQVMsRUFBRUYsT0FBTyxDQUFDRyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVILE9BQU8sQ0FBQ0ksVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFWLENBQWVDO0FBREUsQ0FBdEI7QUFJZUMsNkhBQWUsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBZixDQUFvQ3RCLFNBQXBDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjE4ZDU4YmIwNzcyNDc4OTY0NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcclxuaW1wb3J0IE5leHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1hbmltYXRlZC1zbGlkZXInO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vcHJvbW90aW9uLXN0eWxlJztcclxuaW1wb3J0IGltZ0FQSSBmcm9tICd+L3B1YmxpYy9pbWFnZXMvaW1nQVBJJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuXHJcbmNvbnN0IHNsaWRlckRhdGEgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6IGltZ0FQSS5jcnlwdG9bMF0sXHJcbiAgICB0aXRsZTogJ291ciB0YXJnZXQgaXMgdG8gYmUgdXNlZCBieSBtaWxsaW9ucycsXHJcbiAgICBkZXNjOiBcIk9uIFRyYWRpbmcgUGxhbmV0IFN3YXAsIHlvdSBjYW4gbWFrZSB0cmFkZXMgb24gdGhlIEJpbmFuY2UgU21hcnQgQ2hhaW4uIEl0J3Mgb24gb2YgdGhlIGxhcmdlc3QgZGVjZW50cmFsaXplZCBuZXR3b3JrIGluIHRoZSB3b3JsZCBvZiBibG9ja2NoYWluLCBpdCdzIGltcG9zc2libGUgdG8gcnVuIGFuIGV4Y2hhbmdlIHdpdGhvdXQgdXNpbmcgaXQuQmluYW5jZSBTbWFydCBDaGFpbiBjYW1lIHJlY2VudGx5IGFuZCBoZWxwZWQgc29sdmUgdGhlIHByb2JsZW1zIG9mIEV0aGVyaXVtIEJsb2NrY2hhaW4uIFdpdGggZmFzdGVyIHRyYWRlcyBhbmQgbG93ZXIgZmVlcywgQmluYW5jZSBpcyBkZWZpbml0ZWx5IG9uZSB0byB3YXRjaCBvdXQgZm9yLlwiLFxyXG4gICAgZGF0ZTogJzEyIEp1bCAtIDEwIEF1ZydcclxuICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBQcm9tb3Rpb24ocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlcldyYXB9PlxyXG4gICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci13cmFwcGVyXCJcclxuICAgICAgICAgIHByZXZpb3VzQnV0dG9uPXsoXHJcbiAgICAgICAgICAgIDxOZXh0SWNvbiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIG5leHRCdXR0b249eyhcclxuICAgICAgICAgICAgPE5leHRJY29uIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtzbGlkZXJEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5pdGVtLCBpbmRleCAlIDIgPT09IDEgPyBjbGFzc2VzLm9kZCA6IGNsYXNzZXMuZXZlbil9IGtleT17aW5kZXgudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs0fT5cclxuICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezd9PlxyXG4gICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ1dyYXB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvcmF0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHN2Zz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHVzZSB4bGlua0hyZWY9XCIvZW4vaW1hZ2VzL2NyeXB0by9kZWNvLXByb21vLnBuZ1wiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L3N2Zz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0udGl0bGV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkJhc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLnByb21vX3BlcmlvZGUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuUHJvbW90aW9uLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShQcm9tb3Rpb24pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9