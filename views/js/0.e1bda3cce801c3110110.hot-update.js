webpackHotUpdate(0,{

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _button = __webpack_require__(174);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(213);

	var Button_Cancel = function (_Button) {
	  _inherits(Button_Cancel, _Button);

	  function Button_Cancel(props) {
	    _classCallCheck(this, Button_Cancel);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button_Cancel).call(this, props));

	    _this.state.name = "Cancel";
	    _this.state.className = "button_cancel";
	    return _this;
	  }

	  _createClass(Button_Cancel, [{
	    key: "onClick",
	    value: function onClick() {
	      this.props.show(this.props.prev_page);
	      this.props.reset_add_poll();
	    }
	  }]);

	  return Button_Cancel;
	}(_button2.default);

	module.exports = Button_Cancel;

/***/ }

})