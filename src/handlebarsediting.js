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
		editor.model.schema.setAttributeProperties( HANDLEBARS, {
			isFormatting: true,
			copyOnEnter: true
		} );

		editor.conversion.attributeToElement( {
			model: HANDLEBARS,
			view: 'handlebars',
			upcastAlso: {
				styles: {
					'word-wrap': 'break-word'
				}
			}
		} );

		// Create code command.
		editor.commands.add( HANDLEBARS, new AttributeCommand( editor, HANDLEBARS ) );
	}
}
