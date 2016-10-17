var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Register Model
 * =============
 */

var Register = new keystone.List('Register', {
	nocreate: true,
	noedit: true,
});

Register.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	password: { type: Types.Password, initial: true, required: true },
	createdAt: { type: Date, default: Date.now },
});

Register.defaultSort = '-createdAt';
Register.defaultColumns = 'name, email, createdAt';
Register.register();
