import '../assets/styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import Scroll from './modules/Scroll';
import StickHeader from './modules/StickyHeader';
import MemberCheck from './modules/MemberCheck';

new MemberCheck();
new MobileMenu();
new Scroll(document.querySelectorAll('.feature-item'), 75);
new Scroll(document.querySelectorAll('.testimonial'), 60);
new StickHeader();

let modal;

document.querySelectorAll('.open-modal').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof modal == 'undefined') {
      import(/* webpackChunkName: "modal" */ './modules/Modal').then((x) => {
        modal = new x.default();
        setTimeout(() => modal.showModal(), 20);
      });
    } else {
      modal.showModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
