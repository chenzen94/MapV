/*! This file is created by gissky */
webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return atan2; });
/* unused harmony export ceil */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return sqrt1_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return sqrt2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return sqrtPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return radians; });
/* harmony export (immutable) */ __webpack_exports__["H"] = sinci;
/* harmony export (immutable) */ __webpack_exports__["i"] = asin;
/* harmony export (immutable) */ __webpack_exports__["d"] = acos;
/* harmony export (immutable) */ __webpack_exports__["e"] = sqrt;
/* harmony export (immutable) */ __webpack_exports__["C"] = tanh;
/* harmony export (immutable) */ __webpack_exports__["D"] = sinh;
/* harmony export (immutable) */ __webpack_exports__["B"] = cosh;
/* harmony export (immutable) */ __webpack_exports__["G"] = arsinh;
/* harmony export (immutable) */ __webpack_exports__["F"] = arcosh;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var ceil = Math.ceil;
var cos = Math.cos;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var max = Math.max;
var min = Math.min;
var pow = Math.pow;
var round = Math.round;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sin = Math.sin;
var tan = Math.tan;

var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var sqrt1_2 = Math.SQRT1_2;
var sqrt2 = sqrt(2);
var sqrtPi = sqrt(pi);
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;

function sinci(x) {
  return x ? x / Math.sin(x) : 1;
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function sqrt(x) {
  return x > 0 ? Math.sqrt(x) : 0;
}

function tanh(x) {
  x = exp(2 * x);
  return (x - 1) / (x + 1);
}

function sinh(x) {
  return (exp(x) - exp(-x)) / 2;
}

function cosh(x) {
  return (exp(x) + exp(-x)) / 2;
}

function arsinh(x) {
  return log(x + sqrt(x * x + 1));
}

function arcosh(x) {
  return log(x + sqrt(x * x - 1));
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_area__ = __webpack_require__(54);
/* unused harmony reexport geoArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_bounds__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__src_bounds__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_centroid__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__src_centroid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_circle__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__src_circle__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_clip_extent__ = __webpack_require__(26);
/* unused harmony reexport geoClipExtent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_contains__ = __webpack_require__(172);
/* unused harmony reexport geoContains */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_distance__ = __webpack_require__(60);
/* unused harmony reexport geoDistance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_graticule__ = __webpack_require__(173);
/* unused harmony reexport geoGraticule */
/* unused harmony reexport geoGraticule10 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_interpolate__ = __webpack_require__(174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__src_interpolate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_length__ = __webpack_require__(61);
/* unused harmony reexport geoLength */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_path_index__ = __webpack_require__(178);
/* unused harmony reexport geoPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_projection_albers__ = __webpack_require__(65);
/* unused harmony reexport geoAlbers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_projection_albersUsa__ = __webpack_require__(181);
/* unused harmony reexport geoAlbersUsa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_projection_azimuthalEqualArea__ = __webpack_require__(182);
/* unused harmony reexport geoAzimuthalEqualArea */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_13__src_projection_azimuthalEqualArea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_projection_azimuthalEquidistant__ = __webpack_require__(183);
/* unused harmony reexport geoAzimuthalEquidistant */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_14__src_projection_azimuthalEquidistant__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_projection_conicConformal__ = __webpack_require__(184);
/* unused harmony reexport geoConicConformal */
/* unused harmony reexport geoConicConformalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_projection_conicEqualArea__ = __webpack_require__(29);
/* unused harmony reexport geoConicEqualArea */
/* unused harmony reexport geoConicEqualAreaRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_projection_conicEquidistant__ = __webpack_require__(185);
/* unused harmony reexport geoConicEquidistant */
/* unused harmony reexport geoConicEquidistantRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_projection_equirectangular__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_18__src_projection_equirectangular__["b"]; });
/* unused harmony reexport geoEquirectangularRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_projection_gnomonic__ = __webpack_require__(187);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_19__src_projection_gnomonic__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_19__src_projection_gnomonic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_projection_identity__ = __webpack_require__(188);
/* unused harmony reexport geoIdentity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_projection_index__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_21__src_projection_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_21__src_projection_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_projection_mercator__ = __webpack_require__(31);
/* unused harmony reexport geoMercator */
/* unused harmony reexport geoMercatorRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_projection_orthographic__ = __webpack_require__(189);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_23__src_projection_orthographic__["a"]; });
/* unused harmony reexport geoOrthographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_projection_stereographic__ = __webpack_require__(191);
/* unused harmony reexport geoStereographic */
/* unused harmony reexport geoStereographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_projection_transverseMercator__ = __webpack_require__(192);
/* unused harmony reexport geoTransverseMercator */
/* unused harmony reexport geoTransverseMercatorRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_rotation__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_26__src_rotation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_stream__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_27__src_stream__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_transform__ = __webpack_require__(20);
/* unused harmony reexport geoTransform */




 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).


























/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return exp; });
/* unused harmony export floor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return tan; });
/* harmony export (immutable) */ __webpack_exports__["r"] = acos;
/* harmony export (immutable) */ __webpack_exports__["f"] = asin;
/* harmony export (immutable) */ __webpack_exports__["u"] = haversin;
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clip_circle__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip_extent__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rotation__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fit__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resample__ = __webpack_require__(190);
/* harmony export (immutable) */ __webpack_exports__["a"] = projection;
/* harmony export (immutable) */ __webpack_exports__["b"] = projectionMutator;











var transformRadians = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__transform__["a" /* transformer */])({
  point: function(x, y) {
    this.stream.point(x * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], y * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */]);
  }
});

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      dx, dy, lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, // rotate
      theta = null, preclip = __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["a" /* default */], // clip angle
      x0 = null, y0, x1, y1, postclip = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */], // clip extent
      delta2 = 0.5, projectResample = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__resample__["a" /* default */])(projectTransform, delta2), // precision
      cache,
      cacheStream;

  function projection(point) {
    point = projectRotate(point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */]);
    return [point[0] * k + dx, dy - point[1] * k];
  }

  function invert(point) {
    point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
    return point && [point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  }

  function projectTransform(x, y) {
    return x = project(x, y), [x[0] * k + dx, dy - x[1] * k];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(preclip(rotate, projectResample(postclip(cacheStream = stream))));
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__clip_circle__["a" /* default */])(theta = _ * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], 6 * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */]) : (theta = null, __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["a" /* default */]), reset()) : theta * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */];
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__clip_extent__["a" /* clipExtent */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], phi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], recenter()) : [lambda * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], phi * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], deltaPhi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], deltaGamma = _.length > 2 ? _[2] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */] : 0, recenter()) : [deltaLambda * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], deltaPhi * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], deltaGamma * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__resample__["a" /* default */])(projectTransform, delta2 = _ * _), reset()) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math__["n" /* sqrt */])(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__fit__["a" /* fitExtent */])(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__fit__["b" /* fitSize */])(projection, size, object);
  };

  function recenter() {
    projectRotate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__compose__["a" /* default */])(rotate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__rotation__["b" /* rotateRadians */])(deltaLambda, deltaPhi, deltaGamma), project);
    var center = project(lambda, phi);
    dx = x - center[0] * k;
    dy = y + center[1] * k;
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["d"] = mollweideBromleyTheta;
/* harmony export (immutable) */ __webpack_exports__["c"] = mollweideBromleyRaw;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mollweideRaw; });



function mollweideBromleyTheta(cp, phi) {
  var cpsinPhi = cp * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi), i = 30, delta;
  do phi -= delta = (phi + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi) - cpsinPhi) / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi));
  while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] && --i > 0);
  return phi / 2;
}

function mollweideBromleyRaw(cx, cy, cp) {

  function forward(lambda, phi) {
    return [cx * lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi = mollweideBromleyTheta(cp, phi)), cy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi)];
  }

  forward.invert = function(x, y) {
    return y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(y / cy), [x / (cx * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(y)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])((2 * y + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(2 * y)) / cp)];
  };

  return forward;
}

var mollweideRaw = mollweideBromleyRaw(__WEBPACK_IMPORTED_MODULE_1__math__["l" /* sqrt2 */] / __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */], __WEBPACK_IMPORTED_MODULE_1__math__["l" /* sqrt2 */], __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(mollweideRaw)
      .scale(169.529);
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = noop;
function noop() {}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);




function pointEqual(a, b) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* abs */])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* abs */])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */];
}

function interpolateLine(coordinates, m) {
  var i = -1,
      n = coordinates.length,
      p0 = coordinates[0],
      p1,
      dx,
      dy,
      resampled = [];
  while (++i < n) {
    p1 = coordinates[i];
    dx = (p1[0] - p0[0]) / m;
    dy = (p1[1] - p0[1]) / m;
    for (var j = 0; j < m; ++j) resampled.push([p0[0] + j * dx, p0[1] + j * dy]);
    p0 = p1;
  }
  resampled.push(p1);
  return resampled;
}

function interpolateSphere(lobes) {
  var coordinates = [],
      lobe,
      lambda0, phi0, phi1,
      lambda2, phi2,
      i, n = lobes[0].length;

  // Northern Hemisphere
  for (i = 0; i < n; ++i) {
    lobe = lobes[0][i];
    lambda0 = lobe[0][0], phi0 = lobe[0][1], phi1 = lobe[1][1];
    lambda2 = lobe[2][0], phi2 = lobe[2][1];
    coordinates.push(interpolateLine([
      [lambda0 + __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */], phi0 + __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */]],
      [lambda0 + __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */], phi1 - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */]],
      [lambda2 - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */], phi1 - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */]],
      [lambda2 - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */], phi2 + __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */]]
    ], 30));
  }

  // Southern Hemisphere
  for (i = lobes[1].length - 1; i >= 0; --i) {
    lobe = lobes[1][i];
    lambda0 = lobe[0][0], phi0 = lobe[0][1], phi1 = lobe[1][1];
    lambda2 = lobe[2][0], phi2 = lobe[2][1];
    coordinates.push(interpolateLine([
      [lambda2 - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */], phi2 - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */]],
      [lambda2 - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */], phi1 + __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */]],
      [lambda0 + __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */], phi1 + __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */]],
      [lambda0 + __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */], phi0 - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */]]
    ], 30));
  }

  return {
    type: "Polygon",
    coordinates: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* merge */])(coordinates)]
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(project, lobes) {
  var sphere = interpolateSphere(lobes);

  lobes = lobes.map(function(lobe) {
    return lobe.map(function(l) {
      return [
        [l[0][0] * __WEBPACK_IMPORTED_MODULE_2__math__["o" /* radians */], l[0][1] * __WEBPACK_IMPORTED_MODULE_2__math__["o" /* radians */]],
        [l[1][0] * __WEBPACK_IMPORTED_MODULE_2__math__["o" /* radians */], l[1][1] * __WEBPACK_IMPORTED_MODULE_2__math__["o" /* radians */]],
        [l[2][0] * __WEBPACK_IMPORTED_MODULE_2__math__["o" /* radians */], l[2][1] * __WEBPACK_IMPORTED_MODULE_2__math__["o" /* radians */]]
      ];
    });
  });

  var bounds = lobes.map(function(lobe) {
    return lobe.map(function(l) {
      var x0 = project(l[0][0], l[0][1])[0],
          x1 = project(l[2][0], l[2][1])[0],
          y0 = project(l[1][0], l[0][1])[1],
          y1 = project(l[1][0], l[1][1])[1],
          t;
      if (y0 > y1) t = y0, y0 = y1, y1 = t;
      return [[x0, y0], [x1, y1]];
    });
  });

  function forward(lambda, phi) {
    var sign = phi < 0 ? -1 : +1, lobe = lobes[+(phi < 0)];
    for (var i = 0, n = lobe.length - 1; i < n && lambda > lobe[i][2][0]; ++i);
    var p = project(lambda - lobe[i][1][0], phi);
    p[0] += project(lobe[i][1][0], sign * phi > sign * lobe[i][0][1] ? lobe[i][0][1] : phi)[0];
    return p;
  }

  // Assumes mutually exclusive bounding boxes for lobes.
  if (project.invert) forward.invert = function(x, y) {
    var bound = bounds[+(y < 0)], lobe = lobes[+(y < 0)];
    for (var i = 0, n = bound.length; i < n; ++i) {
      var b = bound[i];
      if (b[0][0] <= x && x < b[1][0] && b[0][1] <= y && y < b[1][1]) {
        var p = project.invert(x - project(lobe[i][1][0], 0)[0], y);
        p[0] += lobe[i][1][0];
        return pointEqual(forward(p[0], p[1]), [x, y]) ? p : null;
      }
    }
  };

  var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_geo__["a" /* geoProjection */])(forward),
      stream_ = p.stream;

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_geo__["g" /* geoStream */])(sphere, sphereStream); };
    return rotateStream;
  };

  return p;
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ __webpack_exports__["a"] = (function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function(projectAt) {
  var phi0 = 0,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["f" /* geoProjectionMutator */])(projectAt),
      p = m(phi0);

  p.parallel = function(_) {
    return arguments.length ? m(phi0 = _ * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]) : phi0 * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */];
  };

  return p;
});


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new Adder;
});

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add(temp, y, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bisect__ = __webpack_require__(33);
/* unused harmony reexport bisect */
/* unused harmony reexport bisectRight */
/* unused harmony reexport bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ascending__ = __webpack_require__(8);
/* unused harmony reexport ascending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_bisector__ = __webpack_require__(34);
/* unused harmony reexport bisector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cross__ = __webpack_require__(71);
/* unused harmony reexport cross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_descending__ = __webpack_require__(72);
/* unused harmony reexport descending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_deviation__ = __webpack_require__(35);
/* unused harmony reexport deviation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_extent__ = __webpack_require__(36);
/* unused harmony reexport extent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_histogram__ = __webpack_require__(73);
/* unused harmony reexport histogram */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__ = __webpack_require__(83);
/* unused harmony reexport thresholdFreedmanDiaconis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__ = __webpack_require__(84);
/* unused harmony reexport thresholdScott */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__ = __webpack_require__(40);
/* unused harmony reexport thresholdSturges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_max__ = __webpack_require__(75);
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_mean__ = __webpack_require__(76);
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_median__ = __webpack_require__(77);
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_merge__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_14__src_merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_min__ = __webpack_require__(37);
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_pairs__ = __webpack_require__(38);
/* unused harmony reexport pairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_permute__ = __webpack_require__(79);
/* unused harmony reexport permute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_quantile__ = __webpack_require__(21);
/* unused harmony reexport quantile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_range__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_19__src_range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_scan__ = __webpack_require__(80);
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_shuffle__ = __webpack_require__(81);
/* unused harmony reexport shuffle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sum__ = __webpack_require__(82);
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_ticks__ = __webpack_require__(41);
/* unused harmony reexport ticks */
/* unused harmony reexport tickStep */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_transpose__ = __webpack_require__(42);
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_variance__ = __webpack_require__(43);
/* unused harmony reexport variance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_zip__ = __webpack_require__(85);
/* unused harmony reexport zip */





























/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = sinusoidalRaw;



function sinusoidalRaw(lambda, phi) {
  return [lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi), phi];
}

sinusoidalRaw.invert = function(x, y) {
  return [x / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(y), y];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(sinusoidalRaw)
      .scale(152.63);
});


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["f"] = spherical;
/* harmony export (immutable) */ __webpack_exports__["a"] = cartesian;
/* harmony export (immutable) */ __webpack_exports__["c"] = cartesianDot;
/* harmony export (immutable) */ __webpack_exports__["b"] = cartesianCross;
/* harmony export (immutable) */ __webpack_exports__["e"] = cartesianAddInPlace;
/* harmony export (immutable) */ __webpack_exports__["d"] = cartesianScale;
/* harmony export (immutable) */ __webpack_exports__["g"] = cartesianNormalizeInPlace;


function spherical(cartesian) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(cartesian[1], cartesian[0]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi);
  return [cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(lambda), cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(lambda), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["b"] = azimuthalRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = azimuthalInvert;


function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(x),
        cy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y),
        k = scale(cx * cy);
    return [
      k * cy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x),
      k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(x * x + y * y),
        c = angle(z),
        sc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(c),
        cc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(c);
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x * sc, z * cc),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(z && y * sc / z)
    ];
  }
}


/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c, d, e, f, g, h) {
  if (arguments.length < 8) h = 0;

  function forward(lambda, phi) {
    if (!phi) return [a * lambda / __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */], 0];
    var phi2 = phi * phi,
        xB = a + phi2 * (b + phi2 * (c + phi2 * d)),
        yB = phi * (e - 1 + phi2 * (f - h + phi2 * g)),
        m = (xB * xB + yB * yB) / (2 * yB),
        alpha = lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* asin */])(xB / m) / __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */];
    return [m * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(alpha), phi * (1 + phi2 * h) + m * (1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(alpha))];
  }

  forward.invert = function(x, y) {
    var lambda = __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */] * x / a,
        phi = y,
        deltaLambda, deltaPhi, i = 50;
    do {
      var phi2 = phi * phi,
          xB = a + phi2 * (b + phi2 * (c + phi2 * d)),
          yB = phi * (e - 1 + phi2 * (f - h + phi2 * g)),
          p = xB * xB + yB * yB,
          q = 2 * yB,
          m = p / q,
          m2 = m * m,
          dAlphadLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* asin */])(xB / m) / __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */],
          alpha = lambda * dAlphadLambda,
          xB2 = xB * xB,
          dxBdPhi = (2 * b + phi2 * (4 * c + phi2 * 6 * d)) * phi,
          dyBdPhi = e + phi2 * (3 * f + phi2 * 5 * g),
          dpdPhi = 2 * (xB * dxBdPhi + yB * (dyBdPhi - 1)),
          dqdPhi = 2 * (dyBdPhi - 1),
          dmdPhi = (dpdPhi * q - p * dqdPhi) / (q * q),
          cosAlpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(alpha),
          sinAlpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(alpha),
          mcosAlpha = m * cosAlpha,
          msinAlpha = m * sinAlpha,
          dAlphadPhi = ((lambda / __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */]) * (1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* sqrt */])(1 - xB2 / m2)) * (dxBdPhi * m - xB * dmdPhi)) / m2,
          fx = msinAlpha - x,
          fy = phi * (1 + phi2 * h) + m - mcosAlpha - y,
          deltaxDeltaPhi = dmdPhi * sinAlpha + mcosAlpha * dAlphadPhi,
          deltaxDeltaLambda = mcosAlpha * dAlphadLambda,
          deltayDeltaPhi = 1 + dmdPhi - (dmdPhi * cosAlpha - msinAlpha * dAlphadPhi),
          deltayDeltaLambda = msinAlpha * dAlphadLambda,
          denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda;
      if (!denominator) break;
      lambda -= deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator;
      phi -= deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
    } while ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* abs */])(deltaLambda) > __WEBPACK_IMPORTED_MODULE_0__math__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* abs */])(deltaPhi) > __WEBPACK_IMPORTED_MODULE_0__math__["g" /* epsilon */]) && --i > 0);
    return [lambda, phi];
  };

  return forward;
});


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix__ = __webpack_require__(143);




// Creates a polyhedral projection.
//  * root: a spanning tree of polygon faces.  Nodes are automatically
//    augmented with a transform matrix.
//  * face: a function that returns the appropriate node for a given {lambda, phi}
//    point (radians).
//  * r: rotation angle for final polyhedral net.  Defaults to -pi / 6 (for
//    butterflies).
/* harmony default export */ __webpack_exports__["a"] = (function(root, face, r) {

  r = r == null ? -__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 6 : r; // TODO automate

  recurse(root, {transform: [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(r), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(r), 0,
    -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(r), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(r), 0
  ]});

  function recurse(node, parent) {
    node.edges = faceEdges(node.face);
    // Find shared edge.
    if (parent.face) {
      var shared = node.shared = sharedEdge(node.face, parent.face),
          m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__matrix__["a" /* default */])(shared.map(parent.project), shared.map(node.project));
      node.transform = parent.transform ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__matrix__["b" /* multiply */])(parent.transform, m) : m;
      // Replace shared edge in parent edges array.
      var edges = parent.edges;
      for (var i = 0, n = edges.length; i < n; ++i) {
        if (pointEqual(shared[0], edges[i][1]) && pointEqual(shared[1], edges[i][0])) edges[i] = node;
        if (pointEqual(shared[0], edges[i][0]) && pointEqual(shared[1], edges[i][1])) edges[i] = node;
      }
      edges = node.edges;
      for (i = 0, n = edges.length; i < n; ++i) {
        if (pointEqual(shared[0], edges[i][0]) && pointEqual(shared[1], edges[i][1])) edges[i] = parent;
        if (pointEqual(shared[0], edges[i][1]) && pointEqual(shared[1], edges[i][0])) edges[i] = parent;
      }
    } else {
      node.transform = parent.transform;
    }
    if (node.children) {
      node.children.forEach(function(child) {
        recurse(child, node);
      });
    }
    return node;
  }

  function forward(lambda, phi) {
    var node = face(lambda, phi),
        point = node.project([lambda * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */], phi * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */]]),
        t;
    if (t = node.transform) {
      return [
        t[0] * point[0] + t[1] * point[1] + t[2],
        -(t[3] * point[0] + t[4] * point[1] + t[5])
      ];
    }
    point[1] = -point[1];
    return point;
  }

  // Naive inverse!  A faster solution would use bounding boxes, or even a
  // polygonal quadtree.
  if (hasInverse(root)) forward.invert = function(x, y) {
    var coordinates = faceInvert(root, [x, -y]);
    return coordinates && (coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */], coordinates);
  };

  function faceInvert(node, coordinates) {
    var invert = node.project.invert,
        t = node.transform,
        point = coordinates;
    if (t) {
      t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__matrix__["c" /* inverse */])(t);
      point = [
        t[0] * point[0] + t[1] * point[1] + t[2],
        (t[3] * point[0] + t[4] * point[1] + t[5])
      ];
    }
    if (invert && node === faceDegrees(p = invert(point))) return p;
    var p,
        children = node.children;
    for (var i = 0, n = children && children.length; i < n; ++i) {
      if (p = faceInvert(children[i], coordinates)) return p;
    }
  }

  function faceDegrees(coordinates) {
    return face(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]);
  }

  var proj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(forward),
      stream_ = proj.stream;

  proj.stream = function(stream) {
    var rotate = proj.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (proj.rotate([0, 0]), stream_(stream));
    proj.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart();
      sphereStream.lineStart();
      outline(sphereStream, root);
      sphereStream.lineEnd();
      sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return proj;
});

function outline(stream, node, parent) {
  var point,
      edges = node.edges,
      n = edges.length,
      edge,
      multiPoint = {type: "MultiPoint", coordinates: node.face},
      notPoles = node.face.filter(function(d) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(d[1]) !== 90; }),
      b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["j" /* geoBounds */])({type: "MultiPoint", coordinates: notPoles}),
      inside = false,
      j = -1,
      dx = b[1][0] - b[0][0];
  // TODO
  var c = dx === 180 || dx === 360
      ? [(b[0][0] + b[1][0]) / 2, (b[0][1] + b[1][1]) / 2]
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["h" /* geoCentroid */])(multiPoint);
  // First find the shared edge…
  if (parent) while (++j < n) {
    if (edges[j] === parent) break;
  }
  ++j;
  for (var i = 0; i < n; ++i) {
    edge = edges[(i + j) % n];
    if (Array.isArray(edge)) {
      if (!inside) {
        stream.point((point = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["c" /* geoInterpolate */])(edge[0], c)(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]))[0], point[1]);
        inside = true;
      }
      stream.point((point = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["c" /* geoInterpolate */])(edge[1], c)(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]))[0], point[1]);
    } else {
      inside = false;
      if (edge !== parent) outline(stream, edge, node);
    }
  }
}

// Tests equality of two spherical points.
function pointEqual(a, b) {
  return a && b && a[0] === b[0] && a[1] === b[1];
}

// Finds a shared edge given two clockwise polygons.
function sharedEdge(a, b) {
  var x, y, n = a.length, found = null;
  for (var i = 0; i < n; ++i) {
    x = a[i];
    for (var j = b.length; --j >= 0;) {
      y = b[j];
      if (x[0] === y[0] && x[1] === y[1]) {
        if (found) return [found, x];
        found = x;
      }
    }
  }
}

// Converts an array of n face vertices to an array of n + 1 edges.
function faceEdges(face) {
  var n = face.length,
      edges = [];
  for (var a = face[n - 1], i = 0; i < n; ++i) edges.push([a, a = face[i]]);
  return edges;
}

function hasInverse(node) {
  return node.project.invert || node.children && node.children.some(hasInverse);
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["b"] = rotateRadians;



function rotationIdentity(lambda, phi) {
  return [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */] : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= __WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */]) ? (deltaPhi || deltaGamma ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */] : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(deltaPhi),
      sinDeltaPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(deltaPhi),
      cosDeltaGamma = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(deltaGamma),
      sinDeltaGamma = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi),
        x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(lambda) * cosPhi,
        y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(lambda) * cosPhi,
        z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* asin */])(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi),
        x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(lambda) * cosPhi,
        y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(lambda) * cosPhi,
        z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* asin */])(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

/* harmony default export */ __webpack_exports__["a"] = (function(rotate) {
  rotate = rotateRadians(rotate[0] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], rotate[1] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], rotate.length > 2 ? rotate[2] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */] : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates;
  };

  return forward;
});


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transformer;
/* unused harmony default export */ var _unused_webpack_default_export = (function(methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(12);


/* harmony default export */ __webpack_exports__["a"] = (function(array, p, f) {
  if (f == null) f = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = array.length)) return;
  if ((p = +p) <= 0 || n < 2) return +f(array[0], 0, array);
  if (p >= 1) return +f(array[n - 1], n - 1, array);
  var n,
      h = (n - 1) * p,
      i = Math.floor(h),
      a = +f(array[i], i, array),
      b = +f(array[i + 1], i + 1, array);
  return a + (b - a) * (h - i);
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = collignonRaw;



function collignonRaw(lambda, phi) {
  var alpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi));
  return [(2 / __WEBPACK_IMPORTED_MODULE_1__math__["A" /* sqrtPi */]) * lambda * alpha, __WEBPACK_IMPORTED_MODULE_1__math__["A" /* sqrtPi */] * (1 - alpha)];
}

