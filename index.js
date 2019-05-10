var crypto_js256 = require('crypto-js/sha256');
var ncrypto = require('crypto');
var faker = require('faker');

size = process.argv[2] || 100;
console.log(`size ${size}`);
var sampleData = [];
for(i = 0; i < size; i++){
  sampleData.push(faker.internet.email());
}

start = Date.now();
for( email of sampleData){
 crypto_js256(email).toString();
}
end = Date.now() - start;
console.log(`[crypto-js] : ${end}`);

start = Date.now();
for( email of sampleData){
  ncrypto.createHash('sha256').update(email).digest('hex');

}
end = Date.now() - start;
console.log(`[native-crypto] : ${end}`);


const NapiCrypto = require('napi-crypto');

email = 'Mohan.Liu@careerbuilder.com';
console.log(ncrypto.createHash('sha256').update(email).digest('hex'));
console.log(crypto_js256(email).toString());
