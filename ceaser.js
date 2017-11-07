var type = process.argv[2];
var message = process.argv[3];
var key = Number(process.argv[4]);


// var lengthOfText = plainText.length;
// var indexOfA = alpha.indexOf('a');
// var valueOfShift = shift[4];


function encrypt(plainText, key){
var cipherText = "";
//encryption happens here

var alpha = "abcdefghijklmnopqrstuvwxyz ";



for(var i=0; i<plainText.length; i++){
  var cipherIndex = alpha.indexOf(plainText[i]);
  cipherText += alpha[ (cipherIndex+key)%alpha.length ];
}

return cipherText;

}

function decrypt(cipherText, key){
var plainText = "";
//deciphering happens here

var alpha = "abcdefghijklmnopqrstuvwxyz ";


function decrypt( cipherText, key ){
  var plainText = '';
  var alpha = "abcdefghijklmnopqrstuvwxyz ";

  for (var i=0; i < cipherText.length; i++) {
    var alphaIndex = alpha.indexOf( cipherText[i] );
	plainText += alpha[ Math.abs((alphaIndex-key)%alpha.length)];
  }

  return plainText;


}
}

if (type == "encrypt"){

console.log(encrypt(message));

} else {

console.log(decrypt(message));

}
