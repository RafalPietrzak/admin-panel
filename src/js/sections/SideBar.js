import {sectionSideBar, globalSelect, globalClassName} from '../settings.js';
import {utils} from '../utils.js';
import TopBar from './TopBar.js';

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
      logo: sectionSideBar.settings.logo,
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
    thisSideBar.topBar = new TopBar(thisSideBar.dom.topBarWrapper);
    thisSideBar.dom.menuButton = thisSideBar.dom.element.querySelector(
      sectionSideBar.select.menuButton
    );
    thisSideBar.dom.mainWrapper = document.querySelector(
      globalSelect.element.contentWrapper
    );
    thisSideBar.dom.menuButton.addEventListener('click', function () {
      thisSideBar.dom.element.classList.toggle(
        sectionSideBar.classNames.sideBarFull
      );
      thisSideBar.dom.mainWrapper.classList.toggle(
        globalClassName.mainFullMenu
      );
    });
  }
}

export default SideBar;
