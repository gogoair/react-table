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
    return _this;
  }

  _createClass(TbodyWithLazyLoad, [{
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
        { style: {
            overflow: 'auto',
            flex: 'none',
            height: rowHeight * pageSize
          } },
        _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)(tBodyProps.className),
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
  pageSize: _propTypes2.default.number
};
exports.default = TbodyWithLazyLoad;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UYm9keVdpdGhMYXp5TG9hZC5qcyJdLCJuYW1lcyI6WyJUYm9keVdpdGhMYXp5TG9hZCIsInByb3BzIiwicm93c1JlbmRlcmVyIiwiYmluZCIsInJvd1JlbmRlcmVyIiwiaXRlbXMiLCJyZWYiLCJtYXAiLCJkIiwiaSIsIm1ha2VQYWdlUm93IiwiaW5kZXgiLCJrZXkiLCJwYWdlUm93cyIsInRCb2R5UHJvcHMiLCJyb3dNaW5XaWR0aCIsImRhdGFMZW5ndGgiLCJyb3dIZWlnaHQiLCJwYWdlU2l6ZSIsIm92ZXJmbG93IiwiZmxleCIsImhlaWdodCIsImNsYXNzTmFtZSIsInN0eWxlIiwibWluV2lkdGgiLCJyZXN0IiwicHJvcFR5cGVzIiwiZnVuYyIsImFycmF5Iiwib2JqZWN0IiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7OztBQUNuQiw2QkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLHNJQUNaQSxLQURZOztBQUdsQixVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQUprQjtBQUtuQjs7OztpQ0FZYUUsSyxFQUFPQyxHLEVBQUs7QUFBQTs7QUFDeEIsYUFDRTtBQUFBO0FBQUEsVUFBSyxLQUFLQSxHQUFWO0FBQ0dELGNBQU1FLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxpQkFBVSxPQUFLUixLQUFMLENBQVdTLFdBQVgsQ0FBdUJGLENBQXZCLEVBQTBCQyxDQUExQixDQUFWO0FBQUEsU0FBVjtBQURILE9BREY7QUFLRDs7O2dDQUVZRSxLLEVBQU9DLEcsRUFBSztBQUN2QixhQUFPLEtBQUtYLEtBQUwsQ0FBV1ksUUFBWCxDQUFvQkYsS0FBcEIsQ0FBUDtBQUNEOzs7NkJBRVM7QUFBQSxtQkFPSixLQUFLVixLQVBEO0FBQUEsVUFFTmEsVUFGTSxVQUVOQSxVQUZNO0FBQUEsVUFHTkMsV0FITSxVQUdOQSxXQUhNO0FBQUEsVUFJTkMsVUFKTSxVQUlOQSxVQUpNO0FBQUEsVUFLTkMsU0FMTSxVQUtOQSxTQUxNO0FBQUEsVUFNTkMsUUFOTSxVQU1OQSxRQU5NOzs7QUFTUixhQUNFO0FBQUE7QUFBQSxVQUFLLE9BQU87QUFDVkMsc0JBQVUsTUFEQTtBQUVWQyxrQkFBTSxNQUZJO0FBR1ZDLG9CQUFRSixZQUFZQztBQUhWLFdBQVo7QUFLRTtBQUFBO0FBQUE7QUFDRSx1QkFBVywwQkFBV0osV0FBV1EsU0FBdEIsQ0FEYjtBQUVFLGdDQUNLUixXQUFXUyxLQURoQjtBQUVFQyx3QkFBYVQsV0FBYixPQUZGO0FBR0VJLHdCQUFVO0FBSFo7QUFGRixhQU9NTCxXQUFXVyxJQVBqQjtBQVNFO0FBQ0UsMkJBQWUsS0FBS3ZCLFlBRHRCO0FBRUUsMEJBQWMsS0FBS0UsV0FGckI7QUFHRSxvQkFBUVksVUFIVjtBQUlFLGtCQUFLLFNBSlA7QUFLRTtBQUxGO0FBVEY7QUFMRixPQURGO0FBeUJEOzs7Ozs7QUFoRWtCaEIsaUIsQ0FRWjBCLFMsR0FBWTtBQUNqQmhCLGVBQWEsb0JBQVVpQixJQUROO0FBRWpCZCxZQUFVLG9CQUFVZSxLQUZIO0FBR2pCZCxjQUFZLG9CQUFVZSxNQUhMO0FBSWpCZCxlQUFhLG9CQUFVZSxNQUpOO0FBS2pCZCxjQUFZLG9CQUFVYyxNQUxMO0FBTWpCYixhQUFXLG9CQUFVYSxNQU5KO0FBT2pCWixZQUFVLG9CQUFVWTtBQVBILEM7a0JBUkE5QixpQiIsImZpbGUiOiJUYm9keVdpdGhMYXp5TG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVhY3RMaXN0IGZyb20gJ3JlYWN0LWxpc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRib2R5V2l0aExhenlMb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnJvd3NSZW5kZXJlciA9IHRoaXMucm93c1JlbmRlcmVyLmJpbmQodGhpcylcbiAgICB0aGlzLnJvd1JlbmRlcmVyID0gdGhpcy5yb3dSZW5kZXJlci5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1ha2VQYWdlUm93OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwYWdlUm93czogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRCb2R5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcm93TWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGF0YUxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByb3dIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH1cblxuICByb3dzUmVuZGVyZXIgKGl0ZW1zLCByZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3JlZn0+XG4gICAgICAgIHtpdGVtcy5tYXAoKGQsIGkpID0+IHRoaXMucHJvcHMubWFrZVBhZ2VSb3coZCwgaSkpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcm93UmVuZGVyZXIgKGluZGV4LCBrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5wYWdlUm93c1tpbmRleF1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdEJvZHlQcm9wcyxcbiAgICAgIHJvd01pbldpZHRoLFxuICAgICAgZGF0YUxlbmd0aCxcbiAgICAgIHJvd0hlaWdodCxcbiAgICAgIHBhZ2VTaXplLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICBmbGV4OiAnbm9uZScsXG4gICAgICAgIGhlaWdodDogcm93SGVpZ2h0ICogcGFnZVNpemUsXG4gICAgICB9fT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRCb2R5UHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udEJvZHlQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFJlYWN0TGlzdFxuICAgICAgICAgICAgaXRlbXNSZW5kZXJlcj17dGhpcy5yb3dzUmVuZGVyZXJ9XG4gICAgICAgICAgICBpdGVtUmVuZGVyZXI9e3RoaXMucm93UmVuZGVyZXJ9XG4gICAgICAgICAgICBsZW5ndGg9e2RhdGFMZW5ndGh9XG4gICAgICAgICAgICB0eXBlPSd1bmlmb3JtJ1xuICAgICAgICAgICAgdXNlU3RhdGljU2l6ZVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19