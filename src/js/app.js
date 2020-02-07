
import Layout from './Layout.js';
import General from './pages/General.js';
import Baners from './pages/Baners.js';
import Details from './pages/Details.js';


const app = {
  initPages: function () {
    const thisApp = this;
    thisApp.pageLinks = [];
    thisApp.pages = {
      general: new General(),
      baners: new Baners(),
      details: new Details(),
    };
    let menu ='';
    for (let page in thisApp.pages){
      page = thisApp.pages[page];
      thisApp.pageLinks.push({
        title: page.title,
        link: '#/' + page.id,
      });
      menu = menu + '<div class="nav-side" style="color:#ffffff" link="' + page.id +'">' +  page.title + '</div>';
    }
    const menuDOM = document.querySelector('#menu');
    menuDOM.innerHTML = menu;
    const links =  document.querySelectorAll('.nav-side');
    for(let link of links){
      console.log(link);
      link.addEventListener('click', function (){
        window.location.hash = '#/' + link.getAttribute('link');
        thisApp.activatePage(link.getAttribute('link'));
      });
    }
    console.log(thisApp.pageLinks);
    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatcingHash = thisApp.pages.general.id;
    for (let page in thisApp.pages){
      page = thisApp.pages[page];
      if(page.id == idFromHash) {
        pageMatcingHash = page.id;
        break;
      }
    }
    console.log(pageMatcingHash, idFromHash);

    thisApp.activatePage(pageMatcingHash);
  },
  activatePage: function (pageId) {
    const thisApp = this;
    /* add class "active" to matching page, remove from non-matching*/ 
    for( let page in thisApp.pages){
      page = thisApp.pages[page];
      console.log(page.id , pageId);
      page.activeIfTrue(page.id == pageId);
    }
    // for( let link of thisApp.pageLinks){
    //   link.classList.toggle(
    //     classNames.nav.active, 
    //     (link.getAttribute('href') == '#' + pageId)
    //   );
    // }
  },
  initLayout: function () {
    const thisApp = this;
    thisApp.layout = new Layout;
  },
  init: function () {
    const thisApp = this;
    thisApp.initLayout();
    thisApp.initPages();
  }
};

app.init();
console.log(document);