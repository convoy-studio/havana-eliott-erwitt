import locales from '../locales';
import AppStore from '../stores/appStore';

/**
 * @param {String} message - a translatable message in the locales file
 * @param {String} language - ISO-639-1 language code; defaults to AppStore.Lang()
 * @return {String}
 */
const translate = (message, language=null) => {
	let iso = language || AppStore.Lang();
	let translations = locales[iso] || {};
	let translation = translations[message] || null;

	if (!translation) {
		console.log(`missing translation: ${language}.${message}`);
		return '';
	}

	return translation;
};

export default {translate};

// vim: ts=2 sts=2 sw=2 noet
