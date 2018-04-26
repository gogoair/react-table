'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//
exports.default = {
  get: get,
  set: set,
  takeRight: takeRight,
  last: last,
  orderBy: orderBy,
  range: range,
  remove: remove,
  clone: clone,
  getFirstDefined: getFirstDefined,
  sum: sum,
  makeTemplateComponent: makeTemplateComponent,
  groupBy: groupBy,
  isArray: isArray,
  splitProps: splitProps,
  compactObject: compactObject,
  isSortingDesc: isSortingDesc,
  normalizeComponent: normalizeComponent,
  asPx: asPx
};


function get(obj, path, def) {
  if (!path) {
    return obj;
  }
  var pathObj = makePathArray(path);
  var val = void 0;
  try {
    val = pathObj.reduce(function (current, pathPart) {
      return current[pathPart];
    }, obj);
  } catch (e) {
    // continue regardless of error
  }
  return typeof val !== 'undefined' ? val : def;
}

function set() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments[1];
  var value = arguments[2];

  var keys = makePathArray(path);
  var keyPart = void 0;
  var cursor = obj;
  while ((keyPart = keys.shift()) && keys.length) {
    if (!cursor[keyPart]) {
      cursor[keyPart] = {};
    }
    cursor = cursor[keyPart];
  }
  cursor[keyPart] = value;
  return obj;
}

function takeRight(arr, n) {
  var start = n > arr.length ? 0 : arr.length - n;
  return arr.slice(start);
}

function last(arr) {
  return arr[arr.length - 1];
}

function range(n) {
  var arr = [];
  for (var i = 0; i < n; i += 1) {
    arr.push(n);
  }
  return arr;
}

function orderBy(arr, funcs, dirs, indexKey) {
  return arr.sort(function (rowA, rowB) {
    for (var i = 0; i < funcs.length; i += 1) {
      var comp = funcs[i];
      var desc = dirs[i] === false || dirs[i] === 'desc';
      var sortInt = comp(rowA, rowB);
      if (sortInt) {
        return desc ? -sortInt : sortInt;
      }
    }
    // Use the row index for tie breakers
    return dirs[0] ? rowA[indexKey] - rowB[indexKey] : rowB[indexKey] - rowA[indexKey];
  });
}

function remove(a, b) {
  return a.filter(function (o, i) {
    var r = b(o);
    if (r) {
      a.splice(i, 1);
      return true;
    }
    return false;
  });
}

function clone(a) {
  try {
    return JSON.parse(JSON.stringify(a, function (key, value) {
      if (typeof value === 'function') {
        return value.toString();
      }
      return value;
    }));
  } catch (e) {
    return a;
  }
}

function getFirstDefined() {
  for (var i = 0; i < arguments.length; i += 1) {
    if (typeof (arguments.length <= i ? undefined : arguments[i]) !== 'undefined') {
      return arguments.length <= i ? undefined : arguments[i];
    }
  }
}

function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function makeTemplateComponent(compClass, displayName) {
  if (!displayName) {
    throw new Error('No displayName found for template component:', compClass);
  }
  var cmp = function cmp(_ref) {
    var children = _ref.children,
        className = _ref.className,
        lazyLoadUniqueID = _ref.lazyLoadUniqueID,
        rest = _objectWithoutProperties(_ref, ['children', 'className', 'lazyLoadUniqueID']);

    return _react2.default.createElement(
      'div',
      _extends({ className: (0, _classnames2.default)(compClass, className) }, rest),
      children
    );
  };
  cmp.displayName = displayName;
  return cmp;
}

function groupBy(xs, key) {
  return xs.reduce(function (rv, x, i) {
    var resKey = typeof key === 'function' ? key(x, i) : x[key];
    rv[resKey] = isArray(rv[resKey]) ? rv[resKey] : [];
    rv[resKey].push(x);
    return rv;
  }, {});
}

function asPx(value) {
  value = Number(value);
  return Number.isNaN(value) ? null : value + 'px';
}

function isArray(a) {
  return Array.isArray(a);
}

// ########################################################################
// Non-exported Helpers
// ########################################################################

