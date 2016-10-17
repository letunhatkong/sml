var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Model Profile Model
 * =======================================================
 */

var Model = new keystone.List('Model');

Model.add({
	name: { type: Types.Name, required: true, index: true },
	professionCategory:	{ type:	Types.Select, options: 'Model, Company, Photographer', default:	'Model', index: true },
	gender: { type: Types.Select, options: 'Male, Female', default: 'Female', index: true },
	city: { type: String, index: true },
	state: { type: String, index: true },
	country: { type: String, index: true },
	zipcode: { type: String, index: true },
	phone: { type: String },
	email: { type: Types.Email },
	facebook: { type: Types.Email },
	twitter: { type: Types.Email },
	instagram: { type: Types.Email },
	pinterest: { type: Types.Email },
	youtube: { type: Types.Email },
	videoLink: { type: String },
	photo: { type: Types.CloudinaryImages },
	aboutMe: { type: Types.Textarea	},	
	age: { type: Types.Number, index: true },
	height: { type: String, index: true },
	weight: { type: String, index: true },
	bust: { type: String, index: true },
	waist: { type: String, index: true },
	hips: { type: String, index: true },
	cup: { type: Types.Select, options: 'A, B, C, D, DD, F', default: 'A', index: true },
	dress: { type: Types.Select, options: '2, 4, 6, 8, 10, 12, 14, 16', default: '2', index: true },
	shoe: { type: Types.Select, options: '4, 4.5, 5.5, 6.5, 7, 7.5, 8, 8.5, 10, 11', default: '4', index: true },
	hairColor: { type: Types.Select, options: 'Black, Blonde, Brown, Gray, Red', default: 'Black', index: true },
	hairLength: { type: Types.Select, options: 'Short, Medium, Long, Very Long', default: 'Short', index: true },
	eyeColor: { type: Types.Select, options: 'Hazel, Light Brown, Dark Borwn, Black, Gray, Green, Light Blue, Blue', default: 'Hazel', index: true },
	ethnicity: { type: String, index: true },
	skinColor: { type: Types.Select, options: 'Fair, Medium, Warm, Tanned, Dark', default: 'Fair', index: true },
	shootNudes: { type: Boolean, index: true },
	tattoos: { type: Boolean, index: true },
	piercings: { type: Boolean, index: true },
	experience: { type: Types.Select, options: 'Very Experienced, Experienced, Beginner', default: 'Beginner', index: true },
	compensation: { type: String, index: true },
	genres: { type: String, index: true },
	lastActivity: { type: Date, default: Date.now },
	joined: { type: Date, default: Date.now },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now	},
});

Model.defaultSort = '-createdAt';
Model.defaultColumns = 'name, email, createdAt';
Model.register();
