var CryptoJS = require('crypto-js');

var key512key = 'B?E(H+MbQeThVmYq3t6w9z$C&F)J@NcRfUjXnZr4u7x!A%D*G-KaPdSgVkYp3s5v';
var key256key = 'J@NcRfUjWnZr4u7x!A%D*G-KaPdSgVkY';
var key1024key='cRfUjXn2r5u8x!A%D*G-KaPdSgVkYp3s6v9y$B?E(H+MbQeThWmZq4t7w!z%C*F)J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkYp3s6v9y$B&E)H@McQeThWmZq4t7w!z%C';


var message = 'hello';

var encrypted256 = CryptoJS.AES.encrypt(message, key256key);
console.log(encrypted256.toString());
var encrypted512 = CryptoJS.AES.encrypt(message, key512key);
console.log(encrypted512.toString());
var encrypted1024 = CryptoJS.AES.encrypt(message, key1024key);
console.log(encrypted1024.toString());


var decrypted256 = CryptoJS.AES.decrypt(encrypted256, key256key);
console.log(decrypted256.toString(CryptoJS.enc.Utf8));
var decrypted512 = CryptoJS.AES.decrypt(encrypted512, key512key);
console.log(decrypted512.toString(CryptoJS.enc.Utf8));
var decrypted1024 = CryptoJS.AES.decrypt(encrypted1024, key1024key);
console.log(decrypted1024.toString(CryptoJS.enc.Utf8));
