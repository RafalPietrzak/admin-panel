/* global Handlebars */

const global = {
  select: {
    template: '#template-layout',
    wrapper: '#app-wrapper',
    element: {
      topBarWrapper: '#top-bar',
      contentWrapper: '#main'
    }
  },
  classNames: {
    mainFullMenu: 'main--full-menu',
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
  },
  baners: {
    select: {
      id: '#baner',
    },
    title: 'Baners',
    icon: 'icon-banners',
    iconName: 'icon braners',
    sections: {
      baners: {
        rows: ['Baner', 'Baner'],
        title: 'Baner',
      },
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
    sections: {
      addLinks: {
        rows: ['addNew1', 'tableLinks', 'addNew2'],
        title: 'Links',
      }
    }
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
      },
    },
    row: {
      select: {
        template: '#template-section-basic-row'
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
    },
    settings: {
      logo: 'images/logo.png'
    },
    classNames: {
      sideBarFull: 'side-bar--full',
    }
  },
  topBar: {
    select: {
      template: '#template-section-top-bar',
      lineNotificationWraper: '.top-bar__line-notification-wrapper',
      waletWrapper: '#top-bar__walet-wrapper',
      notificationWrapper: '#top-bar__notification-wrapper',
      profileWrapper: '#top-bar__profile-wrapper',
      exitButton: '.top-bar__exit-button',
    }
  }

};
section.basic.template = Handlebars.compile(
  document.querySelector(section.basic.select.template).innerHTML
);
section.basic.row.template = Handlebars.compile(
  document.querySelector(section.basic.row.select.template).innerHTML
);
section.sideBar.template = Handlebars.compile(
  document.querySelector(section.sideBar.select.template).innerHTML
);
section.topBar.template = Handlebars.compile(
  document.querySelector(section.topBar.select.template).innerHTML
);
export const sectionBasic = section.basic;
export const sectionSideBar = section.sideBar;
export const sectionTopBar = section.topBar; 

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
  button: {
    select: {
      template: '#template-component-button',
    },
    classNames: {
      center: 'button--center-block',
    }
  },
  simpleTable: {
    select: {
      template: '#template-component-simple-table',
    },
  },
  dataScope: {
    select: {
      template: '#template-component-data-scope-form',
      input1: 'input[name="date1"]',
      input2: 'input[name="date2"]',
    }
  },
  chart: {
    select: {
      template: '#template-component-chart',
    }
  }
};
component.menu.template = Handlebars.compile(
  document.querySelector(component.menu.select.template).innerHTML
);
component.button.template = Handlebars.compile(
  document.querySelector(component.button.select.template).innerHTML
);
component.simpleTable.template = Handlebars.compile(
  document.querySelector(component.simpleTable.select.template).innerHTML
);
component.dataScope.template = Handlebars.compile(
  document.querySelector(component.dataScope.select.template).innerHTML
);
component.chart.template = Handlebars.compile(
  document.querySelector(component.chart.select.template).innerHTML
);

export const componentMenu = component.menu;
export const componentButton = component.button;
export const componentSimpleTable = component.simpleTable;
export const componentDataScope = component.dataScope;
export const componentChart = component.chart;





