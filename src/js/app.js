import SectionBasic from "./sections/SectionBasic";

class App {
  constructor(wrapper) {
    const thisApp = this;
    thisApp.dom.wrapper = document.querySelector(wrapper);
  }
  render() {
    const thisApp = this;
    return thisApp.dom.inner;
  }

}    



new App('#app-wrapper');