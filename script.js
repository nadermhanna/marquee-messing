/** 

number of segments = container_width / segment_width + 1

*/

let stylesheet = new CustomStyleSheet(document, "marquee");

const dataEl = document.querySelector(".data");

const containerEl = document.querySelector(".container");
const segmentEl = document.querySelector(".original");

const containerElWidth = containerEl.offsetWidth;
const segmentElWidth = segmentEl.offsetWidth;

const numberOfSegments = containerElWidth / segmentElWidth + 1;

dataEl.innerHTML = `container width: ${containerElWidth}px`;
dataEl.innerHTML = `${dataEl.innerHTML} || segment width: ${segmentElWidth}px`;
dataEl.innerHTML = `${dataEl.innerHTML} || num of segments: ${numberOfSegments}`;
