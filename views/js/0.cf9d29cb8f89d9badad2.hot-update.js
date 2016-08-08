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
	      this.loadData("check-login");
	    }
	  }, {
	    key: 'loadData',
	    value: function loadData(page) {
	      var _this2 = this;

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
	        _react2.default.createElement(_mypage2.default, { ref: 'MyPage', show: this.show, data: this.state.data_mypage }),
	        _react2.default.createElement(_add_poll2.default, { ref: 'Add_Poll', show: this.show, setNotif: this.setNotif, prev_page: this.state.prev_page }),
	        _react2.default.createElement(_a_poll2.default, { ref: 'A_Poll', show: this.show })
	      );
	    }
	  }]);

	  return Main;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('app'));

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _page = __webpack_require__(196);

	var _page2 = _interopRequireDefault(_page);

	var _option = __webpack_require__(206);

	var _option2 = _interopRequireDefault(_option);

	var _button_submit = __webpack_require__(209);

	var _button_submit2 = _interopRequireDefault(_button_submit);

	var _button_cancel = __webpack_require__(212);

	var _button_cancel2 = _interopRequireDefault(_button_cancel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(215);

	var Add_Poll = function (_Page) {
	  _inherits(Add_Poll, _Page);

	  function Add_Poll(props) {
	    _classCallCheck(this, Add_Poll);

	    //Binding

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Add_Poll).call(this, props));

	    _this.submit_poll = _this.submit_poll.bind(_this);
	    _this.reset_add_poll = _this.reset_add_poll.bind(_this);

	    //Declare state for rendering
	    _this.state.className = "add_poll";
	    _this.state.display = "hidden";

	    return _this;
	  }

	  _createClass(Add_Poll, [{
	    key: 'submit_poll',
	    value: function submit_poll() {
	      var _this2 = this;

	      var name = this.refs.Poll_Name.getName();
	      var options = this.refs.Options_List.getOptions();

	      if (name.length === 0) {
	        this.props.setNotif("Add_Poll", "ERROR", "Name field is empty");
	        return;
	      }

	      if (options.length === 0) {
	        this.props.setNotif("Add_Poll", "ERROR", "There is no option in the list");
	        return;
	      }

	      var result = {
	        name: name,
	        options: options
	      };

	      var xhr = new XMLHttpRequest();
	      xhr.open('POST', "/submit_poll", true);
	      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	      xhr.send(JSON.stringify(result));

	      this.props.setNotif("Add_Poll", "ADDING SUCCESS", "Poll " + result.name + " added !!!", 1000);

	      setTimeout(function () {
	        _this2.reset_add_poll();
	        _this2.props.show(_this2.props.prev_page);
	      }, 1000);
	    }
	  }, {
	    key: 'reset_add_poll',
	    value: function reset_add_poll() {
	      if (this.refs.Poll_Name.getName().length !== 0 && this.refs.Options_List.getOptions().length !== 0) {
	        this.refs.Poll_Name.reset();
	        this.refs.Options_List.reset();
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
	          { className: 'content' },
	          _react2.default.createElement(
	            'div',
	            { className: 'header' },
	            'ADD NEW POLL'
	          ),
	          _react2.default.createElement(Poll_Name, { ref: 'Poll_Name', setNotif: this.props.setNotif }),
	          _react2.default.createElement(Options_List, { ref: 'Options_List', setNotif: this.props.setNotif }),
	          _react2.default.createElement(
	            'div',
	            { className: 'footer' },
	            _react2.default.createElement(_button_submit2.default, { parent: 'add_poll', submit_poll: this.submit_poll, show: this.props.show,
	              reset_add_poll: this.reset_add_poll, prev_page: this.props.prev_page }),
	            _react2.default.createElement(_button_cancel2.default, { prev_page: this.props.prev_page, show: this.props.show,
	              reset_add_poll: this.reset_add_poll })
	          )
	        )
	      );
	    }
	  }]);

	  return Add_Poll;
	}(_page2.default);

	;

	var Poll_Name = function (_React$Component) {
	  _inherits(Poll_Name, _React$Component);

	  function Poll_Name(props) {
	    _classCallCheck(this, Poll_Name);

	    //Binding

	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Poll_Name).call(this, props));

	    _this3.onChange = _this3.onChange.bind(_this3);
	    _this3.getName = _this3.getName.bind(_this3);
	    _this3.reset = _this3.reset.bind(_this3);

	    //Set state
	    _this3.state = {
	      value: "",
	      maxLength: 20
	    };

	    return _this3;
	  }

	  _createClass(Poll_Name, [{
	    key: 'reset',
	    value: function reset() {
	      this.setState({
	        value: ""
	      });
	    }
	  }, {
	    key: 'getName',
	    value: function getName() {
	      return this.state.value;
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(event) {
	      if (event.target.value.length <= this.state.maxLength) {
	        this.setState({
	          value: event.target.value.toUpperCase()
	        });
	      } else {
	        this.props.setNotif("Add_Poll", "ERROR", "Maximum characters reached");
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'body_block poll_name' },
	        _react2.default.createElement(
	          'span',
	          { className: 'title' },
	          'NAME: '
	        ),
	        _react2.default.createElement('input', { className: 'value', type: 'text', name: 'poll_name_value',
	          placeholder: 'ENTER NAME OF THE POLL HERE ...',
	          onChange: this.onChange,
	          value: this.state.value
	        })
	      );
	    }
	  }]);

	  return Poll_Name;
	}(_react2.default.Component);

	var Options_List = function (_React$Component2) {
	  _inherits(Options_List, _React$Component2);

	  function Options_List(props) {
	    _classCallCheck(this, Options_List);

	    //Binding

	    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Options_List).call(this, props));

	    _this4.update = _this4.update.bind(_this4);
	    _this4.onChange = _this4.onChange.bind(_this4);
	    _this4.onKeyDown = _this4.onKeyDown.bind(_this4);
	    _this4.delete_option = _this4.delete_option.bind(_this4);

	    _this4.state = {
	      list: [],
	      options: [],
	      input_value: ""
	    };

	    return _this4;
	  }

	  _createClass(Options_List, [{
	    key: 'onChange',
	    value: function onChange(event) {
	      if (event.target.value.length > 35) {
	        this.props.setNotif("Add_Poll", "ERROR", "Maximum characters reached");
	        return;
	      }

	      this.setState({
	        input_value: event.target.value
	      });
	    }
	  }, {
	    key: 'onKeyDown',
	    value: function onKeyDown(event) {
	      if (event.keyCode === 13 && event.target.value !== "") {
	        if (this.state.options.length >= 8) {
	          this.props.setNotif("Add_Poll", "ERROR", "Maximum 8 options");
	          return;
	        }

	        //Update options list
	        this.state.options.push(event.target.value);

	        //Rendering
	        this.update();

	        //Clear textinput
	        this.setState({
	          input_value: ""
	        });
	      }
	    }
	  }, {
	    key: 'delete_option',
	    value: function delete_option(option) {
	      var index = this.state.options.indexOf(option);
	      this.state.options.splice(index, 1);
	      this.update();
	    }
	  }, {
	    key: 'getOptions',
	    value: function getOptions() {
	      return this.state.options;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.state.options = [];
	      this.update();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var _this5 = this;

	      var list = [];

	      this.state.options.forEach(function (e, i) {
	        list.push(_react2.default.createElement(_option2.default, { name: e, key: i, delete_option: _this5.delete_option }));
	      });

	      this.setState({
	        list: list
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'options_list' },
	        _react2.default.createElement(
	          'div',
	          { className: 'body_block list' },
	          this.state.list
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'body_block input' },
	          _react2.default.createElement('input', { className: 'option_input', type: 'text', name: 'option_input',
	            placeholder: 'Type your option here. Press ENTER when finish ...',
	            value: this.state.input_value, onChange: this.onChange,
	            onKeyDown: this.onKeyDown })
	        )
	      );
	    }
	  }]);

	  return Options_List;
	}(_react2.default.Component);

	;

	module.exports = Add_Poll;

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(207);

	var Option = function (_React$Component) {
	  _inherits(Option, _React$Component);

	  function Option(props) {
	    _classCallCheck(this, Option);

	    //Binding

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Option).call(this, props));

	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }

	  _createClass(Option, [{
	    key: 'onClick',
	    value: function onClick() {
	      this.props.delete_option(this.props.name);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'option' },
	        _react2.default.createElement(
	          'div',
	          { className: 'option_name' },
	          this.props.name
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'delete_sign_wrapper', onClick: this.onClick },
	          _react2.default.createElement('img', { className: 'delete_sign', src: './../imgs/delete.png' })
	        )
	      );
	    }
	  }]);

	  return Option;
	}(_react2.default.Component);

	;

	module.exports = Option;

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(208);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(208, function() {
				var newContent = __webpack_require__(208);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, ".option {\n  box-sizing: border-box;\n  background-color: #276B5C;\n  margin-bottom: 5px;\n  height: 35px;\n  border-radius: 8px; }\n\n.option_name {\n  position: relative;\n  left: 8px;\n  top: 6px;\n  display: inline;\n  font-size: 19px;\n  font-weight: bolder;\n  color: white; }\n\n.delete_sign_wrapper {\n  position: absolute;\n  right: 25px;\n  padding-top: 3px;\n  display: inline-block;\n  cursor: pointer; }\n\n.delete_sign {\n  width: 29px;\n  height: 29px; }\n", ""]);

	// exports


