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
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "https://tradingplanet.finance/",
    target: "_blank",
    variant: "contained",
    color: "secondary",
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, t('common:crypto-landing.header_launch'))), __jsx(_Settings__WEBPACK_IMPORTED_MODULE_15__["default"], {
    toggleDark: onToggleDark,
    toggleDir: onToggleDir,
    invert: invert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbImNvdW50ZXIiLCJjcmVhdGVEYXRhIiwibmFtZSIsInVybCIsIm9mZnNldCIsImlkIiwiTGlua0J0biIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwidG8iLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsImZpeGVkIiwic2V0Rml4ZWQiLCJmbGFnRml4ZWQiLCJoYW5kbGVTY3JvbGwiLCJkb2MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwibmV3RmxhZ0ZpeGVkIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInVzZVRoZW1lIiwib25Ub2dnbGVEYXJrIiwib25Ub2dnbGVEaXIiLCJpbnZlcnQiLCJ0IiwiaXNEZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJpc01vYmlsZSIsImRvd24iLCJuYXZNZW51IiwibWVudUxpc3QiLCJvcGVuRHJhd2VyIiwic2V0T3BlbkRyYXdlciIsImhhbmRsZU9wZW5EcmF3ZXIiLCJjbHN4IiwiaGVhZGVyIiwiaGVhZGVyQ29udGVudCIsIm1vYmlsZU1lbnUiLCJiYXIiLCJsb2dvIiwicm91dGVMaW5rIiwiY3J5cHRvIiwiaG9tZSIsIm1hcCIsIml0ZW0iLCJ0b1N0cmluZyIsIkFuY2hvckxpbmsiLCJjb250YWN0IiwiZGl2aWRlciIsIm5hdkF1dGgiLCJidXR0b24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJzdGlja3kiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LGlEQUFTLENBQUNHLElBSEQ7QUFJakJqQyxHQUFDLEVBQUU4QixpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBSkQsQ0FBbkI7QUFPQXhELE1BQU0sQ0FBQzBELFlBQVAsR0FBc0I7QUFDcEJDLFFBQU0sRUFBRSxLQURZO0FBRXBCcEMsUUFBTSxFQUFFO0FBRlksQ0FBdEI7QUFLZXFDLDZIQUFlLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQWYsQ0FBb0M1RCxNQUFwQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk2YmZkMmRjMjJiMmUxMmUzOWU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFuY2hvckxpbmsgZnJvbSAncmVhY3QtYW5jaG9yLWxpbmstc21vb3RoLXNjcm9sbCc7XHJcbmltcG9ydCBTY3JvbGxzcHkgZnJvbSAncmVhY3Qtc2Nyb2xsc3B5JztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vU2V0dGluZ3MnO1xyXG5pbXBvcnQgTWFya2V0UHJpY2UgZnJvbSAnLi9NYXJrZXRQcmljZSc7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vTW9iaWxlTWVudSc7XHJcbmltcG9ydCByb3V0ZUxpbmsgZnJvbSAnfi9wdWJsaWMvdGV4dC9saW5rJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vTG9nbyc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9oZWFkZXItc3R5bGUnO1xyXG5pbXBvcnQgbmF2TWVudSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuXHJcblxyXG5sZXQgY291bnRlciA9IDA7XHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEobmFtZSwgdXJsLCBvZmZzZXQpIHtcclxuICBjb3VudGVyICs9IDE7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkOiBjb3VudGVyLFxyXG4gICAgbmFtZSxcclxuICAgIHVybCxcclxuICAgIG9mZnNldCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBMaW5rQnRuID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBMaW5rQnRuKHByb3BzLCByZWYpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gIHJldHVybiA8QW5jaG9yTGluayB0bz17cHJvcHMudG99IHsuLi5wcm9wc30gaW5uZXJSZWY9e3JlZn0gLz47IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxufSk7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcclxuICBjb25zdCBbZml4ZWQsIHNldEZpeGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBsZXQgZmxhZ0ZpeGVkID0gZmFsc2U7XHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgY29uc3Qgc2Nyb2xsID0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2Muc2Nyb2xsVG9wKSAtIChkb2MuY2xpZW50VG9wIHx8IDApO1xyXG4gICAgY29uc3QgbmV3RmxhZ0ZpeGVkID0gKHNjcm9sbCA+IDgwKTtcclxuICAgIGlmIChmbGFnRml4ZWQgIT09IG5ld0ZsYWdGaXhlZCkge1xyXG4gICAgICBzZXRGaXhlZChuZXdGbGFnRml4ZWQpO1xyXG4gICAgICBmbGFnRml4ZWQgPSBuZXdGbGFnRml4ZWQ7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgb25Ub2dnbGVEYXJrLFxyXG4gICAgb25Ub2dnbGVEaXIsXHJcbiAgICBpbnZlcnQsXHJcbiAgICB0XHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJykpO1xyXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKTtcclxuICBjb25zdCBbbWVudUxpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgY3JlYXRlRGF0YShuYXZNZW51WzBdLCAnIycgKyBuYXZNZW51WzBdLCAxMDApLFxyXG4gICAgY3JlYXRlRGF0YShuYXZNZW51WzFdLCAnIycgKyBuYXZNZW51WzFdKSxcclxuICAgIGNyZWF0ZURhdGEobmF2TWVudVsyXSwgJyMnICsgbmF2TWVudVsyXSksXHJcbiAgICBjcmVhdGVEYXRhKG5hdk1lbnVbM10sICcjJyArIG5hdk1lbnVbM10pLFxyXG4gIF0pO1xyXG4gIGNvbnN0IFtvcGVuRHJhd2VyLCBzZXRPcGVuRHJhd2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRyYXdlcighb3BlbkRyYXdlcik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICB7IGlzTW9iaWxlICYmICg8TW9iaWxlTWVudSBvcGVuPXtvcGVuRHJhd2VyfSB0b2dnbGVEcmF3ZXI9e2hhbmRsZU9wZW5EcmF3ZXJ9IC8+KSB9XHJcbiAgICAgIHsvKiB7IWludmVydCAmJiAoXHJcbiAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICA8TWFya2V0UHJpY2UgLz5cclxuICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgKX0gKi99XHJcbiAgICAgIDxBcHBCYXJcclxuICAgICAgICBjb21wb25lbnQ9XCJoZWFkZXJcIlxyXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgIGlkPVwiaGVhZGVyXCJcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICBjbGFzc2VzLmhlYWRlcixcclxuICAgICAgICAgIGZpeGVkICYmIGNsYXNzZXMuZml4ZWQsXHJcbiAgICAgICAgICBpbnZlcnQgJiYgY2xhc3Nlcy5pbnZlcnQsXHJcbiAgICAgICAgICBvcGVuRHJhd2VyICYmIGNsYXNzZXMub3BlbkRyYXdlclxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyIGZpeGVkPXtpc0Rlc2t0b3B9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyQ29udGVudH0+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubmF2TWVudSwgaW52ZXJ0ICYmIGNsYXNzZXMuaW52ZXJ0KX0+XHJcbiAgICAgICAgICAgICAgeyBpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVuRHJhd2VyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2hhbWJ1cmdlciBoYW1idXJnZXItLXNwaW4nLCBjbGFzc2VzLm1vYmlsZU1lbnUsIG9wZW5EcmF3ZXIgJiYgJ2lzLWFjdGl2ZScpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYmFyLCAnaGFtYnVyZ2VyLWlubmVyJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAge2ludmVydCA/IChcclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cm91dGVMaW5rLmNyeXB0by5ob21lfT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QW5jaG9yTGluayBocmVmPVwiI2hvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0FuY2hvckxpbms+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtpc0Rlc2t0b3AgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFNjcm9sbHNweVxyXG4gICAgICAgICAgICAgICAgICBpdGVtcz17bmF2TWVudX1cclxuICAgICAgICAgICAgICAgICAgY3VycmVudENsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHttZW51TGlzdC5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpbnZlcnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9mZnNldD17aXRlbS5vZmZzZXQgfHwgMH0gaHJlZj17Jy8nICsgaXRlbS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyXycgKyBpdGVtLm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17QW5jaG9yTGlua30gb2Zmc2V0PXtpdGVtLm9mZnNldCB8fCAwfSBocmVmPXtpdGVtLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5oZWFkZXJfJyArIGl0ZW0ubmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj17cm91dGVMaW5rLmNyeXB0by5jb250YWN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyX2NvbnRhY3QnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsc3B5PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gLz5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubmF2TWVudSwgY2xhc3Nlcy5uYXZBdXRoKX0+XHJcbiAgICAgICAgICAgICAgPEhpZGRlbiB4c0Rvd24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj1cImh0dHBzOi8vdHJhZGluZ3BsYW5ldC5maW5hbmNlL1wiIHRhcmdldD1cIl9ibGFua1wiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyX2xhdW5jaCcpfVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICA8U2V0dGluZ3MgdG9nZ2xlRGFyaz17b25Ub2dnbGVEYXJrfSB0b2dnbGVEaXI9e29uVG9nZ2xlRGlyfSBpbnZlcnQ9e2ludmVydH0gLz5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgb25Ub2dnbGVEYXJrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uVG9nZ2xlRGlyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGludmVydDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdGlja3k6IGZhbHNlLFxyXG4gIGludmVydDogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKEhlYWRlcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=