collignonRaw.invert = function(x, y) {
  var lambda = (lambda = y / __WEBPACK_IMPORTED_MODULE_1__math__["A" /* sqrtPi */] - 1) * lambda;
  return [lambda > 0 ? x * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / lambda) / 2 : 0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(1 - lambda)];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(collignonRaw)
      .scale(95.6464)
      .center([0, 30]);
});


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// TODO generate on-the-fly to avoid external modification.
var octahedron = [
  [0, 90],
  [-90, 0], [0, 0], [90, 0], [180, 0],
  [0, -90]
];

/* harmony default export */ __webpack_exports__["a"] = ([
  [0, 2, 1],
  [0, 3, 2],
  [5, 1, 2],
  [5, 2, 3],
  [0, 1, 4],
  [0, 4, 3],
  [5, 4, 1],
  [5, 3, 4]
].map(function(face) {
  return face.map(function(i) {
    return octahedron[i];
  });
}));


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function(project) {
  var dx = project(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */], 0)[0] - project(-__WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */], 0)[0];

  function projectQuincuncial(lambda, phi) {
    var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(lambda) < __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */],
        p = project(t ? lambda : lambda > 0 ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] : lambda + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */], phi),
        x = (p[0] - p[1]) * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* sqrt1_2 */],
        y = (p[0] + p[1]) * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* sqrt1_2 */];
    if (t) return [x, y];
    var d = dx * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* sqrt1_2 */],
        s = x > 0 ^ y > 0 ? -1 : 1;
    return [s * x - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(y) * d, s * y - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(x) * d];
  }

  if (project.invert) projectQuincuncial.invert = function(x0, y0) {
    var x = (x0 + y0) * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* sqrt1_2 */],
        y = (y0 - x0) * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* sqrt1_2 */],
        t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(x) < 0.5 * dx && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y) < 0.5 * dx;

    if (!t) {
      var d = dx * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* sqrt1_2 */],
          s = x > 0 ^ y > 0 ? -1 : 1,
          x1 = -s * (x0 + (y > 0 ? 1 : -1) * d),
          y1 = -s * (y0 + (x > 0 ? 1 : -1) * d);
      x = (-x1 - y1) * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* sqrt1_2 */];
      y = (x1 - y1) * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* sqrt1_2 */];
    }

    var p = project.invert(x, y);
    if (!t) p[0] += x > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */];
    return p;
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(projectQuincuncial)
      .rotate([-90, -90, 45])
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mollweide__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sinusoidal__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sinuMollweidePhi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sinuMollweideY; });
/* harmony export (immutable) */ __webpack_exports__["b"] = sinuMollweideRaw;




var sinuMollweidePhi = 0.7109889596207567;

var sinuMollweideY = 0.0528035274542;

function sinuMollweideRaw(lambda, phi) {
  return phi > -sinuMollweidePhi
      ? (lambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mollweide__["b" /* mollweideRaw */])(lambda, phi), lambda[1] += sinuMollweideY, lambda)
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sinusoidal__["b" /* sinusoidalRaw */])(lambda, phi);
}

sinuMollweideRaw.invert = function(x, y) {
  return y > -sinuMollweidePhi
      ? __WEBPACK_IMPORTED_MODULE_1__mollweide__["b" /* mollweideRaw */].invert(x, y - sinuMollweideY)
      : __WEBPACK_IMPORTED_MODULE_2__sinusoidal__["b" /* sinusoidalRaw */].invert(x, y);
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(sinuMollweideRaw)
      .rotate([-20, -55])
      .scale(164.263)
      .center([0, -5.4036]);
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polygon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(11);
/* harmony export (immutable) */ __webpack_exports__["a"] = clipExtent;






var clipMax = 1e9, clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipExtent(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(p[0] - x0) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */] ? direction > 0 ? 0 : 3
        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(p[0] - x1) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */] ? direction > 0 ? 2 : 1
        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(p[1] - y0) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */] ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__buffer__["a" /* default */])(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_array__["a" /* merge */])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__polygon__["a" /* default */])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__line__["a" /* default */])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = clipExtent(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = conicProjection;



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = __WEBPACK_IMPORTED_MODULE_0__math__["a" /* pi */] / 3,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["b" /* projectionMutator */])(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */], phi1 = _[1] * __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */]) : [phi0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], phi1 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
  };

  return p;
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__ = __webpack_require__(186);
/* unused harmony export conicEqualAreaRaw */




function conicEqualAreaRaw(y0, y1) {
  var sy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y0), n = (sy0 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__["a" /* cylindricalEqualAreaRaw */])(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(c) / n;

  function project(x, y) {
    var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(c - 2 * n * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y)) / n;
    return [r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x *= n), r0 - r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(r0y)) / n * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(r0y), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
});


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stream__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_bounds__ = __webpack_require__(62);
/* harmony export (immutable) */ __webpack_exports__["a"] = fitExtent;
/* harmony export (immutable) */ __webpack_exports__["b"] = fitSize;



function fitExtent(projection, extent, object) {
  var w = extent[1][0] - extent[0][0],
      h = extent[1][1] - extent[0][1],
      clip = projection.clipExtent && projection.clipExtent();

  projection
      .scale(150)
      .translate([0, 0]);

  if (clip != null) projection.clipExtent(null);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stream__["a" /* default */])(object, projection.stream(__WEBPACK_IMPORTED_MODULE_1__path_bounds__["a" /* default */]));

  var b = __WEBPACK_IMPORTED_MODULE_1__path_bounds__["a" /* default */].result(),
      k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
      x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
      y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;

  if (clip != null) projection.clipExtent(clip);

  return projection
      .scale(k * 150)
      .translate([x, y]);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rotation__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["b"] = mercatorRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = mercatorProjection;




function mercatorRaw(lambda, phi) {
  return [lambda, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["l" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* exp */])(y)) - __WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */]];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / __WEBPACK_IMPORTED_MODULE_0__math__["b" /* tau */]);
});

function mercatorProjection(project) {
  var m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = __WEBPACK_IMPORTED_MODULE_0__math__["a" /* pi */] * scale(),
        t = m(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__rotation__["a" /* default */])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(34);
/* unused harmony export bisectRight */
/* unused harmony export bisectLeft */



var ascendingBisect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["a"] = (bisectRight);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(43);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var i = -1,
      n = array.length,
      a,
      b,
      c;

  if (f == null) {
    while (++i < n) if ((b = array[i]) != null && b >= b) { a = c = b; break; }
    while (++i < n) if ((b = array[i]) != null) {
      if (a > b) a = b;
      if (c < b) c = b;
    }
  }

  else {
    while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = c = b; break; }
    while (++i < n) if ((b = f(array[i], i, array)) != null) {
      if (a > b) a = b;
      if (c < b) c = b;
    }
  }

  return [a, c];
});


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var i = -1,
      n = array.length,
      a,
      b;

  if (f == null) {
    while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
    while (++i < n) if ((b = array[i]) != null && a > b) a = b;
  }

  else {
    while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
    while (++i < n) if ((b = f(array[i], i, array)) != null && a > b) a = b;
  }

  return a;
});


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pair;
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range__ = __webpack_require__(39);
/* unused harmony export tickStep */


var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, count) {
  var step = tickStep(start, stop, count);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__range__["a" /* default */])(
    Math.ceil(start / step) * step,
    Math.floor(stop / step) * step + step / 2, // inclusive
    step
  );
});

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(37);


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(12);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var n = array.length,
      m = 0,
      a,
      d,
      s = 0,
      i = -1,
      j = 0;

  if (f == null) {
    while (++i < n) {
      if (!isNaN(a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(array[i]))) {
        d = a - m;
        m += d / ++j;
        s += d * (a - m);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(f(array[i], i, array)))) {
        d = a - m;
        m += d / ++j;
        s += d * (a - m);
      }
    }
  }

  if (j > 1) return s / (j - 1);
});


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = aitoffRaw;



function aitoffRaw(x, y) {
  var cosy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(y), sincia = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["H" /* sinci */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(cosy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(x /= 2)));
  return [2 * cosy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(x) * sincia, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(y) * sincia];
}

// Abort if [x, y] is not within an ellipse centered at [0, 0] with
// semi-major axis pi and semi-minor axis pi/2.
aitoffRaw.invert = function(x, y) {
  if (x * x + 4 * y * y > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] + __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return;
  var x1 = x, y1 = y, i = 25;
  do {
    var sinx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(x1),
        sinx_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(x1 / 2),
        cosx_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(x1 / 2),
        siny = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(y1),
        cosy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(y1),
        sin_2y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(2 * y1),
        sin2y = siny * siny,
        cos2y = cosy * cosy,
        sin2x_2 = sinx_2 * sinx_2,
        c = 1 - cos2y * cosx_2 * cosx_2,
        e = c ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(cosy * cosx_2) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(f = 1 / c) : f = 0,
        f,
        fx = 2 * e * cosy * sinx_2 - x,
        fy = e * siny - y,
        dxdx = f * (cos2y * sin2x_2 + e * cosy * cosx_2 * sin2y),
        dxdy = f * (0.5 * sinx * sin_2y - e * 2 * siny * sinx_2),
        dydx = f * 0.25 * (sin_2y * sinx_2 - e * siny * cos2y * sinx),
        dydy = f * (sin2y * cosx_2 + e * sin2x_2 * cosy),
        z = dxdy * dydx - dydy * dxdx;
    if (!z) break;
    var dx = (fy * dxdy - fx * dydy) / z,
        dy = (fx * dydx - fy * dxdx) / z;
    x1 -= dx, y1 -= dy;
  } while ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(dx) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(dy) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) && --i > 0);
  return [x1, y1];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(aitoffRaw)
      .scale(152.63);
});


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = augustRaw;



function augustRaw(lambda, phi) {
  var tanPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(phi / 2),
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - tanPhi * tanPhi),
      c = 1 + k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda /= 2),
      x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda) * k / c,
      y = tanPhi / c,
      x2 = x * x,
      y2 = y * y;
  return [
    4 / 3 * x * (3 + x2 - 3 * y2),
    4 / 3 * y * (3 + 3 * x2 - y2)
  ];
}

augustRaw.invert = function(x, y) {
  x *= 3 / 8, y *= 3 / 8;
  if (!x && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y) > 1) return null;
  var x2 = x * x,
      y2 = y * y,
      s = 1 + x2 + y2,
      sin3Eta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])((s - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(s * s - 4 * y * y)) / 2),
      eta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(sin3Eta) / 3,
      xi = sin3Eta ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* arcosh */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y / sin3Eta)) / 3 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["G" /* arsinh */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(x)) / 3,
      cosEta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(eta),
      coshXi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* cosh */])(xi),
      d = coshXi * coshXi - cosEta * cosEta;
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(x) * 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["D" /* sinh */])(xi) * cosEta, 0.25 - d),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(y) * 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(coshXi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(eta), 0.25 + d)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(augustRaw)
      .scale(66.1603);
});


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mollweide__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = boggsRaw;




var k = 2.00276,
    w = 1.11072;

function boggsRaw(lambda, phi) {
  var theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mollweide__["d" /* mollweideBromleyTheta */])(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* pi */], phi);
  return [k * lambda / (1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(phi) + w / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(theta)), (phi + __WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(theta)) / k];
}

boggsRaw.invert = function(x, y) {
  var ky = k * y, theta = y < 0 ? -__WEBPACK_IMPORTED_MODULE_2__math__["q" /* quarterPi */] : __WEBPACK_IMPORTED_MODULE_2__math__["q" /* quarterPi */], i = 25, delta, phi;
  do {
    phi = ky - __WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(theta);
    theta -= delta = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(2 * theta) + 2 * theta - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(phi)) / (2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(2 * theta) + 2 + __WEBPACK_IMPORTED_MODULE_2__math__["k" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(phi) * __WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(theta));
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */] && --i > 0);
  phi = ky - __WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(theta);
  return [x * (1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(phi) + w / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(theta)) / k, phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(boggsRaw)
      .scale(160.857);
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallel1__ = __webpack_require__(9);
/* harmony export (immutable) */ __webpack_exports__["b"] = cylindricalEqualAreaRaw;



function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* asin */])(y * cosPhi0)];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parallel1__["a" /* default */])(cylindricalEqualAreaRaw)
      .parallel(38.58) // acos(sqrt(width / height / pi)) * radians
      .scale(195.044); // width / (sqrt(width / height / pi) * 2 * pi)
});


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__square__ = __webpack_require__(52);
/* harmony export (immutable) */ __webpack_exports__["b"] = gringortenRaw;




function gringortenRaw(lambda, phi) {
  var sLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(lambda),
      sPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(phi),
      cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
      x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda) * cosPhi,
      y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda) * cosPhi,
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(sPhi * phi);
  lambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(y, z));
  phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(x);
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(lambda - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) lambda %= __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */];
  var point = gringortenHexadecant(lambda > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 4 ? __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] - lambda : lambda, phi);
  if (lambda > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 4) z = point[0], point[0] = -point[1], point[1] = -z;
  return (point[0] *= sLambda, point[1] *= -sPhi, point);
}

gringortenRaw.invert = function(x, y) {
  var sx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(x),
      sy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(y),
      x0 = -sx * x,
      y0 = -sy * y,
      t = y0 / x0 < 1,
      p = gringortenHexadecantInvert(t ? y0 : x0, t ? x0 : y0),
      lambda = p[0],
      phi = p[1],
      cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi);
  if (t) lambda = -__WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] - lambda;
  return [sx * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda) * cosPhi, -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi)) + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]), sy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda) * cosPhi)];
};

function gringortenHexadecant(lambda, phi) {
  if (phi === __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) return [0, 0];

  var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi),
      r = sinPhi * sinPhi,
      r2 = r * r,
      j = 1 + r2,
      k = 1 + 3 * r2,
      q = 1 - r2,
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(j)),
      v = q + r * j * z,
      p2 = (1 - sinPhi) / v,
      p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(p2),
      a2 = p2 * j,
      a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(a2),
      h = p * q,
      x,
      i;

  if (lambda === 0) return [0, -(h + r * a)];

  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
      secPhi = 1 / cosPhi,
      drdPhi = 2 * sinPhi * cosPhi,
      dvdPhi = (-3 * r + z * k) * drdPhi,
      dp2dPhi = (-v * cosPhi - (1 - sinPhi) * dvdPhi) / (v * v),
      dpdPhi = (0.5 * dp2dPhi) / p,
      dhdPhi = q * dpdPhi - 2 * r * p * drdPhi,
      dra2dPhi = r * j * dp2dPhi + p2 * k * drdPhi,
      mu = -secPhi * drdPhi,
      nu = -secPhi * dra2dPhi,
      zeta = -2 * secPhi * dhdPhi,
      lambda1 = 4 * lambda / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */],
      delta;

  // Slower but accurate bisection method.
  if (lambda > 0.222 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] || phi < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 4 && lambda > 0.175 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) {
    x = (h + r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(a2 * (1 + r2) - h * h)) / (1 + r2);
    if (lambda > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 4) return [x, x];
    var x1 = x, x0 = 0.5 * x;
    x = 0.5 * (x0 + x1), i = 50;
    do {
      var g = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(a2 - x * x),
          f = (x * (zeta + mu * g) + nu * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(x / a)) - lambda1;
      if (!f) break;
      if (f < 0) x0 = x;
      else x1 = x;
      x = 0.5 * (x0 + x1);
    } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(x1 - x0) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] && --i > 0);
  }

  // Newton-Raphson.
  else {
    x = __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */], i = 25;
    do {
      var x2 = x * x,
          g2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(a2 - x2),
          zetaMug = zeta + mu * g2,
          f2 = x * zetaMug + nu * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(x / a) - lambda1,
          df = zetaMug + (nu - mu * x2) / g2;
      x -= delta = g2 ? f2 / df : 0;
    } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] && --i > 0);
  }

  return [x, -h - r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(a2 - x * x)];
}

function gringortenHexadecantInvert(x, y) {
  var x0 = 0,
      x1 = 1,
      r = 0.5,
      i = 50;

  while (true) {
    var r2 = r * r,
        sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(r),
        z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 + r2)),
        v = (1 - r2) + r * (1 + r2) * z,
        p2 = (1 - sinPhi) / v,
        p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(p2),
        a2 = p2 * (1 + r2),
        h = p * (1 - r2),
        g2 = a2 - x * x,
        g = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(g2),
        y0 = y + h + r * g;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(x1 - x0) < __WEBPACK_IMPORTED_MODULE_1__math__["u" /* epsilon2 */] || --i === 0 || y0 === 0) break;
    if (y0 > 0) x0 = r;
    else x1 = r;
    r = 0.5 * (x0 + x1);
  }

  if (!i) return null;

  var phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(sinPhi),
      cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
      secPhi = 1 / cosPhi,
      drdPhi = 2 * sinPhi * cosPhi,
      dvdPhi = (-3 * r + z * (1 + 3 * r2)) * drdPhi,
      dp2dPhi = (-v * cosPhi - (1 - sinPhi) * dvdPhi) / (v * v),
      dpdPhi = 0.5 * dp2dPhi / p,
      dhdPhi = (1 - r2) * dpdPhi - 2 * r * p * drdPhi,
      zeta = -2 * secPhi * dhdPhi,
      mu = -secPhi * drdPhi,
      nu = -secPhi * (r * (1 + r2) * dp2dPhi + p2 * (1 + 3 * r2) * drdPhi);

  return [__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 4 * (x * (zeta + mu * g) + nu * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(x / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(a2))), phi];
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__square__["a" /* default */])(gringortenRaw))
      .scale(239.75);
});


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elliptic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__square__ = __webpack_require__(52);
/* harmony export (immutable) */ __webpack_exports__["b"] = guyouRaw;





function guyouRaw(lambda, phi) {
  var k_ = (__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] - 1) / (__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] + 1),
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* sqrt */])(1 - k_ * k_),
      K = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__elliptic__["a" /* ellipticF */])(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */], k * k),
      f = -1,
      psi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["j" /* tan */])(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* pi */] / 4 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* abs */])(phi) / 2)),
      r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["x" /* exp */])(f * psi) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* sqrt */])(k_),
      at = guyouComplexAtan(r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(f * lambda), r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(f * lambda)),
      t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__elliptic__["b" /* ellipticFi */])(at[0], at[1], k * k);
  return [-t[1], (phi >= 0 ? 1 : -1) * (0.5 * K - t[0])];
}

function guyouComplexAtan(x, y) {
  var x2 = x * x,
      y_1 = y + 1,
      t = 1 - x2 - y * y;
  return [
   0.5 * ((x >= 0 ? __WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */]) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* atan2 */])(t, 2 * x)),
    -0.25 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["w" /* log */])(t * t + 4 * x2) +0.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["w" /* log */])(y_1 * y_1 + x2)
  ];
}

function guyouComplexDivide(a, b) {
  var denominator = b[0] * b[0] + b[1] * b[1];
  return [
    (a[0] * b[0] + a[1] * b[1]) / denominator,
    (a[1] * b[0] - a[0] * b[1]) / denominator
  ];
}

guyouRaw.invert = function(x, y) {
  var k_ = (__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] - 1) / (__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] + 1),
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* sqrt */])(1 - k_ * k_),
      K = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__elliptic__["a" /* ellipticF */])(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */], k * k),
      f = -1,
      j = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__elliptic__["c" /* ellipticJi */])(0.5 * K - y, -x, k * k),
      tn = guyouComplexDivide(j[0], j[1]),
      lambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* atan2 */])(tn[1], tn[0]) / f;
  return [
    lambda,
    2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["n" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["x" /* exp */])(0.5 / f * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["w" /* log */])(k_ * tn[0] * tn[0] + k_ * tn[1] * tn[1]))) - __WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */]
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__square__["a" /* default */])(guyouRaw))
      .scale(151.496);
});


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mollweide__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sinusoidal__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sinuMollweide__ = __webpack_require__(25);
/* harmony export (immutable) */ __webpack_exports__["b"] = homolosineRaw;






function homolosineRaw(lambda, phi) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) > __WEBPACK_IMPORTED_MODULE_4__sinuMollweide__["c" /* sinuMollweidePhi */]
      ? (lambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mollweide__["b" /* mollweideRaw */])(lambda, phi), lambda[1] -= phi > 0 ? __WEBPACK_IMPORTED_MODULE_4__sinuMollweide__["d" /* sinuMollweideY */] : -__WEBPACK_IMPORTED_MODULE_4__sinuMollweide__["d" /* sinuMollweideY */], lambda)
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__sinusoidal__["b" /* sinusoidalRaw */])(lambda, phi);
}

homolosineRaw.invert = function(x, y) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y) > __WEBPACK_IMPORTED_MODULE_4__sinuMollweide__["c" /* sinuMollweidePhi */]
      ? __WEBPACK_IMPORTED_MODULE_2__mollweide__["b" /* mollweideRaw */].invert(x, y + (y > 0 ? __WEBPACK_IMPORTED_MODULE_4__sinuMollweide__["d" /* sinuMollweideY */] : -__WEBPACK_IMPORTED_MODULE_4__sinuMollweide__["d" /* sinuMollweideY */]))
      : __WEBPACK_IMPORTED_MODULE_3__sinusoidal__["b" /* sinusoidalRaw */].invert(x, y);
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(homolosineRaw)
      .scale(152.63);
});


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guyou__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(24);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__guyou__["b" /* guyouRaw */])
      .scale(111.48);
});


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(project) {
  var dx = project(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* halfPi */], 0)[0] - project(-__WEBPACK_IMPORTED_MODULE_0__math__["a" /* halfPi */], 0)[0];

  function projectSquare(lambda, phi) {
    var s = lambda > 0 ? -0.5 : 0.5,
        point = project(lambda + s * __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */], phi);
    point[0] -= s * dx;
    return point;
  }

  if (project.invert) projectSquare.invert = function(x, y) {
    var s = x > 0 ? -0.5 : 0.5,
        location = project.invert(x + s * dx, y),
        lambda = location[0] - s * __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */];
    if (lambda < -__WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */]) lambda += 2 * __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */];
    else if (lambda > __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */]) lambda -= 2 * __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */];
    location[0] = lambda;
    return location;
  };

  return projectSquare;
});


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



// Compute the origin as the midpoint of the two reference points.
// Rotate one of the reference points by the origin.
// Apply the spherical law of sines to compute gamma rotation.
/* harmony default export */ __webpack_exports__["a"] = (function(raw, p0, p1) {
  var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["c" /* geoInterpolate */])(p0, p1),
      o = i(0.5),
      a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["d" /* geoRotation */])([-o[0], -o[1]])(p0),
      b = i.distance / 2,
      y = -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(a[1] * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(b)),
      R = [-o[0], -o[1], -(a[0] > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] - y : y) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */]],
      p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(raw(b)).rotate(R),
      r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["d" /* geoRotation */])(R),
      center = p.center;

  delete p.rotate;

  p.center = function(_) {
    return arguments.length ? center(r(_)) : r.invert(center());
  };

  return p
      .clipAngle(90);
});


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return areaStream; });





var areaRingSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])();

var areaSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lambda00,
    phi00,
    lambda0,
    cosPhi0,
    sinPhi0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */] + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
  },
  sphere: function() {
    areaSum.add(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */]);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */];
  lambda0 = lambda, cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]), sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi);
}

function areaPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */];
  phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi),
      sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(adLambda),
      v = k * sdLambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(adLambda);
  areaRingSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(object) {
  areaSum.reset();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__stream__["a" /* default */])(object, areaStream);
  return areaSum * 2;
});


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rotation__ = __webpack_require__(19);
/* harmony export (immutable) */ __webpack_exports__["a"] = circleStream;





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(radius),
      sinRadius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* tau */];
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* tau */];
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* spherical */])([cosRadius, -sinRadius * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(t), -sinRadius * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(point), point[0] -= cosRadius;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* cartesianNormalizeInPlace */])(point);
  var radius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["r" /* acos */])(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + __WEBPACK_IMPORTED_MODULE_2__math__["b" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */]) % __WEBPACK_IMPORTED_MODULE_2__math__["b" /* tau */];
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  var center = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([0, 0]),
      radius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(90),
      precision = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= __WEBPACK_IMPORTED_MODULE_2__math__["h" /* degrees */], x[1] *= __WEBPACK_IMPORTED_MODULE_2__math__["h" /* degrees */];
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */],
        p = precision.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */];
    ring = [];
    rotate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__rotation__["b" /* rotateRadians */])(-c[0] * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */], -c[1] * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */], 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), circle) : precision;
  };

  return circle;
});


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polygon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polygonContains__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(11);






/* harmony default export */ __webpack_exports__["a"] = (function(pointVisible, clipLine, interpolate, start) {
  return function(rotate, sink) {
    var line = clipLine(sink),
        rotatedStart = rotate.invert(start[0], start[1]),
        ringBuffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__buffer__["a" /* default */])(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_array__["a" /* merge */])(segments);
        var startInside = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__polygonContains__["a" /* default */])(polygon, rotatedStart);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__polygon__["a" /* default */])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      var point = rotate(lambda, phi);
      if (pointVisible(lambda = point[0], phi = point[1])) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      var point = rotate(lambda, phi);
      line.point(point[0], point[1]);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      var point = rotate(lambda, phi);
      ringSink.point(point[0], point[1]);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math__["k" /* halfPi */] - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math__["k" /* halfPi */] - b[1]);
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointEqual__ = __webpack_require__(63);


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ __webpack_exports__["a"] = (function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__pointEqual__["a" /* default */])(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__length__ = __webpack_require__(61);


var coordinates = [null, null],
    object = {type: "LineString", coordinates: coordinates};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__length__["a" /* default */])(object);
});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__(7);





var lengthSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lambda0,
    sinPhi0,
    cosPhi0;

var lengthStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: lengthLineStart,
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */]
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
}

function lengthPointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */];
  lambda0 = lambda, sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi), cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */];
  var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi),
      cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi),
      delta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(lambda - lambda0),
      cosDelta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(delta),
      sinDelta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
      z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* sqrt */])(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  lengthSum.reset();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__stream__["a" /* default */])(object, lengthStream);
  return +lengthSum;
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(5);


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (boundsStream);


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */];
});


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartesian__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(2);




var sum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])();

/* harmony default export */ __webpack_exports__["a"] = (function(polygon, point) {
  var lambda = point[0],
      phi = point[1],
      normal = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(lambda), -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(lambda), 0],
      angle = 0,
      winding = 0;

  sum.reset();

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = point0[0],
        phi0 = point0[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["q" /* quarterPi */],
        sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(phi0),
        cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = point1[0],
          phi1 = point1[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["q" /* quarterPi */],
          sinPhi1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(phi1),
          cosPhi1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */],
          k = sinPhi0 * sinPhi1;

      sum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* atan2 */])(k * sign * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(absDelta), cosPhi0 * cosPhi1 + k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(absDelta)));
      angle += antimeridian ? delta + sign * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* tau */] : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian__["b" /* cartesianCross */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian__["a" /* cartesian */])(point0), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian__["a" /* cartesian */])(point1));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian__["g" /* cartesianNormalizeInPlace */])(arc);
        var intersection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian__["b" /* cartesianCross */])(normal, arc);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian__["g" /* cartesianNormalizeInPlace */])(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* asin */])(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -__WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */] || angle < __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */] && sum < -__WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */]) ^ (winding & 1);
});


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conicEqualArea__ = __webpack_require__(29);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__conicEqualArea__["a" /* default */])()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = equirectangularRaw;


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(equirectangularRaw)
      .scale(152.63);
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 项目名称 - v 1.0.0
 * 类名称
 * @author : gissky
 * 基础类
 * @description : 请添加描述信息
 * @date : 2017/3/28
 */
var d3 = __webpack_require__(16);
var d3GeoProj = __webpack_require__(86);
var colors = d3.interpolateCool;
var __opts = {};

var Map = exports.Map = function () {
    function Map(map) {
        _classCallCheck(this, Map);

        if (new.target !== Map) {
            throw new Error("you should use new to create a instance!");
        }
        this.map = d3.select("#" + map);
        this.layers = this.map.append('g').attr('id', 'layers');
        Object.assign(__opts, {
            width: +this.map.attr('width'),
            height: +this.map.attr('height'),
            colors: colors,
            projection: d3GeoProj.geoNaturalEarth(),
            graticule: d3.geoGraticule(),
            simulation: d3.forceSimulation().force("link", d3.forceLink().id(function (d) {
                return d.id;
            })).force("charge", d3.forceManyBody()).force("center", d3.forceCenter(+this.map.attr('width') / 2, +this.map.attr('height') / 2))
        });
        this.mapId = map;
    }

    _createClass(Map, [{
        key: 'setBaseMap',
        value: function setBaseMap(data, options) {
            var _options = {};
            Object.assign(_options, __opts, options);
            var path = d3.geoPath(_options.projection);

            //remove layers first
            this.layers.remove();

            this.layers = this.map.append('g').attr('id', 'layers');

            this.layers.append("path").datum(_options.graticule.outline).attr("class", "graticule outline").attr("d", path);
            this.layers.append('g').selectAll('path').data(data.features).enter().append('path').attr('d', path).attr('fill', function (d, i) {
                if (d.properties.soccers) {
                    return _options.colors(d.properties.soccers.length);
                } else {
                    return '#fff';
                }
            }).attr('stroke', 'black').attr('stroke-width', 1);
        }
    }, {
        key: 'forceDirectedGraph',
        value: function forceDirectedGraph(graph, options) {
            this.reset();
            var _options = {};
            Object.assign(_options, __opts, options);

            var simulation = _options.simulation;

            simulation.nodes(graph.nodes).force("link").links(graph.links).distance(300);

            //draw links
            var link = this.layers.selectAll('.link').data(graph.links);
            var links = link.enter().append('line').attr('stroke', "#fff");

            //draw nodes
            var node = this.layers.selectAll('.node').data(graph.nodes);
            var nodes = node.enter().append('g').attr('class', 'abc').append('circle').attr('fill', function (d, i) {
                return _options.colors(i);
            }).attr('r', 10).attr('stroke', 'black').attr("stroke-width", 1).call(d3.drag().on("start", function () {
                if (!d3.event.active) simulation.alphaTarget(0.3).restart();
                d3.event.subject.fx = d3.event.subject.x;
                d3.event.subject.fy = d3.event.subject.y;
            }).on("drag", function () {
                d3.event.subject.fx = d3.event.x;
                d3.event.subject.fy = d3.event.y;
            }).on("end", function () {
                if (!d3.event.active) simulation.alphaTarget(0);
                d3.event.subject.fx = null;
                d3.event.subject.fy = null;
            }));

            var text = this.layers.selectAll('text').data(graph.nodes);

            var texts = text.enter().append('text').text(function (d) {
                return d.id;
            }).attr('fill', function (d, i) {
                return _options.colors(i);
            });

            //按照力布局的节拍移动线和点的位置，直到收敛
            simulation.on("tick", function () {
                links.attr("x1", function (d) {
                    return d.source.x;
                }).attr("y1", function (d) {
                    return d.source.y;
                }).attr("x2", function (d) {
                    return d.target.x;
                }).attr("y2", function (d) {
                    return d.target.y;
                });

                nodes.attr("cx", function (d) {
                    return d.x;
                }).attr("cy", function (d) {
                    return d.y;
                });

                texts.attr('x', function (d) {
                    return d.x + 10;
                }).attr('y', function (d) {
                    return d.y + 5;
                });
            });
        }
    }, {
        key: 'reset',
        value: function reset() {
            var map = document.getElementById(this.mapId);
            map.parentNode.removeChild(map);
            this.map = d3.select('#wrap').append('svg').attr('id', 'map').attr('width', 1000).attr('height', 600);

            //this.map = d3.select("#"+map);
            this.layers = this.map.append('g').attr('id', 'layers');
            Object.assign(__opts, {
                width: +this.map.attr('width'),
                height: +this.map.attr('height'),
                colors: colors,
                projection: d3GeoProj.geoNaturalEarth(),
                graticule: d3.geoGraticule(),
                simulation: d3.forceSimulation().force("link", d3.forceLink().id(function (d) {
                    return d.id;
                })).force("charge", d3.forceManyBody()).force("center", d3.forceCenter(+this.map.attr('width') / 2, +this.map.attr('height') / 2))
            });
        }
    }]);

    return Map;
}();

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(68);

var d3 = __webpack_require__(16); /**
                         * 项目名称 - v 1.0.0
                         * 类名称
                         * @author : gissky
                         * 基础类
                         * @description : 请添加描述信息
                         * @date : 2017/3/27
                         */

var _require = __webpack_require__(67),
    Map = _require.Map;

var map = new Map("map");

function generateData(data, linkName, countries) {
    var _w = {};
    var maxCount = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var w = _step.value;

            if (!_w[w[linkName]]) {
                _w[w[linkName]] = [];
            }
            _w[w[linkName]].push(w);
            if (maxCount < _w[w[linkName]].length) {
                maxCount = _w[w[linkName]].length;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = countries.features[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var c = _step2.value;

            c.properties.soccers = _w[c.properties.name];
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var color = d3.scaleLinear().domain([0, maxCount]).range(['#FDD3C0', '#67000C']);
    map.setBaseMap(countries, { colors: color });
    //return {data:_w,maxCount};
}
d3.json('data/countries.geo.json', function (error, countries) {
    if (error) throw new Error('an error occurred while retrieving data');

    d3.select("#women").on("click", function () {
        d3.json('data/fifa-17-women.json', function (error, women) {
            if (error) throw new Error('an error occurred while retrieving data');

            generateData(women, 'Country', countries);
        });
    });
    d3.select("#men").on("click", function () {
        d3.json('data/guardian-16-men.json', function (error, men) {
            if (error) throw new Error('an error occurred while retrieving data');

            generateData(men, 'Nationality', countries);
        });
    });
    d3.select("#teammate").on("click", function () {
        d3.json('data/soccer-teammates-men.json', function (error, teammates) {
            if (error) throw new Error('an error occurred while retrieving data');
            //create data
            var graph = {};
            graph['nodes'] = [];
            graph['links'] = [];
            var set = new Set();
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = teammates[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var innerArr = _step3.value;

                    set.add(innerArr[0]).add(innerArr[1]);
                    graph['links'].push({ "source": innerArr[0], "target": innerArr[1] });
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = set[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var soccer = _step4.value;

                    graph['nodes'].push({ id: soccer });
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            var rainbow = d3.interpolateRainbow,
                convert = d3.scaleLinear().domain([0, graph['nodes'].length]).range([0, 1]);
            //draw
            map.forceDirectedGraph(graph, { colors: function colors(i) {
                    return rainbow(convert(i));
                } });
        });
    });

    //show women
    d3.select("#women").dispatch('click');
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(38);


/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b, f) {
  var na = a.length, nb = b.length, c = new Array(na * nb), ia, ib, ic, va;
  if (f == null) f = __WEBPACK_IMPORTED_MODULE_0__pairs__["a" /* pair */];
  for (ia = ic = 0; ia < na; ++ia) for (va = a[ia], ib = 0; ib < nb; ++ib, ++ic) c[ic] = f(va, b[ib]);
  return c;
});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ticks__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__threshold_sturges__ = __webpack_require__(40);








/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_6__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) tz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ticks__["a" /* default */])(x0, x1, tz);

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] >= x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisect__["a" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  var i = -1,
      n = array.length,
      a,
      b;

  if (f == null) {
    while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
    while (++i < n) if ((b = array[i]) != null && b > a) a = b;
  }

  else {
    while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
    while (++i < n) if ((b = f(array[i], i, array)) != null && b > a) a = b;
  }

  return a;
});


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(12);


/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  var s = 0,
      n = array.length,
      a,
      i = -1,
      j = n;

  if (f == null) {
    while (++i < n) if (!isNaN(a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(array[i]))) s += a; else --j;
  }

  else {
    while (++i < n) if (!isNaN(a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(f(array[i], i, array)))) s += a; else --j;
  }

  if (j) return s / j;
});


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(21);




/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  var numbers = [],
      n = array.length,
      a,
      i = -1;

  if (f == null) {
    while (++i < n) if (!isNaN(a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(array[i]))) numbers.push(a);
  }

  else {
    while (++i < n) if (!isNaN(a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(f(array[i], i, array)))) numbers.push(a);
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(8);


/* unused harmony default export */ var _unused_webpack_default_export = (function(array, compare) {
  if (!(n = array.length)) return;
  var i = 0,
      n,
      j = 0,
      xi,
      xj = array[j];

  if (!compare) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) if (compare(xi = array[i], xj) < 0 || compare(xj, xj) !== 0) xj = xi, j = i;

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  var s = 0,
      n = array.length,
      a,
      i = -1;

  if (f == null) {
    while (++i < n) if (a = +array[i]) s += a; // Note: zero and null are equivalent.
  }

  else {
    while (++i < n) if (a = +f(array[i], i, array)) s += a;
  }

  return s;
});


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(21);





