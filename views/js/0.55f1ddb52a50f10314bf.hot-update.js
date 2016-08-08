webpackHotUpdate(0,{

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _page = __webpack_require__(196);

	var _page2 = _interopRequireDefault(_page);

	var _button_a_poll_submit = __webpack_require__(218);

	var _button_a_poll_submit2 = _interopRequireDefault(_button_a_poll_submit);

	var _graph_machine = __webpack_require__(221);

	var _graph_machine2 = _interopRequireDefault(_graph_machine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(225);

	var A_Poll = function (_Page) {
	  _inherits(A_Poll, _Page);

	  function A_Poll(props) {
	    _classCallCheck(this, A_Poll);

	    //Binding

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(A_Poll).call(this, props));

	    _this.addVote = _this.addVote.bind(_this);
	    _this.selectHandler = _this.selectHandler.bind(_this);

	    _this.state.className = "a_poll";
	    _this.state.display = "hidden";
	    _this.state.options = [];
	    _this.state.chosen = "";
	    return _this;
	  }

	  _createClass(A_Poll, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;

	      if (nextProps.data !== this.props.data) {
	        (0, _graph_machine2.default)(nextProps.data.options);

	        this.state.options = [];

	        nextProps.data.options.forEach(function (option, i) {
	          _this2.state.options.push(_react2.default.createElement(
	            'option',
	            { key: i, value: option.value },
	            option.value
	          ));
	        });

	        this.forceUpdate();
	      }
	    }
	  }, {
	    key: 'addVote',
	    value: function addVote() {}
	  }, {
	    key: 'selectHandler',
	    value: function selectHandler(event) {
	      this.state.chosen = event.target.value;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.state.className + " " + this.state.display },
	        _react2.default.createElement(
	          'div',
	          { className: 'graph_header' },
	          this.props.data.name
	        ),
	        _react2.default.createElement('div', { className: 'graph_wrapper' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'voting_panel' },
	          _react2.default.createElement(
	            'div',
	            { className: 'option_list_wrapper' },
	            _react2.default.createElement(
	              'select',
	              { className: 'option_list', onChange: this.selectHandler },
	              _react2.default.createElement(
	                'option',
	                { value: 'Make a choice ...' },
	                'Make a choice...'
	              ),
	              this.state.options
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'submit' },
	            _react2.default.createElement(_button_a_poll_submit2.default, { addVote: this.addVote })
	          )
	        )
	      );
	    }
	  }]);

	  return A_Poll;
	}(_page2.default);

	;

	module.exports = A_Poll;

/***/ }

})