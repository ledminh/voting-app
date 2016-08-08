webpackHotUpdate(0,{

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

	__webpack_require__(203);

	var MyPage = function (_Page) {
	  _inherits(MyPage, _Page);

	  function MyPage(props) {
	    _classCallCheck(this, MyPage);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyPage).call(this, props));

	    _this.state.className = "mypage";
	    _this.state.display = "hidden";
	    _this.state.data = {
	      username: "",
	      photo: "",
	      num_polls: "",
	      my_polls: []
	    };

	    return _this;
	  }

	  _createClass(MyPage, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;

	      if (nextProps.data.username && nextProps.data.username !== this.props.data.username || nextProps.data.num_polls !== this.props.data.num_polls || nextProps.data.my_polls !== this.props.data.my_polls) {

	        this.state.data = {
	          username: nextProps.data.username,
	          photo: nextProps.data.photo,
	          num_polls: nextProps.data.num_polls,
	          my_polls: []
	        };

	        nextProps.data.my_polls.forEach(function (poll) {
	          _this2.state.data.my_polls.push(_react2.default.createElement(_poll_tab2.default, { key: poll.id, name: poll.name,
	            id: poll.id, show: _this2.props.show,
	            loadData: _this2.props.loadData,
	            deletable: 'true' }));
	        });

	        this.forceUpdate();
	      }
	    }
	  }, {
	    key: 'hide',
	    value: function hide(yes) {
	      if (yes) {
	        this.setState({
	          display: "hidden"
	        });
	      } else {
	        this.props.loadData("MyPage");
	        this.setState({
	          display: ""
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.state.className + " " + this.state.display },
	        _react2.default.createElement(
	          'div',
	          { className: 'header' },
	          'MY PAGE'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'body_block profile' },
	          _react2.default.createElement(
	            'div',
	            { className: 'header' },
	            'MY PROFILE'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'body' },
	            _react2.default.createElement(
	              'p',
	              { className: 'mypage_profile_picture' },
	              _react2.default.createElement('img', { className: 'profile_picture', src: this.state.data.photo })
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                { className: 'mypage_name title' },
	                'Name: '
	              ),
	              _react2.default.createElement(
	                'span',
	                { className: 'mypage_name_value' },
	                this.state.data.username.toUpperCase()
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                { className: 'mypage_num_poll title' },
	                'Number of Polls: '
	              ),
	              _react2.default.createElement(
	                'span',
	                { className: 'mypage_num_poll_value' },
	                this.state.data.num_polls
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'body_block my_poll' },
	          _react2.default.createElement(
	            'div',
	            { className: 'header' },
	            'MY POLLS'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'body' },
	            this.state.data.my_polls
	          )
	        ),
	        _react2.default.createElement('div', { className: 'footer' })
	      );
	    }
	  }]);

	  return MyPage;
	}(_page2.default);

	;

	module.exports = MyPage;

/***/ }

})