'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactTableDefaults = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _lifecycle = require('./lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _propTypes = require('./propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TbodyWithLazyLoad = require('./lazyLoad/TbodyWithLazyLoad');

var _TbodyWithLazyLoad2 = _interopRequireDefault(_TbodyWithLazyLoad);

var _TheadWithLazyLoad = require('./lazyLoad/TheadWithLazyLoad');

var _TheadWithLazyLoad2 = _interopRequireDefault(_TheadWithLazyLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var ReactTableDefaults = exports.ReactTableDefaults = _defaultProps2.default;

var ReactTable = function (_Methods) {
  _inherits(ReactTable, _Methods);

  function ReactTable(props) {
    _classCallCheck(this, ReactTable);

    var _this = _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).call(this));

    _this.getResolvedState = _this.getResolvedState.bind(_this);
    _this.getDataModel = _this.getDataModel.bind(_this);
    _this.getSortedData = _this.getSortedData.bind(_this);
    _this.fireFetchData = _this.fireFetchData.bind(_this);
    _this.getPropOrState = _this.getPropOrState.bind(_this);
    _this.getStateOrProp = _this.getStateOrProp.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.sortData = _this.sortData.bind(_this);
    _this.getMinRows = _this.getMinRows.bind(_this);
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.onPageSizeChange = _this.onPageSizeChange.bind(_this);
    _this.sortColumn = _this.sortColumn.bind(_this);
    _this.filterColumn = _this.filterColumn.bind(_this);
    _this.resizeColumnStart = _this.resizeColumnStart.bind(_this);
    _this.resizeColumnEnd = _this.resizeColumnEnd.bind(_this);
    _this.resizeColumnMoving = _this.resizeColumnMoving.bind(_this);

    _this.state = {
      page: 0,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false
    };
    return _this;
  }

  _createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var resolvedState = this.getResolvedState();
      var children = resolvedState.children,
          className = resolvedState.className,
          style = resolvedState.style,
          getProps = resolvedState.getProps,
          getTableProps = resolvedState.getTableProps,
          getTheadGroupProps = resolvedState.getTheadGroupProps,
          getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
          getTheadGroupThProps = resolvedState.getTheadGroupThProps,
          getTheadProps = resolvedState.getTheadProps,
          getTheadTrProps = resolvedState.getTheadTrProps,
          getTheadThProps = resolvedState.getTheadThProps,
          getTheadFilterProps = resolvedState.getTheadFilterProps,
          getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
          getTheadFilterThProps = resolvedState.getTheadFilterThProps,
          getTbodyProps = resolvedState.getTbodyProps,
          getTrGroupProps = resolvedState.getTrGroupProps,
          getTrProps = resolvedState.getTrProps,
          getTdProps = resolvedState.getTdProps,
          getTfootProps = resolvedState.getTfootProps,
          getTfootTrProps = resolvedState.getTfootTrProps,
          getTfootTdProps = resolvedState.getTfootTdProps,
          getPaginationProps = resolvedState.getPaginationProps,
          getLoadingProps = resolvedState.getLoadingProps,
          getNoDataProps = resolvedState.getNoDataProps,
          getResizerProps = resolvedState.getResizerProps,
          showPagination = resolvedState.showPagination,
          showPaginationTop = resolvedState.showPaginationTop,
          showPaginationBottom = resolvedState.showPaginationBottom,
          manual = resolvedState.manual,
          loadingText = resolvedState.loadingText,
          noDataText = resolvedState.noDataText,
          sortable = resolvedState.sortable,
          multiSort = resolvedState.multiSort,
          resizable = resolvedState.resizable,
          filterable = resolvedState.filterable,
          pivotIDKey = resolvedState.pivotIDKey,
          pivotValKey = resolvedState.pivotValKey,
          pivotBy = resolvedState.pivotBy,
          subRowsKey = resolvedState.subRowsKey,
          aggregatedKey = resolvedState.aggregatedKey,
          originalKey = resolvedState.originalKey,
          indexKey = resolvedState.indexKey,
          groupedByPivotKey = resolvedState.groupedByPivotKey,
          loading = resolvedState.loading,
          pageSize = resolvedState.pageSize,
          page = resolvedState.page,
          sorted = resolvedState.sorted,
          filtered = resolvedState.filtered,
          resized = resolvedState.resized,
          expanded = resolvedState.expanded,
          pages = resolvedState.pages,
          onExpandedChange = resolvedState.onExpandedChange,
          TableComponent = resolvedState.TableComponent,
          TbodyComponent = resolvedState.TbodyComponent,
          TrGroupComponent = resolvedState.TrGroupComponent,
          TrComponent = resolvedState.TrComponent,
          ThComponent = resolvedState.ThComponent,
          TdComponent = resolvedState.TdComponent,
          TfootComponent = resolvedState.TfootComponent,
          PaginationComponent = resolvedState.PaginationComponent,
          LoadingComponent = resolvedState.LoadingComponent,
          SubComponent = resolvedState.SubComponent,
          NoDataComponent = resolvedState.NoDataComponent,
          ResizerComponent = resolvedState.ResizerComponent,
          ExpanderComponent = resolvedState.ExpanderComponent,
          PivotValueComponent = resolvedState.PivotValueComponent,
          PivotComponent = resolvedState.PivotComponent,
          AggregatedComponent = resolvedState.AggregatedComponent,
          FilterComponent = resolvedState.FilterComponent,
          PadRowComponent = resolvedState.PadRowComponent,
          resolvedData = resolvedState.resolvedData,
          allVisibleColumns = resolvedState.allVisibleColumns,
          headerGroups = resolvedState.headerGroups,
          hasHeaderGroups = resolvedState.hasHeaderGroups,
          sortedData = resolvedState.sortedData,
          currentlyResizing = resolvedState.currentlyResizing,
          lazyLoadMode = resolvedState.lazyLoadMode,
          lazyLoadModePageSize = resolvedState.lazyLoadModePageSize,
          rowHeight = resolvedState.rowHeight,
          lazyLoadUniqueID = resolvedState.lazyLoadUniqueID,
          reactListProps = resolvedState.reactListProps;


      var TheadComponent = lazyLoadMode && !showPagination ? _TheadWithLazyLoad2.default : resolvedState.TheadComponent;

      // Pagination
      var startRow = pageSize * page;
      var endRow = startRow + pageSize;
      var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
      var minRows = this.getMinRows();
      var padRows = _utils2.default.range(Math.max(minRows - pageRows.length, 0));

      var hasColumnFooter = allVisibleColumns.some(function (d) {
        return d.Footer;
      });
      var hasFilters = filterable || allVisibleColumns.some(function (d) {
        return d.filterable;
      });

      var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        return [rows.map(function (row, i) {
          index += 1;
          var rowWithViewIndex = _extends({}, row, {
            _viewIndex: index
          });
          var newPath = path.concat([i]);
          if (rowWithViewIndex[subRowsKey] && _utils2.default.get(expanded, newPath)) {
            var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

            var _recurseRowsViewIndex2 = _slicedToArray(_recurseRowsViewIndex, 2);

            rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex2[0];
            index = _recurseRowsViewIndex2[1];
          }
          return rowWithViewIndex;
        }), index];
      };

      var _recurseRowsViewIndex3 = recurseRowsViewIndex(pageRows);

      var _recurseRowsViewIndex4 = _slicedToArray(_recurseRowsViewIndex3, 1);

      pageRows = _recurseRowsViewIndex4[0];


      var canPrevious = page > 0;
      var canNext = page + 1 < pages;

      var rowMinWidth = _utils2.default.sum(allVisibleColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _utils2.default.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));

      var rowIndex = -1;

      var finalState = _extends({}, resolvedState, {
        startRow: startRow,
        endRow: endRow,
        pageRows: pageRows,
        minRows: minRows,
        padRows: padRows,
        hasColumnFooter: hasColumnFooter,
        canPrevious: canPrevious,
        canNext: canNext,
        rowMinWidth: rowMinWidth
      });

      var rootProps = _utils2.default.splitProps(getProps(finalState, undefined, undefined, this));
      var tableProps = _utils2.default.splitProps(getTableProps(finalState, undefined, undefined, this));
      var tBodyProps = _utils2.default.splitProps(getTbodyProps(finalState, undefined, undefined, this));
      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this);

      // Visual Components

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var resizedValue = function resizedValue(col) {
          return (resized.find(function (x) {
            return x.id === col.id;
          }) || {}).value;
        };
        var flex = _utils2.default.sum(column.columns.map(function (col) {
          return col.width || resizedValue(col) ? 0 : col.minWidth;
        }));
        var width = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.minWidth);
        }));
        var maxWidth = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.maxWidth);
        }));

        var theadGroupThProps = _utils2.default.splitProps(getTheadGroupThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadGroupThProps.rest, columnHeaderProps.rest);

        var flexStyles = {
          flex: flex + ' 0 auto',
          width: _utils2.default.asPx(width),
          maxWidth: _utils2.default.asPx(maxWidth)
        };

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, flexStyles)
          }, rest),
          _utils2.default.normalizeComponent(column.Header, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeHeaderGroups = function makeHeaderGroups() {
        var theadGroupProps = _utils2.default.splitProps(getTheadGroupProps(finalState, undefined, undefined, _this2));
        var theadGroupTrProps = _utils2.default.splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-headerGroups', theadGroupProps.className),
            style: _extends({}, theadGroupProps.style, {
              minWidth: rowMinWidth + 'px'
            }),
            lazyLoadUniqueID: lazyLoadMode && !showPagination ? lazyLoadUniqueID : undefined
          }, theadGroupProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadGroupTrProps.className,
              style: theadGroupTrProps.style
            }, theadGroupTrProps.rest),
            headerGroups.map(makeHeaderGroup)
          )
        );
      };

      var makeHeader = function makeHeader(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var sort = sorted.find(function (d) {
          return d.id === column.id;
        });
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadThProps = _utils2.default.splitProps(getTheadThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = _utils2.default.getFirstDefined(column.resizable, resizable, false);
        var resizer = isResizable ? _react2.default.createElement(ResizerComponent, _extends({
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeColumnStart(e, column, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeColumnStart(e, column, true);
          }
        }, getResizerProps('finalState', undefined, column, _this2))) : null;

        var isSortable = _utils2.default.getFirstDefined(column.sortable, sortable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, isResizable && 'rt-resizable-header', sort ? sort.desc ? '-sort-desc' : '-sort-asc' : '', isSortable && '-cursor-pointer', !show && '-hidden', pivotBy && pivotBy.slice(0, -1).includes(column.id) && 'rt-header-pivot'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            }),
            toggleSort: function toggleSort(e) {
              if (isSortable) _this2.sortColumn(column, multiSort ? e.shiftKey : false);
            }
          }, rest),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(isResizable && 'rt-resizable-header-content') },
            _utils2.default.normalizeComponent(column.Header, {
              data: sortedData,
              column: column
            })
          ),
          resizer
        );
      };

      var makeHeaders = function makeHeaders() {
        var theadProps = _utils2.default.splitProps(getTheadProps(finalState, undefined, undefined, _this2));
        var theadTrProps = _utils2.default.splitProps(getTheadTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-header', theadProps.className),
            style: _extends({}, theadProps.style, {
              minWidth: rowMinWidth + 'px'
            }),
            lazyLoadUniqueID: lazyLoadMode && !showPagination ? lazyLoadUniqueID : undefined
          }, theadProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadTrProps.className,
              style: theadTrProps.style
            }, theadTrProps.rest),
            allVisibleColumns.map(makeHeader)
          )
        );
      };

      var makeFilter = function makeFilter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadFilterThProps = _utils2.default.splitProps(getTheadFilterThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });

        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = _utils2.default.getFirstDefined(column.filterable, filterable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, rest),
          isFilterable ? _utils2.default.normalizeComponent(ResolvedFilterComponent, {
            column: column,
            filter: filter,
            onChange: function onChange(value) {
              return _this2.filterColumn(column, value);
            }
          }, _defaultProps2.default.column.Filter) : null
        );
      };

      var makeFilters = function makeFilters() {
        var theadFilterProps = _utils2.default.splitProps(getTheadFilterProps(finalState, undefined, undefined, _this2));
        var theadFilterTrProps = _utils2.default.splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-filters', theadFilterProps.className),
            style: _extends({}, theadFilterProps.style, {
              minWidth: rowMinWidth + 'px'
            }),
            lazyLoadUniqueID: lazyLoadMode && !showPagination ? lazyLoadUniqueID : undefined
          }, theadFilterProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadFilterTrProps.className,
              style: theadFilterTrProps.style
            }, theadFilterTrProps.rest),
            allVisibleColumns.map(makeFilter)
          )
        );
      };

      var makePageRow = function makePageRow(row, i) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var rowInfo = {
          original: row[originalKey],
          row: row,
          index: row[indexKey],
          viewIndex: rowIndex += 1,
          pageSize: pageSize,
          page: page,
          level: path.length,
          nestingPath: path.concat([i]),
          aggregated: row[aggregatedKey],
          groupedByPivot: row[groupedByPivotKey],
          subRows: row[subRowsKey]
        };
        var isExpanded = _utils2.default.get(expanded, rowInfo.nestingPath);
        var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, rowInfo, undefined, _this2));
        var trGroupStyle = lazyLoadMode ? _extends({}, trGroupProps.style, {
          height: rowHeight
        }) : trGroupProps.style;

        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: rowInfo.nestingPath.join('_'), style: trGroupStyle }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
              style: trProps.style
            }, trProps.rest),
            allVisibleColumns.map(function (column, i2) {
              var resizedCol = resized.find(function (x) {
                return x.id === column.id;
              }) || {};
              var show = typeof column.show === 'function' ? column.show() : column.show;
              var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
              var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
              var tdProps = _utils2.default.splitProps(getTdProps(finalState, rowInfo, column, _this2));
              var columnProps = _utils2.default.splitProps(column.getProps(finalState, rowInfo, column, _this2));

              var classes = [tdProps.className, column.className, columnProps.className];

              var styles = _extends({}, tdProps.style, column.style, columnProps.style);

              var cellInfo = _extends({}, rowInfo, {
                isExpanded: isExpanded,
                column: _extends({}, column),
                value: rowInfo.row[column.id],
                pivoted: column.pivoted,
                expander: column.expander,
                resized: resized,
                show: show,
                width: width,
                maxWidth: maxWidth,
                tdProps: tdProps,
                columnProps: columnProps,
                classes: classes,
                styles: styles
              });

              var value = cellInfo.value;

              var useOnExpanderClick = void 0;
              var isBranch = void 0;
              var isPreview = void 0;

              var onExpanderClick = function onExpanderClick(e) {
                var newExpanded = _utils2.default.clone(expanded);
                if (isExpanded) {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, false);
                } else {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, {});
                }

                return _this2.setStateWithData({
                  expanded: newExpanded
                }, function () {
                  return onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
                });
              };

              // Default to a standard cell
              var resolvedCell = _utils2.default.normalizeComponent(column.Cell, cellInfo, value);

              // Resolve Renderers
              var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
              var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
              var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
              var DefaultResolvedPivotComponent = PivotComponent || function (props) {
                return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(ResolvedExpanderComponent, props),
                  _react2.default.createElement(ResolvedPivotValueComponent, props)
                );
              };
              var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent;

              // Is this cell expandable?
              if (cellInfo.pivoted || cellInfo.expander) {
                // Make it expandable by defualt
                cellInfo.expandable = true;
                useOnExpanderClick = true;
                // If pivoted, has no subRows, and does not have a subComponent,
                // do not make expandable
                if (cellInfo.pivoted && !cellInfo.subRows && !SubComponent) {
                  cellInfo.expandable = false;
                }
              }

              if (cellInfo.pivoted) {
                // Is this column a branch?
                isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
                // Should this column be blank?
                isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
                // Pivot Cell Render Override
                if (isBranch) {
                  // isPivot
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                    value: row[pivotValKey]
                  }), row[pivotValKey]);
                } else if (isPreview) {
                  // Show the pivot preview
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
                } else {
                  resolvedCell = null;
                }
              } else if (cellInfo.aggregated) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              }

              if (cellInfo.expander) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);
                if (pivotBy) {
                  if (cellInfo.groupedByPivot) {
                    resolvedCell = null;
                  }
                  if (!cellInfo.subRows && !SubComponent) {
                    resolvedCell = null;
                  }
                }
              }

              var resolvedOnExpanderClick = useOnExpanderClick ? onExpanderClick : function () {};

              // If there are multiple onClick events, make sure they don't
              // override eachother. This should maybe be expanded to handle all
              // function attributes
              var interactionProps = {
                onClick: resolvedOnExpanderClick
              };

              if (tdProps.rest.onClick) {
                interactionProps.onClick = function (e) {
                  tdProps.rest.onClick(e, function () {
                    return resolvedOnExpanderClick(e);
                  });
                };
              }

              if (columnProps.rest.onClick) {
                interactionProps.onClick = function (e) {
                  columnProps.rest.onClick(e, function () {
                    return resolvedOnExpanderClick(e);
                  });
                };
              }

              // Return the cell
              return _react2.default.createElement(
                TdComponent
                // eslint-disable-next-line react/no-array-index-key
                ,
                _extends({ key: i2 + '-' + column.id,
                  className: (0, _classnames2.default)(classes, !show && 'hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
                  style: _extends({}, styles, {
                    flex: width + ' 0 auto',
                    width: _utils2.default.asPx(width),
                    maxWidth: _utils2.default.asPx(maxWidth)
                  })
                }, tdProps.rest, columnProps.rest, interactionProps),
                resolvedCell
              );
            })
          ),
          rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
            return makePageRow(d, i, rowInfo.nestingPath);
          }),
          SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo)
        );
      };

      var makePadColumn = function makePadColumn(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var flex = width;
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tdProps = _utils2.default.splitProps(getTdProps(finalState, undefined, column, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = _extends({}, tdProps.style, column.style, columnProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: flex + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, tdProps.rest),
          _utils2.default.normalizeComponent(PadRowComponent)
        );
      };

      var makePadRow = function makePadRow(row, i) {
        var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: i }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            {
              className: (0, _classnames2.default)('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
              style: trProps.style || {}
            },
            allVisibleColumns.map(makePadColumn)
          )
        );
      };

      var makeColumnFooter = function makeColumnFooter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tFootTdProps = _utils2.default.splitProps(getTfootTdProps(finalState, undefined, undefined, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));
        var columnFooterProps = _utils2.default.splitProps(column.getFooterProps(finalState, undefined, column, _this2));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = _extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, columnProps.rest, tFootTdProps.rest, columnFooterProps.rest),
          _utils2.default.normalizeComponent(column.Footer, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = getTfootProps(finalState, undefined, undefined, _this2);
        var tFootTrProps = _utils2.default.splitProps(getTfootTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TfootComponent,
          _extends({
            className: tFootProps.className,
            style: _extends({}, tFootProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, tFootProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(tFootTrProps.className),
              style: tFootTrProps.style
            }, tFootTrProps.rest),
            allVisibleColumns.map(makeColumnFooter)
          )
        );
      };

      var makePagination = function makePagination() {
        var paginationProps = _utils2.default.splitProps(getPaginationProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(PaginationComponent, _extends({}, resolvedState, {
          pages: pages,
          canPrevious: canPrevious,
          canNext: canNext,
          onPageChange: _this2.onPageChange,
          onPageSizeChange: _this2.onPageSizeChange,
          className: paginationProps.className,
          style: paginationProps.style
        }, paginationProps.rest));
      };

      var makeTable = function makeTable() {
        var pagination = makePagination();
        return _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)('ReactTable', className, rootProps.className),
            style: _extends({}, style, rootProps.style)
          }, rootProps.rest),
          showPagination && showPaginationTop ? _react2.default.createElement(
            'div',
            { className: 'pagination-top' },
            pagination
          ) : null,
          _react2.default.createElement(
            TableComponent,
            _extends({
              className: (0, _classnames2.default)(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
              style: tableProps.style
            }, tableProps.rest),
            hasHeaderGroups ? makeHeaderGroups() : null,
            makeHeaders(),
            hasFilters ? makeFilters() : null,
            lazyLoadMode && !showPagination ? _react2.default.createElement(_TbodyWithLazyLoad2.default, {
              tBodyProps: tBodyProps,
              rowMinWidth: rowMinWidth,
              pageRows: pageRows,
              makePageRow: makePageRow,
              dataLength: resolvedData.length,
              pageSize: lazyLoadModePageSize,
              rowHeight: rowHeight,
              lazyLoadUniqueID: lazyLoadUniqueID,
              reactListProps: reactListProps
            }) : _react2.default.createElement(
              TbodyComponent,
              _extends({
                className: (0, _classnames2.default)(tBodyProps.className),
                style: _extends({}, tBodyProps.style, {
                  minWidth: rowMinWidth + 'px'
                })
              }, tBodyProps.rest),
              pageRows.map(function (d, i) {
                return makePageRow(d, i);
              }),
              padRows.map(makePadRow)
            ),
            hasColumnFooter ? makeColumnFooters() : null
          ),
          showPagination && showPaginationBottom ? _react2.default.createElement(
            'div',
            { className: 'pagination-bottom' },
            pagination
          ) : null,
          !pageRows.length && _react2.default.createElement(
            NoDataComponent,
            noDataProps,
            _utils2.default.normalizeComponent(noDataText)
          ),
          _react2.default.createElement(LoadingComponent, _extends({ loading: loading, loadingText: loadingText }, loadingProps))
        );
      };

      // childProps are optionally passed to a function-as-a-child
      return children ? children(finalState, makeTable, this) : makeTable();
    }
  }]);

  return ReactTable;
}((0, _methods2.default)((0, _lifecycle2.default)(_react.Component)));

