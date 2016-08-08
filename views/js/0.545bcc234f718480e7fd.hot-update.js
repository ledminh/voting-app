webpackHotUpdate(0,{

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(191);

	var Profile_Area = function (_React$Component) {
	  _inherits(Profile_Area, _React$Component);

	  function Profile_Area(props) {
	    _classCallCheck(this, Profile_Area);

	    //Binding

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Profile_Area).call(this, props));

	    _this.onClick = _this.onClick.bind(_this);
	    _this.light = _this.light.bind(_this);

	    _this.state = {
	      photo: "",
	      username: "",
	      display: ""
	    };
	    return _this;
	  }

	  _createClass(Profile_Area, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.user_profile.username) {
	        this.setState({
	          username: nextProps.user_profile.username,
	          photo: nextProps.user_profile.photo
	        });
	      }

	      if (nextProps.current_page === "MyPage") {
	        this.light("on");
	      } else {
	        this.light("off");
	      }
	    }
	  }, {
	    key: 'light',
	    value: function light(status) {
	      if (status === "on") {
	        this.setState({
	          display: "current"
	        });
	      }

	      if (status === "off") {
	        this.setState({
	          display: ""
	        });
	      }
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick() {
	      this.props.show("MyPage");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'button',
	        { className: "profile_area " + this.state.display, onClick: this.onClick },
	        _react2.default.createElement('img', { className: 'profile_picture', src: this.props.user_profile.photo }),
	        _react2.default.createElement(
	          'div',
	          { className: 'profile_greeting' },
	          'Hello, ',
	          this.props.user_profile.username,
	          ' !!!'
	        )
	      );
	    }
	  }]);

	  return Profile_Area;
	}(_react2.default.Component);

	;

	module.exports = Profile_Area;

/***/ }

})