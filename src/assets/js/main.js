(function (ftk) {

	ftk.listing = {};
	ftk.listing.init = function () {
		var template = $("#project-template").html();
		$.getJSON('projects.json').done(function (projects) {
			var html = Mustache.render(template, {
				projects: projects
			});
			$(".project-listing").html(html);
		});
	};

})(ftk);
