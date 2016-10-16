import controller from '../controllers/checkout';
const {prepare} = controller;

export default [
	{ method: 'POST', path: '/{language}/checkout/prepare', config: prepare}
];