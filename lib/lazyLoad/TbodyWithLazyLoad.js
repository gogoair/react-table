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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXp5TG9hZC9UYm9keVdpdGhMYXp5TG9hZC5qcyJdLCJuYW1lcyI6WyJUYm9keVdpdGhMYXp5TG9hZCIsInByb3BzIiwicm93c1JlbmRlcmVyIiwiYmluZCIsInJvd1JlbmRlcmVyIiwidHJhY2tTY3JvbGwiLCJldmVudCIsImV2ZW50TmFtZSIsImxhenlMb2FkVW5pcXVlSUQiLCJob3Jpem9udGFsU2Nyb2xsRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImhvcml6b250YWxTY3JvbGwiLCJ0YXJnZXQiLCJzY3JvbGxMZWZ0IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiaXRlbXMiLCJyZWYiLCJtYXAiLCJkIiwiaSIsIm1ha2VQYWdlUm93IiwiaW5kZXgiLCJrZXkiLCJwYWdlUm93cyIsInRCb2R5UHJvcHMiLCJyb3dNaW5XaWR0aCIsImRhdGFMZW5ndGgiLCJyb3dIZWlnaHQiLCJwYWdlU2l6ZSIsInJlYWN0TGlzdFByb3BzIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJmbGV4IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtaW5XaWR0aCIsInJlc3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiYXJyYXkiLCJvYmplY3QiLCJudW1iZXIiLCJhbnkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7OztBQUNuQiw2QkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLHNJQUNaQSxLQURZOztBQUdsQixVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQUNBLFVBQUtFLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkYsSUFBakIsT0FBbkI7QUFMa0I7QUFNbkI7Ozs7Z0NBYVlHLEssRUFBTztBQUNsQixVQUFNQyw0QkFBMEIsS0FBS04sS0FBTCxDQUFXTyxnQkFBM0M7QUFDQSxVQUFNQyx3QkFBd0IsSUFBSUMsV0FBSixDQUFnQkgsU0FBaEIsRUFBMkI7QUFDdkRJLGdCQUFRO0FBQ05DLDRCQUFrQk4sTUFBTU8sTUFBTixDQUFhQztBQUR6QjtBQUQrQyxPQUEzQixDQUE5Qjs7QUFNQUMsZUFBU0MsYUFBVCxDQUF1QlAscUJBQXZCO0FBQ0Q7OztpQ0FHYVEsSyxFQUFPQyxHLEVBQUs7QUFBQTs7QUFDeEIsYUFDRTtBQUFBO0FBQUEsVUFBSyxLQUFLQSxHQUFWO0FBQ0dELGNBQU1FLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxpQkFBVSxPQUFLcEIsS0FBTCxDQUFXcUIsV0FBWCxDQUF1QkYsQ0FBdkIsRUFBMEJDLENBQTFCLENBQVY7QUFBQSxTQUFWO0FBREgsT0FERjtBQUtEOzs7Z0NBRVlFLEssRUFBT0MsRyxFQUFLO0FBQ3ZCLGFBQU8sS0FBS3ZCLEtBQUwsQ0FBV3dCLFFBQVgsQ0FBb0JGLEtBQXBCLENBQVA7QUFDRDs7OzZCQUVTO0FBQUEsbUJBUUosS0FBS3RCLEtBUkQ7QUFBQSxVQUVOeUIsVUFGTSxVQUVOQSxVQUZNO0FBQUEsVUFHTkMsV0FITSxVQUdOQSxXQUhNO0FBQUEsVUFJTkMsVUFKTSxVQUlOQSxVQUpNO0FBQUEsVUFLTkMsU0FMTSxVQUtOQSxTQUxNO0FBQUEsVUFNTkMsUUFOTSxVQU1OQSxRQU5NO0FBQUEsVUFPTkMsY0FQTSxVQU9OQSxjQVBNOzs7QUFVUixVQUFNQyxTQUFTSixhQUFhRSxRQUFiLEdBQXdCRCxZQUFZQyxRQUFwQyxHQUErQ0QsYUFBYUQsYUFBYSxDQUExQixDQUE5RDs7QUFFQSxhQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFPO0FBQ0xLLHNCQUFVLE1BREw7QUFFTEMsa0JBQU0sTUFGRDtBQUdMRjtBQUhLLFdBRFQ7QUFNRSxvQkFBVSxLQUFLM0I7QUFOakI7QUFRRTtBQUFBO0FBQUE7QUFDRSx1QkFBVywwQkFBV3FCLFdBQVdTLFNBQXRCLEVBQWlDLFVBQWpDLENBRGI7QUFFRSxnQ0FDS1QsV0FBV1UsS0FEaEI7QUFFRUMsd0JBQWFWLFdBQWIsT0FGRjtBQUdFTSx3QkFBVTtBQUhaO0FBRkYsYUFPTVAsV0FBV1ksSUFQakI7QUFTRSx3Q0FBQyxtQkFBRDtBQUNFLDJCQUFlLEtBQUtwQyxZQUR0QjtBQUVFLDBCQUFjLEtBQUtFLFdBRnJCO0FBR0Usb0JBQVF3QixVQUhWO0FBSUUsa0JBQUssU0FKUDtBQUtFO0FBTEYsYUFNTUcsY0FOTjtBQVRGO0FBUkYsT0FERjtBQTZCRDs7OztFQXJGNENRLGdCOztBQUExQnZDLGlCLENBU1p3QyxTLEdBQVk7QUFDakJsQixlQUFhbUIsb0JBQVVDLElBRE47QUFFakJqQixZQUFVZ0Isb0JBQVVFLEtBRkg7QUFHakJqQixjQUFZZSxvQkFBVUcsTUFITDtBQUlqQmpCLGVBQWFjLG9CQUFVSSxNQUpOO0FBS2pCakIsY0FBWWEsb0JBQVVJLE1BTEw7QUFNakJoQixhQUFXWSxvQkFBVUksTUFOSjtBQU9qQmYsWUFBVVcsb0JBQVVJLE1BUEg7QUFRakJyQyxvQkFBa0JpQyxvQkFBVUssR0FBVixDQUFjQztBQVJmLEM7a0JBVEEvQyxpQiIsImZpbGUiOiJUYm9keVdpdGhMYXp5TG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVhY3RMaXN0IGZyb20gJ3JlYWN0LWxpc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRib2R5V2l0aExhenlMb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnJvd3NSZW5kZXJlciA9IHRoaXMucm93c1JlbmRlcmVyLmJpbmQodGhpcylcbiAgICB0aGlzLnJvd1JlbmRlcmVyID0gdGhpcy5yb3dSZW5kZXJlci5iaW5kKHRoaXMpXG4gICAgdGhpcy50cmFja1Njcm9sbCA9IHRoaXMudHJhY2tTY3JvbGwuYmluZCh0aGlzKVxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtYWtlUGFnZVJvdzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGFnZVJvd3M6IFByb3BUeXBlcy5hcnJheSxcbiAgICB0Qm9keVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHJvd01pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRhdGFMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcm93SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxhenlMb2FkVW5pcXVlSUQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHRyYWNrU2Nyb2xsIChldmVudCkge1xuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGB0Ym9keXNjcm9sbCR7dGhpcy5wcm9wcy5sYXp5TG9hZFVuaXF1ZUlEfWA7XG4gICAgY29uc3QgaG9yaXpvbnRhbFNjcm9sbEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIGhvcml6b250YWxTY3JvbGw6IGV2ZW50LnRhcmdldC5zY3JvbGxMZWZ0LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoaG9yaXpvbnRhbFNjcm9sbEV2ZW50KTtcbiAgfVxuXG5cbiAgcm93c1JlbmRlcmVyIChpdGVtcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtyZWZ9PlxuICAgICAgICB7aXRlbXMubWFwKChkLCBpKSA9PiB0aGlzLnByb3BzLm1ha2VQYWdlUm93KGQsIGkpKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJvd1JlbmRlcmVyIChpbmRleCwga2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucGFnZVJvd3NbaW5kZXhdXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRCb2R5UHJvcHMsXG4gICAgICByb3dNaW5XaWR0aCxcbiAgICAgIGRhdGFMZW5ndGgsXG4gICAgICByb3dIZWlnaHQsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIHJlYWN0TGlzdFByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBoZWlnaHQgPSBkYXRhTGVuZ3RoID4gcGFnZVNpemUgPyByb3dIZWlnaHQgKiBwYWdlU2l6ZSA6IHJvd0hlaWdodCAqIChkYXRhTGVuZ3RoICsgMSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgZmxleDogJ25vbmUnLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgfX1cbiAgICAgICAgb25TY3JvbGw9e3RoaXMudHJhY2tTY3JvbGx9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEJvZHlQcm9wcy5jbGFzc05hbWUsICdydC10Ym9keScpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50Qm9keVByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWFjdExpc3RcbiAgICAgICAgICAgIGl0ZW1zUmVuZGVyZXI9e3RoaXMucm93c1JlbmRlcmVyfVxuICAgICAgICAgICAgaXRlbVJlbmRlcmVyPXt0aGlzLnJvd1JlbmRlcmVyfVxuICAgICAgICAgICAgbGVuZ3RoPXtkYXRhTGVuZ3RofVxuICAgICAgICAgICAgdHlwZT0ndW5pZm9ybSdcbiAgICAgICAgICAgIHVzZVN0YXRpY1NpemVcbiAgICAgICAgICAgIHsuLi5yZWFjdExpc3RQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==