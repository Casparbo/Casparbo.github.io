import { load } from "./js/react_content.js";

load("image", null, Image);
load("personal data", "./content/cv/personal_data.json", PersonalData);
load("description", "./content/cv/description.json", Description);
load("experience", "./content/cv/experience.json", Timeline);
load("education", "./content/cv/education.json", Timeline);
load("skills", "./content/cv/skills.json", Skills);

function Image({data}) {
	return <img src="content\Headshot.JPG" className="float-start" height="210"/>;
}

function PersonalData({data}) {
  const rows = Object.keys(data.data).map((key) => {
    var value = "";
    if(data.data[key])
      value = data.data[key]
    else
      value = <span className="placeholder col-4"/>
    return (
      <tr key={key}>
        <th scope="row" className="p-0">{key}</th>
        <td className="p-0">{value}</td>
      </tr>
      );
  })

	return (
		<>
		<h1 className="display-2">{data.name}</h1>
    <h2 className="text-uppercase fw-lighter">{data.title}</h2>
    <table className="table table-borderless table-sm">
      <tbody>
        {rows}
      </tbody>
    </table>
    </>
	);
}

function Description({data}) {
  return (
    <p className="fw-light">
      {data}
    </p>
  );
}

function Timeline({data}) {
  const stations = data.map((station) => {
    var content = [];

    if(station.content) {
      content = station.content.map((cont) => {
        return (
          <li key={cont}>{cont}</li>
        );
      });
      /*
      if(station.technologies)
        content.push(MapInline(station.technologies, "Technologies"))

      if(station.tools)
        content.push(MapInline(station.tools, "Tools"))
      */
    }

    return (
      <tr key={station.date}>
        <td className="text-muted col-2">{station.date}</td>
        <td>
          <h5>
            {station.title}<br/>
            <small>{station.institution} {station.location ? <>&bull; {station.location}</> : ""}</small>
          </h5>
          <ul className="list-unstyled">
            {content}
          </ul>
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-borderless">
      <tbody>
        {stations}
      </tbody>
    </table>
  );
}

function MapInline (items, title) {
    const itemList = items.map((it) => {
      return (<li key={it} className="list-inline-item">{it}</li>)
    });

    return (
      <div className="row">
        <div className="col-3">
          <h6>{title}</h6>
        </div>
        <div className="col">
          <ul className="list-inline m-0">
            {itemList}
          </ul>
        </div>
      </div>
    );
  }

function Skills({data}) {
  const skillList = Object.keys(data).map((key) => {
    return (
      <tr key={key}>
        <td className="p-0">
          {MapInline(data[key], key)}
        </td>
      </tr>
    )
  });

	return (
		<table className="table table-borderless table-sm">
      <tbody>
        {skillList}
      </tbody>
    </table>
	);

}
