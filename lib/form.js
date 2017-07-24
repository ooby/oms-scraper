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
        .evaluate(() => {
            let text = document
                .querySelector('#GridView')
                .textContent
                .replace(/\n/g, '')
                .replace(/\t/g, '')
                .split(/\s+/);
            let prenum = text.indexOf('номер');
            let prep = text.indexOf('к');
            let postp = text.indexOf('Представитель');
            let mu = '';
            text.forEach((el, i) => {
                if (i > prep && i < postp) {
                    mu += el + ' ';
                }
            });
            return { polis: parseInt(text[prenum + 2]), clinic: mu.trim() };
        })
        .end();
};