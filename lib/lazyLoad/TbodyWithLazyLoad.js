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

var _reactList = require('react-list');

var _reactList2 = _interopRequireDefault(_reactList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TbodyWithLazyLoad = function (_Component) {
  _inherits(TbodyWithLazyLoad, _Component);

  function TbodyWithLazyLoad(props) {
    _classCallCheck(this, TbodyWithLazyLoad);

    var _this = _possibleConstructorReturn(this, (TbodyWithLazyLoad.__proto__ || Object.getPrototypeOf(TbodyWithLazyLoad)).call(this, props));

    _this.rowsRenderer = _this.rowsRenderer.bind(_this);
    _this.rowRenderer = _this.rowRenderer.bind(_this);
    _this.trackScroll = _this.trackScroll.bind(_this);
    return _this;
  }

  _createClass(TbodyWithLazyLoad, [{
    key: 'trackScroll',
    value: function trackScroll(event) {
      var eventName = 'tbodyscroll' + this.props.lazyLoadUniqueID;
      var horizontalScrollEvent = new CustomEvent(eventName, {
        detail: {
          horizontalScroll: event.target.scrollLeft
        }
      });

      document.dispatchEvent(horizontalScrollEvent);
    }
  }, {
    key: 'rowsRenderer',
    value: function rowsRenderer(items, ref) {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { ref: ref },
        items.map(function (d, i) {
          return _this2.props.makePageRow(d, i);
        })
      );
    }
  }, {
    key: 'rowRenderer',
    value: function rowRenderer(index, key) {
      return this.props.pageRows[index];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tBodyProps = _props.tBodyProps,
          rowMinWidth = _props.rowMinWidth,
          dataLength = _props.dataLength,
          rowHeight = _props.rowHeight,
          pageSize = _props.pageSize;


      return _react2.default.createElement(
        'div',
        {
          style: {
            overflow: 'auto',
            flex: 'none',
            height: rowHeight * pageSize
          },
          onScroll: this.trackScroll
        },
        _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)(tBodyProps.className, 'rt-tbody'),
            style: _extends({}, tBodyProps.style, {
              minWidth: rowMinWidth + 'px',
              overflow: 'hidden'
            })
          }, tBodyProps.rest),
          _react2.default.createElement(_reactList2.default, {
            itemsRenderer: this.rowsRenderer,
            itemRenderer: this.rowRenderer,
            length: dataLength,
            type: 'uniform',
            useStaticSize: true
          })
        )
      );
    }
  }]);

  return TbodyWithLazyLoad;
}(_react.Component);