/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(35);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(42);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_airy__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAiry", function() { return __WEBPACK_IMPORTED_MODULE_0__src_airy__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAiryRaw", function() { return __WEBPACK_IMPORTED_MODULE_0__src_airy__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_aitoff__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAitoff", function() { return __WEBPACK_IMPORTED_MODULE_1__src_aitoff__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAitoffRaw", function() { return __WEBPACK_IMPORTED_MODULE_1__src_aitoff__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_armadillo__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoArmadillo", function() { return __WEBPACK_IMPORTED_MODULE_2__src_armadillo__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoArmadilloRaw", function() { return __WEBPACK_IMPORTED_MODULE_2__src_armadillo__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_august__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAugust", function() { return __WEBPACK_IMPORTED_MODULE_3__src_august__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAugustRaw", function() { return __WEBPACK_IMPORTED_MODULE_3__src_august__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_baker__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBaker", function() { return __WEBPACK_IMPORTED_MODULE_4__src_baker__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBakerRaw", function() { return __WEBPACK_IMPORTED_MODULE_4__src_baker__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_berghaus__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBerghaus", function() { return __WEBPACK_IMPORTED_MODULE_5__src_berghaus__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBerghausRaw", function() { return __WEBPACK_IMPORTED_MODULE_5__src_berghaus__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_boggs__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBoggs", function() { return __WEBPACK_IMPORTED_MODULE_6__src_boggs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBoggsRaw", function() { return __WEBPACK_IMPORTED_MODULE_6__src_boggs__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_bonne__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBonne", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bonne__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBonneRaw", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bonne__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_bottomley__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBottomley", function() { return __WEBPACK_IMPORTED_MODULE_8__src_bottomley__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBottomleyRaw", function() { return __WEBPACK_IMPORTED_MODULE_8__src_bottomley__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_bromley__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBromley", function() { return __WEBPACK_IMPORTED_MODULE_9__src_bromley__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBromleyRaw", function() { return __WEBPACK_IMPORTED_MODULE_9__src_bromley__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_chamberlin__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoChamberlin", function() { return __WEBPACK_IMPORTED_MODULE_10__src_chamberlin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoChamberlinRaw", function() { return __WEBPACK_IMPORTED_MODULE_10__src_chamberlin__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoChamberlinAfrica", function() { return __WEBPACK_IMPORTED_MODULE_10__src_chamberlin__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_collignon__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCollignon", function() { return __WEBPACK_IMPORTED_MODULE_11__src_collignon__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCollignonRaw", function() { return __WEBPACK_IMPORTED_MODULE_11__src_collignon__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_craig__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCraig", function() { return __WEBPACK_IMPORTED_MODULE_12__src_craig__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCraigRaw", function() { return __WEBPACK_IMPORTED_MODULE_12__src_craig__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_craster__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCraster", function() { return __WEBPACK_IMPORTED_MODULE_13__src_craster__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCrasterRaw", function() { return __WEBPACK_IMPORTED_MODULE_13__src_craster__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_cylindricalEqualArea__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCylindricalEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_14__src_cylindricalEqualArea__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCylindricalEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_14__src_cylindricalEqualArea__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cylindricalStereographic__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCylindricalStereographic", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cylindricalStereographic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCylindricalStereographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cylindricalStereographic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_eckert1_js__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert1", function() { return __WEBPACK_IMPORTED_MODULE_16__src_eckert1_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert1Raw", function() { return __WEBPACK_IMPORTED_MODULE_16__src_eckert1_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_eckert2_js__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert2", function() { return __WEBPACK_IMPORTED_MODULE_17__src_eckert2_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert2Raw", function() { return __WEBPACK_IMPORTED_MODULE_17__src_eckert2_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_eckert3_js__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert3", function() { return __WEBPACK_IMPORTED_MODULE_18__src_eckert3_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert3Raw", function() { return __WEBPACK_IMPORTED_MODULE_18__src_eckert3_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_eckert4_js__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert4", function() { return __WEBPACK_IMPORTED_MODULE_19__src_eckert4_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert4Raw", function() { return __WEBPACK_IMPORTED_MODULE_19__src_eckert4_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_eckert5_js__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert5", function() { return __WEBPACK_IMPORTED_MODULE_20__src_eckert5_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert5Raw", function() { return __WEBPACK_IMPORTED_MODULE_20__src_eckert5_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_eckert6_js__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert6", function() { return __WEBPACK_IMPORTED_MODULE_21__src_eckert6_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert6Raw", function() { return __WEBPACK_IMPORTED_MODULE_21__src_eckert6_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_eisenlohr_js__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEisenlohr", function() { return __WEBPACK_IMPORTED_MODULE_22__src_eisenlohr_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEisenlohrRaw", function() { return __WEBPACK_IMPORTED_MODULE_22__src_eisenlohr_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_fahey_js__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoFahey", function() { return __WEBPACK_IMPORTED_MODULE_23__src_fahey_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoFaheyRaw", function() { return __WEBPACK_IMPORTED_MODULE_23__src_fahey_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_foucaut_js__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoFoucaut", function() { return __WEBPACK_IMPORTED_MODULE_24__src_foucaut_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoFoucautRaw", function() { return __WEBPACK_IMPORTED_MODULE_24__src_foucaut_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_gilbert_js__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGilbert", function() { return __WEBPACK_IMPORTED_MODULE_25__src_gilbert_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_gingery_js__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGingery", function() { return __WEBPACK_IMPORTED_MODULE_26__src_gingery_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGingeryRaw", function() { return __WEBPACK_IMPORTED_MODULE_26__src_gingery_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_ginzburg4_js__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg4", function() { return __WEBPACK_IMPORTED_MODULE_27__src_ginzburg4_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg4Raw", function() { return __WEBPACK_IMPORTED_MODULE_27__src_ginzburg4_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_ginzburg5_js__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg5", function() { return __WEBPACK_IMPORTED_MODULE_28__src_ginzburg5_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg5Raw", function() { return __WEBPACK_IMPORTED_MODULE_28__src_ginzburg5_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_ginzburg6_js__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg6", function() { return __WEBPACK_IMPORTED_MODULE_29__src_ginzburg6_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg6Raw", function() { return __WEBPACK_IMPORTED_MODULE_29__src_ginzburg6_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_ginzburg8_js__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg8", function() { return __WEBPACK_IMPORTED_MODULE_30__src_ginzburg8_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg8Raw", function() { return __WEBPACK_IMPORTED_MODULE_30__src_ginzburg8_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_ginzburg9_js__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg9", function() { return __WEBPACK_IMPORTED_MODULE_31__src_ginzburg9_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg9Raw", function() { return __WEBPACK_IMPORTED_MODULE_31__src_ginzburg9_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_gringorten_js__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGringorten", function() { return __WEBPACK_IMPORTED_MODULE_32__src_gringorten_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGringortenRaw", function() { return __WEBPACK_IMPORTED_MODULE_32__src_gringorten_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_guyou_js__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGuyou", function() { return __WEBPACK_IMPORTED_MODULE_33__src_guyou_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGuyouRaw", function() { return __WEBPACK_IMPORTED_MODULE_33__src_guyou_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_hammer_js__ = __webpack_require__(115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHammer", function() { return __WEBPACK_IMPORTED_MODULE_34__src_hammer_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHammerRaw", function() { return __WEBPACK_IMPORTED_MODULE_34__src_hammer_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_hammerRetroazimuthal_js__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHammerRetroazimuthal", function() { return __WEBPACK_IMPORTED_MODULE_35__src_hammerRetroazimuthal_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHammerRetroazimuthalRaw", function() { return __WEBPACK_IMPORTED_MODULE_35__src_hammerRetroazimuthal_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_healpix_js__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHealpix", function() { return __WEBPACK_IMPORTED_MODULE_36__src_healpix_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHealpixRaw", function() { return __WEBPACK_IMPORTED_MODULE_36__src_healpix_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_hill_js__ = __webpack_require__(118);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHill", function() { return __WEBPACK_IMPORTED_MODULE_37__src_hill_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHillRaw", function() { return __WEBPACK_IMPORTED_MODULE_37__src_hill_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_homolosine_js__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHomolosine", function() { return __WEBPACK_IMPORTED_MODULE_38__src_homolosine_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHomolosineRaw", function() { return __WEBPACK_IMPORTED_MODULE_38__src_homolosine_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_interrupted_index__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterrupt", function() { return __WEBPACK_IMPORTED_MODULE_39__src_interrupted_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__src_interrupted_boggs__ = __webpack_require__(119);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedBoggs", function() { return __WEBPACK_IMPORTED_MODULE_40__src_interrupted_boggs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__src_interrupted_homolosine__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedHomolosine", function() { return __WEBPACK_IMPORTED_MODULE_41__src_interrupted_homolosine__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__src_interrupted_mollweide__ = __webpack_require__(121);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedMollweide", function() { return __WEBPACK_IMPORTED_MODULE_42__src_interrupted_mollweide__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__src_interrupted_mollweideHemispheres__ = __webpack_require__(122);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedMollweideHemispheres", function() { return __WEBPACK_IMPORTED_MODULE_43__src_interrupted_mollweideHemispheres__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__src_interrupted_sinuMollweide__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedSinuMollweide", function() { return __WEBPACK_IMPORTED_MODULE_44__src_interrupted_sinuMollweide__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__src_interrupted_sinusoidal__ = __webpack_require__(124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedSinusoidal", function() { return __WEBPACK_IMPORTED_MODULE_45__src_interrupted_sinusoidal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__src_kavrayskiy7_js__ = __webpack_require__(125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoKavrayskiy7", function() { return __WEBPACK_IMPORTED_MODULE_46__src_kavrayskiy7_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoKavrayskiy7Raw", function() { return __WEBPACK_IMPORTED_MODULE_46__src_kavrayskiy7_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__src_lagrange_js__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLagrange", function() { return __WEBPACK_IMPORTED_MODULE_47__src_lagrange_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLagrangeRaw", function() { return __WEBPACK_IMPORTED_MODULE_47__src_lagrange_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__src_larrivee__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLarrivee", function() { return __WEBPACK_IMPORTED_MODULE_48__src_larrivee__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLarriveeRaw", function() { return __WEBPACK_IMPORTED_MODULE_48__src_larrivee__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__src_laskowski__ = __webpack_require__(128);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLaskowski", function() { return __WEBPACK_IMPORTED_MODULE_49__src_laskowski__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLaskowskiRaw", function() { return __WEBPACK_IMPORTED_MODULE_49__src_laskowski__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__src_littrow_js__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLittrow", function() { return __WEBPACK_IMPORTED_MODULE_50__src_littrow_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLittrowRaw", function() { return __WEBPACK_IMPORTED_MODULE_50__src_littrow_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__src_loximuthal_js__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLoximuthal", function() { return __WEBPACK_IMPORTED_MODULE_51__src_loximuthal_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLoximuthalRaw", function() { return __WEBPACK_IMPORTED_MODULE_51__src_loximuthal_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__src_miller__ = __webpack_require__(131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMiller", function() { return __WEBPACK_IMPORTED_MODULE_52__src_miller__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMillerRaw", function() { return __WEBPACK_IMPORTED_MODULE_52__src_miller__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__src_modifiedStereographic__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographic", function() { return __WEBPACK_IMPORTED_MODULE_53__src_modifiedStereographic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_53__src_modifiedStereographic__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicAlaska", function() { return __WEBPACK_IMPORTED_MODULE_53__src_modifiedStereographic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicGs48", function() { return __WEBPACK_IMPORTED_MODULE_53__src_modifiedStereographic__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicGs50", function() { return __WEBPACK_IMPORTED_MODULE_53__src_modifiedStereographic__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicMiller", function() { return __WEBPACK_IMPORTED_MODULE_53__src_modifiedStereographic__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicLee", function() { return __WEBPACK_IMPORTED_MODULE_53__src_modifiedStereographic__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__src_mollweide__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMollweide", function() { return __WEBPACK_IMPORTED_MODULE_54__src_mollweide__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMollweideRaw", function() { return __WEBPACK_IMPORTED_MODULE_54__src_mollweide__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__src_mtFlatPolarParabolic__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarParabolic", function() { return __WEBPACK_IMPORTED_MODULE_55__src_mtFlatPolarParabolic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarParabolicRaw", function() { return __WEBPACK_IMPORTED_MODULE_55__src_mtFlatPolarParabolic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__src_mtFlatPolarQuartic__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarQuartic", function() { return __WEBPACK_IMPORTED_MODULE_56__src_mtFlatPolarQuartic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarQuarticRaw", function() { return __WEBPACK_IMPORTED_MODULE_56__src_mtFlatPolarQuartic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__src_mtFlatPolarSinusoidal__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarSinusoidal", function() { return __WEBPACK_IMPORTED_MODULE_57__src_mtFlatPolarSinusoidal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarSinusoidalRaw", function() { return __WEBPACK_IMPORTED_MODULE_57__src_mtFlatPolarSinusoidal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__src_naturalEarth__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth", function() { return __WEBPACK_IMPORTED_MODULE_58__src_naturalEarth__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarthRaw", function() { return __WEBPACK_IMPORTED_MODULE_58__src_naturalEarth__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__src_nellHammer__ = __webpack_require__(137);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNellHammer", function() { return __WEBPACK_IMPORTED_MODULE_59__src_nellHammer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNellHammerRaw", function() { return __WEBPACK_IMPORTED_MODULE_59__src_nellHammer__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__src_patterson__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPatterson", function() { return __WEBPACK_IMPORTED_MODULE_60__src_patterson__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPattersonRaw", function() { return __WEBPACK_IMPORTED_MODULE_60__src_patterson__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__src_polyconic__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPolyconic", function() { return __WEBPACK_IMPORTED_MODULE_61__src_polyconic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPolyconicRaw", function() { return __WEBPACK_IMPORTED_MODULE_61__src_polyconic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__src_polyhedral_index_js__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPolyhedral", function() { return __WEBPACK_IMPORTED_MODULE_62__src_polyhedral_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__src_polyhedral_butterfly_js__ = __webpack_require__(141);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPolyhedralButterfly", function() { return __WEBPACK_IMPORTED_MODULE_63__src_polyhedral_butterfly_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__src_polyhedral_collignon_js__ = __webpack_require__(142);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPolyhedralCollignon", function() { return __WEBPACK_IMPORTED_MODULE_64__src_polyhedral_collignon_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__src_polyhedral_waterman_js__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPolyhedralWaterman", function() { return __WEBPACK_IMPORTED_MODULE_65__src_polyhedral_waterman_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__src_project_index__ = __webpack_require__(147);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoProject", function() { return __WEBPACK_IMPORTED_MODULE_66__src_project_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__src_quincuncial_gringorten_js__ = __webpack_require__(149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGringortenQuincuncial", function() { return __WEBPACK_IMPORTED_MODULE_67__src_quincuncial_gringorten_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__src_quincuncial_peirce_js__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPeirceQuincuncial", function() { return __WEBPACK_IMPORTED_MODULE_68__src_quincuncial_peirce_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPierceQuincuncial", function() { return __WEBPACK_IMPORTED_MODULE_68__src_quincuncial_peirce_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__src_quantize__ = __webpack_require__(148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoQuantize", function() { return __WEBPACK_IMPORTED_MODULE_69__src_quantize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__src_quincuncial_index_js__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoQuincuncial", function() { return __WEBPACK_IMPORTED_MODULE_70__src_quincuncial_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__src_rectangularPolyconic__ = __webpack_require__(150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRectangularPolyconic", function() { return __WEBPACK_IMPORTED_MODULE_71__src_rectangularPolyconic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRectangularPolyconicRaw", function() { return __WEBPACK_IMPORTED_MODULE_71__src_rectangularPolyconic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__src_robinson__ = __webpack_require__(151);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRobinson", function() { return __WEBPACK_IMPORTED_MODULE_72__src_robinson__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRobinsonRaw", function() { return __WEBPACK_IMPORTED_MODULE_72__src_robinson__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__src_satellite__ = __webpack_require__(152);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoSatellite", function() { return __WEBPACK_IMPORTED_MODULE_73__src_satellite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoSatelliteRaw", function() { return __WEBPACK_IMPORTED_MODULE_73__src_satellite__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__src_sinuMollweide__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoSinuMollweide", function() { return __WEBPACK_IMPORTED_MODULE_74__src_sinuMollweide__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoSinuMollweideRaw", function() { return __WEBPACK_IMPORTED_MODULE_74__src_sinuMollweide__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__src_sinusoidal__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoSinusoidal", function() { return __WEBPACK_IMPORTED_MODULE_75__src_sinusoidal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoSinusoidalRaw", function() { return __WEBPACK_IMPORTED_MODULE_75__src_sinusoidal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__src_stitch__ = __webpack_require__(153);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStitch", function() { return __WEBPACK_IMPORTED_MODULE_76__src_stitch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__src_times__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTimes", function() { return __WEBPACK_IMPORTED_MODULE_77__src_times__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTimesRaw", function() { return __WEBPACK_IMPORTED_MODULE_77__src_times__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__src_twoPointAzimuthal__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointAzimuthal", function() { return __WEBPACK_IMPORTED_MODULE_78__src_twoPointAzimuthal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointAzimuthalRaw", function() { return __WEBPACK_IMPORTED_MODULE_78__src_twoPointAzimuthal__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointAzimuthalUsa", function() { return __WEBPACK_IMPORTED_MODULE_78__src_twoPointAzimuthal__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__src_twoPointEquidistant__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_79__src_twoPointEquidistant__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_79__src_twoPointEquidistant__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointEquidistantUsa", function() { return __WEBPACK_IMPORTED_MODULE_79__src_twoPointEquidistant__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__src_vanDerGrinten__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten", function() { return __WEBPACK_IMPORTED_MODULE_80__src_vanDerGrinten__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrintenRaw", function() { return __WEBPACK_IMPORTED_MODULE_80__src_vanDerGrinten__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__src_vanDerGrinten2__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten2", function() { return __WEBPACK_IMPORTED_MODULE_81__src_vanDerGrinten2__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten2Raw", function() { return __WEBPACK_IMPORTED_MODULE_81__src_vanDerGrinten2__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__src_vanDerGrinten3__ = __webpack_require__(159);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten3", function() { return __WEBPACK_IMPORTED_MODULE_82__src_vanDerGrinten3__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten3Raw", function() { return __WEBPACK_IMPORTED_MODULE_82__src_vanDerGrinten3__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__src_vanDerGrinten4__ = __webpack_require__(160);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten4", function() { return __WEBPACK_IMPORTED_MODULE_83__src_vanDerGrinten4__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten4Raw", function() { return __WEBPACK_IMPORTED_MODULE_83__src_vanDerGrinten4__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__src_wagner4_js__ = __webpack_require__(161);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagner4", function() { return __WEBPACK_IMPORTED_MODULE_84__src_wagner4_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagner4Raw", function() { return __WEBPACK_IMPORTED_MODULE_84__src_wagner4_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__src_wagner6_js__ = __webpack_require__(162);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagner6", function() { return __WEBPACK_IMPORTED_MODULE_85__src_wagner6_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagner6Raw", function() { return __WEBPACK_IMPORTED_MODULE_85__src_wagner6_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__src_wagner7_js__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagner7", function() { return __WEBPACK_IMPORTED_MODULE_86__src_wagner7_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagner7Raw", function() { return __WEBPACK_IMPORTED_MODULE_86__src_wagner7_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__src_wiechel_js__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWiechel", function() { return __WEBPACK_IMPORTED_MODULE_87__src_wiechel_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWiechelRaw", function() { return __WEBPACK_IMPORTED_MODULE_87__src_wiechel_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__src_winkel3__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWinkel3", function() { return __WEBPACK_IMPORTED_MODULE_88__src_winkel3__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWinkel3Raw", function() { return __WEBPACK_IMPORTED_MODULE_88__src_winkel3__["b"]; });





































































 // DEPRECATED misspelling






















/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = airyRaw;



function airyRaw(beta) {
  var tanBeta_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(beta / 2),
      b = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(beta / 2)) / (tanBeta_2 * tanBeta_2);

  function forward(x, y) {
    var cosx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(x),
        cosy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(y),
        siny = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(y),
        cosz = cosy * cosx,
        k = -((1 - cosz ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* log */])((1 + cosz) / 2) / (1 - cosz) : -0.5) + b / (1 + cosz));
    return [k * cosy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(x), k * siny];
  }

  forward.invert = function(x, y) {
    var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(x * x + y * y),
        z = -beta / 2,
        i = 50, delta;
    if (!r) return [0, 0];
    do {
      var z_2 = z / 2,
          cosz_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(z_2),
          sinz_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(z_2),
          tanz_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(z_2),
          lnsecz_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* log */])(1 / cosz_2);
      z -= delta = (2 / tanz_2 * lnsecz_2 - b * tanz_2 - r) / (-lnsecz_2 / (sinz_2 * sinz_2) + 1 - b / (2 * cosz_2 * cosz_2));
    } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] && --i > 0);
    var sinz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(z);
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(x * sinz, r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(z)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(y * sinz / r)];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var beta = __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */],
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["f" /* geoProjectionMutator */])(airyRaw),
      p = m(beta);

  p.radius = function(_) {
    return arguments.length ? m(beta = _ * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]) : beta * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */];
  };

  return p
      .scale(179.976)
      .clipAngle(147);
});


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = armadilloRaw;



function armadilloRaw(phi0) {
  var sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi0),
      cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi0),
      sPhi0 = phi0 >= 0 ? 1 : -1,
      tanPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(sPhi0 * phi0),
      k = (1 + sinPhi0 - cosPhi0) / 2;

  function forward(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
        cosLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda /= 2);
    return [
      (1 + cosPhi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda),
      (sPhi0 * phi > -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(cosLambda, tanPhi0) - 1e-3 ? 0 : -sPhi0 * 10) + k + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi) * cosPhi0 - (1 + cosPhi) * sinPhi0 * cosLambda // TODO D3 core should allow null or [NaN, NaN] to be returned.
    ];
  }

  forward.invert = function(x, y) {
    var lambda = 0,
        phi = 0,
        i = 50;
    do {
      var cosLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda),
          sinLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda),
          cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
          sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi),
          A = 1 + cosPhi,
          fx = A * sinLambda - x,
          fy = k + sinPhi * cosPhi0 - A * sinPhi0 * cosLambda - y,
          dxdLambda = A * cosLambda / 2,
          dxdPhi = -sinLambda * sinPhi,
          dydLambda = sinPhi0 * A * sinLambda / 2,
          dydPhi = cosPhi0 * cosPhi + sinPhi0 * cosLambda * sinPhi,
          denominator = dxdPhi * dydLambda - dydPhi * dxdLambda,
          dLambda = (fy * dxdPhi - fx * dydPhi) / denominator / 2,
          dPhi = (fx * dydLambda - fy * dxdLambda) / denominator;
      lambda -= dLambda, phi -= dPhi;
    } while ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(dLambda) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(dPhi) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) && --i > 0);
    return sPhi0 * phi > -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda), tanPhi0) - 1e-3 ? [lambda * 2, phi] : null;
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var phi0 = 20 * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */],
      sPhi0 = phi0 >= 0 ? 1 : -1,
      tanPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(sPhi0 * phi0),
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["f" /* geoProjectionMutator */])(armadilloRaw),
      p = m(phi0),
      stream_ = p.stream;

  p.parallel = function(_) {
    if (!arguments.length) return phi0 * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */];
    tanPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])((sPhi0 = (phi0 = _ * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]) >= 0 ? 1 : -1) * phi0);
    return m(phi0);
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart(), sphereStream.lineStart();
      for (var lambda = sPhi0 * -180; sPhi0 * lambda < 180; lambda += sPhi0 * 90) sphereStream.point(lambda, sPhi0 * 90);
      while (sPhi0 * (lambda -= phi0) >= -180) { // TODO precision?
        sphereStream.point(lambda, sPhi0 * -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */] / 2), tanPhi0) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */]);
      }
      sphereStream.lineEnd(), sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return p
      .scale(218.695)
      .center([0, 28.0974]);
});


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = bakerRaw;



var sqrt8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(8),
    phi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* log */])(1 + __WEBPACK_IMPORTED_MODULE_1__math__["l" /* sqrt2 */]);

function bakerRaw(lambda, phi) {
  var phi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi);
  return phi0 < __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]
      ? [lambda, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(__WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */] + phi / 2))]
      : [lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi0) * (2 * __WEBPACK_IMPORTED_MODULE_1__math__["l" /* sqrt2 */] - 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi0)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(phi) * (2 * __WEBPACK_IMPORTED_MODULE_1__math__["l" /* sqrt2 */] * (phi0 - __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(phi0 / 2)))];
}

bakerRaw.invert = function(x, y) {
  if ((y0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y)) < phi0) return [x, 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* exp */])(y)) - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]];
  var phi = __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */], i = 25, delta, y0;
  do {
    var cosPhi_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi / 2), tanPhi_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(phi / 2);
    phi -= delta = (sqrt8 * (phi - __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* log */])(tanPhi_2) - y0) / (sqrt8 - cosPhi_2 * cosPhi_2 / (2 * tanPhi_2));
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["u" /* epsilon2 */] && --i > 0);
  return [x / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi) * (sqrt8 - 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi))), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(y) * phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(bakerRaw)
      .scale(112.314);
});


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = berghausRaw;



function berghausRaw(lobes) {
  var k = 2 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / lobes;

  function forward(lambda, phi) {
    var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["b" /* geoAzimuthalEquidistantRaw */])(lambda, phi);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(lambda) > __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) { // back hemisphere
      var theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(p[1], p[0]),
          r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(p[0] * p[0] + p[1] * p[1]),
          theta0 = k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["E" /* round */])((theta - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) / k) + __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */],
          α = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta -= theta0), 2 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta)); // angle relative to lobe end
      theta = theta0 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(α)) - α;
      p[0] = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta);
      p[1] = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta);
    }
    return p;
  }

  forward.invert = function(x, y) {
    var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(x * x + y * y);
    if (r > __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) {
      var theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(y, x),
          theta0 = k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["E" /* round */])((theta - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) / k) + __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */],
          s = theta > theta0 ? -1 : 1,
          A = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta0 - theta),
          cotα = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(s * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])((A - __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] - 2 * A) + r * r)));
      theta = theta0 + 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* atan */])((cotα + s * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(cotα * cotα - 3)) / 3);
      x = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta), y = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta);
    }
    return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["b" /* geoAzimuthalEquidistantRaw */].invert(x, y);
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var lobes = 5,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["f" /* geoProjectionMutator */])(berghausRaw),
      p = m(lobes),
      projectionStream = p.stream,
      epsilon = 1e-2,
      cr = -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(epsilon * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]),
      sr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(epsilon * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]);

  p.lobes = function(_) {
    return arguments.length ? m(lobes = +_) : lobes;
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = projectionStream(stream),
        sphereStream = (p.rotate([0, 0]), projectionStream(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart(), sphereStream.lineStart();
      for (var i = 0, delta = 360 / lobes, delta0 = 2 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / lobes, phi = 90 - 180 / lobes, phi0 = __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]; i < lobes; ++i, phi -= delta, phi0 -= delta0) {
        sphereStream.point(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(sr * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi0), cr) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(sr * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi0)) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */]);
        if (phi < -90) {
          sphereStream.point(-90, -180 - phi - epsilon);
          sphereStream.point(-90, -180 - phi + epsilon);
        } else {
          sphereStream.point(90, phi + epsilon);
          sphereStream.point(90, phi - epsilon);
        }
      }
      sphereStream.lineEnd(), sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return p
      .scale(87.8076)
      .center([0, 17.1875])
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parallel1__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sinusoidal__ = __webpack_require__(13);
/* harmony export (immutable) */ __webpack_exports__["b"] = bonneRaw;




function bonneRaw(phi0) {
  if (!phi0) return __WEBPACK_IMPORTED_MODULE_2__sinusoidal__["b" /* sinusoidalRaw */];
  var cotPhi0 = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(phi0);

  function forward(lambda, phi) {
    var rho = cotPhi0 + phi0 - phi,
        e = rho ? lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi) / rho : rho;
    return [rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(e), cotPhi0 - rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(e)];
  }

  forward.invert = function(x, y) {
    var rho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(x * x + (y = cotPhi0 - y) * y),
        phi = cotPhi0 + phi0 - rho;
    return [rho / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(x, y), phi];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parallel1__["a" /* default */])(bonneRaw)
      .scale(123.082)
      .center([0, 26.1441])
      .parallel(45);
});


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = bottomleyRaw;



function bottomleyRaw(sinPsi) {

  function forward(lambda, phi) {
    var rho = __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] - phi,
        eta = rho ? lambda * sinPsi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(rho) / rho : rho;
    return [rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(eta) / sinPsi, __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] - rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(eta)];
  }

  forward.invert = function(x, y) {
    var x1 = x * sinPsi,
        y1 = __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] - y,
        rho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(x1 * x1 + y1 * y1),
        eta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(x1, y1);
    return [(rho ? rho / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(rho) : 1) * eta / sinPsi, __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] - rho];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var sinPsi = 0.5,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["f" /* geoProjectionMutator */])(bottomleyRaw),
      p = m(sinPsi);

  p.fraction = function(_) {
    return arguments.length ? m(sinPsi = +_) : sinPsi;
  };

  return p
      .scale(158.837);
});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mollweide__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bromleyRaw; });




var bromleyRaw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mollweide__["c" /* mollweideBromleyRaw */])(1, 4 / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */], __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(bromleyRaw)
      .scale(152.63);
});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = chamberlinRaw;
/* harmony export (immutable) */ __webpack_exports__["c"] = chamberlinAfrica;
/* harmony export (immutable) */ __webpack_exports__["a"] = chamberlin;



// Azimuthal distance.
function distance(dPhi, c1, s1, c2, s2, dLambda) {
  var cosdLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(dLambda), r;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(dPhi) > 1 || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(dLambda) > 1) {
    r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(s1 * s2 + c1 * c2 * cosdLambda);
  } else {
    var sindPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(dPhi / 2), sindLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(dLambda / 2);
    r = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(sindPhi * sindPhi + c1 * c2 * sindLambda * sindLambda));
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(r) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] ? [r, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(c2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(dLambda), c1 * s2 - s1 * c2 * cosdLambda)] : [0, 0];
}

// Angle opposite a, and contained between sides of lengths b and c.
function angle(b, c, a) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])((b * b + c * c - a * a) / (2 * b * c));
}

// Normalize longitude.
function longitude(lambda) {
  return lambda - 2 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* floor */])((lambda + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) / (2 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]));
}

function chamberlinRaw(p0, p1, p2) {
  var points = [
    [p0[0], p0[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(p0[1]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(p0[1])],
    [p1[0], p1[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(p1[1]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(p1[1])],
    [p2[0], p2[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(p2[1]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(p2[1])]
  ];

  for (var a = points[2], b, i = 0; i < 3; ++i, a = b) {
    b = points[i];
    a.v = distance(b[1] - a[1], a[3], a[2], b[3], b[2], b[0] - a[0]);
    a.point = [0, 0];
  }

  var beta0 = angle(points[0].v[0], points[2].v[0], points[1].v[0]),
      beta1 = angle(points[0].v[0], points[1].v[0], points[2].v[0]),
      beta2 = __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] - beta0;

  points[2].point[1] = 0;
  points[0].point[0] = -(points[1].point[0] = points[0].v[0] / 2);

  var mean = [
    points[2].point[0] = points[0].point[0] + points[2].v[0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(beta0),
    2 * (points[0].point[1] = points[1].point[1] = points[2].v[0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(beta0))
  ];

  function forward(lambda, phi) {
    var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi),
        cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
        v = new Array(3), i;

    // Compute distance and azimuth from control points.
    for (i = 0; i < 3; ++i) {
      var p = points[i];
      v[i] = distance(phi - p[1], p[3], p[2], cosPhi, sinPhi, lambda - p[0]);
      if (!v[i][0]) return p.point;
      v[i][1] = longitude(v[i][1] - p.v[1]);
    }

    // Arithmetic mean of interception points.
    var point = mean.slice();
    for (i = 0; i < 3; ++i) {
      var j = i == 2 ? 0 : i + 1;
      var a = angle(points[i].v[0], v[i][0], v[j][0]);
      if (v[i][1] < 0) a = -a;

      if (!i) {
        point[0] += v[i][0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(a);
        point[1] -= v[i][0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(a);
      } else if (i == 1) {
        a = beta1 - a;
        point[0] -= v[i][0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(a);
        point[1] -= v[i][0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(a);
      } else {
        a = beta2 - a;
        point[0] += v[i][0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(a);
        point[1] += v[i][0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(a);
      }
    }

    point[0] /= 3, point[1] /= 3;
    return point;
  }

  return forward;
}

function pointRadians(p) {
  return p[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */], p[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */], p;
}

function chamberlinAfrica() {
  return chamberlin([0, 22], [45, 22], [22.5, -22])
      .scale(380)
      .center([22.5, 2]);
}

function chamberlin(p0, p1, p2) { // TODO order matters!
  var c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["h" /* geoCentroid */])({type: "MultiPoint", coordinates: [p0, p1, p2]}),
      R = [-c[0], -c[1]],
      r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["d" /* geoRotation */])(R),
      p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(chamberlinRaw(pointRadians(r(p0)), pointRadians(r(p1)), pointRadians(r(p2)))).rotate(R),
      center = p.center;

  delete p.rotate;

  p.center = function(_) {
    return arguments.length ? center(r(_)) : r.invert(center());
  };

  return p
      .clipAngle(90);
}


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallel1__ = __webpack_require__(9);
/* harmony export (immutable) */ __webpack_exports__["b"] = craigRaw;



function craigRaw(phi0) {
  var tanPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])(phi0);

  function forward(lambda, phi) {
    return [lambda, (lambda ? lambda / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(lambda) : 1) * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(phi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(lambda) - tanPhi0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(phi))];
  }

  forward.invert = tanPhi0 ? function(x, y) {
    if (x) y *= __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(x) / x;
    var cosλ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(x);
    return [x, 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* sqrt */])(cosλ * cosλ + tanPhi0 * tanPhi0 - y * y) - cosλ, tanPhi0 - y)];
  } : function(x, y) {
    return [x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* asin */])(x ? y * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])(x) / x : y)];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parallel1__["a" /* default */])(craigRaw)
      .scale(249.828)
      .clipAngle(90);
});


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = crasterRaw;



var sqrt3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(3);

function crasterRaw(lambda, phi) {
  return [sqrt3 * lambda * (2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(2 * phi / 3) - 1) / __WEBPACK_IMPORTED_MODULE_1__math__["A" /* sqrtPi */], sqrt3 * __WEBPACK_IMPORTED_MODULE_1__math__["A" /* sqrtPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi / 3)];
}

crasterRaw.invert = function(x, y) {
  var phi = 3 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(y / (sqrt3 * __WEBPACK_IMPORTED_MODULE_1__math__["A" /* sqrtPi */]));
  return [__WEBPACK_IMPORTED_MODULE_1__math__["A" /* sqrtPi */] * x / (sqrt3 * (2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(2 * phi / 3) - 1)), phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(crasterRaw)
      .scale(156.19);
});


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallel1__ = __webpack_require__(9);
/* harmony export (immutable) */ __webpack_exports__["b"] = cylindricalStereographicRaw;



function cylindricalStereographicRaw(phi0) {
  var cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, (1 + cosPhi0) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])(phi / 2)];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* atan */])(y / (1 + cosPhi0)) * 2];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parallel1__["a" /* default */])(cylindricalStereographicRaw)
      .scale(124.75);
});


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = eckert1Raw;



function eckert1Raw(lambda, phi) {
  var alpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(8 / (3 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]));
  return [
    alpha * lambda * (1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]),
    alpha * phi
  ];
}

eckert1Raw.invert = function(x, y) {
  var alpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(8 / (3 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */])),
      phi = y / alpha;
  return [
    x / (alpha * (1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */])),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(eckert1Raw)
      .scale(165.664);
});


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = eckert2Raw;



function eckert2Raw(lambda, phi) {
  var alpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(4 - 3 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi)));
  return [
    2 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(6 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) * lambda * alpha,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(phi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(2 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 3) * (2 - alpha)
  ];
}

eckert2Raw.invert = function(x, y) {
  var alpha = 2 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(2 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 3);
  return [
    x * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(6 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) / (2 * alpha),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(y) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])((4 - alpha * alpha) / 3)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(eckert2Raw)
      .scale(165.664);
});


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = eckert3Raw;



function eckert3Raw(lambda, phi) {
  var k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (4 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]));
  return [
    2 / k * lambda * (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - 4 * phi * phi / (__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]))),
    4 / k * phi
  ];
}

eckert3Raw.invert = function(x, y) {
  var k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (4 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */])) / 2;
  return [
    x * k / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - y * y * (4 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) / (4 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]))),
    y * k / 2
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(eckert3Raw)
      .scale(180.739);
});


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = eckert4Raw;



function eckert4Raw(lambda, phi) {
  var k = (2 + __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi);
  phi /= 2;
  for (var i = 0, delta = Infinity; i < 10 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]; i++) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi);
    phi -= delta = (phi + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi) * (cosPhi + 2) - k) / (2 * cosPhi * (1 + cosPhi));
  }
  return [
    2 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (4 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */])) * lambda * (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi)),
    2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / (4 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */])) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi)
  ];
}

eckert4Raw.invert = function(x, y) {
  var A = y * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])((4 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) / 2,
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(A),
      c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(k);
  return [
    x / (2 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (4 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */])) * (1 + c)),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])((k + A * (c + 2)) / (2 + __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(eckert4Raw)
      .scale(180.739);
});


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = eckert5Raw;



function eckert5Raw(lambda, phi) {
  return [
    lambda * (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi)) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]),
    2 * phi / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */])
  ];
}

eckert5Raw.invert = function(x, y) {
  var k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]),
      phi = y * k / 2;
  return [
    k * x / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi)),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(eckert5Raw)
      .scale(173.044);
});


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = eckert6Raw;



function eckert6Raw(lambda, phi) {
  var k = (1 + __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi);
  for (var i = 0, delta = Infinity; i < 10 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]; i++) {
    phi -= delta = (phi + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi) - k) / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi));
  }
  k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]);
  return [
    lambda * (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi)) / k,
    2 * phi / k
  ];
}

eckert6Raw.invert = function(x, y) {
  var j = 1 + __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */],
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(j / 2);
  return [
    x * 2 * k / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(y *= k)),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])((y + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(y)) / j)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(eckert6Raw)
      .scale(173.044);
});


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__august__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = eisenlohrRaw;




var eisenlohrK = 3 + 2 * __WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */];

function eisenlohrRaw(lambda, phi) {
  var s0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(lambda /= 2),
      c0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(lambda),
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* sqrt */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(phi)),
      c1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(phi /= 2),
      t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(phi) / (c1 + __WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * c0 * k),
      c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* sqrt */])(2 / (1 + t * t)),
      v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* sqrt */])((__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * c1 + (c0 + s0) * k) / (__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * c1 + (c0 - s0) * k));
  return [
    eisenlohrK * (c * (v - 1 / v) - 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["w" /* log */])(v)),
    eisenlohrK * (c * t * (v + 1 / v) - 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["n" /* atan */])(t))
  ];
}

