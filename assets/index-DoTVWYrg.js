function zf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Mf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var If = { exports: {} },
  fi = {},
  $f = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vl = Symbol.for("react.element"),
  Gh = Symbol.for("react.portal"),
  Xh = Symbol.for("react.fragment"),
  Jh = Symbol.for("react.strict_mode"),
  Zh = Symbol.for("react.profiler"),
  qh = Symbol.for("react.provider"),
  bh = Symbol.for("react.context"),
  em = Symbol.for("react.forward_ref"),
  tm = Symbol.for("react.suspense"),
  nm = Symbol.for("react.memo"),
  rm = Symbol.for("react.lazy"),
  Bs = Symbol.iterator;
function lm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bs && e[Bs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ff = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Af = Object.assign,
  Uf = {};
function Mr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uf),
    (this.updater = n || Ff);
}
Mr.prototype.isReactComponent = {};
Mr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bf() {}
Bf.prototype = Mr.prototype;
function _u(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uf),
    (this.updater = n || Ff);
}
var Ru = (_u.prototype = new Bf());
Ru.constructor = _u;
Af(Ru, Mr.prototype);
Ru.isPureReactComponent = !0;
var Hs = Array.isArray,
  Hf = Object.prototype.hasOwnProperty,
  Nu = { current: null },
  Vf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Hf.call(t, r) && !Vf.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Vl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Nu.current,
  };
}
function om(e, t) {
  return {
    $$typeof: Vl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Tu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vl;
}
function im(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vs = /\/+/g;
function Bi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? im("" + e.key)
    : t.toString(36);
}
function So(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vl:
          case Gh:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Bi(i, 0) : r),
      Hs(l)
        ? ((n = ""),
          e != null && (n = e.replace(Vs, "$&/") + "/"),
          So(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Tu(l) &&
            (l = om(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Vs, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Hs(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Bi(o, a);
      i += So(o, t, n, u, l);
    }
  else if (((u = lm(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Bi(o, a++)), (i += So(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function eo(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    So(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function am(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  xo = { transition: null },
  um = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: xo,
    ReactCurrentOwner: Nu,
  };
Y.Children = {
  map: eo,
  forEach: function (e, t, n) {
    eo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      eo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      eo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Tu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = Mr;
Y.Fragment = Xh;
Y.Profiler = Zh;
Y.PureComponent = _u;
Y.StrictMode = Jh;
Y.Suspense = tm;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = um;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Af({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Nu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Hf.call(t, u) &&
        !Vf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: Vl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: bh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: qh, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = Wf;
Y.createFactory = function (e) {
  var t = Wf.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: em, render: e };
};
Y.isValidElement = Tu;
Y.lazy = function (e) {
  return { $$typeof: rm, _payload: { _status: -1, _result: e }, _init: am };
};
Y.memo = function (e, t) {
  return { $$typeof: nm, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = xo.transition;
  xo.transition = {};
  try {
    e();
  } finally {
    xo.transition = t;
  }
};
Y.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Y.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return Ve.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
Y.useId = function () {
  return Ve.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return Ve.current.useRef(e);
};
Y.useState = function (e) {
  return Ve.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return Ve.current.useTransition();
};
Y.version = "18.2.0";
$f.exports = Y;
var N = $f.exports;
const Fn = Mf(N),
  sm = zf({ __proto__: null, default: Fn }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cm = N,
  fm = Symbol.for("react.element"),
  dm = Symbol.for("react.fragment"),
  pm = Object.prototype.hasOwnProperty,
  hm = cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  mm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) pm.call(t, r) && !mm.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: fm,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: hm.current,
  };
}
fi.Fragment = dm;
fi.jsx = Qf;
fi.jsxs = Qf;
If.exports = fi;
var O = If.exports,
  Ea = {},
  Kf = { exports: {} },
  ut = {},
  Yf = { exports: {} },
  Gf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, I) {
    var A = D.length;
    D.push(I);
    e: for (; 0 < A; ) {
      var Q = (A - 1) >>> 1,
        J = D[Q];
      if (0 < l(J, I)) (D[Q] = I), (D[A] = J), (A = Q);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var I = D[0],
      A = D.pop();
    if (A !== I) {
      D[0] = A;
      e: for (var Q = 0, J = D.length, et = J >>> 1; Q < et; ) {
        var ye = 2 * (Q + 1) - 1,
          Ie = D[ye],
          we = ye + 1,
          tt = D[we];
        if (0 > l(Ie, A))
          we < J && 0 > l(tt, Ie)
            ? ((D[Q] = tt), (D[we] = A), (Q = we))
            : ((D[Q] = Ie), (D[ye] = A), (Q = ye));
        else if (we < J && 0 > l(tt, A)) (D[Q] = tt), (D[we] = A), (Q = we);
        else break e;
      }
    }
    return I;
  }
  function l(D, I) {
    var A = D.sortIndex - I.sortIndex;
    return A !== 0 ? A : D.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    c = 1,
    p = null,
    m = 3,
    w = !1,
    x = !1,
    y = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(D) {
    for (var I = n(s); I !== null; ) {
      if (I.callback === null) r(s);
      else if (I.startTime <= D)
        r(s), (I.sortIndex = I.expirationTime), t(u, I);
      else break;
      I = n(s);
    }
  }
  function k(D) {
    if (((y = !1), h(D), !x))
      if (n(u) !== null) (x = !0), Rt(_);
      else {
        var I = n(s);
        I !== null && te(k, I.startTime - D);
      }
  }
  function _(D, I) {
    (x = !1), y && ((y = !1), d(T), (T = -1)), (w = !0);
    var A = m;
    try {
      for (
        h(I), p = n(u);
        p !== null && (!(p.expirationTime > I) || (D && !X()));

      ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var J = Q(p.expirationTime <= I);
          (I = e.unstable_now()),
            typeof J == "function" ? (p.callback = J) : p === n(u) && r(u),
            h(I);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var et = !0;
      else {
        var ye = n(s);
        ye !== null && te(k, ye.startTime - I), (et = !1);
      }
      return et;
    } finally {
      (p = null), (m = A), (w = !1);
    }
  }
  var v = !1,
    E = null,
    T = -1,
    z = 5,
    F = -1;
  function X() {
    return !(e.unstable_now() - F < z);
  }
  function ge() {
    if (E !== null) {
      var D = e.unstable_now();
      F = D;
      var I = !0;
      try {
        I = E(!0, D);
      } finally {
        I ? pe() : ((v = !1), (E = null));
      }
    } else v = !1;
  }
  var pe;
  if (typeof f == "function")
    pe = function () {
      f(ge);
    };
  else if (typeof MessageChannel < "u") {
    var Qe = new MessageChannel(),
      Xt = Qe.port2;
    (Qe.port1.onmessage = ge),
      (pe = function () {
        Xt.postMessage(null);
      });
  } else
    pe = function () {
      C(ge, 0);
    };
  function Rt(D) {
    (E = D), v || ((v = !0), pe());
  }
  function te(D, I) {
    T = C(function () {
      D(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), Rt(_));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (D) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = m;
      }
      var A = m;
      m = I;
      try {
        return D();
      } finally {
        m = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, I) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var A = m;
      m = D;
      try {
        return I();
      } finally {
        m = A;
      }
    }),
    (e.unstable_scheduleCallback = function (D, I, A) {
      var Q = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? Q + A : Q))
          : (A = Q),
        D)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = A + J),
        (D = {
          id: c++,
          callback: I,
          priorityLevel: D,
          startTime: A,
          expirationTime: J,
          sortIndex: -1,
        }),
        A > Q
          ? ((D.sortIndex = A),
            t(s, D),
            n(u) === null &&
              D === n(s) &&
              (y ? (d(T), (T = -1)) : (y = !0), te(k, A - Q)))
          : ((D.sortIndex = J), t(u, D), x || w || ((x = !0), Rt(_))),
        D
      );
    }),
    (e.unstable_shouldYield = X),
    (e.unstable_wrapCallback = function (D) {
      var I = m;
      return function () {
        var A = m;
        m = I;
        try {
          return D.apply(this, arguments);
        } finally {
          m = A;
        }
      };
    });
})(Gf);
Yf.exports = Gf;
var vm = Yf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xf = N,
  at = vm;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Jf = new Set(),
  El = {};
function Qn(e, t) {
  Er(e, t), Er(e + "Capture", t);
}
function Er(e, t) {
  for (El[e] = t, e = 0; e < t.length; e++) Jf.add(t[e]);
}
var Vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ka = Object.prototype.hasOwnProperty,
  gm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ws = {},
  Qs = {};
function ym(e) {
  return ka.call(Qs, e)
    ? !0
    : ka.call(Ws, e)
    ? !1
    : gm.test(e)
    ? (Qs[e] = !0)
    : ((Ws[e] = !0), !1);
}
function wm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Sm(e, t, n, r) {
  if (t === null || typeof t > "u" || wm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function We(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new We(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Me[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Me[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Me[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Me[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Me[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Me[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Me[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Lu = /[\-:]([a-z])/g;
function Du(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Lu, Du);
    Me[t] = new We(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Lu, Du);
    Me[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Lu, Du);
  Me[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Me[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Me[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ou(e, t, n, r) {
  var l = Me.hasOwnProperty(t) ? Me[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Sm(t, n, l, r) && (n = null),
    r || l === null
      ? ym(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Yt = Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  to = Symbol.for("react.element"),
  tr = Symbol.for("react.portal"),
  nr = Symbol.for("react.fragment"),
  ju = Symbol.for("react.strict_mode"),
  Ca = Symbol.for("react.profiler"),
  Zf = Symbol.for("react.provider"),
  qf = Symbol.for("react.context"),
  zu = Symbol.for("react.forward_ref"),
  Pa = Symbol.for("react.suspense"),
  _a = Symbol.for("react.suspense_list"),
  Mu = Symbol.for("react.memo"),
  nn = Symbol.for("react.lazy"),
  bf = Symbol.for("react.offscreen"),
  Ks = Symbol.iterator;
function Wr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ks && e[Ks]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var de = Object.assign,
  Hi;
function il(e) {
  if (Hi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hi = (t && t[1]) || "";
    }
  return (
    `
` +
    Hi +
    e
  );
}
var Vi = !1;
function Wi(e, t) {
  if (!e || Vi) return "";
  Vi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Vi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? il(e) : "";
}
function xm(e) {
  switch (e.tag) {
    case 5:
      return il(e.type);
    case 16:
      return il("Lazy");
    case 13:
      return il("Suspense");
    case 19:
      return il("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wi(e.type, !1)), e;
    case 11:
      return (e = Wi(e.type.render, !1)), e;
    case 1:
      return (e = Wi(e.type, !0)), e;
    default:
      return "";
  }
}
function Ra(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nr:
      return "Fragment";
    case tr:
      return "Portal";
    case Ca:
      return "Profiler";
    case ju:
      return "StrictMode";
    case Pa:
      return "Suspense";
    case _a:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qf:
        return (e.displayName || "Context") + ".Consumer";
      case Zf:
        return (e._context.displayName || "Context") + ".Provider";
      case zu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Mu:
        return (
          (t = e.displayName || null), t !== null ? t : Ra(e.type) || "Memo"
        );
      case nn:
        (t = e._payload), (e = e._init);
        try {
          return Ra(e(t));
        } catch {}
    }
  return null;
}
function Em(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ra(t);
    case 8:
      return t === ju ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function gn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ed(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function km(e) {
  var t = ed(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function no(e) {
  e._valueTracker || (e._valueTracker = km(e));
}
function td(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ed(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function $o(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Na(e, t) {
  var n = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ys(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = gn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function nd(e, t) {
  (t = t.checked), t != null && Ou(e, "checked", t, !1);
}
function Ta(e, t) {
  nd(e, t);
  var n = gn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? La(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && La(e, t.type, gn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Gs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function La(e, t, n) {
  (t !== "number" || $o(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var al = Array.isArray;
function vr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Da(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (al(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: gn(n) };
}
function rd(e, t) {
  var n = gn(t.value),
    r = gn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Js(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ld(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Oa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ld(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ro,
  od = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ro = ro || document.createElement("div"),
          ro.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ro.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function kl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fl = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Cm = ["Webkit", "ms", "Moz", "O"];
Object.keys(fl).forEach(function (e) {
  Cm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fl[t] = fl[e]);
  });
});
function id(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (fl.hasOwnProperty(e) && fl[e])
    ? ("" + t).trim()
    : t + "px";
}
function ad(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = id(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Pm = de(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ja(e, t) {
  if (t) {
    if (Pm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function za(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ma = null;
function Iu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ia = null,
  gr = null,
  yr = null;
function Zs(e) {
  if ((e = Kl(e))) {
    if (typeof Ia != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = vi(t)), Ia(e.stateNode, e.type, t));
  }
}
function ud(e) {
  gr ? (yr ? yr.push(e) : (yr = [e])) : (gr = e);
}
function sd() {
  if (gr) {
    var e = gr,
      t = yr;
    if (((yr = gr = null), Zs(e), t)) for (e = 0; e < t.length; e++) Zs(t[e]);
  }
}
function cd(e, t) {
  return e(t);
}
function fd() {}
var Qi = !1;
function dd(e, t, n) {
  if (Qi) return e(t, n);
  Qi = !0;
  try {
    return cd(e, t, n);
  } finally {
    (Qi = !1), (gr !== null || yr !== null) && (fd(), sd());
  }
}
function Cl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var $a = !1;
if (Vt)
  try {
    var Qr = {};
    Object.defineProperty(Qr, "passive", {
      get: function () {
        $a = !0;
      },
    }),
      window.addEventListener("test", Qr, Qr),
      window.removeEventListener("test", Qr, Qr);
  } catch {
    $a = !1;
  }
function _m(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var dl = !1,
  Fo = null,
  Ao = !1,
  Fa = null,
  Rm = {
    onError: function (e) {
      (dl = !0), (Fo = e);
    },
  };
function Nm(e, t, n, r, l, o, i, a, u) {
  (dl = !1), (Fo = null), _m.apply(Rm, arguments);
}
function Tm(e, t, n, r, l, o, i, a, u) {
  if ((Nm.apply(this, arguments), dl)) {
    if (dl) {
      var s = Fo;
      (dl = !1), (Fo = null);
    } else throw Error(R(198));
    Ao || ((Ao = !0), (Fa = s));
  }
}
function Kn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function qs(e) {
  if (Kn(e) !== e) throw Error(R(188));
}
function Lm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Kn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return qs(l), e;
        if (o === r) return qs(l), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function hd(e) {
  return (e = Lm(e)), e !== null ? md(e) : null;
}
function md(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = md(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vd = at.unstable_scheduleCallback,
  bs = at.unstable_cancelCallback,
  Dm = at.unstable_shouldYield,
  Om = at.unstable_requestPaint,
  xe = at.unstable_now,
  jm = at.unstable_getCurrentPriorityLevel,
  $u = at.unstable_ImmediatePriority,
  gd = at.unstable_UserBlockingPriority,
  Uo = at.unstable_NormalPriority,
  zm = at.unstable_LowPriority,
  yd = at.unstable_IdlePriority,
  di = null,
  jt = null;
function Mm(e) {
  if (jt && typeof jt.onCommitFiberRoot == "function")
    try {
      jt.onCommitFiberRoot(di, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var kt = Math.clz32 ? Math.clz32 : Fm,
  Im = Math.log,
  $m = Math.LN2;
function Fm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Im(e) / $m) | 0)) | 0;
}
var lo = 64,
  oo = 4194304;
function ul(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Bo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = ul(a)) : ((o &= i), o !== 0 && (r = ul(o)));
  } else (i = n & ~l), i !== 0 ? (r = ul(i)) : o !== 0 && (r = ul(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - kt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Am(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Um(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - kt(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = Am(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Aa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function wd() {
  var e = lo;
  return (lo <<= 1), !(lo & 4194240) && (lo = 64), e;
}
function Ki(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Wl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = n);
}
function Bm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - kt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Fu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var ee = 0;
function Sd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var xd,
  Au,
  Ed,
  kd,
  Cd,
  Ua = !1,
  io = [],
  sn = null,
  cn = null,
  fn = null,
  Pl = new Map(),
  _l = new Map(),
  ln = [],
  Hm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ec(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      sn = null;
      break;
    case "dragenter":
    case "dragleave":
      cn = null;
      break;
    case "mouseover":
    case "mouseout":
      fn = null;
      break;
    case "pointerover":
    case "pointerout":
      Pl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _l.delete(t.pointerId);
  }
}
function Kr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Kl(t)), t !== null && Au(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Vm(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (sn = Kr(sn, e, t, n, r, l)), !0;
    case "dragenter":
      return (cn = Kr(cn, e, t, n, r, l)), !0;
    case "mouseover":
      return (fn = Kr(fn, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Pl.set(o, Kr(Pl.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), _l.set(o, Kr(_l.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Pd(e) {
  var t = Nn(e.target);
  if (t !== null) {
    var n = Kn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pd(n)), t !== null)) {
          (e.blockedOn = t),
            Cd(e.priority, function () {
              Ed(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Eo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ba(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ma = r), n.target.dispatchEvent(r), (Ma = null);
    } else return (t = Kl(n)), t !== null && Au(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function tc(e, t, n) {
  Eo(e) && n.delete(t);
}
function Wm() {
  (Ua = !1),
    sn !== null && Eo(sn) && (sn = null),
    cn !== null && Eo(cn) && (cn = null),
    fn !== null && Eo(fn) && (fn = null),
    Pl.forEach(tc),
    _l.forEach(tc);
}
function Yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ua ||
      ((Ua = !0),
      at.unstable_scheduleCallback(at.unstable_NormalPriority, Wm)));
}
function Rl(e) {
  function t(l) {
    return Yr(l, e);
  }
  if (0 < io.length) {
    Yr(io[0], e);
    for (var n = 1; n < io.length; n++) {
      var r = io[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    sn !== null && Yr(sn, e),
      cn !== null && Yr(cn, e),
      fn !== null && Yr(fn, e),
      Pl.forEach(t),
      _l.forEach(t),
      n = 0;
    n < ln.length;
    n++
  )
    (r = ln[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ln.length && ((n = ln[0]), n.blockedOn === null); )
    Pd(n), n.blockedOn === null && ln.shift();
}
var wr = Yt.ReactCurrentBatchConfig,
  Ho = !0;
function Qm(e, t, n, r) {
  var l = ee,
    o = wr.transition;
  wr.transition = null;
  try {
    (ee = 1), Uu(e, t, n, r);
  } finally {
    (ee = l), (wr.transition = o);
  }
}
function Km(e, t, n, r) {
  var l = ee,
    o = wr.transition;
  wr.transition = null;
  try {
    (ee = 4), Uu(e, t, n, r);
  } finally {
    (ee = l), (wr.transition = o);
  }
}
function Uu(e, t, n, r) {
  if (Ho) {
    var l = Ba(e, t, n, r);
    if (l === null) na(e, t, r, Vo, n), ec(e, r);
    else if (Vm(l, e, t, n, r)) r.stopPropagation();
    else if ((ec(e, r), t & 4 && -1 < Hm.indexOf(e))) {
      for (; l !== null; ) {
        var o = Kl(l);
        if (
          (o !== null && xd(o),
          (o = Ba(e, t, n, r)),
          o === null && na(e, t, r, Vo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else na(e, t, r, null, n);
  }
}
var Vo = null;
function Ba(e, t, n, r) {
  if (((Vo = null), (e = Iu(r)), (e = Nn(e)), e !== null))
    if (((t = Kn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vo = e), null;
}
function _d(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (jm()) {
        case $u:
          return 1;
        case gd:
          return 4;
        case Uo:
        case zm:
          return 16;
        case yd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var an = null,
  Bu = null,
  ko = null;
function Rd() {
  if (ko) return ko;
  var e,
    t = Bu,
    n = t.length,
    r,
    l = "value" in an ? an.value : an.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (ko = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Co(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ao() {
  return !0;
}
function nc() {
  return !1;
}
function st(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ao
        : nc),
      (this.isPropagationStopped = nc),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ao));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ao));
      },
      persist: function () {},
      isPersistent: ao,
    }),
    t
  );
}
var Ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Hu = st(Ir),
  Ql = de({}, Ir, { view: 0, detail: 0 }),
  Ym = st(Ql),
  Yi,
  Gi,
  Gr,
  pi = de({}, Ql, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Vu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Gr &&
            (Gr && e.type === "mousemove"
              ? ((Yi = e.screenX - Gr.screenX), (Gi = e.screenY - Gr.screenY))
              : (Gi = Yi = 0),
            (Gr = e)),
          Yi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gi;
    },
  }),
  rc = st(pi),
  Gm = de({}, pi, { dataTransfer: 0 }),
  Xm = st(Gm),
  Jm = de({}, Ql, { relatedTarget: 0 }),
  Xi = st(Jm),
  Zm = de({}, Ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qm = st(Zm),
  bm = de({}, Ir, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ev = st(bm),
  tv = de({}, Ir, { data: 0 }),
  lc = st(tv),
  nv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  rv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  lv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ov(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lv[e]) ? !!t[e] : !1;
}
function Vu() {
  return ov;
}
var iv = de({}, Ql, {
    key: function (e) {
      if (e.key) {
        var t = nv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Co(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? rv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vu,
    charCode: function (e) {
      return e.type === "keypress" ? Co(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Co(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  av = st(iv),
  uv = de({}, pi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  oc = st(uv),
  sv = de({}, Ql, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vu,
  }),
  cv = st(sv),
  fv = de({}, Ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dv = st(fv),
  pv = de({}, pi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hv = st(pv),
  mv = [9, 13, 27, 32],
  Wu = Vt && "CompositionEvent" in window,
  pl = null;
Vt && "documentMode" in document && (pl = document.documentMode);
var vv = Vt && "TextEvent" in window && !pl,
  Nd = Vt && (!Wu || (pl && 8 < pl && 11 >= pl)),
  ic = " ",
  ac = !1;
function Td(e, t) {
  switch (e) {
    case "keyup":
      return mv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ld(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var rr = !1;
function gv(e, t) {
  switch (e) {
    case "compositionend":
      return Ld(t);
    case "keypress":
      return t.which !== 32 ? null : ((ac = !0), ic);
    case "textInput":
      return (e = t.data), e === ic && ac ? null : e;
    default:
      return null;
  }
}
function yv(e, t) {
  if (rr)
    return e === "compositionend" || (!Wu && Td(e, t))
      ? ((e = Rd()), (ko = Bu = an = null), (rr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Nd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function uc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wv[e.type] : t === "textarea";
}
function Dd(e, t, n, r) {
  ud(r),
    (t = Wo(t, "onChange")),
    0 < t.length &&
      ((n = new Hu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var hl = null,
  Nl = null;
function Sv(e) {
  Hd(e, 0);
}
function hi(e) {
  var t = ir(e);
  if (td(t)) return e;
}
function xv(e, t) {
  if (e === "change") return t;
}
var Od = !1;
if (Vt) {
  var Ji;
  if (Vt) {
    var Zi = "oninput" in document;
    if (!Zi) {
      var sc = document.createElement("div");
      sc.setAttribute("oninput", "return;"),
        (Zi = typeof sc.oninput == "function");
    }
    Ji = Zi;
  } else Ji = !1;
  Od = Ji && (!document.documentMode || 9 < document.documentMode);
}
function cc() {
  hl && (hl.detachEvent("onpropertychange", jd), (Nl = hl = null));
}
function jd(e) {
  if (e.propertyName === "value" && hi(Nl)) {
    var t = [];
    Dd(t, Nl, e, Iu(e)), dd(Sv, t);
  }
}
function Ev(e, t, n) {
  e === "focusin"
    ? (cc(), (hl = t), (Nl = n), hl.attachEvent("onpropertychange", jd))
    : e === "focusout" && cc();
}
function kv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return hi(Nl);
}
function Cv(e, t) {
  if (e === "click") return hi(t);
}
function Pv(e, t) {
  if (e === "input" || e === "change") return hi(t);
}
function _v(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : _v;
function Tl(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ka.call(t, l) || !_t(e[l], t[l])) return !1;
  }
  return !0;
}
function fc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function dc(e, t) {
  var n = fc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = fc(n);
  }
}
function zd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Md() {
  for (var e = window, t = $o(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $o(e.document);
  }
  return t;
}
function Qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Rv(e) {
  var t = Md(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Qu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = dc(n, o));
        var i = dc(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Nv = Vt && "documentMode" in document && 11 >= document.documentMode,
  lr = null,
  Ha = null,
  ml = null,
  Va = !1;
function pc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Va ||
    lr == null ||
    lr !== $o(r) ||
    ((r = lr),
    "selectionStart" in r && Qu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ml && Tl(ml, r)) ||
      ((ml = r),
      (r = Wo(Ha, "onSelect")),
      0 < r.length &&
        ((t = new Hu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = lr))));
}
function uo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var or = {
    animationend: uo("Animation", "AnimationEnd"),
    animationiteration: uo("Animation", "AnimationIteration"),
    animationstart: uo("Animation", "AnimationStart"),
    transitionend: uo("Transition", "TransitionEnd"),
  },
  qi = {},
  Id = {};
Vt &&
  ((Id = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete or.animationend.animation,
    delete or.animationiteration.animation,
    delete or.animationstart.animation),
  "TransitionEvent" in window || delete or.transitionend.transition);
function mi(e) {
  if (qi[e]) return qi[e];
  if (!or[e]) return e;
  var t = or[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Id) return (qi[e] = t[n]);
  return e;
}
var $d = mi("animationend"),
  Fd = mi("animationiteration"),
  Ad = mi("animationstart"),
  Ud = mi("transitionend"),
  Bd = new Map(),
  hc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Sn(e, t) {
  Bd.set(e, t), Qn(t, [e]);
}
for (var bi = 0; bi < hc.length; bi++) {
  var ea = hc[bi],
    Tv = ea.toLowerCase(),
    Lv = ea[0].toUpperCase() + ea.slice(1);
  Sn(Tv, "on" + Lv);
}
Sn($d, "onAnimationEnd");
Sn(Fd, "onAnimationIteration");
Sn(Ad, "onAnimationStart");
Sn("dblclick", "onDoubleClick");
Sn("focusin", "onFocus");
Sn("focusout", "onBlur");
Sn(Ud, "onTransitionEnd");
Er("onMouseEnter", ["mouseout", "mouseover"]);
Er("onMouseLeave", ["mouseout", "mouseover"]);
Er("onPointerEnter", ["pointerout", "pointerover"]);
Er("onPointerLeave", ["pointerout", "pointerover"]);
Qn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Qn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Qn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Qn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var sl =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Dv = new Set("cancel close invalid load scroll toggle".split(" ").concat(sl));
function mc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Tm(r, t, void 0, e), (e.currentTarget = null);
}
function Hd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          mc(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          mc(l, a, s), (o = u);
        }
    }
  }
  if (Ao) throw ((e = Fa), (Ao = !1), (Fa = null), e);
}
function ie(e, t) {
  var n = t[Ga];
  n === void 0 && (n = t[Ga] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Vd(t, e, 2, !1), n.add(r));
}
function ta(e, t, n) {
  var r = 0;
  t && (r |= 4), Vd(n, e, r, t);
}
var so = "_reactListening" + Math.random().toString(36).slice(2);
function Ll(e) {
  if (!e[so]) {
    (e[so] = !0),
      Jf.forEach(function (n) {
        n !== "selectionchange" && (Dv.has(n) || ta(n, !1, e), ta(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[so] || ((t[so] = !0), ta("selectionchange", !1, t));
  }
}
function Vd(e, t, n, r) {
  switch (_d(t)) {
    case 1:
      var l = Qm;
      break;
    case 4:
      l = Km;
      break;
    default:
      l = Uu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !$a ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function na(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Nn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  dd(function () {
    var s = o,
      c = Iu(n),
      p = [];
    e: {
      var m = Bd.get(e);
      if (m !== void 0) {
        var w = Hu,
          x = e;
        switch (e) {
          case "keypress":
            if (Co(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = av;
            break;
          case "focusin":
            (x = "focus"), (w = Xi);
            break;
          case "focusout":
            (x = "blur"), (w = Xi);
            break;
          case "beforeblur":
          case "afterblur":
            w = Xi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = rc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Xm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = cv;
            break;
          case $d:
          case Fd:
          case Ad:
            w = qm;
            break;
          case Ud:
            w = dv;
            break;
          case "scroll":
            w = Ym;
            break;
          case "wheel":
            w = hv;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = ev;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = oc;
        }
        var y = (t & 4) !== 0,
          C = !y && e === "scroll",
          d = y ? (m !== null ? m + "Capture" : null) : m;
        y = [];
        for (var f = s, h; f !== null; ) {
          h = f;
          var k = h.stateNode;
          if (
            (h.tag === 5 &&
              k !== null &&
              ((h = k),
              d !== null && ((k = Cl(f, d)), k != null && y.push(Dl(f, k, h)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((m = new w(m, x, null, n, c)), p.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ma &&
            (x = n.relatedTarget || n.fromElement) &&
            (Nn(x) || x[Wt]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = s),
              (x = x ? Nn(x) : null),
              x !== null &&
                ((C = Kn(x)), x !== C || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = s)),
          w !== x)
        ) {
          if (
            ((y = rc),
            (k = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = oc),
              (k = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (C = w == null ? m : ir(w)),
            (h = x == null ? m : ir(x)),
            (m = new y(k, f + "leave", w, n, c)),
            (m.target = C),
            (m.relatedTarget = h),
            (k = null),
            Nn(c) === s &&
              ((y = new y(d, f + "enter", x, n, c)),
              (y.target = h),
              (y.relatedTarget = C),
              (k = y)),
            (C = k),
            w && x)
          )
            t: {
              for (y = w, d = x, f = 0, h = y; h; h = qn(h)) f++;
              for (h = 0, k = d; k; k = qn(k)) h++;
              for (; 0 < f - h; ) (y = qn(y)), f--;
              for (; 0 < h - f; ) (d = qn(d)), h--;
              for (; f--; ) {
                if (y === d || (d !== null && y === d.alternate)) break t;
                (y = qn(y)), (d = qn(d));
              }
              y = null;
            }
          else y = null;
          w !== null && vc(p, m, w, y, !1),
            x !== null && C !== null && vc(p, C, x, y, !0);
        }
      }
      e: {
        if (
          ((m = s ? ir(s) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var _ = xv;
        else if (uc(m))
          if (Od) _ = Pv;
          else {
            _ = kv;
            var v = Ev;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (_ = Cv);
        if (_ && (_ = _(e, s))) {
          Dd(p, _, n, c);
          break e;
        }
        v && v(e, m, s),
          e === "focusout" &&
            (v = m._wrapperState) &&
            v.controlled &&
            m.type === "number" &&
            La(m, "number", m.value);
      }
      switch (((v = s ? ir(s) : window), e)) {
        case "focusin":
          (uc(v) || v.contentEditable === "true") &&
            ((lr = v), (Ha = s), (ml = null));
          break;
        case "focusout":
          ml = Ha = lr = null;
          break;
        case "mousedown":
          Va = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Va = !1), pc(p, n, c);
          break;
        case "selectionchange":
          if (Nv) break;
        case "keydown":
        case "keyup":
          pc(p, n, c);
      }
      var E;
      if (Wu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        rr
          ? Td(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Nd &&
          n.locale !== "ko" &&
          (rr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && rr && (E = Rd())
            : ((an = c),
              (Bu = "value" in an ? an.value : an.textContent),
              (rr = !0))),
        (v = Wo(s, T)),
        0 < v.length &&
          ((T = new lc(T, e, null, n, c)),
          p.push({ event: T, listeners: v }),
          E ? (T.data = E) : ((E = Ld(n)), E !== null && (T.data = E)))),
        (E = vv ? gv(e, n) : yv(e, n)) &&
          ((s = Wo(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new lc("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: s }),
            (c.data = E)));
    }
    Hd(p, t);
  });
}
function Dl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Cl(e, n)),
      o != null && r.unshift(Dl(e, o, l)),
      (o = Cl(e, t)),
      o != null && r.push(Dl(e, o, l))),
      (e = e.return);
  }
  return r;
}
function qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vc(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Cl(n, o)), u != null && i.unshift(Dl(n, u, a)))
        : l || ((u = Cl(n, o)), u != null && i.push(Dl(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ov = /\r\n?/g,
  jv = /\u0000|\uFFFD/g;
function gc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ov,
      `
`
    )
    .replace(jv, "");
}
function co(e, t, n) {
  if (((t = gc(t)), gc(e) !== t && n)) throw Error(R(425));
}
function Qo() {}
var Wa = null,
  Qa = null;
function Ka(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ya = typeof setTimeout == "function" ? setTimeout : void 0,
  zv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  yc = typeof Promise == "function" ? Promise : void 0,
  Mv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof yc < "u"
      ? function (e) {
          return yc.resolve(null).then(e).catch(Iv);
        }
      : Ya;
function Iv(e) {
  setTimeout(function () {
    throw e;
  });
}
function ra(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Rl(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Rl(t);
}
function dn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function wc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $r = Math.random().toString(36).slice(2),
  Ot = "__reactFiber$" + $r,
  Ol = "__reactProps$" + $r,
  Wt = "__reactContainer$" + $r,
  Ga = "__reactEvents$" + $r,
  $v = "__reactListeners$" + $r,
  Fv = "__reactHandles$" + $r;
function Nn(e) {
  var t = e[Ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Wt] || n[Ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = wc(e); e !== null; ) {
          if ((n = e[Ot])) return n;
          e = wc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Kl(e) {
  return (
    (e = e[Ot] || e[Wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ir(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function vi(e) {
  return e[Ol] || null;
}
var Xa = [],
  ar = -1;
function xn(e) {
  return { current: e };
}
function ue(e) {
  0 > ar || ((e.current = Xa[ar]), (Xa[ar] = null), ar--);
}
function oe(e, t) {
  ar++, (Xa[ar] = e.current), (e.current = t);
}
var yn = {},
  Ue = xn(yn),
  Ze = xn(!1),
  An = yn;
function kr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function qe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ko() {
  ue(Ze), ue(Ue);
}
function Sc(e, t, n) {
  if (Ue.current !== yn) throw Error(R(168));
  oe(Ue, t), oe(Ze, n);
}
function Wd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, Em(e) || "Unknown", l));
  return de({}, n, r);
}
function Yo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yn),
    (An = Ue.current),
    oe(Ue, e),
    oe(Ze, Ze.current),
    !0
  );
}
function xc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Wd(e, t, An)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(Ze),
      ue(Ue),
      oe(Ue, e))
    : ue(Ze),
    oe(Ze, n);
}
var Ft = null,
  gi = !1,
  la = !1;
function Qd(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
function Av(e) {
  (gi = !0), Qd(e);
}
function En() {
  if (!la && Ft !== null) {
    la = !0;
    var e = 0,
      t = ee;
    try {
      var n = Ft;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ft = null), (gi = !1);
    } catch (l) {
      throw (Ft !== null && (Ft = Ft.slice(e + 1)), vd($u, En), l);
    } finally {
      (ee = t), (la = !1);
    }
  }
  return null;
}
var ur = [],
  sr = 0,
  Go = null,
  Xo = 0,
  ft = [],
  dt = 0,
  Un = null,
  At = 1,
  Ut = "";
function _n(e, t) {
  (ur[sr++] = Xo), (ur[sr++] = Go), (Go = e), (Xo = t);
}
function Kd(e, t, n) {
  (ft[dt++] = At), (ft[dt++] = Ut), (ft[dt++] = Un), (Un = e);
  var r = At;
  e = Ut;
  var l = 32 - kt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - kt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (At = (1 << (32 - kt(t) + l)) | (n << l) | r),
      (Ut = o + e);
  } else (At = (1 << o) | (n << l) | r), (Ut = e);
}
function Ku(e) {
  e.return !== null && (_n(e, 1), Kd(e, 1, 0));
}
function Yu(e) {
  for (; e === Go; )
    (Go = ur[--sr]), (ur[sr] = null), (Xo = ur[--sr]), (ur[sr] = null);
  for (; e === Un; )
    (Un = ft[--dt]),
      (ft[dt] = null),
      (Ut = ft[--dt]),
      (ft[dt] = null),
      (At = ft[--dt]),
      (ft[dt] = null);
}
var it = null,
  ot = null,
  se = !1,
  Et = null;
function Yd(e, t) {
  var n = pt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ec(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (it = e), (ot = dn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (it = e), (ot = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Un !== null ? { id: At, overflow: Ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (it = e),
            (ot = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ja(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Za(e) {
  if (se) {
    var t = ot;
    if (t) {
      var n = t;
      if (!Ec(e, t)) {
        if (Ja(e)) throw Error(R(418));
        t = dn(n.nextSibling);
        var r = it;
        t && Ec(e, t)
          ? Yd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (it = e));
      }
    } else {
      if (Ja(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (it = e);
    }
  }
}
function kc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  it = e;
}
function fo(e) {
  if (e !== it) return !1;
  if (!se) return kc(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ka(e.type, e.memoizedProps))),
    t && (t = ot))
  ) {
    if (Ja(e)) throw (Gd(), Error(R(418)));
    for (; t; ) Yd(e, t), (t = dn(t.nextSibling));
  }
  if ((kc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ot = dn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ot = null;
    }
  } else ot = it ? dn(e.stateNode.nextSibling) : null;
  return !0;
}
function Gd() {
  for (var e = ot; e; ) e = dn(e.nextSibling);
}
function Cr() {
  (ot = it = null), (se = !1);
}
function Gu(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
var Uv = Yt.ReactCurrentBatchConfig;
function wt(e, t) {
  if (e && e.defaultProps) {
    (t = de({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Jo = xn(null),
  Zo = null,
  cr = null,
  Xu = null;
function Ju() {
  Xu = cr = Zo = null;
}
function Zu(e) {
  var t = Jo.current;
  ue(Jo), (e._currentValue = t);
}
function qa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Sr(e, t) {
  (Zo = e),
    (Xu = cr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function mt(e) {
  var t = e._currentValue;
  if (Xu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cr === null)) {
      if (Zo === null) throw Error(R(308));
      (cr = e), (Zo.dependencies = { lanes: 0, firstContext: e });
    } else cr = cr.next = e;
  return t;
}
var Tn = null;
function qu(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e);
}
function Xd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), qu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Qt(e, r)
  );
}
function Qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var rn = !1;
function bu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Jd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Qt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), qu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Qt(e, n)
  );
}
function Po(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fu(e, n);
  }
}
function Cc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function qo(e, t, n, r) {
  var l = e.updateQueue;
  rn = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== i &&
        (a === null ? (c.firstBaseUpdate = s) : (a.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (c = s = u = null), (a = o);
    do {
      var m = a.lane,
        w = a.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            y = a;
          switch (((m = t), (w = n), y.tag)) {
            case 1:
              if (((x = y.payload), typeof x == "function")) {
                p = x.call(w, p, m);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = y.payload),
                (m = typeof x == "function" ? x.call(w, p, m) : x),
                m == null)
              )
                break e;
              p = de({}, p, m);
              break e;
            case 2:
              rn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [a]) : m.push(a));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((s = c = w), (u = p)) : (c = c.next = w),
          (i |= m);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = p),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Hn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Pc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(R(191, l));
        l.call(r);
      }
    }
}
var Zd = new Xf.Component().refs;
function ba(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var yi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Kn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      l = mn(e),
      o = Bt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = pn(e, o, l)),
      t !== null && (Ct(t, e, l, r), Po(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      l = mn(e),
      o = Bt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = pn(e, o, l)),
      t !== null && (Ct(t, e, l, r), Po(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = He(),
      r = mn(e),
      l = Bt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = pn(e, l, r)),
      t !== null && (Ct(t, e, r, n), Po(t, e, r));
  },
};
function _c(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Tl(n, r) || !Tl(l, o)
      : !0
  );
}
function qd(e, t, n) {
  var r = !1,
    l = yn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = mt(o))
      : ((l = qe(t) ? An : Ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? kr(e, l) : yn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = yi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Rc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && yi.enqueueReplaceState(t, t.state, null);
}
function eu(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Zd), bu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = mt(o))
    : ((o = qe(t) ? An : Ue.current), (l.context = kr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ba(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && yi.enqueueReplaceState(l, l.state, null),
      qo(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Xr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            a === Zd && (a = l.refs = {}),
              i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function po(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Nc(e) {
  var t = e._init;
  return t(e._payload);
}
function bd(e) {
  function t(d, f) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [f]), (d.flags |= 16)) : h.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function l(d, f) {
    return (d = vn(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((d.flags |= 2), f) : h)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, f, h, k) {
    return f === null || f.tag !== 6
      ? ((f = fa(h, d.mode, k)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function u(d, f, h, k) {
    var _ = h.type;
    return _ === nr
      ? c(d, f, h.props.children, k, h.key)
      : f !== null &&
        (f.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === nn &&
            Nc(_) === f.type))
      ? ((k = l(f, h.props)), (k.ref = Xr(d, f, h)), (k.return = d), k)
      : ((k = Do(h.type, h.key, h.props, null, d.mode, k)),
        (k.ref = Xr(d, f, h)),
        (k.return = d),
        k);
  }
  function s(d, f, h, k) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = da(h, d.mode, k)), (f.return = d), f)
      : ((f = l(f, h.children || [])), (f.return = d), f);
  }
  function c(d, f, h, k, _) {
    return f === null || f.tag !== 7
      ? ((f = Mn(h, d.mode, k, _)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function p(d, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = fa("" + f, d.mode, h)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case to:
          return (
            (h = Do(f.type, f.key, f.props, null, d.mode, h)),
            (h.ref = Xr(d, null, f)),
            (h.return = d),
            h
          );
        case tr:
          return (f = da(f, d.mode, h)), (f.return = d), f;
        case nn:
          var k = f._init;
          return p(d, k(f._payload), h);
      }
      if (al(f) || Wr(f))
        return (f = Mn(f, d.mode, h, null)), (f.return = d), f;
      po(d, f);
    }
    return null;
  }
  function m(d, f, h, k) {
    var _ = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return _ !== null ? null : a(d, f, "" + h, k);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case to:
          return h.key === _ ? u(d, f, h, k) : null;
        case tr:
          return h.key === _ ? s(d, f, h, k) : null;
        case nn:
          return (_ = h._init), m(d, f, _(h._payload), k);
      }
      if (al(h) || Wr(h)) return _ !== null ? null : c(d, f, h, k, null);
      po(d, h);
    }
    return null;
  }
  function w(d, f, h, k, _) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (d = d.get(h) || null), a(f, d, "" + k, _);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case to:
          return (d = d.get(k.key === null ? h : k.key) || null), u(f, d, k, _);
        case tr:
          return (d = d.get(k.key === null ? h : k.key) || null), s(f, d, k, _);
        case nn:
          var v = k._init;
          return w(d, f, h, v(k._payload), _);
      }
      if (al(k) || Wr(k)) return (d = d.get(h) || null), c(f, d, k, _, null);
      po(f, k);
    }
    return null;
  }
  function x(d, f, h, k) {
    for (
      var _ = null, v = null, E = f, T = (f = 0), z = null;
      E !== null && T < h.length;
      T++
    ) {
      E.index > T ? ((z = E), (E = null)) : (z = E.sibling);
      var F = m(d, E, h[T], k);
      if (F === null) {
        E === null && (E = z);
        break;
      }
      e && E && F.alternate === null && t(d, E),
        (f = o(F, f, T)),
        v === null ? (_ = F) : (v.sibling = F),
        (v = F),
        (E = z);
    }
    if (T === h.length) return n(d, E), se && _n(d, T), _;
    if (E === null) {
      for (; T < h.length; T++)
        (E = p(d, h[T], k)),
          E !== null &&
            ((f = o(E, f, T)), v === null ? (_ = E) : (v.sibling = E), (v = E));
      return se && _n(d, T), _;
    }
    for (E = r(d, E); T < h.length; T++)
      (z = w(E, d, T, h[T], k)),
        z !== null &&
          (e && z.alternate !== null && E.delete(z.key === null ? T : z.key),
          (f = o(z, f, T)),
          v === null ? (_ = z) : (v.sibling = z),
          (v = z));
    return (
      e &&
        E.forEach(function (X) {
          return t(d, X);
        }),
      se && _n(d, T),
      _
    );
  }
  function y(d, f, h, k) {
    var _ = Wr(h);
    if (typeof _ != "function") throw Error(R(150));
    if (((h = _.call(h)), h == null)) throw Error(R(151));
    for (
      var v = (_ = null), E = f, T = (f = 0), z = null, F = h.next();
      E !== null && !F.done;
      T++, F = h.next()
    ) {
      E.index > T ? ((z = E), (E = null)) : (z = E.sibling);
      var X = m(d, E, F.value, k);
      if (X === null) {
        E === null && (E = z);
        break;
      }
      e && E && X.alternate === null && t(d, E),
        (f = o(X, f, T)),
        v === null ? (_ = X) : (v.sibling = X),
        (v = X),
        (E = z);
    }
    if (F.done) return n(d, E), se && _n(d, T), _;
    if (E === null) {
      for (; !F.done; T++, F = h.next())
        (F = p(d, F.value, k)),
          F !== null &&
            ((f = o(F, f, T)), v === null ? (_ = F) : (v.sibling = F), (v = F));
      return se && _n(d, T), _;
    }
    for (E = r(d, E); !F.done; T++, F = h.next())
      (F = w(E, d, T, F.value, k)),
        F !== null &&
          (e && F.alternate !== null && E.delete(F.key === null ? T : F.key),
          (f = o(F, f, T)),
          v === null ? (_ = F) : (v.sibling = F),
          (v = F));
    return (
      e &&
        E.forEach(function (ge) {
          return t(d, ge);
        }),
      se && _n(d, T),
      _
    );
  }
  function C(d, f, h, k) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === nr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case to:
          e: {
            for (var _ = h.key, v = f; v !== null; ) {
              if (v.key === _) {
                if (((_ = h.type), _ === nr)) {
                  if (v.tag === 7) {
                    n(d, v.sibling),
                      (f = l(v, h.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  v.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === nn &&
                    Nc(_) === v.type)
                ) {
                  n(d, v.sibling),
                    (f = l(v, h.props)),
                    (f.ref = Xr(d, v, h)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, v);
                break;
              } else t(d, v);
              v = v.sibling;
            }
            h.type === nr
              ? ((f = Mn(h.props.children, d.mode, k, h.key)),
                (f.return = d),
                (d = f))
              : ((k = Do(h.type, h.key, h.props, null, d.mode, k)),
                (k.ref = Xr(d, f, h)),
                (k.return = d),
                (d = k));
          }
          return i(d);
        case tr:
          e: {
            for (v = h.key; f !== null; ) {
              if (f.key === v)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, h.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = da(h, d.mode, k)), (f.return = d), (d = f);
          }
          return i(d);
        case nn:
          return (v = h._init), C(d, f, v(h._payload), k);
      }
      if (al(h)) return x(d, f, h, k);
      if (Wr(h)) return y(d, f, h, k);
      po(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, h)), (f.return = d), (d = f))
          : (n(d, f), (f = fa(h, d.mode, k)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return C;
}
var Pr = bd(!0),
  ep = bd(!1),
  Yl = {},
  zt = xn(Yl),
  jl = xn(Yl),
  zl = xn(Yl);
function Ln(e) {
  if (e === Yl) throw Error(R(174));
  return e;
}
function es(e, t) {
  switch ((oe(zl, t), oe(jl, e), oe(zt, Yl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Oa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Oa(t, e));
  }
  ue(zt), oe(zt, t);
}
function _r() {
  ue(zt), ue(jl), ue(zl);
}
function tp(e) {
  Ln(zl.current);
  var t = Ln(zt.current),
    n = Oa(t, e.type);
  t !== n && (oe(jl, e), oe(zt, n));
}
function ts(e) {
  jl.current === e && (ue(zt), ue(jl));
}
var ce = xn(0);
function bo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var oa = [];
function ns() {
  for (var e = 0; e < oa.length; e++)
    oa[e]._workInProgressVersionPrimary = null;
  oa.length = 0;
}
var _o = Yt.ReactCurrentDispatcher,
  ia = Yt.ReactCurrentBatchConfig,
  Bn = 0,
  fe = null,
  Ce = null,
  Te = null,
  ei = !1,
  vl = !1,
  Ml = 0,
  Bv = 0;
function $e() {
  throw Error(R(321));
}
function rs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!_t(e[n], t[n])) return !1;
  return !0;
}
function ls(e, t, n, r, l, o) {
  if (
    ((Bn = o),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_o.current = e === null || e.memoizedState === null ? Qv : Kv),
    (e = n(r, l)),
    vl)
  ) {
    o = 0;
    do {
      if (((vl = !1), (Ml = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (Te = Ce = null),
        (t.updateQueue = null),
        (_o.current = Yv),
        (e = n(r, l));
    } while (vl);
  }
  if (
    ((_o.current = ti),
    (t = Ce !== null && Ce.next !== null),
    (Bn = 0),
    (Te = Ce = fe = null),
    (ei = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function os() {
  var e = Ml !== 0;
  return (Ml = 0), e;
}
function Lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Te === null ? (fe.memoizedState = Te = e) : (Te = Te.next = e), Te;
}
function vt() {
  if (Ce === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = Te === null ? fe.memoizedState : Te.next;
  if (t !== null) (Te = t), (Ce = e);
  else {
    if (e === null) throw Error(R(310));
    (Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      Te === null ? (fe.memoizedState = Te = e) : (Te = Te.next = e);
  }
  return Te;
}
function Il(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function aa(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Ce,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var c = s.lane;
      if ((Bn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = p), (i = r)) : (u = u.next = p),
          (fe.lanes |= c),
          (Hn |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      _t(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (fe.lanes |= o), (Hn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ua(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    _t(o, t.memoizedState) || (Xe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function np() {}
function rp(e, t) {
  var n = fe,
    r = vt(),
    l = t(),
    o = !_t(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Xe = !0)),
    (r = r.queue),
    is(ip.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $l(9, op.bind(null, n, r, l, t), void 0, null),
      De === null)
    )
      throw Error(R(349));
    Bn & 30 || lp(n, t, l);
  }
  return l;
}
function lp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function op(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ap(t) && up(e);
}
function ip(e, t, n) {
  return n(function () {
    ap(t) && up(e);
  });
}
function ap(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_t(e, n);
  } catch {
    return !0;
  }
}
function up(e) {
  var t = Qt(e, 1);
  t !== null && Ct(t, e, 1, -1);
}
function Tc(e) {
  var t = Lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Il,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Wv.bind(null, fe, e)),
    [t.memoizedState, e]
  );
}
function $l(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sp() {
  return vt().memoizedState;
}
function Ro(e, t, n, r) {
  var l = Lt();
  (fe.flags |= e),
    (l.memoizedState = $l(1 | t, n, void 0, r === void 0 ? null : r));
}
function wi(e, t, n, r) {
  var l = vt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ce !== null) {
    var i = Ce.memoizedState;
    if (((o = i.destroy), r !== null && rs(r, i.deps))) {
      l.memoizedState = $l(t, n, o, r);
      return;
    }
  }
  (fe.flags |= e), (l.memoizedState = $l(1 | t, n, o, r));
}
function Lc(e, t) {
  return Ro(8390656, 8, e, t);
}
function is(e, t) {
  return wi(2048, 8, e, t);
}
function cp(e, t) {
  return wi(4, 2, e, t);
}
function fp(e, t) {
  return wi(4, 4, e, t);
}
function dp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function pp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), wi(4, 4, dp.bind(null, t, e), n)
  );
}
function as() {}
function hp(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function mp(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function vp(e, t, n) {
  return Bn & 21
    ? (_t(n, t) || ((n = wd()), (fe.lanes |= n), (Hn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function Hv(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ia.transition;
  ia.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (ia.transition = r);
  }
}
function gp() {
  return vt().memoizedState;
}
function Vv(e, t, n) {
  var r = mn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    yp(e))
  )
    wp(t, n);
  else if (((n = Xd(e, t, n, r)), n !== null)) {
    var l = He();
    Ct(n, e, r, l), Sp(n, t, r);
  }
}
function Wv(e, t, n) {
  var r = mn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yp(e)) wp(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), _t(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), qu(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Xd(e, t, l, r)),
      n !== null && ((l = He()), Ct(n, e, r, l), Sp(n, t, r));
  }
}
function yp(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function wp(e, t) {
  vl = ei = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Sp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fu(e, n);
  }
}
var ti = {
    readContext: mt,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useInsertionEffect: $e,
    useLayoutEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useMutableSource: $e,
    useSyncExternalStore: $e,
    useId: $e,
    unstable_isNewReconciler: !1,
  },
  Qv = {
    readContext: mt,
    useCallback: function (e, t) {
      return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: mt,
    useEffect: Lc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ro(4194308, 4, dp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ro(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ro(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Lt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Lt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Vv.bind(null, fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Tc,
    useDebugValue: as,
    useDeferredValue: function (e) {
      return (Lt().memoizedState = e);
    },
    useTransition: function () {
      var e = Tc(!1),
        t = e[0];
      return (e = Hv.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = fe,
        l = Lt();
      if (se) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), De === null)) throw Error(R(349));
        Bn & 30 || lp(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Lc(ip.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        $l(9, op.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Lt(),
        t = De.identifierPrefix;
      if (se) {
        var n = Ut,
          r = At;
        (n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ml++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Bv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Kv = {
    readContext: mt,
    useCallback: hp,
    useContext: mt,
    useEffect: is,
    useImperativeHandle: pp,
    useInsertionEffect: cp,
    useLayoutEffect: fp,
    useMemo: mp,
    useReducer: aa,
    useRef: sp,
    useState: function () {
      return aa(Il);
    },
    useDebugValue: as,
    useDeferredValue: function (e) {
      var t = vt();
      return vp(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = aa(Il)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: np,
    useSyncExternalStore: rp,
    useId: gp,
    unstable_isNewReconciler: !1,
  },
  Yv = {
    readContext: mt,
    useCallback: hp,
    useContext: mt,
    useEffect: is,
    useImperativeHandle: pp,
    useInsertionEffect: cp,
    useLayoutEffect: fp,
    useMemo: mp,
    useReducer: ua,
    useRef: sp,
    useState: function () {
      return ua(Il);
    },
    useDebugValue: as,
    useDeferredValue: function (e) {
      var t = vt();
      return Ce === null ? (t.memoizedState = e) : vp(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = ua(Il)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: np,
    useSyncExternalStore: rp,
    useId: gp,
    unstable_isNewReconciler: !1,
  };
function Rr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += xm(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function sa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function tu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Gv = typeof WeakMap == "function" ? WeakMap : Map;
function xp(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ri || ((ri = !0), (fu = r)), tu(e, t);
    }),
    n
  );
}
function Ep(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        tu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        tu(e, t),
          typeof r != "function" &&
            (hn === null ? (hn = new Set([this])) : hn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Dc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gv();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ug.bind(null, e, t, n)), t.then(e, e));
}
function Oc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function jc(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Bt(-1, 1)), (t.tag = 2), pn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Xv = Yt.ReactCurrentOwner,
  Xe = !1;
function Be(e, t, n, r) {
  t.child = e === null ? ep(t, null, n, r) : Pr(t, e.child, n, r);
}
function zc(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Sr(t, l),
    (r = ls(e, t, n, r, o, l)),
    (n = os()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Kt(e, t, l))
      : (se && n && Ku(t), (t.flags |= 1), Be(e, t, r, l), t.child)
  );
}
function Mc(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ms(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), kp(e, t, o, r, l))
      : ((e = Do(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Tl), n(i, r) && e.ref === t.ref)
    )
      return Kt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = vn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function kp(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Tl(o, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), Kt(e, t, l);
  }
  return nu(e, t, n, r, l);
}
function Cp(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(dr, lt),
        (lt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(dr, lt),
          (lt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        oe(dr, lt),
        (lt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(dr, lt),
      (lt |= r);
  return Be(e, t, l, n), t.child;
}
function Pp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function nu(e, t, n, r, l) {
  var o = qe(n) ? An : Ue.current;
  return (
    (o = kr(t, o)),
    Sr(t, l),
    (n = ls(e, t, n, r, o, l)),
    (r = os()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Kt(e, t, l))
      : (se && r && Ku(t), (t.flags |= 1), Be(e, t, n, l), t.child)
  );
}
function Ic(e, t, n, r, l) {
  if (qe(n)) {
    var o = !0;
    Yo(t);
  } else o = !1;
  if ((Sr(t, l), t.stateNode === null))
    No(e, t), qd(t, n, r), eu(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = mt(s))
      : ((s = qe(n) ? An : Ue.current), (s = kr(t, s)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && Rc(t, i, r, s)),
      (rn = !1);
    var m = t.memoizedState;
    (i.state = m),
      qo(t, r, i, l),
      (u = t.memoizedState),
      a !== r || m !== u || Ze.current || rn
        ? (typeof c == "function" && (ba(t, n, c, r), (u = t.memoizedState)),
          (a = rn || _c(t, n, a, r, m, u, s))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Jd(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : wt(t.type, a)),
      (i.props = s),
      (p = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = mt(u))
        : ((u = qe(n) ? An : Ue.current), (u = kr(t, u)));
    var w = n.getDerivedStateFromProps;
    (c =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== p || m !== u) && Rc(t, i, r, u)),
      (rn = !1),
      (m = t.memoizedState),
      (i.state = m),
      qo(t, r, i, l);
    var x = t.memoizedState;
    a !== p || m !== x || Ze.current || rn
      ? (typeof w == "function" && (ba(t, n, w, r), (x = t.memoizedState)),
        (s = rn || _c(t, n, s, r, m, x, u) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ru(e, t, n, r, o, l);
}
function ru(e, t, n, r, l, o) {
  Pp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && xc(t, n, !1), Kt(e, t, o);
  (r = t.stateNode), (Xv.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Pr(t, e.child, null, o)), (t.child = Pr(t, null, a, o)))
      : Be(e, t, a, o),
    (t.memoizedState = r.state),
    l && xc(t, n, !0),
    t.child
  );
}
function _p(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Sc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Sc(e, t.context, !1),
    es(e, t.containerInfo);
}
function $c(e, t, n, r, l) {
  return Cr(), Gu(l), (t.flags |= 256), Be(e, t, n, r), t.child;
}
var lu = { dehydrated: null, treeContext: null, retryLane: 0 };
function ou(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rp(e, t, n) {
  var r = t.pendingProps,
    l = ce.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    oe(ce, l & 1),
    e === null)
  )
    return (
      Za(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ei(i, r, 0, null)),
              (e = Mn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ou(n)),
              (t.memoizedState = lu),
              e)
            : us(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Jv(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = vn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = vn(a, o)) : ((o = Mn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ou(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = lu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = vn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function us(e, t) {
  return (
    (t = Ei({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ho(e, t, n, r) {
  return (
    r !== null && Gu(r),
    Pr(t, e.child, null, n),
    (e = us(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Jv(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = sa(Error(R(422)))), ho(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Ei({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Mn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Pr(t, e.child, null, i),
        (t.child.memoizedState = ou(i)),
        (t.memoizedState = lu),
        o);
  if (!(t.mode & 1)) return ho(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(R(419))), (r = sa(o, r, void 0)), ho(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Xe || a)) {
    if (((r = De), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Qt(e, l), Ct(r, e, l, -1));
    }
    return hs(), (r = sa(Error(R(421)))), ho(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = sg.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ot = dn(l.nextSibling)),
      (it = t),
      (se = !0),
      (Et = null),
      e !== null &&
        ((ft[dt++] = At),
        (ft[dt++] = Ut),
        (ft[dt++] = Un),
        (At = e.id),
        (Ut = e.overflow),
        (Un = t)),
      (t = us(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Fc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qa(e.return, t, n);
}
function ca(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Np(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Be(e, t, r.children, n), (r = ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fc(e, n, t);
        else if (e.tag === 19) Fc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && bo(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ca(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && bo(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ca(t, !0, n, null, o);
        break;
      case "together":
        ca(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function No(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Hn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = vn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Zv(e, t, n) {
  switch (t.tag) {
    case 3:
      _p(t), Cr();
      break;
    case 5:
      tp(t);
      break;
    case 1:
      qe(t.type) && Yo(t);
      break;
    case 4:
      es(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      oe(Jo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Rp(e, t, n)
          : (oe(ce, ce.current & 1),
            (e = Kt(e, t, n)),
            e !== null ? e.sibling : null);
      oe(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Np(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        oe(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Cp(e, t, n);
  }
  return Kt(e, t, n);
}
var Tp, iu, Lp, Dp;
Tp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
iu = function () {};
Lp = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ln(zt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Na(e, l)), (r = Na(e, r)), (o = []);
        break;
      case "select":
        (l = de({}, l, { value: void 0 })),
          (r = de({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Da(e, l)), (r = Da(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Qo);
    }
    ja(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (El.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (El.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && ie("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Dp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jr(e, t) {
  if (!se)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function qv(e, t, n) {
  var r = t.pendingProps;
  switch ((Yu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Fe(t), null;
    case 1:
      return qe(t.type) && Ko(), Fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        _r(),
        ue(Ze),
        ue(Ue),
        ns(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (fo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Et !== null && (hu(Et), (Et = null)))),
        iu(e, t),
        Fe(t),
        null
      );
    case 5:
      ts(t);
      var l = Ln(zl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Lp(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Fe(t), null;
        }
        if (((e = Ln(zt.current)), fo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ot] = t), (r[Ol] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < sl.length; l++) ie(sl[l], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie("error", r), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              Ys(r, o), ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ie("invalid", r);
              break;
            case "textarea":
              Xs(r, o), ie("invalid", r);
          }
          ja(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      co(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      co(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : El.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  ie("scroll", r);
            }
          switch (n) {
            case "input":
              no(r), Gs(r, o, !0);
              break;
            case "textarea":
              no(r), Js(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Qo);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ld(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ot] = t),
            (e[Ol] = r),
            Tp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = za(n, r)), n)) {
              case "dialog":
                ie("cancel", e), ie("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < sl.length; l++) ie(sl[l], e);
                l = r;
                break;
              case "source":
                ie("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ie("error", e), ie("load", e), (l = r);
                break;
              case "details":
                ie("toggle", e), (l = r);
                break;
              case "input":
                Ys(e, r), (l = Na(e, r)), ie("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = de({}, r, { value: void 0 })),
                  ie("invalid", e);
                break;
              case "textarea":
                Xs(e, r), (l = Da(e, r)), ie("invalid", e);
                break;
              default:
                l = r;
            }
            ja(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? ad(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && od(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && kl(e, u)
                    : typeof u == "number" && kl(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (El.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && ie("scroll", e)
                      : u != null && Ou(e, o, u, i));
              }
            switch (n) {
              case "input":
                no(e), Gs(e, r, !1);
                break;
              case "textarea":
                no(e), Js(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? vr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      vr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Qo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Fe(t), null;
    case 6:
      if (e && t.stateNode != null) Dp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = Ln(zl.current)), Ln(zt.current), fo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ot] = t),
            (o = r.nodeValue !== n) && ((e = it), e !== null))
          )
            switch (e.tag) {
              case 3:
                co(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  co(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ot] = t),
            (t.stateNode = r);
      }
      return Fe(t), null;
    case 13:
      if (
        (ue(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && ot !== null && t.mode & 1 && !(t.flags & 128))
          Gd(), Cr(), (t.flags |= 98560), (o = !1);
        else if (((o = fo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[Ot] = t;
          } else
            Cr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Fe(t), (o = !1);
        } else Et !== null && (hu(Et), (Et = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? Pe === 0 && (Pe = 3) : hs())),
          t.updateQueue !== null && (t.flags |= 4),
          Fe(t),
          null);
    case 4:
      return (
        _r(), iu(e, t), e === null && Ll(t.stateNode.containerInfo), Fe(t), null
      );
    case 10:
      return Zu(t.type._context), Fe(t), null;
    case 17:
      return qe(t.type) && Ko(), Fe(t), null;
    case 19:
      if ((ue(ce), (o = t.memoizedState), o === null)) return Fe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Jr(o, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = bo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Jr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return oe(ce, (ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            xe() > Nr &&
            ((t.flags |= 128), (r = !0), Jr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = bo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Jr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !se)
            )
              return Fe(t), null;
          } else
            2 * xe() - o.renderingStartTime > Nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Jr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = xe()),
          (t.sibling = null),
          (n = ce.current),
          oe(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (Fe(t), null);
    case 22:
    case 23:
      return (
        ps(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? lt & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function bv(e, t) {
  switch ((Yu(t), t.tag)) {
    case 1:
      return (
        qe(t.type) && Ko(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _r(),
        ue(Ze),
        ue(Ue),
        ns(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ts(t), null;
    case 13:
      if (
        (ue(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        Cr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(ce), null;
    case 4:
      return _r(), null;
    case 10:
      return Zu(t.type._context), null;
    case 22:
    case 23:
      return ps(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var mo = !1,
  Ae = !1,
  eg = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function fr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function au(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Ac = !1;
function tg(e, t) {
  if (((Wa = Ho), (e = Md()), Qu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            c = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              p !== n || (l !== 0 && p.nodeType !== 3) || (a = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (u = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (w = p.firstChild) !== null;

            )
              (m = p), (p = w);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++s === l && (a = i),
                m === o && ++c === r && (u = i),
                (w = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = w;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qa = { focusedElem: e, selectionRange: n }, Ho = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var y = x.memoizedProps,
                    C = x.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : wt(t.type, y),
                      C
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (k) {
          me(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (x = Ac), (Ac = !1), x;
}
function gl(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && au(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Si(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function uu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Op(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Op(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ot], delete t[Ol], delete t[Ga], delete t[$v], delete t[Fv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function jp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function su(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Qo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (su(e, t, n), e = e.sibling; e !== null; ) su(e, t, n), (e = e.sibling);
}
function cu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cu(e, t, n), e = e.sibling; e !== null; ) cu(e, t, n), (e = e.sibling);
}
var je = null,
  St = !1;
function bt(e, t, n) {
  for (n = n.child; n !== null; ) zp(e, t, n), (n = n.sibling);
}
function zp(e, t, n) {
  if (jt && typeof jt.onCommitFiberUnmount == "function")
    try {
      jt.onCommitFiberUnmount(di, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ae || fr(n, t);
    case 6:
      var r = je,
        l = St;
      (je = null),
        bt(e, t, n),
        (je = r),
        (St = l),
        je !== null &&
          (St
            ? ((e = je),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null &&
        (St
          ? ((e = je),
            (n = n.stateNode),
            e.nodeType === 8
              ? ra(e.parentNode, n)
              : e.nodeType === 1 && ra(e, n),
            Rl(e))
          : ra(je, n.stateNode));
      break;
    case 4:
      (r = je),
        (l = St),
        (je = n.stateNode.containerInfo),
        (St = !0),
        bt(e, t, n),
        (je = r),
        (St = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && au(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      bt(e, t, n);
      break;
    case 1:
      if (
        !Ae &&
        (fr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          me(n, t, a);
        }
      bt(e, t, n);
      break;
    case 21:
      bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ae = (r = Ae) || n.memoizedState !== null), bt(e, t, n), (Ae = r))
        : bt(e, t, n);
      break;
    default:
      bt(e, t, n);
  }
}
function Bc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new eg()),
      t.forEach(function (r) {
        var l = cg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function yt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (je = a.stateNode), (St = !1);
              break e;
            case 3:
              (je = a.stateNode.containerInfo), (St = !0);
              break e;
            case 4:
              (je = a.stateNode.containerInfo), (St = !0);
              break e;
          }
          a = a.return;
        }
        if (je === null) throw Error(R(160));
        zp(o, i, l), (je = null), (St = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        me(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Mp(t, e), (t = t.sibling);
}
function Mp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Nt(e), r & 4)) {
        try {
          gl(3, e, e.return), Si(3, e);
        } catch (y) {
          me(e, e.return, y);
        }
        try {
          gl(5, e, e.return);
        } catch (y) {
          me(e, e.return, y);
        }
      }
      break;
    case 1:
      yt(t, e), Nt(e), r & 512 && n !== null && fr(n, n.return);
      break;
    case 5:
      if (
        (yt(t, e),
        Nt(e),
        r & 512 && n !== null && fr(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          kl(l, "");
        } catch (y) {
          me(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && nd(l, o),
              za(a, i);
            var s = za(a, o);
            for (i = 0; i < u.length; i += 2) {
              var c = u[i],
                p = u[i + 1];
              c === "style"
                ? ad(l, p)
                : c === "dangerouslySetInnerHTML"
                ? od(l, p)
                : c === "children"
                ? kl(l, p)
                : Ou(l, c, p, s);
            }
            switch (a) {
              case "input":
                Ta(l, o);
                break;
              case "textarea":
                rd(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? vr(l, !!o.multiple, w, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? vr(l, !!o.multiple, o.defaultValue, !0)
                      : vr(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Ol] = o;
          } catch (y) {
            me(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((yt(t, e), Nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          me(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (yt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Rl(t.containerInfo);
        } catch (y) {
          me(e, e.return, y);
        }
      break;
    case 4:
      yt(t, e), Nt(e);
      break;
    case 13:
      yt(t, e),
        Nt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (fs = xe())),
        r & 4 && Bc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ae = (s = Ae) || c), yt(t, e), (Ae = s)) : yt(t, e),
        Nt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (p = j = c; j !== null; ) {
              switch (((m = j), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  gl(4, m, m.return);
                  break;
                case 1:
                  fr(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (y) {
                      me(r, n, y);
                    }
                  }
                  break;
                case 5:
                  fr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Vc(p);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (j = w)) : Vc(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (l = p.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = p.stateNode),
                      (u = p.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = id("display", i)));
              } catch (y) {
                me(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = s ? "" : p.memoizedProps;
              } catch (y) {
                me(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      yt(t, e), Nt(e), r & 4 && Bc(e);
      break;
    case 21:
      break;
    default:
      yt(t, e), Nt(e);
  }
}
function Nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (kl(l, ""), (r.flags &= -33));
          var o = Uc(e);
          cu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Uc(e);
          su(e, a, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      me(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ng(e, t, n) {
  (j = e), Ip(e);
}
function Ip(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || mo;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Ae;
        a = mo;
        var s = Ae;
        if (((mo = i), (Ae = u) && !s))
          for (j = l; j !== null; )
            (i = j),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Wc(l)
                : u !== null
                ? ((u.return = i), (j = u))
                : Wc(l);
        for (; o !== null; ) (j = o), Ip(o), (o = o.sibling);
        (j = l), (mo = a), (Ae = s);
      }
      Hc(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (j = o)) : Hc(e);
  }
}
function Hc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ae || Si(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ae)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Pc(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Pc(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var p = c.dehydrated;
                    p !== null && Rl(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Ae || (t.flags & 512 && uu(t));
      } catch (m) {
        me(t, t.return, m);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Vc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Wc(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Si(4, t);
          } catch (u) {
            me(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              me(t, l, u);
            }
          }
          var o = t.return;
          try {
            uu(t);
          } catch (u) {
            me(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            uu(t);
          } catch (u) {
            me(t, i, u);
          }
      }
    } catch (u) {
      me(t, t.return, u);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var rg = Math.ceil,
  ni = Yt.ReactCurrentDispatcher,
  ss = Yt.ReactCurrentOwner,
  ht = Yt.ReactCurrentBatchConfig,
  Z = 0,
  De = null,
  ke = null,
  ze = 0,
  lt = 0,
  dr = xn(0),
  Pe = 0,
  Fl = null,
  Hn = 0,
  xi = 0,
  cs = 0,
  yl = null,
  Ge = null,
  fs = 0,
  Nr = 1 / 0,
  It = null,
  ri = !1,
  fu = null,
  hn = null,
  vo = !1,
  un = null,
  li = 0,
  wl = 0,
  du = null,
  To = -1,
  Lo = 0;
function He() {
  return Z & 6 ? xe() : To !== -1 ? To : (To = xe());
}
function mn(e) {
  return e.mode & 1
    ? Z & 2 && ze !== 0
      ? ze & -ze
      : Uv.transition !== null
      ? (Lo === 0 && (Lo = wd()), Lo)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : _d(e.type))),
        e)
    : 1;
}
function Ct(e, t, n, r) {
  if (50 < wl) throw ((wl = 0), (du = null), Error(R(185)));
  Wl(e, n, r),
    (!(Z & 2) || e !== De) &&
      (e === De && (!(Z & 2) && (xi |= n), Pe === 4 && on(e, ze)),
      be(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Nr = xe() + 500), gi && En()));
}
function be(e, t) {
  var n = e.callbackNode;
  Um(e, t);
  var r = Bo(e, e === De ? ze : 0);
  if (r === 0)
    n !== null && bs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bs(n), t === 1))
      e.tag === 0 ? Av(Qc.bind(null, e)) : Qd(Qc.bind(null, e)),
        Mv(function () {
          !(Z & 6) && En();
        }),
        (n = null);
    else {
      switch (Sd(r)) {
        case 1:
          n = $u;
          break;
        case 4:
          n = gd;
          break;
        case 16:
          n = Uo;
          break;
        case 536870912:
          n = yd;
          break;
        default:
          n = Uo;
      }
      n = Wp(n, $p.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function $p(e, t) {
  if (((To = -1), (Lo = 0), Z & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (xr() && e.callbackNode !== n) return null;
  var r = Bo(e, e === De ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = oi(e, r);
  else {
    t = r;
    var l = Z;
    Z |= 2;
    var o = Ap();
    (De !== e || ze !== t) && ((It = null), (Nr = xe() + 500), zn(e, t));
    do
      try {
        ig();
        break;
      } catch (a) {
        Fp(e, a);
      }
    while (!0);
    Ju(),
      (ni.current = o),
      (Z = l),
      ke !== null ? (t = 0) : ((De = null), (ze = 0), (t = Pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Aa(e)), l !== 0 && ((r = l), (t = pu(e, l)))), t === 1)
    )
      throw ((n = Fl), zn(e, 0), on(e, r), be(e, xe()), n);
    if (t === 6) on(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !lg(l) &&
          ((t = oi(e, r)),
          t === 2 && ((o = Aa(e)), o !== 0 && ((r = o), (t = pu(e, o)))),
          t === 1))
      )
        throw ((n = Fl), zn(e, 0), on(e, r), be(e, xe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Rn(e, Ge, It);
          break;
        case 3:
          if (
            (on(e, r), (r & 130023424) === r && ((t = fs + 500 - xe()), 10 < t))
          ) {
            if (Bo(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              He(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ya(Rn.bind(null, e, Ge, It), t);
            break;
          }
          Rn(e, Ge, It);
          break;
        case 4:
          if ((on(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - kt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = xe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * rg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ya(Rn.bind(null, e, Ge, It), r);
            break;
          }
          Rn(e, Ge, It);
          break;
        case 5:
          Rn(e, Ge, It);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return be(e, xe()), e.callbackNode === n ? $p.bind(null, e) : null;
}
function pu(e, t) {
  var n = yl;
  return (
    e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
    (e = oi(e, t)),
    e !== 2 && ((t = Ge), (Ge = n), t !== null && hu(t)),
    e
  );
}
function hu(e) {
  Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
}
function lg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!_t(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function on(e, t) {
  for (
    t &= ~cs,
      t &= ~xi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - kt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qc(e) {
  if (Z & 6) throw Error(R(327));
  xr();
  var t = Bo(e, 0);
  if (!(t & 1)) return be(e, xe()), null;
  var n = oi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Aa(e);
    r !== 0 && ((t = r), (n = pu(e, r)));
  }
  if (n === 1) throw ((n = Fl), zn(e, 0), on(e, t), be(e, xe()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rn(e, Ge, It),
    be(e, xe()),
    null
  );
}
function ds(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Nr = xe() + 500), gi && En());
  }
}
function Vn(e) {
  un !== null && un.tag === 0 && !(Z & 6) && xr();
  var t = Z;
  Z |= 1;
  var n = ht.transition,
    r = ee;
  try {
    if (((ht.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (ht.transition = n), (Z = t), !(Z & 6) && En();
  }
}
function ps() {
  (lt = dr.current), ue(dr);
}
function zn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), zv(n)), ke !== null))
    for (n = ke.return; n !== null; ) {
      var r = n;
      switch ((Yu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ko();
          break;
        case 3:
          _r(), ue(Ze), ue(Ue), ns();
          break;
        case 5:
          ts(r);
          break;
        case 4:
          _r();
          break;
        case 13:
          ue(ce);
          break;
        case 19:
          ue(ce);
          break;
        case 10:
          Zu(r.type._context);
          break;
        case 22:
        case 23:
          ps();
      }
      n = n.return;
    }
  if (
    ((De = e),
    (ke = e = vn(e.current, null)),
    (ze = lt = t),
    (Pe = 0),
    (Fl = null),
    (cs = xi = Hn = 0),
    (Ge = yl = null),
    Tn !== null)
  ) {
    for (t = 0; t < Tn.length; t++)
      if (((n = Tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Tn = null;
  }
  return e;
}
function Fp(e, t) {
  do {
    var n = ke;
    try {
      if ((Ju(), (_o.current = ti), ei)) {
        for (var r = fe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ei = !1;
      }
      if (
        ((Bn = 0),
        (Te = Ce = fe = null),
        (vl = !1),
        (Ml = 0),
        (ss.current = null),
        n === null || n.return === null)
      ) {
        (Pe = 1), (Fl = t), (ke = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = ze),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            c = a,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var w = Oc(i);
          if (w !== null) {
            (w.flags &= -257),
              jc(w, i, a, o, t),
              w.mode & 1 && Dc(o, s, t),
              (t = w),
              (u = s);
            var x = t.updateQueue;
            if (x === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Dc(o, s, t), hs();
              break e;
            }
            u = Error(R(426));
          }
        } else if (se && a.mode & 1) {
          var C = Oc(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              jc(C, i, a, o, t),
              Gu(Rr(u, a));
            break e;
          }
        }
        (o = u = Rr(u, a)),
          Pe !== 4 && (Pe = 2),
          yl === null ? (yl = [o]) : yl.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = xp(o, u, t);
              Cc(o, d);
              break e;
            case 1:
              a = u;
              var f = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (hn === null || !hn.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = Ep(o, a, t);
                Cc(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Bp(n);
    } catch (_) {
      (t = _), ke === n && n !== null && (ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ap() {
  var e = ni.current;
  return (ni.current = ti), e === null ? ti : e;
}
function hs() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    De === null || (!(Hn & 268435455) && !(xi & 268435455)) || on(De, ze);
}
function oi(e, t) {
  var n = Z;
  Z |= 2;
  var r = Ap();
  (De !== e || ze !== t) && ((It = null), zn(e, t));
  do
    try {
      og();
      break;
    } catch (l) {
      Fp(e, l);
    }
  while (!0);
  if ((Ju(), (Z = n), (ni.current = r), ke !== null)) throw Error(R(261));
  return (De = null), (ze = 0), Pe;
}
function og() {
  for (; ke !== null; ) Up(ke);
}
function ig() {
  for (; ke !== null && !Dm(); ) Up(ke);
}
function Up(e) {
  var t = Vp(e.alternate, e, lt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Bp(e) : (ke = t),
    (ss.current = null);
}
function Bp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bv(n, t)), n !== null)) {
        (n.flags &= 32767), (ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pe = 6), (ke = null);
        return;
      }
    } else if (((n = qv(n, t, lt)), n !== null)) {
      ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function Rn(e, t, n) {
  var r = ee,
    l = ht.transition;
  try {
    (ht.transition = null), (ee = 1), ag(e, t, n, r);
  } finally {
    (ht.transition = l), (ee = r);
  }
  return null;
}
function ag(e, t, n, r) {
  do xr();
  while (un !== null);
  if (Z & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Bm(e, o),
    e === De && ((ke = De = null), (ze = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vo ||
      ((vo = !0),
      Wp(Uo, function () {
        return xr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ht.transition), (ht.transition = null);
    var i = ee;
    ee = 1;
    var a = Z;
    (Z |= 4),
      (ss.current = null),
      tg(e, n),
      Mp(n, e),
      Rv(Qa),
      (Ho = !!Wa),
      (Qa = Wa = null),
      (e.current = n),
      ng(n),
      Om(),
      (Z = a),
      (ee = i),
      (ht.transition = o);
  } else e.current = n;
  if (
    (vo && ((vo = !1), (un = e), (li = l)),
    (o = e.pendingLanes),
    o === 0 && (hn = null),
    Mm(n.stateNode),
    be(e, xe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ri) throw ((ri = !1), (e = fu), (fu = null), e);
  return (
    li & 1 && e.tag !== 0 && xr(),
    (o = e.pendingLanes),
    o & 1 ? (e === du ? wl++ : ((wl = 0), (du = e))) : (wl = 0),
    En(),
    null
  );
}
function xr() {
  if (un !== null) {
    var e = Sd(li),
      t = ht.transition,
      n = ee;
    try {
      if (((ht.transition = null), (ee = 16 > e ? 16 : e), un === null))
        var r = !1;
      else {
        if (((e = un), (un = null), (li = 0), Z & 6)) throw Error(R(331));
        var l = Z;
        for (Z |= 4, j = e.current; j !== null; ) {
          var o = j,
            i = o.child;
          if (j.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (j = s; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gl(8, c, o);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (j = p);
                  else
                    for (; j !== null; ) {
                      c = j;
                      var m = c.sibling,
                        w = c.return;
                      if ((Op(c), c === s)) {
                        j = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (j = m);
                        break;
                      }
                      j = w;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var y = x.child;
                if (y !== null) {
                  x.child = null;
                  do {
                    var C = y.sibling;
                    (y.sibling = null), (y = C);
                  } while (y !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (j = i);
          else
            e: for (; j !== null; ) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    gl(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (j = d);
                break e;
              }
              j = o.return;
            }
        }
        var f = e.current;
        for (j = f; j !== null; ) {
          i = j;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (j = h);
          else
            e: for (i = f; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Si(9, a);
                  }
                } catch (_) {
                  me(a, a.return, _);
                }
              if (a === i) {
                j = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (j = k);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((Z = l), En(), jt && typeof jt.onPostCommitFiberRoot == "function")
        )
          try {
            jt.onPostCommitFiberRoot(di, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (ht.transition = t);
    }
  }
  return !1;
}
function Kc(e, t, n) {
  (t = Rr(n, t)),
    (t = xp(e, t, 1)),
    (e = pn(e, t, 1)),
    (t = He()),
    e !== null && (Wl(e, 1, t), be(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) Kc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (hn === null || !hn.has(r)))
        ) {
          (e = Rr(n, e)),
            (e = Ep(t, e, 1)),
            (t = pn(t, e, 1)),
            (e = He()),
            t !== null && (Wl(t, 1, e), be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ug(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = He()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      (ze & n) === n &&
      (Pe === 4 || (Pe === 3 && (ze & 130023424) === ze && 500 > xe() - fs)
        ? zn(e, 0)
        : (cs |= n)),
    be(e, t);
}
function Hp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = oo), (oo <<= 1), !(oo & 130023424) && (oo = 4194304))
      : (t = 1));
  var n = He();
  (e = Qt(e, t)), e !== null && (Wl(e, t, n), be(e, n));
}
function sg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Hp(e, n);
}
function cg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Hp(e, n);
}
var Vp;
Vp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ze.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), Zv(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), se && t.flags & 1048576 && Kd(t, Xo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      No(e, t), (e = t.pendingProps);
      var l = kr(t, Ue.current);
      Sr(t, n), (l = ls(null, t, r, e, l, n));
      var o = os();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((o = !0), Yo(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            bu(t),
            (l.updater = yi),
            (t.stateNode = l),
            (l._reactInternals = t),
            eu(t, r, e, n),
            (t = ru(null, t, r, !0, o, n)))
          : ((t.tag = 0), se && o && Ku(t), Be(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (No(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = dg(r)),
          (e = wt(r, e)),
          l)
        ) {
          case 0:
            t = nu(null, t, r, e, n);
            break e;
          case 1:
            t = Ic(null, t, r, e, n);
            break e;
          case 11:
            t = zc(null, t, r, e, n);
            break e;
          case 14:
            t = Mc(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : wt(r, l)),
        nu(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : wt(r, l)),
        Ic(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((_p(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Jd(e, t),
          qo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Rr(Error(R(423)), t)), (t = $c(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Rr(Error(R(424)), t)), (t = $c(e, t, r, n, l));
            break e;
          } else
            for (
              ot = dn(t.stateNode.containerInfo.firstChild),
                it = t,
                se = !0,
                Et = null,
                n = ep(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Cr(), r === l)) {
            t = Kt(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        tp(t),
        e === null && Za(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ka(r, l) ? (i = null) : o !== null && Ka(r, o) && (t.flags |= 32),
        Pp(e, t),
        Be(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Za(t), null;
    case 13:
      return Rp(e, t, n);
    case 4:
      return (
        es(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Pr(t, null, r, n)) : Be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : wt(r, l)),
        zc(e, t, r, l, n)
      );
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          oe(Jo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (_t(o.value, i)) {
            if (o.children === l.children && !Ze.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Bt(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      qa(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(R(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  qa(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Be(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Sr(t, n),
        (l = mt(l)),
        (r = r(l)),
        (t.flags |= 1),
        Be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = wt(r, t.pendingProps)),
        (l = wt(r.type, l)),
        Mc(e, t, r, l, n)
      );
    case 15:
      return kp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : wt(r, l)),
        No(e, t),
        (t.tag = 1),
        qe(r) ? ((e = !0), Yo(t)) : (e = !1),
        Sr(t, n),
        qd(t, r, l),
        eu(t, r, l, n),
        ru(null, t, r, !0, e, n)
      );
    case 19:
      return Np(e, t, n);
    case 22:
      return Cp(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Wp(e, t) {
  return vd(e, t);
}
function fg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function pt(e, t, n, r) {
  return new fg(e, t, n, r);
}
function ms(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function dg(e) {
  if (typeof e == "function") return ms(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === zu)) return 11;
    if (e === Mu) return 14;
  }
  return 2;
}
function vn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = pt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Do(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ms(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case nr:
        return Mn(n.children, l, o, t);
      case ju:
        (i = 8), (l |= 8);
        break;
      case Ca:
        return (
          (e = pt(12, n, t, l | 2)), (e.elementType = Ca), (e.lanes = o), e
        );
      case Pa:
        return (e = pt(13, n, t, l)), (e.elementType = Pa), (e.lanes = o), e;
      case _a:
        return (e = pt(19, n, t, l)), (e.elementType = _a), (e.lanes = o), e;
      case bf:
        return Ei(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Zf:
              i = 10;
              break e;
            case qf:
              i = 9;
              break e;
            case zu:
              i = 11;
              break e;
            case Mu:
              i = 14;
              break e;
            case nn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = pt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Mn(e, t, n, r) {
  return (e = pt(7, e, r, t)), (e.lanes = n), e;
}
function Ei(e, t, n, r) {
  return (
    (e = pt(22, e, r, t)),
    (e.elementType = bf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fa(e, t, n) {
  return (e = pt(6, e, null, t)), (e.lanes = n), e;
}
function da(e, t, n) {
  return (
    (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pg(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ki(0)),
    (this.expirationTimes = Ki(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ki(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function vs(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new pg(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = pt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    bu(o),
    e
  );
}
function hg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: tr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qp(e) {
  if (!e) return yn;
  e = e._reactInternals;
  e: {
    if (Kn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return Wd(e, n, t);
  }
  return t;
}
function Kp(e, t, n, r, l, o, i, a, u) {
  return (
    (e = vs(n, r, !0, e, l, o, i, a, u)),
    (e.context = Qp(null)),
    (n = e.current),
    (r = He()),
    (l = mn(n)),
    (o = Bt(r, l)),
    (o.callback = t ?? null),
    pn(n, o, l),
    (e.current.lanes = l),
    Wl(e, l, r),
    be(e, r),
    e
  );
}
function ki(e, t, n, r) {
  var l = t.current,
    o = He(),
    i = mn(l);
  return (
    (n = Qp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Bt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pn(l, t, i)),
    e !== null && (Ct(e, l, i, o), Po(e, l, i)),
    i
  );
}
function ii(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function gs(e, t) {
  Yc(e, t), (e = e.alternate) && Yc(e, t);
}
function mg() {
  return null;
}
var Yp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ys(e) {
  this._internalRoot = e;
}
Ci.prototype.render = ys.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  ki(e, t, null, null);
};
Ci.prototype.unmount = ys.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vn(function () {
      ki(null, e, null, null);
    }),
      (t[Wt] = null);
  }
};
function Ci(e) {
  this._internalRoot = e;
}
Ci.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = kd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++);
    ln.splice(n, 0, e), n === 0 && Pd(e);
  }
};
function ws(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Gc() {}
function vg(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = ii(i);
        o.call(s);
      };
    }
    var i = Kp(t, r, e, 0, null, !1, !1, "", Gc);
    return (
      (e._reactRootContainer = i),
      (e[Wt] = i.current),
      Ll(e.nodeType === 8 ? e.parentNode : e),
      Vn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = ii(u);
      a.call(s);
    };
  }
  var u = vs(e, 0, !1, null, null, !1, !1, "", Gc);
  return (
    (e._reactRootContainer = u),
    (e[Wt] = u.current),
    Ll(e.nodeType === 8 ? e.parentNode : e),
    Vn(function () {
      ki(t, u, n, r);
    }),
    u
  );
}
function _i(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = ii(i);
        a.call(u);
      };
    }
    ki(t, i, e, l);
  } else i = vg(n, t, e, l, r);
  return ii(i);
}
xd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ul(t.pendingLanes);
        n !== 0 &&
          (Fu(t, n | 1), be(t, xe()), !(Z & 6) && ((Nr = xe() + 500), En()));
      }
      break;
    case 13:
      Vn(function () {
        var r = Qt(e, 1);
        if (r !== null) {
          var l = He();
          Ct(r, e, 1, l);
        }
      }),
        gs(e, 1);
  }
};
Au = function (e) {
  if (e.tag === 13) {
    var t = Qt(e, 134217728);
    if (t !== null) {
      var n = He();
      Ct(t, e, 134217728, n);
    }
    gs(e, 134217728);
  }
};
Ed = function (e) {
  if (e.tag === 13) {
    var t = mn(e),
      n = Qt(e, t);
    if (n !== null) {
      var r = He();
      Ct(n, e, t, r);
    }
    gs(e, t);
  }
};
kd = function () {
  return ee;
};
Cd = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
Ia = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ta(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = vi(r);
            if (!l) throw Error(R(90));
            td(r), Ta(r, l);
          }
        }
      }
      break;
    case "textarea":
      rd(e, n);
      break;
    case "select":
      (t = n.value), t != null && vr(e, !!n.multiple, t, !1);
  }
};
cd = ds;
fd = Vn;
var gg = { usingClientEntryPoint: !1, Events: [Kl, ir, vi, ud, sd, ds] },
  Zr = {
    findFiberByHostInstance: Nn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  yg = {
    bundleType: Zr.bundleType,
    version: Zr.version,
    rendererPackageName: Zr.rendererPackageName,
    rendererConfig: Zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Zr.findFiberByHostInstance || mg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!go.isDisabled && go.supportsFiber)
    try {
      (di = go.inject(yg)), (jt = go);
    } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gg;
ut.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ws(t)) throw Error(R(200));
  return hg(e, t, null, n);
};
ut.createRoot = function (e, t) {
  if (!ws(e)) throw Error(R(299));
  var n = !1,
    r = "",
    l = Yp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = vs(e, 1, !1, null, null, n, !1, r, l)),
    (e[Wt] = t.current),
    Ll(e.nodeType === 8 ? e.parentNode : e),
    new ys(t)
  );
};
ut.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = hd(t)), (e = e === null ? null : e.stateNode), e;
};
ut.flushSync = function (e) {
  return Vn(e);
};
ut.hydrate = function (e, t, n) {
  if (!Pi(t)) throw Error(R(200));
  return _i(null, e, t, !0, n);
};
ut.hydrateRoot = function (e, t, n) {
  if (!ws(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Yp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Kp(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Wt] = t.current),
    Ll(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ci(t);
};
ut.render = function (e, t, n) {
  if (!Pi(t)) throw Error(R(200));
  return _i(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function (e) {
  if (!Pi(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Vn(function () {
        _i(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Wt] = null);
        });
      }),
      !0)
    : !1;
};
ut.unstable_batchedUpdates = ds;
ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pi(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return _i(e, t, n, !1, r);
};
ut.version = "18.2.0-next-9e3b772b8-20220608";
function Gp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gp);
    } catch (e) {
      console.error(e);
    }
}
Gp(), (Kf.exports = ut);
var Ss = Kf.exports;
const wg = Mf(Ss),
  Sg = zf({ __proto__: null, default: wg }, [Ss]);
var Xc = Ss;
(Ea.createRoot = Xc.createRoot), (Ea.hydrateRoot = Xc.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ve() {
  return (
    (ve = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ve.apply(this, arguments)
  );
}
var Se;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Se || (Se = {}));
const Jc = "popstate";
function xg(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return Al(
      "",
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Wn(l);
  }
  return kg(t, n, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Tr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Eg() {
  return Math.random().toString(36).substr(2, 8);
}
function Zc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Al(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ve(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Gt(t) : t,
      { state: n, key: (t && t.key) || r || Eg() }
    )
  );
}
function Wn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Gt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function kg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = Se.Pop,
    u = null,
    s = c();
  s == null && ((s = 0), i.replaceState(ve({}, i.state, { idx: s }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    a = Se.Pop;
    let C = c(),
      d = C == null ? null : C - s;
    (s = C), u && u({ action: a, location: y.location, delta: d });
  }
  function m(C, d) {
    a = Se.Push;
    let f = Al(y.location, C, d);
    n && n(f, C), (s = c() + 1);
    let h = Zc(f, s),
      k = y.createHref(f);
    try {
      i.pushState(h, "", k);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
      l.location.assign(k);
    }
    o && u && u({ action: a, location: y.location, delta: 1 });
  }
  function w(C, d) {
    a = Se.Replace;
    let f = Al(y.location, C, d);
    n && n(f, C), (s = c());
    let h = Zc(f, s),
      k = y.createHref(f);
    i.replaceState(h, "", k),
      o && u && u({ action: a, location: y.location, delta: 0 });
  }
  function x(C) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof C == "string" ? C : Wn(C);
    return (
      (f = f.replace(/ $/, "%20")),
      K(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, d)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(C) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Jc, p),
        (u = C),
        () => {
          l.removeEventListener(Jc, p), (u = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: x,
    encodeLocation(C) {
      let d = x(C);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: w,
    go(C) {
      return i.go(C);
    },
  };
  return y;
}
var he;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(he || (he = {}));
const Cg = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Pg(e) {
  return e.index === !0;
}
function mu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        a = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (K(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        K(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Pg(l))
      ) {
        let u = ve({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ve({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = mu(l.children, t, i, r)), u
        );
      }
    })
  );
}
function pr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Gt(t) : t,
    l = Fr(r.pathname || "/", n);
  if (l == null) return null;
  let o = Xp(e);
  Rg(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) {
    let u = Ag(l);
    i = Ig(o[a], u);
  }
  return i;
}
function _g(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Xp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (K(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Ht([r, u.relativePath]),
      c = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (K(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      Xp(o.children, t, c, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: zg(s, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let u of Jp(o.path)) l(o, i, u);
    }),
    t
  );
}
function Jp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Jp(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Rg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Mg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Ng = /^:[\w-]+$/,
  Tg = 3,
  Lg = 2,
  Dg = 1,
  Og = 10,
  jg = -2,
  qc = (e) => e === "*";
function zg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(qc) && (r += jg),
    t && (r += Lg),
    n
      .filter((l) => !qc(l))
      .reduce((l, o) => l + (Ng.test(o) ? Tg : o === "" ? Dg : Og), r)
  );
}
function Mg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ig(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      c = $g(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let p = a.route;
    o.push({
      params: r,
      pathname: Ht([l, c.pathname]),
      pathnameBase: Hg(Ht([l, c.pathnameBase])),
      route: p,
    }),
      c.pathnameBase !== "/" && (l = Ht([l, c.pathnameBase]));
  }
  return o;
}
function $g(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Fg(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, c, p) => {
      let { paramName: m, isOptional: w } = c;
      if (m === "*") {
        let y = a[p] || "";
        i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[p];
      return (
        w && !x ? (s[m] = void 0) : (s[m] = (x || "").replace(/%2F/g, "/")), s
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Fg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Tr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Ag(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Tr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Fr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Ug(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Gt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Bg(n, t)) : t,
    search: Vg(r),
    hash: Wg(l),
  };
}
function Bg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function pa(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Zp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function xs(e, t) {
  let n = Zp(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Es(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Gt(e))
    : ((l = ve({}, e)),
      K(
        !l.pathname || !l.pathname.includes("?"),
        pa("?", "pathname", "search", l)
      ),
      K(
        !l.pathname || !l.pathname.includes("#"),
        pa("#", "pathname", "hash", l)
      ),
      K(!l.search || !l.search.includes("#"), pa("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let p = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      l.pathname = m.join("/");
    }
    a = p >= 0 ? t[p] : "/";
  }
  let u = Ug(l, a),
    s = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u;
}
const Ht = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Hg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Vg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Wg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class ks {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function qp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const bp = ["post", "put", "patch", "delete"],
  Qg = new Set(bp),
  Kg = ["get", ...bp],
  Yg = new Set(Kg),
  Gg = new Set([301, 302, 303, 307, 308]),
  Xg = new Set([307, 308]),
  ha = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Jg = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  qr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  eh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Zg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  th = "remix-router-transitions";
function qg(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  K(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    l = (S) => ({ hasErrorBoundary: g(S) });
  } else l = Zg;
  let o = {},
    i = mu(e.routes, l, void 0, o),
    a,
    u = e.basename || "/",
    s = ve(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    c = null,
    p = new Set(),
    m = null,
    w = null,
    x = null,
    y = e.hydrationData != null,
    C = pr(i, e.history.location, u),
    d = null;
  if (C == null) {
    let g = ct(404, { pathname: e.history.location.pathname }),
      { matches: S, route: P } = af(i);
    (C = S), (d = { [P.id]: g });
  }
  let f,
    h = C.some((g) => g.route.lazy),
    k = C.some((g) => g.route.loader);
  if (h) f = !1;
  else if (!k) f = !0;
  else if (s.v7_partialHydration) {
    let g = e.hydrationData ? e.hydrationData.loaderData : null,
      S = e.hydrationData ? e.hydrationData.errors : null,
      P = (L) =>
        L.route.loader
          ? L.route.loader.hydrate === !0
            ? !1
            : (g && g[L.route.id] !== void 0) || (S && S[L.route.id] !== void 0)
          : !0;
    if (S) {
      let L = C.findIndex((M) => S[M.route.id] !== void 0);
      f = C.slice(0, L + 1).every(P);
    } else f = C.every(P);
  } else f = e.hydrationData != null;
  let _,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: C,
      initialized: f,
      navigation: ha,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    E = Se.Pop,
    T = !1,
    z,
    F = !1,
    X = new Map(),
    ge = null,
    pe = !1,
    Qe = !1,
    Xt = [],
    Rt = [],
    te = new Map(),
    D = 0,
    I = -1,
    A = new Map(),
    Q = new Set(),
    J = new Map(),
    et = new Map(),
    ye = new Set(),
    Ie = new Map(),
    we = new Map(),
    tt = !1;
  function kn() {
    if (
      ((c = e.history.listen((g) => {
        let { action: S, location: P, delta: L } = g;
        if (tt) {
          tt = !1;
          return;
        }
        Tr(
          we.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let M = Fs({
          currentLocation: v.location,
          nextLocation: P,
          historyAction: S,
        });
        if (M && L != null) {
          (tt = !0),
            e.history.go(L * -1),
            Zl(M, {
              state: "blocked",
              location: P,
              proceed() {
                Zl(M, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: P,
                }),
                  e.history.go(L);
              },
              reset() {
                let W = new Map(v.blockers);
                W.set(M, qr), _e({ blockers: W });
              },
            });
          return;
        }
        return Cn(S, P);
      })),
      n)
    ) {
      s0(t, X);
      let g = () => c0(t, X);
      t.addEventListener("pagehide", g),
        (ge = () => t.removeEventListener("pagehide", g));
    }
    return v.initialized || Cn(Se.Pop, v.location, { initialHydration: !0 }), _;
  }
  function Mt() {
    c && c(),
      ge && ge(),
      p.clear(),
      z && z.abort(),
      v.fetchers.forEach((g, S) => Jl(S)),
      v.blockers.forEach((g, S) => $s(S));
  }
  function Ur(g) {
    return p.add(g), () => p.delete(g);
  }
  function _e(g, S) {
    S === void 0 && (S = {}), (v = ve({}, v, g));
    let P = [],
      L = [];
    s.v7_fetcherPersist &&
      v.fetchers.forEach((M, W) => {
        M.state === "idle" && (ye.has(W) ? L.push(W) : P.push(W));
      }),
      [...p].forEach((M) =>
        M(v, {
          deletedFetchers: L,
          unstable_viewTransitionOpts: S.viewTransitionOpts,
          unstable_flushSync: S.flushSync === !0,
        })
      ),
      s.v7_fetcherPersist &&
        (P.forEach((M) => v.fetchers.delete(M)), L.forEach((M) => Jl(M)));
  }
  function Ke(g, S, P) {
    var L, M;
    let { flushSync: W } = P === void 0 ? {} : P,
      B =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        xt(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((L = g.state) == null ? void 0 : L._isRedirect) !== !0,
      U;
    S.actionData
      ? Object.keys(S.actionData).length > 0
        ? (U = S.actionData)
        : (U = null)
      : B
      ? (U = v.actionData)
      : (U = null);
    let $ = S.loaderData
        ? of(v.loaderData, S.loaderData, S.matches || [], S.errors)
        : v.loaderData,
      G = v.blockers;
    G.size > 0 && ((G = new Map(G)), G.forEach((le, Oe) => G.set(Oe, qr)));
    let Re =
      T === !0 ||
      (v.navigation.formMethod != null &&
        xt(v.navigation.formMethod) &&
        ((M = g.state) == null ? void 0 : M._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      pe ||
        E === Se.Pop ||
        (E === Se.Push
          ? e.history.push(g, g.state)
          : E === Se.Replace && e.history.replace(g, g.state));
    let H;
    if (E === Se.Pop) {
      let le = X.get(v.location.pathname);
      le && le.has(g.pathname)
        ? (H = { currentLocation: v.location, nextLocation: g })
        : X.has(g.pathname) &&
          (H = { currentLocation: g, nextLocation: v.location });
    } else if (F) {
      let le = X.get(v.location.pathname);
      le
        ? le.add(g.pathname)
        : ((le = new Set([g.pathname])), X.set(v.location.pathname, le)),
        (H = { currentLocation: v.location, nextLocation: g });
    }
    _e(
      ve({}, S, {
        actionData: U,
        loaderData: $,
        historyAction: E,
        location: g,
        initialized: !0,
        navigation: ha,
        revalidation: "idle",
        restoreScrollPosition: Us(g, S.matches || v.matches),
        preventScrollReset: Re,
        blockers: G,
      }),
      { viewTransitionOpts: H, flushSync: W === !0 }
    ),
      (E = Se.Pop),
      (T = !1),
      (F = !1),
      (pe = !1),
      (Qe = !1),
      (Xt = []),
      (Rt = []);
  }
  async function Ds(g, S) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let P = vu(
        v.location,
        v.matches,
        u,
        s.v7_prependBasename,
        g,
        s.v7_relativeSplatPath,
        S == null ? void 0 : S.fromRouteId,
        S == null ? void 0 : S.relative
      ),
      {
        path: L,
        submission: M,
        error: W,
      } = bc(s.v7_normalizeFormMethod, !1, P, S),
      B = v.location,
      U = Al(v.location, L, S && S.state);
    U = ve({}, U, e.history.encodeLocation(U));
    let $ = S && S.replace != null ? S.replace : void 0,
      G = Se.Push;
    $ === !0
      ? (G = Se.Replace)
      : $ === !1 ||
        (M != null &&
          xt(M.formMethod) &&
          M.formAction === v.location.pathname + v.location.search &&
          (G = Se.Replace));
    let Re =
        S && "preventScrollReset" in S ? S.preventScrollReset === !0 : void 0,
      H = (S && S.unstable_flushSync) === !0,
      le = Fs({ currentLocation: B, nextLocation: U, historyAction: G });
    if (le) {
      Zl(le, {
        state: "blocked",
        location: U,
        proceed() {
          Zl(le, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: U,
          }),
            Ds(g, S);
        },
        reset() {
          let Oe = new Map(v.blockers);
          Oe.set(le, qr), _e({ blockers: Oe });
        },
      });
      return;
    }
    return await Cn(G, U, {
      submission: M,
      pendingError: W,
      preventScrollReset: Re,
      replace: S && S.replace,
      enableViewTransition: S && S.unstable_viewTransition,
      flushSync: H,
    });
  }
  function Ih() {
    if (
      (Ii(),
      _e({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        Cn(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Cn(E || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function Cn(g, S, P) {
    z && z.abort(),
      (z = null),
      (E = g),
      (pe = (P && P.startUninterruptedRevalidation) === !0),
      Qh(v.location, v.matches),
      (T = (P && P.preventScrollReset) === !0),
      (F = (P && P.enableViewTransition) === !0);
    let L = a || i,
      M = P && P.overrideNavigation,
      W = pr(L, S, u),
      B = (P && P.flushSync) === !0;
    if (!W) {
      let Oe = ct(404, { pathname: S.pathname }),
        { matches: nt, route: Ne } = af(L);
      $i(),
        Ke(
          S,
          { matches: nt, loaderData: {}, errors: { [Ne.id]: Oe } },
          { flushSync: B }
        );
      return;
    }
    if (
      v.initialized &&
      !Qe &&
      r0(v.location, S) &&
      !(P && P.submission && xt(P.submission.formMethod))
    ) {
      Ke(S, { matches: W }, { flushSync: B });
      return;
    }
    z = new AbortController();
    let U = el(e.history, S, z.signal, P && P.submission),
      $,
      G;
    if (P && P.pendingError) G = { [Sl(W).route.id]: P.pendingError };
    else if (P && P.submission && xt(P.submission.formMethod)) {
      let Oe = await $h(U, S, P.submission, W, {
        replace: P.replace,
        flushSync: B,
      });
      if (Oe.shortCircuited) return;
      ($ = Oe.pendingActionData),
        (G = Oe.pendingActionError),
        (M = ma(S, P.submission)),
        (B = !1),
        (U = new Request(U.url, { signal: U.signal }));
    }
    let {
      shortCircuited: Re,
      loaderData: H,
      errors: le,
    } = await Fh(
      U,
      S,
      W,
      M,
      P && P.submission,
      P && P.fetcherSubmission,
      P && P.replace,
      P && P.initialHydration === !0,
      B,
      $,
      G
    );
    Re ||
      ((z = null),
      Ke(
        S,
        ve({ matches: W }, $ ? { actionData: $ } : {}, {
          loaderData: H,
          errors: le,
        })
      ));
  }
  async function $h(g, S, P, L, M) {
    M === void 0 && (M = {}), Ii();
    let W = a0(S, P);
    _e({ navigation: W }, { flushSync: M.flushSync === !0 });
    let B,
      U = yu(L, S);
    if (!U.route.action && !U.route.lazy)
      B = {
        type: he.error,
        error: ct(405, {
          method: g.method,
          pathname: S.pathname,
          routeId: U.route.id,
        }),
      };
    else if (
      ((B = await br("action", g, U, L, o, l, u, s.v7_relativeSplatPath)),
      g.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (On(B)) {
      let $;
      return (
        M && M.replace != null
          ? ($ = M.replace)
          : ($ = B.location === v.location.pathname + v.location.search),
        await Br(v, B, { submission: P, replace: $ }),
        { shortCircuited: !0 }
      );
    }
    if (hr(B)) {
      let $ = Sl(L, U.route.id);
      return (
        (M && M.replace) !== !0 && (E = Se.Push),
        { pendingActionData: {}, pendingActionError: { [$.route.id]: B.error } }
      );
    }
    if (Dn(B)) throw ct(400, { type: "defer-action" });
    return { pendingActionData: { [U.route.id]: B.data } };
  }
  async function Fh(g, S, P, L, M, W, B, U, $, G, Re) {
    let H = L || ma(S, M),
      le = M || W || cf(H),
      Oe = a || i,
      [nt, Ne] = ef(
        e.history,
        v,
        P,
        le,
        S,
        s.v7_partialHydration && U === !0,
        Qe,
        Xt,
        Rt,
        ye,
        J,
        Q,
        Oe,
        u,
        G,
        Re
      );
    if (
      ($i(
        (q) =>
          !(P && P.some((ne) => ne.route.id === q)) ||
          (nt && nt.some((ne) => ne.route.id === q))
      ),
      (I = ++D),
      nt.length === 0 && Ne.length === 0)
    ) {
      let q = Ms();
      return (
        Ke(
          S,
          ve(
            { matches: P, loaderData: {}, errors: Re || null },
            G ? { actionData: G } : {},
            q ? { fetchers: new Map(v.fetchers) } : {}
          ),
          { flushSync: $ }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!pe && (!s.v7_partialHydration || !U)) {
      Ne.forEach((ne) => {
        let Ye = v.fetchers.get(ne.key),
          bl = tl(void 0, Ye ? Ye.data : void 0);
        v.fetchers.set(ne.key, bl);
      });
      let q = G || v.actionData;
      _e(
        ve(
          { navigation: H },
          q
            ? Object.keys(q).length === 0
              ? { actionData: null }
              : { actionData: q }
            : {},
          Ne.length > 0 ? { fetchers: new Map(v.fetchers) } : {}
        ),
        { flushSync: $ }
      );
    }
    Ne.forEach((q) => {
      te.has(q.key) && Zt(q.key), q.controller && te.set(q.key, q.controller);
    });
    let Xn = () => Ne.forEach((q) => Zt(q.key));
    z && z.signal.addEventListener("abort", Xn);
    let {
      results: Fi,
      loaderResults: Jn,
      fetcherResults: qt,
    } = await Os(v.matches, P, nt, Ne, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    z && z.signal.removeEventListener("abort", Xn),
      Ne.forEach((q) => te.delete(q.key));
    let Pn = uf(Fi);
    if (Pn) {
      if (Pn.idx >= nt.length) {
        let q = Ne[Pn.idx - nt.length].key;
        Q.add(q);
      }
      return await Br(v, Pn.result, { replace: B }), { shortCircuited: !0 };
    }
    let { loaderData: Ai, errors: Vr } = lf(v, P, nt, Jn, Re, Ne, qt, Ie);
    Ie.forEach((q, ne) => {
      q.subscribe((Ye) => {
        (Ye || q.done) && Ie.delete(ne);
      });
    }),
      s.v7_partialHydration &&
        U &&
        v.errors &&
        Object.entries(v.errors)
          .filter((q) => {
            let [ne] = q;
            return !nt.some((Ye) => Ye.route.id === ne);
          })
          .forEach((q) => {
            let [ne, Ye] = q;
            Vr = Object.assign(Vr || {}, { [ne]: Ye });
          });
    let Ui = Ms(),
      Zn = Is(I),
      ql = Ui || Zn || Ne.length > 0;
    return ve(
      { loaderData: Ai, errors: Vr },
      ql ? { fetchers: new Map(v.fetchers) } : {}
    );
  }
  function Ah(g, S, P, L) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    te.has(g) && Zt(g);
    let M = (L && L.unstable_flushSync) === !0,
      W = a || i,
      B = vu(
        v.location,
        v.matches,
        u,
        s.v7_prependBasename,
        P,
        s.v7_relativeSplatPath,
        S,
        L == null ? void 0 : L.relative
      ),
      U = pr(W, B, u);
    if (!U) {
      Hr(g, S, ct(404, { pathname: B }), { flushSync: M });
      return;
    }
    let {
      path: $,
      submission: G,
      error: Re,
    } = bc(s.v7_normalizeFormMethod, !0, B, L);
    if (Re) {
      Hr(g, S, Re, { flushSync: M });
      return;
    }
    let H = yu(U, $);
    if (((T = (L && L.preventScrollReset) === !0), G && xt(G.formMethod))) {
      Uh(g, S, $, H, U, M, G);
      return;
    }
    J.set(g, { routeId: S, path: $ }), Bh(g, S, $, H, U, M, G);
  }
  async function Uh(g, S, P, L, M, W, B) {
    if ((Ii(), J.delete(g), !L.route.action && !L.route.lazy)) {
      let ne = ct(405, { method: B.formMethod, pathname: P, routeId: S });
      Hr(g, S, ne, { flushSync: W });
      return;
    }
    let U = v.fetchers.get(g);
    Jt(g, u0(B, U), { flushSync: W });
    let $ = new AbortController(),
      G = el(e.history, P, $.signal, B);
    te.set(g, $);
    let Re = D,
      H = await br("action", G, L, M, o, l, u, s.v7_relativeSplatPath);
    if (G.signal.aborted) {
      te.get(g) === $ && te.delete(g);
      return;
    }
    if (s.v7_fetcherPersist && ye.has(g)) {
      if (On(H) || hr(H)) {
        Jt(g, en(void 0));
        return;
      }
    } else {
      if (On(H))
        if ((te.delete(g), I > Re)) {
          Jt(g, en(void 0));
          return;
        } else
          return Q.add(g), Jt(g, tl(B)), Br(v, H, { fetcherSubmission: B });
      if (hr(H)) {
        Hr(g, S, H.error);
        return;
      }
    }
    if (Dn(H)) throw ct(400, { type: "defer-action" });
    let le = v.navigation.location || v.location,
      Oe = el(e.history, le, $.signal),
      nt = a || i,
      Ne =
        v.navigation.state !== "idle"
          ? pr(nt, v.navigation.location, u)
          : v.matches;
    K(Ne, "Didn't find any matches after fetcher action");
    let Xn = ++D;
    A.set(g, Xn);
    let Fi = tl(B, H.data);
    v.fetchers.set(g, Fi);
    let [Jn, qt] = ef(
      e.history,
      v,
      Ne,
      B,
      le,
      !1,
      Qe,
      Xt,
      Rt,
      ye,
      J,
      Q,
      nt,
      u,
      { [L.route.id]: H.data },
      void 0
    );
    qt
      .filter((ne) => ne.key !== g)
      .forEach((ne) => {
        let Ye = ne.key,
          bl = v.fetchers.get(Ye),
          Yh = tl(void 0, bl ? bl.data : void 0);
        v.fetchers.set(Ye, Yh),
          te.has(Ye) && Zt(Ye),
          ne.controller && te.set(Ye, ne.controller);
      }),
      _e({ fetchers: new Map(v.fetchers) });
    let Pn = () => qt.forEach((ne) => Zt(ne.key));
    $.signal.addEventListener("abort", Pn);
    let {
      results: Ai,
      loaderResults: Vr,
      fetcherResults: Ui,
    } = await Os(v.matches, Ne, Jn, qt, Oe);
    if ($.signal.aborted) return;
    $.signal.removeEventListener("abort", Pn),
      A.delete(g),
      te.delete(g),
      qt.forEach((ne) => te.delete(ne.key));
    let Zn = uf(Ai);
    if (Zn) {
      if (Zn.idx >= Jn.length) {
        let ne = qt[Zn.idx - Jn.length].key;
        Q.add(ne);
      }
      return Br(v, Zn.result);
    }
    let { loaderData: ql, errors: q } = lf(
      v,
      v.matches,
      Jn,
      Vr,
      void 0,
      qt,
      Ui,
      Ie
    );
    if (v.fetchers.has(g)) {
      let ne = en(H.data);
      v.fetchers.set(g, ne);
    }
    Is(Xn),
      v.navigation.state === "loading" && Xn > I
        ? (K(E, "Expected pending action"),
          z && z.abort(),
          Ke(v.navigation.location, {
            matches: Ne,
            loaderData: ql,
            errors: q,
            fetchers: new Map(v.fetchers),
          }))
        : (_e({
            errors: q,
            loaderData: of(v.loaderData, ql, Ne, q),
            fetchers: new Map(v.fetchers),
          }),
          (Qe = !1));
  }
  async function Bh(g, S, P, L, M, W, B) {
    let U = v.fetchers.get(g);
    Jt(g, tl(B, U ? U.data : void 0), { flushSync: W });
    let $ = new AbortController(),
      G = el(e.history, P, $.signal);
    te.set(g, $);
    let Re = D,
      H = await br("loader", G, L, M, o, l, u, s.v7_relativeSplatPath);
    if (
      (Dn(H) && (H = (await lh(H, G.signal, !0)) || H),
      te.get(g) === $ && te.delete(g),
      !G.signal.aborted)
    ) {
      if (ye.has(g)) {
        Jt(g, en(void 0));
        return;
      }
      if (On(H))
        if (I > Re) {
          Jt(g, en(void 0));
          return;
        } else {
          Q.add(g), await Br(v, H);
          return;
        }
      if (hr(H)) {
        Hr(g, S, H.error);
        return;
      }
      K(!Dn(H), "Unhandled fetcher deferred data"), Jt(g, en(H.data));
    }
  }
  async function Br(g, S, P) {
    let {
      submission: L,
      fetcherSubmission: M,
      replace: W,
    } = P === void 0 ? {} : P;
    S.revalidate && (Qe = !0);
    let B = Al(g.location, S.location, { _isRedirect: !0 });
    if ((K(B, "Expected a location on the redirect navigation"), n)) {
      let le = !1;
      if (S.reloadDocument) le = !0;
      else if (eh.test(S.location)) {
        const Oe = e.history.createURL(S.location);
        le = Oe.origin !== t.location.origin || Fr(Oe.pathname, u) == null;
      }
      if (le) {
        W ? t.location.replace(S.location) : t.location.assign(S.location);
        return;
      }
    }
    z = null;
    let U = W === !0 ? Se.Replace : Se.Push,
      { formMethod: $, formAction: G, formEncType: Re } = g.navigation;
    !L && !M && $ && G && Re && (L = cf(g.navigation));
    let H = L || M;
    if (Xg.has(S.status) && H && xt(H.formMethod))
      await Cn(U, B, {
        submission: ve({}, H, { formAction: S.location }),
        preventScrollReset: T,
      });
    else {
      let le = ma(B, L);
      await Cn(U, B, {
        overrideNavigation: le,
        fetcherSubmission: M,
        preventScrollReset: T,
      });
    }
  }
  async function Os(g, S, P, L, M) {
    let W = await Promise.all([
        ...P.map(($) => br("loader", M, $, S, o, l, u, s.v7_relativeSplatPath)),
        ...L.map(($) =>
          $.matches && $.match && $.controller
            ? br(
                "loader",
                el(e.history, $.path, $.controller.signal),
                $.match,
                $.matches,
                o,
                l,
                u,
                s.v7_relativeSplatPath
              )
            : { type: he.error, error: ct(404, { pathname: $.path }) }
        ),
      ]),
      B = W.slice(0, P.length),
      U = W.slice(P.length);
    return (
      await Promise.all([
        sf(
          g,
          P,
          B,
          B.map(() => M.signal),
          !1,
          v.loaderData
        ),
        sf(
          g,
          L.map(($) => $.match),
          U,
          L.map(($) => ($.controller ? $.controller.signal : null)),
          !0
        ),
      ]),
      { results: W, loaderResults: B, fetcherResults: U }
    );
  }
  function Ii() {
    (Qe = !0),
      Xt.push(...$i()),
      J.forEach((g, S) => {
        te.has(S) && (Rt.push(S), Zt(S));
      });
  }
  function Jt(g, S, P) {
    P === void 0 && (P = {}),
      v.fetchers.set(g, S),
      _e(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (P && P.flushSync) === !0 }
      );
  }
  function Hr(g, S, P, L) {
    L === void 0 && (L = {});
    let M = Sl(v.matches, S);
    Jl(g),
      _e(
        { errors: { [M.route.id]: P }, fetchers: new Map(v.fetchers) },
        { flushSync: (L && L.flushSync) === !0 }
      );
  }
  function js(g) {
    return (
      s.v7_fetcherPersist &&
        (et.set(g, (et.get(g) || 0) + 1), ye.has(g) && ye.delete(g)),
      v.fetchers.get(g) || Jg
    );
  }
  function Jl(g) {
    let S = v.fetchers.get(g);
    te.has(g) && !(S && S.state === "loading" && A.has(g)) && Zt(g),
      J.delete(g),
      A.delete(g),
      Q.delete(g),
      ye.delete(g),
      v.fetchers.delete(g);
  }
  function Hh(g) {
    if (s.v7_fetcherPersist) {
      let S = (et.get(g) || 0) - 1;
      S <= 0 ? (et.delete(g), ye.add(g)) : et.set(g, S);
    } else Jl(g);
    _e({ fetchers: new Map(v.fetchers) });
  }
  function Zt(g) {
    let S = te.get(g);
    K(S, "Expected fetch controller: " + g), S.abort(), te.delete(g);
  }
  function zs(g) {
    for (let S of g) {
      let P = js(S),
        L = en(P.data);
      v.fetchers.set(S, L);
    }
  }
  function Ms() {
    let g = [],
      S = !1;
    for (let P of Q) {
      let L = v.fetchers.get(P);
      K(L, "Expected fetcher: " + P),
        L.state === "loading" && (Q.delete(P), g.push(P), (S = !0));
    }
    return zs(g), S;
  }
  function Is(g) {
    let S = [];
    for (let [P, L] of A)
      if (L < g) {
        let M = v.fetchers.get(P);
        K(M, "Expected fetcher: " + P),
          M.state === "loading" && (Zt(P), A.delete(P), S.push(P));
      }
    return zs(S), S.length > 0;
  }
  function Vh(g, S) {
    let P = v.blockers.get(g) || qr;
    return we.get(g) !== S && we.set(g, S), P;
  }
  function $s(g) {
    v.blockers.delete(g), we.delete(g);
  }
  function Zl(g, S) {
    let P = v.blockers.get(g) || qr;
    K(
      (P.state === "unblocked" && S.state === "blocked") ||
        (P.state === "blocked" && S.state === "blocked") ||
        (P.state === "blocked" && S.state === "proceeding") ||
        (P.state === "blocked" && S.state === "unblocked") ||
        (P.state === "proceeding" && S.state === "unblocked"),
      "Invalid blocker state transition: " + P.state + " -> " + S.state
    );
    let L = new Map(v.blockers);
    L.set(g, S), _e({ blockers: L });
  }
  function Fs(g) {
    let { currentLocation: S, nextLocation: P, historyAction: L } = g;
    if (we.size === 0) return;
    we.size > 1 && Tr(!1, "A router only supports one blocker at a time");
    let M = Array.from(we.entries()),
      [W, B] = M[M.length - 1],
      U = v.blockers.get(W);
    if (
      !(U && U.state === "proceeding") &&
      B({ currentLocation: S, nextLocation: P, historyAction: L })
    )
      return W;
  }
  function $i(g) {
    let S = [];
    return (
      Ie.forEach((P, L) => {
        (!g || g(L)) && (P.cancel(), S.push(L), Ie.delete(L));
      }),
      S
    );
  }
  function Wh(g, S, P) {
    if (((m = g), (x = S), (w = P || null), !y && v.navigation === ha)) {
      y = !0;
      let L = Us(v.location, v.matches);
      L != null && _e({ restoreScrollPosition: L });
    }
    return () => {
      (m = null), (x = null), (w = null);
    };
  }
  function As(g, S) {
    return (
      (w &&
        w(
          g,
          S.map((L) => _g(L, v.loaderData))
        )) ||
      g.key
    );
  }
  function Qh(g, S) {
    if (m && x) {
      let P = As(g, S);
      m[P] = x();
    }
  }
  function Us(g, S) {
    if (m) {
      let P = As(g, S),
        L = m[P];
      if (typeof L == "number") return L;
    }
    return null;
  }
  function Kh(g) {
    (o = {}), (a = mu(g, l, void 0, o));
  }
  return (
    (_ = {
      get basename() {
        return u;
      },
      get future() {
        return s;
      },
      get state() {
        return v;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: kn,
      subscribe: Ur,
      enableScrollRestoration: Wh,
      navigate: Ds,
      fetch: Ah,
      revalidate: Ih,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: js,
      deleteFetcher: Hh,
      dispose: Mt,
      getBlocker: Vh,
      deleteBlocker: $s,
      _internalFetchControllers: te,
      _internalActiveDeferreds: Ie,
      _internalSetRoutes: Kh,
    }),
    _
  );
}
function bg(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function vu(e, t, n, r, l, o, i, a) {
  let u, s;
  if (i) {
    u = [];
    for (let p of t)
      if ((u.push(p), p.route.id === i)) {
        s = p;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let c = Es(l || ".", xs(u, o), Fr(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((c.search = e.search), (c.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      s &&
      s.route.index &&
      !Cs(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : Ht([n, c.pathname])),
    Wn(c)
  );
}
function bc(e, t, n, r) {
  if (!r || !bg(r)) return { path: n };
  if (r.formMethod && !i0(r.formMethod))
    return { path: n, error: ct(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: ct(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = rh(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!xt(i)) return l();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((w, x) => {
              let [y, C] = x;
              return (
                "" +
                w +
                y +
                "=" +
                C +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!xt(i)) return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  K(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, s;
  if (r.formData) (u = gu(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = gu(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = rf(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = rf(u));
    } catch {
      return l();
    }
  let c = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (xt(c.formMethod)) return { path: n, submission: c };
  let p = Gt(n);
  return (
    t && p.search && Cs(p.search) && u.append("index", ""),
    (p.search = "?" + u),
    { path: Wn(p), submission: c }
  );
}
function e0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function ef(e, t, n, r, l, o, i, a, u, s, c, p, m, w, x, y) {
  let C = y ? Object.values(y)[0] : x ? Object.values(x)[0] : void 0,
    d = e.createURL(t.location),
    f = e.createURL(l),
    h = y ? Object.keys(y)[0] : void 0,
    _ = e0(n, h).filter((E, T) => {
      let { route: z } = E;
      if (z.lazy) return !0;
      if (z.loader == null) return !1;
      if (o)
        return z.loader.hydrate
          ? !0
          : t.loaderData[z.id] === void 0 &&
              (!t.errors || t.errors[z.id] === void 0);
      if (
        t0(t.loaderData, t.matches[T], E) ||
        a.some((ge) => ge === E.route.id)
      )
        return !0;
      let F = t.matches[T],
        X = E;
      return tf(
        E,
        ve(
          {
            currentUrl: d,
            currentParams: F.params,
            nextUrl: f,
            nextParams: X.params,
          },
          r,
          {
            actionResult: C,
            defaultShouldRevalidate:
              i ||
              d.pathname + d.search === f.pathname + f.search ||
              d.search !== f.search ||
              nh(F, X),
          }
        )
      );
    }),
    v = [];
  return (
    c.forEach((E, T) => {
      if (o || !n.some((pe) => pe.route.id === E.routeId) || s.has(T)) return;
      let z = pr(m, E.path, w);
      if (!z) {
        v.push({
          key: T,
          routeId: E.routeId,
          path: E.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let F = t.fetchers.get(T),
        X = yu(z, E.path),
        ge = !1;
      p.has(T)
        ? (ge = !1)
        : u.includes(T)
        ? (ge = !0)
        : F && F.state !== "idle" && F.data === void 0
        ? (ge = i)
        : (ge = tf(
            X,
            ve(
              {
                currentUrl: d,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: f,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: C, defaultShouldRevalidate: i }
            )
          )),
        ge &&
          v.push({
            key: T,
            routeId: E.routeId,
            path: E.path,
            matches: z,
            match: X,
            controller: new AbortController(),
          });
    }),
    [_, v]
  );
}
function t0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function nh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function tf(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function nf(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  K(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let u = l[i] !== void 0 && i !== "hasErrorBoundary";
    Tr(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !u && !Cg.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, ve({}, t(l), { lazy: void 0 }));
}
async function br(e, t, n, r, l, o, i, a, u) {
  u === void 0 && (u = {});
  let s,
    c,
    p,
    m = (y) => {
      let C,
        d = new Promise((f, h) => (C = h));
      return (
        (p = () => C()),
        t.signal.addEventListener("abort", p),
        Promise.race([
          y({ request: t, params: n.params, context: u.requestContext }),
          d,
        ])
      );
    };
  try {
    let y = n.route[e];
    if (n.route.lazy)
      if (y) {
        let C,
          d = await Promise.all([
            m(y).catch((f) => {
              C = f;
            }),
            nf(n.route, o, l),
          ]);
        if (C) throw C;
        c = d[0];
      } else if ((await nf(n.route, o, l), (y = n.route[e]), y)) c = await m(y);
      else if (e === "action") {
        let C = new URL(t.url),
          d = C.pathname + C.search;
        throw ct(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: he.data, data: void 0 };
    else if (y) c = await m(y);
    else {
      let C = new URL(t.url),
        d = C.pathname + C.search;
      throw ct(404, { pathname: d });
    }
    K(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (y) {
    (s = he.error), (c = y);
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (o0(c)) {
    let y = c.status;
    if (Gg.has(y)) {
      let d = c.headers.get("Location");
      if (
        (K(
          d,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !eh.test(d))
      )
        d = vu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d, a);
      else if (!u.isStaticRequest) {
        let f = new URL(t.url),
          h = d.startsWith("//") ? new URL(f.protocol + d) : new URL(d),
          k = Fr(h.pathname, i) != null;
        h.origin === f.origin && k && (d = h.pathname + h.search + h.hash);
      }
      if (u.isStaticRequest) throw (c.headers.set("Location", d), c);
      return {
        type: he.redirect,
        status: y,
        location: d,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: s === he.error ? he.error : he.data, response: c };
    let C;
    try {
      let d = c.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? c.body == null
          ? (C = null)
          : (C = await c.json())
        : (C = await c.text());
    } catch (d) {
      return { type: he.error, error: d };
    }
    return s === he.error
      ? { type: s, error: new ks(y, c.statusText, C), headers: c.headers }
      : { type: he.data, data: C, statusCode: c.status, headers: c.headers };
  }
  if (s === he.error) return { type: s, error: c };
  if (l0(c)) {
    var w, x;
    return {
      type: he.deferred,
      deferredData: c,
      statusCode: (w = c.init) == null ? void 0 : w.status,
      headers:
        ((x = c.init) == null ? void 0 : x.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: he.data, data: c };
}
function el(e, t, n, r) {
  let l = e.createURL(rh(t)).toString(),
    o = { signal: n };
  if (r && xt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = gu(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function gu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function rf(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function n0(e, t, n, r, l) {
  let o = {},
    i = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((c, p) => {
      let m = t[p].route.id;
      if (
        (K(!On(c), "Cannot handle redirect results in processLoaderData"),
        hr(c))
      ) {
        let w = Sl(e, m),
          x = c.error;
        r && ((x = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[w.route.id] == null && (i[w.route.id] = x),
          (o[m] = void 0),
          u || ((u = !0), (a = qp(c.error) ? c.error.status : 500)),
          c.headers && (s[m] = c.headers);
      } else
        Dn(c)
          ? (l.set(m, c.deferredData), (o[m] = c.deferredData.data))
          : (o[m] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !u &&
            (a = c.statusCode),
          c.headers && (s[m] = c.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: a || 200, loaderHeaders: s }
  );
}
function lf(e, t, n, r, l, o, i, a) {
  let { loaderData: u, errors: s } = n0(t, n, r, l, a);
  for (let c = 0; c < o.length; c++) {
    let { key: p, match: m, controller: w } = o[c];
    K(
      i !== void 0 && i[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let x = i[c];
    if (!(w && w.signal.aborted))
      if (hr(x)) {
        let y = Sl(e.matches, m == null ? void 0 : m.route.id);
        (s && s[y.route.id]) || (s = ve({}, s, { [y.route.id]: x.error })),
          e.fetchers.delete(p);
      } else if (On(x)) K(!1, "Unhandled fetcher revalidation redirect");
      else if (Dn(x)) K(!1, "Unhandled fetcher deferred data");
      else {
        let y = en(x.data);
        e.fetchers.set(p, y);
      }
  }
  return { loaderData: u, errors: s };
}
function of(e, t, n, r) {
  let l = ve({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Sl(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function af(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function ct(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (a = "defer() is not supported in actions")
          : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((i = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        l && n && r
          ? (a =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new ks(e || 500, i, new Error(a), !0)
  );
}
function uf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (On(n)) return { result: n, idx: t };
  }
}
function rh(e) {
  let t = typeof e == "string" ? Gt(e) : e;
  return Wn(ve({}, t, { hash: "" }));
}
function r0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Dn(e) {
  return e.type === he.deferred;
}
function hr(e) {
  return e.type === he.error;
}
function On(e) {
  return (e && e.type) === he.redirect;
}
function l0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function o0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function i0(e) {
  return Yg.has(e.toLowerCase());
}
function xt(e) {
  return Qg.has(e.toLowerCase());
}
async function sf(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i];
    if (!u) continue;
    let s = e.find((p) => p.route.id === u.route.id),
      c = s != null && !nh(s, u) && (o && o[u.route.id]) !== void 0;
    if (Dn(a) && (l || c)) {
      let p = r[i];
      K(p, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await lh(a, p, l).then((m) => {
          m && (n[i] = m || n[i]);
        });
    }
  }
}
async function lh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: he.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: he.error, error: l };
      }
    return { type: he.data, data: e.deferredData.data };
  }
}
function Cs(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function yu(e, t) {
  let n = typeof t == "string" ? Gt(t).search : t.search;
  if (e[e.length - 1].route.index && Cs(n || "")) return e[e.length - 1];
  let r = Zp(e);
  return r[r.length - 1];
}
function cf(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function ma(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function a0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function tl(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function u0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function en(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function s0(e, t) {
  try {
    let n = e.sessionStorage.getItem(th);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function c0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(th, JSON.stringify(n));
    } catch (r) {
      Tr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ul() {
  return (
    (Ul = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ul.apply(this, arguments)
  );
}
const Ri = N.createContext(null),
  oh = N.createContext(null),
  Yn = N.createContext(null),
  Ni = N.createContext(null),
  Gn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ih = N.createContext(null);
function f0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Gl() || K(!1);
  let { basename: r, navigator: l } = N.useContext(Yn),
    { hash: o, pathname: i, search: a } = uh(e, { relative: n }),
    u = i;
  return (
    r !== "/" && (u = i === "/" ? r : Ht([r, i])),
    l.createHref({ pathname: u, search: a, hash: o })
  );
}
function Gl() {
  return N.useContext(Ni) != null;
}
function Ti() {
  return Gl() || K(!1), N.useContext(Ni).location;
}
function ah(e) {
  N.useContext(Yn).static || N.useLayoutEffect(e);
}
function d0() {
  let { isDataRoute: e } = N.useContext(Gn);
  return e ? C0() : p0();
}
function p0() {
  Gl() || K(!1);
  let e = N.useContext(Ri),
    { basename: t, future: n, navigator: r } = N.useContext(Yn),
    { matches: l } = N.useContext(Gn),
    { pathname: o } = Ti(),
    i = JSON.stringify(xs(l, n.v7_relativeSplatPath)),
    a = N.useRef(!1);
  return (
    ah(() => {
      a.current = !0;
    }),
    N.useCallback(
      function (s, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let p = Es(s, JSON.parse(i), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : Ht([t, p.pathname])),
          (c.replace ? r.replace : r.push)(p, c.state, c);
      },
      [t, r, i, o, e]
    )
  );
}
function uh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = N.useContext(Yn),
    { matches: l } = N.useContext(Gn),
    { pathname: o } = Ti(),
    i = JSON.stringify(xs(l, r.v7_relativeSplatPath));
  return N.useMemo(() => Es(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function h0(e, t, n, r) {
  Gl() || K(!1);
  let { navigator: l } = N.useContext(Yn),
    { matches: o } = N.useContext(Gn),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let s = Ti(),
    c;
  if (t) {
    var p;
    let C = typeof t == "string" ? Gt(t) : t;
    u === "/" || ((p = C.pathname) != null && p.startsWith(u)) || K(!1),
      (c = C);
  } else c = s;
  let m = c.pathname || "/",
    w = m;
  if (u !== "/") {
    let C = u.replace(/^\//, "").split("/");
    w = "/" + m.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let x = pr(e, { pathname: w }),
    y = w0(
      x &&
        x.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, a, C.params),
            pathname: Ht([
              u,
              l.encodeLocation
                ? l.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? u
                : Ht([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && y
    ? N.createElement(
        Ni.Provider,
        {
          value: {
            location: Ul(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Se.Pop,
          },
        },
        y
      )
    : y;
}
function m0() {
  let e = k0(),
    t = qp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: l }, n) : null,
    null
  );
}
const v0 = N.createElement(m0, null);
class g0 extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          Gn.Provider,
          { value: this.props.routeContext },
          N.createElement(ih.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function y0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = N.useContext(Ri);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(Gn.Provider, { value: t }, r)
  );
}
function w0(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let c = i.findIndex(
      (p) => p.route.id && (a == null ? void 0 : a[p.route.id])
    );
    c >= 0 || K(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let p = i[c];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (s = c),
        p.route.id)
      ) {
        let { loaderData: m, errors: w } = n,
          x =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!w || w[p.route.id] === void 0);
        if (p.route.lazy || x) {
          (u = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((c, p, m) => {
    let w,
      x = !1,
      y = null,
      C = null;
    n &&
      ((w = a && p.route.id ? a[p.route.id] : void 0),
      (y = p.route.errorElement || v0),
      u &&
        (s < 0 && m === 0
          ? (P0("route-fallback", !1), (x = !0), (C = null))
          : s === m &&
            ((x = !0), (C = p.route.hydrateFallbackElement || null))));
    let d = t.concat(i.slice(0, m + 1)),
      f = () => {
        let h;
        return (
          w
            ? (h = y)
            : x
            ? (h = C)
            : p.route.Component
            ? (h = N.createElement(p.route.Component, null))
            : p.route.element
            ? (h = p.route.element)
            : (h = c),
          N.createElement(y0, {
            match: p,
            routeContext: { outlet: c, matches: d, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? N.createElement(g0, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: w,
          children: f(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var sh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(sh || {}),
  ai = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ai || {});
function S0(e) {
  let t = N.useContext(Ri);
  return t || K(!1), t;
}
function x0(e) {
  let t = N.useContext(oh);
  return t || K(!1), t;
}
function E0(e) {
  let t = N.useContext(Gn);
  return t || K(!1), t;
}
function ch(e) {
  let t = E0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || K(!1), n.route.id;
}
function k0() {
  var e;
  let t = N.useContext(ih),
    n = x0(ai.UseRouteError),
    r = ch(ai.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function C0() {
  let { router: e } = S0(sh.UseNavigateStable),
    t = ch(ai.UseNavigateStable),
    n = N.useRef(!1);
  return (
    ah(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, Ul({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const ff = {};
function P0(e, t, n) {
  !t && !ff[e] && (ff[e] = !0);
}
function _0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = Se.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  Gl() && K(!1);
  let u = t.replace(/^\/*/, "/"),
    s = N.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: Ul({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, o, i]
    );
  typeof r == "string" && (r = Gt(r));
  let {
      pathname: c = "/",
      search: p = "",
      hash: m = "",
      state: w = null,
      key: x = "default",
    } = r,
    y = N.useMemo(() => {
      let C = Fr(c, u);
      return C == null
        ? null
        : {
            location: { pathname: C, search: p, hash: m, state: w, key: x },
            navigationType: l,
          };
    }, [u, c, p, m, w, x, l]);
  return y == null
    ? null
    : N.createElement(
        Yn.Provider,
        { value: s },
        N.createElement(Ni.Provider, { children: n, value: y })
      );
}
new Promise(() => {});
function R0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: N.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: N.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: N.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bl() {
  return (
    (Bl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bl.apply(this, arguments)
  );
}
function N0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function T0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function L0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !T0(e);
}
const D0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  O0 = "6";
try {
  window.__reactRouterVersion = O0;
} catch {}
function j0(e, t) {
  return qg({
    basename: t == null ? void 0 : t.basename,
    future: Bl({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: xg({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || z0(),
    routes: e,
    mapRouteProperties: R0,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function z0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Bl({}, t, { errors: M0(t.errors) })), t;
}
function M0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new ks(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const I0 = N.createContext({ isTransitioning: !1 }),
  $0 = N.createContext(new Map()),
  F0 = "startTransition",
  df = sm[F0],
  A0 = "flushSync",
  pf = Sg[A0];
function U0(e) {
  df ? df(e) : e();
}
function nl(e) {
  pf ? pf(e) : e();
}
class B0 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function H0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = N.useState(n.state),
    [i, a] = N.useState(),
    [u, s] = N.useState({ isTransitioning: !1 }),
    [c, p] = N.useState(),
    [m, w] = N.useState(),
    [x, y] = N.useState(),
    C = N.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    f = N.useCallback(
      (E) => {
        d ? U0(E) : E();
      },
      [d]
    ),
    h = N.useCallback(
      (E, T) => {
        let {
          deletedFetchers: z,
          unstable_flushSync: F,
          unstable_viewTransitionOpts: X,
        } = T;
        z.forEach((pe) => C.current.delete(pe)),
          E.fetchers.forEach((pe, Qe) => {
            pe.data !== void 0 && C.current.set(Qe, pe.data);
          });
        let ge =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!X || ge) {
          F ? nl(() => o(E)) : f(() => o(E));
          return;
        }
        if (F) {
          nl(() => {
            m && (c && c.resolve(), m.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: X.currentLocation,
                nextLocation: X.nextLocation,
              });
          });
          let pe = n.window.document.startViewTransition(() => {
            nl(() => o(E));
          });
          pe.finished.finally(() => {
            nl(() => {
              p(void 0), w(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            nl(() => w(pe));
          return;
        }
        m
          ? (c && c.resolve(),
            m.skipTransition(),
            y({
              state: E,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }))
          : (a(E),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }));
      },
      [n.window, m, c, C, f]
    );
  N.useLayoutEffect(() => n.subscribe(h), [n, h]),
    N.useEffect(() => {
      u.isTransitioning && !u.flushSync && p(new B0());
    }, [u]),
    N.useEffect(() => {
      if (c && i && n.window) {
        let E = i,
          T = c.promise,
          z = n.window.document.startViewTransition(async () => {
            f(() => o(E)), await T;
          });
        z.finished.finally(() => {
          p(void 0), w(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          w(z);
      }
    }, [f, i, c, n.window]),
    N.useEffect(() => {
      c && i && l.location.key === i.location.key && c.resolve();
    }, [c, m, l.location, i]),
    N.useEffect(() => {
      !u.isTransitioning &&
        x &&
        (a(x.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: x.currentLocation,
          nextLocation: x.nextLocation,
        }),
        y(void 0));
    }, [u.isTransitioning, x]),
    N.useEffect(() => {}, []);
  let k = N.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (E) => n.navigate(E),
        push: (E, T, z) =>
          n.navigate(E, {
            state: T,
            preventScrollReset: z == null ? void 0 : z.preventScrollReset,
          }),
        replace: (E, T, z) =>
          n.navigate(E, {
            replace: !0,
            state: T,
            preventScrollReset: z == null ? void 0 : z.preventScrollReset,
          }),
      }),
      [n]
    ),
    _ = n.basename || "/",
    v = N.useMemo(
      () => ({ router: n, navigator: k, static: !1, basename: _ }),
      [n, k, _]
    );
  return N.createElement(
    N.Fragment,
    null,
    N.createElement(
      Ri.Provider,
      { value: v },
      N.createElement(
        oh.Provider,
        { value: l },
        N.createElement(
          $0.Provider,
          { value: C.current },
          N.createElement(
            I0.Provider,
            { value: u },
            N.createElement(
              _0,
              {
                basename: _,
                location: l.location,
                navigationType: l.historyAction,
                navigator: k,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? N.createElement(V0, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function V0(e) {
  let { routes: t, future: n, state: r } = e;
  return h0(t, void 0, r, n);
}
const W0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Q0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  fh = N.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: s,
        preventScrollReset: c,
        unstable_viewTransition: p,
      } = t,
      m = N0(t, D0),
      { basename: w } = N.useContext(Yn),
      x,
      y = !1;
    if (typeof s == "string" && Q0.test(s) && ((x = s), W0))
      try {
        let h = new URL(window.location.href),
          k = s.startsWith("//") ? new URL(h.protocol + s) : new URL(s),
          _ = Fr(k.pathname, w);
        k.origin === h.origin && _ != null
          ? (s = _ + k.search + k.hash)
          : (y = !0);
      } catch {}
    let C = f0(s, { relative: l }),
      d = K0(s, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: c,
        relative: l,
        unstable_viewTransition: p,
      });
    function f(h) {
      r && r(h), h.defaultPrevented || d(h);
    }
    return N.createElement(
      "a",
      Bl({}, m, { href: x || C, onClick: y || o ? r : f, ref: n, target: u })
    );
  });
var hf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(hf || (hf = {}));
var mf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(mf || (mf = {}));
function K0(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = d0(),
    s = Ti(),
    c = uh(e, { relative: i });
  return N.useCallback(
    (p) => {
      if (L0(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : Wn(s) === Wn(c);
        u(e, {
          replace: m,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, c, r, l, n, e, o, i, a]
  );
}
var Je = function () {
  return (
    (Je =
      Object.assign ||
      function (t) {
        for (var n, r = 1, l = arguments.length; r < l; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    Je.apply(this, arguments)
  );
};
function ui(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, l = t.length, o; r < l; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var ae = "-ms-",
  xl = "-moz-",
  b = "-webkit-",
  dh = "comm",
  Li = "rule",
  Ps = "decl",
  Y0 = "@import",
  ph = "@keyframes",
  G0 = "@layer",
  hh = Math.abs,
  _s = String.fromCharCode,
  wu = Object.assign;
function X0(e, t) {
  return Le(e, 0) ^ 45
    ? (((((((t << 2) ^ Le(e, 0)) << 2) ^ Le(e, 1)) << 2) ^ Le(e, 2)) << 2) ^
        Le(e, 3)
    : 0;
}
function mh(e) {
  return e.trim();
}
function $t(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function V(e, t, n) {
  return e.replace(t, n);
}
function Oo(e, t, n) {
  return e.indexOf(t, n);
}
function Le(e, t) {
  return e.charCodeAt(t) | 0;
}
function Lr(e, t, n) {
  return e.slice(t, n);
}
function Dt(e) {
  return e.length;
}
function vh(e) {
  return e.length;
}
function cl(e, t) {
  return t.push(e), e;
}
function J0(e, t) {
  return e.map(t).join("");
}
function vf(e, t) {
  return e.filter(function (n) {
    return !$t(n, t);
  });
}
var Di = 1,
  Dr = 1,
  gh = 0,
  gt = 0,
  Ee = 0,
  Ar = "";
function Oi(e, t, n, r, l, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: l,
    children: o,
    line: Di,
    column: Dr,
    length: i,
    return: "",
    siblings: a,
  };
}
function tn(e, t) {
  return wu(
    Oi("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function bn(e) {
  for (; e.root; ) e = tn(e.root, { children: [e] });
  cl(e, e.siblings);
}
function Z0() {
  return Ee;
}
function q0() {
  return (
    (Ee = gt > 0 ? Le(Ar, --gt) : 0), Dr--, Ee === 10 && ((Dr = 1), Di--), Ee
  );
}
function Pt() {
  return (
    (Ee = gt < gh ? Le(Ar, gt++) : 0), Dr++, Ee === 10 && ((Dr = 1), Di++), Ee
  );
}
function In() {
  return Le(Ar, gt);
}
function jo() {
  return gt;
}
function ji(e, t) {
  return Lr(Ar, e, t);
}
function Su(e) {
  switch (e) {
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
function b0(e) {
  return (Di = Dr = 1), (gh = Dt((Ar = e))), (gt = 0), [];
}
function ey(e) {
  return (Ar = ""), e;
}
function va(e) {
  return mh(ji(gt - 1, xu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ty(e) {
  for (; (Ee = In()) && Ee < 33; ) Pt();
  return Su(e) > 2 || Su(Ee) > 3 ? "" : " ";
}
function ny(e, t) {
  for (
    ;
    --t &&
    Pt() &&
    !(Ee < 48 || Ee > 102 || (Ee > 57 && Ee < 65) || (Ee > 70 && Ee < 97));

  );
  return ji(e, jo() + (t < 6 && In() == 32 && Pt() == 32));
}
function xu(e) {
  for (; Pt(); )
    switch (Ee) {
      case e:
        return gt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && xu(Ee);
        break;
      case 40:
        e === 41 && xu(e);
        break;
      case 92:
        Pt();
        break;
    }
  return gt;
}
function ry(e, t) {
  for (; Pt() && e + Ee !== 57; ) if (e + Ee === 84 && In() === 47) break;
  return "/*" + ji(t, gt - 1) + "*" + _s(e === 47 ? e : Pt());
}
function ly(e) {
  for (; !Su(In()); ) Pt();
  return ji(e, gt);
}
function oy(e) {
  return ey(zo("", null, null, null, [""], (e = b0(e)), 0, [0], e));
}
function zo(e, t, n, r, l, o, i, a, u) {
  for (
    var s = 0,
      c = 0,
      p = i,
      m = 0,
      w = 0,
      x = 0,
      y = 1,
      C = 1,
      d = 1,
      f = 0,
      h = "",
      k = l,
      _ = o,
      v = r,
      E = h;
    C;

  )
    switch (((x = f), (f = Pt()))) {
      case 40:
        if (x != 108 && Le(E, p - 1) == 58) {
          Oo((E += V(va(f), "&", "&\f")), "&\f", hh(s ? a[s - 1] : 0)) != -1 &&
            (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += va(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += ty(x);
        break;
      case 92:
        E += ny(jo() - 1, 7);
        continue;
      case 47:
        switch (In()) {
          case 42:
          case 47:
            cl(iy(ry(Pt(), jo()), t, n, u), u);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * y:
        a[s++] = Dt(E) * d;
      case 125 * y:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            C = 0;
          case 59 + c:
            d == -1 && (E = V(E, /\f/g, "")),
              w > 0 &&
                Dt(E) - p &&
                cl(
                  w > 32
                    ? yf(E + ";", r, n, p - 1, u)
                    : yf(V(E, " ", "") + ";", r, n, p - 2, u),
                  u
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (cl(
                (v = gf(E, t, n, s, c, l, a, h, (k = []), (_ = []), p, o)),
                o
              ),
              f === 123)
            )
              if (c === 0) zo(E, t, v, v, k, o, p, a, _);
              else
                switch (m === 99 && Le(E, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    zo(
                      e,
                      v,
                      v,
                      r && cl(gf(e, v, v, 0, 0, l, a, h, l, (k = []), p, _), _),
                      l,
                      _,
                      p,
                      a,
                      r ? k : _
                    );
                    break;
                  default:
                    zo(E, v, v, v, [""], _, 0, a, _);
                }
        }
        (s = c = w = 0), (y = d = 1), (h = E = ""), (p = i);
        break;
      case 58:
        (p = 1 + Dt(E)), (w = x);
      default:
        if (y < 1) {
          if (f == 123) --y;
          else if (f == 125 && y++ == 0 && q0() == 125) continue;
        }
        switch (((E += _s(f)), f * y)) {
          case 38:
            d = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (a[s++] = (Dt(E) - 1) * d), (d = 1);
            break;
          case 64:
            In() === 45 && (E += va(Pt())),
              (m = In()),
              (c = p = Dt((h = E += ly(jo())))),
              f++;
            break;
          case 45:
            x === 45 && Dt(E) == 2 && (y = 0);
        }
    }
  return o;
}
function gf(e, t, n, r, l, o, i, a, u, s, c, p) {
  for (
    var m = l - 1, w = l === 0 ? o : [""], x = vh(w), y = 0, C = 0, d = 0;
    y < r;
    ++y
  )
    for (var f = 0, h = Lr(e, m + 1, (m = hh((C = i[y])))), k = e; f < x; ++f)
      (k = mh(C > 0 ? w[f] + " " + h : V(h, /&\f/g, w[f]))) && (u[d++] = k);
  return Oi(e, t, n, l === 0 ? Li : a, u, s, c, p);
}
function iy(e, t, n, r) {
  return Oi(e, t, n, dh, _s(Z0()), Lr(e, 2, -2), 0, r);
}
function yf(e, t, n, r, l) {
  return Oi(e, t, n, Ps, Lr(e, 0, r), Lr(e, r + 1, -1), r, l);
}
function yh(e, t, n) {
  switch (X0(e, t)) {
    case 5103:
      return b + "print-" + e + e;
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
      return b + e + e;
    case 4789:
      return xl + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return b + e + xl + e + ae + e + e;
    case 5936:
      switch (Le(e, t + 11)) {
        case 114:
          return b + e + ae + V(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return b + e + ae + V(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return b + e + ae + V(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return b + e + ae + e + e;
    case 6165:
      return b + e + ae + "flex-" + e + e;
    case 5187:
      return (
        b + e + V(e, /(\w+).+(:[^]+)/, b + "box-$1$2" + ae + "flex-$1$2") + e
      );
    case 5443:
      return (
        b +
        e +
        ae +
        "flex-item-" +
        V(e, /flex-|-self/g, "") +
        ($t(e, /flex-|baseline/)
          ? ""
          : ae + "grid-row-" + V(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        b +
        e +
        ae +
        "flex-line-pack" +
        V(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return b + e + ae + V(e, "shrink", "negative") + e;
    case 5292:
      return b + e + ae + V(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        b +
        "box-" +
        V(e, "-grow", "") +
        b +
        e +
        ae +
        V(e, "grow", "positive") +
        e
      );
    case 4554:
      return b + V(e, /([^-])(transform)/g, "$1" + b + "$2") + e;
    case 6187:
      return (
        V(V(V(e, /(zoom-|grab)/, b + "$1"), /(image-set)/, b + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return V(e, /(image-set\([^]*)/, b + "$1$`$1");
    case 4968:
      return (
        V(
          V(e, /(.+:)(flex-)?(.*)/, b + "box-pack:$3" + ae + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        b +
        e +
        e
      );
    case 4200:
      if (!$t(e, /flex-|baseline/))
        return ae + "grid-column-align" + Lr(e, t) + e;
      break;
    case 2592:
    case 3360:
      return ae + V(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, l) {
          return (t = l), $t(r.props, /grid-\w+-end/);
        })
        ? ~Oo(e + (n = n[t].value), "span", 0)
          ? e
          : ae +
            V(e, "-start", "") +
            e +
            ae +
            "grid-row-span:" +
            (~Oo(n, "span", 0) ? $t(n, /\d+/) : +$t(n, /\d+/) - +$t(e, /\d+/)) +
            ";"
        : ae + V(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return $t(r.props, /grid-\w+-start/);
        })
        ? e
        : ae + V(V(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return V(e, /(.+)-inline(.+)/, b + "$1$2") + e;
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
      if (Dt(e) - 1 - t > 6)
        switch (Le(e, t + 1)) {
          case 109:
            if (Le(e, t + 4) !== 45) break;
          case 102:
            return (
              V(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  b +
                  "$2-$3$1" +
                  xl +
                  (Le(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Oo(e, "stretch", 0)
              ? yh(V(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return V(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, l, o, i, a, u, s) {
          return (
            ae +
            l +
            ":" +
            o +
            s +
            (i ? ae + l + "-span:" + (a ? u : +u - +o) + s : "") +
            e
          );
        }
      );
    case 4949:
      if (Le(e, t + 6) === 121) return V(e, ":", ":" + b) + e;
      break;
    case 6444:
      switch (Le(e, Le(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            V(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                b +
                (Le(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                b +
                "$2$3$1" +
                ae +
                "$2box$3"
            ) + e
          );
        case 100:
          return V(e, ":", ":" + ae) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return V(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function si(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function ay(e, t, n, r) {
  switch (e.type) {
    case G0:
      if (e.children.length) break;
    case Y0:
    case Ps:
      return (e.return = e.return || e.value);
    case dh:
      return "";
    case ph:
      return (e.return = e.value + "{" + si(e.children, r) + "}");
    case Li:
      if (!Dt((e.value = e.props.join(",")))) return "";
  }
  return Dt((n = si(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function uy(e) {
  var t = vh(e);
  return function (n, r, l, o) {
    for (var i = "", a = 0; a < t; a++) i += e[a](n, r, l, o) || "";
    return i;
  };
}
function sy(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function cy(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ps:
        e.return = yh(e.value, e.length, n);
        return;
      case ph:
        return si([tn(e, { value: V(e.value, "@", "@" + b) })], r);
      case Li:
        if (e.length)
          return J0((n = e.props), function (l) {
            switch ($t(l, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                bn(tn(e, { props: [V(l, /:(read-\w+)/, ":" + xl + "$1")] })),
                  bn(tn(e, { props: [l] })),
                  wu(e, { props: vf(n, r) });
                break;
              case "::placeholder":
                bn(
                  tn(e, { props: [V(l, /:(plac\w+)/, ":" + b + "input-$1")] })
                ),
                  bn(tn(e, { props: [V(l, /:(plac\w+)/, ":" + xl + "$1")] })),
                  bn(tn(e, { props: [V(l, /:(plac\w+)/, ae + "input-$1")] })),
                  bn(tn(e, { props: [l] })),
                  wu(e, { props: vf(n, r) });
                break;
            }
            return "";
          });
    }
}
var fy = {
    animationIterationCount: 1,
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
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  rt = {},
  Or =
    (typeof process < "u" &&
      rt !== void 0 &&
      (rt.REACT_APP_SC_ATTR || rt.SC_ATTR)) ||
    "data-styled",
  wh = "active",
  Sh = "data-styled-version",
  zi = "6.1.8",
  Rs = `/*!sc*/
`,
  Ns = typeof window < "u" && "HTMLElement" in window,
  dy = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      rt !== void 0 &&
      rt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      rt.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? rt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      rt.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      rt !== void 0 &&
      rt.SC_DISABLE_SPEEDY !== void 0 &&
      rt.SC_DISABLE_SPEEDY !== "" &&
      rt.SC_DISABLE_SPEEDY !== "false" &&
      rt.SC_DISABLE_SPEEDY),
  Mi = Object.freeze([]),
  jr = Object.freeze({});
function py(e, t, n) {
  return (
    n === void 0 && (n = jr), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var xh = new Set([
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
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
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
    "tspan",
  ]),
  hy = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  my = /(^-|-$)/g;
function wf(e) {
  return e.replace(hy, "-").replace(my, "");
}
var vy = /(a)(d)/gi,
  yo = 52,
  Sf = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Eu(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > yo; t = (t / yo) | 0) n = Sf(t % yo) + n;
  return (Sf(t % yo) + n).replace(vy, "$1-$2");
}
var ga,
  Eh = 5381,
  mr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  kh = function (e) {
    return mr(Eh, e);
  };
function gy(e) {
  return Eu(kh(e) >>> 0);
}
function yy(e) {
  return e.displayName || e.name || "Component";
}
function ya(e) {
  return typeof e == "string" && !0;
}
var Ch = typeof Symbol == "function" && Symbol.for,
  Ph = Ch ? Symbol.for("react.memo") : 60115,
  wy = Ch ? Symbol.for("react.forward_ref") : 60112,
  Sy = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  xy = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  _h = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Ey =
    (((ga = {})[wy] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (ga[Ph] = _h),
    ga);
function xf(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Ph
    ? _h
    : "$$typeof" in e
    ? Ey[e.$$typeof]
    : Sy;
  var t;
}
var ky = Object.defineProperty,
  Cy = Object.getOwnPropertyNames,
  Ef = Object.getOwnPropertySymbols,
  Py = Object.getOwnPropertyDescriptor,
  _y = Object.getPrototypeOf,
  kf = Object.prototype;
function Rh(e, t, n) {
  if (typeof t != "string") {
    if (kf) {
      var r = _y(t);
      r && r !== kf && Rh(e, r, n);
    }
    var l = Cy(t);
    Ef && (l = l.concat(Ef(t)));
    for (var o = xf(e), i = xf(t), a = 0; a < l.length; ++a) {
      var u = l[a];
      if (!(u in xy || (n && n[u]) || (i && u in i) || (o && u in o))) {
        var s = Py(t, u);
        try {
          ky(e, u, s);
        } catch {}
      }
    }
  }
  return e;
}
function zr(e) {
  return typeof e == "function";
}
function Ts(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function jn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Cf(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function Hl(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function ku(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Hl(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = ku(e[r], t[r]);
  else if (Hl(t)) for (var r in t) e[r] = ku(e[r], t[r]);
  return e;
}
function Ls(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Xl(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var Ry = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, l = r.length, o = l; t >= o; )
            if ((o <<= 1) < 0) throw Xl(16, "".concat(t));
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(r),
            (this.length = o);
          for (var i = l; i < o; i++) this.groupSizes[i] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), u = ((i = 0), n.length);
          i < u;
          i++
        )
          this.tag.insertRule(a, n[i]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            l = r + n;
          this.groupSizes[t] = 0;
          for (var o = r; o < l; o++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            l = this.indexOfGroup(t),
            o = l + r,
            i = l;
          i < o;
          i++
        )
          n += "".concat(this.tag.getRule(i)).concat(Rs);
        return n;
      }),
      e
    );
  })(),
  Mo = new Map(),
  ci = new Map(),
  Io = 1,
  wo = function (e) {
    if (Mo.has(e)) return Mo.get(e);
    for (; ci.has(Io); ) Io++;
    var t = Io++;
    return Mo.set(e, t), ci.set(t, e), t;
  },
  Ny = function (e, t) {
    (Io = t + 1), Mo.set(e, t), ci.set(t, e);
  },
  Ty = "style[".concat(Or, "][").concat(Sh, '="').concat(zi, '"]'),
  Ly = new RegExp(
    "^".concat(Or, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  Dy = function (e, t, n) {
    for (var r, l = n.split(","), o = 0, i = l.length; o < i; o++)
      (r = l[o]) && e.registerName(t, r);
  },
  Oy = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Rs),
        l = [],
        o = 0,
        i = r.length;
      o < i;
      o++
    ) {
      var a = r[o].trim();
      if (a) {
        var u = a.match(Ly);
        if (u) {
          var s = 0 | parseInt(u[1], 10),
            c = u[2];
          s !== 0 && (Ny(c, s), Dy(e, c, u[3]), e.getTag().insertRules(s, l)),
            (l.length = 0);
        } else l.push(a);
      }
    }
  };
function jy() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Nh = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      l = (function (a) {
        var u = Array.from(a.querySelectorAll("style[".concat(Or, "]")));
        return u[u.length - 1];
      })(n),
      o = l !== void 0 ? l.nextSibling : null;
    r.setAttribute(Or, wh), r.setAttribute(Sh, zi);
    var i = jy();
    return i && r.setAttribute("nonce", i), n.insertBefore(r, o), r;
  },
  zy = (function () {
    function e(t) {
      (this.element = Nh(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, l = 0, o = r.length; l < o; l++) {
            var i = r[l];
            if (i.ownerNode === n) return i;
          }
          throw Xl(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  My = (function () {
    function e(t) {
      (this.element = Nh(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  Iy = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Pf = Ns,
  $y = { isServer: !Ns, useCSSOMInjection: !dy },
  Th = (function () {
    function e(t, n, r) {
      t === void 0 && (t = jr), n === void 0 && (n = {});
      var l = this;
      (this.options = Je(Je({}, $y), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Ns &&
          Pf &&
          ((Pf = !1),
          (function (o) {
            for (
              var i = document.querySelectorAll(Ty), a = 0, u = i.length;
              a < u;
              a++
            ) {
              var s = i[a];
              s &&
                s.getAttribute(Or) !== wh &&
                (Oy(o, s), s.parentNode && s.parentNode.removeChild(s));
            }
          })(this)),
        Ls(this, function () {
          return (function (o) {
            for (
              var i = o.getTag(),
                a = i.length,
                u = "",
                s = function (p) {
                  var m = (function (d) {
                    return ci.get(d);
                  })(p);
                  if (m === void 0) return "continue";
                  var w = o.names.get(m),
                    x = i.getGroup(p);
                  if (w === void 0 || x.length === 0) return "continue";
                  var y = ""
                      .concat(Or, ".g")
                      .concat(p, '[id="')
                      .concat(m, '"]'),
                    C = "";
                  w !== void 0 &&
                    w.forEach(function (d) {
                      d.length > 0 && (C += "".concat(d, ","));
                    }),
                    (u += ""
                      .concat(x)
                      .concat(y, '{content:"')
                      .concat(C, '"}')
                      .concat(Rs));
                },
                c = 0;
              c < a;
              c++
            )
              s(c);
            return u;
          })(l);
        });
    }
    return (
      (e.registerId = function (t) {
        return wo(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Je(Je({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                l = n.target;
              return n.isServer ? new Iy(l) : r ? new zy(l) : new My(l);
            })(this.options)),
            new Ry(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((wo(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(wo(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(wo(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  Fy = /&/g,
  Ay = /^\s*\/\/.*$/gm;
function Lh(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = Lh(n.children, t)),
      n
    );
  });
}
function Uy(e) {
  var t,
    n,
    r,
    l = e === void 0 ? jr : e,
    o = l.options,
    i = o === void 0 ? jr : o,
    a = l.plugins,
    u = a === void 0 ? Mi : a,
    s = function (m, w, x) {
      return x.startsWith(n) && x.endsWith(n) && x.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : m;
    },
    c = u.slice();
  c.push(function (m) {
    m.type === Li &&
      m.value.includes("&") &&
      (m.props[0] = m.props[0].replace(Fy, n).replace(r, s));
  }),
    i.prefix && c.push(cy),
    c.push(ay);
  var p = function (m, w, x, y) {
    w === void 0 && (w = ""),
      x === void 0 && (x = ""),
      y === void 0 && (y = "&"),
      (t = y),
      (n = w),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var C = m.replace(Ay, ""),
      d = oy(x || w ? "".concat(x, " ").concat(w, " { ").concat(C, " }") : C);
    i.namespace && (d = Lh(d, i.namespace));
    var f = [];
    return (
      si(
        d,
        uy(
          c.concat(
            sy(function (h) {
              return f.push(h);
            })
          )
        )
      ),
      f
    );
  };
  return (
    (p.hash = u.length
      ? u
          .reduce(function (m, w) {
            return w.name || Xl(15), mr(m, w.name);
          }, Eh)
          .toString()
      : ""),
    p
  );
}
var By = new Th(),
  Cu = Uy(),
  Dh = Fn.createContext({
    shouldForwardProp: void 0,
    styleSheet: By,
    stylis: Cu,
  });
Dh.Consumer;
Fn.createContext(void 0);
function _f() {
  return N.useContext(Dh);
}
var Hy = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (l, o) {
        o === void 0 && (o = Cu);
        var i = r.name + o.hash;
        l.hasNameForId(r.id, i) ||
          l.insertRules(r.id, i, o(r.rules, i, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Ls(this, function () {
          throw Xl(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Cu), this.name + t.hash;
      }),
      e
    );
  })(),
  Vy = function (e) {
    return e >= "A" && e <= "Z";
  };
function Rf(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Vy(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Oh = function (e) {
    return e == null || e === !1 || e === "";
  },
  jh = function (e) {
    var t,
      n,
      r = [];
    for (var l in e) {
      var o = e[l];
      e.hasOwnProperty(l) &&
        !Oh(o) &&
        ((Array.isArray(o) && o.isCss) || zr(o)
          ? r.push("".concat(Rf(l), ":"), o, ";")
          : Hl(o)
          ? r.push.apply(r, ui(ui(["".concat(l, " {")], jh(o), !1), ["}"], !1))
          : r.push(
              ""
                .concat(Rf(l), ": ")
                .concat(
                  ((t = l),
                  (n = o) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in fy ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function $n(e, t, n, r) {
  if (Oh(e)) return [];
  if (Ts(e)) return [".".concat(e.styledComponentId)];
  if (zr(e)) {
    if (!zr((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e];
    var l = e(t);
    return $n(l, t, n, r);
  }
  var o;
  return e instanceof Hy
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Hl(e)
    ? jh(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Mi,
        e.map(function (i) {
          return $n(i, t, n, r);
        })
      )
    : [e.toString()];
}
function Wy(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (zr(n) && !Ts(n)) return !1;
  }
  return !0;
}
var Qy = kh(zi),
  Ky = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && Wy(t)),
        (this.componentId = n),
        (this.baseHash = mr(Qy, n)),
        (this.baseStyle = r),
        Th.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var l = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            l = jn(l, this.staticRulesId);
          else {
            var o = Cf($n(this.rules, t, n, r)),
              i = Eu(mr(this.baseHash, o) >>> 0);
            if (!n.hasNameForId(this.componentId, i)) {
              var a = r(o, ".".concat(i), void 0, this.componentId);
              n.insertRules(this.componentId, i, a);
            }
            (l = jn(l, i)), (this.staticRulesId = i);
          }
        else {
          for (
            var u = mr(this.baseHash, r.hash), s = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var p = this.rules[c];
            if (typeof p == "string") s += p;
            else if (p) {
              var m = Cf($n(p, t, n, r));
              (u = mr(u, m + c)), (s += m);
            }
          }
          if (s) {
            var w = Eu(u >>> 0);
            n.hasNameForId(this.componentId, w) ||
              n.insertRules(
                this.componentId,
                w,
                r(s, ".".concat(w), void 0, this.componentId)
              ),
              (l = jn(l, w));
          }
        }
        return l;
      }),
      e
    );
  })(),
  zh = Fn.createContext(void 0);
zh.Consumer;
var wa = {};
function Yy(e, t, n) {
  var r = Ts(e),
    l = e,
    o = !ya(e),
    i = t.attrs,
    a = i === void 0 ? Mi : i,
    u = t.componentId,
    s =
      u === void 0
        ? (function (k, _) {
            var v = typeof k != "string" ? "sc" : wf(k);
            wa[v] = (wa[v] || 0) + 1;
            var E = "".concat(v, "-").concat(gy(zi + v + wa[v]));
            return _ ? "".concat(_, "-").concat(E) : E;
          })(t.displayName, t.parentComponentId)
        : u,
    c = t.displayName,
    p =
      c === void 0
        ? (function (k) {
            return ya(k) ? "styled.".concat(k) : "Styled(".concat(yy(k), ")");
          })(e)
        : c,
    m =
      t.displayName && t.componentId
        ? "".concat(wf(t.displayName), "-").concat(t.componentId)
        : t.componentId || s,
    w = r && l.attrs ? l.attrs.concat(a).filter(Boolean) : a,
    x = t.shouldForwardProp;
  if (r && l.shouldForwardProp) {
    var y = l.shouldForwardProp;
    if (t.shouldForwardProp) {
      var C = t.shouldForwardProp;
      x = function (k, _) {
        return y(k, _) && C(k, _);
      };
    } else x = y;
  }
  var d = new Ky(n, m, r ? l.componentStyle : void 0);
  function f(k, _) {
    return (function (v, E, T) {
      var z = v.attrs,
        F = v.componentStyle,
        X = v.defaultProps,
        ge = v.foldedComponentIds,
        pe = v.styledComponentId,
        Qe = v.target,
        Xt = Fn.useContext(zh),
        Rt = _f(),
        te = v.shouldForwardProp || Rt.shouldForwardProp,
        D = py(E, Xt, X) || jr,
        I = (function (Ie, we, tt) {
          for (
            var kn,
              Mt = Je(Je({}, we), { className: void 0, theme: tt }),
              Ur = 0;
            Ur < Ie.length;
            Ur += 1
          ) {
            var _e = zr((kn = Ie[Ur])) ? kn(Mt) : kn;
            for (var Ke in _e)
              Mt[Ke] =
                Ke === "className"
                  ? jn(Mt[Ke], _e[Ke])
                  : Ke === "style"
                  ? Je(Je({}, Mt[Ke]), _e[Ke])
                  : _e[Ke];
          }
          return (
            we.className && (Mt.className = jn(Mt.className, we.className)), Mt
          );
        })(z, E, D),
        A = I.as || Qe,
        Q = {};
      for (var J in I)
        I[J] === void 0 ||
          J[0] === "$" ||
          J === "as" ||
          (J === "theme" && I.theme === D) ||
          (J === "forwardedAs"
            ? (Q.as = I.forwardedAs)
            : (te && !te(J, A)) || (Q[J] = I[J]));
      var et = (function (Ie, we) {
          var tt = _f(),
            kn = Ie.generateAndInjectStyles(we, tt.styleSheet, tt.stylis);
          return kn;
        })(F, I),
        ye = jn(ge, pe);
      return (
        et && (ye += " " + et),
        I.className && (ye += " " + I.className),
        (Q[ya(A) && !xh.has(A) ? "class" : "className"] = ye),
        (Q.ref = T),
        N.createElement(A, Q)
      );
    })(h, k, _);
  }
  f.displayName = p;
  var h = Fn.forwardRef(f);
  return (
    (h.attrs = w),
    (h.componentStyle = d),
    (h.displayName = p),
    (h.shouldForwardProp = x),
    (h.foldedComponentIds = r
      ? jn(l.foldedComponentIds, l.styledComponentId)
      : ""),
    (h.styledComponentId = m),
    (h.target = r ? l.target : e),
    Object.defineProperty(h, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (k) {
        this._foldedDefaultProps = r
          ? (function (_) {
              for (var v = [], E = 1; E < arguments.length; E++)
                v[E - 1] = arguments[E];
              for (var T = 0, z = v; T < z.length; T++) ku(_, z[T], !0);
              return _;
            })({}, l.defaultProps, k)
          : k;
      },
    }),
    Ls(h, function () {
      return ".".concat(h.styledComponentId);
    }),
    o &&
      Rh(h, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    h
  );
}
function Nf(e, t) {
  for (var n = [e[0]], r = 0, l = t.length; r < l; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Tf = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function Gy(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (zr(e) || Hl(e)) return Tf($n(Nf(Mi, ui([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? $n(r)
    : Tf($n(Nf(r, t)));
}
function Pu(e, t, n) {
  if ((n === void 0 && (n = jr), !t)) throw Xl(1, t);
  var r = function (l) {
    for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
    return e(t, n, Gy.apply(void 0, ui([l], o, !1)));
  };
  return (
    (r.attrs = function (l) {
      return Pu(
        e,
        t,
        Je(Je({}, n), {
          attrs: Array.prototype.concat(n.attrs, l).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (l) {
      return Pu(e, t, Je(Je({}, n), l));
    }),
    r
  );
}
var Mh = function (e) {
    return Pu(Yy, e);
  },
  re = Mh;
xh.forEach(function (e) {
  re[e] = Mh(e);
});
const er = {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  wn = {
    xs: `(min-width: ${er.xs})`,
    sm: `(min-width: ${er.sm})`,
    md: `(min-width: ${er.md})`,
    lg: `(min-width: ${er.lg})`,
    xl: `(min-width: ${er.xl})`,
    "2xl": `(min-width: ${er["2xl"]})`,
  };
function Xy({ acctInfo: e, switchAcc: t, changeAccInfo: n }) {
  return O.jsx(Jy, {
    children: O.jsxs(qy, {
      children: [
        O.jsx(by, { className: "header", children: "Welcome User!" }),
        O.jsxs(e1, {
          className: "identificationNum",
          children: ["ID #: ", e.id],
        }),
        O.jsx(Zy, {
          children: O.jsx(t1, { onClick: n, children: "Swap Accounts" }),
        }),
      ],
    }),
  });
}
const Jy = re.div`
        padding: 10px 20px;
    
    `,
  Zy = re.div`
        
        display:block;
    `,
  qy = re.div`
        display: flex;
        flex-direction: column
    `,
  by = re.h1`
        width: 100%;
        margin: 10px auto;
        text-align: left;
       

        @media only screen and ${wn.xs} {
           font-size: 2.8em;
        }  

        @media only screen and ${wn.lg} {
            font-size: 3.2em !important;
        }
        
    `,
  e1 = re.h2`
        width: 100%;
        margin: 10px auto;
        text-align: left;
    `,
  t1 = re.button`
    background-color: #607d8b;
    color: white;
    
    `;
function n1({ acctInfo: e }) {
  const [t, n] = N.useState(!0),
    r = () => {
      n(!t);
    };
  return O.jsx(r1, {
    children: O.jsxs(o1, {
      children: [
        O.jsxs("div", {
          children: [
            O.jsxs("div", {
              children: [
                O.jsx(Sa, { children: " Creditor: " }),
                O.jsx(xa, { children: e.creditor }),
              ],
            }),
            t
              ? O.jsxs("div", {
                  onClick: r,
                  children: [
                    O.jsxs(i1, {
                      children: [
                        O.jsxs("div", {
                          children: [
                            O.jsx(Sa, { children: "Account:" }),
                            O.jsx(xa, { children: e.accountNum }),
                          ],
                        }),
                        O.jsxs("div", {
                          children: [
                            O.jsx(Sa, { children: "Merchant:" }),
                            O.jsx(xa, { children: e.merchant }),
                          ],
                        }),
                      ],
                    }),
                    O.jsx(Lf, { children: "Hide Details" }),
                  ],
                })
              : O.jsx("div", {
                  onClick: r,
                  children: O.jsx(Lf, { children: "Show Details" }),
                }),
          ],
        }),
        O.jsxs(l1, {
          children: [
            O.jsxs(u1, { children: ["$", e.balance] }),
            O.jsx(a1, { children: "Balance " }),
          ],
        }),
      ],
    }),
  });
}
const r1 = re.div`
        padding: 10px 20px;
    
    `,
  l1 = re.div`
        display: flex;
        flex-direction: column;
    `,
  o1 = re.div`
        padding: 5px 7px;
        display: flex;
        flex-direction: row;
        border: solid black 1px;
        border-radius: 7px;
        justify-content: space-between;
    `,
  i1 = re.div`
        display: flex;
        flex-direction: column
    `,
  a1 = re.p`
        font-size: 18px;
        margin: 0;
        text-align: right;
        font-weight: 600;

    `,
  u1 = re.p`
        font-size: 24px;
        margin: 0;
        font-weight: 700;
    `,
  Sa = re.p`
        font-size: 14px;
        margin: 3px 3px 1px 5px;
        display:inline-block;
    `,
  xa = re.p`
        font-size: 14px;
        margin: 3px 3px 1px 5px;
        display:inline-block;
        font-weight: 700;
        text-transform: uppercase
    `,
  Lf = re.div`
        font-size: 13px;
        margin: 5px;
        transition: color 0.3s;
        cursor: pointer;
        color: blue;
        &:hover {
            text-decoration: underline;
        }
    `;
function s1({ offers: e }) {
  return O.jsx(c1, {
    className: "marketing-offers",
    children: e.map((t, n) =>
      O.jsxs(
        f1,
        {
          className: `offerType-save-${t.offerPercent}`,
          children: [
            O.jsxs(d1, {
              children: [
                O.jsx(Df, {
                  children:
                    t.offerPercent === "10%" ? "LUMPSUM" : "PAYMENT PLAN",
                }),
                O.jsxs(Df, { children: ["SAVE ", t.offerPercent] }),
              ],
            }),
            O.jsxs(p1, {
              children: [
                O.jsxs(ol, {
                  children: [
                    O.jsx(Tt, {
                      children: O.jsx(rl, { children: "Current Balance: " }),
                    }),
                    O.jsx(Tt, { children: O.jsx(ll, { children: t.balance }) }),
                  ],
                }),
                O.jsxs(ol, {
                  children: [
                    O.jsx(Tt, {
                      children: O.jsx(rl, { children: "Offer discount: " }),
                    }),
                    O.jsx(Tt, {
                      children: O.jsx(ll, { children: t.discount }),
                    }),
                  ],
                }),
                O.jsxs(ol, {
                  children: [
                    O.jsx(Tt, {
                      children: O.jsx(rl, {
                        children: "Amount after discount: ",
                      }),
                    }),
                    O.jsx(Tt, {
                      children: O.jsx(ll, { children: t.amtAfterDiscount }),
                    }),
                  ],
                }),
                O.jsxs(ol, {
                  children: [
                    O.jsx(Tt, {
                      children: O.jsx(rl, { children: "Number of payments: " }),
                    }),
                    O.jsx(Tt, {
                      children: O.jsx(ll, { children: t.numOfPayments }),
                    }),
                  ],
                }),
                O.jsxs(ol, {
                  children: [
                    O.jsx(Tt, {
                      children: O.jsx(rl, { children: "Payment date: " }),
                    }),
                    O.jsx(Tt, {
                      children: O.jsx(ll, { children: t.paymentDate }),
                    }),
                  ],
                }),
              ],
            }),
            O.jsxs(fh, {
              to: "/acceptOffer",
              children: [" ", O.jsx(h1, { children: "Accept Offer" }), " "],
            }),
          ],
        },
        n
      )
    ),
  });
}
const c1 = re.div`

  @media only screen and ${wn.xs} {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
  }  

  @media only screen and ${wn.md} {
      flex-direction: row !important;
      width: 100% !important;
    }
  
`,
  rl = re.p`
    margin: 0;
    padding: 0;
    display:inline-block;
    text-align: left;
    width: 100%;
`,
  ll = re.p`
    margin: 0;
    padding: 0;
    display:inline-block;
    text-align: right;
    width: 100%;
`,
  f1 = re.div`
    border: 1.5px solid #e6e6e6;
    border-radius: 6px !important;
    margin: 10px 20px;
    padding: 10px;
    box-shadow: 0 0 20px #00000008;
`,
  d1 = re.div`

`,
  Df = re.p`
    text-align: center;
    margin: 2px;
    padding: 2px;
`,
  p1 = re.table`
    width: 100%;

    @media only screen and ${wn.xs} {
      margin: auto;
      padding: 5px;
    } 

    @media only screen and ${wn.lg} {
      margin: 10px 5px 5px 5px !important;
      
    }

   
`,
  ol = re.tr`
`,
  Tt = re.td`
`;
re.div`
  width: 100%;
  margin: auto;
`;
const h1 = re.button`
  margin:0 auto;
  display:block;
  background-color: #9e9e9e70;
`,
  Of = [
    {
      id: "1234567890",
      accountNum: "1122334455",
      creditor: "Citibank",
      merchant: "Target",
      balance: "1,000.00",
    },
  ],
  jf = [
    {
      offerPercent: "10%",
      balance: "1,000.00",
      discount: "100.00",
      amtAfterDiscount: "900.00",
      numOfPayments: "1",
      amtPerPayment: "900.00",
      paymentDate: "01/01/2024",
    },
    {
      offerPercent: "5%",
      balance: "1,000.00",
      discount: "50.00",
      amtAfterDiscount: "950.00",
      numOfPayments: "6",
      amtPerPayment: "158.33",
      paymentDate: "01/01/2024",
    },
  ],
  m1 = [
    {
      id: "654321",
      accountNum: "2223000048410010",
      creditor: "Master Card",
      merchant: "American Eagle Outfitters",
      balance: "3,204.50",
    },
  ],
  v1 = [
    {
      offerPercent: "10%",
      balance: "3,204.50",
      discount: "320.45",
      amtAfterDiscount: "2,884.05",
      numOfPayments: "1",
      amtPerPayment: "900.00",
      paymentDate: "02/15/2024",
    },
    {
      offerPercent: "5%",
      balance: "3,204.50",
      discount: "160.23",
      amtAfterDiscount: "3,044.27",
      numOfPayments: "6",
      amtPerPayment: "507.38",
      paymentDate: "02/15/2024",
    },
  ];
function g1() {
  const [e, t] = N.useState(),
    [n, r] = N.useState(),
    [l, o] = N.useState("test"),
    i = () => {
      try {
        let u = localStorage.getItem("acctInfo"),
          s = localStorage.getItem("offers");
        t(JSON.parse(u)[0]), r(JSON.parse(s));
      } catch (u) {
        console.error(
          "there was an error when getting items in local storage: ",
          u
        );
      }
    },
    a = () => {
      if (l === "test") {
        try {
          localStorage.setItem("acctInfo", JSON.stringify(m1)),
            localStorage.setItem("offers", JSON.stringify(v1));
        } catch (u) {
          console.error("error when setting up local storage: ", u);
          return;
        }
        o("control"), i();
      } else {
        try {
          localStorage.setItem("acctInfo", JSON.stringify(Of)),
            localStorage.setItem("offers", JSON.stringify(jf));
        } catch (u) {
          console.error("error when setting up local storage: ", u);
          return;
        }
        o("test"), i();
      }
    };
  return (
    N.useEffect(() => {
      try {
        if (
          localStorage.hasOwnProperty("acctInfo") &&
          localStorage.hasOwnProperty("offers")
        ) {
          let u = localStorage.getItem("acctInfo"),
            s = JSON.parse(u)[0].id;
          o(s === "1234567890" ? "test" : "control");
        } else
          localStorage.setItem("acctInfo", JSON.stringify(Of)),
            localStorage.setItem("offers", JSON.stringify(jf));
      } catch (u) {
        console.error("error when setting up local storage: ", u);
        return;
      }
      i();
    }, []),
    O.jsx(O.Fragment, {
      children:
        e &&
        n &&
        O.jsxs(y1, {
          children: [
            O.jsx(Xy, { acctInfo: e, switchAcc: l, changeAccInfo: a }),
            O.jsx(n1, { acctInfo: e }),
            O.jsx(s1, { offers: n }),
          ],
        }),
    })
  );
}
const y1 = re.div`
	
	@media only screen and ${wn.xs} {
		width: 100%;
	  }  
	
	  @media only screen and ${wn.md} {
		width: 65% !important;
		}
`;
function w1() {
  return O.jsxs("div", {
    children: [
      "Hooray! You landed on another page! Please go back or click ",
      O.jsx(fh, { to: "/", children: "here" }),
      " to go to home page :) ",
    ],
  });
}
const S1 = j0([
  { path: "/", element: O.jsx(g1, {}) },
  { path: "/acceptOffer", element: O.jsx(w1, {}) },
]);
Ea.createRoot(document.getElementById("root")).render(
  O.jsx(Fn.StrictMode, { children: O.jsx(H0, { router: S1 }) })
);
