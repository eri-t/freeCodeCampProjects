function rot13(str) {

let str2='';
for(let i=0; i<str.length; i++){
  switch (str.charAt(i)) {
    case 'A':
      str2+='N';
    break;
    case 'B':
      str2+='O';
    break;
    case 'C':
      str2+='P';
    break;
    case 'D':
      str2+='Q';
    break;
    case 'E':
      str2+='R';
    break;
    case 'F':
      str2+='S';
    break;
    case 'G':
      str2+='T';
    break;
    case 'H':
      str2+='U';
    break;
    case 'I':
      str2+='V';
    break;
    case 'J':
      str2+='W';
    break;
    case 'K':
      str2+='X';
    break;
    case 'L':
      str2+='Y';
    break;
    case 'M':
      str2+='Z';
    break;
    case 'N':
      str2+='A';
    break;
    case 'O':
      str2+='B';
    break;
    case 'P':
      str2+='C';
    break;
    case 'Q':
      str2+='D';
    break;
    case 'R':
      str2+='E';
    break;
    case 'S':
      str2+='F';
    break;
    case 'T':
      str2+='G';
    break;
    case 'U':
      str2+='H';
    break;
    case 'V':
      str2+='I';
    break;
    case 'W':
      str2+='J';
    break;
    case 'X':
      str2+='K';
    break;
    case 'Y':
      str2+='L';
    break;
    case 'Z':
      str2+='M';
    break;
    default:
      str2+= str.charAt(i);
  }
}

console.log(str2);
  return str2;
}

rot13("SERR PBQR PNZC");