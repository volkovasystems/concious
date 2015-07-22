// This is taken from
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// I just modified the code formats to my liking.
if( typeof Object.create != "function" ){
    // Production steps of ECMA-262, Edition 5, 15.2.3.5
    // Reference: http://es5.github.io/#x15.2.3.5
    Object.create = ( function module( ){
        // To save on memory, use a shared constructor
        function Temp( ) { }

        // make a safe reference to Object.prototype.hasOwnProperty
        var hasOwn = Object.prototype.hasOwnProperty;

        return function module( O ){
            // 1. If Type(O) is not Object or Null throw a TypeError exception.
            if( typeof O != "object" ){
                throw TypeError( "Object prototype may only be an Object or null" );
            }

            // 2. Let obj be the result of creating a new object as if by the
            //    expression new Object() where Object is the standard built-in
            //    constructor with that name
            // 3. Set the [[Prototype]] internal property of obj to O.
            Temp.prototype = O;
            var obj = new Temp( );
            Temp.prototype = null; // Let's not keep a stray reference to O...

            // 4. If the argument Properties is present and not undefined, add
            //    own properties to obj as if by calling the standard built-in
            //    function Object.defineProperties with arguments obj and
            //    Properties.
            if( arguments.length > 1 ){
                // Object.defineProperties does ToObject on its first argument.
                var Properties = Object( arguments[ 1 ] );
                for( var prop in Properties ){
                    if( hasOwn.call( Properties, prop ) ){
                        obj[ prop ] = Properties[ prop ];
                    }
                }
            }

            // 5. Return obj
            return obj;
        };
    } )( );
}

/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"packageName": "inherits",
			"fileName": "inherits.js",
			"moduleName": "inherits",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/inherits.git",
			"testCase": "inherits-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:
        This is just a copy of NodeJS' util.inherits method.

        This is made for the client side use.

        This will return the child class.

        Please refer to their documentation.
        @link:https://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor
    @end-module-documentation
*/
var inherits = function inherits( child, parent ){
    child.parent = parent;

    child.prototype = Object.create( parent.prototype, {
        "constructor": {
            "value": child,
            "enumerable": false,
            "writable": true,
            "configurable": true
        }
    } );

    return child;
};