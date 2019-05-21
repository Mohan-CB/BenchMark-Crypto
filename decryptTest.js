var CryptoJS = require('crypto-js');

var key = 'Ac5vH0DP/TGPfbVfDk0y2U1dGQmzhTVXjj6+n1Ioa5c='
var encrypted = 'vL1pcXxrEttbGlJLCNMgS/3DfjdyflOKzP1Vvk1gY8xqGrwVieALvwFxnpvcL9WNh7pF0ndkUUDpS1JXcTK9EPAdL1tn70N9rfhAGKI8nPE=';
var iv = 'AGAQAvKa++ilEvsYCw8eNQ==';

key = CryptoJS.enc.Base64.parse(key);
iv  = CryptoJS.enc.Base64.parse(iv);

var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
  iv: iv
})

console.log(decrypted);
console.log(decrypted.toString(CryptoJS.enc.Utf8));


key = 'Ac5vH0DP/TGPfbVfDk0y2U1dGQmzhTVXjj6+n1Ioa5c=';
iv = 'cmVjcnVpdGVyQGNiLmNvbQ==';
encrypted = '3871u9FrabeDT/Gk3qsCXS1tP0qSYERRHy5SE+04VljGHLKqkuf5LApKTrSWpAyeZKr8CZjVE7dJ90QlI5pqY31f+rXs+R/4pf4+Gj4t+e8=';


key = CryptoJS.enc.Base64.parse(key);
iv  = CryptoJS.enc.Base64.parse(iv);

decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
  iv: iv
})

console.log(decrypted);
console.log(decrypted.toString(CryptoJS.enc.Utf8));
