/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import Font from '@ckeditor/ckeditor5-font/src/font';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';

import RealTimeCollaborativeEditing from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativeediting';
import RealTimeCollaborativeComments from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments';
import RealTimeCollaborativeTrackChanges from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativetrackchanges';
import PresenceList from '@ckeditor/ckeditor5-real-time-collaboration/src/presencelist';

import SbpRecommendationBox from './sbp-box';
import SbpAuthorsNoteBox from './sbp-authors-box';
import Handlebars from './handlebars';
import SbpAutoformat from './sbpautoformat';
import ReactPluginEditing from './react-plugin-editing';

import { customBackgroundColorPalette, customBorderColorPalette, customFontColorPalette } from './sbp-colors';

import './custom.css';

export default class ClassicEditorWithRealTimeCollaboration extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditorWithRealTimeCollaboration.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Indent,
	Link,
	List,
	TodoList,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
	TextTransformation,
	Font,
	FontFamily,
	Highlight,
	HorizontalLine,
	PageBreak,
	RemoveFormat,
	SpecialCharacters,
	SpecialCharactersEssentials,
	Alignment,
	Mention,
	Autosave,
	RealTimeCollaborativeEditing,
	RealTimeCollaborativeComments,
	RealTimeCollaborativeTrackChanges,
	PresenceList,
	SbpRecommendationBox,
	SbpAuthorsNoteBox,
	Handlebars,
	SbpAutoformat,
	ReactPluginEditing
];

// Editor configuration.
ClassicEditorWithRealTimeCollaboration.defaultConfig = {
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
			{ model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
			{
				model: 'title',
				view: {
					name: 'h1',
					classes: 'title'
				},
				title: 'Title',
				class: 'ck-heading_heading1_title',
				converterPriority: 'high'
			},
			{
				model: 'subtitle',
				view: {
					name: 'h2',
					classes: 'subtitle'
				},
				title: 'Subtitle',
				class: 'ck-heading_heading2_subtitle',
				converterPriority: 'high'
			}
		]
	},
	fontFamily: {
		options: [
			'default',
			'Nunito, Ubuntu, sans-serif',
			'Lato, Arial, sans-serif',
			'Ubuntu Mono, Courier New, Courier, monospace'
		]
	},
	fontSize: {
		options: [
			'default',
			'tiny',
			'small',
			'big',
			'huge'
		]
	},
	fontColor: {
		colors: customFontColorPalette
	},
	fontBackgroundColor: {
		colors: customBackgroundColorPalette
	},
	toolbar: {
		items: [
			'heading',
			'fontFamily',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'highlight',
			'|',
			'bold',
			'italic',
			'strikethrough',
			'handlebars',
			'removeFormat',
			'|',
			'indent',
			'outdent',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'blockQuote',
			'|',
			'undo',
			'redo',
			'|',
			'insertTable',
			'todoList',
			'horizontalLine',
			'specialCharacters',
			'pageBreak',
			'imageUpload',
			'link',
			'mediaEmbed',
			'sbpRecommendationBox',
			'sbpAuthorsNoteBox',
			'comment',
			'|',
			'trackChanges'
		],
		shouldNotGroupWhenFull: true
	},
	image: {
		toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],
		styles: [
			'full',
			'alignLeft',
			'alignRight'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'tableCellProperties'
		],
		tableProperties: {
			borderColors: customBorderColorPalette,
			backgroundColors: customBackgroundColorPalette
		},
		tableCellProperties: {
			borderColors: customBorderColorPalette,
			backgroundColors: customBackgroundColorPalette
		}
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

/*
	*** WARNING: If autosave is on in one editor on a page, it seems all editors call it....
	CONFIGURING AUTOSAVE
	autosave: {
			waitingTime: 5000, // in ms
			save( editor ) {
				return saveData( editor.getData() );
			}
		},

	*** CLOUD SERVICES - Configuration
	cloudServices: {
		tokenUrl: 'https://71767.cke-cs.com/token/dev/rqydjABfOub8wOTkf6mnbmgMzizhMar460EXjdSM67D0YzsnwWD7z7aC2Jmd',
		webSocketUrl: '71767.cke-cs.com/ws',
		uploadUrl: 'https://71767.cke-cs.com/easyimage/upload/'
	},
	collaboration: {
		channelId: 'document-id'
	},
	presenceList: {
		container: document.querySelector( '#presence-list-container' ),
		collapseAt: 3,
		onClick: ( user, element ) => console.log( user, element )
	}

	*** CLOUD SERVICES - Plugins
	PresenceList,
	RealTimeCollaborativeEditing,
	RealTimeCollaborativeComments,
	RealTimeCollaborativeTrackChanges

	*** CLOUD SERVICES - Toolbar items
	'comment',
	'trackChanges'

	*** CLOUD SERVICES - WatchDog processing
	... not sure how to do this in react

	*** User setup
	class CommentsIntegration {
    constructor( editor ) {
        this.editor = editor;
    }

    init() {
        const usersPlugin = this.editor.plugins.get( 'Users' );
        const commentsRepositoryPlugin = this.editor.plugins.get( 'CommentsRepository' );

        // Load the users data.
        for ( const user of appData.users ) {
            usersPlugin.addUser( user );
        }

        // Set the current user.
        usersPlugin.defineMe( appData.userId );

        // Load the comment threads data.
        for ( const commentThread of appData.commentThreads ) {
            commentsRepositoryPlugin.addCommentThread( commentThread );
        }
    }
}

*/
