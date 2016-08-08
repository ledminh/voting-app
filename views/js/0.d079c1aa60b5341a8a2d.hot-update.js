webpackHotUpdate(0,{

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

	    _this.state.content = _react2.default.createElement(
	      'div',
	      { className: 'content' },
	      _react2.default.createElement(
	        'div',
	        { className: 'header' },
	        'ADD NEW POLL'
	      ),
	      _react2.default.createElement(Poll_Name, { ref: 'Poll_Name', setNotif: _this.props.setNotif }),
	      _react2.default.createElement(Options_List, { ref: 'Options_List', setNotif: _this.props.setNotif }),
	      _react2.default.createElement(
	        'div',
	        { className: 'footer' },
	        _react2.default.createElement(_button_submit2.default, { parent: 'add_poll', submit_poll: _this.submit_poll,
	          reset_add_poll: _this.reset_add_poll }),
	        _react2.default.createElement(_button_cancel2.default, null)
	      )
	    );

	    return _this;
	  }

	  _createClass(Add_Poll, [{
	    key: 'submit_poll',
	    value: function submit_poll() {
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
	    }
	  }, {
	    key: 'reset_add_poll',
	    value: function reset_add_poll() {
	      if (this.refs.Poll_Name.getName().length !== 0 && this.refs.Options_List.getOptions().length !== 0) {
	        this.refs.Poll_Name.reset();
	        this.refs.Options_List.reset();
	      }
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

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Poll_Name).call(this, props));

	    _this2.onChange = _this2.onChange.bind(_this2);
	    _this2.getName = _this2.getName.bind(_this2);
	    _this2.reset = _this2.reset.bind(_this2);

	    //Set state
	    _this2.state = {
	      value: "",
	      maxLength: 20
	    };

	    return _this2;
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

	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Options_List).call(this, props));

	    _this3.update = _this3.update.bind(_this3);
	    _this3.onChange = _this3.onChange.bind(_this3);
	    _this3.onKeyDown = _this3.onKeyDown.bind(_this3);
	    _this3.delete_option = _this3.delete_option.bind(_this3);

	    _this3.state = {
	      list: [],
	      options: [],
	      input_value: ""
	    };

	    return _this3;
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
	        console.log(this.state.options.length);
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
	      var _this4 = this;

	      var list = [];

	      this.state.options.forEach(function (e, i) {
	        list.push(_react2.default.createElement(_option2.default, { name: e, key: i, delete_option: _this4.delete_option }));
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

/***/ }

})