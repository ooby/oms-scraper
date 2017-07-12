const { csvFormat } = require('d3-dsv');
const Nightmare = require('nightmare');

exports.scrape = async (d) => {
    const nightmare = new Nightmare();
    return await nightmare
        .goto(d.url)
        .type('#TheFam', d.surname)
        .type('#TheIm', d.name)
        .type('#TheOt', d.patronymic)
        .type('#TheDr', d.birthDate)
        .click('#Button1')
        .wait('#GridView')
        .evaluate(async () => {
            let text = document
                .querySelector('#GridView')
                .textContent
                .replace(/\n/g, '')
                .replace(/\t/g, '')
                .split(/\s+/);
            let prenum = text.indexOf('номер');
            let prep = text.indexOf('к');
            let postp = text.indexOf('Предсавитель');
            let mu = '';
            await text.forEach(el => {
                if (text.indexOf(el) > prep && text.indexOf(el) < postp) {
                    mu += el + ' ';
                }
            }, this);
            let result = { polis: parseInt(text[prenum + 2]), clinic: mu };
            return result;
        })
        .end();
};