function makePathArray(obj) {
  return flattenDeep(obj).join('.').replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

function flattenDeep(arr) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], newArr);
    }
  }
  return newArr;
}

function splitProps(_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      rest = _objectWithoutProperties(_ref2, ['className', 'style']);

  return {
    className: className,
    style: style,
    rest: rest || {}
  };
}

function compactObject(obj) {
  var newObj = {};
  if (obj) {
    Object.keys(obj).map(function (key) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined && typeof obj[key] !== 'undefined') {
        newObj[key] = obj[key];
      }
      return true;
    });
  }
  return newObj;
}

function isSortingDesc(d) {
  return !!(d.sort === 'desc' || d.desc === true || d.asc === false);
}

function normalizeComponent(Comp) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Comp;

  return typeof Comp === 'function' ? Object.getPrototypeOf(Comp).isReactComponent ? _react2.default.createElement(Comp, params) : Comp(params) : fallback;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJnZXQiLCJzZXQiLCJ0YWtlUmlnaHQiLCJsYXN0Iiwib3JkZXJCeSIsInJhbmdlIiwicmVtb3ZlIiwiY2xvbmUiLCJnZXRGaXJzdERlZmluZWQiLCJzdW0iLCJtYWtlVGVtcGxhdGVDb21wb25lbnQiLCJncm91cEJ5IiwiaXNBcnJheSIsInNwbGl0UHJvcHMiLCJjb21wYWN0T2JqZWN0IiwiaXNTb3J0aW5nRGVzYyIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsImFzUHgiLCJvYmoiLCJwYXRoIiwiZGVmIiwicGF0aE9iaiIsIm1ha2VQYXRoQXJyYXkiLCJ2YWwiLCJyZWR1Y2UiLCJjdXJyZW50IiwicGF0aFBhcnQiLCJlIiwidmFsdWUiLCJrZXlzIiwia2V5UGFydCIsImN1cnNvciIsInNoaWZ0IiwibGVuZ3RoIiwiYXJyIiwibiIsInN0YXJ0Iiwic2xpY2UiLCJpIiwicHVzaCIsImZ1bmNzIiwiZGlycyIsImluZGV4S2V5Iiwic29ydCIsInJvd0EiLCJyb3dCIiwiY29tcCIsImRlc2MiLCJzb3J0SW50IiwiYSIsImIiLCJmaWx0ZXIiLCJvIiwiciIsInNwbGljZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImtleSIsInRvU3RyaW5nIiwiY29tcENsYXNzIiwiZGlzcGxheU5hbWUiLCJFcnJvciIsImNtcCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwibGF6eUxvYWRVbmlxdWVJRCIsInJlc3QiLCJ4cyIsInJ2IiwieCIsInJlc0tleSIsIk51bWJlciIsImlzTmFOIiwiQXJyYXkiLCJmbGF0dGVuRGVlcCIsImpvaW4iLCJyZXBsYWNlIiwic3BsaXQiLCJuZXdBcnIiLCJzdHlsZSIsIm5ld09iaiIsIk9iamVjdCIsIm1hcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInVuZGVmaW5lZCIsImQiLCJhc2MiLCJDb21wIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRQcm90b3R5cGVPZiIs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QURGLEdBR0VELEtBQUtDLE1BQUwsQ0FKRyxHQU9MQyxRQVBGO0FBU0QiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuLy9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBzZXQsXG4gIHRha2VSaWdodCxcbiAgbGFzdCxcbiAgb3JkZXJCeSxcbiAgcmFuZ2UsXG4gIHJlbW92ZSxcbiAgY2xvbmUsXG4gIGdldEZpcnN0RGVmaW5lZCxcbiAgc3VtLFxuICBtYWtlVGVtcGxhdGVDb21wb25lbnQsXG4gIGdyb3VwQnksXG4gIGlzQXJyYXksXG4gIHNwbGl0UHJvcHMsXG4gIGNvbXBhY3RPYmplY3QsXG4gIGlzU29ydGluZ0Rlc2MsXG4gIG5vcm1hbGl6ZUNvbXBvbmVudCxcbiAgYXNQeCxcbn1cblxuZnVuY3Rpb24gZ2V0IChvYmosIHBhdGgsIGRlZikge1xuICBpZiAoIXBhdGgpIHtcbiAgICByZXR1cm4gb2JqXG4gIH1cbiAgY29uc3QgcGF0aE9iaiA9IG1ha2VQYXRoQXJyYXkocGF0aClcbiAgbGV0IHZhbFxuICB0cnkge1xuICAgIHZhbCA9IHBhdGhPYmoucmVkdWNlKChjdXJyZW50LCBwYXRoUGFydCkgPT4gY3VycmVudFtwYXRoUGFydF0sIG9iailcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGNvbnRpbnVlIHJlZ2FyZGxlc3Mgb2YgZXJyb3JcbiAgfVxuICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgPyB2YWwgOiBkZWZcbn1cblxuZnVuY3Rpb24gc2V0IChvYmogPSB7fSwgcGF0aCwgdmFsdWUpIHtcbiAgY29uc3Qga2V5cyA9IG1ha2VQYXRoQXJyYXkocGF0aClcbiAgbGV0IGtleVBhcnRcbiAgbGV0IGN1cnNvciA9IG9ialxuICB3aGlsZSAoKGtleVBhcnQgPSBrZXlzLnNoaWZ0KCkpICYmIGtleXMubGVuZ3RoKSB7XG4gICAgaWYgKCFjdXJzb3Jba2V5UGFydF0pIHtcbiAgICAgIGN1cnNvcltrZXlQYXJ0XSA9IHt9XG4gICAgfVxuICAgIGN1cnNvciA9IGN1cnNvcltrZXlQYXJ0XVxuICB9XG4gIGN1cnNvcltrZXlQYXJ0XSA9IHZhbHVlXG4gIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gdGFrZVJpZ2h0IChhcnIsIG4pIHtcbiAgY29uc3Qgc3RhcnQgPSBuID4gYXJyLmxlbmd0aCA/IDAgOiBhcnIubGVuZ3RoIC0gblxuICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0KVxufVxuXG5mdW5jdGlvbiBsYXN0IChhcnIpIHtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV1cbn1cblxuZnVuY3Rpb24gcmFuZ2UgKG4pIHtcbiAgY29uc3QgYXJyID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcbiAgICBhcnIucHVzaChuKVxuICB9XG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gb3JkZXJCeSAoYXJyLCBmdW5jcywgZGlycywgaW5kZXhLZXkpIHtcbiAgcmV0dXJuIGFyci5zb3J0KChyb3dBLCByb3dCKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmdW5jcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29tcCA9IGZ1bmNzW2ldXG4gICAgICBjb25zdCBkZXNjID0gZGlyc1tpXSA9PT0gZmFsc2UgfHwgZGlyc1tpXSA9PT0gJ2Rlc2MnXG4gICAgICBjb25zdCBzb3J0SW50ID0gY29tcChyb3dBLCByb3dCKVxuICAgICAgaWYgKHNvcnRJbnQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MgPyAtc29ydEludCA6IHNvcnRJbnRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVXNlIHRoZSByb3cgaW5kZXggZm9yIHRpZSBicmVha2Vyc1xuICAgIHJldHVybiBkaXJzWzBdID8gcm93QVtpbmRleEtleV0gLSByb3dCW2luZGV4S2V5XSA6IHJvd0JbaW5kZXhLZXldIC0gcm93QVtpbmRleEtleV1cbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlIChhLCBiKSB7XG4gIHJldHVybiBhLmZpbHRlcigobywgaSkgPT4ge1xuICAgIGNvbnN0IHIgPSBiKG8pXG4gICAgaWYgKHIpIHtcbiAgICAgIGEuc3BsaWNlKGksIDEpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2xvbmUgKGEpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KGEsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgfSlcbiAgICApXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gYVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEZpcnN0RGVmaW5lZCAoLi4uYXJncykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIGFyZ3NbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gYXJnc1tpXVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdW0gKGFycikge1xuICByZXR1cm4gYXJyLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApXG59XG5cbmZ1bmN0aW9uIG1ha2VUZW1wbGF0ZUNvbXBvbmVudCAoY29tcENsYXNzLCBkaXNwbGF5TmFtZSkge1xuICBpZiAoIWRpc3BsYXlOYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBkaXNwbGF5TmFtZSBmb3VuZCBmb3IgdGVtcGxhdGUgY29tcG9uZW50OicsIGNvbXBDbGFzcylcbiAgfVxuICBjb25zdCBjbXAgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBsYXp5TG9hZFVuaXF1ZUlELCAuLi5yZXN0IH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjb21wQ2xhc3MsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxuICBjbXAuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZVxuICByZXR1cm4gY21wXG59XG5cbmZ1bmN0aW9uIGdyb3VwQnkgKHhzLCBrZXkpIHtcbiAgcmV0dXJuIHhzLnJlZHVjZSgocnYsIHgsIGkpID0+IHtcbiAgICBjb25zdCByZXNLZXkgPSB0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nID8ga2V5KHgsIGkpIDogeFtrZXldXG4gICAgcnZbcmVzS2V5XSA9IGlzQXJyYXkocnZbcmVzS2V5XSkgPyBydltyZXNLZXldIDogW11cbiAgICBydltyZXNLZXldLnB1c2goeClcbiAgICByZXR1cm4gcnZcbiAgfSwge30pXG59XG5cbmZ1bmN0aW9uIGFzUHggKHZhbHVlKSB7XG4gIHZhbHVlID0gTnVtYmVyKHZhbHVlKVxuICByZXR1cm4gTnVtYmVyLmlzTmFOKHZhbHVlKSA/IG51bGwgOiBgJHt2YWx1ZX1weGBcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoYSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhKVxufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIE5vbi1leHBvcnRlZCBIZWxwZXJzXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuZnVuY3Rpb24gbWFrZVBhdGhBcnJheSAob2JqKSB7XG4gIHJldHVybiBmbGF0dGVuRGVlcChvYmopXG4gICAgLmpvaW4oJy4nKVxuICAgIC5yZXBsYWNlKC9cXFsvZywgJy4nKVxuICAgIC5yZXBsYWNlKC9cXF0vZywgJycpXG4gICAgLnNwbGl0KCcuJylcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkRlZXAgKGFyciwgbmV3QXJyID0gW10pIHtcbiAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICBuZXdBcnIucHVzaChhcnIpXG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGZsYXR0ZW5EZWVwKGFycltpXSwgbmV3QXJyKVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3QXJyXG59XG5cbmZ1bmN0aW9uIHNwbGl0UHJvcHMgKHsgY2xhc3NOYW1lLCBzdHlsZSwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiB7XG4gICAgY2xhc3NOYW1lLFxuICAgIHN0eWxlLFxuICAgIHJlc3Q6IHJlc3QgfHwge30sXG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFjdE9iamVjdCAob2JqKSB7XG4gIGNvbnN0IG5ld09iaiA9IHt9XG4gIGlmIChvYmopIHtcbiAgICBPYmplY3Qua2V5cyhvYmopLm1hcChrZXkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICYmXG4gICAgICAgIG9ialtrZXldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgdHlwZW9mIG9ialtrZXldICE9PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbiAgfVxuICByZXR1cm4gbmV3T2JqXG59XG5cbmZ1bmN0aW9uIGlzU29ydGluZ0Rlc2MgKGQpIHtcbiAgcmV0dXJuICEhKGQuc29ydCA9PT0gJ2Rlc2MnIHx8IGQuZGVzYyA9PT0gdHJ1ZSB8fCBkLmFzYyA9PT0gZmFsc2UpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoQ29tcCwgcGFyYW1zID0ge30sIGZhbGxiYWNrID0gQ29tcCkge1xuICByZXR1cm4gdHlwZW9mIENvbXAgPT09ICdmdW5jdGlvbicgPyAoXG4gICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbXApLmlzUmVhY3RDb21wb25lbnQgPyAoXG4gICAgICA8Q29tcCB7Li4ucGFyYW1zfSAvPlxuICAgICkgOiAoXG4gICAgICBDb21wKHBhcmFtcylcbiAgICApXG4gICkgOiAoXG4gICAgZmFsbGJhY2tcbiAgKVxufVxuIl19