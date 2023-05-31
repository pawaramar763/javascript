console.log(
  `=============================Vehicle Details=======================================`
);
class Vehicle {
  constructor(name, colur, engine, price, fuelType) {
    this.name = name;
    this.colur = colur;
    this.engine = engine;
    this.price = price;
    this.fuelType = fuelType;
  }
}
const suzuki = new Vehicle("SUZUKI Brezza", "Red", "1462 cc", 829000, "CNG");
const tata = new Vehicle("TATA Nexon", "Blue", "1497 cc", 1355500, "Petrol");
const kia = new Vehicle("KIA Seltos", "Black", "1493 cc", 1140000, "CNG");
const renault = new Vehicle(
  "RENAULT Duster",
  "Orange",
  "1499 cc",
  1000000,
  "Petrol"
);
const jeep = new Vehicle("Jeep Wrangler", "Grey", "1995 cc", 6300000, "Petrol");
const arrayOfVehicle = [suzuki, tata, kia, renault, jeep];
for (const vehicle of arrayOfVehicle) {
  console.log(
    `Vehicle Details: ${vehicle.name},${vehicle.colur},${vehicle.engine},${vehicle.price},${vehicle.fuelType}`
  );
}

console.log(
  `============================College Details========================================`
);
class College {
  constructor(name, type, city, university) {
    this.name = name;
    this.type = type;
    this.city = city;
    this.university = university;
  }
}
const bharatiUniversity = new College(
  "Bharati College of Medical ",
  "Medical",
  "Pune",
  "Bharati University"
);
const modernCollege = new College(
  "Modern College",
  "Management",
  "Pune",
  "Pune University"
);
const jjCollege = new College(
  "J J Magdum College",
  "Engineering",
  "Kolhapur",
  "Kolhapur University"
);
const sgu = new College(
  "Sanjay Godawat college",
  "Engineering",
  "Kolhapur",
  "Godawat University"
);

function traverseObject(collegeObject) {
  for (const key in collegeObject) {
    if (Object.hasOwnProperty.call(collegeObject, key)) {
      const element = collegeObject[key];
      console.log(`${key}-${element}`);
    }
  }
}
traverseObject(bharatiUniversity);
console.log(
  `-----------------------------------------------------------------------------------------------------------`
);
traverseObject(modernCollege);
console.log(
  `-----------------------------------------------------------------------------------------------------------`
);
traverseObject(jjCollege);
console.log(
  `-----------------------------------------------------------------------------------------------------------`
);
traverseObject(sgu);
console.log(
  `-----------------------------------------------------------------------------------------------------------`
);
