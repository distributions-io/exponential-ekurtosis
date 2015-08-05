'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// EKURTOSIS //

/**
* FUNCTION ekurtosis( lambda )
*	Computes the distribution ekurtosis for a exponential distribution with parameter lambda.
*
* @param {Number} lambda - rate parameter
* @returns {Number} distribution ekurtosis
*/
function ekurtosis( lambda ) {
	if ( !isPositive( lambda ) ) {
		return NaN;
	}
	return 6;
} // end FUNCTION ekurtosis()


// EXPORTS

module.exports =  ekurtosis;
