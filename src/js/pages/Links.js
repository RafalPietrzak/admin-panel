import {pageLinks} from '../settings.js';
import Page from './Page.js';
import Button from '../components/Button.js';

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
  }
  addComponents() {
    const thisLinks = this;
    thisLinks.components = {};
    thisLinks.dom.rows = {};
    thisLinks.dom.rows.addNew1 = thisLinks.section.addLinks.dom.rows.addNew1;
    thisLinks.dom.rows.addNew2 = thisLinks.section.addLinks.dom.rows.addNew2;  
    thisLinks.components.buttonAddNew1 = new Button(
      '+ Add new', 
      undefined, 
      ['center']
    );
    thisLinks.dom.rows.addNew1.appendChild(
      thisLinks.components.buttonAddNew1.dom.element
    );
    thisLinks.components.buttonAddNew2 = new Button(
      '+ Add new', 
      undefined, 
      ['center']
    );
    thisLinks.dom.rows.addNew2.appendChild(
      thisLinks.components.buttonAddNew2.dom.element
    );

  }
}

export default Links;
