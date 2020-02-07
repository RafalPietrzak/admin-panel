import {pageGlobal} from '../settings.js';
import {utils} from '../utils.js';
import Basic from '../sections/Basic.js';

class Page {
  constructor(settings) {
    const thisPage = this;
    thisPage.settings = settings;
    thisPage.id = thisPage.settings.select.id.replace('#','');
    thisPage.title = settings.title;
    thisPage.init();
    thisPage.initSection();
  }
  addSection(section, rows, title){
    const thisPage = this;
    thisPage.section[section] = new Basic(section, rows, title);
    thisPage.dom.element.appendChild(thisPage.section[section].dom.element);
  }
  init(){
    const thisPage = this;
    thisPage.dom = {};
    thisPage.section = {};
    thisPage.dom.wrapper = document.querySelector(pageGlobal.select.wrapper);
    const generateHTML = pageGlobal.template(thisPage.id);
    thisPage.dom.element = utils.createDOMFromHTML(generateHTML);
    thisPage.dom.wrapper.appendChild(thisPage.dom.element);
  }
  initSection(){
    const thisPage = this;
    for(let section in thisPage.settings.sections){
      thisPage.addSection(
        section, 
        thisPage.settings.sections[section].rows, 
        thisPage.settings.sections[section].title
      );   
    }
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
