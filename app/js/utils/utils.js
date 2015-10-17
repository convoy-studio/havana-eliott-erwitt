export default class Utils {

	static getScrollTop() {
		return (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
	}

	static getSupportedPropertyName(property) {
		const prefixes = ['', 'ms', 'Webkit', 'Moz', 'O'];
		
		for(let i = 0; i < prefixes.length; i++) {
			let prefix = prefixes[i];
			property = prefix === '' ? property : property.charAt(0).toUpperCase() + property.substring(1).toLowerCase();
			let prop = prefix+property;
			
			if(typeof document !== 'undefined' && typeof document.body.style[prop] != "undefined") 
				return prop;
		}
		
		return null;
	}

	static raf() {
		if(typeof window !== 'undefined') {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				function(callback){ window.setTimeout(callback, 1000/60) };
		} else {
			return false;
		}
	}

	static clearRaf(id) {
		if(typeof window !== 'undefined') {
			return window.cancelAnimationFrame(id) ||
				window.clearTimeout(id);
		} else {
			return false;
		}
	}

	static interval(value, min, max) {
		return Math.min(Math.max(value, min), max);
	}

	static getURLParameter(name) {
		if(typeof location !== 'undefined') {
  			return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
  		} else {
  			return false;
  		}
	}

}