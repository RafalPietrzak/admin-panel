import {componentSimpleTable} from '../settings.js';
import {utils} from '../utils.js';

class SimpleTable {
  constructor(data){
    const thisSimpleTable = this;
    thisSimpleTable.data = data;
    thisSimpleTable.init();
  }
  init(){
    const thisSimpleTable = this;
    thisSimpleTable.dom = {};
    const generateHTML = componentSimpleTable.template(thisSimpleTable.options);
    thisSimpleTable.dom.element = utils.createDOMFromHTML(generateHTML);
  }
}

export default SimpleTable;
