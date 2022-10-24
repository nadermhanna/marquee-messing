/** 

number of segments = container_width / segment_width + 1

*/
const dataEl = document.querySelector(".data");

const containerEl = document.querySelector(".container");
const containerElWidth = containerEl.offsetWidth;

const segmentEl = document.querySelector(".original");
const segmentElWidth = segmentEl.offsetWidth;

const numberOfSegments = containerElWidth / segmentElWidth + 1;

dataEl.innerHTML = `container width: ${containerElWidth}px`;
dataEl.innerHTML = `${dataEl.innerHTML} || segment width: ${segmentElWidth}px`;
dataEl.innerHTML = `${dataEl.innerHTML} || num of segments: ${numberOfSegments}`;
