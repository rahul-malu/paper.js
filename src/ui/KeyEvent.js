/*
 * Paper.js
 *
 * This file is part of Paper.js, a JavaScript Vector Graphics Library,
 * based on Scriptographer.org and designed to be largely API compatible.
 * http://paperjs.org/
 * http://scriptographer.org/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * Copyright (c) 2011, Juerg Lehni & Jonathan Puckey
 * http://lehni.org/ & http://jonathanpuckey.com/
 *
 * All rights reserved.
 */

var KeyEvent = this.KeyEvent = Event.extend(new function() {
	return {
		/** @lends KeyEvent# */

		beans: true,

		/**
		 * @name KeyEvent
		 * @constructor
		 * 
		 * @class KeyEvent The KeyEvent object is received by the {@link Tool}'s
		 * keyboard handlers {@link Tool#onKeyDown}, {@link Tool#onKeyUp},
		 * The KeyEvent object is the only parameter passed to these functions
		 * and contains information about the keyboard event.
		 */
		initialize: function(down, key, character, event) {
			this.base(event);
			this.type = down ? 'keydown' : 'keyup';
			this.key = key;
			this.character = character;
		},

		/**
		 * The type of key event.
		 * 
		 * @return {string} the type of key event: 'keydown' or 'keyup'
		 * @name KeyEvent#type
		 */

		/**
		 * The string character of the key that caused this key event.
		 * 
		 * @name KeyEvent#character
		 * @return {string} the key character.
		 */

		/**
		 * Specifies the virtual key code of the key that caused this key event.
		 * 
		 * @name KeyEvent#key
		 * @return the virtual key code.
		 */

		/**
		 * @return {string} A string representation of the key event.
		 */
		toString: function() {
			return '{ type: ' + this.type 
					+ ', key: ' + this.key
					+ ', character: ' + this.character
					+ ', modifiers: ' + this.getModifiers()
					+ ' }';
		}
	};
});
