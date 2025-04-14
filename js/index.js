const root = ReactDOM.createRoot(document.getElementById('projects'));

function ProjectCard({name, description, url}) {
	return (
	<div className="card mb-3">
	  <h5 className="card-header">{name}</h5>
	  <div className="card-body">
		<p className="card-text">{description}</p>
		<a href={url} className="btn btn-secondary">Link to project</a>
	  </div>
	</div>);
}

function Projects({projectData}) {
	const projects = projectData.map((project) => {
		return <ProjectCard name={project["title"]} description={project["description"]} url={project["url"]} key={project["title"]}> </ProjectCard>
	})

	return (
		<>
			<h2 className="mb-4">Projects</h2>
			{projects}
		</>
	)
}

function loadProjects() {
	const projectCard = document.getElementById('project-card');

	fetch('./content/projects.json')
		.then((response) => response.json())
		.then((data) => root.render(<Projects projectData={data}></Projects>))
}

loadProjects();
