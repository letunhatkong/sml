var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * ==========
 */

var About = new keystone.List('About', {
	autokey: { from: 'name', path: 'key', unique: true },
});

About.add({
	name: { type: String, required: true },
	state: { type: Types.Select, options: 'enable, disable', default: 'disable', index: true },
	banner: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 800 },
	},
});

About.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

About.defaultColumns = 'name, state|20%, brief|20%, extended|40%';
About.register();
