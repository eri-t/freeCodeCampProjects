function palindrome(str) {
	let str2=str.toLowerCase();
	let regEx=/[^a-z|\d]/g;
	str2=str2.replace(regEx,'');

	let str3='';
	for(let i=(str.length-1); i>=0; i--){
	  str3+=str2.charAt(i);
	}
	console.log(str2);
	if(str2==str3){
		return true
	}else{
		return false;
	} 
}

palindrome("Eye");