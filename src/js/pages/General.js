import {pageGeneral} from '../settings.js';
import Page from './Page.js';
import Button from '../components/Button.js';
import SimpleTable from '../components/SimpleTable.js';
import DataScope from '../components/DataScope.js';


class General extends Page {
  constructor() {
    super(
      pageGeneral
    );
    const thisGeneral = this;
    thisGeneral.addComponents();
  }
  getDataLinks() {
    const thisLinks = this;
    thisLinks.data={};
    thisLinks.data.links = [
      {id: 1, title: 'Home page', value: 'http://www.homepage.com'},
      {id: 2, title: 'Currently offer', value: 'http://www.currently.com'},
      {id: 3, title: 'Blurpix', value: 'http://www.blurpix.com'},
      {id: 4, title: 'Your Site', value: 'http://www.yoursite.com'},
      {id: 5, title: 'Google', value: 'http://www.google.com'},
      {id: 6, title: 'Facebook', value: 'http://www.facebook.com'},
      {id: 7, title: 'Dashboard', value: 'http://www.dashboard.com'},
      {id: 8, title: 'Blurax', value: 'http://www.blurax.com'},
      {id: 9, title: 'Piece of Wine', value: 'http://www.pieceofwine.com'},
      {id: 10, title: 'Twitter', value: 'http://www.twitter.com'},
    ];
    const options = {
      theadName: ['titles','links', 'actions'],
      theadClass: '',
      rows: thisLinks.data.links,
    };
    return options;
  }
  addComponents() {
    const thisGeneral = this;
    thisGeneral.components = {};
    thisGeneral.addSection('statistic', 'General statistic');
    thisGeneral.sections.statistic.addRow('dateSelector');
    thisGeneral.sections.statistic.addRow('dataDisplay');
    thisGeneral.components.dataScope = new DataScope;
    thisGeneral.sections.statistic.rows.dateSelector.addComponent(
      thisGeneral.components.dataScope
    );
    thisGeneral.components.buttonRefreshDate = new Button(
      undefined, 
      {className: 'icon-refresh', lable: 'refresh'}
    );
    thisGeneral.sections.statistic.rows.dateSelector.addComponent(
      thisGeneral.components.buttonRefreshDate
    );
    thisGeneral.components.statisticTable1 = new SimpleTable (
      {
        rows : [
          {id: 1, title: 'Visit Singup', value: '124'},
          {id: 2, title: 'FTD', value: '445'},
        ],
        className: 'col-sm-12 col-md-6',
      }
    );
    thisGeneral.components.statisticTable2 = new SimpleTable (
      {
        rows : [
          {id: 1, title: 'Net deposit', value: '564'},
          {id: 2, title: 'Turn', value: '132'},
        ],
        className: 'col-sm-12 col-md-6',
      }
    );
    thisGeneral.sections.statistic.rows.dataDisplay.addComponent(
      thisGeneral.components.statisticTable1 
    );
    thisGeneral.sections.statistic.rows.dataDisplay.addComponent(
      thisGeneral.components.statisticTable2 
    );
    thisGeneral.addSection('addLinks', 'Links');
    thisGeneral.sections.addLinks.addRow('addNew1');
    thisGeneral.sections.addLinks.addRow('linkTable');
    thisGeneral.sections.addLinks.addRow('addNew2');
    thisGeneral.components.buttonAddNew1 = new Button(
      '+ Add new', 
      undefined, 
      ['center']
    );
    thisGeneral.sections.addLinks.rows.addNew1.addComponent(
      thisGeneral.components.buttonAddNew1
    );
    thisGeneral.components.buttonAddNew2 = new Button(
      '+ Add new', 
      undefined, 
      ['center']
    );
    thisGeneral.sections.addLinks.rows.addNew2.addComponent(
      thisGeneral.components.buttonAddNew2
    );
    thisGeneral.components.sipleTable = new SimpleTable(
      thisGeneral.getDataLinks()
    );
    thisGeneral.sections.addLinks.rows.linkTable.addComponent(
      thisGeneral.components.sipleTable
    );
  }
}
export default General;
    
    
