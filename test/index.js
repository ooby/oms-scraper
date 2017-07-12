process.env.NODE_ENV = 'test';

const expect = require('chai').expect;

let app = require('../index.js');

describe('OMS Form filling:', () => {
    it('fill in the test data', () => {
        let url = 'http://oms.sakhanet.ru:81/webpoisk/';
        let formData = {
            surname: 'Аргунов',
            name: 'Афанасий',
            patronymic: 'Александрович',
            birthDate: '07.03.1984'
        };
        return app(url, formData)
            .then(res => {
                console.log(res);
                return expect(res).to.have.property('polis');
            });
    });
    it('not enough data error handling', () => {
        let reject = {
            name: 'parameters error',
            message: 'not enough parameters data'
        };
        let url = 'http://oms.sakhanet.ru:81/webpoisk/';
        let formData = {
            surname: 'Аргунов',
            patronymic: 'Александрович',
            birthDate: '07.03.1984'
        };
        return app(url, formData)
            .then(() => { }, (e) => { return expect(e).deep.equal(reject); });
    });
});