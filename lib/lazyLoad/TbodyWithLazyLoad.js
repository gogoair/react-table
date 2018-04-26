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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXp5TG9hZC9UYm9keVdpdGhMYXp5TG9hZC5qcyJdLCJuYW1lcyI6WyJUYm9keVdpdGhMYXp5TG9hZCIsInByb3BzIiwicm93c1JlbmRlcmVyIiwiYmluZCIsInJvd1JlbmRlcmVyIiwidHJhY2tTY3JvbGwiLCJldmVudCIsImV2ZW50TmFtZSIsImxhenlMb2FkVW5pcXVlSUQiLCJob3Jpem9udGFsU2Nyb2xsRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImhvcml6b250YWxTY3JvbGwiLCJ0YXJnZXQiLCJzY3JvbGxMZWZ0IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiaXRlbXMiLCJyZWYiLCJtYXAiLCJkIiwiaSIsIm1ha2VQYWdlUm93IiwiaW5kZXgiLCJrZXkiLCJwYWdlUm93cyIsInRCb2R5UHJvcHMiLCJyb3dNaW5XaWR0aCIsImRhdGFMZW5ndGgiLCJyb3dIZWlnaHQiLCJwYWdlU2l6ZSIsInJlYWN0TGlzdFByb3BzIiwib3ZlcmZsb3ciLCJmbGV4IiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtaW5XaWR0aCIsInJlc3QiLCJwcm9wVHlwZXMiLCJmdW5jIiwiYXJyYXkiLCJvYmplY3QiLCJudW1iZXIiLCJhbnkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7OztBQUNuQiw2QkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLHNJQUNaQSxLQURZOztBQUdsQixVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQUNBLFVBQUtFLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkYsSUFBakIsT0FBbkI7QUFMa0I7QUFNbkI7Ozs7Z0NBYVlHLEssRUFBTztBQUNsQixVQUFNQyw0QkFBMEIsS0FBS04sS0FBTCxDQUFXTyxnQkFBM0M7QUFDQSxVQUFNQyx3QkFBd0IsSUFBSUMsV0FBSixDQUFnQkgsU0FBaEIsRUFBMkI7QUFDdkRJLGdCQUFRO0FBQ05DLDRCQUFrQk4sTUFBTU8sTUFBTixDQUFhQztBQUR6QjtBQUQrQyxPQUEzQixDQUE5Qjs7QUFNQUMsZUFBU0MsYUFBVCxDQUF1QlAscUJBQXZCO0FBQ0Q7OztpQ0FHYVEsSyxFQUFPQyxHLEVBQUs7QUFBQTs7QUFDeEIsYUFDRTtBQUFBO0FBQUEsVUFBSyxLQUFLQSxHQUFWO0FBQ0dELGNBQU1FLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxpQkFBVSxPQUFLcEIsS0FBTCxDQUFXcUIsV0FBWCxDQUF1QkYsQ0FBdkIsRUFBMEJDLENBQTFCLENBQVY7QUFBQSxTQUFWO0FBREgsT0FERjtBQUtEOzs7Z0NBRVlFLEssRUFBT0MsRyxFQUFLO0FBQ3ZCLGFBQU8sS0FBS3ZCLEtBQUwsQ0FBV3dCLFFBQVgsQ0FBb0JGLEtBQXBCLENBQVA7QUFDRDs7OzZCQUVTO0FBQUEsbUJBUUosS0FBS3RCLEtBUkQ7QUFBQSxVQUVOeUIsVUFGTSxVQUVOQSxVQUZNO0FBQUEsVUFHTkMsV0FITSxVQUdOQSxXQUhNO0FBQUEsVUFJTkMsVUFKTSxVQUlOQSxVQUpNO0FBQUEsVUFLTkMsU0FMTSxVQUtOQSxTQUxNO0FBQUEsVUFNTkMsUUFOTSxVQU1OQSxRQU5NO0FBQUEsVUFPTkMsY0FQTSxVQU9OQSxjQVBNOzs7QUFVUixhQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFPO0FBQ0xDLHNCQUFVLE1BREw7QUFFTEMsa0JBQU0sTUFGRDtBQUdMQyxvQkFBUUwsWUFBWUM7QUFIZixXQURUO0FBTUUsb0JBQVUsS0FBS3pCO0FBTmpCO0FBUUU7QUFBQTtBQUFBO0FBQ0UsdUJBQVcsMEJBQVdxQixXQUFXUyxTQUF0QixFQUFpQyxVQUFqQyxDQURiO0FBRUUsZ0NBQ0tULFdBQVdVLEtBRGhCO0FBRUVDLHdCQUFhVixXQUFiLE9BRkY7QUFHRUssd0JBQVU7QUFIWjtBQUZGLGFBT01OLFdBQVdZLElBUGpCO0FBU0U7QUFDRSwyQkFBZSxLQUFLcEMsWUFEdEI7QUFFRSwwQkFBYyxLQUFLRSxXQUZyQjtBQUdFLG9CQUFRd0IsVUFIVjtBQUlFLGtCQUFLLFNBSlA7QUFLRTtBQUxGLGFBTU1HLGNBTk47QUFURjtBQVJGLE9BREY7QUE2QkQ7Ozs7OztBQW5Ga0IvQixpQixDQVNadUMsUyxHQUFZO0FBQ2pCakIsZUFBYSxvQkFBVWtCLElBRE47QUFFakJmLFlBQVUsb0JBQVVnQixLQUZIO0FBR2pCZixjQUFZLG9CQUFVZ0IsTUFITDtBQUlqQmYsZUFBYSxvQkFBVWdCLE1BSk47QUFLakJmLGNBQVksb0JBQVVlLE1BTEw7QUFNakJkLGFBQVcsb0JBQVVjLE1BTko7QUFPakJiLFlBQVUsb0JBQVVhLE1BUEg7QUFRakJuQyxvQkFBa0Isb0JBQVVvQyxHQUFWLENBQWNDO0FBUmYsQztrQkFUQTdDLGlCIiwiZmlsZSI6IlRib2R5V2l0aExhenlMb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdExpc3QgZnJvbSAncmVhY3QtbGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGJvZHlXaXRoTGF6eUxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMucm93c1JlbmRlcmVyID0gdGhpcy5yb3dzUmVuZGVyZXIuYmluZCh0aGlzKVxuICAgIHRoaXMucm93UmVuZGVyZXIgPSB0aGlzLnJvd1JlbmRlcmVyLmJpbmQodGhpcylcbiAgICB0aGlzLnRyYWNrU2Nyb2xsID0gdGhpcy50cmFja1Njcm9sbC5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1ha2VQYWdlUm93OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwYWdlUm93czogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRCb2R5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcm93TWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGF0YUxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByb3dIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGF6eUxvYWRVbmlxdWVJRDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICB9XG5cbiAgdHJhY2tTY3JvbGwgKGV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnROYW1lID0gYHRib2R5c2Nyb2xsJHt0aGlzLnByb3BzLmxhenlMb2FkVW5pcXVlSUR9YDtcbiAgICBjb25zdCBob3Jpem9udGFsU2Nyb2xsRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgaG9yaXpvbnRhbFNjcm9sbDogZXZlbnQudGFyZ2V0LnNjcm9sbExlZnQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChob3Jpem9udGFsU2Nyb2xsRXZlbnQpO1xuICB9XG5cblxuICByb3dzUmVuZGVyZXIgKGl0ZW1zLCByZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3JlZn0+XG4gICAgICAgIHtpdGVtcy5tYXAoKGQsIGkpID0+IHRoaXMucHJvcHMubWFrZVBhZ2VSb3coZCwgaSkpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcm93UmVuZGVyZXIgKGluZGV4LCBrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5wYWdlUm93c1tpbmRleF1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdEJvZHlQcm9wcyxcbiAgICAgIHJvd01pbldpZHRoLFxuICAgICAgZGF0YUxlbmd0aCxcbiAgICAgIHJvd0hlaWdodCxcbiAgICAgIHBhZ2VTaXplLFxuICAgICAgcmVhY3RMaXN0UHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICBmbGV4OiAnbm9uZScsXG4gICAgICAgICAgaGVpZ2h0OiByb3dIZWlnaHQgKiBwYWdlU2l6ZSxcbiAgICAgICAgfX1cbiAgICAgICAgb25TY3JvbGw9e3RoaXMudHJhY2tTY3JvbGx9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEJvZHlQcm9wcy5jbGFzc05hbWUsICdydC10Ym9keScpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50Qm9keVByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWFjdExpc3RcbiAgICAgICAgICAgIGl0ZW1zUmVuZGVyZXI9e3RoaXMucm93c1JlbmRlcmVyfVxuICAgICAgICAgICAgaXRlbVJlbmRlcmVyPXt0aGlzLnJvd1JlbmRlcmVyfVxuICAgICAgICAgICAgbGVuZ3RoPXtkYXRhTGVuZ3RofVxuICAgICAgICAgICAgdHlwZT0ndW5pZm9ybSdcbiAgICAgICAgICAgIHVzZVN0YXRpY1NpemVcbiAgICAgICAgICAgIHsuLi5yZWFjdExpc3RQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==