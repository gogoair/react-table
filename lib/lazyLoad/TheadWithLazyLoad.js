'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var THead = function (_Component) {
  _inherits(THead, _Component);

  function THead(props) {
    _classCallCheck(this, THead);

    var _this = _possibleConstructorReturn(this, (THead.__proto__ || Object.getPrototypeOf(THead)).call(this, props));

    _this.state = {
      scrollOffset: 0
    };
    _this.setScroll = _this.setScroll.bind(_this);
    return _this;
  }

  _createClass(THead, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var eventName = 'tbodyscroll' + this.props.lazyLoadUniqueID;
      document.addEventListener(eventName, this.setScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var eventName = 'tbodyscroll' + this.props.lazyLoadUniqueID;
      document.removeEventListener(eventName, this.setScroll);
    }
  }, {
    key: 'setScroll',
    value: function setScroll(event) {
      var scrollOffset = event.detail.horizontalScroll - 2 * event.detail.horizontalScroll;
      this.setState({ scrollOffset: scrollOffset });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          style = _props.style,
          lazyLoadUniqueID = _props.lazyLoadUniqueID,
          rest = _objectWithoutProperties(_props, ['children', 'className', 'style', 'lazyLoadUniqueID']);

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)('rt-thead', className),
          style: _extends({}, style, { marginLeft: this.state.scrollOffset })
        }, rest),
        children
      );
    }
  }]);

  return THead;
}(_react.Component);

THead.propTypes = {
  lazyLoadUniqueID: _propTypes2.default.any.isRequired
};
exports.default = THead;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXp5TG9hZC9UaGVhZFdpdGhMYXp5TG9hZC5qcyJdLCJuYW1lcyI6WyJUSGVhZCIsInByb3BzIiwic3RhdGUiLCJzY3JvbGxPZmZzZXQiLCJzZXRTY3JvbGwiLCJiaW5kIiwiZXZlbnROYW1lIiwibGF6eUxvYWRVbmlxdWVJRCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRldGFpbCIsImhvcml6b250YWxTY3JvbGwiLCJzZXRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJyZXN0IiwibWFyZ2luTGVmdCIsInByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7QUFDbkIsaUJBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSw4R0FDWkEsS0FEWTs7QUFHbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjO0FBREgsS0FBYjtBQUdBLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLE9BQWpCO0FBTmtCO0FBT25COzs7O3dDQU1vQjtBQUNuQixVQUFNQyw0QkFBMEIsS0FBS0wsS0FBTCxDQUFXTSxnQkFBM0M7QUFDQUMsZUFBU0MsZ0JBQVQsQ0FBMEJILFNBQTFCLEVBQXFDLEtBQUtGLFNBQTFDO0FBQ0Q7OzsyQ0FFdUI7QUFDdEIsVUFBTUUsNEJBQTBCLEtBQUtMLEtBQUwsQ0FBV00sZ0JBQTNDO0FBQ0FDLGVBQVNFLG1CQUFULENBQTZCSixTQUE3QixFQUF3QyxLQUFLRixTQUE3QztBQUNEOzs7OEJBRVVPLEssRUFBTztBQUNoQixVQUFNUixlQUFlUSxNQUFNQyxNQUFOLENBQWFDLGdCQUFiLEdBQWdDLElBQUlGLE1BQU1DLE1BQU4sQ0FBYUMsZ0JBQXRFO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUVYLDBCQUFGLEVBQWQ7QUFDRDs7OzZCQUVTO0FBQUEsbUJBQzBELEtBQUtGLEtBRC9EO0FBQUEsVUFDQWMsUUFEQSxVQUNBQSxRQURBO0FBQUEsVUFDVUMsU0FEVixVQUNVQSxTQURWO0FBQUEsVUFDcUJDLEtBRHJCLFVBQ3FCQSxLQURyQjtBQUFBLFVBQzRCVixnQkFENUIsVUFDNEJBLGdCQUQ1QjtBQUFBLFVBQ2lEVyxJQURqRDs7QUFHUixhQUNFO0FBQUE7QUFBQTtBQUNFLHFCQUFXLDBCQUFXLFVBQVgsRUFBdUJGLFNBQXZCLENBRGI7QUFFRSw4QkFBWUMsS0FBWixJQUFtQkUsWUFBWSxLQUFLakIsS0FBTCxDQUFXQyxZQUExQztBQUZGLFdBR01lLElBSE47QUFLR0g7QUFMSCxPQURGO0FBU0Q7Ozs7OztBQXpDa0JmLEssQ0FVWm9CLFMsR0FBWTtBQUNqQmIsb0JBQWtCLG9CQUFVYyxHQUFWLENBQWNDO0FBRGYsQztrQkFWQXRCLEsiLCJmaWxlIjoiVGhlYWRXaXRoTGF6eUxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUSGVhZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNjcm9sbE9mZnNldDogMFxuICAgIH1cbiAgICB0aGlzLnNldFNjcm9sbCA9IHRoaXMuc2V0U2Nyb2xsLmJpbmQodGhpcylcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGF6eUxvYWRVbmlxdWVJRDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGB0Ym9keXNjcm9sbCR7dGhpcy5wcm9wcy5sYXp5TG9hZFVuaXF1ZUlEfWBcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy5zZXRTY3JvbGwpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgY29uc3QgZXZlbnROYW1lID0gYHRib2R5c2Nyb2xsJHt0aGlzLnByb3BzLmxhenlMb2FkVW5pcXVlSUR9YFxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLnNldFNjcm9sbClcbiAgfVxuXG4gIHNldFNjcm9sbCAoZXZlbnQpIHtcbiAgICBjb25zdCBzY3JvbGxPZmZzZXQgPSBldmVudC5kZXRhaWwuaG9yaXpvbnRhbFNjcm9sbCAtIDIgKiBldmVudC5kZXRhaWwuaG9yaXpvbnRhbFNjcm9sbFxuICAgIHRoaXMuc2V0U3RhdGUoeyBzY3JvbGxPZmZzZXQgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBzdHlsZSwgbGF6eUxvYWRVbmlxdWVJRCwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdydC10aGVhZCcsIGNsYXNzTmFtZSl9XG4gICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBtYXJnaW5MZWZ0OiB0aGlzLnN0YXRlLnNjcm9sbE9mZnNldCB9fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19