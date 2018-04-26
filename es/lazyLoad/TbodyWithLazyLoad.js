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
        {
          style: {
            overflow: 'auto',
            flex: 'none',
            height: rowHeight * pageSize
          },
          onScroll: this.trackScroll
        },
        React.createElement(
          'div',
          _extends({
            className: classnames(tBodyProps.className, 'rt-tbody'),
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
  pageSize: PropTypes.number,
  lazyLoadUniqueID: PropTypes.any.isRequired
};
export default TbodyWithLazyLoad;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXp5TG9hZC9UYm9keVdpdGhMYXp5TG9hZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImNsYXNzbmFtZXMiLCJSZWFjdExpc3QiLCJUYm9keVdpdGhMYXp5TG9hZCIsInByb3BzIiwicm93c1JlbmRlcmVyIiwiYmluZCIsInJvd1JlbmRlcmVyIiwidHJhY2tTY3JvbGwiLCJldmVudCIsImV2ZW50TmFtZSIsImxhenlMb2FkVW5pcXVlSUQiLCJob3Jpem9udGFsU2Nyb2xsRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImhvcml6b250YWxTY3JvbGwiLCJ0YXJnZXQiLCJzY3JvbGxMZWZ0IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiaXRlbXMiLCJyZWYiLCJtYXAiLCJkIiwiaSIsIm1ha2VQYWdlUm93IiwiaW5kZXgiLCJrZXkiLCJwYWdlUm93cyIsInRCb2R5UHJvcHMiLCJyb3dNaW5XaWR0aCIsImRhdGFMZW5ndGgiLCJyb3dIZWlnaHQiLCJwYWdlU2l6ZSIsIm92ZXJmbG93IiwiZmxleCIsImhlaWdodCIsImNsYXNzTmFtZSIsInN0eWxlIiwibWluV2lkdGgiLCJyZXN0IiwicHJvcFR5cGVzIiwiZnVuYyIsImFycmF5Iiwib2JqZWN0IiwibnVtYmVyIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztJQUVxQkMsaUI7OztBQUNuQiw2QkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLHNJQUNaQSxLQURZOztBQUdsQixVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQUNBLFVBQUtFLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkYsSUFBakIsT0FBbkI7QUFMa0I7QUFNbkI7Ozs7Z0NBYVlHLEssRUFBTztBQUNsQixVQUFNQyw0QkFBMEIsS0FBS04sS0FBTCxDQUFXTyxnQkFBM0M7QUFDQSxVQUFNQyx3QkFBd0IsSUFBSUMsV0FBSixDQUFnQkgsU0FBaEIsRUFBMkI7QUFDdkRJLGdCQUFRO0FBQ05DLDRCQUFrQk4sTUFBTU8sTUFBTixDQUFhQztBQUR6QjtBQUQrQyxPQUEzQixDQUE5Qjs7QUFNQUMsZUFBU0MsYUFBVCxDQUF1QlAscUJBQXZCO0FBQ0Q7OztpQ0FHYVEsSyxFQUFPQyxHLEVBQUs7QUFBQTs7QUFDeEIsYUFDRTtBQUFBO0FBQUEsVUFBSyxLQUFLQSxHQUFWO0FBQ0dELGNBQU1FLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxpQkFBVSxPQUFLcEIsS0FBTCxDQUFXcUIsV0FBWCxDQUF1QkYsQ0FBdkIsRUFBMEJDLENBQTFCLENBQVY7QUFBQSxTQUFWO0FBREgsT0FERjtBQUtEOzs7Z0NBRVlFLEssRUFBT0MsRyxFQUFLO0FBQ3ZCLGFBQU8sS0FBS3ZCLEtBQUwsQ0FBV3dCLFFBQVgsQ0FBb0JGLEtBQXBCLENBQVA7QUFDRDs7OzZCQUVTO0FBQUEsbUJBT0osS0FBS3RCLEtBUEQ7QUFBQSxVQUVOeUIsVUFGTSxVQUVOQSxVQUZNO0FBQUEsVUFHTkMsV0FITSxVQUdOQSxXQUhNO0FBQUEsVUFJTkMsVUFKTSxVQUlOQSxVQUpNO0FBQUEsVUFLTkMsU0FMTSxVQUtOQSxTQUxNO0FBQUEsVUFNTkMsUUFOTSxVQU1OQSxRQU5NOzs7QUFTUixhQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFPO0FBQ0xDLHNCQUFVLE1BREw7QUFFTEMsa0JBQU0sTUFGRDtBQUdMQyxvQkFBUUosWUFBWUM7QUFIZixXQURUO0FBTUUsb0JBQVUsS0FBS3pCO0FBTmpCO0FBUUU7QUFBQTtBQUFBO0FBQ0UsdUJBQVdQLFdBQVc0QixXQUFXUSxTQUF0QixFQUFpQyxVQUFqQyxDQURiO0FBRUUsZ0NBQ0tSLFdBQVdTLEtBRGhCO0FBRUVDLHdCQUFhVCxXQUFiLE9BRkY7QUFHRUksd0JBQVU7QUFIWjtBQUZGLGFBT01MLFdBQVdXLElBUGpCO0FBU0UsOEJBQUMsU0FBRDtBQUNFLDJCQUFlLEtBQUtuQyxZQUR0QjtBQUVFLDBCQUFjLEtBQUtFLFdBRnJCO0FBR0Usb0JBQVF3QixVQUhWO0FBSUUsa0JBQUssU0FKUDtBQUtFO0FBTEY7QUFURjtBQVJGLE9BREY7QUE0QkQ7Ozs7RUFqRjRDaEMsUzs7QUFBMUJJLGlCLENBU1pzQyxTLEdBQVk7QUFDakJoQixlQUFhekIsVUFBVTBDLElBRE47QUFFakJkLFlBQVU1QixVQUFVMkMsS0FGSDtBQUdqQmQsY0FBWTdCLFVBQVU0QyxNQUhMO0FBSWpCZCxlQUFhOUIsVUFBVTZDLE1BSk47QUFLakJkLGNBQVkvQixVQUFVNkMsTUFMTDtBQU1qQmIsYUFBV2hDLFVBQVU2QyxNQU5KO0FBT2pCWixZQUFVakMsVUFBVTZDLE1BUEg7QUFRakJsQyxvQkFBa0JYLFVBQVU4QyxHQUFWLENBQWNDO0FBUmYsQztlQVRBNUMsaUIiLCJmaWxlIjoiVGJvZHlXaXRoTGF6eUxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0TGlzdCBmcm9tICdyZWFjdC1saXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYm9keVdpdGhMYXp5TG9hZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5yb3dzUmVuZGVyZXIgPSB0aGlzLnJvd3NSZW5kZXJlci5iaW5kKHRoaXMpXG4gICAgdGhpcy5yb3dSZW5kZXJlciA9IHRoaXMucm93UmVuZGVyZXIuYmluZCh0aGlzKVxuICAgIHRoaXMudHJhY2tTY3JvbGwgPSB0aGlzLnRyYWNrU2Nyb2xsLmJpbmQodGhpcylcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbWFrZVBhZ2VSb3c6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBhZ2VSb3dzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgdEJvZHlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICByb3dNaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkYXRhTGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJvd0hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsYXp5TG9hZFVuaXF1ZUlEOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIH1cblxuICB0cmFja1Njcm9sbCAoZXZlbnQpIHtcbiAgICBjb25zdCBldmVudE5hbWUgPSBgdGJvZHlzY3JvbGwke3RoaXMucHJvcHMubGF6eUxvYWRVbmlxdWVJRH1gO1xuICAgIGNvbnN0IGhvcml6b250YWxTY3JvbGxFdmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBob3Jpem9udGFsU2Nyb2xsOiBldmVudC50YXJnZXQuc2Nyb2xsTGVmdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGhvcml6b250YWxTY3JvbGxFdmVudCk7XG4gIH1cblxuXG4gIHJvd3NSZW5kZXJlciAoaXRlbXMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgICAge2l0ZW1zLm1hcCgoZCwgaSkgPT4gdGhpcy5wcm9wcy5tYWtlUGFnZVJvdyhkLCBpKSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByb3dSZW5kZXJlciAoaW5kZXgsIGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnBhZ2VSb3dzW2luZGV4XVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICB0Qm9keVByb3BzLFxuICAgICAgcm93TWluV2lkdGgsXG4gICAgICBkYXRhTGVuZ3RoLFxuICAgICAgcm93SGVpZ2h0LFxuICAgICAgcGFnZVNpemUsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICBmbGV4OiAnbm9uZScsXG4gICAgICAgICAgaGVpZ2h0OiByb3dIZWlnaHQgKiBwYWdlU2l6ZSxcbiAgICAgICAgfX1cbiAgICAgICAgb25TY3JvbGw9e3RoaXMudHJhY2tTY3JvbGx9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEJvZHlQcm9wcy5jbGFzc05hbWUsICdydC10Ym9keScpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50Qm9keVByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWFjdExpc3RcbiAgICAgICAgICAgIGl0ZW1zUmVuZGVyZXI9e3RoaXMucm93c1JlbmRlcmVyfVxuICAgICAgICAgICAgaXRlbVJlbmRlcmVyPXt0aGlzLnJvd1JlbmRlcmVyfVxuICAgICAgICAgICAgbGVuZ3RoPXtkYXRhTGVuZ3RofVxuICAgICAgICAgICAgdHlwZT0ndW5pZm9ybSdcbiAgICAgICAgICAgIHVzZVN0YXRpY1NpemVcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==