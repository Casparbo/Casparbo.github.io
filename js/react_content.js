export function load(htmlId, jsonFile, renderFunction) {
	const elem = ReactDOM.createRoot(document.getElementById(htmlId));

	fetch(jsonFile)
		.then((response) => response.json())
		.then((data) => elem.render(React.createElement(renderFunction, {data: data}, null)));
}