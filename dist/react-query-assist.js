var qn = Object.defineProperty;
var Un = (r, e, t) => e in r ? qn(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => (Un(r, typeof e != "symbol" ? e + "" : e, t), t);
import * as ae from "react";
import Hr, { forwardRef as Gn, useContext as Xn, PureComponent as Jn, Component as Nt, useLayoutEffect as Zn, useRef as Qn, useCallback as ea } from "react";
function Kr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Wr = { exports: {} }, Ne = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Tr, dt;
function hr() {
  if (dt)
    return Tr;
  dt = 1;
  var r = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(s).map(function(u) {
        return s[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        f[u] = u;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Tr = a() ? Object.assign : function(o, s) {
    for (var c, l = n(o), f, u = 1; u < arguments.length; u++) {
      c = Object(arguments[u]);
      for (var d in c)
        e.call(c, d) && (l[d] = c[d]);
      if (r) {
        f = r(c);
        for (var m = 0; m < f.length; m++)
          t.call(c, f[m]) && (l[f[m]] = c[f[m]]);
      }
    }
    return l;
  }, Tr;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function ra() {
  if (pt)
    return Ne;
  pt = 1, hr();
  var r = Hr, e = 60103;
  if (Ne.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var t = Symbol.for;
    e = t("react.element"), Ne.Fragment = t("react.fragment");
  }
  var n = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = Object.prototype.hasOwnProperty, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, f) {
    var u, d = {}, m = null, w = null;
    f !== void 0 && (m = "" + f), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (u in l)
      a.call(l, u) && !o.hasOwnProperty(u) && (d[u] = l[u]);
    if (c && c.defaultProps)
      for (u in l = c.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: e, type: c, key: m, ref: w, props: d, _owner: n.current };
  }
  return Ne.jsx = s, Ne.jsxs = s, Ne;
}
var Or = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function ta() {
  return ht || (ht = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      var e = Hr, t = hr(), n = 60103, a = 60106;
      r.Fragment = 60107;
      var o = 60108, s = 60114, c = 60109, l = 60110, f = 60112, u = 60113, d = 60120, m = 60115, w = 60116, R = 60121, v = 60122, C = 60117, E = 60129, z = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var S = Symbol.for;
        n = S("react.element"), a = S("react.portal"), r.Fragment = S("react.fragment"), o = S("react.strict_mode"), s = S("react.profiler"), c = S("react.provider"), l = S("react.context"), f = S("react.forward_ref"), u = S("react.suspense"), d = S("react.suspense_list"), m = S("react.memo"), w = S("react.lazy"), R = S("react.block"), v = S("react.server.block"), C = S("react.fundamental"), S("react.scope"), S("react.opaque.id"), E = S("react.debug_trace_mode"), S("react.offscreen"), z = S("react.legacy_hidden");
      }
      var L = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
      function q(i) {
        if (i === null || typeof i != "object")
          return null;
        var p = L && i[L] || i[g];
        return typeof p == "function" ? p : null;
      }
      var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function Z(i) {
        {
          for (var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), T = 1; T < p; T++)
            y[T - 1] = arguments[T];
          Se("error", i, y);
        }
      }
      function Se(i, p, y) {
        {
          var T = P.ReactDebugCurrentFrame, U = T.getStackAddendum();
          U !== "" && (p += "%s", y = y.concat([U]));
          var G = y.map(function(M) {
            return "" + M;
          });
          G.unshift("Warning: " + p), Function.prototype.apply.call(console[i], console, G);
        }
      }
      var we = !1;
      function Fe(i) {
        return !!(typeof i == "string" || typeof i == "function" || i === r.Fragment || i === s || i === E || i === o || i === u || i === d || i === z || we || typeof i == "object" && i !== null && (i.$$typeof === w || i.$$typeof === m || i.$$typeof === c || i.$$typeof === l || i.$$typeof === f || i.$$typeof === C || i.$$typeof === R || i[0] === v));
      }
      function qe(i, p, y) {
        var T = p.displayName || p.name || "";
        return i.displayName || (T !== "" ? y + "(" + T + ")" : y);
      }
      function ze(i) {
        return i.displayName || "Context";
      }
      function te(i) {
        if (i == null)
          return null;
        if (typeof i.tag == "number" && Z("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof i == "function")
          return i.displayName || i.name || null;
        if (typeof i == "string")
          return i;
        switch (i) {
          case r.Fragment:
            return "Fragment";
          case a:
            return "Portal";
          case s:
            return "Profiler";
          case o:
            return "StrictMode";
          case u:
            return "Suspense";
          case d:
            return "SuspenseList";
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case l:
              var p = i;
              return ze(p) + ".Consumer";
            case c:
              var y = i;
              return ze(y._context) + ".Provider";
            case f:
              return qe(i, i.render, "ForwardRef");
            case m:
              return te(i.type);
            case R:
              return te(i._render);
            case w: {
              var T = i, U = T._payload, G = T._init;
              try {
                return te(G(U));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Pe = 0, de, Re, je, De, h, x, $;
      function A() {
      }
      A.__reactDisabledLog = !0;
      function O() {
        {
          if (Pe === 0) {
            de = console.log, Re = console.info, je = console.warn, De = console.error, h = console.group, x = console.groupCollapsed, $ = console.groupEnd;
            var i = {
              configurable: !0,
              enumerable: !0,
              value: A,
              writable: !0
            };
            Object.defineProperties(console, {
              info: i,
              log: i,
              warn: i,
              error: i,
              group: i,
              groupCollapsed: i,
              groupEnd: i
            });
          }
          Pe++;
        }
      }
      function F() {
        {
          if (Pe--, Pe === 0) {
            var i = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: t({}, i, {
                value: de
              }),
              info: t({}, i, {
                value: Re
              }),
              warn: t({}, i, {
                value: je
              }),
              error: t({}, i, {
                value: De
              }),
              group: t({}, i, {
                value: h
              }),
              groupCollapsed: t({}, i, {
                value: x
              }),
              groupEnd: t({}, i, {
                value: $
              })
            });
          }
          Pe < 0 && Z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var _ = P.ReactCurrentDispatcher, k;
      function j(i, p, y) {
        {
          if (k === void 0)
            try {
              throw Error();
            } catch (U) {
              var T = U.stack.trim().match(/\n( *(at )?)/);
              k = T && T[1] || "";
            }
          return `
` + k + i;
        }
      }
      var D = !1, I;
      {
        var ie = typeof WeakMap == "function" ? WeakMap : Map;
        I = new ie();
      }
      function b(i, p) {
        if (!i || D)
          return "";
        {
          var y = I.get(i);
          if (y !== void 0)
            return y;
        }
        var T;
        D = !0;
        var U = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var G;
        G = _.current, _.current = null, O();
        try {
          if (p) {
            var M = function() {
              throw Error();
            };
            if (Object.defineProperty(M.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(M, []);
              } catch (ke) {
                T = ke;
              }
              Reflect.construct(i, [], M);
            } else {
              try {
                M.call();
              } catch (ke) {
                T = ke;
              }
              i.call(M.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ke) {
              T = ke;
            }
            i();
          }
        } catch (ke) {
          if (ke && T && typeof ke.stack == "string") {
            for (var W = ke.stack.split(`
`), ce = T.stack.split(`
`), J = W.length - 1, Q = ce.length - 1; J >= 1 && Q >= 0 && W[J] !== ce[Q]; )
              Q--;
            for (; J >= 1 && Q >= 0; J--, Q--)
              if (W[J] !== ce[Q]) {
                if (J !== 1 || Q !== 1)
                  do
                    if (J--, Q--, Q < 0 || W[J] !== ce[Q]) {
                      var _e = `
` + W[J].replace(" at new ", " at ");
                      return typeof i == "function" && I.set(i, _e), _e;
                    }
                  while (J >= 1 && Q >= 0);
                break;
              }
          }
        } finally {
          D = !1, _.current = G, F(), Error.prepareStackTrace = U;
        }
        var Ye = i ? i.displayName || i.name : "", ft = Ye ? j(Ye) : "";
        return typeof i == "function" && I.set(i, ft), ft;
      }
      function pe(i, p, y) {
        return b(i, !1);
      }
      function Me(i) {
        var p = i.prototype;
        return !!(p && p.isReactComponent);
      }
      function Ie(i, p, y) {
        if (i == null)
          return "";
        if (typeof i == "function")
          return b(i, Me(i));
        if (typeof i == "string")
          return j(i);
        switch (i) {
          case u:
            return j("Suspense");
          case d:
            return j("SuspenseList");
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case f:
              return pe(i.render);
            case m:
              return Ie(i.type, p, y);
            case R:
              return pe(i._render);
            case w: {
              var T = i, U = T._payload, G = T._init;
              try {
                return Ie(G(U), p, y);
              } catch {
              }
            }
          }
        return "";
      }
      var rt = {}, tt = P.ReactDebugCurrentFrame;
      function or(i) {
        if (i) {
          var p = i._owner, y = Ie(i.type, i._source, p ? p.type : null);
          tt.setExtraStackFrame(y);
        } else
          tt.setExtraStackFrame(null);
      }
      function kn(i, p, y, T, U) {
        {
          var G = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var M in i)
            if (G(i, M)) {
              var W = void 0;
              try {
                if (typeof i[M] != "function") {
                  var ce = Error((T || "React class") + ": " + y + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ce.name = "Invariant Violation", ce;
                }
                W = i[M](p, M, T, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (J) {
                W = J;
              }
              W && !(W instanceof Error) && (or(U), Z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", y, M, typeof W), or(null)), W instanceof Error && !(W.message in rt) && (rt[W.message] = !0, or(U), Z("Failed %s type: %s", y, W.message), or(null));
            }
        }
      }
      var Ue = P.ReactCurrentOwner, Sr = Object.prototype.hasOwnProperty, An = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, nt, at, wr;
      wr = {};
      function $n(i) {
        if (Sr.call(i, "ref")) {
          var p = Object.getOwnPropertyDescriptor(i, "ref").get;
          if (p && p.isReactWarning)
            return !1;
        }
        return i.ref !== void 0;
      }
      function jn(i) {
        if (Sr.call(i, "key")) {
          var p = Object.getOwnPropertyDescriptor(i, "key").get;
          if (p && p.isReactWarning)
            return !1;
        }
        return i.key !== void 0;
      }
      function In(i, p) {
        if (typeof i.ref == "string" && Ue.current && p && Ue.current.stateNode !== p) {
          var y = te(Ue.current.type);
          wr[y] || (Z('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(Ue.current.type), i.ref), wr[y] = !0);
        }
      }
      function Ln(i, p) {
        {
          var y = function() {
            nt || (nt = !0, Z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
          };
          y.isReactWarning = !0, Object.defineProperty(i, "key", {
            get: y,
            configurable: !0
          });
        }
      }
      function Wn(i, p) {
        {
          var y = function() {
            at || (at = !0, Z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
          };
          y.isReactWarning = !0, Object.defineProperty(i, "ref", {
            get: y,
            configurable: !0
          });
        }
      }
      var Fn = function(i, p, y, T, U, G, M) {
        var W = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: i,
          key: p,
          ref: y,
          props: M,
          // Record the component responsible for creating this element.
          _owner: G
        };
        return W._store = {}, Object.defineProperty(W._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(W, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: T
        }), Object.defineProperty(W, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: U
        }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
      };
      function zn(i, p, y, T, U) {
        {
          var G, M = {}, W = null, ce = null;
          y !== void 0 && (W = "" + y), jn(p) && (W = "" + p.key), $n(p) && (ce = p.ref, In(p, U));
          for (G in p)
            Sr.call(p, G) && !An.hasOwnProperty(G) && (M[G] = p[G]);
          if (i && i.defaultProps) {
            var J = i.defaultProps;
            for (G in J)
              M[G] === void 0 && (M[G] = J[G]);
          }
          if (W || ce) {
            var Q = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
            W && Ln(M, Q), ce && Wn(M, Q);
          }
          return Fn(i, W, ce, U, T, Ue.current, M);
        }
      }
      var Rr = P.ReactCurrentOwner, ot = P.ReactDebugCurrentFrame;
      function Be(i) {
        if (i) {
          var p = i._owner, y = Ie(i.type, i._source, p ? p.type : null);
          ot.setExtraStackFrame(y);
        } else
          ot.setExtraStackFrame(null);
      }
      var Cr;
      Cr = !1;
      function Er(i) {
        return typeof i == "object" && i !== null && i.$$typeof === n;
      }
      function it() {
        {
          if (Rr.current) {
            var i = te(Rr.current.type);
            if (i)
              return `

Check the render method of \`` + i + "`.";
          }
          return "";
        }
      }
      function Dn(i) {
        {
          if (i !== void 0) {
            var p = i.fileName.replace(/^.*[\\\/]/, ""), y = i.lineNumber;
            return `

Check your code at ` + p + ":" + y + ".";
          }
          return "";
        }
      }
      var st = {};
      function Mn(i) {
        {
          var p = it();
          if (!p) {
            var y = typeof i == "string" ? i : i.displayName || i.name;
            y && (p = `

Check the top-level render call using <` + y + ">.");
          }
          return p;
        }
      }
      function ct(i, p) {
        {
          if (!i._store || i._store.validated || i.key != null)
            return;
          i._store.validated = !0;
          var y = Mn(p);
          if (st[y])
            return;
          st[y] = !0;
          var T = "";
          i && i._owner && i._owner !== Rr.current && (T = " It was passed a child from " + te(i._owner.type) + "."), Be(i), Z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, T), Be(null);
        }
      }
      function ut(i, p) {
        {
          if (typeof i != "object")
            return;
          if (Array.isArray(i))
            for (var y = 0; y < i.length; y++) {
              var T = i[y];
              Er(T) && ct(T, p);
            }
          else if (Er(i))
            i._store && (i._store.validated = !0);
          else if (i) {
            var U = q(i);
            if (typeof U == "function" && U !== i.entries)
              for (var G = U.call(i), M; !(M = G.next()).done; )
                Er(M.value) && ct(M.value, p);
          }
        }
      }
      function Bn(i) {
        {
          var p = i.type;
          if (p == null || typeof p == "string")
            return;
          var y;
          if (typeof p == "function")
            y = p.propTypes;
          else if (typeof p == "object" && (p.$$typeof === f || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          p.$$typeof === m))
            y = p.propTypes;
          else
            return;
          if (y) {
            var T = te(p);
            kn(y, i.props, "prop", T, i);
          } else if (p.PropTypes !== void 0 && !Cr) {
            Cr = !0;
            var U = te(p);
            Z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
          }
          typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && Z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yn(i) {
        {
          for (var p = Object.keys(i.props), y = 0; y < p.length; y++) {
            var T = p[y];
            if (T !== "children" && T !== "key") {
              Be(i), Z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), Be(null);
              break;
            }
          }
          i.ref !== null && (Be(i), Z("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
        }
      }
      function lt(i, p, y, T, U, G) {
        {
          var M = Fe(i);
          if (!M) {
            var W = "";
            (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var ce = Dn(U);
            ce ? W += ce : W += it();
            var J;
            i === null ? J = "null" : Array.isArray(i) ? J = "array" : i !== void 0 && i.$$typeof === n ? (J = "<" + (te(i.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : J = typeof i, Z("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, W);
          }
          var Q = zn(i, p, y, U, G);
          if (Q == null)
            return Q;
          if (M) {
            var _e = p.children;
            if (_e !== void 0)
              if (T)
                if (Array.isArray(_e)) {
                  for (var Ye = 0; Ye < _e.length; Ye++)
                    ut(_e[Ye], i);
                  Object.freeze && Object.freeze(_e);
                } else
                  Z("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                ut(_e, i);
          }
          return i === r.Fragment ? Yn(Q) : Bn(Q), Q;
        }
      }
      function Nn(i, p, y) {
        return lt(i, p, y, !0);
      }
      function Vn(i, p, y) {
        return lt(i, p, y, !1);
      }
      var Hn = Vn, Kn = Nn;
      r.jsx = Hn, r.jsxs = Kn;
    }();
  }(Or)), Or;
}
process.env.NODE_ENV === "production" ? Wr.exports = ra() : Wr.exports = ta();
var X = Wr.exports, Fr = { exports: {} }, ir = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function na() {
  if (gt)
    return V;
  gt = 1;
  var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, a = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, s = r ? Symbol.for("react.provider") : 60109, c = r ? Symbol.for("react.context") : 60110, l = r ? Symbol.for("react.async_mode") : 60111, f = r ? Symbol.for("react.concurrent_mode") : 60111, u = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, w = r ? Symbol.for("react.memo") : 60115, R = r ? Symbol.for("react.lazy") : 60116, v = r ? Symbol.for("react.block") : 60121, C = r ? Symbol.for("react.fundamental") : 60117, E = r ? Symbol.for("react.responder") : 60118, z = r ? Symbol.for("react.scope") : 60119;
  function S(g) {
    if (typeof g == "object" && g !== null) {
      var q = g.$$typeof;
      switch (q) {
        case e:
          switch (g = g.type, g) {
            case l:
            case f:
            case n:
            case o:
            case a:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case u:
                case R:
                case w:
                case s:
                  return g;
                default:
                  return q;
              }
          }
        case t:
          return q;
      }
    }
  }
  function L(g) {
    return S(g) === f;
  }
  return V.AsyncMode = l, V.ConcurrentMode = f, V.ContextConsumer = c, V.ContextProvider = s, V.Element = e, V.ForwardRef = u, V.Fragment = n, V.Lazy = R, V.Memo = w, V.Portal = t, V.Profiler = o, V.StrictMode = a, V.Suspense = d, V.isAsyncMode = function(g) {
    return L(g) || S(g) === l;
  }, V.isConcurrentMode = L, V.isContextConsumer = function(g) {
    return S(g) === c;
  }, V.isContextProvider = function(g) {
    return S(g) === s;
  }, V.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, V.isForwardRef = function(g) {
    return S(g) === u;
  }, V.isFragment = function(g) {
    return S(g) === n;
  }, V.isLazy = function(g) {
    return S(g) === R;
  }, V.isMemo = function(g) {
    return S(g) === w;
  }, V.isPortal = function(g) {
    return S(g) === t;
  }, V.isProfiler = function(g) {
    return S(g) === o;
  }, V.isStrictMode = function(g) {
    return S(g) === a;
  }, V.isSuspense = function(g) {
    return S(g) === d;
  }, V.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === f || g === o || g === a || g === d || g === m || typeof g == "object" && g !== null && (g.$$typeof === R || g.$$typeof === w || g.$$typeof === s || g.$$typeof === c || g.$$typeof === u || g.$$typeof === C || g.$$typeof === E || g.$$typeof === z || g.$$typeof === v);
  }, V.typeOf = S, V;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function aa() {
  return vt || (vt = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, a = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, s = r ? Symbol.for("react.provider") : 60109, c = r ? Symbol.for("react.context") : 60110, l = r ? Symbol.for("react.async_mode") : 60111, f = r ? Symbol.for("react.concurrent_mode") : 60111, u = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, w = r ? Symbol.for("react.memo") : 60115, R = r ? Symbol.for("react.lazy") : 60116, v = r ? Symbol.for("react.block") : 60121, C = r ? Symbol.for("react.fundamental") : 60117, E = r ? Symbol.for("react.responder") : 60118, z = r ? Symbol.for("react.scope") : 60119;
    function S(b) {
      return typeof b == "string" || typeof b == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      b === n || b === f || b === o || b === a || b === d || b === m || typeof b == "object" && b !== null && (b.$$typeof === R || b.$$typeof === w || b.$$typeof === s || b.$$typeof === c || b.$$typeof === u || b.$$typeof === C || b.$$typeof === E || b.$$typeof === z || b.$$typeof === v);
    }
    function L(b) {
      if (typeof b == "object" && b !== null) {
        var pe = b.$$typeof;
        switch (pe) {
          case e:
            var Me = b.type;
            switch (Me) {
              case l:
              case f:
              case n:
              case o:
              case a:
              case d:
                return Me;
              default:
                var Ie = Me && Me.$$typeof;
                switch (Ie) {
                  case c:
                  case u:
                  case R:
                  case w:
                  case s:
                    return Ie;
                  default:
                    return pe;
                }
            }
          case t:
            return pe;
        }
      }
    }
    var g = l, q = f, P = c, Z = s, Se = e, we = u, Fe = n, qe = R, ze = w, te = t, Pe = o, de = a, Re = d, je = !1;
    function De(b) {
      return je || (je = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(b) || L(b) === l;
    }
    function h(b) {
      return L(b) === f;
    }
    function x(b) {
      return L(b) === c;
    }
    function $(b) {
      return L(b) === s;
    }
    function A(b) {
      return typeof b == "object" && b !== null && b.$$typeof === e;
    }
    function O(b) {
      return L(b) === u;
    }
    function F(b) {
      return L(b) === n;
    }
    function _(b) {
      return L(b) === R;
    }
    function k(b) {
      return L(b) === w;
    }
    function j(b) {
      return L(b) === t;
    }
    function D(b) {
      return L(b) === o;
    }
    function I(b) {
      return L(b) === a;
    }
    function ie(b) {
      return L(b) === d;
    }
    H.AsyncMode = g, H.ConcurrentMode = q, H.ContextConsumer = P, H.ContextProvider = Z, H.Element = Se, H.ForwardRef = we, H.Fragment = Fe, H.Lazy = qe, H.Memo = ze, H.Portal = te, H.Profiler = Pe, H.StrictMode = de, H.Suspense = Re, H.isAsyncMode = De, H.isConcurrentMode = h, H.isContextConsumer = x, H.isContextProvider = $, H.isElement = A, H.isForwardRef = O, H.isFragment = F, H.isLazy = _, H.isMemo = k, H.isPortal = j, H.isProfiler = D, H.isStrictMode = I, H.isSuspense = ie, H.isValidElementType = S, H.typeOf = L;
  }()), H;
}
var mt;
function qr() {
  return mt || (mt = 1, process.env.NODE_ENV === "production" ? ir.exports = na() : ir.exports = aa()), ir.exports;
}
var Pr, bt;
function Ur() {
  if (bt)
    return Pr;
  bt = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pr = r, Pr;
}
var _r, yt;
function Vt() {
  return yt || (yt = 1, _r = Function.call.bind(Object.prototype.hasOwnProperty)), _r;
}
var kr, xt;
function oa() {
  if (xt)
    return kr;
  xt = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Ur(), t = {}, n = Vt();
    r = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, c, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in o)
        if (n(o, u)) {
          var d;
          try {
            if (typeof o[u] != "function") {
              var m = Error(
                (l || "React class") + ": " + c + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            d = o[u](s, u, l, c, null, e);
          } catch (R) {
            d = R;
          }
          if (d && !(d instanceof Error) && r(
            (l || "React class") + ": type specification of " + c + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in t)) {
            t[d.message] = !0;
            var w = f ? f() : "";
            r(
              "Failed " + c + " type: " + d.message + (w ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, kr = a, kr;
}
var Ar, St;
function ia() {
  if (St)
    return Ar;
  St = 1;
  var r = qr(), e = hr(), t = Ur(), n = Vt(), a = oa(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Ar = function(c, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(h) {
      var x = h && (f && h[f] || h[u]);
      if (typeof x == "function")
        return x;
    }
    var m = "<<anonymous>>", w = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: z(),
      arrayOf: S,
      element: L(),
      elementType: g(),
      instanceOf: q,
      node: we(),
      objectOf: Z,
      oneOf: P,
      oneOfType: Se,
      shape: qe,
      exact: ze
    };
    function R(h, x) {
      return h === x ? h !== 0 || 1 / h === 1 / x : h !== h && x !== x;
    }
    function v(h, x) {
      this.message = h, this.data = x && typeof x == "object" ? x : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function C(h) {
      if (process.env.NODE_ENV !== "production")
        var x = {}, $ = 0;
      function A(F, _, k, j, D, I, ie) {
        if (j = j || m, I = I || k, ie !== t) {
          if (l) {
            var b = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw b.name = "Invariant Violation", b;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = j + ":" + k;
            !x[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            $ < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + I + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), x[pe] = !0, $++);
          }
        }
        return _[k] == null ? F ? _[k] === null ? new v("The " + D + " `" + I + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new v("The " + D + " `" + I + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : h(_, k, j, D, I);
      }
      var O = A.bind(null, !1);
      return O.isRequired = A.bind(null, !0), O;
    }
    function E(h) {
      function x($, A, O, F, _, k) {
        var j = $[A], D = de(j);
        if (D !== h) {
          var I = Re(j);
          return new v(
            "Invalid " + F + " `" + _ + "` of type " + ("`" + I + "` supplied to `" + O + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return C(x);
    }
    function z() {
      return C(s);
    }
    function S(h) {
      function x($, A, O, F, _) {
        if (typeof h != "function")
          return new v("Property `" + _ + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var k = $[A];
        if (!Array.isArray(k)) {
          var j = de(k);
          return new v("Invalid " + F + " `" + _ + "` of type " + ("`" + j + "` supplied to `" + O + "`, expected an array."));
        }
        for (var D = 0; D < k.length; D++) {
          var I = h(k, D, O, F, _ + "[" + D + "]", t);
          if (I instanceof Error)
            return I;
        }
        return null;
      }
      return C(x);
    }
    function L() {
      function h(x, $, A, O, F) {
        var _ = x[$];
        if (!c(_)) {
          var k = de(_);
          return new v("Invalid " + O + " `" + F + "` of type " + ("`" + k + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(h);
    }
    function g() {
      function h(x, $, A, O, F) {
        var _ = x[$];
        if (!r.isValidElementType(_)) {
          var k = de(_);
          return new v("Invalid " + O + " `" + F + "` of type " + ("`" + k + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(h);
    }
    function q(h) {
      function x($, A, O, F, _) {
        if (!($[A] instanceof h)) {
          var k = h.name || m, j = De($[A]);
          return new v("Invalid " + F + " `" + _ + "` of type " + ("`" + j + "` supplied to `" + O + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return C(x);
    }
    function P(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function x($, A, O, F, _) {
        for (var k = $[A], j = 0; j < h.length; j++)
          if (R(k, h[j]))
            return null;
        var D = JSON.stringify(h, function(ie, b) {
          var pe = Re(b);
          return pe === "symbol" ? String(b) : b;
        });
        return new v("Invalid " + F + " `" + _ + "` of value `" + String(k) + "` " + ("supplied to `" + O + "`, expected one of " + D + "."));
      }
      return C(x);
    }
    function Z(h) {
      function x($, A, O, F, _) {
        if (typeof h != "function")
          return new v("Property `" + _ + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var k = $[A], j = de(k);
        if (j !== "object")
          return new v("Invalid " + F + " `" + _ + "` of type " + ("`" + j + "` supplied to `" + O + "`, expected an object."));
        for (var D in k)
          if (n(k, D)) {
            var I = h(k, D, O, F, _ + "." + D, t);
            if (I instanceof Error)
              return I;
          }
        return null;
      }
      return C(x);
    }
    function Se(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var x = 0; x < h.length; x++) {
        var $ = h[x];
        if (typeof $ != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + je($) + " at index " + x + "."
          ), s;
      }
      function A(O, F, _, k, j) {
        for (var D = [], I = 0; I < h.length; I++) {
          var ie = h[I], b = ie(O, F, _, k, j, t);
          if (b == null)
            return null;
          b.data && n(b.data, "expectedType") && D.push(b.data.expectedType);
        }
        var pe = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new v("Invalid " + k + " `" + j + "` supplied to " + ("`" + _ + "`" + pe + "."));
      }
      return C(A);
    }
    function we() {
      function h(x, $, A, O, F) {
        return te(x[$]) ? null : new v("Invalid " + O + " `" + F + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return C(h);
    }
    function Fe(h, x, $, A, O) {
      return new v(
        (h || "React class") + ": " + x + " type `" + $ + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function qe(h) {
      function x($, A, O, F, _) {
        var k = $[A], j = de(k);
        if (j !== "object")
          return new v("Invalid " + F + " `" + _ + "` of type `" + j + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var D in h) {
          var I = h[D];
          if (typeof I != "function")
            return Fe(O, F, _, D, Re(I));
          var ie = I(k, D, O, F, _ + "." + D, t);
          if (ie)
            return ie;
        }
        return null;
      }
      return C(x);
    }
    function ze(h) {
      function x($, A, O, F, _) {
        var k = $[A], j = de(k);
        if (j !== "object")
          return new v("Invalid " + F + " `" + _ + "` of type `" + j + "` " + ("supplied to `" + O + "`, expected `object`."));
        var D = e({}, $[A], h);
        for (var I in D) {
          var ie = h[I];
          if (n(h, I) && typeof ie != "function")
            return Fe(O, F, _, I, Re(ie));
          if (!ie)
            return new v(
              "Invalid " + F + " `" + _ + "` key `" + I + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify($[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var b = ie(k, I, O, F, _ + "." + I, t);
          if (b)
            return b;
        }
        return null;
      }
      return C(x);
    }
    function te(h) {
      switch (typeof h) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !h;
        case "object":
          if (Array.isArray(h))
            return h.every(te);
          if (h === null || c(h))
            return !0;
          var x = d(h);
          if (x) {
            var $ = x.call(h), A;
            if (x !== h.entries) {
              for (; !(A = $.next()).done; )
                if (!te(A.value))
                  return !1;
            } else
              for (; !(A = $.next()).done; ) {
                var O = A.value;
                if (O && !te(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Pe(h, x) {
      return h === "symbol" ? !0 : x ? x["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && x instanceof Symbol : !1;
    }
    function de(h) {
      var x = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : Pe(x, h) ? "symbol" : x;
    }
    function Re(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var x = de(h);
      if (x === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return x;
    }
    function je(h) {
      var x = Re(h);
      switch (x) {
        case "array":
        case "object":
          return "an " + x;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + x;
        default:
          return x;
      }
    }
    function De(h) {
      return !h.constructor || !h.constructor.name ? m : h.constructor.name;
    }
    return w.checkPropTypes = a, w.resetWarningCache = a.resetWarningCache, w.PropTypes = w, w;
  }, Ar;
}
var $r, wt;
function sa() {
  if (wt)
    return $r;
  wt = 1;
  var r = Ur();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, $r = function() {
    function n(s, c, l, f, u, d) {
      if (d !== r) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: t,
      resetWarningCache: e
    };
    return o.PropTypes = o, o;
  }, $r;
}
if (process.env.NODE_ENV !== "production") {
  var ca = qr(), ua = !0;
  Fr.exports = ia()(ca.isElement, ua);
} else
  Fr.exports = sa()();
var la = Fr.exports;
const K = /* @__PURE__ */ Kr(la);
var fa = /[|\\{}()[\]^$+*?.]/g, da = function(r) {
  if (typeof r != "string")
    throw new TypeError("Expected a string");
  return r.replace(fa, "\\$&");
};
const Ht = /* @__PURE__ */ Kr(da);
function pa(r, e) {
  return new RegExp(`^${Ht(r || "")}$`, "i").test(e || "");
}
function Kt(r, e) {
  return new RegExp(Ht(r || ""), "i").test(e || "");
}
function qt(r = {}) {
  const e = r.partial ? "*" : "+";
  return new RegExp(
    `(?!^|\\(|\\s)*([-]+)?([\\w.$]+)${r.partial ? "?" : ""}:${r.partial ? "?" : ""}(?!:)([><=]*)(?:(")(.${e}?)(\\*)?"|([^\\s()*"]${e}))${r.partial ? "?" : ""}(\\*)?(?!\\s|\\)|$)*`,
    // find the end of the token
    "g"
  );
}
function zr(r, e = [], t = []) {
  const n = Array.isArray(r) ? r : qt({ partial: !0 }).exec(r);
  if (!n || !n.length)
    return {};
  const a = {
    fullToken: n[0],
    attributeName: n[2],
    attributeNameValid: !1,
    attributeValue: n[5] || n[7],
    attributeValueValid: !1,
    prepended: n[1] || "",
    operator: n[3],
    negated: n[0].indexOf("-") > -1,
    quoted: !!n[4],
    wildcard: !!(n[6] || n[8])
  };
  if (e) {
    const o = e.find((s) => {
      let c = !1;
      for (const l of t)
        if (pa(s[l], a.attributeName)) {
          c = !0;
          break;
        }
      return c;
    });
    o && (a.attributeNameValid = !0, a.attributeValueValid = !0, Array.isArray(o.enumerations) && (a.attributeValueValid = o.enumerations.findIndex((s) => Kt(a.attributeValue, s)) > -1));
  }
  return a;
}
function ha(r) {
  const { prepended: e = "", attributeName: t = "", attributeValue: n = "", operator: a = "" } = r || {};
  return `${e}${t}:${a}${n}`;
}
function ga(r, e, t) {
  const n = [], a = qt();
  let o;
  for (; (o = a.exec(r)) !== null; ) {
    if (e) {
      const s = zr(o, e, t);
      if (!s.attributeNameValid || !s.attributeValueValid)
        continue;
    }
    n.push([
      o.index,
      // start position
      a.lastIndex
      // end position
    ]);
  }
  return n;
}
function dr() {
  return dr = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        ({}).hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, dr.apply(null, arguments);
}
function Ut(r) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return e[t] === void 0 && (e[t] = r(t)), e[t];
  };
}
var va = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ma = /* @__PURE__ */ Ut(
  function(r) {
    return va.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ba = !1;
function ya(r) {
  if (r.sheet)
    return r.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === r)
      return document.styleSheets[e];
}
function xa(r) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", r.key), r.nonce !== void 0 && e.setAttribute("nonce", r.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var Sa = /* @__PURE__ */ function() {
  function r(t) {
    var n = this;
    this._insertTag = function(a) {
      var o;
      n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, o), n.tags.push(a);
    }, this.isSpeedy = t.speedy === void 0 ? !ba : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var e = r.prototype;
  return e.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, e.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xa(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = ya(a);
      try {
        o.insertRule(n, o.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(n) {
      var a;
      return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, r;
}(), se = "-ms-", pr = "-moz-", Y = "-webkit-", Gt = "comm", Gr = "rule", Xr = "decl", wa = "@import", Xt = "@keyframes", Ra = "@layer", Ca = Math.abs, gr = String.fromCharCode, Ea = Object.assign;
function Ta(r, e) {
  return ne(r, 0) ^ 45 ? (((e << 2 ^ ne(r, 0)) << 2 ^ ne(r, 1)) << 2 ^ ne(r, 2)) << 2 ^ ne(r, 3) : 0;
}
function Jt(r) {
  return r.trim();
}
function Oa(r, e) {
  return (r = e.exec(r)) ? r[0] : r;
}
function N(r, e, t) {
  return r.replace(e, t);
}
function Dr(r, e) {
  return r.indexOf(e);
}
function ne(r, e) {
  return r.charCodeAt(e) | 0;
}
function Ze(r, e, t) {
  return r.slice(e, t);
}
function Ee(r) {
  return r.length;
}
function Jr(r) {
  return r.length;
}
function sr(r, e) {
  return e.push(r), r;
}
function Pa(r, e) {
  return r.map(e).join("");
}
var vr = 1, He = 1, Zt = 0, fe = 0, ee = 0, Ke = "";
function mr(r, e, t, n, a, o, s) {
  return { value: r, root: e, parent: t, type: n, props: a, children: o, line: vr, column: He, length: s, return: "" };
}
function Xe(r, e) {
  return Ea(mr("", null, null, "", null, null, 0), r, { length: -r.length }, e);
}
function _a() {
  return ee;
}
function ka() {
  return ee = fe > 0 ? ne(Ke, --fe) : 0, He--, ee === 10 && (He = 1, vr--), ee;
}
function he() {
  return ee = fe < Zt ? ne(Ke, fe++) : 0, He++, ee === 10 && (He = 1, vr++), ee;
}
function Oe() {
  return ne(Ke, fe);
}
function ur() {
  return fe;
}
function tr(r, e) {
  return Ze(Ke, r, e);
}
function Qe(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Qt(r) {
  return vr = He = 1, Zt = Ee(Ke = r), fe = 0, [];
}
function en(r) {
  return Ke = "", r;
}
function lr(r) {
  return Jt(tr(fe - 1, Mr(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function Aa(r) {
  for (; (ee = Oe()) && ee < 33; )
    he();
  return Qe(r) > 2 || Qe(ee) > 3 ? "" : " ";
}
function $a(r, e) {
  for (; --e && he() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return tr(r, ur() + (e < 6 && Oe() == 32 && he() == 32));
}
function Mr(r) {
  for (; he(); )
    switch (ee) {
      case r:
        return fe;
      case 34:
      case 39:
        r !== 34 && r !== 39 && Mr(ee);
        break;
      case 40:
        r === 41 && Mr(r);
        break;
      case 92:
        he();
        break;
    }
  return fe;
}
function ja(r, e) {
  for (; he() && r + ee !== 47 + 10; )
    if (r + ee === 42 + 42 && Oe() === 47)
      break;
  return "/*" + tr(e, fe - 1) + "*" + gr(r === 47 ? r : he());
}
function Ia(r) {
  for (; !Qe(Oe()); )
    he();
  return tr(r, fe);
}
function La(r) {
  return en(fr("", null, null, null, [""], r = Qt(r), 0, [0], r));
}
function fr(r, e, t, n, a, o, s, c, l) {
  for (var f = 0, u = 0, d = s, m = 0, w = 0, R = 0, v = 1, C = 1, E = 1, z = 0, S = "", L = a, g = o, q = n, P = S; C; )
    switch (R = z, z = he()) {
      case 40:
        if (R != 108 && ne(P, d - 1) == 58) {
          Dr(P += N(lr(z), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += lr(z);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += Aa(R);
        break;
      case 92:
        P += $a(ur() - 1, 7);
        continue;
      case 47:
        switch (Oe()) {
          case 42:
          case 47:
            sr(Wa(ja(he(), ur()), e, t), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * v:
        c[f++] = Ee(P) * E;
      case 125 * v:
      case 59:
      case 0:
        switch (z) {
          case 0:
          case 125:
            C = 0;
          case 59 + u:
            E == -1 && (P = N(P, /\f/g, "")), w > 0 && Ee(P) - d && sr(w > 32 ? Ct(P + ";", n, t, d - 1) : Ct(N(P, " ", "") + ";", n, t, d - 2), l);
            break;
          case 59:
            P += ";";
          default:
            if (sr(q = Rt(P, e, t, f, u, a, c, S, L = [], g = [], d), o), z === 123)
              if (u === 0)
                fr(P, e, q, q, L, o, d, c, g);
              else
                switch (m === 99 && ne(P, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fr(r, q, q, n && sr(Rt(r, q, q, 0, 0, a, c, S, a, L = [], d), g), a, g, d, c, n ? L : g);
                    break;
                  default:
                    fr(P, q, q, q, [""], g, 0, c, g);
                }
        }
        f = u = w = 0, v = E = 1, S = P = "", d = s;
        break;
      case 58:
        d = 1 + Ee(P), w = R;
      default:
        if (v < 1) {
          if (z == 123)
            --v;
          else if (z == 125 && v++ == 0 && ka() == 125)
            continue;
        }
        switch (P += gr(z), z * v) {
          case 38:
            E = u > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            c[f++] = (Ee(P) - 1) * E, E = 1;
            break;
          case 64:
            Oe() === 45 && (P += lr(he())), m = Oe(), u = d = Ee(S = P += Ia(ur())), z++;
            break;
          case 45:
            R === 45 && Ee(P) == 2 && (v = 0);
        }
    }
  return o;
}
function Rt(r, e, t, n, a, o, s, c, l, f, u) {
  for (var d = a - 1, m = a === 0 ? o : [""], w = Jr(m), R = 0, v = 0, C = 0; R < n; ++R)
    for (var E = 0, z = Ze(r, d + 1, d = Ca(v = s[R])), S = r; E < w; ++E)
      (S = Jt(v > 0 ? m[E] + " " + z : N(z, /&\f/g, m[E]))) && (l[C++] = S);
  return mr(r, e, t, a === 0 ? Gr : c, l, f, u);
}
function Wa(r, e, t) {
  return mr(r, e, t, Gt, gr(_a()), Ze(r, 2, -2), 0);
}
function Ct(r, e, t, n) {
  return mr(r, e, t, Xr, Ze(r, 0, n), Ze(r, n + 1, -1), n);
}
function Ve(r, e) {
  for (var t = "", n = Jr(r), a = 0; a < n; a++)
    t += e(r[a], a, r, e) || "";
  return t;
}
function Fa(r, e, t, n) {
  switch (r.type) {
    case Ra:
      if (r.children.length)
        break;
    case wa:
    case Xr:
      return r.return = r.return || r.value;
    case Gt:
      return "";
    case Xt:
      return r.return = r.value + "{" + Ve(r.children, n) + "}";
    case Gr:
      r.value = r.props.join(",");
  }
  return Ee(t = Ve(r.children, n)) ? r.return = r.value + "{" + t + "}" : "";
}
function za(r) {
  var e = Jr(r);
  return function(t, n, a, o) {
    for (var s = "", c = 0; c < e; c++)
      s += r[c](t, n, a, o) || "";
    return s;
  };
}
function Da(r) {
  return function(e) {
    e.root || (e = e.return) && r(e);
  };
}
var Ma = function(e, t, n) {
  for (var a = 0, o = 0; a = o, o = Oe(), a === 38 && o === 12 && (t[n] = 1), !Qe(o); )
    he();
  return tr(e, fe);
}, Ba = function(e, t) {
  var n = -1, a = 44;
  do
    switch (Qe(a)) {
      case 0:
        a === 38 && Oe() === 12 && (t[n] = 1), e[n] += Ma(fe - 1, t, n);
        break;
      case 2:
        e[n] += lr(a);
        break;
      case 4:
        if (a === 44) {
          e[++n] = Oe() === 58 ? "&\f" : "", t[n] = e[n].length;
          break;
        }
      default:
        e[n] += gr(a);
    }
  while (a = he());
  return e;
}, Ya = function(e, t) {
  return en(Ba(Qt(e), t));
}, Et = /* @__PURE__ */ new WeakMap(), Na = function(e) {
  if (!(e.type !== "rule" || !e.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  e.length < 1)) {
    for (var t = e.value, n = e.parent, a = e.column === n.column && e.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Et.get(n)) && !a) {
      Et.set(e, !0);
      for (var o = [], s = Ya(t, o), c = n.props, l = 0, f = 0; l < s.length; l++)
        for (var u = 0; u < c.length; u++, f++)
          e.props[f] = o[l] ? s[l].replace(/&\f/g, c[u]) : c[u] + " " + s[l];
    }
  }
}, Va = function(e) {
  if (e.type === "decl") {
    var t = e.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
};
function rn(r, e) {
  switch (Ta(r, e)) {
    case 5103:
      return Y + "print-" + r + r;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Y + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Y + r + pr + r + se + r + r;
    case 6828:
    case 4268:
      return Y + r + se + r + r;
    case 6165:
      return Y + r + se + "flex-" + r + r;
    case 5187:
      return Y + r + N(r, /(\w+).+(:[^]+)/, Y + "box-$1$2" + se + "flex-$1$2") + r;
    case 5443:
      return Y + r + se + "flex-item-" + N(r, /flex-|-self/, "") + r;
    case 4675:
      return Y + r + se + "flex-line-pack" + N(r, /align-content|flex-|-self/, "") + r;
    case 5548:
      return Y + r + se + N(r, "shrink", "negative") + r;
    case 5292:
      return Y + r + se + N(r, "basis", "preferred-size") + r;
    case 6060:
      return Y + "box-" + N(r, "-grow", "") + Y + r + se + N(r, "grow", "positive") + r;
    case 4554:
      return Y + N(r, /([^-])(transform)/g, "$1" + Y + "$2") + r;
    case 6187:
      return N(N(N(r, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), r, "") + r;
    case 5495:
    case 3959:
      return N(r, /(image-set\([^]*)/, Y + "$1$`$1");
    case 4968:
      return N(N(r, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + se + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Y + r + r;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return N(r, /(.+)-inline(.+)/, Y + "$1$2") + r;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ee(r) - 1 - e > 6)
        switch (ne(r, e + 1)) {
          case 109:
            if (ne(r, e + 4) !== 45)
              break;
          case 102:
            return N(r, /(.+:)(.+)-([^]+)/, "$1" + Y + "$2-$3$1" + pr + (ne(r, e + 3) == 108 ? "$3" : "$2-$3")) + r;
          case 115:
            return ~Dr(r, "stretch") ? rn(N(r, "stretch", "fill-available"), e) + r : r;
        }
      break;
    case 4949:
      if (ne(r, e + 1) !== 115)
        break;
    case 6444:
      switch (ne(r, Ee(r) - 3 - (~Dr(r, "!important") && 10))) {
        case 107:
          return N(r, ":", ":" + Y) + r;
        case 101:
          return N(r, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Y + (ne(r, 14) === 45 ? "inline-" : "") + "box$3$1" + Y + "$2$3$1" + se + "$2box$3") + r;
      }
      break;
    case 5936:
      switch (ne(r, e + 11)) {
        case 114:
          return Y + r + se + N(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return Y + r + se + N(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return Y + r + se + N(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
      return Y + r + se + r + r;
  }
  return r;
}
var Ha = function(e, t, n, a) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Xr:
        e.return = rn(e.value, e.length);
        break;
      case Xt:
        return Ve([Xe(e, {
          value: N(e.value, "@", "@" + Y)
        })], a);
      case Gr:
        if (e.length)
          return Pa(e.props, function(o) {
            switch (Oa(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ve([Xe(e, {
                  props: [N(o, /:(read-\w+)/, ":" + pr + "$1")]
                })], a);
              case "::placeholder":
                return Ve([Xe(e, {
                  props: [N(o, /:(plac\w+)/, ":" + Y + "input-$1")]
                }), Xe(e, {
                  props: [N(o, /:(plac\w+)/, ":" + pr + "$1")]
                }), Xe(e, {
                  props: [N(o, /:(plac\w+)/, se + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, Ka = [Ha], tn = function(e) {
  var t = e.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(v) {
      var C = v.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var a = e.stylisPlugins || Ka, o = {}, s, c = [];
  s = e.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(v) {
      for (var C = v.getAttribute("data-emotion").split(" "), E = 1; E < C.length; E++)
        o[C[E]] = !0;
      c.push(v);
    }
  );
  var l, f = [Na, Va];
  {
    var u, d = [Fa, Da(function(v) {
      u.insert(v);
    })], m = za(f.concat(a, d)), w = function(C) {
      return Ve(La(C), m);
    };
    l = function(C, E, z, S) {
      u = z, w(C ? C + "{" + E.styles + "}" : E.styles), S && (R.inserted[E.name] = !0);
    };
  }
  var R = {
    key: t,
    sheet: new Sa({
      key: t,
      container: s,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: o,
    registered: {},
    insert: l
  };
  return R.sheet.hydrate(c), R;
}, nn = qr(), qa = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ua = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, an = {};
an[nn.ForwardRef] = qa;
an[nn.Memo] = Ua;
var Ga = !0;
function Zr(r, e, t) {
  var n = "";
  return t.split(" ").forEach(function(a) {
    r[a] !== void 0 ? e.push(r[a] + ";") : a && (n += a + " ");
  }), n;
}
var on = function(e, t, n) {
  var a = e.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ga === !1) && e.registered[a] === void 0 && (e.registered[a] = t.styles);
}, sn = function(e, t, n) {
  on(e, t, n);
  var a = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var o = t;
    do
      e.insert(t === o ? "." + a : "", o, e.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function Xa(r) {
  for (var e = 0, t, n = 0, a = r.length; a >= 4; ++n, a -= 4)
    t = r.charCodeAt(n) & 255 | (r.charCodeAt(++n) & 255) << 8 | (r.charCodeAt(++n) & 255) << 16 | (r.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, e = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      e ^= (r.charCodeAt(n + 2) & 255) << 16;
    case 2:
      e ^= (r.charCodeAt(n + 1) & 255) << 8;
    case 1:
      e ^= r.charCodeAt(n) & 255, e = /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = /* Math.imul(h, m): */
  (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var Ja = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Za = !1, Qa = /[A-Z]|^ms/g, eo = /_EMO_([^_]+?)_([^]*?)_EMO_/g, cn = function(e) {
  return e.charCodeAt(1) === 45;
}, Tt = function(e) {
  return e != null && typeof e != "boolean";
}, jr = /* @__PURE__ */ Ut(function(r) {
  return cn(r) ? r : r.replace(Qa, "-$&").toLowerCase();
}), Ot = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(eo, function(n, a, o) {
          return Te = {
            name: a,
            styles: o,
            next: Te
          }, a;
        });
  }
  return Ja[e] !== 1 && !cn(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, ro = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function er(r, e, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var a = t;
      if (a.anim === 1)
        return Te = {
          name: a.name,
          styles: a.styles,
          next: Te
        }, a.name;
      var o = t;
      if (o.styles !== void 0) {
        var s = o.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Te = {
              name: s.name,
              styles: s.styles,
              next: Te
            }, s = s.next;
        var c = o.styles + ";";
        return c;
      }
      return to(r, e, t);
    }
    case "function": {
      if (r !== void 0) {
        var l = Te, f = t(r);
        return Te = l, er(r, e, f);
      }
      break;
    }
  }
  var u = t;
  if (e == null)
    return u;
  var d = e[u];
  return d !== void 0 ? d : u;
}
function to(r, e, t) {
  var n = "";
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      n += er(r, e, t[a]) + ";";
  else
    for (var o in t) {
      var s = t[o];
      if (typeof s != "object") {
        var c = s;
        e != null && e[c] !== void 0 ? n += o + "{" + e[c] + "}" : Tt(c) && (n += jr(o) + ":" + Ot(o, c) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && Za)
          throw new Error(ro);
        if (Array.isArray(s) && typeof s[0] == "string" && (e == null || e[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            Tt(s[l]) && (n += jr(o) + ":" + Ot(o, s[l]) + ";");
        else {
          var f = er(r, e, s);
          switch (o) {
            case "animation":
            case "animationName": {
              n += jr(o) + ":" + f + ";";
              break;
            }
            default:
              n += o + "{" + f + "}";
          }
        }
      }
    }
  return n;
}
var Pt = /label:\s*([^\s;{]+)\s*(;|$)/g, Te;
function Je(r, e, t) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var n = !0, a = "";
  Te = void 0;
  var o = r[0];
  if (o == null || o.raw === void 0)
    n = !1, a += er(t, e, o);
  else {
    var s = o;
    a += s[0];
  }
  for (var c = 1; c < r.length; c++)
    if (a += er(t, e, r[c]), n) {
      var l = o;
      a += l[c];
    }
  Pt.lastIndex = 0;
  for (var f = "", u; (u = Pt.exec(a)) !== null; )
    f += "-" + u[1];
  var d = Xa(a) + f;
  return {
    name: d,
    styles: a,
    next: Te
  };
}
var no = function(e) {
  return e();
}, ao = ae["useInsertionEffect"] ? ae["useInsertionEffect"] : !1, oo = ao || no, un = /* @__PURE__ */ ae.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ tn({
    key: "css"
  }) : null
);
un.Provider;
var io = function(e) {
  return /* @__PURE__ */ Gn(function(t, n) {
    var a = Xn(un);
    return e(t, a, n);
  });
}, so = /* @__PURE__ */ ae.createContext({});
function co() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return Je(e);
}
var uo = function() {
  var e = co.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, lo = ma, fo = function(e) {
  return e !== "theme";
}, _t = function(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96 ? lo : fo;
}, kt = function(e, t, n) {
  var a;
  if (t) {
    var o = t.shouldForwardProp;
    a = e.__emotion_forwardProp && o ? function(s) {
      return e.__emotion_forwardProp(s) && o(s);
    } : o;
  }
  return typeof a != "function" && n && (a = e.__emotion_forwardProp), a;
}, po = !1, ho = function(e) {
  var t = e.cache, n = e.serialized, a = e.isStringTag;
  return on(t, n, a), oo(function() {
    return sn(t, n, a);
  }), null;
}, go = function r(e, t) {
  var n = e.__emotion_real === e, a = n && e.__emotion_base || e, o, s;
  t !== void 0 && (o = t.label, s = t.target);
  var c = kt(e, t, n), l = c || _t(a), f = !l("as");
  return function() {
    var u = arguments, d = n && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
    if (o !== void 0 && d.push("label:" + o + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      d.push(u[0][0]);
      for (var m = u.length, w = 1; w < m; w++)
        d.push(u[w], u[0][w]);
    }
    var R = io(function(v, C, E) {
      var z = f && v.as || a, S = "", L = [], g = v;
      if (v.theme == null) {
        g = {};
        for (var q in v)
          g[q] = v[q];
        g.theme = ae.useContext(so);
      }
      typeof v.className == "string" ? S = Zr(C.registered, L, v.className) : v.className != null && (S = v.className + " ");
      var P = Je(d.concat(L), C.registered, g);
      S += C.key + "-" + P.name, s !== void 0 && (S += " " + s);
      var Z = f && c === void 0 ? _t(z) : l, Se = {};
      for (var we in v)
        f && we === "as" || Z(we) && (Se[we] = v[we]);
      return Se.className = S, E && (Se.ref = E), /* @__PURE__ */ ae.createElement(ae.Fragment, null, /* @__PURE__ */ ae.createElement(ho, {
        cache: C,
        serialized: P,
        isStringTag: typeof z == "string"
      }), /* @__PURE__ */ ae.createElement(z, Se));
    });
    return R.displayName = o !== void 0 ? o : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", R.defaultProps = e.defaultProps, R.__emotion_real = R, R.__emotion_base = a, R.__emotion_styles = d, R.__emotion_forwardProp = c, Object.defineProperty(R, "toString", {
      value: function() {
        return s === void 0 && po ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), R.withComponent = function(v, C) {
      return r(v, dr({}, t, C, {
        shouldForwardProp: kt(R, C, !0)
      })).apply(void 0, d);
    }, R;
  };
}, vo = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], re = go.bind();
vo.forEach(function(r) {
  re[r] = re(r);
});
var mo = hr();
const ye = /* @__PURE__ */ Kr(mo);
var At = function(e, t) {
  var n = ye({}, e, t);
  for (var a in e) {
    var o;
    !e[a] || typeof t[a] != "object" || ye(n, (o = {}, o[a] = ye(e[a], t[a]), o));
  }
  return n;
}, bo = function(e) {
  var t = {};
  return Object.keys(e).sort(function(n, a) {
    return n.localeCompare(a, void 0, {
      numeric: !0,
      sensitivity: "base"
    });
  }).forEach(function(n) {
    t[n] = e[n];
  }), t;
}, yo = {
  breakpoints: [40, 52, 64].map(function(r) {
    return r + "em";
  })
}, ln = function(e) {
  return "@media screen and (min-width: " + e + ")";
}, xo = function(e, t) {
  return $e(t, e, e);
}, $e = function(e, t, n, a, o) {
  for (t = t && t.split ? t.split(".") : [t], a = 0; a < t.length; a++)
    e = e ? e[t[a]] : o;
  return e === o ? n : e;
}, br = function r(e) {
  var t = {}, n = function(s) {
    var c = {}, l = !1, f = s.theme && s.theme.disableStyledSystemCache;
    for (var u in s)
      if (e[u]) {
        var d = e[u], m = s[u], w = $e(s.theme, d.scale, d.defaults);
        if (typeof m == "object") {
          if (t.breakpoints = !f && t.breakpoints || $e(s.theme, "breakpoints", yo.breakpoints), Array.isArray(m)) {
            t.media = !f && t.media || [null].concat(t.breakpoints.map(ln)), c = At(c, So(t.media, d, w, m, s));
            continue;
          }
          m !== null && (c = At(c, wo(t.breakpoints, d, w, m, s)), l = !0);
          continue;
        }
        ye(c, d(m, w, s));
      }
    return l && (c = bo(c)), c;
  };
  n.config = e, n.propNames = Object.keys(e), n.cache = t;
  var a = Object.keys(e).filter(function(o) {
    return o !== "config";
  });
  return a.length > 1 && a.forEach(function(o) {
    var s;
    n[o] = r((s = {}, s[o] = e[o], s));
  }), n;
}, So = function(e, t, n, a, o) {
  var s = {};
  return a.slice(0, e.length).forEach(function(c, l) {
    var f = e[l], u = t(c, n, o);
    if (!f)
      ye(s, u);
    else {
      var d;
      ye(s, (d = {}, d[f] = ye({}, s[f], u), d));
    }
  }), s;
}, wo = function(e, t, n, a, o) {
  var s = {};
  for (var c in a) {
    var l = e[c], f = a[c], u = t(f, n, o);
    if (!l)
      ye(s, u);
    else {
      var d, m = ln(l);
      ye(s, (d = {}, d[m] = ye({}, s[m], u), d));
    }
  }
  return s;
}, Br = function(e) {
  var t = e.properties, n = e.property, a = e.scale, o = e.transform, s = o === void 0 ? xo : o, c = e.defaultScale;
  t = t || [n];
  var l = function(u, d, m) {
    var w = {}, R = s(u, d, m);
    if (R !== null)
      return t.forEach(function(v) {
        w[v] = R;
      }), w;
  };
  return l.scale = a, l.defaults = c, l;
}, xe = function(e) {
  e === void 0 && (e = {});
  var t = {};
  Object.keys(e).forEach(function(a) {
    var o = e[a];
    if (o === !0) {
      t[a] = Br({
        property: a,
        scale: a
      });
      return;
    }
    if (typeof o == "function") {
      t[a] = o;
      return;
    }
    t[a] = Br(o);
  });
  var n = br(t);
  return n;
}, Ro = function() {
  for (var e = {}, t = arguments.length, n = new Array(t), a = 0; a < t; a++)
    n[a] = arguments[a];
  n.forEach(function(s) {
    !s || !s.config || ye(e, s.config);
  });
  var o = br(e);
  return o;
}, Co = function(e) {
  return typeof e == "number" && !isNaN(e);
}, Eo = function(e, t) {
  return $e(t, e, !Co(e) || e > 1 ? e : e * 100 + "%");
}, To = {
  width: {
    property: "width",
    scale: "sizes",
    transform: Eo
  },
  height: {
    property: "height",
    scale: "sizes"
  },
  minWidth: {
    property: "minWidth",
    scale: "sizes"
  },
  minHeight: {
    property: "minHeight",
    scale: "sizes"
  },
  maxWidth: {
    property: "maxWidth",
    scale: "sizes"
  },
  maxHeight: {
    property: "maxHeight",
    scale: "sizes"
  },
  size: {
    properties: ["width", "height"],
    scale: "sizes"
  },
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  display: !0,
  verticalAlign: !0
}, ve = xe(To), Yr = {
  color: {
    property: "color",
    scale: "colors"
  },
  backgroundColor: {
    property: "backgroundColor",
    scale: "colors"
  },
  opacity: !0
};
Yr.bg = Yr.backgroundColor;
var nr = xe(Yr), Oo = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, Po = {
  fontFamily: {
    property: "fontFamily",
    scale: "fonts"
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
    defaultScale: Oo.fontSizes
  },
  fontWeight: {
    property: "fontWeight",
    scale: "fontWeights"
  },
  lineHeight: {
    property: "lineHeight",
    scale: "lineHeights"
  },
  letterSpacing: {
    property: "letterSpacing",
    scale: "letterSpacings"
  },
  textAlign: !0,
  fontStyle: !0
}, We = xe(Po), _o = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: !0,
  // item
  flex: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: !0,
  justifySelf: !0,
  alignSelf: !0,
  order: !0
}, ge = xe(_o), Ir = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, ko = {
  gridGap: {
    property: "gridGap",
    scale: "space",
    defaultScale: Ir.space
  },
  gridColumnGap: {
    property: "gridColumnGap",
    scale: "space",
    defaultScale: Ir.space
  },
  gridRowGap: {
    property: "gridRowGap",
    scale: "space",
    defaultScale: Ir.space
  },
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridAutoRows: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, me = xe(ko), oe = {
  border: {
    property: "border",
    scale: "borders"
  },
  borderWidth: {
    property: "borderWidth",
    scale: "borderWidths"
  },
  borderStyle: {
    property: "borderStyle",
    scale: "borderStyles"
  },
  borderColor: {
    property: "borderColor",
    scale: "colors"
  },
  borderRadius: {
    property: "borderRadius",
    scale: "radii"
  },
  borderTop: {
    property: "borderTop",
    scale: "borders"
  },
  borderTopLeftRadius: {
    property: "borderTopLeftRadius",
    scale: "radii"
  },
  borderTopRightRadius: {
    property: "borderTopRightRadius",
    scale: "radii"
  },
  borderRight: {
    property: "borderRight",
    scale: "borders"
  },
  borderBottom: {
    property: "borderBottom",
    scale: "borders"
  },
  borderBottomLeftRadius: {
    property: "borderBottomLeftRadius",
    scale: "radii"
  },
  borderBottomRightRadius: {
    property: "borderBottomRightRadius",
    scale: "radii"
  },
  borderLeft: {
    property: "borderLeft",
    scale: "borders"
  },
  borderX: {
    properties: ["borderLeft", "borderRight"],
    scale: "borders"
  },
  borderY: {
    properties: ["borderTop", "borderBottom"],
    scale: "borders"
  }
};
oe.borderTopWidth = {
  property: "borderTopWidth",
  scale: "borderWidths"
};
oe.borderTopColor = {
  property: "borderTopColor",
  scale: "colors"
};
oe.borderTopStyle = {
  property: "borderTopStyle",
  scale: "borderStyles"
};
oe.borderTopLeftRadius = {
  property: "borderTopLeftRadius",
  scale: "radii"
};
oe.borderTopRightRadius = {
  property: "borderTopRightRadius",
  scale: "radii"
};
oe.borderBottomWidth = {
  property: "borderBottomWidth",
  scale: "borderWidths"
};
oe.borderBottomColor = {
  property: "borderBottomColor",
  scale: "colors"
};
oe.borderBottomStyle = {
  property: "borderBottomStyle",
  scale: "borderStyles"
};
oe.borderBottomLeftRadius = {
  property: "borderBottomLeftRadius",
  scale: "radii"
};
oe.borderBottomRightRadius = {
  property: "borderBottomRightRadius",
  scale: "radii"
};
oe.borderLeftWidth = {
  property: "borderLeftWidth",
  scale: "borderWidths"
};
oe.borderLeftColor = {
  property: "borderLeftColor",
  scale: "colors"
};
oe.borderLeftStyle = {
  property: "borderLeftStyle",
  scale: "borderStyles"
};
oe.borderRightWidth = {
  property: "borderRightWidth",
  scale: "borderWidths"
};
oe.borderRightColor = {
  property: "borderRightColor",
  scale: "colors"
};
oe.borderRightStyle = {
  property: "borderRightStyle",
  scale: "borderStyles"
};
var be = xe(oe), Ae = {
  background: !0,
  backgroundImage: !0,
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0
};
Ae.bgImage = Ae.backgroundImage;
Ae.bgSize = Ae.backgroundSize;
Ae.bgPosition = Ae.backgroundPosition;
Ae.bgRepeat = Ae.backgroundRepeat;
var yr = xe(Ae), cr = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, Ao = {
  position: !0,
  zIndex: {
    property: "zIndex",
    scale: "zIndices"
  },
  top: {
    property: "top",
    scale: "space",
    defaultScale: cr.space
  },
  right: {
    property: "right",
    scale: "space",
    defaultScale: cr.space
  },
  bottom: {
    property: "bottom",
    scale: "space",
    defaultScale: cr.space
  },
  left: {
    property: "left",
    scale: "space",
    defaultScale: cr.space
  }
}, ar = xe(Ao), le = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, $t = function(e) {
  return typeof e == "number" && !isNaN(e);
}, Le = function(e, t) {
  if (!$t(e))
    return $e(t, e, e);
  var n = e < 0, a = Math.abs(e), o = $e(t, a, a);
  return $t(o) ? o * (n ? -1 : 1) : n ? "-" + o : o;
}, B = {};
B.margin = {
  margin: {
    property: "margin",
    scale: "space",
    transform: Le,
    defaultScale: le.space
  },
  marginTop: {
    property: "marginTop",
    scale: "space",
    transform: Le,
    defaultScale: le.space
  },
  marginRight: {
    property: "marginRight",
    scale: "space",
    transform: Le,
    defaultScale: le.space
  },
  marginBottom: {
    property: "marginBottom",
    scale: "space",
    transform: Le,
    defaultScale: le.space
  },
  marginLeft: {
    property: "marginLeft",
    scale: "space",
    transform: Le,
    defaultScale: le.space
  },
  marginX: {
    properties: ["marginLeft", "marginRight"],
    scale: "space",
    transform: Le,
    defaultScale: le.space
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
    transform: Le,
    defaultScale: le.space
  }
};
B.margin.m = B.margin.margin;
B.margin.mt = B.margin.marginTop;
B.margin.mr = B.margin.marginRight;
B.margin.mb = B.margin.marginBottom;
B.margin.ml = B.margin.marginLeft;
B.margin.mx = B.margin.marginX;
B.margin.my = B.margin.marginY;
B.padding = {
  padding: {
    property: "padding",
    scale: "space",
    defaultScale: le.space
  },
  paddingTop: {
    property: "paddingTop",
    scale: "space",
    defaultScale: le.space
  },
  paddingRight: {
    property: "paddingRight",
    scale: "space",
    defaultScale: le.space
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "space",
    defaultScale: le.space
  },
  paddingLeft: {
    property: "paddingLeft",
    scale: "space",
    defaultScale: le.space
  },
  paddingX: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "space",
    defaultScale: le.space
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
    defaultScale: le.space
  }
};
B.padding.p = B.padding.padding;
B.padding.pt = B.padding.paddingTop;
B.padding.pr = B.padding.paddingRight;
B.padding.pb = B.padding.paddingBottom;
B.padding.pl = B.padding.paddingLeft;
B.padding.px = B.padding.paddingX;
B.padding.py = B.padding.paddingY;
var $o = xe(B.margin), jo = xe(B.padding), xr = Ro($o, jo), fn = xe({
  boxShadow: {
    property: "boxShadow",
    scale: "shadows"
  },
  textShadow: {
    property: "textShadow",
    scale: "shadows"
  }
});
function rr() {
  return rr = Object.assign || function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, rr.apply(this, arguments);
}
var Ce = function(e, t, n, a, o) {
  for (t = t && t.split ? t.split(".") : [t], a = 0; a < t.length; a++)
    e = e ? e[t[a]] : o;
  return e === o ? n : e;
}, Io = [40, 52, 64].map(function(r) {
  return r + "em";
}), Lo = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, Wo = {
  bg: "backgroundColor",
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  mx: "marginX",
  my: "marginY",
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  px: "paddingX",
  py: "paddingY"
}, jt = {
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"]
}, Fo = {
  color: "colors",
  backgroundColor: "colors",
  borderColor: "colors",
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginX: "space",
  marginY: "space",
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingX: "space",
  paddingY: "space",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  gridGap: "space",
  gridColumnGap: "space",
  gridRowGap: "space",
  gap: "space",
  columnGap: "space",
  rowGap: "space",
  fontFamily: "fonts",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  letterSpacing: "letterSpacings",
  border: "borders",
  borderTop: "borders",
  borderRight: "borders",
  borderBottom: "borders",
  borderLeft: "borders",
  borderWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderRadius: "radii",
  borderTopRightRadius: "radii",
  borderTopLeftRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  borderTopWidth: "borderWidths",
  borderTopColor: "colors",
  borderTopStyle: "borderStyles",
  borderBottomWidth: "borderWidths",
  borderBottomColor: "colors",
  borderBottomStyle: "borderStyles",
  borderLeftWidth: "borderWidths",
  borderLeftColor: "colors",
  borderLeftStyle: "borderStyles",
  borderRightWidth: "borderWidths",
  borderRightColor: "colors",
  borderRightStyle: "borderStyles",
  outlineColor: "colors",
  boxShadow: "shadows",
  textShadow: "shadows",
  zIndex: "zIndices",
  width: "sizes",
  minWidth: "sizes",
  maxWidth: "sizes",
  height: "sizes",
  minHeight: "sizes",
  maxHeight: "sizes",
  flexBasis: "sizes",
  size: "sizes",
  // svg
  fill: "colors",
  stroke: "colors"
}, zo = function(e, t) {
  if (typeof t != "number" || t >= 0)
    return Ce(e, t, t);
  var n = Math.abs(t), a = Ce(e, n, n);
  return typeof a == "string" ? "-" + a : a * -1;
}, Do = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function(r, e) {
  var t;
  return rr({}, r, (t = {}, t[e] = zo, t));
}, {}), Mo = function(e) {
  return function(t) {
    var n = {}, a = Ce(t, "breakpoints", Io), o = [null].concat(a.map(function(u) {
      return "@media screen and (min-width: " + u + ")";
    }));
    for (var s in e) {
      var c = typeof e[s] == "function" ? e[s](t) : e[s];
      if (c != null) {
        if (!Array.isArray(c)) {
          n[s] = c;
          continue;
        }
        for (var l = 0; l < c.slice(0, o.length).length; l++) {
          var f = o[l];
          if (!f) {
            n[s] = c[l];
            continue;
          }
          n[f] = n[f] || {}, c[l] != null && (n[f][s] = c[l]);
        }
      }
    }
    return n;
  };
}, Bo = function r(e) {
  return function(t) {
    t === void 0 && (t = {});
    var n = rr({}, Lo, {}, t.theme || t), a = {}, o = typeof e == "function" ? e(n) : e, s = Mo(o)(n);
    for (var c in s) {
      var l = s[c], f = typeof l == "function" ? l(n) : l;
      if (c === "variant") {
        var u = r(Ce(n, f))(n);
        a = rr({}, a, {}, u);
        continue;
      }
      if (f && typeof f == "object") {
        a[c] = r(f)(n);
        continue;
      }
      var d = Ce(Wo, c, c), m = Ce(Fo, d), w = Ce(n, m, Ce(n, d, {})), R = Ce(Do, d, Ce), v = R(w, f, f);
      if (jt[d])
        for (var C = jt[d], E = 0; E < C.length; E++)
          a[C[E]] = v;
      else
        a[d] = v;
    }
    return a;
  };
};
const Yo = Bo;
var Qr = function(e) {
  var t, n = e.scale, a = e.prop, o = a === void 0 ? "variant" : a, s = e.variants, c = s === void 0 ? {} : s, l = e.key, f;
  Object.keys(c).length ? f = function(w, R, v) {
    return Yo($e(R, w, null))(v.theme);
  } : f = function(w, R) {
    return $e(R, w, null);
  }, f.scale = n || l, f.defaults = c;
  var u = (t = {}, t[o] = f, t), d = br(u);
  return d;
};
Qr({
  key: "buttons"
});
Qr({
  key: "textStyles",
  prop: "textStyle"
});
Qr({
  key: "colorStyles",
  prop: "colors"
});
var dn = ve.width;
ve.height;
var No = ve.minWidth;
ve.minHeight;
var Vo = ve.maxWidth, Ho = ve.maxHeight;
ve.size;
ve.verticalAlign;
ve.display;
ve.overflow;
ve.overflowX;
ve.overflowY;
nr.opacity;
var pn = We.fontSize, hn = We.fontFamily, gn = We.fontWeight, vn = We.lineHeight, Ko = We.textAlign;
We.fontStyle;
var mn = We.letterSpacing;
ge.alignItems;
ge.alignContent;
ge.justifyItems;
ge.justifyContent;
ge.flexWrap;
ge.flexDirection;
ge.flex;
ge.flexGrow;
ge.flexShrink;
ge.flexBasis;
ge.justifySelf;
ge.alignSelf;
ge.order;
me.gridGap;
me.gridColumnGap;
me.gridRowGap;
me.gridColumn;
me.gridRow;
me.gridAutoFlow;
me.gridAutoColumns;
me.gridAutoRows;
me.gridTemplateColumns;
me.gridTemplateRows;
me.gridTemplateAreas;
me.gridArea;
be.borderWidth;
be.borderStyle;
var et = be.borderColor;
be.borderTop;
be.borderRight;
be.borderBottom;
be.borderLeft;
var bn = be.borderRadius;
yr.backgroundImage;
yr.backgroundSize;
yr.backgroundPosition;
yr.backgroundRepeat;
ar.zIndex;
var qo = ar.top;
ar.right;
ar.bottom;
var Uo = ar.left, yn = function(e) {
  var t = e.prop, n = e.cssProperty, a = e.alias, o = e.key, s = e.transformValue, c = e.scale, l = e.properties, f = {};
  f[t] = Br({
    properties: l,
    property: n || t,
    scale: o,
    defaultScale: c,
    transform: s
  }), a && (f[a] = f[t]);
  var u = br(f);
  return u;
};
const Go = uo`
  0% {
    opacity: 0;
    transform: perspective(50em) rotateX(-30deg);
  }
  100% {
    opacity: 1;
    transform: perspective(50em) rotateX(0deg);
  }
`, xn = re("aside")`
    display: inline-block;
    position: absolute;
    z-index: 10;
    transform-origin: 50% 0;
    animation: ${Go} ease-in-out 250ms;
    transition: top 100ms, left 100ms;

    ${qo}
    ${Uo}
  ${nr}
  ${fn}
  ${be}
  ${et}
  ${bn}
  ${xr}
  ${dn}
  ${No}
  ${pn}
  ${gn}
  ${hn}
  ${vn}
  ${mn}
`;
xn.defaultProps = {
  bg: "#555555",
  boxShadow: "0 4px 10px rgba(0, 0, 0, .25)",
  color: "#FFFFFF",
  minWidth: "280px"
};
const Sn = re("section")`
    padding: 15px;
    text-align: ${(r) => r.center ? "center" : "inherit"};
    :not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    }
`, wn = re("ul")`
    list-style-type: none;
    line-height: 20px;
    margin: 10px 0;
    overflow: auto;
    padding-inline-start: 0;

    ${xr}
    ${nr}
  ${be}
  ${Ho}
`;
wn.defaultProps = {
  maxHeight: "200px"
};
const Rn = re("li")`
    cursor: pointer;
    border: 1px solid transparent;
    overflow: hidden;
    text-overflow: ellipsis;

    ${xr}
    ${Vo}

  ${(r) => r.active && nr}
  ${(r) => r.active && be}
  ${(r) => r.active && et}
`;
Rn.defaultProps = {
  bg: "#FFFFFF",
  color: "#000000",
  p: "3px 15px",
  maxWidth: "320px"
};
const Xo = re(Sn)`
    padding: 15px 0;
`, Cn = re("div")`
    display: inline-block;
    background: ${(r) => r.active ? "rgba(255, 255, 255, 0.2)" : "none"};
    font-weight: 500;
    line-height: 18px;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`, Jo = re(Cn)`
    display: block;
    margin-bottom: 5px;
`, Nr = re("div")`
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    min-width: 20px;
    text-align: center;
    vertical-align: middle;
    padding: 2px 5px;
    margin-right: 5px;
`, Lr = re(Nr)`
    background: none;
    border: 1px solid ${(r) => r.theme.color};
    color: ${(r) => r.theme.color};
    font-size: 8px;
    padding: 0;
    width: ${(r) => r.long ? "36px" : "18px"};
    height: 18px;
`, It = re("div")`
    display: inline-block;
    opacity: 0.5;
    &:not(:last-child) {
        margin-right: 15px;
    }
`;
class Vr extends Jn {
  constructor(e) {
    super(e), this.onKeyDown = this.onKeyDown.bind(this), this.handleEnterKey = this.handleEnterKey.bind(this), this.handleEscKey = this.handleEscKey.bind(this), this.handleArrowKeys = this.handleArrowKeys.bind(this), this.adjustListScroll = this.adjustListScroll.bind(this), this.getAttribute = this.getAttribute.bind(this), this.getSuggestions = this.getSuggestions.bind(this), this.getSuggestionAddons = this.getSuggestionAddons.bind(this), this.filterSuggestions = this.filterSuggestions.bind(this), this.acceptSuggestion = this.acceptSuggestion.bind(this), this.getOperators = this.getOperators.bind(this), this.setOperator = this.setOperator.bind(this), this.state = {
      suggestions: [],
      highlightedIdx: 0,
      selectedIdx: null,
      prepended: "",
      operator: "",
      negated: !1
    };
  }
  componentDidMount() {
    this.filterSuggestions(this.props.value), this.props.keyboardHelpers && document.addEventListener("keydown", this.onKeyDown, !1);
  }
  componentWillUnmount() {
    this.props.keyboardHelpers && document.removeEventListener("keydown", this.onKeyDown, !1);
  }
  componentWillReceiveProps(e) {
    this.props.value !== e.value && this.filterSuggestions(e.value);
  }
  componentDidUpdate() {
    this.state.suggestions.length === 0 && this.props.onClose();
  }
  onKeyDown(e) {
    switch (e.keyCode) {
      case 9:
      case 13:
        this.handleEnterKey(e);
        break;
      case 27:
        this.handleEscKey(e);
        break;
      case 38:
      case 40:
        this.handleArrowKeys(e, e.keyCode);
        break;
    }
  }
  handleEnterKey(e) {
    e.preventDefault(), this.acceptSuggestion();
  }
  handleEscKey(e) {
    e.preventDefault(), this.props.onClose(!0);
  }
  handleArrowKeys(e, t) {
    e.preventDefault();
    const { highlightedIdx: n } = this.state, a = t === 40, o = this.state.suggestions.length - 1, s = n !== null ? a ? n + 1 : n - 1 : a ? 0 : o;
    this.setState(
      {
        // make sure it doesn't go out of bounds by resetting to opposite side
        highlightedIdx: a ? s <= o ? s : 0 : s >= 0 ? s : o
      },
      this.adjustListScroll
    );
  }
  adjustListScroll() {
    const { offsetTop: e, clientHeight: t } = this._selected, { scrollTop: n, clientHeight: a } = this._list, o = t, s = a - t, c = e - n;
    c > s ? this._list.scrollTop += t + (c - s) : c < o && (this._list.scrollTop = e - t + (c - o));
  }
  getAttribute(e) {
    if (e !== null && e > -1)
      return this.props.attributes[e];
  }
  getSuggestions(e) {
    const { nameKey: t, attributes: n, translationKey: a } = this.props;
    return e ? e.enumerations || [] : n.map((o) => o[a] || o[t]);
  }
  getSuggestionAddons(e, t) {
    const n = [];
    return e && (!t.wildcard && !e.enumerations && t.attributeValue && e.type === "string" && n.push(`"${t.attributeValue}"`), t.attributeValue && e.type === "string" && (t.quoted && !e.enumerations ? n.push(`"${t.attributeValue}*"`) : n.push(`*${t.attributeValue}*`, `${t.attributeValue}*`, `*${t.attributeValue}`))), n;
  }
  filterSuggestions(e) {
    const { nameKey: t, translationKey: n, attributes: a } = this.props;
    let o = zr(e);
    const c = o.attributeName && e.indexOf(":") > -1 ? a.findIndex((m) => m[t] === o.attributeName || m[n] === o.attributeName) : -1, l = this.getAttribute(c), f = this.getSuggestions(l), u = c > -1 ? o.attributeValue : o.attributeName, d = f.filter((m) => Kt(u, m)).concat(this.getSuggestionAddons(l, o));
    this.setState({
      selectedIdx: c,
      prepended: o.prepended,
      operator: o.operator,
      negated: o.negated,
      suggestions: d,
      highlightedIdx: 0
    });
  }
  acceptSuggestion() {
    const { nameKey: e, onSelect: t } = this.props, { suggestions: n, highlightedIdx: a, selectedIdx: o, prepended: s, operator: c } = this.state, l = this.getAttribute(o), f = n[a], u = l ? `${l[e]}:${c}${f}` : f, d = o === -1 ? ":" : "";
    t(`${s}${u}`, d);
  }
  getOperators() {
    const e = [], t = this.getAttribute(this.state.selectedIdx);
    if (t)
      switch (t.type) {
        case "int":
        case "float":
          e.push({
            name: "GT",
            char: ">",
            active: this.state.operator === ">"
          }), e.push({
            name: "LT",
            char: "<",
            active: this.state.operator === "<"
          }), e.push({
            name: "GTE",
            char: ">=",
            active: this.state.operator === ">="
          }), e.push({
            name: "LTE",
            char: "<=",
            active: this.state.operator === "<="
          });
          break;
      }
    return e;
  }
  setOperator(e) {
    const { value: t } = this.props, { negated: n, operator: a } = this.state;
    if (e === "-") {
      const o = t.replace(/^-?(.*)/, `${n ? "" : "-"}$1`);
      this.props.onSelect(o);
    } else {
      const o = zr(t);
      o.operator = a === e ? "" : e, this.props.onSelect(ha(o));
    }
  }
  render() {
    const e = this.props.footerComponent;
    return /* @__PURE__ */ X.jsxs(xn, { left: this.props.offsetX || 0, top: this.props.offsetY || 0, ...this.props.dropdownProps, "data-testid": "dropdown", children: [
      /* @__PURE__ */ X.jsx(wn, { ...this.props.listProps, ref: (t) => this._list = t, children: this.state.suggestions.map((t, n) => {
        const a = this.state.highlightedIdx === n;
        return /* @__PURE__ */ X.jsx(
          Rn,
          {
            active: a,
            onClick: this.acceptSuggestion,
            onMouseOver: () => this.setState({ highlightedIdx: n }),
            ref: a ? (o) => this._selected = o : void 0,
            ...this.props.selectorProps,
            children: t
          },
          n
        );
      }) }),
      /* @__PURE__ */ X.jsxs(Xo, { children: [
        /* @__PURE__ */ X.jsxs(Jo, { active: this.state.negated, onClick: () => this.setOperator("-"), children: [
          /* @__PURE__ */ X.jsx(Nr, { children: "-" }),
          this.props.translations && this.props.translations.negate ? this.props.translations.negate : "NEGATE"
        ] }),
        this.getOperators().map((t, n) => /* @__PURE__ */ X.jsxs(Cn, { active: t.active, onClick: () => this.setOperator(t.char), children: [
          /* @__PURE__ */ X.jsx(Nr, { children: t.char }),
          t.name
        ] }, n))
      ] }),
      this.props.keyboardHelpers && /* @__PURE__ */ X.jsxs(Sn, { center: !0, children: [
        /* @__PURE__ */ X.jsxs(It, { children: [
          /* @__PURE__ */ X.jsx(Lr, { children: "▲" }),
          /* @__PURE__ */ X.jsx(Lr, { children: "▼" }),
          this.props.translations && this.props.translations.navigate ? this.props.translations.navigate : "to navigate"
        ] }),
        /* @__PURE__ */ X.jsxs(It, { children: [
          /* @__PURE__ */ X.jsx(Lr, { long: !0, children: "↵" }),
          this.props.translations && this.props.translations.select ? this.props.translations.select : "to select"
        ] })
      ] }),
      /* @__PURE__ */ X.jsx(e, {})
    ] });
  }
}
Ge(Vr, "propTypes", {
  // eslint-disable-line
  value: K.string,
  nameKey: K.string,
  attributes: K.array,
  onSelect: K.func,
  onClose: K.func,
  offsetX: K.number,
  offsetY: K.number,
  keyboardHelpers: K.bool,
  footerComponent: K.func,
  dropdownProps: K.object,
  selectorProps: K.object,
  listProps: K.object,
  translations: K.object
}), Ge(Vr, "defaultProps", {
  // eslint-disable-line
  value: "",
  nameKey: "name",
  translationKey: "translation",
  onSelect: () => {
  },
  onClose: () => {
  },
  keyboardHelpers: !0,
  footerComponent: () => null
});
class Zo extends Nt {
  constructor(e) {
    super(e), this.wrapperRef = Hr.createRef(), this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(e) {
    this.wrapperRef && !this.wrapperRef.current.contains(e.target) && this.props.notify && this.props.notify();
  }
  render() {
    return /* @__PURE__ */ X.jsx("div", { ref: this.wrapperRef, children: this.props.children });
  }
}
function Lt(r, e) {
  if (r.inserted[e.name] === void 0)
    return r.insert("", e, r.sheet, !0);
}
function Wt(r, e, t) {
  var n = [], a = Zr(r, n, t);
  return n.length < 2 ? t : a + e(n);
}
var Qo = function(e) {
  var t = tn(e);
  t.sheet.speedy = function(c) {
    this.isSpeedy = c;
  }, t.compat = !0;
  var n = function() {
    for (var l = arguments.length, f = new Array(l), u = 0; u < l; u++)
      f[u] = arguments[u];
    var d = Je(f, t.registered, void 0);
    return sn(t, d, !1), t.key + "-" + d.name;
  }, a = function() {
    for (var l = arguments.length, f = new Array(l), u = 0; u < l; u++)
      f[u] = arguments[u];
    var d = Je(f, t.registered), m = "animation-" + d.name;
    return Lt(t, {
      name: d.name,
      styles: "@keyframes " + m + "{" + d.styles + "}"
    }), m;
  }, o = function() {
    for (var l = arguments.length, f = new Array(l), u = 0; u < l; u++)
      f[u] = arguments[u];
    var d = Je(f, t.registered);
    Lt(t, d);
  }, s = function() {
    for (var l = arguments.length, f = new Array(l), u = 0; u < l; u++)
      f[u] = arguments[u];
    return Wt(t.registered, n, ei(f));
  };
  return {
    css: n,
    cx: s,
    injectGlobal: o,
    keyframes: a,
    hydrate: function(l) {
      l.forEach(function(f) {
        t.inserted[f] = !0;
      });
    },
    flush: function() {
      t.registered = {}, t.inserted = {}, t.sheet.flush();
    },
    sheet: t.sheet,
    cache: t,
    getRegisteredStyles: Zr.bind(null, t.registered),
    merge: Wt.bind(null, t.registered, n)
  };
}, ei = function r(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var a = e[n];
    if (a != null) {
      var o = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a))
            o = r(a);
          else {
            o = "";
            for (var s in a)
              a[s] && s && (o && (o += " "), o += s);
          }
          break;
        }
        default:
          o = a;
      }
      o && (t && (t += " "), t += o);
    }
  }
  return t;
}, ri = Qo({
  key: "css"
}), ti = ri.css;
function ni(r, e) {
  if (r == null)
    return {};
  var t = {};
  for (var n in r)
    if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n))
        continue;
      t[n] = r[n];
    }
  return t;
}
var ai = Zn, oi = function(e) {
  var t = ae.useRef(e);
  return ai(function() {
    t.current = e;
  }), t;
}, Ft = function(e, t) {
  if (typeof e == "function") {
    e(t);
    return;
  }
  e.current = t;
}, ii = function(e, t) {
  var n = Qn();
  return ea(function(a) {
    e.current = a, n.current && Ft(n.current, null), n.current = t, t && Ft(t, a);
  }, [t]);
}, zt = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, si = function(e) {
  Object.keys(zt).forEach(function(t) {
    e.style.setProperty(t, zt[t], "important");
  });
}, Dt = si, ue = null, Mt = function(e, t) {
  var n = e.scrollHeight;
  return t.sizingStyle.boxSizing === "border-box" ? n + t.borderSize : n - t.paddingSize;
};
function ci(r, e, t, n) {
  t === void 0 && (t = 1), n === void 0 && (n = 1 / 0), ue || (ue = document.createElement("textarea"), ue.setAttribute("tabindex", "-1"), ue.setAttribute("aria-hidden", "true"), Dt(ue)), ue.parentNode === null && document.body.appendChild(ue);
  var a = r.paddingSize, o = r.borderSize, s = r.sizingStyle, c = s.boxSizing;
  Object.keys(s).forEach(function(m) {
    var w = m;
    ue.style[w] = s[w];
  }), Dt(ue), ue.value = e;
  var l = Mt(ue, r);
  ue.value = e, l = Mt(ue, r), ue.value = "x";
  var f = ue.scrollHeight - a, u = f * t;
  c === "border-box" && (u = u + a + o), l = Math.max(u, l);
  var d = f * n;
  return c === "border-box" && (d = d + a + o), l = Math.min(d, l), [l, f];
}
var Bt = function() {
}, ui = function(e, t) {
  return e.reduce(function(n, a) {
    return n[a] = t[a], n;
  }, {});
}, li = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
], fi = !!document.documentElement.currentStyle, di = function(e) {
  var t = window.getComputedStyle(e);
  if (t === null)
    return null;
  var n = ui(li, t), a = n.boxSizing;
  if (a === "")
    return null;
  fi && a === "border-box" && (n.width = parseFloat(n.width) + parseFloat(n.borderRightWidth) + parseFloat(n.borderLeftWidth) + parseFloat(n.paddingRight) + parseFloat(n.paddingLeft) + "px");
  var o = parseFloat(n.paddingBottom) + parseFloat(n.paddingTop), s = parseFloat(n.borderBottomWidth) + parseFloat(n.borderTopWidth);
  return {
    sizingStyle: n,
    paddingSize: o,
    borderSize: s
  };
}, pi = di;
function En(r, e, t) {
  var n = oi(t);
  ae.useLayoutEffect(function() {
    var a = function(s) {
      return n.current(s);
    };
    if (r)
      return r.addEventListener(e, a), function() {
        return r.removeEventListener(e, a);
      };
  }, []);
}
var hi = function(e) {
  En(window, "resize", e);
}, gi = function(e) {
  En(document.fonts, "loadingdone", e);
}, vi = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], mi = function(e, t) {
  var n = e.cacheMeasurements, a = e.maxRows, o = e.minRows, s = e.onChange, c = s === void 0 ? Bt : s, l = e.onHeightChange, f = l === void 0 ? Bt : l, u = ni(e, vi), d = u.value !== void 0, m = ae.useRef(null), w = ii(m, t), R = ae.useRef(0), v = ae.useRef(), C = function() {
    var S = m.current, L = n && v.current ? v.current : pi(S);
    if (L) {
      v.current = L;
      var g = ci(L, S.value || S.placeholder || "x", o, a), q = g[0], P = g[1];
      R.current !== q && (R.current = q, S.style.setProperty("height", q + "px", "important"), f(q, {
        rowHeight: P
      }));
    }
  }, E = function(S) {
    d || C(), c(S);
  };
  return ae.useLayoutEffect(C), hi(C), gi(C), /* @__PURE__ */ ae.createElement("textarea", dr({}, u, {
    onChange: E,
    ref: w
  }));
}, bi = /* @__PURE__ */ ae.forwardRef(mi);
const yi = re("div")`
    position: relative;
    width: 100%;
`, Tn = re("div")`
    position: relative;
    ${xr}
    ${dn}
  ${be}
  ${et}
  ${bn}
  ${fn}
  ${nr}
  ${pn}
  ${gn}
  ${hn}
  ${vn}
  ${mn}
  ${Ko}
`;
Tn.defaultProps = {
  bg: "#FFFFFF",
  color: "#505050",
  border: "1px solid rgba(0, 0, 0, .1)",
  fontFamily: "monospace"
};
const xi = bi, Si = yn({
  prop: "placeholderColor",
  cssProperty: "color",
  key: "colors"
}), On = re(xi)`
    display: block;
    background: none;
    border: none;
    outline: none;
    resize: none;
    font: inherit;
    width: 100%;
    padding: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    /* we only want overlay text visible */
    /* need to do this so caret still shows up */
    color: inherit;
    -webkit-text-fill-color: transparent;
    ::placeholder {
        ${Si}
        -webkit-text-fill-color: initial;
    }
`;
On.defaultProps = {
  lineHeight: "1.1rem",
  placeholderColor: "#D7D7D7"
};
const wi = re("div")`
    display: block;
    background: none;
    border: none;
    outline: none;
    resize: none;
    font: inherit;
    max-width: 100%;
    padding: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    padding: inherit;

    ${(r) => r.collapsed && ti`
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        `}

    /* reversed from Input above */
  -webkit-text-fill-color: initial;
`, Pn = re("span")`
    font: inherit;
`, Ri = yn({
  prop: "tokenColor",
  cssProperty: "color",
  key: "colors"
}), _n = re(Pn)`
    position: relative;
    cursor: pointer;
    font-weight: 500;

    ${Ri}
`;
_n.defaultProps = {
  tokenColor: "#2384FF"
};
class Yt extends Nt {
  constructor(e) {
    super(e), this.onFocus = this.onFocus.bind(this), this.onBlur = this.onBlur.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onChange = this.onChange.bind(this), this.onAutosuggest = this.onAutosuggest.bind(this), this.onSelectValue = this.onSelectValue.bind(this), this.handleEnterKey = this.handleEnterKey.bind(this), this.shouldAutosuggest = this.shouldAutosuggest.bind(this), this.onClose = this.onClose.bind(this), this.extract = this.extract.bind(this), this.getCurrentChunk = this.getCurrentChunk.bind(this), this.buildOverlay = this.buildOverlay.bind(this), this.state = {
      focused: !1,
      value: e.defaultValue,
      attributes: e.data,
      overlayComponents: [],
      dropdownClosed: !1,
      dropdownOpen: !1,
      dropdownValue: null,
      dropdownX: null,
      dropdownY: null
    };
  }
  componentDidMount() {
    this.setState({
      overlayComponents: this.buildOverlay(this.state.value)
    });
  }
  componentDidUpdate(e, t) {
    const { value: n, attributes: a } = this.state;
    n !== t.value && this.props.onChange(n), (n !== t.value || a.length !== t.attributes.length) && this.setState(
      {
        overlayComponents: this.buildOverlay(n)
      },
      this.onAutosuggest
    );
  }
  componentWillReceiveProps(e) {
    const t = {};
    e.defaultValue !== void 0 && (t.value = e.defaultValue), e.data && (t.attributes = e.data), this.setState(t);
  }
  onFocus(e) {
    this.setState(
      {
        focused: !0
      },
      this.onAutosuggest
    );
  }
  onBlur(e) {
    this.setState({
      focused: !1
    });
  }
  onKeyDown(e) {
    e.keyCode === 13 && this.handleEnterKey(e), (e.keyCode === 37 || e.keyCode === 39) && this.onClose();
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  onAutosuggest() {
    const { value: e } = this.state, { offsetLeft: t, offsetTop: n } = this._marker, { chunk: a } = this.getCurrentChunk(e);
    this.shouldAutosuggest(a) ? this.setState({
      dropdownClosed: !1,
      dropdownOpen: !0,
      dropdownValue: a,
      dropdownX: t,
      dropdownY: n + 25
      // line height + 5 extra padding
    }) : this.setState({
      dropdownOpen: !1
    });
  }
  onSelectValue(e, t = "") {
    const { value: n } = this.state, { index: a, indexEnd: o } = this.getCurrentChunk(n), s = n.slice(0, a), c = n.slice(o), l = a + e.length + t.length;
    this.setState(
      {
        value: `${s}${e}${t}${c}`,
        dropdownClosed: t !== ":"
      },
      () => {
        this._input.focus(), this._input.setSelectionRange(l, l);
      }
    );
  }
  handleEnterKey(e) {
    const t = document.activeElement === this._input;
    !e.shiftKey && t && !this.state.dropdownOpen && (e.preventDefault(), this.props.onSubmit(this.state.value), e.target.blur());
  }
  shouldAutosuggest(e) {
    const { selectionStart: t } = this._input, { value: n, focused: a } = this.state, o = !n.charAt(t) || /[)\s]/.test(n.charAt(t)), s = o && /[\s-(]/.test(n.charAt(t - 1)), c = o && /[^)\s]/.test(n.charAt(t - 1));
    return a && (!n || s || c && !this.state.dropdownClosed);
  }
  onClose(e) {
    this.setState({
      dropdownOpen: !1,
      // don't reopen if it was closed for current word
      dropdownClosed: e || !1
    });
  }
  // onClickToken (start, end) {
  //   // move cursor to end of token
  //   this._input.focus()
  //   this._input.setSelectionRange(end, end)
  // }
  extract(e) {
    const { nameKeyIncludes: t } = this.props, { attributes: n } = this.state;
    return ga(e, n, t);
  }
  getCurrentChunk(e) {
    const { selectionStart: t } = this._input, n = this.extract(e), a = e.substring(0, t), o = a.match(/[^\s]*$/), s = o ? a.lastIndexOf(o[o.length - 1]) : -1;
    let c = s;
    for (const [u, d] of n.reverse()) {
      if (t > d && s < u) {
        c = d;
        break;
      }
      if (t > u && t <= d) {
        c = u;
        break;
      }
      if (s > u && s < d) {
        c = d;
        break;
      }
    }
    const l = e.substring(c, t), f = c + l.length;
    return {
      index: c,
      indexEnd: f,
      chunk: l
    };
  }
  buildTokens(e, t = 0) {
    const n = [], a = this.extract(e);
    let o = 0;
    return a.reduce(
      (s, c) => (n.push(e.substring(s[1], c[0])), n.push(
        /* @__PURE__ */ X.jsx(_n, { tokenColor: this.props.inputProps.tokenColor, children: e.substring(c[0], c[1]) }, `token-${c[0]}`)
      ), o = c[1], c),
      [null, 0]
    ), n.push(e.substring(o)), n.filter(Boolean);
  }
  buildOverlay(e) {
    const { index: t } = this.getCurrentChunk(e), n = this.buildTokens(e.substring(0, t)), a = this.buildTokens(e.substring(t) || " ", t);
    return [
      n,
      /* @__PURE__ */ X.jsx(Pn, { style: { outline: this.props.debug ? "1px solid red" : "none" }, ref: (o) => this._marker = o, children: a }, `after-${t}`)
    ];
  }
  render() {
    const {
      nameKey: e,
      className: t,
      inputProps: n,
      placeholder: a,
      keyboardHelpers: o,
      collapseOnBlur: s,
      footerComponent: c,
      dropdownProps: l,
      selectorProps: f,
      listProps: u,
      alwaysLeft: d,
      translations: m
    } = this.props, { value: w, attributes: R, dropdownOpen: v, dropdownValue: C, dropdownX: E, dropdownY: z, overlayComponents: S } = this.state, L = !this.state.focused && s;
    return /* @__PURE__ */ X.jsx(Zo, { notify: this.onClose, children: /* @__PURE__ */ X.jsxs(yi, { className: t, children: [
      /* @__PURE__ */ X.jsxs(Tn, { ...n, onClick: () => this._input.focus(), children: [
        /* @__PURE__ */ X.jsx(wi, { collapsed: L, children: S }),
        /* @__PURE__ */ X.jsx(
          On,
          {
            autoComplete: "off",
            autoCorrect: "off",
            autoCapitalize: "off",
            spellCheck: "false",
            autoFocus: n.autoFocus,
            maxRows: L ? 1 : void 0,
            placeholder: a,
            placeholderColor: n.placeholderColor,
            value: w,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onKeyDown: this.onKeyDown,
            onChange: this.onChange,
            ref: (g) => this._input = g
          }
        )
      ] }),
      v && /* @__PURE__ */ X.jsx(
        Vr,
        {
          keyboardHelpers: o,
          footerComponent: c,
          attributes: R,
          value: C,
          nameKey: e,
          onSelect: this.onSelectValue,
          onClose: this.onClose,
          offsetX: d ? 0 : E,
          offsetY: z,
          dropdownProps: l,
          selectorProps: f,
          listProps: u,
          translations: m
        }
      )
    ] }) });
  }
}
Ge(Yt, "propTypes", {
  // eslint-disable-line
  debug: K.bool,
  data: K.array,
  nameKey: K.string,
  nameKeyIncludes: K.array,
  defaultValue: K.string,
  placeholder: K.string,
  onChange: K.func,
  onSubmit: K.func,
  keyboardHelpers: K.bool,
  collapseOnBlur: K.bool,
  footerComponent: K.func,
  inputProps: K.object,
  dropdownProps: K.object,
  selectorProps: K.object,
  listProps: K.object,
  alwaysLeft: K.bool,
  // Choose if element will be always left
  translations: K.object
}), Ge(Yt, "defaultProps", {
  // eslint-disable-line
  data: [],
  nameKey: "name",
  nameKeyIncludes: ["name"],
  defaultValue: "",
  onChange: () => {
  },
  onSubmit: () => {
  },
  placeholder: "Search",
  inputProps: {},
  dropdownProps: {},
  selectorProps: {},
  listProps: {}
});
export {
  Yt as QueryAssist
};
