import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
let config = require('../../config');

export default class Legal extends ComponentTransition {

	componentWillMount(){

	}

	componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');
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
			title: 'Cookie Policy | Elliott Erwitt Havana Club 7 Fellowship',
			description: '',
			url: config.siteurl + '/cookie-policy',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		return (
			<div className='page page--legal page--classic' ref='view'>
				<Seo seo={seo} />
				<div className='page__content legal'>
					<h1 className='title title--center title--absolute'><span>Cookie Policy</span></h1>
					<p className='text'>This website uses cookies and similar technologies (“cookies”).<br/><br/>This cookies policy describes how the Fundación Elliott Erwitt Havana Club 7 Fellowship (the “Foundation”) is committed to respecting your privacy regarding its use of cookies on this website.</p>
					<br/><br/>
					<p className='text'>Este sitio web utiliza cookies y tecnologías similares (“cookies”).<br/><br/>Esta política de cookies describe la forma en que la Fundación Elliott Erwitt Havana Club 7 Fellowship (la “Fundación”) se compromete a respetar su privacidad respecto del uso de cookies en este sitio web.</p>
					<br/><br/>
					<span className='paragraph__title'>What is a cookie?</span>
					<p className='text'>Cookies are small text files or pieces of information that are stored on your computer or mobile device (such as a smartphone or tablet) when you visit a website. A cookie will usually contain the name of the website/application from which the cookie comes from, the duration of the cookie (i.e. how long the cookie will remain on your device), and a value, which is usually a randomly generated unique number.</p>
					<br/><br/>
					<span className='paragraph__title'>¿Qué es una cookie?</span>
					<p className='text'>Las cookies son pequeños archivos de texto o piezas de información que se almacenan en su ordenador o dispositivo móvil (como puede ser un smartphone o tablet) cuando usted visita un sitio web. Una cookie contendrá normalmente el nombre del sitio web/aplicación de la que proviene la cookie, la duración de la cookie (esto es, cuánto tiempo permanecerá en su dispositivo), y un valor, que suele ser un valor generado aleatoriamente.</p>
					<br/><br/>
					<span className='paragraph__title'>What are the different types of cookies we use?</span>
					<p className='text'>The Foundation uses first party cookies as well as the third party cookies listed below:</p>
					<br/><br/>
					<table className='table'>
						<tr>
							<th>Cookie</th>
							<th>Type</th>
							<th>Purpose</th>
							<th>Owner</th>
						</tr>
						<tr>
							<td>Google Analytics</td>
							<td>Analytical</td>
							<td>Distinguish users and sessions and remember the number and time of previous visits, the pages the user visits, and how the user reached the website.<br/><br/><a className='underline' href='https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage'>More information.</a></td>
							<td>Google Inc.</td>
						</tr>
						<tr>
							<td>Facebook</td>
							<td>Customization, analytical and technical</td>
							<td>Show users a personalized experience on this website and Facebook based on their use.<br/><br/>Help maintain and improve our service.<br/><br/>Protect both the user and Facebook from malicious activity.<br/><br/><a className='underline' href='https://www.facebook.com/help/cookies/'>More information.</a></td>
							<td>Facebook Inc.</td>
						</tr>
						<tr>
							<td>Twitter</td>
							<td>Customization and analytical</td>
							<td>Show users a personalized experience on this website based on their use.<br/><br/>Analyze and measure the users’ use of this website.<br/><br/><a className='underline' href='https://support.twitter.com/articles/20170518'>More information.</a></td>
							<td>Twitter Inc.</td>
						</tr>
						<tr>
							<td>Mandrill</td>
							<td>Functionnal</td>
							<td>Create, send and manage emails.<br/><br/>Manage the Foundation’s database.</td>
							<td>The Rocket Science Group, LLC.</td>
						</tr>
					</table>
					<br/><br/>
					<span className='paragraph__title'>¿Qué tipos diferentes de cookies utilizamos?</span>
					<p className='text'>La Fundación utiliza las cookies propias y las cookies de terceros indicadas a continuación:</p>
					<br/><br/>
					<table className='table'>
						<tr>
							<th>Cookie</th>
							<th>Tipo</th>
							<th>Finalidad</th>
							<th>Titular</th>
						</tr>
						<tr>
							<td>Google Analytics</td>
							<td>Analíticas</td>
							<td>Distinguir usuarios y sesiones, y saber el tiempo que pasa el usuario en el sitio web, el número de páginas que visita, así como desde dónde y cómo ha llegado el usuario al sitio web.<br/><br/><a className='underline' href='https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage'>Más información.</a></td>
							<td>Google Inc.</td>
						</tr>
						<tr>
							<td>Facebook</td>
							<td>Personalización, analíticas y técnicas</td>
							<td>Mostrar a los usuarios una experiencia personalizada en este sitio web y en Facebook basada en su uso.<br/><br/>Ayudar a mantener y mejorar nuestro servicio.<br/><br/>Proteger tanto a los usuarios como a Facebook de actividades maliciosas.<br/><br/><a className='underline' href='https://www.facebook.com/help/cookies/'>More information.</a></td>
							<td>Facebook Inc.</td>
						</tr>
						<tr>
							<td>Twitter</td>
							<td>Personalización y analíticas</td>
							<td>Mostrar a los usuarios una experiencia personalizada en este sitio web y en Facebook basada en su uso.<br/><br/>Analizar y medir el uso de este sitio web por parte del usuario.<br/><br/><a className='underline' href='https://support.twitter.com/articles/20170518'>More information.</a></td>
							<td>Google Inc.</td>
						</tr>
						<tr>
							<td>Mandrill</td>
							<td>Técnicas</td>
							<td>Crear, enviar y gestionar emails.<br/><br/>Gestionar la base de datos de la Fundación.</td>
							<td>The Rocket Science Group, LLC.</td>
						</tr>
					</table>
					<br/><br/>
					<span className='paragraph__title'>How to disable cookies?</span>
					<p className='text'>You may refuse the use of cookies by selecting the appropriate settings on your browser. However, in that case, the website may not be fully functional.<br/><br/>Removing cookies depends on the browser you are using. In the following links you can find instructions for removing cookies from some of the major browsers:</p>
					<br/><br/>
					<span className='paragraph__title'>¿Cómo desactivar las cookies?</span>
					<p className='text'>El usuario puede rechazar el uso de cookies mediante la selección de la configuración apropiada de su navegador. Sin embargo, si lo hace, quizá no pueda usar el sitio web de forma plenamente funcional.<br/><br/>La eliminación de las cookies depende del navegador que esté utilizando. En los siguientes enlaces puede usted encontrar instrucciones para eliminar cookies de algunos de los principales navegadores:</p>
					<br/>
					<ul>
						<li><a className='underline' href='http://windows.microsoft.com/es-es/internet-explorer/delete-manage-cookies#ie=ie-11-win-7' target='_blank'>Internet Explorer.</a></li>
						<li><a className='underline' href='https://support.mozilla.org/es/kb/Borrar%2520cookies' target='_blank'>Firefox.</a></li>
						<li><a className='underline' href='https://support.google.com/chrome/answer/95647?hl=es' target='_blank'>Chrome.</a></li>
						<li><a className='underline' href='https://support.apple.com/kb/PH19214?viewlocale=es_ES&locale=en_US' target='_blank'>Safari.</a></li>
						<li><a className='underline' href='http://help.opera.com/Windows/12.00/es-ES/cookies.html' target='_blank'>Opera.</a></li>
					</ul>
					<span className='paragraph__title'>Contact</span>
					<p className='text'>If you have any questions, comments, or concerns about your our use of cookies please contact <a className='underline' href='mailto:contact@havana-fellowship.com'>contact@havana-fellowship.com</a>.</p>
					<br/><br/>
					<span className='paragraph__title'>Contacto</span>
					<p className='text'>Si tiene cualquier pregunta, comentario o problema en relación con el uso de cookies, por favor diríjase a <a className='underline' href='mailto:contact@havana-fellowship.com'>contact@havana-fellowship.com</a>.</p>
				</div>
			</div>
		);

	}
}
