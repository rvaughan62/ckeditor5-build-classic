import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertReactComponentCommand extends Command {
	constructor( editor, name ) {
		super( editor );
		this.name = name;
	}

	execute( id ) {
		this.editor.model.change( writer => {
			// Insert <react id="...">*</react> at the current selection position
			// in a way which will result in creating a valid model structure.
			this.editor.model.insertContent( writer.createElement( this.name, { id } ) );
		} );
	}

	refresh() {
		const model = this.editor.model;
		const selection = model.document.selection;
		const allowedIn = model.schema.findAllowedParent( selection.getFirstPosition(), this.name );

		this.isEnabled = allowedIn !== null;
	}
}
