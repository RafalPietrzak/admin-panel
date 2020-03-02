import {sectionBasic} from '../settings.js';
import {utils} from '../utils.js';

class Basic {
  constructor(sectionId, sectionTitle) {
    const thisBasic = this;
    thisBasic.id = sectionId;
    thisBasic.sectionTitle = sectionTitle;
    thisBasic.init();
  }
  init(){
    const thisBasic = this;
    thisBasic.dom = {};
    thisBasic.dom.rows = {};
    thisBasic.rows = {};
    const options = {
      id: thisBasic.id,
      title: thisBasic.sectionTitle,
    };
    const generateHTML = sectionBasic.template(options);
    thisBasic.dom.element = utils.createDOMFromHTML(generateHTML);
  }
  addRow(rowId, option) {
    const thisBasic = this;
    const options = {
      class: option,
      id: thisBasic.generateRowsId(rowId),
    };
    const generateHTML = sectionBasic.row.template(options);
    thisBasic.dom.rows[rowId] = utils.createDOMFromHTML(generateHTML);
    thisBasic.dom.element.appendChild(thisBasic.dom.rows[rowId]);
    thisBasic.rows[rowId] = {
      addComponent: function (component) {
        thisBasic.dom.rows[rowId].appendChild(component.dom.element);
        console.log( component.dom.element);
      },
      disabled: function () {
        //TODO
        console.log('row was disabled id:' + rowId);
      },
      hiden: function () {
        //TODO
        console.log('row was hidean id:' + rowId);
      }
    };
  }
  generateRowsId(rowId) {
    const thisBasic = this;
    return thisBasic.id + '-' + rowId;
  }
}

export default Basic;