eisenlohrRaw.invert = function(x, y) {
  if (!(p = __WEBPACK_IMPORTED_MODULE_1__august__["b" /* augustRaw */].invert(x / 1.2, y * 1.065))) return null;
  var lambda = p[0], phi = p[1], i = 20, p;
  x /= eisenlohrK, y /= eisenlohrK;
  do {
    var _0 = lambda / 2,
        _1 = phi / 2,
        s0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(_0),
        c0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(_0),
        s1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(_1),
        c1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(_1),
        cos1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(phi),
        k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* sqrt */])(cos1),
        t = s1 / (c1 + __WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * c0 * k),
        t2 = t * t,
        c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* sqrt */])(2 / (1 + t2)),
        v0 = (__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * c1 + (c0 + s0) * k),
        v1 = (__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * c1 + (c0 - s0) * k),
        v2 = v0 / v1,
        v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* sqrt */])(v2),
        vm1v = v - 1 / v,
        vp1v = v + 1 / v,
        fx = c * vm1v - 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["w" /* log */])(v) - x,
        fy = c * t * vp1v - 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["n" /* atan */])(t) - y,
        deltatDeltaLambda = s1 && __WEBPACK_IMPORTED_MODULE_2__math__["v" /* sqrt1_2 */] * k * s0 * t2 / s1,
        deltatDeltaPhi = (__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * c0 * c1 + k) / (2 * (c1 + __WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * c0 * k) * (c1 + __WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * c0 * k) * k),
        deltacDeltat = -0.5 * t * c * c * c,
        deltacDeltaLambda = deltacDeltat * deltatDeltaLambda,
        deltacDeltaPhi = deltacDeltat * deltatDeltaPhi,
        A = (A = 2 * c1 + __WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * k * (c0 - s0)) * A * v,
        deltavDeltaLambda = (__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * c0 * c1 * k + cos1) / A,
        deltavDeltaPhi = -(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt2 */] * s0 * s1) / (k * A),
        deltaxDeltaLambda = vm1v * deltacDeltaLambda - 2 * deltavDeltaLambda / v + c * (deltavDeltaLambda + deltavDeltaLambda / v2),
        deltaxDeltaPhi = vm1v * deltacDeltaPhi - 2 * deltavDeltaPhi / v + c * (deltavDeltaPhi + deltavDeltaPhi / v2),
        deltayDeltaLambda = t * vp1v * deltacDeltaLambda - 2 * deltatDeltaLambda / (1 + t2) + c * vp1v * deltatDeltaLambda + c * t * (deltavDeltaLambda - deltavDeltaLambda / v2),
        deltayDeltaPhi = t * vp1v * deltacDeltaPhi - 2 * deltatDeltaPhi / (1 + t2) + c * vp1v * deltatDeltaPhi + c * t * (deltavDeltaPhi - deltavDeltaPhi / v2),
        denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda;
    if (!denominator) break;
    var deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator,
        deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
    lambda -= deltaLambda;
    phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* max */])(-__WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["r" /* min */])(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */], phi - deltaPhi));
  } while ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* abs */])(deltaLambda) > __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* abs */])(deltaPhi) > __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */]) && --i > 0);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */] ? [0, phi] : i && [lambda, phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(eisenlohrRaw)
      .scale(62.5271);
});


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["c"] = ellipticJi;
/* unused harmony export ellipticJ */
/* harmony export (immutable) */ __webpack_exports__["b"] = ellipticFi;
/* harmony export (immutable) */ __webpack_exports__["a"] = ellipticF;


// Returns [sn, cn, dn](u + iv|m).
function ellipticJi(u, v, m) {
  var a, b, c;
  if (!u) {
    b = ellipticJ(v, 1 - m);
    return [
      [0, b[0] / b[1]],
      [1 / b[1], 0],
      [b[2] / b[1], 0]
    ];
  }
  a = ellipticJ(u, m);
  if (!v) return [[a[0], 0], [a[1], 0], [a[2], 0]];
  b = ellipticJ(v, 1 - m);
  c = b[1] * b[1] + m * a[0] * a[0] * b[0] * b[0];
  return [
    [a[0] * b[2] / c, a[1] * a[2] * b[0] * b[1] / c],
    [a[1] * b[1] / c, -a[0] * a[2] * b[0] * b[2] / c],
    [a[2] * b[1] * b[2] / c, -m * a[0] * a[1] * b[0] / c]
  ];
}

// Returns [sn, cn, dn, ph](u|m).
function ellipticJ(u, m) {
  var ai, b, phi, t, twon;
  if (m < __WEBPACK_IMPORTED_MODULE_0__math__["g" /* epsilon */]) {
    t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(u);
    b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(u);
    ai = m * (u - t * b) / 4;
    return [
      t - ai * b,
      b + ai * t,
      1 - m * t * t / 2,
      u - ai
    ];
  }
  if (m >= 1 - __WEBPACK_IMPORTED_MODULE_0__math__["g" /* epsilon */]) {
    ai = (1 - m) / 4;
    b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* cosh */])(u);
    t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["C" /* tanh */])(u);
    phi = 1 / b;
    twon = b * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["D" /* sinh */])(u);
    return [
      t + ai * (twon - u) / (b * b),
      phi - ai * t * phi * (twon - u),
      phi + ai * t * phi * (twon + u),
      2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["x" /* exp */])(u)) - __WEBPACK_IMPORTED_MODULE_0__math__["a" /* halfPi */] + ai * (twon - u) / b
    ];
  }

  var a = [1, 0, 0, 0, 0, 0, 0, 0, 0],
      c = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* sqrt */])(m), 0, 0, 0, 0, 0, 0, 0, 0],
      i = 0;
  b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* sqrt */])(1 - m);
  twon = 1;

  while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* abs */])(c[i] / a[i]) > __WEBPACK_IMPORTED_MODULE_0__math__["g" /* epsilon */] && i < 8) {
    ai = a[i++];
    c[i] = (ai - b) / 2;
    a[i] = (ai + b) / 2;
    b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* sqrt */])(ai * b);
    twon *= 2;
  }

  phi = twon * a[i] * u;
  do {
    t = c[i] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(b = phi) / a[i];
    phi = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* asin */])(t) + phi) / 2;
  } while (--i);

  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(phi), t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(phi), t / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(phi - b), phi];
}

// Calculate F(phi+iPsi|m).
// See Abramowitz and Stegun, 17.4.11.
function ellipticFi(phi, psi, m) {
  var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* abs */])(phi),
      i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* abs */])(psi),
      sinhPsi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["D" /* sinh */])(i);
  if (r) {
    var cscPhi = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(r),
        cotPhi2 = 1 / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])(r) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])(r)),
        b = -(cotPhi2 + m * (sinhPsi * sinhPsi * cscPhi * cscPhi) - 1 + m),
        c = (m - 1) * cotPhi2,
        cotLambda2 = (-b + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* sqrt */])(b * b - 4 * c)) / 2;
    return [
      ellipticF(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* atan */])(1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* sqrt */])(cotLambda2)), m) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* sign */])(phi),
      ellipticF(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* sqrt */])((cotLambda2 / cotPhi2 - 1) / m)), 1 - m) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* sign */])(psi)
    ];
  }
  return [
    0,
    ellipticF(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* atan */])(sinhPsi), 1 - m) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* sign */])(psi)
  ];
}

// Calculate F(phi|m) where m = k² = sin²α.
// See Abramowitz and Stegun, 17.6.7.
function ellipticF(phi, m) {
  if (!m) return phi;
  if (m === 1) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])(phi / 2 + __WEBPACK_IMPORTED_MODULE_0__math__["q" /* quarterPi */]));
  var a = 1,
      b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* sqrt */])(1 - m),
      c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* sqrt */])(m);
  for (var i = 0; __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* abs */])(c) > __WEBPACK_IMPORTED_MODULE_0__math__["g" /* epsilon */]; i++) {
    if (phi % __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */]) {
      var dPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* atan */])(b * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])(phi) / a);
      if (dPhi < 0) dPhi += __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */];
      phi += dPhi + ~~(phi / __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */]) * __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */];
    } else phi += phi;
    c = (a + b) / 2;
    b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* sqrt */])(a * b);
    c = ((a = c) - b) / 2;
  }
  return phi / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* pow */])(2, i) * a);
}


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = faheyRaw;



var faheyK = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(35 * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]);

function faheyRaw(lambda, phi) {
  var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(phi / 2);
  return [lambda * faheyK * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - t * t), (1 + faheyK) * t];
}

faheyRaw.invert = function(x, y) {
  var t = y / (1 + faheyK);
  return [x && x / (faheyK * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - t * t)), 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* atan */])(t)];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(faheyRaw)
      .scale(137.152);
});


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = foucautRaw;



function foucautRaw(lambda, phi) {
  var k = phi / 2, cosk = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(k);
  return [ 2 * lambda / __WEBPACK_IMPORTED_MODULE_1__math__["A" /* sqrtPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi) * cosk * cosk, __WEBPACK_IMPORTED_MODULE_1__math__["A" /* sqrtPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(k)];
}

foucautRaw.invert = function(x, y) {
  var k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* atan */])(y / __WEBPACK_IMPORTED_MODULE_1__math__["A" /* sqrtPi */]), cosk = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(k), phi = 2 * k;
  return [x * __WEBPACK_IMPORTED_MODULE_1__math__["A" /* sqrtPi */] / 2 / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi) * cosk * cosk), phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(foucautRaw)
      .scale(135.264);
});


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



function gilbertForward(point) {
  return [point[0] / 2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(point[1] / 2 * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */])) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */]];
}

function gilbertInvert(point) {
  return [point[0] * 2, 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(point[1] * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */])) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */]];
}

/* harmony default export */ __webpack_exports__["a"] = (function(projectionType) {
  if (projectionType == null) projectionType = __WEBPACK_IMPORTED_MODULE_0_d3_geo__["m" /* geoOrthographic */];
  var projection = projectionType(),
      equirectangular = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["n" /* geoEquirectangular */])().scale(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */]).precision(0).clipAngle(null).translate([0, 0]); // antimeridian cutting

  function gilbert(point) {
    return projection(gilbertForward(point));
  }

  if (projection.invert) gilbert.invert = function(point) {
    return gilbertInvert(projection.invert(point));
  };

  gilbert.stream = function(stream) {
    var s1 = projection.stream(stream), s0 = equirectangular.stream({
      point: function(lambda, phi) { s1.point(lambda / 2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(-phi / 2 * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */])) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */]); },
      lineStart: function() { s1.lineStart(); },
      lineEnd: function() { s1.lineEnd(); },
      polygonStart: function() { s1.polygonStart(); },
      polygonEnd: function() { s1.polygonEnd(); }
    });
    s0.sphere = s1.sphere;
    return s0;
  };

  function property(name) {
    gilbert[name] = function(_) {
      return arguments.length ? (projection[name](_), gilbert) : projection[name]();
    };
  }

  gilbert.rotate = function(_) {
    return arguments.length ? (equirectangular.rotate(_), gilbert) : equirectangular.rotate();
  };

  gilbert.center = function(_) {
    return arguments.length ? (projection.center(gilbertForward(_)), gilbert) : gilbertInvert(projection.center());
  };

  property("clipAngle");
  property("clipExtent");
  property("scale");
  property("translate");
  property("precision");

  return gilbert
      .scale(249.5);
});


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = gingeryRaw;



function gingeryRaw(rho, n) {
  var k = 2 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / n,
      rho2 = rho * rho;

  function forward(lambda, phi) {
    var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["b" /* geoAzimuthalEquidistantRaw */])(lambda, phi),
        x = p[0],
        y = p[1],
        r2 = x * x + y * y;

    if (r2 > rho2) {
      var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(r2),
          theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(y, x),
          theta0 = k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["E" /* round */])(theta / k),
          alpha = theta - theta0,
          rhoCosAlpha = rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(alpha),
          k_ = (rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(alpha) - alpha * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(rhoCosAlpha)) / (__WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] - rhoCosAlpha),
          s_ = gingeryLength(alpha, k_),
          e = (__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] - rho) / gingeryIntegrate(s_, rhoCosAlpha, __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]);

      x = r;
      var i = 50, delta;
      do {
        x -= delta = (rho + gingeryIntegrate(s_, rhoCosAlpha, x) * e - r) / (s_(x) * e);
      } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] && --i > 0);

      y = alpha * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(x);
      if (x < __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) y -= k_ * (x - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]);

      var s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta0),
          c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta0);
      p[0] = x * c - y * s;
      p[1] = x * s + y * c;
    }
    return p;
  }

  forward.invert = function(x, y) {
    var r2 = x * x + y * y;
    if (r2 > rho2) {
      var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(r2),
          theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(y, x),
          theta0 = k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["E" /* round */])(theta / k),
          dTheta = theta - theta0;

      x = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(dTheta);
      y = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(dTheta);

      var x_halfPi = x - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */],
          sinx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(x),
          alpha = y / sinx,
          delta = x < __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] ? Infinity : 0,
          i = 10;

      while (true) {
        var rhosinAlpha = rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(alpha),
            rhoCosAlpha = rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(alpha),
            sinRhoCosAlpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(rhoCosAlpha),
            halfPi_RhoCosAlpha = __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] - rhoCosAlpha,
            k_ = (rhosinAlpha - alpha * sinRhoCosAlpha) / halfPi_RhoCosAlpha,
            s_ = gingeryLength(alpha, k_);

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) < __WEBPACK_IMPORTED_MODULE_1__math__["u" /* epsilon2 */] || !--i) break;

        alpha -= delta = (alpha * sinx - k_ * x_halfPi - y) / (
          sinx - x_halfPi * 2 * (
            halfPi_RhoCosAlpha * (rhoCosAlpha + alpha * rhosinAlpha * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(rhoCosAlpha) - sinRhoCosAlpha) -
            rhosinAlpha * (rhosinAlpha - alpha * sinRhoCosAlpha)
          ) / (halfPi_RhoCosAlpha * halfPi_RhoCosAlpha));
      }
      r = rho + gingeryIntegrate(s_, rhoCosAlpha, x) * (__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] - rho) / gingeryIntegrate(s_, rhoCosAlpha, __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]);
      theta = theta0 + alpha;
      x = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta);
      y = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta);
    }
    return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["b" /* geoAzimuthalEquidistantRaw */].invert(x, y);
  };

  return forward;
}

function gingeryLength(alpha, k) {
  return function(x) {
    var y_ = alpha * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(x);
    if (x < __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) y_ -= k;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 + y_ * y_);
  };
}

// Numerical integration: trapezoidal rule.
function gingeryIntegrate(f, a, b) {
  var n = 50,
      h = (b - a) / n,
      s = f(a) + f(b);
  for (var i = 1, x = a; i < n; ++i) s += 2 * f(x += h);
  return s * 0.5 * h;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var n = 6,
      rho = 30 * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */],
      cRho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(rho),
      sRho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(rho),
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["f" /* geoProjectionMutator */])(gingeryRaw),
      p = m(rho, n),
      stream_ = p.stream,
      epsilon = 1e-2,
      cr = -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(epsilon * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]),
      sr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(epsilon * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]);

  p.radius = function(_) {
    if (!arguments.length) return rho * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */];
    cRho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(rho = _ * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]);
    sRho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(rho);
    return m(rho, n);
  };

  p.lobes = function(_) {
    if (!arguments.length) return n;
    return m(rho, n = +_);
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart(), sphereStream.lineStart();
      for (var i = 0, delta = 2 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / n, phi = 0; i < n; ++i, phi -= delta) {
        sphereStream.point(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(sr * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi), cr) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(sr * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi)) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */]);
        sphereStream.point(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(sRho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi - delta / 2), cRho) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(sRho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi - delta / 2)) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */]);
      }
      sphereStream.lineEnd(), sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return p
      .rotate([90, -40])
      .scale(91.7095)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ginzburg4Raw; });



var ginzburg4Raw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__["a" /* default */])(2.8284, -1.6988, 0.75432, -0.18071, 1.76003, -0.38914, 0.042555);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(ginzburg4Raw)
      .scale(149.995);
});


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ginzburg5Raw; });



var ginzburg5Raw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__["a" /* default */])(2.583819, -0.835827, 0.170354, -0.038094, 1.543313, -0.411435,0.082742);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(ginzburg5Raw)
      .scale(153.93);
});


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ginzburg6Raw; });




var ginzburg6Raw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__["a" /* default */])(5 / 6 * __WEBPACK_IMPORTED_MODULE_2__math__["k" /* pi */], -0.62636, -0.0344, 0, 1.3493, -0.05524, 0, 0.045);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(ginzburg6Raw)
      .scale(130.945);
});


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = ginzburg8Raw;



function ginzburg8Raw(lambda, phi) {
  var lambda2 = lambda * lambda,
      phi2 = phi * phi;
  return [
    lambda * (1 - 0.162388 * phi2) * (0.87 - 0.000952426 * lambda2 * lambda2),
    phi * (1 + phi2 / 12)
  ];
}

ginzburg8Raw.invert = function(x, y) {
  var lambda = x,
      phi = y,
      i = 50, delta;
  do {
    var phi2 = phi * phi;
    phi -= delta = (phi * (1 + phi2 / 12) - y) / (1 + phi2 / 4);
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] && --i > 0);
  i = 50;
  x /= 1 -0.162388 * phi2;
  do {
    var lambda4 = (lambda4 = lambda * lambda) * lambda4;
    lambda -= delta = (lambda * (0.87 - 0.000952426 * lambda4) - x) / (0.87 - 0.00476213 * lambda4);
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] && --i > 0);
  return [lambda, phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(ginzburg8Raw)
      .scale(131.747);
});


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ginzburg9Raw; });



var ginzburg9Raw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__["a" /* default */])(2.6516, -0.76534, 0.19123, -0.047094, 1.36289, -0.13965,0.031762);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(ginzburg9Raw)
      .scale(131.087);
});


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = hammerRaw;



function hammerRaw(A, B) {
  if (arguments.length < 2) B = A;
  if (B === 1) return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoAzimuthalEqualAreaRaw */];
  if (B === Infinity) return hammerQuarticAuthalicRaw;

  function forward(lambda, phi) {
    var coordinates = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoAzimuthalEqualAreaRaw */])(lambda / B, phi);
    coordinates[0] *= A;
    return coordinates;
  }

  forward.invert = function(x, y) {
    var coordinates = __WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoAzimuthalEqualAreaRaw */].invert(x / A, y);
    coordinates[0] *= B;
    return coordinates;
  };

  return forward;
}

function hammerQuarticAuthalicRaw(lambda, phi) {
  return [
    lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi /= 2),
    2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi)
  ];
}

hammerQuarticAuthalicRaw.invert = function(x, y) {
  var phi = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(y / 2);
  return [
    x * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi / 2) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var B = 2,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["f" /* geoProjectionMutator */])(hammerRaw),
      p = m(B);

  p.coefficient = function(_) {
    if (!arguments.length) return B;
    return m(B = +_);
  };

  return p
    .scale(169.529);
});


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = hammerRetroazimuthalRaw;



function hammerRetroazimuthalRaw(phi0) {
  var sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi0),
      cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi0),
      rotate = hammerRetroazimuthalRotation(phi0);

  rotate.invert = hammerRetroazimuthalRotation(-phi0);

  function forward(lambda, phi) {
    var p = rotate(lambda, phi);
    lambda = p[0], phi = p[1];
    var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi),
        cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
        cosLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda),
        z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosLambda),
        sinz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(z),
        K = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(sinz) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] ? z / sinz : 1;
    return [
      K * cosPhi0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda),
      (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(lambda) > __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] ? K : -K) // rotate for back hemisphere
        * (sinPhi0 * cosPhi - cosPhi0 * sinPhi * cosLambda)
    ];
  }

  forward.invert = function(x, y) {
    var rho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(x * x + y * y),
        sinz = -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(rho),
        cosz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(rho),
        a = rho * cosz,
        b = -y * sinz,
        c = rho * sinPhi0,
        d = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(a * a + b * b - c * c),
        phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(a * c + b * d, b * c - a * d),
        lambda = (rho > __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] ? -1 : 1) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(x * sinz, rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi) * cosz + y * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi) * sinz);
    return rotate.invert(lambda, phi);
  };

  return forward;
}

// Latitudinal rotation by phi0.
// Temporary hack until D3 supports arbitrary small-circle clipping origins.
function hammerRetroazimuthalRotation(phi0) {
  var sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi0),
      cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi0);

  return function(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
        x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda) * cosPhi,
        y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda) * cosPhi,
        z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi);
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(y, x * cosPhi0 - z * sinPhi0),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(z * cosPhi0 + x * sinPhi0)
    ];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var phi0 = 0,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["f" /* geoProjectionMutator */])(hammerRetroazimuthalRaw),
      p = m(phi0),
      rotate_ = p.rotate,
      stream_ = p.stream,
      circle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoCircle */])();

  p.parallel = function(_) {
    if (!arguments.length) return phi0 * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */];
    var r = p.rotate();
    return m(phi0 = _ * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]).rotate(r);
  };

  // Temporary hack; see hammerRetroazimuthalRotation.
  p.rotate = function(_) {
    if (!arguments.length) return (_ = rotate_.call(p), _[1] += phi0 * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */], _);
    rotate_.call(p, [_[0], _[1] - phi0 * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */]]);
    circle.center([-_[0], -_[1]]);
    return p;
  };

  p.stream = function(stream) {
    stream = stream_(stream);
    stream.sphere = function() {
      stream.polygonStart();
      var epsilon = 1e-2,
          ring = circle.radius(90 - epsilon)().coordinates[0],
          n = ring.length - 1,
          i = -1,
          p;
      stream.lineStart();
      while (++i < n) stream.point((p = ring[i])[0], p[1]);
      stream.lineEnd();
      ring = circle.radius(90 + epsilon)().coordinates[0];
      n = ring.length - 1;
      stream.lineStart();
      while (--i >= 0) stream.point((p = ring[i])[0], p[1]);
      stream.lineEnd();
      stream.polygonEnd();
    };
    return stream;
  };

  return p
      .scale(79.4187)
      .parallel(45)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collignon__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cylindricalEqualArea__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = healpixRaw;






var healpixParallel = 41 + 48 / 36 + 37 / 3600, // for K=3; TODO automate
    healpixLambert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__cylindricalEqualArea__["b" /* cylindricalEqualAreaRaw */])(0);

function healpixRaw(H) {
  var phi0 = healpixParallel * __WEBPACK_IMPORTED_MODULE_4__math__["o" /* radians */],
      dx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__collignon__["b" /* collignonRaw */])(__WEBPACK_IMPORTED_MODULE_4__math__["k" /* pi */], phi0)[0] - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__collignon__["b" /* collignonRaw */])(-__WEBPACK_IMPORTED_MODULE_4__math__["k" /* pi */], phi0)[0],
      y0 = healpixLambert(0, phi0)[1],
      y1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__collignon__["b" /* collignonRaw */])(0, phi0)[1],
      dy1 = __WEBPACK_IMPORTED_MODULE_4__math__["A" /* sqrtPi */] - y1,
      k = __WEBPACK_IMPORTED_MODULE_4__math__["z" /* tau */] / H,
      w = 4 / __WEBPACK_IMPORTED_MODULE_4__math__["z" /* tau */],
      h = y0 + (dy1 * dy1 * 4) / __WEBPACK_IMPORTED_MODULE_4__math__["z" /* tau */];

  function forward(lambda, phi) {
    var point,
        phi2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math__["f" /* abs */])(phi);
    if (phi2 > phi0) {
      var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math__["r" /* min */])(H - 1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math__["t" /* max */])(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math__["s" /* floor */])((lambda + __WEBPACK_IMPORTED_MODULE_4__math__["k" /* pi */]) / k)));
      lambda += __WEBPACK_IMPORTED_MODULE_4__math__["k" /* pi */] * (H - 1) / H - i * k;
      point = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__collignon__["b" /* collignonRaw */])(lambda, phi2);
      point[0] = point[0] * __WEBPACK_IMPORTED_MODULE_4__math__["z" /* tau */] / dx - __WEBPACK_IMPORTED_MODULE_4__math__["z" /* tau */] * (H - 1) / (2 * H) + i * __WEBPACK_IMPORTED_MODULE_4__math__["z" /* tau */] / H;
      point[1] = y0 + (point[1] - y1) * 4 * dy1 / __WEBPACK_IMPORTED_MODULE_4__math__["z" /* tau */];
      if (phi < 0) point[1] = -point[1];
    } else {
      point = healpixLambert(lambda, phi);
    }
    point[0] *= w, point[1] /= h;
    return point;
  }

  forward.invert = function(x, y) {
    x /= w, y *= h;
    var y2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math__["f" /* abs */])(y);
    if (y2 > y0) {
      var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math__["r" /* min */])(H - 1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math__["t" /* max */])(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math__["s" /* floor */])((x + __WEBPACK_IMPORTED_MODULE_4__math__["k" /* pi */]) / k)));
      x = (x + __WEBPACK_IMPORTED_MODULE_4__math__["k" /* pi */] * (H - 1) / H - i * k) * dx / __WEBPACK_IMPORTED_MODULE_4__math__["z" /* tau */];
      var point = __WEBPACK_IMPORTED_MODULE_2__collignon__["b" /* collignonRaw */].invert(x, 0.25 * (y2 - y0) * __WEBPACK_IMPORTED_MODULE_4__math__["z" /* tau */] / dy1 + y1);
      point[0] -= __WEBPACK_IMPORTED_MODULE_4__math__["k" /* pi */] * (H - 1) / H - i * k;
      if (y < 0) point[1] = -point[1];
      return point;
    }
    return healpixLambert.invert(x, y);
  };

  return forward;
}

function sphere(step) {
  return {
    type: "Polygon",
    coordinates: [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(-180, 180 + step / 2, step).map(function(x, i) { return [x, i & 1 ? 90 - 1e-6 : healpixParallel]; })
      .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(180, -180 - step / 2, -step).map(function(x, i) { return [x, i & 1 ? -90 + 1e-6 : -healpixParallel]; }))
    ]
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var H = 4,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_geo__["f" /* geoProjectionMutator */])(healpixRaw),
      p = m(H),
      stream_ = p.stream;

  p.lobes = function(_) {
    return arguments.length ? m(H = +_) : H;
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_geo__["g" /* geoStream */])(sphere(180 / H), sphereStream); };
    return rotateStream;
  };

  return p
      .scale(239.75);
});


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = hillRaw;



