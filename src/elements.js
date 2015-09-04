/**
 * @file For JavaScript element selectors shortcuts.
 * 
 * @author JN
 * 
 * @version 1.0.0
 */

/**
 * @function docElName
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener|EventTarget.addEventListener}
 * @param {string}	name				- The name of the element.
 */
var docElName = function(name) {
	return document.getElementByName(name);
},
/**
 * @function docElClass
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener|EventTarget.addEventListener}
 * @param {string}	name				- The name of the element.
 */
docElClass = function(name) {
	return document.getElementByClassName(name);
},
elClass = function(el, name) {
	return el.getElementByClassName(name);
},
docElId = function(id) {
	return document.getElementById(id);
},
docElQuery = function(query) {
	return document.querySelector(query);
},
docElQueryAll = function(query) {
	return document.querySelector(query);
},
elQuery = function(el, query) {
	return el.querySelector(query);
},
elQueryAll = function(el, query) {
	return el.querySelectorAll(query);
},
isDocElName = function(name) {
	return !!document.getElementByName(name);
},
isDocElClass = function(className) {
	return !!document.getElementByClassName(className);
},
isDocElId = function(id) {
	return !!document.getElementById(id);
},
isDocElQuery = function(query) {
	return !!document.querySelector(query);
},
isDocElQueryAll = function(query) {
	return !!document.querySelector(query);
},
isElQuery = function(el, query) {
	return !!el.querySelector(query);
},
isElQueryAll = function(el, query) {
	return !!el.querySelectorAll(query);
},
forEachEls = function(els, callbackFunc) {
	if(!(targets instanceof Array)){
		throw 'forEls: ...';
	}
	
	for(var i = 0; i < els.length; ++i) {
		callbackFunc(els[i]);
	}
},
containsClass = function(e, className) {
	return el.classList.contains(className);
},
addClass = function(el, className) {
	return el.classList.add(className);
},
removeClass = function(el, className) {
	return el.classList.remove(className);
},
toggleClass = function(el, className) {
	return el.classList.toggle(className);
},
newEl = function(name) {
	return document.createElement(name);
},
appendEl = function(el, appEl) {
	return el.appendChild(appEl);
},
prependEl = function(parentEl, newChild, refChild) {
	return parentEl.insertBefore(newChild, refChild);
},
afterEl = function(el, htmlString) {
	return el.insertAdjacentHTML('afterend', htmlString);
},
beforeEl = function(el, htmlString) {
	return el.insertAdjacentHTML('beforebegin', htmlString);
},
elChildren = function(el) {
	return el.chilren;
},
cloneEl = function(el) {
	return el.cloneNode(true);
},
removeEl = function(el) {
	return el.parentNode.removeChild(el);
},
emptyEl = function(el) {
	el.innerHTML = null;
},
parentEl = function(el) {
	return el.parentNode;
},
elContains = function(el,child) {
	return el !== child && el.contains(child);
},
elFilter = function(selector,filterFn) {
	return Array.prototype.filter.call(document.querySelectorAll(selector), filterFn);
},
/**
 * @function isElMatches
 * @description Compare two elements, returns true if same element.
 * @param {Element} el
 * @param {Element} otherEl
 */
isElMatches = function(el,otherEl) {
	return el === otherEl;
},
/**
 * @function  isElSelectorMatches
 * @description Matches Selector.
 * @param {Element} el
 * @param {String} selector
 */
isElSelectorMatches = function(el,selector) {
	return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
},
/**
 * @functionelStyle
 * @description Get an element style.
 * @param {Element} el
 * @param {string} ruleName
 */
elStyle = function(el,ruleName) {
	return getComputedStyle(el)[ruleName];
},
/**
 * @function closestEl
 * @param {element} elem
 * @param {string} selector
 * @example var elem = document.querySelector('#some-element'); var closest = getClosest(elem, '.some-class'); var closestLink = getClosest(elem, 'a'); var closestExcludingElement = getClosest(elem.parentNode, '.some-class');
 */
closestEl = function (elem, selector) {
	var firstChar = selector.charAt(0);
	
	// Get closest match
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		// If selector is a class
		if ( firstChar === '.' ) {
			if ( elem.classList.contains( selector.substr(1) ) ) {
				return elem;
			}
		}
		
		// If selector is an ID
		if ( firstChar === '#' ) {
			if ( elem.id === selector.substr(1) ) {
				return elem;
			}
		}
		
		// If selector is a data attribute 
		if ( firstChar === '[' ) {
			if ( elem.hasAttribute( selector.substr(1, selector.length - 2) ) ) {
				return elem;
			}
		}
		
		// If selector is a tag
		if ( elem.tagName.toLowerCase() === selector ) {
			return elem;
		}

	}
	
	return false;
},
/**
 * @function parentsEl
 * @param {element} elem
 * @param {string} selector
 * @example var elem = document.querySelector('#some-element'); var parents = getParents(elem, '.some-class'); var allParents = getParents(elem.parentNode);
 */
