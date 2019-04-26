/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_index__WEBPACK_IMPORTED_MODULE_0__);

const vm = new _src_index__WEBPACK_IMPORTED_MODULE_0___default.a({
	data:{
		msg:1,
		ms:2,
	},
	watch:{
		msg(){
			console.log('watch')
		}
	}
})
window.vm = vm
console.log(vm)

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var init_1 = __webpack_require__(2);

var Mve = function () {
  function Mve(options) {
    this.options = options;
    this.init();
  }

  Mve.prototype.init = function () {
    init_1["default"](this);
  };

  return Mve;
}();

exports["default"] = Mve;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var state_1 = __webpack_require__(3);

function initMixin(vm) {
  state_1["default"](vm);
}

exports["default"] = initMixin;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observer_1 = __webpack_require__(4);

var Watcher_1 = __webpack_require__(8);

function initState(vm) {
  initData(vm);
  initWatch(vm);
}

function initData(vm) {
  vm.$data = vm.options.data;
  var data = vm.$data;

  for (var key in data) {
    proxy(vm, '$data', key);
  }

  Observer_1.observer(data);
}

function initWatch(vm) {
  vm.$watch = vm.options.watch;
  var watcherList = vm.$watch;

  for (var watcherName in watcherList) {
    var watcher = new Watcher_1.Watcher(vm, watcherName, watcherList[watcherName]);
    watcher.get();
  }
}

function proxy(obj, sourceKey, key) {
  Object.defineProperty(obj, key, {
    configurable: true,
    get: function get() {
      return obj[sourceKey][key];
    },
    set: function set(value) {
      obj[sourceKey][key] = value;
    }
  });
}

exports["default"] = initState;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

var _typeof2 = _interopRequireDefault(__webpack_require__(6));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Depend_1 = __webpack_require__(7);

var Observer = function () {
  function Observer(data) {
    this.data = data;
    this.dep = new Depend_1.Depend();
    this.walk(data);
  }

  Observer.prototype.walk = function (data) {
    var _this = this;

    Object.keys(data).forEach(function (key) {
      var item = data[key];

      if ((0, _typeof2["default"])(item) === 'object') {
        _this.walk(item);
      }

      _this.defineReactive(data, key, item);
    });
  };

  Observer.prototype.defineReactive = function (data, key, value) {
    console.log(key);
    var self = this;
    Object.defineProperty(data, key, {
      set: function set(val) {
        value = val;
        console.log('set');
        self.dep.notify();

        if ((0, _typeof2["default"])(val) === 'object') {
          observer(val);
        }
      },
      get: function get() {
        console.log('get');

        if (Depend_1.Depend.target) {
          self.dep.addSub(Depend_1.Depend.target);
        }

        return value;
      }
    });
  };

  return Observer;
}();

exports.Observer = Observer;

function observer(data) {
  new Observer(data);
}

exports.observer = observer;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Depend = function () {
  function Depend() {
    this.sub = [];
  }

  Depend.prototype.notify = function () {
    this.sub.forEach(function (item) {
      item.update();
    });
  };

  Depend.prototype.addSub = function (watcher) {
    this.sub.push(watcher);
    Depend.target = null;
  };

  return Depend;
}();

exports.Depend = Depend;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Depend_1 = __webpack_require__(7);

var index_1 = __webpack_require__(9);

var Watcher = function () {
  function Watcher(vm, expression, callback) {
    this.vm = vm;
    this.expression = expression;
    this.callback = callback;
  }

  Watcher.prototype.get = function () {
    Depend_1.Depend.target = this;
    this.value = index_1["default"].resolve(this.vm)(this.expression);
    return this.value;
  };

  Watcher.prototype.update = function () {
    var value = index_1["default"].resolve(this.vm)(this.expression);
    this.callback.call(this.vm, value, this.value);
    this.value = value;
  };

  return Watcher;
}();

exports.Watcher = Watcher;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  resolve: function resolve(data) {
    return function (path) {
      if (path === undefined) {
        return data;
      }

      var pathArr = Object.prototype.toString.call(path) == '[object Array]' ? path : path.replace(/\[['"`]?|['"`]?\]/g, '.').replace(/^\.|\.$/g, '').split(/\.+/);
      return pathArr.reduce(function (item1, item2) {
        return item1 ? item1[item2] : item1;
      }, data);
    };
  }
};

/***/ })
/******/ ]);