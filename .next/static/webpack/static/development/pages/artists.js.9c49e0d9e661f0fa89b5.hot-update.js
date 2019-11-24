webpackHotUpdate("static/development/pages/artists.js",{

/***/ "./components/artist-item.tsx":
/*!************************************!*\
  !*** ./components/artist-item.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/paul/Documents/Coding/agency-website/components/artist-item.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmargin-top: 5px;\n\tfont-size: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tbackground-repeat: no-repeat\n\tbackground-size: cover;\n\tbackground-position: center;\n\theight: 150px;\n\twidth: 150px;\n\tborder-radius: 50%;\n\tborder: 1px solid #333;\n\tbackground-image: url(\"", "\");\n\tcursor: pointer;\n\t\t\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tlist-style-type: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var StyledArtistListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject());
var StyledProfileImage = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])("div")(_templateObject2(), function (props) {
  return props.profileImage;
});
var StyledArtistName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject3());

var ArtistItem = function ArtistItem(props) {
  var profileImageUrl = props.profileImageUrl,
      name = props.name,
      id = props.id;
  console.log(profileImageUrl);
  return __jsx(StyledArtistListItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/" + id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(StyledProfileImage, {
    profileImage: profileImageUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/" + id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(StyledArtistName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, name)));
};

/* harmony default export */ __webpack_exports__["default"] = (ArtistItem);

/***/ })

})
//# sourceMappingURL=artists.js.9c49e0d9e661f0fa89b5.hot-update.js.map