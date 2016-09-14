import controller from '../controllers/checkout';
const {prepare} = controller;

export default [
	{ method: 'POST', path: '/{language}/checkout/prepare', config: prepare},
];

// vim: ts=2 sts=2 sw=2 noet
