(function (ftk) {

	var projects = [
		{
			name: 'ajaxQ',
			nameLight: 'Ajax',
			nameBold: 'Q',
			description: 'A tiny, simple jQuery plugin for sequential ajax requests',
			link: 'http://foliotek.github.io/AjaxQ/',
			imgNum: 3
		},
		{
			name: 'DocEditable',
			nameLight: 'Doc',
			nameBold: 'Editable',
			description: 'Clean WYSIWYG editing in your browser',
			link: 'http://foliotek.github.io/DocEditable/',
			imgNum: 6
		},
	];

	ftk.listing = {};
	ftk.listing.init = function () {
		var template = $("#project-template").html();
		var html = Mustache.render(template, {
			projects: projects
		});
		$(".project-listing").html(html);
	};

})(ftk);
