import InlineAutoformatEditing from '@ckeditor/ckeditor5-autoformat/src/inlineautoformatediting';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

/**
 * Enables a set of predefined autoformatting actions.
 *
 * For a detailed overview, check the {@glink features/autoformat Autoformatting feature documentation}
 * and the {@glink api/autoformat package page}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class SbpAutoformat extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'SbpAutoformat';
	}

	/**
	 * @inheritDoc
	 */
	afterInit() {
		this._addHandlebarAutoformats();
	}

	/**
	 * Adds autoformatting related to the handlebars
	 *
	 * When typed:
	 * - `{{foobar}}` &ndash; the inline block is set to be in a handlebars tag
	 *
	 * @private
	 */
	_addHandlebarAutoformats() {
		const commands = this.editor.commands;

		if ( commands.get( 'handlebars' ) ) {
			/* eslint-disable no-new */
			const handlebarsCallback = getCallbackFunctionForInlineAutoformat( this.editor, 'handlebars' );

			new InlineAutoformatEditing( this.editor, /()(\{\{[^*]+\}\})()$/g, handlebarsCallback );
			/* eslint-enable no-new */
		}
	}
}

// Helper function for getting `InlineAutoformatEditing` callbacks that checks if command is enabled.
//
// @param {module:core/editor/editor~Editor} editor
// @param {String} attributeKey
// @returns {Function}
function getCallbackFunctionForInlineAutoformat( editor, attributeKey ) {
	return ( writer, rangesToFormat ) => {
		const command = editor.commands.get( attributeKey );

		if ( !command.isEnabled ) {
			return false;
		}

		const validRanges = editor.model.schema.getValidRanges( rangesToFormat, attributeKey );

		for ( const range of validRanges ) {
			writer.setAttribute( attributeKey, true, range );
		}

		// After applying attribute to the text, remove given attribute from the selection.
		// This way user is able to type a text without attribute used by auto formatter.
		writer.removeSelectionAttribute( attributeKey );
	};
}
