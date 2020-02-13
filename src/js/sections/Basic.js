import {sectionBasic} from '../settings.js';
import {utils} from '../utils.js';

class Basic {
  constructor(sectionId, rowsId, sectionTitle) {
    const thisBasic = this;
    thisBasic.id = sectionId;
    thisBasic.sectionTitle = sectionTitle;
    thisBasic.init(rowsId);
  }
  init(rowsId){
    const thisBasic = this;
    thisBasic.dom = {};
    thisBasic.dom.rows = {};
    const rowSelectors = thisBasic.generateRowsId(rowsId);
    const options = {
      id: thisBasic.id,
      title: thisBasic.sectionTitle,
      rows: rowSelectors
    };
    const generateHTML = sectionBasic.template(options);
    thisBasic.dom.element = utils.createDOMFromHTML(generateHTML);
    for(let rowId in rowsId){
      thisBasic.dom.rows[rowsId[rowId]] = thisBasic.dom.element.querySelector(
        '#' + rowSelectors[rowId]
      );
    }
  }
  generateRowsId(rowsId) {
    const thisBasic = this;
    const newRowsId = [];
    for(let rowId in rowsId){
      newRowsId.push(thisBasic.id + '-' + rowsId[rowId]);
    }
    return newRowsId;  
  }
}

export default Basic;
