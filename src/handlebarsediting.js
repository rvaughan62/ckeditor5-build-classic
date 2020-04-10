/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/code/codeediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';

const HANDLEBARS = 'handlebars';
const CODE = 'code';

export default class HandlebarsEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'HandlebarsEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		editor.model.schema.extend( '$text', { allowAttributes: HANDLEBARS } );
		editor.model.schema.setAttributeProperties( CODE, {
			isFormatting: true,
			copyOnEnter: true,
			class: HANDLEBARS
		} );

		editor.conversion.attributeToElement( {
			model: HANDLEBARS,
			view: { name: CODE, classes: HANDLEBARS }
		} );

		// Create code command.
		editor.commands.add( HANDLEBARS, new AttributeCommand( editor, HANDLEBARS ) );
	}
}