function hillRaw(K) {
  var L = 1 + K,
      sinBt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(1 / L),
      Bt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(sinBt),
      A = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / (B = __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] + 4 * Bt * L)),
      B,
      rho0 = 0.5 * A * (L + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(K * (2 + K))),
      K2 = K * K,
      L2 = L * L;

  function forward(lambda, phi) {
    var t = 1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi),
        rho,
        omega;
    if (t && t < 2) {
      var theta = __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] - phi, i = 25, delta;
      do {
        var sinTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta),
            cosTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta),
            Bt_Bt1 = Bt + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(sinTheta, L - cosTheta),
            C = 1 + L2 - 2 * L * cosTheta;
        theta -= delta = (theta - K2 * Bt - L * sinTheta + C * Bt_Bt1 -0.5 * t * B) / (2 * L * sinTheta * Bt_Bt1);
      } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["u" /* epsilon2 */] && --i > 0);
      rho = A * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(C);
      omega = lambda * Bt_Bt1 / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */];
    } else {
      rho = A * (K + t);
      omega = lambda * Bt / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */];
    }
    return [
      rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(omega),
      rho0 - rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(omega)
    ];
  }

  forward.invert = function(x, y) {
    var rho2 = x * x + (y -= rho0) * y,
        cosTheta = (1 + L2 - rho2 / (A * A)) / (2 * L),
        theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(cosTheta),
        sinTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta),
        Bt_Bt1 = Bt + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(sinTheta, L - cosTheta);
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(x / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(rho2)) * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / Bt_Bt1,
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(1 - 2 * (theta - K2 * Bt - L * sinTheta + (1 + L2 - 2 * L * cosTheta) * Bt_Bt1) / B)
    ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var K = 1,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["f" /* geoProjectionMutator */])(hillRaw),
      p = m(K);

  p.ratio = function(_) {
    return arguments.length ? m(K = +_) : K;
  };

  return p
      .scale(167.774)
      .center([0, 18.67]);
});


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boggs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(6);



var lobes = [[ // northern hemisphere
  [[-180,   0], [-100,  90], [ -40,   0]],
  [[ -40,   0], [  30,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-160, -90], [-100,   0]],
  [[-100,   0], [ -60, -90], [ -20,   0]],
  [[ -20,   0], [  20, -90], [  80,   0]],
  [[  80,   0], [ 140, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__boggs__["b" /* boggsRaw */], lobes)
      .scale(160.857);
});


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__homolosine__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(6);



var lobes = [[ // northern hemisphere
  [[-180,   0], [-100,  90], [ -40,   0]],
  [[ -40,   0], [  30,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-160, -90], [-100,   0]],
  [[-100,   0], [ -60, -90], [ -20,   0]],
  [[ -20,   0], [  20, -90], [  80,   0]],
  [[  80,   0], [ 140, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__homolosine__["b" /* homolosineRaw */], lobes)
      .scale(152.63);
});


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mollweide__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(6);



var lobes = [[ // northern hemisphere
  [[-180,   0], [-100,  90], [ -40,   0]],
  [[ -40,   0], [  30,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-160, -90], [-100,   0]],
  [[-100,   0], [ -60, -90], [ -20,   0]],
  [[ -20,   0], [  20, -90], [  80,   0]],
  [[  80,   0], [ 140, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__mollweide__["b" /* mollweideRaw */], lobes)
      .scale(169.529);
});


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mollweide__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(6);



var lobes = [[ // northern hemisphere
  [[-180,   0], [ -90,  90], [   0,   0]],
  [[   0,   0], [  90,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [ -90, -90], [   0,   0]],
  [[   0,   0], [  90, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__mollweide__["b" /* mollweideRaw */], lobes)
      .scale(169.529)
      .rotate([20, 0]);
});


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sinuMollweide__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(6);



var lobes = [[ // northern hemisphere
  [[-180,  35], [ -30,  90], [   0,  35]],
  [[   0,  35], [  30,  90], [ 180,  35]]
], [ // southern hemisphere
  [[-180, -10], [-102, -90], [ -65, -10]],
  [[ -65, -10], [   5, -90], [  77, -10]],
  [[  77, -10], [ 103, -90], [ 180, -10]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__sinuMollweide__["b" /* sinuMollweideRaw */], lobes)
      .rotate([-20, -55])
      .scale(164.263)
      .center([0, -5.4036]);
});


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sinusoidal__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(6);



var lobes = [[ // northern hemisphere
  [[-180,   0], [-110,  90], [ -40,   0]],
  [[ -40,   0], [   0,  90], [  40,   0]],
  [[  40,   0], [ 110,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-110, -90], [ -40,   0]],
  [[ -40,   0], [   0, -90], [  40,   0]],
  [[  40,   0], [ 110, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__sinusoidal__["b" /* sinusoidalRaw */], lobes)
      .scale(152.63)
      .rotate([-20, 0]);
});


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = kavrayskiy7Raw;



function kavrayskiy7Raw(lambda, phi) {
  return [3 / __WEBPACK_IMPORTED_MODULE_1__math__["z" /* tau */] * lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 3 - phi * phi), phi];
}

kavrayskiy7Raw.invert = function(x, y) {
  return [__WEBPACK_IMPORTED_MODULE_1__math__["z" /* tau */] / 3 * x / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 3 - y * y), y];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(kavrayskiy7Raw)
      .scale(158.837);
});


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = lagrangeRaw;



function lagrangeRaw(n) {

  function forward(lambda, phi) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return [0, phi < 0 ? -2 : 2];
    var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi),
        v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* pow */])((1 + sinPhi) / (1 - sinPhi), n / 2),
        c = 0.5 * (v + 1 / v) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda *= n);
    return [
      2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda) / c,
      (v - 1 / v) / c
    ];
  }

  forward.invert = function(x, y) {
    var y0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y0 - 2) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return x ? null : [0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(y) * __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]];
    if (y0 > 2) return null;

    x /= 2, y /= 2;
    var x2 = x * x,
        y2 = y * y,
        t = 2 * y / (1 + x2 + y2); // tanh(nPhi)
    t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* pow */])((1 + t) / (1 - t), 1 / n);
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(2 * x, 1 - x2 - y2) / n,
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])((t - 1) / (t + 1))
    ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var n = 0.5,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["f" /* geoProjectionMutator */])(lagrangeRaw),
      p = m(n);

  p.spacing = function(_) {
    return arguments.length ? m(n = +_) : n;
  };

  return p
      .scale(124.75);
});


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = larriveeRaw;



var pi_sqrt2 = __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / __WEBPACK_IMPORTED_MODULE_1__math__["l" /* sqrt2 */];

function larriveeRaw(lambda, phi) {
  return [
    lambda * (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi))) / 2,
    phi / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi / 2) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda / 6))
  ];
}

larriveeRaw.invert = function(x, y) {
  var x0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(x),
      y0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y),
      lambda = __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */],
      phi = __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */];
  if (y0 < pi_sqrt2) phi *= y0 / pi_sqrt2;
  else lambda += 6 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(pi_sqrt2 / y0);
  for (var i = 0; i < 25; i++) {
    var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi),
        sqrtcosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi)),
        sinPhi_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi / 2),
        cosPhi_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi / 2),
        sinLambda_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda / 6),
        cosLambda_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda / 6),
        f0 = 0.5 * lambda * (1 + sqrtcosPhi) - x0,
        f1 = phi / (cosPhi_2 * cosLambda_6) - y0,
        df0dPhi = sqrtcosPhi ? -0.25 * lambda * sinPhi / sqrtcosPhi : 0,
        df0dLambda = 0.5 * (1 + sqrtcosPhi),
        df1dPhi = (1 +0.5 * phi * sinPhi_2 / cosPhi_2) / (cosPhi_2 * cosLambda_6),
        df1dLambda = (phi / cosPhi_2) * (sinLambda_6 / 6) / (cosLambda_6 * cosLambda_6),
        denom = df0dPhi * df1dLambda - df1dPhi * df0dLambda,
        dPhi = (f0 * df1dLambda - f1 * df0dLambda) / denom,
        dLambda = (f1 * df0dPhi - f0 * df1dPhi) / denom;
    phi -= dPhi;
    lambda -= dLambda;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(dPhi) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(dLambda) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) break;
  }
  return [x < 0 ? -lambda : lambda, y < 0 ? -phi : phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(larriveeRaw)
      .scale(97.2672);
});


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = laskowskiRaw;



function laskowskiRaw(lambda, phi) {
  var lambda2 = lambda * lambda, phi2 = phi * phi;
  return [
    lambda * (0.975534 + phi2 * (-0.119161 + lambda2 * -0.0143059 + phi2 * -0.0547009)),
    phi * (1.00384 + lambda2 * (0.0802894 + phi2 * -0.02855 + lambda2 * 0.000199025) + phi2 * (0.0998909 + phi2 * -0.0491032))
  ];
}

laskowskiRaw.invert = function(x, y) {
  var lambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(x) * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */],
      phi = y / 2,
      i = 50;
  do {
    var lambda2 = lambda * lambda,
        phi2 = phi * phi,
        lambdaPhi = lambda * phi,
        fx = lambda * (0.975534 + phi2 * (-0.119161 + lambda2 * -0.0143059 + phi2 * -0.0547009)) - x,
        fy = phi * (1.00384 + lambda2 * (0.0802894 + phi2 * -0.02855 + lambda2 * 0.000199025) + phi2 * (0.0998909 + phi2 * -0.0491032)) - y,
        deltaxDeltaLambda = 0.975534 - phi2 * (0.119161 + 3 * lambda2 * 0.0143059 + phi2 * 0.0547009),
        deltaxDeltaPhi = -lambdaPhi * (2 * 0.119161 + 4 * 0.0547009 * phi2 + 2 * 0.0143059 * lambda2),
        deltayDeltaLambda = lambdaPhi * (2 * 0.0802894 + 4 * 0.000199025 * lambda2 + 2 * -0.02855 * phi2),
        deltayDeltaPhi = 1.00384 + lambda2 * (0.0802894 + 0.000199025 * lambda2) + phi2 * (3 * (0.0998909 - 0.02855 * lambda2) - 5 * 0.0491032 * phi2),
        denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda,
        deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator,
        deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
    lambda -= deltaLambda, phi -= deltaPhi;
  } while ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(deltaLambda) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(deltaPhi) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) && --i > 0);
  return i && [lambda, phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(laskowskiRaw)
      .scale(139.98);
});


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = littrowRaw;



function littrowRaw(lambda, phi) {
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(phi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda)
  ];
}

littrowRaw.invert = function(x, y) {
  var x2 = x * x,
      y2 = y * y,
      y2_1 = y2 + 1,
      cosPhi = x
          ? __WEBPACK_IMPORTED_MODULE_1__math__["v" /* sqrt1_2 */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])((y2_1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(x2 * x2 + 2 * x2 * (y2 - 1) + y2_1 * y2_1)) / x2 + 1)
          : 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(y2_1);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(x * cosPhi),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(y) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(cosPhi)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(littrowRaw)
      .scale(144.049)
      .clipAngle(90 - 1e-3);
});


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parallel1__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = loximuthalRaw;



function loximuthalRaw(phi0) {
  var cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi0),
      tanPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(__WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */] + phi0 / 2);

  function forward(lambda, phi) {
    var y = phi - phi0,
        x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] ? lambda * cosPhi0
            : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(x = __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */] + phi / 2) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(x) - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]
            ? 0 : lambda * y / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(x) / tanPhi0);
    return [x, y];
  }

  forward.invert = function(x, y) {
    var lambda,
        phi = y + phi0;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] ? x / cosPhi0
          : (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(lambda = __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */] + phi / 2) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(lambda) - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) ? 0
          : x * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(lambda) / tanPhi0) / y,
      phi
    ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parallel1__["a" /* default */])(loximuthalRaw)
      .parallel(40)
      .scale(158.837);
});


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = millerRaw;



function millerRaw(lambda, phi) {
  return [lambda, 1.25 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(__WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */] + 0.4 * phi))];
}

millerRaw.invert = function(x, y) {
  return [x, 2.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* exp */])(0.8 * y)) - 0.625 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(millerRaw)
      .scale(108.318);
});


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = modifiedStereographicRaw;
/* harmony export (immutable) */ __webpack_exports__["c"] = modifiedStereographicAlaska;
/* harmony export (immutable) */ __webpack_exports__["d"] = modifiedStereographicGs48;
/* harmony export (immutable) */ __webpack_exports__["e"] = modifiedStereographicGs50;
/* harmony export (immutable) */ __webpack_exports__["f"] = modifiedStereographicMiller;
/* harmony export (immutable) */ __webpack_exports__["g"] = modifiedStereographicLee;
/* harmony export (immutable) */ __webpack_exports__["a"] = modifiedStereographic;



function modifiedStereographicRaw(C) {
  var m = C.length - 1;

  function forward(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
        k = 2 / (1 + cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda)),
        zr = k * cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda),
        zi = k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi),
        i = m,
        w = C[i],
        ar = w[0],
        ai = w[1],
        t;
    while (--i >= 0) {
      w = C[i];
      ar = w[0] + zr * (t = ar) - zi * ai;
      ai = w[1] + zr * ai + zi * t;
    }
    ar = zr * (t = ar) - zi * ai;
    ai = zr * ai + zi * t;
    return [ar, ai];
  }

  forward.invert = function(x, y) {
    var i = 20,
        zr = x,
        zi = y;
    do {
      var j = m,
          w = C[j],
          ar = w[0],
          ai = w[1],
          br = 0,
          bi = 0,
          t;

      while (--j >= 0) {
        w = C[j];
        br = ar + zr * (t = br) - zi * bi;
        bi = ai + zr * bi + zi * t;
        ar = w[0] + zr * (t = ar) - zi * ai;
        ai = w[1] + zr * ai + zi * t;
      }
      br = ar + zr * (t = br) - zi * bi;
      bi = ai + zr * bi + zi * t;
      ar = zr * (t = ar) - zi * ai - x;
      ai = zr * ai + zi * t - y;

      var denominator = br * br + bi * bi, deltar, deltai;
      zr -= deltar = (ar * br + ai * bi) / denominator;
      zi -= deltai = (ai * br - ar * bi) / denominator;
    } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(deltar) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(deltai) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] && --i > 0);

    if (i) {
      var rho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(zr * zr + zi * zi),
          c = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* atan */])(rho * 0.5),
          sinc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(c);
      return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(zr * sinc, rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(c)), rho ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(zi * sinc / rho) : 0];
    }
  };

  return forward;
}

var alaska = [[0.9972523, 0], [0.0052513, -0.0041175], [0.0074606, 0.0048125], [-0.0153783, -0.1968253], [0.0636871, -0.1408027], [0.3660976, -0.2937382]],
    gs48 = [[0.98879, 0], [0, 0], [-0.050909, 0], [0, 0], [0.075528, 0]],
    gs50 = [[0.9842990, 0], [0.0211642, 0.0037608], [-0.1036018, -0.0575102], [-0.0329095, -0.0320119], [0.0499471, 0.1223335], [0.0260460, 0.0899805], [0.0007388, -0.1435792], [0.0075848, -0.1334108], [-0.0216473, 0.0776645], [-0.0225161, 0.0853673]],
    miller = [[0.9245, 0], [0, 0], [0.01943, 0]],
    lee = [[0.721316, 0], [0, 0], [-0.00881625, -0.00617325]];

function modifiedStereographicAlaska() {
  return modifiedStereographic(alaska, [152, -64])
      .scale(1500)
      .center([-160.908, 62.4864])
      .clipAngle(25);
}

function modifiedStereographicGs48() {
  return modifiedStereographic(gs48, [95, -38])
      .scale(1000)
      .clipAngle(55)
      .center([-96.5563, 38.8675]);
}

function modifiedStereographicGs50() {
  return modifiedStereographic(gs50, [120, -45])
      .scale(359.513)
      .clipAngle(55)
      .center([-117.474, 53.0628]);
}

function modifiedStereographicMiller() {
  return modifiedStereographic(miller, [-20, -18])
      .scale(209.091)
      .center([20, 16.7214])
      .clipAngle(82);
}

function modifiedStereographicLee() {
  return modifiedStereographic(lee, [165, 10])
      .scale(250)
      .clipAngle(130)
      .center([-165, -10]);
}

function modifiedStereographic(coefficients, rotate) {
  var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(modifiedStereographicRaw(coefficients)).rotate(rotate).clipAngle(90),
      r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["d" /* geoRotation */])(rotate),
      center = p.center;

  delete p.rotate;

  p.center = function(_) {
    return arguments.length ? center(r(_)) : r.invert(center());
  };

  return p;
}


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = mtFlatPolarParabolicRaw;



var sqrt6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(6),
    sqrt7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(7);

function mtFlatPolarParabolicRaw(lambda, phi) {
  var theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(7 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi) / (3 * sqrt6));
  return [
    sqrt6 * lambda * (2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(2 * theta / 3) - 1) / sqrt7,
    9 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta / 3) / sqrt7
  ];
}

mtFlatPolarParabolicRaw.invert = function(x, y) {
  var theta = 3 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(y * sqrt7 / 9);
  return [
    x * sqrt7 / (sqrt6 * (2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(2 * theta / 3) - 1)),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta) * 3 * sqrt6 / 7)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(mtFlatPolarParabolicRaw)
      .scale(164.859);
});


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = mtFlatPolarQuarticRaw;



function mtFlatPolarQuarticRaw(lambda, phi) {
  var k = (1 + __WEBPACK_IMPORTED_MODULE_1__math__["v" /* sqrt1_2 */]) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi),
      theta = phi;
  for (var i = 0, delta; i < 25; i++) {
    theta -= delta = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta / 2) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta) - k) / (0.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta / 2) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta));
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) break;
  }
  return [
    lambda * (1 + 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta / 2)) / (3 * __WEBPACK_IMPORTED_MODULE_1__math__["l" /* sqrt2 */]),
    2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(3) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta / 2) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math__["l" /* sqrt2 */])
  ];
}

mtFlatPolarQuarticRaw.invert = function(x, y) {
  var sinTheta_2 = y * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math__["l" /* sqrt2 */]) / (2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(3)),
      theta = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(sinTheta_2);
  return [
    3 * __WEBPACK_IMPORTED_MODULE_1__math__["l" /* sqrt2 */] * x / (1 + 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta / 2)),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])((sinTheta_2 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta)) / (1 + __WEBPACK_IMPORTED_MODULE_1__math__["v" /* sqrt1_2 */]))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(mtFlatPolarQuarticRaw)
      .scale(188.209);
});


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = mtFlatPolarSinusoidalRaw;



function mtFlatPolarSinusoidalRaw(lambda, phi) {
  var A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(6 / (4 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */])),
      k = (1 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 4) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi),
      theta = phi / 2;
  for (var i = 0, delta; i < 25; i++) {
    theta -= delta = (theta / 2 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta) - k) / (0.5 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta));
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) break;
  }
  return [
    A * (0.5 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta)) * lambda / 1.5,
    A * theta
  ];
}

mtFlatPolarSinusoidalRaw.invert = function(x, y) {
  var A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(6 / (4 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */])),
      theta = y / A;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(theta) - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) theta = theta < 0 ? -__WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] : __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */];
  return [
    1.5 * x / (A * (0.5 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta))),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])((theta / 2 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(theta)) / (1 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 4))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(mtFlatPolarSinusoidalRaw)
      .scale(166.518);
});


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = naturalEarthRaw;



function naturalEarthRaw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
  ];
}

naturalEarthRaw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
        (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(naturalEarthRaw)
      .scale(175.295);
});


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = nellHammerRaw;



function nellHammerRaw(lambda, phi) {
  return [
    lambda * (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi)) / 2,
    2 * (phi - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(phi / 2))
  ];
}

nellHammerRaw.invert = function(x, y) {
  var p = y / 2;
  for (var i = 0, delta = Infinity; i < 10 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]; ++i) {
    var c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(y / 2);
    y -= delta = (y - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(y / 2) - p) / (1 - 0.5 / (c * c));
  }
  return [
    2 * x / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(y)),
    y
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(nellHammerRaw)
      .scale(152.63);
});


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {});


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = pattersonRaw;



// Based on Java implementation by Bojan Savric.
// https://github.com/OSUCartography/JMapProjLib/blob/master/src/com/jhlabs/map/proj/PattersonProjection.java

var pattersonK1 = 1.0148,
    pattersonK2 = 0.23185,
    pattersonK3 = -0.14499,
    pattersonK4 = 0.02406,
    pattersonC1 = pattersonK1,
    pattersonC2 = 5 * pattersonK2,
    pattersonC3 = 7 * pattersonK3,
    pattersonC4 = 9 * pattersonK4,
    pattersonYmax = 1.790857183;

function pattersonRaw(lambda, phi) {
  var phi2 = phi * phi;
  return [
    lambda,
    phi * (pattersonK1 + phi2 * phi2 * (pattersonK2 + phi2 * (pattersonK3 + pattersonK4 * phi2)))
  ];
}

pattersonRaw.invert = function(x, y) {
  if (y > pattersonYmax) y = pattersonYmax;
  else if (y < -pattersonYmax) y = -pattersonYmax;
  var yc = y, delta;

  do { // Newton-Raphson
    var y2 = yc * yc;
    yc -= delta = ((yc * (pattersonK1 + y2 * y2 * (pattersonK2 + y2 * (pattersonK3 + pattersonK4 * y2)))) - y) / (pattersonC1 + y2 * y2 * (pattersonC2 + y2 * (pattersonC3 + pattersonC4 * y2)));
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]);

  return [x, yc];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(pattersonRaw)
      .scale(139.319);
});


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = polyconicRaw;



function polyconicRaw(lambda, phi) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return [lambda, 0];
  var tanPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(phi),
      k = lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(k) / tanPhi,
    phi + (1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(k)) / tanPhi
  ];
}

polyconicRaw.invert = function(x, y) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return [x, 0];
  var k = x * x + y * y,
      phi = y * 0.5,
      i = 10, delta;
  do {
    var tanPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(phi),
        secPhi = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
        j = k - 2 * y * phi + phi * phi;
    phi -= delta = (tanPhi * j + 2 * (phi - y)) / (2 + j * secPhi * secPhi + 2 * (phi - y) * tanPhi);
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] && --i > 0);
  tanPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(phi);
  return [
    (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y) < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi + 1 / tanPhi) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(x * tanPhi) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(x) * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(x * tanPhi)) + __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */])) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(polyconicRaw)
      .scale(103.74);
});


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__octahedron__ = __webpack_require__(23);





/* harmony default export */ __webpack_exports__["a"] = (function(faceProjection) {

  faceProjection = faceProjection || function(face) {
    var c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["h" /* geoCentroid */])({type: "MultiPoint", coordinates: face});
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["i" /* geoGnomonic */])().scale(1).translate([0, 0]).rotate([-c[0], -c[1]]);
  };

  var faces = __WEBPACK_IMPORTED_MODULE_3__octahedron__["a" /* default */].map(function(face) {
    return {face: face, project: faceProjection(face)};
  });

  [-1, 0, 0, 1, 0, 1, 4, 5].forEach(function(d, i) {
    var node = faces[d];
    node && (node.children || (node.children = [])).push(faces[i]);
  });

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(faces[0], function(lambda, phi) {
        return faces[lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 2 ? phi < 0 ? 6 : 4
            : lambda < 0 ? phi < 0 ? 2 : 0
            : lambda < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 2 ? phi < 0 ? 3 : 1
            : phi < 0 ? 7 : 5];
      })
      .scale(101.858)
      .center([0, 45]);
});


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collignon__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__octahedron__ = __webpack_require__(23);






var kx = 2 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* sqrt */])(3);

function collignonK(a, b) {
  var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__collignon__["b" /* collignonRaw */])(a, b);
  return [p[0] * kx, p[1]];
}

collignonK.invert = function(x,y) {
  return __WEBPACK_IMPORTED_MODULE_1__collignon__["b" /* collignonRaw */].invert(x / kx, y);
};

/* harmony default export */ __webpack_exports__["a"] = (function(faceProjection) {

  faceProjection = faceProjection || function(face) {
    var c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["h" /* geoCentroid */])({type: "MultiPoint", coordinates: face});
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(collignonK).translate([0, 0]).scale(1).rotate(c[1] > 0 ? [-c[0], 0] : [180 - c[0], 180]);
  };

  var faces = __WEBPACK_IMPORTED_MODULE_4__octahedron__["a" /* default */].map(function(face) {
    return {face: face, project: faceProjection(face)};
  });

  [-1, 0, 0, 1, 0, 1, 4, 5].forEach(function(d, i) {
    var node = faces[d];
    node && (node.children || (node.children = [])).push(faces[i]);
  });

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__index__["a" /* default */])(faces[0], function(lambda, phi) {
        return faces[lambda < -__WEBPACK_IMPORTED_MODULE_2__math__["k" /* pi */] / 2 ? phi < 0 ? 6 : 4
            : lambda < 0 ? phi < 0 ? 2 : 0
            : lambda < __WEBPACK_IMPORTED_MODULE_2__math__["k" /* pi */] / 2 ? phi < 0 ? 3 : 1
            : phi < 0 ? 7 : 5];
      })
      .scale(121.906)
      .center([0, 48.5904]);
});


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["c"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["b"] = multiply;


// Note: 6-element arrays are used to denote the 3x3 affine transform matrix:
// [a, b, c,
//  d, e, f,
//  0, 0, 1] - this redundant row is left out.

// Transform matrix for [a0, a1] -> [b0, b1].
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var u = subtract(a[1], a[0]),
      v = subtract(b[1], b[0]),
      phi = angle(u, v),
      s = length(u) / length(v);

  return multiply([
    1, 0, a[0][0],
    0, 1, a[0][1]
  ], multiply([
    s, 0, 0,
    0, s, 0
  ], multiply([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(phi), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(phi), 0,
    -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(phi), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(phi), 0
  ], [
    1, 0, -b[0][0],
    0, 1, -b[0][1]
  ])));
});

