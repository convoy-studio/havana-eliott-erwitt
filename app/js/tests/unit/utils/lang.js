import lang from '../../../utils/lang';
import { empty } from '../../../utils/lang';
console.log(lang);

describe('utils.lang', () => {

  describe('.empty()', () => {

    const TestClass = function() {};
    TestClass.prototype = {constructor: TestClass, foo: 1};

    it('false is empty', () => expect(empty(false)).to.equal(true));
    it('null is empty', () => expect(empty(null)).to.equal(true));
    it('undefined is empty', () => expect(empty(undefined)).to.equal(true));
    it('zero-length string is empty', () => expect(empty('')).to.equal(true));
    it('integer zero is empty', () => expect(empty(0)).to.equal(true));
    it('true is not empty', () => expect(empty(true).to.equal(false)));
    it('non-empty string is not empty', () => expect(empty(' ').to.equal(false)));
    it('integer other than zero is not empty', () => expect(empty(1).to.equal(false)));
    it('zero-length array is empty', () => expect(empty([]).to.equal(true)));
    it('non-zero length array is not empty', () => expect(empty([0]).to.equal(true)));
    it('NaN is not empty', () => expect(empty(NaN)).to.equal(false));

    it('object that owns no properties is empty', () => {
      let obj = new TestClass();
      expect(empty(obj).to.equal(true));
    });

    it('object that owns at least one property is not empty', () => {
      let obj = new TestClass();
      obj.bar = 2;
      expect(empty(obj)).to.equal(false);
    });

  });

});