/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _button = __webpack_require__(174);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(210);

	var Button_Submit = function (_Button) {
	  _inherits(Button_Submit, _Button);

	  function Button_Submit(props) {
	    _classCallCheck(this, Button_Submit);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button_Submit).call(this, props));

	    _this.state.name = "Submit";
	    _this.state.className = "button_submit";
	    return _this;
	  }

	  _createClass(Button_Submit, [{
	    key: "onClick",
	    value: function onClick() {
	      if (this.props.parent === "add_poll") {
	        this.props.submit_poll();
	      }
	    }
	  }]);

	  return Button_Submit;
	}(_button2.default);

	module.exports = Button_Submit;

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(211);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(211, function() {
				var newContent = __webpack_require__(211);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, ".button_submit {\n  background-color: #6d536f;\n  color: white;\n  margin-right: 5px; }\n  .button_submit:hover {\n    background-color: #a185a3;\n    color: black; }\n", ""]);

	// exports


/***/ },

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

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(214);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(214, function() {
				var newContent = __webpack_require__(214);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, ".button_cancel {\n  background-color: #bb5757;\n  color: white; }\n  .button_cancel:hover {\n    background-color: #d8a0a0;\n    color: black; }\n", ""]);

	// exports


/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(216);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(216, function() {
				var newContent = __webpack_require__(216);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, ".add_poll {\n  position: relative;\n  top: 100px;\n  width: 80%;\n  max-width: 600px;\n  margin: auto;\n  margin-bottom: 20px;\n  border: 2px solid;\n  box-shadow: 4px 4px 4px 4px gray; }\n  .add_poll .header {\n    box-sizing: border-box;\n    background-color: #11542D;\n    color: white;\n    padding: 8px;\n    font-size: 22px;\n    font-weight: bold;\n    text-align: center;\n    height: 40px; }\n  .add_poll .body_block {\n    border: 1px solid;\n    border-radius: 6px;\n    margin: 10px;\n    padding: 10px; }\n  .add_poll .poll_name .title {\n    font-size: 24px;\n    font-weight: bold;\n    width: 20%; }\n  .add_poll .poll_name .value {\n    width: 80%;\n    height: 30px;\n    font-size: 24px;\n    font-weight: bold;\n    color: #E07243; }\n  .add_poll .footer {\n    background-color: gray;\n    height: 50px;\n    text-align: center;\n    padding-top: 5px; }\n  .add_poll .option_input {\n    width: 100%;\n    margin: auto;\n    height: 25px; }\n", ""]);

	// exports


/***/ }

})