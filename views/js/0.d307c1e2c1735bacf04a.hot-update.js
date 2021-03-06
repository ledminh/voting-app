webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _header_bar = __webpack_require__(172);

	var _header_bar2 = _interopRequireDefault(_header_bar);

	var _homepage = __webpack_require__(195);

	var _homepage2 = _interopRequireDefault(_homepage);

	var _mypage = __webpack_require__(202);

	var _mypage2 = _interopRequireDefault(_mypage);

	var _add_poll = __webpack_require__(205);

	var _add_poll2 = _interopRequireDefault(_add_poll);

	var _a_poll = __webpack_require__(217);

	var _a_poll2 = _interopRequireDefault(_a_poll);

	var _notif = __webpack_require__(227);

	var _notif2 = _interopRequireDefault(_notif);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(230);

	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);

	  function Main(props) {
	    _classCallCheck(this, Main);

	    //Binding

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));

	    _this.hideAll = _this.hideAll.bind(_this);
	    _this.show = _this.show.bind(_this);
	    _this.setNotif = _this.setNotif.bind(_this);
	    _this.loadData = _this.loadData.bind(_this);

	    _this.state = {
	      notif_data: {
	        header: "",
	        body: ""
	      },
	      current_page: "",
	      prev_page: "",
	      user_profile: {},
	      data_mypage: {}

	    };

	    return _this;
	  }

	  _createClass(Main, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.loadData("check-login", "main");
	    }
	  }, {
	    key: 'loadData',
	    value: function loadData(page, callBy) {
	      var _this2 = this;

	      console.log(callBy);
	      var xhr = new XMLHttpRequest();
	      var url;

	      //Set up url
	      if (page === "MyPage") {
	        url = "/mypage";
	      } else if (page === "check-login") {
	        url = "/check-login";
	      }

	      xhr.open('GET', url, true);
	      xhr.send();

	      //onreadystatechange
	      xhr.onreadystatechange = function () {
	        if (xhr.readyState === 4 && xhr.status === 200) {

	          var data = JSON.parse(xhr.response);

	          if (page === "MyPage") {
	            _this2.setState({
	              data_mypage: data
	            });
	          }

	          if (page === "check-login") {
	            _this2.setState({
	              user_profile: data,
	              current_page: "HomePage"
	            });
	          }
	        }
	      };
	    }
	  }, {
	    key: 'hideAll',
	    value: function hideAll() {
	      this.refs.HomePage.hide(true);
	      this.refs.MyPage.hide(true);
	      this.refs.Add_Poll.hide(true);
	      this.refs.A_Poll.hide(true);
	    }
	  }, {
	    key: 'setNotif',
	    value: function setNotif(parent, header, body, timeout) {
	      var _this3 = this;

	      var thisTimeOut;

	      this.setState({
	        notif_data: {
	          header: header,
	          body: body
	        }
	      });

	      this.refs.Notif.hide(false);
	      this.refs[parent].blur(true);

	      if (timeout) thisTimeOut = timeout;else {
	        thisTimeOut = 500;
	      }

	      setTimeout(function () {
	        _this3.refs[parent].blur(false);
	        _this3.refs.Notif.hide(true);
	      }, thisTimeOut);
	    }
	  }, {
	    key: 'show',
	    value: function show(page) {
	      this.hideAll();
	      this.refs[page].hide(false);

	      this.state.prev_page = this.state.current_page;
	      this.setState({
	        current_page: page
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        { className: 'main' },
	        _react2.default.createElement(_header_bar2.default, { ref: 'Header_Bar', show: this.show, current_page: this.state.current_page,
	          user_profile: this.state.user_profile, loadData: this.loadData }),
	        _react2.default.createElement(_notif2.default, { ref: 'Notif', data: this.state.notif_data }),
	        _react2.default.createElement(_homepage2.default, { ref: 'HomePage', show: this.show }),
	        _react2.default.createElement(_mypage2.default, { ref: 'MyPage', show: this.show, data: this.state.data_mypage,
	          loadData: this.loadData, current_page: this.state.current_page }),
	        _react2.default.createElement(_add_poll2.default, { ref: 'Add_Poll', show: this.show, setNotif: this.setNotif,
	          prev_page: this.state.prev_page }),
	        _react2.default.createElement(_a_poll2.default, { ref: 'A_Poll', show: this.show })
	      );
	    }
	  }]);

	  return Main;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('app'));

/***/ },

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