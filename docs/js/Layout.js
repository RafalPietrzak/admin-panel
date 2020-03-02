import {globalSelect, globalTemplate} from './settings.js';
import {utils} from './utils.js';

class Layout {
  constructor() {
    const thisLayout = this;
    thisLayout.init();
  }
  init(){
    const thisLayout = this;
    thisLayout.dom = {};
    thisLayout.dom.wrapper = document.querySelector(globalSelect.wrapper);
    const generateHTML = globalTemplate();
    const generateDOM = utils.createDOMFromHTML(generateHTML);
    thisLayout.dom.wrapper.appendChild(generateDOM);
  }
}

export default Layout;
