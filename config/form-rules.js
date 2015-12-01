module.exports.login = {
  username: ['required', 'length|6|32'],
  password: ['required', 'length|8|32', 'contain|[a-z]|[A-Z]|[0-9]', 'notContainValue|username']
};