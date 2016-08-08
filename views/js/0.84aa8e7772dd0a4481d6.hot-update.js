webpackHotUpdate(0,{

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(198);

	var Poll_Tab = function (_React$Component) {
	  _inherits(Poll_Tab, _React$Component);

	  function Poll_Tab(props) {
	    _classCallCheck(this, Poll_Tab);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Poll_Tab).call(this, props));

	    _this.state = {
	      delete_icon: ""
	    };

	    //Binding
	    _this.onClick = _this.onClick.bind(_this);
	    _this.delete = _this.delete.bind(_this);

	    return _this;
	  }

	  _createClass(Poll_Tab, [{
	    key: 'onClick',
	    value: function onClick() {
	      this.props.loadData("A_Poll", this.props.id);
	      this.props.show("A_Poll");
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {}
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      console.log(nextProps.deletable);

	      if (nextProps.deletable) {
	        this.setState({
	          delete_icon: _react2.default.createElement(
	            'div',
	            { className: 'poll_tab_delete_sign_wrapper', onClick: this.delete },
	            _react2.default.createElement('img', { className: 'delete_sign', src: './../imgs/delete.png' })
	          )
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'poll_tab', onClick: this.onClick },
	        _react2.default.createElement(
	          'div',
	          { className: 'name' },
	          this.props.name
	        ),
	        this.state.delete_icon
	      );
	    }
	  }]);

	  return Poll_Tab;
	}(_react2.default.Component);

	;

	module.exports = Poll_Tab;

/***/ }

})