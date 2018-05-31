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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXp5TG9hZC9UaGVhZFdpdGhMYXp5TG9hZC5qcyJdLCJuYW1lcyI6WyJUSGVhZCIsInByb3BzIiwic3RhdGUiLCJzY3JvbGxPZmZzZXQiLCJzZXRTY3JvbGwiLCJiaW5kIiwiZXZlbnROYW1lIiwibGF6eUxvYWRVbmlxdWVJRCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRldGFpbCIsImhvcml6b250YWxTY3JvbGwiLCJzZXRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJyZXN0IiwibWFyZ2luTGVmdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7QUFDbkIsaUJBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSw4R0FDWkEsS0FEWTs7QUFHbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjO0FBREgsS0FBYjtBQUdBLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLE9BQWpCO0FBTmtCO0FBT25COzs7O3dDQU1vQjtBQUNuQixVQUFNQyw0QkFBMEIsS0FBS0wsS0FBTCxDQUFXTSxnQkFBM0M7QUFDQUMsZUFBU0MsZ0JBQVQsQ0FBMEJILFNBQTFCLEVBQXFDLEtBQUtGLFNBQTFDO0FBQ0Q7OzsyQ0FFdUI7QUFDdEIsVUFBTUUsNEJBQTBCLEtBQUtMLEtBQUwsQ0FBV00sZ0JBQTNDO0FBQ0FDLGVBQVNFLG1CQUFULENBQTZCSixTQUE3QixFQUF3QyxLQUFLRixTQUE3QztBQUNEOzs7OEJBRVVPLEssRUFBTztBQUNoQixVQUFNUixlQUFlUSxNQUFNQyxNQUFOLENBQWFDLGdCQUFiLEdBQWdDLElBQUlGLE1BQU1DLE1BQU4sQ0FBYUMsZ0JBQXRFO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUVYLDBCQUFGLEVBQWQ7QUFDRDs7OzZCQUVTO0FBQUEsbUJBQzBELEtBQUtGLEtBRC9EO0FBQUEsVUFDQWMsUUFEQSxVQUNBQSxRQURBO0FBQUEsVUFDVUMsU0FEVixVQUNVQSxTQURWO0FBQUEsVUFDcUJDLEtBRHJCLFVBQ3FCQSxLQURyQjtBQUFBLFVBQzRCVixnQkFENUIsVUFDNEJBLGdCQUQ1QjtBQUFBLFVBQ2lEVyxJQURqRDs7QUFHUixhQUNFO0FBQUE7QUFBQTtBQUNFLHFCQUFXLDBCQUFXLFVBQVgsRUFBdUJGLFNBQXZCLENBRGI7QUFFRSw4QkFBWUMsS0FBWixJQUFtQkUsWUFBWSxLQUFLakIsS0FBTCxDQUFXQyxZQUExQztBQUZGLFdBR01lLElBSE47QUFLR0g7QUFMSCxPQURGO0FBU0Q7Ozs7RUF6Q2dDSyxnQjs7QUFBZHBCLEssQ0FVWnFCLFMsR0FBWTtBQUNqQmQsb0JBQWtCZSxvQkFBVUMsR0FBVixDQUFjQztBQURmLEM7a0JBVkF4QixLIiwiZmlsZSI6IlRoZWFkV2l0aExhenlMb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVEhlYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzY3JvbGxPZmZzZXQ6IDBcbiAgICB9XG4gICAgdGhpcy5zZXRTY3JvbGwgPSB0aGlzLnNldFNjcm9sbC5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxhenlMb2FkVW5pcXVlSUQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCBldmVudE5hbWUgPSBgdGJvZHlzY3JvbGwke3RoaXMucHJvcHMubGF6eUxvYWRVbmlxdWVJRH1gXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMuc2V0U2Nyb2xsKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGB0Ym9keXNjcm9sbCR7dGhpcy5wcm9wcy5sYXp5TG9hZFVuaXF1ZUlEfWBcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy5zZXRTY3JvbGwpXG4gIH1cblxuICBzZXRTY3JvbGwgKGV2ZW50KSB7XG4gICAgY29uc3Qgc2Nyb2xsT2Zmc2V0ID0gZXZlbnQuZGV0YWlsLmhvcml6b250YWxTY3JvbGwgLSAyICogZXZlbnQuZGV0YWlsLmhvcml6b250YWxTY3JvbGxcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsT2Zmc2V0IH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc3R5bGUsIGxhenlMb2FkVW5pcXVlSUQsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncnQtdGhlYWQnLCBjbGFzc05hbWUpfVxuICAgICAgICBzdHlsZT17eyAuLi5zdHlsZSwgbWFyZ2luTGVmdDogdGhpcy5zdGF0ZS5zY3JvbGxPZmZzZXQgfX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==