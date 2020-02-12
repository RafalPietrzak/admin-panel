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
    icon: 'icon-general',
    iconName: 'icon general',
    sections: {
      statistic: {
        rows: ['dateSelector', 'dataDisplay'],
        title: 'General statistic',
      },
      links: {
        rows: ['linkDisplay'],
        title: 'Links',
      }
    }
  },
  baners: {
    select: {
      id: '#baner',
    },
    title: 'Baners',
    icon: 'icon-banners',
    iconName: 'icon braners',
    sections: {
      statistic: {
        rows: ['Baner', 'Baner'],
        title: 'Baner',
      },
      links: {
        rows: ['linkDisplay'],
        title: 'Links',
      }
    }
  },
  details: {
    select: {
      id: '#details',
    },
    title: 'Details',
    icon: 'icon-details',
    iconName: 'icon details',
    sections: {
      statistic: {
        rows: ['dateSelector', 'dataDisplay', 'pagination'],
        title: 'Detail statistic',
      }
    }
  },
  links: {
    select: {
      id: '#links',
    },
    title: 'Links',
    icon: 'icon-links',
    iconName: 'icon links',
  },
  payout: {
    select: {
      id: '#payout',
    },
    title: 'Payout',
    icon: 'icon-peyout',
    iconName: 'icon peyout',
  },
  personalData: {
    select: {
      id: '#personal-data',
    },
    title: 'Personal Data',
    icon: 'icon-personaldata',
    iconName: 'icon personal data',
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
        row: '.section-basic__row'
      }
    },
    classNames: {

    },
    settings: {

    },
  },
  sideBar: {
    select: {
      template: '#template-section-side-bar',
      wrapper: '#side-bar-wrapper',
      menuWrapper: '#side-bar__menu-wrapper',
      topBarWrapper: '#side-bar__top-bar-wrapper',
      menuButton: '.side-bar__menu-button',
    }
  }
};
section.basic.template = Handlebars.compile(
  document.querySelector(section.basic.select.template).innerHTML
);
section.sideBar.template = Handlebars.compile(
  document.querySelector(section.sideBar.select.template).innerHTML
);
export const sectionBasic = section.basic;
export const sectionSideBar = section.sideBar;

const component = {
  menu: {
    select: {
      template: '#template-componet-menu',
      link: '.menu__link',
    },
    classNames: {
      active: 'menu__link--active',
    },
    settings: {

    },
  },
};
component.menu.template = Handlebars.compile(
  document.querySelector(component.menu.select.template).innerHTML
);
export const componentMenu = component.menu;



