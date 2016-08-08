webpackHotUpdate(0,{

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _page = __webpack_require__(196);

	var _page2 = _interopRequireDefault(_page);

	var _poll_tab = __webpack_require__(197);

	var _poll_tab2 = _interopRequireDefault(_poll_tab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(200);

	var HomePage = function (_Page) {
	  _inherits(HomePage, _Page);

	  function HomePage(props) {
	    _classCallCheck(this, HomePage);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HomePage).call(this, props));

	    _this.state.className = "homepage";
	    _this.state.display = "";

	    _this.state.content = _react2.default.createElement(
	      "div",
	      { className: "content" },
	      _react2.default.createElement(
	        "div",
	        { className: "header" },
	        "LIST OF POLLS"
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "body" },
	        _react2.default.createElement(_poll_tab2.default, { name: "This is the 1st Poll" }),
	        _react2.default.createElement(_poll_tab2.default, { name: "This is the 2nd Poll" }),
	        _react2.default.createElement(_poll_tab2.default, { name: "This is the 3rd Poll" })
	      ),
	      _react2.default.createElement("div", { className: "footer" })
	    );
	    return _this;
	  }

	  return HomePage;
	}(_page2.default);

	;

	module.exports = HomePage;

/***/ }

})