parentsEl = function(elem, selector) {
	var parents = [];
	
	if ( selector ) {
		var firstChar = selector.charAt(0);
	}
	
	// Get matches
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( selector ) {
			// If selector is a class
			if ( firstChar === '.' ) {
				if ( elem.classList.contains( selector.substr(1) ) ) {
					parents.push( elem );
				}
			}
			
			// If selector is an ID
			if ( firstChar === '#' ) {
				if ( elem.id === selector.substr(1) ) {
					parents.push( elem );
				}
			}
			
			// If selector is a data attribute
			if ( firstChar === '[' ) {
				if ( elem.hasAttribute( selector.substr(1, selector.length - 1) ) {
					parents.push( elem );
				}
			}
			
			// If selector is a tag
			if ( elem.tagName.toLowerCase() === selector ) {
				parents.push( elem );
			}
		} else {
			parents.push( elem );
		}
	}
	
	// Return parents if any exist
	if ( parents.length === 0 ) {
		return null;
	} else {
		return parents;
	}

},
/**
 * @function parentsElUntil
 * @param {element} elem
 * @param {string} parent
 * @param {string} selector
 */
parentsElUntil = function (elem, parent, selector) {
	var parents = [];
	
	if ( parent ) {
		var parentType = parent.charAt(0);
	}
	
	if ( selector ) {
		var selectorType = selector.charAt(0);
	}
	
	// Get matches
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		// Check if parent has been reached
		if ( parent ) {
			// If parent is a class
			if ( parentType === '.' ) {
				if ( elem.classList.contains( parent.substr(1) ) ) {
					break;
				}
			}
		
			// If parent is an ID
			if ( parentType === '#' ) {
				if ( elem.id === parent.substr(1) ) {
					break;
				}
			}
			
			// If parent is a data attribute
			if ( parentType === '[' ) {
				if ( elem.hasAttribute( parent.substr(1, parent.length - 1) ) ) {
					break;
				}
			}
			
			// If parent is a tag
			if ( elem.tagName.toLowerCase() === parent ) {
				break;
			}
		}
		
		if ( selector ) {
			// If selector is a class
			if ( selectorType === '.' ) {
				if ( elem.classList.contains( selector.substr(1) ) ) {
					parents.push( elem );
				}
			}
			
			// If selector is an ID
			if ( selectorType === '#' ) {
				if ( elem.id === selector.substr(1) ) {
					parents.push( elem );
				}
			}
			
			// If selector is a data attribute
			if ( selectorType === '[' ) {
				if ( elem.hasAttribute( selector.substr(1, selector.length - 1) ) ) {
					parents.push( elem );
				}
			}
			
			// If selector is a tag
			if ( elem.tagName.toLowerCase() === selector ) {
				parents.push( elem );
			}
			
		} else {
			parents.push( elem );
		}
		
	}
	
	// Return parents if any exist
	
	if ( parents.length === 0 ) {
		return null;
	} else {
		return parents;
	}
},
/**
 * @function elSiblings
 * @param {element} elem
 * @return {element} siblings
 */
elSiblings = function (elem) {
	var siblings = [],
		sibling = elem.parentNode.firstChild;
	
	for ( ; sibling; sibling = sibling.nextSibling ) {
		if ( sibling.nodeType === 1 && sibling !== elem ) {
			siblings.push( sibling );
		}
	}
	
	return siblings;
},
/**
 * @function elNextSibling
 * @description Get the next sibling.
 * @param {Element} el
 */
elNextSibling = function(el) {
	return el.nextElementSibling;
},
outerHeight(el) {
	var height = el.offsetHeight,
		style = getComputedStyle(el);
	
	height += parseInt(style.marginTop) + parseInt(style.marginBottom);
	return height;
},
outerWidth(el) {
	var width = el.offsetWidth,
		style = getComputedStyle(el);
	
	width += parseInt(style.marginLeft) + parseInt(style.marginRight);
	return width;
},
/**
 * @function elHeight
 * @description elHeight to get element height.
 * It’s a lot trickier in native JS than it should be,
 * because there are multiple APIs for getting height,
 * and they all return slightly different measurements.
 * @param {Element} el
 * @return {Number}
 */
elHeight = function(el) {
	return Math.max( el.scrollHeight, el.offsetHeight, el.clientHeight );
},
/**
 * Reset the content height to 'auto'
 * @private
 * @param  {Element} content The content area to set to height: auto
 */
resetHeight = function ( content ) {
	content.style.height = '';
	content.style.minHeight = '';
},
/**
 * @function elDistance
 * @description Get an element's distance from the top of the Document.
 * @param  {Node} elem The element
 * @return {Number}    Distance from the top in pixels
 */
elDistance = function (el) {
	var location = 0;
	
    if (el.offsetParent) {
        do {
            location += el.offsetTop;
            el = el.offsetParent;
        } while (el);
    }

    return location >= 0 ? location : 0;
},
/**
 * @function docHeight
 * @description The document height
 * @return {Number} document height
 */
docHeight = function () {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );
},
/**
 * @function isInViewport
 * @param {Element} el
 * @return {Number} 
 */
isInViewport = function ( el ) {
    var distance = el.getBoundingClientRect();
    
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
