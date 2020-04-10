import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import codeIcon from './handlebars.svg';

import './handlebars.css';

const HANDLEBARS = 'handlebars';

export default class HandlebarsUI extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add code button to feature components.
		editor.ui.componentFactory.add( HANDLEBARS, locale => {
			const command = editor.commands.get( HANDLEBARS );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Template' ),
				icon: codeIcon,
				tooltip: true,
				isToggleable: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => {
				editor.execute( HANDLEBARS );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
