async function login(username, password) {
    return new Promise((res, rej) => {
        if(username.toLowerCase() == 'peter'&& password == '123'){
            res({
                _id: '29vhjvhjv1515',
                username: 'Peter',
                roles: ['user']
            });
        } else {
            rej(new Error('Incorrect username or password'));
        }
    });
}

module.exports = {
    login
};
