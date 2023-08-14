import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class Scroll {
  constructor(domElement, thresholdPercent) {
    this.itemsToReveal = domElement;
    this.browserHeight = window.innerHeight;
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
		this.value = thresholdPercent;
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle);
    window.addEventListener(
      'resize',
      debounce(() => {
        console.log('resize just ran');
        this.browserHeight = window.innerHeight;
      }, 333)
    );
  }

  calcCaller() {
    console.log('scroll running');
    this.itemsToReveal.forEach((el) => {
      if (!el.isReavled) {
        this.calculateIfScrolledTo(el);
      }
    });
  }

  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      console.log(el, ' calculated');
      let scrollPercent =
        (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if (scrollPercent < this.value) {
        el.classList.add('reveal-item--is-visible');
        el.isReavled = true;
        if (el.isLastItem) {
          window.removeEventListener('scroll', this.scrollThrottle);
        }
      }
    }
    //console.log(scrollPercent);
  }

  hideInitially() {
    this.itemsToReveal.forEach((el) => {
      el.classList.add('reveal-item');
      el.isReavled = false;
    });

    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
  }
}

export default Scroll;
