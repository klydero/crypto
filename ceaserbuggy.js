var type = process.argv[2];
var message = process.argv[3];


var lengthOfText = plainText.length;
var indexOfA = alpha.indexOf('a');
var valueOfShift = shift[19];


function encrypt(plainText){
var cipherText = "";
//encryption happens here

var alpha = "abcdefghijklmnopqrstuvwxyz ";
var shift = "tuvwxyzabcdefghijklmnopqrs ";


for(var i = 0; i < plainText.length; i++){
var l = plainText[i];
// cipherText += 'a' + valueOfShift;
var alphaIdx = alpha.indexOf(l);
cipherText = shift[alphaIdx];

}

return cipherText;

}

function decrypt(cipherText){
var plainText;
//deciphering happens here

  return plainText;


}

if (type == "encrypt"){

console.log(encrypt(message));

} else {

console.log(decrypt(message));

}