// Inverts a transform matrix.
function inverse(m) {
  var k = 1 / (m[0] * m[4] - m[1] * m[3]);
  return [
    k * m[4], -k * m[1], k * (m[1] * m[5] - m[2] * m[4]),
    -k * m[3], k * m[0], k * (m[2] * m[3] - m[0] * m[5])
  ];
}

// Multiplies two 3x2 matrices.
function multiply(a, b) {
  return [
    a[0] * b[0] + a[1] * b[3],
    a[0] * b[1] + a[1] * b[4],
    a[0] * b[2] + a[1] * b[5] + a[2],
    a[3] * b[0] + a[4] * b[3],
    a[3] * b[1] + a[4] * b[4],
    a[3] * b[2] + a[4] * b[5] + a[5]
  ];
}

// Subtracts 2D vectors.
function subtract(a, b) {
  return [a[0] - b[0], a[1] - b[1]];
}

// Magnitude of a 2D vector.
function length(v) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* sqrt */])(v[0] * v[0] + v[1] * v[1]);
}

// Angle between two 2D vectors.
function angle(a, b) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* atan2 */])(a[0] * b[1] - a[1] * b[0], a[0] * b[0] + a[1] * b[1]);
}


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__octahedron__ = __webpack_require__(23);





/* harmony default export */ __webpack_exports__["a"] = (function(faceProjection) {

  faceProjection = faceProjection || function(face) {
    var c = face.length === 6 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["h" /* geoCentroid */])({type: "MultiPoint", coordinates: face}) : face[0];
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["i" /* geoGnomonic */])().scale(1).translate([0, 0]).rotate([-c[0], -c[1]]);
  };

  var w5 = __WEBPACK_IMPORTED_MODULE_3__octahedron__["a" /* default */].map(function(face) {
    var xyz = face.map(cartesian),
        n = xyz.length,
        a = xyz[n - 1],
        b,
        hexagon = [];
    for (var i = 0; i < n; ++i) {
      b = xyz[i];
      hexagon.push(spherical([
        a[0] * 0.9486832980505138 + b[0] * 0.31622776601683794,
        a[1] * 0.9486832980505138 + b[1] * 0.31622776601683794,
        a[2] * 0.9486832980505138 + b[2] * 0.31622776601683794
      ]), spherical([
        b[0] * 0.9486832980505138 + a[0] * 0.31622776601683794,
        b[1] * 0.9486832980505138 + a[1] * 0.31622776601683794,
        b[2] * 0.9486832980505138 + a[2] * 0.31622776601683794
      ]));
      a = b;
    }
    return hexagon;
  });

  var cornerNormals = [];

  var parents = [-1, 0, 0, 1, 0, 1, 4, 5];

  w5.forEach(function(hexagon, j) {
    var face = __WEBPACK_IMPORTED_MODULE_3__octahedron__["a" /* default */][j],
        n = face.length,
        normals = cornerNormals[j] = [];
    for (var i = 0; i < n; ++i) {
      w5.push([
        face[i],
        hexagon[(i * 2 + 2) % (2 * n)],
        hexagon[(i * 2 + 1) % (2 * n)]
      ]);
      parents.push(j);
      normals.push(cross(
        cartesian(hexagon[(i * 2 + 2) % (2 * n)]),
        cartesian(hexagon[(i * 2 + 1) % (2 * n)])
      ));
    }
  });

  var faces = w5.map(function(face) {
    return {
      project: faceProjection(face),
      face: face
    };
  });

  parents.forEach(function(d, i) {
    var parent = faces[d];
    parent && (parent.children || (parent.children = [])).push(faces[i]);
  });

  function face(lambda, phi) {
    var cosphi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
        p = [cosphi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda), cosphi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi)];

    var hexagon = lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 2 ? phi < 0 ? 6 : 4
        : lambda < 0 ? phi < 0 ? 2 : 0
        : lambda < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 2 ? phi < 0 ? 3 : 1
        : phi < 0 ? 7 : 5;

    var n = cornerNormals[hexagon];

    return faces[dot(n[0], p) < 0 ? 8 + 3 * hexagon
        : dot(n[1], p) < 0 ? 8 + 3 * hexagon + 1
        : dot(n[2], p) < 0 ? 8 + 3 * hexagon + 2
        : hexagon];
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(faces[0], face)
      .scale(110.625)
      .center([0,45]);
});

function dot(a, b) {
  for (var i = 0, n = a.length, s = 0; i < n; ++i) s += a[i] * b[i];
  return s;
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
}

// Converts 3D Cartesian to spherical coordinates (degrees).
function spherical(cartesian) {
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(cartesian[1], cartesian[0]) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */],
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* max */])(-1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(1, cartesian[2]))) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */]
  ];
}

// Converts spherical coordinates (degrees) to 3D Cartesian.
function cartesian(coordinates) {
  var lambda = coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */],
      phi = coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */],
      cosphi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi);
  return [
    cosphi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda),
    cosphi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi)
  ];
}


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(ring) {
  if ((n = ring.length) < 4) return false;
  var i = 0,
      n,
      area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
  while (++i < n) area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  return area <= 0;
});


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(ring, point) {
  var x = point[0],
      y = point[1],
      contains = false;
  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi = ring[i], xi = pi[0], yi = pi[1],
        pj = ring[j], xj = pj[0], yj = pj[1];
    if (((yi > y) ^ (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) contains = !contains;
  }
  return contains;
});


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clockwise__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contains__ = __webpack_require__(146);





/* harmony default export */ __webpack_exports__["a"] = (function(object, projection) {
  var stream = projection.stream, project;
  if (!stream) throw new Error("invalid projection");
  switch (object && object.type) {
    case "Feature": project = projectFeature; break;
    case "FeatureCollection": project = projectFeatureCollection; break;
    default: project = projectGeometry; break;
  }
  return project(object, stream);
});

function projectFeatureCollection(o, stream) {
  return {
    type: "FeatureCollection",
    features: o.features.map(function(f) {
      return projectFeature(f, stream);
    })
  };
}

function projectFeature(o, stream) {
  return {
    type: "Feature",
    id: o.id,
    properties: o.properties,
    geometry: projectGeometry(o.geometry, stream)
  };
}

function projectGeometryCollection(o, stream) {
  return {
    type: "GeometryCollection",
    geometries: o.geometries.map(function(o) {
      return projectGeometry(o, stream);
    })
  };
}

function projectGeometry(o, stream) {
  if (!o) return null;
  if (o.type === "GeometryCollection") return projectGeometryCollection(o, stream);
  var sink;
  switch (o.type) {
    case "Point": sink = sinkPoint; break;
    case "MultiPoint": sink = sinkPoint; break;
    case "LineString": sink = sinkLine; break;
    case "MultiLineString": sink = sinkLine; break;
    case "Polygon": sink = sinkPolygon; break;
    case "MultiPolygon": sink = sinkPolygon; break;
    case "Sphere": sink = sinkPolygon; break;
    default: return null;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["g" /* geoStream */])(o, stream(sink));
  return sink.result();
}

var points = [],
    lines = [];

var sinkPoint = {
  point: function(x, y) {
    points.push([x, y]);
  },
  result: function() {
    var result = !points.length ? null
        : points.length < 2 ? {type: "Point", coordinates: points[0]}
        : {type: "MultiPoint", coordinates: points};
    points = [];
    return result;
  }
};

var sinkLine = {
  lineStart: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  point: function(x, y) {
    points.push([x, y]);
  },
  lineEnd: function() {
    if (points.length) lines.push(points), points = [];
  },
  result: function() {
    var result = !lines.length ? null
        : lines.length < 2 ? {type: "LineString", coordinates: lines[0]}
        : {type: "MultiLineString", coordinates: lines};
    lines = [];
    return result;
  }
};

var sinkPolygon = {
  polygonStart: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  point: function(x, y) {
    points.push([x, y]);
  },
  lineEnd: function() {
    var n = points.length;
    if (n) {
      do points.push(points[0].slice()); while (++n < 4);
      lines.push(points), points = [];
    }
  },
  polygonEnd: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  result: function() {
    if (!lines.length) return null;
    var polygons = [],
        holes = [];

    // https://github.com/d3/d3/issues/1558
    lines.forEach(function(ring) {
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__clockwise__["a" /* default */])(ring)) polygons.push([ring]);
      else holes.push(ring);
    });

    holes.forEach(function(hole) {
      var point = hole[0];
      polygons.some(function(polygon) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__contains__["a" /* default */])(polygon[0], point)) {
          polygon.push(hole);
          return true;
        }
      }) || polygons.push([hole]);
    });

    lines = [];

    return !polygons.length ? null
        : polygons.length > 1 ? {type: "MultiPolygon", coordinates: polygons}
        : {type: "Polygon", coordinates: polygons[0]};
  }
};


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(o, digits) {
  if (!(0 <= (digits = +digits) && digits <= 20)) throw new Error("invalid digits");

  function quantizePoint(coordinates) {
    coordinates[0] = +coordinates[0].toFixed(digits);
    coordinates[1] = +coordinates[1].toFixed(digits);
  }

  function quantizePoints(coordinates) {
    coordinates.forEach(quantizePoint);
  }

  function quantizePolygon(coordinates) {
    coordinates.forEach(quantizePoints);
  }

  function quantizeGeometry(o) {
    if (o) switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(quantizeGeometry); break;
      case "Point": quantizePoint(o.coordinates); break;
      case "MultiPoint": case "LineString": quantizePoints(o.coordinates); break;
      case "MultiLineString": case "Polygon": quantizePolygon(o.coordinates); break;
      case "MultiPolygon": o.coordinates.forEach(quantizePolygon); break;
      default: return;
    }
  }

  function quantizeFeature(o) {
    quantizeGeometry(o.geometry);
  }

  if (o) switch (o.type) {
    case "Feature": quantizeFeature(o); break;
    case "FeatureCollection": o.features.forEach(quantizeFeature); break;
    default: quantizeGeometry(o); break;
  }

  return o;
});


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gringorten__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(24);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__gringorten__["b" /* gringortenRaw */])
      .scale(176.423);
});


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallel1__ = __webpack_require__(9);
/* harmony export (immutable) */ __webpack_exports__["b"] = rectangularPolyconicRaw;



function rectangularPolyconicRaw(phi0) {
  var sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(phi0);

  function forward(lambda, phi) {
    var A = sinPhi0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])(lambda * sinPhi0 / 2) / sinPhi0 : lambda / 2;
    if (!phi) return [2 * A, -phi0];
    var E = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* atan */])(A * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(phi)),
        cotPhi = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])(phi);
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(E) * cotPhi,
      phi + (1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(E)) * cotPhi - phi0
    ];
  }

  // TODO return null for points outside outline.
  forward.invert = function(x, y) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* abs */])(y += phi0) < __WEBPACK_IMPORTED_MODULE_0__math__["g" /* epsilon */]) return [sinPhi0 ? 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* atan */])(sinPhi0 * x / 2) / sinPhi0 : x, 0];
    var k = x * x + y * y,
        phi = 0,
        i = 10, delta;
    do {
      var tanPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])(phi),
          secPhi = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* cos */])(phi),
          j = k - 2 * y * phi + phi * phi;
      phi -= delta = (tanPhi * j + 2 * (phi - y)) / (2 + j * secPhi * secPhi + 2 * (phi - y) * tanPhi);
    } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_0__math__["g" /* epsilon */] && --i > 0);
    var E = x * (tanPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])(phi)),
        A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* abs */])(y) < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* abs */])(phi + 1 / tanPhi) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* asin */])(E) * 0.5 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* acos */])(E) * 0.5 + __WEBPACK_IMPORTED_MODULE_0__math__["k" /* pi */] / 4) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* sin */])(phi);
    return [
      sinPhi0 ? 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* atan */])(sinPhi0 * A) / sinPhi0 : 2 * A,
      phi
    ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parallel1__["a" /* default */])(rectangularPolyconicRaw)
      .scale(131.215);
});


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = robinsonRaw;



var K = [
  [0.9986, -0.062],
  [1.0000, 0.0000],
  [0.9986, 0.0620],
  [0.9954, 0.1240],
  [0.9900, 0.1860],
  [0.9822, 0.2480],
  [0.9730, 0.3100],
  [0.9600, 0.3720],
  [0.9427, 0.4340],
  [0.9216, 0.4958],
  [0.8962, 0.5571],
  [0.8679, 0.6176],
  [0.8350, 0.6769],
  [0.7986, 0.7346],
  [0.7597, 0.7903],
  [0.7186, 0.8435],
  [0.6732, 0.8936],
  [0.6213, 0.9394],
  [0.5722, 0.9761],
  [0.5322, 1.0000]
];

K.forEach(function(d) {
  d[1] *= 1.0144;
});

function robinsonRaw(lambda, phi) {
  var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(18, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) * 36 / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]),
      i0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* floor */])(i),
      di = i - i0,
      ax = (k = K[i0])[0],
      ay = k[1],
      bx = (k = K[++i0])[0],
      by = k[1],
      cx = (k = K[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(19, ++i0)])[0],
      cy = k[1],
      k;
  return [
    lambda * (bx + di * (cx - ax) / 2 + di * di * (cx - 2 * bx + ax) / 2),
    (phi > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) * (by + di * (cy - ay) / 2 + di * di * (cy - 2 * by + ay) / 2)
  ];
}

robinsonRaw.invert = function(x, y) {
  var yy = y / __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */],
      phi = yy * 90,
      i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(18, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi / 5)),
      i0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* max */])(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* floor */])(i));
  do {
    var ay = K[i0][1],
        by = K[i0 + 1][1],
        cy = K[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(19, i0 + 2)][1],
        u = cy - ay,
        v = cy - 2 * by + ay,
        t = 2 * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(yy) - by) / u,
        c = v / u,
        di = t * (1 - c * t * (1 - 2 * c * t));
    if (di >= 0 || i0 === 1) {
      phi = (y >= 0 ? 5 : -5) * (di + i);
      var j = 50, delta;
      do {
        i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(18, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) / 5);
        i0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* floor */])(i);
        di = i - i0;
        ay = K[i0][1];
        by = K[i0 + 1][1];
        cy = K[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(19, i0 + 2)][1];
        phi -= (delta = (y >= 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) * (by + di * (cy - ay) / 2 + di * di * (cy - 2 * by + ay) / 2) - y) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */];
      } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["u" /* epsilon2 */] && --j > 0);
      break;
    }
  } while (--i0 >= 0);
  var ax = K[i0][0],
      bx = K[i0 + 1][0],
      cx = K[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(19, i0 + 2)][0];
  return [
    x / (bx + di * (cx - ax) / 2 + di * di * (cx - 2 * bx + ax) / 2),
    phi * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(robinsonRaw)
      .scale(152.63);
});


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = satelliteRaw;



function satelliteVerticalRaw(P) {
  function forward(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
        k = (P - 1) / (P - cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda));
    return [
      k * cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda),
      k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi)
    ];
  }

  forward.invert = function(x, y) {
    var rho2 = x * x + y * y,
        rho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(rho2),
        sinc = (P - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - rho2 * (P + 1) / (P - 1))) / ((P - 1) / rho + rho / (P - 1));
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(x * sinc, rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - sinc * sinc)),
      rho ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(y * sinc / rho) : 0
    ];
  };

  return forward;
}

function satelliteRaw(P, omega) {
  var vertical = satelliteVerticalRaw(P);
  if (!omega) return vertical;
  var cosOmega = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(omega),
      sinOmega = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(omega);

  function forward(lambda, phi) {
    var coordinates = vertical(lambda, phi),
        y = coordinates[1],
        A = y * sinOmega / (P - 1) + cosOmega;
    return [
      coordinates[0] * cosOmega / A,
      y / A
    ];
  }

  forward.invert = function(x, y) {
    var k = (P - 1) / (P - 1 - y * sinOmega);
    return vertical.invert(k * x, k * y * cosOmega);
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var distance = 2,
      omega = 0,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["f" /* geoProjectionMutator */])(satelliteRaw),
      p = m(distance, omega);

  // As a multiple of radius.
  p.distance = function(_) {
    if (!arguments.length) return distance;
    return m(distance = +_, omega);
  };

  p.tilt = function(_) {
    if (!arguments.length) return omega * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */];
    return m(distance, omega = _ * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* radians */]);
  };

  return p
      .scale(432.147)
      .clipAngle(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(1 / distance) * __WEBPACK_IMPORTED_MODULE_1__math__["p" /* degrees */] - 1e-6);
});


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var epsilon = 1e-4,
    epsilonInverse = 1e4,
    x0 = -180, x0e = x0 + epsilon,
    x1 = 180, x1e = x1 - epsilon,
    y0 = -90, y0e = y0 + epsilon,
    y1 = 90, y1e = y1 - epsilon;

function quantize(x) {
  return Math.floor(x * epsilonInverse) / epsilonInverse;
}

function normalizePoint(y) {
  return y === y0 || y === y1
      ? [0, y] // pole
      : [x0, quantize(y)]; // antimeridian
}

function clampPoint(p) {
  if (p[0] <= x0e) p[0] = x0;
  else if (p[0] >= x1e) p[0] = x1;
  if (p[1] <= y0e) p[1] = y0;
  else if (p[1] >= y1e) p[1] = y1;
}

function clampPoints(points) {
  points.forEach(clampPoint);
}

// For each ring, detect where it crosses the antimeridian or pole.
function extractFragments(polygon, fragments) {
  for (var j = 0, m = polygon.length; j < m; ++j) {
    var ring = polygon[j];
    ring.polygon = polygon;

    // By default, assume that this ring doesn’t need any stitching.
    fragments.push(ring);

    for (var i = 0, n = ring.length; i < n; ++i) {
      var point = ring[i],
          x = point[0],
          y = point[1];

      // If this is an antimeridian or polar point…
      if (x <= x0e || x >= x1e || y <= y0e || y >= y1e) {
        clampPoint(point);

        // Advance through any antimeridian or polar points…
        for (var k = i + 1; k < n; ++k) {
          var pointk = ring[k],
              xk = pointk[0],
              yk = pointk[1];
          if (xk > x0e && xk < x1e && yk > y0e && yk < y1e) break;
        }

        // If this was just a single antimeridian or polar point,
        // we don’t need to cut this ring into a fragment;
        // we can just leave it as-is.
        if (k === i + 1) continue;

        // Otherwise, if this is not the first point in the ring,
        // cut the current fragment so that it ends at the current point.
        // The current point is also normalized for later joining.
        if (i) {
          var fragmentBefore = ring.slice(0, i + 1);
          fragmentBefore.polygon = polygon;
          fragmentBefore[fragmentBefore.length - 1] = normalizePoint(y);
          fragments[fragments.length - 1] = fragmentBefore;
        }

        // If the ring started with an antimeridian fragment,
        // we can ignore that fragment entirely.
        else fragments.pop();

        // If the remainder of the ring is an antimeridian fragment,
        // move on to the next ring.
        if (k >= n) break;

        // Otherwise, add the remaining ring fragment and continue.
        fragments.push(ring = ring.slice(k - 1));
        ring[0] = normalizePoint(ring[0][1]);
        ring.polygon = polygon;
        i = -1;
        n = ring.length;
      }
    }
  }
  polygon.length = 0;
}

// Now stitch the fragments back together into rings.
// TODO remove empty polygons.
function stitchFragments(fragments) {
  var i, n = fragments.length;

  // To connect the fragments start-to-end, create a simple index by end.
  var fragmentByStart = {},
      fragmentByEnd = {},
      fragment,
      start,
      startFragment,
      end,
      endFragment;

  // For each fragment…
  for (i = 0; i < n; ++i) {
    fragment = fragments[i];
    start = fragment[0];
    end = fragment[fragment.length - 1];

    // If this fragment is closed, add it as a standalone ring.
    if (start[0] === end[0] && start[1] === end[1]) {
      fragment.polygon.push(fragment);
      fragments[i] = null;
      continue;
    }

    fragment.index = i;
    fragmentByStart[start] = fragmentByEnd[end] = fragment;
  }

  // For each open fragment…
  for (i = 0; i < n; ++i) {
    fragment = fragments[i];
    if (fragment) {
      start = fragment[0];
      end = fragment[fragment.length - 1];
      startFragment = fragmentByEnd[start];
      endFragment = fragmentByStart[end];

      delete fragmentByStart[start];
      delete fragmentByEnd[end];

      // If this fragment is closed, add it as a standalone ring.
      if (start[0] === end[0] && start[1] === end[1]) {
        fragment.polygon.push(fragment);
        continue;
      }

      if (startFragment) {
        delete fragmentByEnd[start];
        delete fragmentByStart[startFragment[0]];
        startFragment.pop(); // drop the shared coordinate
        fragments[startFragment.index] = null;
        fragment = startFragment.concat(fragment);
        fragment.polygon = startFragment.polygon;

        if (startFragment === endFragment) {
          // Connect both ends to this single fragment to create a ring.
          fragment.polygon.push(fragment);
        } else {
          fragment.index = n++;
          fragments.push(fragmentByStart[fragment[0]] = fragmentByEnd[fragment[fragment.length - 1]] = fragment);
        }
      } else if (endFragment) {
        delete fragmentByStart[end];
        delete fragmentByEnd[endFragment[endFragment.length - 1]];
        fragment.pop(); // drop the shared coordinate
        fragment = fragment.concat(endFragment);
        fragment.polygon = endFragment.polygon;
        fragment.index = n++;
        fragments[endFragment.index] = null;
        fragments.push(fragmentByStart[fragment[0]] = fragmentByEnd[fragment[fragment.length - 1]] = fragment);
      } else {
        fragment.push(fragment[0]); // close ring
        fragment.polygon.push(fragment);
      }
    }
  }
}

function stitchFeature(o) {
  stitchGeometry(o.geometry);
}

function stitchGeometry(o) {
  if (!o) return;
  var fragments, i, n;

  switch (o.type) {
    case "GeometryCollection": {
      o.geometries.forEach(stitchGeometry);
      return;
    }
    case "Point": {
      clampPoint(o.coordinates);
      break;
    }
    case "MultiPoint":
    case "LineString": {
      clampPoints(o.coordinates);
      break;
    }
    case "MultiLineString": {
      o.coordinates.forEach(clampPoints);
      break;
    }
    case "Polygon": {
      extractFragments(o.coordinates, fragments = []);
      break;
    }
    case "MultiPolygon": {
      fragments = [], i = -1, n = o.coordinates.length;
      while (++i < n) extractFragments(o.coordinates[i], fragments);
      break;
    }
    default: return;
  }

  stitchFragments(fragments);
}

/* harmony default export */ __webpack_exports__["a"] = (function(o) {
  if (o) switch (o.type) {
    case "Feature": stitchFeature(o); break;
    case "FeatureCollection": o.features.forEach(stitchFeature); break;
    default: stitchGeometry(o); break;
  }
  return o;
});


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = timesRaw;



function timesRaw(lambda, phi) {
  var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(phi / 2),
      s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(__WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */] * t);
  return [
    lambda * (0.74482 - 0.34588 * s * s),
    1.70711 * t
  ];
}

timesRaw.invert = function(x, y) {
  var t = y / 1.70711,
      s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(__WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */] * t);
  return [
    x / (0.74482 - 0.34588 * s * s),
    2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* atan */])(t)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(timesRaw)
      .scale(146.153);
});


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__twoPoint__ = __webpack_require__(53);
/* harmony export (immutable) */ __webpack_exports__["b"] = twoPointAzimuthalRaw;
/* harmony export (immutable) */ __webpack_exports__["c"] = twoPointAzimuthalUsa;
/* harmony export (immutable) */ __webpack_exports__["a"] = twoPointAzimuthal;




function twoPointAzimuthalRaw(d) {
  var cosd = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(d);

  function forward(lambda, phi) {
    var coordinates = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["e" /* geoGnomonicRaw */])(lambda, phi);
    coordinates[0] *= cosd;
    return coordinates;
  }

  forward.invert = function(x, y) {
    return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["e" /* geoGnomonicRaw */].invert(x / cosd, y);
  };

  return forward;
}

function twoPointAzimuthalUsa() {
  return twoPointAzimuthal([-158, 21.5], [-77, 39])
      .clipAngle(60)
      .scale(400);
}

function twoPointAzimuthal(p0, p1) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__twoPoint__["a" /* default */])(twoPointAzimuthalRaw, p0, p1);
}


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__twoPoint__ = __webpack_require__(53);
/* harmony export (immutable) */ __webpack_exports__["b"] = twoPointEquidistantRaw;
/* harmony export (immutable) */ __webpack_exports__["c"] = twoPointEquidistantUsa;
/* harmony export (immutable) */ __webpack_exports__["a"] = twoPointEquidistant;




// TODO clip to ellipse
function twoPointEquidistantRaw(z0) {
  if (!(z0 *= 2)) return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["b" /* geoAzimuthalEquidistantRaw */];
  var lambdaa = -z0 / 2,
      lambdab = -lambdaa,
      z02 = z0 * z0,
      tanLambda0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(lambdab),
      S = 0.5 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambdab);

  function forward(lambda, phi) {
    var za = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda - lambdaa)),
        zb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda - lambdab)),
        ys = phi < 0 ? -1 : 1;
    za *= za, zb *= zb;
    return [
      (za - zb) / (2 * z0),
      ys * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(4 * z02 * zb - (z02 - za + zb) * (z02 - za + zb)) / (2 * z0)
    ];
  }

  forward.invert = function(x, y) {
    var y2 = y * y,
        cosza = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(y2 + (t = x + lambdaa) * t)),
        coszb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(y2 + (t = x + lambdab) * t)),
        t,
        d;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(d = cosza - coszb, t = (cosza + coszb) * tanLambda0),
      (y < 0 ? -1 : 1) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(t * t + d * d) * S)
    ];
  };

  return forward;
}

