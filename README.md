## Скрейпинг библиотека для [iframe формы ТФОМС РС(Я)](http://oms.sakhanet.ru:81/webpoisk/)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

### Как использовать

1. Установить с помощью `npm`
```bash
npm install oms-scraper
```
2. Подключить модуль и вызвать метод
```javascript
const app = require('oms-scraper');
const url = 'http://oms.sakhanet.ru:81/webpoisk/';
const formData = {
    surname: 'Фамилия',
    name: 'Имя',
    patronymic: 'Отчество',
    birthDate: '18.08.1991' // Дата рождения
};
app(url, formData)
    .then(r => { console.log(r); })
    .catch(e => { console.error(e); });
```
3. ???????
4. PROFIT