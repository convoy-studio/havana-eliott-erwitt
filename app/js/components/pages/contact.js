import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import MailApi from '../../utils/mailApi';
let config = require('../../config');
let validator = require('validator');

export default class Contact extends ComponentTransition {

	componentWillMount() {

		this.state = {
			valid: true,
			sended: false
		};

		// binded
		this.sendMail = this.sendMail.bind(this);

	}

	_enterStyle() {
	
		let el = this.refs.view.getDOMNode();
		let logo = document.querySelector('.header__logo');

		TweenMax.fromTo(logo, 0.3, {opacity:1}, {opacity:0, ease:Power2.easeIn});
		this.enterTl = new TimelineMax({delay:0.3, onComplete:()=>{
			logo.style.display = 'none';
		}});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn}, 0);
	
	}
	
	_leaveStyle(callback) {
		
		let el = this.refs.view.getDOMNode();
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});
	
	}

	render() {

		let seo = {
			title: 'Contact | Elliott Erwitt Havana Club 7 Fellowship',
			description: 'Contact us here if you have any questions regarding the "Elliott Erwitt Havana Club 7 Fellowship", our brand or product range.',
			url: config.siteurl + '/contact',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};
// <input className='form__input form__input--text' type='text' id='country' required/>
		return (
			<div className='page page--contact page--classic' ref='view'>
				<Seo seo={seo} />
				<div className='page__content contact'>
					<h1 className='title title--center title--absolute'><span>Contact</span></h1>
					<div className='contact__content'>
						<div className='contact__column'>
							<p className='text'>Please use this contact form if you have questions about the fellowship.<br/><br/>Please note that Photographers wishing to be considered to join the Fellowship will not be able to apply using this form. The Photographers invited to join the Fellowship will be invited based on the merit of their past work by an independent group of Photography professionals.<br/><br/>Please be informed that any personal information collected through this form will be used for the sole purpose of answering your questions and will thereafter be deleted</p>
						</div>
						<div className='contact__column'>
							<form className='form'>
								<div className='form__row'>
									<label className='form__label' htmlFor='mail'>Enter your email address*</label>
									<input className='form__input form__input--text' type='mail' id='mail' required/>
								</div>
								<div className='form__row'>
									<label className='form__label' htmlFor='name'>Name*</label>
									<input className='form__input form__input--text' type='text' id='name' required/>
								</div>
								<div className='form__row'>
									<label className='form__label' htmlFor='subject'>Subject*</label>
									<input className='form__input form__input--text' type='text' id='subject' required/>
								</div>
								<div className='form__row'>
									<label className='form__label' htmlFor='country'>Country*</label>
									<div className='form__select'><select id='country' name='country'>
										<option value="Albania">Albania</option>
										<option value="Algeria">Algeria</option>
										<option value="Andorra">Andorra</option>
										<option value="Argentina">Argentina</option>
										<option value="Armenia">Armenia</option>
										<option value="Australia">Australia</option>
										<option value="Austria">Austria</option>
										<option value="Azerbaijan">Azerbaijan</option>
										<option value="Bahrain">Bahrain</option>
										<option value="Bangladesh">Bangladesh</option>
										<option value="Barbados">Barbados</option>
										<option value="Belarus">Belarus</option>
										<option value="Belgium">Belgium</option>
										<option value="Bermuda">Bermuda</option>
										<option value="Bolivia">Bolivia</option>
										<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
										<option value="Botswana">Botswana</option>
										<option value="Brazil">Brazil</option>
										<option value="Brunei">Brunei</option>
										<option value="Bulgaria">Bulgaria</option>
										<option value="Cambodia">Cambodia</option>
										<option value="Canada">Canada</option>
										<option value="Chile">Chile</option>
										<option value="China">China</option>
										<option value="Colombia">Colombia</option>
										<option value="Costa Rica">Costa Rica</option>
										<option value="Croatia">Croatia</option>
										<option value="Cuba">Cuba</option>
										<option value="Cyprus">Cyprus</option>
										<option value="Czech Republic">Czech Republic</option>
										<option value="Denmark">Denmark</option>
										<option value="Dominican Republic">Dominican Republic</option>
										<option value="Ecuador">Ecuador</option>
										<option value="Egypt">Egypt</option>
										<option value="El Salvador">El Salvador</option>
										<option value="Estonia">Estonia</option>
										<option value="Faroe Islands">Faroe Islands</option>
										<option value="Finland">Finland</option>
										<option value="France">France</option>
										<option value="Georgia">Georgia</option>
										<option value="Germany">Germany</option>
										<option value="Ghana">Ghana</option>
										<option value="Gibraltar">Gibraltar</option>
										<option value="Greece">Greece</option>
										<option value="Greenland">Greenland</option>
										<option value="Guatemala">Guatemala</option>
										<option value="Honduras">Honduras</option>
										<option value="Hong Kong">Hong Kong</option>
										<option value="Hungary">Hungary</option>
										<option value="Iceland">Iceland</option>
										<option value="India">India</option>
										<option value="Indonesia">Indonesia</option>
										<option value="Iran">Iran</option>
										<option value="Iraq">Iraq</option>
										<option value="Ireland">Ireland</option>
										<option value="Israel">Israel</option>
										<option value="Italy">Italy</option>
										<option value="Ivory Coast">Ivory Coast</option>
										<option value="Jamaica">Jamaica</option>
										<option value="Japan">Japan</option>
										<option value="Jordan">Jordan</option>
										<option value="Kazakstan">Kazakstan</option>
										<option value="Kenya">Kenya</option>
										<option value="Korea - Republic of">Korea - Republic of</option>
										<option value="Kuwait">Kuwait</option>
										<option value="Kyrgyzstan">Kyrgyzstan</option>
										<option value="Latvia">Latvia</option>
										<option value="Lebanon">Lebanon</option>
										<option value="Liechtenstein">Liechtenstein</option>
										<option value="Lithuania">Lithuania</option>
										<option value="Luxembourg">Luxembourg</option>
										<option value="Macao">Macao</option>
										<option value="Macedonia">Macedonia</option>
										<option value="Madagascar">Madagascar</option>
										<option value="Malaysia">Malaysia</option>
										<option value="Maldives">Maldives</option>
										<option value="Malta">Malta</option>
										<option value="Mauritius">Mauritius</option>
										<option value="Mexico">Mexico</option>
										<option value="Moldova - Republic of">Moldova - Republic of</option>
										<option value="Monaco">Monaco</option>
										<option value="Mongolia">Mongolia</option>
										<option value="Montenegro">Montenegro</option>
										<option value="Morocco">Morocco</option>
										<option value="Myanmar">Myanmar</option>
										<option value="Namibia">Namibia</option>
										<option value="Netherlands">Netherlands</option>
										<option value="New Zealand">New Zealand</option>
										<option value="Nicaragua">Nicaragua</option>
										<option value="Nigeria">Nigeria</option>
										<option value="Norway">Norway</option>
										<option value="Oman">Oman</option>
										<option value="Pakistan">Pakistan</option>
										<option value="Palestine">Palestine</option>
										<option value="Panama">Panama</option>
										<option value="Paraguay">Paraguay</option>
										<option value="Peru">Peru</option>
										<option value="Philippines">Philippines</option>
										<option value="Poland">Poland</option>
										<option value="Portugal">Portugal</option>
										<option value="Puerto Rico">Puerto Rico</option>
										<option value="Qatar">Qatar</option>
										<option value="Romania">Romania</option>
										<option value="Russian Federation">Russian Federation</option>
										<option value="San Marino">San Marino</option>
										<option value="Saudi Arabia">Saudi Arabia</option>
										<option value="Serbia">Serbia</option>
										<option value="Singapore">Singapore</option>
										<option value="Slovakia">Slovakia</option>
										<option value="Slovenia">Slovenia</option>
										<option value="South Africa">South Africa</option>
										<option value="Spain" selected='selected'>Spain</option>
										<option value="Sri Lanka">Sri Lanka</option>
										<option value="Swaziland">Swaziland</option>
										<option value="Sweden">Sweden</option>
										<option value="Switzerland">Switzerland</option>
										<option value="Taiwan">Taiwan</option>
										<option value="Tanzania">Tanzania</option>
										<option value="Thailand">Thailand</option>
										<option value="Tunisia">Tunisia</option>
										<option value="Turkey">Turkey</option>
										<option value="Turkmenistan">Turkmenistan</option>
										<option value="Ukraine">Ukraine</option>
										<option value="United Arab Emirates">United Arab Emirates</option>
										<option value="United Kingdom">United Kingdom</option>
										<option value="United States">United States</option>
										<option value="Uruguay">Uruguay</option>
										<option value="Uzbekistan">Uzbekistan</option>
										<option value="Vatican">Vatican</option>
										<option value="Venezuela">Venezuela</option>
										<option value="Viet Nam">Viet Nam</option>
										<option value="Zimbabwe">Zimbabwe</option>
									</select></div>
								</div>
								<div className='form__row'>
									<label className='form__label' htmlFor='message'>Message*</label>
									<textarea className='form__input form__input--text form__input--textarea' rows='4' cols='50' id='message' required></textarea>
								</div>
								<div className='form__row form__row--center'>
									<input className='form__submit button' type='submit' value='Submit' onClick={this.sendMail} />
								</div>
								<div className='feedback'>
									{(!this.state.valid) ? (<div className='text response--error'>The form contains errors.</div>) : null}
									{(this.state.sended) ? (<div className='text response--success'>Message sent.</div>) : null}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);

	}

	sendMail(e) {

		e.preventDefault();

		// let mail = validator.isEmail(document.getElementById('mail').value);
		let mail = document.getElementById('mail').value;
		let name = document.getElementById('name').value;
		let subject = document.getElementById('subject').value;
		let country = document.getElementById('country').value;
		let message = document.getElementById('message').value;
		let valid = validator.isEmail(mail) && name.length > 0 && subject.length > 0 && country.length > 0 && message.length > 0;
		
		if (valid) {
			this.setState({
				sended: true,
				valid: true
			});
			MailApi.sendMail({
				mail: mail,
				name: name,
				subject: subject,
				country: country,
				message: message.replace(/(\r\n|\n|\r)/g,'<br/>')
			});
		} else {
			this.setState({
				valid: false
			});
		}

	}
}