import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
let config = require('../../config');

export default class Terms extends ComponentTransition {

	componentWillMount(){
		
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
			title: 'Terms and conditions of use | Elliott Erwitt Havana Club 7 Fellowship',
			description: '',
			url: config.siteurl + '/terms-and-condition-of-use',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		return (
			<div className='page page--rerms page--classic' ref='view'>
				<Seo seo={seo} />
				<div className='page__content terms'>
					<h1 className='title title--center title--absolute'><span>Terms and<br/>conditions of use</span></h1>
					<p className='paragraph paragraph--2 paragraph--margin text'>
						<span className='paragraph__title'>1. Identification data</span>
						The owner of this website is the Fundación Elliott Erwitt Havana Club 7 Fellowship (the “Foundation”), with address at Calle Manuel Marañón 8, 28043 Madrid, Spain. The Foundation is pending incorporation.
						<span className='paragraph__title'>1. Datos identificativos</span>
						El titular de este sitio web es la Fundación Elliott Erwitt Havana Club 7 Fellowship (en adelante, la “Fundación”), domicilio en calle Manuel Marañón 8, 28043 Madrid, España. La Fundación está pendiente de constitución.
						
						<span className='paragraph__title'>2. Contact</span>
						<span className='paragraph__inline'>To contact us, please write to </span><a className='underline' href='mailto:contact@havana-fellowship.com'>contact@havana-fellowship.com</a><span className='paragraph__inline'> or use the contact section.</span>
						<span className='paragraph__title'>2. Contacto</span>
						<span className='paragraph__inline'>Si desea usted contactar con nosotros, escríbanos a </span><a className='underline' href='mailto:contact@havana-fellowship.com'>contact@havana-fellowship.com</a><span className='paragraph__inline'>, o utilice la sección contacto.</span>
						
						<span className='paragraph__title paragraph__title--margin'>3. Use of the website</span>
						By using this website, you become the user and automatically agree to the conditions below.<br/>The user agrees to make appropriate and diligent use of the website’s content and services under the law, the morality, the public order and the provisions of these conditions of use and to refrain from using such content and services in any way that may impede, damage or deteriorate the normal operation and enjoyment of the website by other users, or that may harm or cause damage to the property and rights of the Foundation, Elliot Erwitt, other users or, in general, any third party.<br/>Furthermore, and without limitation to the general scope of the obligations imposed in the preceding paragraph, the user agrees when using this website: (a) not to introduce or disseminate content or information that may be racist, sexist, xenophobic, pornographic, libelous or obscene, that may advocate  terrorism, incite violence or violate human rights, or that may be in any way prejudicial to morality, public order, fundamental rights, public freedoms, honor, privacy or the image of others and, in general, against applicable law; (b) not to damage the physical and logical systems of the Foundation or third parties, nor introduce, store or transfer through the website any program, data, computer virus, code or any other physical or logical system that may cause such damage; (c) not to use the website, its content and, in particular, the information obtained through the website, to send advertising for direct marketing or any other commercial purpose, or to collect or store personal data of third parties.
						<span className='paragraph__title'>3. Uso del sitio web</span>
						El uso del presente sitio web le atribuye a usted la condición de usuario. El usuario acepta, por el mero uso, las condiciones aquí reflejadas.<br/><br/>El usuario se compromete a hacer un uso adecuado y diligente de los contenidos y servicios del sitio web, de conformidad con la ley, la moral, el orden público y lo dispuesto en estas condiciones de uso, y deberá abstenerse de utilizar dichos contenidos y servicios en cualquier forma que pueda impedir, dañar o deteriorar el normal funcionamiento y disfrute del sitio web por parte de otros usuarios o que pudiera lesionar o causar daños a los bienes y derechos de la Fundación, de Elliot Erwitt, de otros usuarios o, en general, de cualquier tercero.<br/><br/>Además, y sin que esta enumeración limite el alcance general de la obligación dispuesta en el párrafo anterior, el usuario se obliga en la utilización del sitio web a: (a) no introducir o difundir contenidos o información de carácter racista, sexista, xenófobo, pornográfico, injurioso, obsceno, que suponga apología del terrorismo, incite a la violencia o atente contra los derechos humanos, o que de cualquier forma atente contra la moral, el orden público, los derechos fundamentales, las libertades públicas, el honor, la intimidad o la imagen de terceros y, en general, la normativa vigente; (b) no provocar daños en los sistemas físicos y lógicos de la Fundación o de terceras personas, ni introducir, almacenar o difundir mediante el sitio web ningún programa, dato, virus informático, código o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños mencionados; (c) no utilizar el sitio web, los contenidos y en particular la información obtenida a través del sitio web, para remitir publicidad, enviar mensajes con fines de venta directa o con cualquier otro fin comercial, ni para recoger o almacenar datos personales de terceros.
						
						<span className='paragraph__title'>4. Internet access</span>
						The user acknowledges and agrees that in connection with his or her use of this website and services he or she must: (a) provide for his or her own access to the World Wide Web and pay any service fees associated with such access, and (b) provide all equipment necessary for him or her to make such access and connection to the World Wide Web, including a computer, software, a modem and a means of connecting to or accessing the Internet. The Foundation shall not be responsible for any malfunctions, errors, crashes or other adverse events that may occur from the user’s use of the website.
						<span className='paragraph__title'>4. Acceso a internet</span>
						El usuario reconoce y acepta que en relación con su uso de este sitio web y los servicios en él ofrecidos deberá: (a) proveerse de acceso a la World Wide Web y pagar las tarifas asociadas a dicho acceso; y (b) proveerse del equipo necesario para realizar dicho acceso y conectarse a la World Wide Web, incluyendo ordenadores, software, módem y cualesquiera otros medios de conexión o acceso a internet. La Fundación no será responsable del mal funcionamiento, errores, caídas u otros eventos adversos que puedan producirse a razón del uso del sitio web por parte del usuario.
						
						<span className='paragraph__title'>5. Intellectual and industrial property</span>
						The user acknowledges that all elements contained or used on the website (including photographs and other images, software, text and trademarks) are protected by the intellectual, industrial property and image rights of their respective owners or licensees and undertakes to respect these rights.<br/>Unless the law provides otherwise or the Foundation expressly authorizes it, the user may not reproduce, transform, modify, disassemble, reverse engineer, distribute, rent, lend, make available or allow public access through any means of public communication any of the elements mentioned in the preceding paragraph without the right holder’s authorization.
						<span className='paragraph__title'>5. Propiedad intelectual e industrial</span>
						El usuario reconoce que todos los elementos contenidos o utilizados en el sitio web (como pueden ser fotografías y otras imágenes, software, textos y marcas) están protegidos por derechos de propiedad intelectual o industrial, así como derechos de imagen de sus respectivos titulares o licenciatarios, y se compromete a respetar tales derechos.<br/><br/>Salvo que la ley disponga lo contrario o la Fundación lo autorice expresamente, el usuario no podrá reproducir, transformar, modificar, desensamblar, realizar ingeniería inversa, distribuir, alquilar, prestar, poner a disposición, o permitir el acceso al público a través de cualquier modalidad de comunicación pública de ninguno de los elementos referidos en el párrafo anterior, sin la autorización de los titulares de los derechos correspondientes.
						
						<span className='paragraph__title'>6. Exclusions of guarantees and liability</span>
						The Foundation will only be liable for damages the user may suffer as a result of using the web site if such damages are attributable to the Foundation’s willful misconduct. The user acknowledges and agrees that the use of the website is at his or her sole risk and responsibility.<br/>The Foundation will act diligently, according to generally accepted practices in its sector, to avoid website viruses or any other harmful elements that may modify the user's computer system, but it cannot guarantee the absence of such elements, and it will not be liable for the damages they may cause.<br/>The Foundation will not be liable for any damages that may arise from but not limited to: (a) interferences, omissions, interruptions, computer viruses, breakdowns and disconnections in the user’s equipment and devices driven by causes unrelated to the Foundation; (b) interruptions or blockages in the use of the website caused by Internet or other electronic system deficiencies or overloading; (c) damages caused by third parties through website intrusion; and (d) failure to provide the service or allow access for reasons not attributable to the Foundation but to the user, third parties or force majeure.
						<span className='paragraph__title'>6. Exclusión de garantías y responsabilidad</span>
						La Fundación únicamente responderá de los daños que el usuario pueda sufrir como consecuencia de la utilización del sitio web cuando dichos daños sean imputables a una actuación dolosa de la Fundación. El usuario reconoce y acepta que la utilización del sitio web se realiza bajo su entero riesgo y su entera responsabilidad.<br/><br/>La Fundación actuará diligentemente, según los usos generalmente aceptados en el sector, para evitar la presencia en el sitio web de virus u otros elementos lesivos que pudieran causar alteraciones en el sistema informático del usuario, pero no puede garantizar la ausencia de tales elementos, no siendo responsable por los daños y perjuicios que ello pudiera ocasionar.<br/>Con carácter meramente enunciativo y no limitativo, la Fundación no se hará responsable de los perjuicios que se pudieran derivar de: (a) interferencias, omisiones, interrupciones, virus informáticos, averías y/o desconexiones en los equipos y dispositivos del usuario, motivados por causas ajenas a la Fundación; (b) interrupciones o bloqueos en el uso causados por deficiencias o sobrecargas de Internet o en otros sistemas electrónicos; (c) perjuicios que causados por terceras personas mediante intromisiones ilegítimas en el sitio web; y (d) la imposibilidad de dar el servicio o permitir el acceso por causas no imputables a la Fundación, debidas al usuario, a terceros, o a supuestos de fuerza mayor.
						
						<span className='paragraph__title'>7. No confidentiality</span>
						The user agrees and acknowledges that by using this website, any and all communications and/or information transmitted by the user to or through the website will not be treated as confidential or proprietary.<br/>Any information or material submitted on the website or sent to the Foundation will be deemed not to be confidential or secret. By submitting on the website or sending information or other material to the Foundation, the user represents and warrants that the information is original to him or her and that no other party has any rights to the material.
						<span className='paragraph__title'>7. No confidencialidad</span>
						El usuario reconoce y acepta, por el uso del sitio web, las comunicaciones y/o información que transmita a o a través del sitio web no se tratarán como si fueran confidenciales o protegidas.<br/>Cualquier  información o material enviado a través del sitio web o a la Fundación se entenderá como no confidencial ni secreto. Al enviar información o materiales a través del sitio web o a la Fundación, el usuario declara y garantiza que la información es original suya y que ningún tercero tiene derechos sobre los materiales.
						
						<span className='paragraph__title'>8. Links to other web sites</span>
						The Foundation has no control over other websites linked by it and their content, and it will not be liable for damages arising from the access and use of those websites. The inclusion of links or hyperlinks does not imply any association or involvement of the Foundation with the linked websites.
						<span className='paragraph__title'>8. Enlaces a otros sitios de internet</span>
						En el caso de enlaces o hipervínculos a otros sitios de internet, la Fundación no ejerce control sobre dichos sitios y contenidos, ni asumirá responsabilidad alguna por los daños y perjuicios que puedan derivarse del acceso y uso de dichos sitios. La inclusión de estos enlaces o hipervínculos no implica ningún tipo de asociación o participación de la Fundación con los sitios enlazados.
						
						<span className='paragraph__title'>9. Modification of these conditions</span>
						The Foundation may modify these conditions of use any time, and it will publish the new conditions of use on the website so that the user may review them before using the website. Using the website once the conditions of use are modified implies the user’s acceptance of any modifications to these conditions.
						<span className='paragraph__title'>9. Modificación de las presentes condiciones</span>
						La Fundación podrá modificar en cualquier momento estas condiciones de uso y publicará las nuevas condiciones de uso en el sitio web de forma que el usuario pueda conocerlas antes de proceder al uso del sitio web. La utilización del sitio web una vez modificadas las condiciones de uso significará la aceptación por parte del usuario de las condiciones de uso así modificadas.
						
						<span className='paragraph__title'>10. Applicable law and jurisdiction</span>
						The provisions of these conditions of use will be governed by and construed in accordance with Spanish law, and any dispute will be submitted to the courts of the city of Madrid.
						<span className='paragraph__title'>10. Legislación aplicable y fuero</span>
						Las disposiciones contenidas en las presentes condiciones de uso se regirán e interpretarán de conformidad con la normativa española y cualquier controversia se someterá a los juzgados y tribunales de la ciudad de Madrid.
					</p>
				</div>
			</div>
		);

	}
}