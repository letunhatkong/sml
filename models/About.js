var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * ==========
 */

var About = new keystone.List('About', {
	map: { name: 'title' },
	autokey: { from: 'title', path: 'key', unique: true }
});

About.add({
	title: { type: String, required: true },
	status: { type: Types.Select, options: 'enable, disable', default: 'disable', index: true },
	banner: { type: Types.CloudinaryImage },
	slogan: { type: Types.Html, wysiwyg:true, height: 80 },
	content: { type: Types.Html, wysiwyg: true, height: 800 }
});

About.defaultColumns = 'title, status|20%, slogan|20%, content|40%';
About.register();
