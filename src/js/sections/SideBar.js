import {sectionSideBar} from '../settings.js';
import {utils} from '../utils.js';

class SideBar {
  constructor() {
    const thisSideBar = this;
    thisSideBar.init();
  }
  init(){
    const thisSideBar = this;
    thisSideBar.dom = {};
    thisSideBar.dom.wrapper = document.querySelector(
      sectionSideBar.select.wrapper
    );
    const options = {
      logo: 'logo',
    };
    const generateHTML = sectionSideBar.template(options);
    thisSideBar.dom.element = utils.createDOMFromHTML(generateHTML);
    thisSideBar.dom.wrapper.appendChild(thisSideBar.dom.element);
    thisSideBar.dom.menuWrapper = thisSideBar.dom.element.querySelector(
      sectionSideBar.select.menuWrapper
    );
    thisSideBar.dom.topBarWrapper = thisSideBar.dom.element.querySelector(
      sectionSideBar.select.topBarWrapper
    );
    thisSideBar.dom.menuButton = thisSideBar.dom.element.querySelector(
      sectionSideBar.select.menuButton
    );
  }
}

export default SideBar;
