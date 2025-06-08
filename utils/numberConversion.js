export function banglaToEnglishNumber(banglaNumStr) {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let englishNumStr = "";
  for (let char of banglaNumStr) {
    const index = banglaDigits.indexOf(char);
    if (index !== -1) {
      englishNumStr += englishDigits[index];
    } else {
      englishNumStr += char; // যদি ইংরেজি বা অন্য কিছু থাকে তাহলে সেটাও রাখবে
    }
  }
  return englishNumStr;
}

export function EnglishNumberToBangla(engNum) {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let banglaNumStr = "";
  for (let char of engNum) {
    const index = englishDigits.indexOf(char);
    if (index !== -1) {
      banglaNumStr += banglaDigits[index];
    } else {
      banglaNumStr += char; // যদি ইংরেজি বা অন্য কিছু থাকে তাহলে সেটাও রাখবে
    }
  }
  return banglaNumStr;
}

//   // Usage
//   const banglaNumber = "১২৩৪৫";
//   const englishNumberStr = banglaToEnglishNumber(banglaNumber);
//   const number = Number(englishNumberStr);
//   console.log(number + 10); // আউটপুট: 12355
