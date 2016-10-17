var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'blog';
	locals.data = {
		blogs: [],
	};

	// Load the current blog
	view.on('init', function (next) {

		var q = keystone.list('Blog').model.findOne({ state: 'published' }).sort('-publishedDate');

		q.exec(function (err, result) {
			locals.data.blog = result;
			next(err);
		});

	});

	// Render the view
	view.render('blog');
};