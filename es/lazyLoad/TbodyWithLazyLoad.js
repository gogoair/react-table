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
          pageSize = _props.pageSize,
          reactListProps = _props.reactListProps;


      var height = dataLength > pageSize ? rowHeight * pageSize : dataLength * pageSize;

      return React.createElement(
        'div',
        {
          style: {
            overflow: 'auto',
            flex: 'none',
            height: height
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
          React.createElement(ReactList, _extends({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXp5TG9hZC9UYm9keVdpdGhMYXp5TG9hZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImNsYXNzbmFtZXMiLCJSZWFjdExpc3QiLCJUYm9keVdpdGhMYXp5TG9hZCIsInByb3BzIiwicm93c1JlbmRlcmVyIiwiYmluZCIsInJvd1JlbmRlcmVyIiwidHJhY2tTY3JvbGwiLCJldmVudCIsImV2ZW50TmFtZSIsImxhenlMb2FkVW5pcXVlSUQiLCJob3Jpem9udGFsU2Nyb2xsRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImhvcml6b250YWxTY3JvbGwiLCJ0YXJnZXQiLCJzY3JvbGxMZWZ0IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiaXRlbXMiLCJyZWYiLCJtYXAiLCJkIiwiaSIsIm1ha2VQYWdlUm93IiwiaW5kZXgiLCJrZXkiLCJwYWdlUm93cyIsInRCb2R5UHJvcHMiLCJyb3dNaW5XaWR0aCIsImRhdGFMZW5ndGgiLCJyb3dIZWlnaHQiLCJwYWdlU2l6ZSIsInJlYWN0TGlzdFByb3BzIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJmbGV4IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtaW5XaWR0aCIsInJlc3QiLCJwcm9wVHlwZXMiLCJmdW5jIiwiYXJyYXkiLCJvYmplY3QiLCJudW1iZXIiLCJhbnkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7O0lBRXFCQyxpQjs7O0FBQ25CLDZCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsc0lBQ1pBLEtBRFk7O0FBR2xCLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQW5CO0FBQ0EsVUFBS0UsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRixJQUFqQixPQUFuQjtBQUxrQjtBQU1uQjs7OztnQ0FhWUcsSyxFQUFPO0FBQ2xCLFVBQU1DLDRCQUEwQixLQUFLTixLQUFMLENBQVdPLGdCQUEzQztBQUNBLFVBQU1DLHdCQUF3QixJQUFJQyxXQUFKLENBQWdCSCxTQUFoQixFQUEyQjtBQUN2REksZ0JBQVE7QUFDTkMsNEJBQWtCTixNQUFNTyxNQUFOLENBQWFDO0FBRHpCO0FBRCtDLE9BQTNCLENBQTlCOztBQU1BQyxlQUFTQyxhQUFULENBQXVCUCxxQkFBdkI7QUFDRDs7O2lDQUdhUSxLLEVBQU9DLEcsRUFBSztBQUFBOztBQUN4QixhQUNFO0FBQUE7QUFBQSxVQUFLLEtBQUtBLEdBQVY7QUFDR0QsY0FBTUUsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGlCQUFVLE9BQUtwQixLQUFMLENBQVdxQixXQUFYLENBQXVCRixDQUF2QixFQUEwQkMsQ0FBMUIsQ0FBVjtBQUFBLFNBQVY7QUFESCxPQURGO0FBS0Q7OztnQ0FFWUUsSyxFQUFPQyxHLEVBQUs7QUFDdkIsYUFBTyxLQUFLdkIsS0FBTCxDQUFXd0IsUUFBWCxDQUFvQkYsS0FBcEIsQ0FBUDtBQUNEOzs7NkJBRVM7QUFBQSxtQkFRSixLQUFLdEIsS0FSRDtBQUFBLFVBRU55QixVQUZNLFVBRU5BLFVBRk07QUFBQSxVQUdOQyxXQUhNLFVBR05BLFdBSE07QUFBQSxVQUlOQyxVQUpNLFVBSU5BLFVBSk07QUFBQSxVQUtOQyxTQUxNLFVBS05BLFNBTE07QUFBQSxVQU1OQyxRQU5NLFVBTU5BLFFBTk07QUFBQSxVQU9OQyxjQVBNLFVBT05BLGNBUE07OztBQVVSLFVBQU1DLFNBQVNKLGFBQWFFLFFBQWIsR0FBd0JELFlBQVlDLFFBQXBDLEdBQStDRixhQUFhRSxRQUEzRTs7QUFFQSxhQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFPO0FBQ0xHLHNCQUFVLE1BREw7QUFFTEMsa0JBQU0sTUFGRDtBQUdMRjtBQUhLLFdBRFQ7QUFNRSxvQkFBVSxLQUFLM0I7QUFOakI7QUFRRTtBQUFBO0FBQUE7QUFDRSx1QkFBV1AsV0FBVzRCLFdBQVdTLFNBQXRCLEVBQWlDLFVBQWpDLENBRGI7QUFFRSxnQ0FDS1QsV0FBV1UsS0FEaEI7QUFFRUMsd0JBQWFWLFdBQWIsT0FGRjtBQUdFTSx3QkFBVTtBQUhaO0FBRkYsYUFPTVAsV0FBV1ksSUFQakI7QUFTRSw4QkFBQyxTQUFEO0FBQ0UsMkJBQWUsS0FBS3BDLFlBRHRCO0FBRUUsMEJBQWMsS0FBS0UsV0FGckI7QUFHRSxvQkFBUXdCLFVBSFY7QUFJRSxrQkFBSyxTQUpQO0FBS0U7QUFMRixhQU1NRyxjQU5OO0FBVEY7QUFSRixPQURGO0FBNkJEOzs7O0VBckY0Q25DLFM7O0FBQTFCSSxpQixDQVNadUMsUyxHQUFZO0FBQ2pCakIsZUFBYXpCLFVBQVUyQyxJQUROO0FBRWpCZixZQUFVNUIsVUFBVTRDLEtBRkg7QUFHakJmLGNBQVk3QixVQUFVNkMsTUFITDtBQUlqQmYsZUFBYTlCLFVBQVU4QyxNQUpOO0FBS2pCZixjQUFZL0IsVUFBVThDLE1BTEw7QUFNakJkLGFBQVdoQyxVQUFVOEMsTUFOSjtBQU9qQmIsWUFBVWpDLFVBQVU4QyxNQVBIO0FBUWpCbkMsb0JBQWtCWCxVQUFVK0MsR0FBVixDQUFjQztBQVJmLEM7ZUFUQTdDLGlCIiwiZmlsZSI6IlRib2R5V2l0aExhenlMb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdExpc3QgZnJvbSAncmVhY3QtbGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGJvZHlXaXRoTGF6eUxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMucm93c1JlbmRlcmVyID0gdGhpcy5yb3dzUmVuZGVyZXIuYmluZCh0aGlzKVxuICAgIHRoaXMucm93UmVuZGVyZXIgPSB0aGlzLnJvd1JlbmRlcmVyLmJpbmQodGhpcylcbiAgICB0aGlzLnRyYWNrU2Nyb2xsID0gdGhpcy50cmFja1Njcm9sbC5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1ha2VQYWdlUm93OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwYWdlUm93czogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRCb2R5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcm93TWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGF0YUxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByb3dIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGF6eUxvYWRVbmlxdWVJRDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICB9XG5cbiAgdHJhY2tTY3JvbGwgKGV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnROYW1lID0gYHRib2R5c2Nyb2xsJHt0aGlzLnByb3BzLmxhenlMb2FkVW5pcXVlSUR9YDtcbiAgICBjb25zdCBob3Jpem9udGFsU2Nyb2xsRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgaG9yaXpvbnRhbFNjcm9sbDogZXZlbnQudGFyZ2V0LnNjcm9sbExlZnQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChob3Jpem9udGFsU2Nyb2xsRXZlbnQpO1xuICB9XG5cblxuICByb3dzUmVuZGVyZXIgKGl0ZW1zLCByZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3JlZn0+XG4gICAgICAgIHtpdGVtcy5tYXAoKGQsIGkpID0+IHRoaXMucHJvcHMubWFrZVBhZ2VSb3coZCwgaSkpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcm93UmVuZGVyZXIgKGluZGV4LCBrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5wYWdlUm93c1tpbmRleF1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdEJvZHlQcm9wcyxcbiAgICAgIHJvd01pbldpZHRoLFxuICAgICAgZGF0YUxlbmd0aCxcbiAgICAgIHJvd0hlaWdodCxcbiAgICAgIHBhZ2VTaXplLFxuICAgICAgcmVhY3RMaXN0UHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGhlaWdodCA9IGRhdGFMZW5ndGggPiBwYWdlU2l6ZSA/IHJvd0hlaWdodCAqIHBhZ2VTaXplIDogZGF0YUxlbmd0aCAqIHBhZ2VTaXplO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgIGZsZXg6ICdub25lJyxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH19XG4gICAgICAgIG9uU2Nyb2xsPXt0aGlzLnRyYWNrU2Nyb2xsfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRCb2R5UHJvcHMuY2xhc3NOYW1lLCAncnQtdGJvZHknKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udEJvZHlQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtyb3dNaW5XaWR0aH1weGAsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50Qm9keVByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8UmVhY3RMaXN0XG4gICAgICAgICAgICBpdGVtc1JlbmRlcmVyPXt0aGlzLnJvd3NSZW5kZXJlcn1cbiAgICAgICAgICAgIGl0ZW1SZW5kZXJlcj17dGhpcy5yb3dSZW5kZXJlcn1cbiAgICAgICAgICAgIGxlbmd0aD17ZGF0YUxlbmd0aH1cbiAgICAgICAgICAgIHR5cGU9J3VuaWZvcm0nXG4gICAgICAgICAgICB1c2VTdGF0aWNTaXplXG4gICAgICAgICAgICB7Li4ucmVhY3RMaXN0UHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0=