/* global Chart */
import {componentChart} from '../settings.js';
import {utils} from '../utils.js';

class MyChart {
  constructor(id){
    const thisChart = this;
    thisChart.id = id;
    thisChart.init();
  }
  displayData(data) {
    const thisChart = this;
    thisChart.context =  thisChart.dom.element.getContext('2d');
    new Chart(thisChart.context, {
      type: 'bar',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [{
          label: 'Signups',
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          data: data.signups,
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: data.ftd,
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: data.earned,
          hidden: true,
        }]
      },
    });  
  }
  init(){
    const thisChart = this;
    thisChart.dom = {};
    const generateHTML = componentChart.template({id: thisChart.id});
    thisChart.dom.element = utils.createDOMFromHTML(generateHTML);
  }
}


export default MyChart;