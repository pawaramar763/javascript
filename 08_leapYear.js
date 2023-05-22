let chekLeapYear = function (leapYear) {
  if (leapYear == undefined || isNaN(leapYear) || leapYear == null) {
    console.log(`${leapYear} - Invalid data, Please enter valid year!`);
  } else {
    if (leapYear % 400 == 0 && leapYear % 100 == 0) {
      console.log(`${leapYear} - is a Leap year`);
    } else {
      if (leapYear % 4 == 0 && leapYear % 100 != 0) {
        console.log(`${leapYear} - is a Leap year`);
      } else {
        console.log(`${leapYear} - is not a Leap year`);
      }
    }
  }
};
chekLeapYear(2020);
chekLeapYear(1999);
chekLeapYear(1600);
chekLeapYear(2022);
chekLeapYear(1945);
chekLeapYear(null);
chekLeapYear("Twenty Twenty");
chekLeapYear(undefined);
chekLeapYear(NaN);
chekLeapYear(1750);
