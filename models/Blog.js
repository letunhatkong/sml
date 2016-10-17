var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Blog Model
 * ==========
 */

var Blog = new keystone.List('Blog', {
	map: { name: 'title' },
	autokey: { path: 'key', from: 'title', unique: true },
});

Blog.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: String, index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Blog.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Blog.defaultColumns = 'title, state|20%, brief|20%, extended|40%';
Blog.register();