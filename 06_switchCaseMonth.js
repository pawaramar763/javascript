function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`Welcome to January: ${monthNumber}`);
      break;
    case 2:
      console.log(`Welcome to February: ${monthNumber}`);
      break;
    case 3:
      console.log(`Welcome to March: ${monthNumber}`);
      break;
    case 4:
      console.log(`Welcome to April: ${monthNumber}`);
      break;
    case 5:
      console.log(`Welcome to May: ${monthNumber}`);
      break;
    case 6:
      console.log(`Welcome to June: ${monthNumber}`);
      break;
    case 7:
      console.log(`Welcome to July: ${monthNumber}`);
      break;
    case 8:
      console.log(`Welcome to August: ${monthNumber}`);
      break;
    case 9:
      console.log(`Welcome to September: ${monthNumber}`);
      break;
    case 10:
      console.log(`Welcome to October: ${monthNumber}`);
      break;
    case 11:
      console.log(`Welcome to November: ${monthNumber}`);
      break;
    case 12:
      console.log(`Welcome to December: ${monthNumber}`);
      break;
    default:
      console.log(`Invalid data: ${monthNumber}`);
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
