/* global flatpickr */
import {componentDataScope} from '../settings.js';
import {utils} from '../utils.js';


class DateScope  {
  constructor(){
    const thisDataScope = this;
    thisDataScope.options = '';
    thisDataScope.init();
  }
  init(){
    const thisDataScope = this;
    thisDataScope.dom = {};
    const generateHTML = componentDataScope.template(thisDataScope.options);
    thisDataScope.dom.element = utils.createDOMFromHTML(generateHTML);
    thisDataScope.dom.inputDate1 = thisDataScope.dom.element.querySelector(
      componentDataScope.select.input1
    );
    thisDataScope.dom.inputDate2 = thisDataScope.dom.element.querySelector(
      componentDataScope.select.input2
    );
    flatpickr(
      thisDataScope.dom.inputDate1,
      {
        defaultDate: new Date(),
        onChange: function(selectedDates, dateStr) {
          thisDataScope.date1 = dateStr;
        },  
      }
    );
    flatpickr(
      thisDataScope.dom.inputDate2,
      {
        defaultDate: new Date(),
        onChange: function(selectedDates, dateStr) {
          thisDataScope.date2 = dateStr;
        },  
      }
    );
  }
}

export default DateScope;