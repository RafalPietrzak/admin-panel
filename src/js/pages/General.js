import {pageGeneral} from '../settings.js';
import Page from './Page.js';
import Button from '../components/Button.js';
import SimpleTable from '../components/SimpleTable.js';


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
      {id: 1, title: 'Home page', link: 'http://www.homepage.com'},
      {id: 2, title: 'Currently offer', link: 'http://www.currently.com'},
      {id: 3, title: 'Blurpix', link: 'http://www.blurpix.com'},
      {id: 4, title: 'Your Site', link: 'http://www.yoursite.com'},
      {id: 5, title: 'Google', link: 'http://www.google.com'},
      {id: 6, title: 'Facebook', link: 'http://www.facebook.com'},
      {id: 7, title: 'Dashboard', link: 'http://www.dashboard.com'},
      {id: 8, title: 'Blurax', link: 'http://www.blurax.com'},
      {id: 9, title: 'Piece of Wine', link: 'http://www.pieceofwine.com'},
      {id: 10, title: 'Twitter', link: 'http://www.twitter.com'},
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
    
    
