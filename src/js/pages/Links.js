import {pageLinks} from '../settings.js';
import Page from './Page.js';
import Button from '../components/Button.js';
import SimpleTable from '../components/SimpleTable.js';

class Links extends Page {
  constructor() {
    super(
      pageLinks
    );
    const thisLinks = this; 
    thisLinks.addComponents();
  }
  getData() {
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
      icon: true,
    };
    return options;
  }
  addComponents() {
    const thisLinks = this;
    thisLinks.components = {};
    thisLinks.addSection('addLinks',  'Add Links');
    thisLinks.sections.addLinks.addRow('addNew1');
    thisLinks.sections.addLinks.addRow('linkTable');
    thisLinks.sections.addLinks.addRow('addNew2');
    thisLinks.components.buttonAddNew1 = new Button(
      '+ Add new', 
      undefined, 
      ['center']
    );
    thisLinks.sections.addLinks.rows.addNew1.addComponent(
      thisLinks.components.buttonAddNew1
    );
    thisLinks.components.buttonAddNew2 = new Button(
      '+ Add new', 
      undefined, 
      ['center']
    );
    thisLinks.sections.addLinks.rows.addNew2.addComponent(
      thisLinks.components.buttonAddNew2
    );
    thisLinks.components.sipleTable = new SimpleTable(
      thisLinks.getData()
    );
    thisLinks.sections.addLinks.rows.linkTable.addComponent(
      thisLinks.components.sipleTable
    );
  }
}

export default Links;
