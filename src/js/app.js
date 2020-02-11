
import Layout from './Layout.js';
import General from './pages/General.js';
import Baners from './pages/Baners.js';
import Details from './pages/Details.js';
import SideBar from './sections/SideBar.js';
import Menu from './components/Menu.js';


const app = {
  initPages: function () {
    const thisApp = this;
    thisApp.pages = {
      general: new General(),
      baners: new Baners(),
      details: new Details(),
    };
    thisApp.initMenu();
    for(let link of thisApp.menu.dom.links){
      link.addEventListener('click', function (){
        window.location.hash = link.getAttribute('href');
        thisApp.activatePage(link.getAttribute('href').replace('#/', ''));
      });
    }
    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatcingHash = thisApp.pages.general.id;
    for (let page in thisApp.pages){
      page = thisApp.pages[page];
      if(page.id == idFromHash) {
        pageMatcingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatcingHash);
  },
  activatePage: function (pageId) {
    const thisApp = this;
    for( let page in thisApp.pages){
      page = thisApp.pages[page];
      if(page.id == pageId){
        page.activeIfTrue(true);
        thisApp.menu.active(pageId);
      } else {
        page.activeIfTrue(false);
      }
    }
  },
  initLayout: function () {
    const thisApp = this;
    thisApp.layout = new Layout;
  },
  initSideBar: function () {
    const thisApp = this;
    thisApp.sideBar = new SideBar;
  },
  initMenu: function () {
    const thisApp = this;
    thisApp.pageLinks = [];
    for (let page in thisApp.pages){
      page = thisApp.pages[page];
      thisApp.pageLinks.push({
        link: '#/' + page.id,
        icon: page.icon,
        iconName: page.iconName,
        linkTitle: page.title,
      });
    }
    thisApp.menu = new Menu(thisApp.sideBar.dom.menuWrapper, thisApp.pageLinks);
  },
  init: function () {
    const thisApp = this;
    thisApp.initLayout();
    thisApp.initSideBar();
    thisApp.initPages();
  }
};

app.init();
