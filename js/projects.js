document.addEventListener(
	'DOMContentLoaded',
	function() {
		var hostUrl = {
			'bitbucket': 'https://bitbucket.org/jcsung/',
			'github': 'https://github.com/jcsung/'
		};

		var projectsSection = document.getElementById('projects');

		if (projectsSection) {
			var myProjects = projectsSection.getElementsByClassName('project-description');

			Array.from(myProjects).map(
				function(project) {
					var host = hostUrl[project.dataset.host];
					var repo = project.dataset.repo;

					if (host) {
						project.addEventListener(
							'click',
							function(event) {
								if (event && event.target && event.target.tagName) {
									if (event.target.tagName !== 'A') {
										window.open(host + repo, '_blank');
									}
								}
							}
						);
					}
				}
			);
		}
	}
);
