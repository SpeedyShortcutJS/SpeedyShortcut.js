/**
 * @file JavaScript object helpers.
 * 
 * @author JN
 * 
 * @version 1.0.0
 */

/**
 * Merge two or more objects. Returns a new object.
 * @private
 * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
 * @param {Object}   objects  The objects to merge together
 * @returns {Object}          Merged values of defaults and options
 */
var extendObj = function(defaults, options) {
	var a = Object.create(target);
	
	Object.keys(source).map(function (prop) {
		prop in a && (a[prop] = source[prop]);
	});
	
	return a;
},
deepExtend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj)
      continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object')
          deepExtend(out[key], obj[key]);
        else
          out[key] = obj[key];
      }
    }
  }

  return out;
},
/**
 * A simple forEach() implementation for Arrays, Objects and NodeLists.
 * @private
 * @author Todd Motto
 * @link   https://github.com/toddmotto/foreach
 * @param {Array|Object|NodeList} collection Collection of items to iterate
 * @param {Function}              callback   Callback function for each iteration
 * @param {Array|Object|NodeList} scope      Object/NodeList/Array that forEach is iterating over (aka `this`)
 */
forEachObj = function(collection, callback, scope) {
	for ( var prop in collection ) {
		if ( Object.prototype.hasOwnProperty.call( collection, prop ) ) {
			callback.call( scope, collection[prop], prop, collection );
		}
	}
};