ReactTable.propTypes = _propTypes2.default;
ReactTable.defaultProps = _defaultProps2.default;
exports.default = ReactTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwicmVzb2x2ZWRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRUaGVhZEdyb3VwUHJvcHMiLCJnZXRUaGVhZEdyb3VwVHJQcm9wcyIsImdldFRoZWFkR3JvdXBUaFByb3BzIiwiZ2V0VGhlYWRQcm9wcyIsImdldFRoZWFkVHJQcm9wcyIsImdldFRoZWFkVGhQcm9wcyIsImdldFRoZWFkRmlsdGVyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRoUHJvcHMiLCJnZXRUYm9keVByb3BzIiwiZ2V0VHJHcm91cFByb3BzIiwiZ2V0VHJQcm9wcyIsImdldFRkUHJvcHMiLCJnZXRUZm9vdFByb3BzIiwiZ2V0VGZvb3RUclByb3BzIiwiZ2V0VGZvb3RUZFByb3BzIiwiZ2V0UGFnaW5hdGlvblByb3BzIiwiZ2V0TG9hZGluZ1Byb3BzIiwiZ2V0Tm9EYXRhUHJvcHMiLCJnZXRSZXNpemVyUHJvcHMiLCJzaG93UGFnaW5hdGlvbiIsInNob3dQYWdpbmF0aW9uVG9wIiwic2hvd1BhZ2luYXRpb25Cb3R0b20iLCJtYW51YWwiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJzb3J0YWJsZSIsIm11bHRpU29ydCIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJwaXZvdElES2V5IiwicGl2b3RWYWxLZXkiLCJwaXZvdEJ5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJsb2FkaW5nIiwicGFnZXMiLCJvbkV4cGFuZGVkQ2hhbmdlIiwiVGFibGVDb21wb25lbnQiLCJUYm9keUNvbXBvbmVudCIsIlRyR3JvdXBDb21wb25lbnQiLCJUckNvbXBvbmVudCIsIlRoQ29tcG9uZW50IiwiVGRDb21wb25lbnQiLCJUZm9vdENvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwiU3ViQ29tcG9uZW50IiwiTm9EYXRhQ29tcG9uZW50IiwiUmVzaXplckNvbXBvbmVudCIsIkV4cGFuZGVyQ29tcG9uZW50IiwiUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90Q29tcG9uZW50IiwiQWdncmVnYXRlZENvbXBvbmVudCIsIkZpbHRlckNvbXBvbmVudCIsIlBhZFJvd0NvbXBvbmVudCIsInJlc29sdmVkRGF0YSIsImFsbFZpc2libGVDb2x1bW5zIiwiaGVhZGVyR3JvdXBzIiwiaGFzSGVhZGVyR3JvdXBzIiwic29ydGVkRGF0YSIsImxhenlMb2FkTW9kZSIsImxhenlMb2FkTW9kZVBhZ2VTaXplIiwicm93SGVpZ2h0IiwibGF6eUxvYWRVbmlxdWVJRCIsInJlYWN0TGlzdFByb3BzIiwiVGhlYWRDb21wb25lbnQiLCJzdGFydFJvdyIsImVuZFJvdyIsInBhZ2VSb3dzIiwic2xpY2UiLCJtaW5Sb3dzIiwicGFkUm93cyIsInJhbmdlIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsImhhc0NvbHVtbkZvb3RlciIsInNvbWUiLCJkIiwiRm9vdGVyIiwiaGFzRmlsdGVycyIsInJlY3Vyc2VSb3dzVmlld0luZGV4Iiwicm93cyIsInBhdGgiLCJpbmRleCIsIm1hcCIsInJvdyIsImkiLCJyb3dXaXRoVmlld0luZGV4IiwiX3ZpZXdJbmRleCIsIm5ld1BhdGgiLCJjb25jYXQiLCJnZXQiLCJjYW5QcmV2aW91cyIsImNhbk5leHQiLCJyb3dNaW5XaWR0aCIsInN1bSIsInJlc2l6ZWRDb2x1bW4iLCJmaW5kIiwieCIsImlkIiwiZ2V0Rmlyc3REZWZpbmVkIiwidmFsdWUiLCJ3aWR0aCIsIm1pbldpZHRoIiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwicm9vdFByb3BzIiwic3BsaXRQcm9wcyIsInVuZGVmaW5lZCIsInRhYmxlUHJvcHMiLCJ0Qm9keVByb3BzIiwibG9hZGluZ1Byb3BzIiwibm9EYXRhUHJvcHMiLCJtYWtlSGVhZGVyR3JvdXAiLCJjb2x1bW4iLCJyZXNpemVkVmFsdWUiLCJjb2wiLCJmbGV4IiwiY29sdW1ucyIsIm1heFdpZHRoIiwidGhlYWRHcm91cFRoUHJvcHMiLCJjb2x1bW5IZWFkZXJQcm9wcyIsImdldEhlYWRlclByb3BzIiwiY2xhc3NlcyIsImhlYWRlckNsYXNzTmFtZSIsInN0eWxlcyIsImhlYWRlclN0eWxlIiwicmVzdCIsImZsZXhTdHlsZXMiLCJhc1B4Iiwibm9ybWFsaXplQ29tcG9uZW50IiwiSGVhZGVyIiwiZGF0YSIsIm1ha2VIZWFkZXJHcm91cHMiLCJ0aGVhZEdyb3VwUHJvcHMiLCJ0aGVhZEdyb3VwVHJQcm9wcyIsIm1ha2VIZWFkZXIiLCJyZXNpemVkQ29sIiwic29ydCIsInNob3ciLCJ0aGVhZFRoUHJvcHMiLCJpc1Jlc2l6YWJsZSIsInJlc2l6ZXIiLCJlIiwiaXNTb3J0YWJsZSIsImRlc2MiLCJpbmNsdWRlcyIsInNoaWZ0S2V5IiwibWFrZUhlYWRlcnMiLCJ0aGVhZFByb3BzIiwidGhlYWRUclByb3BzIiwibWFrZUZpbHRlciIsInRoZWFkRmlsdGVyVGhQcm9wcyIsImZpbHRlciIsIlJlc29sdmVkRmlsdGVyQ29tcG9uZW50IiwiRmlsdGVyIiwiaXNGaWx0ZXJhYmxlIiwib25DaGFuZ2UiLCJtYWtlRmlsdGVycyIsInRoZWFkRmlsdGVyUHJvcHMiLCJ0aGVhZEZpbHRlclRyUHJvcHMiLCJtYWtlUGFnZVJvdyIsInJvd0luZm8iLCJvcmlnaW5hbCIsInZpZXdJbmRleCIsImxldmVsIiwibmVzdGluZ1BhdGgiLCJhZ2dyZWdhdGVkIiwiZ3JvdXBlZEJ5UGl2b3QiLCJzdWJSb3dzIiwiaXNFeHBhbmRlZCIsInRyR3JvdXBQcm9wcyIsInRyUHJvcHMiLCJ0ckdyb3VwU3R5bGUiLCJoZWlnaHQiLCJqb2luIiwiaTIiLCJ0ZFByb3BzIiwiY29sdW1uUHJvcHMiLCJjZWxsSW5mbyIsInBpdm90ZWQiLCJleHBhbmRlciIsInVzZU9uRXhwYW5kZXJDbGljayIsImlzQnJhbmNoIiwiaXNQcmV2aWV3Iiwib25FeHBhbmRlckNsaWNrIiwibmV3RXhwYW5kZWQiLCJjbG9uZSIsInNldCIsInNldFN0YXRlV2l0aERhdGEiLCJyZXNvbHZlZENlbGwiLCJDZWxsIiwiUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50IiwiQWdncmVnYXRlZCIsImFnZ3JlZ2F0ZSIsIlJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQiLCJFeHBhbmRlciIsIlJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90VmFsdWUiLCJEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJQaXZvdCIsImV4cGFuZGFibGUiLCJpbmRleE9mIiwicmVzb2x2ZWRPbkV4cGFuZGVyQ2xpY2siLCJpbnRlcmFjdGlvblByb3BzIiwib25DbGljayIsIm1ha2VQYWRDb2x1bW4iLCJtYWtlUGFkUm93IiwibWFrZUNvbHVtbkZvb3RlciIsInRGb290VGRQcm9wcyIsImNvbHVtbkZvb3RlclByb3BzIiwiZ2V0Rm9vdGVyUHJvcHMiLCJtYWtlQ29sdW1uRm9vdGVycyIsInRGb290UHJvcHMiLCJ0Rm9vdFRyUHJvcHMiLCJtYWtlUGFnaW5hdGlvbiIsInBhZ2luYXRpb25Qcm9wcyIsIm1ha2VUYWJsZSIsInBhZ2luYXRpb24iLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBUkE7OztBQVVPLElBQU1BLHdFQUFOOztJQUVjQyxVOzs7QUFJbkIsc0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFHbEIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJILElBQW5CLE9BQXJCO0FBQ0EsVUFBS0ksY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CSixJQUFwQixPQUF0QjtBQUNBLFVBQUtLLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkwsSUFBcEIsT0FBdEI7QUFDQSxVQUFLTSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JOLElBQWhCLE9BQWxCO0FBQ0EsVUFBS08sUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNQLElBQWQsT0FBaEI7QUFDQSxVQUFLUSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JSLElBQWhCLE9BQWxCO0FBQ0EsVUFBS1MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCVCxJQUFsQixPQUFw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QVUyRSxZQUFZcEYsQ0FBWixFQUFlUyxDQUFmLENBQVY7QUFBQSxlQUFiLENBUkg7QUFTR2hCLHNCQUFRYyxHQUFSLENBQVk0SCxVQUFaO0FBVEgsYUFyQk47QUFpQ0dySSw4QkFBa0IwSSxtQkFBbEIsR0FBd0M7QUFqQzNDLFdBWEY7QUE4Q0d0TSw0QkFBa0JFLG9CQUFsQixHQUNDO0FBQUE7QUFBQSxjQUFLLFdBQVUsbUJBQWY7QUFBb0MwTTtBQUFwQyxXQURELEdBRUcsSUFoRE47QUFpREcsV0FBQ3hKLFNBQVNPLE1BQVYsSUFDQztBQUFDLDJCQUFEO0FBQXFCc0MsdUJBQXJCO0FBQW1DLDRCQUFFa0Isa0JBQUYsQ0FBcUI5RyxVQUFyQjtBQUFuQyxXQWxESjtBQW9ERSx3Q0FBQyxnQkFBRCxhQUFrQixTQUFTYSxPQUEzQixFQUFvQyxhQUFhZCxXQUFqRCxJQUFrRTRGLFlBQWxFO0FBcERGLFNBREY7QUF3REQsT0ExREQ7O0FBNERBO0FBQ0EsYUFBT3pILFdBQVdBLFNBQVNtSCxVQUFULEVBQXFCaUgsU0FBckIsRUFBZ0MsSUFBaEMsQ0FBWCxHQUFtREEsV0FBMUQ7QUFDRDs7OztFQXgzQnFDLHVCQUFRLDBDQUFSLEM7O0FBQW5CdFEsVSxDQUNad1EsUztBQURZeFEsVSxDQUVaeVEsWTtrQkFGWXpRLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuLy9cbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTGlmZWN5Y2xlIGZyb20gJy4vbGlmZWN5Y2xlJ1xuaW1wb3J0IE1ldGhvZHMgZnJvbSAnLi9tZXRob2RzJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHRQcm9wcydcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wVHlwZXMnXG5cbmltcG9ydCBUYm9keVdpdGhMYXp5TG9hZCBmcm9tICcuL2xhenlMb2FkL1Rib2R5V2l0aExhenlMb2FkJ1xuaW1wb3J0IFRoZWFkV2l0aExhenlMb2FkIGZyb20gJy4vbGF6eUxvYWQvVGhlYWRXaXRoTGF6eUxvYWQnO1xuXG5leHBvcnQgY29uc3QgUmVhY3RUYWJsZURlZmF1bHRzID0gZGVmYXVsdFByb3BzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VGFibGUgZXh0ZW5kcyBNZXRob2RzKExpZmVjeWNsZShDb21wb25lbnQpKSB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBwcm9wVHlwZXNcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXREYXRhTW9kZWwgPSB0aGlzLmdldERhdGFNb2RlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmZpcmVGZXRjaERhdGEgPSB0aGlzLmZpcmVGZXRjaERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0UHJvcE9yU3RhdGUgPSB0aGlzLmdldFByb3BPclN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFN0YXRlT3JQcm9wID0gdGhpcy5nZXRTdGF0ZU9yUHJvcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnREYXRhID0gdGhpcy5zb3J0RGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRNaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZVNpemVDaGFuZ2UgPSB0aGlzLm9uUGFnZVNpemVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydENvbHVtbiA9IHRoaXMuc29ydENvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJDb2x1bW4gPSB0aGlzLmZpbHRlckNvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5TdGFydCA9IHRoaXMucmVzaXplQ29sdW1uU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uRW5kID0gdGhpcy5yZXNpemVDb2x1bW5FbmQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uTW92aW5nID0gdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBwYWdlU2l6ZTogcHJvcHMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgc29ydGVkOiBwcm9wcy5kZWZhdWx0U29ydGVkLFxuICAgICAgZXhwYW5kZWQ6IHByb3BzLmRlZmF1bHRFeHBhbmRlZCxcbiAgICAgIGZpbHRlcmVkOiBwcm9wcy5kZWZhdWx0RmlsdGVyZWQsXG4gICAgICByZXNpemVkOiBwcm9wcy5kZWZhdWx0UmVzaXplZCxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiBmYWxzZSxcbiAgICAgIHNraXBOZXh0U29ydDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCByZXNvbHZlZFN0YXRlID0gdGhpcy5nZXRSZXNvbHZlZFN0YXRlKClcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlLFxuICAgICAgZ2V0UHJvcHMsXG4gICAgICBnZXRUYWJsZVByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkUHJvcHMsXG4gICAgICBnZXRUaGVhZFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzLFxuICAgICAgZ2V0VGJvZHlQcm9wcyxcbiAgICAgIGdldFRyR3JvdXBQcm9wcyxcbiAgICAgIGdldFRyUHJvcHMsXG4gICAgICBnZXRUZFByb3BzLFxuICAgICAgZ2V0VGZvb3RQcm9wcyxcbiAgICAgIGdldFRmb290VHJQcm9wcyxcbiAgICAgIGdldFRmb290VGRQcm9wcyxcbiAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyxcbiAgICAgIGdldExvYWRpbmdQcm9wcyxcbiAgICAgIGdldE5vRGF0YVByb3BzLFxuICAgICAgZ2V0UmVzaXplclByb3BzLFxuICAgICAgc2hvd1BhZ2luYXRpb24sXG4gICAgICBzaG93UGFnaW5hdGlvblRvcCxcbiAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tLFxuICAgICAgbWFudWFsLFxuICAgICAgbG9hZGluZ1RleHQsXG4gICAgICBub0RhdGFUZXh0LFxuICAgICAgc29ydGFibGUsXG4gICAgICBtdWx0aVNvcnQsXG4gICAgICByZXNpemFibGUsXG4gICAgICBmaWx0ZXJhYmxlLFxuICAgICAgLy8gUGl2b3RpbmcgU3RhdGVcbiAgICAgIHBpdm90SURLZXksXG4gICAgICBwaXZvdFZhbEtleSxcbiAgICAgIHBpdm90QnksXG4gICAgICBzdWJSb3dzS2V5LFxuICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgaW5kZXhLZXksXG4gICAgICBncm91cGVkQnlQaXZvdEtleSxcbiAgICAgIC8vIFN0YXRlXG4gICAgICBsb2FkaW5nLFxuICAgICAgcGFnZVNpemUsXG4gICAgICBwYWdlLFxuICAgICAgc29ydGVkLFxuICAgICAgZmlsdGVyZWQsXG4gICAgICByZXNpemVkLFxuICAgICAgZXhwYW5kZWQsXG4gICAgICBwYWdlcyxcbiAgICAgIG9uRXhwYW5kZWRDaGFuZ2UsXG4gICAgICAvLyBDb21wb25lbnRzXG4gICAgICBUYWJsZUNvbXBvbmVudCxcbiAgICAgIFRib2R5Q29tcG9uZW50LFxuICAgICAgVHJHcm91cENvbXBvbmVudCxcbiAgICAgIFRyQ29tcG9uZW50LFxuICAgICAgVGhDb21wb25lbnQsXG4gICAgICBUZENvbXBvbmVudCxcbiAgICAgIFRmb290Q29tcG9uZW50LFxuICAgICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICAgIExvYWRpbmdDb21wb25lbnQsXG4gICAgICBTdWJDb21wb25lbnQsXG4gICAgICBOb0RhdGFDb21wb25lbnQsXG4gICAgICBSZXNpemVyQ29tcG9uZW50LFxuICAgICAgRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICBQaXZvdFZhbHVlQ29tcG9uZW50LFxuICAgICAgUGl2b3RDb21wb25lbnQsXG4gICAgICBBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgRmlsdGVyQ29tcG9uZW50LFxuICAgICAgUGFkUm93Q29tcG9uZW50LFxuICAgICAgLy8gRGF0YSBtb2RlbFxuICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMsXG4gICAgICBoZWFkZXJHcm91cHMsXG4gICAgICBoYXNIZWFkZXJHcm91cHMsXG4gICAgICAvLyBTb3J0ZWQgRGF0YVxuICAgICAgc29ydGVkRGF0YSxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nLFxuICAgICAgLy8gbGF6eSBsb2FkaW5nIG1vZGVcbiAgICAgIGxhenlMb2FkTW9kZSxcbiAgICAgIGxhenlMb2FkTW9kZVBhZ2VTaXplLFxuICAgICAgcm93SGVpZ2h0LFxuICAgICAgbGF6eUxvYWRVbmlxdWVJRCxcbiAgICAgIHJlYWN0TGlzdFByb3BzLFxuICAgIH0gPSByZXNvbHZlZFN0YXRlXG5cbiAgICBjb25zdCBUaGVhZENvbXBvbmVudCA9IGxhenlMb2FkTW9kZSAmJiAhc2hvd1BhZ2luYXRpb25cbiAgICAgID8gVGhlYWRXaXRoTGF6eUxvYWRcbiAgICAgIDogcmVzb2x2ZWRTdGF0ZS5UaGVhZENvbXBvbmVudFxuXG4gICAgLy8gUGFnaW5hdGlvblxuICAgIGNvbnN0IHN0YXJ0Um93ID0gcGFnZVNpemUgKiBwYWdlXG4gICAgY29uc3QgZW5kUm93ID0gc3RhcnRSb3cgKyBwYWdlU2l6ZVxuICAgIGxldCBwYWdlUm93cyA9IG1hbnVhbCA/IHJlc29sdmVkRGF0YSA6IHNvcnRlZERhdGEuc2xpY2Uoc3RhcnRSb3csIGVuZFJvdylcbiAgICBjb25zdCBtaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzKClcbiAgICBjb25zdCBwYWRSb3dzID0gXy5yYW5nZShNYXRoLm1heChtaW5Sb3dzIC0gcGFnZVJvd3MubGVuZ3RoLCAwKSlcblxuICAgIGNvbnN0IGhhc0NvbHVtbkZvb3RlciA9IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLkZvb3RlcilcbiAgICBjb25zdCBoYXNGaWx0ZXJzID0gZmlsdGVyYWJsZSB8fCBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5maWx0ZXJhYmxlKVxuXG4gICAgY29uc3QgcmVjdXJzZVJvd3NWaWV3SW5kZXggPSAocm93cywgcGF0aCA9IFtdLCBpbmRleCA9IC0xKSA9PiBbXG4gICAgICByb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgIGluZGV4ICs9IDFcbiAgICAgICAgY29uc3Qgcm93V2l0aFZpZXdJbmRleCA9IHtcbiAgICAgICAgICAuLi5yb3csXG4gICAgICAgICAgX3ZpZXdJbmRleDogaW5kZXgsXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGguY29uY2F0KFtpXSlcbiAgICAgICAgaWYgKHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0gJiYgXy5nZXQoZXhwYW5kZWQsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgW3Jvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sIGluZGV4XSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KFxuICAgICAgICAgICAgcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSxcbiAgICAgICAgICAgIG5ld1BhdGgsXG4gICAgICAgICAgICBpbmRleFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93V2l0aFZpZXdJbmRleFxuICAgICAgfSksXG4gICAgICBpbmRleCxcbiAgICBdO1xuICAgIFtwYWdlUm93c10gPSByZWN1cnNlUm93c1ZpZXdJbmRleChwYWdlUm93cylcblxuICAgIGNvbnN0IGNhblByZXZpb3VzID0gcGFnZSA+IDBcbiAgICBjb25zdCBjYW5OZXh0ID0gcGFnZSArIDEgPCBwYWdlc1xuXG4gICAgY29uc3Qgcm93TWluV2lkdGggPSBfLnN1bShcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLm1hcChkID0+IHtcbiAgICAgICAgY29uc3QgcmVzaXplZENvbHVtbiA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGQuaWQpIHx8IHt9XG4gICAgICAgIHJldHVybiBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sdW1uLnZhbHVlLCBkLndpZHRoLCBkLm1pbldpZHRoKVxuICAgICAgfSlcbiAgICApXG5cbiAgICBsZXQgcm93SW5kZXggPSAtMVxuXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgIC4uLnJlc29sdmVkU3RhdGUsXG4gICAgICBzdGFydFJvdyxcbiAgICAgIGVuZFJvdyxcbiAgICAgIHBhZ2VSb3dzLFxuICAgICAgbWluUm93cyxcbiAgICAgIHBhZFJvd3MsXG4gICAgICBoYXNDb2x1bW5Gb290ZXIsXG4gICAgICBjYW5QcmV2aW91cyxcbiAgICAgIGNhbk5leHQsXG4gICAgICByb3dNaW5XaWR0aCxcbiAgICB9XG5cbiAgICBjb25zdCByb290UHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpKVxuICAgIGNvbnN0IHRhYmxlUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGFibGVQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXG4gICAgY29uc3QgdEJvZHlQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUYm9keVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSlcbiAgICBjb25zdCBsb2FkaW5nUHJvcHMgPSBnZXRMb2FkaW5nUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3Qgbm9EYXRhUHJvcHMgPSBnZXROb0RhdGFQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcblxuICAgIC8vIFZpc3VhbCBDb21wb25lbnRzXG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXAgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkVmFsdWUgPSBjb2wgPT4gKHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbC5pZCkgfHwge30pLnZhbHVlXG4gICAgICBjb25zdCBmbGV4ID0gXy5zdW0oXG4gICAgICAgIGNvbHVtbi5jb2x1bW5zLm1hcChjb2wgPT4gKGNvbC53aWR0aCB8fCByZXNpemVkVmFsdWUoY29sKSA/IDAgOiBjb2wubWluV2lkdGgpKVxuICAgICAgKVxuICAgICAgY29uc3Qgd2lkdGggPSBfLnN1bShcbiAgICAgICAgY29sdW1uLmNvbHVtbnMubWFwKGNvbCA9PiBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkVmFsdWUoY29sKSwgY29sLndpZHRoLCBjb2wubWluV2lkdGgpKVxuICAgICAgKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLnN1bShcbiAgICAgICAgY29sdW1uLmNvbHVtbnMubWFwKGNvbCA9PiBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkVmFsdWUoY29sKSwgY29sLndpZHRoLCBjb2wubWF4V2lkdGgpKVxuICAgICAgKVxuXG4gICAgICBjb25zdCB0aGVhZEdyb3VwVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEdyb3VwVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmxleFN0eWxlcyA9IHtcbiAgICAgICAgZmxleDogYCR7ZmxleH0gMCBhdXRvYCxcbiAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgIG1heFdpZHRoOiBfLmFzUHgobWF4V2lkdGgpLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2Ake2l9LSR7Y29sdW1uLmlkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICAuLi5mbGV4U3R5bGVzLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXBzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRHcm91cFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEdyb3VwVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXJHcm91cHMnLCB0aGVhZEdyb3VwUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udGhlYWRHcm91cFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGxhenlMb2FkVW5pcXVlSUQ9e2xhenlMb2FkTW9kZSAmJiAhc2hvd1BhZ2luYXRpb25cbiAgICAgICAgICAgID8gbGF6eUxvYWRVbmlxdWVJRFxuICAgICAgICAgICAgOiB1bmRlZmluZWR9XG4gICAgICAgICAgey4uLnRoZWFkR3JvdXBQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkR3JvdXBUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEdyb3VwVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKG1ha2VIZWFkZXJHcm91cCl9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHNvcnQgPSBzb3J0ZWQuZmluZChkID0+IGQuaWQgPT09IGNvbHVtbi5pZClcbiAgICAgIGNvbnN0IHNob3cgPSB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWluV2lkdGgpXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2wudmFsdWUsIGNvbHVtbi53aWR0aCwgY29sdW1uLm1heFdpZHRoKVxuICAgICAgY29uc3QgdGhlYWRUaFByb3BzID0gXy5zcGxpdFByb3BzKGdldFRoZWFkVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcykpXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW2NvbHVtbi5oZWFkZXJDbGFzc05hbWUsIHRoZWFkVGhQcm9wcy5jbGFzc05hbWUsIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZV1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1Jlc2l6YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5yZXNpemFibGUsIHJlc2l6YWJsZSwgZmFsc2UpXG4gICAgICBjb25zdCByZXNpemVyID0gaXNSZXNpemFibGUgPyAoXG4gICAgICAgIDxSZXNpemVyQ29tcG9uZW50XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChlLCBjb2x1bW4sIGZhbHNlKX1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChlLCBjb2x1bW4sIHRydWUpfVxuICAgICAgICAgIHsuLi5nZXRSZXNpemVyUHJvcHMoJ2ZpbmFsU3RhdGUnLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyl9XG4gICAgICAgIC8+XG4gICAgICApIDogbnVsbFxuXG4gICAgICBjb25zdCBpc1NvcnRhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnNvcnRhYmxlLCBzb3J0YWJsZSwgZmFsc2UpXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgaXNSZXNpemFibGUgJiYgJ3J0LXJlc2l6YWJsZS1oZWFkZXInLFxuICAgICAgICAgICAgc29ydCA/IChzb3J0LmRlc2MgPyAnLXNvcnQtZGVzYycgOiAnLXNvcnQtYXNjJykgOiAnJyxcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgJy1jdXJzb3ItcG9pbnRlcicsXG4gICAgICAgICAgICAhc2hvdyAmJiAnLWhpZGRlbicsXG4gICAgICAgICAgICBwaXZvdEJ5ICYmIHBpdm90Qnkuc2xpY2UoMCwgLTEpLmluY2x1ZGVzKGNvbHVtbi5pZCkgJiYgJ3J0LWhlYWRlci1waXZvdCdcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0b2dnbGVTb3J0PXtlID0+IHtcbiAgICAgICAgICAgIGlmIChpc1NvcnRhYmxlKSB0aGlzLnNvcnRDb2x1bW4oY29sdW1uLCBtdWx0aVNvcnQgPyBlLnNoaWZ0S2V5IDogZmFsc2UpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGlzUmVzaXphYmxlICYmICdydC1yZXNpemFibGUtaGVhZGVyLWNvbnRlbnQnKX0+XG4gICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cmVzaXplcn1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGhlYWRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXG4gICAgICBjb25zdCB0aGVhZFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGhlYWRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlcicsIHRoZWFkUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udGhlYWRQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtyb3dNaW5XaWR0aH1weGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBsYXp5TG9hZFVuaXF1ZUlEPXtsYXp5TG9hZE1vZGUgJiYgIXNob3dQYWdpbmF0aW9uXG4gICAgICAgICAgICA/IGxhenlMb2FkVW5pcXVlSURcbiAgICAgICAgICAgIDogdW5kZWZpbmVkfVxuICAgICAgICAgIHsuLi50aGVhZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlSGVhZGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5taW5XaWR0aClcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWF4V2lkdGgpXG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkRmlsdGVyVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkRmlsdGVyVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkRmlsdGVyVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaWx0ZXJlZC5maW5kKGZpbHRlciA9PiBmaWx0ZXIuaWQgPT09IGNvbHVtbi5pZClcblxuICAgICAgY29uc3QgUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQgPSBjb2x1bW4uRmlsdGVyIHx8IEZpbHRlckNvbXBvbmVudFxuXG4gICAgICBjb25zdCBpc0ZpbHRlcmFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4uZmlsdGVyYWJsZSwgZmlsdGVyYWJsZSwgZmFsc2UpXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIGZsZXg6IGAke3dpZHRofSAwIGF1dG9gLFxuICAgICAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2lzRmlsdGVyYWJsZVxuICAgICAgICAgICAgPyBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4gdGhpcy5maWx0ZXJDb2x1bW4oY29sdW1uLCB2YWx1ZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0UHJvcHMuY29sdW1uLkZpbHRlclxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUZpbHRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEZpbHRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1maWx0ZXJzJywgdGhlYWRGaWx0ZXJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50aGVhZEZpbHRlclByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGxhenlMb2FkVW5pcXVlSUQ9e2xhenlMb2FkTW9kZSAmJiAhc2hvd1BhZ2luYXRpb25cbiAgICAgICAgICAgID8gbGF6eUxvYWRVbmlxdWVJRFxuICAgICAgICAgICAgOiB1bmRlZmluZWR9XG4gICAgICAgICAgey4uLnRoZWFkRmlsdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEZpbHRlclRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkRmlsdGVyVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEZpbHRlclRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VGaWx0ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2VSb3cgPSAocm93LCBpLCBwYXRoID0gW10pID0+IHtcbiAgICAgIGNvbnN0IHJvd0luZm8gPSB7XG4gICAgICAgIG9yaWdpbmFsOiByb3dbb3JpZ2luYWxLZXldLFxuICAgICAgICByb3csXG4gICAgICAgIGluZGV4OiByb3dbaW5kZXhLZXldLFxuICAgICAgICB2aWV3SW5kZXg6IChyb3dJbmRleCArPSAxKSxcbiAgICAgICAgcGFnZVNpemUsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGxldmVsOiBwYXRoLmxlbmd0aCxcbiAgICAgICAgbmVzdGluZ1BhdGg6IHBhdGguY29uY2F0KFtpXSksXG4gICAgICAgIGFnZ3JlZ2F0ZWQ6IHJvd1thZ2dyZWdhdGVkS2V5XSxcbiAgICAgICAgZ3JvdXBlZEJ5UGl2b3Q6IHJvd1tncm91cGVkQnlQaXZvdEtleV0sXG4gICAgICAgIHN1YlJvd3M6IHJvd1tzdWJSb3dzS2V5XSxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBfLmdldChleHBhbmRlZCwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgIGNvbnN0IHRyR3JvdXBQcm9wcyA9IGdldFRyR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKSlcbiAgICAgIGNvbnN0IHRyR3JvdXBTdHlsZSA9IGxhenlMb2FkTW9kZSA/IHtcbiAgICAgICAgLi4udHJHcm91cFByb3BzLnN0eWxlLFxuICAgICAgICBoZWlnaHQ6IHJvd0hlaWdodCxcbiAgICAgIH0gOiB0ckdyb3VwUHJvcHMuc3R5bGU7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckdyb3VwQ29tcG9uZW50IGtleT17cm93SW5mby5uZXN0aW5nUGF0aC5qb2luKCdfJyl9IHN0eWxlPXt0ckdyb3VwU3R5bGV9IHsuLi50ckdyb3VwUHJvcHN9PlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRyUHJvcHMuY2xhc3NOYW1lLCByb3cuX3ZpZXdJbmRleCAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnKX1cbiAgICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICAgICAgICAgIGNvbnN0IHNob3cgPSB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5taW5XaWR0aClcbiAgICAgICAgICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5tYXhXaWR0aClcbiAgICAgICAgICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcykpXG4gICAgICAgICAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpKVxuXG4gICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbdGRQcm9wcy5jbGFzc05hbWUsIGNvbHVtbi5jbGFzc05hbWUsIGNvbHVtblByb3BzLmNsYXNzTmFtZV1cblxuICAgICAgICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCBjZWxsSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAuLi5yb3dJbmZvLFxuICAgICAgICAgICAgICAgIGlzRXhwYW5kZWQsXG4gICAgICAgICAgICAgICAgY29sdW1uOiB7IC4uLmNvbHVtbiB9LFxuICAgICAgICAgICAgICAgIHZhbHVlOiByb3dJbmZvLnJvd1tjb2x1bW4uaWRdLFxuICAgICAgICAgICAgICAgIHBpdm90ZWQ6IGNvbHVtbi5waXZvdGVkLFxuICAgICAgICAgICAgICAgIGV4cGFuZGVyOiBjb2x1bW4uZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgcmVzaXplZCxcbiAgICAgICAgICAgICAgICBzaG93LFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoLFxuICAgICAgICAgICAgICAgIHRkUHJvcHMsXG4gICAgICAgICAgICAgICAgY29sdW1uUHJvcHMsXG4gICAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNlbGxJbmZvLnZhbHVlXG5cbiAgICAgICAgICAgICAgbGV0IHVzZU9uRXhwYW5kZXJDbGlja1xuICAgICAgICAgICAgICBsZXQgaXNCcmFuY2hcbiAgICAgICAgICAgICAgbGV0IGlzUHJldmlld1xuXG4gICAgICAgICAgICAgIGNvbnN0IG9uRXhwYW5kZXJDbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdFeHBhbmRlZCA9IF8uY2xvbmUoZXhwYW5kZWQpXG4gICAgICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIHt9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBuZXdFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoKSA9PiBvbkV4cGFuZGVkQ2hhbmdlICYmIG9uRXhwYW5kZWRDaGFuZ2UobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSBzdGFuZGFyZCBjZWxsXG4gICAgICAgICAgICAgIGxldCByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uQ2VsbCwgY2VsbEluZm8sIHZhbHVlKVxuXG4gICAgICAgICAgICAgIC8vIFJlc29sdmUgUmVuZGVyZXJzXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgfHwgKCFjb2x1bW4uYWdncmVnYXRlID8gQWdncmVnYXRlZENvbXBvbmVudCA6IGNvbHVtbi5DZWxsKVxuICAgICAgICAgICAgICBjb25zdCBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50ID0gY29sdW1uLkV4cGFuZGVyIHx8IEV4cGFuZGVyQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCA9IGNvbHVtbi5QaXZvdFZhbHVlIHx8IFBpdm90VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgICAgY29uc3QgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgIFBpdm90Q29tcG9uZW50IHx8XG4gICAgICAgICAgICAgICAgKHByb3BzID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90Q29tcG9uZW50ID0gY29sdW1uLlBpdm90IHx8IERlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50XG5cbiAgICAgICAgICAgICAgLy8gSXMgdGhpcyBjZWxsIGV4cGFuZGFibGU/XG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkIHx8IGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gTWFrZSBpdCBleHBhbmRhYmxlIGJ5IGRlZnVhbHRcbiAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHVzZU9uRXhwYW5kZXJDbGljayA9IHRydWVcbiAgICAgICAgICAgICAgICAvLyBJZiBwaXZvdGVkLCBoYXMgbm8gc3ViUm93cywgYW5kIGRvZXMgbm90IGhhdmUgYSBzdWJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IG1ha2UgZXhwYW5kYWJsZVxuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkICYmICFjZWxsSW5mby5zdWJSb3dzICYmICFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gSXMgdGhpcyBjb2x1bW4gYSBicmFuY2g/XG4gICAgICAgICAgICAgICAgaXNCcmFuY2ggPSByb3dJbmZvLnJvd1twaXZvdElES2V5XSA9PT0gY29sdW1uLmlkICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgICAvLyBTaG91bGQgdGhpcyBjb2x1bW4gYmUgYmxhbms/XG4gICAgICAgICAgICAgICAgaXNQcmV2aWV3ID1cbiAgICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihjb2x1bW4uaWQpID4gcGl2b3RCeS5pbmRleE9mKHJvd0luZm8ucm93W3Bpdm90SURLZXldKSAmJlxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAgIC8vIFBpdm90IENlbGwgUmVuZGVyIE92ZXJyaWRlXG4gICAgICAgICAgICAgICAgaWYgKGlzQnJhbmNoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBpc1Bpdm90XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRQaXZvdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbcGl2b3RWYWxLZXldLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFNob3cgdGhlIHBpdm90IHByZXZpZXdcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCwgY2VsbEluZm8sIHZhbHVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGxJbmZvLmFnZ3JlZ2F0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsIGNlbGxJbmZvLCB2YWx1ZSlcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpZiAocGl2b3RCeSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmdyb3VwZWRCeVBpdm90KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cyAmJiAhU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZE9uRXhwYW5kZXJDbGljayA9IHVzZU9uRXhwYW5kZXJDbGljayA/IG9uRXhwYW5kZXJDbGljayA6ICgpID0+IHt9XG5cbiAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIG9uQ2xpY2sgZXZlbnRzLCBtYWtlIHN1cmUgdGhleSBkb24ndFxuICAgICAgICAgICAgICAvLyBvdmVycmlkZSBlYWNob3RoZXIuIFRoaXMgc2hvdWxkIG1heWJlIGJlIGV4cGFuZGVkIHRvIGhhbmRsZSBhbGxcbiAgICAgICAgICAgICAgLy8gZnVuY3Rpb24gYXR0cmlidXRlc1xuICAgICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvblByb3BzID0ge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHJlc29sdmVkT25FeHBhbmRlckNsaWNrLFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRkUHJvcHMucmVzdC5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcy5vbkNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0ZFByb3BzLnJlc3Qub25DbGljayhlLCAoKSA9PiByZXNvbHZlZE9uRXhwYW5kZXJDbGljayhlKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY29sdW1uUHJvcHMucmVzdC5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcy5vbkNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb2x1bW5Qcm9wcy5yZXN0Lm9uQ2xpY2soZSwgKCkgPT4gcmVzb2x2ZWRPbkV4cGFuZGVyQ2xpY2soZSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBjZWxsXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake2kyfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICAgICAgICAhc2hvdyAmJiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSAmJiAncnQtZXhwYW5kYWJsZScsXG4gICAgICAgICAgICAgICAgICAgIChpc0JyYW5jaCB8fCBpc1ByZXZpZXcpICYmICdydC1waXZvdCdcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IGAke3dpZHRofSAwIGF1dG9gLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Jlc29sdmVkQ2VsbH1cbiAgICAgICAgICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICAgIHtyb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICAgIHJvd0luZm8uc3ViUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGksIHJvd0luZm8ubmVzdGluZ1BhdGgpKX1cbiAgICAgICAgICB7U3ViQ29tcG9uZW50ICYmICFyb3dJbmZvLnN1YlJvd3MgJiYgaXNFeHBhbmRlZCAmJiBTdWJDb21wb25lbnQocm93SW5mbyl9XG4gICAgICAgIDwvVHJHcm91cENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkQ29sdW1uID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHNob3cgPSB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWluV2lkdGgpXG4gICAgICBjb25zdCBmbGV4ID0gd2lkdGhcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWF4V2lkdGgpXG4gICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSlcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFt0ZFByb3BzLmNsYXNzTmFtZSwgY29sdW1uLmNsYXNzTmFtZSwgY29sdW1uUHJvcHMuY2xhc3NOYW1lXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJ2hpZGRlbicpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHtmbGV4fSAwIGF1dG9gLFxuICAgICAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoUGFkUm93Q29tcG9uZW50KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkUm93ID0gKHJvdywgaSkgPT4ge1xuICAgICAgY29uc3QgdHJHcm91cFByb3BzID0gZ2V0VHJHcm91cFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckdyb3VwQ29tcG9uZW50IGtleT17aX0gey4uLnRyR3JvdXBQcm9wc30+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICctcGFkUm93JyxcbiAgICAgICAgICAgICAgKHBhZ2VSb3dzLmxlbmd0aCArIGkpICUgMiA/ICctZXZlbicgOiAnLW9kZCcsXG4gICAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGUgfHwge319XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlUGFkQ29sdW1uKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RyR3JvdXBDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbHVtbkZvb3RlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICBjb25zdCBzaG93ID0gdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2wudmFsdWUsIGNvbHVtbi53aWR0aCwgY29sdW1uLm1pbldpZHRoKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5tYXhXaWR0aClcbiAgICAgIGNvbnN0IHRGb290VGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUZm9vdFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSlcbiAgICAgIGNvbnN0IGNvbHVtbkZvb3RlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRGb290VGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uRm9vdGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRGb290VGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uRm9vdGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJ2hpZGRlbicpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4udEZvb3RUZFByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLmNvbHVtbkZvb3RlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkZvb3Rlciwge1xuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRGb290UHJvcHMgPSBnZXRUZm9vdFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdEZvb3RUclByb3BzID0gXy5zcGxpdFByb3BzKGdldFRmb290VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGZvb3RDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e3RGb290UHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50Rm9vdFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50Rm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Rm9vdFRyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlPXt0Rm9vdFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udEZvb3RUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sdW1uRm9vdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1Rmb290Q29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRQYWdpbmF0aW9uUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnaW5hdGlvbkNvbXBvbmVudFxuICAgICAgICAgIHsuLi5yZXNvbHZlZFN0YXRlfVxuICAgICAgICAgIHBhZ2VzPXtwYWdlc31cbiAgICAgICAgICBjYW5QcmV2aW91cz17Y2FuUHJldmlvdXN9XG4gICAgICAgICAgY2FuTmV4dD17Y2FuTmV4dH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMub25QYWdlQ2hhbmdlfVxuICAgICAgICAgIG9uUGFnZVNpemVDaGFuZ2U9e3RoaXMub25QYWdlU2l6ZUNoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3BhZ2luYXRpb25Qcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3BhZ2luYXRpb25Qcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4ucGFnaW5hdGlvblByb3BzLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVRhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IG1ha2VQYWdpbmF0aW9uKClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ1JlYWN0VGFibGUnLCBjbGFzc05hbWUsIHJvb3RQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIC4uLnJvb3RQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvblRvcCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi10b3BcIj57cGFnaW5hdGlvbn08L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8VGFibGVDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0YWJsZVByb3BzLmNsYXNzTmFtZSwgY3VycmVudGx5UmVzaXppbmcgPyAncnQtcmVzaXppbmcnIDogJycpfVxuICAgICAgICAgICAgc3R5bGU9e3RhYmxlUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGFibGVQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoYXNIZWFkZXJHcm91cHMgPyBtYWtlSGVhZGVyR3JvdXBzKCkgOiBudWxsfVxuICAgICAgICAgICAge21ha2VIZWFkZXJzKCl9XG4gICAgICAgICAgICB7aGFzRmlsdGVycyA/IG1ha2VGaWx0ZXJzKCkgOiBudWxsfVxuXG4gICAgICAgICAgICB7bGF6eUxvYWRNb2RlICYmICFzaG93UGFnaW5hdGlvblxuICAgICAgICAgICAgICA/IDxUYm9keVdpdGhMYXp5TG9hZFxuICAgICAgICAgICAgICAgICAgdEJvZHlQcm9wcz17dEJvZHlQcm9wc31cbiAgICAgICAgICAgICAgICAgIHJvd01pbldpZHRoPXtyb3dNaW5XaWR0aH1cbiAgICAgICAgICAgICAgICAgIHBhZ2VSb3dzPXtwYWdlUm93c31cbiAgICAgICAgICAgICAgICAgIG1ha2VQYWdlUm93PXttYWtlUGFnZVJvd31cbiAgICAgICAgICAgICAgICAgIGRhdGFMZW5ndGg9e3Jlc29sdmVkRGF0YS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17bGF6eUxvYWRNb2RlUGFnZVNpemV9XG4gICAgICAgICAgICAgICAgICByb3dIZWlnaHQ9e3Jvd0hlaWdodH1cbiAgICAgICAgICAgICAgICAgIGxhenlMb2FkVW5pcXVlSUQ9e2xhenlMb2FkVW5pcXVlSUR9XG4gICAgICAgICAgICAgICAgICByZWFjdExpc3RQcm9wcz17cmVhY3RMaXN0UHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDogPFRib2R5Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEJvZHlQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgLi4udEJvZHlQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB7Li4udEJvZHlQcm9wcy5yZXN0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cGFnZVJvd3MubWFwKChkLCBpKSA9PiBtYWtlUGFnZVJvdyhkLCBpKSl9XG4gICAgICAgICAgICAgICAgICB7cGFkUm93cy5tYXAobWFrZVBhZFJvdyl9XG4gICAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+fVxuXG4gICAgICAgICAgICB7aGFzQ29sdW1uRm9vdGVyID8gbWFrZUNvbHVtbkZvb3RlcnMoKSA6IG51bGx9XG4gICAgICAgICAgPC9UYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Cb3R0b20gPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tYm90dG9tXCI+e3BhZ2luYXRpb259PC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgeyFwYWdlUm93cy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgPE5vRGF0YUNvbXBvbmVudCB7Li4ubm9EYXRhUHJvcHN9PntfLm5vcm1hbGl6ZUNvbXBvbmVudChub0RhdGFUZXh0KX08L05vRGF0YUNvbXBvbmVudD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxMb2FkaW5nQ29tcG9uZW50IGxvYWRpbmc9e2xvYWRpbmd9IGxvYWRpbmdUZXh0PXtsb2FkaW5nVGV4dH0gey4uLmxvYWRpbmdQcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gY2hpbGRQcm9wcyBhcmUgb3B0aW9uYWxseSBwYXNzZWQgdG8gYSBmdW5jdGlvbi1hcy1hLWNoaWxkXG4gICAgcmV0dXJuIGNoaWxkcmVuID8gY2hpbGRyZW4oZmluYWxTdGF0ZSwgbWFrZVRhYmxlLCB0aGlzKSA6IG1ha2VUYWJsZSgpXG4gIH1cbn1cbiJdfQ==