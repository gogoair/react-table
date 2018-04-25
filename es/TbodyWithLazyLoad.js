var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactList from 'react-list';

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

      return React.createElement(
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


      return React.createElement(
        'div',
        { style: {
            overflow: 'auto',
            flex: 'none',
            height: rowHeight * pageSize
          } },
        React.createElement(
          'div',
          _extends({
            className: classnames(tBodyProps.className),
            style: _extends({}, tBodyProps.style, {
              minWidth: rowMinWidth + 'px',
              overflow: 'hidden'
            })
          }, tBodyProps.rest),
          React.createElement(ReactList, {
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
}(Component);

TbodyWithLazyLoad.propTypes = {
  makePageRow: PropTypes.func,
  pageRows: PropTypes.array,
  tBodyProps: PropTypes.object,
  rowMinWidth: PropTypes.number,
  dataLength: PropTypes.number,
  rowHeight: PropTypes.number,
  pageSize: PropTypes.number
};
export default TbodyWithLazyLoad;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UYm9keVdpdGhMYXp5TG9hZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImNsYXNzbmFtZXMiLCJSZWFjdExpc3QiLCJUYm9keVdpdGhMYXp5TG9hZCIsInByb3BzIiwicm93c1JlbmRlcmVyIiwiYmluZCIsInJvd1JlbmRlcmVyIiwiaXRlbXMiLCJyZWYiLCJtYXAiLCJkIiwiaSIsIm1ha2VQYWdlUm93IiwiaW5kZXgiLCJrZXkiLCJwYWdlUm93cyIsInRCb2R5UHJvcHMiLCJyb3dNaW5XaWR0aCIsImRhdGFMZW5ndGgiLCJyb3dIZWlnaHQiLCJwYWdlU2l6ZSIsIm92ZXJmbG93IiwiZmxleCIsImhlaWdodCIsImNsYXNzTmFtZSIsInN0eWxlIiwibWluV2lkdGgiLCJyZXN0IiwicHJvcFR5cGVzIiwiZnVuYyIsImFycmF5Iiwib2JqZWN0IiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7O0lBRXFCQyxpQjs7O0FBQ25CLDZCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsc0lBQ1pBLEtBRFk7O0FBR2xCLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQW5CO0FBSmtCO0FBS25COzs7O2lDQVlhRSxLLEVBQU9DLEcsRUFBSztBQUFBOztBQUN4QixhQUNFO0FBQUE7QUFBQSxVQUFLLEtBQUtBLEdBQVY7QUFDR0QsY0FBTUUsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGlCQUFVLE9BQUtSLEtBQUwsQ0FBV1MsV0FBWCxDQUF1QkYsQ0FBdkIsRUFBMEJDLENBQTFCLENBQVY7QUFBQSxTQUFWO0FBREgsT0FERjtBQUtEOzs7Z0NBRVlFLEssRUFBT0MsRyxFQUFLO0FBQ3ZCLGFBQU8sS0FBS1gsS0FBTCxDQUFXWSxRQUFYLENBQW9CRixLQUFwQixDQUFQO0FBQ0Q7Ozs2QkFFUztBQUFBLG1CQU9KLEtBQUtWLEtBUEQ7QUFBQSxVQUVOYSxVQUZNLFVBRU5BLFVBRk07QUFBQSxVQUdOQyxXQUhNLFVBR05BLFdBSE07QUFBQSxVQUlOQyxVQUpNLFVBSU5BLFVBSk07QUFBQSxVQUtOQyxTQUxNLFVBS05BLFNBTE07QUFBQSxVQU1OQyxRQU5NLFVBTU5BLFFBTk07OztBQVNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssT0FBTztBQUNWQyxzQkFBVSxNQURBO0FBRVZDLGtCQUFNLE1BRkk7QUFHVkMsb0JBQVFKLFlBQVlDO0FBSFYsV0FBWjtBQUtFO0FBQUE7QUFBQTtBQUNFLHVCQUFXcEIsV0FBV2dCLFdBQVdRLFNBQXRCLENBRGI7QUFFRSxnQ0FDS1IsV0FBV1MsS0FEaEI7QUFFRUMsd0JBQWFULFdBQWIsT0FGRjtBQUdFSSx3QkFBVTtBQUhaO0FBRkYsYUFPTUwsV0FBV1csSUFQakI7QUFTRSw4QkFBQyxTQUFEO0FBQ0UsMkJBQWUsS0FBS3ZCLFlBRHRCO0FBRUUsMEJBQWMsS0FBS0UsV0FGckI7QUFHRSxvQkFBUVksVUFIVjtBQUlFLGtCQUFLLFNBSlA7QUFLRTtBQUxGO0FBVEY7QUFMRixPQURGO0FBeUJEOzs7O0VBaEU0Q3BCLFM7O0FBQTFCSSxpQixDQVFaMEIsUyxHQUFZO0FBQ2pCaEIsZUFBYWIsVUFBVThCLElBRE47QUFFakJkLFlBQVVoQixVQUFVK0IsS0FGSDtBQUdqQmQsY0FBWWpCLFVBQVVnQyxNQUhMO0FBSWpCZCxlQUFhbEIsVUFBVWlDLE1BSk47QUFLakJkLGNBQVluQixVQUFVaUMsTUFMTDtBQU1qQmIsYUFBV3BCLFVBQVVpQyxNQU5KO0FBT2pCWixZQUFVckIsVUFBVWlDO0FBUEgsQztlQVJBOUIsaUIiLCJmaWxlIjoiVGJvZHlXaXRoTGF6eUxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0TGlzdCBmcm9tICdyZWFjdC1saXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYm9keVdpdGhMYXp5TG9hZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5yb3dzUmVuZGVyZXIgPSB0aGlzLnJvd3NSZW5kZXJlci5iaW5kKHRoaXMpXG4gICAgdGhpcy5yb3dSZW5kZXJlciA9IHRoaXMucm93UmVuZGVyZXIuYmluZCh0aGlzKVxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtYWtlUGFnZVJvdzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGFnZVJvd3M6IFByb3BUeXBlcy5hcnJheSxcbiAgICB0Qm9keVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHJvd01pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRhdGFMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcm93SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9XG5cbiAgcm93c1JlbmRlcmVyIChpdGVtcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtyZWZ9PlxuICAgICAgICB7aXRlbXMubWFwKChkLCBpKSA9PiB0aGlzLnByb3BzLm1ha2VQYWdlUm93KGQsIGkpKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJvd1JlbmRlcmVyIChpbmRleCwga2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucGFnZVJvd3NbaW5kZXhdXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRCb2R5UHJvcHMsXG4gICAgICByb3dNaW5XaWR0aCxcbiAgICAgIGRhdGFMZW5ndGgsXG4gICAgICByb3dIZWlnaHQsXG4gICAgICBwYWdlU2l6ZSxcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgZmxleDogJ25vbmUnLFxuICAgICAgICBoZWlnaHQ6IHJvd0hlaWdodCAqIHBhZ2VTaXplLFxuICAgICAgfX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEJvZHlQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50Qm9keVByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWFjdExpc3RcbiAgICAgICAgICAgIGl0ZW1zUmVuZGVyZXI9e3RoaXMucm93c1JlbmRlcmVyfVxuICAgICAgICAgICAgaXRlbVJlbmRlcmVyPXt0aGlzLnJvd1JlbmRlcmVyfVxuICAgICAgICAgICAgbGVuZ3RoPXtkYXRhTGVuZ3RofVxuICAgICAgICAgICAgdHlwZT0ndW5pZm9ybSdcbiAgICAgICAgICAgIHVzZVN0YXRpY1NpemVcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==