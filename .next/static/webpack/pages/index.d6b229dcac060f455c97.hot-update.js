webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Testimonials/Testimonials.js":
/*!*************************************************!*\
  !*** ./components/Testimonials/Testimonials.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/images/imgAPI */ "./public/images/imgAPI.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");
/* harmony import */ var _Cards_Testimonial__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Cards/Testimonial */ "./components/Cards/Testimonial.js");
/* harmony import */ var _testi_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./testi-style */ "./components/Testimonials/testi-style.js");



var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Testimonials\\Testimonials.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















var testiContent = [{
  text: 'Great team Good charity work',
  name: '	Mallori McLees',
  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_11__["default"].avatar[6],
  title: 'Chief Digital Officer'
}, {
  text: 'im very happy with stellar its ah good coin and it have ah good future vision =)',
  name: 'Arius',
  avatar: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_11__["default"].avatar[7],
  title: 'Chief Digital Officer'
} // {
//   text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
//   name: 'Jena Doe',
//   avatar: imgApi.avatar[1],
//   title: 'Graphic Designer',
// },
// {
//   text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
//   name: 'Jovelin Doe',
//   avatar: imgApi.avatar[2],
//   title: 'Senior Graphic Designer',
// },
// {
//   text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
//   name: 'Jihan Doe',
//   avatar: imgApi.avatar[3],
//   title: 'CEO Software House',
// },
// {
//   text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
//   name: 'John Doe',
//   avatar: imgApi.avatar[9],
//   title: 'Senior Graphic Designer',
// },
];

function Testimonials(props) {
  _s();

  var _this = this;

  var slider = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var classes = Object(_testi_style__WEBPACK_IMPORTED_MODULE_16__["default"])();
  var text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_13__["useText"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();
  var isDesktop = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__["default"])(theme.breakpoints.up('lg'));
  var t = props.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      activeTransition = _useState2[0],
      setActiveTransition = _useState2[1];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    afterChange: function afterChange(current) {
      return setActive(current);
    },
    beforeChange: function beforeChange(current, next) {
      return setActiveTransition(next);
    }
  };

  var slideState = function slideState(index) {
    if (index === activeTransition - 1 || index === active - 1) {
      return classes.past;
    }

    if (index === activeTransition + 1 || index === active + 1) {
      return classes.future;
    }

    if (index === activeTransition || index === active) {
      return classes.current;
    }

    return classes.slide;
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fixed: isDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_14__["default"], {
    text: t('common:crypto-landing.testi_title'),
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: text.subtitle2,
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, t('common:crypto-landing.testi_subtitle')), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 1,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 10,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.sliderWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.carousel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx("button", {
    type: "button",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])(classes.nav, classes.prev),
    onClick: function onClick() {
      return slider.current.slickPrev();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "ion-ios-arrow-back",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  })), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: slider
  }, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }), testiContent.map(function (item, index) {
    return __jsx("div", {
      key: index.toString(),
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])(classes.item, slideState(index)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: classes.slideContent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 23
      }
    }, __jsx(_Cards_Testimonial__WEBPACK_IMPORTED_MODULE_15__["default"], {
      text: item.text,
      name: item.name,
      title: item.title,
      avatar: item.avatar,
      active: index === active,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 25
      }
    })));
  })), __jsx("button", {
    type: "button",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])(classes.nav, classes.next),
    onClick: function onClick() {
      return slider.current.slickNext();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "ion-ios-arrow-forward",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: classes.pagination,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(testiContent.length)).map(function (e, index) {
    return __jsx("li", {
      key: index.toString(),
      className: index === active ? classes.active : '',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 21
      }
    }, __jsx("button", {
      type: "button",
      onClick: function onClick() {
        return slider.current.slickGoTo(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 23
      }
    }));
  }))))))));
}

