webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Faq/Faq.js":
/*!*******************************!*\
  !*** ./components/Faq/Faq.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Accordion */ "./node_modules/@material-ui/core/esm/Accordion/index.js");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "./node_modules/@material-ui/core/esm/AccordionSummary/index.js");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "./node_modules/@material-ui/core/esm/AccordionDetails/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Parallax_Hexagonal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Parallax/Hexagonal */ "./components/Parallax/Hexagonal.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");
/* harmony import */ var _faq_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./faq-style */ "./components/Faq/faq-style.js");


var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Faq\\Faq.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

















var faqData = [{
  q: 'Is the TP coin ERC-20 compatible?',
  a: 'Yes, TP Coin is based on the BSC blockchain platform and ERC-20 compatible.'
}, {
  q: 'Am I buying on my own Risk?',
  a: 'Because it is a decentralized platform Token  that has solutions for many issues related to security, privacy, speed of transections, in addition to very low fees. Do not forget  that our limit is the sky!'
}, {
  q: 'Where and how do I keep my TP Coin?',
  a: 'You can keep your TP Token in Trading Planet wallet and in every wallet Which is BSC compatible and supports the TP Token'
}, {
  q: 'What is the marketing strategy of Trading Planet?',
  a: 'In order to market Trading Planet Swap in a targeted manner, a digital marketing strategy is used above all. On social media mainly the channels Instagram, Facebook and YouTube are used from the beginning and the specific target group is addressed in the best possible way through appropriate posts and story contributions'
}];

function Faq(props) {
  _s();

  var _this = this;

  var classes = Object(_faq_style__WEBPACK_IMPORTED_MODULE_17__["default"])();
  var text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_14__["useText"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var isMobile = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"])(theme.breakpoints.down('xs'));
  var t = props.t;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var handleChange = function handleChange(panel) {
    return function (event, newExpanded) {
      setExpanded(newExpanded ? panel : false);
    };
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.parallax,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_Parallax_Hexagonal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fixed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_16__["default"], {
    text: t('common:crypto-landing.faq_title'),
    align: isMobile ? 'center' : 'left',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: text.subtitle2,
    align: isMobile ? 'center' : 'left',
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, t('common:crypto-landing.faq_subtitle')), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__["default"], {
    smDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.illustration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/498-[Converted].png",
    alt: "illustration",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.accordion,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, faqData.map(function (item, index) {
    return __jsx("div", {
      className: classes.item,
      key: index.toString(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_8__["default"], {
      classes: {
        root: classes.paper
      },
      expanded: expanded === index,
      onChange: handleChange(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_9__["default"], {
      classes: {
        content: classes.content,
        expanded: classes.expanded
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.heading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 23
      }
    }, item.q), __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 23
      }
    })), __jsx(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
      classes: {
        root: classes.detail
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 23
      }
    }, item.a))));
  }))))));
}

