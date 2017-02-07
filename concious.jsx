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

import "./concious.css";

import harden from "harden";

import { default as Component } from "component";
import { default as Icon } from "icon";
import { default as Label } from "label";
import { default as Indicator } from "indicator";
import { default as Button } from "button";
import { default as Control } from "control";
import { default as Plate } from "plate";
import { default as Header } from "header";
import { default as Item } from "item";
import { default as List } from "list";
import { default as Select } from "select";
import { default as Input } from "input";
import { default as TextInput } from "text-input";
import { default as NoteInput } from "note-input";
import { default as ToggleInput } from "toggle-input";
import { default as RangeInput } from "range-input";
import { default as ListInput } from "list-input";
import { default as Connect } from "connect";

harden( "Component", Component );
harden( "Icon", Icon );
harden( "Label", Label );
harden( "Indicator", Indicator );
harden( "Button", Button );
harden( "Control", Control );
harden( "Plate", Plate );
harden( "Header", Header );
harden( "Item", Item );
harden( "List", List );
harden( "Select", Select );
harden( "Input", Input );
harden( "TextInput", TextInput );
harden( "NoteInput", NoteInput );
harden( "ToggleInput", ToggleInput );
harden( "RangeInput", RangeInput );
harden( "ListInput", ListInput );
harden( "Connect", Connect );

export {
	Component,
	Icon,
	Label,
	Indicator,
	Button,
	Control,
	Plate,
	Header,
	Item,
	List,
	Select,
	Input,
	TextInput,
	NoteInput,
	ToggleInput,
	RangeInput,
	ListInput,
	Connect
};
