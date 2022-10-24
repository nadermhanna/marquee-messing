/** 

number of segments = container_width / segment_width + 1

*/

let stylesheet = new CustomStyleSheet(document, "marquee");

const dataEl = document.querySelector(".data");
const animationDuration = 10;

const ribbonEl = document.querySelector(".ribbon");
const segmentEl = document.querySelector(".segment");

const ribbonElWidth = ribbonEl.offsetWidth;
const segmentElWidth = segmentEl.offsetWidth;
const newRibbonWidth =
  Math.ceil(ribbonElWidth / segmentElWidth) * segmentElWidth;

const numberOfSegmentsToBuild = Math.ceil(ribbonElWidth / segmentElWidth) + 1;
const animationDelayInterval = animationDuration / numberOfSegmentsToBuild;

for (let i = 0; i < numberOfSegmentsToBuild; i++) {
  ribbonEl.appendChild(segmentEl.cloneNode(true));
  stylesheet.addStyle(`segment-${i}`, `.segment:nth-child(${i + 1})`, [
    `animation-delay: ${i * animationDelayInterval}s`,
  ]);
}
stylesheet.addCssToDocument();

dataEl.innerHTML = `current ribbon width: ${ribbonElWidth}px`;
dataEl.innerHTML = `${dataEl.innerHTML} || segment width: ${segmentElWidth}px`;
dataEl.innerHTML = `${dataEl.innerHTML} || num of segments: ${numberOfSegmentsToBuild}`;
dataEl.innerHTML = `${dataEl.innerHTML} || new ribbon width: ${newRibbonWidth}`;