_s(Faq, "WHu99WNOfMqe3ctdWS97bww6uj4=", false, function () {
  return [_faq_style__WEBPACK_IMPORTED_MODULE_17__["default"], _theme_common__WEBPACK_IMPORTED_MODULE_14__["useText"], _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = Faq;
Faq.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_13__["withTranslation"])(['crypto-landing'])(Faq));

var _c;

$RefreshReg$(_c, "Faq");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GYXEvRmFxLmpzIl0sIm5hbWVzIjpbImZhcURhdGEiLCJxIiwiYSIsIkZhcSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInRleHQiLCJ1c2VUZXh0IiwidGhlbWUiLCJ1c2VUaGVtZSIsImlzTW9iaWxlIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsInQiLCJSZWFjdCIsInVzZVN0YXRlIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImhhbmRsZUNoYW5nZSIsInBhbmVsIiwiZXZlbnQiLCJuZXdFeHBhbmRlZCIsInJvb3QiLCJwYXJhbGxheCIsInN1YnRpdGxlMiIsImlsbHVzdHJhdGlvbiIsImFjY29yZGlvbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRvU3RyaW5nIiwicGFwZXIiLCJjb250ZW50IiwiaGVhZGluZyIsImljb24iLCJkZXRhaWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLEdBQUMsRUFBRSxtQ0FETDtBQUVFQyxHQUFDLEVBQUU7QUFGTCxDQURjLEVBS2Q7QUFDRUQsR0FBQyxFQUFFLDZCQURMO0FBRUVDLEdBQUMsRUFBRTtBQUZMLENBTGMsRUFTZDtBQUNFRCxHQUFDLEVBQUUscUNBREw7QUFFRUMsR0FBQyxFQUFFO0FBRkwsQ0FUYyxFQWFkO0FBQ0VELEdBQUMsRUFBRSxtREFETDtBQUVFQyxHQUFDLEVBQUU7QUFGTCxDQWJjLENBQWhCOztBQW1CQSxTQUFTQyxHQUFULENBQWFD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Z0I7QUFDZHZCLEdBQUMsRUFBRXdCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFESixDQUFoQjtBQUllQyw2SEFBZSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFmLENBQW9DdkMsR0FBcEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNjljMTFjZDBlYzc0ZDBmYzI1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbic7XHJcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnknO1xyXG5pbXBvcnQgQWNjb3JkaW9uRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzJztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCBQYXJhbGxheCBmcm9tICcuLi9QYXJhbGxheC9IZXhhZ29uYWwnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vVGl0bGUnO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZmFxLXN0eWxlJztcclxuXHJcbmNvbnN0IGZhcURhdGEgPSBbXHJcbiAge1xyXG4gICAgcTogJ0lzIHRoZSBUUCBjb2luIEVSQy0yMCBjb21wYXRpYmxlPycsXHJcbiAgICBhOiAnWWVzLCBUUCBDb2luIGlzIGJhc2VkIG9uIHRoZSBCU0MgYmxvY2tjaGFpbiBwbGF0Zm9ybSBhbmQgRVJDLTIwIGNvbXBhdGlibGUuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcTogJ0FtIEkgYnV5aW5nIG9uIG15IG93biBSaXNrPycsXHJcbiAgICBhOiAnQmVjYXVzZSBpdCBpcyBhIGRlY2VudHJhbGl6ZWQgcGxhdGZvcm0gVG9rZW4gIHRoYXQgaGFzIHNvbHV0aW9ucyBmb3IgbWFueSBpc3N1ZXMgcmVsYXRlZCB0byBzZWN1cml0eSwgcHJpdmFjeSwgc3BlZWQgb2YgdHJhbnNlY3Rpb25zLCBpbiBhZGRpdGlvbiB0byB2ZXJ5IGxvdyBmZWVzLiBEbyBub3QgZm9yZ2V0ICB0aGF0IG91ciBsaW1pdCBpcyB0aGUgc2t5ISdcclxuICB9LFxyXG4gIHtcclxuICAgIHE6ICdXaGVyZSBhbmQgaG93IGRvIEkga2VlcCBteSBUUCBDb2luPycsXHJcbiAgICBhOiAnWW91IGNhbiBrZWVwIHlvdXIgVFAgVG9rZW4gaW4gVHJhZGluZyBQbGFuZXQgd2FsbGV0IGFuZCBpbiBldmVyeSB3YWxsZXQgV2hpY2ggaXMgQlNDIGNvbXBhdGlibGUgYW5kIHN1cHBvcnRzIHRoZSBUUCBUb2tlbidcclxuICB9LFxyXG4gIHtcclxuICAgIHE6ICdXaGF0IGlzIHRoZSBtYXJrZXRpbmcgc3RyYXRlZ3kgb2YgVHJhZGluZyBQbGFuZXQ/JyxcclxuICAgIGE6ICdJbiBvcmRlciB0byBtYXJrZXQgVHJhZGluZyBQbGFuZXQgU3dhcCBpbiBhIHRhcmdldGVkIG1hbm5lciwgYSBkaWdpdGFsIG1hcmtldGluZyBzdHJhdGVneSBpcyB1c2VkIGFib3ZlIGFsbC4gT24gc29jaWFsIG1lZGlhIG1haW5seSB0aGUgY2hhbm5lbHMgSW5zdGFncmFtLCBGYWNlYm9vayBhbmQgWW91VHViZSBhcmUgdXNlZCBmcm9tIHRoZSBiZWdpbm5pbmcgYW5kIHRoZSBzcGVjaWZpYyB0YXJnZXQgZ3JvdXAgaXMgYWRkcmVzc2VkIGluIHRoZSBiZXN0IHBvc3NpYmxlIHdheSB0aHJvdWdoIGFwcHJvcHJpYXRlIHBvc3RzIGFuZCBzdG9yeSBjb250cmlidXRpb25zJ1xyXG4gIH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIEZhcShwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKSk7XHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHBhbmVsID0+IChldmVudCwgbmV3RXhwYW5kZWQpID0+IHtcclxuICAgIHNldEV4cGFuZGVkKG5ld0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFsbGF4fT5cclxuICAgICAgICA8UGFyYWxsYXggLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDb250YWluZXIgZml4ZWQ+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezZ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0+XHJcbiAgICAgICAgICAgIDxUaXRsZSB0ZXh0PXt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuZmFxX3RpdGxlJyl9IGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfSBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30gY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuZmFxX3N1YnRpdGxlJyl9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEhpZGRlbiBzbURvd24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaWxsdXN0cmF0aW9ufT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy80OTgtW0NvbnZlcnRlZF0ucG5nXCIgYWx0PVwiaWxsdXN0cmF0aW9uXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWNjb3JkaW9ufT5cclxuICAgICAgICAgICAgICB7ZmFxRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5wYXBlclxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSBpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNsYXNzZXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IGNsYXNzZXMuZXhwYW5kZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkaW5nfT57aXRlbS5xfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbmRNb3JlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5hfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkZhcS5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoRmFxKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==