_s(Testimonials, "FOKMerwhdSL2zMquyUYP13QHNYs=", false, function () {
  return [_testi_style__WEBPACK_IMPORTED_MODULE_16__["default"], _theme_common__WEBPACK_IMPORTED_MODULE_13__["useText"], _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = Testimonials;
Testimonials.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_12__["withTranslation"])(['crypto-landing'])(Testimonials));

var _c;

$RefreshReg$(_c, "Testimonials");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0aW1vbmlhbHMvVGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbInRlc3RpQ29udGVudCIsInRleHQiLCJuYW1lIiwiYXZhdGFyIiwiaW1nQXBpIiwidGl0bGUiLCJUZXN0aW1vbmlhbHMiLCJwcm9wcyIsInNsaWRlciIsInVzZVJlZiIsImNsYXNzZXMiLCJ1c2VTdHlsZSIsInVzZVRleHQiLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNEZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJ0IiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJhY3RpdmVUcmFuc2l0aW9uIiwic2V0QWN0aXZlVHJhbnNpdGlvbiIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJmYWRlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiYWZ0ZXJDaGFuZ2UiLCJjdXJyZW50IiwiYmVmb3JlQ2hhbmdlIiwibmV4dCIsInNsaWRlU3RhdGUiLCJpbmRleCIsInBhc3QiLCJmdXR1cmUiLCJzbGlkZSIsInJvb3QiLCJzdWJ0aXRsZTIiLCJzbGlkZXJXcmFwIiwiY2Fyb3VzZWwiLCJjbHN4IiwibmF2IiwicHJldiIsInNsaWNrUHJldiIsIm1hcCIsIml0ZW0iLCJ0b1N0cmluZyIsInNsaWRlQ29udGVudCIsInNsaWNrTmV4dCIsInBhZ2luYXRpb24iLCJBcnJheSIsImxlbmd0aCIsImUiLCJzbGlja0dvVG8iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFB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QUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQXZCRixDQURGLEVBZ0NFO0FBQUssYUFBUyxFQUFFM0MsT0FBTyxDQUFDNEMsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRywrSkFBSUMsS0FBSyxDQUFDdkQsWUFBWSxDQUFDd0QsTUFBZCxDQUFULEVBQWdDUCxHQUFoQyxDQUFvQyxVQUFDUSxDQUFELEVBQUlwQixLQUFKO0FBQUEsV0FDbkM7QUFDRSxTQUFHLEVBQUVBLEtBQUssQ0FBQ2MsUUFBTixFQURQO0FBRUUsZUFBUyxFQUFFZCxLQUFLLEtBQUtoQixNQUFWLEdBQW1CWCxPQUFPLENBQUNXLE1BQTNCLEdBQW9DLEVBRmpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRTtBQUFBLGVBQU1iLE1BQU0sQ0FBQ3lCLE9BQVAsQ0FBZXlCLFNBQWYsQ0FBeUJyQixLQUF6QixDQUFOO0FBQUEsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLENBRG1DO0FBQUEsR0FBcEMsQ0FESCxDQURGLENBaENGLENBREYsQ0FGRixDQUxGLENBREYsQ0FERjtBQTRERDs7R0EzRlEvQixZO1VBRVNLLHFELEVBQ0hDLHNELEVBQ0NFLGlFLEVBQ0lFLHVFOzs7S0FMWFYsWTtBQTZGVEEsWUFBWSxDQUFDcUQsU0FBYixHQUF5QjtBQUN2QnhDLEdBQUMsRUFBRXlDLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFESyxDQUF6QjtBQUllQyw2SEFBZSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFmLENBQW9DekQsWUFBcEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNmIyMjlkY2FjMDYwZjQ1NWM5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IGltZ0FwaSBmcm9tICd+L3B1YmxpYy9pbWFnZXMvaW1nQVBJJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gJ34vdGhlbWUvY29tbW9uJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL1RpdGxlJztcclxuaW1wb3J0IFRlc3RpQ2FyZCBmcm9tICcuLi9DYXJkcy9UZXN0aW1vbmlhbCc7XHJcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3Rlc3RpLXN0eWxlJztcclxuXHJcbmNvbnN0IHRlc3RpQ29udGVudCA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiAnR3JlYXQgdGVhbSBHb29kIGNoYXJpdHkgd29yaycsXHJcbiAgICBuYW1lOiAnXHRNYWxsb3JpIE1jTGVlcycsXHJcbiAgICBhdmF0YXI6IGltZ0FwaS5hdmF0YXJbNl0sXHJcbiAgICB0aXRsZTogJ0NoaWVmIERpZ2l0YWwgT2ZmaWNlcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnaW0gdmVyeSBoYXBweSB3aXRoIHN0ZWxsYXIgaXRzIGFoIGdvb2QgY29pbiBhbmQgaXQgaGF2ZSBhaCBnb29kIGZ1dHVyZSB2aXNpb24gPSknLFxyXG4gICAgbmFtZTogJ0FyaXVzJyxcclxuICAgIGF2YXRhcjogaW1nQXBpLmF2YXRhcls3XSxcclxuICAgIHRpdGxlOiAnQ2hpZWYgRGlnaXRhbCBPZmZpY2VyJyxcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRleHQ6ICdDcmFzIGNvbnZhbGxpcyBsYWN1cyBvcmNpLCB0cmlzdGlxdWUgdGluY2lkdW50IG1hZ25hIGNvbnNlcXVhdCBpbi4gSW4gdmVsIHB1bHZpbmFyIGVzdCwgYXQgZXVpc21vZCBsaWJlcm8uJyxcclxuICAvLyAgIG5hbWU6ICdKZW5hIERvZScsXHJcbiAgLy8gICBhdmF0YXI6IGltZ0FwaS5hdmF0YXJbMV0sXHJcbiAgLy8gICB0aXRsZTogJ0dyYXBoaWMgRGVzaWduZXInLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgdGV4dDogJ1NlZCBpbXBlcmRpZXQgZW5pbSBsaWd1bGEsIHZpdGFlIHZpdmVycmEganVzdG8gcG9ydGEgdmVsLicsXHJcbiAgLy8gICBuYW1lOiAnSm92ZWxpbiBEb2UnLFxyXG4gIC8vICAgYXZhdGFyOiBpbWdBcGkuYXZhdGFyWzJdLFxyXG4gIC8vICAgdGl0bGU6ICdTZW5pb3IgR3JhcGhpYyBEZXNpZ25lcicsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICB0ZXh0OiAnQ3JhcyBjb252YWxsaXMgbGFjdXMgb3JjaSwgdHJpc3RpcXVlIHRpbmNpZHVudCBtYWduYSBjb25zZXF1YXQgaW4uIEluIHZlbCBwdWx2aW5hciBlc3QsIGF0IGV1aXNtb2QgbGliZXJvLicsXHJcbiAgLy8gICBuYW1lOiAnSmloYW4gRG9lJyxcclxuICAvLyAgIGF2YXRhcjogaW1nQXBpLmF2YXRhclszXSxcclxuICAvLyAgIHRpdGxlOiAnQ0VPIFNvZnR3YXJlIEhvdXNlJyxcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRleHQ6ICdDcmFzIGNvbnZhbGxpcyBsYWN1cyBvcmNpLCB0cmlzdGlxdWUgdGluY2lkdW50IG1hZ25hIGNvbnNlcXVhdCBpbi4gSW4gdmVsIHB1bHZpbmFyIGVzdCwgYXQgZXVpc21vZCBsaWJlcm8uJyxcclxuICAvLyAgIG5hbWU6ICdKb2huIERvZScsXHJcbiAgLy8gICBhdmF0YXI6IGltZ0FwaS5hdmF0YXJbOV0sXHJcbiAgLy8gICB0aXRsZTogJ1NlbmlvciBHcmFwaGljIERlc2lnbmVyJyxcclxuICAvLyB9LFxyXG5dO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFRlc3RpbW9uaWFscyhwcm9wcykge1xyXG4gIGNvbnN0IHNsaWRlciA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpKTtcclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWN0aXZlVHJhbnNpdGlvbiwgc2V0QWN0aXZlVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgZmFkZTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNzAwMCxcclxuICAgIGFmdGVyQ2hhbmdlOiAoY3VycmVudCkgPT4gc2V0QWN0aXZlKGN1cnJlbnQpLFxyXG4gICAgYmVmb3JlQ2hhbmdlOiAoY3VycmVudCwgbmV4dCkgPT4gc2V0QWN0aXZlVHJhbnNpdGlvbihuZXh0KSxcclxuICB9O1xyXG4gIGNvbnN0IHNsaWRlU3RhdGUgPSBpbmRleCA9PiB7XHJcbiAgICBpZiAoaW5kZXggPT09IGFjdGl2ZVRyYW5zaXRpb24gLSAxIHx8IGluZGV4ID09PSBhY3RpdmUgLSAxKSB7XHJcbiAgICAgIHJldHVybiBjbGFzc2VzLnBhc3Q7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5kZXggPT09IGFjdGl2ZVRyYW5zaXRpb24gKyAxIHx8IGluZGV4ID09PSBhY3RpdmUgKyAxKSB7XHJcbiAgICAgIHJldHVybiBjbGFzc2VzLmZ1dHVyZTtcclxuICAgIH1cclxuICAgIGlmIChpbmRleCA9PT0gYWN0aXZlVHJhbnNpdGlvbiB8fCBpbmRleCA9PT0gYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybiBjbGFzc2VzLmN1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3Nlcy5zbGlkZTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENvbnRhaW5lciBmaXhlZD17aXNEZXNrdG9wfT5cclxuICAgICAgICA8VGl0bGUgdGV4dD17dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLnRlc3RpX3RpdGxlJyl9IGFsaWduPVwiY2VudGVyXCIgLz5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy50ZXN0aV9zdWJ0aXRsZScpfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Nn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxfSB4cz17MTJ9IC8+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsxMH0geHM9ezEyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVyV3JhcH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWx9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubmF2LCBjbGFzc2VzLnByZXYpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZXIuY3VycmVudC5zbGlja1ByZXYoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLWlvcy1hcnJvdy1iYWNrXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIHJlZj17c2xpZGVyfSB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICB7dGVzdGlDb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXgudG9TdHJpbmcoKX0gY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaXRlbSwgc2xpZGVTdGF0ZShpbmRleCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXN0aUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17aXRlbS5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpbmRleCA9PT0gYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm5hdiwgY2xhc3Nlcy5uZXh0KX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVyLmN1cnJlbnQuc2xpY2tOZXh0KCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1pb3MtYXJyb3ctZm9yd2FyZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdpbmF0aW9ufT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAge1suLi5BcnJheSh0ZXN0aUNvbnRlbnQubGVuZ3RoKV0ubWFwKChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbmRleCA9PT0gYWN0aXZlID8gY2xhc3Nlcy5hY3RpdmUgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzbGlkZXIuY3VycmVudC5zbGlja0dvVG8oaW5kZXgpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblRlc3RpbW9uaWFscy5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoVGVzdGltb25pYWxzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==