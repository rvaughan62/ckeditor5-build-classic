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
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';

export default class ClassicEditor extends ClassicEditorBase {}

const customBackgroundColorPalette = [
	{
		color: 'hsl(0,0%,100%)', // #FFFFFF
		label: 'SB White'
	},
	{
		color: 'hsl(217.2,77.5%,60%)', // #4a86e8
		label: 'SB Mid Blue'
	},
	{
		color: 'hsl(36,100%,50%)', // #ff9900
		label: 'SB Light Blue'
	},
	{
		color: 'hsl(170.3,75.6%,40.2%)', // #19b49b
		label: 'SB Green'
	},
	{
		color: 'hsl(104.3,35.4%,87.3%)', // #d9ead3
		label: 'SB Light Green'
	},
	{
		color: 'hsl(0,0%,60%)', // #999999
		label: 'SB Grey'
	},
	{
		color: 'hsl(0,0%,71.8%)', // #b7b7b7
		label: 'SB Light Grey'
	},
	{
		color: 'hsl(36,100%,50%)', // #ff9900
		label: 'SB Orange'
	},
	{
		color: 'hsl(0,100%,50%)', // #FF0000
		label: 'SB Red'
	},
	{
		color: 'hsl(0,65.9%,75.9%)', // #ea9999
		label: 'SB Mid Red'
	},
	{
		color: 'rgb(244,204,204)', // #f4cccc
		label: 'SB Light Red'
	},
	{
		color: 'hsl(276,100%,50%)', // #9900ff
		label: 'SB Purple'
	}
];

const customBorderColorPalette = [
	{
		color: 'hsl(0,0%,0%)', // #000000
		label: 'SB Black'
	},
	{
		color: 'hsl(0,0%,100%)', // #FFFFFF
		label: 'SB White'
	},
	{
		color: 'hsl(0,0%,60%)', // #999999
		label: 'SB Grey'
	},
	{
		color: 'hsl(0,0%,71.8%)', // #b7b7b7
		label: 'SB Light Grey'
	}
];

/* KEEP for use in the style template
const customColorPalette = [
	{
		color: 'hsl(0,0%,0%)', // #000000
		label: 'SB Black'
	},
	{
		color: 'hsl(0,0%,100%)', // #FFFFFF
		label: 'SB White'
	},
	{
		color: 'hsl(222.6,73.1%,40.8%)', // #1C48B4
		label: 'SB Blue'
	},
	{
		color: 'hsl(36,100%,50%)', // #ff9900
		label: 'SB Orange'
	},
	{
		color: 'hsl(0,100%,50%)', // #FF0000
		label: 'SB Red'
	},
	{
		color: 'hsl(276,100%,50%)', // #9900ff
		label: 'SB Purple'
	}
];
*/

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
	TextTransformation
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
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
