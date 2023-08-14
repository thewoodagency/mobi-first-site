import '../assets/styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import Scroll from './modules/Scroll';

const mobileMenu = new MobileMenu();
new Scroll(document.querySelectorAll('.feature-item'), 75);
new Scroll(document.querySelectorAll('.testimonial'), 60);

if (module.hot) {
  module.hot.accept();
}
