webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Cards/Testimonial.js":
/*!*****************************************!*\
  !*** ./components/Cards/Testimonial.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Testimonial; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _cards_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards-style */ "./components/Cards/cards-style.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Cards\\Testimonial.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Testimonial(props) {
  _s();

  var classes = Object(_cards_style__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var text = props.text,
      name = props.name,
      title = props.title,
      avatar = props.avatar,
      active = props.active;
  return __jsx("div", {
    className: classes.testimonial,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.paper, active ? classes.active : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: avatar,
    className: classes.avatar,
    alt: "avatar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.text,
    display: "block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, text), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "caption",
    className: classes.caption,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, name)));
}

_s(Testimonial, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [_cards_style__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = Testimonial;
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

var _c;

$RefreshReg$(_c, "Testimonial");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9UZXN0aW1vbmlhbC5qcyJdLCJuYW1lcyI6WyJUZXN0aW1vbmlhbCIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInRleHQiLCJuYW1lIiwidGl0bGUiLCJhdmF0YXIiLCJhY3RpdmUiLCJ0ZXN0aW1vbmlhbCIsImNsc3giLCJwYXBlciIsImNhcHRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDekMsTUFBTUMsT0FBTyxHQUFHQyw0REFBUyxFQUF6QjtBQUR5QyxNQUd2Q0MsSUFIdUMsR0FRckNILEtBUnFDLENBR3ZDRyxJQUh1QztBQUFBLE1BSXZDQyxJQUp1QyxHQVFyQ0osS0FScUMsQ0FJdkNJLElBSnVDO0FBQUEsTUFLdkNDLEtBTHVDLEdBUXJDTCxLQVJxQyxDQUt2Q0ssS0FMdUM7QUFBQSxNQU12Q0MsTUFOdUMsR0FRckNOLEtBUnFDLENBTXZDTSxNQU51QztBQUFBLE1BT3ZDQyxNQVB1QyxHQVFyQ1AsS0FScUMsQ0FPdkNPLE1BUHVDO0FBU3pDLFNBQ0U7QUFBSyxhQUFTLEVBQUVOLE9BQU8sQ0FBQ08sV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTyxhQUFTLEVBQUVDLG9EQUFJLENBQUNSLE9BQU8sQ0FBQ1MsS0FBVCxFQUFnQkgsTUFBTSxHQUFHTixPQUFPLENBQUNNLE1BQVgsR0FBb0IsRUFBMUMsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBUSxPQUFHLEVBQUVELE1BQWI7QUFBcUIsYUFBUyxFQUFFTCxPQUFPLENBQUNLLE1BQXhDO0FBQWdELE9BQUcsRUFBQyxRQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG9FQUFEO0FBQVksYUFBUyxFQUFFTCxPQUFPLENBQUNFLElBQS9CO0FBQXFDLFdBQU8sRUFBQyxPQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNEQSxJQUF0RCxDQUZGLEVBR0UsTUFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQyxTQUFwQjtBQUE4QixhQUFTLEVBQUVGLE9BQU8sQ0FBQ1UsT0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxJQURILENBSEYsQ0FERixDQURGO0FBYUQ7O0dBdEJ1QkwsVztVQUNORyxvRDs7O0tBRE1ILFc7QUF3QnhCQSxXQUFXLENBQUNhLFNBQVosR0FBd0I7QUFDdEJSLE1BQUksRUFBRVMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFERDtBQUV0QlYsT0FBSyxFQUFFUSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUZGO0FBR3RCWixNQUFJLEVBQUVVLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBSEQ7QUFJdEJULFFBQU0sRUFBRU8saURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFKSDtBQUt0QlIsUUFBTSxFQUFFTSxpREFBUyxDQUFDRztBQUxJLENBQXhCO0FBUUFqQixXQUFXLENBQUNrQixZQUFaLEdBQTJCO0FBQ3pCVixRQUFNLEVBQUU7QUFEaUIsQ0FBM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTNhNTc5YmMzYjUxN2E0MWRjMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vY2FyZHMtc3R5bGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWwocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgdGV4dCxcclxuICAgIG5hbWUsXHJcbiAgICB0aXRsZSxcclxuICAgIGF2YXRhcixcclxuICAgIGFjdGl2ZVxyXG4gIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGVzdGltb25pYWx9PlxyXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucGFwZXIsIGFjdGl2ZSA/IGNsYXNzZXMuYWN0aXZlIDogJycpfT5cclxuICAgICAgICA8QXZhdGFyIHNyYz17YXZhdGFyfSBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fSBkaXNwbGF5PVwiYmxvY2tcIj57dGV4dH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMuY2FwdGlvbn0+XHJcbiAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIHsvKiAmbmJzcDstJm5ic3A7XHJcbiAgICAgICAgICB7dGl0bGV9ICovfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblRlc3RpbW9uaWFsLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcblRlc3RpbW9uaWFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhY3RpdmU6IGZhbHNlXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=