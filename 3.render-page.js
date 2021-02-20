exports.ids = [3];
exports.modules = {

/***/ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/workers/algorithm.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/workers/algorithm.js ***!
  \*************************************************************************************/
/*! exports provided: getAdjMatrix, breadthFirstSearch, connectedComponent, getDegree, getInDegree, getOutDegree, detectCycle, depthFirstSearch, dijkstra, findAllPath, findShortestPath, floydWarshall, labelPropagation, louvain, minimumSpanningTree, pageRank, GADDI, getNeighbors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adjacent_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adjacent-matrix */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/adjacent-matrix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAdjMatrix", function() { return _adjacent_matrix__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _bfs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bfs */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/bfs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breadthFirstSearch", function() { return _bfs__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _connected_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connected-component */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/connected-component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectedComponent", function() { return _connected_component__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _degree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../degree */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/degree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDegree", function() { return _degree__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInDegree", function() { return _degree__WEBPACK_IMPORTED_MODULE_3__["getInDegree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOutDegree", function() { return _degree__WEBPACK_IMPORTED_MODULE_3__["getOutDegree"]; });

/* harmony import */ var _detect_cycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detect-cycle */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/detect-cycle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectCycle", function() { return _detect_cycle__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _dfs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dfs */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/dfs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "depthFirstSearch", function() { return _dfs__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _dijkstra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dijkstra */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/dijkstra.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dijkstra", function() { return _dijkstra__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../find-path */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/find-path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findAllPath", function() { return _find_path__WEBPACK_IMPORTED_MODULE_7__["findAllPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findShortestPath", function() { return _find_path__WEBPACK_IMPORTED_MODULE_7__["findShortestPath"]; });

/* harmony import */ var _floydWarshall__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../floydWarshall */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/floydWarshall.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "floydWarshall", function() { return _floydWarshall__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _label_propagation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../label-propagation */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/label-propagation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "labelPropagation", function() { return _label_propagation__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _louvain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../louvain */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/louvain.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "louvain", function() { return _louvain__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _mts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mts */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/mts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minimumSpanningTree", function() { return _mts__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _pageRank__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pageRank */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/pageRank.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageRank", function() { return _pageRank__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _gaddi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../gaddi */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/gaddi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GADDI", function() { return _gaddi__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNeighbors", function() { return _util__WEBPACK_IMPORTED_MODULE_14__["getNeighbors"]; });


















/***/ }),

/***/ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/workers/index.worker.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/workers/index.worker.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _algorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithm */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/workers/algorithm.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/_@antv_algorithm@0.1.2@@antv/algorithm/es/workers/constant.js");


var ctx = self;

ctx.onmessage = function (event) {
  var _a = event.data,
      type = _a.type,
      data = _a.data;

  if (typeof _algorithm__WEBPACK_IMPORTED_MODULE_0__[type] === 'function') {
    var result = _algorithm__WEBPACK_IMPORTED_MODULE_0__[type].apply(_algorithm__WEBPACK_IMPORTED_MODULE_0__, data);
    ctx.postMessage({
      type: _constant__WEBPACK_IMPORTED_MODULE_1__["MESSAGE"].SUCCESS,
      data: result
    });
    return;
  }

  ctx.postMessage({
    type: _constant__WEBPACK_IMPORTED_MODULE_1__["MESSAGE"].FAILURE
  });
}; // https://stackoverflow.com/questions/50210416/webpack-worker-loader-fails-to-compile-typescript-worker


/* harmony default export */ __webpack_exports__["default"] = (null);

/***/ })

};;
//# sourceMappingURL=3.render-page.js.map