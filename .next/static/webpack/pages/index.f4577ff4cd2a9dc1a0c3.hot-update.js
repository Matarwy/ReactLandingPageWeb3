webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Banner/Banner.js":
/*!*************************************!*\
  !*** ./components/Banner/Banner.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banner-style */ "./components/Banner/banner-style.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
var _jsxFileName = "D:\\projects\\TP\\v1\\TradingPlanet-Home\\components\\Banner\\Banner.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function Banner(props) {
  _s();

  var classes = Object(_banner_style__WEBPACK_IMPORTED_MODULE_11__["default"])();
  var text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_9__["useText"])();
  var elem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var t = props.t;
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      hide = _useState[0],
      setHide = _useState[1];

  var isMobile = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"])(theme.breakpoints.down('xs'));

  var handleScroll = function handleScroll() {
    if (!elem.current) {
      return;
    }

    var doc = document.documentElement;
    var elTop = elem.current.offsetTop - 200;
    var elBottom = elTop + elem.current.getBoundingClientRect().height;

    if (doc.scrollTop > elTop && doc.scrollTop < elBottom) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.particlesJS('particles_backgrond', {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
    window.addEventListener('scroll', handleScroll);
  });
  return __jsx("div", {
    className: classes.root,
    ref: elem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.canvasWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.overlay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.decoInner, hide && classes.hide),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx("div", {
    id: "particles_backgrond",
    className: classes.particleBackground,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  })))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fixed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.bannerWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    alignItems: "center",
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h4",
    className: text.title2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_title')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "p",
    className: text.subtitle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_subtitle'))), __jsx("div", {
    className: classes.btnArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
    href: "https://medium.com/@TradingPlanetEX",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    color: "secondary",
    size: "large",
    fullWidth: isMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_getstarted'))), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
    href: "https://medium.com/@TradingPlanetEX",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "outlined",
    className: classes.invert,
    size: "large",
    fullWidth: isMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_learn')))))))), __jsx("div", {
    className: classes.decoBottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, __jsx("svg", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, __jsx("use", {
    xlinkHref: "/images/crypto/deco-banner.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }))));
}

_s(Banner, "krvWmwQO7Md6ASZ3KexGnnm9C3M=", false, function () {
  return [_banner_style__WEBPACK_IMPORTED_MODULE_11__["default"], _theme_common__WEBPACK_IMPORTED_MODULE_9__["useText"], _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = Banner;
Banner.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])(['crypto-landing'])(Banner));

var _c;

$RefreshReg$(_c, "Banner");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYW5uZXIvQmFubmVyLmpzIl0sIm5hbWVzIjpbIkJhbm5lciIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInRleHQiLCJ1c2VUZXh0IiwiZWxlbSIsInVzZVJlZiIsInQiLCJ0aGVtZSIsInVzZVRoZW1lIiwidXNlU3RhdGUiLCJoaWRlIiwic2V0SGlkZSIsImlzTW9iaWxlIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnQiLCJkb2MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImVsVG9wIiwib2Zmc2V0VG9wIiwiZWxCb3R0b20iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJzY3JvbGxUb3AiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJwYXJ0aWNsZXNKUyIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJjb2xvciIsInNoYXBlIiwidHlwZSIsInN0cm9rZSIsIndpZHRoIiwicG9seWdvbiIsIm5iX3NpZGVzIiwib3BhY2l0eSIsInJhbmRvbSIsImFuaW0iLCJzcGVlZCIsIm9wYWNpdHlfbWluIiwic3luYyIsInNpemUiLCJzaXplX21pbiIsImxpbmVfbGlua2VkIiwiZGlzdGFuY2UiLCJtb3ZlIiwiZGlyZWN0aW9uIiwic3RyYWlnaHQiLCJvdXRfbW9kZSIsImJvdW5jZSIsImF0dHJhY3QiLCJyb3RhdGVYIiwicm90YXRlWSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJyZXNpemUiLCJtb2RlcyIsImdyYWIiLCJidWJibGUiLCJkdXJhdGlvbiIsInJlcHVsc2UiLCJwdXNoIiwicGFydGljbGVzX25iIiwicmVtb3ZlIiwicmV0aW5hX2RldGVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb290IiwiY2FudmFzV3JhcCIsIm92ZXJsYXkiLCJjbHN4IiwiZGVjb0lubmVyIiwicGFydGljbGVCYWNrZ3JvdW5kIiwiYmFubmVyV3JhcCIsInRpdGxlMiIsInN1YnRpdGxlMiIsImJ0bkFyZWEiLCJpbnZlcnQiLCJkZWNvQm90dG9tIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUNyQixNQUFNQyxPQUFPLEdBQUdDLDhEQUFTLEVBQXpCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyw2REFBTyxFQUFwQjtBQUNBLE1BQU1DLElBQUksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQW5CO0FBSHFCLE1BS2JDLENBTGEsR0FLUFAsS0FMTyxDQUtiTyxDQUxhO0FBTXJCLE1BQU1DLEtBQUssR0FBR0MseUVBQVEsRUFBdEI7O0FBTnFCLGtCQVFHQyxzREFBUSxDQUFDLEtBQUQsQ0FSWDtBQUFBLE1BUWRDLElBUmM7QUFBQSxNQVFSQyxPQVJROztBQVVyQixNQUFNQyxRQUFRLEdBQUdDLCtFQUFhLENBQUNOLEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE5Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUksQ0FBQ1osSUFBSSxDQUFDYSxPQUFWLEVBQW1CO0FBQ2pCO0FBQ0Q7O0FBQ0QsUUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGVBQXJCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHakIsSUFBSSxDQUFDYSxPQUFMLENBQWFLLFNBQWIsR0FBeUIsR0FBdkM7QUFDQSxRQUFNQyxR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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sQ0FBQyxDQUFDLHlDQUFELENBREosQ0FERixDQURBLEVBTUUsTUFBQywrREFBRDtBQUFNLFFBQUksRUFBQyxxQ0FBWDtBQUFpRCxVQUFNLEVBQUMsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsZ0VBQUQ7QUFBUSxXQUFPLEVBQUMsVUFBaEI7QUFBMkIsYUFBUyxFQUFFTixPQUFPLENBQUN3RixNQUE5QztBQUFzRCxRQUFJLEVBQUMsT0FBM0Q7QUFBbUUsYUFBUyxFQUFFNUUsUUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixDQUFDLENBQUMsb0NBQUQsQ0FESixDQURBLENBTkYsQ0FURixDQURGLENBREYsQ0FERixDQVJGLEVBeUNFO0FBQUssYUFBUyxFQUFFTixPQUFPLENBQUN5RixVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHFDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBekNGLENBREY7QUFpREQ7O0dBeExRM0YsTTtVQUNTRyxzRCxFQUNIRSxxRCxFQUlDSyxpRSxFQUlHSyx1RTs7O0tBVlZmLE07QUEwTFRBLE1BQU0sQ0FBQzRGLFNBQVAsR0FBbUI7QUFDakJwRixHQUFDLEVBQUVxRixpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREQsQ0FBbkI7QUFJZUMsNkhBQWUsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBZixDQUFvQ2hHLE1BQXBDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjQ1NzdmZjRjZDJhOWRjMWEwYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vYmFubmVyLXN0eWxlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcblxyXG5cclxuZnVuY3Rpb24gQmFubmVyKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XHJcbiAgY29uc3QgZWxlbSA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIGNvbnN0IFtoaWRlLCBzZXRIaWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJykpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWVsZW0uY3VycmVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBjb25zdCBlbFRvcCA9IGVsZW0uY3VycmVudC5vZmZzZXRUb3AgLSAyMDA7XHJcbiAgICBjb25zdCBlbEJvdHRvbSA9IGVsVG9wICsgZWxlbS5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIGlmIChkb2Muc2Nyb2xsVG9wID4gZWxUb3AgJiYgZG9jLnNjcm9sbFRvcCA8IGVsQm90dG9tKSB7XHJcbiAgICAgIHNldEhpZGUoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SGlkZSh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LnBhcnRpY2xlc0pTKCdwYXJ0aWNsZXNfYmFja2dyb25kJywge1xyXG4gICAgICBwYXJ0aWNsZXM6IHtcclxuICAgICAgICBudW1iZXI6IHtcclxuICAgICAgICAgIHZhbHVlOiAxMDAsXHJcbiAgICAgICAgICBkZW5zaXR5OiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWVfYXJlYTogODAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgdmFsdWU6ICcjZmZmZmZmJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hhcGU6IHtcclxuICAgICAgICAgIHR5cGU6ICdjaXJjbGUnLFxyXG4gICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcG9seWdvbjoge1xyXG4gICAgICAgICAgICBuYl9zaWRlczogNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3BhY2l0eToge1xyXG4gICAgICAgICAgdmFsdWU6IDAuNSxcclxuICAgICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgICBhbmltOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNwZWVkOiAxLFxyXG4gICAgICAgICAgICBvcGFjaXR5X21pbjogMC4xLFxyXG4gICAgICAgICAgICBzeW5jOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgdmFsdWU6IDMsXHJcbiAgICAgICAgICByYW5kb206IHRydWUsXHJcbiAgICAgICAgICBhbmltOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNwZWVkOiA0MCxcclxuICAgICAgICAgICAgc2l6ZV9taW46IDAuMSxcclxuICAgICAgICAgICAgc3luYzogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbmVfbGlua2VkOiB7XHJcbiAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICBkaXN0YW5jZTogMTUwLFxyXG4gICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNCxcclxuICAgICAgICAgIHdpZHRoOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3ZlOiB7XHJcbiAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICBzcGVlZDogMixcclxuICAgICAgICAgIGRpcmVjdGlvbjogJ25vbmUnLFxyXG4gICAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgIG91dF9tb2RlOiAnb3V0JyxcclxuICAgICAgICAgIGJvdW5jZTogZmFsc2UsXHJcbiAgICAgICAgICBhdHRyYWN0OiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHJvdGF0ZVg6IDYwMCxcclxuICAgICAgICAgICAgcm90YXRlWTogMTIwMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaW50ZXJhY3Rpdml0eToge1xyXG4gICAgICAgIGRldGVjdF9vbjogJ2NhbnZhcycsXHJcbiAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICBvbmhvdmVyOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbW9kZTogJ3JlcHVsc2UnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgb25jbGljazoge1xyXG4gICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIG1vZGU6ICdwdXNoJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kZXM6IHtcclxuICAgICAgICAgIGdyYWI6IHtcclxuICAgICAgICAgICAgZGlzdGFuY2U6IDQwMCxcclxuICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBidWJibGU6IHtcclxuICAgICAgICAgICAgZGlzdGFuY2U6IDQwMCxcclxuICAgICAgICAgICAgc2l6ZTogNDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiA4LFxyXG4gICAgICAgICAgICBzcGVlZDogM1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJlcHVsc2U6IHtcclxuICAgICAgICAgICAgZGlzdGFuY2U6IDIwMCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDAuNFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHB1c2g6IHtcclxuICAgICAgICAgICAgcGFydGljbGVzX25iOiA0XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVtb3ZlOiB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlc19uYjogMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcmV0aW5hX2RldGVjdDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJlZj17ZWxlbX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhbnZhc1dyYXB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm92ZXJsYXl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5kZWNvSW5uZXIsIGhpZGUgJiYgY2xhc3Nlcy5oaWRlKX0+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYXJ0aWNsZXNfYmFja2dyb25kXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcnRpY2xlQmFja2dyb3VuZH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENvbnRhaW5lciBmaXhlZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iYW5uZXJXcmFwfT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3BhY2luZz17Nn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjbGFzc05hbWU9e3RleHQudGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5iYW5uZXJfdGl0bGUnKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5iYW5uZXJfc3VidGl0bGUnKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5BcmVhfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0BUcmFkaW5nUGxhbmV0RVhcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cImxhcmdlXCIgZnVsbFdpZHRoPXtpc01vYmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuYmFubmVyX2dldHN0YXJ0ZWQnKX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9AVHJhZGluZ1BsYW5ldEVYXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnZlcnR9IHNpemU9XCJsYXJnZVwiIGZ1bGxXaWR0aD17aXNNb2JpbGV9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl9sZWFybicpfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMub2JqZWN0QXJ0fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jcnlwdG8vYmFubmVyLWFydC5wbmdcIiBhbHQ9XCJpbGx1c3RyYXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVjb0JvdHRvbX0+XHJcbiAgICAgICAgPHN2Zz5cclxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiL2ltYWdlcy9jcnlwdG8vZGVjby1iYW5uZXIuc3ZnI21haW5cIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkJhbm5lci5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoQmFubmVyKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==