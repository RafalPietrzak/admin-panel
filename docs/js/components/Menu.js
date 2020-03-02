import {componentMenu} from '../settings.js';
import {utils} from '../utils.js';

class Menu {
  constructor(wrapper, links) {
    const thisMenu = this;
    thisMenu.init(wrapper, links);
  }
  init(wrapper, links){
    const thisMenu = this;
    thisMenu.dom = {};
    thisMenu.dom.wrapper = wrapper;
    const options = {
      links: links,
    };
    const generateHTML = componentMenu.template(options);
    thisMenu.dom.element = utils.createDOMFromHTML(generateHTML);
    thisMenu.dom.wrapper.appendChild(thisMenu.dom.element);
    thisMenu.dom.links = thisMenu.dom.element.querySelectorAll(
      componentMenu.select.link
    );
  }
  active(pageId){
    const thisMenu = this;
    for(let link of thisMenu.dom.links){
      if(link.getAttribute('href').replace('#/', '') == pageId){
        link.classList.add(componentMenu.classNames.active);  
      } else {
        link.classList.remove(componentMenu.classNames.active);
      }
    }
  }
}

export default Menu;
