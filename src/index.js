module.exports = function toReadable (number) {
  let result = "";
  if(number === 0) return "zero";
  let unit = number%10;
  number = number - unit;
  let dozen = number%100/10;
  number = number - number%100;
  let hundred = number%1000/100;
  result += parseNumberToHumanReadableString(hundred)!=="" ? parseNumberToHumanReadableString(hundred) + " hundred" : parseNumberToHumanReadableString(hundred);
  result += parseDozens(dozen, unit);
  return result.trim();
}

function parseNumberToHumanReadableString(number){
    switch (number){
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
        case 0: return "";
    }
}

function parseDozens(dozen, unit){
    switch(dozen){
        case 0: return " " + parseNumberToHumanReadableString(unit);
        case 1: return parseTens(unit);
        case 2: return " twenty " + parseNumberToHumanReadableString(unit);
        case 3: return " thirty " + parseNumberToHumanReadableString(unit);
        case 4: return " forty " + parseNumberToHumanReadableString(unit);
        case 5: return " fifty " + parseNumberToHumanReadableString(unit);
        case 8: return " eighty " + parseNumberToHumanReadableString(unit);
        default: return " "+parseNumberToHumanReadableString(dozen) + "ty " + parseNumberToHumanReadableString(unit);
    }

}

function parseTens(unit){
    switch(unit){
        case 0: return " ten";
        case 1: return " eleven";
        case 2: return " twelve";
        case 3: return " thirteen";
        case 5: return " fifteen";
        case 8: return " eighteen";
        default: return (" "+parseNumberToHumanReadableString(unit)+"teen");
    }
}