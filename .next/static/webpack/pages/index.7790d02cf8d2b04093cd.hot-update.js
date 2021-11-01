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
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    color: "secondary",
    size: "large",
    fullWidth: isMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_getstarted')), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
    href: "https://medium.com/@TradingPlanetEX",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
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
      lineNumber: 177,
      columnNumber: 17
    }
  }, t('common:crypto-landing.banner_learn')))))))), __jsx("div", {
    className: classes.decoBottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }, __jsx("svg", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, __jsx("use", {
    xlinkHref: "/images/crypto/deco-banner.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYW5uZXIvQmFubmVyLmpzIl0sIm5hbWVzIjpbIkJhbm5lciIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInRleHQiLCJ1c2VUZXh0IiwiZWxlbSIsInVzZVJlZiIsInQiLCJ0aGVtZSIsInVzZVRoZW1lIiwidXNlU3RhdGUiLCJoaWRlIiwic2V0SGlkZSIsImlzTW9iaWxlIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnQiLCJkb2MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImVsVG9wIiwib2Zmc2V0VG9wIiwiZWxCb3R0b20iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJzY3JvbGxUb3AiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJwYXJ0aWNsZXNKUyIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJjb2xvciIsInNoYXBlIiwidHlwZSIsInN0cm9rZSIsIndpZHRoIiwicG9seWdvbiIsIm5iX3NpZGVzIiwib3BhY2l0eSIsInJhbmRvbSIsImFuaW0iLCJzcGVlZCIsIm9wYWNpdHlfbWluIiwic3luYyIsInNpemUiLCJzaXplX21pbiIsImxpbmVfbGlua2VkIiwiZGlzdGFuY2UiLCJtb3ZlIiwiZGlyZWN0aW9uIiwic3RyYWlnaHQiLCJvdXRfbW9kZSIsImJvdW5jZSIsImF0dHJhY3QiLCJyb3RhdGVYIiwicm90YXRlWSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJyZXNpemUiLCJtb2RlcyIsImdyYWIiLCJidWJibGUiLCJkdXJhdGlvbiIsInJlcHVsc2UiLCJwdXNoIiwicGFydGljbGVzX25iIiwicmVtb3ZlIiwicmV0aW5hX2RldGVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb290IiwiY2FudmFzV3JhcCIsIm92ZXJsYXkiLCJjbHN4IiwiZGVjb0lubmVyIiwicGFydGljbGVCYWNrZ3JvdW5kIiwiYmFubmVyV3JhcCIsInRpdGxlMiIsInN1YnRpdGxlMiIsImJ0bkFyZWEiLCJpbnZlcnQiLCJkZWNvQm90dG9tIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUNyQixNQUFNQyxPQUFPLEdBQUdDLDhEQUFTLEVBQXpCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyw2REFBTyxFQUFwQjtBQUNBLE1BQU1DLElBQUksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQW5CO0FBSHFCLE1BS2JDLENBTGEsR0FLUFAsS0FMTyxDQUtiTyxDQUxhO0FBTXJCLE1BQU1DLEtBQUssR0FBR0MseUVBQVEsRUFBdEI7O0FBTnFCLGtCQVFHQyxzREFBUSxDQUFDLEtBQUQsQ0FSWDtBQUFBLE1BUWRDLElBUmM7QUFBQSxNQVFSQyxPQVJROztBQVVyQixNQUFNQyxRQUFRLEdBQUdDLCtFQUFhLENBQUNOLEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE5Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUksQ0FBQ1osSUFBSSxDQUFDYSxPQUFWLEVBQW1CO0FBQ2pCO0FBQ0Q7O0FBQ0QsUUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGVBQXJCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHakIsSUFBSSxDQUFDYSxPQUFMLENBQWFLLFNBQWIsR0FBeUIsR0FBdkM7QUFDQSxRQUFNQyxR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Q0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxnRUFBRDtBQUFRLFdBQU8sRUFBQyxVQUFoQjtBQUEyQixhQUFTLEVBQUVOLE9BQU8sQ0FBQ3dGLE1BQTlDO0FBQXNELFFBQUksRUFBQyxPQUEzRDtBQUFtRSxhQUFTLEVBQUU1RSxRQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLENBQUMsQ0FBQyxvQ0FBRCxDQURKLENBREEsQ0FKRixDQVRGLENBREYsQ0FERixDQURGLENBUkYsRUF1Q0U7QUFBSyxhQUFTLEVBQUVOLE9BQU8sQ0FBQ3lGLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMscUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0F2Q0YsQ0FERjtBQStDRDs7R0F0TFEzRixNO1VBQ1NHLHNELEVBQ0hFLHFELEVBSUNLLGlFLEVBSUdLLHVFOzs7S0FWVmYsTTtBQXdMVEEsTUFBTSxDQUFDNEYsU0FBUCxHQUFtQjtBQUNqQnBGLEdBQUMsRUFBRXFGLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFERCxDQUFuQjtBQUllQyw2SEFBZSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFmLENBQW9DaEcsTUFBcEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NzkwZDAyY2Y4ZDJiMDQwOTNjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9iYW5uZXItc3R5bGUnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuXHJcblxyXG5mdW5jdGlvbiBCYW5uZXIocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcclxuICBjb25zdCBlbGVtID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgY29uc3QgW2hpZGUsIHNldEhpZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmICghZWxlbS5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIGNvbnN0IGVsVG9wID0gZWxlbS5jdXJyZW50Lm9mZnNldFRvcCAtIDIwMDtcclxuICAgIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyBlbGVtLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgaWYgKGRvYy5zY3JvbGxUb3AgPiBlbFRvcCAmJiBkb2Muc2Nyb2xsVG9wIDwgZWxCb3R0b20pIHtcclxuICAgICAgc2V0SGlkZShmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRIaWRlKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cucGFydGljbGVzSlMoJ3BhcnRpY2xlc19iYWNrZ3JvbmQnLCB7XHJcbiAgICAgIHBhcnRpY2xlczoge1xyXG4gICAgICAgIG51bWJlcjoge1xyXG4gICAgICAgICAgdmFsdWU6IDEwMCxcclxuICAgICAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICB2YWx1ZTogJyNmZmZmZmYnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgdHlwZTogJ2NpcmNsZScsXHJcbiAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwMCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwb2x5Z29uOiB7XHJcbiAgICAgICAgICAgIG5iX3NpZGVzOiA1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICB2YWx1ZTogMC41LFxyXG4gICAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgICAgIG9wYWNpdHlfbWluOiAwLjEsXHJcbiAgICAgICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICB2YWx1ZTogMyxcclxuICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDQwLFxyXG4gICAgICAgICAgICBzaXplX21pbjogMC4xLFxyXG4gICAgICAgICAgICBzeW5jOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGRpc3RhbmNlOiAxNTAsXHJcbiAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICAgICAgd2lkdGg6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdmU6IHtcclxuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHNwZWVkOiAyLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgb3V0X21vZGU6ICdvdXQnLFxyXG4gICAgICAgICAgYm91bmNlOiBmYWxzZSxcclxuICAgICAgICAgIGF0dHJhY3Q6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgcm90YXRlWDogNjAwLFxyXG4gICAgICAgICAgICByb3RhdGVZOiAxMjAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICAgICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcclxuICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgIG9uaG92ZXI6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RlOiAncmVwdWxzZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvbmNsaWNrOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbW9kZTogJ3B1c2gnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2Rlczoge1xyXG4gICAgICAgICAgZ3JhYjoge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJ1YmJsZToge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgICAgICBzaXplOiA0MCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDgsXHJcbiAgICAgICAgICAgIHNwZWVkOiAzXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVwdWxzZToge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogMjAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMC40XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHVzaDoge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZW1vdmU6IHtcclxuICAgICAgICAgICAgcGFydGljbGVzX25iOiAyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICByZXRpbmFfZGV0ZWN0OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtlbGVtfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FudmFzV3JhcH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub3ZlcmxheX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRlY29Jbm5lciwgaGlkZSAmJiBjbGFzc2VzLmhpZGUpfT5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInBhcnRpY2xlc19iYWNrZ3JvbmRcIiBjbGFzc05hbWU9e2NsYXNzZXMucGFydGljbGVCYWNrZ3JvdW5kfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhbm5lcldyYXB9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNsYXNzTmFtZT17dGV4dC50aXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl90aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNyeXB0by1sYW5kaW5nLmJhbm5lcl9zdWJ0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bkFyZWF9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIiBmdWxsV2lkdGg9e2lzTW9iaWxlfT5cclxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5iYW5uZXJfZ2V0c3RhcnRlZCcpfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0BUcmFkaW5nUGxhbmV0RVhcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmludmVydH0gc2l6ZT1cImxhcmdlXCIgZnVsbFdpZHRoPXtpc01vYmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuYmFubmVyX2xlYXJuJyl9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICB7LyogPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5vYmplY3RBcnR9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NyeXB0by9iYW5uZXItYXJ0LnBuZ1wiIGFsdD1cImlsbHVzdHJhdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvQm90dG9tfT5cclxuICAgICAgICA8c3ZnPlxyXG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIvaW1hZ2VzL2NyeXB0by9kZWNvLWJhbm5lci5zdmcjbWFpblwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuQmFubmVyLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShCYW5uZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9