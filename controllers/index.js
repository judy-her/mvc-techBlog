const crypto = require('crypto');
const secretCrypto = crypto.randomBytes(12).toString('hex');
console.log('The crypto code is:', secretCrypto);
