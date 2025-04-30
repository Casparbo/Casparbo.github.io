export function load(htmlId, jsonFile, renderFunction) {
	const elem = ReactDOM.createRoot(document.getElementById(htmlId));

	const reactRender = (data) => elem.render(React.createElement(renderFunction, {data: data}, null));

	if(!jsonFile) {
		reactRender(null);
	} else {
		fetch(jsonFile)
			.then((response) => response.json())
			.then((data) => reactRender(data));
	}
}