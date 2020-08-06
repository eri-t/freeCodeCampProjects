function telephoneCheck(str) {
  let regEx=/^1{0,1}\s{0,1}([(]\d{3}[)]|\d{3})(\s|-){0,1}\d{3}(\s|-){0,1}\d{4}$/;
  let result=regEx.test(str);
  console.log(result);
  return result;
}

telephoneCheck("555-555-5555");