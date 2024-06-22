const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var xml;

async function loadXml() {
  if (xml === undefined) {
    let response = await fetch("http://localhost:8888/library-data.kml", {
      method: "get",
      headers: {
        "Content-Type": "application/xml",
      },
    });
    // Convert XML string to XML DOM document
    let data = new JSDOM(await response.text(), { contentType: "application/xml" });
    xml = data.window.document; // Set the xml to the XML DOM document which we can query using DOM methods
  }
  return xml;
}

async function loadLibraries() {
  let xmldocument = await loadXml(); // Retrieve the XML DOM document
  return xmldocument.querySelectorAll("Placemark"); // Return all Placemark elements
}

async function getLibraryById(id) {
  let xmldocument = await loadXml(); // Retrieve the XML DOM document
  return xmldocument.getElementById(id); // Get element by ID
}

module.exports = {
  loadLibraries,
  getLibraryById,
};
