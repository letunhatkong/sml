var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'about';
	locals.data = {
		abouts: []
	};

	// Load the current about
	view.on('init', function (next) {

		var q = keystone.list('About').model.findOne({ status: 'enable' });

		q.exec(function (err, result) {
			locals.data.about = result;
			next(err);
		});

	});

	// Render the view
	view.render('about');
};
