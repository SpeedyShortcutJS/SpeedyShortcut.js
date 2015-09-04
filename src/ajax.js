/**
 * @file For JavaScript element selectors shortcuts.
 * 
 * @author JN
 * 
 * @version 1.0.0
 */

var ajax = function(url, success, error) {
	
	// Feature detection
    if ( !window.XMLHttpRequest ) return;

    // Create new request
    var request = new XMLHttpRequest();

    // Setup callbacks
    request.onreadystatechange = function () {

        // If the request is complete
        if ( request.readyState === 4 ) {

            // If the request failed
            if ( request.status !== 200 ) {
                if ( error && typeof error === 'function' ) {
                    error( request.responseText, request );
                }
                return;
            }

            // If the request succeeded
            if ( success && typeof success === 'function' ) {
                success( request.responseText, request );
            }
        }

    };

    // Get the HTML
    request.open( 'GET', url );
    request.send();
},
ajaxText = function() {
	
},
ajaxHTML = function() {
	
},
ajaxJSON = function() {
	
},
ajaxJSONP = function(url, callback) {
	
	// Create script with url and callback (if specified)
	var ref = window.document.getElementsByTagName( 'script' )[ 0 ],
		script = window.document.createElement( 'script' );

	script.src = url + (url.indexOf( '?' ) + 1 ? '&' : '?') + 'callback=' + callback;
	
	// Insert script tag into the DOM (append to <head>)
	ref.parentNode.insertBefore( script, ref );
	
	// After the script is loaded (and executed), remove it
	script.onload = function () {
		this.remove();
	};
};
