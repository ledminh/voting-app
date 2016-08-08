webpackHotUpdate(0,{

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page = function (_React$Component) {
	  _inherits(Page, _React$Component);

	  function Page(props) {
	    _classCallCheck(this, Page);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Page).call(this, props));

	    _this.state = {
	      className: "",
	      content: "",
	      display: ""
	    };

	    //Binding
	    _this.hide = _this.hide.bind(_this);
	    _this.blur = _this.blur.bind(_this);
	    _this.loadContent = _this.loadContent.bind(_this);
	    return _this;
	  }

	  _createClass(Page, [{
	    key: "blur",
	    value: function blur(yes) {
	      if (yes) this.state.display = "blur";else {
	        this.setState({
	          display: ""
	        });
	      }
	    }
	  }, {
	    key: "loadContent",
	    value: function loadContent() {}
	  }, {
	    key: "hide",
	    value: function hide(yes) {
	      if (yes) {
	        this.setState({
	          display: "hidden"
	        });
	      } else {
	        this.setState({
	          display: ""
	        });
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: this.state.className + " " + this.state.display },
	        this.state.content
	      );
	    }
	  }]);

	  return Page;
	}(_react2.default.Component);

	;

	module.exports = Page;

/***/ }

})