/*!
 * 
 * antd v3.15.2
 * 
 * Copyright 2015-present, Alipay, Inc.
 * All rights reserved.
 *       
 */
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ ({

/***/ "./.uxpin-merge/presets-14613db9-eacb-4e7c-8691-6fd06096b899.js":
/*!**********************************************************************!*\
  !*** ./.uxpin-merge/presets-14613db9-eacb-4e7c-8691-6fd06096b899.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: EMFILE: too many open files, open '/Users/brittanydemers/Sites/ant-design/node_modules/@babel/plugin-proposal-class-properties/package.json'\n    at Object.fs.openSync (fs.js:646:18)\n    at fs.readFileSync (fs.js:551:33)\n    at loadpkg (/Users/brittanydemers/Sites/ant-design/node_modules/resolve/lib/sync.js:114:20)\n    at loadpkg (/Users/brittanydemers/Sites/ant-design/node_modules/resolve/lib/sync.js:111:20)\n    at loadAsFileSync (/Users/brittanydemers/Sites/ant-design/node_modules/resolve/lib/sync.js:79:19)\n    at Function.module.exports [as sync] (/Users/brittanydemers/Sites/ant-design/node_modules/resolve/lib/sync.js:63:17)\n    at resolveStandardizedName (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/files/plugins.js:101:31)\n    at resolvePlugin (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/files/plugins.js:54:10)\n    at loadPlugin (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/files/plugins.js:62:20)\n    at createDescriptor (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/config-descriptors.js:154:9)\n    at items.map (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/config-descriptors.js:109:50)\n    at Array.map (<anonymous>)\n    at createDescriptors (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/config-descriptors.js:109:29)\n    at createPluginDescriptors (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/config-descriptors.js:105:10)\n    at alias (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/config-descriptors.js:63:49)\n    at cachedFunction (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at plugins.plugins (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/config-descriptors.js:28:77)\n    at mergeChainOpts (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/config-chain.js:319:26)\n    at /Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/config-chain.js:283:7\n    at buildRootChain (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/config-chain.js:68:29)\n    at loadPrivatePartialConfig (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/partial.js:85:55)\n    at Object.loadPartialConfig (/Users/brittanydemers/Sites/ant-design/node_modules/@babel/core/lib/config/partial.js:110:18)");

/***/ }),

/***/ "./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
}); // tslint:disable-next-line:function-name

function __uxpinParsePreset(component, props, ...children) {
  if (component === undefined) {
    const error = new Error('Unknown component!');
    error.message = parsePresetErrorMessage(error);
    throw error;
  }

  const componentName = !!component.name ? component.name : 'Unknown';
  return {
    children,
    name: componentName,
    props: JSON.parse(JSON.stringify(props)) || {},
    uxpinPresetElementType: 'CodeComponent',
    warnings: getPropertySerializationWarnings(props)
  };
}

function getPropertySerializationWarnings(props) {
  if (!props) {
    return [];
  }

  return Object.keys(props).reduce((warnings, propName) => {
    const propValue = props[propName];

    if (typeof propValue === 'function') {
      warnings.push({
        message: `Unsupported property \`${propName}\` of a type \`${typeof propValue}\``
      });
    }

    return warnings;
  }, []);
}

const ERROR_LINES = 5;

function parsePresetErrorMessage(error) {
  if (!error.stack) {
    return error.message;
  }

  const lines = error.stack.split('\n').filter(line => !line.match(/at __uxpinParsePreset/gi));
  return lines.slice(0, ERROR_LINES).join('\n');
}

global.__uxpinParsePreset = __uxpinParsePreset;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js ./.uxpin-merge/presets-14613db9-eacb-4e7c-8691-6fd06096b899.js ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/brittanydemers/Sites/ant-design/node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js */"./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js");
module.exports = __webpack_require__(/*! /Users/brittanydemers/Sites/ant-design/.uxpin-merge/presets-14613db9-eacb-4e7c-8691-6fd06096b899.js */"./.uxpin-merge/presets-14613db9-eacb-4e7c-8691-6fd06096b899.js");


/***/ })

/******/ })));
//# sourceMappingURL=__bundle__presets-14613db9-eacb-4e7c-8691-6fd06096b899.js.map