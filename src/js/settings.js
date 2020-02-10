/* global Handlebars */

const global = {
  select: {
    template: '#template-layout',
    wrapper: '#app-wrapper',
    element: {
      menuWrapper: '#menu',
      topBarWrapper: '#top-bar',
      contentWrapper: '#main'
    }
  },
  classNames: {

  },
  settings: {

  },
};
global.template = Handlebars.compile(
  document.querySelector(global.select.template).innerHTML
);
export const globalSelect = global.select;
export const globalClassName = global.classNames;
export const globalSettings = global.settings; 
export const globalTemplate = global.template; 

const page = {
  global: {
    select: {
      template: '#template-page-global',
      wrapper: '#main',
    },
    classNames: {
      active: 'page--active',
    },
  },
  general: {
    select: {
      id: '#general',
    },
    title: 'General',
    sections:{
      statistic: {
        rows: ['dateSelector', 'dataDisplay' ],
        title: 'General statistic',
      },
      links: {
        rows: ['linkDisplay' ],
        title: 'Links',
      }
    }
  },
  baners: {
    select: {
      id: '#baner',
    },
    title: 'Baners',
    sections:{
      statistic: {
        rows: ['dateSelector', 'dataDisplay' ],
        title: 'General statistic',
      },
      links: {
        rows: ['linkDisplay' ],
        title: 'Links',
      }
    }
  },
  details: {
    select: {
      id: '#details',
    },
    title: 'Details',
    sections:{
      statistic: {
        rows: ['dateSelector', 'dataDisplay','pagination' ],
        title: 'Detail statistic',
      }
    }
  },
  links: {
    select: {
      id: '#links',
    },
  },
  payout: {
    select: {
      id: '#payout',
    },
  },
  personalData: {
    select: {
      id: '#personal-data',
    },
  },
};
page.global.template = Handlebars.compile(
  document.querySelector(page.global.select.template).innerHTML
);
export const pageGlobal = page.global;
export const pageGeneral = page.general;
export const pageBaners = page.baners;
export const pageDetails = page.details;
export const pageLinks = page.links;
export const pagePayout = page.Payout;
export const pagePersonalData = page.personaldata;

const section = {
  basic: {
    select: {
      template: '#template-section-basic',
      element: {
        title: '.section-basic__header',
        row: 'section-basic__row'
      }
    },
    classNames: {

    },
    settings: {

    },
  },
  sideBar: {
    select: {
      template: '#template-section-side-bar'
    }
  }    
};
section.basic.template = Handlebars.compile(
  document.querySelector(section.basic.select.template).innerHTML
);
export const sectionBasic = section.basic;

const component = {
  general: {
    select: {
      template: '',
      wrapper: '',
      element: {
        
      }
    },
    classNames: {

    },
    settings: {

    },
  },    
};
export const componentGeneral = component.general;



