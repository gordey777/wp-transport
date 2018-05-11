/******/
(function(modules) { // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,
      /******/
      l: false,
      /******/
      exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  __webpack_require__.d = function(exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        /******/
        configurable: false,
        /******/
        enumerable: true,
        /******/
        get: getter
          /******/
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function(module) {
    /******/
    var getter = module && module.__esModule ?
      /******/
      function getDefault() {
        return module['default'];
      } :
      /******/
      function getModuleExports() {
        return module;
      };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  __webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/
  return __webpack_require__(__webpack_require__.s = 1);
  /******/
})
/************************************************************************/
/******/
([
  /* 0 */
  /***/
  (function(module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
     * jQuery JavaScript Library v3.2.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2017-03-20T18:59Z
     */
    (function(global, factory) {

      "use strict";

      if (typeof module === "object" && typeof module.exports === "object") {

        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ?
          factory(global, true) :
          function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
      } else {
        factory(global);
      }

      // Pass this if window is not defined yet
    })(typeof window !== "undefined" ? window : this, function(window, noGlobal) {

      // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
      // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
      // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
      // enough that all such attempts are guarded in a try block.
      "use strict";

      var arr = [];

      var document = window.document;

      var getProto = Object.getPrototypeOf;

      var slice = arr.slice;

      var concat = arr.concat;

      var push = arr.push;

      var indexOf = arr.indexOf;

      var class2type = {};

      var toString = class2type.toString;

      var hasOwn = class2type.hasOwnProperty;

      var fnToString = hasOwn.toString;

      var ObjectFunctionString = fnToString.call(Object);

      var support = {};



      function DOMEval(code, doc) {
        doc = doc || document;

        var script = doc.createElement("script");

        script.text = code;
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      /* global Symbol */
      // Defining this global in .eslintrc.json would create a danger of using the global
      // unguarded in another place, it seems safer to define global only for this module



      var
        version = "3.2.1",

        // Define a local copy of jQuery
        jQuery = function(selector, context) {

          // The jQuery object is actually just the init constructor 'enhanced'
          // Need init if jQuery is called (just allow error to be thrown if not included)
          return new jQuery.fn.init(selector, context);
        },

        // Support: Android <=4.0 only
        // Make sure we trim BOM and NBSP
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

        // Matches dashed string for camelizing
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g,

        // Used by jQuery.camelCase as callback to replace()
        fcamelCase = function(all, letter) {
          return letter.toUpperCase();
        };

      jQuery.fn = jQuery.prototype = {

        // The current version of jQuery being used
        jquery: version,

        constructor: jQuery,

        // The default length of a jQuery object is 0
        length: 0,

        toArray: function() {
          return slice.call(this);
        },

        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {

          // Return all the elements in a clean array
          if (num == null) {
            return slice.call(this);
          }

          // Return just the one element from the set
          return num < 0 ? this[num + this.length] : this[num];
        },

        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {

          // Build a new jQuery matched element set
          var ret = jQuery.merge(this.constructor(), elems);

          // Add the old object onto the stack (as a reference)
          ret.prevObject = this;

          // Return the newly-formed element set
          return ret;
        },

        // Execute a callback for every element in the matched set.
        each: function(callback) {
          return jQuery.each(this, callback);
        },

        map: function(callback) {
          return this.pushStack(jQuery.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },

        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },

        first: function() {
          return this.eq(0);
        },

        last: function() {
          return this.eq(-1);
        },

        eq: function(i) {
          var len = this.length,
            j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },

        end: function() {
          return this.prevObject || this.constructor();
        },

        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
      };

      jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone,
          target = arguments[0] || {},
          i = 1,
          length = arguments.length,
          deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
          deep = target;

          // Skip the boolean and the target
          target = arguments[i] || {};
          i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
          target = {};
        }

        // Extend jQuery itself if only one argument is passed
        if (i === length) {
          target = this;
          i--;
        }

        for (; i < length; i++) {

          // Only deal with non-null/undefined values
          if ((options = arguments[i]) != null) {

            // Extend the base object
            for (name in options) {
              src = target[name];
              copy = options[name];

              // Prevent never-ending loop
              if (target === copy) {
                continue;
              }

              // Recurse if we're merging plain objects or arrays
              if (deep && copy && (jQuery.isPlainObject(copy) ||
                  (copyIsArray = Array.isArray(copy)))) {

                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && Array.isArray(src) ? src : [];

                } else {
                  clone = src && jQuery.isPlainObject(src) ? src : {};
                }

                // Never move original objects, clone them
                target[name] = jQuery.extend(deep, clone, copy);

                // Don't bring in undefined values
              } else if (copy !== undefined) {
                target[name] = copy;
              }
            }
          }
        }

        // Return the modified object
        return target;
      };

      jQuery.extend({

        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

        // Assume jQuery is ready without the ready module
        isReady: true,

        error: function(msg) {
          throw new Error(msg);
        },

        noop: function() {},

        isFunction: function(obj) {
          return jQuery.type(obj) === "function";
        },

        isWindow: function(obj) {
          return obj != null && obj === obj.window;
        },

        isNumeric: function(obj) {

          // As of jQuery 3.0, isNumeric is limited to
          // strings and numbers (primitives or objects)
          // that can be coerced to finite numbers (gh-2662)
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") &&

            // parseFloat NaNs numeric-cast false positives ("")
            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
            // subtraction forces infinities to NaN
            !isNaN(obj - parseFloat(obj));
        },

        isPlainObject: function(obj) {
          var proto, Ctor;

          // Detect obvious negatives
          // Use toString instead of jQuery.type to catch host objects
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }

          proto = getProto(obj);

          // Objects with no prototype (e.g., `Object.create( null )`) are plain
          if (!proto) {
            return true;
          }

          // Objects with prototype are plain iff they were constructed by a global Object function
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },

        isEmptyObject: function(obj) {

          /* eslint-disable no-unused-vars */
          // See https://github.com/eslint/eslint/issues/6125
          var name;

          for (name in obj) {
            return false;
          }
          return true;
        },

        type: function(obj) {
          if (obj == null) {
            return obj + "";
          }

          // Support: Android <=2.3 only (functionish RegExp)
          return typeof obj === "object" || typeof obj === "function" ?
            class2type[toString.call(obj)] || "object" :
            typeof obj;
        },

        // Evaluates a script in a global context
        globalEval: function(code) {
          DOMEval(code);
        },

        // Convert dashed to camelCase; used by the css and data modules
        // Support: IE <=9 - 11, Edge 12 - 13
        // Microsoft forgot to hump their vendor prefix (#9572)
        camelCase: function(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },

        each: function(obj, callback) {
          var length, i = 0;

          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }

          return obj;
        },

        // Support: Android <=4.0 only
        trim: function(text) {
          return text == null ?
            "" :
            (text + "").replace(rtrim, "");
        },

        // results is for internal usage only
        makeArray: function(arr, results) {
          var ret = results || [];

          if (arr != null) {
            if (isArrayLike(Object(arr))) {
              jQuery.merge(ret,
                typeof arr === "string" ? [arr] : arr
              );
            } else {
              push.call(ret, arr);
            }
          }

          return ret;
        },

        inArray: function(elem, arr, i) {
          return arr == null ? -1 : indexOf.call(arr, elem, i);
        },

        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
          var len = +second.length,
            j = 0,
            i = first.length;

          for (; j < len; j++) {
            first[i++] = second[j];
          }

          first.length = i;

          return first;
        },

        grep: function(elems, callback, invert) {
          var callbackInverse,
            matches = [],
            i = 0,
            length = elems.length,
            callbackExpect = !invert;

          // Go through the array, only saving the items
          // that pass the validator function
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }

          return matches;
        },

        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value,
            i = 0,
            ret = [];

          // Go through the array, translating each of the items to their new values
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);

              if (value != null) {
                ret.push(value);
              }
            }

            // Go through every key on the object,
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);

              if (value != null) {
                ret.push(value);
              }
            }
          }

          // Flatten any nested arrays
          return concat.apply([], ret);
        },

        // A global GUID counter for objects
        guid: 1,

        // Bind a function to a context, optionally partially applying any
        // arguments.
        proxy: function(fn, context) {
          var tmp, args, proxy;

          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }

          // Quick check to determine if target is callable, in the spec
          // this throws a TypeError, but we will just return undefined.
          if (!jQuery.isFunction(fn)) {
            return undefined;
          }

          // Simulated bind
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };

          // Set the guid of unique handler to the same of original handler, so it can be removed
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;

          return proxy;
        },

        now: Date.now,

        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
      });

      if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
      }

      // Populate the class2type map
      jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        });

      function isArrayLike(obj) {

        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length,
          type = jQuery.type(obj);

        if (type === "function" || jQuery.isWindow(obj)) {
          return false;
        }

        return type === "array" || length === 0 ||
          typeof length === "number" && length > 0 && (length - 1) in obj;
      }
      var Sizzle =
        /*!
         * Sizzle CSS Selector Engine v2.3.3
         * https://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-08-08
         */
        (function(window) {

          var i,
            support,
            Expr,
            getText,
            isXML,
            tokenize,
            compile,
            select,
            outermostContext,
            sortInput,
            hasDuplicate,

            // Local document vars
            setDocument,
            document,
            docElem,
            documentIsHTML,
            rbuggyQSA,
            rbuggyMatches,
            matches,
            contains,

            // Instance-specific data
            expando = "sizzle" + 1 * new Date(),
            preferredDoc = window.document,
            dirruns = 0,
            done = 0,
            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),
            sortOrder = function(a, b) {
              if (a === b) {
                hasDuplicate = true;
              }
              return 0;
            },

            // Instance methods
            hasOwn = ({}).hasOwnProperty,
            arr = [],
            pop = arr.pop,
            push_native = arr.push,
            push = arr.push,
            slice = arr.slice,
            // Use a stripped-down indexOf as it's faster than native
            // https://jsperf.com/thor-indexof-vs-for/5
            indexOf = function(list, elem) {
              var i = 0,
                len = list.length;
              for (; i < len; i++) {
                if (list[i] === elem) {
                  return i;
                }
              }
              return -1;
            },

            booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

            // Regular expressions

            // http://www.w3.org/TR/css3-selectors/#whitespace
            whitespace = "[\\x20\\t\\r\\n\\f]",

            // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
            identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

            // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
            attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
            // Operator (capture 2)
            "*([*^$|!~]?=)" + whitespace +
            // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
            "*\\]",

            pseudos = ":(" + identifier + ")(?:\\((" +
            // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
            // 1. quoted (capture 3; capture 4 or capture 5)
            "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
            // 2. simple (capture 6)
            "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
            // 3. anything else (capture 2)
            ".*" +
            ")\\)|)",

            // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
            rwhitespace = new RegExp(whitespace + "+", "g"),
            rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

            rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
            rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),

            rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),

            rpseudo = new RegExp(pseudos),
            ridentifier = new RegExp("^" + identifier + "$"),

            matchExpr = {
              "ID": new RegExp("^#(" + identifier + ")"),
              "CLASS": new RegExp("^\\.(" + identifier + ")"),
              "TAG": new RegExp("^(" + identifier + "|[*])"),
              "ATTR": new RegExp("^" + attributes),
              "PSEUDO": new RegExp("^" + pseudos),
              "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
              "bool": new RegExp("^(?:" + booleans + ")$", "i"),
              // For use in libraries implementing .is()
              // We use this for POS matching in `select`
              "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
            },

            rinputs = /^(?:input|select|textarea|button)$/i,
            rheader = /^h\d$/i,

            rnative = /^[^{]+\{\s*\[native \w/,

            // Easily-parseable/retrievable ID or TAG or CLASS selectors
            rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

            rsibling = /[+~]/,

            // CSS escapes
            // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
            runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
            funescape = function(_, escaped, escapedWhitespace) {
              var high = "0x" + escaped - 0x10000;
              // NaN means non-codepoint
              // Support: Firefox<24
              // Workaround erroneous numeric interpretation of +"0x"
              return high !== high || escapedWhitespace ?
                escaped :
                high < 0 ?
                // BMP codepoint
                String.fromCharCode(high + 0x10000) :
                // Supplemental Plane codepoint (surrogate pair)
                String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
            },

            // CSS string/identifier serialization
            // https://drafts.csswg.org/cssom/#common-serializing-idioms
            rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            fcssescape = function(ch, asCodePoint) {
              if (asCodePoint) {

                // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                if (ch === "\0") {
                  return "\uFFFD";
                }

                // Control characters and (dependent upon position) numbers get escaped as code points
                return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
              }

              // Other potentially-special ASCII characters get backslash-escaped
              return "\\" + ch;
            },

            // Used for iframes
            // See setDocument()
            // Removing the function wrapper causes a "Permission Denied"
            // error in IE
            unloadHandler = function() {
              setDocument();
            },

            disabledAncestor = addCombinator(
              function(elem) {
                return elem.disabled === true && ("form" in elem || "label" in elem);
              }, {
                dir: "parentNode",
                next: "legend"
              }
            );

          // Optimize for push.apply( _, NodeList )
          try {
            push.apply(
              (arr = slice.call(preferredDoc.childNodes)),
              preferredDoc.childNodes
            );
            // Support: Android<4.0
            // Detect silently failing push.apply
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push = {
              apply: arr.length ?

                // Leverage slice if possible
                function(target, els) {
                  push_native.apply(target, slice.call(els));
                } :

                // Support: IE<9
                // Otherwise append directly
                function(target, els) {
                  var j = target.length,
                    i = 0;
                  // Can't trust NodeList.length
                  while ((target[j++] = els[i++])) {}
                  target.length = j - 1;
                }
            };
          }

          function Sizzle(selector, context, results, seed) {
            var m, i, elem, nid, match, groups, newSelector,
              newContext = context && context.ownerDocument,

              // nodeType defaults to 9, since context defaults to document
              nodeType = context ? context.nodeType : 9;

            results = results || [];

            // Return early from calls with invalid selector or context
            if (typeof selector !== "string" || !selector ||
              nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

              return results;
            }

            // Try to shortcut find operations (as opposed to filters) in HTML documents
            if (!seed) {

              if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                setDocument(context);
              }
              context = context || document;

              if (documentIsHTML) {

                // If the selector is sufficiently simple, try using a "get*By*" DOM method
                // (excepting DocumentFragment context, where the methods don't exist)
                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

                  // ID selector
                  if ((m = match[1])) {

                    // Document context
                    if (nodeType === 9) {
                      if ((elem = context.getElementById(m))) {

                        // Support: IE, Opera, Webkit
                        // TODO: identify versions
                        // getElementById can match elements by name instead of ID
                        if (elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }

                      // Element context
                    } else {

                      // Support: IE, Opera, Webkit
                      // TODO: identify versions
                      // getElementById can match elements by name instead of ID
                      if (newContext && (elem = newContext.getElementById(m)) &&
                        contains(context, elem) &&
                        elem.id === m) {

                        results.push(elem);
                        return results;
                      }
                    }

                    // Type selector
                  } else if (match[2]) {
                    push.apply(results, context.getElementsByTagName(selector));
                    return results;

                    // Class selector
                  } else if ((m = match[3]) && support.getElementsByClassName &&
                    context.getElementsByClassName) {

                    push.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }

                // Take advantage of querySelectorAll
                if (support.qsa &&
                  !compilerCache[selector + " "] &&
                  (!rbuggyQSA || !rbuggyQSA.test(selector))) {

                  if (nodeType !== 1) {
                    newContext = context;
                    newSelector = selector;

                    // qSA looks outside Element context, which is not what we want
                    // Thanks to Andrew Dupont for this workaround technique
                    // Support: IE <=8
                    // Exclude object elements
                  } else if (context.nodeName.toLowerCase() !== "object") {

                    // Capture the context ID, setting it first if necessary
                    if ((nid = context.getAttribute("id"))) {
                      nid = nid.replace(rcssescape, fcssescape);
                    } else {
                      context.setAttribute("id", (nid = expando));
                    }

                    // Prefix every selector in the list
                    groups = tokenize(selector);
                    i = groups.length;
                    while (i--) {
                      groups[i] = "#" + nid + " " + toSelector(groups[i]);
                    }
                    newSelector = groups.join(",");

                    // Expand context for sibling selectors
                    newContext = rsibling.test(selector) && testContext(context.parentNode) ||
                      context;
                  }

                  if (newSelector) {
                    try {
                      push.apply(results,
                        newContext.querySelectorAll(newSelector)
                      );
                      return results;
                    } catch (qsaError) {} finally {
                      if (nid === expando) {
                        context.removeAttribute("id");
                      }
                    }
                  }
                }
              }
            }

            // All others
            return select(selector.replace(rtrim, "$1"), context, results, seed);
          }

          /**
           * Create key-value caches of limited size
           * @returns {function(string, object)} Returns the Object data after storing it on itself with
           *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
           *	deleting the oldest entry
           */
          function createCache() {
            var keys = [];

            function cache(key, value) {
              // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
              if (keys.push(key + " ") > Expr.cacheLength) {
                // Only keep the most recent entries
                delete cache[keys.shift()];
              }
              return (cache[key + " "] = value);
            }
            return cache;
          }

          /**
           * Mark a function for special use by Sizzle
           * @param {Function} fn The function to mark
           */
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }

          /**
           * Support testing using an element
           * @param {Function} fn Passed the created element and returns a boolean result
           */
          function assert(fn) {
            var el = document.createElement("fieldset");

            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              // Remove from its parent by default
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              // release memory in IE
              el = null;
            }
          }

          /**
           * Adds the same handler for all of the specified attrs
           * @param {String} attrs Pipe-separated list of attributes
           * @param {Function} handler The method that will be applied
           */
          function addHandle(attrs, handler) {
            var arr = attrs.split("|"),
              i = arr.length;

            while (i--) {
              Expr.attrHandle[arr[i]] = handler;
            }
          }

          /**
           * Checks document order of two siblings
           * @param {Element} a
           * @param {Element} b
           * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
           */
          function siblingCheck(a, b) {
            var cur = b && a,
              diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
              a.sourceIndex - b.sourceIndex;

            // Use IE sourceIndex if available on both nodes
            if (diff) {
              return diff;
            }

            // Check if b follows a
            if (cur) {
              while ((cur = cur.nextSibling)) {
                if (cur === b) {
                  return -1;
                }
              }
            }

            return a ? 1 : -1;
          }

          /**
           * Returns a function to use in pseudos for input types
           * @param {String} type
           */
          function createInputPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === type;
            };
          }

          /**
           * Returns a function to use in pseudos for buttons
           * @param {String} type
           */
          function createButtonPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === "input" || name === "button") && elem.type === type;
            };
          }

          /**
           * Returns a function to use in pseudos for :enabled/:disabled
           * @param {Boolean} disabled true for :disabled; false for :enabled
           */
          function createDisabledPseudo(disabled) {

            // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
            return function(elem) {

              // Only certain elements can match :enabled or :disabled
              // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
              // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
              if ("form" in elem) {

                // Check for inherited disabledness on relevant non-disabled elements:
                // * listed form-associated elements in a disabled fieldset
                //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                // * option elements in a disabled optgroup
                //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                // All such elements have a "form" property.
                if (elem.parentNode && elem.disabled === false) {

                  // Option elements defer to a parent optgroup if present
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }

                  // Support: IE 6 - 11
                  // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                  return elem.isDisabled === disabled ||

                    // Where there is no isDisabled, check manually
                    /* jshint -W018 */
                    elem.isDisabled !== !disabled &&
                    disabledAncestor(elem) === disabled;
                }

                return elem.disabled === disabled;

                // Try to winnow out elements that can't be disabled before trusting the disabled property.
                // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                // even exist on them, let alone have a boolean value.
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }

              // Remaining elements are neither :enabled nor :disabled
              return false;
            };
          }

          /**
           * Returns a function to use in pseudos for positionals
           * @param {Function} fn
           */
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches) {
                var j,
                  matchIndexes = fn([], seed.length, argument),
                  i = matchIndexes.length;

                // Match elements found at the specified indexes
                while (i--) {
                  if (seed[(j = matchIndexes[i])]) {
                    seed[j] = !(matches[j] = seed[j]);
                  }
                }
              });
            });
          }

          /**
           * Checks a node for validity as a Sizzle context
           * @param {Element|Object=} context
           * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
           */
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }

          // Expose support vars for convenience
          support = Sizzle.support = {};

          /**
           * Detects XML nodes
           * @param {Element|Object} elem An element or a document
           * @returns {Boolean} True iff elem is a non-HTML XML node
           */
          isXML = Sizzle.isXML = function(elem) {
            // documentElement is verified for cases where it doesn't yet exist
            // (such as loading iframes in IE - #4833)
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
          };

          /**
           * Sets document-related variables once based on the current document
           * @param {Element|Object} [doc] An element or document object to use to set the document
           * @returns {Object} Returns the current document
           */
          setDocument = Sizzle.setDocument = function(node) {
            var hasCompare, subWindow,
              doc = node ? node.ownerDocument || node : preferredDoc;

            // Return early if doc is invalid or already selected
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
              return document;
            }

            // Update global variables
            document = doc;
            docElem = document.documentElement;
            documentIsHTML = !isXML(document);

            // Support: IE 9-11, Edge
            // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
            if (preferredDoc !== document &&
              (subWindow = document.defaultView) && subWindow.top !== subWindow) {

              // Support: IE 11, Edge
              if (subWindow.addEventListener) {
                subWindow.addEventListener("unload", unloadHandler, false);

                // Support: IE 9 - 10 only
              } else if (subWindow.attachEvent) {
                subWindow.attachEvent("onunload", unloadHandler);
              }
            }

            /* Attributes
            ---------------------------------------------------------------------- */

            // Support: IE<8
            // Verify that getAttribute really returns attributes and not properties
            // (excepting IE8 booleans)
            support.attributes = assert(function(el) {
              el.className = "i";
              return !el.getAttribute("className");
            });

            /* getElement(s)By*
            ---------------------------------------------------------------------- */

            // Check if getElementsByTagName("*") returns only elements
            support.getElementsByTagName = assert(function(el) {
              el.appendChild(document.createComment(""));
              return !el.getElementsByTagName("*").length;
            });

            // Support: IE<9
            support.getElementsByClassName = rnative.test(document.getElementsByClassName);

            // Support: IE<10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programmatically-set names,
            // so use a roundabout getElementsByName test
            support.getById = assert(function(el) {
              docElem.appendChild(el).id = expando;
              return !document.getElementsByName || !document.getElementsByName(expando).length;
            });

            // ID filter and find
            if (support.getById) {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node = typeof elem.getAttributeNode !== "undefined" &&
                    elem.getAttributeNode("id");
                  return node && node.value === attrId;
                };
              };

              // Support: IE 6 - 7 only
              // getElementById is not reliable as a find shortcut
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node, i, elems,
                    elem = context.getElementById(id);

                  if (elem) {

                    // Verify the id attribute
                    node = elem.getAttributeNode("id");
                    if (node && node.value === id) {
                      return [elem];
                    }

                    // Fall back on getElementsByName
                    elems = context.getElementsByName(id);
                    i = 0;
                    while ((elem = elems[i++])) {
                      node = elem.getAttributeNode("id");
                      if (node && node.value === id) {
                        return [elem];
                      }
                    }
                  }

                  return [];
                }
              };
            }

            // Tag
            Expr.find["TAG"] = support.getElementsByTagName ?
              function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") {
                  return context.getElementsByTagName(tag);

                  // DocumentFragment nodes don't have gEBTN
                } else if (support.qsa) {
                  return context.querySelectorAll(tag);
                }
              } :

              function(tag, context) {
                var elem,
                  tmp = [],
                  i = 0,
                  // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                  results = context.getElementsByTagName(tag);

                // Filter out possible comments
                if (tag === "*") {
                  while ((elem = results[i++])) {
                    if (elem.nodeType === 1) {
                      tmp.push(elem);
                    }
                  }

                  return tmp;
                }
                return results;
              };

            // Class
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };

            /* QSA/matchesSelector
            ---------------------------------------------------------------------- */

            // QSA and matchesSelector support

            // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
            rbuggyMatches = [];

            // qSa(:focus) reports false when true (Chrome 21)
            // We allow this because of a bug in IE8/9 that throws an error
            // whenever `document.activeElement` is accessed on an iframe
            // So, we allow :focus to pass through QSA all the time to avoid the IE error
            // See https://bugs.jquery.com/ticket/13378
            rbuggyQSA = [];

            if ((support.qsa = rnative.test(document.querySelectorAll))) {
              // Build QSA regex
              // Regex strategy adopted from Diego Perini
              assert(function(el) {
                // Select is set to empty string on purpose
                // This is to test IE's treatment of not explicitly
                // setting a boolean content attribute,
                // since its presence should be enough
                // https://bugs.jquery.com/ticket/12359
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" +
                  "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                  "<option selected=''></option></select>";

                // Support: IE8, Opera 11-12.16
                // Nothing should be selected when empty strings follow ^= or $= or *=
                // The test attribute must be unknown in Opera but "safe" for WinRT
                // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                if (el.querySelectorAll("[msallowcapture^='']").length) {
                  rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                }

                // Support: IE8
                // Boolean attributes and "value" are not treated correctly
                if (!el.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                }

                // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=");
                }

                // Webkit/Opera - :checked should return selected option elements
                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                // IE8 throws error here and will not see later tests
                if (!el.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked");
                }

                // Support: Safari 8+, iOS 8+
                // https://bugs.webkit.org/show_bug.cgi?id=136851
                // In-page `selector#id sibling-combinator selector` fails
                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]");
                }
              });

              assert(function(el) {
                el.innerHTML = "<a href='' disabled='disabled'></a>" +
                  "<select disabled='disabled'><option/></select>";

                // Support: Windows 8 Native Apps
                // The type and name attributes are restricted during .innerHTML assignment
                var input = document.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");

                // Support: IE8
                // Enforce case-sensitivity of name attribute
                if (el.querySelectorAll("[name=d]").length) {
                  rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                }

                // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                // IE8 throws error here and will not see later tests
                if (el.querySelectorAll(":enabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }

                // Support: IE9-11+
                // IE's :disabled selector does not pick up the children of disabled fieldsets
                docElem.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }

                // Opera 10-11 does not throw on post-comma invalid pseudos
                el.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
              });
            }

            if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
                docElem.webkitMatchesSelector ||
                docElem.mozMatchesSelector ||
                docElem.oMatchesSelector ||
                docElem.msMatchesSelector)))) {

              assert(function(el) {
                // Check to see if it's possible to do matchesSelector
                // on a disconnected node (IE 9)
                support.disconnectedMatch = matches.call(el, "*");

                // This should fail with an exception
                // Gecko does not error, returns false instead
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
              });
            }

            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

            /* Contains
            ---------------------------------------------------------------------- */
            hasCompare = rnative.test(docElem.compareDocumentPosition);

            // Element contains another
            // Purposefully self-exclusive
            // As in, an element does not contain itself
            contains = hasCompare || rnative.test(docElem.contains) ?
              function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a,
                  bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (
                  adown.contains ?
                  adown.contains(bup) :
                  a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
                ));
              } :
              function(a, b) {
                if (b) {
                  while ((b = b.parentNode)) {
                    if (b === a) {
                      return true;
                    }
                  }
                }
                return false;
              };

            /* Sorting
            ---------------------------------------------------------------------- */

            // Document order sorting
            sortOrder = hasCompare ?
              function(a, b) {

                // Flag for duplicate removal
                if (a === b) {
                  hasDuplicate = true;
                  return 0;
                }

                // Sort on method existence if only one input has compareDocumentPosition
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) {
                  return compare;
                }

                // Calculate position if both inputs belong to the same document
                compare = (a.ownerDocument || a) === (b.ownerDocument || b) ?
                  a.compareDocumentPosition(b) :

                  // Otherwise we know they are disconnected
                  1;

                // Disconnected nodes
                if (compare & 1 ||
                  (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {

                  // Choose the first element that is related to our preferred document
                  if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                    return -1;
                  }
                  if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                    return 1;
                  }

                  // Maintain original order
                  return sortInput ?
                    (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                    0;
                }

                return compare & 4 ? -1 : 1;
              } :
              function(a, b) {
                // Exit early if the nodes are identical
                if (a === b) {
                  hasDuplicate = true;
                  return 0;
                }

                var cur,
                  i = 0,
                  aup = a.parentNode,
                  bup = b.parentNode,
                  ap = [a],
                  bp = [b];

                // Parentless nodes are either documents or disconnected
                if (!aup || !bup) {
                  return a === document ? -1 :
                    b === document ? 1 :
                    aup ? -1 :
                    bup ? 1 :
                    sortInput ?
                    (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                    0;

                  // If the nodes are siblings, we can do a quick check
                } else if (aup === bup) {
                  return siblingCheck(a, b);
                }

                // Otherwise we need full lists of their ancestors for comparison
                cur = a;
                while ((cur = cur.parentNode)) {
                  ap.unshift(cur);
                }
                cur = b;
                while ((cur = cur.parentNode)) {
                  bp.unshift(cur);
                }

                // Walk down the tree looking for a discrepancy
                while (ap[i] === bp[i]) {
                  i++;
                }

                return i ?
                  // Do a sibling check if the nodes have a common ancestor
                  siblingCheck(ap[i], bp[i]) :

                  // Otherwise nodes in our document sort first
                  ap[i] === preferredDoc ? -1 :
                  bp[i] === preferredDoc ? 1 :
                  0;
              };

            return document;
          };

          Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
          };

          Sizzle.matchesSelector = function(elem, expr) {
            // Set document vars if needed
            if ((elem.ownerDocument || elem) !== document) {
              setDocument(elem);
            }

            // Make sure that attribute selectors are quoted
            expr = expr.replace(rattributeQuotes, "='$1']");

            if (support.matchesSelector && documentIsHTML &&
              !compilerCache[expr + " "] &&
              (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
              (!rbuggyQSA || !rbuggyQSA.test(expr))) {

              try {
                var ret = matches.call(elem, expr);

                // IE 9's matchesSelector returns false on disconnected nodes
                if (ret || support.disconnectedMatch ||
                  // As well, disconnected nodes are said to be in a document
                  // fragment in IE 9
                  elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {}
            }

            return Sizzle(expr, document, null, [elem]).length > 0;
          };

          Sizzle.contains = function(context, elem) {
            // Set document vars if needed
            if ((context.ownerDocument || context) !== document) {
              setDocument(context);
            }
            return contains(context, elem);
          };

          Sizzle.attr = function(elem, name) {
            // Set document vars if needed
            if ((elem.ownerDocument || elem) !== document) {
              setDocument(elem);
            }

            var fn = Expr.attrHandle[name.toLowerCase()],
              // Don't get fooled by Object.prototype properties (jQuery #13807)
              val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
              fn(elem, name, !documentIsHTML) :
              undefined;

            return val !== undefined ?
              val :
              support.attributes || !documentIsHTML ?
              elem.getAttribute(name) :
              (val = elem.getAttributeNode(name)) && val.specified ?
              val.value :
              null;
          };

          Sizzle.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
          };

          Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };

          /**
           * Document sorting and removing duplicates
           * @param {ArrayLike} results
           */
          Sizzle.uniqueSort = function(results) {
            var elem,
              duplicates = [],
              j = 0,
              i = 0;

            // Unless we *know* we can detect duplicates, assume their presence
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);

            if (hasDuplicate) {
              while ((elem = results[i++])) {
                if (elem === results[i]) {
                  j = duplicates.push(i);
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1);
              }
            }

            // Clear input after sorting to release objects
            // See https://github.com/jquery/sizzle/pull/225
            sortInput = null;

            return results;
          };

          /**
           * Utility function for retrieving the text value of an array of DOM nodes
           * @param {Array|Element} elem
           */
          getText = Sizzle.getText = function(elem) {
            var node,
              ret = "",
              i = 0,
              nodeType = elem.nodeType;

            if (!nodeType) {
              // If no nodeType, this is expected to be an array
              while ((node = elem[i++])) {
                // Do not traverse comment nodes
                ret += getText(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              // Use textContent for elements
              // innerText usage removed for consistency of new lines (jQuery #11153)
              if (typeof elem.textContent === "string") {
                return elem.textContent;
              } else {
                // Traverse its children
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem);
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            // Do not include comment or processing instruction nodes

            return ret;
          };

          Expr = Sizzle.selectors = {

            // Can be adjusted by the user
            cacheLength: 50,

            createPseudo: markFunction,

            match: matchExpr,

            attrHandle: {},

            find: {},

            relative: {
              ">": {
                dir: "parentNode",
                first: true
              },
              " ": {
                dir: "parentNode"
              },
              "+": {
                dir: "previousSibling",
                first: true
              },
              "~": {
                dir: "previousSibling"
              }
            },

            preFilter: {
              "ATTR": function(match) {
                match[1] = match[1].replace(runescape, funescape);

                // Move the given value to match[3] whether quoted or unquoted
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }

                return match.slice(0, 4);
              },

              "CHILD": function(match) {
                /* matches from matchExpr["CHILD"]
                	1 type (only|nth|...)
                	2 what (child|of-type)
                	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                	4 xn-component of xn+y argument ([+-]?\d*n|)
                	5 sign of xn-component
                	6 x of xn-component
                	7 sign of y-component
                	8 y of y-component
                */
                match[1] = match[1].toLowerCase();

                if (match[1].slice(0, 3) === "nth") {
                  // nth-* requires argument
                  if (!match[3]) {
                    Sizzle.error(match[0]);
                  }

                  // numeric x and y parameters for Expr.filter.CHILD
                  // remember that false/true cast respectively to 0/1
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +((match[7] + match[8]) || match[3] === "odd");

                  // other types prohibit arguments
                } else if (match[3]) {
                  Sizzle.error(match[0]);
                }

                return match;
              },

              "PSEUDO": function(match) {
                var excess,
                  unquoted = !match[6] && match[2];

                if (matchExpr["CHILD"].test(match[0])) {
                  return null;
                }

                // Accept quoted arguments as-is
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";

                  // Strip excess characters from unquoted arguments
                } else if (unquoted && rpseudo.test(unquoted) &&
                  // Get excess from tokenize (recursively)
                  (excess = tokenize(unquoted, true)) &&
                  // advance to the next closing parenthesis
                  (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

                  // excess is a negative index
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }

                // Return only captures needed by the pseudo filter method (type and argument)
                return match.slice(0, 3);
              }
            },

            filter: {

              "TAG": function(nodeNameSelector) {
                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ?
                  function() {
                    return true;
                  } :
                  function(elem) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                  };
              },

              "CLASS": function(className) {
                var pattern = classCache[className + " "];

                return pattern ||
                  (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
                  classCache(className, function(elem) {
                    return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                  });
              },

              "ATTR": function(name, operator, check) {
                return function(elem) {
                  var result = Sizzle.attr(elem, name);

                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }

                  result += "";

                  return operator === "=" ? result === check :
                    operator === "!=" ? result !== check :
                    operator === "^=" ? check && result.indexOf(check) === 0 :
                    operator === "*=" ? check && result.indexOf(check) > -1 :
                    operator === "$=" ? check && result.slice(-check.length) === check :
                    operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 :
                    operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
                    false;
                };
              },

              "CHILD": function(type, what, argument, first, last) {
                var simple = type.slice(0, 3) !== "nth",
                  forward = type.slice(-4) !== "last",
                  ofType = what === "of-type";

                return first === 1 && last === 0 ?

                  // Shortcut for :nth-*(n)
                  function(elem) {
                    return !!elem.parentNode;
                  } :

                  function(elem, context, xml) {
                    var cache, uniqueCache, outerCache, node, nodeIndex, start,
                      dir = simple !== forward ? "nextSibling" : "previousSibling",
                      parent = elem.parentNode,
                      name = ofType && elem.nodeName.toLowerCase(),
                      useCache = !xml && !ofType,
                      diff = false;

                    if (parent) {

                      // :(first|last|only)-(child|of-type)
                      if (simple) {
                        while (dir) {
                          node = elem;
                          while ((node = node[dir])) {
                            if (ofType ?
                              node.nodeName.toLowerCase() === name :
                              node.nodeType === 1) {

                              return false;
                            }
                          }
                          // Reverse direction for :only-* (if we haven't yet done so)
                          start = dir = type === "only" && !start && "nextSibling";
                        }
                        return true;
                      }

                      start = [forward ? parent.firstChild : parent.lastChild];

                      // non-xml :nth-child(...) stores cache data on `parent`
                      if (forward && useCache) {

                        // Seek `elem` from a previously-cached index

                        // ...in a gzip-friendly way
                        node = parent;
                        outerCache = node[expando] || (node[expando] = {});

                        // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)
                        uniqueCache = outerCache[node.uniqueID] ||
                          (outerCache[node.uniqueID] = {});

                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex && cache[2];
                        node = nodeIndex && parent.childNodes[nodeIndex];

                        while ((node = ++nodeIndex && node && node[dir] ||

                            // Fallback to seeking `elem` from the start
                            (diff = nodeIndex = 0) || start.pop())) {

                          // When found, cache indexes on `parent` and break
                          if (node.nodeType === 1 && ++diff && node === elem) {
                            uniqueCache[type] = [dirruns, nodeIndex, diff];
                            break;
                          }
                        }

                      } else {
                        // Use previously-cached element index if available
                        if (useCache) {
                          // ...in a gzip-friendly way
                          node = elem;
                          outerCache = node[expando] || (node[expando] = {});

                          // Support: IE <9 only
                          // Defend against cloned attroperties (jQuery gh-1709)
                          uniqueCache = outerCache[node.uniqueID] ||
                            (outerCache[node.uniqueID] = {});

                          cache = uniqueCache[type] || [];
                          nodeIndex = cache[0] === dirruns && cache[1];
                          diff = nodeIndex;
                        }

                        // xml :nth-child(...)
                        // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                        if (diff === false) {
                          // Use the same loop as above to seek `elem` from the start
                          while ((node = ++nodeIndex && node && node[dir] ||
                              (diff = nodeIndex = 0) || start.pop())) {

                            if ((ofType ?
                                node.nodeName.toLowerCase() === name :
                                node.nodeType === 1) &&
                              ++diff) {

                              // Cache the index of each encountered element
                              if (useCache) {
                                outerCache = node[expando] || (node[expando] = {});

                                // Support: IE <9 only
                                // Defend against cloned attroperties (jQuery gh-1709)
                                uniqueCache = outerCache[node.uniqueID] ||
                                  (outerCache[node.uniqueID] = {});

                                uniqueCache[type] = [dirruns, diff];
                              }

                              if (node === elem) {
                                break;
                              }
                            }
                          }
                        }
                      }

                      // Incorporate the offset, then check against cycle size
                      diff -= last;
                      return diff === first || (diff % first === 0 && diff / first >= 0);
                    }
                  };
              },

              "PSEUDO": function(pseudo, argument) {
                // pseudo-class names are case-insensitive
                // http://www.w3.org/TR/selectors/#pseudo-classes
                // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                // Remember that setFilters inherits from pseudos
                var args,
                  fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
                  Sizzle.error("unsupported pseudo: " + pseudo);

                // The user may use createPseudo to indicate that
                // arguments are needed to create the filter function
                // just as Sizzle does
                if (fn[expando]) {
                  return fn(argument);
                }

                // But maintain support for old signatures
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
                    markFunction(function(seed, matches) {
                      var idx,
                        matched = fn(seed, argument),
                        i = matched.length;
                      while (i--) {
                        idx = indexOf(seed, matched[i]);
                        seed[idx] = !(matches[idx] = matched[i]);
                      }
                    }) :
                    function(elem) {
                      return fn(elem, 0, args);
                    };
                }

                return fn;
              }
            },

            pseudos: {
              // Potentially complex pseudos
              "not": markFunction(function(selector) {
                // Trim the selector passed to compile
                // to avoid treating leading and trailing
                // spaces as combinators
                var input = [],
                  results = [],
                  matcher = compile(selector.replace(rtrim, "$1"));

                return matcher[expando] ?
                  markFunction(function(seed, matches, context, xml) {
                    var elem,
                      unmatched = matcher(seed, null, xml, []),
                      i = seed.length;

                    // Match elements unmatched by `matcher`
                    while (i--) {
                      if ((elem = unmatched[i])) {
                        seed[i] = !(matches[i] = elem);
                      }
                    }
                  }) :
                  function(elem, context, xml) {
                    input[0] = elem;
                    matcher(input, null, xml, results);
                    // Don't keep the element (issue #299)
                    input[0] = null;
                    return !results.pop();
                  };
              }),

              "has": markFunction(function(selector) {
                return function(elem) {
                  return Sizzle(selector, elem).length > 0;
                };
              }),

              "contains": markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                };
              }),

              // "Whether an element is represented by a :lang() selector
              // is based solely on the element's language value
              // being equal to the identifier C,
              // or beginning with the identifier C immediately followed by "-".
              // The matching of C against the element's language value is performed case-insensitively.
              // The identifier C does not have to be a valid language name."
              // http://www.w3.org/TR/selectors/#lang-pseudo
              "lang": markFunction(function(lang) {
                // lang value must be a valid identifier
                if (!ridentifier.test(lang || "")) {
                  Sizzle.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if ((elemLang = documentIsHTML ?
                        elem.lang :
                        elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {

                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),

              // Miscellaneous
              "target": function(elem) {
                var hash = window.location && window.location.hash;
                return hash && hash.slice(1) === elem.id;
              },

              "root": function(elem) {
                return elem === docElem;
              },

              "focus": function(elem) {
                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
              },

              // Boolean properties
              "enabled": createDisabledPseudo(false),
              "disabled": createDisabledPseudo(true),

              "checked": function(elem) {
                // In CSS3, :checked should return both checked and selected elements
                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                var nodeName = elem.nodeName.toLowerCase();
                return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
              },

              "selected": function(elem) {
                // Accessing this property makes selected-by-default
                // options in Safari work properly
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }

                return elem.selected === true;
              },

              // Contents
              "empty": function(elem) {
                // http://www.w3.org/TR/selectors/#empty-pseudo
                // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                //   but not by others (comment: 8; processing instruction: 7; etc.)
                // nodeType < 6 works because attributes (2) do not appear as children
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },

              "parent": function(elem) {
                return !Expr.pseudos["empty"](elem);
              },

              // Element/input types
              "header": function(elem) {
                return rheader.test(elem.nodeName);
              },

              "input": function(elem) {
                return rinputs.test(elem.nodeName);
              },

              "button": function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
              },

              "text": function(elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" &&
                  elem.type === "text" &&

                  // Support: IE<8
                  // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                  ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },

              // Position-in-collection
              "first": createPositionalPseudo(function() {
                return [0];
              }),

              "last": createPositionalPseudo(function(matchIndexes, length) {
                return [length - 1];
              }),

              "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),

              "even": createPositionalPseudo(function(matchIndexes, length) {
                var i = 0;
                for (; i < length; i += 2) {
                  matchIndexes.push(i);
                }
                return matchIndexes;
              }),

              "odd": createPositionalPseudo(function(matchIndexes, length) {
                var i = 1;
                for (; i < length; i += 2) {
                  matchIndexes.push(i);
                }
                return matchIndexes;
              }),

              "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i = argument < 0 ? argument + length : argument;
                for (; --i >= 0;) {
                  matchIndexes.push(i);
                }
                return matchIndexes;
              }),

              "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i = argument < 0 ? argument + length : argument;
                for (; ++i < length;) {
                  matchIndexes.push(i);
                }
                return matchIndexes;
              })
            }
          };

          Expr.pseudos["nth"] = Expr.pseudos["eq"];

          // Add button/input type pseudos
          for (i in {
              radio: true,
              checkbox: true,
              file: true,
              password: true,
              image: true
            }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in {
              submit: true,
              reset: true
            }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }

          // Easy API for creating new setFilters
          function setFilters() {}
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();

          tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type,
              soFar, groups, preFilters,
              cached = tokenCache[selector + " "];

            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }

            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;

            while (soFar) {

              // Comma and first run
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  // Don't consume trailing commas as valid
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push((tokens = []));
              }

              matched = false;

              // Combinators
              if ((match = rcombinators.exec(soFar))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace(rtrim, " ")
                });
                soFar = soFar.slice(matched.length);
              }

              // Filters
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
                    (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type: type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }

              if (!matched) {
                break;
              }
            }

            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            return parseOnly ?
              soFar.length :
              soFar ?
              Sizzle.error(selector) :
              // Cache the tokens
              tokenCache(selector, groups).slice(0);
          };

          function toSelector(tokens) {
            var i = 0,
              len = tokens.length,
              selector = "";
            for (; i < len; i++) {
              selector += tokens[i].value;
            }
            return selector;
          }

          function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir,
              skip = combinator.next,
              key = skip || dir,
              checkNonElements = base && key === "parentNode",
              doneName = done++;

            return combinator.first ?
              // Check against closest ancestor/preceding element
              function(elem, context, xml) {
                while ((elem = elem[dir])) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context, xml);
                  }
                }
                return false;
              } :

              // Check against all ancestor/preceding elements
              function(elem, context, xml) {
                var oldCache, uniqueCache, outerCache,
                  newCache = [dirruns, doneName];

                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if (xml) {
                  while ((elem = elem[dir])) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while ((elem = elem[dir])) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando] || (elem[expando] = {});

                      // Support: IE <9 only
                      // Defend against cloned attroperties (jQuery gh-1709)
                      uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

                      if (skip && skip === elem.nodeName.toLowerCase()) {
                        elem = elem[dir] || elem;
                      } else if ((oldCache = uniqueCache[key]) &&
                        oldCache[0] === dirruns && oldCache[1] === doneName) {

                        // Assign to newCache so results back-propagate to previous elements
                        return (newCache[2] = oldCache[2]);
                      } else {
                        // Reuse newcache so results back-propagate to previous elements
                        uniqueCache[key] = newCache;

                        // A match means we're done; a fail means we have to keep checking
                        if ((newCache[2] = matcher(elem, context, xml))) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              };
          }

          function elementMatcher(matchers) {
            return matchers.length > 1 ?
              function(elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                  if (!matchers[i](elem, context, xml)) {
                    return false;
                  }
                }
                return true;
              } :
              matchers[0];
          }

          function multipleContexts(selector, contexts, results) {
            var i = 0,
              len = contexts.length;
            for (; i < len; i++) {
              Sizzle(selector, contexts[i], results);
            }
            return results;
          }

          function condense(unmatched, map, filter, context, xml) {
            var elem,
              newUnmatched = [],
              i = 0,
              len = unmatched.length,
              mapped = map != null;

            for (; i < len; i++) {
              if ((elem = unmatched[i])) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i);
                  }
                }
              }
            }

            return newUnmatched;
          }

          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i, elem,
                preMap = [],
                postMap = [],
                preexisting = results.length,

                // Get initial elements from seed or context
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),

                // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && (seed || !selector) ?
                condense(elems, preMap, preFilter, context, xml) :
                elems,

                matcherOut = matcher ?
                // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                postFinder || (seed ? preFilter : preexisting || postFilter) ?

                // ...intermediate processing is necessary
                [] :

                // ...otherwise use results directly
                results :
                matcherIn;

              // Find primary matches
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
              }

              // Apply postFilter
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);

                // Un-match failing elements by moving them back to matcherIn
                i = temp.length;
                while (i--) {
                  if ((elem = temp[i])) {
                    matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                  }
                }
              }

              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    // Get the final matcherOut by condensing this intermediate into postFinder contexts
                    temp = [];
                    i = matcherOut.length;
                    while (i--) {
                      if ((elem = matcherOut[i])) {
                        // Restore matcherIn since elem is not yet a final match
                        temp.push((matcherIn[i] = elem));
                      }
                    }
                    postFinder(null, (matcherOut = []), temp, xml);
                  }

                  // Move matched elements from seed to results to keep them synchronized
                  i = matcherOut.length;
                  while (i--) {
                    if ((elem = matcherOut[i]) &&
                      (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }

                // Add elements to results, through postFinder if defined
              } else {
                matcherOut = condense(
                  matcherOut === results ?
                  matcherOut.splice(preexisting, matcherOut.length) :
                  matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push.apply(results, matcherOut);
                }
              }
            });
          }

          function matcherFromTokens(tokens) {
            var checkContext, matcher, j,
              len = tokens.length,
              leadingRelative = Expr.relative[tokens[0].type],
              implicitRelative = leadingRelative || Expr.relative[" "],
              i = leadingRelative ? 1 : 0,

              // The foundational matcher ensures that elements are reachable from top-level context(s)
              matchContext = addCombinator(function(elem) {
                return elem === checkContext;
              }, implicitRelative, true),
              matchAnyContext = addCombinator(function(elem) {
                return indexOf(checkContext, elem) > -1;
              }, implicitRelative, true),
              matchers = [function(elem, context, xml) {
                var ret = (!leadingRelative && (xml || context !== outermostContext)) || (
                  (checkContext = context).nodeType ?
                  matchContext(elem, context, xml) :
                  matchAnyContext(elem, context, xml));
                // Avoid hanging onto element (issue #299)
                checkContext = null;
                return ret;
              }];

            for (; i < len; i++) {
              if ((matcher = Expr.relative[tokens[i].type])) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

                // Return special upon seeing a positional matcher
                if (matcher[expando]) {
                  // Find the next relative operator (if any) for proper handling
                  j = ++i;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i > 1 && elementMatcher(matchers),
                    i > 1 && toSelector(
                      // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                      tokens.slice(0, i - 1).concat({
                        value: tokens[i - 2].type === " " ? "*" : ""
                      })
                    ).replace(rtrim, "$1"),
                    matcher,
                    i < j && matcherFromTokens(tokens.slice(i, j)),
                    j < len && matcherFromTokens((tokens = tokens.slice(j))),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }

            return elementMatcher(matchers);
          }

          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0,
              byElement = elementMatchers.length > 0,
              superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher,
                  matchedCount = 0,
                  i = "0",
                  unmatched = seed && [],
                  setMatched = [],
                  contextBackup = outermostContext,
                  // We must always have either seed elements or outermost context
                  elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                  // Use integer dirruns iff this is the outermost matcher
                  dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                  len = elems.length;

                if (outermost) {
                  outermostContext = context === document || context || outermost;
                }

                // Add elements passing elementMatchers directly to results
                // Support: IE<9, Safari
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                for (; i !== len && (elem = elems[i]) != null; i++) {
                  if (byElement && elem) {
                    j = 0;
                    if (!context && elem.ownerDocument !== document) {
                      setDocument(elem);
                      xml = !documentIsHTML;
                    }
                    while ((matcher = elementMatchers[j++])) {
                      if (matcher(elem, context || document, xml)) {
                        results.push(elem);
                        break;
                      }
                    }
                    if (outermost) {
                      dirruns = dirrunsUnique;
                    }
                  }

                  // Track unmatched elements for set filters
                  if (bySet) {
                    // They will have gone through all possible matchers
                    if ((elem = !matcher && elem)) {
                      matchedCount--;
                    }

                    // Lengthen the array for every element, matched or not
                    if (seed) {
                      unmatched.push(elem);
                    }
                  }
                }

                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                matchedCount += i;

                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if (bySet && i !== matchedCount) {
                  j = 0;
                  while ((matcher = setMatchers[j++])) {
                    matcher(unmatched, setMatched, context, xml);
                  }

                  if (seed) {
                    // Reintegrate element matches to eliminate the need for sorting
                    if (matchedCount > 0) {
                      while (i--) {
                        if (!(unmatched[i] || setMatched[i])) {
                          setMatched[i] = pop.call(results);
                        }
                      }
                    }

                    // Discard index placeholder values to get only actual matches
                    setMatched = condense(setMatched);
                  }

                  // Add matches to results
                  push.apply(results, setMatched);

                  // Seedless set matches succeeding multiple successful matchers stipulate sorting
                  if (outermost && !seed && setMatched.length > 0 &&
                    (matchedCount + setMatchers.length) > 1) {

                    Sizzle.uniqueSort(results);
                  }
                }

                // Override manipulation of globals by nested matchers
                if (outermost) {
                  dirruns = dirrunsUnique;
                  outermostContext = contextBackup;
                }

                return unmatched;
              };

            return bySet ?
              markFunction(superMatcher) :
              superMatcher;
          }

          compile = Sizzle.compile = function(selector, match /* Internal Use Only */ ) {
            var i,
              setMatchers = [],
              elementMatchers = [],
              cached = compilerCache[selector + " "];

            if (!cached) {
              // Generate a function of recursive functions that can be used to check each element
              if (!match) {
                match = tokenize(selector);
              }
              i = match.length;
              while (i--) {
                cached = matcherFromTokens(match[i]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }

              // Cache the compiled function
              cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

              // Save selector and tokenization
              cached.selector = selector;
            }
            return cached;
          };

          /**
           * A low-level selection function that works with Sizzle's compiled
           *  selector functions
           * @param {String|Function} selector A selector or a pre-compiled
           *  selector function built with Sizzle.compile
           * @param {Element} context
           * @param {Array} [results]
           * @param {Array} [seed] A set of elements to match against
           */
          select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find,
              compiled = typeof selector === "function" && selector,
              match = !seed && tokenize((selector = compiled.selector || selector));

            results = results || [];

            // Try to minimize operations if there is only one selector in the list and no seed
            // (the latter of which guarantees us context)
            if (match.length === 1) {

              // Reduce context if the leading compound selector is an ID
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                if (!context) {
                  return results;

                  // Precompiled matchers will still verify ancestry, so step up a level
                } else if (compiled) {
                  context = context.parentNode;
                }

                selector = selector.slice(tokens.shift().value.length);
              }

              // Fetch a seed set for right-to-left matching
              i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
              while (i--) {
                token = tokens[i];

                // Abort if we hit a combinator
                if (Expr.relative[(type = token.type)]) {
                  break;
                }
                if ((find = Expr.find[type])) {
                  // Search, expanding context for leading sibling combinators
                  if ((seed = find(
                      token.matches[0].replace(runescape, funescape),
                      rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                    ))) {

                    // If seed is empty or no tokens remain, we can return early
                    tokens.splice(i, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push.apply(results, seed);
                      return results;
                    }

                    break;
                  }
                }
              }
            }

            // Compile and execute a filtering function if one is not provided
            // Provide `match` to avoid retokenization if we modified the selector above
            (compiled || compile(selector, match))(
              seed,
              context, !documentIsHTML,
              results, !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          };

          // One-time assignments

          // Sort stability
          support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

          // Support: Chrome 14-35+
          // Always assume duplicates if they aren't passed to the comparison function
          support.detectDuplicates = !!hasDuplicate;

          // Initialize against the default document
          setDocument();

          // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
          // Detached nodes confoundingly follow *each other*
          support.sortDetached = assert(function(el) {
            // Should return 1, but returns 4 (following)
            return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
          });

          // Support: IE<8
          // Prevent attribute/property "interpolation"
          // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
          if (!assert(function(el) {
              el.innerHTML = "<a href='#'></a>";
              return el.firstChild.getAttribute("href") === "#";
            })) {
            addHandle("type|href|height|width", function(elem, name, isXML) {
              if (!isXML) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
              }
            });
          }

          // Support: IE<9
          // Use defaultValue in place of getAttribute("value")
          if (!support.attributes || !assert(function(el) {
              el.innerHTML = "<input/>";
              el.firstChild.setAttribute("value", "");
              return el.firstChild.getAttribute("value") === "";
            })) {
            addHandle("value", function(elem, name, isXML) {
              if (!isXML && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
              }
            });
          }

          // Support: IE<9
          // Use getAttributeNode to fetch booleans when getAttribute lies
          if (!assert(function(el) {
              return el.getAttribute("disabled") == null;
            })) {
            addHandle(booleans, function(elem, name, isXML) {
              var val;
              if (!isXML) {
                return elem[name] === true ? name.toLowerCase() :
                  (val = elem.getAttributeNode(name)) && val.specified ?
                  val.value :
                  null;
              }
            });
          }

          return Sizzle;

        })(window);



      jQuery.find = Sizzle;
      jQuery.expr = Sizzle.selectors;

      // Deprecated
      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
      jQuery.text = Sizzle.getText;
      jQuery.isXMLDoc = Sizzle.isXML;
      jQuery.contains = Sizzle.contains;
      jQuery.escapeSelector = Sizzle.escape;




      var dir = function(elem, dir, until) {
        var matched = [],
          truncate = until !== undefined;

        while ((elem = elem[dir]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };


      var siblings = function(n, elem) {
        var matched = [];

        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }

        return matched;
      };


      var rneedsContext = jQuery.expr.match.needsContext;



      function nodeName(elem, name) {

        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

      };
      var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);



      var risSimple = /^.[^:#\[\.,]*$/;

      // Implement the identical functionality for filter and not
      function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
          return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }

        // Single element
        if (qualifier.nodeType) {
          return jQuery.grep(elements, function(elem) {
            return (elem === qualifier) !== not;
          });
        }

        // Arraylike of elements (jQuery, arguments, Array)
        if (typeof qualifier !== "string") {
          return jQuery.grep(elements, function(elem) {
            return (indexOf.call(qualifier, elem) > -1) !== not;
          });
        }

        // Simple selector that can be filtered directly, removing non-Elements
        if (risSimple.test(qualifier)) {
          return jQuery.filter(qualifier, elements, not);
        }

        // Complex selector, compare the two sets, removing non-Elements
        qualifier = jQuery.filter(qualifier, elements);
        return jQuery.grep(elements, function(elem) {
          return (indexOf.call(qualifier, elem) > -1) !== not && elem.nodeType === 1;
        });
      }

      jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];

        if (not) {
          expr = ":not(" + expr + ")";
        }

        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
        }

        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
          return elem.nodeType === 1;
        }));
      };

      jQuery.fn.extend({
        find: function(selector) {
          var i, ret,
            len = this.length,
            self = this;

          if (typeof selector !== "string") {
            return this.pushStack(jQuery(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }

          ret = this.pushStack([]);

          for (i = 0; i < len; i++) {
            jQuery.find(selector, self[i], ret);
          }

          return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,

            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ?
            jQuery(selector) :
            selector || [],
            false
          ).length;
        }
      });


      // Initialize a jQuery object


      // A central reference to the root jQuery(document)
      var rootjQuery,

        // A simple way to check for HTML strings
        // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
        // Strict HTML recognition (#11290: must start with <)
        // Shortcut simple #id case for speed
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

        init = jQuery.fn.init = function(selector, context, root) {
          var match, elem;

          // HANDLE: $(""), $(null), $(undefined), $(false)
          if (!selector) {
            return this;
          }

          // Method init() accepts an alternate rootjQuery
          // so migrate can support jQuery.sub (gh-2101)
          root = root || rootjQuery;

          // Handle HTML strings
          if (typeof selector === "string") {
            if (selector[0] === "<" &&
              selector[selector.length - 1] === ">" &&
              selector.length >= 3) {

              // Assume that strings that start and end with <> are HTML and skip the regex check
              match = [null, selector, null];

            } else {
              match = rquickExpr.exec(selector);
            }

            // Match html or make sure no context is specified for #id
            if (match && (match[1] || !context)) {

              // HANDLE: $(html) -> $(array)
              if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;

                // Option to run scripts is true for back-compat
                // Intentionally let the error be thrown if parseHTML is not present
                jQuery.merge(this, jQuery.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document,
                  true
                ));

                // HANDLE: $(html, props)
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                  for (match in context) {

                    // Properties of context are called as methods if possible
                    if (jQuery.isFunction(this[match])) {
                      this[match](context[match]);

                      // ...and otherwise set as attributes
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }

                return this;

                // HANDLE: $(#id)
              } else {
                elem = document.getElementById(match[2]);

                if (elem) {

                  // Inject the element directly into the jQuery object
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }

              // HANDLE: $(expr, $(...))
            } else if (!context || context.jquery) {
              return (context || root).find(selector);

              // HANDLE: $(expr, context)
              // (which is just equivalent to: $(context).find(expr)
            } else {
              return this.constructor(context).find(selector);
            }

            // HANDLE: $(DOMElement)
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;

            // HANDLE: $(function)
            // Shortcut for document ready
          } else if (jQuery.isFunction(selector)) {
            return root.ready !== undefined ?
              root.ready(selector) :

              // Execute immediately if ready is not present
              selector(jQuery);
          }

          return jQuery.makeArray(selector, this);
        };

      // Give the init function the jQuery prototype for later instantiation
      init.prototype = jQuery.fn;

      // Initialize central reference
      rootjQuery = jQuery(document);


      var rparentsprev = /^(?:parents|prev(?:Until|All))/,

        // Methods guaranteed to produce a unique set when starting from a unique set
        guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };

      jQuery.fn.extend({
        has: function(target) {
          var targets = jQuery(target, this),
            l = targets.length;

          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },

        closest: function(selectors, context) {
          var cur,
            i = 0,
            l = this.length,
            matched = [],
            targets = typeof selectors !== "string" && jQuery(selectors);

          // Positional selectors never match, since there's no _selection_ context
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

                // Always skip document fragments
                if (cur.nodeType < 11 && (targets ?
                    targets.index(cur) > -1 :

                    // Don't pass non-elements to Sizzle
                    cur.nodeType === 1 &&
                    jQuery.find.matchesSelector(cur, selectors))) {

                  matched.push(cur);
                  break;
                }
              }
            }
          }

          return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },

        // Determine the position of an element within the set
        index: function(elem) {

          // No argument, return index in parent
          if (!elem) {
            return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
          }

          // Index in selector
          if (typeof elem === "string") {
            return indexOf.call(jQuery(elem), this[0]);
          }

          // Locate the position of the desired element
          return indexOf.call(this,

            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
          );
        },

        add: function(selector, context) {
          return this.pushStack(
            jQuery.uniqueSort(
              jQuery.merge(this.get(), jQuery(selector, context))
            )
          );
        },

        addBack: function(selector) {
          return this.add(selector == null ?
            this.prevObject : this.prevObject.filter(selector)
          );
        }
      });

      function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
        return cur;
      }

      jQuery.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (nodeName(elem, "iframe")) {
            return elem.contentDocument;
          }

          // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
          // Treat the template element as a regular one in browsers that
          // don't support it.
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }

          return jQuery.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
          var matched = jQuery.map(this, fn, until);

          if (name.slice(-5) !== "Until") {
            selector = until;
          }

          if (selector && typeof selector === "string") {
            matched = jQuery.filter(selector, matched);
          }

          if (this.length > 1) {

            // Remove duplicates
            if (!guaranteedUnique[name]) {
              jQuery.uniqueSort(matched);
            }

            // Reverse order for parents* and prev-derivatives
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }

          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);



      // Convert String-formatted options into Object-formatted ones
      function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }

      /*
       * Create a callback list using the following parameters:
       *
       *	options: an optional list of space-separated options that will change how
       *			the callback list behaves or a more traditional option object
       *
       * By default a callback list will act like an event callback list and can be
       * "fired" multiple times.
       *
       * Possible options:
       *
       *	once:			will ensure the callback list can only be fired once (like a Deferred)
       *
       *	memory:			will keep track of previous values and will call any callback added
       *					after the list has been fired right away with the latest "memorized"
       *					values (like a Deferred)
       *
       *	unique:			will ensure a callback can only be added once (no duplicate in the list)
       *
       *	stopOnFalse:	interrupt callings when a callback returns false
       *
       */
      jQuery.Callbacks = function(options) {

        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ?
          createOptions(options) :
          jQuery.extend({}, options);

        var // Flag to know if list is currently firing
          firing,

          // Last fire value for non-forgettable lists
          memory,

          // Flag to know if list was already fired
          fired,

          // Flag to prevent firing
          locked,

          // Actual callback list
          list = [],

          // Queue of execution data for repeatable lists
          queue = [],

          // Index of currently firing callback (modified by add/remove as needed)
          firingIndex = -1,

          // Fire callbacks
          fire = function() {

            // Enforce single-firing
            locked = locked || options.once;

            // Execute callbacks for all pending executions,
            // respecting firingIndex overrides and runtime changes
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {

                // Run callback and check for early termination
                if (list[firingIndex].apply(memory[0], memory[1]) === false &&
                  options.stopOnFalse) {

                  // Jump to end and forget the data so .add doesn't re-fire
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }

            // Forget the data if we're done with it
            if (!options.memory) {
              memory = false;
            }

            firing = false;

            // Clean up if we're done firing for good
            if (locked) {

              // Keep an empty list if we have data for future add calls
              if (memory) {
                list = [];

                // Otherwise, this object is spent
              } else {
                list = "";
              }
            }
          },

          // Actual Callbacks object
          self = {

            // Add a callback or a collection of callbacks to the list
            add: function() {
              if (list) {

                // If we have memory from a past run, we should fire after adding
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }

                (function add(args) {
                  jQuery.each(args, function(_, arg) {
                    if (jQuery.isFunction(arg)) {
                      if (!options.unique || !self.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && jQuery.type(arg) !== "string") {

                      // Inspect recursively
                      add(arg);
                    }
                  });
                })(arguments);

                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },

            // Remove a callback from the list
            remove: function() {
              jQuery.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);

                  // Handle firing indexes
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },

            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
              return fn ?
                jQuery.inArray(fn, list) > -1 :
                list.length > 0;
            },

            // Remove all callbacks from the list
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },

            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },

            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },

            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },

            // Call all the callbacks with the given arguments
            fire: function() {
              self.fireWith(this, arguments);
              return this;
            },

            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };

        return self;
      };


      function Identity(v) {
        return v;
      }

      function Thrower(ex) {
        throw ex;
      }

      function adoptValue(value, resolve, reject, noValue) {
        var method;

        try {

          // Check for promise aspect first to privilege synchronous behavior
          if (value && jQuery.isFunction((method = value.promise))) {
            method.call(value).done(resolve).fail(reject);

            // Other thenables
          } else if (value && jQuery.isFunction((method = value.then))) {
            method.call(value, resolve, reject);

            // Other non-thenables
          } else {

            // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
            // * false: [ value ].slice( 0 ) => resolve( value )
            // * true: [ value ].slice( 1 ) => resolve()
            resolve.apply(undefined, [value].slice(noValue));
          }

          // For Promises/A+, convert exceptions into rejections
          // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
          // Deferred#then to conditionally suppress rejection.
        } catch (value) {

          // Support: Android 4.0 only
          // Strict mode functions invoked without .call/.apply get global-object context
          reject.apply(undefined, [value]);
        }
      }

      jQuery.extend({

        Deferred: function(func) {
          var tuples = [

              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              ["notify", "progress", jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"), 2
              ],
              ["resolve", "done", jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"), 0, "resolved"
              ],
              ["reject", "fail", jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"), 1, "rejected"
              ]
            ],
            state = "pending",
            promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },

              // Keep pipe for back-compat
              pipe: function( /* fnDone, fnFail, fnProgress */ ) {
                var fns = arguments;

                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(i, tuple) {

                    // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                    var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];

                    // deferred.progress(function() { bind to newDefer or newDefer.notify })
                    // deferred.done(function() { bind to newDefer or newDefer.resolve })
                    // deferred.fail(function() { bind to newDefer or newDefer.reject })
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && jQuery.isFunction(returned.promise)) {
                        returned.promise()
                          .progress(newDefer.notify)
                          .done(newDefer.resolve)
                          .fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;

                function resolve(depth, deferred, handler, special) {
                  return function() {
                    var that = this,
                      args = arguments,
                      mightThrow = function() {
                        var returned, then;

                        // Support: Promises/A+ section 2.3.3.3.3
                        // https://promisesaplus.com/#point-59
                        // Ignore double-resolution attempts
                        if (depth < maxDepth) {
                          return;
                        }

                        returned = handler.apply(that, args);

                        // Support: Promises/A+ section 2.3.1
                        // https://promisesaplus.com/#point-48
                        if (returned === deferred.promise()) {
                          throw new TypeError("Thenable self-resolution");
                        }

                        // Support: Promises/A+ sections 2.3.3.1, 3.5
                        // https://promisesaplus.com/#point-54
                        // https://promisesaplus.com/#point-75
                        // Retrieve `then` only once
                        then = returned &&

                          // Support: Promises/A+ section 2.3.4
                          // https://promisesaplus.com/#point-64
                          // Only check objects and functions for thenability
                          (typeof returned === "object" ||
                            typeof returned === "function") &&
                          returned.then;

                        // Handle a returned thenable
                        if (jQuery.isFunction(then)) {

                          // Special processors (notify) just wait for resolution
                          if (special) {
                            then.call(
                              returned,
                              resolve(maxDepth, deferred, Identity, special),
                              resolve(maxDepth, deferred, Thrower, special)
                            );

                            // Normal processors (resolve) also hook into progress
                          } else {

                            // ...and disregard older resolution values
                            maxDepth++;

                            then.call(
                              returned,
                              resolve(maxDepth, deferred, Identity, special),
                              resolve(maxDepth, deferred, Thrower, special),
                              resolve(maxDepth, deferred, Identity,
                                deferred.notifyWith)
                            );
                          }

                          // Handle all other returned values
                        } else {

                          // Only substitute handlers pass on context
                          // and multiple values (non-spec behavior)
                          if (handler !== Identity) {
                            that = undefined;
                            args = [returned];
                          }

                          // Process the value(s)
                          // Default process is resolve
                          (special || deferred.resolveWith)(that, args);
                        }
                      },

                      // Only normal processors (resolve) catch and reject exceptions
                      process = special ?
                      mightThrow :
                      function() {
                        try {
                          mightThrow();
                        } catch (e) {

                          if (jQuery.Deferred.exceptionHook) {
                            jQuery.Deferred.exceptionHook(e,
                              process.stackTrace);
                          }

                          // Support: Promises/A+ section 2.3.3.3.4.1
                          // https://promisesaplus.com/#point-61
                          // Ignore post-resolution exceptions
                          if (depth + 1 >= maxDepth) {

                            // Only substitute handlers pass on context
                            // and multiple values (non-spec behavior)
                            if (handler !== Thrower) {
                              that = undefined;
                              args = [e];
                            }

                            deferred.rejectWith(that, args);
                          }
                        }
                      };

                    // Support: Promises/A+ section 2.3.3.3.1
                    // https://promisesaplus.com/#point-57
                    // Re-resolve promises immediately to dodge false rejection from
                    // subsequent errors
                    if (depth) {
                      process();
                    } else {

                      // Call an optional hook to record the stack, in case of exception
                      // since it's otherwise lost when execution goes async
                      if (jQuery.Deferred.getStackHook) {
                        process.stackTrace = jQuery.Deferred.getStackHook();
                      }
                      window.setTimeout(process);
                    }
                  };
                }

                return jQuery.Deferred(function(newDefer) {

                  // progress_handlers.add( ... )
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      jQuery.isFunction(onProgress) ?
                      onProgress :
                      Identity,
                      newDefer.notifyWith
                    )
                  );

                  // fulfilled_handlers.add( ... )
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      jQuery.isFunction(onFulfilled) ?
                      onFulfilled :
                      Identity
                    )
                  );

                  // rejected_handlers.add( ... )
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      jQuery.isFunction(onRejected) ?
                      onRejected :
                      Thrower
                    )
                  );
                }).promise();
              },

              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            },
            deferred = {};

          // Add list-specific methods
          jQuery.each(tuples, function(i, tuple) {
            var list = tuple[2],
              stateString = tuple[5];

            // promise.progress = list.add
            // promise.done = list.add
            // promise.fail = list.add
            promise[tuple[1]] = list.add;

            // Handle state
            if (stateString) {
              list.add(
                function() {

                  // state = "resolved" (i.e., fulfilled)
                  // state = "rejected"
                  state = stateString;
                },

                // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable,

                // progress_callbacks.lock
                tuples[0][2].lock
              );
            }

            // progress_handlers.fire
            // fulfilled_handlers.fire
            // rejected_handlers.fire
            list.add(tuple[3].fire);

            // deferred.notify = function() { deferred.notifyWith(...) }
            // deferred.resolve = function() { deferred.resolveWith(...) }
            // deferred.reject = function() { deferred.rejectWith(...) }
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
              return this;
            };

            // deferred.notifyWith = list.fireWith
            // deferred.resolveWith = list.fireWith
            // deferred.rejectWith = list.fireWith
            deferred[tuple[0] + "With"] = list.fireWith;
          });

          // Make the deferred a promise
          promise.promise(deferred);

          // Call given func if any
          if (func) {
            func.call(deferred, deferred);
          }

          // All done!
          return deferred;
        },

        // Deferred helper
        when: function(singleValue) {
          var

          // count of uncompleted subordinates
            remaining = arguments.length,

            // count of unprocessed arguments
            i = remaining,

            // subordinate fulfillment data
            resolveContexts = Array(i),
            resolveValues = slice.call(arguments),

            // the master Deferred
            master = jQuery.Deferred(),

            // subordinate callback factory
            updateFunc = function(i) {
              return function(value) {
                resolveContexts[i] = this;
                resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!(--remaining)) {
                  master.resolveWith(resolveContexts, resolveValues);
                }
              };
            };

          // Single- and empty arguments are adopted like Promise.resolve
          if (remaining <= 1) {
            adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);

            // Use .then() to unwrap secondary thenables (cf. gh-3000)
            if (master.state() === "pending" ||
              jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {

              return master.then();
            }
          }

          // Multiple arguments are aggregated like Promise.all array elements
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), master.reject);
          }

          return master.promise();
        }
      });


      // These usually indicate a programmer mistake during development,
      // warn about them ASAP rather than swallowing them by default.
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

      jQuery.Deferred.exceptionHook = function(error, stack) {

        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
          window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
      };




      jQuery.readyException = function(error) {
        window.setTimeout(function() {
          throw error;
        });
      };




      // The deferred used on DOM ready
      var readyList = jQuery.Deferred();

      jQuery.fn.ready = function(fn) {

        readyList
          .then(fn)

        // Wrap jQuery.readyException in a function so that the lookup
        // happens at the time of error handling instead of callback
        // registration.
        .catch(function(error) {
          jQuery.readyException(error);
        });

        return this;
      };

      jQuery.extend({

        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,

        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,

        // Handle when the DOM is ready
        ready: function(wait) {

          // Abort if there are pending holds or we're already ready
          if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return;
          }

          // Remember that the DOM is ready
          jQuery.isReady = true;

          // If a normal DOM Ready event fired, decrement, and wait if need be
          if (wait !== true && --jQuery.readyWait > 0) {
            return;
          }

          // If there are functions bound, to execute
          readyList.resolveWith(document, [jQuery]);
        }
      });

      jQuery.ready.then = readyList.then;

      // The ready event handler and self cleanup method
      function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready();
      }

      // Catch cases where $(document).ready() is called
      // after the browser event has already occurred.
      // Support: IE <=9 - 10 only
      // Older IE sometimes signals "interactive" too soon
      if (document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)) {

        // Handle it asynchronously to allow scripts the opportunity to delay ready
        window.setTimeout(jQuery.ready);

      } else {

        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed);

        // A fallback to window.onload, that will always work
        window.addEventListener("load", completed);
      }




      // Multifunctional method to get and set values of a collection
      // The value/s can optionally be executed if it's a function
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
          len = elems.length,
          bulk = key == null;

        // Sets many values
        if (jQuery.type(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }

          // Sets one value
        } else if (value !== undefined) {
          chainable = true;

          if (!jQuery.isFunction(value)) {
            raw = true;
          }

          if (bulk) {

            // Bulk operations run against the entire set
            if (raw) {
              fn.call(elems, value);
              fn = null;

              // ...except when executing function values
            } else {
              bulk = fn;
              fn = function(elem, key, value) {
                return bulk.call(jQuery(elem), value);
              };
            }
          }

          if (fn) {
            for (; i < len; i++) {
              fn(
                elems[i], key, raw ?
                value :
                value.call(elems[i], i, fn(elems[i], key))
              );
            }
          }
        }

        if (chainable) {
          return elems;
        }

        // Gets
        if (bulk) {
          return fn.call(elems);
        }

        return len ? fn(elems[0], key) : emptyGet;
      };
      var acceptData = function(owner) {

        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
      };




      function Data() {
        this.expando = jQuery.expando + Data.uid++;
      }

      Data.uid = 1;

      Data.prototype = {

        cache: function(owner) {

          // Check if the owner object already has a cache
          var value = owner[this.expando];

          // If not, create one
          if (!value) {
            value = {};

            // We can accept data for non-element nodes in modern browsers,
            // but we should not, see #8335.
            // Always return an empty object.
            if (acceptData(owner)) {

              // If it is a node unlikely to be stringify-ed or looped over
              // use plain assignment
              if (owner.nodeType) {
                owner[this.expando] = value;

                // Otherwise secure it in a non-enumerable property
                // configurable must be true to allow the property to be
                // deleted when data is removed
              } else {
                Object.defineProperty(owner, this.expando, {
                  value: value,
                  configurable: true
                });
              }
            }
          }

          return value;
        },
        set: function(owner, data, value) {
          var prop,
            cache = this.cache(owner);

          // Handle: [ owner, key, value ] args
          // Always use camelCase key (gh-2257)
          if (typeof data === "string") {
            cache[jQuery.camelCase(data)] = value;

            // Handle: [ owner, { properties } ] args
          } else {

            // Copy the properties one-by-one to the cache object
            for (prop in data) {
              cache[jQuery.camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === undefined ?
            this.cache(owner) :

            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
        },
        access: function(owner, key, value) {

          // In cases where either:
          //
          //   1. No key was specified
          //   2. A string key was specified, but no value provided
          //
          // Take the "read" path and allow the get method to determine
          // which value to return, respectively either:
          //
          //   1. The entire cache object
          //   2. The data stored at the key
          //
          if (key === undefined ||
            ((key && typeof key === "string") && value === undefined)) {

            return this.get(owner, key);
          }

          // When the key is not a string, or both a key and value
          // are specified, set or extend (existing objects) with either:
          //
          //   1. An object of properties
          //   2. A key and value
          //
          this.set(owner, key, value);

          // Since the "set" path can have two possible entry points
          // return the expected data based on which path was taken[*]
          return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
          var i,
            cache = owner[this.expando];

          if (cache === undefined) {
            return;
          }

          if (key !== undefined) {

            // Support array or space separated string of keys
            if (Array.isArray(key)) {

              // If key is an array of keys...
              // We always set camelCase keys, so remove that.
              key = key.map(jQuery.camelCase);
            } else {
              key = jQuery.camelCase(key);

              // If a key with the spaces exists, use it.
              // Otherwise, create an array by matching non-whitespace
              key = key in cache ? [key] :
                (key.match(rnothtmlwhite) || []);
            }

            i = key.length;

            while (i--) {
              delete cache[key[i]];
            }
          }

          // Remove the expando if there's no more data
          if (key === undefined || jQuery.isEmptyObject(cache)) {

            // Support: Chrome <=35 - 45
            // Webkit & Blink performance suffers when deleting properties
            // from DOM nodes, so set to undefined instead
            // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
            if (owner.nodeType) {
              owner[this.expando] = undefined;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();

      var dataUser = new Data();



      //	Implementation Summary
      //
      //	1. Enforce API surface and semantic compatibility with 1.9.x branch
      //	2. Improve the module's maintainability by reducing the storage
      //		paths to a single mechanism.
      //	3. Use the same single mechanism to support "private" and "user" data.
      //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
      //	5. Avoid exposing implementation details on user objects (eg. expando properties)
      //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /[A-Z]/g;

      function getData(data) {
        if (data === "true") {
          return true;
        }

        if (data === "false") {
          return false;
        }

        if (data === "null") {
          return null;
        }

        // Only convert to a number if it doesn't change the string
        if (data === +data + "") {
          return +data;
        }

        if (rbrace.test(data)) {
          return JSON.parse(data);
        }

        return data;
      }

      function dataAttr(elem, key, data) {
        var name;

        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);

          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {}

            // Make sure we set the data so it isn't changed later
            dataUser.set(elem, key, data);
          } else {
            data = undefined;
          }
        }
        return data;
      }

      jQuery.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },

        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },

        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },

        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },

        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });

      jQuery.fn.extend({
        data: function(key, value) {
          var i, name, data,
            elem = this[0],
            attrs = elem && elem.attributes;

          // Gets all values
          if (key === undefined) {
            if (this.length) {
              data = dataUser.get(elem);

              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {

                  // Support: IE 11 only
                  // The attrs elements can be null (#14894)
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = jQuery.camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }

            return data;
          }

          // Sets multiple values
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }

          return access(this, function(value) {
            var data;

            // The calling jQuery object (element matches) is not empty
            // (and therefore has an element appears at this[ 0 ]) and the
            // `value` parameter was not undefined. An empty jQuery object
            // will result in `undefined` for elem = this[ 0 ] which will
            // throw an exception if an attempt to read a data cache is made.
            if (elem && value === undefined) {

              // Attempt to get data from the cache
              // The key will always be camelCased in Data
              data = dataUser.get(elem, key);
              if (data !== undefined) {
                return data;
              }

              // Attempt to "discover" the data in
              // HTML5 custom data-* attrs
              data = dataAttr(elem, key);
              if (data !== undefined) {
                return data;
              }

              // We tried really hard, but the data doesn't exist.
              return;
            }

            // Set the data...
            this.each(function() {

              // We always store the camelCased key
              dataUser.set(this, key, value);
            });
          }, null, value, arguments.length > 1, null, true);
        },

        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });


      jQuery.extend({
        queue: function(elem, type, data) {
          var queue;

          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);

            // Speed up dequeue by getting out quickly if this is just a lookup
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },

        dequeue: function(elem, type) {
          type = type || "fx";

          var queue = jQuery.queue(elem, type),
            startLength = queue.length,
            fn = queue.shift(),
            hooks = jQuery._queueHooks(elem, type),
            next = function() {
              jQuery.dequeue(elem, type);
            };

          // If the fx queue is dequeued, always remove the progress sentinel
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }

          if (fn) {

            // Add a progress sentinel to prevent the fx queue from being
            // automatically dequeued
            if (type === "fx") {
              queue.unshift("inprogress");
            }

            // Clear up the last queue stop function
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }

          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },

        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });

      jQuery.fn.extend({
        queue: function(type, data) {
          var setter = 2;

          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }

          if (arguments.length < setter) {
            return jQuery.queue(this[0], type);
          }

          return data === undefined ?
            this :
            this.each(function() {
              var queue = jQuery.queue(this, type, data);

              // Ensure a hooks for this queue
              jQuery._queueHooks(this, type);

              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery.dequeue(this, type);
              }
            });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },

        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
          var tmp,
            count = 1,
            defer = jQuery.Deferred(),
            elements = this,
            i = this.length,
            resolve = function() {
              if (!(--count)) {
                defer.resolveWith(elements, [elements]);
              }
            };

          if (typeof type !== "string") {
            obj = type;
            type = undefined;
          }
          type = type || "fx";

          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");


      var cssExpand = ["Top", "Right", "Bottom", "Left"];

      var isHiddenWithinTree = function(elem, el) {

        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;

        // Inline style trumps all
        return elem.style.display === "none" ||
          elem.style.display === "" &&

          // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          jQuery.contains(elem.ownerDocument, elem) &&

          jQuery.css(elem, "display") === "none";
      };

      var swap = function(elem, options, callback, args) {
        var ret, name,
          old = {};

        // Remember the old values, and insert the new ones
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }

        ret = callback.apply(elem, args || []);

        // Revert the old values
        for (name in options) {
          elem.style[name] = old[name];
        }

        return ret;
      };




      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted,
          scale = 1,
          maxIterations = 20,
          currentValue = tween ?
          function() {
            return tween.cur();
          } :
          function() {
            return jQuery.css(elem, prop, "");
          },
          initial = currentValue(),
          unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),

          // Starting value computation is required for potential unit mismatches
          initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) &&
          rcssNum.exec(jQuery.css(elem, prop));

        if (initialInUnit && initialInUnit[3] !== unit) {

          // Trust units reported by jQuery.css
          unit = unit || initialInUnit[3];

          // Make sure we update the tween properties later on
          valueParts = valueParts || [];

          // Iteratively approximate from a nonzero starting point
          initialInUnit = +initial || 1;

          do {

            // If previous iteration zeroed out, double until we get *something*.
            // Use string for doubling so we don't accidentally see scale as unchanged below
            scale = scale || ".5";

            // Adjust and apply
            initialInUnit = initialInUnit / scale;
            jQuery.style(elem, prop, initialInUnit + unit);

            // Update scale, tolerating zero or NaN from tween.cur()
            // Break the loop if scale is unchanged or perfect, or if we've just had enough.
          } while (
            scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations
          );
        }

        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;

          // Apply relative offset (+=/-=) if specified
          adjusted = valueParts[1] ?
            initialInUnit + (valueParts[1] + 1) * valueParts[2] :
            +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }


      var defaultDisplayMap = {};

      function getDefaultDisplay(elem) {
        var temp,
          doc = elem.ownerDocument,
          nodeName = elem.nodeName,
          display = defaultDisplayMap[nodeName];

        if (display) {
          return display;
        }

        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");

        temp.parentNode.removeChild(temp);

        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName] = display;

        return display;
      }

      function showHide(elements, show) {
        var display, elem,
          values = [],
          index = 0,
          length = elements.length;

        // Determine new display value for elements that need to change
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }

          display = elem.style.display;
          if (show) {

            // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
            // check is required in this first loop unless we have a nonempty display value (either
            // inline or about-to-be-restored)
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";

              // Remember what we're overwriting
              dataPriv.set(elem, "display", display);
            }
          }
        }

        // Set the display of the elements in a second loop to avoid constant reflow
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }

        return elements;
      }

      jQuery.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }

          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery(this).show();
            } else {
              jQuery(this).hide();
            }
          });
        }
      });
      var rcheckableType = (/^(?:checkbox|radio)$/i);

      var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);

      var rscriptType = (/^$|\/(?:java|ecma)script/i);



      // We have to close these tags to support XHTML (#13200)
      var wrapMap = {

        // Support: IE <=9 only
        option: [1, "<select multiple='multiple'>", "</select>"],

        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

        _default: [0, "", ""]
      };

      // Support: IE <=9 only
      wrapMap.optgroup = wrapMap.option;

      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;


      function getAll(context, tag) {

        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
        var ret;

        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");

        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");

        } else {
          ret = [];
        }

        if (tag === undefined || tag && nodeName(context, tag)) {
          return jQuery.merge([context], ret);
        }

        return ret;
      }


      // Mark scripts as having already been evaluated
      function setGlobalEval(elems, refElements) {
        var i = 0,
          l = elems.length;

        for (; i < l; i++) {
          dataPriv.set(
            elems[i],
            "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval")
          );
        }
      }


      var rhtml = /<|&#?\w+;/;

      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, contains, j,
          fragment = context.createDocumentFragment(),
          nodes = [],
          i = 0,
          l = elems.length;

        for (; i < l; i++) {
          elem = elems[i];

          if (elem || elem === 0) {

            // Add nodes directly
            if (jQuery.type(elem) === "object") {

              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

              // Convert non-html into a text node
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));

              // Convert html into DOM nodes
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));

              // Deserialize a standard representation
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

              // Descend through wrappers to the right content
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }

              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(nodes, tmp.childNodes);

              // Remember the top-level container
              tmp = fragment.firstChild;

              // Ensure the created nodes are orphaned (#12392)
              tmp.textContent = "";
            }
          }
        }

        // Remove wrapper from fragment
        fragment.textContent = "";

        i = 0;
        while ((elem = nodes[i++])) {

          // Skip elements already in the context collection (trac-4087)
          if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }

          contains = jQuery.contains(elem.ownerDocument, elem);

          // Append to fragment
          tmp = getAll(fragment.appendChild(elem), "script");

          // Preserve script evaluation history
          if (contains) {
            setGlobalEval(tmp);
          }

          // Capture executables
          if (scripts) {
            j = 0;
            while ((elem = tmp[j++])) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }

        return fragment;
      }


      (function() {
        var fragment = document.createDocumentFragment(),
          div = fragment.appendChild(document.createElement("div")),
          input = document.createElement("input");

        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (#11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");

        div.appendChild(input);

        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
      })();
      var documentElement = document.documentElement;



      var
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

      function returnTrue() {
        return true;
      }

      function returnFalse() {
        return false;
      }

      // Support: IE <=9 only
      // See #13393 for more info
      function safeActiveElement() {
        try {
          return document.activeElement;
        } catch (err) {}
      }

      function on(elem, types, selector, data, fn, one) {
        var origFn, type;

        // Types can be a map of types/handlers
        if (typeof types === "object") {

          // ( types-Object, selector, data )
          if (typeof selector !== "string") {

            // ( types-Object, data )
            data = data || selector;
            selector = undefined;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }

        if (data == null && fn == null) {

          // ( types, fn )
          fn = selector;
          data = selector = undefined;
        } else if (fn == null) {
          if (typeof selector === "string") {

            // ( types, selector, fn )
            fn = data;
            data = undefined;
          } else {

            // ( types, data, fn )
            fn = data;
            data = selector;
            selector = undefined;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }

        if (one === 1) {
          origFn = fn;
          fn = function(event) {

            // Can use an empty set, since event contains the info
            jQuery().off(event);
            return origFn.apply(this, arguments);
          };

          // Use same guid so caller can remove using origFn
          fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
          jQuery.event.add(this, types, fn, data, selector);
        });
      }

      /*
       * Helper functions for managing events -- not part of the public interface.
       * Props to Dean Edwards' addEvent library for many of the ideas.
       */
      jQuery.event = {

        global: {},

        add: function(elem, types, handler, data, selector) {

          var handleObjIn, eventHandle, tmp,
            events, t, handleObj,
            special, handlers, type, namespaces, origType,
            elemData = dataPriv.get(elem);

          // Don't attach events to noData or text/comment nodes (but allow plain objects)
          if (!elemData) {
            return;
          }

          // Caller can pass in an object of custom data in lieu of the handler
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }

          // Ensure that invalid selectors throw exceptions at attach time
          // Evaluate against documentElement in case elem is a non-element node (e.g., document)
          if (selector) {
            jQuery.find.matchesSelector(documentElement, selector);
          }

          // Make sure that the handler has a unique ID, used to find/remove it later
          if (!handler.guid) {
            handler.guid = jQuery.guid++;
          }

          // Init the element's event structure and main handler, if this is the first
          if (!(events = elemData.events)) {
            events = elemData.events = {};
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {

              // Discard the second event of a jQuery.event.trigger() and
              // when an event is called after a page has unloaded
              return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
          }

          // Handle multiple events separated by a space
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();

            // There *must* be a type, no attaching namespace-only handlers
            if (!type) {
              continue;
            }

            // If event changes its type, use the special event handlers for the changed type
            special = jQuery.event.special[type] || {};

            // If selector defined, determine special event api type, otherwise given type
            type = (selector ? special.delegateType : special.bindType) || type;

            // Update special based on newly reset type
            special = jQuery.event.special[type] || {};

            // handleObj is passed to all event handlers
            handleObj = jQuery.extend({
              type: type,
              origType: origType,
              data: data,
              handler: handler,
              guid: handler.guid,
              selector: selector,
              needsContext: selector && jQuery.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);

            // Init the event handler queue if we're the first
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;

              // Only use addEventListener if the special events handler returns false
              if (!special.setup ||
                special.setup.call(elem, data, namespaces, eventHandle) === false) {

                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }

            if (special.add) {
              special.add.call(elem, handleObj);

              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }

            // Add to the element's handler list, delegates in front
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }

            // Keep track of which events have ever been used, for event optimization
            jQuery.event.global[type] = true;
          }

        },

        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {

          var j, origCount, tmp,
            events, t, handleObj,
            special, handlers, type, namespaces, origType,
            elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

          if (!elemData || !(events = elemData.events)) {
            return;
          }

          // Once for each type.namespace in types; type may be omitted
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();

            // Unbind all events (on this namespace, if provided) for the element
            if (!type) {
              for (type in events) {
                jQuery.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }

            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] &&
              new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

            // Remove matching events
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];

              if ((mappedTypes || origType === handleObj.origType) &&
                (!handler || handler.guid === handleObj.guid) &&
                (!tmp || tmp.test(handleObj.namespace)) &&
                (!selector || selector === handleObj.selector ||
                  selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);

                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }

            // Remove generic event handler if we removed something and no more handlers exist
            // (avoids potential for endless recursion during removal of special event handlers)
            if (origCount && !handlers.length) {
              if (!special.teardown ||
                special.teardown.call(elem, namespaces, elemData.handle) === false) {

                jQuery.removeEvent(elem, type, elemData.handle);
              }

              delete events[type];
            }
          }

          // Remove data and the expando if it's no longer used
          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },

        dispatch: function(nativeEvent) {

          // Make a writable jQuery.Event from the native event object
          var event = jQuery.event.fix(nativeEvent);

          var i, j, ret, matched, handleObj, handlerQueue,
            args = new Array(arguments.length),
            handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
            special = jQuery.event.special[event.type] || {};

          // Use the fix-ed jQuery.Event rather than the (read-only) native event
          args[0] = event;

          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }

          event.delegateTarget = this;

          // Call the preDispatch hook for the mapped type, and let it bail if desired
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }

          // Determine handlers
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);

          // Run delegates first; they may want to stop propagation beneath us
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;

            j = 0;
            while ((handleObj = matched.handlers[j++]) &&
              !event.isImmediatePropagationStopped()) {

              // Triggered event must either 1) have no namespace, or 2) have namespace(s)
              // a subset or equal to those in the bound event (both can have no namespace).
              if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

                event.handleObj = handleObj;
                event.data = handleObj.data;

                ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||
                  handleObj.handler).apply(matched.elem, args);

                if (ret !== undefined) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }

          // Call the postDispatch hook for the mapped type
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }

          return event.result;
        },

        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors,
            handlerQueue = [],
            delegateCount = handlers.delegateCount,
            cur = event.target;

          // Find delegate handlers
          if (delegateCount &&

            // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType &&

            // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {

            for (; cur !== this; cur = cur.parentNode || this) {

              // Don't check non-elements (#13208)
              // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];

                  // Don't conflict with Object.prototype properties (#13203)
                  sel = handleObj.selector + " ";

                  if (matchedSelectors[sel] === undefined) {
                    matchedSelectors[sel] = handleObj.needsContext ?
                      jQuery(sel, this).index(cur) > -1 :
                      jQuery.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({
                    elem: cur,
                    handlers: matchedHandlers
                  });
                }
              }
            }
          }

          // Add the remaining (directly-bound) handlers
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({
              elem: cur,
              handlers: handlers.slice(delegateCount)
            });
          }

          return handlerQueue;
        },

        addProp: function(name, hook) {
          Object.defineProperty(jQuery.Event.prototype, name, {
            enumerable: true,
            configurable: true,

            get: jQuery.isFunction(hook) ?
              function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },

            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: value
              });
            }
          });
        },

        fix: function(originalEvent) {
          return originalEvent[jQuery.expando] ?
            originalEvent :
            new jQuery.Event(originalEvent);
        },

        special: {
          load: {

            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          focus: {

            // Fire native event if possible so blur/focus sequence is correct
            trigger: function() {
              if (this !== safeActiveElement() && this.focus) {
                this.focus();
                return false;
              }
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function() {
              if (this === safeActiveElement() && this.blur) {
                this.blur();
                return false;
              }
            },
            delegateType: "focusout"
          },
          click: {

            // For checkbox, fire native event so checked state will be right
            trigger: function() {
              if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
                this.click();
                return false;
              }
            },

            // For cross-browser consistency, don't fire native .click() on links
            _default: function(event) {
              return nodeName(event.target, "a");
            }
          },

          beforeunload: {
            postDispatch: function(event) {

              // Support: Firefox 20+
              // Firefox doesn't alert if the returnValue field is not set.
              if (event.result !== undefined && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };

      jQuery.removeEvent = function(elem, type, handle) {

        // This "if" is needed for plain objects
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };

      jQuery.Event = function(src, props) {

        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) {
          return new jQuery.Event(src, props);
        }

        // Event object
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;

          // Events bubbling up the document may have been marked as prevented
          // by a handler lower down the tree; reflect the correct value.
          this.isDefaultPrevented = src.defaultPrevented ||
            src.defaultPrevented === undefined &&

            // Support: Android <=2.3 only
            src.returnValue === false ?
            returnTrue :
            returnFalse;

          // Create target properties
          // Support: Safari <=6 - 7 only
          // Target should not be a text node (#504, #13143)
          this.target = (src.target && src.target.nodeType === 3) ?
            src.target.parentNode :
            src.target;

          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;

          // Event type
        } else {
          this.type = src;
        }

        // Put explicitly provided properties onto the event object
        if (props) {
          jQuery.extend(this, props);
        }

        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || jQuery.now();

        // Mark it as fixed
        this[jQuery.expando] = true;
      };

      // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
      // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
      jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,

        preventDefault: function() {
          var e = this.originalEvent;

          this.isDefaultPrevented = returnTrue;

          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;

          this.isPropagationStopped = returnTrue;

          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;

          this.isImmediatePropagationStopped = returnTrue;

          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }

          this.stopPropagation();
        }
      };

      // Includes all common event props including KeyEvent and MouseEvent specific props
      jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,

        which: function(event) {
          var button = event.button;

          // Add which for key events
          if (event.which == null && rkeyEvent.test(event.type)) {
            return event.charCode != null ? event.charCode : event.keyCode;
          }

          // Add which for click: 1 === left; 2 === middle; 3 === right
          if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
            if (button & 1) {
              return 1;
            }

            if (button & 2) {
              return 3;
            }

            if (button & 4) {
              return 2;
            }

            return 0;
          }

          return event.which;
        }
      }, jQuery.event.addProp);

      // Create mouseenter/leave events using mouseover/out and event-time checks
      // so that event delegation works in jQuery.
      // Do the same for pointerenter/pointerleave and pointerover/pointerout
      //
      // Support: Safari 7 only
      // Safari sends mouseenter too often; see:
      // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
      // for the description of the bug (it existed in older Chrome versions as well).
      jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery.event.special[orig] = {
          delegateType: fix,
          bindType: fix,

          handle: function(event) {
            var ret,
              target = this,
              related = event.relatedTarget,
              handleObj = event.handleObj;

            // For mouseenter/leave call the handler if related is outside the target.
            // NB: No relatedTarget if the mouse left/entered the browser window
            if (!related || (related !== target && !jQuery.contains(target, related))) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });

      jQuery.fn.extend({

        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {

            // ( event )  dispatched jQuery.Event
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(
              handleObj.namespace ?
              handleObj.origType + "." + handleObj.namespace :
              handleObj.origType,
              handleObj.selector,
              handleObj.handler
            );
            return this;
          }
          if (typeof types === "object") {

            // ( types-object [, selector] )
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {

            // ( types [, fn] )
            fn = selector;
            selector = undefined;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery.event.remove(this, types, fn, selector);
          });
        }
      });


      var

      /* eslint-disable max-len */

      // See https://github.com/eslint/eslint/issues/3229
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

        /* eslint-enable */

        // Support: IE <=10 - 11, Edge 12 - 13
        // In IE/Edge using regex groups here causes severe slowdowns.
        // See https://connect.microsoft.com/IE/feedback/details/1736512/
        rnoInnerhtml = /<script|<style|<link/i,

        // checked="checked" or checked
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rscriptTypeMasked = /^true\/(.*)/,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      // Prefer a tbody over its parent table for containing new rows
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") &&
          nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

          return jQuery(">tbody", elem)[0] || elem;
        }

        return elem;
      }

      // Replace/restore the type attribute of script elements for safe DOM manipulation
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }

      function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);

        if (match) {
          elem.type = match[1];
        } else {
          elem.removeAttribute("type");
        }

        return elem;
      }

      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

        if (dest.nodeType !== 1) {
          return;
        }

        // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.access(src);
          pdataCur = dataPriv.set(dest, pdataOld);
          events = pdataOld.events;

          if (events) {
            delete pdataCur.handle;
            pdataCur.events = {};

            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery.event.add(dest, type, events[type][i]);
              }
            }
          }
        }

        // 2. Copy user data
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery.extend({}, udataOld);

          dataUser.set(dest, udataCur);
        }
      }

      // Fix IE bugs, see support tests
      function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();

        // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;

          // Fails to return the selected option to the default selected state when cloning options
        } else if (nodeName === "input" || nodeName === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }

      function domManip(collection, args, callback, ignored) {

        // Flatten any nested arrays
        args = concat.apply([], args);

        var fragment, first, scripts, hasScripts, node, doc,
          i = 0,
          l = collection.length,
          iNoClone = l - 1,
          value = args[0],
          isFunction = jQuery.isFunction(value);

        // We can't cloneNode fragments that contain checked, in WebKit
        if (isFunction ||
          (l > 1 && typeof value === "string" &&
            !support.checkClone && rchecked.test(value))) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (isFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }

        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;

          if (fragment.childNodes.length === 1) {
            fragment = first;
          }

          // Require either new content or an interest in ignored elements to invoke the callback
          if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;

            // Use the original fragment for the last item
            // instead of the first because it can end up
            // being emptied incorrectly in certain situations (#8070).
            for (; i < l; i++) {
              node = fragment;

              if (i !== iNoClone) {
                node = jQuery.clone(node, true, true);

                // Keep references to cloned scripts for later restoration
                if (hasScripts) {

                  // Support: Android <=4.0 only, PhantomJS 1 only
                  // push.apply(_, arraylike) throws on ancient WebKit
                  jQuery.merge(scripts, getAll(node, "script"));
                }
              }

              callback.call(collection[i], node, i);
            }

            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;

              // Reenable scripts
              jQuery.map(scripts, restoreScript);

              // Evaluate executable scripts on first document insertion
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") &&
                  !dataPriv.access(node, "globalEval") &&
                  jQuery.contains(doc, node)) {

                  if (node.src) {

                    // Optional AJAX dependency, but won't run scripts if not present
                    if (jQuery._evalUrl) {
                      jQuery._evalUrl(node.src);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), doc);
                  }
                }
              }
            }
          }
        }

        return collection;
      }

      function remove(elem, selector, keepData) {
        var node,
          nodes = selector ? jQuery.filter(selector, elem) : elem,
          i = 0;

        for (;
          (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node));
          }

          if (node.parentNode) {
            if (keepData && jQuery.contains(node.ownerDocument, node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }

        return elem;
      }

      jQuery.extend({
        htmlPrefilter: function(html) {
          return html.replace(rxhtmlTag, "<$1></$2>");
        },

        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements,
            clone = elem.cloneNode(true),
            inPage = jQuery.contains(elem.ownerDocument, elem);

          // Fix IE cloning issues
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
            !jQuery.isXMLDoc(elem)) {

            // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
            destElements = getAll(clone);
            srcElements = getAll(elem);

            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }

          // Copy the events from the original to the clone
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);

              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }

          // Preserve script evaluation history
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }

          // Return the cloned set
          return clone;
        },

        cleanData: function(elems) {
          var data, elem, type,
            special = jQuery.event.special,
            i = 0;

          for (;
            (elem = elems[i]) !== undefined; i++) {
            if (acceptData(elem)) {
              if ((data = elem[dataPriv.expando])) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type);

                      // This is a shortcut to avoid jQuery.event.remove's overhead
                    } else {
                      jQuery.removeEvent(elem, type, data.handle);
                    }
                  }
                }

                // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove
                elem[dataPriv.expando] = undefined;
              }
              if (elem[dataUser.expando]) {

                // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove
                elem[dataUser.expando] = undefined;
              }
            }
          }
        }
      });

      jQuery.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },

        remove: function(selector) {
          return remove(this, selector);
        },

        text: function(value) {
          return access(this, function(value) {
            return value === undefined ?
              jQuery.text(this) :
              this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value;
                }
              });
          }, null, value, arguments.length);
        },

        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },

        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },

        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },

        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },

        empty: function() {
          var elem,
            i = 0;

          for (;
            (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {

              // Prevent memory leaks
              jQuery.cleanData(getAll(elem, false));

              // Remove any remaining nodes
              elem.textContent = "";
            }
          }

          return this;
        },

        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

          return this.map(function() {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },

        html: function(value) {
          return access(this, function(value) {
            var elem = this[0] || {},
              i = 0,
              l = this.length;

            if (value === undefined && elem.nodeType === 1) {
              return elem.innerHTML;
            }

            // See if we can take a shortcut and just use innerHTML
            if (typeof value === "string" && !rnoInnerhtml.test(value) &&
              !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

              value = jQuery.htmlPrefilter(value);

              try {
                for (; i < l; i++) {
                  elem = this[i] || {};

                  // Remove element nodes and prevent memory leaks
                  if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.innerHTML = value;
                  }
                }

                elem = 0;

                // If using innerHTML throws an exception, use the fallback method
              } catch (e) {}
            }

            if (elem) {
              this.empty().append(value);
            }
          }, null, value, arguments.length);
        },

        replaceWith: function() {
          var ignored = [];

          // Make the changes, replacing each non-ignored context element with the new content
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;

            if (jQuery.inArray(this, ignored) < 0) {
              jQuery.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }

            // Force callback invocation
          }, ignored);
        }
      });

      jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery.fn[name] = function(selector) {
          var elems,
            ret = [],
            insert = jQuery(selector),
            last = insert.length - 1,
            i = 0;

          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems);

            // Support: Android <=4.0 only, PhantomJS 1 only
            // .get() because push.apply(_, arraylike) throws on ancient WebKit
            push.apply(ret, elems.get());
          }

          return this.pushStack(ret);
        };
      });
      var rmargin = (/^margin/);

      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

      var getStyles = function(elem) {

        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;

        if (!view || !view.opener) {
          view = window;
        }

        return view.getComputedStyle(elem);
      };



      (function() {

        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {

          // This is a singleton, we need to execute it only once
          if (!div) {
            return;
          }

          div.style.cssText =
            "box-sizing:border-box;" +
            "position:relative;display:block;" +
            "margin:auto;border:1px;padding:1px;" +
            "top:1%;width:50%";
          div.innerHTML = "";
          documentElement.appendChild(container);

          var divStyle = window.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";

          // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
          reliableMarginLeftVal = divStyle.marginLeft === "2px";
          boxSizingReliableVal = divStyle.width === "4px";

          // Support: Android 4.0 - 4.3 only
          // Some styles come back with percentage values, even though they shouldn't
          div.style.marginRight = "50%";
          pixelMarginRightVal = divStyle.marginRight === "4px";

          documentElement.removeChild(container);

          // Nullify the div so it wouldn't be stored in the memory and
          // it will also be a sign that checks already performed
          div = null;
        }

        var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
          container = document.createElement("div"),
          div = document.createElement("div");

        // Finish early in limited (non-browser) environments
        if (!div.style) {
          return;
        }

        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (#8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";

        container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
          "padding:0;margin-top:1px;position:absolute";
        container.appendChild(div);

        jQuery.extend(support, {
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelMarginRight: function() {
            computeStyleTests();
            return pixelMarginRightVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          }
        });
      })();


      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret,

          // Support: Firefox 51+
          // Retrieving style before computed somehow
          // fixes an issue with getting wrong values
          // on detached elements
          style = elem.style;

        computed = computed || getStyles(elem);

        // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, #12537)
        //   .css('--customProperty) (#3144)
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];

          if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
            ret = jQuery.style(elem, name);
          }

          // A tribute to the "awesome hack by Dean Edwards"
          // Android Browser returns percentage for some values,
          // but width seems to be reliably pixels.
          // This is against the CSSOM draft spec:
          // https://drafts.csswg.org/cssom/#resolved-values
          if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

            // Remember the original values
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;

            // Put in the new values to get a computed value out
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;

            // Revert the changed values
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }

        return ret !== undefined ?

          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + "" :
          ret;
      }


      function addGetHookIf(conditionFn, hookFn) {

        // Define the hook, we'll check on the first run if it's really needed.
        return {
          get: function() {
            if (conditionFn()) {

              // Hook not needed (or it's not possible to use it due
              // to missing dependency), remove it.
              delete this.get;
              return;
            }

            // Hook needed; redefine it so that the support test is not executed again.
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }


      var

      // Swappable if display is none or starts with table
      // except "table", "table-cell", or "table-caption"
      // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rcustomProp = /^--/,
        cssShow = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        },

        cssPrefixes = ["Webkit", "Moz", "ms"],
        emptyStyle = document.createElement("div").style;

      // Return a css property mapped to a potentially vendor prefixed property
      function vendorPropName(name) {

        // Shortcut for names that are not vendor prefixed
        if (name in emptyStyle) {
          return name;
        }

        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1),
          i = cssPrefixes.length;

        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }

      // Return a property mapped along what jQuery.cssProps suggests or to
      // a vendor prefixed property.
      function finalPropName(name) {
        var ret = jQuery.cssProps[name];
        if (!ret) {
          ret = jQuery.cssProps[name] = vendorPropName(name) || name;
        }
        return ret;
      }

      function setPositiveNumber(elem, value, subtract) {

        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ?

          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") :
          value;
      }

      function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i,
          val = 0;

        // If we already have the right measurement, avoid augmentation
        if (extra === (isBorderBox ? "border" : "content")) {
          i = 4;

          // Otherwise initialize for horizontal or vertical properties
        } else {
          i = name === "width" ? 1 : 0;
        }

        for (; i < 4; i += 2) {

          // Both box models exclude margin, so add it if we want it
          if (extra === "margin") {
            val += jQuery.css(elem, extra + cssExpand[i], true, styles);
          }

          if (isBorderBox) {

            // border-box includes padding, so remove it if we want content
            if (extra === "content") {
              val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            }

            // At this point, extra isn't border nor margin, so remove border
            if (extra !== "margin") {
              val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {

            // At this point, extra isn't content, so add padding
            val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

            // At this point, extra isn't content nor padding, so add border
            if (extra !== "padding") {
              val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }

        return val;
      }

      function getWidthOrHeight(elem, name, extra) {

        // Start with computed style
        var valueIsBorderBox,
          styles = getStyles(elem),
          val = curCSS(elem, name, styles),
          isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

        // Computed unit is not pixels. Stop here and return.
        if (rnumnonpx.test(val)) {
          return val;
        }

        // Check for style in case a browser which returns unreliable values
        // for getComputedStyle silently falls back to the reliable elem.style
        valueIsBorderBox = isBorderBox &&
          (support.boxSizingReliable() || val === elem.style[name]);

        // Fall back to offsetWidth/Height when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        if (val === "auto") {
          val = elem["offset" + name[0].toUpperCase() + name.slice(1)];
        }

        // Normalize "", auto, and prepare for extra
        val = parseFloat(val) || 0;

        // Use the active box-sizing model to add/subtract irrelevant styles
        return (val +
          augmentWidthOrHeight(
            elem,
            name,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles
          )
        ) + "px";
      }

      jQuery.extend({

        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {

                // We should always get a number back from opacity
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },

        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          "animationIterationCount": true,
          "columnCount": true,
          "fillOpacity": true,
          "flexGrow": true,
          "flexShrink": true,
          "fontWeight": true,
          "lineHeight": true,
          "opacity": true,
          "order": true,
          "orphans": true,
          "widows": true,
          "zIndex": true,
          "zoom": true
        },

        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
          "float": "cssFloat"
        },

        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {

          // Don't set styles on text and comment nodes
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }

          // Make sure that we're working with the right name
          var ret, type, hooks,
            origName = jQuery.camelCase(name),
            isCustomProp = rcustomProp.test(name),
            style = elem.style;

          // Make sure that we're working with the right name. We don't
          // want to query the value if it is a CSS custom property
          // since they are user-defined.
          if (!isCustomProp) {
            name = finalPropName(origName);
          }

          // Gets hook for the prefixed version, then unprefixed version
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

          // Check if we're setting a value
          if (value !== undefined) {
            type = typeof value;

            // Convert "+=" or "-=" to relative numbers (#7345)
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);

              // Fixes bug #9237
              type = "number";
            }

            // Make sure that null and NaN values aren't set (#7116)
            if (value == null || value !== value) {
              return;
            }

            // If a number was passed in, add the unit (except for certain CSS properties)
            if (type === "number") {
              value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
            }

            // background-* props affect original clone's values
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }

            // If a hook was provided, use that value, otherwise just set the specified value
            if (!hooks || !("set" in hooks) ||
              (value = hooks.set(elem, value, extra)) !== undefined) {

              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }

          } else {

            // If a hook was provided get the non-computed value from there
            if (hooks && "get" in hooks &&
              (ret = hooks.get(elem, false, extra)) !== undefined) {

              return ret;
            }

            // Otherwise just get the value from the style object
            return style[name];
          }
        },

        css: function(elem, name, extra, styles) {
          var val, num, hooks,
            origName = jQuery.camelCase(name),
            isCustomProp = rcustomProp.test(name);

          // Make sure that we're working with the right name. We don't
          // want to modify the value if it is a CSS custom property
          // since they are user-defined.
          if (!isCustomProp) {
            name = finalPropName(origName);
          }

          // Try prefixed name followed by the unprefixed name
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

          // If a hook was provided get the computed value from there
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }

          // Otherwise, if a way to get the computed value exists, use that
          if (val === undefined) {
            val = curCSS(elem, name, styles);
          }

          // Convert "normal" to computed value
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }

          // Make numeric if forced or a qualifier was provided and val looks numeric
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }

          return val;
        }
      });

      jQuery.each(["height", "width"], function(i, name) {
        jQuery.cssHooks[name] = {
          get: function(elem, computed, extra) {
            if (computed) {

              // Certain elements can have dimension info if we invisibly show them
              // but it must have a current display style that would benefit
              return rdisplayswap.test(jQuery.css(elem, "display")) &&

                // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ?
                swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, name, extra);
                }) :
                getWidthOrHeight(elem, name, extra);
            }
          },

          set: function(elem, value, extra) {
            var matches,
              styles = extra && getStyles(elem),
              subtract = extra && augmentWidthOrHeight(
                elem,
                name,
                extra,
                jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                styles
              );

            // Convert to pixels if value adjustment is needed
            if (subtract && (matches = rcssNum.exec(value)) &&
              (matches[3] || "px") !== "px") {

              elem.style[name] = value;
              value = jQuery.css(elem, name);
            }

            return setPositiveNumber(elem, value, subtract);
          }
        };
      });

      jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,
        function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) ||
              elem.getBoundingClientRect().left -
              swap(elem, {
                marginLeft: 0
              }, function() {
                return elem.getBoundingClientRect().left;
              })
            ) + "px";
          }
        }
      );

      // These hooks are used by animate to expand properties
      jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0,
              expanded = {},

              // Assumes a single number if not a string
              parts = typeof value === "string" ? value.split(" ") : [value];

            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] =
                parts[i] || parts[i - 2] || parts[0];
            }

            return expanded;
          }
        };

        if (!rmargin.test(prefix)) {
          jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });

      jQuery.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name, value) {
            var styles, len,
              map = {},
              i = 0;

            if (Array.isArray(name)) {
              styles = getStyles(elem);
              len = name.length;

              for (; i < len; i++) {
                map[name[i]] = jQuery.css(elem, name[i], false, styles);
              }

              return map;
            }

            return value !== undefined ?
              jQuery.style(elem, name, value) :
              jQuery.css(elem, name);
          }, name, value, arguments.length > 1);
        }
      });


      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery.Tween = Tween;

      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];

          return hooks && hooks.get ?
            hooks.get(this) :
            Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased,
            hooks = Tween.propHooks[this.prop];

          if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](
              percent, this.options.duration * percent, 0, 1, this.options.duration
            );
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;

          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }

          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };

      Tween.prototype.init.prototype = Tween.prototype;

      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;

            // Use a property on the element directly when it is not a DOM element,
            // or when there is no matching style property that exists.
            if (tween.elem.nodeType !== 1 ||
              tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }

            // Passing an empty string as a 3rd parameter to .css will automatically
            // attempt a parseFloat and fallback to a string if the parse fails.
            // Simple values such as "10px" are parsed to Float;
            // complex values such as "rotate(1rad)" are returned as-is.
            result = jQuery.css(tween.elem, tween.prop, "");

            // Empty strings, null, undefined and "auto" are converted to 0.
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {

            // Use step hook for back compat.
            // Use cssHook if its there.
            // Use .style if available and use plain properties where available.
            if (jQuery.fx.step[tween.prop]) {
              jQuery.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 &&
              (tween.elem.style[jQuery.cssProps[tween.prop]] != null ||
                jQuery.cssHooks[tween.prop])) {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };

      // Support: IE <=9 only
      // Panic based approach to setting things on disconnected nodes
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };

      jQuery.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };

      jQuery.fx = Tween.prototype.init;

      // Back compat <1.8 extension point
      jQuery.fx.step = {};




      var
        fxNow, inProgress,
        rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;

      function schedule() {
        if (inProgress) {
          if (document.hidden === false && window.requestAnimationFrame) {
            window.requestAnimationFrame(schedule);
          } else {
            window.setTimeout(schedule, jQuery.fx.interval);
          }

          jQuery.fx.tick();
        }
      }

      // Animations created synchronously will run synchronously
      function createFxNow() {
        window.setTimeout(function() {
          fxNow = undefined;
        });
        return (fxNow = jQuery.now());
      }

      // Generate parameters to create a standard animation
      function genFx(type, includeWidth) {
        var which,
          i = 0,
          attrs = {
            height: type
          };

        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }

        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }

        return attrs;
      }

      function createTween(value, prop, animation) {
        var tween,
          collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
          index = 0,
          length = collection.length;
        for (; index < length; index++) {
          if ((tween = collection[index].call(animation, prop, value))) {

            // We're done with this property
            return tween;
          }
        }
      }

      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
          isBox = "width" in props || "height" in props,
          anim = this,
          orig = {},
          style = elem.style,
          hidden = elem.nodeType && isHiddenWithinTree(elem),
          dataShow = dataPriv.get(elem, "fxshow");

        // Queue-skipping animations hijack the fx hooks
        if (!opts.queue) {
          hooks = jQuery._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;

          anim.always(function() {

            // Ensure the complete handler is called before this completes
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }

        // Detect show/hide animations
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {

              // Pretend to be hidden if this is a "show" and
              // there is still data from a stopped show/hide
              if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                hidden = true;

                // Ignore all other no-op show/hide data
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          }
        }

        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
          return;
        }

        // Restrict "overflow" and "display" styles during box animations
        if (isBox && elem.nodeType === 1) {

          // Support: IE <=9 - 11, Edge 12 - 13
          // Record all 3 overflow attributes because IE does not infer the shorthand
          // from identically-valued overflowX and overflowY
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];

          // Identify a display type, preferring old show/hide data over the CSS cascade
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {

              // Get nonempty value(s) by temporarily forcing visibility
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery.css(elem, "display");
              showHide([elem]);
            }
          }

          // Animate inline elements as inline-block
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {

              // Restore the original display value at the end of pure show/hide animations
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }

        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }

        // Implement show/hide animations
        propTween = false;
        for (prop in orig) {

          // General show/hide setup for this element animation
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", {
                display: restoreDisplay
              });
            }

            // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
            if (toggle) {
              dataShow.hidden = !hidden;
            }

            // Show elements before animating them
            if (hidden) {
              showHide([elem], true);
            }

            /* eslint-disable no-loop-func */

            anim.done(function() {

              /* eslint-enable no-loop-func */

              // The final step of a "hide" animation is actually hiding the element
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery.style(elem, prop, orig[prop]);
              }
            });
          }

          // Per-property setup
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }

      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;

        // camelCase, specialEasing and expand cssHook pass
        for (index in props) {
          name = jQuery.camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }

          if (index !== name) {
            props[name] = value;
            delete props[index];
          }

          hooks = jQuery.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];

            // Not quite $.extend, this won't overwrite existing keys.
            // Reusing 'index' because we have the correct "name"
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }

      function Animation(elem, properties, options) {
        var result,
          stopped,
          index = 0,
          length = Animation.prefilters.length,
          deferred = jQuery.Deferred().always(function() {

            // Don't match elem in the :animated selector
            delete tick.elem;
          }),
          tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(),
              remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

              // Support: Android 2.3 only
              // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
              temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;

            for (; index < length; index++) {
              animation.tweens[index].run(percent);
            }

            deferred.notifyWith(elem, [animation, percent, remaining]);

            // If there's more to do, yield
            if (percent < 1 && length) {
              return remaining;
            }

            // If this was an empty animation, synthesize a final progress notification
            if (!length) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }

            // Resolve the animation and report its conclusion
            deferred.resolveWith(elem, [animation]);
            return false;
          },
          animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery.Tween(elem, animation.opts, prop, end,
                animation.opts.specialEasing[prop] || animation.opts.easing);
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index = 0,

                // If we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                length = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index < length; index++) {
                animation.tweens[index].run(1);
              }

              // Resolve when we played the last frame; otherwise, reject
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }),
          props = animation.props;

        propFilter(props, animation.opts.specialEasing);

        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (jQuery.isFunction(result.stop)) {
              jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
                jQuery.proxy(result.stop, result);
            }
            return result;
          }
        }

        jQuery.map(props, createTween, animation);

        if (jQuery.isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }

        // Attach callbacks from options
        animation
          .progress(animation.opts.progress)
          .done(animation.opts.done, animation.opts.complete)
          .fail(animation.opts.fail)
          .always(animation.opts.always);

        jQuery.fx.timer(
          jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
          })
        );

        return animation;
      }

      jQuery.Animation = jQuery.extend(Animation, {

        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },

        tweener: function(props, callback) {
          if (jQuery.isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }

          var prop,
            index = 0,
            length = props.length;

          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },

        prefilters: [defaultPrefilter],

        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });

      jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
          complete: fn || !fn && easing ||
            jQuery.isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };

        // Go to the end state if fx are off
        if (jQuery.fx.off) {
          opt.duration = 0;

        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) {
              opt.duration = jQuery.fx.speeds[opt.duration];

            } else {
              opt.duration = jQuery.fx.speeds._default;
            }
          }
        }

        // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }

        // Queueing
        opt.old = opt.complete;

        opt.complete = function() {
          if (jQuery.isFunction(opt.old)) {
            opt.old.call(this);
          }

          if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
          }
        };

        return opt;
      };

      jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {

          // Show any hidden elements after setting opacity to 0
          return this.filter(isHiddenWithinTree).css("opacity", 0).show()

          // Animate to the value specified
          .end().animate({
            opacity: to
          }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop),
            optall = jQuery.speed(speed, easing, callback),
            doAnimation = function() {

              // Operate on a copy of prop so per-property easing won't be lost
              var anim = Animation(this, jQuery.extend({}, prop), optall);

              // Empty animations, or finishing resolves immediately
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
          doAnimation.finish = doAnimation;

          return empty || optall.queue === false ?
            this.each(doAnimation) :
            this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };

          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = undefined;
          }
          if (clearQueue && type !== false) {
            this.queue(type || "fx", []);
          }

          return this.each(function() {
            var dequeue = true,
              index = type != null && type + "queueHooks",
              timers = jQuery.timers,
              data = dataPriv.get(this);

            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }

            for (index = timers.length; index--;) {
              if (timers[index].elem === this &&
                (type == null || timers[index].queue === type)) {

                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }

            // Start the next in the queue if the last step wasn't forced.
            // Timers currently will call their complete callbacks, which
            // will dequeue but only if they were gotoEnd.
            if (dequeue || !gotoEnd) {
              jQuery.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index,
              data = dataPriv.get(this),
              queue = data[type + "queue"],
              hooks = data[type + "queueHooks"],
              timers = jQuery.timers,
              length = queue ? queue.length : 0;

            // Enable finishing flag on private data
            data.finish = true;

            // Empty the queue first
            jQuery.queue(this, type, []);

            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }

            // Look for any active animations, and finish them
            for (index = timers.length; index--;) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }

            // Look for any animations in the old queue and finish them
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }

            // Turn off finishing flag
            delete data.finish;
          });
        }
      });

      jQuery.each(["toggle", "show", "hide"], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ?
            cssFn.apply(this, arguments) :
            this.animate(genFx(name, true), speed, easing, callback);
        };
      });

      // Generate shortcuts for custom animations
      jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });

      jQuery.timers = [];
      jQuery.fx.tick = function() {
        var timer,
          i = 0,
          timers = jQuery.timers;

        fxNow = jQuery.now();

        for (; i < timers.length; i++) {
          timer = timers[i];

          // Run the timer and safely remove it when done (allowing for external removal)
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }

        if (!timers.length) {
          jQuery.fx.stop();
        }
        fxNow = undefined;
      };

      jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
      };

      jQuery.fx.interval = 13;
      jQuery.fx.start = function() {
        if (inProgress) {
          return;
        }

        inProgress = true;
        schedule();
      };

      jQuery.fx.stop = function() {
        inProgress = null;
      };

      jQuery.fx.speeds = {
        slow: 600,
        fast: 200,

        // Default speed
        _default: 400
      };


      // Based off of the plugin by Clint Helfers, with permission.
      // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
      jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";

        return this.queue(type, function(next, hooks) {
          var timeout = window.setTimeout(next, time);
          hooks.stop = function() {
            window.clearTimeout(timeout);
          };
        });
      };


      (function() {
        var input = document.createElement("input"),
          select = document.createElement("select"),
          opt = select.appendChild(document.createElement("option"));

        input.type = "checkbox";

        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";

        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;

        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();


      var boolHook,
        attrHandle = jQuery.expr.attrHandle;

      jQuery.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery.attr, name, value, arguments.length > 1);
        },

        removeAttr: function(name) {
          return this.each(function() {
            jQuery.removeAttr(this, name);
          });
        }
      });

      jQuery.extend({
        attr: function(elem, name, value) {
          var ret, hooks,
            nType = elem.nodeType;

          // Don't get/set attributes on text, comment and attribute nodes
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }

          // Fallback to prop when attributes are not supported
          if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value);
          }

          // Attribute hooks are determined by the lowercase version
          // Grab necessary hook if one is defined
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks = jQuery.attrHooks[name.toLowerCase()] ||
              (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
          }

          if (value !== undefined) {
            if (value === null) {
              jQuery.removeAttr(elem, name);
              return;
            }

            if (hooks && "set" in hooks &&
              (ret = hooks.set(elem, value, name)) !== undefined) {
              return ret;
            }

            elem.setAttribute(name, value + "");
            return value;
          }

          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }

          ret = jQuery.find.attr(elem, name);

          // Non-existent attributes return null, we normalize to undefined
          return ret == null ? undefined : ret;
        },

        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" &&
                nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },

        removeAttr: function(elem, value) {
          var name,
            i = 0,

            // Attribute names can contain non-HTML whitespace characters
            // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
            attrNames = value && value.match(rnothtmlwhite);

          if (attrNames && elem.nodeType === 1) {
            while ((name = attrNames[i++])) {
              elem.removeAttribute(name);
            }
          }
        }
      });

      // Hooks for boolean attributes
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {

            // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };

      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;

        attrHandle[name] = function(elem, name, isXML) {
          var ret, handle,
            lowercaseName = name.toLowerCase();

          if (!isXML) {

            // Avoid an infinite loop by temporarily removing this function from the getter
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name, isXML) != null ?
              lowercaseName :
              null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });




      var rfocusable = /^(?:input|select|textarea|button)$/i,
        rclickable = /^(?:a|area)$/i;

      jQuery.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery.prop, name, value, arguments.length > 1);
        },

        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery.propFix[name] || name];
          });
        }
      });

      jQuery.extend({
        prop: function(elem, name, value) {
          var ret, hooks,
            nType = elem.nodeType;

          // Don't get/set properties on text, comment and attribute nodes
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }

          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

            // Fix name and attach hooks
            name = jQuery.propFix[name] || name;
            hooks = jQuery.propHooks[name];
          }

          if (value !== undefined) {
            if (hooks && "set" in hooks &&
              (ret = hooks.set(elem, value, name)) !== undefined) {
              return ret;
            }

            return (elem[name] = value);
          }

          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }

          return elem[name];
        },

        propHooks: {
          tabIndex: {
            get: function(elem) {

              // Support: IE <=9 - 11 only
              // elem.tabIndex doesn't always return the
              // correct value when it hasn't been explicitly set
              // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
              // Use proper attribute retrieval(#12072)
              var tabindex = jQuery.find.attr(elem, "tabindex");

              if (tabindex) {
                return parseInt(tabindex, 10);
              }

              if (
                rfocusable.test(elem.nodeName) ||
                rclickable.test(elem.nodeName) &&
                elem.href
              ) {
                return 0;
              }

              return -1;
            }
          }
        },

        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });

      // Support: IE <=11 only
      // Accessing the selectedIndex property
      // forces the browser to respect setting selected
      // on the option
      // The getter ensures a default option is selected
      // when in an optgroup
      // eslint rule "no-unused-expressions" is disabled for this code
      // since it considers such accessions noop
      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          get: function(elem) {

            /* eslint no-unused-expressions: "off" */

            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {

            /* eslint no-unused-expressions: "off" */

            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;

              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }

      jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
      });




      // Strip and collapse whitespace according to HTML spec
      // https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }


      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }

      jQuery.fn.extend({
        addClass: function(value) {
          var classes, elem, cur, curValue, clazz, j, finalValue,
            i = 0;

          if (jQuery.isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
          }

          if (typeof value === "string" && value) {
            classes = value.match(rnothtmlwhite) || [];

            while ((elem = this[i++])) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

              if (cur) {
                j = 0;
                while ((clazz = classes[j++])) {
                  if (cur.indexOf(" " + clazz + " ") < 0) {
                    cur += clazz + " ";
                  }
                }

                // Only assign if different to avoid unneeded rendering.
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }

          return this;
        },

        removeClass: function(value) {
          var classes, elem, cur, curValue, clazz, j, finalValue,
            i = 0;

          if (jQuery.isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
          }

          if (!arguments.length) {
            return this.attr("class", "");
          }

          if (typeof value === "string" && value) {
            classes = value.match(rnothtmlwhite) || [];

            while ((elem = this[i++])) {
              curValue = getClass(elem);

              // This expression is here for better compressibility (see addClass)
              cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

              if (cur) {
                j = 0;
                while ((clazz = classes[j++])) {

                  // Remove *all* instances
                  while (cur.indexOf(" " + clazz + " ") > -1) {
                    cur = cur.replace(" " + clazz + " ", " ");
                  }
                }

                // Only assign if different to avoid unneeded rendering.
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }

          return this;
        },

        toggleClass: function(value, stateVal) {
          var type = typeof value;

          if (typeof stateVal === "boolean" && type === "string") {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }

          if (jQuery.isFunction(value)) {
            return this.each(function(i) {
              jQuery(this).toggleClass(
                value.call(this, i, getClass(this), stateVal),
                stateVal
              );
            });
          }

          return this.each(function() {
            var className, i, self, classNames;

            if (type === "string") {

              // Toggle individual class names
              i = 0;
              self = jQuery(this);
              classNames = value.match(rnothtmlwhite) || [];

              while ((className = classNames[i++])) {

                // Check each className given, space separated list
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              }

              // Toggle whole class name
            } else if (value === undefined || type === "boolean") {
              className = getClass(this);
              if (className) {

                // Store className if set
                dataPriv.set(this, "__className__", className);
              }

              // If the element has a class name or if we're passed `false`,
              // then remove the whole classname (if there was one, the above saved it).
              // Otherwise bring back whatever was previously saved (if anything),
              // falling back to the empty string if nothing was stored.
              if (this.setAttribute) {
                this.setAttribute("class",
                  className || value === false ?
                  "" :
                  dataPriv.get(this, "__className__") || ""
                );
              }
            }
          });
        },

        hasClass: function(selector) {
          var className, elem,
            i = 0;

          className = " " + selector + " ";
          while ((elem = this[i++])) {
            if (elem.nodeType === 1 &&
              (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }

          return false;
        }
      });




      var rreturn = /\r/g;

      jQuery.fn.extend({
        val: function(value) {
          var hooks, ret, isFunction,
            elem = this[0];

          if (!arguments.length) {
            if (elem) {
              hooks = jQuery.valHooks[elem.type] ||
                jQuery.valHooks[elem.nodeName.toLowerCase()];

              if (hooks &&
                "get" in hooks &&
                (ret = hooks.get(elem, "value")) !== undefined
              ) {
                return ret;
              }

              ret = elem.value;

              // Handle most common string cases
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }

              // Handle cases where value is null/undef or number
              return ret == null ? "" : ret;
            }

            return;
          }

          isFunction = jQuery.isFunction(value);

          return this.each(function(i) {
            var val;

            if (this.nodeType !== 1) {
              return;
            }

            if (isFunction) {
              val = value.call(this, i, jQuery(this).val());
            } else {
              val = value;
            }

            // Treat null/undefined as ""; convert numbers to string
            if (val == null) {
              val = "";

            } else if (typeof val === "number") {
              val += "";

            } else if (Array.isArray(val)) {
              val = jQuery.map(val, function(value) {
                return value == null ? "" : value + "";
              });
            }

            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

            // If set returns undefined, fall back to normal setting
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
              this.value = val;
            }
          });
        }
      });

      jQuery.extend({
        valHooks: {
          option: {
            get: function(elem) {

              var val = jQuery.find.attr(elem, "value");
              return val != null ?
                val :

                // Support: IE <=10 - 11 only
                // option.text throws exceptions (#14686, #14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery.text(elem));
            }
          },
          select: {
            get: function(elem) {
              var value, option, i,
                options = elem.options,
                index = elem.selectedIndex,
                one = elem.type === "select-one",
                values = one ? null : [],
                max = one ? index + 1 : options.length;

              if (index < 0) {
                i = max;

              } else {
                i = one ? index : 0;
              }

              // Loop through all the selected options
              for (; i < max; i++) {
                option = options[i];

                // Support: IE <=9 only
                // IE8-9 doesn't update selected after form reset (#2551)
                if ((option.selected || i === index) &&

                  // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled &&
                  (!option.parentNode.disabled ||
                    !nodeName(option.parentNode, "optgroup"))) {

                  // Get the specific value for the option
                  value = jQuery(option).val();

                  // We don't need an array for one selects
                  if (one) {
                    return value;
                  }

                  // Multi-Selects return an array
                  values.push(value);
                }
              }

              return values;
            },

            set: function(elem, value) {
              var optionSet, option,
                options = elem.options,
                values = jQuery.makeArray(value),
                i = options.length;

              while (i--) {
                option = options[i];

                /* eslint-disable no-cond-assign */

                if (option.selected =
                  jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1
                ) {
                  optionSet = true;
                }

                /* eslint-enable no-cond-assign */
              }

              // Force browsers to behave consistently when non-matching value is set
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });

      // Radios and checkboxes getter/setter
      jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
            }
          }
        };
        if (!support.checkOn) {
          jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });




      // Return jQuery for attributes-only inclusion


      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

      jQuery.extend(jQuery.event, {

        trigger: function(event, data, elem, onlyHandlers) {

          var i, cur, tmp, bubbleType, ontype, handle, special,
            eventPath = [elem || document],
            type = hasOwn.call(event, "type") ? event.type : event,
            namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

          cur = tmp = elem = elem || document;

          // Don't do events on text and comment nodes
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }

          // focus/blur morphs to focusin/out; ensure we're not firing them right now
          if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return;
          }

          if (type.indexOf(".") > -1) {

            // Namespaced trigger; create a regexp to match event type in handle()
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;

          // Caller can pass in a jQuery.Event object, Object, or just an event type string
          event = event[jQuery.expando] ?
            event :
            new jQuery.Event(type, typeof event === "object" && event);

          // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ?
            new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
            null;

          // Clean up the event in case it is being reused
          event.result = undefined;
          if (!event.target) {
            event.target = elem;
          }

          // Clone any incoming data and prepend the event, creating the handler arg list
          data = data == null ? [event] :
            jQuery.makeArray(data, [event]);

          // Allow special events to draw outside the lines
          special = jQuery.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }

          // Determine event propagation path in advance, per W3C events spec (#9951)
          // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
          if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }

            // Only add window if we got to document (e.g., not plain obj or detached DOM)
            if (tmp === (elem.ownerDocument || document)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window);
            }
          }

          // Fire handlers on the event path
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

            event.type = i > 1 ?
              bubbleType :
              special.bindType || type;

            // jQuery handler
            handle = (dataPriv.get(cur, "events") || {})[event.type] &&
              dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }

            // Native handler
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;

          // If nobody prevented the default action, do it now
          if (!onlyHandlers && !event.isDefaultPrevented()) {

            if ((!special._default ||
                special._default.apply(eventPath.pop(), data) === false) &&
              acceptData(elem)) {

              // Call a native DOM method on the target with the same name as the event.
              // Don't do default actions on window, that's where global variables be (#6170)
              if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

                // Don't re-trigger an onFOO event when we call its FOO() method
                tmp = elem[ontype];

                if (tmp) {
                  elem[ontype] = null;
                }

                // Prevent re-triggering of the same event, since we already bubbled it above
                jQuery.event.triggered = type;
                elem[type]();
                jQuery.event.triggered = undefined;

                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }

          return event.result;
        },

        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
          var e = jQuery.extend(
            new jQuery.Event(),
            event, {
              type: type,
              isSimulated: true
            }
          );

          jQuery.event.trigger(e, null, elem);
        }

      });

      jQuery.fn.extend({

        trigger: function(type, data) {
          return this.each(function() {
            jQuery.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery.event.trigger(type, data, elem, true);
          }
        }
      });


      jQuery.each(("blur focus focusin focusout resize scroll click dblclick " +
          "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
          "change select submit keydown keypress keyup contextmenu").split(" "),
        function(i, name) {

          // Handle event binding
          jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ?
              this.on(name, null, data, fn) :
              this.trigger(name);
          };
        });

      jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
      });




      support.focusin = "onfocusin" in window;


      // Support: Firefox <=44
      // Firefox doesn't have focus(in | out) events
      // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
      //
      // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
      // focus(in | out) events fire after focus & blur events,
      // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
      // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
      if (!support.focusin) {
        jQuery.each({
          focus: "focusin",
          blur: "focusout"
        }, function(orig, fix) {

          // Attach a single capturing handler on the document while someone wants focusin/focusout
          var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
          };

          jQuery.event.special[fix] = {
            setup: function() {
              var doc = this.ownerDocument || this,
                attaches = dataPriv.access(doc, fix);

              if (!attaches) {
                doc.addEventListener(orig, handler, true);
              }
              dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this,
                attaches = dataPriv.access(doc, fix) - 1;

              if (!attaches) {
                doc.removeEventListener(orig, handler, true);
                dataPriv.remove(doc, fix);

              } else {
                dataPriv.access(doc, fix, attaches);
              }
            }
          };
        });
      }
      var location = window.location;

      var nonce = jQuery.now();

      var rquery = (/\?/);



      // Cross-browser xml parsing
      jQuery.parseXML = function(data) {
        var xml;
        if (!data || typeof data !== "string") {
          return null;
        }

        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
          xml = (new window.DOMParser()).parseFromString(data, "text/xml");
        } catch (e) {
          xml = undefined;
        }

        if (!xml || xml.getElementsByTagName("parsererror").length) {
          jQuery.error("Invalid XML: " + data);
        }
        return xml;
      };


      var
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

      function buildParams(prefix, obj, traditional, add) {
        var name;

        if (Array.isArray(obj)) {

          // Serialize array item.
          jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {

              // Treat each array item as a scalar.
              add(prefix, v);

            } else {

              // Item is non-scalar (array or object), encode its numeric index.
              buildParams(
                prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                v,
                traditional,
                add
              );
            }
          });

        } else if (!traditional && jQuery.type(obj) === "object") {

          // Serialize object item.
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }

        } else {

          // Serialize scalar item.
          add(prefix, obj);
        }
      }

      // Serialize an array of form elements or a set of
      // key/values into a query string
      jQuery.param = function(a, traditional) {
        var prefix,
          s = [],
          add = function(key, valueOrFunction) {

            // If value is a function, invoke it and use its return value
            var value = jQuery.isFunction(valueOrFunction) ?
              valueOrFunction() :
              valueOrFunction;

            s[s.length] = encodeURIComponent(key) + "=" +
              encodeURIComponent(value == null ? "" : value);
          };

        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {

          // Serialize the form elements
          jQuery.each(a, function() {
            add(this.name, this.value);
          });

        } else {

          // If traditional, encode the "old" way (the way 1.3.2 or older
          // did it), otherwise encode params recursively.
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }

        // Return the resulting serialization
        return s.join("&");
      };

      jQuery.fn.extend({
        serialize: function() {
          return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {

              // Can add propHook for "elements" to filter or add form elements
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            })
            .filter(function() {
              var type = this.type;

              // Use .is( ":disabled" ) so that fieldset[disabled] works
              return this.name && !jQuery(this).is(":disabled") &&
                rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
                (this.checked || !rcheckableType.test(type));
            })
            .map(function(i, elem) {
              var val = jQuery(this).val();

              if (val == null) {
                return null;
              }

              if (Array.isArray(val)) {
                return jQuery.map(val, function(val) {
                  return {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                  };
                });
              }

              return {
                name: elem.name,
                value: val.replace(rCRLF, "\r\n")
              };
            }).get();
        }
      });


      var
        r20 = /%20/g,
        rhash = /#.*$/,
        rantiCache = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

        // #7653, #8125, #8152: local protocol detection
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,

        /* Prefilters
         * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
         * 2) These are called:
         *    - BEFORE asking for a transport
         *    - AFTER param serialization (s.data is a string if s.processData is true)
         * 3) key is the dataType
         * 4) the catchall symbol "*" can be used
         * 5) execution will start with transport dataType and THEN continue down to "*" if needed
         */
        prefilters = {},

        /* Transports bindings
         * 1) key is the dataType
         * 2) the catchall symbol "*" can be used
         * 3) selection will start with transport dataType and THEN go to "*" if needed
         */
        transports = {},

        // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        allTypes = "*/".concat("*"),

        // Anchor tag for parsing the document origin
        originAnchor = document.createElement("a");
      originAnchor.href = location.href;

      // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
      function addToPrefiltersOrTransports(structure) {

        // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {

          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }

          var dataType,
            i = 0,
            dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

          if (jQuery.isFunction(func)) {

            // For each dataType in the dataTypeExpression
            while ((dataType = dataTypes[i++])) {

              // Prepend if requested
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);

                // Otherwise append
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }

      // Base inspection function for prefilters and transports
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

        var inspected = {},
          seekingTransport = (structure === transports);

        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" &&
              !seekingTransport && !inspected[dataTypeOrTransport]) {

              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }

        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }

      // A special extend for ajax options
      // that takes "flat" options (not to be deep extended)
      // Fixes #9887
      function ajaxExtend(target, src) {
        var key, deep,
          flatOptions = jQuery.ajaxSettings.flatOptions || {};

        for (key in src) {
          if (src[key] !== undefined) {
            (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
          }
        }
        if (deep) {
          jQuery.extend(true, target, deep);
        }

        return target;
      }

      /* Handles responses to an ajax request:
       * - finds the right dataType (mediates between content-type and expected dataType)
       * - returns the corresponding response
       */
      function ajaxHandleResponses(s, jqXHR, responses) {

        var ct, type, finalDataType, firstDataType,
          contents = s.contents,
          dataTypes = s.dataTypes;

        // Remove auto dataType and get content-type in the process
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === undefined) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }

        // Check if we're dealing with a known content-type
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }

        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {

          // Try convertible dataTypes
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }

          // Or just use first one
          finalDataType = finalDataType || firstDataType;
        }

        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }

      /* Chain conversions given the request and the original response
       * Also sets the responseXXX fields on the jqXHR instance
       */
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev,
          converters = {},

          // Work with a copy of dataTypes in case we need to modify it for conversion
          dataTypes = s.dataTypes.slice();

        // Create converters map with lowercased keys
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }

        current = dataTypes.shift();

        // Convert to each sequential dataType
        while (current) {

          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }

          // Apply the dataFilter if provided
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }

          prev = current;
          current = dataTypes.shift();

          if (current) {

            // There's only work to do if current dataType is non-auto
            if (current === "*") {

              current = prev;

              // Convert response if prev dataType is non-auto and differs from current
            } else if (prev !== "*" && prev !== current) {

              // Seek a direct converter
              conv = converters[prev + " " + current] || converters["* " + current];

              // If none found, seek a pair
              if (!conv) {
                for (conv2 in converters) {

                  // If conv2 outputs current
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {

                    // If prev can be converted to accepted input
                    conv = converters[prev + " " + tmp[0]] ||
                      converters["* " + tmp[0]];
                    if (conv) {

                      // Condense equivalence converters
                      if (conv === true) {
                        conv = converters[conv2];

                        // Otherwise, insert the intermediate dataType
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }

              // Apply converter (if not an equivalence)
              if (conv !== true) {

                // Unless errors are allowed to bubble, catch and return them
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }

        return {
          state: "success",
          data: response
        };
      }

      jQuery.extend({

        // Counter for holding the number of active queries
        active: 0,

        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},

        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",

          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */

          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },

          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },

          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },

          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {

            // Convert anything to text
            "* text": String,

            // Text to html (true = no transformation)
            "text html": true,

            // Evaluate text as a json expression
            "text json": JSON.parse,

            // Parse text as xml
            "text xml": jQuery.parseXML
          },

          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: true,
            context: true
          }
        },

        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
          return settings ?

            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

            // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
        },

        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),

        // Main method
        ajax: function(url, options) {

          // If url is an object, simulate pre-1.5 signature
          if (typeof url === "object") {
            options = url;
            url = undefined;
          }

          // Force options to be an object
          options = options || {};

          var transport,

            // URL without anti-cache param
            cacheURL,

            // Response headers
            responseHeadersString,
            responseHeaders,

            // timeout handle
            timeoutTimer,

            // Url cleanup var
            urlAnchor,

            // Request state (becomes false upon send and true upon completion)
            completed,

            // To know if global events are to be dispatched
            fireGlobals,

            // Loop variable
            i,

            // uncached part of the url
            uncached,

            // Create the final options object
            s = jQuery.ajaxSetup({}, options),

            // Callbacks context
            callbackContext = s.context || s,

            // Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context &&
            (callbackContext.nodeType || callbackContext.jquery) ?
            jQuery(callbackContext) :
            jQuery.event,

            // Deferreds
            deferred = jQuery.Deferred(),
            completeDeferred = jQuery.Callbacks("once memory"),

            // Status-dependent callbacks
            statusCode = s.statusCode || {},

            // Headers (they are sent all at once)
            requestHeaders = {},
            requestHeadersNames = {},

            // Default abort message
            strAbort = "canceled",

            // Fake xhr
            jqXHR = {
              readyState: 0,

              // Builds headers hashtable if needed
              getResponseHeader: function(key) {
                var match;
                if (completed) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while ((match = rheaders.exec(responseHeadersString))) {
                      responseHeaders[match[1].toLowerCase()] = match[2];
                    }
                  }
                  match = responseHeaders[key.toLowerCase()];
                }
                return match == null ? null : match;
              },

              // Raw string
              getAllResponseHeaders: function() {
                return completed ? responseHeadersString : null;
              },

              // Caches the header
              setRequestHeader: function(name, value) {
                if (completed == null) {
                  name = requestHeadersNames[name.toLowerCase()] =
                    requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },

              // Overrides response content-type header
              overrideMimeType: function(type) {
                if (completed == null) {
                  s.mimeType = type;
                }
                return this;
              },

              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed) {

                    // Execute the appropriate callbacks
                    jqXHR.always(map[jqXHR.status]);
                  } else {

                    // Lazy-add the new callbacks in a way that preserves old ones
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },

              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };

          // Attach deferreds
          deferred.promise(jqXHR);

          // Add protocol if not provided (prefilters might expect it)
          // Handle falsy url in the settings object (#10093: consistency with old signature)
          // We also use the url parameter if available
          s.url = ((url || s.url || location.href) + "")
            .replace(rprotocol, location.protocol + "//");

          // Alias method option to type as per ticket #12004
          s.type = options.method || options.type || s.method || s.type;

          // Extract dataTypes list
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

          // A cross-domain request is in order when the origin doesn't match the current origin.
          if (s.crossDomain == null) {
            urlAnchor = document.createElement("a");

            // Support: IE <=8 - 11, Edge 12 - 13
            // IE throws exception on accessing the href property if url is malformed,
            // e.g. http://example.com:80x/
            try {
              urlAnchor.href = s.url;

              // Support: IE <=8 - 11 only
              // Anchor's host property isn't correctly set when s.url is relative
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
                urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {

              // If there is an error parsing the URL, assume it is crossDomain,
              // it can be rejected by the transport if it is invalid
              s.crossDomain = true;
            }
          }

          // Convert data if not already a string
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery.param(s.data, s.traditional);
          }

          // Apply prefilters
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

          // If request was aborted inside a prefilter, stop there
          if (completed) {
            return jqXHR;
          }

          // We can fire global events as of now if asked to
          // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
          fireGlobals = jQuery.event && s.global;

          // Watch for a new set of requests
          if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart");
          }

          // Uppercase the type
          s.type = s.type.toUpperCase();

          // Determine if request has content
          s.hasContent = !rnoContent.test(s.type);

          // Save the URL in case we're toying with the If-Modified-Since
          // and/or If-None-Match header later on
          // Remove hash to simplify url manipulation
          cacheURL = s.url.replace(rhash, "");

          // More options handling for requests with no content
          if (!s.hasContent) {

            // Remember the hash so we can put it back
            uncached = s.url.slice(cacheURL.length);

            // If data is available, append data to url
            if (s.data) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

              // #9682: remove data so that it's not used in an eventual retry
              delete s.data;
            }

            // Add or update anti-cache param if needed
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce++) + uncached;
            }

            // Put hash and anti-cache on the URL that will be requested (gh-1732)
            s.url = cacheURL + uncached;

            // Change '%20' to '+' if this is encoded form body content (gh-2658)
          } else if (s.data && s.processData &&
            (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }

          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }
            if (jQuery.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
          }

          // Set the correct header, if data is being sent
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }

          // Set the Accepts header for the server, depending on the dataType
          jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
            s.accepts[s.dataTypes[0]] +
            (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
            s.accepts["*"]
          );

          // Check for headers option
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }

          // Allow custom headers/mimetypes and early abort
          if (s.beforeSend &&
            (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

            // Abort if not done already and return
            return jqXHR.abort();
          }

          // Aborting is no longer a cancellation
          strAbort = "abort";

          // Install callbacks on deferreds
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);

          // Get transport
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

          // If no transport, we auto-abort
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;

            // Send global event
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }

            // If request was aborted inside ajaxSend, stop there
            if (completed) {
              return jqXHR;
            }

            // Timeout
            if (s.async && s.timeout > 0) {
              timeoutTimer = window.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }

            try {
              completed = false;
              transport.send(requestHeaders, done);
            } catch (e) {

              // Rethrow post-completion exceptions
              if (completed) {
                throw e;
              }

              // Propagate others as results
              done(-1, e);
            }
          }

          // Callback for when everything is done
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified,
              statusText = nativeStatusText;

            // Ignore repeat invocations
            if (completed) {
              return;
            }

            completed = true;

            // Clear timeout if it exists
            if (timeoutTimer) {
              window.clearTimeout(timeoutTimer);
            }

            // Dereference transport for early garbage collection
            // (no matter how long the jqXHR object will be used)
            transport = undefined;

            // Cache response headers
            responseHeadersString = headers || "";

            // Set readyState
            jqXHR.readyState = status > 0 ? 4 : 0;

            // Determine if successful
            isSuccess = status >= 200 && status < 300 || status === 304;

            // Get response data
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }

            // Convert no matter what (that way responseXXX fields are always set)
            response = ajaxConvert(s, response, jqXHR, isSuccess);

            // If successful, handle type chaining
            if (isSuccess) {

              // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery.etag[cacheURL] = modified;
                }
              }

              // if no content
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";

                // if not modified
              } else if (status === 304) {
                statusText = "notmodified";

                // If we have data, let's convert it
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {

              // Extract error from statusText and normalize for non-aborts
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }

            // Set data for the fake xhr object
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";

            // Success/Error
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }

            // Status-dependent callbacks
            jqXHR.statusCode(statusCode);
            statusCode = undefined;

            if (fireGlobals) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
            }

            // Complete
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

              // Handle the global AJAX counter
              if (!(--jQuery.active)) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }

          return jqXHR;
        },

        getJSON: function(url, data, callback) {
          return jQuery.get(url, data, callback, "json");
        },

        getScript: function(url, callback) {
          return jQuery.get(url, undefined, callback, "script");
        }
      });

      jQuery.each(["get", "post"], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {

          // Shift arguments if data argument was omitted
          if (jQuery.isFunction(data)) {
            type = type || callback;
            callback = data;
            data = undefined;
          }

          // The url can be an options object (which then must have .url)
          return jQuery.ajax(jQuery.extend({
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback
          }, jQuery.isPlainObject(url) && url));
        };
      });


      jQuery._evalUrl = function(url) {
        return jQuery.ajax({
          url: url,

          // Make this explicit, since user can override this through ajaxSetup (#11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          "throws": true
        });
      };


      jQuery.fn.extend({
        wrapAll: function(html) {
          var wrap;

          if (this[0]) {
            if (jQuery.isFunction(html)) {
              html = html.call(this[0]);
            }

            // The elements to wrap the target around
            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }

            wrap.map(function() {
              var elem = this;

              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }

              return elem;
            }).append(this);
          }

          return this;
        },

        wrapInner: function(html) {
          if (jQuery.isFunction(html)) {
            return this.each(function(i) {
              jQuery(this).wrapInner(html.call(this, i));
            });
          }

          return this.each(function() {
            var self = jQuery(this),
              contents = self.contents();

            if (contents.length) {
              contents.wrapAll(html);

            } else {
              self.append(html);
            }
          });
        },

        wrap: function(html) {
          var isFunction = jQuery.isFunction(html);

          return this.each(function(i) {
            jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
          });
        },

        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });


      jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
      };
      jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };




      jQuery.ajaxSettings.xhr = function() {
        try {
          return new window.XMLHttpRequest();
        } catch (e) {}
      };

      var xhrSuccessStatus = {

          // File protocol always yields status code 0, assume 200
          0: 200,

          // Support: IE <=9 only
          // #1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        },
        xhrSupported = jQuery.ajaxSettings.xhr();

      support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
      support.ajax = xhrSupported = !!xhrSupported;

      jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;

        // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i,
                xhr = options.xhr();

              xhr.open(
                options.type,
                options.url,
                options.async,
                options.username,
                options.password
              );

              // Apply custom fields if provided
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }

              // Override mime type if needed
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }

              // X-Requested-With header
              // For cross-domain requests, seeing as conditions for a preflight are
              // akin to a jigsaw puzzle, we simply never set it to be sure.
              // (it can always be set on a per-request basis or even using ajaxSetup)
              // For same-domain requests, won't change header if already provided.
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }

              // Set headers
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }

              // Callback
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload =
                      xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {

                      // Support: IE <=9 only
                      // On a manual native abort, IE9 throws
                      // errors on any property access that is not readyState
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(

                          // File: protocol always yields status 0; see #8605, #14207
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,

                        // Support: IE <=9 only
                        // IE9 has no XHR2 but throws on binary (trac-11426)
                        // For XHR2 non-text, let the caller handle it (gh-2498)
                        (xhr.responseType || "text") !== "text" ||
                        typeof xhr.responseText !== "string" ? {
                          binary: xhr.response
                        } : {
                          text: xhr.responseText
                        },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };

              // Listen to events
              xhr.onload = callback();
              errorCallback = xhr.onerror = callback("error");

              // Support: IE 9 only
              // Use onreadystatechange to replace onabort
              // to handle uncaught aborts
              if (xhr.onabort !== undefined) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {

                  // Check readyState before timeout as it changes
                  if (xhr.readyState === 4) {

                    // Allow onerror to be called first,
                    // but that will not handle a native abort
                    // Also, save errorCallback to a variable
                    // as xhr.onerror cannot be accessed
                    window.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }

              // Create the abort callback
              callback = callback("abort");

              try {

                // Do send the request (this may raise an exception)
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {

                // #14683: Only rethrow if this hasn't been notified as an error yet
                if (callback) {
                  throw e;
                }
              }
            },

            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });




      // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
      jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });

      // Install script dataType
      jQuery.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, " +
            "application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery.globalEval(text);
            return text;
          }
        }
      });

      // Handle cache's special case and crossDomain
      jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });

      // Bind script tag hack transport
      jQuery.ajaxTransport("script", function(s) {

        // This transport only deals with cross domain requests
        if (s.crossDomain) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery("<script>").prop({
                charset: s.scriptCharset,
                src: s.url
              }).on(
                "load error",
                callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                }
              );

              // Use native DOM manipulation to avoid our domManip AJAX trickery
              document.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });




      var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;

      // Default jsonp settings
      jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
          this[callback] = true;
          return callback;
        }
      });

      // Detect, normalize options and install callbacks for jsonp requests
      jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {

        var callbackName, overwritten, responseContainer,
          jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
            "url" :
            typeof s.data === "string" &&
            (s.contentType || "")
            .indexOf("application/x-www-form-urlencoded") === 0 &&
            rjsonp.test(s.data) && "data"
          );

        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {

          // Get callback name, remembering preexisting value associated with it
          callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ?
            s.jsonpCallback() :
            s.jsonpCallback;

          // Insert callback into url or form data
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }

          // Use data converter to retrieve json after script execution
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };

          // Force json dataType
          s.dataTypes[0] = "json";

          // Install callback
          overwritten = window[callbackName];
          window[callbackName] = function() {
            responseContainer = arguments;
          };

          // Clean-up function (fires after converters)
          jqXHR.always(function() {

            // If previous value didn't exist - remove it
            if (overwritten === undefined) {
              jQuery(window).removeProp(callbackName);

              // Otherwise restore preexisting value
            } else {
              window[callbackName] = overwritten;
            }

            // Save back as free
            if (s[callbackName]) {

              // Make sure that re-using the options doesn't screw things around
              s.jsonpCallback = originalSettings.jsonpCallback;

              // Save the callback name for future use
              oldCallbacks.push(callbackName);
            }

            // Call if it was a function and we have a response
            if (responseContainer && jQuery.isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }

            responseContainer = overwritten = undefined;
          });

          // Delegate to script
          return "script";
        }
      });




      // Support: Safari 8 only
      // In Safari 8 documents created via document.implementation.createHTMLDocument
      // collapse sibling forms: the second one becomes a child of the first one.
      // Because of that, this security measure has to be disabled in Safari 8.
      // https://bugs.webkit.org/show_bug.cgi?id=137337
      support.createHTMLDocument = (function() {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      })();


      // Argument "data" should be string of html
      // context (optional): If specified, the fragment will be created in this context,
      // defaults to document
      // keepScripts (optional): If true, will include scripts passed in the html string
      jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }

        var base, parsed, scripts;

        if (!context) {

          // Stop scripts or inline event handlers from being executed immediately
          // by using document.implementation
          if (support.createHTMLDocument) {
            context = document.implementation.createHTMLDocument("");

            // Set the base href for the created document
            // so any parsed elements with URLs
            // are based on the document's URL (gh-2965)
            base = context.createElement("base");
            base.href = document.location.href;
            context.head.appendChild(base);
          } else {
            context = document;
          }
        }

        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];

        // Single tag
        if (parsed) {
          return [context.createElement(parsed[1])];
        }

        parsed = buildFragment([data], context, scripts);

        if (scripts && scripts.length) {
          jQuery(scripts).remove();
        }

        return jQuery.merge([], parsed.childNodes);
      };


      /**
       * Load a url into a page
       */
      jQuery.fn.load = function(url, params, callback) {
        var selector, type, response,
          self = this,
          off = url.indexOf(" ");

        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }

        // If it's a function
        if (jQuery.isFunction(params)) {

          // We assume that it's the callback
          callback = params;
          params = undefined;

          // Otherwise, build a param string
        } else if (params && typeof params === "object") {
          type = "POST";
        }

        // If we have elements to modify, make the request
        if (self.length > 0) {
          jQuery.ajax({
            url: url,

            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {

            // Save response for use in complete callback
            response = arguments;

            self.html(selector ?

              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

              // Otherwise use the full result
              responseText);

            // If the request succeeds, this function gets "data", "status", "jqXHR"
            // but they are ignored because response was set above.
            // If it fails, this function gets "jqXHR", "status", "error"
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }

        return this;
      };




      // Attach a bunch of functions for handling common AJAX events
      jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(i, type) {
        jQuery.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });




      jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };




      jQuery.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
            position = jQuery.css(elem, "position"),
            curElem = jQuery(elem),
            props = {};

          // Set position first, in-case top/left are set even on static elem
          if (position === "static") {
            elem.style.position = "relative";
          }

          curOffset = curElem.offset();
          curCSSTop = jQuery.css(elem, "top");
          curCSSLeft = jQuery.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") &&
            (curCSSTop + curCSSLeft).indexOf("auto") > -1;

          // Need to be able to calculate position if either
          // top or left is auto and position is either absolute or fixed
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;

          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }

          if (jQuery.isFunction(options)) {

            // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i, jQuery.extend({}, curOffset));
          }

          if (options.top != null) {
            props.top = (options.top - curOffset.top) + curTop;
          }
          if (options.left != null) {
            props.left = (options.left - curOffset.left) + curLeft;
          }

          if ("using" in options) {
            options.using.call(elem, props);

          } else {
            curElem.css(props);
          }
        }
      };

      jQuery.fn.extend({
        offset: function(options) {

          // Preserve chaining for setter
          if (arguments.length) {
            return options === undefined ?
              this :
              this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
              });
          }

          var doc, docElem, rect, win,
            elem = this[0];

          if (!elem) {
            return;
          }

          // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
          // Support: IE <=11 only
          // Running getBoundingClientRect on a
          // disconnected node in IE throws an error
          if (!elem.getClientRects().length) {
            return {
              top: 0,
              left: 0
            };
          }

          rect = elem.getBoundingClientRect();

          doc = elem.ownerDocument;
          docElem = doc.documentElement;
          win = doc.defaultView;

          return {
            top: rect.top + win.pageYOffset - docElem.clientTop,
            left: rect.left + win.pageXOffset - docElem.clientLeft
          };
        },

        position: function() {
          if (!this[0]) {
            return;
          }

          var offsetParent, offset,
            elem = this[0],
            parentOffset = {
              top: 0,
              left: 0
            };

          // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
          // because it is its only offset parent
          if (jQuery.css(elem, "position") === "fixed") {

            // Assume getBoundingClientRect is there when computed position is fixed
            offset = elem.getBoundingClientRect();

          } else {

            // Get *real* offsetParent
            offsetParent = this.offsetParent();

            // Get correct offsets
            offset = this.offset();
            if (!nodeName(offsetParent[0], "html")) {
              parentOffset = offsetParent.offset();
            }

            // Add offsetParent borders
            parentOffset = {
              top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
              left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
            };
          }

          // Subtract parent offsets and element margins
          return {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
          };
        },

        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;

            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }

            return offsetParent || documentElement;
          });
        }
      });

      // Create scrollLeft and scrollTop methods
      jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function(method, prop) {
        var top = "pageYOffset" === prop;

        jQuery.fn[method] = function(val) {
          return access(this, function(elem, method, val) {

            // Coalesce documents and windows
            var win;
            if (jQuery.isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }

            if (val === undefined) {
              return win ? win[prop] : elem[method];
            }

            if (win) {
              win.scrollTo(!top ? val : win.pageXOffset,
                top ? val : win.pageYOffset
              );

            } else {
              elem[method] = val;
            }
          }, method, val, arguments.length);
        };
      });

      // Support: Safari <=7 - 9.1, Chrome <=37 - 49
      // Add the top/left cssHooks using jQuery.fn.position
      // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
      // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
      // getComputedStyle returns percent when specified for top/left/bottom/right;
      // rather than make the css module depend on the offset module, just check for it here
      jQuery.each(["top", "left"], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
          function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);

              // If curCSS returns percentage, fallback to offset
              return rnumnonpx.test(computed) ?
                jQuery(elem).position()[prop] + "px" :
                computed;
            }
          }
        );
      });


      // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
      jQuery.each({
        Height: "height",
        Width: "width"
      }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          },
          function(defaultExtra, funcName) {

            // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

              return access(this, function(elem, type, value) {
                var doc;

                if (jQuery.isWindow(elem)) {

                  // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                  return funcName.indexOf("outer") === 0 ?
                    elem["inner" + name] :
                    elem.document.documentElement["client" + name];
                }

                // Get document width or height
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;

                  // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                  // whichever is greatest
                  return Math.max(
                    elem.body["scroll" + name], doc["scroll" + name],
                    elem.body["offset" + name], doc["offset" + name],
                    doc["client" + name]
                  );
                }

                return value === undefined ?

                  // Get width or height on the element, requesting but not forcing parseFloat
                  jQuery.css(elem, type, extra) :

                  // Set width or height on the element
                  jQuery.style(elem, type, value, extra);
              }, type, chainable ? margin : undefined, chainable);
            };
          });
      });


      jQuery.fn.extend({

        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },

        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {

          // ( namespace ) or ( selector, types [, fn] )
          return arguments.length === 1 ?
            this.off(selector, "**") :
            this.off(types, selector || "**", fn);
        }
      });

      jQuery.holdReady = function(hold) {
        if (hold) {
          jQuery.readyWait++;
        } else {
          jQuery.ready(true);
        }
      };
      jQuery.isArray = Array.isArray;
      jQuery.parseJSON = JSON.parse;
      jQuery.nodeName = nodeName;




      // Register as a named AMD module, since jQuery can be concatenated with other
      // files that may use define, but not via a proper concatenation script that
      // understands anonymous AMD modules. A named AMD is safest and most robust
      // way to register. Lowercase jquery is used because AMD module names are
      // derived from file names, and jQuery is normally delivered in a lowercase
      // file name. Do this after creating the global so that if an AMD module wants
      // to call noConflict to hide this version of jQuery, it will work.

      // Note that for maximum portability, libraries that are not jQuery should
      // declare themselves as anonymous modules, and avoid setting a global if an
      // AMD loader is present. jQuery is a special case. For more information, see
      // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return jQuery;
          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      }




      var

      // Map over jQuery in case of overwrite
        _jQuery = window.jQuery,

        // Map over the $ in case of overwrite
        _$ = window.$;

      jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) {
          window.$ = _$;
        }

        if (deep && window.jQuery === jQuery) {
          window.jQuery = _jQuery;
        }

        return jQuery;
      };

      // Expose jQuery and $ identifiers, even in AMD
      // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
      // and CommonJS for browser emulators (#13566)
      if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
      }




      return jQuery;
    });


    /***/
  }),
  /* 1 */
  /***/
  (function(module, exports, __webpack_require__) {

    __webpack_require__(2);
    module.exports = __webpack_require__(11);


    /***/
  }),
  /* 2 */
  /***/
  (function(module, exports, __webpack_require__) {

    window.jQuery = window.$ = __webpack_require__(0);
    window.Popper = __webpack_require__(3);
    __webpack_require__(5);
    __webpack_require__(6);
    __webpack_require__(7);
    __webpack_require__(8);
    __webpack_require__(9);
    __webpack_require__(10);

    /**
     * Header mobile
     */
    var headerMobileLayer = $('.header-mobile-panel-layer'),
      headerMobile = $('.header-mobile-panel');

    $(document).keyup(function(event) {
      if (event.which === 27) {
        if (headerMobile.hasClass('open')) {
          headerMobileLayer.removeClass('open');
          headerMobile.removeClass('open');
          $('body').removeClass('is-header-panel');
        }
      }
    });

    $('.header .hamburger, .header-mobile-panel-layer').click(function() {
      headerMobileLayer.toggleClass('open');
      headerMobile.toggleClass('open');
      $('body').toggleClass('is-header-panel');
    });

    /**
     * Video
     */
    var videos = $(".directions.hidden-md-down .direction");
    videos.hover(hoverVideo, hideVideo);

    function hoverVideo() {
      $(this).css('width', '50%').siblings().css('width', 50 / 3 + '%');

      $('.direction__video video', this).get(0).play();
    }

    function hideVideo() {
      $(this).css('width', '25%').siblings().css('width', '25%');

      $('.direction__video video', this).get(0).pause();
    }

    /***/
  }),
  /* 3 */
  /***/
  (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
      value: true
    });
    /* WEBPACK VAR INJECTION */
    (function(global) {
      /**!
       * @fileOverview Kickass library to create and place poppers near their reference elements.
       * @version 1.12.5
       * @license
       * Copyright (c) 2016 Federico Zivolo and contributors
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       */
      var nativeHints = ['native code', '[object MutationObserverConstructor]'];

      /**
       * Determine if a function is implemented natively (as opposed to a polyfill).
       * @method
       * @memberof Popper.Utils
       * @argument {Function | undefined} fn the function to check
       * @returns {Boolean}
       */
      var isNative = (function(fn) {
        return nativeHints.some(function(hint) {
          return (fn || '').toString().indexOf(hint) > -1;
        });
      });

      var isBrowser = typeof window !== 'undefined';
      var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
      var timeoutDuration = 0;
      for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
        if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
          timeoutDuration = 1;
          break;
        }
      }

      function microtaskDebounce(fn) {
        var scheduled = false;
        var i = 0;
        var elem = document.createElement('span');

        // MutationObserver provides a mechanism for scheduling microtasks, which
        // are scheduled *before* the next task. This gives us a way to debounce
        // a function but ensure it's called *before* the next paint.
        var observer = new MutationObserver(function() {
          fn();
          scheduled = false;
        });

        observer.observe(elem, {
          attributes: true
        });

        return function() {
          if (!scheduled) {
            scheduled = true;
            elem.setAttribute('x-index', i);
            i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
          }
        };
      }

      function taskDebounce(fn) {
        var scheduled = false;
        return function() {
          if (!scheduled) {
            scheduled = true;
            setTimeout(function() {
              scheduled = false;
              fn();
            }, timeoutDuration);
          }
        };
      }

      // It's common for MutationObserver polyfills to be seen in the wild, however
      // these rely on Mutation Events which only occur when an element is connected
      // to the DOM. The algorithm used in this module does not use a connected element,
      // and so we must ensure that a *native* MutationObserver is available.
      var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

      /**
       * Create a debounced version of a method, that's asynchronously deferred
       * but called in the minimum time possible.
       *
       * @method
       * @memberof Popper.Utils
       * @argument {Function} fn
       * @returns {Function}
       */
      var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

      /**
       * Check if the given variable is a function
       * @method
       * @memberof Popper.Utils
       * @argument {Any} functionToCheck - variable to check
       * @returns {Boolean} answer to: is a function?
       */
      function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
      }

      /**
       * Get CSS computed property of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Eement} element
       * @argument {String} property
       */
      function getStyleComputedProperty(element, property) {
        if (element.nodeType !== 1) {
          return [];
        }
        // NOTE: 1 DOM access here
        var css = window.getComputedStyle(element, null);
        return property ? css[property] : css;
      }

      /**
       * Returns the parentNode or the host of the element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} parent
       */
      function getParentNode(element) {
        if (element.nodeName === 'HTML') {
          return element;
        }
        return element.parentNode || element.host;
      }

      /**
       * Returns the scrolling parent of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} scroll parent
       */
      function getScrollParent(element) {
        // Return body, `getScroll` will take care to get the correct `scrollTop` from it
        if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
          return window.document.body;
        }

        // Firefox want us to check `-x` and `-y` variations as well

        var _getStyleComputedProp = getStyleComputedProperty(element),
          overflow = _getStyleComputedProp.overflow,
          overflowX = _getStyleComputedProp.overflowX,
          overflowY = _getStyleComputedProp.overflowY;

        if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
          return element;
        }

        return getScrollParent(getParentNode(element));
      }

      /**
       * Returns the offset parent of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} offset parent
       */
      function getOffsetParent(element) {
        // NOTE: 1 DOM access here
        var offsetParent = element && element.offsetParent;
        var nodeName = offsetParent && offsetParent.nodeName;

        if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
          return window.document.documentElement;
        }

        // .offsetParent will return the closest TD or TABLE in case
        // no offsetParent is present, I hate this job...
        if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
          return getOffsetParent(offsetParent);
        }

        return offsetParent;
      }

      function isOffsetContainer(element) {
        var nodeName = element.nodeName;

        if (nodeName === 'BODY') {
          return false;
        }
        return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
      }

      /**
       * Finds the root node (document, shadowDOM root) of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} node
       * @returns {Element} root node
       */
      function getRoot(node) {
        if (node.parentNode !== null) {
          return getRoot(node.parentNode);
        }

        return node;
      }

      /**
       * Finds the offset parent common to the two provided nodes
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element1
       * @argument {Element} element2
       * @returns {Element} common offset parent
       */
      function findCommonOffsetParent(element1, element2) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
          return window.document.documentElement;
        }

        // Here we make sure to give as "start" the element that comes first in the DOM
        var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
        var start = order ? element1 : element2;
        var end = order ? element2 : element1;

        // Get common ancestor container
        var range = document.createRange();
        range.setStart(start, 0);
        range.setEnd(end, 0);
        var commonAncestorContainer = range.commonAncestorContainer;

        // Both nodes are inside #document

        if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
          if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
          }

          return getOffsetParent(commonAncestorContainer);
        }

        // one of the nodes is inside shadowDOM, find which one
        var element1root = getRoot(element1);
        if (element1root.host) {
          return findCommonOffsetParent(element1root.host, element2);
        } else {
          return findCommonOffsetParent(element1, getRoot(element2).host);
        }
      }

      /**
       * Gets the scroll value of the given element in the given side (top and left)
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @argument {String} side `top` or `left`
       * @returns {number} amount of scrolled pixels
       */
      function getScroll(element) {
        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

        var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
        var nodeName = element.nodeName;

        if (nodeName === 'BODY' || nodeName === 'HTML') {
          var html = window.document.documentElement;
          var scrollingElement = window.document.scrollingElement || html;
          return scrollingElement[upperSide];
        }

        return element[upperSide];
      }

      /*
       * Sum or subtract the element scroll values (left and top) from a given rect object
       * @method
       * @memberof Popper.Utils
       * @param {Object} rect - Rect object you want to change
       * @param {HTMLElement} element - The element from the function reads the scroll values
       * @param {Boolean} subtract - set to true if you want to subtract the scroll values
       * @return {Object} rect - The modifier rect object
       */
      function includeScroll(rect, element) {
        var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        var modifier = subtract ? -1 : 1;
        rect.top += scrollTop * modifier;
        rect.bottom += scrollTop * modifier;
        rect.left += scrollLeft * modifier;
        rect.right += scrollLeft * modifier;
        return rect;
      }

      /*
       * Helper to detect borders of a given element
       * @method
       * @memberof Popper.Utils
       * @param {CSSStyleDeclaration} styles
       * Result of `getStyleComputedProperty` on the given element
       * @param {String} axis - `x` or `y`
       * @return {number} borders - The borders size of the given axis
       */

      function getBordersSize(styles, axis) {
        var sideA = axis === 'x' ? 'Left' : 'Top';
        var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

        return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
      }

      /**
       * Tells if you are running Internet Explorer 10
       * @method
       * @memberof Popper.Utils
       * @returns {Boolean} isIE10
       */
      var isIE10 = undefined;

      var isIE10$1 = function() {
        if (isIE10 === undefined) {
          isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
        }
        return isIE10;
      };

      function getSize(axis, body, html, computedStyle) {
        return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
      }

      function getWindowSizes() {
        var body = window.document.body;
        var html = window.document.documentElement;
        var computedStyle = isIE10$1() && window.getComputedStyle(html);

        return {
          height: getSize('Height', body, html, computedStyle),
          width: getSize('Width', body, html, computedStyle)
        };
      }

      var classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();





      var defineProperty = function(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      };

      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      /**
       * Given element offsets, generate an output similar to getBoundingClientRect
       * @method
       * @memberof Popper.Utils
       * @argument {Object} offsets
       * @returns {Object} ClientRect like output
       */
      function getClientRect(offsets) {
        return _extends({}, offsets, {
          right: offsets.left + offsets.width,
          bottom: offsets.top + offsets.height
        });
      }

      /**
       * Get bounding client rect of given element
       * @method
       * @memberof Popper.Utils
       * @param {HTMLElement} element
       * @return {Object} client rect
       */
      function getBoundingClientRect(element) {
        var rect = {};

        // IE10 10 FIX: Please, don't ask, the element isn't
        // considered in DOM in some circumstances...
        // This isn't reproducible in IE10 compatibility mode of IE11
        if (isIE10$1()) {
          try {
            rect = element.getBoundingClientRect();
            var scrollTop = getScroll(element, 'top');
            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
          } catch (err) {}
        } else {
          rect = element.getBoundingClientRect();
        }

        var result = {
          left: rect.left,
          top: rect.top,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
        };

        // subtract scrollbar size from sizes
        var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
        var width = sizes.width || element.clientWidth || result.right - result.left;
        var height = sizes.height || element.clientHeight || result.bottom - result.top;

        var horizScrollbar = element.offsetWidth - width;
        var vertScrollbar = element.offsetHeight - height;

        // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
        // we make this check conditional for performance reasons
        if (horizScrollbar || vertScrollbar) {
          var styles = getStyleComputedProperty(element);
          horizScrollbar -= getBordersSize(styles, 'x');
          vertScrollbar -= getBordersSize(styles, 'y');

          result.width -= horizScrollbar;
          result.height -= vertScrollbar;
        }

        return getClientRect(result);
      }

      function getOffsetRectRelativeToArbitraryNode(children, parent) {
        var isIE10 = isIE10$1();
        var isHTML = parent.nodeName === 'HTML';
        var childrenRect = getBoundingClientRect(children);
        var parentRect = getBoundingClientRect(parent);
        var scrollParent = getScrollParent(children);

        var styles = getStyleComputedProperty(parent);
        var borderTopWidth = +styles.borderTopWidth.split('px')[0];
        var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

        var offsets = getClientRect({
          top: childrenRect.top - parentRect.top - borderTopWidth,
          left: childrenRect.left - parentRect.left - borderLeftWidth,
          width: childrenRect.width,
          height: childrenRect.height
        });
        offsets.marginTop = 0;
        offsets.marginLeft = 0;

        // Subtract margins of documentElement in case it's being used as parent
        // we do this only on HTML because it's the only element that behaves
        // differently when margins are applied to it. The margins are included in
        // the box of the documentElement, in the other cases not.
        if (!isIE10 && isHTML) {
          var marginTop = +styles.marginTop.split('px')[0];
          var marginLeft = +styles.marginLeft.split('px')[0];

          offsets.top -= borderTopWidth - marginTop;
          offsets.bottom -= borderTopWidth - marginTop;
          offsets.left -= borderLeftWidth - marginLeft;
          offsets.right -= borderLeftWidth - marginLeft;

          // Attach marginTop and marginLeft because in some circumstances we may need them
          offsets.marginTop = marginTop;
          offsets.marginLeft = marginLeft;
        }

        if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
          offsets = includeScroll(offsets, parent);
        }

        return offsets;
      }

      function getViewportOffsetRectRelativeToArtbitraryNode(element) {
        var html = window.document.documentElement;
        var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
        var width = Math.max(html.clientWidth, window.innerWidth || 0);
        var height = Math.max(html.clientHeight, window.innerHeight || 0);

        var scrollTop = getScroll(html);
        var scrollLeft = getScroll(html, 'left');

        var offset = {
          top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
          left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
          width: width,
          height: height
        };

        return getClientRect(offset);
      }

      /**
       * Check if the given element is fixed or is inside a fixed parent
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @argument {Element} customContainer
       * @returns {Boolean} answer to "isFixed?"
       */
      function isFixed(element) {
        var nodeName = element.nodeName;
        if (nodeName === 'BODY' || nodeName === 'HTML') {
          return false;
        }
        if (getStyleComputedProperty(element, 'position') === 'fixed') {
          return true;
        }
        return isFixed(getParentNode(element));
      }

      /**
       * Computed the boundaries limits and return them
       * @method
       * @memberof Popper.Utils
       * @param {HTMLElement} popper
       * @param {HTMLElement} reference
       * @param {number} padding
       * @param {HTMLElement} boundariesElement - Element used to define the boundaries
       * @returns {Object} Coordinates of the boundaries
       */
      function getBoundaries(popper, reference, padding, boundariesElement) {
        // NOTE: 1 DOM access here
        var boundaries = {
          top: 0,
          left: 0
        };
        var offsetParent = findCommonOffsetParent(popper, reference);

        // Handle viewport case
        if (boundariesElement === 'viewport') {
          boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
        } else {
          // Handle other cases based on DOM element used as boundaries
          var boundariesNode = void 0;
          if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(popper));
            if (boundariesNode.nodeName === 'BODY') {
              boundariesNode = window.document.documentElement;
            }
          } else if (boundariesElement === 'window') {
            boundariesNode = window.document.documentElement;
          } else {
            boundariesNode = boundariesElement;
          }

          var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

          // In case of HTML, we need a different computation
          if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(),
              height = _getWindowSizes.height,
              width = _getWindowSizes.width;

            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = height + offsets.top;
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = width + offsets.left;
          } else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
          }
        }

        // Add paddings
        boundaries.left += padding;
        boundaries.top += padding;
        boundaries.right -= padding;
        boundaries.bottom -= padding;

        return boundaries;
      }

      function getArea(_ref) {
        var width = _ref.width,
          height = _ref.height;

        return width * height;
      }

      /**
       * Utility used to transform the `auto` placement to the placement with more
       * available space.
       * @method
       * @memberof Popper.Utils
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
        var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        if (placement.indexOf('auto') === -1) {
          return placement;
        }

        var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

        var rects = {
          top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
          },
          right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
          },
          bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
          },
          left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
          }
        };

        var sortedAreas = Object.keys(rects).map(function(key) {
          return _extends({
            key: key
          }, rects[key], {
            area: getArea(rects[key])
          });
        }).sort(function(a, b) {
          return b.area - a.area;
        });

        var filteredAreas = sortedAreas.filter(function(_ref2) {
          var width = _ref2.width,
            height = _ref2.height;
          return width >= popper.clientWidth && height >= popper.clientHeight;
        });

        var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

        var variation = placement.split('-')[1];

        return computedPlacement + (variation ? '-' + variation : '');
      }

      /**
       * Get offsets to the reference element
       * @method
       * @memberof Popper.Utils
       * @param {Object} state
       * @param {Element} popper - the popper element
       * @param {Element} reference - the reference element (the popper will be relative to this)
       * @returns {Object} An object containing the offsets which will be applied to the popper
       */
      function getReferenceOffsets(state, popper, reference) {
        var commonOffsetParent = findCommonOffsetParent(popper, reference);
        return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
      }

      /**
       * Get the outer sizes of the given element (offset size + margins)
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Object} object containing width and height properties
       */
      function getOuterSizes(element) {
        var styles = window.getComputedStyle(element);
        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
        var result = {
          width: element.offsetWidth + y,
          height: element.offsetHeight + x
        };
        return result;
      }

      /**
       * Get the opposite placement of the given one
       * @method
       * @memberof Popper.Utils
       * @argument {String} placement
       * @returns {String} flipped placement
       */
      function getOppositePlacement(placement) {
        var hash = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom'
        };
        return placement.replace(/left|right|bottom|top/g, function(matched) {
          return hash[matched];
        });
      }

      /**
       * Get offsets to the popper
       * @method
       * @memberof Popper.Utils
       * @param {Object} position - CSS position the Popper will get applied
       * @param {HTMLElement} popper - the popper element
       * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
       * @param {String} placement - one of the valid placement options
       * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
       */
      function getPopperOffsets(popper, referenceOffsets, placement) {
        placement = placement.split('-')[0];

        // Get popper node sizes
        var popperRect = getOuterSizes(popper);

        // Add position, width and height to our offsets object
        var popperOffsets = {
          width: popperRect.width,
          height: popperRect.height
        };

        // depending by the popper placement we have to compute its offsets slightly differently
        var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
        var mainSide = isHoriz ? 'top' : 'left';
        var secondarySide = isHoriz ? 'left' : 'top';
        var measurement = isHoriz ? 'height' : 'width';
        var secondaryMeasurement = !isHoriz ? 'height' : 'width';

        popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
        if (placement === secondarySide) {
          popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
        } else {
          popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
        }

        return popperOffsets;
      }

      /**
       * Mimics the `find` method of Array
       * @method
       * @memberof Popper.Utils
       * @argument {Array} arr
       * @argument prop
       * @argument value
       * @returns index or -1
       */
      function find(arr, check) {
        // use native find if supported
        if (Array.prototype.find) {
          return arr.find(check);
        }

        // use `filter` to obtain the same behavior of `find`
        return arr.filter(check)[0];
      }

      /**
       * Return the index of the matching object
       * @method
       * @memberof Popper.Utils
       * @argument {Array} arr
       * @argument prop
       * @argument value
       * @returns index or -1
       */
      function findIndex(arr, prop, value) {
        // use native findIndex if supported
        if (Array.prototype.findIndex) {
          return arr.findIndex(function(cur) {
            return cur[prop] === value;
          });
        }

        // use `find` + `indexOf` if `findIndex` isn't supported
        var match = find(arr, function(obj) {
          return obj[prop] === value;
        });
        return arr.indexOf(match);
      }

      /**
       * Loop trough the list of modifiers and run them in order,
       * each of them will then edit the data object.
       * @method
       * @memberof Popper.Utils
       * @param {dataObject} data
       * @param {Array} modifiers
       * @param {String} ends - Optional modifier name used as stopper
       * @returns {dataObject}
       */
      function runModifiers(modifiers, data, ends) {
        var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

        modifiersToRun.forEach(function(modifier) {
          if (modifier.function) {
            console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
          }
          var fn = modifier.function || modifier.fn;
          if (modifier.enabled && isFunction(fn)) {
            // Add properties to offsets to make them a complete clientRect object
            // we do this before each modifier to make sure the previous one doesn't
            // mess with these values
            data.offsets.popper = getClientRect(data.offsets.popper);
            data.offsets.reference = getClientRect(data.offsets.reference);

            data = fn(data, modifier);
          }
        });

        return data;
      }

      /**
       * Updates the position of the popper, computing the new offsets and applying
       * the new style.<br />
       * Prefer `scheduleUpdate` over `update` because of performance reasons.
       * @method
       * @memberof Popper
       */
      function update() {
        // if popper is destroyed, don't perform any further update
        if (this.state.isDestroyed) {
          return;
        }

        var data = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: false,
          offsets: {}
        };

        // compute reference element offsets
        data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

        // compute auto placement, store placement inside the data object,
        // modifiers will be able to edit `placement` if needed
        // and refer to originalPlacement to know the original value
        data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

        // store the computed placement inside `originalPlacement`
        data.originalPlacement = data.placement;

        // compute the popper offsets
        data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
        data.offsets.popper.position = 'absolute';

        // run the modifiers
        data = runModifiers(this.modifiers, data);

        // the first `update` will call `onCreate` callback
        // the other ones will call `onUpdate` callback
        if (!this.state.isCreated) {
          this.state.isCreated = true;
          this.options.onCreate(data);
        } else {
          this.options.onUpdate(data);
        }
      }

      /**
       * Helper used to know if the given modifier is enabled.
       * @method
       * @memberof Popper.Utils
       * @returns {Boolean}
       */
      function isModifierEnabled(modifiers, modifierName) {
        return modifiers.some(function(_ref) {
          var name = _ref.name,
            enabled = _ref.enabled;
          return enabled && name === modifierName;
        });
      }

      /**
       * Get the prefixed supported property name
       * @method
       * @memberof Popper.Utils
       * @argument {String} property (camelCase)
       * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
       */
      function getSupportedPropertyName(property) {
        var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
        var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

        for (var i = 0; i < prefixes.length - 1; i++) {
          var prefix = prefixes[i];
          var toCheck = prefix ? '' + prefix + upperProp : property;
          if (typeof window.document.body.style[toCheck] !== 'undefined') {
            return toCheck;
          }
        }
        return null;
      }

      /**
       * Destroy the popper
       * @method
       * @memberof Popper
       */
      function destroy() {
        this.state.isDestroyed = true;

        // touch DOM only if `applyStyle` modifier is enabled
        if (isModifierEnabled(this.modifiers, 'applyStyle')) {
          this.popper.removeAttribute('x-placement');
          this.popper.style.left = '';
          this.popper.style.position = '';
          this.popper.style.top = '';
          this.popper.style[getSupportedPropertyName('transform')] = '';
        }

        this.disableEventListeners();

        // remove the popper if user explicity asked for the deletion on destroy
        // do not use `remove` because IE11 doesn't support it
        if (this.options.removeOnDestroy) {
          this.popper.parentNode.removeChild(this.popper);
        }
        return this;
      }

      function attachToScrollParents(scrollParent, event, callback, scrollParents) {
        var isBody = scrollParent.nodeName === 'BODY';
        var target = isBody ? window : scrollParent;
        target.addEventListener(event, callback, {
          passive: true
        });

        if (!isBody) {
          attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
        }
        scrollParents.push(target);
      }

      /**
       * Setup needed event listeners used to update the popper position
       * @method
       * @memberof Popper.Utils
       * @private
       */
      function setupEventListeners(reference, options, state, updateBound) {
        // Resize event listener on window
        state.updateBound = updateBound;
        window.addEventListener('resize', state.updateBound, {
          passive: true
        });

        // Scroll event listener on scroll parents
        var scrollElement = getScrollParent(reference);
        attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
        state.scrollElement = scrollElement;
        state.eventsEnabled = true;

        return state;
      }

      /**
       * It will add resize/scroll events and start recalculating
       * position of the popper element when they are triggered.
       * @method
       * @memberof Popper
       */
      function enableEventListeners() {
        if (!this.state.eventsEnabled) {
          this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
        }
      }

      /**
       * Remove event listeners used to update the popper position
       * @method
       * @memberof Popper.Utils
       * @private
       */
      function removeEventListeners(reference, state) {
        // Remove resize event listener on window
        window.removeEventListener('resize', state.updateBound);

        // Remove scroll event listener on scroll parents
        state.scrollParents.forEach(function(target) {
          target.removeEventListener('scroll', state.updateBound);
        });

        // Reset state
        state.updateBound = null;
        state.scrollParents = [];
        state.scrollElement = null;
        state.eventsEnabled = false;
        return state;
      }

      /**
       * It will remove resize/scroll events and won't recalculate popper position
       * when they are triggered. It also won't trigger onUpdate callback anymore,
       * unless you call `update` method manually.
       * @method
       * @memberof Popper
       */
      function disableEventListeners() {
        if (this.state.eventsEnabled) {
          window.cancelAnimationFrame(this.scheduleUpdate);
          this.state = removeEventListeners(this.reference, this.state);
        }
      }

      /**
       * Tells if a given input is a number
       * @method
       * @memberof Popper.Utils
       * @param {*} input to check
       * @return {Boolean}
       */
      function isNumeric(n) {
        return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
      }

      /**
       * Set the style to the given popper
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element - Element to apply the style to
       * @argument {Object} styles
       * Object with a list of properties and values which will be applied to the element
       */
      function setStyles(element, styles) {
        Object.keys(styles).forEach(function(prop) {
          var unit = '';
          // add unit if the value is numeric and is one of the following
          if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
            unit = 'px';
          }
          element.style[prop] = styles[prop] + unit;
        });
      }

      /**
       * Set the attributes to the given popper
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element - Element to apply the attributes to
       * @argument {Object} styles
       * Object with a list of properties and values which will be applied to the element
       */
      function setAttributes(element, attributes) {
        Object.keys(attributes).forEach(function(prop) {
          var value = attributes[prop];
          if (value !== false) {
            element.setAttribute(prop, attributes[prop]);
          } else {
            element.removeAttribute(prop);
          }
        });
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} data.styles - List of style properties - values to apply to popper element
       * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The same data object
       */
      function applyStyle(data) {
        // any property present in `data.styles` will be applied to the popper,
        // in this way we can make the 3rd party modifiers add custom styles to it
        // Be aware, modifiers could override the properties defined in the previous
        // lines of this modifier!
        setStyles(data.instance.popper, data.styles);

        // any property present in `data.attributes` will be applied to the popper,
        // they will be set as HTML attributes of the element
        setAttributes(data.instance.popper, data.attributes);

        // if arrowElement is defined and arrowStyles has some properties
        if (data.arrowElement && Object.keys(data.arrowStyles).length) {
          setStyles(data.arrowElement, data.arrowStyles);
        }

        return data;
      }

      /**
       * Set the x-placement attribute before everything else because it could be used
       * to add margins to the popper margins needs to be calculated to get the
       * correct popper offsets.
       * @method
       * @memberof Popper.modifiers
       * @param {HTMLElement} reference - The reference element used to position the popper
       * @param {HTMLElement} popper - The HTML element used as popper.
       * @param {Object} options - Popper.js options
       */
      function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
        // compute reference element offsets
        var referenceOffsets = getReferenceOffsets(state, popper, reference);

        // compute auto placement, store placement inside the data object,
        // modifiers will be able to edit `placement` if needed
        // and refer to originalPlacement to know the original value
        var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

        popper.setAttribute('x-placement', placement);

        // Apply `position` to popper before anything else because
        // without the position applied we can't guarantee correct computations
        setStyles(popper, {
          position: 'absolute'
        });

        return options;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function computeStyle(data, options) {
        var x = options.x,
          y = options.y;
        var popper = data.offsets.popper;

        // Remove this legacy support in Popper.js v2

        var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
          return modifier.name === 'applyStyle';
        }).gpuAcceleration;
        if (legacyGpuAccelerationOption !== undefined) {
          console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
        }
        var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

        var offsetParent = getOffsetParent(data.instance.popper);
        var offsetParentRect = getBoundingClientRect(offsetParent);

        // Styles
        var styles = {
          position: popper.position
        };

        // floor sides to avoid blurry text
        var offsets = {
          left: Math.floor(popper.left),
          top: Math.floor(popper.top),
          bottom: Math.floor(popper.bottom),
          right: Math.floor(popper.right)
        };

        var sideA = x === 'bottom' ? 'top' : 'bottom';
        var sideB = y === 'right' ? 'left' : 'right';

        // if gpuAcceleration is set to `true` and transform is supported,
        //  we use `translate3d` to apply the position to the popper we
        // automatically use the supported prefixed version if needed
        var prefixedProperty = getSupportedPropertyName('transform');

        // now, let's make a step back and look at this code closely (wtf?)
        // If the content of the popper grows once it's been positioned, it
        // may happen that the popper gets misplaced because of the new content
        // overflowing its reference element
        // To avoid this problem, we provide two options (x and y), which allow
        // the consumer to define the offset origin.
        // If we position a popper on top of a reference element, we can set
        // `x` to `top` to make the popper grow towards its top instead of
        // its bottom.
        var left = void 0,
          top = void 0;
        if (sideA === 'bottom') {
          top = -offsetParentRect.height + offsets.bottom;
        } else {
          top = offsets.top;
        }
        if (sideB === 'right') {
          left = -offsetParentRect.width + offsets.right;
        } else {
          left = offsets.left;
        }
        if (gpuAcceleration && prefixedProperty) {
          styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
          styles[sideA] = 0;
          styles[sideB] = 0;
          styles.willChange = 'transform';
        } else {
          // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
          var invertTop = sideA === 'bottom' ? -1 : 1;
          var invertLeft = sideB === 'right' ? -1 : 1;
          styles[sideA] = top * invertTop;
          styles[sideB] = left * invertLeft;
          styles.willChange = sideA + ', ' + sideB;
        }

        // Attributes
        var attributes = {
          'x-placement': data.placement
        };

        // Update `data` attributes, styles and arrowStyles
        data.attributes = _extends({}, attributes, data.attributes);
        data.styles = _extends({}, styles, data.styles);
        data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

        return data;
      }

      /**
       * Helper used to know if the given modifier depends from another one.<br />
       * It checks if the needed modifier is listed and enabled.
       * @method
       * @memberof Popper.Utils
       * @param {Array} modifiers - list of modifiers
       * @param {String} requestingName - name of requesting modifier
       * @param {String} requestedName - name of requested modifier
       * @returns {Boolean}
       */
      function isModifierRequired(modifiers, requestingName, requestedName) {
        var requesting = find(modifiers, function(_ref) {
          var name = _ref.name;
          return name === requestingName;
        });

        var isRequired = !!requesting && modifiers.some(function(modifier) {
          return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
        });

        if (!isRequired) {
          var _requesting = '`' + requestingName + '`';
          var requested = '`' + requestedName + '`';
          console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
        }
        return isRequired;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function arrow(data, options) {
        // arrow depends on keepTogether in order to work
        if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
          return data;
        }

        var arrowElement = options.element;

        // if arrowElement is a string, suppose it's a CSS selector
        if (typeof arrowElement === 'string') {
          arrowElement = data.instance.popper.querySelector(arrowElement);

          // if arrowElement is not found, don't run the modifier
          if (!arrowElement) {
            return data;
          }
        } else {
          // if the arrowElement isn't a query selector we must check that the
          // provided DOM node is child of its popper node
          if (!data.instance.popper.contains(arrowElement)) {
            console.warn('WARNING: `arrow.element` must be child of its popper element!');
            return data;
          }
        }

        var placement = data.placement.split('-')[0];
        var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;

        var isVertical = ['left', 'right'].indexOf(placement) !== -1;

        var len = isVertical ? 'height' : 'width';
        var sideCapitalized = isVertical ? 'Top' : 'Left';
        var side = sideCapitalized.toLowerCase();
        var altSide = isVertical ? 'left' : 'top';
        var opSide = isVertical ? 'bottom' : 'right';
        var arrowElementSize = getOuterSizes(arrowElement)[len];

        //
        // extends keepTogether behavior making sure the popper and its
        // reference have enough pixels in conjuction
        //

        // top/left side
        if (reference[opSide] - arrowElementSize < popper[side]) {
          data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
        }
        // bottom/right side
        if (reference[side] + arrowElementSize > popper[opSide]) {
          data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
        }

        // compute center of the popper
        var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

        // Compute the sideValue using the updated popper offsets
        // take popper margin in account because we don't have this info available
        var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
        var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide;

        // prevent arrowElement from being placed not contiguously to its popper
        sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

        data.arrowElement = arrowElement;
        data.offsets.arrow = {};
        data.offsets.arrow[side] = Math.round(sideValue);
        data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

        return data;
      }

      /**
       * Get the opposite placement variation of the given one
       * @method
       * @memberof Popper.Utils
       * @argument {String} placement variation
       * @returns {String} flipped placement variation
       */
      function getOppositeVariation(variation) {
        if (variation === 'end') {
          return 'start';
        } else if (variation === 'start') {
          return 'end';
        }
        return variation;
      }

      /**
       * List of accepted placements to use as values of the `placement` option.<br />
       * Valid placements are:
       * - `auto`
       * - `top`
       * - `right`
       * - `bottom`
       * - `left`
       *
       * Each placement can have a variation from this list:
       * - `-start`
       * - `-end`
       *
       * Variations are interpreted easily if you think of them as the left to right
       * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
       * is right.<br />
       * Vertically (`left` and `right`), `start` is top and `end` is bottom.
       *
       * Some valid examples are:
       * - `top-end` (on top of reference, right aligned)
       * - `right-start` (on right of reference, top aligned)
       * - `bottom` (on bottom, centered)
       * - `auto-right` (on the side with more space available, alignment depends by placement)
       *
       * @static
       * @type {Array}
       * @enum {String}
       * @readonly
       * @method placements
       * @memberof Popper
       */
      var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

      // Get rid of `auto` `auto-start` and `auto-end`
      var validPlacements = placements.slice(3);

      /**
       * Given an initial placement, returns all the subsequent placements
       * clockwise (or counter-clockwise).
       *
       * @method
       * @memberof Popper.Utils
       * @argument {String} placement - A valid placement (it accepts variations)
       * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
       * @returns {Array} placements including their variations
       */
      function clockwise(placement) {
        var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var index = validPlacements.indexOf(placement);
        var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
        return counter ? arr.reverse() : arr;
      }

      var BEHAVIORS = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
      };

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function flip(data, options) {
        // if `inner` modifier is enabled, we can't use the `flip` modifier
        if (isModifierEnabled(data.instance.modifiers, 'inner')) {
          return data;
        }

        if (data.flipped && data.placement === data.originalPlacement) {
          // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
          return data;
        }

        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

        var placement = data.placement.split('-')[0];
        var placementOpposite = getOppositePlacement(placement);
        var variation = data.placement.split('-')[1] || '';

        var flipOrder = [];

        switch (options.behavior) {
          case BEHAVIORS.FLIP:
            flipOrder = [placement, placementOpposite];
            break;
          case BEHAVIORS.CLOCKWISE:
            flipOrder = clockwise(placement);
            break;
          case BEHAVIORS.COUNTERCLOCKWISE:
            flipOrder = clockwise(placement, true);
            break;
          default:
            flipOrder = options.behavior;
        }

        flipOrder.forEach(function(step, index) {
          if (placement !== step || flipOrder.length === index + 1) {
            return data;
          }

          placement = data.placement.split('-')[0];
          placementOpposite = getOppositePlacement(placement);

          var popperOffsets = data.offsets.popper;
          var refOffsets = data.offsets.reference;

          // using floor because the reference offsets may contain decimals we are not going to consider here
          var floor = Math.floor;
          var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

          var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
          var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
          var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
          var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

          var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

          // flip the variation if required
          var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
          var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

          if (overlapsRef || overflowsBoundaries || flippedVariation) {
            // this boolean to detect any flip loop
            data.flipped = true;

            if (overlapsRef || overflowsBoundaries) {
              placement = flipOrder[index + 1];
            }

            if (flippedVariation) {
              variation = getOppositeVariation(variation);
            }

            data.placement = placement + (variation ? '-' + variation : '');

            // this object contains `position`, we want to preserve it along with
            // any additional property we may add in the future
            data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

            data = runModifiers(data.instance.modifiers, data, 'flip');
          }
        });
        return data;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function keepTogether(data) {
        var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;

        var placement = data.placement.split('-')[0];
        var floor = Math.floor;
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        var side = isVertical ? 'right' : 'bottom';
        var opSide = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';

        if (popper[side] < floor(reference[opSide])) {
          data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
        }
        if (popper[opSide] > floor(reference[side])) {
          data.offsets.popper[opSide] = floor(reference[side]);
        }

        return data;
      }

      /**
       * Converts a string containing value + unit into a px value number
       * @function
       * @memberof {modifiers~offset}
       * @private
       * @argument {String} str - Value + unit string
       * @argument {String} measurement - `height` or `width`
       * @argument {Object} popperOffsets
       * @argument {Object} referenceOffsets
       * @returns {Number|String}
       * Value in pixels, or original string if no values were extracted
       */
      function toValue(str, measurement, popperOffsets, referenceOffsets) {
        // separate value from unit
        var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
        var value = +split[1];
        var unit = split[2];

        // If it's not a number it's an operator, I guess
        if (!value) {
          return str;
        }

        if (unit.indexOf('%') === 0) {
          var element = void 0;
          switch (unit) {
            case '%p':
              element = popperOffsets;
              break;
            case '%':
            case '%r':
            default:
              element = referenceOffsets;
          }

          var rect = getClientRect(element);
          return rect[measurement] / 100 * value;
        } else if (unit === 'vh' || unit === 'vw') {
          // if is a vh or vw, we calculate the size based on the viewport
          var size = void 0;
          if (unit === 'vh') {
            size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          } else {
            size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
          }
          return size / 100 * value;
        } else {
          // if is an explicit pixel unit, we get rid of the unit and keep the value
          // if is an implicit unit, it's px, and we return just the value
          return value;
        }
      }

      /**
       * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
       * @function
       * @memberof {modifiers~offset}
       * @private
       * @argument {String} offset
       * @argument {Object} popperOffsets
       * @argument {Object} referenceOffsets
       * @argument {String} basePlacement
       * @returns {Array} a two cells array with x and y offsets in numbers
       */
      function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
        var offsets = [0, 0];

        // Use height if placement is left or right and index is 0 otherwise use width
        // in this way the first offset will use an axis and the second one
        // will use the other one
        var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

        // Split the offset string to obtain a list of values and operands
        // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
        var fragments = offset.split(/(\+|\-)/).map(function(frag) {
          return frag.trim();
        });

        // Detect if the offset string contains a pair of values or a single one
        // they could be separated by comma or space
        var divider = fragments.indexOf(find(fragments, function(frag) {
          return frag.search(/,|\s/) !== -1;
        }));

        if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
          console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        }

        // If divider is found, we divide the list of values and operands to divide
        // them by ofset X and Y.
        var splitRegex = /\s*,\s*|\s+/;
        var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

        // Convert the values with units to absolute pixels to allow our computations
        ops = ops.map(function(op, index) {
          // Most of the units rely on the orientation of the popper
          var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
          var mergeWithPrevious = false;
          return op
            // This aggregates any `+` or `-` sign that aren't considered operators
            // e.g.: 10 + +5 => [10, +, +5]
            .reduce(function(a, b) {
              if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
                a[a.length - 1] = b;
                mergeWithPrevious = true;
                return a;
              } else if (mergeWithPrevious) {
                a[a.length - 1] += b;
                mergeWithPrevious = false;
                return a;
              } else {
                return a.concat(b);
              }
            }, [])
            // Here we convert the string values into number values (in px)
            .map(function(str) {
              return toValue(str, measurement, popperOffsets, referenceOffsets);
            });
        });

        // Loop trough the offsets arrays and execute the operations
        ops.forEach(function(op, index) {
          op.forEach(function(frag, index2) {
            if (isNumeric(frag)) {
              offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
            }
          });
        });
        return offsets;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @argument {Number|String} options.offset=0
       * The offset value as described in the modifier description
       * @returns {Object} The data object, properly modified
       */
      function offset(data, _ref) {
        var offset = _ref.offset;
        var placement = data.placement,
          _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;

        var basePlacement = placement.split('-')[0];

        var offsets = void 0;
        if (isNumeric(+offset)) {
          offsets = [+offset, 0];
        } else {
          offsets = parseOffset(offset, popper, reference, basePlacement);
        }

        if (basePlacement === 'left') {
          popper.top += offsets[0];
          popper.left -= offsets[1];
        } else if (basePlacement === 'right') {
          popper.top += offsets[0];
          popper.left += offsets[1];
        } else if (basePlacement === 'top') {
          popper.left += offsets[0];
          popper.top -= offsets[1];
        } else if (basePlacement === 'bottom') {
          popper.left += offsets[0];
          popper.top += offsets[1];
        }

        data.popper = popper;
        return data;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function preventOverflow(data, options) {
        var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

        // If offsetParent is the reference element, we really want to
        // go one step up and use the next offsetParent as reference to
        // avoid to make this modifier completely useless and look like broken
        if (data.instance.reference === boundariesElement) {
          boundariesElement = getOffsetParent(boundariesElement);
        }

        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
        options.boundaries = boundaries;

        var order = options.priority;
        var popper = data.offsets.popper;

        var check = {
          primary: function primary(placement) {
            var value = popper[placement];
            if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
              value = Math.max(popper[placement], boundaries[placement]);
            }
            return defineProperty({}, placement, value);
          },
          secondary: function secondary(placement) {
            var mainSide = placement === 'right' ? 'left' : 'top';
            var value = popper[mainSide];
            if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
              value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
            }
            return defineProperty({}, mainSide, value);
          }
        };

        order.forEach(function(placement) {
          var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
          popper = _extends({}, popper, check[side](placement));
        });

        data.offsets.popper = popper;

        return data;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function shift(data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var shiftvariation = placement.split('-')[1];

        // if shift shiftvariation is specified, run the modifier
        if (shiftvariation) {
          var _data$offsets = data.offsets,
            reference = _data$offsets.reference,
            popper = _data$offsets.popper;

          var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
          var side = isVertical ? 'left' : 'top';
          var measurement = isVertical ? 'width' : 'height';

          var shiftOffsets = {
            start: defineProperty({}, side, reference[side]),
            end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
          };

          data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
        }

        return data;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function hide(data) {
        if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
          return data;
        }

        var refRect = data.offsets.reference;
        var bound = find(data.instance.modifiers, function(modifier) {
          return modifier.name === 'preventOverflow';
        }).boundaries;

        if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
          // Avoid unnecessary DOM access if visibility hasn't changed
          if (data.hide === true) {
            return data;
          }

          data.hide = true;
          data.attributes['x-out-of-boundaries'] = '';
        } else {
          // Avoid unnecessary DOM access if visibility hasn't changed
          if (data.hide === false) {
            return data;
          }

          data.hide = false;
          data.attributes['x-out-of-boundaries'] = false;
        }

        return data;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function inner(data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;

        var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

        var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

        popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

        data.placement = getOppositePlacement(placement);
        data.offsets.popper = getClientRect(popper);

        return data;
      }

      /**
       * Modifier function, each modifier can have a function of this type assigned
       * to its `fn` property.<br />
       * These functions will be called on each update, this means that you must
       * make sure they are performant enough to avoid performance bottlenecks.
       *
       * @function ModifierFn
       * @argument {dataObject} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {dataObject} The data object, properly modified
       */

      /**
       * Modifiers are plugins used to alter the behavior of your poppers.<br />
       * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
       * needed by the library.
       *
       * Usually you don't want to override the `order`, `fn` and `onLoad` props.
       * All the other properties are configurations that could be tweaked.
       * @namespace modifiers
       */
      var modifiers = {
        /**
         * Modifier used to shift the popper on the start or end of its reference
         * element.<br />
         * It will read the variation of the `placement` property.<br />
         * It can be one either `-end` or `-start`.
         * @memberof modifiers
         * @inner
         */
        shift: {
          /** @prop {number} order=100 - Index used to define the order of execution */
          order: 100,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: shift
        },

        /**
         * The `offset` modifier can shift your popper on both its axis.
         *
         * It accepts the following units:
         * - `px` or unitless, interpreted as pixels
         * - `%` or `%r`, percentage relative to the length of the reference element
         * - `%p`, percentage relative to the length of the popper element
         * - `vw`, CSS viewport width unit
         * - `vh`, CSS viewport height unit
         *
         * For length is intended the main axis relative to the placement of the popper.<br />
         * This means that if the placement is `top` or `bottom`, the length will be the
         * `width`. In case of `left` or `right`, it will be the height.
         *
         * You can provide a single value (as `Number` or `String`), or a pair of values
         * as `String` divided by a comma or one (or more) white spaces.<br />
         * The latter is a deprecated method because it leads to confusion and will be
         * removed in v2.<br />
         * Additionally, it accepts additions and subtractions between different units.
         * Note that multiplications and divisions aren't supported.
         *
         * Valid examples are:
         * ```
         * 10
         * '10%'
         * '10, 10'
         * '10%, 10'
         * '10 + 10%'
         * '10 - 5vh + 3%'
         * '-10px + 5vh, 5px - 6%'
         * ```
         * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
         * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
         * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
         *
         * @memberof modifiers
         * @inner
         */
        offset: {
          /** @prop {number} order=200 - Index used to define the order of execution */
          order: 200,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: offset,
          /** @prop {Number|String} offset=0
           * The offset value as described in the modifier description
           */
          offset: 0
        },

        /**
         * Modifier used to prevent the popper from being positioned outside the boundary.
         *
         * An scenario exists where the reference itself is not within the boundaries.<br />
         * We can say it has "escaped the boundaries" — or just "escaped".<br />
         * In this case we need to decide whether the popper should either:
         *
         * - detach from the reference and remain "trapped" in the boundaries, or
         * - if it should ignore the boundary and "escape with its reference"
         *
         * When `escapeWithReference` is set to`true` and reference is completely
         * outside its boundaries, the popper will overflow (or completely leave)
         * the boundaries in order to remain attached to the edge of the reference.
         *
         * @memberof modifiers
         * @inner
         */
        preventOverflow: {
          /** @prop {number} order=300 - Index used to define the order of execution */
          order: 300,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: preventOverflow,
          /**
           * @prop {Array} [priority=['left','right','top','bottom']]
           * Popper will try to prevent overflow following these priorities by default,
           * then, it could overflow on the left and on top of the `boundariesElement`
           */
          priority: ['left', 'right', 'top', 'bottom'],
          /**
           * @prop {number} padding=5
           * Amount of pixel used to define a minimum distance between the boundaries
           * and the popper this makes sure the popper has always a little padding
           * between the edges of its container
           */
          padding: 5,
          /**
           * @prop {String|HTMLElement} boundariesElement='scrollParent'
           * Boundaries used by the modifier, can be `scrollParent`, `window`,
           * `viewport` or any DOM element.
           */
          boundariesElement: 'scrollParent'
        },

        /**
         * Modifier used to make sure the reference and its popper stay near eachothers
         * without leaving any gap between the two. Expecially useful when the arrow is
         * enabled and you want to assure it to point to its reference element.
         * It cares only about the first axis, you can still have poppers with margin
         * between the popper and its reference element.
         * @memberof modifiers
         * @inner
         */
        keepTogether: {
          /** @prop {number} order=400 - Index used to define the order of execution */
          order: 400,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: keepTogether
        },

        /**
         * This modifier is used to move the `arrowElement` of the popper to make
         * sure it is positioned between the reference element and its popper element.
         * It will read the outer size of the `arrowElement` node to detect how many
         * pixels of conjuction are needed.
         *
         * It has no effect if no `arrowElement` is provided.
         * @memberof modifiers
         * @inner
         */
        arrow: {
          /** @prop {number} order=500 - Index used to define the order of execution */
          order: 500,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: arrow,
          /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
          element: '[x-arrow]'
        },

        /**
         * Modifier used to flip the popper's placement when it starts to overlap its
         * reference element.
         *
         * Requires the `preventOverflow` modifier before it in order to work.
         *
         * **NOTE:** this modifier will interrupt the current update cycle and will
         * restart it if it detects the need to flip the placement.
         * @memberof modifiers
         * @inner
         */
        flip: {
          /** @prop {number} order=600 - Index used to define the order of execution */
          order: 600,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: flip,
          /**
           * @prop {String|Array} behavior='flip'
           * The behavior used to change the popper's placement. It can be one of
           * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
           * placements (with optional variations).
           */
          behavior: 'flip',
          /**
           * @prop {number} padding=5
           * The popper will flip if it hits the edges of the `boundariesElement`
           */
          padding: 5,
          /**
           * @prop {String|HTMLElement} boundariesElement='viewport'
           * The element which will define the boundaries of the popper position,
           * the popper will never be placed outside of the defined boundaries
           * (except if keepTogether is enabled)
           */
          boundariesElement: 'viewport'
        },

        /**
         * Modifier used to make the popper flow toward the inner of the reference element.
         * By default, when this modifier is disabled, the popper will be placed outside
         * the reference element.
         * @memberof modifiers
         * @inner
         */
        inner: {
          /** @prop {number} order=700 - Index used to define the order of execution */
          order: 700,
          /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
          enabled: false,
          /** @prop {ModifierFn} */
          fn: inner
        },

        /**
         * Modifier used to hide the popper when its reference element is outside of the
         * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
         * be used to hide with a CSS selector the popper when its reference is
         * out of boundaries.
         *
         * Requires the `preventOverflow` modifier before it in order to work.
         * @memberof modifiers
         * @inner
         */
        hide: {
          /** @prop {number} order=800 - Index used to define the order of execution */
          order: 800,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: hide
        },

        /**
         * Computes the style that will be applied to the popper element to gets
         * properly positioned.
         *
         * Note that this modifier will not touch the DOM, it just prepares the styles
         * so that `applyStyle` modifier can apply it. This separation is useful
         * in case you need to replace `applyStyle` with a custom implementation.
         *
         * This modifier has `850` as `order` value to maintain backward compatibility
         * with previous versions of Popper.js. Expect the modifiers ordering method
         * to change in future major versions of the library.
         *
         * @memberof modifiers
         * @inner
         */
        computeStyle: {
          /** @prop {number} order=850 - Index used to define the order of execution */
          order: 850,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: computeStyle,
          /**
           * @prop {Boolean} gpuAcceleration=true
           * If true, it uses the CSS 3d transformation to position the popper.
           * Otherwise, it will use the `top` and `left` properties.
           */
          gpuAcceleration: true,
          /**
           * @prop {string} [x='bottom']
           * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
           * Change this if your popper should grow in a direction different from `bottom`
           */
          x: 'bottom',
          /**
           * @prop {string} [x='left']
           * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
           * Change this if your popper should grow in a direction different from `right`
           */
          y: 'right'
        },

        /**
         * Applies the computed styles to the popper element.
         *
         * All the DOM manipulations are limited to this modifier. This is useful in case
         * you want to integrate Popper.js inside a framework or view library and you
         * want to delegate all the DOM manipulations to it.
         *
         * Note that if you disable this modifier, you must make sure the popper element
         * has its position set to `absolute` before Popper.js can do its work!
         *
         * Just disable this modifier and define you own to achieve the desired effect.
         *
         * @memberof modifiers
         * @inner
         */
        applyStyle: {
          /** @prop {number} order=900 - Index used to define the order of execution */
          order: 900,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: applyStyle,
          /** @prop {Function} */
          onLoad: applyStyleOnLoad,
          /**
           * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
           * @prop {Boolean} gpuAcceleration=true
           * If true, it uses the CSS 3d transformation to position the popper.
           * Otherwise, it will use the `top` and `left` properties.
           */
          gpuAcceleration: undefined
        }
      };

      /**
       * The `dataObject` is an object containing all the informations used by Popper.js
       * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
       * @name dataObject
       * @property {Object} data.instance The Popper.js instance
       * @property {String} data.placement Placement applied to popper
       * @property {String} data.originalPlacement Placement originally defined on init
       * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
       * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
       * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
       * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
       * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
       * @property {Object} data.boundaries Offsets of the popper boundaries
       * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
       * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
       * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
       * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
       */

      /**
       * Default options provided to Popper.js constructor.<br />
       * These can be overriden using the `options` argument of Popper.js.<br />
       * To override an option, simply pass as 3rd argument an object with the same
       * structure of this object, example:
       * ```
       * new Popper(ref, pop, {
       *   modifiers: {
       *     preventOverflow: { enabled: false }
       *   }
       * })
       * ```
       * @type {Object}
       * @static
       * @memberof Popper
       */
      var Defaults = {
        /**
         * Popper's placement
         * @prop {Popper.placements} placement='bottom'
         */
        placement: 'bottom',

        /**
         * Whether events (resize, scroll) are initially enabled
         * @prop {Boolean} eventsEnabled=true
         */
        eventsEnabled: true,

        /**
         * Set to true if you want to automatically remove the popper when
         * you call the `destroy` method.
         * @prop {Boolean} removeOnDestroy=false
         */
        removeOnDestroy: false,

        /**
         * Callback called when the popper is created.<br />
         * By default, is set to no-op.<br />
         * Access Popper.js instance with `data.instance`.
         * @prop {onCreate}
         */
        onCreate: function onCreate() {},

        /**
         * Callback called when the popper is updated, this callback is not called
         * on the initialization/creation of the popper, but only on subsequent
         * updates.<br />
         * By default, is set to no-op.<br />
         * Access Popper.js instance with `data.instance`.
         * @prop {onUpdate}
         */
        onUpdate: function onUpdate() {},

        /**
         * List of modifiers used to modify the offsets before they are applied to the popper.
         * They provide most of the functionalities of Popper.js
         * @prop {modifiers}
         */
        modifiers: modifiers
      };

      /**
       * @callback onCreate
       * @param {dataObject} data
       */

      /**
       * @callback onUpdate
       * @param {dataObject} data
       */

      // Utils
      // Methods
      var Popper = function() {
        /**
         * Create a new Popper.js instance
         * @class Popper
         * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
         * @param {HTMLElement} popper - The HTML element used as popper.
         * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
         * @return {Object} instance - The generated Popper.js instance
         */
        function Popper(reference, popper) {
          var _this = this;

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          classCallCheck(this, Popper);

          this.scheduleUpdate = function() {
            return requestAnimationFrame(_this.update);
          };

          // make update() debounced, so that it only runs at most once-per-tick
          this.update = debounce(this.update.bind(this));

          // with {} we create a new object with the options inside it
          this.options = _extends({}, Popper.Defaults, options);

          // init state
          this.state = {
            isDestroyed: false,
            isCreated: false,
            scrollParents: []
          };

          // get reference and popper elements (allow jQuery wrappers)
          this.reference = reference.jquery ? reference[0] : reference;
          this.popper = popper.jquery ? popper[0] : popper;

          // Deep merge modifiers options
          this.options.modifiers = {};
          Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function(name) {
            _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
          });

          // Refactoring modifiers' list (Object => Array)
          this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
              return _extends({
                name: name
              }, _this.options.modifiers[name]);
            })
            // sort the modifiers by order
            .sort(function(a, b) {
              return a.order - b.order;
            });

          // modifiers have the ability to execute arbitrary code when Popper.js get inited
          // such code is executed in the same order of its modifier
          // they could add new properties to their options configuration
          // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
          this.modifiers.forEach(function(modifierOptions) {
            if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
              modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
            }
          });

          // fire the first update to position the popper in the right place
          this.update();

          var eventsEnabled = this.options.eventsEnabled;
          if (eventsEnabled) {
            // setup event listeners, they will take care of update the position in specific situations
            this.enableEventListeners();
          }

          this.state.eventsEnabled = eventsEnabled;
        }

        // We can't use class properties because they don't get listed in the
        // class prototype and break stuff like Sinon stubs


        createClass(Popper, [{
          key: 'update',
          value: function update$$1() {
            return update.call(this);
          }
        }, {
          key: 'destroy',
          value: function destroy$$1() {
            return destroy.call(this);
          }
        }, {
          key: 'enableEventListeners',
          value: function enableEventListeners$$1() {
            return enableEventListeners.call(this);
          }
        }, {
          key: 'disableEventListeners',
          value: function disableEventListeners$$1() {
            return disableEventListeners.call(this);
          }

          /**
           * Schedule an update, it will run on the next UI update available
           * @method scheduleUpdate
           * @memberof Popper
           */


          /**
           * Collection of utilities useful when writing custom modifiers.
           * Starting from version 1.7, this method is available only if you
           * include `popper-utils.js` before `popper.js`.
           *
           * **DEPRECATION**: This way to access PopperUtils is deprecated
           * and will be removed in v2! Use the PopperUtils module directly instead.
           * Due to the high instability of the methods contained in Utils, we can't
           * guarantee them to follow semver. Use them at your own risk!
           * @static
           * @private
           * @type {Object}
           * @deprecated since version 1.8
           * @member Utils
           * @memberof Popper
           */

        }]);
        return Popper;
      }();

      /**
       * The `referenceObject` is an object that provides an interface compatible with Popper.js
       * and lets you use it as replacement of a real DOM node.<br />
       * You can use this method to position a popper relatively to a set of coordinates
       * in case you don't have a DOM node to use as reference.
       *
       * ```
       * new Popper(referenceObject, popperNode);
       * ```
       *
       * NB: This feature isn't supported in Internet Explorer 10
       * @name referenceObject
       * @property {Function} data.getBoundingClientRect
       * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
       * @property {number} data.clientWidth
       * An ES6 getter that will return the width of the virtual reference element.
       * @property {number} data.clientHeight
       * An ES6 getter that will return the height of the virtual reference element.
       */


      Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
      Popper.placements = placements;
      Popper.Defaults = Defaults;

      /* harmony default export */
      __webpack_exports__["default"] = (Popper);
      //# sourceMappingURL=popper.js.map

      /* WEBPACK VAR INJECTION */
    }.call(__webpack_exports__, __webpack_require__(4)))

    /***/
  }),
  /* 4 */
  /***/
  (function(module, exports) {

    var g;

    // This works in non-strict mode
    g = (function() {
      return this;
    })();

    try {
      // This works if eval is allowed (see CSP)
      g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
      // This works if the window reference is available
      if (typeof window === "object")
        g = window;
    }

    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}

    module.exports = g;


    /***/
  }),
  /* 5 */
  /***/
  (function(module, exports) {

    /*!
     * Bootstrap v4.0.0-beta (https://getbootstrap.com)
     * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */

    if (typeof jQuery === 'undefined') {
      throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
    }

    (function($) {
      var version = $.fn.jquery.split(' ')[0].split('.')
      if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
      }
    })(jQuery);

    (function() {
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.0.0-beta): util.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */

      var Util = function($) {

        /**
         * ------------------------------------------------------------------------
         * Private TransitionEnd Helpers
         * ------------------------------------------------------------------------
         */

        var transition = false;

        var MAX_UID = 1000000;

        var TransitionEndEvent = {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd otransitionend',
          transition: 'transitionend'

          // shoutout AngusCroll (https://goo.gl/pxwQGp)
        };

        function toType(obj) {
          return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        }

        function isElement(obj) {
          return (obj[0] || obj).nodeType;
        }

        function getSpecialTransitionEndEvent() {
          return {
            bindType: transition.end,
            delegateType: transition.end,
            handle: function handle(event) {
              if ($(event.target).is(this)) {
                return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
              }
              return undefined;
            }
          };
        }

        function transitionEndTest() {
          if (window.QUnit) {
            return false;
          }

          var el = document.createElement('bootstrap');

          for (var name in TransitionEndEvent) {
            if (el.style[name] !== undefined) {
              return {
                end: TransitionEndEvent[name]
              };
            }
          }

          return false;
        }

        function transitionEndEmulator(duration) {
          var _this = this;

          var called = false;

          $(this).one(Util.TRANSITION_END, function() {
            called = true;
          });

          setTimeout(function() {
            if (!called) {
              Util.triggerTransitionEnd(_this);
            }
          }, duration);

          return this;
        }

        function setTransitionEndSupport() {
          transition = transitionEndTest();

          $.fn.emulateTransitionEnd = transitionEndEmulator;

          if (Util.supportsTransitionEnd()) {
            $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
          }
        }

        /**
         * --------------------------------------------------------------------------
         * Public Util Api
         * --------------------------------------------------------------------------
         */

        var Util = {

          TRANSITION_END: 'bsTransitionEnd',

          getUID: function getUID(prefix) {
            do {
              // eslint-disable-next-line no-bitwise
              prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
            } while (document.getElementById(prefix));
            return prefix;
          },
          getSelectorFromElement: function getSelectorFromElement(element) {
            var selector = element.getAttribute('data-target');
            if (!selector || selector === '#') {
              selector = element.getAttribute('href') || '';
            }

            try {
              var $selector = $(selector);
              return $selector.length > 0 ? selector : null;
            } catch (error) {
              return null;
            }
          },
          reflow: function reflow(element) {
            return element.offsetHeight;
          },
          triggerTransitionEnd: function triggerTransitionEnd(element) {
            $(element).trigger(transition.end);
          },
          supportsTransitionEnd: function supportsTransitionEnd() {
            return Boolean(transition);
          },
          typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
            for (var property in configTypes) {
              if (configTypes.hasOwnProperty(property)) {
                var expectedTypes = configTypes[property];
                var value = config[property];
                var valueType = value && isElement(value) ? 'element' : toType(value);

                if (!new RegExp(expectedTypes).test(valueType)) {
                  throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
                }
              }
            }
          }
        };

        setTransitionEndSupport();

        return Util;
      }(jQuery);

      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.0.0-beta): alert.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */

      var Alert = function($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'alert';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.alert';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 150;

        var Selector = {
          DISMISS: '[data-dismiss="alert"]'
        };

        var Event = {
          CLOSE: 'close' + EVENT_KEY,
          CLOSED: 'closed' + EVENT_KEY,
          CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
          ALERT: 'alert',
          FADE: 'fade',
          SHOW: 'show'

          /**
           * ------------------------------------------------------------------------
           * Class Definition
           * ------------------------------------------------------------------------
           */

        };
        var Alert = function() {
          function Alert(element) {
            _classCallCheck(this, Alert);

            this._element = element;
          }

          // getters

          // public

          Alert.prototype.close = function close(element) {
            element = element || this._element;

            var rootElement = this._getRootElement(element);
            var customEvent = this._triggerCloseEvent(rootElement);

            if (customEvent.isDefaultPrevented()) {
              return;
            }

            this._removeElement(rootElement);
          };

          Alert.prototype.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY);
            this._element = null;
          };

          // private

          Alert.prototype._getRootElement = function _getRootElement(element) {
            var selector = Util.getSelectorFromElement(element);
            var parent = false;

            if (selector) {
              parent = $(selector)[0];
            }

            if (!parent) {
              parent = $(element).closest('.' + ClassName.ALERT)[0];
            }

            return parent;
          };

          Alert.prototype._triggerCloseEvent = function _triggerCloseEvent(element) {
            var closeEvent = $.Event(Event.CLOSE);

            $(element).trigger(closeEvent);
            return closeEvent;
          };

          Alert.prototype._removeElement = function _removeElement(element) {
            var _this2 = this;

            $(element).removeClass(ClassName.SHOW);

            if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
              this._destroyElement(element);
              return;
            }

            $(element).one(Util.TRANSITION_END, function(event) {
              return _this2._destroyElement(element, event);
            }).emulateTransitionEnd(TRANSITION_DURATION);
          };

          Alert.prototype._destroyElement = function _destroyElement(element) {
            $(element).detach().trigger(Event.CLOSED).remove();
          };

          // static

          Alert._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function() {
              var $element = $(this);
              var data = $element.data(DATA_KEY);

              if (!data) {
                data = new Alert(this);
                $element.data(DATA_KEY, data);
              }

              if (config === 'close') {
                data[config](this);
              }
            });
          };

          Alert._handleDismiss = function _handleDismiss(alertInstance) {
            return function(event) {
              if (event) {
                event.preventDefault();
              }

              alertInstance.close(this);
            };
          };

          _createClass(Alert, null, [{
            key: 'VERSION',
            get: function get() {
              return VERSION;
            }
          }]);

          return Alert;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Alert._jQueryInterface;
        $.fn[NAME].Constructor = Alert;
        $.fn[NAME].noConflict = function() {
          $.fn[NAME] = JQUERY_NO_CONFLICT;
          return Alert._jQueryInterface;
        };

        return Alert;
      }(jQuery);

      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.0.0-beta): button.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */

      var Button = function($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'button';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.button';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];

        var ClassName = {
          ACTIVE: 'active',
          BUTTON: 'btn',
          FOCUS: 'focus'
        };

        var Selector = {
          DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
          DATA_TOGGLE: '[data-toggle="buttons"]',
          INPUT: 'input',
          ACTIVE: '.active',
          BUTTON: '.btn'
        };

        var Event = {
          CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
          FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)

          /**
           * ------------------------------------------------------------------------
           * Class Definition
           * ------------------------------------------------------------------------
           */

        };
        var Button = function() {
          function Button(element) {
            _classCallCheck(this, Button);

            this._element = element;
          }

          // getters

          // public

          Button.prototype.toggle = function toggle() {
            var triggerChangeEvent = true;
            var addAriaPressed = true;
            var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

            if (rootElement) {
              var input = $(this._element).find(Selector.INPUT)[0];

              if (input) {
                if (input.type === 'radio') {
                  if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
                    triggerChangeEvent = false;
                  } else {
                    var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

                    if (activeElement) {
                      $(activeElement).removeClass(ClassName.ACTIVE);
                    }
                  }
                }

                if (triggerChangeEvent) {
                  if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                    return;
                  }
                  input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
                  $(input).trigger('change');
                }

                input.focus();
                addAriaPressed = false;
              }
            }

            if (addAriaPressed) {
              this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
            }

            if (triggerChangeEvent) {
              $(this._element).toggleClass(ClassName.ACTIVE);
            }
          };

          Button.prototype.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY);
            this._element = null;
          };

          // static

          Button._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function() {
              var data = $(this).data(DATA_KEY);

              if (!data) {
                data = new Button(this);
                $(this).data(DATA_KEY, data);
              }

              if (config === 'toggle') {
                data[config]();
              }
            });
          };

          _createClass(Button, null, [{
            key: 'VERSION',
            get: function get() {
              return VERSION;
            }
          }]);

          return Button;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function(event) {
          event.preventDefault();

          var button = event.target;

          if (!$(button).hasClass(ClassName.BUTTON)) {
            button = $(button).closest(Selector.BUTTON);
          }

          Button._jQueryInterface.call($(button), 'toggle');
        }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function(event) {
          var button = $(event.target).closest(Selector.BUTTON)[0];
          $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Button._jQueryInterface;
        $.fn[NAME].Constructor = Button;
        $.fn[NAME].noConflict = function() {
          $.fn[NAME] = JQUERY_NO_CONFLICT;
          return Button._jQueryInterface;
        };

        return Button;
      }(jQuery);

      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.0.0-beta): carousel.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */

      var Carousel = function($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'carousel';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.carousel';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 600;
        var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
        var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key
        var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

        var Default = {
          interval: 5000,
          keyboard: true,
          slide: false,
          pause: 'hover',
          wrap: true
        };

        var DefaultType = {
          interval: '(number|boolean)',
          keyboard: 'boolean',
          slide: '(boolean|string)',
          pause: '(string|boolean)',
          wrap: 'boolean'
        };

        var Direction = {
          NEXT: 'next',
          PREV: 'prev',
          LEFT: 'left',
          RIGHT: 'right'
        };

        var Event = {
          SLIDE: 'slide' + EVENT_KEY,
          SLID: 'slid' + EVENT_KEY,
          KEYDOWN: 'keydown' + EVENT_KEY,
          MOUSEENTER: 'mouseenter' + EVENT_KEY,
          MOUSELEAVE: 'mouseleave' + EVENT_KEY,
          TOUCHEND: 'touchend' + EVENT_KEY,
          LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
          CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
          CAROUSEL: 'carousel',
          ACTIVE: 'active',
          SLIDE: 'slide',
          RIGHT: 'carousel-item-right',
          LEFT: 'carousel-item-left',
          NEXT: 'carousel-item-next',
          PREV: 'carousel-item-prev',
          ITEM: 'carousel-item'
        };

        var Selector = {
          ACTIVE: '.active',
          ACTIVE_ITEM: '.active.carousel-item',
          ITEM: '.carousel-item',
          NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
          INDICATORS: '.carousel-indicators',
          DATA_SLIDE: '[data-slide], [data-slide-to]',
          DATA_RIDE: '[data-ride="carousel"]'

          /**
           * ------------------------------------------------------------------------
           * Class Definition
           * ------------------------------------------------------------------------
           */

        };
        var Carousel = function() {
          function Carousel(element, config) {
            _classCallCheck(this, Carousel);

            this._items = null;
            this._interval = null;
            this._activeElement = null;

            this._isPaused = false;
            this._isSliding = false;

            this.touchTimeout = null;

            this._config = this._getConfig(config);
            this._element = $(element)[0];
            this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

            this._addEventListeners();
          }

          // getters

          // public

          Carousel.prototype.next = function next() {
            if (!this._isSliding) {
              this._slide(Direction.NEXT);
            }
          };

          Carousel.prototype.nextWhenVisible = function nextWhenVisible() {
            // Don't call next when the page isn't visible
            if (!document.hidden) {
              this.next();
            }
          };

          Carousel.prototype.prev = function prev() {
            if (!this._isSliding) {
              this._slide(Direction.PREV);
            }
          };

          Carousel.prototype.pause = function pause(event) {
            if (!event) {
              this._isPaused = true;
            }

            if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
              Util.triggerTransitionEnd(this._element);
              this.cycle(true);
            }

            clearInterval(this._interval);
            this._interval = null;
          };

          Carousel.prototype.cycle = function cycle(event) {
            if (!event) {
              this._isPaused = false;
            }

            if (this._interval) {
              clearInterval(this._interval);
              this._interval = null;
            }

            if (this._config.interval && !this._isPaused) {
              this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
            }
          };

          Carousel.prototype.to = function to(index) {
            var _this3 = this;

            this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

            var activeIndex = this._getItemIndex(this._activeElement);

            if (index > this._items.length - 1 || index < 0) {
              return;
            }

            if (this._isSliding) {
              $(this._element).one(Event.SLID, function() {
                return _this3.to(index);
              });
              return;
            }

            if (activeIndex === index) {
              this.pause();
              this.cycle();
              return;
            }

            var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

            this._slide(direction, this._items[index]);
          };

          Carousel.prototype.dispose = function dispose() {
            $(this._element).off(EVENT_KEY);
            $.removeData(this._element, DATA_KEY);

            this._items = null;
            this._config = null;
            this._element = null;
            this._interval = null;
            this._isPaused = null;
            this._isSliding = null;
            this._activeElement = null;
            this._indicatorsElement = null;
          };

          // private

          Carousel.prototype._getConfig = function _getConfig(config) {
            config = $.extend({}, Default, config);
            Util.typeCheckConfig(NAME, config, DefaultType);
            return config;
          };

          Carousel.prototype._addEventListeners = function _addEventListeners() {
            var _this4 = this;

            if (this._config.keyboard) {
              $(this._element).on(Event.KEYDOWN, function(event) {
                return _this4._keydown(event);
              });
            }

            if (this._config.pause === 'hover') {
              $(this._element).on(Event.MOUSEENTER, function(event) {
                return _this4.pause(event);
              }).on(Event.MOUSELEAVE, function(event) {
                return _this4.cycle(event);
              });
              if ('ontouchstart' in document.documentElement) {
                // if it's a touch-enabled device, mouseenter/leave are fired as
                // part of the mouse compatibility events on first tap - the carousel
                // would stop cycling until user tapped out of it;
                // here, we listen for touchend, explicitly pause the carousel
                // (as if it's the second time we tap on it, mouseenter compat event
                // is NOT fired) and after a timeout (to allow for mouse compatibility
                // events to fire) we explicitly restart cycling
                $(this._element).on(Event.TOUCHEND, function() {
                  _this4.pause();
                  if (_this4.touchTimeout) {
                    clearTimeout(_this4.touchTimeout);
                  }
                  _this4.touchTimeout = setTimeout(function(event) {
                    return _this4.cycle(event);
                  }, TOUCHEVENT_COMPAT_WAIT + _this4._config.interval);
                });
              }
            }
          };

          Carousel.prototype._keydown = function _keydown(event) {
            if (/input|textarea/i.test(event.target.tagName)) {
              return;
            }

            switch (event.which) {
              case ARROW_LEFT_KEYCODE:
                event.preventDefault();
                this.prev();
                break;
              case ARROW_RIGHT_KEYCODE:
                event.preventDefault();
                this.next();
                break;
              default:
                return;
            }
          };

          Carousel.prototype._getItemIndex = function _getItemIndex(element) {
            this._items = $.makeArray($(element).parent().find(Selector.ITEM));
            return this._items.indexOf(element);
          };

          Carousel.prototype._getItemByDirection = function _getItemByDirection(direction, activeElement) {
            var isNextDirection = direction === Direction.NEXT;
            var isPrevDirection = direction === Direction.PREV;
            var activeIndex = this._getItemIndex(activeElement);
            var lastItemIndex = this._items.length - 1;
            var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

            if (isGoingToWrap && !this._config.wrap) {
              return activeElement;
            }

            var delta = direction === Direction.PREV ? -1 : 1;
            var itemIndex = (activeIndex + delta) % this._items.length;

            return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
          };

          Carousel.prototype._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
            var targetIndex = this._getItemIndex(relatedTarget);
            var fromIndex = this._getItemIndex($(this._element).find(Selector.ACTIVE_ITEM)[0]);
            var slideEvent = $.Event(Event.SLIDE, {
              relatedTarget: relatedTarget,
              direction: eventDirectionName,
              from: fromIndex,
              to: targetIndex
            });

            $(this._element).trigger(slideEvent);

            return slideEvent;
          };

          Carousel.prototype._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
            if (this._indicatorsElement) {
              $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

              var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

              if (nextIndicator) {
                $(nextIndicator).addClass(ClassName.ACTIVE);
              }
            }
          };

          Carousel.prototype._slide = function _slide(direction, element) {
            var _this5 = this;

            var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
            var activeElementIndex = this._getItemIndex(activeElement);
            var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
            var nextElementIndex = this._getItemIndex(nextElement);
            var isCycling = Boolean(this._interval);

            var directionalClassName = void 0;
            var orderClassName = void 0;
            var eventDirectionName = void 0;

            if (direction === Direction.NEXT) {
              directionalClassName = ClassName.LEFT;
              orderClassName = ClassName.NEXT;
              eventDirectionName = Direction.LEFT;
            } else {
              directionalClassName = ClassName.RIGHT;
              orderClassName = ClassName.PREV;
              eventDirectionName = Direction.RIGHT;
            }

            if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
              this._isSliding = false;
              return;
            }

            var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
            if (slideEvent.isDefaultPrevented()) {
              return;
            }

            if (!activeElement || !nextElement) {
              // some weirdness is happening, so we bail
              return;
            }

            this._isSliding = true;

            if (isCycling) {
              this.pause();
            }

            this._setActiveIndicatorElement(nextElement);

            var slidEvent = $.Event(Event.SLID, {
              relatedTarget: nextElement,
              direction: eventDirectionName,
              from: activeElementIndex,
              to: nextElementIndex
            });

            if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {

              $(nextElement).addClass(orderClassName);

              Util.reflow(nextElement);

              $(activeElement).addClass(directionalClassName);
              $(nextElement).addClass(directionalClassName);

              $(activeElement).one(Util.TRANSITION_END, function() {
                $(nextElement).removeClass(directionalClassName + ' ' + orderClassName).addClass(ClassName.ACTIVE);

                $(activeElement).removeClass(ClassName.ACTIVE + ' ' + orderClassName + ' ' + directionalClassName);

                _this5._isSliding = false;

                setTimeout(function() {
                  return $(_this5._element).trigger(slidEvent);
                }, 0);
              }).emulateTransitionEnd(TRANSITION_DURATION);
            } else {
              $(activeElement).removeClass(ClassName.ACTIVE);
              $(nextElement).addClass(ClassName.ACTIVE);

              this._isSliding = false;
              $(this._element).trigger(slidEvent);
            }

            if (isCycling) {
              this.cycle();
            }
          };

          // static

          Carousel._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function() {
              var data = $(this).data(DATA_KEY);
              var _config = $.extend({}, Default, $(this).data());

              if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
                $.extend(_config, config);
              }

              var action = typeof config === 'string' ? config : _config.slide;

              if (!data) {
                data = new Carousel(this, _config);
                $(this).data(DATA_KEY, data);
              }

              if (typeof config === 'number') {
                data.to(config);
              } else if (typeof action === 'string') {
                if (data[action] === undefined) {
                  throw new Error('No method named "' + action + '"');
                }
                data[action]();
              } else if (_config.interval) {
                data.pause();
                data.cycle();
              }
            });
          };

          Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
            var selector = Util.getSelectorFromElement(this);

            if (!selector) {
              return;
            }

            var target = $(selector)[0];

            if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
              return;
            }

            var config = $.extend({}, $(target).data(), $(this).data());
            var slideIndex = this.getAttribute('data-slide-to');

            if (slideIndex) {
              config.interval = false;
            }

            Carousel._jQueryInterface.call($(target), config);

            if (slideIndex) {
              $(target).data(DATA_KEY).to(slideIndex);
            }

            event.preventDefault();
          };

          _createClass(Carousel, null, [{
            key: 'VERSION',
            get: function get() {
              return VERSION;
            }
          }, {
            key: 'Default',
            get: function get() {
              return Default;
            }
          }]);

          return Carousel;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

        $(window).on(Event.LOAD_DATA_API, function() {
          $(Selector.DATA_RIDE).each(function() {
            var $carousel = $(this);
            Carousel._jQueryInterface.call($carousel, $carousel.data());
          });
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Carousel._jQueryInterface;
        $.fn[NAME].Constructor = Carousel;
        $.fn[NAME].noConflict = function() {
          $.fn[NAME] = JQUERY_NO_CONFLICT;
          return Carousel._jQueryInterface;
        };

        return Carousel;
      }(jQuery);

      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.0.0-beta): collapse.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */

      var Collapse = function($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'collapse';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.collapse';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 600;

        var Default = {
          toggle: true,
          parent: ''
        };

        var DefaultType = {
          toggle: 'boolean',
          parent: 'string'
        };

        var Event = {
          SHOW: 'show' + EVENT_KEY,
          SHOWN: 'shown' + EVENT_KEY,
          HIDE: 'hide' + EVENT_KEY,
          HIDDEN: 'hidden' + EVENT_KEY,
          CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
          SHOW: 'show',
          COLLAPSE: 'collapse',
          COLLAPSING: 'collapsing',
          COLLAPSED: 'collapsed'
        };

        var Dimension = {
          WIDTH: 'width',
          HEIGHT: 'height'
        };

        var Selector = {
          ACTIVES: '.show, .collapsing',
          DATA_TOGGLE: '[data-toggle="collapse"]'

          /**
           * ------------------------------------------------------------------------
           * Class Definition
           * ------------------------------------------------------------------------
           */

        };
        var Collapse = function() {
          function Collapse(element, config) {
            _classCallCheck(this, Collapse);

            this._isTransitioning = false;
            this._element = element;
            this._config = this._getConfig(config);
            this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
            var tabToggles = $(Selector.DATA_TOGGLE);
            for (var i = 0; i < tabToggles.length; i++) {
              var elem = tabToggles[i];
              var selector = Util.getSelectorFromElement(elem);
              if (selector !== null && $(selector).filter(element).length > 0) {
                this._triggerArray.push(elem);
              }
            }

            this._parent = this._config.parent ? this._getParent() : null;

            if (!this._config.parent) {
              this._addAriaAndCollapsedClass(this._element, this._triggerArray);
            }

            if (this._config.toggle) {
              this.toggle();
            }
          }

          // getters

          // public

          Collapse.prototype.toggle = function toggle() {
            if ($(this._element).hasClass(ClassName.SHOW)) {
              this.hide();
            } else {
              this.show();
            }
          };

          Collapse.prototype.show = function show() {
            var _this6 = this;

            if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
              return;
            }

            var actives = void 0;
            var activesData = void 0;

            if (this._parent) {
              actives = $.makeArray($(this._parent).children().children(Selector.ACTIVES));
              if (!actives.length) {
                actives = null;
              }
            }

            if (actives) {
              activesData = $(actives).data(DATA_KEY);
              if (activesData && activesData._isTransitioning) {
                return;
              }
            }

            var startEvent = $.Event(Event.SHOW);
            $(this._element).trigger(startEvent);
            if (startEvent.isDefaultPrevented()) {
              return;
            }

            if (actives) {
              Collapse._jQueryInterface.call($(actives), 'hide');
              if (!activesData) {
                $(actives).data(DATA_KEY, null);
              }
            }

            var dimension = this._getDimension();

            $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

            this._element.style[dimension] = 0;

            if (this._triggerArray.length) {
              $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
            }

            this.setTransitioning(true);

            var complete = function complete() {
              $(_this6._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);

              _this6._element.style[dimension] = '';

              _this6.setTransitioning(false);

              $(_this6._element).trigger(Event.SHOWN);
            };

            if (!Util.supportsTransitionEnd()) {
              complete();
              return;
            }

            var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            var scrollSize = 'scroll' + capitalizedDimension;

            $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

            this._element.style[dimension] = this._element[scrollSize] + 'px';
          };

          Collapse.prototype.hide = function hide() {
            var _this7 = this;

            if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
              return;
            }

            var startEvent = $.Event(Event.HIDE);
            $(this._element).trigger(startEvent);
            if (startEvent.isDefaultPrevented()) {
              return;
            }

            var dimension = this._getDimension();

            this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + 'px';

            Util.reflow(this._element);

            $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

            if (this._triggerArray.length) {
              for (var i = 0; i < this._triggerArray.length; i++) {
                var trigger = this._triggerArray[i];
                var selector = Util.getSelectorFromElement(trigger);
                if (selector !== null) {
                  var $elem = $(selector);
                  if (!$elem.hasClass(ClassName.SHOW)) {
                    $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
                  }
                }
              }
            }

            this.setTransitioning(true);

            var complete = function complete() {
              _this7.setTransitioning(false);
              $(_this7._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
            };

            this._element.style[dimension] = '';

            if (!Util.supportsTransitionEnd()) {
              complete();
              return;
            }

            $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
          };

          Collapse.prototype.setTransitioning = function setTransitioning(isTransitioning) {
            this._isTransitioning = isTransitioning;
          };

          Collapse.prototype.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY);

            this._config = null;
            this._parent = null;
            this._element = null;
            this._triggerArray = null;
            this._isTransitioning = null;
          };

          // private

          Collapse.prototype._getConfig = function _getConfig(config) {
            config = $.extend({}, Default, config);
            config.toggle = Boolean(config.toggle); // coerce string values
            Util.typeCheckConfig(NAME, config, DefaultType);
            return config;
          };

          Collapse.prototype._getDimension = function _getDimension() {
            var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
            return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
          };

          Collapse.prototype._getParent = function _getParent() {
            var _this8 = this;

            var parent = $(this._config.parent)[0];
            var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

            $(parent).find(selector).each(function(i, element) {
              _this8._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
            });

            return parent;
          };

          Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
            if (element) {
              var isOpen = $(element).hasClass(ClassName.SHOW);

              if (triggerArray.length) {
                $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
              }
            }
          };

          // static

          Collapse._getTargetFromElement = function _getTargetFromElement(element) {
            var selector = Util.getSelectorFromElement(element);
            return selector ? $(selector)[0] : null;
          };

          Collapse._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function() {
              var $this = $(this);
              var data = $this.data(DATA_KEY);
              var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

              if (!data && _config.toggle && /show|hide/.test(config)) {
                _config.toggle = false;
              }

              if (!data) {
                data = new Collapse(this, _config);
                $this.data(DATA_KEY, data);
              }

              if (typeof config === 'string') {
                if (data[config] === undefined) {
                  throw new Error('No method named "' + config + '"');
                }
                data[config]();
              }
            });
          };

          _createClass(Collapse, null, [{
            key: 'VERSION',
            get: function get() {
              return VERSION;
            }
          }, {
            key: 'Default',
            get: function get() {
              return Default;
            }
          }]);

          return Collapse;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
          if (!/input|textarea/i.test(event.target.tagName)) {
            event.preventDefault();
          }

          var $trigger = $(this);
          var selector = Util.getSelectorFromElement(this);
          $(selector).each(function() {
            var $target = $(this);
            var data = $target.data(DATA_KEY);
            var config = data ? 'toggle' : $trigger.data();
            Collapse._jQueryInterface.call($target, config);
          });
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Collapse._jQueryInterface;
        $.fn[NAME].Constructor = Collapse;
        $.fn[NAME].noConflict = function() {
          $.fn[NAME] = JQUERY_NO_CONFLICT;
          return Collapse._jQueryInterface;
        };

        return Collapse;
      }(jQuery);

      /* global Popper */

      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.0.0-beta): dropdown.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */

      var Dropdown = function($) {

        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
        }

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'dropdown';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.dropdown';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
        var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key
        var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key
        var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
        var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
        var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
        var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + '|' + ARROW_DOWN_KEYCODE + '|' + ESCAPE_KEYCODE);

        var Event = {
          HIDE: 'hide' + EVENT_KEY,
          HIDDEN: 'hidden' + EVENT_KEY,
          SHOW: 'show' + EVENT_KEY,
          SHOWN: 'shown' + EVENT_KEY,
          CLICK: 'click' + EVENT_KEY,
          CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
          KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY,
          KEYUP_DATA_API: 'keyup' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
          DISABLED: 'disabled',
          SHOW: 'show',
          DROPUP: 'dropup',
          MENURIGHT: 'dropdown-menu-right',
          MENULEFT: 'dropdown-menu-left'
        };

        var Selector = {
          DATA_TOGGLE: '[data-toggle="dropdown"]',
          FORM_CHILD: '.dropdown form',
          MENU: '.dropdown-menu',
          NAVBAR_NAV: '.navbar-nav',
          VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
        };

        var AttachmentMap = {
          TOP: 'top-start',
          TOPEND: 'top-end',
          BOTTOM: 'bottom-start',
          BOTTOMEND: 'bottom-end'
        };

        var Default = {
          placement: AttachmentMap.BOTTOM,
          offset: 0,
          flip: true
        };

        var DefaultType = {
          placement: 'string',
          offset: '(number|string)',
          flip: 'boolean'

          /**
           * ------------------------------------------------------------------------
           * Class Definition
           * ------------------------------------------------------------------------
           */

        };
        var Dropdown = function() {
          function Dropdown(element, config) {
            _classCallCheck(this, Dropdown);

            this._element = element;
            this._popper = null;
            this._config = this._getConfig(config);
            this._menu = this._getMenuElement();
            this._inNavbar = this._detectNavbar();

            this._addEventListeners();
          }

          // getters

          // public

          Dropdown.prototype.toggle = function toggle() {
            if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
              return;
            }

            var parent = Dropdown._getParentFromElement(this._element);
            var isActive = $(this._menu).hasClass(ClassName.SHOW);

            Dropdown._clearMenus();

            if (isActive) {
              return;
            }

            var relatedTarget = {
              relatedTarget: this._element
            };
            var showEvent = $.Event(Event.SHOW, relatedTarget);

            $(parent).trigger(showEvent);

            if (showEvent.isDefaultPrevented()) {
              return;
            }

            var element = this._element;
            // for dropup with alignment we use the parent as popper container
            if ($(parent).hasClass(ClassName.DROPUP)) {
              if ($(this._menu).hasClass(ClassName.MENULEFT) || $(this._menu).hasClass(ClassName.MENURIGHT)) {
                element = parent;
              }
            }
            this._popper = new Popper(element, this._menu, this._getPopperConfig());

            // if this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
            if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {
              $('body').children().on('mouseover', null, $.noop);
            }

            this._element.focus();
            this._element.setAttribute('aria-expanded', true);

            $(this._menu).toggleClass(ClassName.SHOW);
            $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
          };

          Dropdown.prototype.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY);
            $(this._element).off(EVENT_KEY);
            this._element = null;
            this._menu = null;
            if (this._popper !== null) {
              this._popper.destroy();
            }
            this._popper = null;
          };

          Dropdown.prototype.update = function update() {
            this._inNavbar = this._detectNavbar();
            if (this._popper !== null) {
              this._popper.scheduleUpdate();
            }
          };

          // private

          Dropdown.prototype._addEventListeners = function _addEventListeners() {
            var _this9 = this;

            $(this._element).on(Event.CLICK, function(event) {
              event.preventDefault();
              event.stopPropagation();
              _this9.toggle();
            });
          };

          Dropdown.prototype._getConfig = function _getConfig(config) {
            var elementData = $(this._element).data();
            if (elementData.placement !== undefined) {
              elementData.placement = AttachmentMap[elementData.placement.toUpperCase()];
            }

            config = $.extend({}, this.constructor.Default, $(this._element).data(), config);

            Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

            return config;
          };

          Dropdown.prototype._getMenuElement = function _getMenuElement() {
            if (!this._menu) {
              var parent = Dropdown._getParentFromElement(this._element);
              this._menu = $(parent).find(Selector.MENU)[0];
            }
            return this._menu;
          };

          Dropdown.prototype._getPlacement = function _getPlacement() {
            var $parentDropdown = $(this._element).parent();
            var placement = this._config.placement;

            // Handle dropup
            if ($parentDropdown.hasClass(ClassName.DROPUP) || this._config.placement === AttachmentMap.TOP) {
              placement = AttachmentMap.TOP;
              if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
                placement = AttachmentMap.TOPEND;
              }
            } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
              placement = AttachmentMap.BOTTOMEND;
            }
            return placement;
          };

          Dropdown.prototype._detectNavbar = function _detectNavbar() {
            return $(this._element).closest('.navbar').length > 0;
          };

          Dropdown.prototype._getPopperConfig = function _getPopperConfig() {
            var popperConfig = {
              placement: this._getPlacement(),
              modifiers: {
                offset: {
                  offset: this._config.offset
                },
                flip: {
                  enabled: this._config.flip
                }
              }

              // Disable Popper.js for Dropdown in Navbar
            };
            if (this._inNavbar) {
              popperConfig.modifiers.applyStyle = {
                enabled: !this._inNavbar
              };
            }
            return popperConfig;
          };

          // static

          Dropdown._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function() {
              var data = $(this).data(DATA_KEY);
              var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

              if (!data) {
                data = new Dropdown(this, _config);
                $(this).data(DATA_KEY, data);
              }

              if (typeof config === 'string') {
                if (data[config] === undefined) {
                  throw new Error('No method named "' + config + '"');
                }
                data[config]();
              }
            });
          };

          Dropdown._clearMenus = function _clearMenus(event) {
            if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
              return;
            }

            var toggles = $.makeArray($(Selector.DATA_TOGGLE));
            for (var i = 0; i < toggles.length; i++) {
              var parent = Dropdown._getParentFromElement(toggles[i]);
              var context = $(toggles[i]).data(DATA_KEY);
              var relatedTarget = {
                relatedTarget: toggles[i]
              };

              if (!context) {
                continue;
              }

              var dropdownMenu = context._menu;
              if (!$(parent).hasClass(ClassName.SHOW)) {
                continue;
              }

              if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
                continue;
              }

              var hideEvent = $.Event(Event.HIDE, relatedTarget);
              $(parent).trigger(hideEvent);
              if (hideEvent.isDefaultPrevented()) {
                continue;
              }

              // if this is a touch-enabled device we remove the extra
              // empty mouseover listeners we added for iOS support
              if ('ontouchstart' in document.documentElement) {
                $('body').children().off('mouseover', null, $.noop);
              }

              toggles[i].setAttribute('aria-expanded', 'false');

              $(dropdownMenu).removeClass(ClassName.SHOW);
              $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
            }
          };

          Dropdown._getParentFromElement = function _getParentFromElement(element) {
            var parent = void 0;
            var selector = Util.getSelectorFromElement(element);

            if (selector) {
              parent = $(selector)[0];
            }

            return parent || element.parentNode;
          };

          Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
            if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE || /input|textarea/i.test(event.target.tagName)) {
              return;
            }

            event.preventDefault();
            event.stopPropagation();

            if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
              return;
            }

            var parent = Dropdown._getParentFromElement(this);
            var isActive = $(parent).hasClass(ClassName.SHOW);

            if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {

              if (event.which === ESCAPE_KEYCODE) {
                var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
                $(toggle).trigger('focus');
              }

              $(this).trigger('click');
              return;
            }

            var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

            if (!items.length) {
              return;
            }

            var index = items.indexOf(event.target);

            if (event.which === ARROW_UP_KEYCODE && index > 0) {
              // up
              index--;
            }

            if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
              // down
              index++;
            }

            if (index < 0) {
              index = 0;
            }

            items[index].focus();
          };

          _createClass(Dropdown, null, [{
            key: 'VERSION',
            get: function get() {
              return VERSION;
            }
          }, {
            key: 'Default',
            get: function get() {
              return Default;
            }
          }, {
            key: 'DefaultType',
            get: function get() {
              return DefaultType;
            }
          }]);

          return Dropdown;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + ' ' + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
          event.preventDefault();
          event.stopPropagation();
          Dropdown._jQueryInterface.call($(this), 'toggle');
        }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function(e) {
          e.stopPropagation();
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Dropdown._jQueryInterface;
        $.fn[NAME].Constructor = Dropdown;
        $.fn[NAME].noConflict = function() {
          $.fn[NAME] = JQUERY_NO_CONFLICT;
          return Dropdown._jQueryInterface;
        };

        return Dropdown;
      }(jQuery);

      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.0.0-beta): modal.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */

      var Modal = function($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'modal';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.modal';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 300;
        var BACKDROP_TRANSITION_DURATION = 150;
        var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

        var Default = {
          backdrop: true,
          keyboard: true,
          focus: true,
          show: true
        };

        var DefaultType = {
          backdrop: '(boolean|string)',
          keyboard: 'boolean',
          focus: 'boolean',
          show: 'boolean'
        };

        var Event = {
          HIDE: 'hide' + EVENT_KEY,
          HIDDEN: 'hidden' + EVENT_KEY,
          SHOW: 'show' + EVENT_KEY,
          SHOWN: 'shown' + EVENT_KEY,
          FOCUSIN: 'focusin' + EVENT_KEY,
          RESIZE: 'resize' + EVENT_KEY,
          CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
          KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
          MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
          MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
          CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
          SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
          BACKDROP: 'modal-backdrop',
          OPEN: 'modal-open',
          FADE: 'fade',
          SHOW: 'show'
        };

        var Selector = {
          DIALOG: '.modal-dialog',
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
          NAVBAR_TOGGLER: '.navbar-toggler'

          /**
           * ------------------------------------------------------------------------
           * Class Definition
           * ------------------------------------------------------------------------
           */

        };
        var Modal = function() {
          function Modal(element, config) {
            _classCallCheck(this, Modal);

            this._config = this._getConfig(config);
            this._element = element;
            this._dialog = $(element).find(Selector.DIALOG)[0];
            this._backdrop = null;
            this._isShown = false;
            this._isBodyOverflowing = false;
            this._ignoreBackdropClick = false;
            this._originalBodyPadding = 0;
            this._scrollbarWidth = 0;
          }

          // getters

          // public

          Modal.prototype.toggle = function toggle(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
          };

          Modal.prototype.show = function show(relatedTarget) {
            var _this10 = this;

            if (this._isTransitioning) {
              return;
            }

            if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
              this._isTransitioning = true;
            }

            var showEvent = $.Event(Event.SHOW, {
              relatedTarget: relatedTarget
            });

            $(this._element).trigger(showEvent);

            if (this._isShown || showEvent.isDefaultPrevented()) {
              return;
            }

            this._isShown = true;

            this._checkScrollbar();
            this._setScrollbar();

            $(document.body).addClass(ClassName.OPEN);

            this._setEscapeEvent();
            this._setResizeEvent();

            $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function(event) {
              return _this10.hide(event);
            });

            $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function() {
              $(_this10._element).one(Event.MOUSEUP_DISMISS, function(event) {
                if ($(event.target).is(_this10._element)) {
                  _this10._ignoreBackdropClick = true;
                }
              });
            });

            this._showBackdrop(function() {
              return _this10._showElement(relatedTarget);
            });
          };

          Modal.prototype.hide = function hide(event) {
            var _this11 = this;

            if (event) {
              event.preventDefault();
            }

            if (this._isTransitioning || !this._isShown) {
              return;
            }

            var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

            if (transition) {
              this._isTransitioning = true;
            }

            var hideEvent = $.Event(Event.HIDE);

            $(this._element).trigger(hideEvent);

            if (!this._isShown || hideEvent.isDefaultPrevented()) {
              return;
            }

            this._isShown = false;

            this._setEscapeEvent();
            this._setResizeEvent();

            $(document).off(Event.FOCUSIN);

            $(this._element).removeClass(ClassName.SHOW);

            $(this._element).off(Event.CLICK_DISMISS);
            $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

            if (transition) {

              $(this._element).one(Util.TRANSITION_END, function(event) {
                return _this11._hideModal(event);
              }).emulateTransitionEnd(TRANSITION_DURATION);
            } else {
              this._hideModal();
            }
          };

          Modal.prototype.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY);

            $(window, document, this._element, this._backdrop).off(EVENT_KEY);

            this._config = null;
            this._element = null;
            this._dialog = null;
            this._backdrop = null;
            this._isShown = null;
            this._isBodyOverflowing = null;
            this._ignoreBackdropClick = null;
            this._scrollbarWidth = null;
          };

          Modal.prototype.handleUpdate = function handleUpdate() {
            this._adjustDialog();
          };

          // private

          Modal.prototype._getConfig = function _getConfig(config) {
            config = $.extend({}, Default, config);
            Util.typeCheckConfig(NAME, config, DefaultType);
            return config;
          };

          Modal.prototype._showElement = function _showElement(relatedTarget) {
            var _this12 = this;

            var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
              // don't move modals dom position
              document.body.appendChild(this._element);
            }

            this._element.style.display = 'block';
            this._element.removeAttribute('aria-hidden');
            this._element.scrollTop = 0;

            if (transition) {
              Util.reflow(this._element);
            }

            $(this._element).addClass(ClassName.SHOW);

            if (this._config.focus) {
              this._enforceFocus();
            }

            var shownEvent = $.Event(Event.SHOWN, {
              relatedTarget: relatedTarget
            });

            var transitionComplete = function transitionComplete() {
              if (_this12._config.focus) {
                _this12._element.focus();
              }
              _this12._isTransitioning = false;
              $(_this12._element).trigger(shownEvent);
            };

            if (transition) {
              $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
            } else {
              transitionComplete();
            }
          };

          Modal.prototype._enforceFocus = function _enforceFocus() {
            var _this13 = this;

            $(document).off(Event.FOCUSIN) // guard against infinite focus loop
              .on(Event.FOCUSIN, function(event) {
                if (document !== event.target && _this13._element !== event.target && !$(_this13._element).has(event.target).length) {
                  _this13._element.focus();
                }
              });
          };

          Modal.prototype._setEscapeEvent = function _setEscapeEvent() {
            var _this14 = this;

            if (this._isShown && this._config.keyboard) {
              $(this._element).on(Event.KEYDOWN_DISMISS, function(event) {
                if (event.which === ESCAPE_KEYCODE) {
                  event.preventDefault();
                  _this14.hide();
                }
              });
            } else if (!this._isShown) {
              $(this._element).off(Event.KEYDOWN_DISMISS);
            }
          };

          Modal.prototype._setResizeEvent = function _setResizeEvent() {
            var _this15 = this;

            if (this._isShown) {
              $(window).on(Event.RESIZE, function(event) {
                return _this15.handleUpdate(event);
              });
            } else {
              $(window).off(Event.RESIZE);
            }
          };

          Modal.prototype._hideModal = function _hideModal() {
            var _this16 = this;

            this._element.style.display = 'none';
            this._element.setAttribute('aria-hidden', true);
            this._isTransitioning = false;
            this._showBackdrop(function() {
              $(document.body).removeClass(ClassName.OPEN);
              _this16._resetAdjustments();
              _this16._resetScrollbar();
              $(_this16._element).trigger(Event.HIDDEN);
            });
          };

          Modal.prototype._removeBackdrop = function _removeBackdrop() {
            if (this._backdrop) {
              $(this._backdrop).remove();
              this._backdrop = null;
            }
          };

          Modal.prototype._showBackdrop = function _showBackdrop(callback) {
            var _this17 = this;

            var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

            if (this._isShown && this._config.backdrop) {
              var doAnimate = Util.supportsTransitionEnd() && animate;

              this._backdrop = document.createElement('div');
              this._backdrop.className = ClassName.BACKDROP;

              if (animate) {
                $(this._backdrop).addClass(animate);
              }

              $(this._backdrop).appendTo(document.body);

              $(this._element).on(Event.CLICK_DISMISS, function(event) {
                if (_this17._ignoreBackdropClick) {
                  _this17._ignoreBackdropClick = false;
                  return;
                }
                if (event.target !== event.currentTarget) {
                  return;
                }
                if (_this17._config.backdrop === 'static') {
                  _this17._element.focus();
                } else {
                  _this17.hide();
                }
              });

              if (doAnimate) {
                Util.reflow(this._backdrop);
              }

              $(this._backdrop).addClass(ClassName.SHOW);

              if (!callback) {
                return;
              }

              if (!doAnimate) {
                callback();
                return;
              }

              $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
            } else if (!this._isShown && this._backdrop) {
              $(this._backdrop).removeClass(ClassName.SHOW);

              var callbackRemove = function callbackRemove() {
                _this17._removeBackdrop();
                if (callback) {
                  callback();
                }
              };

              if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
              } else {
                callbackRemove();
              }
            } else if (callback) {
              callback();
            }
          };

          // ----------------------------------------------------------------------
          // the following methods are used to handle overflowing modals
          // todo (fat): these should probably be refactored out of modal.js
          // ----------------------------------------------------------------------

          Modal.prototype._adjustDialog = function _adjustDialog() {
            var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

            if (!this._isBodyOverflowing && isModalOverflowing) {
              this._element.style.paddingLeft = this._scrollbarWidth + 'px';
            }

            if (this._isBodyOverflowing && !isModalOverflowing) {
              this._element.style.paddingRight = this._scrollbarWidth + 'px';
            }
          };

          Modal.prototype._resetAdjustments = function _resetAdjustments() {
            this._element.style.paddingLeft = '';
            this._element.style.paddingRight = '';
          };

          Modal.prototype._checkScrollbar = function _checkScrollbar() {
            this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
            this._scrollbarWidth = this._getScrollbarWidth();
          };

          Modal.prototype._setScrollbar = function _setScrollbar() {
            var _this18 = this;

            if (this._isBodyOverflowing) {
              // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
              //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set

              // Adjust fixed content padding
              $(Selector.FIXED_CONTENT).each(function(index, element) {
                var actualPadding = $(element)[0].style.paddingRight;
                var calculatedPadding = $(element).css('padding-right');
                $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this18._scrollbarWidth + 'px');
              });

              // Adjust navbar-toggler margin
              $(Selector.NAVBAR_TOGGLER).each(function(index, element) {
                var actualMargin = $(element)[0].style.marginRight;
                var calculatedMargin = $(element).css('margin-right');
                $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this18._scrollbarWidth + 'px');
              });

              // Adjust body padding
              var actualPadding = document.body.style.paddingRight;
              var calculatedPadding = $('body').css('padding-right');
              $('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + 'px');
            }
          };

          Modal.prototype._resetScrollbar = function _resetScrollbar() {
            // Restore fixed content padding
            $(Selector.FIXED_CONTENT).each(function(index, element) {
              var padding = $(element).data('padding-right');
              if (typeof padding !== 'undefined') {
                $(element).css('padding-right', padding).removeData('padding-right');
              }
            });

            // Restore navbar-toggler margin
            $(Selector.NAVBAR_TOGGLER).each(function(index, element) {
              var margin = $(element).data('margin-right');
              if (typeof margin !== 'undefined') {
                $(element).css('margin-right', margin).removeData('margin-right');
              }
            });

            // Restore body padding
            var padding = $('body').data('padding-right');
            if (typeof padding !== 'undefined') {
              $('body').css('padding-right', padding).removeData('padding-right');
            }
          };

          Modal.prototype._getScrollbarWidth = function _getScrollbarWidth() {
            // thx d.walsh
            var scrollDiv = document.createElement('div');
            scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
            document.body.appendChild(scrollDiv);
            var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            return scrollbarWidth;
          };

          // static

          Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
            return this.each(function() {
              var data = $(this).data(DATA_KEY);
              var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

              if (!data) {
                data = new Modal(this, _config);
                $(this).data(DATA_KEY, data);
              }

              if (typeof config === 'string') {
                if (data[config] === undefined) {
                  throw new Error('No method named "' + config + '"');
                }
                data[config](relatedTarget);
              } else if (_config.show) {
                data.show(relatedTarget);
              }
            });
          };

          _createClass(Modal, null, [{
            key: 'VERSION',
            get: function get() {
              return VERSION;
            }
          }, {
            key: 'Default',
            get: function get() {
              return Default;
            }
          }]);

          return Modal;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
          var _this19 = this;

          var target = void 0;
          var selector = Util.getSelectorFromElement(this);

          if (selector) {
            target = $(selector)[0];
          }

          var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

          if (this.tagName === 'A' || this.tagName === 'AREA') {
            event.preventDefault();
          }

          var $target = $(target).one(Event.SHOW, function(showEvent) {
            if (showEvent.isDefaultPrevented()) {
              // only register focus restorer if modal will actually get shown
              return;
            }

            $target.one(Event.HIDDEN, function() {
              if ($(_this19).is(':visible')) {
                _this19.focus();
              }
            });
          });

          Modal._jQueryInterface.call($(target), config, this);
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Modal._jQueryInterface;
        $.fn[NAME].Constructor = Modal;
        $.fn[NAME].noConflict = function() {
          $.fn[NAME] = JQUERY_NO_CONFLICT;
          return Modal._jQueryInterface;
        };

        return Modal;
      }(jQuery);

      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.0.0-beta): scrollspy.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */

      var ScrollSpy = function($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'scrollspy';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.scrollspy';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];

        var Default = {
          offset: 10,
          method: 'auto',
          target: ''
        };

        var DefaultType = {
          offset: 'number',
          method: 'string',
          target: '(string|element)'
        };

        var Event = {
          ACTIVATE: 'activate' + EVENT_KEY,
          SCROLL: 'scroll' + EVENT_KEY,
          LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
          DROPDOWN_ITEM: 'dropdown-item',
          DROPDOWN_MENU: 'dropdown-menu',
          ACTIVE: 'active'
        };

        var Selector = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: '.active',
          NAV_LIST_GROUP: '.nav, .list-group',
          NAV_LINKS: '.nav-link',
          LIST_ITEMS: '.list-group-item',
          DROPDOWN: '.dropdown',
          DROPDOWN_ITEMS: '.dropdown-item',
          DROPDOWN_TOGGLE: '.dropdown-toggle'
        };

        var OffsetMethod = {
          OFFSET: 'offset',
          POSITION: 'position'

          /**
           * ------------------------------------------------------------------------
           * Class Definition
           * ------------------------------------------------------------------------
           */

        };
        var ScrollSpy = function() {
          function ScrollSpy(element, config) {
            var _this20 = this;

            _classCallCheck(this, ScrollSpy);

            this._element = element;
            this._scrollElement = element.tagName === 'BODY' ? window : element;
            this._config = this._getConfig(config);
            this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.LIST_ITEMS + ',') + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
            this._offsets = [];
            this._targets = [];
            this._activeTarget = null;
            this._scrollHeight = 0;

            $(this._scrollElement).on(Event.SCROLL, function(event) {
              return _this20._process(event);
            });

            this.refresh();
            this._process();
          }

          // getters

          // public

          ScrollSpy.prototype.refresh = function refresh() {
            var _this21 = this;

            var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

            var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

            var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

            this._offsets = [];
            this._targets = [];

            this._scrollHeight = this._getScrollHeight();

            var targets = $.makeArray($(this._selector));

            targets.map(function(element) {
              var target = void 0;
              var targetSelector = Util.getSelectorFromElement(element);

              if (targetSelector) {
                target = $(targetSelector)[0];
              }

              if (target) {
                var targetBCR = target.getBoundingClientRect();
                if (targetBCR.width || targetBCR.height) {
                  // todo (fat): remove sketch reliance on jQuery position/offset
                  return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
                }
              }
              return null;
            }).filter(function(item) {
              return item;
            }).sort(function(a, b) {
              return a[0] - b[0];
            }).forEach(function(item) {
              _this21._offsets.push(item[0]);
              _this21._targets.push(item[1]);
            });
          };

          ScrollSpy.prototype.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY);
            $(this._scrollElement).off(EVENT_KEY);

            this._element = null;
            this._scrollElement = null;
            this._config = null;
            this._selector = null;
            this._offsets = null;
            this._targets = null;
            this._activeTarget = null;
            this._scrollHeight = null;
          };

          // private

          ScrollSpy.prototype._getConfig = function _getConfig(config) {
            config = $.extend({}, Default, config);

            if (typeof config.target !== 'string') {
              var id = $(config.target).attr('id');
              if (!id) {
                id = Util.getUID(NAME);
                $(config.target).attr('id', id);
              }
              config.target = '#' + id;
            }

            Util.typeCheckConfig(NAME, config, DefaultType);

            return config;
          };

          ScrollSpy.prototype._getScrollTop = function _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          };

          ScrollSpy.prototype._getScrollHeight = function _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
          };

          ScrollSpy.prototype._getOffsetHeight = function _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
          };

          ScrollSpy.prototype._process = function _process() {
            var scrollTop = this._getScrollTop() + this._config.offset;
            var scrollHeight = this._getScrollHeight();
            var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

            if (this._scrollHeight !== scrollHeight) {
              this.refresh();
            }

            if (scrollTop >= maxScroll) {
              var target = this._targets[this._targets.length - 1];

              if (this._activeTarget !== target) {
                this._activate(target);
              }
              return;
            }

            if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
              this._activeTarget = null;
              this._clear();
              return;
            }

            for (var i = this._offsets.length; i--;) {
              var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

              if (isActiveTarget) {
                this._activate(this._targets[i]);
              }
            }
          };

          ScrollSpy.prototype._activate = function _activate(target) {
            this._activeTarget = target;

            this._clear();

            var queries = this._selector.split(',');
            queries = queries.map(function(selector) {
              return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
            });

            var $link = $(queries.join(','));

            if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
              $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
              $link.addClass(ClassName.ACTIVE);
            } else {
              // Set triggered link as active
              $link.addClass(ClassName.ACTIVE);
              // Set triggered links parents as active
              // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
              $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ', ' + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE);
            }

            $(this._scrollElement).trigger(Event.ACTIVATE, {
              relatedTarget: target
            });
          };

          ScrollSpy.prototype._clear = function _clear() {
            $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
          };

          // static

          ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function() {
              var data = $(this).data(DATA_KEY);
              var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

              if (!data) {
                data = new ScrollSpy(this, _config);
                $(this).data(DATA_KEY, data);
              }

              if (typeof config === 'string') {
                if (data[config] === undefined) {
                  throw new Error('No method named "' + config + '"');
                }
                data[config]();
              }
            });
          };

          _createClass(ScrollSpy, null, [{
            key: 'VERSION',
            get: function get() {
              return VERSION;
            }
          }, {
            key: 'Default',
            get: function get() {
              return Default;
            }
          }]);

          return ScrollSpy;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(window).on(Event.LOAD_DATA_API, function() {
          var scrollSpys = $.makeArray($(Selector.DATA_SPY));

          for (var i = scrollSpys.length; i--;) {
            var $spy = $(scrollSpys[i]);
            ScrollSpy._jQueryInterface.call($spy, $spy.data());
          }
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = ScrollSpy._jQueryInterface;
        $.fn[NAME].Constructor = ScrollSpy;
        $.fn[NAME].noConflict = function() {
          $.fn[NAME] = JQUERY_NO_CONFLICT;
          return ScrollSpy._jQueryInterface;
        };

        return ScrollSpy;
      }(jQuery);

      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.0.0-beta): tab.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */

      var Tab = function($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'tab';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.tab';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 150;

        var Event = {
          HIDE: 'hide' + EVENT_KEY,
          HIDDEN: 'hidden' + EVENT_KEY,
          SHOW: 'show' + EVENT_KEY,
          SHOWN: 'shown' + EVENT_KEY,
          CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
          DROPDOWN_MENU: 'dropdown-menu',
          ACTIVE: 'active',
          DISABLED: 'disabled',
          FADE: 'fade',
          SHOW: 'show'
        };

        var Selector = {
          DROPDOWN: '.dropdown',
          NAV_LIST_GROUP: '.nav, .list-group',
          ACTIVE: '.active',
          DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
          DROPDOWN_TOGGLE: '.dropdown-toggle',
          DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'

          /**
           * ------------------------------------------------------------------------
           * Class Definition
           * ------------------------------------------------------------------------
           */

        };
        var Tab = function() {
          function Tab(element) {
            _classCallCheck(this, Tab);

            this._element = element;
          }

          // getters

          // public

          Tab.prototype.show = function show() {
            var _this22 = this;

            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
              return;
            }

            var target = void 0;
            var previous = void 0;
            var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
            var selector = Util.getSelectorFromElement(this._element);

            if (listElement) {
              previous = $.makeArray($(listElement).find(Selector.ACTIVE));
              previous = previous[previous.length - 1];
            }

            var hideEvent = $.Event(Event.HIDE, {
              relatedTarget: this._element
            });

            var showEvent = $.Event(Event.SHOW, {
              relatedTarget: previous
            });

            if (previous) {
              $(previous).trigger(hideEvent);
            }

            $(this._element).trigger(showEvent);

            if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
              return;
            }

            if (selector) {
              target = $(selector)[0];
            }

            this._activate(this._element, listElement);

            var complete = function complete() {
              var hiddenEvent = $.Event(Event.HIDDEN, {
                relatedTarget: _this22._element
              });

              var shownEvent = $.Event(Event.SHOWN, {
                relatedTarget: previous
              });

              $(previous).trigger(hiddenEvent);
              $(_this22._element).trigger(shownEvent);
            };

            if (target) {
              this._activate(target, target.parentNode, complete);
            } else {
              complete();
            }
          };

          Tab.prototype.dispose = function dispose() {
            $.removeData(this._element, DATA_KEY);
            this._element = null;
          };

          // private

          Tab.prototype._activate = function _activate(element, container, callback) {
            var _this23 = this;

            var active = $(container).find(Selector.ACTIVE)[0];
            var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);

            var complete = function complete() {
              return _this23._transitionComplete(element, active, isTransitioning, callback);
            };

            if (active && isTransitioning) {
              $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
            } else {
              complete();
            }

            if (active) {
              $(active).removeClass(ClassName.SHOW);
            }
          };

          Tab.prototype._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
            if (active) {
              $(active).removeClass(ClassName.ACTIVE);

              var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

              if (dropdownChild) {
                $(dropdownChild).removeClass(ClassName.ACTIVE);
              }

              active.setAttribute('aria-expanded', false);
            }

            $(element).addClass(ClassName.ACTIVE);
            element.setAttribute('aria-expanded', true);

            if (isTransitioning) {
              Util.reflow(element);
              $(element).addClass(ClassName.SHOW);
            } else {
              $(element).removeClass(ClassName.FADE);
            }

            if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

              var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
              if (dropdownElement) {
                $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
              }

              element.setAttribute('aria-expanded', true);
            }

            if (callback) {
              callback();
            }
          };

          // static

          Tab._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function() {
              var $this = $(this);
              var data = $this.data(DATA_KEY);

              if (!data) {
                data = new Tab(this);
                $this.data(DATA_KEY, data);
              }

              if (typeof config === 'string') {
                if (data[config] === undefined) {
                  throw new Error('No method named "' + config + '"');
                }
                data[config]();
              }
            });
          };

          _createClass(Tab, null, [{
            key: 'VERSION',
            get: function get() {
              return VERSION;
            }
          }]);

          return Tab;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
          event.preventDefault();
          Tab._jQueryInterface.call($(this), 'show');
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Tab._jQueryInterface;
        $.fn[NAME].Constructor = Tab;
        $.fn[NAME].noConflict = function() {
          $.fn[NAME] = JQUERY_NO_CONFLICT;
          return Tab._jQueryInterface;
        };

        return Tab;
      }(jQuery);

      /* global Popper */

      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.0.0-beta): tooltip.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */

      var Tooltip = function($) {

        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
        }

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'tooltip';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.tooltip';
        var EVENT_KEY = '.' + DATA_KEY;
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 150;
        var CLASS_PREFIX = 'bs-tooltip';
        var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

        var DefaultType = {
          animation: 'boolean',
          template: 'string',
          title: '(string|element|function)',
          trigger: 'string',
          delay: '(number|object)',
          html: 'boolean',
          selector: '(string|boolean)',
          placement: '(string|function)',
          offset: '(number|string)',
          container: '(string|element|boolean)',
          fallbackPlacement: '(string|array)'
        };

        var AttachmentMap = {
          AUTO: 'auto',
          TOP: 'top',
          RIGHT: 'right',
          BOTTOM: 'bottom',
          LEFT: 'left'
        };

        var Default = {
          animation: true,
          template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
          trigger: 'hover focus',
          title: '',
          delay: 0,
          html: false,
          selector: false,
          placement: 'top',
          offset: 0,
          container: false,
          fallbackPlacement: 'flip'
        };

        var HoverState = {
          SHOW: 'show',
          OUT: 'out'
        };

        var Event = {
          HIDE: 'hide' + EVENT_KEY,
          HIDDEN: 'hidden' + EVENT_KEY,
          SHOW: 'show' + EVENT_KEY,
          SHOWN: 'shown' + EVENT_KEY,
          INSERTED: 'inserted' + EVENT_KEY,
          CLICK: 'click' + EVENT_KEY,
          FOCUSIN: 'focusin' + EVENT_KEY,
          FOCUSOUT: 'focusout' + EVENT_KEY,
          MOUSEENTER: 'mouseenter' + EVENT_KEY,
          MOUSELEAVE: 'mouseleave' + EVENT_KEY
        };

        var ClassName = {
          FADE: 'fade',
          SHOW: 'show'
        };

        var Selector = {
          TOOLTIP: '.tooltip',
          TOOLTIP_INNER: '.tooltip-inner',
          ARROW: '.arrow'
        };

        var Trigger = {
          HOVER: 'hover',
          FOCUS: 'focus',
          CLICK: 'click',
          MANUAL: 'manual'

          /**
           * ------------------------------------------------------------------------
           * Class Definition
           * ------------------------------------------------------------------------
           */

        };
        var Tooltip = function() {
          function Tooltip(element, config) {
            _classCallCheck(this, Tooltip);

            // private
            this._isEnabled = true;
            this._timeout = 0;
            this._hoverState = '';
            this._activeTrigger = {};
            this._popper = null;

            // protected
            this.element = element;
            this.config = this._getConfig(config);
            this.tip = null;

            this._setListeners();
          }

          // getters

          // public

          Tooltip.prototype.enable = function enable() {
            this._isEnabled = true;
          };

          Tooltip.prototype.disable = function disable() {
            this._isEnabled = false;
          };

          Tooltip.prototype.toggleEnabled = function toggleEnabled() {
            this._isEnabled = !this._isEnabled;
          };

          Tooltip.prototype.toggle = function toggle(event) {
            if (event) {
              var dataKey = this.constructor.DATA_KEY;
              var context = $(event.currentTarget).data(dataKey);

              if (!context) {
                context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                $(event.currentTarget).data(dataKey, context);
              }

              context._activeTrigger.click = !context._activeTrigger.click;

              if (context._isWithActiveTrigger()) {
                context._enter(null, context);
              } else {
                context._leave(null, context);
              }
            } else {

              if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
                this._leave(null, this);
                return;
              }

              this._enter(null, this);
            }
          };

          Tooltip.prototype.dispose = function dispose() {
            clearTimeout(this._timeout);

            $.removeData(this.element, this.constructor.DATA_KEY);

            $(this.element).off(this.constructor.EVENT_KEY);
            $(this.element).closest('.modal').off('hide.bs.modal');

            if (this.tip) {
              $(this.tip).remove();
            }

            this._isEnabled = null;
            this._timeout = null;
            this._hoverState = null;
            this._activeTrigger = null;
            if (this._popper !== null) {
              this._popper.destroy();
            }
            this._popper = null;

            this.element = null;
            this.config = null;
            this.tip = null;
          };

          Tooltip.prototype.show = function show() {
            var _this24 = this;

            if ($(this.element).css('display') === 'none') {
              throw new Error('Please use show on visible elements');
            }

            var showEvent = $.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              $(this.element).trigger(showEvent);

              var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

              if (showEvent.isDefaultPrevented() || !isInTheDom) {
                return;
              }

              var tip = this.getTipElement();
              var tipId = Util.getUID(this.constructor.NAME);

              tip.setAttribute('id', tipId);
              this.element.setAttribute('aria-describedby', tipId);

              this.setContent();

              if (this.config.animation) {
                $(tip).addClass(ClassName.FADE);
              }

              var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

              var attachment = this._getAttachment(placement);
              this.addAttachmentClass(attachment);

              var container = this.config.container === false ? document.body : $(this.config.container);

              $(tip).data(this.constructor.DATA_KEY, this);

              if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
                $(tip).appendTo(container);
              }

              $(this.element).trigger(this.constructor.Event.INSERTED);

              this._popper = new Popper(this.element, tip, {
                placement: attachment,
                modifiers: {
                  offset: {
                    offset: this.config.offset
                  },
                  flip: {
                    behavior: this.config.fallbackPlacement
                  },
                  arrow: {
                    element: Selector.ARROW
                  }
                },
                onCreate: function onCreate(data) {
                  if (data.originalPlacement !== data.placement) {
                    _this24._handlePopperPlacementChange(data);
                  }
                },
                onUpdate: function onUpdate(data) {
                  _this24._handlePopperPlacementChange(data);
                }
              });

              $(tip).addClass(ClassName.SHOW);

              // if this is a touch-enabled device we add extra
              // empty mouseover listeners to the body's immediate children;
              // only needed because of broken event delegation on iOS
              // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
              if ('ontouchstart' in document.documentElement) {
                $('body').children().on('mouseover', null, $.noop);
              }

              var complete = function complete() {
                if (_this24.config.animation) {
                  _this24._fixTransition();
                }
                var prevHoverState = _this24._hoverState;
                _this24._hoverState = null;

                $(_this24.element).trigger(_this24.constructor.Event.SHOWN);

                if (prevHoverState === HoverState.OUT) {
                  _this24._leave(null, _this24);
                }
              };

              if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
                $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
              } else {
                complete();
              }
            }
          };

          Tooltip.prototype.hide = function hide(callback) {
            var _this25 = this;

            var tip = this.getTipElement();
            var hideEvent = $.Event(this.constructor.Event.HIDE);
            var complete = function complete() {
              if (_this25._hoverState !== HoverState.SHOW && tip.parentNode) {
                tip.parentNode.removeChild(tip);
              }

              _this25._cleanTipClass();
              _this25.element.removeAttribute('aria-describedby');
              $(_this25.element).trigger(_this25.constructor.Event.HIDDEN);
              if (_this25._popper !== null) {
                _this25._popper.destroy();
              }

              if (callback) {
                callback();
              }
            };

            $(this.element).trigger(hideEvent);

            if (hideEvent.isDefaultPrevented()) {
              return;
            }

            $(tip).removeClass(ClassName.SHOW);

            // if this is a touch-enabled device we remove the extra
            // empty mouseover listeners we added for iOS support
            if ('ontouchstart' in document.documentElement) {
              $('body').children().off('mouseover', null, $.noop);
            }

            this._activeTrigger[Trigger.CLICK] = false;
            this._activeTrigger[Trigger.FOCUS] = false;
            this._activeTrigger[Trigger.HOVER] = false;

            if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

              $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
            } else {
              complete();
            }

            this._hoverState = '';
          };

          Tooltip.prototype.update = function update() {
            if (this._popper !== null) {
              this._popper.scheduleUpdate();
            }
          };

          // protected

          Tooltip.prototype.isWithContent = function isWithContent() {
            return Boolean(this.getTitle());
          };

          Tooltip.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
            $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
          };

          Tooltip.prototype.getTipElement = function getTipElement() {
            return this.tip = this.tip || $(this.config.template)[0];
          };

          Tooltip.prototype.setContent = function setContent() {
            var $tip = $(this.getTipElement());
            this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
            $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
          };

          Tooltip.prototype.setElementContent = function setElementContent($element, content) {
            var html = this.config.html;
            if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
              // content is a DOM node or a jQuery
              if (html) {
                if (!$(content).parent().is($element)) {
                  $element.empty().append(content);
                }
              } else {
                $element.text($(content).text());
              }
            } else {
              $element[html ? 'html' : 'text'](content);
            }
          };

          Tooltip.prototype.getTitle = function getTitle() {
            var title = this.element.getAttribute('data-original-title');

            if (!title) {
              title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
            }

            return title;
          };

          // private

          Tooltip.prototype._getAttachment = function _getAttachment(placement) {
            return AttachmentMap[placement.toUpperCase()];
          };

          Tooltip.prototype._setListeners = function _setListeners() {
            var _this26 = this;

            var triggers = this.config.trigger.split(' ');

            triggers.forEach(function(trigger) {
              if (trigger === 'click') {
                $(_this26.element).on(_this26.constructor.Event.CLICK, _this26.config.selector, function(event) {
                  return _this26.toggle(event);
                });
              } else if (trigger !== Trigger.MANUAL) {
                var eventIn = trigger === Trigger.HOVER ? _this26.constructor.Event.MOUSEENTER : _this26.constructor.Event.FOCUSIN;
                var eventOut = trigger === Trigger.HOVER ? _this26.constructor.Event.MOUSELEAVE : _this26.constructor.Event.FOCUSOUT;

                $(_this26.element).on(eventIn, _this26.config.selector, function(event) {
                  return _this26._enter(event);
                }).on(eventOut, _this26.config.selector, function(event) {
                  return _this26._leave(event);
                });
              }

              $(_this26.element).closest('.modal').on('hide.bs.modal', function() {
                return _this26.hide();
              });
            });

            if (this.config.selector) {
              this.config = $.extend({}, this.config, {
                trigger: 'manual',
                selector: ''
              });
            } else {
              this._fixTitle();
            }
          };

          Tooltip.prototype._fixTitle = function _fixTitle() {
            var titleType = _typeof(this.element.getAttribute('data-original-title'));
            if (this.element.getAttribute('title') || titleType !== 'string') {
              this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
              this.element.setAttribute('title', '');
            }
          };

          Tooltip.prototype._enter = function _enter(event, context) {
            var dataKey = this.constructor.DATA_KEY;

            context = context || $(event.currentTarget).data(dataKey);

            if (!context) {
              context = new this.constructor(event.currentTarget, this._getDelegateConfig());
              $(event.currentTarget).data(dataKey, context);
            }

            if (event) {
              context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
            }

            if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
              context._hoverState = HoverState.SHOW;
              return;
            }

            clearTimeout(context._timeout);

            context._hoverState = HoverState.SHOW;

            if (!context.config.delay || !context.config.delay.show) {
              context.show();
              return;
            }

            context._timeout = setTimeout(function() {
              if (context._hoverState === HoverState.SHOW) {
                context.show();
              }
            }, context.config.delay.show);
          };

          Tooltip.prototype._leave = function _leave(event, context) {
            var dataKey = this.constructor.DATA_KEY;

            context = context || $(event.currentTarget).data(dataKey);

            if (!context) {
              context = new this.constructor(event.currentTarget, this._getDelegateConfig());
              $(event.currentTarget).data(dataKey, context);
            }

            if (event) {
              context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
            }

            if (context._isWithActiveTrigger()) {
              return;
            }

            clearTimeout(context._timeout);

            context._hoverState = HoverState.OUT;

            if (!context.config.delay || !context.config.delay.hide) {
              context.hide();
              return;
            }

            context._timeout = setTimeout(function() {
              if (context._hoverState === HoverState.OUT) {
                context.hide();
              }
            }, context.config.delay.hide);
          };

          Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
            for (var trigger in this._activeTrigger) {
              if (this._activeTrigger[trigger]) {
                return true;
              }
            }

            return false;
          };

          Tooltip.prototype._getConfig = function _getConfig(config) {
            config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

            if (config.delay && typeof config.delay === 'number') {
              config.delay = {
                show: config.delay,
                hide: config.delay
              };
            }

            if (config.title && typeof config.title === 'number') {
              config.title = config.title.toString();
            }

            if (config.content && typeof config.content === 'number') {
              config.content = config.content.toString();
            }

            Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

            return config;
          };

          Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
            var config = {};

            if (this.config) {
              for (var key in this.config) {
                if (this.constructor.Default[key] !== this.config[key]) {
                  config[key] = this.config[key];
                }
              }
            }

            return config;
          };

          Tooltip.prototype._cleanTipClass = function _cleanTipClass() {
            var $tip = $(this.getTipElement());
            var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
            if (tabClass !== null && tabClass.length > 0) {
              $tip.removeClass(tabClass.join(''));
            }
          };

          Tooltip.prototype._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
            this._cleanTipClass();
            this.addAttachmentClass(this._getAttachment(data.placement));
          };

          Tooltip.prototype._fixTransition = function _fixTransition() {
            var tip = this.getTipElement();
            var initConfigAnimation = this.config.animation;
            if (tip.getAttribute('x-placement') !== null) {
              return;
            }
            $(tip).removeClass(ClassName.FADE);
            this.config.animation = false;
            this.hide();
            this.show();
            this.config.animation = initConfigAnimation;
          };

          // static

          Tooltip._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function() {
              var data = $(this).data(DATA_KEY);
              var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

              if (!data && /dispose|hide/.test(config)) {
                return;
              }

              if (!data) {
                data = new Tooltip(this, _config);
                $(this).data(DATA_KEY, data);
              }

              if (typeof config === 'string') {
                if (data[config] === undefined) {
                  throw new Error('No method named "' + config + '"');
                }
                data[config]();
              }
            });
          };

          _createClass(Tooltip, null, [{
            key: 'VERSION',
            get: function get() {
              return VERSION;
            }
          }, {
            key: 'Default',
            get: function get() {
              return Default;
            }
          }, {
            key: 'NAME',
            get: function get() {
              return NAME;
            }
          }, {
            key: 'DATA_KEY',
            get: function get() {
              return DATA_KEY;
            }
          }, {
            key: 'Event',
            get: function get() {
              return Event;
            }
          }, {
            key: 'EVENT_KEY',
            get: function get() {
              return EVENT_KEY;
            }
          }, {
            key: 'DefaultType',
            get: function get() {
              return DefaultType;
            }
          }]);

          return Tooltip;
        }();

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Tooltip._jQueryInterface;
        $.fn[NAME].Constructor = Tooltip;
        $.fn[NAME].noConflict = function() {
          $.fn[NAME] = JQUERY_NO_CONFLICT;
          return Tooltip._jQueryInterface;
        };

        return Tooltip;
      }(jQuery);

      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v4.0.0-beta): popover.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */

      var Popover = function($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'popover';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.popover';
        var EVENT_KEY = '.' + DATA_KEY;
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var CLASS_PREFIX = 'bs-popover';
        var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

        var Default = $.extend({}, Tooltip.Default, {
          placement: 'right',
          trigger: 'click',
          content: '',
          template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
        });

        var DefaultType = $.extend({}, Tooltip.DefaultType, {
          content: '(string|element|function)'
        });

        var ClassName = {
          FADE: 'fade',
          SHOW: 'show'
        };

        var Selector = {
          TITLE: '.popover-header',
          CONTENT: '.popover-body'
        };

        var Event = {
          HIDE: 'hide' + EVENT_KEY,
          HIDDEN: 'hidden' + EVENT_KEY,
          SHOW: 'show' + EVENT_KEY,
          SHOWN: 'shown' + EVENT_KEY,
          INSERTED: 'inserted' + EVENT_KEY,
          CLICK: 'click' + EVENT_KEY,
          FOCUSIN: 'focusin' + EVENT_KEY,
          FOCUSOUT: 'focusout' + EVENT_KEY,
          MOUSEENTER: 'mouseenter' + EVENT_KEY,
          MOUSELEAVE: 'mouseleave' + EVENT_KEY

          /**
           * ------------------------------------------------------------------------
           * Class Definition
           * ------------------------------------------------------------------------
           */

        };
        var Popover = function(_Tooltip) {
          _inherits(Popover, _Tooltip);

          function Popover() {
            _classCallCheck(this, Popover);

            return _possibleConstructorReturn(this, _Tooltip.apply(this, arguments));
          }

          // overrides

          Popover.prototype.isWithContent = function isWithContent() {
            return this.getTitle() || this._getContent();
          };

          Popover.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
            $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
          };

          Popover.prototype.getTipElement = function getTipElement() {
            return this.tip = this.tip || $(this.config.template)[0];
          };

          Popover.prototype.setContent = function setContent() {
            var $tip = $(this.getTipElement());

            // we use append for html objects to maintain js events
            this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
            this.setElementContent($tip.find(Selector.CONTENT), this._getContent());

            $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
          };

          // private

          Popover.prototype._getContent = function _getContent() {
            return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
          };

          Popover.prototype._cleanTipClass = function _cleanTipClass() {
            var $tip = $(this.getTipElement());
            var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
            if (tabClass !== null && tabClass.length > 0) {
              $tip.removeClass(tabClass.join(''));
            }
          };

          // static

          Popover._jQueryInterface = function _jQueryInterface(config) {
            return this.each(function() {
              var data = $(this).data(DATA_KEY);
              var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

              if (!data && /destroy|hide/.test(config)) {
                return;
              }

              if (!data) {
                data = new Popover(this, _config);
                $(this).data(DATA_KEY, data);
              }

              if (typeof config === 'string') {
                if (data[config] === undefined) {
                  throw new Error('No method named "' + config + '"');
                }
                data[config]();
              }
            });
          };

          _createClass(Popover, null, [{
            key: 'VERSION',


            // getters

            get: function get() {
              return VERSION;
            }
          }, {
            key: 'Default',
            get: function get() {
              return Default;
            }
          }, {
            key: 'NAME',
            get: function get() {
              return NAME;
            }
          }, {
            key: 'DATA_KEY',
            get: function get() {
              return DATA_KEY;
            }
          }, {
            key: 'Event',
            get: function get() {
              return Event;
            }
          }, {
            key: 'EVENT_KEY',
            get: function get() {
              return EVENT_KEY;
            }
          }, {
            key: 'DefaultType',
            get: function get() {
              return DefaultType;
            }
          }]);

          return Popover;
        }(Tooltip);

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Popover._jQueryInterface;
        $.fn[NAME].Constructor = Popover;
        $.fn[NAME].noConflict = function() {
          $.fn[NAME] = JQUERY_NO_CONFLICT;
          return Popover._jQueryInterface;
        };

        return Popover;
      }(jQuery);


    })();

    /***/
  }),
  /* 6 */
  /***/
  (function(module, exports, __webpack_require__) {

    /**
     * Swiper 3.4.2
     * Most modern mobile touch slider and framework with hardware accelerated transitions
     *
     * http://www.idangero.us/swiper/
     *
     * Copyright 2017, Vladimir Kharlampidi
     * The iDangero.us
     * http://www.idangero.us/
     *
     * Licensed under MIT
     *
     * Released on: March 10, 2017
     */
    (function() {
      'use strict';
      var $;

      /*===========================
      Swiper
      ===========================*/
      var Swiper = function(container, params) {
        if (!(this instanceof Swiper)) return new Swiper(container, params);


        var defaults = {
          direction: 'horizontal',
          touchEventsTarget: 'container',
          initialSlide: 0,
          speed: 300,
          // autoplay
          autoplay: false,
          autoplayDisableOnInteraction: true,
          autoplayStopOnLast: false,
          // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
          iOSEdgeSwipeDetection: false,
          iOSEdgeSwipeThreshold: 20,
          // Free mode
          freeMode: false,
          freeModeMomentum: true,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: true,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: false,
          freeModeMinimumVelocity: 0.02,
          // Autoheight
          autoHeight: false,
          // Set wrapper width
          setWrapperSize: false,
          // Virtual Translate
          virtualTranslate: false,
          // Effects
          effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          },
          flip: {
            slideShadows: true,
            limitRotation: true
          },
          cube: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
          },
          fade: {
            crossFade: false
          },
          // Parallax
          parallax: false,
          // Zoom
          zoom: false,
          zoomMax: 3,
          zoomMin: 1,
          zoomToggle: true,
          // Scrollbar
          scrollbar: null,
          scrollbarHide: true,
          scrollbarDraggable: false,
          scrollbarSnapOnRelease: false,
          // Keyboard Mousewheel
          keyboardControl: false,
          mousewheelControl: false,
          mousewheelReleaseOnEdges: false,
          mousewheelInvert: false,
          mousewheelForceToAxis: false,
          mousewheelSensitivity: 1,
          mousewheelEventsTarged: 'container',
          // Hash Navigation
          hashnav: false,
          hashnavWatchState: false,
          // History
          history: false,
          // Commong Nav State
          replaceState: false,
          // Breakpoints
          breakpoints: undefined,
          // Slides grid
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: 'column',
          slidesPerGroup: 1,
          centeredSlides: false,
          slidesOffsetBefore: 0, // in px
          slidesOffsetAfter: 0, // in px
          // Round length
          roundLengths: false,
          // Touches
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: true,
          shortSwipes: true,
          longSwipes: true,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: true,
          onlyExternal: false,
          threshold: 0,
          touchMoveStopPropagation: true,
          touchReleaseOnEdges: false,
          // Unique Navigation Elements
          uniqueNavElements: true,
          // Pagination
          pagination: null,
          paginationElement: 'span',
          paginationClickable: false,
          paginationHide: false,
          paginationBulletRender: null,
          paginationProgressRender: null,
          paginationFractionRender: null,
          paginationCustomRender: null,
          paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
          // Resistance
          resistance: true,
          resistanceRatio: 0.85,
          // Next/prev buttons
          nextButton: null,
          prevButton: null,
          // Progress
          watchSlidesProgress: false,
          watchSlidesVisibility: false,
          // Cursor
          grabCursor: false,
          // Clicks
          preventClicks: true,
          preventClicksPropagation: true,
          slideToClickedSlide: false,
          // Lazy Loading
          lazyLoading: false,
          lazyLoadingInPrevNext: false,
          lazyLoadingInPrevNextAmount: 1,
          lazyLoadingOnTransitionStart: false,
          // Images
          preloadImages: true,
          updateOnImagesReady: true,
          // loop
          loop: false,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          // Control
          control: undefined,
          controlInverse: false,
          controlBy: 'slide', //or 'container'
          normalizeSlideIndex: true,
          // Swiping/no swiping
          allowSwipeToPrev: true,
          allowSwipeToNext: true,
          swipeHandler: null, //'.swipe-handler',
          noSwiping: true,
          noSwipingClass: 'swiper-no-swiping',
          // Passive Listeners
          passiveListeners: true,
          // NS
          containerModifierClass: 'swiper-container-', // NEW
          slideClass: 'swiper-slide',
          slideActiveClass: 'swiper-slide-active',
          slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
          slideVisibleClass: 'swiper-slide-visible',
          slideDuplicateClass: 'swiper-slide-duplicate',
          slideNextClass: 'swiper-slide-next',
          slideDuplicateNextClass: 'swiper-slide-duplicate-next',
          slidePrevClass: 'swiper-slide-prev',
          slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
          wrapperClass: 'swiper-wrapper',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          buttonDisabledClass: 'swiper-button-disabled',
          paginationCurrentClass: 'swiper-pagination-current',
          paginationTotalClass: 'swiper-pagination-total',
          paginationHiddenClass: 'swiper-pagination-hidden',
          paginationProgressbarClass: 'swiper-pagination-progressbar',
          paginationClickableClass: 'swiper-pagination-clickable', // NEW
          paginationModifierClass: 'swiper-pagination-', // NEW
          lazyLoadingClass: 'swiper-lazy',
          lazyStatusLoadingClass: 'swiper-lazy-loading',
          lazyStatusLoadedClass: 'swiper-lazy-loaded',
          lazyPreloaderClass: 'swiper-lazy-preloader',
          notificationClass: 'swiper-notification',
          preloaderClass: 'preloader',
          zoomContainerClass: 'swiper-zoom-container',

          // Observer
          observer: false,
          observeParents: false,
          // Accessibility
          a11y: false,
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          // Callbacks
          runCallbacksOnInit: true
            /*
            Callbacks:
            onInit: function (swiper)
            onDestroy: function (swiper)
            onBeforeResize: function (swiper)
            onAfterResize: function (swiper)
            onClick: function (swiper, e)
            onTap: function (swiper, e)
            onDoubleTap: function (swiper, e)
            onSliderMove: function (swiper, e)
            onSlideChangeStart: function (swiper)
            onSlideChangeEnd: function (swiper)
            onTransitionStart: function (swiper)
            onTransitionEnd: function (swiper)
            onImagesReady: function (swiper)
            onProgress: function (swiper, progress)
            onTouchStart: function (swiper, e)
            onTouchMove: function (swiper, e)
            onTouchMoveOpposite: function (swiper, e)
            onTouchEnd: function (swiper, e)
            onReachBeginning: function (swiper)
            onReachEnd: function (swiper)
            onSetTransition: function (swiper, duration)
            onSetTranslate: function (swiper, translate)
            onAutoplayStart: function (swiper)
            onAutoplayStop: function (swiper),
            onLazyImageLoad: function (swiper, slide, image)
            onLazyImageReady: function (swiper, slide, image)
            onKeyPress: function (swiper, keyCode)
            */

        };
        var initialVirtualTranslate = params && params.virtualTranslate;

        params = params || {};
        var originalParams = {};
        for (var param in params) {
          if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
            originalParams[param] = {};
            for (var deepParam in params[param]) {
              originalParams[param][deepParam] = params[param][deepParam];
            }
          } else {
            originalParams[param] = params[param];
          }
        }
        for (var def in defaults) {
          if (typeof params[def] === 'undefined') {
            params[def] = defaults[def];
          } else if (typeof params[def] === 'object') {
            for (var deepDef in defaults[def]) {
              if (typeof params[def][deepDef] === 'undefined') {
                params[def][deepDef] = defaults[def][deepDef];
              }
            }
          }
        }

        // Swiper
        var s = this;

        // Params
        s.params = params;
        s.originalParams = originalParams;

        // Classname
        s.classNames = [];
        /*=========================
          Dom Library and plugins
          ===========================*/
        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined') {
          $ = Dom7;
        }
        if (typeof $ === 'undefined') {
          if (typeof Dom7 === 'undefined') {
            $ = window.Dom7 || window.Zepto || window.jQuery;
          } else {
            $ = Dom7;
          }
          if (!$) return;
        }
        // Export it to Swiper instance
        s.$ = $;

        /*=========================
          Breakpoints
          ===========================*/
        s.currentBreakpoint = undefined;
        s.getActiveBreakpoint = function() {
          //Get breakpoint for window width
          if (!s.params.breakpoints) return false;
          var breakpoint = false;
          var points = [],
            point;
          for (point in s.params.breakpoints) {
            if (s.params.breakpoints.hasOwnProperty(point)) {
              points.push(point);
            }
          }
          points.sort(function(a, b) {
            return parseInt(a, 10) > parseInt(b, 10);
          });
          for (var i = 0; i < points.length; i++) {
            point = points[i];
            if (point >= window.innerWidth && !breakpoint) {
              breakpoint = point;
            }
          }
          return breakpoint || 'max';
        };
        s.setBreakpoint = function() {
          //Set breakpoint for window width and update parameters
          var breakpoint = s.getActiveBreakpoint();
          if (breakpoint && s.currentBreakpoint !== breakpoint) {
            var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
            var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
            for (var param in breakPointsParams) {
              s.params[param] = breakPointsParams[param];
            }
            s.currentBreakpoint = breakpoint;
            if (needsReLoop && s.destroyLoop) {
              s.reLoop(true);
            }
          }
        };
        // Set breakpoint on load
        if (s.params.breakpoints) {
          s.setBreakpoint();
        }

        /*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/
        s.container = $(container);
        if (s.container.length === 0) return;
        if (s.container.length > 1) {
          var swipers = [];
          s.container.each(function() {
            var container = this;
            swipers.push(new Swiper(this, params));
          });
          return swipers;
        }

        // Save instance in container HTML Element and in data
        s.container[0].swiper = s;
        s.container.data('swiper', s);

        s.classNames.push(s.params.containerModifierClass + s.params.direction);

        if (s.params.freeMode) {
          s.classNames.push(s.params.containerModifierClass + 'free-mode');
        }
        if (!s.support.flexbox) {
          s.classNames.push(s.params.containerModifierClass + 'no-flexbox');
          s.params.slidesPerColumn = 1;
        }
        if (s.params.autoHeight) {
          s.classNames.push(s.params.containerModifierClass + 'autoheight');
        }
        // Enable slides progress when required
        if (s.params.parallax || s.params.watchSlidesVisibility) {
          s.params.watchSlidesProgress = true;
        }
        // Max resistance when touchReleaseOnEdges
        if (s.params.touchReleaseOnEdges) {
          s.params.resistanceRatio = 0;
        }
        // Coverflow / 3D
        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
          if (s.support.transforms3d) {
            s.params.watchSlidesProgress = true;
            s.classNames.push(s.params.containerModifierClass + '3d');
          } else {
            s.params.effect = 'slide';
          }
        }
        if (s.params.effect !== 'slide') {
          s.classNames.push(s.params.containerModifierClass + s.params.effect);
        }
        if (s.params.effect === 'cube') {
          s.params.resistanceRatio = 0;
          s.params.slidesPerView = 1;
          s.params.slidesPerColumn = 1;
          s.params.slidesPerGroup = 1;
          s.params.centeredSlides = false;
          s.params.spaceBetween = 0;
          s.params.virtualTranslate = true;
        }
        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
          s.params.slidesPerView = 1;
          s.params.slidesPerColumn = 1;
          s.params.slidesPerGroup = 1;
          s.params.watchSlidesProgress = true;
          s.params.spaceBetween = 0;
          if (typeof initialVirtualTranslate === 'undefined') {
            s.params.virtualTranslate = true;
          }
        }

        // Grab Cursor
        if (s.params.grabCursor && s.support.touch) {
          s.params.grabCursor = false;
        }

        // Wrapper
        s.wrapper = s.container.children('.' + s.params.wrapperClass);

        // Pagination
        if (s.params.pagination) {
          s.paginationContainer = $(s.params.pagination);
          if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
            s.paginationContainer = s.container.find(s.params.pagination);
          }

          if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
            s.paginationContainer.addClass(s.params.paginationModifierClass + 'clickable');
          } else {
            s.params.paginationClickable = false;
          }
          s.paginationContainer.addClass(s.params.paginationModifierClass + s.params.paginationType);
        }
        // Next/Prev Buttons
        if (s.params.nextButton || s.params.prevButton) {
          if (s.params.nextButton) {
            s.nextButton = $(s.params.nextButton);
            if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
              s.nextButton = s.container.find(s.params.nextButton);
            }
          }
          if (s.params.prevButton) {
            s.prevButton = $(s.params.prevButton);
            if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
              s.prevButton = s.container.find(s.params.prevButton);
            }
          }
        }

        // Is Horizontal
        s.isHorizontal = function() {
          return s.params.direction === 'horizontal';
        };
        // s.isH = isH;

        // RTL
        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
        if (s.rtl) {
          s.classNames.push(s.params.containerModifierClass + 'rtl');
        }

        // Wrong RTL support
        if (s.rtl) {
          s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
        }

        // Columns
        if (s.params.slidesPerColumn > 1) {
          s.classNames.push(s.params.containerModifierClass + 'multirow');
        }

        // Check for Android
        if (s.device.android) {
          s.classNames.push(s.params.containerModifierClass + 'android');
        }

        // Add classes
        s.container.addClass(s.classNames.join(' '));

        // Translate
        s.translate = 0;

        // Progress
        s.progress = 0;

        // Velocity
        s.velocity = 0;

        /*=========================
          Locks, unlocks
          ===========================*/
        s.lockSwipeToNext = function() {
          s.params.allowSwipeToNext = false;
          if (s.params.allowSwipeToPrev === false && s.params.grabCursor) {
            s.unsetGrabCursor();
          }
        };
        s.lockSwipeToPrev = function() {
          s.params.allowSwipeToPrev = false;
          if (s.params.allowSwipeToNext === false && s.params.grabCursor) {
            s.unsetGrabCursor();
          }
        };
        s.lockSwipes = function() {
          s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
          if (s.params.grabCursor) s.unsetGrabCursor();
        };
        s.unlockSwipeToNext = function() {
          s.params.allowSwipeToNext = true;
          if (s.params.allowSwipeToPrev === true && s.params.grabCursor) {
            s.setGrabCursor();
          }
        };
        s.unlockSwipeToPrev = function() {
          s.params.allowSwipeToPrev = true;
          if (s.params.allowSwipeToNext === true && s.params.grabCursor) {
            s.setGrabCursor();
          }
        };
        s.unlockSwipes = function() {
          s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
          if (s.params.grabCursor) s.setGrabCursor();
        };

        /*=========================
          Round helper
          ===========================*/
        function round(a) {
          return Math.floor(a);
        }
        /*=========================
          Set grab cursor
          ===========================*/
        s.setGrabCursor = function(moving) {
          s.container[0].style.cursor = 'move';
          s.container[0].style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
          s.container[0].style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
          s.container[0].style.cursor = moving ? 'grabbing' : 'grab';
        };
        s.unsetGrabCursor = function() {
          s.container[0].style.cursor = '';
        };
        if (s.params.grabCursor) {
          s.setGrabCursor();
        }
        /*=========================
          Update on Images Ready
          ===========================*/
        s.imagesToLoad = [];
        s.imagesLoaded = 0;

        s.loadImage = function(imgElement, src, srcset, sizes, checkForComplete, callback) {
          var image;

          function onReady() {
            if (callback) callback();
          }
          if (!imgElement.complete || !checkForComplete) {
            if (src) {
              image = new window.Image();
              image.onload = onReady;
              image.onerror = onReady;
              if (sizes) {
                image.sizes = sizes;
              }
              if (srcset) {
                image.srcset = srcset;
              }
              if (src) {
                image.src = src;
              }
            } else {
              onReady();
            }

          } else { //image already loaded...
            onReady();
          }
        };
        s.preloadImages = function() {
          s.imagesToLoad = s.container.find('img');

          function _onReady() {
            if (typeof s === 'undefined' || s === null || !s) return;
            if (s.imagesLoaded !== undefined) s.imagesLoaded++;
            if (s.imagesLoaded === s.imagesToLoad.length) {
              if (s.params.updateOnImagesReady) s.update();
              s.emit('onImagesReady', s);
            }
          }
          for (var i = 0; i < s.imagesToLoad.length; i++) {
            s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), s.imagesToLoad[i].sizes || s.imagesToLoad[i].getAttribute('sizes'), true, _onReady);
          }
        };

        /*=========================
          Autoplay
          ===========================*/
        s.autoplayTimeoutId = undefined;
        s.autoplaying = false;
        s.autoplayPaused = false;

        function autoplay() {
          var autoplayDelay = s.params.autoplay;
          var activeSlide = s.slides.eq(s.activeIndex);
          if (activeSlide.attr('data-swiper-autoplay')) {
            autoplayDelay = activeSlide.attr('data-swiper-autoplay') || s.params.autoplay;
          }
          s.autoplayTimeoutId = setTimeout(function() {
            if (s.params.loop) {
              s.fixLoop();
              s._slideNext();
              s.emit('onAutoplay', s);
            } else {
              if (!s.isEnd) {
                s._slideNext();
                s.emit('onAutoplay', s);
              } else {
                if (!params.autoplayStopOnLast) {
                  s._slideTo(0);
                  s.emit('onAutoplay', s);
                } else {
                  s.stopAutoplay();
                }
              }
            }
          }, autoplayDelay);
        }
        s.startAutoplay = function() {
          if (typeof s.autoplayTimeoutId !== 'undefined') return false;
          if (!s.params.autoplay) return false;
          if (s.autoplaying) return false;
          s.autoplaying = true;
          s.emit('onAutoplayStart', s);
          autoplay();
        };
        s.stopAutoplay = function(internal) {
          if (!s.autoplayTimeoutId) return;
          if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
          s.autoplaying = false;
          s.autoplayTimeoutId = undefined;
          s.emit('onAutoplayStop', s);
        };
        s.pauseAutoplay = function(speed) {
          if (s.autoplayPaused) return;
          if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
          s.autoplayPaused = true;
          if (speed === 0) {
            s.autoplayPaused = false;
            autoplay();
          } else {
            s.wrapper.transitionEnd(function() {
              if (!s) return;
              s.autoplayPaused = false;
              if (!s.autoplaying) {
                s.stopAutoplay();
              } else {
                autoplay();
              }
            });
          }
        };
        /*=========================
          Min/Max Translate
          ===========================*/
        s.minTranslate = function() {
          return (-s.snapGrid[0]);
        };
        s.maxTranslate = function() {
          return (-s.snapGrid[s.snapGrid.length - 1]);
        };
        /*=========================
          Slider/slides sizes
          ===========================*/
        s.updateAutoHeight = function() {
          var activeSlides = [];
          var newHeight = 0;
          var i;

          // Find slides currently in view
          if (s.params.slidesPerView !== 'auto' && s.params.slidesPerView > 1) {
            for (i = 0; i < Math.ceil(s.params.slidesPerView); i++) {
              var index = s.activeIndex + i;
              if (index > s.slides.length) break;
              activeSlides.push(s.slides.eq(index)[0]);
            }
          } else {
            activeSlides.push(s.slides.eq(s.activeIndex)[0]);
          }

          // Find new height from heighest slide in view
          for (i = 0; i < activeSlides.length; i++) {
            if (typeof activeSlides[i] !== 'undefined') {
              var height = activeSlides[i].offsetHeight;
              newHeight = height > newHeight ? height : newHeight;
            }
          }

          // Update Height
          if (newHeight) s.wrapper.css('height', newHeight + 'px');
        };
        s.updateContainerSize = function() {
          var width, height;
          if (typeof s.params.width !== 'undefined') {
            width = s.params.width;
          } else {
            width = s.container[0].clientWidth;
          }
          if (typeof s.params.height !== 'undefined') {
            height = s.params.height;
          } else {
            height = s.container[0].clientHeight;
          }
          if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
            return;
          }

          //Subtract paddings
          width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
          height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);

          // Store values
          s.width = width;
          s.height = height;
          s.size = s.isHorizontal() ? s.width : s.height;
        };

        s.updateSlidesSize = function() {
          s.slides = s.wrapper.children('.' + s.params.slideClass);
          s.snapGrid = [];
          s.slidesGrid = [];
          s.slidesSizesGrid = [];

          var spaceBetween = s.params.spaceBetween,
            slidePosition = -s.params.slidesOffsetBefore,
            i,
            prevSlideSize = 0,
            index = 0;
          if (typeof s.size === 'undefined') return;
          if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
          }

          s.virtualSize = -spaceBetween;
          // reset margins
          if (s.rtl) s.slides.css({
            marginLeft: '',
            marginTop: ''
          });
          else s.slides.css({
            marginRight: '',
            marginBottom: ''
          });

          var slidesNumberEvenToRows;
          if (s.params.slidesPerColumn > 1) {
            if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
              slidesNumberEvenToRows = s.slides.length;
            } else {
              slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
            }
            if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
              slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
            }
          }

          // Calc slides
          var slideSize;
          var slidesPerColumn = s.params.slidesPerColumn;
          var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
          var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
          for (i = 0; i < s.slides.length; i++) {
            slideSize = 0;
            var slide = s.slides.eq(i);
            if (s.params.slidesPerColumn > 1) {
              // Set slides order
              var newSlideOrderIndex;
              var column, row;
              if (s.params.slidesPerColumnFill === 'column') {
                column = Math.floor(i / slidesPerColumn);
                row = i - column * slidesPerColumn;
                if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
                  if (++row >= slidesPerColumn) {
                    row = 0;
                    column++;
                  }
                }
                newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                slide
                  .css({
                    '-webkit-box-ordinal-group': newSlideOrderIndex,
                    '-moz-box-ordinal-group': newSlideOrderIndex,
                    '-ms-flex-order': newSlideOrderIndex,
                    '-webkit-order': newSlideOrderIndex,
                    'order': newSlideOrderIndex
                  });
              } else {
                row = Math.floor(i / slidesPerRow);
                column = i - row * slidesPerRow;
              }
              slide
                .css(
                  'margin-' + (s.isHorizontal() ? 'top' : 'left'), (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
                )
                .attr('data-swiper-column', column)
                .attr('data-swiper-row', row);

            }
            if (slide.css('display') === 'none') continue;
            if (s.params.slidesPerView === 'auto') {
              slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
              if (s.params.roundLengths) slideSize = round(slideSize);
            } else {
              slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
              if (s.params.roundLengths) slideSize = round(slideSize);

              if (s.isHorizontal()) {
                s.slides[i].style.width = slideSize + 'px';
              } else {
                s.slides[i].style.height = slideSize + 'px';
              }
            }
            s.slides[i].swiperSlideSize = slideSize;
            s.slidesSizesGrid.push(slideSize);


            if (s.params.centeredSlides) {
              slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
              if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
              if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
              if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
              if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
              s.slidesGrid.push(slidePosition);
            } else {
              if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
              s.slidesGrid.push(slidePosition);
              slidePosition = slidePosition + slideSize + spaceBetween;
            }

            s.virtualSize += slideSize + spaceBetween;

            prevSlideSize = slideSize;

            index++;
          }
          s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
          var newSlidesGrid;

          if (
            s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
            s.wrapper.css({
              width: s.virtualSize + s.params.spaceBetween + 'px'
            });
          }
          if (!s.support.flexbox || s.params.setWrapperSize) {
            if (s.isHorizontal()) s.wrapper.css({
              width: s.virtualSize + s.params.spaceBetween + 'px'
            });
            else s.wrapper.css({
              height: s.virtualSize + s.params.spaceBetween + 'px'
            });
          }

          if (s.params.slidesPerColumn > 1) {
            s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
            s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
            if (s.isHorizontal()) s.wrapper.css({
              width: s.virtualSize + s.params.spaceBetween + 'px'
            });
            else s.wrapper.css({
              height: s.virtualSize + s.params.spaceBetween + 'px'
            });
            if (s.params.centeredSlides) {
              newSlidesGrid = [];
              for (i = 0; i < s.snapGrid.length; i++) {
                if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
              }
              s.snapGrid = newSlidesGrid;
            }
          }

          // Remove last grid elements depending on width
          if (!s.params.centeredSlides) {
            newSlidesGrid = [];
            for (i = 0; i < s.snapGrid.length; i++) {
              if (s.snapGrid[i] <= s.virtualSize - s.size) {
                newSlidesGrid.push(s.snapGrid[i]);
              }
            }
            s.snapGrid = newSlidesGrid;
            if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
              s.snapGrid.push(s.virtualSize - s.size);
            }
          }
          if (s.snapGrid.length === 0) s.snapGrid = [0];

          if (s.params.spaceBetween !== 0) {
            if (s.isHorizontal()) {
              if (s.rtl) s.slides.css({
                marginLeft: spaceBetween + 'px'
              });
              else s.slides.css({
                marginRight: spaceBetween + 'px'
              });
            } else s.slides.css({
              marginBottom: spaceBetween + 'px'
            });
          }
          if (s.params.watchSlidesProgress) {
            s.updateSlidesOffset();
          }
        };
        s.updateSlidesOffset = function() {
          for (var i = 0; i < s.slides.length; i++) {
            s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
          }
        };

        /*=========================
          Dynamic Slides Per View
          ===========================*/
        s.currentSlidesPerView = function() {
          var spv = 1,
            i, j;
          if (s.params.centeredSlides) {
            var size = s.slides[s.activeIndex].swiperSlideSize;
            var breakLoop;
            for (i = s.activeIndex + 1; i < s.slides.length; i++) {
              if (s.slides[i] && !breakLoop) {
                size += s.slides[i].swiperSlideSize;
                spv++;
                if (size > s.size) breakLoop = true;
              }
            }
            for (j = s.activeIndex - 1; j >= 0; j--) {
              if (s.slides[j] && !breakLoop) {
                size += s.slides[j].swiperSlideSize;
                spv++;
                if (size > s.size) breakLoop = true;
              }
            }
          } else {
            for (i = s.activeIndex + 1; i < s.slides.length; i++) {
              if (s.slidesGrid[i] - s.slidesGrid[s.activeIndex] < s.size) {
                spv++;
              }
            }
          }
          return spv;
        };
        /*=========================
          Slider/slides progress
          ===========================*/
        s.updateSlidesProgress = function(translate) {
          if (typeof translate === 'undefined') {
            translate = s.translate || 0;
          }
          if (s.slides.length === 0) return;
          if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();

          var offsetCenter = -translate;
          if (s.rtl) offsetCenter = translate;

          // Visible Slides
          s.slides.removeClass(s.params.slideVisibleClass);
          for (var i = 0; i < s.slides.length; i++) {
            var slide = s.slides[i];
            var slideProgress = (offsetCenter + (s.params.centeredSlides ? s.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
            if (s.params.watchSlidesVisibility) {
              var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
              var slideAfter = slideBefore + s.slidesSizesGrid[i];
              var isVisible =
                (slideBefore >= 0 && slideBefore < s.size) ||
                (slideAfter > 0 && slideAfter <= s.size) ||
                (slideBefore <= 0 && slideAfter >= s.size);
              if (isVisible) {
                s.slides.eq(i).addClass(s.params.slideVisibleClass);
              }
            }
            slide.progress = s.rtl ? -slideProgress : slideProgress;
          }
        };
        s.updateProgress = function(translate) {
          if (typeof translate === 'undefined') {
            translate = s.translate || 0;
          }
          var translatesDiff = s.maxTranslate() - s.minTranslate();
          var wasBeginning = s.isBeginning;
          var wasEnd = s.isEnd;
          if (translatesDiff === 0) {
            s.progress = 0;
            s.isBeginning = s.isEnd = true;
          } else {
            s.progress = (translate - s.minTranslate()) / (translatesDiff);
            s.isBeginning = s.progress <= 0;
            s.isEnd = s.progress >= 1;
          }
          if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
          if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);

          if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
          s.emit('onProgress', s, s.progress);
        };
        s.updateActiveIndex = function() {
          var translate = s.rtl ? s.translate : -s.translate;
          var newActiveIndex, i, snapIndex;
          for (i = 0; i < s.slidesGrid.length; i++) {
            if (typeof s.slidesGrid[i + 1] !== 'undefined') {
              if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                newActiveIndex = i;
              } else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                newActiveIndex = i + 1;
              }
            } else {
              if (translate >= s.slidesGrid[i]) {
                newActiveIndex = i;
              }
            }
          }
          // Normalize slideIndex
          if (s.params.normalizeSlideIndex) {
            if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
          }
          // for (i = 0; i < s.slidesGrid.length; i++) {
          // if (- translate >= s.slidesGrid[i]) {
          // newActiveIndex = i;
          // }
          // }
          snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
          if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;

          if (newActiveIndex === s.activeIndex) {
            return;
          }
          s.snapIndex = snapIndex;
          s.previousIndex = s.activeIndex;
          s.activeIndex = newActiveIndex;
          s.updateClasses();
          s.updateRealIndex();
        };
        s.updateRealIndex = function() {
          s.realIndex = parseInt(s.slides.eq(s.activeIndex).attr('data-swiper-slide-index') || s.activeIndex, 10);
        };

        /*=========================
          Classes
          ===========================*/
        s.updateClasses = function() {
          s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass + ' ' + s.params.slideDuplicateActiveClass + ' ' + s.params.slideDuplicateNextClass + ' ' + s.params.slideDuplicatePrevClass);
          var activeSlide = s.slides.eq(s.activeIndex);
          // Active classes
          activeSlide.addClass(s.params.slideActiveClass);
          if (params.loop) {
            // Duplicate to all looped slides
            if (activeSlide.hasClass(s.params.slideDuplicateClass)) {
              s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
            } else {
              s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
            }
          }
          // Next Slide
          var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
          if (s.params.loop && nextSlide.length === 0) {
            nextSlide = s.slides.eq(0);
            nextSlide.addClass(s.params.slideNextClass);
          }
          // Prev Slide
          var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
          if (s.params.loop && prevSlide.length === 0) {
            prevSlide = s.slides.eq(-1);
            prevSlide.addClass(s.params.slidePrevClass);
          }
          if (params.loop) {
            // Duplicate to all looped slides
            if (nextSlide.hasClass(s.params.slideDuplicateClass)) {
              s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
            } else {
              s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
            }
            if (prevSlide.hasClass(s.params.slideDuplicateClass)) {
              s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
            } else {
              s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
            }
          }

          // Pagination
          if (s.paginationContainer && s.paginationContainer.length > 0) {
            // Current/Total
            var current,
              total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
            if (s.params.loop) {
              current = Math.ceil((s.activeIndex - s.loopedSlides) / s.params.slidesPerGroup);
              if (current > s.slides.length - 1 - s.loopedSlides * 2) {
                current = current - (s.slides.length - s.loopedSlides * 2);
              }
              if (current > total - 1) current = current - total;
              if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
            } else {
              if (typeof s.snapIndex !== 'undefined') {
                current = s.snapIndex;
              } else {
                current = s.activeIndex || 0;
              }
            }
            // Types
            if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
              s.bullets.removeClass(s.params.bulletActiveClass);
              if (s.paginationContainer.length > 1) {
                s.bullets.each(function() {
                  if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
                });
              } else {
                s.bullets.eq(current).addClass(s.params.bulletActiveClass);
              }
            }
            if (s.params.paginationType === 'fraction') {
              s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
              s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
            }
            if (s.params.paginationType === 'progress') {
              var scale = (current + 1) / total,
                scaleX = scale,
                scaleY = 1;
              if (!s.isHorizontal()) {
                scaleY = scale;
                scaleX = 1;
              }
              s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
            }
            if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
              s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
              s.emit('onPaginationRendered', s, s.paginationContainer[0]);
            }
          }

          // Next/active buttons
          if (!s.params.loop) {
            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
              if (s.isBeginning) {
                s.prevButton.addClass(s.params.buttonDisabledClass);
                if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
              } else {
                s.prevButton.removeClass(s.params.buttonDisabledClass);
                if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
              }
            }
            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
              if (s.isEnd) {
                s.nextButton.addClass(s.params.buttonDisabledClass);
                if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
              } else {
                s.nextButton.removeClass(s.params.buttonDisabledClass);
                if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
              }
            }
          }
        };

        /*=========================
          Pagination
          ===========================*/
        s.updatePagination = function() {
          if (!s.params.pagination) return;
          if (s.paginationContainer && s.paginationContainer.length > 0) {
            var paginationHTML = '';
            if (s.params.paginationType === 'bullets') {
              var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
              for (var i = 0; i < numberOfBullets; i++) {
                if (s.params.paginationBulletRender) {
                  paginationHTML += s.params.paginationBulletRender(s, i, s.params.bulletClass);
                } else {
                  paginationHTML += '<' + s.params.paginationElement + ' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                }
              }
              s.paginationContainer.html(paginationHTML);
              s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
              if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                s.a11y.initPagination();
              }
            }
            if (s.params.paginationType === 'fraction') {
              if (s.params.paginationFractionRender) {
                paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
              } else {
                paginationHTML =
                  '<span class="' + s.params.paginationCurrentClass + '"></span>' +
                  ' / ' +
                  '<span class="' + s.params.paginationTotalClass + '"></span>';
              }
              s.paginationContainer.html(paginationHTML);
            }
            if (s.params.paginationType === 'progress') {
              if (s.params.paginationProgressRender) {
                paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
              } else {
                paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
              }
              s.paginationContainer.html(paginationHTML);
            }
            if (s.params.paginationType !== 'custom') {
              s.emit('onPaginationRendered', s, s.paginationContainer[0]);
            }
          }
        };
        /*=========================
          Common update method
          ===========================*/
        s.update = function(updateTranslate) {
          if (!s) return;
          s.updateContainerSize();
          s.updateSlidesSize();
          s.updateProgress();
          s.updatePagination();
          s.updateClasses();
          if (s.params.scrollbar && s.scrollbar) {
            s.scrollbar.set();
          }
          var newTranslate;

          function forceSetTranslate() {
            var translate = s.rtl ? -s.translate : s.translate;
            newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
            s.setWrapperTranslate(newTranslate);
            s.updateActiveIndex();
            s.updateClasses();
          }
          if (updateTranslate) {
            var translated;
            if (s.controller && s.controller.spline) {
              s.controller.spline = undefined;
            }
            if (s.params.freeMode) {
              forceSetTranslate();
              if (s.params.autoHeight) {
                s.updateAutoHeight();
              }
            } else {
              if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                translated = s.slideTo(s.slides.length - 1, 0, false, true);
              } else {
                translated = s.slideTo(s.activeIndex, 0, false, true);
              }
              if (!translated) {
                forceSetTranslate();
              }
            }
          } else if (s.params.autoHeight) {
            s.updateAutoHeight();
          }
        };

        /*=========================
          Resize Handler
          ===========================*/
        s.onResize = function(forceUpdatePagination) {
          if (s.params.onBeforeResize) s.params.onBeforeResize(s);
          //Breakpoints
          if (s.params.breakpoints) {
            s.setBreakpoint();
          }

          // Disable locks on resize
          var allowSwipeToPrev = s.params.allowSwipeToPrev;
          var allowSwipeToNext = s.params.allowSwipeToNext;
          s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;

          s.updateContainerSize();
          s.updateSlidesSize();
          if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
          if (s.params.scrollbar && s.scrollbar) {
            s.scrollbar.set();
          }
          if (s.controller && s.controller.spline) {
            s.controller.spline = undefined;
          }
          var slideChangedBySlideTo = false;
          if (s.params.freeMode) {
            var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
            s.setWrapperTranslate(newTranslate);
            s.updateActiveIndex();
            s.updateClasses();

            if (s.params.autoHeight) {
              s.updateAutoHeight();
            }
          } else {
            s.updateClasses();
            if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
              slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
            } else {
              slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
            }
          }
          if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
            s.lazy.load();
          }
          // Return locks after resize
          s.params.allowSwipeToPrev = allowSwipeToPrev;
          s.params.allowSwipeToNext = allowSwipeToNext;
          if (s.params.onAfterResize) s.params.onAfterResize(s);
        };

        /*=========================
          Events
          ===========================*/

        //Define Touch Events
        s.touchEventsDesktop = {
          start: 'mousedown',
          move: 'mousemove',
          end: 'mouseup'
        };
        if (window.navigator.pointerEnabled) s.touchEventsDesktop = {
          start: 'pointerdown',
          move: 'pointermove',
          end: 'pointerup'
        };
        else if (window.navigator.msPointerEnabled) s.touchEventsDesktop = {
          start: 'MSPointerDown',
          move: 'MSPointerMove',
          end: 'MSPointerUp'
        };
        s.touchEvents = {
          start: s.support.touch || !s.params.simulateTouch ? 'touchstart' : s.touchEventsDesktop.start,
          move: s.support.touch || !s.params.simulateTouch ? 'touchmove' : s.touchEventsDesktop.move,
          end: s.support.touch || !s.params.simulateTouch ? 'touchend' : s.touchEventsDesktop.end
        };


        // WP8 Touch Events Fix
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
          (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
        }

        // Attach/detach events
        s.initEvents = function(detach) {
          var actionDom = detach ? 'off' : 'on';
          var action = detach ? 'removeEventListener' : 'addEventListener';
          var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
          var target = s.support.touch ? touchEventsTarget : document;

          var moveCapture = s.params.nested ? true : false;

          //Touch Events
          if (s.browser.ie) {
            touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
            target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
            target[action](s.touchEvents.end, s.onTouchEnd, false);
          } else {
            if (s.support.touch) {
              var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {
                passive: true,
                capture: false
              } : false;
              touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, passiveListener);
              touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
              touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, passiveListener);
            }
            if ((params.simulateTouch && !s.device.ios && !s.device.android) || (params.simulateTouch && !s.support.touch && s.device.ios)) {
              touchEventsTarget[action]('mousedown', s.onTouchStart, false);
              document[action]('mousemove', s.onTouchMove, moveCapture);
              document[action]('mouseup', s.onTouchEnd, false);
            }
          }
          window[action]('resize', s.onResize);

          // Next, Prev, Index
          if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
            s.nextButton[actionDom]('click', s.onClickNext);
            if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
          }
          if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
            s.prevButton[actionDom]('click', s.onClickPrev);
            if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
          }
          if (s.params.pagination && s.params.paginationClickable) {
            s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
            if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
          }

          // Prevent Links Clicks
          if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
        };
        s.attachEvents = function() {
          s.initEvents();
        };
        s.detachEvents = function() {
          s.initEvents(true);
        };

        /*=========================
          Handle Clicks
          ===========================*/
        // Prevent Clicks
        s.allowClick = true;
        s.preventClicks = function(e) {
          if (!s.allowClick) {
            if (s.params.preventClicks) e.preventDefault();
            if (s.params.preventClicksPropagation && s.animating) {
              e.stopPropagation();
              e.stopImmediatePropagation();
            }
          }
        };
        // Clicks
        s.onClickNext = function(e) {
          e.preventDefault();
          if (s.isEnd && !s.params.loop) return;
          s.slideNext();
        };
        s.onClickPrev = function(e) {
          e.preventDefault();
          if (s.isBeginning && !s.params.loop) return;
          s.slidePrev();
        };
        s.onClickIndex = function(e) {
          e.preventDefault();
          var index = $(this).index() * s.params.slidesPerGroup;
          if (s.params.loop) index = index + s.loopedSlides;
          s.slideTo(index);
        };

        /*=========================
          Handle Touches
          ===========================*/
        function findElementInEvent(e, selector) {
          var el = $(e.target);
          if (!el.is(selector)) {
            if (typeof selector === 'string') {
              el = el.parents(selector);
            } else if (selector.nodeType) {
              var found;
              el.parents().each(function(index, _el) {
                if (_el === selector) found = selector;
              });
              if (!found) return undefined;
              else return selector;
            }
          }
          if (el.length === 0) {
            return undefined;
          }
          return el[0];
        }
        s.updateClickedSlide = function(e) {
          var slide = findElementInEvent(e, '.' + s.params.slideClass);
          var slideFound = false;
          if (slide) {
            for (var i = 0; i < s.slides.length; i++) {
              if (s.slides[i] === slide) slideFound = true;
            }
          }

          if (slide && slideFound) {
            s.clickedSlide = slide;
            s.clickedIndex = $(slide).index();
          } else {
            s.clickedSlide = undefined;
            s.clickedIndex = undefined;
            return;
          }
          if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
            var slideToIndex = s.clickedIndex,
              realIndex,
              duplicatedSlides,
              slidesPerView = s.params.slidesPerView === 'auto' ? s.currentSlidesPerView() : s.params.slidesPerView;
            if (s.params.loop) {
              if (s.animating) return;
              realIndex = parseInt($(s.clickedSlide).attr('data-swiper-slide-index'), 10);
              if (s.params.centeredSlides) {
                if ((slideToIndex < s.loopedSlides - slidesPerView / 2) || (slideToIndex > s.slides.length - s.loopedSlides + slidesPerView / 2)) {
                  s.fixLoop();
                  slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                  setTimeout(function() {
                    s.slideTo(slideToIndex);
                  }, 0);
                } else {
                  s.slideTo(slideToIndex);
                }
              } else {
                if (slideToIndex > s.slides.length - slidesPerView) {
                  s.fixLoop();
                  slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                  setTimeout(function() {
                    s.slideTo(slideToIndex);
                  }, 0);
                } else {
                  s.slideTo(slideToIndex);
                }
              }
            } else {
              s.slideTo(slideToIndex);
            }
          }
        };

        var isTouched,
          isMoved,
          allowTouchCallbacks,
          touchStartTime,
          isScrolling,
          currentTranslate,
          startTranslate,
          allowThresholdMove,
          // Form elements to match
          formElements = 'input, select, textarea, button, video',
          // Last click time
          lastClickTime = Date.now(),
          clickTimeout,
          //Velocities
          velocities = [],
          allowMomentumBounce;

        // Animating Flag
        s.animating = false;

        // Touches information
        s.touches = {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        };

        // Touch handlers
        var isTouchEvent, startMoving;
        s.onTouchStart = function(e) {
          if (e.originalEvent) e = e.originalEvent;
          isTouchEvent = e.type === 'touchstart';
          if (!isTouchEvent && 'which' in e && e.which === 3) return;
          if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
            s.allowClick = true;
            return;
          }
          if (s.params.swipeHandler) {
            if (!findElementInEvent(e, s.params.swipeHandler)) return;
          }

          var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
          var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;

          // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
          if (s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
            return;
          }

          isTouched = true;
          isMoved = false;
          allowTouchCallbacks = true;
          isScrolling = undefined;
          startMoving = undefined;
          s.touches.startX = startX;
          s.touches.startY = startY;
          touchStartTime = Date.now();
          s.allowClick = true;
          s.updateContainerSize();
          s.swipeDirection = undefined;
          if (s.params.threshold > 0) allowThresholdMove = false;
          if (e.type !== 'touchstart') {
            var preventDefault = true;
            if ($(e.target).is(formElements)) preventDefault = false;
            if (document.activeElement && $(document.activeElement).is(formElements)) {
              document.activeElement.blur();
            }
            if (preventDefault) {
              e.preventDefault();
            }
          }
          s.emit('onTouchStart', s, e);
        };

        s.onTouchMove = function(e) {
          if (e.originalEvent) e = e.originalEvent;
          if (isTouchEvent && e.type === 'mousemove') return;
          if (e.preventedByNestedSwiper) {
            s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
            return;
          }
          if (s.params.onlyExternal) {
            // isMoved = true;
            s.allowClick = false;
            if (isTouched) {
              s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
              s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
              touchStartTime = Date.now();
            }
            return;
          }
          if (isTouchEvent && s.params.touchReleaseOnEdges && !s.params.loop) {
            if (!s.isHorizontal()) {
              // Vertical
              if (
                (s.touches.currentY < s.touches.startY && s.translate <= s.maxTranslate()) ||
                (s.touches.currentY > s.touches.startY && s.translate >= s.minTranslate())
              ) {
                return;
              }
            } else {
              if (
                (s.touches.currentX < s.touches.startX && s.translate <= s.maxTranslate()) ||
                (s.touches.currentX > s.touches.startX && s.translate >= s.minTranslate())
              ) {
                return;
              }
            }
          }
          if (isTouchEvent && document.activeElement) {
            if (e.target === document.activeElement && $(e.target).is(formElements)) {
              isMoved = true;
              s.allowClick = false;
              return;
            }
          }
          if (allowTouchCallbacks) {
            s.emit('onTouchMove', s, e);
          }
          if (e.targetTouches && e.targetTouches.length > 1) return;

          s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
          s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

          if (typeof isScrolling === 'undefined') {
            var touchAngle;
            if (s.isHorizontal() && s.touches.currentY === s.touches.startY || !s.isHorizontal() && s.touches.currentX === s.touches.startX) {
              isScrolling = false;
            } else {
              touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
              isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
            }
          }
          if (isScrolling) {
            s.emit('onTouchMoveOpposite', s, e);
          }
          if (typeof startMoving === 'undefined') {
            if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
              startMoving = true;
            }
          }
          if (!isTouched) return;
          if (isScrolling) {
            isTouched = false;
            return;
          }
          if (!startMoving) {
            return;
          }
          s.allowClick = false;
          s.emit('onSliderMove', s, e);
          e.preventDefault();
          if (s.params.touchMoveStopPropagation && !s.params.nested) {
            e.stopPropagation();
          }

          if (!isMoved) {
            if (params.loop) {
              s.fixLoop();
            }
            startTranslate = s.getWrapperTranslate();
            s.setWrapperTransition(0);
            if (s.animating) {
              s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
            }
            if (s.params.autoplay && s.autoplaying) {
              if (s.params.autoplayDisableOnInteraction) {
                s.stopAutoplay();
              } else {
                s.pauseAutoplay();
              }
            }
            allowMomentumBounce = false;
            //Grab Cursor
            if (s.params.grabCursor && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
              s.setGrabCursor(true);
            }
          }
          isMoved = true;

          var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;

          diff = diff * s.params.touchRatio;
          if (s.rtl) diff = -diff;

          s.swipeDirection = diff > 0 ? 'prev' : 'next';
          currentTranslate = diff + startTranslate;

          var disableParentSwiper = true;
          if ((diff > 0 && currentTranslate > s.minTranslate())) {
            disableParentSwiper = false;
            if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
          } else if (diff < 0 && currentTranslate < s.maxTranslate()) {
            disableParentSwiper = false;
            if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
          }

          if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
          }

          // Directions locks
          if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
            currentTranslate = startTranslate;
          }
          if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
            currentTranslate = startTranslate;
          }


          // Threshold
          if (s.params.threshold > 0) {
            if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
              if (!allowThresholdMove) {
                allowThresholdMove = true;
                s.touches.startX = s.touches.currentX;
                s.touches.startY = s.touches.currentY;
                currentTranslate = startTranslate;
                s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                return;
              }
            } else {
              currentTranslate = startTranslate;
              return;
            }
          }

          if (!s.params.followFinger) return;

          // Update active index in free mode
          if (s.params.freeMode || s.params.watchSlidesProgress) {
            s.updateActiveIndex();
          }
          if (s.params.freeMode) {
            //Velocity
            if (velocities.length === 0) {
              velocities.push({
                position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
                time: touchStartTime
              });
            }
            velocities.push({
              position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
              time: (new window.Date()).getTime()
            });
          }
          // Update progress
          s.updateProgress(currentTranslate);
          // Update translate
          s.setWrapperTranslate(currentTranslate);
        };
        s.onTouchEnd = function(e) {
          if (e.originalEvent) e = e.originalEvent;
          if (allowTouchCallbacks) {
            s.emit('onTouchEnd', s, e);
          }
          allowTouchCallbacks = false;
          if (!isTouched) return;
          //Return Grab Cursor
          if (s.params.grabCursor && isMoved && isTouched && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
            s.setGrabCursor(false);
          }

          // Time diff
          var touchEndTime = Date.now();
          var timeDiff = touchEndTime - touchStartTime;

          // Tap, doubleTap, Click
          if (s.allowClick) {
            s.updateClickedSlide(e);
            s.emit('onTap', s, e);
            if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
              if (clickTimeout) clearTimeout(clickTimeout);
              clickTimeout = setTimeout(function() {
                if (!s) return;
                if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                  s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                }
                s.emit('onClick', s, e);
              }, 300);

            }
            if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
              if (clickTimeout) clearTimeout(clickTimeout);
              s.emit('onDoubleTap', s, e);
            }
          }

          lastClickTime = Date.now();
          setTimeout(function() {
            if (s) s.allowClick = true;
          }, 0);

          if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
            isTouched = isMoved = false;
            return;
          }
          isTouched = isMoved = false;

          var currentPos;
          if (s.params.followFinger) {
            currentPos = s.rtl ? s.translate : -s.translate;
          } else {
            currentPos = -currentTranslate;
          }
          if (s.params.freeMode) {
            if (currentPos < -s.minTranslate()) {
              s.slideTo(s.activeIndex);
              return;
            } else if (currentPos > -s.maxTranslate()) {
              if (s.slides.length < s.snapGrid.length) {
                s.slideTo(s.snapGrid.length - 1);
              } else {
                s.slideTo(s.slides.length - 1);
              }
              return;
            }

            if (s.params.freeModeMomentum) {
              if (velocities.length > 1) {
                var lastMoveEvent = velocities.pop(),
                  velocityEvent = velocities.pop();

                var distance = lastMoveEvent.position - velocityEvent.position;
                var time = lastMoveEvent.time - velocityEvent.time;
                s.velocity = distance / time;
                s.velocity = s.velocity / 2;
                if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                  s.velocity = 0;
                }
                // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
                  s.velocity = 0;
                }
              } else {
                s.velocity = 0;
              }
              s.velocity = s.velocity * s.params.freeModeMomentumVelocityRatio;

              velocities.length = 0;
              var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
              var momentumDistance = s.velocity * momentumDuration;

              var newPosition = s.translate + momentumDistance;
              if (s.rtl) newPosition = -newPosition;
              var doBounce = false;
              var afterBouncePosition;
              var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
              if (newPosition < s.maxTranslate()) {
                if (s.params.freeModeMomentumBounce) {
                  if (newPosition + s.maxTranslate() < -bounceAmount) {
                    newPosition = s.maxTranslate() - bounceAmount;
                  }
                  afterBouncePosition = s.maxTranslate();
                  doBounce = true;
                  allowMomentumBounce = true;
                } else {
                  newPosition = s.maxTranslate();
                }
              } else if (newPosition > s.minTranslate()) {
                if (s.params.freeModeMomentumBounce) {
                  if (newPosition - s.minTranslate() > bounceAmount) {
                    newPosition = s.minTranslate() + bounceAmount;
                  }
                  afterBouncePosition = s.minTranslate();
                  doBounce = true;
                  allowMomentumBounce = true;
                } else {
                  newPosition = s.minTranslate();
                }
              } else if (s.params.freeModeSticky) {
                var j = 0,
                  nextSlide;
                for (j = 0; j < s.snapGrid.length; j += 1) {
                  if (s.snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                  }

                }
                if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                  newPosition = s.snapGrid[nextSlide];
                } else {
                  newPosition = s.snapGrid[nextSlide - 1];
                }
                if (!s.rtl) newPosition = -newPosition;
              }
              //Fix duration
              if (s.velocity !== 0) {
                if (s.rtl) {
                  momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                } else {
                  momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                }
              } else if (s.params.freeModeSticky) {
                s.slideReset();
                return;
              }

              if (s.params.freeModeMomentumBounce && doBounce) {
                s.updateProgress(afterBouncePosition);
                s.setWrapperTransition(momentumDuration);
                s.setWrapperTranslate(newPosition);
                s.onTransitionStart();
                s.animating = true;
                s.wrapper.transitionEnd(function() {
                  if (!s || !allowMomentumBounce) return;
                  s.emit('onMomentumBounce', s);

                  s.setWrapperTransition(s.params.speed);
                  s.setWrapperTranslate(afterBouncePosition);
                  s.wrapper.transitionEnd(function() {
                    if (!s) return;
                    s.onTransitionEnd();
                  });
                });
              } else if (s.velocity) {
                s.updateProgress(newPosition);
                s.setWrapperTransition(momentumDuration);
                s.setWrapperTranslate(newPosition);
                s.onTransitionStart();
                if (!s.animating) {
                  s.animating = true;
                  s.wrapper.transitionEnd(function() {
                    if (!s) return;
                    s.onTransitionEnd();
                  });
                }

              } else {
                s.updateProgress(newPosition);
              }

              s.updateActiveIndex();
            }
            if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
              s.updateProgress();
              s.updateActiveIndex();
            }
            return;
          }

          // Find current slide
          var i, stopIndex = 0,
            groupSize = s.slidesSizesGrid[0];
          for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
            if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
              if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                stopIndex = i;
                groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
              }
            } else {
              if (currentPos >= s.slidesGrid[i]) {
                stopIndex = i;
                groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
              }
            }
          }

          // Find current slide size
          var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;

          if (timeDiff > s.params.longSwipesMs) {
            // Long touches
            if (!s.params.longSwipes) {
              s.slideTo(s.activeIndex);
              return;
            }
            if (s.swipeDirection === 'next') {
              if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
              else s.slideTo(stopIndex);

            }
            if (s.swipeDirection === 'prev') {
              if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
              else s.slideTo(stopIndex);
            }
          } else {
            // Short swipes
            if (!s.params.shortSwipes) {
              s.slideTo(s.activeIndex);
              return;
            }
            if (s.swipeDirection === 'next') {
              s.slideTo(stopIndex + s.params.slidesPerGroup);

            }
            if (s.swipeDirection === 'prev') {
              s.slideTo(stopIndex);
            }
          }
        };
        /*=========================
          Transitions
          ===========================*/
        s._slideTo = function(slideIndex, speed) {
          return s.slideTo(slideIndex, speed, true, true);
        };
        s.slideTo = function(slideIndex, speed, runCallbacks, internal) {
          if (typeof runCallbacks === 'undefined') runCallbacks = true;
          if (typeof slideIndex === 'undefined') slideIndex = 0;
          if (slideIndex < 0) slideIndex = 0;
          s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
          if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;

          var translate = -s.snapGrid[s.snapIndex];
          // Stop autoplay
          if (s.params.autoplay && s.autoplaying) {
            if (internal || !s.params.autoplayDisableOnInteraction) {
              s.pauseAutoplay(speed);
            } else {
              s.stopAutoplay();
            }
          }
          // Update progress
          s.updateProgress(translate);

          // Normalize slideIndex
          if (s.params.normalizeSlideIndex) {
            for (var i = 0; i < s.slidesGrid.length; i++) {
              if (-Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                slideIndex = i;
              }
            }
          }

          // Directions locks
          if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
            return false;
          }
          if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
            if ((s.activeIndex || 0) !== slideIndex) return false;
          }

          // Update Index
          if (typeof speed === 'undefined') speed = s.params.speed;
          s.previousIndex = s.activeIndex || 0;
          s.activeIndex = slideIndex;
          s.updateRealIndex();
          if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
            // Update Height
            if (s.params.autoHeight) {
              s.updateAutoHeight();
            }
            s.updateClasses();
            if (s.params.effect !== 'slide') {
              s.setWrapperTranslate(translate);
            }
            return false;
          }
          s.updateClasses();
          s.onTransitionStart(runCallbacks);

          if (speed === 0 || s.browser.lteIE9) {
            s.setWrapperTranslate(translate);
            s.setWrapperTransition(0);
            s.onTransitionEnd(runCallbacks);
          } else {
            s.setWrapperTranslate(translate);
            s.setWrapperTransition(speed);
            if (!s.animating) {
              s.animating = true;
              s.wrapper.transitionEnd(function() {
                if (!s) return;
                s.onTransitionEnd(runCallbacks);
              });
            }

          }

          return true;
        };

        s.onTransitionStart = function(runCallbacks) {
          if (typeof runCallbacks === 'undefined') runCallbacks = true;
          if (s.params.autoHeight) {
            s.updateAutoHeight();
          }
          if (s.lazy) s.lazy.onTransitionStart();
          if (runCallbacks) {
            s.emit('onTransitionStart', s);
            if (s.activeIndex !== s.previousIndex) {
              s.emit('onSlideChangeStart', s);
              if (s.activeIndex > s.previousIndex) {
                s.emit('onSlideNextStart', s);
              } else {
                s.emit('onSlidePrevStart', s);
              }
            }

          }
        };
        s.onTransitionEnd = function(runCallbacks) {
          s.animating = false;
          s.setWrapperTransition(0);
          if (typeof runCallbacks === 'undefined') runCallbacks = true;
          if (s.lazy) s.lazy.onTransitionEnd();
          if (runCallbacks) {
            s.emit('onTransitionEnd', s);
            if (s.activeIndex !== s.previousIndex) {
              s.emit('onSlideChangeEnd', s);
              if (s.activeIndex > s.previousIndex) {
                s.emit('onSlideNextEnd', s);
              } else {
                s.emit('onSlidePrevEnd', s);
              }
            }
          }
          if (s.params.history && s.history) {
            s.history.setHistory(s.params.history, s.activeIndex);
          }
          if (s.params.hashnav && s.hashnav) {
            s.hashnav.setHash();
          }

        };
        s.slideNext = function(runCallbacks, speed, internal) {
          if (s.params.loop) {
            if (s.animating) return false;
            s.fixLoop();
            var clientLeft = s.container[0].clientLeft;
            return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
          } else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
        };
        s._slideNext = function(speed) {
          return s.slideNext(true, speed, true);
        };
        s.slidePrev = function(runCallbacks, speed, internal) {
          if (s.params.loop) {
            if (s.animating) return false;
            s.fixLoop();
            var clientLeft = s.container[0].clientLeft;
            return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
          } else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
        };
        s._slidePrev = function(speed) {
          return s.slidePrev(true, speed, true);
        };
        s.slideReset = function(runCallbacks, speed, internal) {
          return s.slideTo(s.activeIndex, speed, runCallbacks);
        };

        s.disableTouchControl = function() {
          s.params.onlyExternal = true;
          return true;
        };
        s.enableTouchControl = function() {
          s.params.onlyExternal = false;
          return true;
        };

        /*=========================
          Translate/transition helpers
          ===========================*/
        s.setWrapperTransition = function(duration, byController) {
          s.wrapper.transition(duration);
          if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
            s.effects[s.params.effect].setTransition(duration);
          }
          if (s.params.parallax && s.parallax) {
            s.parallax.setTransition(duration);
          }
          if (s.params.scrollbar && s.scrollbar) {
            s.scrollbar.setTransition(duration);
          }
          if (s.params.control && s.controller) {
            s.controller.setTransition(duration, byController);
          }
          s.emit('onSetTransition', s, duration);
        };
        s.setWrapperTranslate = function(translate, updateActiveIndex, byController) {
          var x = 0,
            y = 0,
            z = 0;
          if (s.isHorizontal()) {
            x = s.rtl ? -translate : translate;
          } else {
            y = translate;
          }

          if (s.params.roundLengths) {
            x = round(x);
            y = round(y);
          }

          if (!s.params.virtualTranslate) {
            if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
            else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
          }

          s.translate = s.isHorizontal() ? x : y;

          // Check if we need to update progress
          var progress;
          var translatesDiff = s.maxTranslate() - s.minTranslate();
          if (translatesDiff === 0) {
            progress = 0;
          } else {
            progress = (translate - s.minTranslate()) / (translatesDiff);
          }
          if (progress !== s.progress) {
            s.updateProgress(translate);
          }

          if (updateActiveIndex) s.updateActiveIndex();
          if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
            s.effects[s.params.effect].setTranslate(s.translate);
          }
          if (s.params.parallax && s.parallax) {
            s.parallax.setTranslate(s.translate);
          }
          if (s.params.scrollbar && s.scrollbar) {
            s.scrollbar.setTranslate(s.translate);
          }
          if (s.params.control && s.controller) {
            s.controller.setTranslate(s.translate, byController);
          }
          s.emit('onSetTranslate', s, s.translate);
        };

        s.getTranslate = function(el, axis) {
          var matrix, curTransform, curStyle, transformMatrix;

          // automatic axis detection
          if (typeof axis === 'undefined') {
            axis = 'x';
          }

          if (s.params.virtualTranslate) {
            return s.rtl ? -s.translate : s.translate;
          }

          curStyle = window.getComputedStyle(el, null);
          if (window.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;
            if (curTransform.split(',').length > 6) {
              curTransform = curTransform.split(', ').map(function(a) {
                return a.replace(',', '.');
              }).join(', ');
            }
            // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case
            transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
          } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
          }

          if (axis === 'x') {
            //Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix)
              curTransform = transformMatrix.m41;
            //Crazy IE10 Matrix
            else if (matrix.length === 16)
              curTransform = parseFloat(matrix[12]);
            //Normal Browsers
            else
              curTransform = parseFloat(matrix[4]);
          }
          if (axis === 'y') {
            //Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix)
              curTransform = transformMatrix.m42;
            //Crazy IE10 Matrix
            else if (matrix.length === 16)
              curTransform = parseFloat(matrix[13]);
            //Normal Browsers
            else
              curTransform = parseFloat(matrix[5]);
          }
          if (s.rtl && curTransform) curTransform = -curTransform;
          return curTransform || 0;
        };
        s.getWrapperTranslate = function(axis) {
          if (typeof axis === 'undefined') {
            axis = s.isHorizontal() ? 'x' : 'y';
          }
          return s.getTranslate(s.wrapper[0], axis);
        };

        /*=========================
          Observer
          ===========================*/
        s.observers = [];

        function initObserver(target, options) {
          options = options || {};
          // create an observer instance
          var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
          var observer = new ObserverFunc(function(mutations) {
            mutations.forEach(function(mutation) {
              s.onResize(true);
              s.emit('onObserverUpdate', s, mutation);
            });
          });

          observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: typeof options.childList === 'undefined' ? true : options.childList,
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData
          });

          s.observers.push(observer);
        }
        s.initObservers = function() {
          if (s.params.observeParents) {
            var containerParents = s.container.parents();
            for (var i = 0; i < containerParents.length; i++) {
              initObserver(containerParents[i]);
            }
          }

          // Observe container
          initObserver(s.container[0], {
            childList: false
          });

          // Observe wrapper
          initObserver(s.wrapper[0], {
            attributes: false
          });
        };
        s.disconnectObservers = function() {
          for (var i = 0; i < s.observers.length; i++) {
            s.observers[i].disconnect();
          }
          s.observers = [];
        };
        /*=========================
          Loop
          ===========================*/
        // Create looped slides
        s.createLoop = function() {
          // Remove duplicated slides
          s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();

          var slides = s.wrapper.children('.' + s.params.slideClass);

          if (s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;

          s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
          s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
          if (s.loopedSlides > slides.length) {
            s.loopedSlides = slides.length;
          }

          var prependSlides = [],
            appendSlides = [],
            i;
          slides.each(function(index, el) {
            var slide = $(this);
            if (index < s.loopedSlides) appendSlides.push(el);
            if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
            slide.attr('data-swiper-slide-index', index);
          });
          for (i = 0; i < appendSlides.length; i++) {
            s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
          }
          for (i = prependSlides.length - 1; i >= 0; i--) {
            s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
          }
        };
        s.destroyLoop = function() {
          s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
          s.slides.removeAttr('data-swiper-slide-index');
        };
        s.reLoop = function(updatePosition) {
          var oldIndex = s.activeIndex - s.loopedSlides;
          s.destroyLoop();
          s.createLoop();
          s.updateSlidesSize();
          if (updatePosition) {
            s.slideTo(oldIndex + s.loopedSlides, 0, false);
          }

        };
        s.fixLoop = function() {
          var newIndex;
          //Fix For Negative Oversliding
          if (s.activeIndex < s.loopedSlides) {
            newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
            newIndex = newIndex + s.loopedSlides;
            s.slideTo(newIndex, 0, false, true);
          }
          //Fix For Positive Oversliding
          else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
            newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
            newIndex = newIndex + s.loopedSlides;
            s.slideTo(newIndex, 0, false, true);
          }
        };
        /*=========================
          Append/Prepend/Remove Slides
          ===========================*/
        s.appendSlide = function(slides) {
          if (s.params.loop) {
            s.destroyLoop();
          }
          if (typeof slides === 'object' && slides.length) {
            for (var i = 0; i < slides.length; i++) {
              if (slides[i]) s.wrapper.append(slides[i]);
            }
          } else {
            s.wrapper.append(slides);
          }
          if (s.params.loop) {
            s.createLoop();
          }
          if (!(s.params.observer && s.support.observer)) {
            s.update(true);
          }
        };
        s.prependSlide = function(slides) {
          if (s.params.loop) {
            s.destroyLoop();
          }
          var newActiveIndex = s.activeIndex + 1;
          if (typeof slides === 'object' && slides.length) {
            for (var i = 0; i < slides.length; i++) {
              if (slides[i]) s.wrapper.prepend(slides[i]);
            }
            newActiveIndex = s.activeIndex + slides.length;
          } else {
            s.wrapper.prepend(slides);
          }
          if (s.params.loop) {
            s.createLoop();
          }
          if (!(s.params.observer && s.support.observer)) {
            s.update(true);
          }
          s.slideTo(newActiveIndex, 0, false);
        };
        s.removeSlide = function(slidesIndexes) {
          if (s.params.loop) {
            s.destroyLoop();
            s.slides = s.wrapper.children('.' + s.params.slideClass);
          }
          var newActiveIndex = s.activeIndex,
            indexToRemove;
          if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
            for (var i = 0; i < slidesIndexes.length; i++) {
              indexToRemove = slidesIndexes[i];
              if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
              if (indexToRemove < newActiveIndex) newActiveIndex--;
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
          } else {
            indexToRemove = slidesIndexes;
            if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex--;
            newActiveIndex = Math.max(newActiveIndex, 0);
          }

          if (s.params.loop) {
            s.createLoop();
          }

          if (!(s.params.observer && s.support.observer)) {
            s.update(true);
          }
          if (s.params.loop) {
            s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
          } else {
            s.slideTo(newActiveIndex, 0, false);
          }

        };
        s.removeAllSlides = function() {
          var slidesIndexes = [];
          for (var i = 0; i < s.slides.length; i++) {
            slidesIndexes.push(i);
          }
          s.removeSlide(slidesIndexes);
        };


        /*=========================
          Effects
          ===========================*/
        s.effects = {
          fade: {
            setTranslate: function() {
              for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides.eq(i);
                var offset = slide[0].swiperSlideOffset;
                var tx = -offset;
                if (!s.params.virtualTranslate) tx = tx - s.translate;
                var ty = 0;
                if (!s.isHorizontal()) {
                  ty = tx;
                  tx = 0;
                }
                var slideOpacity = s.params.fade.crossFade ?
                  Math.max(1 - Math.abs(slide[0].progress), 0) :
                  1 + Math.min(Math.max(slide[0].progress, -1), 0);
                slide
                  .css({
                    opacity: slideOpacity
                  })
                  .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');

              }

            },
            setTransition: function(duration) {
              s.slides.transition(duration);
              if (s.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                s.slides.transitionEnd(function() {
                  if (eventTriggered) return;
                  if (!s) return;
                  eventTriggered = true;
                  s.animating = false;
                  var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                  for (var i = 0; i < triggerEvents.length; i++) {
                    s.wrapper.trigger(triggerEvents[i]);
                  }
                });
              }
            }
          },
          flip: {
            setTranslate: function() {
              for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides.eq(i);
                var progress = slide[0].progress;
                if (s.params.flip.limitRotation) {
                  progress = Math.max(Math.min(slide[0].progress, 1), -1);
                }
                var offset = slide[0].swiperSlideOffset;
                var rotate = -180 * progress,
                  rotateY = rotate,
                  rotateX = 0,
                  tx = -offset,
                  ty = 0;
                if (!s.isHorizontal()) {
                  ty = tx;
                  tx = 0;
                  rotateX = -rotateY;
                  rotateY = 0;
                } else if (s.rtl) {
                  rotateY = -rotateY;
                }

                slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;

                if (s.params.flip.slideShadows) {
                  //Set shadows
                  var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                  var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                  if (shadowBefore.length === 0) {
                    shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                    slide.append(shadowBefore);
                  }
                  if (shadowAfter.length === 0) {
                    shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                    slide.append(shadowAfter);
                  }
                  if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                  if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }

                slide
                  .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
              }
            },
            setTransition: function(duration) {
              s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
              if (s.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                s.slides.eq(s.activeIndex).transitionEnd(function() {
                  if (eventTriggered) return;
                  if (!s) return;
                  if (!$(this).hasClass(s.params.slideActiveClass)) return;
                  eventTriggered = true;
                  s.animating = false;
                  var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                  for (var i = 0; i < triggerEvents.length; i++) {
                    s.wrapper.trigger(triggerEvents[i]);
                  }
                });
              }
            }
          },
          cube: {
            setTranslate: function() {
              var wrapperRotate = 0,
                cubeShadow;
              if (s.params.cube.shadow) {
                if (s.isHorizontal()) {
                  cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                  if (cubeShadow.length === 0) {
                    cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                    s.wrapper.append(cubeShadow);
                  }
                  cubeShadow.css({
                    height: s.width + 'px'
                  });
                } else {
                  cubeShadow = s.container.find('.swiper-cube-shadow');
                  if (cubeShadow.length === 0) {
                    cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                    s.container.append(cubeShadow);
                  }
                }
              }
              for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides.eq(i);
                var slideAngle = i * 90;
                var round = Math.floor(slideAngle / 360);
                if (s.rtl) {
                  slideAngle = -slideAngle;
                  round = Math.floor(-slideAngle / 360);
                }
                var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                var tx = 0,
                  ty = 0,
                  tz = 0;
                if (i % 4 === 0) {
                  tx = -round * 4 * s.size;
                  tz = 0;
                } else if ((i - 1) % 4 === 0) {
                  tx = 0;
                  tz = -round * 4 * s.size;
                } else if ((i - 2) % 4 === 0) {
                  tx = s.size + round * 4 * s.size;
                  tz = s.size;
                } else if ((i - 3) % 4 === 0) {
                  tx = -s.size;
                  tz = 3 * s.size + s.size * 4 * round;
                }
                if (s.rtl) {
                  tx = -tx;
                }

                if (!s.isHorizontal()) {
                  ty = tx;
                  tx = 0;
                }

                var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                if (progress <= 1 && progress > -1) {
                  wrapperRotate = i * 90 + progress * 90;
                  if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
                }
                slide.transform(transform);
                if (s.params.cube.slideShadows) {
                  //Set shadows
                  var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                  var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                  if (shadowBefore.length === 0) {
                    shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                    slide.append(shadowBefore);
                  }
                  if (shadowAfter.length === 0) {
                    shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                    slide.append(shadowAfter);
                  }
                  if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                  if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }
              }
              s.wrapper.css({
                '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
              });

              if (s.params.cube.shadow) {
                if (s.isHorizontal()) {
                  cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                } else {
                  var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                  var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                  var scale1 = s.params.cube.shadowScale,
                    scale2 = s.params.cube.shadowScale / multiplier,
                    offset = s.params.cube.shadowOffset;
                  cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                }
              }
              var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
              s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
            },
            setTransition: function(duration) {
              s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
              if (s.params.cube.shadow && !s.isHorizontal()) {
                s.container.find('.swiper-cube-shadow').transition(duration);
              }
            }
          },
          coverflow: {
            setTranslate: function() {
              var transform = s.translate;
              var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
              var rotate = s.isHorizontal() ? s.params.coverflow.rotate : -s.params.coverflow.rotate;
              var translate = s.params.coverflow.depth;
              //Each slide offset from center
              for (var i = 0, length = s.slides.length; i < length; i++) {
                var slide = s.slides.eq(i);
                var slideSize = s.slidesSizesGrid[i];
                var slideOffset = slide[0].swiperSlideOffset;
                var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;

                var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
                var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
                // var rotateZ = 0
                var translateZ = -translate * Math.abs(offsetMultiplier);

                var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
                var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;

                //Fix for ultra small values
                if (Math.abs(translateX) < 0.001) translateX = 0;
                if (Math.abs(translateY) < 0.001) translateY = 0;
                if (Math.abs(translateZ) < 0.001) translateZ = 0;
                if (Math.abs(rotateY) < 0.001) rotateY = 0;
                if (Math.abs(rotateX) < 0.001) rotateX = 0;

                var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';

                slide.transform(slideTransform);
                slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (s.params.coverflow.slideShadows) {
                  //Set shadows
                  var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                  var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                  if (shadowBefore.length === 0) {
                    shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                    slide.append(shadowBefore);
                  }
                  if (shadowAfter.length === 0) {
                    shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                    slide.append(shadowAfter);
                  }
                  if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                  if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                }
              }

              //Set correct perspective for IE10
              if (s.browser.ie) {
                var ws = s.wrapper[0].style;
                ws.perspectiveOrigin = center + 'px 50%';
              }
            },
            setTransition: function(duration) {
              s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
            }
          }
        };


        /*=========================
          Images Lazy Loading
          ===========================*/
        s.lazy = {
          initialImageLoaded: false,
          loadImageInSlide: function(index, loadInDuplicate) {
            if (typeof index === 'undefined') return;
            if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
            if (s.slides.length === 0) return;

            var slide = s.slides.eq(index);
            var img = slide.find('.' + s.params.lazyLoadingClass + ':not(.' + s.params.lazyStatusLoadedClass + '):not(.' + s.params.lazyStatusLoadingClass + ')');
            if (slide.hasClass(s.params.lazyLoadingClass) && !slide.hasClass(s.params.lazyStatusLoadedClass) && !slide.hasClass(s.params.lazyStatusLoadingClass)) {
              img = img.add(slide[0]);
            }
            if (img.length === 0) return;

            img.each(function() {
              var _img = $(this);
              _img.addClass(s.params.lazyStatusLoadingClass);
              var background = _img.attr('data-background');
              var src = _img.attr('data-src'),
                srcset = _img.attr('data-srcset'),
                sizes = _img.attr('data-sizes');
              s.loadImage(_img[0], (src || background), srcset, sizes, false, function() {
                if (typeof s === 'undefined' || s === null || !s) return;
                if (background) {
                  _img.css('background-image', 'url("' + background + '")');
                  _img.removeAttr('data-background');
                } else {
                  if (srcset) {
                    _img.attr('srcset', srcset);
                    _img.removeAttr('data-srcset');
                  }
                  if (sizes) {
                    _img.attr('sizes', sizes);
                    _img.removeAttr('data-sizes');
                  }
                  if (src) {
                    _img.attr('src', src);
                    _img.removeAttr('data-src');
                  }

                }

                _img.addClass(s.params.lazyStatusLoadedClass).removeClass(s.params.lazyStatusLoadingClass);
                slide.find('.' + s.params.lazyPreloaderClass + ', .' + s.params.preloaderClass).remove();
                if (s.params.loop && loadInDuplicate) {
                  var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                  if (slide.hasClass(s.params.slideDuplicateClass)) {
                    var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                    s.lazy.loadImageInSlide(originalSlide.index(), false);
                  } else {
                    var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                    s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                  }
                }
                s.emit('onLazyImageReady', s, slide[0], _img[0]);
              });

              s.emit('onLazyImageLoad', s, slide[0], _img[0]);
            });

          },
          load: function() {
            var i;
            var slidesPerView = s.params.slidesPerView;
            if (slidesPerView === 'auto') {
              slidesPerView = 0;
            }
            if (!s.lazy.initialImageLoaded) s.lazy.initialImageLoaded = true;
            if (s.params.watchSlidesVisibility) {
              s.wrapper.children('.' + s.params.slideVisibleClass).each(function() {
                s.lazy.loadImageInSlide($(this).index());
              });
            } else {
              if (slidesPerView > 1) {
                for (i = s.activeIndex; i < s.activeIndex + slidesPerView; i++) {
                  if (s.slides[i]) s.lazy.loadImageInSlide(i);
                }
              } else {
                s.lazy.loadImageInSlide(s.activeIndex);
              }
            }
            if (s.params.lazyLoadingInPrevNext) {
              if (slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
                var amount = s.params.lazyLoadingInPrevNextAmount;
                var spv = slidesPerView;
                var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
                var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
                // Next Slides
                for (i = s.activeIndex + slidesPerView; i < maxIndex; i++) {
                  if (s.slides[i]) s.lazy.loadImageInSlide(i);
                }
                // Prev Slides
                for (i = minIndex; i < s.activeIndex; i++) {
                  if (s.slides[i]) s.lazy.loadImageInSlide(i);
                }
              } else {
                var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());

                var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
              }
            }
          },
          onTransitionStart: function() {
            if (s.params.lazyLoading) {
              if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                s.lazy.load();
              }
            }
          },
          onTransitionEnd: function() {
            if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
              s.lazy.load();
            }
          }
        };


        /*=========================
          Scrollbar
          ===========================*/
        s.scrollbar = {
          isTouched: false,
          setDragPosition: function(e) {
            var sb = s.scrollbar;
            var x = 0,
              y = 0;
            var translate;
            var pointerPosition = s.isHorizontal() ?
              ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
              ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
            var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
            var positionMin = -s.minTranslate() * sb.moveDivider;
            var positionMax = -s.maxTranslate() * sb.moveDivider;
            if (position < positionMin) {
              position = positionMin;
            } else if (position > positionMax) {
              position = positionMax;
            }
            position = -position / sb.moveDivider;
            s.updateProgress(position);
            s.setWrapperTranslate(position, true);
          },
          dragStart: function(e) {
            var sb = s.scrollbar;
            sb.isTouched = true;
            e.preventDefault();
            e.stopPropagation();

            sb.setDragPosition(e);
            clearTimeout(sb.dragTimeout);

            sb.track.transition(0);
            if (s.params.scrollbarHide) {
              sb.track.css('opacity', 1);
            }
            s.wrapper.transition(100);
            sb.drag.transition(100);
            s.emit('onScrollbarDragStart', s);
          },
          dragMove: function(e) {
            var sb = s.scrollbar;
            if (!sb.isTouched) return;
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            sb.setDragPosition(e);
            s.wrapper.transition(0);
            sb.track.transition(0);
            sb.drag.transition(0);
            s.emit('onScrollbarDragMove', s);
          },
          dragEnd: function(e) {
            var sb = s.scrollbar;
            if (!sb.isTouched) return;
            sb.isTouched = false;
            if (s.params.scrollbarHide) {
              clearTimeout(sb.dragTimeout);
              sb.dragTimeout = setTimeout(function() {
                sb.track.css('opacity', 0);
                sb.track.transition(400);
              }, 1000);

            }
            s.emit('onScrollbarDragEnd', s);
            if (s.params.scrollbarSnapOnRelease) {
              s.slideReset();
            }
          },
          draggableEvents: (function() {
            if ((s.params.simulateTouch === false && !s.support.touch)) return s.touchEventsDesktop;
            else return s.touchEvents;
          })(),
          enableDraggable: function() {
            var sb = s.scrollbar;
            var target = s.support.touch ? sb.track : document;
            $(sb.track).on(sb.draggableEvents.start, sb.dragStart);
            $(target).on(sb.draggableEvents.move, sb.dragMove);
            $(target).on(sb.draggableEvents.end, sb.dragEnd);
          },
          disableDraggable: function() {
            var sb = s.scrollbar;
            var target = s.support.touch ? sb.track : document;
            $(sb.track).off(sb.draggableEvents.start, sb.dragStart);
            $(target).off(sb.draggableEvents.move, sb.dragMove);
            $(target).off(sb.draggableEvents.end, sb.dragEnd);
          },
          set: function() {
            if (!s.params.scrollbar) return;
            var sb = s.scrollbar;
            sb.track = $(s.params.scrollbar);
            if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
              sb.track = s.container.find(s.params.scrollbar);
            }
            sb.drag = sb.track.find('.swiper-scrollbar-drag');
            if (sb.drag.length === 0) {
              sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
              sb.track.append(sb.drag);
            }
            sb.drag[0].style.width = '';
            sb.drag[0].style.height = '';
            sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;

            sb.divider = s.size / s.virtualSize;
            sb.moveDivider = sb.divider * (sb.trackSize / s.size);
            sb.dragSize = sb.trackSize * sb.divider;

            if (s.isHorizontal()) {
              sb.drag[0].style.width = sb.dragSize + 'px';
            } else {
              sb.drag[0].style.height = sb.dragSize + 'px';
            }

            if (sb.divider >= 1) {
              sb.track[0].style.display = 'none';
            } else {
              sb.track[0].style.display = '';
            }
            if (s.params.scrollbarHide) {
              sb.track[0].style.opacity = 0;
            }
          },
          setTranslate: function() {
            if (!s.params.scrollbar) return;
            var diff;
            var sb = s.scrollbar;
            var translate = s.translate || 0;
            var newPos;

            var newSize = sb.dragSize;
            newPos = (sb.trackSize - sb.dragSize) * s.progress;
            if (s.rtl && s.isHorizontal()) {
              newPos = -newPos;
              if (newPos > 0) {
                newSize = sb.dragSize - newPos;
                newPos = 0;
              } else if (-newPos + sb.dragSize > sb.trackSize) {
                newSize = sb.trackSize + newPos;
              }
            } else {
              if (newPos < 0) {
                newSize = sb.dragSize + newPos;
                newPos = 0;
              } else if (newPos + sb.dragSize > sb.trackSize) {
                newSize = sb.trackSize - newPos;
              }
            }
            if (s.isHorizontal()) {
              if (s.support.transforms3d) {
                sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
              } else {
                sb.drag.transform('translateX(' + (newPos) + 'px)');
              }
              sb.drag[0].style.width = newSize + 'px';
            } else {
              if (s.support.transforms3d) {
                sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
              } else {
                sb.drag.transform('translateY(' + (newPos) + 'px)');
              }
              sb.drag[0].style.height = newSize + 'px';
            }
            if (s.params.scrollbarHide) {
              clearTimeout(sb.timeout);
              sb.track[0].style.opacity = 1;
              sb.timeout = setTimeout(function() {
                sb.track[0].style.opacity = 0;
                sb.track.transition(400);
              }, 1000);
            }
          },
          setTransition: function(duration) {
            if (!s.params.scrollbar) return;
            s.scrollbar.drag.transition(duration);
          }
        };


        /*=========================
          Controller
          ===========================*/
        s.controller = {
          LinearSpline: function(x, y) {
            var binarySearch = (function() {
              var maxIndex, minIndex, guess;
              return function(array, val) {
                minIndex = -1;
                maxIndex = array.length;
                while (maxIndex - minIndex > 1)
                  if (array[guess = maxIndex + minIndex >> 1] <= val) {
                    minIndex = guess;
                  } else {
                    maxIndex = guess;
                  }
                return maxIndex;
              };
            })();
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1;
            // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.
            var i1, i3;
            var l = this.x.length;

            this.interpolate = function(x2) {
              if (!x2) return 0;

              // Get the indexes of x1 and x3 (the array indexes before and after given x2):
              i3 = binarySearch(this.x, x2);
              i1 = i3 - 1;

              // We have our indexes i1 & i3, so we can calculate already:
              // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
              return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
            };
          },
          //xxx: for now i will just save one spline function to to
          getInterpolateFunction: function(c) {
            if (!s.controller.spline) s.controller.spline = s.params.loop ?
              new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
              new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
          },
          setTranslate: function(translate, byController) {
            var controlled = s.params.control;
            var multiplier, controlledTranslate;

            function setControlledTranslate(c) {
              // this will create an Interpolate function based on the snapGrids
              // x is the Grid of the scrolled scroller and y will be the controlled scroller
              // it makes sense to create this only once and recall it for the interpolation
              // the function does a lot of value caching for performance
              translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
              if (s.params.controlBy === 'slide') {
                s.controller.getInterpolateFunction(c);
                // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -s.controller.spline.interpolate(-translate);
              }

              if (!controlledTranslate || s.params.controlBy === 'container') {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
              }

              if (s.params.controlInverse) {
                controlledTranslate = c.maxTranslate() - controlledTranslate;
              }
              c.updateProgress(controlledTranslate);
              c.setWrapperTranslate(controlledTranslate, false, s);
              c.updateActiveIndex();
            }
            if (Array.isArray(controlled)) {
              for (var i = 0; i < controlled.length; i++) {
                if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                  setControlledTranslate(controlled[i]);
                }
              }
            } else if (controlled instanceof Swiper && byController !== controlled) {

              setControlledTranslate(controlled);
            }
          },
          setTransition: function(duration, byController) {
            var controlled = s.params.control;
            var i;

            function setControlledTransition(c) {
              c.setWrapperTransition(duration, s);
              if (duration !== 0) {
                c.onTransitionStart();
                c.wrapper.transitionEnd(function() {
                  if (!controlled) return;
                  if (c.params.loop && s.params.controlBy === 'slide') {
                    c.fixLoop();
                  }
                  c.onTransitionEnd();

                });
              }
            }
            if (Array.isArray(controlled)) {
              for (i = 0; i < controlled.length; i++) {
                if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                  setControlledTransition(controlled[i]);
                }
              }
            } else if (controlled instanceof Swiper && byController !== controlled) {
              setControlledTransition(controlled);
            }
          }
        };


        /*=========================
          Hash Navigation
          ===========================*/
        s.hashnav = {
          onHashCange: function(e, a) {
            var newHash = document.location.hash.replace('#', '');
            var activeSlideHash = s.slides.eq(s.activeIndex).attr('data-hash');
            if (newHash !== activeSlideHash) {
              s.slideTo(s.wrapper.children('.' + s.params.slideClass + '[data-hash="' + (newHash) + '"]').index());
            }
          },
          attachEvents: function(detach) {
            var action = detach ? 'off' : 'on';
            $(window)[action]('hashchange', s.hashnav.onHashCange);
          },
          setHash: function() {
            if (!s.hashnav.initialized || !s.params.hashnav) return;
            if (s.params.replaceState && window.history && window.history.replaceState) {
              window.history.replaceState(null, null, ('#' + s.slides.eq(s.activeIndex).attr('data-hash') || ''));
            } else {
              var slide = s.slides.eq(s.activeIndex);
              var hash = slide.attr('data-hash') || slide.attr('data-history');
              document.location.hash = hash || '';
            }
          },
          init: function() {
            if (!s.params.hashnav || s.params.history) return;
            s.hashnav.initialized = true;
            var hash = document.location.hash.replace('#', '');
            if (hash) {
              var speed = 0;
              for (var i = 0, length = s.slides.length; i < length; i++) {
                var slide = s.slides.eq(i);
                var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                  var index = slide.index();
                  s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                }
              }
            }
            if (s.params.hashnavWatchState) s.hashnav.attachEvents();
          },
          destroy: function() {
            if (s.params.hashnavWatchState) s.hashnav.attachEvents(true);
          }
        };


        /*=========================
          History Api with fallback to Hashnav
          ===========================*/
        s.history = {
          init: function() {
            if (!s.params.history) return;
            if (!window.history || !window.history.pushState) {
              s.params.history = false;
              s.params.hashnav = true;
              return;
            }
            s.history.initialized = true;
            this.paths = this.getPathValues();
            if (!this.paths.key && !this.paths.value) return;
            this.scrollToSlide(0, this.paths.value, s.params.runCallbacksOnInit);
            if (!s.params.replaceState) {
              window.addEventListener('popstate', this.setHistoryPopState);
            }
          },
          setHistoryPopState: function() {
            s.history.paths = s.history.getPathValues();
            s.history.scrollToSlide(s.params.speed, s.history.paths.value, false);
          },
          getPathValues: function() {
            var pathArray = window.location.pathname.slice(1).split('/');
            var total = pathArray.length;
            var key = pathArray[total - 2];
            var value = pathArray[total - 1];
            return {
              key: key,
              value: value
            };
          },
          setHistory: function(key, index) {
            if (!s.history.initialized || !s.params.history) return;
            var slide = s.slides.eq(index);
            var value = this.slugify(slide.attr('data-history'));
            if (!window.location.pathname.includes(key)) {
              value = key + '/' + value;
            }
            if (s.params.replaceState) {
              window.history.replaceState(null, null, value);
            } else {
              window.history.pushState(null, null, value);
            }
          },
          slugify: function(text) {
            return text.toString().toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^\w\-]+/g, '')
              .replace(/\-\-+/g, '-')
              .replace(/^-+/, '')
              .replace(/-+$/, '');
          },
          scrollToSlide: function(speed, value, runCallbacks) {
            if (value) {
              for (var i = 0, length = s.slides.length; i < length; i++) {
                var slide = s.slides.eq(i);
                var slideHistory = this.slugify(slide.attr('data-history'));
                if (slideHistory === value && !slide.hasClass(s.params.slideDuplicateClass)) {
                  var index = slide.index();
                  s.slideTo(index, speed, runCallbacks);
                }
              }
            } else {
              s.slideTo(0, speed, runCallbacks);
            }
          }
        };


        /*=========================
          Keyboard Control
          ===========================*/
        function handleKeyboard(e) {
          if (e.originalEvent) e = e.originalEvent; //jquery fix
          var kc = e.keyCode || e.charCode;
          // Directions locks
          if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
            return false;
          }
          if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
            return false;
          }
          if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
            return;
          }
          if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
            return;
          }
          if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
            var inView = false;
            //Check that swiper should be inside of visible area of window
            if (s.container.parents('.' + s.params.slideClass).length > 0 && s.container.parents('.' + s.params.slideActiveClass).length === 0) {
              return;
            }
            var windowScroll = {
              left: window.pageXOffset,
              top: window.pageYOffset
            };
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var swiperOffset = s.container.offset();
            if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
            var swiperCoord = [
              [swiperOffset.left, swiperOffset.top],
              [swiperOffset.left + s.width, swiperOffset.top],
              [swiperOffset.left, swiperOffset.top + s.height],
              [swiperOffset.left + s.width, swiperOffset.top + s.height]
            ];
            for (var i = 0; i < swiperCoord.length; i++) {
              var point = swiperCoord[i];
              if (
                point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
                point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
              ) {
                inView = true;
              }

            }
            if (!inView) return;
          }
          if (s.isHorizontal()) {
            if (kc === 37 || kc === 39) {
              if (e.preventDefault) e.preventDefault();
              else e.returnValue = false;
            }
            if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
            if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
          } else {
            if (kc === 38 || kc === 40) {
              if (e.preventDefault) e.preventDefault();
              else e.returnValue = false;
            }
            if (kc === 40) s.slideNext();
            if (kc === 38) s.slidePrev();
          }
          s.emit('onKeyPress', s, kc);
        }
        s.disableKeyboardControl = function() {
          s.params.keyboardControl = false;
          $(document).off('keydown', handleKeyboard);
        };
        s.enableKeyboardControl = function() {
          s.params.keyboardControl = true;
          $(document).on('keydown', handleKeyboard);
        };


        /*=========================
          Mousewheel Control
          ===========================*/
        s.mousewheel = {
          event: false,
          lastScrollTime: (new window.Date()).getTime()
        };

        function isEventSupported() {
          var eventName = 'onwheel';
          var isSupported = eventName in document;

          if (!isSupported) {
            var element = document.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
          }

          if (!isSupported &&
            document.implementation &&
            document.implementation.hasFeature &&
            // always returns true in newer browsers as per the standard.
            // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
            document.implementation.hasFeature('', '') !== true) {
            // This is the only way to test support for the `wheel` event in IE9+.
            isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
          }

          return isSupported;
        }
        /**
         * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
         * complicated, thus this doc is long and (hopefully) detailed enough to answer
         * your questions.
         *
         * If you need to react to the mouse wheel in a predictable way, this code is
         * like your bestest friend. * hugs *
         *
         * As of today, there are 4 DOM event types you can listen to:
         *
         *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
         *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
         *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
         *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
         *
         * So what to do?  The is the best:
         *
         *   normalizeWheel.getEventType();
         *
         * In your event callback, use this code to get sane interpretation of the
         * deltas.  This code will return an object with properties:
         *
         *   spinX   -- normalized spin speed (use for zoom) - x plane
         *   spinY   -- " - y plane
         *   pixelX  -- normalized distance (to pixels) - x plane
         *   pixelY  -- " - y plane
         *
         * Wheel values are provided by the browser assuming you are using the wheel to
         * scroll a web page by a number of lines or pixels (or pages).  Values can vary
         * significantly on different platforms and browsers, forgetting that you can
         * scroll at different speeds.  Some devices (like trackpads) emit more events
         * at smaller increments with fine granularity, and some emit massive jumps with
         * linear speed or acceleration.
         *
         * This code does its best to normalize the deltas for you:
         *
         *   - spin is trying to normalize how far the wheel was spun (or trackpad
         *     dragged).  This is super useful for zoom support where you want to
         *     throw away the chunky scroll steps on the PC and make those equal to
         *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
         *     resolve a single slow step on a wheel to 1.
         *
         *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
         *     get the crazy differences between browsers, but at least it'll be in
         *     pixels!
         *
         *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
         *     should translate to positive value zooming IN, negative zooming OUT.
         *     This matches the newer 'wheel' event.
         *
         * Why are there spinX, spinY (or pixels)?
         *
         *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
         *     with a mouse.  It results in side-scrolling in the browser by default.
         *
         *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
         *
         *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
         *     probably is by browsers in conjunction with fancy 3D controllers .. but
         *     you know.
         *
         * Implementation info:
         *
         * Examples of 'wheel' event if you scroll slowly (down) by one step with an
         * average mouse:
         *
         *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
         *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
         *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
         *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
         *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
         *
         * On the trackpad:
         *
         *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
         *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
         *
         * On other/older browsers.. it's more complicated as there can be multiple and
         * also missing delta values.
         *
         * The 'wheel' event is more standard:
         *
         * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
         *
         * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
         * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
         * backward compatibility with older events.  Those other values help us
         * better normalize spin speed.  Example of what the browsers provide:
         *
         *                          | event.wheelDelta | event.detail
         *        ------------------+------------------+--------------
         *          Safari v5/OS X  |       -120       |       0
         *          Safari v5/Win7  |       -120       |       0
         *         Chrome v17/OS X  |       -120       |       0
         *         Chrome v17/Win7  |       -120       |       0
         *                IE9/Win7  |       -120       |   undefined
         *         Firefox v4/OS X  |     undefined    |       1
         *         Firefox v4/Win7  |     undefined    |       3
         *
         */
        function normalizeWheel( /*object*/ event) /*object*/ {
          // Reasonable defaults
          var PIXEL_STEP = 10;
          var LINE_HEIGHT = 40;
          var PAGE_HEIGHT = 800;

          var sX = 0,
            sY = 0, // spinX, spinY
            pX = 0,
            pY = 0; // pixelX, pixelY

          // Legacy
          if ('detail' in event) {
            sY = event.detail;
          }
          if ('wheelDelta' in event) {
            sY = -event.wheelDelta / 120;
          }
          if ('wheelDeltaY' in event) {
            sY = -event.wheelDeltaY / 120;
          }
          if ('wheelDeltaX' in event) {
            sX = -event.wheelDeltaX / 120;
          }

          // side scrolling on FF with DOMMouseScroll
          if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
          }

          pX = sX * PIXEL_STEP;
          pY = sY * PIXEL_STEP;

          if ('deltaY' in event) {
            pY = event.deltaY;
          }
          if ('deltaX' in event) {
            pX = event.deltaX;
          }

          if ((pX || pY) && event.deltaMode) {
            if (event.deltaMode === 1) { // delta in LINE units
              pX *= LINE_HEIGHT;
              pY *= LINE_HEIGHT;
            } else { // delta in PAGE units
              pX *= PAGE_HEIGHT;
              pY *= PAGE_HEIGHT;
            }
          }

          // Fall-back if spin cannot be determined
          if (pX && !sX) {
            sX = (pX < 1) ? -1 : 1;
          }
          if (pY && !sY) {
            sY = (pY < 1) ? -1 : 1;
          }

          return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
          };
        }
        if (s.params.mousewheelControl) {
          /**
           * The best combination if you prefer spinX + spinY normalization.  It favors
           * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
           * 'wheel' event, making spin speed determination impossible.
           */
          s.mousewheel.event = (navigator.userAgent.indexOf('firefox') > -1) ?
            'DOMMouseScroll' :
            isEventSupported() ?
            'wheel' : 'mousewheel';
        }

        function handleMousewheel(e) {
          if (e.originalEvent) e = e.originalEvent; //jquery fix
          var delta = 0;
          var rtlFactor = s.rtl ? -1 : 1;

          var data = normalizeWheel(e);

          if (s.params.mousewheelForceToAxis) {
            if (s.isHorizontal()) {
              if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
              else return;
            } else {
              if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
              else return;
            }
          } else {
            delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
          }

          if (delta === 0) return;

          if (s.params.mousewheelInvert) delta = -delta;

          if (!s.params.freeMode) {
            if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
              if (delta < 0) {
                if ((!s.isEnd || s.params.loop) && !s.animating) {
                  s.slideNext();
                  s.emit('onScroll', s, e);
                } else if (s.params.mousewheelReleaseOnEdges) return true;
              } else {
                if ((!s.isBeginning || s.params.loop) && !s.animating) {
                  s.slidePrev();
                  s.emit('onScroll', s, e);
                } else if (s.params.mousewheelReleaseOnEdges) return true;
              }
            }
            s.mousewheel.lastScrollTime = (new window.Date()).getTime();

          } else {
            //Freemode or scrollContainer:
            var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
            var wasBeginning = s.isBeginning,
              wasEnd = s.isEnd;

            if (position >= s.minTranslate()) position = s.minTranslate();
            if (position <= s.maxTranslate()) position = s.maxTranslate();

            s.setWrapperTransition(0);
            s.setWrapperTranslate(position);
            s.updateProgress();
            s.updateActiveIndex();

            if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
              s.updateClasses();
            }

            if (s.params.freeModeSticky) {
              clearTimeout(s.mousewheel.timeout);
              s.mousewheel.timeout = setTimeout(function() {
                s.slideReset();
              }, 300);
            } else {
              if (s.params.lazyLoading && s.lazy) {
                s.lazy.load();
              }
            }
            // Emit event
            s.emit('onScroll', s, e);

            // Stop autoplay
            if (s.params.autoplay && s.params.autoplayDisableOnInteraction) s.stopAutoplay();

            // Return page scroll on edge positions
            if (position === 0 || position === s.maxTranslate()) return;
          }

          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
          return false;
        }
        s.disableMousewheelControl = function() {
          if (!s.mousewheel.event) return false;
          var target = s.container;
          if (s.params.mousewheelEventsTarged !== 'container') {
            target = $(s.params.mousewheelEventsTarged);
          }
          target.off(s.mousewheel.event, handleMousewheel);
          s.params.mousewheelControl = false;
          return true;
        };

        s.enableMousewheelControl = function() {
          if (!s.mousewheel.event) return false;
          var target = s.container;
          if (s.params.mousewheelEventsTarged !== 'container') {
            target = $(s.params.mousewheelEventsTarged);
          }
          target.on(s.mousewheel.event, handleMousewheel);
          s.params.mousewheelControl = true;
          return true;
        };


        /*=========================
          Parallax
          ===========================*/
        function setParallaxTransform(el, progress) {
          el = $(el);
          var p, pX, pY;
          var rtlFactor = s.rtl ? -1 : 1;

          p = el.attr('data-swiper-parallax') || '0';
          pX = el.attr('data-swiper-parallax-x');
          pY = el.attr('data-swiper-parallax-y');
          if (pX || pY) {
            pX = pX || '0';
            pY = pY || '0';
          } else {
            if (s.isHorizontal()) {
              pX = p;
              pY = '0';
            } else {
              pY = p;
              pX = '0';
            }
          }

          if ((pX).indexOf('%') >= 0) {
            pX = parseInt(pX, 10) * progress * rtlFactor + '%';
          } else {
            pX = pX * progress * rtlFactor + 'px';
          }
          if ((pY).indexOf('%') >= 0) {
            pY = parseInt(pY, 10) * progress + '%';
          } else {
            pY = pY * progress + 'px';
          }

          el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
        }
        s.parallax = {
          setTranslate: function() {
            s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function() {
              setParallaxTransform(this, s.progress);

            });
            s.slides.each(function() {
              var slide = $(this);
              slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function() {
                var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                setParallaxTransform(this, progress);
              });
            });
          },
          setTransition: function(duration) {
            if (typeof duration === 'undefined') duration = s.params.speed;
            s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function() {
              var el = $(this);
              var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
              if (duration === 0) parallaxDuration = 0;
              el.transition(parallaxDuration);
            });
          }
        };


        /*=========================
          Zoom
          ===========================*/
        s.zoom = {
          // "Global" Props
          scale: 1,
          currentScale: 1,
          isScaling: false,
          gesture: {
            slide: undefined,
            slideWidth: undefined,
            slideHeight: undefined,
            image: undefined,
            imageWrap: undefined,
            zoomMax: s.params.zoomMax
          },
          image: {
            isTouched: undefined,
            isMoved: undefined,
            currentX: undefined,
            currentY: undefined,
            minX: undefined,
            minY: undefined,
            maxX: undefined,
            maxY: undefined,
            width: undefined,
            height: undefined,
            startX: undefined,
            startY: undefined,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: undefined,
            y: undefined,
            prevPositionX: undefined,
            prevPositionY: undefined,
            prevTime: undefined
          },
          // Calc Scale From Multi-touches
          getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2) return 1;
            var x1 = e.targetTouches[0].pageX,
              y1 = e.targetTouches[0].pageY,
              x2 = e.targetTouches[1].pageX,
              y2 = e.targetTouches[1].pageY;
            var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            return distance;
          },
          // Events
          onGestureStart: function(e) {
            var z = s.zoom;
            if (!s.support.gestures) {
              if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                return;
              }
              z.gesture.scaleStart = z.getDistanceBetweenTouches(e);
            }
            if (!z.gesture.slide || !z.gesture.slide.length) {
              z.gesture.slide = $(this);
              if (z.gesture.slide.length === 0) z.gesture.slide = s.slides.eq(s.activeIndex);
              z.gesture.image = z.gesture.slide.find('img, svg, canvas');
              z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
              z.gesture.zoomMax = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
              if (z.gesture.imageWrap.length === 0) {
                z.gesture.image = undefined;
                return;
              }
            }
            z.gesture.image.transition(0);
            z.isScaling = true;
          },
          onGestureChange: function(e) {
            var z = s.zoom;
            if (!s.support.gestures) {
              if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                return;
              }
              z.gesture.scaleMove = z.getDistanceBetweenTouches(e);
            }
            if (!z.gesture.image || z.gesture.image.length === 0) return;
            if (s.support.gestures) {
              z.scale = e.scale * z.currentScale;
            } else {
              z.scale = (z.gesture.scaleMove / z.gesture.scaleStart) * z.currentScale;
            }
            if (z.scale > z.gesture.zoomMax) {
              z.scale = z.gesture.zoomMax - 1 + Math.pow((z.scale - z.gesture.zoomMax + 1), 0.5);
            }
            if (z.scale < s.params.zoomMin) {
              z.scale = s.params.zoomMin + 1 - Math.pow((s.params.zoomMin - z.scale + 1), 0.5);
            }
            z.gesture.image.transform('translate3d(0,0,0) scale(' + z.scale + ')');
          },
          onGestureEnd: function(e) {
            var z = s.zoom;
            if (!s.support.gestures) {
              if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2) {
                return;
              }
            }
            if (!z.gesture.image || z.gesture.image.length === 0) return;
            z.scale = Math.max(Math.min(z.scale, z.gesture.zoomMax), s.params.zoomMin);
            z.gesture.image.transition(s.params.speed).transform('translate3d(0,0,0) scale(' + z.scale + ')');
            z.currentScale = z.scale;
            z.isScaling = false;
            if (z.scale === 1) z.gesture.slide = undefined;
          },
          onTouchStart: function(s, e) {
            var z = s.zoom;
            if (!z.gesture.image || z.gesture.image.length === 0) return;
            if (z.image.isTouched) return;
            if (s.device.os === 'android') e.preventDefault();
            z.image.isTouched = true;
            z.image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            z.image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
          },
          onTouchMove: function(e) {
            var z = s.zoom;
            if (!z.gesture.image || z.gesture.image.length === 0) return;
            s.allowClick = false;
            if (!z.image.isTouched || !z.gesture.slide) return;

            if (!z.image.isMoved) {
              z.image.width = z.gesture.image[0].offsetWidth;
              z.image.height = z.gesture.image[0].offsetHeight;
              z.image.startX = s.getTranslate(z.gesture.imageWrap[0], 'x') || 0;
              z.image.startY = s.getTranslate(z.gesture.imageWrap[0], 'y') || 0;
              z.gesture.slideWidth = z.gesture.slide[0].offsetWidth;
              z.gesture.slideHeight = z.gesture.slide[0].offsetHeight;
              z.gesture.imageWrap.transition(0);
              if (s.rtl) z.image.startX = -z.image.startX;
              if (s.rtl) z.image.startY = -z.image.startY;
            }
            // Define if we need image drag
            var scaledWidth = z.image.width * z.scale;
            var scaledHeight = z.image.height * z.scale;

            if (scaledWidth < z.gesture.slideWidth && scaledHeight < z.gesture.slideHeight) return;

            z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
            z.image.maxX = -z.image.minX;
            z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
            z.image.maxY = -z.image.minY;

            z.image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            z.image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

            if (!z.image.isMoved && !z.isScaling) {
              if (s.isHorizontal() &&
                (Math.floor(z.image.minX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x < z.image.touchesStart.x) ||
                (Math.floor(z.image.maxX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x > z.image.touchesStart.x)
              ) {
                z.image.isTouched = false;
                return;
              } else if (!s.isHorizontal() &&
                (Math.floor(z.image.minY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y < z.image.touchesStart.y) ||
                (Math.floor(z.image.maxY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y > z.image.touchesStart.y)
              ) {
                z.image.isTouched = false;
                return;
              }
            }
            e.preventDefault();
            e.stopPropagation();

            z.image.isMoved = true;
            z.image.currentX = z.image.touchesCurrent.x - z.image.touchesStart.x + z.image.startX;
            z.image.currentY = z.image.touchesCurrent.y - z.image.touchesStart.y + z.image.startY;

            if (z.image.currentX < z.image.minX) {
              z.image.currentX = z.image.minX + 1 - Math.pow((z.image.minX - z.image.currentX + 1), 0.8);
            }
            if (z.image.currentX > z.image.maxX) {
              z.image.currentX = z.image.maxX - 1 + Math.pow((z.image.currentX - z.image.maxX + 1), 0.8);
            }

            if (z.image.currentY < z.image.minY) {
              z.image.currentY = z.image.minY + 1 - Math.pow((z.image.minY - z.image.currentY + 1), 0.8);
            }
            if (z.image.currentY > z.image.maxY) {
              z.image.currentY = z.image.maxY - 1 + Math.pow((z.image.currentY - z.image.maxY + 1), 0.8);
            }

            //Velocity
            if (!z.velocity.prevPositionX) z.velocity.prevPositionX = z.image.touchesCurrent.x;
            if (!z.velocity.prevPositionY) z.velocity.prevPositionY = z.image.touchesCurrent.y;
            if (!z.velocity.prevTime) z.velocity.prevTime = Date.now();
            z.velocity.x = (z.image.touchesCurrent.x - z.velocity.prevPositionX) / (Date.now() - z.velocity.prevTime) / 2;
            z.velocity.y = (z.image.touchesCurrent.y - z.velocity.prevPositionY) / (Date.now() - z.velocity.prevTime) / 2;
            if (Math.abs(z.image.touchesCurrent.x - z.velocity.prevPositionX) < 2) z.velocity.x = 0;
            if (Math.abs(z.image.touchesCurrent.y - z.velocity.prevPositionY) < 2) z.velocity.y = 0;
            z.velocity.prevPositionX = z.image.touchesCurrent.x;
            z.velocity.prevPositionY = z.image.touchesCurrent.y;
            z.velocity.prevTime = Date.now();

            z.gesture.imageWrap.transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
          },
          onTouchEnd: function(s, e) {
            var z = s.zoom;
            if (!z.gesture.image || z.gesture.image.length === 0) return;
            if (!z.image.isTouched || !z.image.isMoved) {
              z.image.isTouched = false;
              z.image.isMoved = false;
              return;
            }
            z.image.isTouched = false;
            z.image.isMoved = false;
            var momentumDurationX = 300;
            var momentumDurationY = 300;
            var momentumDistanceX = z.velocity.x * momentumDurationX;
            var newPositionX = z.image.currentX + momentumDistanceX;
            var momentumDistanceY = z.velocity.y * momentumDurationY;
            var newPositionY = z.image.currentY + momentumDistanceY;

            //Fix duration
            if (z.velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - z.image.currentX) / z.velocity.x);
            if (z.velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - z.image.currentY) / z.velocity.y);
            var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

            z.image.currentX = newPositionX;
            z.image.currentY = newPositionY;

            // Define if we need image drag
            var scaledWidth = z.image.width * z.scale;
            var scaledHeight = z.image.height * z.scale;
            z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
            z.image.maxX = -z.image.minX;
            z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
            z.image.maxY = -z.image.minY;
            z.image.currentX = Math.max(Math.min(z.image.currentX, z.image.maxX), z.image.minX);
            z.image.currentY = Math.max(Math.min(z.image.currentY, z.image.maxY), z.image.minY);

            z.gesture.imageWrap.transition(momentumDuration).transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
          },
          onTransitionEnd: function(s) {
            var z = s.zoom;
            if (z.gesture.slide && s.previousIndex !== s.activeIndex) {
              z.gesture.image.transform('translate3d(0,0,0) scale(1)');
              z.gesture.imageWrap.transform('translate3d(0,0,0)');
              z.gesture.slide = z.gesture.image = z.gesture.imageWrap = undefined;
              z.scale = z.currentScale = 1;
            }
          },
          // Toggle Zoom
          toggleZoom: function(s, e) {
            var z = s.zoom;
            if (!z.gesture.slide) {
              z.gesture.slide = s.clickedSlide ? $(s.clickedSlide) : s.slides.eq(s.activeIndex);
              z.gesture.image = z.gesture.slide.find('img, svg, canvas');
              z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
            }
            if (!z.gesture.image || z.gesture.image.length === 0) return;

            var touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;

            if (typeof z.image.touchesStart.x === 'undefined' && e) {
              touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
              touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
            } else {
              touchX = z.image.touchesStart.x;
              touchY = z.image.touchesStart.y;
            }

            if (z.scale && z.scale !== 1) {
              // Zoom Out
              z.scale = z.currentScale = 1;
              z.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)');
              z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)');
              z.gesture.slide = undefined;
            } else {
              // Zoom In
              z.scale = z.currentScale = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
              if (e) {
                slideWidth = z.gesture.slide[0].offsetWidth;
                slideHeight = z.gesture.slide[0].offsetHeight;
                offsetX = z.gesture.slide.offset().left;
                offsetY = z.gesture.slide.offset().top;
                diffX = offsetX + slideWidth / 2 - touchX;
                diffY = offsetY + slideHeight / 2 - touchY;

                imageWidth = z.gesture.image[0].offsetWidth;
                imageHeight = z.gesture.image[0].offsetHeight;
                scaledWidth = imageWidth * z.scale;
                scaledHeight = imageHeight * z.scale;

                translateMinX = Math.min((slideWidth / 2 - scaledWidth / 2), 0);
                translateMinY = Math.min((slideHeight / 2 - scaledHeight / 2), 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;

                translateX = diffX * z.scale;
                translateY = diffY * z.scale;

                if (translateX < translateMinX) {
                  translateX = translateMinX;
                }
                if (translateX > translateMaxX) {
                  translateX = translateMaxX;
                }

                if (translateY < translateMinY) {
                  translateY = translateMinY;
                }
                if (translateY > translateMaxY) {
                  translateY = translateMaxY;
                }
              } else {
                translateX = 0;
                translateY = 0;
              }
              z.gesture.imageWrap.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
              z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(' + z.scale + ')');
            }
          },
          // Attach/Detach Events
          attachEvents: function(detach) {
            var action = detach ? 'off' : 'on';

            if (s.params.zoom) {
              var target = s.slides;
              var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {
                passive: true,
                capture: false
              } : false;
              // Scale image
              if (s.support.gestures) {
                s.slides[action]('gesturestart', s.zoom.onGestureStart, passiveListener);
                s.slides[action]('gesturechange', s.zoom.onGestureChange, passiveListener);
                s.slides[action]('gestureend', s.zoom.onGestureEnd, passiveListener);
              } else if (s.touchEvents.start === 'touchstart') {
                s.slides[action](s.touchEvents.start, s.zoom.onGestureStart, passiveListener);
                s.slides[action](s.touchEvents.move, s.zoom.onGestureChange, passiveListener);
                s.slides[action](s.touchEvents.end, s.zoom.onGestureEnd, passiveListener);
              }

              // Move image
              s[action]('touchStart', s.zoom.onTouchStart);
              s.slides.each(function(index, slide) {
                if ($(slide).find('.' + s.params.zoomContainerClass).length > 0) {
                  $(slide)[action](s.touchEvents.move, s.zoom.onTouchMove);
                }
              });
              s[action]('touchEnd', s.zoom.onTouchEnd);

              // Scale Out
              s[action]('transitionEnd', s.zoom.onTransitionEnd);
              if (s.params.zoomToggle) {
                s.on('doubleTap', s.zoom.toggleZoom);
              }
            }
          },
          init: function() {
            s.zoom.attachEvents();
          },
          destroy: function() {
            s.zoom.attachEvents(true);
          }
        };


        /*=========================
          Plugins API. Collect all and init all plugins
          ===========================*/
        s._plugins = [];
        for (var plugin in s.plugins) {
          var p = s.plugins[plugin](s, s.params[plugin]);
          if (p) s._plugins.push(p);
        }
        // Method to call all plugins event/method
        s.callPlugins = function(eventName) {
          for (var i = 0; i < s._plugins.length; i++) {
            if (eventName in s._plugins[i]) {
              s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
          }
        };


        /*=========================
          Events/Callbacks/Plugins Emitter
          ===========================*/
        function normalizeEventName(eventName) {
          if (eventName.indexOf('on') !== 0) {
            if (eventName[0] !== eventName[0].toUpperCase()) {
              eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
            } else {
              eventName = 'on' + eventName;
            }
          }
          return eventName;
        }
        s.emitterEventListeners = {

        };
        s.emit = function(eventName) {
          // Trigger callbacks
          if (s.params[eventName]) {
            s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
          }
          var i;
          // Trigger events
          if (s.emitterEventListeners[eventName]) {
            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
              s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
          }
          // Trigger plugins
          if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        };
        s.on = function(eventName, handler) {
          eventName = normalizeEventName(eventName);
          if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
          s.emitterEventListeners[eventName].push(handler);
          return s;
        };
        s.off = function(eventName, handler) {
          var i;
          eventName = normalizeEventName(eventName);
          if (typeof handler === 'undefined') {
            // Remove all handlers for such event
            s.emitterEventListeners[eventName] = [];
            return s;
          }
          if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
          for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
            if (s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
          }
          return s;
        };
        s.once = function(eventName, handler) {
          eventName = normalizeEventName(eventName);
          var _handler = function() {
            handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
            s.off(eventName, _handler);
          };
          s.on(eventName, _handler);
          return s;
        };


        // Accessibility tools
        s.a11y = {
          makeFocusable: function($el) {
            $el.attr('tabIndex', '0');
            return $el;
          },
          addRole: function($el, role) {
            $el.attr('role', role);
            return $el;
          },

          addLabel: function($el, label) {
            $el.attr('aria-label', label);
            return $el;
          },

          disable: function($el) {
            $el.attr('aria-disabled', true);
            return $el;
          },

          enable: function($el) {
            $el.attr('aria-disabled', false);
            return $el;
          },

          onEnterKey: function(event) {
            if (event.keyCode !== 13) return;
            if ($(event.target).is(s.params.nextButton)) {
              s.onClickNext(event);
              if (s.isEnd) {
                s.a11y.notify(s.params.lastSlideMessage);
              } else {
                s.a11y.notify(s.params.nextSlideMessage);
              }
            } else if ($(event.target).is(s.params.prevButton)) {
              s.onClickPrev(event);
              if (s.isBeginning) {
                s.a11y.notify(s.params.firstSlideMessage);
              } else {
                s.a11y.notify(s.params.prevSlideMessage);
              }
            }
            if ($(event.target).is('.' + s.params.bulletClass)) {
              $(event.target)[0].click();
            }
          },

          liveRegion: $('<span class="' + s.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),

          notify: function(message) {
            var notification = s.a11y.liveRegion;
            if (notification.length === 0) return;
            notification.html('');
            notification.html(message);
          },
          init: function() {
            // Setup accessibility
            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
              s.a11y.makeFocusable(s.nextButton);
              s.a11y.addRole(s.nextButton, 'button');
              s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
            }
            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
              s.a11y.makeFocusable(s.prevButton);
              s.a11y.addRole(s.prevButton, 'button');
              s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
            }

            $(s.container).append(s.a11y.liveRegion);
          },
          initPagination: function() {
            if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
              s.bullets.each(function() {
                var bullet = $(this);
                s.a11y.makeFocusable(bullet);
                s.a11y.addRole(bullet, 'button');
                s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
              });
            }
          },
          destroy: function() {
            if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
          }
        };


        /*=========================
          Init/Destroy
          ===========================*/
        s.init = function() {
          if (s.params.loop) s.createLoop();
          s.updateContainerSize();
          s.updateSlidesSize();
          s.updatePagination();
          if (s.params.scrollbar && s.scrollbar) {
            s.scrollbar.set();
            if (s.params.scrollbarDraggable) {
              s.scrollbar.enableDraggable();
            }
          }
          if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
            if (!s.params.loop) s.updateProgress();
            s.effects[s.params.effect].setTranslate();
          }
          if (s.params.loop) {
            s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
          } else {
            s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
            if (s.params.initialSlide === 0) {
              if (s.parallax && s.params.parallax) s.parallax.setTranslate();
              if (s.lazy && s.params.lazyLoading) {
                s.lazy.load();
                s.lazy.initialImageLoaded = true;
              }
            }
          }
          s.attachEvents();
          if (s.params.observer && s.support.observer) {
            s.initObservers();
          }
          if (s.params.preloadImages && !s.params.lazyLoading) {
            s.preloadImages();
          }
          if (s.params.zoom && s.zoom) {
            s.zoom.init();
          }
          if (s.params.autoplay) {
            s.startAutoplay();
          }
          if (s.params.keyboardControl) {
            if (s.enableKeyboardControl) s.enableKeyboardControl();
          }
          if (s.params.mousewheelControl) {
            if (s.enableMousewheelControl) s.enableMousewheelControl();
          }
          // Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
          if (s.params.hashnavReplaceState) {
            s.params.replaceState = s.params.hashnavReplaceState;
          }
          if (s.params.history) {
            if (s.history) s.history.init();
          }
          if (s.params.hashnav) {
            if (s.hashnav) s.hashnav.init();
          }
          if (s.params.a11y && s.a11y) s.a11y.init();
          s.emit('onInit', s);
        };

        // Cleanup dynamic styles
        s.cleanupStyles = function() {
          // Container
          s.container.removeClass(s.classNames.join(' ')).removeAttr('style');

          // Wrapper
          s.wrapper.removeAttr('style');

          // Slides
          if (s.slides && s.slides.length) {
            s.slides
              .removeClass([
                s.params.slideVisibleClass,
                s.params.slideActiveClass,
                s.params.slideNextClass,
                s.params.slidePrevClass
              ].join(' '))
              .removeAttr('style')
              .removeAttr('data-swiper-column')
              .removeAttr('data-swiper-row');
          }

          // Pagination/Bullets
          if (s.paginationContainer && s.paginationContainer.length) {
            s.paginationContainer.removeClass(s.params.paginationHiddenClass);
          }
          if (s.bullets && s.bullets.length) {
            s.bullets.removeClass(s.params.bulletActiveClass);
          }

          // Buttons
          if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
          if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);

          // Scrollbar
          if (s.params.scrollbar && s.scrollbar) {
            if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
            if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
          }
        };

        // Destroy
        s.destroy = function(deleteInstance, cleanupStyles) {
          // Detach evebts
          s.detachEvents();
          // Stop autoplay
          s.stopAutoplay();
          // Disable draggable
          if (s.params.scrollbar && s.scrollbar) {
            if (s.params.scrollbarDraggable) {
              s.scrollbar.disableDraggable();
            }
          }
          // Destroy loop
          if (s.params.loop) {
            s.destroyLoop();
          }
          // Cleanup styles
          if (cleanupStyles) {
            s.cleanupStyles();
          }
          // Disconnect observer
          s.disconnectObservers();

          // Destroy zoom
          if (s.params.zoom && s.zoom) {
            s.zoom.destroy();
          }
          // Disable keyboard/mousewheel
          if (s.params.keyboardControl) {
            if (s.disableKeyboardControl) s.disableKeyboardControl();
          }
          if (s.params.mousewheelControl) {
            if (s.disableMousewheelControl) s.disableMousewheelControl();
          }
          // Disable a11y
          if (s.params.a11y && s.a11y) s.a11y.destroy();
          // Delete history popstate
          if (s.params.history && !s.params.replaceState) {
            window.removeEventListener('popstate', s.history.setHistoryPopState);
          }
          if (s.params.hashnav && s.hashnav) {
            s.hashnav.destroy();
          }
          // Destroy callback
          s.emit('onDestroy');
          // Delete instance
          if (deleteInstance !== false) s = null;
        };

        s.init();



        // Return swiper instance
        return s;
      };


      /*==================================================
          Prototype
      ====================================================*/
      Swiper.prototype = {
        isSafari: (function() {
          var ua = window.navigator.userAgent.toLowerCase();
          return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(arr) {
          return Object.prototype.toString.apply(arr) === '[object Array]';
        },
        /*==================================================
        Browser
        ====================================================*/
        browser: {
          ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
          ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1),
          lteIE9: (function() {
            // create temporary DIV
            var div = document.createElement('div');
            // add content to tmp DIV which is wrapped into the IE HTML conditional statement
            div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
            // return true / false value based on what will browser render
            return div.getElementsByTagName('i').length === 1;
          })()
        },
        /*==================================================
        Devices
        ====================================================*/
        device: (function() {
          var ua = window.navigator.userAgent;
          var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
          var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
          var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
          var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
          return {
            ios: ipad || iphone || ipod,
            android: android
          };
        })(),
        /*==================================================
        Feature Detection
        ====================================================*/
        support: {
          touch: (window.Modernizr && Modernizr.touch === true) || (function() {
            return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
          })(),

          transforms3d: (window.Modernizr && Modernizr.csstransforms3d === true) || (function() {
            var div = document.createElement('div').style;
            return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
          })(),

          flexbox: (function() {
            var div = document.createElement('div').style;
            var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
            for (var i = 0; i < styles.length; i++) {
              if (styles[i] in div) return true;
            }
          })(),

          observer: (function() {
            return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
          })(),

          passiveListener: (function() {
            var supportsPassive = false;
            try {
              var opts = Object.defineProperty({}, 'passive', {
                get: function() {
                  supportsPassive = true;
                }
              });
              window.addEventListener('testPassiveListener', null, opts);
            } catch (e) {}
            return supportsPassive;
          })(),

          gestures: (function() {
            return 'ongesturestart' in window;
          })()
        },
        /*==================================================
        Plugins
        ====================================================*/
        plugins: {}
      };


      /*===========================
      Dom7 Library
      ===========================*/
      var Dom7 = (function() {
        var Dom7 = function(arr) {
          var _this = this,
            i = 0;
          // Create array-like object
          for (i = 0; i < arr.length; i++) {
            _this[i] = arr[i];
          }
          _this.length = arr.length;
          // Return collection with methods
          return this;
        };
        var $ = function(selector, context) {
          var arr = [],
            i = 0;
          if (selector && !context) {
            if (selector instanceof Dom7) {
              return selector;
            }
          }
          if (selector) {
            // String
            if (typeof selector === 'string') {
              var els, tempParent, html = selector.trim();
              if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                var toCreate = 'div';
                if (html.indexOf('<li') === 0) toCreate = 'ul';
                if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                if (html.indexOf('<tbody') === 0) toCreate = 'table';
                if (html.indexOf('<option') === 0) toCreate = 'select';
                tempParent = document.createElement(toCreate);
                tempParent.innerHTML = selector;
                for (i = 0; i < tempParent.childNodes.length; i++) {
                  arr.push(tempParent.childNodes[i]);
                }
              } else {
                if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                  // Pure ID selector
                  els = [document.getElementById(selector.split('#')[1])];
                } else {
                  // Other selectors
                  els = (context || document).querySelectorAll(selector);
                }
                for (i = 0; i < els.length; i++) {
                  if (els[i]) arr.push(els[i]);
                }
              }
            }
            // Node/element
            else if (selector.nodeType || selector === window || selector === document) {
              arr.push(selector);
            }
            //Array of elements or instance of Dom
            else if (selector.length > 0 && selector[0].nodeType) {
              for (i = 0; i < selector.length; i++) {
                arr.push(selector[i]);
              }
            }
          }
          return new Dom7(arr);
        };
        Dom7.prototype = {
          // Classes and attriutes
          addClass: function(className) {
            if (typeof className === 'undefined') {
              return this;
            }
            var classes = className.split(' ');
            for (var i = 0; i < classes.length; i++) {
              for (var j = 0; j < this.length; j++) {
                this[j].classList.add(classes[i]);
              }
            }
            return this;
          },
          removeClass: function(className) {
            var classes = className.split(' ');
            for (var i = 0; i < classes.length; i++) {
              for (var j = 0; j < this.length; j++) {
                this[j].classList.remove(classes[i]);
              }
            }
            return this;
          },
          hasClass: function(className) {
            if (!this[0]) return false;
            else return this[0].classList.contains(className);
          },
          toggleClass: function(className) {
            var classes = className.split(' ');
            for (var i = 0; i < classes.length; i++) {
              for (var j = 0; j < this.length; j++) {
                this[j].classList.toggle(classes[i]);
              }
            }
            return this;
          },
          attr: function(attrs, value) {
            if (arguments.length === 1 && typeof attrs === 'string') {
              // Get attr
              if (this[0]) return this[0].getAttribute(attrs);
              else return undefined;
            } else {
              // Set attrs
              for (var i = 0; i < this.length; i++) {
                if (arguments.length === 2) {
                  // String
                  this[i].setAttribute(attrs, value);
                } else {
                  // Object
                  for (var attrName in attrs) {
                    this[i][attrName] = attrs[attrName];
                    this[i].setAttribute(attrName, attrs[attrName]);
                  }
                }
              }
              return this;
            }
          },
          removeAttr: function(attr) {
            for (var i = 0; i < this.length; i++) {
              this[i].removeAttribute(attr);
            }
            return this;
          },
          data: function(key, value) {
            if (typeof value === 'undefined') {
              // Get value
              if (this[0]) {
                var dataKey = this[0].getAttribute('data-' + key);
                if (dataKey) return dataKey;
                else if (this[0].dom7ElementDataStorage && (key in this[0].dom7ElementDataStorage)) return this[0].dom7ElementDataStorage[key];
                else return undefined;
              } else return undefined;
            } else {
              // Set value
              for (var i = 0; i < this.length; i++) {
                var el = this[i];
                if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
                el.dom7ElementDataStorage[key] = value;
              }
              return this;
            }
          },
          // Transforms
          transform: function(transform) {
            for (var i = 0; i < this.length; i++) {
              var elStyle = this[i].style;
              elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
            }
            return this;
          },
          transition: function(duration) {
            if (typeof duration !== 'string') {
              duration = duration + 'ms';
            }
            for (var i = 0; i < this.length; i++) {
              var elStyle = this[i].style;
              elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
            }
            return this;
          },
          //Events
          on: function(eventName, targetSelector, listener, capture) {
            function handleLiveEvent(e) {
              var target = e.target;
              if ($(target).is(targetSelector)) listener.call(target, e);
              else {
                var parents = $(target).parents();
                for (var k = 0; k < parents.length; k++) {
                  if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
                }
              }
            }
            var events = eventName.split(' ');
            var i, j;
            for (i = 0; i < this.length; i++) {
              if (typeof targetSelector === 'function' || targetSelector === false) {
                // Usual events
                if (typeof targetSelector === 'function') {
                  listener = arguments[1];
                  capture = arguments[2] || false;
                }
                for (j = 0; j < events.length; j++) {
                  this[i].addEventListener(events[j], listener, capture);
                }
              } else {
                //Live events
                for (j = 0; j < events.length; j++) {
                  if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
                  this[i].dom7LiveListeners.push({
                    listener: listener,
                    liveListener: handleLiveEvent
                  });
                  this[i].addEventListener(events[j], handleLiveEvent, capture);
                }
              }
            }

            return this;
          },
          off: function(eventName, targetSelector, listener, capture) {
            var events = eventName.split(' ');
            for (var i = 0; i < events.length; i++) {
              for (var j = 0; j < this.length; j++) {
                if (typeof targetSelector === 'function' || targetSelector === false) {
                  // Usual events
                  if (typeof targetSelector === 'function') {
                    listener = arguments[1];
                    capture = arguments[2] || false;
                  }
                  this[j].removeEventListener(events[i], listener, capture);
                } else {
                  // Live event
                  if (this[j].dom7LiveListeners) {
                    for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
                      if (this[j].dom7LiveListeners[k].listener === listener) {
                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
                      }
                    }
                  }
                }
              }
            }
            return this;
          },
          once: function(eventName, targetSelector, listener, capture) {
            var dom = this;
            if (typeof targetSelector === 'function') {
              targetSelector = false;
              listener = arguments[1];
              capture = arguments[2];
            }

            function proxy(e) {
              listener(e);
              dom.off(eventName, targetSelector, proxy, capture);
            }
            dom.on(eventName, targetSelector, proxy, capture);
          },
          trigger: function(eventName, eventData) {
            for (var i = 0; i < this.length; i++) {
              var evt;
              try {
                evt = new window.CustomEvent(eventName, {
                  detail: eventData,
                  bubbles: true,
                  cancelable: true
                });
              } catch (e) {
                evt = document.createEvent('Event');
                evt.initEvent(eventName, true, true);
                evt.detail = eventData;
              }
              this[i].dispatchEvent(evt);
            }
            return this;
          },
          transitionEnd: function(callback) {
            var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
              i, j, dom = this;

            function fireCallBack(e) {
              /*jshint validthis:true */
              if (e.target !== this) return;
              callback.call(this, e);
              for (i = 0; i < events.length; i++) {
                dom.off(events[i], fireCallBack);
              }
            }
            if (callback) {
              for (i = 0; i < events.length; i++) {
                dom.on(events[i], fireCallBack);
              }
            }
            return this;
          },
          // Sizing/Styles
          width: function() {
            if (this[0] === window) {
              return window.innerWidth;
            } else {
              if (this.length > 0) {
                return parseFloat(this.css('width'));
              } else {
                return null;
              }
            }
          },
          outerWidth: function(includeMargins) {
            if (this.length > 0) {
              if (includeMargins)
                return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
              else
                return this[0].offsetWidth;
            } else return null;
          },
          height: function() {
            if (this[0] === window) {
              return window.innerHeight;
            } else {
              if (this.length > 0) {
                return parseFloat(this.css('height'));
              } else {
                return null;
              }
            }
          },
          outerHeight: function(includeMargins) {
            if (this.length > 0) {
              if (includeMargins)
                return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
              else
                return this[0].offsetHeight;
            } else return null;
          },
          offset: function() {
            if (this.length > 0) {
              var el = this[0];
              var box = el.getBoundingClientRect();
              var body = document.body;
              var clientTop = el.clientTop || body.clientTop || 0;
              var clientLeft = el.clientLeft || body.clientLeft || 0;
              var scrollTop = window.pageYOffset || el.scrollTop;
              var scrollLeft = window.pageXOffset || el.scrollLeft;
              return {
                top: box.top + scrollTop - clientTop,
                left: box.left + scrollLeft - clientLeft
              };
            } else {
              return null;
            }
          },
          css: function(props, value) {
            var i;
            if (arguments.length === 1) {
              if (typeof props === 'string') {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
              } else {
                for (i = 0; i < this.length; i++) {
                  for (var prop in props) {
                    this[i].style[prop] = props[prop];
                  }
                }
                return this;
              }
            }
            if (arguments.length === 2 && typeof props === 'string') {
              for (i = 0; i < this.length; i++) {
                this[i].style[props] = value;
              }
              return this;
            }
            return this;
          },

          //Dom manipulation
          each: function(callback) {
            for (var i = 0; i < this.length; i++) {
              callback.call(this[i], i, this[i]);
            }
            return this;
          },
          html: function(html) {
            if (typeof html === 'undefined') {
              return this[0] ? this[0].innerHTML : undefined;
            } else {
              for (var i = 0; i < this.length; i++) {
                this[i].innerHTML = html;
              }
              return this;
            }
          },
          text: function(text) {
            if (typeof text === 'undefined') {
              if (this[0]) {
                return this[0].textContent.trim();
              } else return null;
            } else {
              for (var i = 0; i < this.length; i++) {
                this[i].textContent = text;
              }
              return this;
            }
          },
          is: function(selector) {
            if (!this[0]) return false;
            var compareWith, i;
            if (typeof selector === 'string') {
              var el = this[0];
              if (el === document) return selector === document;
              if (el === window) return selector === window;

              if (el.matches) return el.matches(selector);
              else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
              else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);
              else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
              else {
                compareWith = $(selector);
                for (i = 0; i < compareWith.length; i++) {
                  if (compareWith[i] === this[0]) return true;
                }
                return false;
              }
            } else if (selector === document) return this[0] === document;
            else if (selector === window) return this[0] === window;
            else {
              if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [selector] : selector;
                for (i = 0; i < compareWith.length; i++) {
                  if (compareWith[i] === this[0]) return true;
                }
                return false;
              }
              return false;
            }

          },
          index: function() {
            if (this[0]) {
              var child = this[0];
              var i = 0;
              while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) i++;
              }
              return i;
            } else return undefined;
          },
          eq: function(index) {
            if (typeof index === 'undefined') return this;
            var length = this.length;
            var returnIndex;
            if (index > length - 1) {
              return new Dom7([]);
            }
            if (index < 0) {
              returnIndex = length + index;
              if (returnIndex < 0) return new Dom7([]);
              else return new Dom7([this[returnIndex]]);
            }
            return new Dom7([this[index]]);
          },
          append: function(newChild) {
            var i, j;
            for (i = 0; i < this.length; i++) {
              if (typeof newChild === 'string') {
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;
                while (tempDiv.firstChild) {
                  this[i].appendChild(tempDiv.firstChild);
                }
              } else if (newChild instanceof Dom7) {
                for (j = 0; j < newChild.length; j++) {
                  this[i].appendChild(newChild[j]);
                }
              } else {
                this[i].appendChild(newChild);
              }
            }
            return this;
          },
          prepend: function(newChild) {
            var i, j;
            for (i = 0; i < this.length; i++) {
              if (typeof newChild === 'string') {
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
                  this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                }
                // this[i].insertAdjacentHTML('afterbegin', newChild);
              } else if (newChild instanceof Dom7) {
                for (j = 0; j < newChild.length; j++) {
                  this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                }
              } else {
                this[i].insertBefore(newChild, this[i].childNodes[0]);
              }
            }
            return this;
          },
          insertBefore: function(selector) {
            var before = $(selector);
            for (var i = 0; i < this.length; i++) {
              if (before.length === 1) {
                before[0].parentNode.insertBefore(this[i], before[0]);
              } else if (before.length > 1) {
                for (var j = 0; j < before.length; j++) {
                  before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
                }
              }
            }
          },
          insertAfter: function(selector) {
            var after = $(selector);
            for (var i = 0; i < this.length; i++) {
              if (after.length === 1) {
                after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
              } else if (after.length > 1) {
                for (var j = 0; j < after.length; j++) {
                  after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
                }
              }
            }
          },
          next: function(selector) {
            if (this.length > 0) {
              if (selector) {
                if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);
                else return new Dom7([]);
              } else {
                if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
                else return new Dom7([]);
              }
            } else return new Dom7([]);
          },
          nextAll: function(selector) {
            var nextEls = [];
            var el = this[0];
            if (!el) return new Dom7([]);
            while (el.nextElementSibling) {
              var next = el.nextElementSibling;
              if (selector) {
                if ($(next).is(selector)) nextEls.push(next);
              } else nextEls.push(next);
              el = next;
            }
            return new Dom7(nextEls);
          },
          prev: function(selector) {
            if (this.length > 0) {
              if (selector) {
                if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);
                else return new Dom7([]);
              } else {
                if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);
                else return new Dom7([]);
              }
            } else return new Dom7([]);
          },
          prevAll: function(selector) {
            var prevEls = [];
            var el = this[0];
            if (!el) return new Dom7([]);
            while (el.previousElementSibling) {
              var prev = el.previousElementSibling;
              if (selector) {
                if ($(prev).is(selector)) prevEls.push(prev);
              } else prevEls.push(prev);
              el = prev;
            }
            return new Dom7(prevEls);
          },
          parent: function(selector) {
            var parents = [];
            for (var i = 0; i < this.length; i++) {
              if (selector) {
                if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
              } else {
                parents.push(this[i].parentNode);
              }
            }
            return $($.unique(parents));
          },
          parents: function(selector) {
            var parents = [];
            for (var i = 0; i < this.length; i++) {
              var parent = this[i].parentNode;
              while (parent) {
                if (selector) {
                  if ($(parent).is(selector)) parents.push(parent);
                } else {
                  parents.push(parent);
                }
                parent = parent.parentNode;
              }
            }
            return $($.unique(parents));
          },
          find: function(selector) {
            var foundElements = [];
            for (var i = 0; i < this.length; i++) {
              var found = this[i].querySelectorAll(selector);
              for (var j = 0; j < found.length; j++) {
                foundElements.push(found[j]);
              }
            }
            return new Dom7(foundElements);
          },
          children: function(selector) {
            var children = [];
            for (var i = 0; i < this.length; i++) {
              var childNodes = this[i].childNodes;

              for (var j = 0; j < childNodes.length; j++) {
                if (!selector) {
                  if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
                } else {
                  if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
                }
              }
            }
            return new Dom7($.unique(children));
          },
          remove: function() {
            for (var i = 0; i < this.length; i++) {
              if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            }
            return this;
          },
          add: function() {
            var dom = this;
            var i, j;
            for (i = 0; i < arguments.length; i++) {
              var toAdd = $(arguments[i]);
              for (j = 0; j < toAdd.length; j++) {
                dom[dom.length] = toAdd[j];
                dom.length++;
              }
            }
            return dom;
          }
        };
        $.fn = Dom7.prototype;
        $.unique = function(arr) {
          var unique = [];
          for (var i = 0; i < arr.length; i++) {
            if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
          }
          return unique;
        };

        return $;
      })();


      /*===========================
       Get Dom libraries
       ===========================*/
      var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
      for (var i = 0; i < swiperDomPlugins.length; i++) {
        if (window[swiperDomPlugins[i]]) {
          addLibraryPlugin(window[swiperDomPlugins[i]]);
        }
      }
      // Required DOM Plugins
      var domLib;
      if (typeof Dom7 === 'undefined') {
        domLib = window.Dom7 || window.Zepto || window.jQuery;
      } else {
        domLib = Dom7;
      }


      /*===========================
      Add .swiper plugin from Dom libraries
      ===========================*/
      function addLibraryPlugin(lib) {
        lib.fn.swiper = function(params) {
          var firstInstance;
          lib(this).each(function() {
            var s = new Swiper(this, params);
            if (!firstInstance) firstInstance = s;
          });
          return firstInstance;
        };
      }

      if (domLib) {
        if (!('transitionEnd' in domLib.fn)) {
          domLib.fn.transitionEnd = function(callback) {
            var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
              i, j, dom = this;

            function fireCallBack(e) {
              /*jshint validthis:true */
              if (e.target !== this) return;
              callback.call(this, e);
              for (i = 0; i < events.length; i++) {
                dom.off(events[i], fireCallBack);
              }
            }
            if (callback) {
              for (i = 0; i < events.length; i++) {
                dom.on(events[i], fireCallBack);
              }
            }
            return this;
          };
        }
        if (!('transform' in domLib.fn)) {
          domLib.fn.transform = function(transform) {
            for (var i = 0; i < this.length; i++) {
              var elStyle = this[i].style;
              elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
            }
            return this;
          };
        }
        if (!('transition' in domLib.fn)) {
          domLib.fn.transition = function(duration) {
            if (typeof duration !== 'string') {
              duration = duration + 'ms';
            }
            for (var i = 0; i < this.length; i++) {
              var elStyle = this[i].style;
              elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
            }
            return this;
          };
        }
        if (!('outerWidth' in domLib.fn)) {
          domLib.fn.outerWidth = function(includeMargins) {
            if (this.length > 0) {
              if (includeMargins)
                return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
              else
                return this[0].offsetWidth;
            } else return null;
          };
        }
      }


      window.Swiper = Swiper;
    })();

    /*===========================
    Swiper AMD Export
    ===========================*/
    if (true) {
      module.exports = window.Swiper;
    } else if (typeof define === 'function' && define.amd) {
      define([], function() {
        'use strict';
        return window.Swiper;
      });
    }

    //# sourceMappingURL=maps/swiper.js.map


    /***/
  }),
  /* 7 */
  /***/
  (function(module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*! lightgallery - v1.6.0 - 2017-08-08
     * http://sachinchoolur.github.io/lightGallery/
     * Copyright (c) 2017 Sachin N; Licensed GPLv3 */
    ! function(a, b) {
      true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(a) {
          return b(a)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(a.jQuery)
    }(this, function(a) {
      ! function() {
        "use strict";

        function b(b, d) {
          if (this.el = b, this.$el = a(b), this.s = a.extend({}, c, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
        }
        var c = {
          mode: "lg-slide",
          cssEasing: "ease",
          easing: "linear",
          speed: 600,
          height: "100%",
          width: "100%",
          addClass: "",
          startClass: "lg-start-zoom",
          backdropDuration: 150,
          hideBarsDelay: 6e3,
          useLeft: !1,
          closable: !0,
          loop: !0,
          escKey: !0,
          keyPress: !0,
          controls: !0,
          slideEndAnimatoin: !0,
          hideControlOnEnd: !1,
          mousewheel: !0,
          getCaptionFromTitleOrAlt: !0,
          appendSubHtmlTo: ".lg-sub-html",
          subHtmlSelectorRelative: !1,
          preload: 1,
          showAfterLoad: !0,
          selector: "",
          selectWithin: "",
          nextHtml: "",
          prevHtml: "",
          index: !1,
          iframeMaxWidth: "100%",
          download: !0,
          counter: !0,
          appendCounterTo: ".lg-toolbar",
          swipeThreshold: 50,
          enableSwipe: !0,
          enableDrag: !0,
          dynamic: !1,
          dynamicEl: [],
          galleryId: 1
        };
        b.prototype.init = function() {
          var b = this;
          b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
          var c = window.location.hash;
          c.indexOf("lg=" + this.s.galleryId) > 0 && (b.index = parseInt(c.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function() {
            b.build(b.index)
          }), a("body").addClass("lg-on"))), b.s.dynamic ? (b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function() {
            b.build(b.index), a("body").addClass("lg-on")
          })) : b.$items.on("click.lgcustom", function(c) {
            try {
              c.preventDefault(), c.preventDefault()
            } catch (a) {
              c.returnValue = !1
            }
            b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || b.$items.index(this), a("body").hasClass("lg-on") || (b.build(b.index), a("body").addClass("lg-on"))
          })
        }, b.prototype.build = function(b) {
          var c = this;
          c.structure(), a.each(a.fn.lightGallery.modules, function(b) {
            c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
          }), c.slide(b, !1, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 ? (c.arrow(), setTimeout(function() {
            c.enableDrag(), c.enableSwipe()
          }, 50), c.s.mousewheel && c.mousewheel()) : c.$slide.on("click.lg", function() {
            c.$el.trigger("onSlideClick.lg")
          }), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
            c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function() {
              c.$outer.addClass("lg-hide-items")
            }, c.s.hideBarsDelay)
          }), c.$outer.trigger("mousemove.lg")
        }, b.prototype.structure = function() {
          var b, c = "",
            d = "",
            e = 0,
            f = "",
            g = this;
          for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), e = 0; e < this.$items.length; e++) c += '<div class="lg-item"></div>';
          if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'), b = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + c + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + d + f + "</div></div>", a("body").append(b), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), g.setTop(), a(window).on("resize.lg orientationchange.lg", function() {
              setTimeout(function() {
                g.setTop()
              }, 100)
            }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
            var h = this.$outer.find(".lg-inner");
            h.css("transition-timing-function", this.s.cssEasing), h.css("transition-duration", this.s.speed + "ms")
          }
          setTimeout(function() {
            a(".lg-backdrop").addClass("in")
          }), setTimeout(function() {
            g.$outer.addClass("lg-visible")
          }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(window).scrollTop()
        }, b.prototype.setTop = function() {
          if ("100%" !== this.s.height) {
            var b = a(window).height(),
              c = (b - parseInt(this.s.height, 10)) / 2,
              d = this.$outer.find(".lg");
            b >= parseInt(this.s.height, 10) ? d.css("top", c + "px") : d.css("top", "0px")
          }
        }, b.prototype.doCss = function() {
          var a = function() {
            var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
              b = document.documentElement,
              c = 0;
            for (c = 0; c < a.length; c++)
              if (a[c] in b.style) return !0
          };
          return !!a()
        }, b.prototype.isVideo = function(a, b) {
          var c;
          if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a) return c ? {
            html5: !0
          } : (console.error("lightGallery :- data-src is not pvovided on slide item " + (b + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
          var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
            e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
            f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
            g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
          return d ? {
            youtube: d
          } : e ? {
            vimeo: e
          } : f ? {
            dailymotion: f
          } : g ? {
            vk: g
          } : void 0
        }, b.prototype.counter = function() {
          this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
        }, b.prototype.addHtml = function(b) {
          var c, d, e = null;
          if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c)
            if ("undefined" != typeof e && null !== e) {
              var f = e.substring(0, 1);
              "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
            } else e = "";
            ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e), "undefined" != typeof e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b])
        }, b.prototype.preload = function(a) {
          var b = 1,
            c = 1;
          for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
          for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0)
        }, b.prototype.loadContent = function(b, c, d) {
          var e, f, g, h, i, j, k = this,
            l = !1,
            m = function(b) {
              for (var c = [], d = [], e = 0; e < b.length; e++) {
                var g = b[e].split(" ");
                "" === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1])
              }
              for (var h = a(window).width(), i = 0; i < c.length; i++)
                if (parseInt(c[i], 10) > h) {
                  f = d[i];
                  break
                }
            };
          if (k.s.dynamic) {
            if (k.s.dynamicEl[b].poster && (l = !0, g = k.s.dynamicEl[b].poster), j = k.s.dynamicEl[b].html, f = k.s.dynamicEl[b].src, k.s.dynamicEl[b].responsive) {
              var n = k.s.dynamicEl[b].responsive.split(",");
              m(n)
            }
            h = k.s.dynamicEl[b].srcset, i = k.s.dynamicEl[b].sizes
          } else {
            if (k.$items.eq(b).attr("data-poster") && (l = !0, g = k.$items.eq(b).attr("data-poster")), j = k.$items.eq(b).attr("data-html"), f = k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src"), k.$items.eq(b).attr("data-responsive")) {
              var o = k.$items.eq(b).attr("data-responsive").split(",");
              m(o)
            }
            h = k.$items.eq(b).attr("data-srcset"), i = k.$items.eq(b).attr("data-sizes")
          }
          var p = !1;
          k.s.dynamic ? k.s.dynamicEl[b].iframe && (p = !0) : "true" === k.$items.eq(b).attr("data-iframe") && (p = !0);
          var q = k.isVideo(f, b);
          if (!k.$slide.eq(b).hasClass("lg-loaded")) {
            if (p) k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>');
            else if (l) {
              var r = "";
              r = q && q.youtube ? "lg-has-youtube" : q && q.vimeo ? "lg-has-vimeo" : "lg-has-html5", k.$slide.eq(b).prepend('<div class="lg-video-cont ' + r + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>')
            } else q ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), k.$el.trigger("hasVideo.lg", [b, f, j])) : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
            if (k.$el.trigger("onAferAppendSlide.lg", [b]), e = k.$slide.eq(b).find(".lg-object"), i && e.attr("sizes", i), h) {
              e.attr("srcset", h);
              try {
                picturefill({
                  elements: [e[0]]
                })
              } catch (a) {
                console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
              }
            }
            ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b), k.$slide.eq(b).addClass("lg-loaded")
          }
          k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
            var c = 0;
            d && !a("body").hasClass("lg-from-hash") && (c = d), setTimeout(function() {
              k.$slide.eq(b).addClass("lg-complete"), k.$el.trigger("onSlideItemLoad.lg", [b, d || 0])
            }, c)
          }), q && q.html5 && !l && k.$slide.eq(b).addClass("lg-complete"), c === !0 && (k.$slide.eq(b).hasClass("lg-complete") ? k.preload(b) : k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
            k.preload(b)
          }))
        }, b.prototype.slide = function(b, c, d, e) {
          var f = this.$outer.find(".lg-current").index(),
            g = this;
          if (!g.lGalleryOn || f !== b) {
            var h = this.$slide.length,
              i = g.lGalleryOn ? this.s.speed : 0;
            if (!g.lgBusy) {
              if (this.s.download) {
                var j;
                j = g.s.dynamic ? g.s.dynamicEl[b].downloadUrl !== !1 && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src) : "false" !== g.$items.eq(b).attr("data-download-url") && (g.$items.eq(b).attr("data-download-url") || g.$items.eq(b).attr("href") || g.$items.eq(b).attr("data-src")), j ? (a("#lg-download").attr("href", j), g.$outer.removeClass("lg-hide-download")) : g.$outer.addClass("lg-hide-download")
              }
              if (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]), g.lgBusy = !0, clearTimeout(g.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                  g.addHtml(b)
                }, i), this.arrowDisable(b), e || (b < f ? e = "prev" : b > f && (e = "next")), c) {
                this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                var k, l;
                h > 2 ? (k = b - 1, l = b + 1, 0 === b && f === h - 1 ? (l = 0, k = h - 1) : b === h - 1 && 0 === f && (l = 0, k = h - 1)) : (k = 0, l = 1), "prev" === e ? g.$slide.eq(l).addClass("lg-next-slide") : g.$slide.eq(k).addClass("lg-prev-slide"), g.$slide.eq(b).addClass("lg-current")
              } else g.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === e ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(f).addClass("lg-next-slide")) : (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(f).addClass("lg-prev-slide")), setTimeout(function() {
                g.$slide.removeClass("lg-current"), g.$slide.eq(b).addClass("lg-current"), g.$outer.removeClass("lg-no-trans")
              }, 50);
              g.lGalleryOn ? (setTimeout(function() {
                g.loadContent(b, !0, 0)
              }, this.s.speed + 50), setTimeout(function() {
                g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d])
              }, this.s.speed)) : (g.loadContent(b, !0, g.s.backdropDuration), g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d])), g.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1)
            }
          }
        }, b.prototype.goToNextSlide = function(a) {
          var b = this,
            c = b.s.loop;
          a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : c ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-right-end"), setTimeout(function() {
            b.$outer.removeClass("lg-right-end")
          }, 400)))
        }, b.prototype.goToPrevSlide = function(a) {
          var b = this,
            c = b.s.loop;
          a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : c ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-left-end"), setTimeout(function() {
            b.$outer.removeClass("lg-left-end")
          }, 400)))
        }, b.prototype.keyPress = function() {
          var b = this;
          this.$items.length > 1 && a(window).on("keyup.lg", function(a) {
            b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()))
          }), a(window).on("keydown.lg", function(a) {
            b.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), b.$outer.hasClass("lg-thumb-open") ? b.$outer.removeClass("lg-thumb-open") : b.destroy())
          })
        }, b.prototype.arrow = function() {
          var a = this;
          this.$outer.find(".lg-prev").on("click.lg", function() {
            a.goToPrevSlide()
          }), this.$outer.find(".lg-next").on("click.lg", function() {
            a.goToNextSlide()
          })
        }, b.prototype.arrowDisable = function(a) {
          !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
        }, b.prototype.setTranslate = function(a, b, c) {
          this.s.useLeft ? a.css("left", b) : a.css({
            transform: "translate3d(" + b + "px, " + c + "px, 0px)"
          })
        }, b.prototype.touchMove = function(b, c) {
          var d = c - b;
          Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
        }, b.prototype.touchEnd = function(a) {
          var b = this;
          "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() {
            b.$outer.removeClass("lg-dragging"), a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style")
          }), setTimeout(function() {
            b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
          }, b.s.speed + 100)
        }, b.prototype.enableSwipe = function() {
          var a = this,
            b = 0,
            c = 0,
            d = !1;
          a.s.enableSwipe && a.doCss() && (a.$slide.on("touchstart.lg", function(c) {
            a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX)
          }), a.$slide.on("touchmove.lg", function(e) {
            a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0)
          }), a.$slide.on("touchend.lg", function() {
            a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
          }))
        }, b.prototype.enableDrag = function() {
          var b = this,
            c = 0,
            d = 0,
            e = !1,
            f = !1;
          b.s.enableDrag && b.doCss() && (b.$slide.on("mousedown.lg", function(d) {
            b.$outer.hasClass("lg-zoomed") || (a(d.target).hasClass("lg-object") || a(d.target).hasClass("lg-video-play")) && (d.preventDefault(), b.lgBusy || (b.manageSwipeClass(), c = d.pageX, e = !0, b.$outer.scrollLeft += 1, b.$outer.scrollLeft -= 1, b.$outer.removeClass("lg-grab").addClass("lg-grabbing"), b.$el.trigger("onDragstart.lg")))
          }), a(window).on("mousemove.lg", function(a) {
            e && (f = !0, d = a.pageX, b.touchMove(c, d), b.$el.trigger("onDragmove.lg"))
          }), a(window).on("mouseup.lg", function(g) {
            f ? (f = !1, b.touchEnd(d - c), b.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b.$el.trigger("onSlideClick.lg"), e && (e = !1, b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
          }))
        }, b.prototype.manageSwipeClass = function() {
          var a = this.index + 1,
            b = this.index - 1;
          this.s.loop && this.$slide.length > 2 && (0 === this.index ? b = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")
        }, b.prototype.mousewheel = function() {
          var a = this;
          a.$outer.on("mousewheel.lg", function(b) {
            b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault())
          })
        }, b.prototype.closeGallery = function() {
          var b = this,
            c = !1;
          this.$outer.find(".lg-close").on("click.lg", function() {
            b.destroy()
          }), b.s.closable && (b.$outer.on("mousedown.lg", function(b) {
            c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
          }), b.$outer.on("mouseup.lg", function(d) {
            (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
          }))
        }, b.prototype.destroy = function(b) {
          var c = this;
          b || (c.$el.trigger("onBeforeClose.lg"), a(window).scrollTop(c.prevScrollTop)), b && (c.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(c.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function(a) {
            c.modules[a] && c.modules[a].destroy()
          }), this.lGalleryOn = !1, clearTimeout(c.hideBartimeout), this.hideBartimeout = !1, a(window).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), c.$outer && c.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function() {
            c.$outer && c.$outer.remove(), a(".lg-backdrop").remove(), b || c.$el.trigger("onCloseAfter.lg")
          }, c.s.backdropDuration + 50)
        }, a.fn.lightGallery = function(c) {
          //BUG
            return this.each(function() {
            if (a.data(this, "lightGallery")) try {
              a(this).data("lightGallery").init()
            } catch (a) {
              console.error("lightGallery has not initiated properly")
            } else a.data(this, "lightGallery", new b(this, c))
          })
        }, a.fn.lightGallery.modules = {}
      }()
    }),
    function(a, b) {
      true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(a) {
          return b(a)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
    }(this, function(a) {
      ! function() {
        "use strict";
        var b = {
            autoplay: !1,
            pause: 5e3,
            progressBar: !0,
            fourceAutoplay: !1,
            autoplayControls: !0,
            appendAutoplayControlsTo: ".lg-toolbar"
          },
          c = function(c) {
            return this.core = a(c).data("lightGallery"), this.$el = a(c), !(this.core.$items.length < 2) && (this.core.s = a.extend({}, b, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this)
          };
        c.prototype.init = function() {
          var a = this;
          a.core.s.autoplayControls && a.controls(), a.core.s.progressBar && a.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), a.progress(), a.core.s.autoplay && a.$el.one("onSlideItemLoad.lg.tm", function() {
            a.startlAuto()
          }), a.$el.on("onDragstart.lg.tm touchstart.lg.tm", function() {
            a.interval && (a.cancelAuto(), a.canceledOnTouch = !0)
          }), a.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function() {
            !a.interval && a.canceledOnTouch && (a.startlAuto(), a.canceledOnTouch = !1)
          })
        }, c.prototype.progress = function() {
          var a, b, c = this;
          c.$el.on("onBeforeSlide.lg.tm", function() {
            c.core.s.progressBar && c.fromAuto && (a = c.core.$outer.find(".lg-progress-bar"), b = c.core.$outer.find(".lg-progress"), c.interval && (b.removeAttr("style"), a.removeClass("lg-start"), setTimeout(function() {
              b.css("transition", "width " + (c.core.s.speed + c.core.s.pause) + "ms ease 0s"), a.addClass("lg-start")
            }, 20))), c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(), c.fromAuto = !1
          })
        }, c.prototype.controls = function() {
          var b = this,
            c = '<span class="lg-autoplay-button lg-icon"></span>';
          a(this.core.s.appendAutoplayControlsTo).append(c), b.core.$outer.find(".lg-autoplay-button").on("click.lg", function() {
            a(b.core.$outer).hasClass("lg-show-autoplay") ? (b.cancelAuto(), b.core.s.fourceAutoplay = !1) : b.interval || (b.startlAuto(), b.core.s.fourceAutoplay = b.fourceAutoplayTemp)
          })
        }, c.prototype.startlAuto = function() {
          var a = this;
          a.core.$outer.find(".lg-progress").css("transition", "width " + (a.core.s.speed + a.core.s.pause) + "ms ease 0s"), a.core.$outer.addClass("lg-show-autoplay"), a.core.$outer.find(".lg-progress-bar").addClass("lg-start"), a.interval = setInterval(function() {
            a.core.index + 1 < a.core.$items.length ? a.core.index++ : a.core.index = 0, a.fromAuto = !0, a.core.slide(a.core.index, !1, !1, "next")
          }, a.core.s.speed + a.core.s.pause)
        }, c.prototype.cancelAuto = function() {
          clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
        }, c.prototype.destroy = function() {
          this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove()
        }, a.fn.lightGallery.modules.autoplay = c
      }()
    }),
    function(a, b) {
      true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(a) {
          return b(a)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
    }(this, function(a) {
      ! function() {
        "use strict";
        var b = {
            fullScreen: !0
          },
          c = function(c) {
            return this.core = a(c).data("lightGallery"), this.$el = a(c), this.core.s = a.extend({}, b, this.core.s), this.init(), this
          };
        c.prototype.init = function() {
          var a = "";
          if (this.core.s.fullScreen) {
            if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
            a = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(a), this.fullScreen()
          }
        }, c.prototype.requestFullscreen = function() {
          var a = document.documentElement;
          a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
        }, c.prototype.exitFullscreen = function() {
          document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }, c.prototype.fullScreen = function() {
          var b = this;
          a(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function() {
            b.core.$outer.toggleClass("lg-fullscreen-on")
          }), this.core.$outer.find(".lg-fullscreen").on("click.lg", function() {
            document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? b.exitFullscreen() : b.requestFullscreen()
          })
        }, c.prototype.destroy = function() {
          this.exitFullscreen(), a(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
        }, a.fn.lightGallery.modules.fullscreen = c
      }()
    }),
    function(a, b) {
      true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(a) {
          return b(a)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
    }(this, function(a) {
      ! function() {
        "use strict";
        var b = {
            pager: !1
          },
          c = function(c) {
            return this.core = a(c).data("lightGallery"), this.$el = a(c), this.core.s = a.extend({}, b, this.core.s), this.core.s.pager && this.core.$items.length > 1 && this.init(), this
          };
        c.prototype.init = function() {
          var b, c, d, e = this,
            f = "";
          if (e.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), e.core.s.dynamic)
            for (var g = 0; g < e.core.s.dynamicEl.length; g++) f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e.core.s.dynamicEl[g].thumb + '" /></div></span>';
          else e.core.$items.each(function() {
            f += e.core.s.exThumbImage ? '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).attr(e.core.s.exThumbImage) + '" /></div></span>' : '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).find("img").attr("src") + '" /></div></span>'
          });
          c = e.core.$outer.find(".lg-pager-outer"), c.html(f), b = e.core.$outer.find(".lg-pager-cont"), b.on("click.lg touchend.lg", function() {
            var b = a(this);
            e.core.index = b.index(), e.core.slide(e.core.index, !1, !0, !1)
          }), c.on("mouseover.lg", function() {
            clearTimeout(d), c.addClass("lg-pager-hover")
          }), c.on("mouseout.lg", function() {
            d = setTimeout(function() {
              c.removeClass("lg-pager-hover")
            })
          }), e.core.$el.on("onBeforeSlide.lg.tm", function(a, c, d) {
            b.removeClass("lg-pager-active"), b.eq(d).addClass("lg-pager-active")
          })
        }, c.prototype.destroy = function() {}, a.fn.lightGallery.modules.pager = c
      }()
    }),
    function(a, b) {
      true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(a) {
          return b(a)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
    }(this, function(a) {
      ! function() {
        "use strict";
        var b = {
            thumbnail: !0,
            animateThumb: !0,
            currentPagerPosition: "middle",
            thumbWidth: 100,
            thumbHeight: "80px",
            thumbContHeight: 100,
            thumbMargin: 5,
            exThumbImage: !1,
            showThumbByDefault: !0,
            toogleThumb: !0,
            pullCaptionUp: !0,
            enableThumbDrag: !0,
            enableThumbSwipe: !0,
            swipeThreshold: 50,
            loadYoutubeThumbnail: !0,
            youtubeThumbSize: 1,
            loadVimeoThumbnail: !0,
            vimeoThumbSize: "thumbnail_small",
            loadDailymotionThumbnail: !0
          },
          c = function(c) {
            return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.$el = a(c), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"), this.left = 0, this.init(), this
          };
        c.prototype.init = function() {
          var a = this;
          this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function() {
            a.core.$outer.addClass("lg-thumb-open")
          }, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
        }, c.prototype.build = function() {
          function b(a, b, c) {
            var g, h = d.core.isVideo(a, c) || {},
              i = "";
            h.youtube || h.vimeo || h.dailymotion ? h.youtube ? g = d.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + h.youtube[1] + "/" + d.core.s.youtubeThumbSize + ".jpg" : b : h.vimeo ? d.core.s.loadVimeoThumbnail ? (g = "//i.vimeocdn.com/video/error_" + f + ".jpg", i = h.vimeo[1]) : g = b : h.dailymotion && (g = d.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + h.dailymotion[1] : b) : g = b, e += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + d.core.s.thumbWidth + "px; height: " + d.core.s.thumbHeight + "; margin-right: " + d.core.s.thumbMargin + 'px"><img src="' + g + '" /></div>', i = ""
          }
          var c, d = this,
            e = "",
            f = "",
            g = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
          switch (this.core.s.vimeoThumbSize) {
            case "thumbnail_large":
              f = "640";
              break;
            case "thumbnail_medium":
              f = "200x150";
              break;
            case "thumbnail_small":
              f = "100x75"
          }
          if (d.core.$outer.addClass("lg-has-thumb"), d.core.$outer.find(".lg").append(g), d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer"), d.thumbOuterWidth = d.$thumbOuter.width(), d.core.s.animateThumb && d.core.$outer.find(".lg-thumb").css({
              width: d.thumbTotalWidth + "px",
              position: "relative"
            }), this.core.s.animateThumb && d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"), d.core.s.dynamic)
            for (var h = 0; h < d.core.s.dynamicEl.length; h++) b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
          else d.core.$items.each(function(c) {
            d.core.s.exThumbImage ? b(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(d.core.s.exThumbImage), c) : b(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), c)
          });
          d.core.$outer.find(".lg-thumb").html(e), c = d.core.$outer.find(".lg-thumb-item"), c.each(function() {
            var b = a(this),
              c = b.attr("data-vimeo-id");
            c && a.getJSON("//www.vimeo.com/api/v2/video/" + c + ".json?callback=?", {
              format: "json"
            }, function(a) {
              b.find("img").attr("src", a[0][d.core.s.vimeoThumbSize])
            })
          }), c.eq(d.core.index).addClass("active"), d.core.$el.on("onBeforeSlide.lg.tm", function() {
            c.removeClass("active"), c.eq(d.core.index).addClass("active")
          }), c.on("click.lg touchend.lg", function() {
            var b = a(this);
            setTimeout(function() {
              (d.thumbClickable && !d.core.lgBusy || !d.core.doCss()) && (d.core.index = b.index(), d.core.slide(d.core.index, !1, !0, !1))
            }, 50)
          }), d.core.$el.on("onBeforeSlide.lg.tm", function() {
            d.animateThumb(d.core.index)
          }), a(window).on("resize.lg.thumb orientationchange.lg.thumb", function() {
            setTimeout(function() {
              d.animateThumb(d.core.index), d.thumbOuterWidth = d.$thumbOuter.width()
            }, 200)
          })
        }, c.prototype.setTranslate = function(a) {
          this.core.$outer.find(".lg-thumb").css({
            transform: "translate3d(-" + a + "px, 0px, 0px)"
          })
        }, c.prototype.animateThumb = function(a) {
          var b = this.core.$outer.find(".lg-thumb");
          if (this.core.s.animateThumb) {
            var c;
            switch (this.core.s.currentPagerPosition) {
              case "left":
                c = 0;
                break;
              case "middle":
                c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                break;
              case "right":
                c = this.thumbOuterWidth - this.core.s.thumbWidth
            }
            this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (b.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || b.animate({
              left: -this.left + "px"
            }, this.core.s.speed)) : this.core.doCss() || b.css("left", -this.left + "px"), this.setTranslate(this.left)
          }
        }, c.prototype.enableThumbDrag = function() {
          var b = this,
            c = 0,
            d = 0,
            e = !1,
            f = !1,
            g = 0;
          b.$thumbOuter.addClass("lg-grab"), b.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function(a) {
            b.thumbTotalWidth > b.thumbOuterWidth && (a.preventDefault(), c = a.pageX, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.thumbClickable = !1, b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
          }), a(window).on("mousemove.lg.thumb", function(a) {
            e && (g = b.left, f = !0, d = a.pageX, b.$thumbOuter.addClass("lg-dragging"), g -= d - c, g > b.thumbTotalWidth - b.thumbOuterWidth && (g = b.thumbTotalWidth - b.thumbOuterWidth), g < 0 && (g = 0), b.setTranslate(g))
          }), a(window).on("mouseup.lg.thumb", function() {
            f ? (f = !1, b.$thumbOuter.removeClass("lg-dragging"), b.left = g, Math.abs(d - c) < b.core.s.swipeThreshold && (b.thumbClickable = !0)) : b.thumbClickable = !0, e && (e = !1, b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
          })
        }, c.prototype.enableThumbSwipe = function() {
          var a = this,
            b = 0,
            c = 0,
            d = !1,
            e = 0;
          a.core.$outer.find(".lg-thumb").on("touchstart.lg", function(c) {
            a.thumbTotalWidth > a.thumbOuterWidth && (c.preventDefault(), b = c.originalEvent.targetTouches[0].pageX, a.thumbClickable = !1)
          }), a.core.$outer.find(".lg-thumb").on("touchmove.lg", function(f) {
            a.thumbTotalWidth > a.thumbOuterWidth && (f.preventDefault(), c = f.originalEvent.targetTouches[0].pageX, d = !0, a.$thumbOuter.addClass("lg-dragging"), e = a.left, e -= c - b, e > a.thumbTotalWidth - a.thumbOuterWidth && (e = a.thumbTotalWidth - a.thumbOuterWidth), e < 0 && (e = 0), a.setTranslate(e))
          }), a.core.$outer.find(".lg-thumb").on("touchend.lg", function() {
            a.thumbTotalWidth > a.thumbOuterWidth && d ? (d = !1, a.$thumbOuter.removeClass("lg-dragging"), Math.abs(c - b) < a.core.s.swipeThreshold && (a.thumbClickable = !0), a.left = e) : a.thumbClickable = !0
          })
        }, c.prototype.toogle = function() {
          var a = this;
          a.core.s.toogleThumb && (a.core.$outer.addClass("lg-can-toggle"), a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function() {
            a.core.$outer.toggleClass("lg-thumb-open")
          }))
        }, c.prototype.thumbkeyPress = function() {
          var b = this;
          a(window).on("keydown.lg.thumb", function(a) {
            38 === a.keyCode ? (a.preventDefault(), b.core.$outer.addClass("lg-thumb-open")) : 40 === a.keyCode && (a.preventDefault(), b.core.$outer.removeClass("lg-thumb-open"))
          })
        }, c.prototype.destroy = function() {
          this.core.s.thumbnail && this.core.$items.length > 1 && (a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),
            this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
        }, a.fn.lightGallery.modules.Thumbnail = c
      }()
    }),
    function(a, b) {
      true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(a) {
          return b(a)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
    }(this, function(a) {
      ! function() {
        "use strict";
        var b = {
            videoMaxWidth: "855px",
            youtubePlayerParams: !1,
            vimeoPlayerParams: !1,
            dailymotionPlayerParams: !1,
            vkPlayerParams: !1,
            videojs: !1,
            videojsOptions: {}
          },
          c = function(c) {
            return this.core = a(c).data("lightGallery"), this.$el = a(c), this.core.s = a.extend({}, b, this.core.s), this.videoLoaded = !1, this.init(), this
          };
        c.prototype.init = function() {
          var b = this;
          b.core.$el.on("hasVideo.lg.tm", function(a, c, d, e) {
            if (b.core.$slide.eq(c).find(".lg-video").append(b.loadVideo(d, "lg-object", !0, c, e)), e)
              if (b.core.s.videojs) try {
                videojs(b.core.$slide.eq(c).find(".lg-html5").get(0), b.core.s.videojsOptions, function() {
                  b.videoLoaded || this.play()
                })
              } catch (a) {
                console.error("Make sure you have included videojs")
              } else b.videoLoaded || b.core.$slide.eq(c).find(".lg-html5").get(0).play()
          }), b.core.$el.on("onAferAppendSlide.lg.tm", function(a, c) {
            var d = b.core.$slide.eq(c).find(".lg-video-cont");
            d.hasClass("lg-has-iframe") || (d.css("max-width", b.core.s.videoMaxWidth), b.videoLoaded = !0)
          });
          var c = function(a) {
            if (a.find(".lg-object").hasClass("lg-has-poster") && a.find(".lg-object").is(":visible"))
              if (a.hasClass("lg-has-video")) {
                var c = a.find(".lg-youtube").get(0),
                  d = a.find(".lg-vimeo").get(0),
                  e = a.find(".lg-dailymotion").get(0),
                  f = a.find(".lg-html5").get(0);
                if (c) c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                else if (d) try {
                    $f(d).api("play")
                  } catch (a) {
                    console.error("Make sure you have included froogaloop2 js")
                  } else if (e) e.contentWindow.postMessage("play", "*");
                  else if (f)
                  if (b.core.s.videojs) try {
                    videojs(f).play()
                  } catch (a) {
                    console.error("Make sure you have included videojs")
                  } else f.play();
                a.addClass("lg-video-playing")
              } else {
                a.addClass("lg-video-playing lg-has-video");
                var g, h, i = function(c, d) {
                  if (a.find(".lg-video").append(b.loadVideo(c, "", !1, b.core.index, d)), d)
                    if (b.core.s.videojs) try {
                      videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0), b.core.s.videojsOptions, function() {
                        this.play()
                      })
                    } catch (a) {
                      console.error("Make sure you have included videojs")
                    } else b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play()
                };
                b.core.s.dynamic ? (g = b.core.s.dynamicEl[b.core.index].src, h = b.core.s.dynamicEl[b.core.index].html, i(g, h)) : (g = b.core.$items.eq(b.core.index).attr("href") || b.core.$items.eq(b.core.index).attr("data-src"), h = b.core.$items.eq(b.core.index).attr("data-html"), i(g, h));
                var j = a.find(".lg-object");
                a.find(".lg-video").append(j), a.find(".lg-video-object").hasClass("lg-html5") || (a.removeClass("lg-complete"), a.find(".lg-video-object").on("load.lg error.lg", function() {
                  a.addClass("lg-complete")
                }))
              }
          };
          b.core.doCss() && b.core.$items.length > 1 && (b.core.s.enableSwipe || b.core.s.enableDrag) ? b.core.$el.on("onSlideClick.lg.tm", function() {
            var a = b.core.$slide.eq(b.core.index);
            c(a)
          }) : b.core.$slide.on("click.lg", function() {
            c(a(this))
          }), b.core.$el.on("onBeforeSlide.lg.tm", function(c, d, e) {
            var f = b.core.$slide.eq(d),
              g = f.find(".lg-youtube").get(0),
              h = f.find(".lg-vimeo").get(0),
              i = f.find(".lg-dailymotion").get(0),
              j = f.find(".lg-vk").get(0),
              k = f.find(".lg-html5").get(0);
            if (g) g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            else if (h) try {
                $f(h).api("pause")
              } catch (a) {
                console.error("Make sure you have included froogaloop2 js")
              } else if (i) i.contentWindow.postMessage("pause", "*");
              else if (k)
              if (b.core.s.videojs) try {
                videojs(k).pause()
              } catch (a) {
                console.error("Make sure you have included videojs")
              } else k.pause();
            j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));
            var l;
            l = b.core.s.dynamic ? b.core.s.dynamicEl[e].src : b.core.$items.eq(e).attr("href") || b.core.$items.eq(e).attr("data-src");
            var m = b.core.isVideo(l, e) || {};
            (m.youtube || m.vimeo || m.dailymotion || m.vk) && b.core.$outer.addClass("lg-hide-download")
          }), b.core.$el.on("onAfterSlide.lg.tm", function(a, c) {
            b.core.$slide.eq(c).removeClass("lg-video-playing")
          })
        }, c.prototype.loadVideo = function(b, c, d, e, f) {
          var g = "",
            h = 1,
            i = "",
            j = this.core.isVideo(b, e) || {};
          if (d && (h = this.videoLoaded ? 0 : 1), j.youtube) i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1", this.core.s.youtubePlayerParams && (i = i + "&" + a.param(this.core.s.youtubePlayerParams)), g = '<iframe class="lg-video-object lg-youtube ' + c + '" width="560" height="315" src="//www.youtube.com/embed/' + j.youtube[1] + i + '" frameborder="0" allowfullscreen></iframe>';
          else if (j.vimeo) i = "?autoplay=" + h + "&api=1", this.core.s.vimeoPlayerParams && (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)), g = '<iframe class="lg-video-object lg-vimeo ' + c + '" width="560" height="315"  src="//player.vimeo.com/video/' + j.vimeo[1] + i + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
          else if (j.dailymotion) i = "?wmode=opaque&autoplay=" + h + "&api=postMessage", this.core.s.dailymotionPlayerParams && (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)), g = '<iframe class="lg-video-object lg-dailymotion ' + c + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + j.dailymotion[1] + i + '" frameborder="0" allowfullscreen></iframe>';
          else if (j.html5) {
            var k = f.substring(0, 1);
            "." !== k && "#" !== k || (f = a(f).html()), g = f
          } else j.vk && (i = "&autoplay=" + h, this.core.s.vkPlayerParams && (i = i + "&" + a.param(this.core.s.vkPlayerParams)), g = '<iframe class="lg-video-object lg-vk ' + c + '" width="560" height="315" src="http://vk.com/video_ext.php?' + j.vk[1] + i + '" frameborder="0" allowfullscreen></iframe>');
          return g
        }, c.prototype.destroy = function() {
          this.videoLoaded = !1
        }, a.fn.lightGallery.modules.video = c
      }()
    }),
    function(a, b) {
      true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(a) {
          return b(a)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
    }(this, function(a) {
      ! function() {
        "use strict";
        var b = function() {
            var a = !1,
              b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            return b && parseInt(b[2], 10) < 54 && (a = !0), a
          },
          c = {
            scale: 1,
            zoom: !0,
            actualSize: !0,
            enableZoomAfter: 300,
            useLeftForZoom: b()
          },
          d = function(b) {
            return this.core = a(b).data("lightGallery"), this.core.s = a.extend({}, c, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()), this
          };
        d.prototype.init = function() {
          var b = this,
            c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
          b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'), b.core.s.useLeftForZoom ? b.core.$outer.addClass("lg-use-left-for-zoom") : b.core.$outer.addClass("lg-use-transition-for-zoom"), this.core.$outer.find(".lg-toolbar").append(c), b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(c, d, e) {
            var f = b.core.s.enableZoomAfter + e;
            a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"), b.zoomabletimeout = setTimeout(function() {
              b.core.$slide.eq(d).addClass("lg-zoomable")
            }, f + 30)
          });
          var d = 1,
            e = function(c) {
              var d, e, f = b.core.$outer.find(".lg-current .lg-image"),
                g = (a(window).width() - f.prop("offsetWidth")) / 2,
                h = (a(window).height() - f.prop("offsetHeight")) / 2 + a(window).scrollTop();
              d = b.pageX - g, e = b.pageY - h;
              var i = (c - 1) * d,
                j = (c - 1) * e;
              f.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c), b.core.s.useLeftForZoom ? f.parent().css({
                left: -i + "px",
                top: -j + "px"
              }).attr("data-x", i).attr("data-y", j) : f.parent().css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)").attr("data-x", i).attr("data-y", j)
            },
            f = function() {
              d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(), d < 1 && (d = 1), e(d)
            },
            g = function(c, e, g, h) {
              var i, j = e.prop("offsetWidth");
              i = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || j;
              var k;
              b.core.$outer.hasClass("lg-zoomed") ? d = 1 : i > j && (k = i / j, d = k || 2), h ? (b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop()) : (b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX, b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY), f(), setTimeout(function() {
                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
              }, 10)
            },
            h = !1;
          b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(a, c) {
            var d = b.core.$slide.eq(c).find(".lg-image");
            d.on("dblclick", function(a) {
              g(a, d, c)
            }), d.on("touchstart", function(a) {
              h ? (clearTimeout(h), h = null, g(a, d, c)) : h = setTimeout(function() {
                h = null
              }, 300), a.preventDefault()
            })
          }), a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
            b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop(), e(d)
          }), a("#lg-zoom-out").on("click.lg", function() {
            b.core.$outer.find(".lg-current .lg-image").length && (d -= b.core.s.scale, f())
          }), a("#lg-zoom-in").on("click.lg", function() {
            b.core.$outer.find(".lg-current .lg-image").length && (d += b.core.s.scale, f())
          }), a("#lg-actual-size").on("click.lg", function(a) {
            g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0)
          }), b.core.$el.on("onBeforeSlide.lg.tm", function() {
            d = 1, b.resetZoom()
          }), b.zoomDrag(), b.zoomSwipe()
        }, d.prototype.resetZoom = function() {
          this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()
        }, d.prototype.zoomSwipe = function() {
          var a = this,
            b = {},
            c = {},
            d = !1,
            e = !1,
            f = !1;
          a.core.$slide.on("touchstart.lg", function(c) {
            if (a.core.$outer.hasClass("lg-zoomed")) {
              var d = a.core.$slide.eq(a.core.index).find(".lg-object");
              f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height(), e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width(), (e || f) && (c.preventDefault(), b = {
                x: c.originalEvent.targetTouches[0].pageX,
                y: c.originalEvent.targetTouches[0].pageY
              })
            }
          }), a.core.$slide.on("touchmove.lg", function(g) {
            if (a.core.$outer.hasClass("lg-zoomed")) {
              var h, i, j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
              g.preventDefault(), d = !0, c = {
                x: g.originalEvent.targetTouches[0].pageX,
                y: g.originalEvent.targetTouches[0].pageY
              }, a.core.$outer.addClass("lg-zoom-dragging"), i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")), h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")), (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? j.css({
                left: h + "px",
                top: i + "px"
              }) : j.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
            }
          }), a.core.$slide.on("touchend.lg", function() {
            a.core.$outer.hasClass("lg-zoomed") && d && (d = !1, a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f))
          })
        }, d.prototype.zoomDrag = function() {
          var b = this,
            c = {},
            d = {},
            e = !1,
            f = !1,
            g = !1,
            h = !1;
          b.core.$slide.on("mousedown.lg.zoom", function(d) {
            var f = b.core.$slide.eq(b.core.index).find(".lg-object");
            h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height(), g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width(), b.core.$outer.hasClass("lg-zoomed") && a(d.target).hasClass("lg-object") && (g || h) && (d.preventDefault(), c = {
              x: d.pageX,
              y: d.pageY
            }, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
          }), a(window).on("mousemove.lg.zoom", function(a) {
            if (e) {
              var i, j, k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
              f = !0, d = {
                x: a.pageX,
                y: a.pageY
              }, b.core.$outer.addClass("lg-zoom-dragging"), j = h ? -Math.abs(k.attr("data-y")) + (d.y - c.y) : -Math.abs(k.attr("data-y")), i = g ? -Math.abs(k.attr("data-x")) + (d.x - c.x) : -Math.abs(k.attr("data-x")), b.core.s.useLeftForZoom ? k.css({
                left: i + "px",
                top: j + "px"
              }) : k.css("transform", "translate3d(" + i + "px, " + j + "px, 0)")
            }
          }), a(window).on("mouseup.lg.zoom", function(a) {
            e && (e = !1, b.core.$outer.removeClass("lg-zoom-dragging"), !f || c.x === d.x && c.y === d.y || (d = {
              x: a.pageX,
              y: a.pageY
            }, b.touchendZoom(c, d, g, h)), f = !1), b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
          })
        }, d.prototype.touchendZoom = function(a, b, c, d) {
          var e = this,
            f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
            g = e.core.$slide.eq(e.core.index).find(".lg-object"),
            h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
            i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
            j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
            k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
            l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
            m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
          (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)), c && (h <= -m ? h = -m : h >= -l && (h = -l)), d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")), c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")), e.core.s.useLeftForZoom ? f.css({
            left: h + "px",
            top: i + "px"
          }) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
        }, d.prototype.destroy = function() {
          var b = this;
          b.core.$el.off(".lg.zoom"), a(window).off(".lg.zoom"), b.core.$slide.off(".lg.zoom"), b.core.$el.off(".lg.tm.zoom"), b.resetZoom(), clearTimeout(b.zoomabletimeout), b.zoomabletimeout = !1
        }, a.fn.lightGallery.modules.zoom = d
      }()
    }),
    function(a, b) {
      true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(a) {
          return b(a)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
    }(this, function(a) {
      ! function() {
        "use strict";
        var b = {
            hash: !0
          },
          c = function(c) {
            return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.hash && (this.oldHash = window.location.hash, this.init()), this
          };
        c.prototype.init = function() {
          var b, c = this;
          c.core.$el.on("onAfterSlide.lg.tm", function(a, b, d) {
            history.replaceState ? history.replaceState(null, null, "#lg=" + c.core.s.galleryId + "&slide=" + d) : window.location.hash = "lg=" + c.core.s.galleryId + "&slide=" + d
          }), a(window).on("hashchange.lg.hash", function() {
            b = window.location.hash;
            var a = parseInt(b.split("&slide=")[1], 10);
            b.indexOf("lg=" + c.core.s.galleryId) > -1 ? c.core.slide(a, !1, !1) : c.core.lGalleryOn && c.core.destroy()
          })
        }, c.prototype.destroy = function() {
          this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "", this.core.$el.off(".lg.hash"))
        }, a.fn.lightGallery.modules.hash = c
      }()
    }),
    function(a, b) {
      true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(a) {
          return b(a)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
    }(this, function(a) {
      ! function() {
        "use strict";
        var b = {
            share: !0,
            facebook: !0,
            facebookDropdownText: "Facebook",
            twitter: !0,
            twitterDropdownText: "Twitter",
            googlePlus: !0,
            googlePlusDropdownText: "GooglePlus",
            pinterest: !0,
            pinterestDropdownText: "Pinterest"
          },
          c = function(c) {
            return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.share && this.init(), this
          };
        c.prototype.init = function() {
          var b = this,
            c = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
          c += b.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + "</span></a></li>" : "", c += b.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + "</span></a></li>" : "", c += b.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + "</span></a></li>" : "", c += b.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + "</span></a></li>" : "", c += "</ul></span>", this.core.$outer.find(".lg-toolbar").append(c), this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'), a("#lg-share").on("click.lg", function() {
            b.core.$outer.toggleClass("lg-dropdown-active")
          }), a("#lg-dropdown-overlay").on("click.lg", function() {
            b.core.$outer.removeClass("lg-dropdown-active")
          }), b.core.$el.on("onAfterSlide.lg.tm", function(c, d, e) {
            setTimeout(function() {
              a("#lg-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(b.core.$items.eq(e).attr("data-facebook-share-url") || window.location.href)), a("#lg-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + b.core.$items.eq(e).attr("data-tweet-text") + "&url=" + encodeURIComponent(b.core.$items.eq(e).attr("data-twitter-share-url") || window.location.href)), a("#lg-share-googleplus").attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(b.core.$items.eq(e).attr("data-googleplus-share-url") || window.location.href)), a("#lg-share-pinterest").attr("href", "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(b.core.$items.eq(e).attr("data-pinterest-share-url") || window.location.href) + "&media=" + encodeURIComponent(b.core.$items.eq(e).attr("href") || b.core.$items.eq(e).attr("data-src")) + "&description=" + b.core.$items.eq(e).attr("data-pinterest-text"))
            }, 100)
          })
        }, c.prototype.destroy = function() {}, a.fn.lightGallery.modules.share = c
      }()
    });

    /***/
  }),
  /* 8 */
  /***/
  (function(module, exports) {

    /*
        Ищем вставки ссылки на youtube.
     */
    var parseYoutubeLink = function parseYoutubeLink(slides) {
      slides.each(function(index) {
        var slide = slides.eq(index),
          link = slide.data('yt');

        if (link) {
          link = link.substr(link.indexOf('v=') + 2);

          // Подменяем картинку в слайде на youtube первью.
          slide.find('img').attr('src', 'https://img.youtube.com/vi/' + link + '/default.jpg');
        }
      });
    };

    /**
     * Слайдер превью.
     * @type {Swiper|*}
     */
    var lg = '';
    var objPreview = new Swiper('.object-card__slider-preview .swiper-container', {
      onInit: function onInit(swiper) {
        lg = $(".object-card__slider-preview .swiper-container").lightGallery({
          selector: '.swiper-wrapper .swiper-slide'
        });
      },
      onSlideChangeStart: function onSlideChangeStart(swiper) {
        objThumbs.slideTo(swiper.realIndex);
      }
    });

    /**
     * Слайдер табнейлов.
     * @type {Swiper|*}
     */

    var objThumbsPrev = $('.object-card__slide-prev');
    var objThumbsNext = $('.object-card__slide-next');

    var objThumbs = new Swiper('.object-card__slider .swiper-container', {
      slidesPerView: 7,
      spaceBetween: 15,
      centeredSlides: true,
      slideToClickedSlide: true,
      onInit: function onInit() {
        var slides = $('.object-card__slider .swiper-slide'),
          offsetLeft = parseInt($('.object-card__slider .swiper-wrapper').css('transform').split(',')[4]);

        $('.object-card__slider .swiper-wrapper').css('left', '-' + offsetLeft + 'px');

        parseYoutubeLink(slides);
      },
      onAfterResize: function onAfterResize() {
        var offsetLeft = parseInt($('.object-card__slider .swiper-wrapper').css('transform').split(',')[4]);

        $('.object-card__slider .swiper-wrapper').css('left', '-' + offsetLeft + 'px');
      },
      onSlideChangeStart: function onSlideChangeStart(swiper) {
        objPreview.slideTo(swiper.realIndex);
      },


      breakpoints: {
        320: {
          slidesPerView: 2
        },
        400: {
          slidesPerView: 3
        },
        480: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 5
        },
        1200: {
          slidesPerView: 6
        }
      }
    });

    objThumbsPrev.on('click', function() {
      objThumbs.slidePrev();
    });

    objThumbsNext.on('click', function() {
      objThumbs.slideNext();
    });

    /***/
  }),
  /* 9 */
  /***/
  (function(module, exports) {

    /*
        Слайдер: Благодарственные письма
     */

    if ($('.messages').length) {
      var messagesSliderCurrent = 1;

      var messagesSlider = new Swiper('.messages .swiper-container', {
        pagination: '.messages .swiper-pagination',
        slidesPerView: 3,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30,
        slidesPerGroup: 3,
        onInit: function onInit(swiper) {
          // Выводим общие количество слайдов.
          $('.messages .messages__count-total').html(Math.ceil(swiper.slides.length / 6));

          $(".messages #messages-gallery").lightGallery({
            selector: 'a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]'
          });
        },

        onSlidePrevStart: function onSlidePrevStart() {
          if (messagesSliderCurrent <= 0) {
            messagesSliderCurrent = 1;
          }

          // Выводим номер текущего слайда.
          $('.messages .messages__count-current').html(messagesSliderCurrent -= 1);
        },
        onSlideNextStart: function onSlideNextStart() {
          // Выводим номер текущего слайда.
          $('.messages .messages__count-current').html(messagesSliderCurrent += 1);
        },
        breakpoints: {
          // when window width is <= 640px
          692: {
            slidesPerView: 2
          }
        }
      });

      var messagesSliderPrev = $('.messages .messages__control--prev');
      var messagesSliderNext = $('.messages .messages__control--next');

      messagesSliderPrev.on('click', function() {
        messagesSlider.slidePrev();
      });

      messagesSliderNext.on('click', function() {
        messagesSlider.slideNext();
      });
    }

    /*
        Слайдер: Благодарственные письма на главной
     */
    var messagesSliderIndexCurrent = 1;

    var messagesSliderIndex = new Swiper('.belt-messages .swiper-container', {
      pagination: '.belt-messages .swiper-pagination',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      onInit: function onInit(swiper) {
        // Выводим общие количество слайдов.
        $('.belt-messages .messages__count-total').html(Math.ceil(swiper.slides.length));

        $("#lg-homepage-messages").lightGallery({
          selector: 'a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]'
        });
      },

      onSlidePrevStart: function onSlidePrevStart() {
        // Выводим номер текущего слайда.
        $('.belt-messages .messages__count-current').html(messagesSliderIndexCurrent -= 1);
      },
      onSlideNextStart: function onSlideNextStart() {
        // Выводим номер текущего слайда.
        $('.belt-messages .messages__count-current').html(messagesSliderIndexCurrent += 1);
      }
    });

    var messagesSliderIndexPrev = $('.belt-messages .messages__control--prev');
    var messagesSliderIndexNext = $('.belt-messages .messages__control--next');

    messagesSliderIndexPrev.on('click', function() {
      messagesSliderIndex.slidePrev();
    });

    messagesSliderIndexNext.on('click', function() {
      messagesSliderIndex.slideNext();
    });

    /***/
  }),
  /* 10 */
  /***/
  (function(module, exports) {

    /*
        Слайдер "Партнеры"
     */
    var slider_partners = new Swiper('.slider-partners .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 0,
      breakpoints: {
        768: {
          slidesPerView: 1
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    });

    $('.slider-partners__control-prev').click(function() {
      slider_partners.slidePrev();
    });

    $('.slider-partners__control-next').click(function() {
      slider_partners.slideNext();
    });

    /***/
  }),
  /* 11 */
  /***/
  (function(module, exports) {

    // removed by extract-text-webpack-plugin

    /***/
  })
  /******/
]);
