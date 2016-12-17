"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

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
			"package": "concious",
			"path": "concious/concious.js",
			"file": "concious.js",
			"module": "concious",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/concious.git",
			"test": "concious-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		ReactJS based Concise UI Framework.
	@end-module-documentation

	@include:
		{
			"Button": "button",
			"Label": "label"
		}
	@end-include
*/

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Label = exports.Button = undefined;

var _harden = require("harden");

var _harden2 = _interopRequireDefault(_harden);

var _button = require("button");

var _button2 = _interopRequireDefault(_button);

var _label = require("label");

var _label2 = _interopRequireDefault(_label);

require("./concious.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _harden2.default)("Button", _button2.default);
(0, _harden2.default)("Label", _label2.default);

exports.Button = _button2.default;
exports.Label = _label2.default;
