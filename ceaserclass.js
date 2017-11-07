var type = process.argv[2];
var message = process.argv[3];

function encrypt( plainText ){
  var cipherText = '';
  var alpha = "abcdefghijklmnopqrstuvwxyz ";
  var shift = "klmnopqrstuvwxyzabcdefghij ";

  for(var i=0; i<plainText.length; i++){
    var cipherIndex = alpha.indexOf( plainText[i] );
    cipherText += shift[ cipherIndex ];
  }

  return cipherText;
}



function decrypt( cipherText ){
  var plainText = '';
  var alpha = "abcdefghijklmnopqrstuvwxyz ";
  var shift = "klmnopqrstuvwxyzabcdefghij ";

  for (var i=0; i < cipherText.length; i++) {
    var alphaIndex = shift.indexOf( cipherText[i] );
    plainText += alpha[ alphaIndex ];
  }

  return plainText;
}
if( type == "encrypt" ){
  console.log( encrypt(message) );
} else {
  console.log( decrypt(message) );
}
