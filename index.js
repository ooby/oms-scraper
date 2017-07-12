const { scrape } = require('./lib/form');
const { createError } = require('./lib/error');

module.exports = (URL, data) => {
    if (!URL || !data.surname || !data.name || !data.patronymic || !data.birthDate) {
        return createError('parameters error', 'not enough parameters data');
    } else {
        let formData = {
            url: URL,
            surname: data.surname,
            name: data.name,
            patronymic: data.patronymic,
            birthDate: data.birthDate
        };
        return scrape(formData);
    }
};