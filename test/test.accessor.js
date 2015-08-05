/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Deep close to:
	deepCloseTo = require( './utils/deepcloseto.js' ),

	// Module to be tested:
	ekurtosis = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor ekurtosis', function tests() {

	it( 'should export a function', function test() {
		expect( ekurtosis ).to.be.a( 'function' );
	});

	it( 'should compute the distribution ekurtosis using an accessor', function test() {
		var lambda, actual, expected;

		lambda = [
			{'lambda':-1},
			{'lambda':0},
			{'lambda':0.5},
			{'lambda':1}
		];
		actual = new Array( lambda.length );

		actual = ekurtosis( actual, lambda, getValue );
		expected = [ NaN, NaN, 6, 6 ];

		assert.isTrue( deepCloseTo( actual, expected, 1e-5 ) );

		function getValue( d ) {
			return d.lambda;
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( ekurtosis( [], [], getValue ), [] );
		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var lambda, actual, expected;

		lambda = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = new Array( lambda.length );
		actual = ekurtosis( actual, lambda, getValue );

		expected = [ NaN, NaN, NaN, NaN ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

});
