<!DOCTYPE html>	
<html lang ="en">
	<head>
		<meta charset ="UTF-8" >
		<title> {%=title%} </title>

		<link rel="Stylesheet" type="text/css" href="css/all.min.css" />
		<link rel="icon" href="favico-64.png" />
	</head>
	<body class="{%=bodyClass%}">
		{% block body %}{% endblock %}

		<script src="//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')</script>

		<script>
			window.ftk = {};
		</script>

		<!-- build:js /js/all.min.js -->
		<script type="text/javascript" src="/js/common.js"></script>
		<script type="text/javascript" src="/js/main.js"></script>
		<!-- endbuild -->

		{% block scripts %}{% endblock %}
		<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-2398527-4', 'auto');
		  ga('send', 'pageview');

		</script>
	</body>
</html>