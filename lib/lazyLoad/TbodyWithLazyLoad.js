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
          pageSize = _props.pageSize,
          reactListProps = _props.reactListProps;


      var height = dataLength > pageSize ? rowHeight * pageSize : rowHeight * (dataLength + 1);

      return _react2.default.createElement(
        'div',
        {
          style: {
            overflow: 'auto',
            flex: 'none',
            height: height
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
          _react2.default.createElement(_reactList2.default, _extends({
            itemsRenderer: this.rowsRenderer,
            itemRenderer: this.rowRenderer,
            length: dataLength,
            type: 'uniform',
            useStaticSize: true
          }, reactListProps))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXp5TG9hZC9UYm9keVdpdGhMYXp5TG9hZC5qcyJdLCJuYW1lcyI6WyJUYm9keVdpdGhMYXp5TG9hZCIsInByb3BzIiwicm93c1JlbmRlcmVyIiwiYmluZCIsInJvd1JlbmRlcmVyIiwidHJhY2tTY3JvbGwiLCJldmVudCIsImV2ZW50TmFtZSIsImxhenlMb2FkVW5pcXVlSUQiLCJob3Jpem9udGFsU2Nyb2xsRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImhvcml6b250YWxTY3JvbGwiLCJ0YXJnZXQiLCJzY3JvbGxMZWZ0IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiaXRlbXMiLCJyZWYiLCJtYXAiLCJkIiwiaSIsIm1ha2VQYWdlUm93IiwiaW5kZXgiLCJrZXkiLCJwYWdlUm93cyIsInRCb2R5UHJvcHMiLCJyb3dNaW5XaWR0aCIsImRhdGFMZW5ndGgiLCJyb3dIZWlnaHQiLCJwYWdlU2l6ZSIsInJlYWN0TGlzdFByb3BzIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJmbGV4IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtaW5XaWR0aCIsInJlc3QiLCJwcm9wVHlwZXMiLCJmdW5jIiwiYXJyYXkiLCJvYmplY3QiLCJudW1iZXIiLCJhbnkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7OztBQUNuQiw2QkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLHNJQUNaQSxLQURZOztBQUdsQixVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQUNBLFVBQUtFLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkYsSUFBakIsT0FBbkI7QUFMa0I7QUFNbkI7Ozs7Z0NBYVlHLEssRUFBTztBQUNsQixVQUFNQyw0QkFBMEIsS0FBS04sS0FBTCxDQUFXTyxnQkFBM0M7QUFDQSxVQUFNQyx3QkFBd0IsSUFBSUMsV0FBSixDQUFnQkgsU0FBaEIsRUFBMkI7QUFDdkRJLGdCQUFRO0FBQ05DLDRCQUFrQk4sTUFBTU8sTUFBTixDQUFhQztBQUR6QjtBQUQrQyxPQUEzQixDQUE5Qjs7QUFNQUMsZUFBU0MsYUFBVCxDQUF1QlAscUJBQXZCO0FBQ0Q7OztpQ0FHYVEsSyxFQUFPQyxHLEVBQUs7QUFBQTs7QUFDeEIsYUFDRTtBQUFBO0FBQUEsVUFBSyxLQUFLQSxHQUFWO0FBQ0dELGNBQU1FLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxpQkFBVSxPQUFLcEIsS0FBTCxDQUFXcUIsV0FBWCxDQUF1QkYsQ0FBdkIsRUFBMEJDLENBQTFCLENBQVY7QUFBQSxTQUFWO0FBREgsT0FERjtBQUtEOzs7Z0NBRVlFLEssRUFBT0MsRyxFQUFLO0FBQ3ZCLGFBQU8sS0FBS3ZCLEtBQUwsQ0FBV3dCLFFBQVgsQ0FBb0JGLEtBQXBCLENBQVA7QUFDRDs7OzZCQUVTO0FBQUEsbUJBUUosS0FBS3RCLEtBUkQ7QUFBQSxVQUVOeUIsVUFGTSxVQUVOQSxVQUZNO0FBQUEsVUFHTkMsV0FITSxVQUdOQSxXQUhNO0FBQUEsVUFJTkMsVUFKTSxVQUlOQSxVQUpNO0FBQUEsVUFLTkMsU0FMTSxVQUtOQSxTQUxNO0FBQUEsVUFNTkMsUUFOTSxVQU1OQSxRQU5NO0FBQUEsVUFPTkMsY0FQTSxVQU9OQSxjQVBNOzs7QUFVUixVQUFNQyxTQUFTSixhQUFhRSxRQUFiLEdBQXdCRCxZQUFZQyxRQUFwQyxHQUErQ0QsYUFBYUQsYUFBYSxDQUExQixDQUE5RDs7QUFFQSxhQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFPO0FBQ0xLLHNCQUFVLE1BREw7QUFFTEMsa0JBQU0sTUFGRDtBQUdMRjtBQUhLLFdBRFQ7QUFNRSxvQkFBVSxLQUFLM0I7QUFOakI7QUFRRTtBQUFBO0FBQUE7QUFDRSx1QkFBVywwQkFBV3FCLFdBQVdTLFNBQXRCLEVBQWlDLFVBQWpDLENBRGI7QUFFRSxnQ0FDS1QsV0FBV1UsS0FEaEI7QUFFRUMsd0JBQWFWLFdBQWIsT0FGRjtBQUdFTSx3QkFBVTtBQUhaO0FBRkYsYUFPTVAsV0FBV1ksSUFQakI7QUFTRTtBQUNFLDJCQUFlLEtBQUtwQyxZQUR0QjtBQUVFLDBCQUFjLEtBQUtFLFdBRnJCO0FBR0Usb0JBQVF3QixVQUhWO0FBSUUsa0JBQUssU0FKUDtBQUtFO0FBTEYsYUFNTUcsY0FOTjtBQVRGO0FBUkYsT0FERjtBQTZCRDs7Ozs7O0FBckZrQi9CLGlCLENBU1p1QyxTLEdBQVk7QUFDakJqQixlQUFhLG9CQUFVa0IsSUFETjtBQUVqQmYsWUFBVSxvQkFBVWdCLEtBRkg7QUFHakJmLGNBQVksb0JBQVVnQixNQUhMO0FBSWpCZixlQUFhLG9CQUFVZ0IsTUFKTjtBQUtqQmYsY0FBWSxvQkFBVWUsTUFMTDtBQU1qQmQsYUFBVyxvQkFBVWMsTUFOSjtBQU9qQmIsWUFBVSxvQkFBVWEsTUFQSDtBQVFqQm5DLG9CQUFrQixvQkFBVW9DLEdBQVYsQ0FBY0M7QUFSZixDO2tCQVRBN0MsaUIiLCJmaWxlIjoiVGJvZHlXaXRoTGF6eUxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0TGlzdCBmcm9tICdyZWFjdC1saXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYm9keVdpdGhMYXp5TG9hZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5yb3dzUmVuZGVyZXIgPSB0aGlzLnJvd3NSZW5kZXJlci5iaW5kKHRoaXMpXG4gICAgdGhpcy5yb3dSZW5kZXJlciA9IHRoaXMucm93UmVuZGVyZXIuYmluZCh0aGlzKVxuICAgIHRoaXMudHJhY2tTY3JvbGwgPSB0aGlzLnRyYWNrU2Nyb2xsLmJpbmQodGhpcylcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbWFrZVBhZ2VSb3c6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBhZ2VSb3dzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgdEJvZHlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICByb3dNaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkYXRhTGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJvd0hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsYXp5TG9hZFVuaXF1ZUlEOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIH1cblxuICB0cmFja1Njcm9sbCAoZXZlbnQpIHtcbiAgICBjb25zdCBldmVudE5hbWUgPSBgdGJvZHlzY3JvbGwke3RoaXMucHJvcHMubGF6eUxvYWRVbmlxdWVJRH1gO1xuICAgIGNvbnN0IGhvcml6b250YWxTY3JvbGxFdmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBob3Jpem9udGFsU2Nyb2xsOiBldmVudC50YXJnZXQuc2Nyb2xsTGVmdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGhvcml6b250YWxTY3JvbGxFdmVudCk7XG4gIH1cblxuXG4gIHJvd3NSZW5kZXJlciAoaXRlbXMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgICAge2l0ZW1zLm1hcCgoZCwgaSkgPT4gdGhpcy5wcm9wcy5tYWtlUGFnZVJvdyhkLCBpKSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByb3dSZW5kZXJlciAoaW5kZXgsIGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnBhZ2VSb3dzW2luZGV4XVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICB0Qm9keVByb3BzLFxuICAgICAgcm93TWluV2lkdGgsXG4gICAgICBkYXRhTGVuZ3RoLFxuICAgICAgcm93SGVpZ2h0LFxuICAgICAgcGFnZVNpemUsXG4gICAgICByZWFjdExpc3RQcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gZGF0YUxlbmd0aCA+IHBhZ2VTaXplID8gcm93SGVpZ2h0ICogcGFnZVNpemUgOiByb3dIZWlnaHQgKiAoZGF0YUxlbmd0aCArIDEpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgIGZsZXg6ICdub25lJyxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH19XG4gICAgICAgIG9uU2Nyb2xsPXt0aGlzLnRyYWNrU2Nyb2xsfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRCb2R5UHJvcHMuY2xhc3NOYW1lLCAncnQtdGJvZHknKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udEJvZHlQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtyb3dNaW5XaWR0aH1weGAsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50Qm9keVByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8UmVhY3RMaXN0XG4gICAgICAgICAgICBpdGVtc1JlbmRlcmVyPXt0aGlzLnJvd3NSZW5kZXJlcn1cbiAgICAgICAgICAgIGl0ZW1SZW5kZXJlcj17dGhpcy5yb3dSZW5kZXJlcn1cbiAgICAgICAgICAgIGxlbmd0aD17ZGF0YUxlbmd0aH1cbiAgICAgICAgICAgIHR5cGU9J3VuaWZvcm0nXG4gICAgICAgICAgICB1c2VTdGF0aWNTaXplXG4gICAgICAgICAgICB7Li4ucmVhY3RMaXN0UHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0=