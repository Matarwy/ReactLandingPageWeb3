webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-scrollspy */ "./node_modules/react-scrollspy/lib/scrollspy.js");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Settings */ "./components/Header/Settings.js");
/* harmony import */ var _MarketPrice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MarketPrice */ "./components/Header/MarketPrice.js");
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./MobileMenu */ "./components/Header/MobileMenu.js");
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Logo */ "./components/Logo.js");
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header-style */ "./components/Header/header-style.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./menu */ "./components/Header/menu.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");


var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Header\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






















var counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name: name,
    url: url,
    offset: offset
  };
}

var LinkBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c = function LinkBtn(props, ref) {
  // eslint-disable-line
  return __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_12___default.a, Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: props.to
  }, props, {
    innerRef: ref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 10
    }
  })); // eslint-disable-line
});
_c2 = LinkBtn;

function Header(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      fixed = _useState[0],
      setFixed = _useState[1];

  var flagFixed = false;

  var handleScroll = function handleScroll() {
    var doc = document.documentElement;
    var scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var newFlagFixed = scroll > 80;

    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
  }, []);
  var classes = Object(_header_style__WEBPACK_IMPORTED_MODULE_20__["default"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["useTheme"])();
  var onToggleDark = props.onToggleDark,
      onToggleDir = props.onToggleDir,
      invert = props.invert,
      t = props.t;
  var isDesktop = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__["default"])(theme.breakpoints.up('lg'));
  var isMobile = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__["default"])(theme.breakpoints.down('md'));

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([createData(_menu__WEBPACK_IMPORTED_MODULE_21__["default"][0], '#' + _menu__WEBPACK_IMPORTED_MODULE_21__["default"][0], 100), createData(_menu__WEBPACK_IMPORTED_MODULE_21__["default"][1], '#' + _menu__WEBPACK_IMPORTED_MODULE_21__["default"][1]), createData(_menu__WEBPACK_IMPORTED_MODULE_21__["default"][2], '#' + _menu__WEBPACK_IMPORTED_MODULE_21__["default"][2]), createData(_menu__WEBPACK_IMPORTED_MODULE_21__["default"][3], '#' + _menu__WEBPACK_IMPORTED_MODULE_21__["default"][3])]),
      menuList = _useState2[0];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      openDrawer = _useState3[0],
      setOpenDrawer = _useState3[1];

  var handleOpenDrawer = function handleOpenDrawer() {
    setOpenDrawer(!openDrawer);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, isMobile && __jsx(_MobileMenu__WEBPACK_IMPORTED_MODULE_17__["default"], {
    open: openDrawer,
    toggleDrawer: handleOpenDrawer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 22
    }
  }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "header",
    position: "relative",
    id: "header",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.header, fixed && classes.fixed, invert && classes.invert, openDrawer && classes.openDrawer),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fixed: isDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.headerContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("nav", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.navMenu, invert && classes.invert),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, isMobile && __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleOpenDrawer,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "hamburger-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.bar, 'hamburger-inner'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, invert ? __jsx("a", {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_18__["default"].crypto.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  })) : __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "#home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }))), isDesktop && __jsx(react_scrollspy__WEBPACK_IMPORTED_MODULE_13___default.a, {
    items: _menu__WEBPACK_IMPORTED_MODULE_21__["default"],
    currentClassName: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, menuList.map(function (item) {
    return __jsx("li", {
      key: item.id.toString(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    }, invert ? // eslint-disable-next-line
    __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      offset: item.offset || 0,
      href: '/' + item.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }, t('common:crypto-landing.header_' + item.name)) : // eslint-disable-next-line
    __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_12___default.a,
      offset: item.offset || 0,
      href: item.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }
    }, t('common:crypto-landing.header_' + item.name)));
  }), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_18__["default"].crypto.contact,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, t('common:crypto-landing.header_contact'))))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  })), __jsx("nav", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.navMenu, classes.navAuth),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__["default"], {
    xsDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_22__["default"], {
    href: "https://tradingplanet.finance/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_18__["default"].crypto.register,
    variant: "contained",
    color: "secondary",
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 19
    }
  }, t('common:crypto-landing.header_launch')))), __jsx(_Settings__WEBPACK_IMPORTED_MODULE_15__["default"], {
    toggleDark: onToggleDark,
    toggleDir: onToggleDir,
    invert: invert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }))))));
}

