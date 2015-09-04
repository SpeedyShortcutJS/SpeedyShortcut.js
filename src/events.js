/**
 * @file For JavaScript event helper functions.
 * 
 * @author JN
 * 
 * @version 1.0.0
 */

/**
 * @function addEvent
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener|EventTarget.addEventListener}
 * @param {{element|object}} target		- The element to which to add the events to.
 * @param {string}	events				- The event list.
 * @param {callback} handler			- The callback to call when the events are fired.
 * @param {boolean} useCapture			- If true, useCapture indicates that the user wishes to initiate capture.
 * @param {array} args					- Arguments to used in the callback.
 */
var addEvent = function(el,event,handler,useCapture) {
	el.addEventListener(event,handlerFn,useCapture);
},
/**
 * @function addMultiListeners
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener|EventTarget.addEventListener}
 * @param {{element|object}} target		- The element to which to add the events to.
 * @param {string}	events				- The event list.
 * @param {callback} handler			- The callback to call when the events are fired.
 * @param {boolean} useCapture			- If true, useCapture indicates that the user wishes to initiate capture.
 * @param {array} args					- Arguments to used in the callback.
 */
addEvents = function(target,events,handler,useCapture,args) {
	if (!(events instanceof Array)) {
		throw 'addMultipleListeners: please supply an array of eventstrings';
	}

	//create a wrapper for to be able to use additional arguments
	var handlerFn = function(e) {
		handler.apply(this, args && args instanceof Array ? args : []);
	}

	for (var i=0;i<events.length;i+=1) {
		target.addEventListener(events[i],handlerFn,useCapture);
	}
},
/**
 * @function addMultiListeners
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener|EventTarget.addEventListener}
 * @param {{element|object}} target		- The element to which to add the events to.
 * @param {string}	events				- The event list.
 * @param {callback} handler			- The callback to call when the events are fired.
 * @param {boolean} useCapture			- If true, useCapture indicates that the user wishes to initiate capture.
 * @param {array} args					- Arguments to used in the callback.
 */
elsAddEvent = function(els,event,handler,useCapture,args) {
	if(!(targets instanceof Array)) {
		throw 'elsAddEvent: the element is neither a string nor an array';
	}
	
	//create a wrapper for to be able to use additional arguments
	var handlerFn = function(e) {
			handler.apply(this, args && args instanceof Array ? args : []);
	}

	for(var i=0;i<els.length;++i) {
		if(!!els[i]) {
			els[i].addEventListener(events,handlerFn,useCapture);
		}
	}
},
/**
 * @function addMultiListeners
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener|EventTarget.addEventListener}
 * @param {{element|object}} target		- The element to which to add the events to.
 * @param {string}	events				- The event list.
 * @param {callback} handler			- The callback to call when the events are fired.
 * @param {boolean} useCapture			- If true, useCapture indicates that the user wishes to initiate capture.
 * @param {array} args					- Arguments to used in the callback.
 */
elsAddEvents = function(els,events,handler,useCapture,args) {
	if(!(targets instanceof Array) || !(events instanceof Array)) {
		throw 'addEvent: the element is neither a string nor an array';
	}
	
	//create a wrapper for to be able to use additional arguments
	var handlerFn = function(e) {
			handler.apply(this, args && args instanceof Array ? args : []);
	}

	for(var i=0;i<els.length;++i) {
		if(!!els[i]) {
			for (var y=0;y<events.length;y+=1) {
				els[i].addEventListener(events[y],handlerFn,useCapture);
			}
		}
	}
},
removeEvent = function(el, eventName, eventHandler) {
	el.removeEventListener(eventName, eventHandler);
};
