webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Footer/footer-style.js":
/*!*******************************************!*\
  !*** ./components/Footer/footer-style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__);



var footerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _li, _logo, _footerCounter, _decoTop;

  return {
    link: {
      margin: theme.spacing(1, 1.5)
    },
    invert: {},
    footer: {
      position: 'relative',
      padding: theme.spacing(10, 0),
      '& p': Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        color: theme.palette.common.white
      }, theme.breakpoints.down('xs'), {
        textAlign: 'center'
      }),
      '& ul': {
        margin: 0,
        padding: 0
      },
      '& li': (_li = {
        listStyle: 'none',
        marginBottom: theme.spacing(),
        display: 'inline-block',
        width: '100%',
        marginRight: '3%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: theme.palette.common.white
      }, Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_li, theme.breakpoints.down('xs'), {
        width: '47%'
      }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_li, '& a', {
        fontSize: 14,
        textTransform: 'capitalize',
        textDecoration: 'none !important',
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.primary.light
        }
      }), _li),
      '&$invert': {
        '& p': {
          color: theme.palette.text.primary
        },
        '& li a': {
          color: theme.palette.text.primary
        },
        '& $logo': {
          '& h6': {
            color: theme.palette.primary.dark
          }
        },
        '& $title': {
          color: theme.palette.secondary.main
        },
        '& $blogItem': {
          '& $category': {
            color: theme.palette.secondary.main
          }
        },
        '& $selectLang': {
          color: theme.palette.text.primary,
          '& svg': {
            color: theme.palette.text.primary
          }
        }
      }
    },
    title: {
      color: theme.palette.secondary.light,
      fontSize: 14,
      textTransform: 'uppercase',
      marginBottom: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold
    },
    quickLinks: {
      marginTop: theme.spacing(5)
    },
    logo: (_logo = {
      display: 'flex',
      marginBottom: theme.spacing(3),
      alignItems: 'center'
    }, Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_logo, theme.breakpoints.down('sm'), {
      justifyContent: 'center'
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_logo, '& svg', {
      width: 64,
      marginRight: theme.spacing()
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_logo, '& h6', {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 28,
      textTransform: 'uppercase',
      color: theme.palette.common.white
    }), _logo),
    footerDesc: Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: 'block',
      fontSize: 14,
      marginBottom: theme.spacing(2)
    }, theme.breakpoints.down('sm'), {
      textAlign: 'center'
    }),
    socmed: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: theme.spacing(4),
      '& button': {
        margin: theme.spacing(),
        color: theme.palette.primary.dark,
        background: theme.palette.primary.main,
        width: 36,
        height: 36,
        '& i': {
          color: theme.palette.common.white
        }
      },
      '& i': {
        fontSize: 24
      }
    },
    icon: {},
    selectLang: {
      display: 'inherit',
      margin: theme.spacing(2, 0, 4),
      color: theme.palette.common.white,
      '& $icon': {
        top: 29,
        color: theme.palette.primary.light,
        position: 'relative'
      },
      '& svg': {
        color: theme.palette.secondary.light
      },
      '& fieldset': {
        borderRadius: 10,
        boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
        border: "1px solid ".concat(Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["fade"])(theme.palette.primary.light, 0.5), " !important"),
        '& legend': {
          top: 5,
          position: 'relative',
          borderTop: "1px solid ".concat(Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["fade"])(theme.palette.primary.light, 0.5))
        },
        '& + div + div': {
          background: 'none !important',
          padding: theme.spacing(1.5, 1.5, 1.5, 4),
          width: 'calc(100% - 32px)'
        }
      }
    },
    selectMenu: {
      width: 160,
      background: 'none !important'
    },
    footerCounter: (_footerCounter = {
      position: 'relative',
      background: theme.palette.primary.dark,
      //`linear-gradient(-130deg, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} -20%, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main} 70%)`,
      paddingTop: theme.spacing(10)
    }, Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_footerCounter, theme.breakpoints.up('md'), {
      paddingTop: theme.spacing(25)
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_footerCounter, theme.breakpoints.up('xl'), {
      paddingTop: theme.spacing(15)
    }), _footerCounter),
    decoTop: (_decoTop = {
      position: 'absolute',
      top: -20,
      left: 0,
      width: 1280,
      height: 400
    }, Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_decoTop, theme.breakpoints.up('lg'), {
      transform: 'scale(1.2)'
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_decoTop, theme.breakpoints.up(1400), {
      transform: 'scale(2, 1)'
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_decoTop, theme.breakpoints.up('xl'), {
      display: 'none'
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_decoTop, theme.breakpoints.down('md'), {
      transform: 'scale(1.4, 1)',
      left: -300
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_decoTop, theme.breakpoints.down('sm'), {
      display: 'none'
    }), Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_decoTop, '& svg', Object(D_projects_TP_v1_TradingPlanet_Home_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: '100%',
      height: '100%',
      fill: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["darken"])(theme.palette.primary.dark, 0.6) : Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["lighten"])(theme.palette.primary.main, 0.84)
    }, theme.breakpoints.down('xs'), {
      display: 'none'
    })), _decoTop),
    category: {},
    listText: {},
    blogItem: {
      display: 'flex',
      alignItems: 'center',
      margin: theme.spacing(2, 0),
      textAlign: 'left',
      justifyContent: 'flex-start',
      '& $category': {
        marginBottom: theme.spacing(),
        display: 'block',
        color: theme.palette.secondary.light
      },
      '& $listText': {
        flex: 1,
        color: theme.palette.primary.light
      },
      '& figure': {
        borderRadius: 4,
        overflow: 'hidden',
        margin: theme.spacing(1, 2, 0, 0),
        width: 80,
        height: 56,
        '& img': {
          display: 'block',
          minHeight: '100%',
          width: '100%'
        }
      },
      '& p': {
        fontSize: 13
      }
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (footerStyles);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyLXN0eWxlLmpzIl0sIm5hbWVzIjpbImZvb3RlclN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImxpbmsiLCJtYXJnaW4iLCJzcGFjaW5nIiwiaW52ZXJ0IiwiZm9vdGVyIiwicG9zaXRpb24iLCJwYWRkaW5nIiwiY29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJicmVha3BvaW50cyIsImRvd24iLCJ0ZXh0QWxpZ24iLCJsaXN0U3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5Iiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIndoaXRlU3BhY2UiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsInRleHREZWNvcmF0aW9uIiwicHJpbWFyeSIsImxpZ2h0IiwidGV4dCIsImRhcmsiLCJzZWNvbmRhcnkiLCJtYWluIiwidGl0bGUiLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRCb2xkIiwicXVpY2tMaW5rcyIsIm1hcmdpblRvcCIsImxvZ28iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb290ZXJEZXNjIiwic29jbWVkIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImljb24iLCJzZWxlY3RMYW5nIiwidG9wIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiYm9yZGVyIiwiZmFkZSIsImJvcmRlclRvcCIsInNlbGVjdE1lbnUiLCJmb290ZXJDb3VudGVyIiwicGFkZGluZ1RvcCIsInVwIiwiZGVjb1RvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJmaWxsIiwidHlwZSIsImRhcmtlbiIsImxpZ2h0ZW4iLCJjYXRlZ29yeSIsImxpc3RUZXh0IiwiYmxvZ0l0ZW0iLCJmbGV4IiwibWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUE7O0FBQUEsU0FBSztBQUN4Q0MsUUFBSSxFQUFFO0FBQ0pDLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxFQUFpQixHQUFqQjtBQURKLEtBRGtDO0FBSXhDQyxVQUFNLEVBQUUsRUFKZ0M7QUFLeENDLFVBQU0sRUFBRTtBQUNOQyxjQUFRLEVBQUUsVUFESjtBQUVOQyxhQUFPLEVBQUVQLEtBQUssQ0FBQ0csT0FBTixDQUFjLEVBQWQsRUFBa0IsQ0FBbEIsQ0FGSDtBQUdOO0FBQ0VLLGFBQUssRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWNDLE1BQWQsQ0FBcUJDO0FBRDlCLFNBRUdYLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGSCxFQUVrQztBQUM5QkMsaUJBQVMsRUFBRTtBQURtQixPQUZsQyxDQUhNO0FBU04sY0FBUTtBQUNOWixjQUFNLEVBQUUsQ0FERjtBQUVOSyxlQUFPLEVBQUU7QUFGSCxPQVRGO0FBYU47QUFDRVEsaUJBQVMsRUFBRSxNQURiO0FBRUVDLG9CQUFZLEVBQUVoQixLQUFLLENBQUNHLE9BQU4sRUFGaEI7QUFHRWMsZUFBTyxFQUFFLGNBSFg7QUFJRUMsYUFBSyxFQUFFLE1BSlQ7QUFLRUMsbUJBQVcsRUFBRSxJQUxmO0FBTUVDLGtCQUFVLEVBQUUsUUFOZDtBQU9FQyxnQkFBUSxFQUFFLFFBUFo7QUFRRUMsb0JBQVksRUFBRSxVQVJoQjtBQVNFZCxhQUFLLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjQyxNQUFkLENBQXFCQztBQVQ5QiwwS0FVR1gsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQVZILEVBVWtDO0FBQzlCSyxhQUFLLEVBQUU7QUFEdUIsT0FWbEMsb0tBYUUsS0FiRixFQWFTO0FBQ0xLLGdCQUFRLEVBQUUsRUFETDtBQUVMQyxxQkFBYSxFQUFFLFlBRlY7QUFHTEMsc0JBQWMsRUFBRSxpQkFIWDtBQUlMakIsYUFBSyxFQUFFUixLQUFLLENBQUNTLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FKdkI7QUFLTCxtQkFBVztBQUNUSCxlQUFLLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjaUIsT0FBZCxDQUFzQkM7QUFEcEI7QUFMTixPQWJULE9BYk07QUFvQ04sa0JBQVk7QUFDVixlQUFPO0FBQ0xuQixlQUFLLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjbUIsSUFBZCxDQUFtQkY7QUFEckIsU0FERztBQUlWLGtCQUFVO0FBQ1JsQixlQUFLLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjbUIsSUFBZCxDQUFtQkY7QUFEbEIsU0FKQTtBQU9WLG1CQUFXO0FBQ1Qsa0JBQVE7QUFDTmxCLGlCQUFLLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjaUIsT0FBZCxDQUFzQkc7QUFEdkI7QUFEQyxTQVBEO0FBWVYsb0JBQVk7QUFDVnJCLGVBQUssRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWNxQixTQUFkLENBQXdCQztBQURyQixTQVpGO0FBZVYsdUJBQWU7QUFDYix5QkFBZTtBQUNidkIsaUJBQUssRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWNxQixTQUFkLENBQXdCQztBQURsQjtBQURGLFNBZkw7QUFvQlYseUJBQWlCO0FBQ2Z2QixlQUFLLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjbUIsSUFBZCxDQUFtQkYsT0FEWDtBQUVmLG1CQUFTO0FBQ1BsQixpQkFBSyxFQUFFUixLQUFLLENBQUNTLE9BQU4sQ0FBY21CLElBQWQsQ0FBbUJGO0FBRG5CO0FBRk07QUFwQlA7QUFwQ04sS0FMZ0M7QUFxRXhDTSxTQUFLLEVBQUU7QUFDTHhCLFdBQUssRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWNxQixTQUFkLENBQXdCSCxLQUQxQjtBQUVMSixjQUFRLEVBQUUsRUFGTDtBQUdMQyxtQkFBYSxFQUFFLFdBSFY7QUFJTFIsa0JBQVksRUFBRWhCLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FKVDtBQUtMOEIsZ0JBQVUsRUFBRWpDLEtBQUssQ0FBQ2tDLFVBQU4sQ0FBaUJDO0FBTHhCLEtBckVpQztBQTRFeENDLGNBQVUsRUFBRTtBQUNWQyxlQUFTLEVBQUVyQyxLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBREQsS0E1RTRCO0FBK0V4Q21DLFFBQUk7QUFDRnJCLGFBQU8sRUFBRSxNQURQO0FBRUZELGtCQUFZLEVBQUVoQixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBRlo7QUFHRm9DLGdCQUFVLEVBQUU7QUFIViwwS0FJRHZDLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FKQyxFQUk4QjtBQUM5QjJCLG9CQUFjLEVBQUU7QUFEYyxLQUo5QixzS0FPRixPQVBFLEVBT087QUFDUHRCLFdBQUssRUFBRSxFQURBO0FBRVBDLGlCQUFXLEVBQUVuQixLQUFLLENBQUNHLE9BQU47QUFGTixLQVBQLHNLQVdGLE1BWEUsRUFXTTtBQUNOOEIsZ0JBQVUsRUFBRWpDLEtBQUssQ0FBQ2tDLFVBQU4sQ0FBaUJDLGNBRHZCO0FBRU5aLGNBQVEsRUFBRSxFQUZKO0FBR05DLG1CQUFhLEVBQUUsV0FIVDtBQUlOaEIsV0FBSyxFQUFFUixLQUFLLENBQUNTLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkM7QUFKdEIsS0FYTixTQS9Fb0M7QUFpR3hDOEIsY0FBVSxFQUFFO0FBQ1Z4QixhQUFPLEVBQUUsT0FERDtBQUVSTSxjQUFRLEVBQUUsRUFGRjtBQUdSUCxrQkFBWSxFQUFFaEIsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQUhOLE9BSVBILEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FKTyxFQUl3QjtBQUM5QkMsZUFBUyxFQUFFO0FBRG1CLEtBSnhCLENBakc4QjtBQXlHeEM0QixVQUFNLEVBQUU7QUFDTnpCLGFBQU8sRUFBRSxNQURIO0FBRU51QixvQkFBYyxFQUFFLGNBRlY7QUFHTnhCLGtCQUFZLEVBQUVoQixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBSFI7QUFJTixrQkFBWTtBQUNWRCxjQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixFQURFO0FBRVZLLGFBQUssRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWNpQixPQUFkLENBQXNCRyxJQUZuQjtBQUdWYyxrQkFBVSxFQUFFM0MsS0FBSyxDQUFDUyxPQUFOLENBQWNpQixPQUFkLENBQXNCSyxJQUh4QjtBQUlWYixhQUFLLEVBQUUsRUFKRztBQUtWMEIsY0FBTSxFQUFFLEVBTEU7QUFNVixlQUFPO0FBQ0xwQyxlQUFLLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjQyxNQUFkLENBQXFCQztBQUR2QjtBQU5HLE9BSk47QUFjTixhQUFPO0FBQ0xZLGdCQUFRLEVBQUU7QUFETDtBQWRELEtBekdnQztBQTJIeENzQixRQUFJLEVBQUUsRUEzSGtDO0FBNEh4Q0MsY0FBVSxFQUFFO0FBQ1Y3QixhQUFPLEVBQUUsU0FEQztBQUVWZixZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FGRTtBQUdWSyxXQUFLLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUhsQjtBQUlWLGlCQUFXO0FBQ1RvQyxXQUFHLEVBQUUsRUFESTtBQUVUdkMsYUFBSyxFQUFFUixLQUFLLENBQUNTLE9BQU4sQ0FBY2lCLE9BQWQsQ0FBc0JDLEtBRnBCO0FBR1RyQixnQkFBUSxFQUFFO0FBSEQsT0FKRDtBQVNWLGVBQVM7QUFDUEUsYUFBSyxFQUFFUixLQUFLLENBQUNTLE9BQU4sQ0FBY3FCLFNBQWQsQ0FBd0JIO0FBRHhCLE9BVEM7QUFZVixvQkFBYztBQUNacUIsb0JBQVksRUFBRSxFQURGO0FBRVpDLGlCQUFTLEVBQUUsc0NBRkM7QUFHWkMsY0FBTSxzQkFBZUMsc0ZBQUksQ0FBQ25ELEtBQUssQ0FBQ1MsT0FBTixDQUFjaUIsT0FBZCxDQUFzQkMsS0FBdkIsRUFBOEIsR0FBOUIsQ0FBbkIsZ0JBSE07QUFJWixvQkFBWTtBQUNWb0IsYUFBRyxFQUFFLENBREs7QUFFVnpDLGtCQUFRLEVBQUUsVUFGQTtBQUdWOEMsbUJBQVMsc0JBQWVELHNGQUFJLENBQUNuRCxLQUFLLENBQUNTLE9BQU4sQ0FBY2lCLE9BQWQsQ0FBc0JDLEtBQXZCLEVBQThCLEdBQTlCLENBQW5CO0FBSEMsU0FKQTtBQVNaLHlCQUFpQjtBQUNmZ0Isb0JBQVUsRUFBRSxpQkFERztBQUVmcEMsaUJBQU8sRUFBRVAsS0FBSyxDQUFDRyxPQUFOLENBQWMsR0FBZCxFQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QixDQUE3QixDQUZNO0FBR2ZlLGVBQUssRUFBRTtBQUhRO0FBVEw7QUFaSixLQTVINEI7QUF3SnhDbUMsY0FBVSxFQUFFO0FBQ1ZuQyxXQUFLLEVBQUUsR0FERztBQUVWeUIsZ0JBQVUsRUFBRTtBQUZGLEtBeEo0QjtBQTRKeENXLGlCQUFhO0FBQ1hoRCxjQUFRLEVBQUUsVUFEQztBQUVYcUMsZ0JBQVUsRUFBRTNDLEtBQUssQ0FBQ1MsT0FBTixDQUFjaUIsT0FBZCxDQUFzQkcsSUFGdkI7QUFFNEI7QUFDdkMwQixnQkFBVSxFQUFFdkQsS0FBSyxDQUFDRyxPQUFOLENBQWMsRUFBZDtBQUhELG1MQUlWSCxLQUFLLENBQUNZLFdBQU4sQ0FBa0I0QyxFQUFsQixDQUFxQixJQUFyQixDQUpVLEVBSW1CO0FBQzVCRCxnQkFBVSxFQUFFdkQsS0FBSyxDQUFDRyxPQUFOLENBQWMsRUFBZDtBQURnQixLQUpuQiwrS0FPVkgsS0FBSyxDQUFDWSxXQUFOLENBQWtCNEMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FQVSxFQU9tQjtBQUM1QkQsZ0JBQVUsRUFBRXZELEtBQUssQ0FBQ0csT0FBTixDQUFjLEVBQWQ7QUFEZ0IsS0FQbkIsa0JBNUoyQjtBQXVLeENzRCxXQUFPO0FBQ0xuRCxjQUFRLEVBQUUsVUFETDtBQUVMeUMsU0FBRyxFQUFFLENBQUMsRUFGRDtBQUdMVyxVQUFJLEVBQUUsQ0FIRDtBQUlMeEMsV0FBSyxFQUFFLElBSkY7QUFLTDBCLFlBQU0sRUFBRTtBQUxILDZLQU1KNUMsS0FBSyxDQUFDWSxXQUFOLENBQWtCNEMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FOSSxFQU15QjtBQUM1QkcsZUFBUyxFQUFFO0FBRGlCLEtBTnpCLHlLQVNKM0QsS0FBSyxDQUFDWSxXQUFOLENBQWtCNEMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FUSSxFQVN5QjtBQUM1QkcsZUFBUyxFQUFFO0FBRGlCLEtBVHpCLHlLQVlKM0QsS0FBSyxDQUFDWSxXQUFOLENBQWtCNEMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FaSSxFQVl5QjtBQUM1QnZDLGFBQU8sRUFBRTtBQURtQixLQVp6Qix5S0FlSmpCLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FmSSxFQWUyQjtBQUM5QjhDLGVBQVMsRUFBRSxlQURtQjtBQUU5QkQsVUFBSSxFQUFFLENBQUM7QUFGdUIsS0FmM0IseUtBbUJKMUQsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQW5CSSxFQW1CMkI7QUFDOUJJLGFBQU8sRUFBRTtBQURxQixLQW5CM0IseUtBc0JMLE9BdEJLO0FBdUJIQyxXQUFLLEVBQUUsTUF2Qko7QUF3QkgwQixZQUFNLEVBQUUsTUF4Qkw7QUF5QkhnQixVQUFJLEVBQUU1RCxLQUFLLENBQUNTLE9BQU4sQ0FBY29ELElBQWQsS0FBdUIsTUFBdkIsR0FBZ0NDLHdGQUFNLENBQUM5RCxLQUFLLENBQUNTLE9BQU4sQ0FBY2lCLE9BQWQsQ0FBc0JHLElBQXZCLEVBQTZCLEdBQTdCLENBQXRDLEdBQTBFa0MseUZBQU8sQ0FBQy9ELEtBQUssQ0FBQ1MsT0FBTixDQUFjaUIsT0FBZCxDQUFzQkssSUFBdkIsRUFBNkIsSUFBN0I7QUF6QnBGLE9BMEJGL0IsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQTFCRSxFQTBCNkI7QUFDOUJJLGFBQU8sRUFBRTtBQURxQixLQTFCN0IsYUF2S2lDO0FBc014QytDLFlBQVEsRUFBRSxFQXRNOEI7QUF1TXhDQyxZQUFRLEVBQUUsRUF2TThCO0FBd014Q0MsWUFBUSxFQUFFO0FBQ1JqRCxhQUFPLEVBQUUsTUFERDtBQUVSc0IsZ0JBQVUsRUFBRSxRQUZKO0FBR1JyQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FIQTtBQUlSVyxlQUFTLEVBQUUsTUFKSDtBQUtSMEIsb0JBQWMsRUFBRSxZQUxSO0FBTVIscUJBQWU7QUFDYnhCLG9CQUFZLEVBQUVoQixLQUFLLENBQUNHLE9BQU4sRUFERDtBQUViYyxlQUFPLEVBQUUsT0FGSTtBQUdiVCxhQUFLLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjcUIsU0FBZCxDQUF3Qkg7QUFIbEIsT0FOUDtBQVdSLHFCQUFlO0FBQ2J3QyxZQUFJLEVBQUUsQ0FETztBQUViM0QsYUFBSyxFQUFFUixLQUFLLENBQUNTLE9BQU4sQ0FBY2lCLE9BQWQsQ0FBc0JDO0FBRmhCLE9BWFA7QUFlUixrQkFBWTtBQUNWcUIsb0JBQVksRUFBRSxDQURKO0FBRVYzQixnQkFBUSxFQUFFLFFBRkE7QUFHVm5CLGNBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhFO0FBSVZlLGFBQUssRUFBRSxFQUpHO0FBS1YwQixjQUFNLEVBQUUsRUFMRTtBQU1WLGlCQUFTO0FBQ1AzQixpQkFBTyxFQUFFLE9BREY7QUFFUG1ELG1CQUFTLEVBQUUsTUFGSjtBQUdQbEQsZUFBSyxFQUFFO0FBSEE7QUFOQyxPQWZKO0FBMkJSLGFBQU87QUFDTEssZ0JBQVEsRUFBRTtBQURMO0FBM0JDO0FBeE04QixHQUFMO0FBQUEsQ0FBTixDQUEvQjtBQXlPZXpCLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNmN2Q1MDNjZmYyNzNmZGI4NjczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgZmFkZSwgbGlnaHRlbiwgZGFya2VuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xyXG5cclxuY29uc3QgZm9vdGVyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGxpbms6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAxLjUpLFxyXG4gIH0sXHJcbiAgaW52ZXJ0OiB7fSxcclxuICBmb290ZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxMCwgMCksXHJcbiAgICAnJiBwJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiB1bCc6IHtcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgfSxcclxuICAgICcmIGxpJzoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICAgIHdpZHRoOiAnNDclJ1xyXG4gICAgICB9LFxyXG4gICAgICAnJiBhJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lICFpbXBvcnRhbnQnLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiRpbnZlcnQnOiB7XHJcbiAgICAgICcmIHAnOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5XHJcbiAgICAgIH0sXHJcbiAgICAgICcmIGxpIGEnOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5XHJcbiAgICAgIH0sXHJcbiAgICAgICcmICRsb2dvJzoge1xyXG4gICAgICAgICcmIGg2Jzoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkdGl0bGUnOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cclxuICAgICAgfSxcclxuICAgICAgJyYgJGJsb2dJdGVtJzoge1xyXG4gICAgICAgICcmICRjYXRlZ29yeSc6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnJiAkc2VsZWN0TGFuZyc6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICAgJyYgc3ZnJzoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXHJcbiAgfSxcclxuICBxdWlja0xpbmtzOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSlcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgICcmIHN2Zyc6IHtcclxuICAgICAgd2lkdGg6IDY0LFxyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygpLFxyXG4gICAgfSxcclxuICAgICcmIGg2Jzoge1xyXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxyXG4gICAgICBmb250U2l6ZTogMjgsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICB9XHJcbiAgfSxcclxuICBmb290ZXJEZXNjOiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgfSxcclxuICBzb2NtZWQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICcmIGJ1dHRvbic6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKCksXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIHdpZHRoOiAzNixcclxuICAgICAgaGVpZ2h0OiAzNixcclxuICAgICAgJyYgaSc6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBpJzoge1xyXG4gICAgICBmb250U2l6ZTogMjRcclxuICAgIH1cclxuICB9LFxyXG4gIGljb246IHt9LFxyXG4gIHNlbGVjdExhbmc6IHtcclxuICAgIGRpc3BsYXk6ICdpbmhlcml0JyxcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwLCA0KSxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICcmICRpY29uJzoge1xyXG4gICAgICB0b3A6IDI5LFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIH0sXHJcbiAgICAnJiBzdmcnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodCxcclxuICAgIH0sXHJcbiAgICAnJiBmaWVsZHNldCc6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgICAgYm94U2hhZG93OiAnMCAxLjVweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpJyxcclxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7ZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsIDAuNSl9ICFpbXBvcnRhbnRgLFxyXG4gICAgICAnJiBsZWdlbmQnOiB7XHJcbiAgICAgICAgdG9wOiA1LFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke2ZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LCAwLjUpfWBcclxuICAgICAgfSxcclxuICAgICAgJyYgKyBkaXYgKyBkaXYnOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLjUsIDEuNSwgMS41LCA0KSxcclxuICAgICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDMycHgpJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VsZWN0TWVudToge1xyXG4gICAgd2lkdGg6IDE2MCxcclxuICAgIGJhY2tncm91bmQ6ICdub25lICFpbXBvcnRhbnQnXHJcbiAgfSxcclxuICBmb290ZXJDb3VudGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLC8vYGxpbmVhci1ncmFkaWVudCgtMTMwZGVnLCAke3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayA6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59IC0yMCUsICR7dGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSA3MCUpYCxcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMTApLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDI1KSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hsJyldOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMTUpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVjb1RvcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IC0yMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB3aWR0aDogMTI4MCxcclxuICAgIGhlaWdodDogNDAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIpJ1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgxNDAwKV06IHtcclxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMiwgMSknXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4bCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS40LCAxKScsXHJcbiAgICAgIGxlZnQ6IC0zMDBcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgJyYgc3ZnJzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssIDAuNikgOiBsaWdodGVuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCAwLjg0KSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNhdGVnb3J5OiB7fSxcclxuICBsaXN0VGV4dDoge30sXHJcbiAgYmxvZ0l0ZW06IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDApLFxyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgJyYgJGNhdGVnb3J5Jzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoKSxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0XHJcbiAgICB9LFxyXG4gICAgJyYgJGxpc3RUZXh0Jzoge1xyXG4gICAgICBmbGV4OiAxLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0XHJcbiAgICB9LFxyXG4gICAgJyYgZmlndXJlJzoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEsIDIsIDAsIDApLFxyXG4gICAgICB3aWR0aDogODAsXHJcbiAgICAgIGhlaWdodDogNTYsXHJcbiAgICAgICcmIGltZyc6IHtcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiBwJzoge1xyXG4gICAgICBmb250U2l6ZTogMTMsXHJcbiAgICB9XHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyU3R5bGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9