TbodyWithLazyLoad.propTypes = {
  makePageRow: _propTypes2.default.func,
  pageRows: _propTypes2.default.array,
  tBodyProps: _propTypes2.default.object,
  rowMinWidth: _propTypes2.default.number,
  dataLength: _propTypes2.default.number,
  rowHeight: _propTypes2.default.number,
  pageSize: _propTypes2.default.number,
  lazyLoadUniqueID: _propTypes2.default.any.isRequired
};
exports.default = TbodyWithLazyLoad;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXp5TG9hZC9UYm9keVdpdGhMYXp5TG9hZC5qcyJdLCJuYW1lcyI6WyJUYm9keVdpdGhMYXp5TG9hZCIsInByb3BzIiwicm93c1JlbmRlcmVyIiwiYmluZCIsInJvd1JlbmRlcmVyIiwidHJhY2tTY3JvbGwiLCJldmVudCIsImV2ZW50TmFtZSIsImxhenlMb2FkVW5pcXVlSUQiLCJob3Jpem9udGFsU2Nyb2xsRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImhvcml6b250YWxTY3JvbGwiLCJ0YXJnZXQiLCJzY3JvbGxMZWZ0IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiaXRlbXMiLCJyZWYiLCJtYXAiLCJkIiwiaSIsIm1ha2VQYWdlUm93IiwiaW5kZXgiLCJrZXkiLCJwYWdlUm93cyIsInRCb2R5UHJvcHMiLCJyb3dNaW5XaWR0aCIsImRhdGFMZW5ndGgiLCJyb3dIZWlnaHQiLCJwYWdlU2l6ZSIsIm92ZXJmbG93IiwiZmxleCIsImhlaWdodCIsImNsYXNzTmFtZSIsInN0eWxlIiwibWluV2lkdGgiLCJyZXN0IiwicHJvcFR5cGVzIiwiZnVuYyIsImFycmF5Iiwib2JqZWN0IiwibnVtYmVyIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7QUFDbkIsNkJBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSxzSUFDWkEsS0FEWTs7QUFHbEIsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFDQSxVQUFLRSxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJGLElBQWpCLE9BQW5CO0FBTGtCO0FBTW5COzs7O2dDQWFZRyxLLEVBQU87QUFDbEIsVUFBTUMsNEJBQTBCLEtBQUtOLEtBQUwsQ0FBV08sZ0JBQTNDO0FBQ0EsVUFBTUMsd0JBQXdCLElBQUlDLFdBQUosQ0FBZ0JILFNBQWhCLEVBQTJCO0FBQ3ZESSxnQkFBUTtBQUNOQyw0QkFBa0JOLE1BQU1PLE1BQU4sQ0FBYUM7QUFEekI7QUFEK0MsT0FBM0IsQ0FBOUI7O0FBTUFDLGVBQVNDLGFBQVQsQ0FBdUJQLHFCQUF2QjtBQUNEOzs7aUNBR2FRLEssRUFBT0MsRyxFQUFLO0FBQUE7O0FBQ3hCLGFBQ0U7QUFBQTtBQUFBLFVBQUssS0FBS0EsR0FBVjtBQUNHRCxjQUFNRSxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsaUJBQVUsT0FBS3BCLEtBQUwsQ0FBV3FCLFdBQVgsQ0FBdUJGLENBQXZCLEVBQTBCQyxDQUExQixDQUFWO0FBQUEsU0FBVjtBQURILE9BREY7QUFLRDs7O2dDQUVZRSxLLEVBQU9DLEcsRUFBSztBQUN2QixhQUFPLEtBQUt2QixLQUFMLENBQVd3QixRQUFYLENBQW9CRixLQUFwQixDQUFQO0FBQ0Q7Ozs2QkFFUztBQUFBLG1CQU9KLEtBQUt0QixLQVBEO0FBQUEsVUFFTnlCLFVBRk0sVUFFTkEsVUFGTTtBQUFBLFVBR05DLFdBSE0sVUFHTkEsV0FITTtBQUFBLFVBSU5DLFVBSk0sVUFJTkEsVUFKTTtBQUFBLFVBS05DLFNBTE0sVUFLTkEsU0FMTTtBQUFBLFVBTU5DLFFBTk0sVUFNTkEsUUFOTTs7O0FBU1IsYUFDRTtBQUFBO0FBQUE7QUFDRSxpQkFBTztBQUNMQyxzQkFBVSxNQURMO0FBRUxDLGtCQUFNLE1BRkQ7QUFHTEMsb0JBQVFKLFlBQVlDO0FBSGYsV0FEVDtBQU1FLG9CQUFVLEtBQUt6QjtBQU5qQjtBQVFFO0FBQUE7QUFBQTtBQUNFLHVCQUFXLDBCQUFXcUIsV0FBV1EsU0FBdEIsRUFBaUMsVUFBakMsQ0FEYjtBQUVFLGdDQUNLUixXQUFXUyxLQURoQjtBQUVFQyx3QkFBYVQsV0FBYixPQUZGO0FBR0VJLHdCQUFVO0FBSFo7QUFGRixhQU9NTCxXQUFXVyxJQVBqQjtBQVNFO0FBQ0UsMkJBQWUsS0FBS25DLFlBRHRCO0FBRUUsMEJBQWMsS0FBS0UsV0FGckI7QUFHRSxvQkFBUXdCLFVBSFY7QUFJRSxrQkFBSyxTQUpQO0FBS0U7QUFMRjtBQVRGO0FBUkYsT0FERjtBQTRCRDs7Ozs7O0FBakZrQjVCLGlCLENBU1pzQyxTLEdBQVk7QUFDakJoQixlQUFhLG9CQUFVaUIsSUFETjtBQUVqQmQsWUFBVSxvQkFBVWUsS0FGSDtBQUdqQmQsY0FBWSxvQkFBVWUsTUFITDtBQUlqQmQsZUFBYSxvQkFBVWUsTUFKTjtBQUtqQmQsY0FBWSxvQkFBVWMsTUFMTDtBQU1qQmIsYUFBVyxvQkFBVWEsTUFOSjtBQU9qQlosWUFBVSxvQkFBVVksTUFQSDtBQVFqQmxDLG9CQUFrQixvQkFBVW1DLEdBQVYsQ0FBY0M7QUFSZixDO2tCQVRBNUMsaUIiLCJmaWxlIjoiVGJvZHlXaXRoTGF6eUxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0TGlzdCBmcm9tICdyZWFjdC1saXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYm9keVdpdGhMYXp5TG9hZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5yb3dzUmVuZGVyZXIgPSB0aGlzLnJvd3NSZW5kZXJlci5iaW5kKHRoaXMpXG4gICAgdGhpcy5yb3dSZW5kZXJlciA9IHRoaXMucm93UmVuZGVyZXIuYmluZCh0aGlzKVxuICAgIHRoaXMudHJhY2tTY3JvbGwgPSB0aGlzLnRyYWNrU2Nyb2xsLmJpbmQodGhpcylcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbWFrZVBhZ2VSb3c6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBhZ2VSb3dzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgdEJvZHlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICByb3dNaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkYXRhTGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJvd0hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsYXp5TG9hZFVuaXF1ZUlEOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIH1cblxuICB0cmFja1Njcm9sbCAoZXZlbnQpIHtcbiAgICBjb25zdCBldmVudE5hbWUgPSBgdGJvZHlzY3JvbGwke3RoaXMucHJvcHMubGF6eUxvYWRVbmlxdWVJRH1gO1xuICAgIGNvbnN0IGhvcml6b250YWxTY3JvbGxFdmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBob3Jpem9udGFsU2Nyb2xsOiBldmVudC50YXJnZXQuc2Nyb2xsTGVmdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGhvcml6b250YWxTY3JvbGxFdmVudCk7XG4gIH1cblxuXG4gIHJvd3NSZW5kZXJlciAoaXRlbXMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgICAge2l0ZW1zLm1hcCgoZCwgaSkgPT4gdGhpcy5wcm9wcy5tYWtlUGFnZVJvdyhkLCBpKSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByb3dSZW5kZXJlciAoaW5kZXgsIGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnBhZ2VSb3dzW2luZGV4XVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICB0Qm9keVByb3BzLFxuICAgICAgcm93TWluV2lkdGgsXG4gICAgICBkYXRhTGVuZ3RoLFxuICAgICAgcm93SGVpZ2h0LFxuICAgICAgcGFnZVNpemUsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICBmbGV4OiAnbm9uZScsXG4gICAgICAgICAgaGVpZ2h0OiByb3dIZWlnaHQgKiBwYWdlU2l6ZSxcbiAgICAgICAgfX1cbiAgICAgICAgb25TY3JvbGw9e3RoaXMudHJhY2tTY3JvbGx9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEJvZHlQcm9wcy5jbGFzc05hbWUsICdydC10Ym9keScpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50Qm9keVByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWFjdExpc3RcbiAgICAgICAgICAgIGl0ZW1zUmVuZGVyZXI9e3RoaXMucm93c1JlbmRlcmVyfVxuICAgICAgICAgICAgaXRlbVJlbmRlcmVyPXt0aGlzLnJvd1JlbmRlcmVyfVxuICAgICAgICAgICAgbGVuZ3RoPXtkYXRhTGVuZ3RofVxuICAgICAgICAgICAgdHlwZT0ndW5pZm9ybSdcbiAgICAgICAgICAgIHVzZVN0YXRpY1NpemVcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==