import {pageGlobal} from '../settings.js';
import {utils} from '../utils.js';
import Basic from '../sections/Basic.js';

class Page {
  constructor(settings) {
    const thisPage = this;
    thisPage.settings = settings;
    thisPage.id = thisPage.settings.select.id.replace('#','');
    thisPage.title = settings.title;
    thisPage.icon =  settings.icon;
    thisPage.iconName =  settings.iconName;
    thisPage.init();
  }
  addSection(section, title){
    const thisPage = this;
    thisPage.sections[section] = new Basic(section, title);
    thisPage.dom.element.appendChild(thisPage.sections[section].dom.element);
    thisPage.sections[section].rows = {};
  }
  addRow(section, row, option = '') {
    const thisPage = this;
    thisPage.sections[section].rows[row] = thisPage.sections[section].addRow(
      row, option
    );
  }
  init(){
    const thisPage = this;
    thisPage.dom = {};
    thisPage.sections = {};
    thisPage.dom.wrapper = document.querySelector(pageGlobal.select.wrapper);
    const generateHTML = pageGlobal.template(thisPage.id);
    thisPage.dom.element = utils.createDOMFromHTML(generateHTML);
    thisPage.dom.wrapper.appendChild(thisPage.dom.element);
  }
  activeIfTrue(value){
    const thisPage = this;
    if(value){
      thisPage.dom.element.classList.add(pageGlobal.classNames.active);     
    }else{
      thisPage.dom.element.classList.remove(pageGlobal.classNames.active);  
    }
  }
  render(){
    const thisPage = this;
    this.dom.element.innerHTML = thisPage.id;
  }
}

export default Page;