_s(Header, "EoYQ90OKAOSL0FaXgHs/iV57fyA=", false, function () {
  return [_header_style__WEBPACK_IMPORTED_MODULE_20__["default"], _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["useTheme"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__["default"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c3 = Header;
Header.propTypes = {
  onToggleDark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onToggleDir: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  invert: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
Header.defaultProps = {
  sticky: false,
  invert: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_14__["withTranslation"])(['crypto-landing'])(Header));

var _c, _c2, _c3;

$RefreshReg$(_c, "LinkBtn$React.forwardRef");
$RefreshReg$(_c2, "LinkBtn");
$RefreshReg$(_c3, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbImNvdW50ZXIiLCJjcmVhdGVEYXRhIiwibmFtZSIsInVybCIsIm9mZnNldCIsImlkIiwiTGlua0J0biIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwidG8iLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsImZpeGVkIiwic2V0Rml4ZWQiLCJmbGFnRml4ZWQiLCJoYW5kbGVTY3JvbGwiLCJkb2MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwibmV3RmxhZ0ZpeGVkIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInVzZVRoZW1lIiwib25Ub2dnbGVEYXJrIiwib25Ub2dnbGVEaXIiLCJpbnZlcnQiLCJ0IiwiaXNEZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJpc01vYmlsZSIsImRvd24iLCJuYXZNZW51IiwibWVudUxpc3QiLCJvcGVuRHJhd2VyIiwic2V0T3BlbkRyYXdlciIsImhhbmRsZU9wZW5EcmF3ZXIiLCJjbHN4IiwiaGVhZGVyIiwiaGVhZGVyQ29udGVudCIsIm1vYmlsZU1lbnUiLCJiYXIiLCJsb2dvIiwicm91dGVMaW5rIiwiY3J5cHRvIiwiaG9tZSIsIm1hcCIsIml0ZW0iLCJ0b1N0cmluZyIsIkFuY2hvckxpbmsiLCJjb250YWN0IiwiZGl2aWRlciIsIm5hdkF1dGgiLCJyZWdpc3RlciIsImJ1dHRvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsInN0aWNreSIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q2pCakMsY0FBWSxFQUFFa0MsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQyxVQURaO0FBRWpCbkMsYUFBVyxFQUFFaUMsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQyxVQUZYO0FBR2pCbEMsUUFBTSxFQUFFZ0MsaURBQVMsQ0FBQ0csSUFIRDtBQUlqQmxDLEdBQUMsRUFBRStCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFKRCxDQUFuQjtBQU9BekQsTUFBTSxDQUFDMkQsWUFBUCxHQUFzQjtBQUNwQkMsUUFBTSxFQUFFLEtBRFk7QUFFcEJyQyxRQUFNLEVBQUU7QUFGWSxDQUF0QjtBQUtlc0MsNkhBQWUsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBZixDQUFvQzdELE1BQXBDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2E2OWM1YzY4OGQ0MTU3MWEyNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQW5jaG9yTGluayBmcm9tICdyZWFjdC1hbmNob3ItbGluay1zbW9vdGgtc2Nyb2xsJztcclxuaW1wb3J0IFNjcm9sbHNweSBmcm9tICdyZWFjdC1zY3JvbGxzcHknO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XHJcbmltcG9ydCBNYXJrZXRQcmljZSBmcm9tICcuL01hcmtldFByaWNlJztcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9Nb2JpbGVNZW51JztcclxuaW1wb3J0IHJvdXRlTGluayBmcm9tICd+L3B1YmxpYy90ZXh0L2xpbmsnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9Mb2dvJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2hlYWRlci1zdHlsZSc7XHJcbmltcG9ydCBuYXZNZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5cclxuXHJcbmxldCBjb3VudGVyID0gMDtcclxuZnVuY3Rpb24gY3JlYXRlRGF0YShuYW1lLCB1cmwsIG9mZnNldCkge1xyXG4gIGNvdW50ZXIgKz0gMTtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IGNvdW50ZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgdXJsLFxyXG4gICAgb2Zmc2V0LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IExpbmtCdG4gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIExpbmtCdG4ocHJvcHMsIHJlZikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgcmV0dXJuIDxBbmNob3JMaW5rIHRvPXtwcm9wcy50b30gey4uLnByb3BzfSBpbm5lclJlZj17cmVmfSAvPjsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG4gIGNvbnN0IFtmaXhlZCwgc2V0Rml4ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGxldCBmbGFnRml4ZWQgPSBmYWxzZTtcclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzY3JvbGwgPSAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApIC0gKGRvYy5jbGllbnRUb3AgfHwgMCk7XHJcbiAgICBjb25zdCBuZXdGbGFnRml4ZWQgPSAoc2Nyb2xsID4gODApO1xyXG4gICAgaWYgKGZsYWdGaXhlZCAhPT0gbmV3RmxhZ0ZpeGVkKSB7XHJcbiAgICAgIHNldEZpeGVkKG5ld0ZsYWdGaXhlZCk7XHJcbiAgICAgIGZsYWdGaXhlZCA9IG5ld0ZsYWdGaXhlZDtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCB7XHJcbiAgICBvblRvZ2dsZURhcmssXHJcbiAgICBvblRvZ2dsZURpcixcclxuICAgIGludmVydCxcclxuICAgIHRcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKSk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJykpO1xyXG4gIGNvbnN0IFttZW51TGlzdF0gPSB1c2VTdGF0ZShbXHJcbiAgICBjcmVhdGVEYXRhKG5hdk1lbnVbMF0sICcjJyArIG5hdk1lbnVbMF0sIDEwMCksXHJcbiAgICBjcmVhdGVEYXRhKG5hdk1lbnVbMV0sICcjJyArIG5hdk1lbnVbMV0pLFxyXG4gICAgY3JlYXRlRGF0YShuYXZNZW51WzJdLCAnIycgKyBuYXZNZW51WzJdKSxcclxuICAgIGNyZWF0ZURhdGEobmF2TWVudVszXSwgJyMnICsgbmF2TWVudVszXSksXHJcbiAgXSk7XHJcbiAgY29uc3QgW29wZW5EcmF3ZXIsIHNldE9wZW5EcmF3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5EcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRHJhd2VyKCFvcGVuRHJhd2VyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHsgaXNNb2JpbGUgJiYgKDxNb2JpbGVNZW51IG9wZW49e29wZW5EcmF3ZXJ9IHRvZ2dsZURyYXdlcj17aGFuZGxlT3BlbkRyYXdlcn0gLz4pIH1cclxuICAgICAgey8qIHshaW52ZXJ0ICYmIChcclxuICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgIDxNYXJrZXRQcmljZSAvPlxyXG4gICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICApfSAqL31cclxuICAgICAgPEFwcEJhclxyXG4gICAgICAgIGNvbXBvbmVudD1cImhlYWRlclwiXHJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgaWQ9XCJoZWFkZXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgIGNsYXNzZXMuaGVhZGVyLFxyXG4gICAgICAgICAgZml4ZWQgJiYgY2xhc3Nlcy5maXhlZCxcclxuICAgICAgICAgIGludmVydCAmJiBjbGFzc2VzLmludmVydCxcclxuICAgICAgICAgIG9wZW5EcmF3ZXIgJiYgY2xhc3Nlcy5vcGVuRHJhd2VyXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgZml4ZWQ9e2lzRGVza3RvcH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJDb250ZW50fT5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5uYXZNZW51LCBpbnZlcnQgJiYgY2xhc3Nlcy5pbnZlcnQpfT5cclxuICAgICAgICAgICAgICB7IGlzTW9iaWxlICYmIChcclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW5EcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaGFtYnVyZ2VyIGhhbWJ1cmdlci0tc3BpbicsIGNsYXNzZXMubW9iaWxlTWVudSwgb3BlbkRyYXdlciAmJiAnaXMtYWN0aXZlJyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5iYXIsICdoYW1idXJnZXItaW5uZXInKX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgICB7aW52ZXJ0ID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtyb3V0ZUxpbmsuY3J5cHRvLmhvbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxBbmNob3JMaW5rIGhyZWY9XCIjaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQW5jaG9yTGluaz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2lzRGVza3RvcCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U2Nyb2xsc3B5XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPXtuYXZNZW51fVxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50Q2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge21lbnVMaXN0Lm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkLnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2ludmVydCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb2Zmc2V0PXtpdGVtLm9mZnNldCB8fCAwfSBocmVmPXsnLycgKyBpdGVtLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfJyArIGl0ZW0ubmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtBbmNob3JMaW5rfSBvZmZzZXQ9e2l0ZW0ub2Zmc2V0IHx8IDB9IGhyZWY9e2l0ZW0udXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl8nICsgaXRlbS5uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXtyb3V0ZUxpbmsuY3J5cHRvLmNvbnRhY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfY29udGFjdCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9TY3JvbGxzcHk+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSAvPlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5uYXZNZW51LCBjbGFzc2VzLm5hdkF1dGgpfT5cclxuICAgICAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RyYWRpbmdwbGFuZXQuZmluYW5jZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXtyb3V0ZUxpbmsuY3J5cHRvLnJlZ2lzdGVyfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmhlYWRlcl9sYXVuY2gnKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdzIHRvZ2dsZURhcms9e29uVG9nZ2xlRGFya30gdG9nZ2xlRGlyPXtvblRvZ2dsZURpcn0gaW52ZXJ0PXtpbnZlcnR9IC8+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIG9uVG9nZ2xlRGFyazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvblRvZ2dsZURpcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBpbnZlcnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc3RpY2t5OiBmYWxzZSxcclxuICBpbnZlcnQ6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShIZWFkZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9