class CustomStyleSheet {
  constructor(document) {
    this.document = document;
    this.styles = {};
  }

  addStyle(id, selector, properties) {
    this.styles[id] = {
      selector,
      properties,
    };
  }

  editStyle(id, selector, properties) {
    this.styles[id] = {
      ...this.styles[id],
      ...(selector ? { selector } : {}),
      ...(properties
        ? {
            properties: Array.from(new Set([
              ...this.styles[id].properties,
              ...properties,
            ])),
          }
        : {}),
    };
  }

  buildProperties(properties) {
    return properties.reduce(
      (propsSoFar, prop) => `${propsSoFar} ${prop};`,
      ""
    );
  }

  createStyleSheet() {
    const allStyles = Object.keys(this.styles);
    const styleSheet = allStyles.reduce((stylesSoFar = "", currentStyleKey) => {
      const currentStyle = this.styles[currentStyleKey];
      return `${stylesSoFar} ${currentStyle.selector} { ${this.buildProperties(
        currentStyle.properties
      )} }`;
    }, "");
    return styleSheet;
  }

  removeStyle(id) {
    if (this.styles[id]) delete this.styles[id];
  }

  addCssToDocument() {
    const styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.innerText = this.createStyleSheet();
    document.head.appendChild(styleEl);
  }
}
