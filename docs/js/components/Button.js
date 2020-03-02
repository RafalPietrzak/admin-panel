import {componentButton} from '../settings.js';
import {utils} from '../utils.js';

class Button {
  constructor(label = undefined, icon = undefined, options = undefined) {
    const thisButton = this;
    thisButton.options = {};
    if(typeof options != 'undefined'){
      thisButton.options.className = '';
      for(let option of options){
        thisButton.options.className += ' ' 
        + componentButton.classNames[option]; 
      }
    } 
    thisButton.options.label = label;
    thisButton.options.icon = icon;
    thisButton.init();
  }
  init (){
    const thisButton = this;
    thisButton.dom = {};
    const generateHTML = componentButton.template(thisButton.options);
    thisButton.dom.element = utils.createDOMFromHTML(generateHTML);
  }
}

export default Button; 