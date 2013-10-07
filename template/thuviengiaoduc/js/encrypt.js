var encrypt = {
registerAuthen : function(PathUrlEncrypt){
	var hashObj = new jsSHA("mySuperPassword", "ASCII");
        var password = hashObj.getHash("SHA-512", "HEX");
        
        //$.jCryption.authenticate(password, PathUrlEncrypt + "encrypt.php?generateKeypair=true", PathUrlEncrypt + "encrypt.php?handshake=true", function(AESKey) {
        $.jCryption.authenticate(password, PathUrlEncrypt + "jcryp.php?generateKeypair", PathUrlEncrypt + "jcryp.php?handshake", function(AESKey) {
            }, function() {
                // Authentication failed
        });
return password;
},    
string : function(String,PassAuthen)
    {
        
        return encryptedString = $.jCryption.encrypt(String, PassAuthen);        
    }
}