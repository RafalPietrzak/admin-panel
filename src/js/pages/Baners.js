import {pageBaners} from '../settings.js';
import Page from './Page.js';
import Button from '../components/Button.js';
import SimpleTable from '../components/SimpleTable.js';

class Baners extends Page {
  constructor() {
    super(
      pageBaners
    );
    const thisBaners = this;
    thisBaners.addComponents()
  }
  getData() {
    const thisBaners = this;
    thisBaners.data={};
    thisBaners.data.links = [
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
      rows: thisBaners.data.links,
    };
    return options;
  }
  addComponents() {
    const thisBaners = this;
    thisBaners.components = {};
    thisBaners.addSection('addBaners',  'Baners');
    thisBaners.sections.addBaners.addRow('addNew1');
    thisBaners.sections.addBaners.addRow('linkTable');
    thisBaners.sections.addBaners.addRow('addNew2');
    thisBaners.components.buttonAddNew1 = new Button(
      '+ Add new', 
      undefined, 
      ['center']
    );
    thisBaners.sections.addBaners.rows.addNew1.addComponent(
      thisBaners.components.buttonAddNew1
    );
    thisBaners.components.buttonAddNew2 = new Button(
      '+ Add new', 
      undefined, 
      ['center']
    );
    thisBaners.sections.addBaners.rows.addNew2.addComponent(
      thisBaners.components.buttonAddNew2
    );
    thisBaners.components.sipleTable = new SimpleTable(
      thisBaners.getData()
    );
    thisBaners.sections.addBaners.rows.linkTable.addComponent(
      thisBaners.components.sipleTable
    );
  }
}

export default Baners;
