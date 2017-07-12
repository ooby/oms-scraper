exports.createError = (name, message) => {
    return new Promise((resolve, reject) => { return reject({ name: name, message: message }) });
};