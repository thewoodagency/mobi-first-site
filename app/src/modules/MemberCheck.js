import Axios from 'axios';

class MemberCheck {
  constructor() {
    this.injectHTML();
    this.form = document.querySelector('.client-area__form');
    this.field = document.querySelector('.client-area__input');
    this.contentArea = document.querySelector('.client-area__content-area');
    this.events();
  }

  events() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(this.field.value);
      this.sendRequest();
    });
  }

  sendRequest() {
    Axios.post(
      'https://radiant-licorice-29bb34.netlify.app/.netlify/functions/member_check',
      {
        key: this.field.ariaValueNow,
      }
    )
      .then((response) => {
        this.form.remove();
        this.contentArea.innerHTML = response.data;
      })
      .catch((err) => {
        this.contentArea.innerHTML = `${err} <p>try again</p>`;
        this.field.value = '';
        this.field.focus();
      });
  }
  injectHTML() {
    document.body.insertAdjacentHTML(
      'beforeend',
      `
			<div class="client-area">
			<div class="wrapper wrapper--medium">
				<h2 class="section-title section-title--blue">Secret Client Area!!</h2>
				<form class="client-area__form" action="">
					<input class="client-area__input" type="text" placeholder="Enter the secret phrase">
					<button class="btn btn--orange">Submit</button>
				</form>
				<div class="client-area__content-area"></div>
			</div>
		</div>
			`
    );
  }
}

export default MemberCheck;
