import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import HandlebarsEditing from './handlebarsediting';
import HandlebarsUI from './handlebarsui';

import './handlebars.css';

export default class Handlebars extends Plugin {
	static get requires() {
		return [ HandlebarsEditing, HandlebarsUI ];
	}

	static get pluginName() {
		return 'Handlebars';
	}
}
