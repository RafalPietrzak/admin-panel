import {sectionTopBar} from '../settings.js';
import {utils} from '../utils.js';

class TopBar {
  constructor(wrapper) {
    const thisTopBar = this;
    thisTopBar.dom = {};
    thisTopBar.dom.wrapper = wrapper;
    thisTopBar.init();
  }
  init(){
    const thisTopBar = this;
    const options = {
      same: '',
    };
    const generateHTML = sectionTopBar.template(options);
    thisTopBar.dom.element = utils.createDOMFromHTML(generateHTML);
    thisTopBar.dom.wrapper.appendChild(thisTopBar.dom.element);
  }
}

export default TopBar;