function twoPointEquidistantUsa() {
  return twoPointEquidistant([-158, 21.5], [-77, 39])
      .clipAngle(130)
      .scale(122.571);
}

function twoPointEquidistant(p0, p1) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__twoPoint__["a" /* default */])(twoPointEquidistantRaw, p0, p1);
}


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = vanDerGrintenRaw;



function vanDerGrintenRaw(lambda, phi) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return [lambda, 0];
  var sinTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi / __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]),
      theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(sinTheta);
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(lambda) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return [0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(theta / 2)];
  var cosTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta),
      A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / lambda - lambda / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) / 2,
      A2 = A * A,
      G = cosTheta / (sinTheta + cosTheta - 1),
      P = G * (2 / sinTheta - 1),
      P2 = P * P,
      P2_A2 = P2 + A2,
      G_P2 = G - P2,
      Q = A2 + G;
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(lambda) * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (A * G_P2 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(A2 * G_P2 * G_P2 - P2_A2 * (G * G - P2))) / P2_A2,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (P * Q - A * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])((A2 + 1) * P2_A2 - Q * Q)) / P2_A2
  ];
}

vanDerGrintenRaw.invert = function(x, y) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return [x, 0];
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(x) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return [0, __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* atan */])(y / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]))];
  var x2 = (x /= __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) * x,
      y2 = (y /= __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) * y,
      x2_y2 = x2 + y2,
      z = x2_y2 * x2_y2,
      c1 = -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(y) * (1 + x2_y2),
      c2 = c1 - 2 * y2 + x2,
      c3 = -2 * c1 + 1 + 2 * y2 + z,
      d = y2 / c3 + (2 * c2 * c2 * c2 / (c3 * c3 * c3) - 9 * c1 * c2 / (c3 * c3)) / 27,
      a1 = (c1 - c2 * c2 / (3 * c3)) / c3,
      m1 = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(-a1 / 3),
      theta1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* acos */])(3 * d / (a1 * m1)) / 3;
  return [
    __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (x2_y2 - 1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 + 2 * (x2 - y2) + z)) / (2 * x),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(y) * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (-m1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta1 + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 3) - c2 / (3 * c3))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(vanDerGrintenRaw)
      .scale(79.4183);
});


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = vanDerGrinten2Raw;



function vanDerGrinten2Raw(lambda, phi) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return [lambda, 0];
  var sinTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi / __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]),
      theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(sinTheta);
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(lambda) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return [0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(theta / 2)];
  var cosTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta),
      A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / lambda - lambda / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) / 2,
      A2 = A * A,
      x1 = cosTheta * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 + A2) - A * cosTheta) / (1 + A2 * sinTheta * sinTheta);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(lambda) * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * x1,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - x1 * (2 * A + x1))
  ];
}

vanDerGrinten2Raw.invert = function(x, y) {
  if (!x) return [0, __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* atan */])(y / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]))];
  var x1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(x / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]),
      A = (1 - x1 * x1 - (y /= __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) * y) / (2 * x1),
      A2 = A * A,
      B = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(A2 + 1);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(x) * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (B - A),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(y) * __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])((1 - 2 * A * x1) * (A + B) - x1), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(B + A + x1)))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(vanDerGrinten2Raw)
      .scale(79.4183);
});


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = vanDerGrinten3Raw;



function vanDerGrinten3Raw(lambda, phi) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return [lambda, 0];
  var sinTheta = phi / __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */],
      theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(sinTheta);
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(lambda) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */]) return [0, __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(theta / 2)];
  var A = (__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / lambda - lambda / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */]) / 2,
      y1 = sinTheta / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(theta));
  return [
    __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(lambda) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(A * A + 1 - y1 * y1) - A),
    __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * y1
  ];
}

vanDerGrinten3Raw.invert = function(x, y) {
  if (!y) return [x, 0];
  var y1 = y / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */],
      A = (__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (1 - y1 * y1) - x * x) / (2 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * x);
  return [
    x ? __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(x) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(A * A + 1) - A) : 0,
    __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* atan */])(y1))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(vanDerGrinten3Raw)
        .scale(79.4183);
});


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = vanDerGrinten4Raw;



function vanDerGrinten4Raw(lambda, phi) {
  if (!phi) return [lambda, 0];
  var phi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(phi);
  if (!lambda || phi0 === __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) return [0, phi];
  var B = phi0 / __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */],
      B2 = B * B,
      C = (8 * B - B2 * (B2 + 2) - 5) / (2 * B2 * (B - 1)),
      C2 = C * C,
      BC = B * C,
      B_C2 = B2 + C2 + 2 * BC,
      B_3C = B + 3 * C,
      lambda0 = lambda / __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */],
      lambda1 = lambda0 + 1 / lambda0,
      D = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(lambda) - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */]) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(lambda1 * lambda1 - 4),
      D2 = D * D,
      F = B_C2 * (B2 + C2 * D2 - 1) + (1 - B2) * (B2 * (B_3C * B_3C + 4 * C2) + 12 * BC * C2 + 4 * C2 * C2),
      x1 = (D * (B_C2 + C2 - 1) + 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(F)) / (4 * B_C2 + D2);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(lambda) * __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] * x1,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 + D * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(x1) - x1 * x1)
  ];
}

vanDerGrinten4Raw.invert = function(x, y) {
  var delta;
  if (!x || !y) return [x, y];
  y /= __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */];
  var x1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(x) * x / __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */],
      D = (x1 * x1 - 1 + 4 * y * y) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* abs */])(x1),
      D2 = D * D,
      B = 2 * y,
      i = 50;
  do {
    var B2 = B * B,
        C = (8 * B - B2 * (B2 + 2) - 5) / (2 * B2 * (B - 1)),
        C_ = (3 * B - B2 * B - 10) / (2 * B2 * B),
        C2 = C * C,
        BC = B * C,
        B_C = B + C,
        B_C2 = B_C * B_C,
        B_3C = B + 3 * C,
        F = B_C2 * (B2 + C2 * D2 - 1) + (1 - B2) * (B2 * (B_3C * B_3C + 4 * C2) + C2 * (12 * BC + 4 * C2)),
        F_ = -2 * B_C * (4 * BC * C2 + (1 - 4 * B2 + 3 * B2 * B2) * (1 + C_) + C2 * (-6 + 14 * B2 - D2 + (-8 + 8 * B2 - 2 * D2) * C_) + BC * (-8 + 12 * B2 + (-10 + 10 * B2 - D2) * C_)),
        sqrtF = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(F),
        f = D * (B_C2 + C2 - 1) + 2 * sqrtF - x1 * (4 * B_C2 + D2),
        f_ = D * (2 * C * C_ + 2 * B_C * (1 + C_)) + F_ / sqrtF - 8 * B_C * (D * (-1 + C2 + B_C2) + 2 * sqrtF) * (1 + C_) / (D2 + 4 * B_C2);
    B -= delta = f / f_;
  } while (delta > __WEBPACK_IMPORTED_MODULE_1__math__["g" /* epsilon */] && --i > 0);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* sign */])(x) * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(D * D + 4) + D) * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] / 4,
    __WEBPACK_IMPORTED_MODULE_1__math__["a" /* halfPi */] * B
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(vanDerGrinten4Raw)
      .scale(127.16);
});


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mollweide__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return wagner4Raw; });




var A = 4 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] + 3 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(3),
    B = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(2 * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(3) / A);

var wagner4Raw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mollweide__["c" /* mollweideBromleyRaw */])(B * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(3) / __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */], B, A / 6);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(wagner4Raw)
      .scale(176.84);
});


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = wagner6Raw;



function wagner6Raw(lambda, phi) {
  return [lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - 3 * phi * phi / (__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */])), phi];
}

wagner6Raw.invert = function(x, y) {
  return [x / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - 3 * y * y / (__WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* pi */])), y];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(wagner6Raw)
      .scale(152.63);
});


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = wagner7Raw;



function wagner7Raw(lambda, phi) {
  var s = 0.90631 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi),
      c0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - s * s),
      c1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(2 / (1 + c0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda /= 3)));
  return [
    2.66723 * c0 * c1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda),
    1.24104 * s * c1
  ];
}

wagner7Raw.invert = function(x, y) {
  var t1 = x / 2.66723,
      t2 = y / 1.24104,
      p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(t1 * t1 + t2 * t2),
      c = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(p / 2);
  return [
    3 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(x * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* tan */])(c), 2.66723 * p),
    p && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(y * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(c) / (1.24104 * 0.90631 * p))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(wagner7Raw)
      .scale(172.632);
});


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = wiechelRaw;



function wiechelRaw(lambda, phi) {
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(phi),
      sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda) * cosPhi,
      sin1_Phi = 1 - sinPhi,
      cosLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* cos */])(lambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda) * cosPhi, -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(phi))),
      sinLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* sin */])(lambda);
  cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(1 - sinPhi * sinPhi);
  return [
    sinLambda * cosPhi - cosLambda * sin1_Phi,
    -cosLambda * cosPhi - sinLambda * sin1_Phi
  ];
}

wiechelRaw.invert = function(x, y) {
  var w = (x * x + y * y) / -2,
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(-w * (2 + w)),
      b = y * w + x * k,
      a = x * w - y * k,
      D = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* sqrt */])(a * a + b * b);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* atan2 */])(k * b, D * (1 + w)),
    D ? -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* asin */])(k * a / D) : 0
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(wiechelRaw)
      .rotate([0, -90, 45])
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aitoff__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = winkel3Raw;




function winkel3Raw(lambda, phi) {
  var coordinates = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__aitoff__["b" /* aitoffRaw */])(lambda, phi);
  return [
    (coordinates[0] + lambda / __WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */]) / 2,
    (coordinates[1] + phi) / 2
  ];
}

winkel3Raw.invert = function(x, y) {
  var lambda = x, phi = y, i = 25;
  do {
    var cosphi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(phi),
        sinphi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(phi),
        sin_2phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(2 * phi),
        sin2phi = sinphi * sinphi,
        cos2phi = cosphi * cosphi,
        sinlambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(lambda),
        coslambda_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* cos */])(lambda / 2),
        sinlambda_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* sin */])(lambda / 2),
        sin2lambda_2 = sinlambda_2 * sinlambda_2,
        C = 1 - cos2phi * coslambda_2 * coslambda_2,
        E = C ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* acos */])(cosphi * coslambda_2) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* sqrt */])(F = 1 / C) : F = 0,
        F,
        fx = 0.5 * (2 * E * cosphi * sinlambda_2 + lambda / __WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */]) - x,
        fy = 0.5 * (E * sinphi + phi) - y,
        dxdlambda = 0.5 * F * (cos2phi * sin2lambda_2 + E * cosphi * coslambda_2 * sin2phi) + 0.5 / __WEBPACK_IMPORTED_MODULE_2__math__["a" /* halfPi */],
        dxdphi = F * (sinlambda * sin_2phi / 4 - E * sinphi * sinlambda_2),
        dydlambda = 0.125 * F * (sin_2phi * sinlambda_2 - E * sinphi * cos2phi * sinlambda),
        dydphi = 0.5 * F * (sin2phi * coslambda_2 + E * sin2lambda_2 * cosphi) + 0.5,
        denominator = dxdphi * dydlambda - dydphi * dxdlambda,
        dlambda = (fy * dxdphi - fx * dydphi) / denominator,
        dphi = (fx * dydlambda - fy * dxdlambda) / denominator;
    lambda -= dlambda, phi -= dphi;
  } while ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* abs */])(dlambda) > __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* abs */])(dphi) > __WEBPACK_IMPORTED_MODULE_2__math__["g" /* epsilon */]) && --i > 0);
  return [lambda, phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoProjection */])(winkel3Raw)
      .scale(158.837);
});


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartesian__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stream__ = __webpack_require__(7);






var lambda0, phi0, lambda1, phi1, // bounds
    lambda2, // previous lambda-coordinate
    lambda00, phi00, // first point
    p0, // previous 3D point
    deltaSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    ranges,
    range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    __WEBPACK_IMPORTED_MODULE_1__area__["a" /* areaStream */].polygonStart();
  },
  polygonEnd: function() {
    __WEBPACK_IMPORTED_MODULE_1__area__["a" /* areaStream */].polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (__WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaRingSum */] < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > __WEBPACK_IMPORTED_MODULE_3__math__["o" /* epsilon */]) phi1 = 90;
    else if (deltaSum < -__WEBPACK_IMPORTED_MODULE_3__math__["o" /* epsilon */]) phi0 = -90;
    range[0] = lambda0, range[1] = lambda1;
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian__["a" /* cartesian */])([lambda * __WEBPACK_IMPORTED_MODULE_3__math__["g" /* radians */], phi * __WEBPACK_IMPORTED_MODULE_3__math__["g" /* radians */]]);
  if (p0) {
    var normal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian__["b" /* cartesianCross */])(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian__["b" /* cartesianCross */])(equatorial, normal);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian__["g" /* cartesianNormalizeInPlace */])(inflection);
    inflection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian__["f" /* spherical */])(inflection);
    var delta = lambda - lambda2,
        sign = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */] * sign,
        phii,
        antimeridian = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__math__["p" /* abs */])(delta) > 180;
    if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */];
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */];
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
      }
    } else {
      if (lambda1 >= lambda0) {
        if (lambda < lambda0) lambda0 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__math__["p" /* abs */])(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00 = lambda, phi00 = phi;
  }
  __WEBPACK_IMPORTED_MODULE_1__area__["a" /* areaStream */].point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  __WEBPACK_IMPORTED_MODULE_1__area__["a" /* areaStream */].lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00, phi00);
  __WEBPACK_IMPORTED_MODULE_1__area__["a" /* areaStream */].lineEnd();
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__math__["p" /* abs */])(deltaSum) > __WEBPACK_IMPORTED_MODULE_3__math__["o" /* epsilon */]) lambda0 = -(lambda1 = 180);
  range[0] = lambda0, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

/* harmony default export */ __webpack_exports__["a"] = (function(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
  ranges = [];
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__stream__["a" /* default */])(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0 === Infinity || phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[lambda0, phi0], [lambda1, phi1]];
});


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stream__ = __webpack_require__(7);




var W0, W1,
    X0, Y0, Z0,
    X1, Y1, Z1,
    X2, Y2, Z2,
    lambda00, phi00, // first point
    x0, y0, z0; // previous point

var centroidStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */];
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi);
  centroidPointCartesian(cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(lambda), cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(lambda), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */];
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi);
  x0 = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(lambda);
  y0 = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(lambda);
  z0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */];
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi),
      x = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(lambda),
      y = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(lambda),
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi),
      w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00, phi00);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */];
  centroidStream.point = centroidRingPoint;
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi);
  x0 = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(lambda);
  y0 = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(lambda);
  z0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */];
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi),
      x = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(lambda),
      y = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(lambda),
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(cx * cx + cy * cy + cz * cz),
      w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  W0 = W1 =
  X0 = Y0 = Z0 =
  X1 = Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__stream__["a" /* default */])(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < __WEBPACK_IMPORTED_MODULE_0__math__["w" /* epsilon2 */]) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]) x = X0, y = Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < __WEBPACK_IMPORTED_MODULE_0__math__["w" /* epsilon2 */]) return [NaN, NaN];
  }

  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(z / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(m)) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
});


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], -__WEBPACK_IMPORTED_MODULE_1__math__["k" /* halfPi */]]
));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */],
          delta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(lambda1 - lambda0);
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["k" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["k" /* halfPi */]);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= __WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */]) { // line crosses antimeridian
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(lambda0 - sign0) < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]) lambda0 -= sign0 * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]; // handle degeneracies
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(lambda1 - sign1) < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]) lambda1 -= sign1 * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */];
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(lambda0 - lambda1);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(sinLambda0Lambda1) > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]
      ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["l" /* atan */])((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi0) * (cosPhi1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi1)) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(lambda1)
          - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi1) * (cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi0)) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* halfPi */];
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], phi);
    stream.point(0, phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], 0);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], -phi);
    stream.point(0, -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], 0);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], phi);
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(from[0] - to[0]) > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]) {
    var lambda = from[0] < to[0] ? __WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */];
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointEqual__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(57);






/* harmony default export */ __webpack_exports__["a"] = (function(radius, delta) {
  var cr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(radius),
      smallRadius = cr > 0,
      notHemisphere = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["p" /* abs */])(cr) > __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */]; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__circle__["a" /* circleStream */])(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(lambda) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? __WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */] : -__WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */]), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point0, point2) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point1, point2)) {
            point1[0] += __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */];
            point1[1] += __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */];
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(a),
        pb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianCross */])(pa, pb),
        n2n2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianDot */])(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianCross */])(n1, n2),
        A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianScale */])(n1, c1),
        B = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianScale */])(n2, c2);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["e" /* cartesianAddInPlace */])(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianDot */])(A, u),
        uu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianDot */])(u, u),
        t2 = w * w - uu * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianDot */])(A, A) - 1);

    if (t2 < 0) return;

    var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["n" /* sqrt */])(t2),
        q = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianScale */])(u, (-w - t) / uu);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["e" /* cartesianAddInPlace */])(q, A);
    q = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* spherical */])(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["p" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */]) < __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */],
        meridian = polar || delta < __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */];

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["p" /* abs */])(q[0] - lambda0) < __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */] ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */] ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianScale */])(u, (-w + t) / uu);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["e" /* cartesianAddInPlace */])(q1, A);
      return [q, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* spherical */])(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : __WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */] - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__index__["a" /* default */])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-__WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */], radius - __WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */]]);
});


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
});


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polygonContains__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__distance__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(2);




var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ab = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates[0], coordinates[1]),
      ao = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates[0], point),
      ob = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(point, coordinates[1]);
  return ao + ob <= ab + __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */];
}

function containsPolygon(coordinates, point) {
  return !!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__polygonContains__["a" /* default */])(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */]];
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
});


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);
/* unused harmony export default */
/* unused harmony export graticule10 */



function graticuleX(y0, y1, dy) {
  var y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(y0, y1 - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */], dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(x0, x1 - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */], dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["v" /* ceil */])(X0 / DX) * DX, X1, DX).map(X)
        .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["v" /* ceil */])(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["v" /* ceil */])(x0 / dx) * dx, x1, dx).filter(function(x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(x % DX) > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]; }).map(x))
        .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["v" /* ceil */])(y0 / dy) * dy, y1, dy).filter(function(y) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(y % DY) > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]], [180, 90 - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]]])
      .extentMinor([[-180, -80 - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]], [180, 80 + __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]]]);
}

function graticule10() {
  return graticule()();
}


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var x0 = a[0] * __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */],
      y0 = a[1] * __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */],
      x1 = b[0] * __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */],
      y1 = b[1] * __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */],
      cy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y0),
      sy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y0),
      cy1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y1),
      sy1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y1),
      kx0 = cy0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(x0),
      ky0 = cy0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x0),
      kx1 = cy1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(x1),
      ky1 = cy1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x1),
      d = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* haversin */])(y1 - y0) + cy0 * cy1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* haversin */])(x1 - x0))),
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(d);

  var interpolate = d ? function(t) {
    var B = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(t *= d) / k,
        A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */],
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(z, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(x * x + y * y)) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]
    ];
  } : function() {
    return [x0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], y0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
  };

  interpolate.distance = d;

  return interpolate;
});


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(5);




var areaSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    areaRingSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    x00,
    y00,
    x0,
    y0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
    areaSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(areaRingSum));
    areaRingSum.reset();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum.reset();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}

function areaRingEnd() {
  areaPoint(x00, y00);
}

/* harmony default export */ __webpack_exports__["a"] = (areaStream);


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00,
    y00,
    x0,
    y0;

var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2]
        : Z1 ? [X1 / Z1, Y1 / Z1]
        : Z0 ? [X0 / Z0, Y0 / Z0]
        : [NaN, NaN];
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 =
    X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0, dy = y - y0, z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00, y00);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(dx * dx + dy * dy);

  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;

  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}

/* harmony default export */ __webpack_exports__["a"] = (centroidStream);


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = PathContext;



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, __WEBPACK_IMPORTED_MODULE_0__math__["b" /* tau */]);
        break;
      }
    }
  },
  result: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */]
};


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stream__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bounds__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__centroid__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__measure__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string__ = __webpack_require__(180);









/* unused harmony default export */ var _unused_webpack_default_export = (function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_2__area__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_2__area__["a" /* default */].result();
  };

  path.measure = function(object) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_6__measure__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_6__measure__["a" /* default */].result();
  };

  path.bounds = function(object) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_3__bounds__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_3__bounds__["a" /* default */].result();
  };

  path.centroid = function(object) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_4__centroid__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_4__centroid__["a" /* default */].result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, __WEBPACK_IMPORTED_MODULE_0__identity__["a" /* default */]) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new __WEBPACK_IMPORTED_MODULE_7__string__["a" /* default */]) : new __WEBPACK_IMPORTED_MODULE_5__context__["a" /* default */](context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
});


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(5);




var lengthSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lengthRing,
    x00,
    y00,
    x0,
    y0;

var lengthStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum;
    lengthSum.reset();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* sqrt */])(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (lengthStream);


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathString;
function PathString() {
  this._string = [];
}

PathString.prototype = {
  _circle: circle(4.5),
  pointRadius: function(_) {
    return this._circle = circle(_), this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    }
  }
};

function circle(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albers__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conicEqualArea__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit__ = __webpack_require__(30);





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var cache,
      cacheStream,
      lower48 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__albers__["a" /* default */])(), lower48Point,
      alaska = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea__["a" /* default */])().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea__["a" /* default */])().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null,
        (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */], y + 0.120 * k + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]], [x - 0.214 * k - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */], y + 0.166 * k + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]], [x - 0.115 * k - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit__["a" /* fitExtent */])(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit__["b" /* fitSize */])(albersUsa, size, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
});


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return azimuthalEqualAreaRaw; });




var azimuthalEqualAreaRaw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["b" /* azimuthalRaw */])(function(cxcy) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(z / 2);
});

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return azimuthalEquidistantRaw; });




var azimuthalEquidistantRaw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["b" /* azimuthalRaw */])(function(c) {
  return (c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["r" /* acos */])(c)) && c / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(c);
});

azimuthalEquidistantRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return z;
});

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mercator__ = __webpack_require__(31);
/* unused harmony export conicConformalRaw */




function tany(y) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y0),
      n = y0 === y1 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y0) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* log */])(cy0 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y1)) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* log */])(tany(y1) / tany(y0)),
      f = cy0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* pow */])(tany(y0), n) / n;

  if (!n) return __WEBPACK_IMPORTED_MODULE_2__mercator__["b" /* mercatorRaw */];

  function project(x, y) {
    if (f > 0) { if (y < -__WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]) y = -__WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]; }
    else { if (y > __WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]) y = __WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]; }
    var r = f / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* pow */])(tany(y), n);
    return [r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(n * x), f - r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(n) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(x * x + fy * fy);
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(fy)) / n * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(fy), 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["l" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* pow */])(f / r, 1 / n)) - __WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */]];
  };

  return project;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
});


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equirectangular__ = __webpack_require__(66);
/* unused harmony export conicEquidistantRaw */




function conicEquidistantRaw(y0, y1) {
  var cy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y0),
      n = y0 === y1 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y0) : (cy0 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]) return __WEBPACK_IMPORTED_MODULE_2__equirectangular__["a" /* equirectangularRaw */];

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(nx), g - gy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(gy)) / n * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(gy), g - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(n) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(x * x + gy * gy)];
  };

  return project;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
});


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = cylindricalEqualAreaRaw;


function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(y * cosPhi0)];
  };

  return forward;
}


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = gnomonicRaw;




function gnomonicRaw(x, y) {
  var cy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y), k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(x) * cy;
  return [cy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x) / k, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y) / k];
}

gnomonicRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math__["l" /* atan */]);

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
});


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_extent__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit__ = __webpack_require__(30);





function scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__transform__["a" /* transformer */])({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */], // scale, translate and reflect
      x0 = null, y0, x1, y1, clip = __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */], // clip extent
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(clip(cacheStream = stream));
    },
    clipExtent: function(_) {
      return arguments.length ? (clip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__clip_extent__["a" /* clipExtent */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit__["a" /* fitExtent */])(projection, extent, object);
    },
    fitSize: function(size, object) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit__["b" /* fitSize */])(projection, size, object);
    }
  };
});


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(3);
/* unused harmony export orthographicRaw */




function orthographicRaw(x, y) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y)];
}

orthographicRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]);
});


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__(20);




var maxDepth = 16, // maximum depth of subdivision
    cosMinDistance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(30 * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */]); // cos(minimum angular distance)

/* harmony default export */ __webpack_exports__["a"] = (function(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
});

function resampleNone(project) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__transform__["a" /* transformer */])({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* sqrt */])(a * a + b * b + c * c),
          phi2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* asin */])(c /= m),
          lambda2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(c) - 1) < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(lambda0 - lambda1) < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */] ? (lambda0 + lambda1) / 2 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(3);
/* unused harmony export stereographicRaw */




function stereographicRaw(x, y) {
  var cy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y), k = 1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(x) * cy;
  return [cy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x) / k, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y) / k];
}

stereographicRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["l" /* atan */])(z);
});

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(stereographicRaw)
      .scale(250)
      .clipAngle(142);
});


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mercator__ = __webpack_require__(31);
/* unused harmony export transverseMercatorRaw */



function transverseMercatorRaw(lambda, phi) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["l" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* exp */])(x)) - __WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */]];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mercator__["a" /* mercatorProjection */])(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
});


/***/ })
],[69]);