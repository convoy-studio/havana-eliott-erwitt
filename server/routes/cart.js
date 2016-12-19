import controller from '../controllers/cart';

export default [
    { method: 'POST', path: '/{language}/cart/sendmail', config: controller.sendmail }
];