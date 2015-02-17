---
title: 'Foliotek Developers'
bodyClass: 'home'
---
{% extends 'src/layouts/base.swig' %}

{% block body %}
<header>
	<h1 class="foliotek">Folio<i>tek</i></h1>
	<h2>Helping grow competent and passionate professionals</h2>
</header>
<nav>
	<ul>
		<li><a href="http://www.foliotek.com">Foliotek Inc</a></li>
		<li class="current"><a href="http://foliotek.github.io">Projects</a></li>
		<li><a href="http://www.foliotek.com/devblog">DevBlog</a></li>
	</ul>
</nav>
<div class="content-container">
	<h1>Projects</h1>
	<div class="project-listing grid">

	</div>
</div>


<script type="text/template" id="project-template">
	{{#projects}}
	<div class="col-1-3">
	<div class="project">
		<div class="proj-content">
			<h3>{{nameLight}}<strong>{{nameBold}}</strong></h3>
			<p>{{description}}</p>
		</div>
		<img src="http://www.foliotek.com/Content/img/schools/slide{{imgNum}}.jpg" />
		<div class="button-wrap">
			<a href="{{link}}">View</a>
		</div>
	</div>
	</div>
	{{/projects}}
</script>

{% endblock %}

{% block scripts %}
<script>
ftk.listing.init();
</script>
{% endblock %}
