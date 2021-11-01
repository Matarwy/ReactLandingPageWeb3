webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header/header-style.js":
/*!*******************************************!*\
  !*** ./components/Header/header-style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/flag-logo.png */ "./public/images/flag-logo.png");
/* harmony import */ var _public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: "url(".concat(_public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a, ") no-repeat transparent"),
  backgroundSize: '16px auto',
  '&[class="ara"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zho"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="eng"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="deu"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="ind"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="prt"]': {
    backgroundPosition: '0 -79px'
  }
};
var headerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _header, _nav, _a, _navMenu;

  return {
    '@keyframes slideRight': {
      from: {
        opacity: 0,
        transform: 'translateX(-100px)'
      },
      to: {
        opacity: 1,
        transform: 'none'
      }
    },
    fixed: {},
    invert: {
      color: theme.palette.text.primary,
      '& $mobileMenu': {
        '& $bar': {
          backgroundColor: theme.palette.text.secondary,
          '&:after, &:before': {
            backgroundColor: theme.palette.text.secondary
          }
        }
      },
      '& svg': {
        fill: theme.palette.text.primary
      }
    },
    openDrawer: {},
    header: (_header = {
      position: 'absolute',
      color: theme.palette.common.white,
      background: 'none',
      boxShadow: 'none'
    }, Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, theme.breakpoints.up('lg'), {
      paddingTop: theme.spacing(7)
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, '& > *', Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down('md'), {
      paddingLeft: 0
    })), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, '&$fixed', {
      position: 'fixed',
      background: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["darken"])(theme.palette.primary.dark, 0.5) : theme.palette.primary.dark,
      paddingTop: 0,
      transition: 'background 0.3s ease',
      boxShadow: theme.shadows[5],
      '& $logo': {
        '& svg': {
          height: 48,
          width: 48,
          marginBottom: 0
        }
      },
      '& $headerContent': {
        '& nav': {
          padding: theme.spacing()
        }
      },
      '& $navMenu': {
        '& svg': {
          fill: theme.palette.common.white
        },
        '& a': {
          color: theme.palette.common.white
        }
      },
      '& $divider': {
        borderLeftColor: 'rgba(255, 255, 255, 0.5)'
      },
      '& $mobileMenu': {
        '& $bar': {
          backgroundColor: theme.palette.common.white,
          '&:after, &:before': {
            backgroundColor: theme.palette.common.white
          }
        }
      }
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, '&$openDrawer', {
      zIndex: 1600,
      boxShadow: 'none'
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_header, '&$invert', {
      paddingTop: 0,
      '& $navMenu': {
        '& svg': {
          fill: theme.palette.text.primary
        },
        '& a': {
          color: theme.palette.text.primary,
          '&$button': {
            color: theme.palette.common.white
          }
        }
      },
      '& $divider': {
        borderLeftColor: theme.palette.divider
      },
      '& $mobileMenu': {
        '& $bar': {
          backgroundColor: "".concat(theme.palette.text.primary),
          '&:after, &:before': {
            backgroundColor: "".concat(theme.palette.text.primary)
          }
        }
      }
    }), _header),
    headerContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& nav': (_nav = {
        alignItems: 'center',
        padding: theme.spacing(2)
      }, Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_nav, theme.breakpoints.down('md'), {
        padding: theme.spacing(2, 0)
      }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_nav, "display", 'flex'), _nav)
    },
    logo: {
      '& a': {
        textDecoration: 'none',
        display: 'block',
        fontSize: 16,
        color: theme.palette.common.white,
        alignItems: 'center',
        fontWeight: theme.typography.fontWeightMedium,
        textAlign: 'center'
      },
      '& img': Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        display: 'block',
        margin: '0 auto',
        width: 64,
        height: 64,
        marginBottom: theme.spacing()
      }, theme.breakpoints.down('sm'), {
        height: 48,
        width: 48
      })
    },
    active: {},
    button: {
      width: theme.spacing(15),
      padding: theme.spacing(0.5)
    },
    navMenu: (_navMenu = {}, Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_navMenu, theme.breakpoints.up('lg'), {
      '& > *': {
        margin: theme.spacing(0, 1)
      }
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_navMenu, '& a', (_a = {
      color: theme.palette.common.white,
      fontSize: 16,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0.5, 1)
    }, Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_a, theme.breakpoints.down('md'), {
      margin: theme.spacing(0, 3)
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_a, theme.breakpoints.down('xs'), {
      margin: 0
    }), _a)), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_navMenu, '& ul', {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: theme.spacing(0, 1.5),
          borderRadius: 6,
          transition: 'all 0.3s ease-out',
          border: '1px solid transparent',
          '&:hover': {
            border: "1px solid ".concat(theme.palette.common.white)
          }
        },
        '&[class="active"]': {
          '& a': {
            boxShadow: '0 1.5px 32px -8px rgba(0, 0, 0, 0.22)',
            color: "".concat(theme.palette.primary.main, " !important"),
            background: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["fade"])(theme.palette.common.black, 0.3) : Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["fade"])(theme.palette.common.white, 0.84)
          }
        }
      }
    }), _navMenu),
    navAuth: Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      justifyContent: 'space-evenly'
    }, theme.breakpoints.up('lg'), {
      flex: 1
    }),
    langMenu: {
      textTransform: 'capitalize',
      '& i': _objectSpread({}, flagIcon)
    },
    modeMenu: {
      textTransform: 'capitalize'
    },
    icon: {},
    setting: {
      '& $icon': {
        transition: 'all 0.3s ease',
        color: theme.palette.common.white
      },
      '& $active': {
        transform: 'rotate(30deg)'
      }
    },
    bar: {},
    menu: {},
    paperNav: Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: '100%',
      background: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["darken"])(theme.palette.primary.dark, 0.5) : theme.palette.primary.dark
    }, theme.breakpoints.up(680), {
      width: 300
    }),
    mobileMenu: {
      margin: theme.spacing(0, 1),
      '& $bar': {
        backgroundColor: "".concat(theme.palette.common.white),
        '&:after, &:before': {
          backgroundColor: "".concat(theme.palette.common.white)
        }
      },
      '&[class*="is-active"]': {
        '& $bar': {
          backgroundColor: "".concat(theme.palette.common.white, " !important"),
          '&:after, &:before': {
            backgroundColor: "".concat(theme.palette.common.white, " !important")
          }
        }
      }
    },
    mobileNav: {
      background: theme.palette.background.paper,
      '& $menu': {
        padding: theme.spacing(0, 5),
        overflow: 'auto',
        top: 80,
        width: '100%',
        position: 'absolute',
        height: 'calc(100% - 80px)',
        '& a': {
          animationName: '$slideRight',
          animationTimingFunction: 'ease'
        }
      }
    },
    menuList: {
      textTransform: 'capitalize',
      color: theme.palette.common.white,
      '& span': {
        fontSize: 24
      }
    },
    divider: {
      background: 'none',
      borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
      height: 28
    },
    market: {
      position: 'absolute',
      top: 0,
      zIndex: 1200,
      left: 0,
      width: '100%',
      height: 40,
      background: 'rgba(0, 0, 0, 0.5)',
      padding: theme.spacing()
    },
    item: {
      color: theme.palette.common.white,
      padding: theme.spacing(0.5, 4),
      '&:focus': {
        outline: 'none'
      }
    },
    coin: {
      display: 'flex',
      '& $logo': {
        width: 20,
        height: 'auto',
        marginRight: theme.spacing(),
        '& img': {
          width: '100%',
          height: 'auto'
        }
      },
      '& i': {
        fontStyle: 'normal'
      }
    },
    down: {
      color: '#FF7272'
    },
    up: {
      color: '#5DD662'
    },
    stay: {
      color: '#b2b2b2'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (headerStyles);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLXN0eWxlLmpzIl0sIm5hbWVzIjpbImZsYWdJY29uIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJtYXJnaW5SaWdodCIsInRvcCIsImJhY2tncm91bmQiLCJmbGFnIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJoZWFkZXJTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmcm9tIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsInRvIiwiZml4ZWQiLCJpbnZlcnQiLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0IiwicHJpbWFyeSIsImJhY2tncm91bmRDb2xvciIsInNlY29uZGFyeSIsImZpbGwiLCJvcGVuRHJhd2VyIiwiaGVhZGVyIiwiY29tbW9uIiwid2hpdGUiLCJib3hTaGFkb3ciLCJicmVha3BvaW50cyIsInVwIiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJkb3duIiwicGFkZGluZ0xlZnQiLCJ0eXBlIiwiZGFya2VuIiwiZGFyayIsInRyYW5zaXRpb24iLCJzaGFkb3dzIiwibWFyZ2luQm90dG9tIiwicGFkZGluZyIsImJvcmRlckxlZnRDb2xvciIsInpJbmRleCIsImRpdmlkZXIiLCJoZWFkZXJDb250ZW50IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibG9nbyIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRNZWRpdW0iLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJhY3RpdmUiLCJidXR0b24iLCJuYXZNZW51IiwibGlzdFN0eWxlIiwibWFyZ2luTGVmdCIsInRleHRUcmFuc2Zvcm0iLCJtaW5XaWR0aCIsImJvcmRlciIsIm1haW4iLCJmYWRlIiwiYmxhY2siLCJuYXZBdXRoIiwiZmxleCIsImxhbmdNZW51IiwibW9kZU1lbnUiLCJpY29uIiwic2V0dGluZyIsImJhciIsIm1lbnUiLCJwYXBlck5hdiIsIm1vYmlsZU1lbnUiLCJtb2JpbGVOYXYiLCJwYXBlciIsIm92ZXJmbG93IiwiYW5pbWF0aW9uTmFtZSIsImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uIiwibWVudUxpc3QiLCJib3JkZXJMZWZ0IiwibWFya2V0IiwibGVmdCIsIml0ZW0iLCJvdXRsaW5lIiwiY29pbiIsImZvbnRTdHlsZSIsInN0YXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLE9BQUssRUFBRSxFQURRO0FBRWZDLFFBQU0sRUFBRSxFQUZPO0FBR2ZDLGNBQVksRUFBRSxLQUhDO0FBSWZDLFNBQU8sRUFBRSxjQUpNO0FBS2ZDLFVBQVEsRUFBRSxVQUxLO0FBTWZDLGFBQVcsRUFBRSxDQU5FO0FBT2ZDLEtBQUcsRUFBRSxDQVBVO0FBUWZDLFlBQVUsZ0JBQVNDLG1FQUFULDRCQVJLO0FBU2ZDLGdCQUFjLEVBQUUsV0FURDtBQVVmLG9CQUFrQjtBQUNoQkMsc0JBQWtCLEVBQUU7QUFESixHQVZIO0FBYWYsb0JBQWtCO0FBQ2hCQSxzQkFBa0IsRUFBRTtBQURKLEdBYkg7QUFnQmYsb0JBQWtCO0FBQ2hCQSxzQkFBa0IsRUFBRTtBQURKLEdBaEJIO0FBbUJmLG9CQUFrQjtBQUNoQkEsc0JBQWtCLEVBQUU7QUFESixHQW5CSDtBQXNCZixvQkFBa0I7QUFDaEJBLHNCQUFrQixFQUFFO0FBREosR0F0Qkg7QUF5QmYsb0JBQWtCO0FBQ2hCQSxzQkFBa0IsRUFBRTtBQURKO0FBekJILENBQWpCO0FBOEJBLElBQU1DLFlBQVksR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUE7O0FBQUEsU0FBSztBQUN4Qyw2QkFBeUI7QUFDdkJDLFVBQUksRUFBRTtBQUNKQyxlQUFPLEVBQUUsQ0FETDtBQUVKQyxpQkFBUyxFQUFFO0FBRlAsT0FEaUI7QUFLdkJDLFFBQUUs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VHhDYSxNQUFFLEVBQUU7QUFDRmIsV0FBSyxFQUFFO0FBREwsS0F0VG9DO0FBeVR4Q3lFLFFBQUksRUFBRTtBQUNKekUsV0FBSyxFQUFFO0FBREg7QUF6VGtDLEdBQUw7QUFBQSxDQUFOLENBQS9CO0FBOFRlVCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yN2YyOTZmNWZhNGRmNmFjMjdhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGZhZGUsIGRhcmtlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcclxuaW1wb3J0IGZsYWcgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2ZsYWctbG9nby5wbmcnO1xyXG5cclxuY29uc3QgZmxhZ0ljb24gPSB7XHJcbiAgd2lkdGg6IDE2LFxyXG4gIGhlaWdodDogMTYsXHJcbiAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICBtYXJnaW5SaWdodDogNSxcclxuICB0b3A6IDEsXHJcbiAgYmFja2dyb3VuZDogYHVybCgke2ZsYWd9KSBuby1yZXBlYXQgdHJhbnNwYXJlbnRgLFxyXG4gIGJhY2tncm91bmRTaXplOiAnMTZweCBhdXRvJyxcclxuICAnJltjbGFzcz1cImFyYVwiXSc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgM3B4J1xyXG4gIH0sXHJcbiAgJyZbY2xhc3M9XCJ6aG9cIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwIC0xMnB4J1xyXG4gIH0sXHJcbiAgJyZbY2xhc3M9XCJlbmdcIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwIC0yOHB4J1xyXG4gIH0sXHJcbiAgJyZbY2xhc3M9XCJkZXVcIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwIC00NHB4J1xyXG4gIH0sXHJcbiAgJyZbY2xhc3M9XCJpbmRcIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwIC02MnB4J1xyXG4gIH0sXHJcbiAgJyZbY2xhc3M9XCJwcnRcIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwIC03OXB4J1xyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBoZWFkZXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgJ0BrZXlmcmFtZXMgc2xpZGVSaWdodCc6IHtcclxuICAgIGZyb206IHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwcHgpJ1xyXG4gICAgfSxcclxuICAgIHRvOiB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHRyYW5zZm9ybTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBmaXhlZDoge30sXHJcbiAgaW52ZXJ0OiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAnJiAkbW9iaWxlTWVudSc6IHtcclxuICAgICAgJyYgJGJhcic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgICAgICAgJyY6YWZ0ZXIsICY6YmVmb3JlJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb3BlbkRyYXdlcjoge30sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgfSxcclxuICAgICcmID4gKic6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmJGZpeGVkJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssIDAuNSkgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgcGFkZGluZ1RvcDogMCxcclxuICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQgMC4zcyBlYXNlJyxcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgICAnJiAkbG9nbyc6IHtcclxuICAgICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ4LFxyXG4gICAgICAgICAgd2lkdGg6IDQ4LFxyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJyYgJGhlYWRlckNvbnRlbnQnOiB7XHJcbiAgICAgICAgJyYgbmF2Jzoge1xyXG4gICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJyYgJG5hdk1lbnUnOiB7XHJcbiAgICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkZGl2aWRlcic6IHtcclxuICAgICAgICBib3JkZXJMZWZ0Q29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkbW9iaWxlTWVudSc6IHtcclxuICAgICAgICAnJiAkYmFyJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICAgICcmOmFmdGVyLCAmOmJlZm9yZSc6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYkb3BlbkRyYXdlcic6IHtcclxuICAgICAgekluZGV4OiAxNjAwLFxyXG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICAnJiRpbnZlcnQnOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IDAsXHJcbiAgICAgICcmICRuYXZNZW51Jzoge1xyXG4gICAgICAgICcmIHN2Zyc6IHtcclxuICAgICAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiBhJzoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgICAgJyYkYnV0dG9uJzoge1xyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRkaXZpZGVyJzoge1xyXG4gICAgICAgIGJvcmRlckxlZnRDb2xvcjogdGhlbWUucGFsZXR0ZS5kaXZpZGVyXHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRtb2JpbGVNZW51Jzoge1xyXG4gICAgICAgICcmICRiYXInOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5fWAsXHJcbiAgICAgICAgICAnJjphZnRlciwgJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnl9YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH1cclxuICB9LFxyXG4gIGhlYWRlckNvbnRlbnQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICcmIG5hdic6IHtcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgMCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgJyYgYSc6IHtcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICAnJiBpbWcnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgIHdpZHRoOiA2NCxcclxuICAgICAgaGVpZ2h0OiA2NCxcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgICAgd2lkdGg6IDQ4LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmU6IHt9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMTUpLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLjUpXHJcbiAgfSxcclxuICBuYXZNZW51OiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgICcmID4gKic6IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgYSc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAuNSwgMSksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAzKSxcclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgbWFyZ2luOiAwXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgdWwnOiB7XHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMCxcclxuICAgICAgJyYgbGknOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICAgICAgICBtaW5XaWR0aDogMCxcclxuICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMS41KSxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogNixcclxuICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLW91dCcsXHJcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlfWAsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJltjbGFzcz1cImFjdGl2ZVwiXSc6IHtcclxuICAgICAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMS41cHggMzJweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4yMiknLFxyXG4gICAgICAgICAgICBjb2xvcjogYCR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59ICFpbXBvcnRhbnRgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssIDAuMykgOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjg0KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG5hdkF1dGg6IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgZmxleDogMSxcclxuICAgIH1cclxuICB9LFxyXG4gIGxhbmdNZW51OiB7XHJcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICAnJiBpJzoge1xyXG4gICAgICAuLi5mbGFnSWNvblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9kZU1lbnU6IHtcclxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICB9LFxyXG4gIGljb246IHt9LFxyXG4gIHNldHRpbmc6IHtcclxuICAgICcmICRpY29uJzoge1xyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICAnJiAkYWN0aXZlJzoge1xyXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMzBkZWcpJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYmFyOiB7fSxcclxuICBtZW51OiB7fSxcclxuICBwYXBlck5hdjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZGFya2VuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjUpIDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoNjgwKV06IHtcclxuICAgICAgd2lkdGg6IDMwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb2JpbGVNZW51OiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgICAnJiAkYmFyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlfWAsXHJcbiAgICAgICcmOmFmdGVyLCAmOmJlZm9yZSc6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlfWBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmW2NsYXNzKj1cImlzLWFjdGl2ZVwiXSc6IHtcclxuICAgICAgJyYgJGJhcic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlfSAhaW1wb3J0YW50YCxcclxuICAgICAgICAnJjphZnRlciwgJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlfSAhaW1wb3J0YW50YFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH1cclxuICB9LFxyXG4gIG1vYmlsZU5hdjoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgJyYgJG1lbnUnOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgNSksXHJcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgIHRvcDogODAsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBoZWlnaHQ6ICdjYWxjKDEwMCUgLSA4MHB4KScsXHJcbiAgICAgICcmIGEnOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uTmFtZTogJyRzbGlkZVJpZ2h0JyxcclxuICAgICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2Vhc2UnXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZW51TGlzdDoge1xyXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgJyYgc3Bhbic6IHtcclxuICAgICAgZm9udFNpemU6IDI0XHJcbiAgICB9XHJcbiAgfSxcclxuICBkaXZpZGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXHJcbiAgICBoZWlnaHQ6IDI4XHJcbiAgfSxcclxuICBtYXJrZXQ6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgekluZGV4OiAxMjAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6IDQwLFxyXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC41KScsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgfSxcclxuICBpdGVtOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSwgNCksXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgb3V0bGluZTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb2luOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAnJiAkbG9nbyc6IHtcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICAgJyYgaW1nJzoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgaSc6IHtcclxuICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZG93bjoge1xyXG4gICAgY29sb3I6ICcjRkY3MjcyJ1xyXG4gIH0sXHJcbiAgdXA6IHtcclxuICAgIGNvbG9yOiAnIzVERDY2MidcclxuICB9LFxyXG4gIHN0YXk6IHtcclxuICAgIGNvbG9yOiAnI2IyYjJiMidcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTdHlsZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=