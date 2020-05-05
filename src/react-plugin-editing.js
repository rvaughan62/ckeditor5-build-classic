import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { toWidget } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import InsertReactComponentCommand from './insert-react-component-command';

export default class ReactPluginEditing extends Plugin {
	static get requires() {
		return [ Widget ];
	}

	init() {
		if ( this.editor.config.get( 'react' ) ) {
			this._defineSchema();
			this._defineConverters();

			this.editor.config.get( 'react' ).forEach( c => {
				this.editor.commands.add( 'insert' + c.name, new InsertReactComponentCommand( this.editor, c.name ) );
			} );
		}
	}

	_defineSchema() {
		const schema = this.editor.model.schema;

		this.editor.config.get( 'react' ).forEach( c => {
			schema.register( c.name, {
				// Behaves like a self-contained object (e.g. an image).
				isObject: true,

				// Allow in places where other blocks are allowed (e.g. directly in the root).
				allowWhere: '$block',

				// Each react component has an ID. A unique ID tells the application which
				// data item it represents and makes it possible to render it inside a widget.
				allowAttributes: [ 'id' ]
			} );
		} );
	}

	_defineConverters() {
		const editor = this.editor;
		const conversion = editor.conversion;
		this.editor.config.get( 'react' ).forEach( c => {
			const renderer = c.renderer;

			// <react> converters ((data) view → model)
			conversion.for( 'upcast' ).elementToElement( {
				view: {
					name: 'section',
					classes: c.className
				},
				model: ( viewElement, modelWriter ) => {
					// Read the "data-id" attribute from the view and set it as the "id" in the model.
					return modelWriter.createElement( c.name, {
						id: viewElement.getAttribute( 'data-id' )
					} );
				}
			} );

			// <react> converters (model → view)
			conversion.for( 'downcast' ).elementToElement( {
				model: c.name,
				view: ( modelElement, viewWriter ) => {
					// In the editing view, the model <react> corresponds to:
					//
					// <section class="className" data-id="...">
					//     <div class="name__react-wrapper">
					//         renderer output (React component)
					//     </div>
					// </section>
					const id = modelElement.getAttribute( 'id' );

					// The outermost <section class="className" data-id="..."></section> element.
					const section = viewWriter.createContainerElement( 'section', {
						class: c.className,
						'data-id': id
					} );

					// The inner <div class="name__react-wrapper"></div> element.
					// This element will host a React rendered component.
					const reactWrapper = viewWriter.createUIElement( 'div', {
						class: c.name + '__react-wrapper'
					}, function( domDocument ) {
						const domElement = this.toDomElement( domDocument );

						// This the place where React renders the actual react component hosted
						// by a UIElement in the view. You are using a function (renderer) passed as
						// editor.config.react#renderer.
						renderer( id, domElement );

						return domElement;
					} );

					viewWriter.insert( viewWriter.createPositionAt( section, 0 ), reactWrapper );

					return toWidget( section, viewWriter, { label: c.name + ' widget' } );
				}
			} );
		} );
	}
}
