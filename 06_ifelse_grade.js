function voteEligibility(age) {
  if (age <= 0 || age >= 120 || age == undefined || age == null) {
    console.log(`Enter your age:(${age}),You are entered "invalid data".`);
  } else {
    if (age < 18) {
      console.log(`Enter your age:(${age}),You are "not eligible" for vote.`);
    } else {
      console.log(`Enter your age:(${age}),You are "eligible" for vote.`);
    }
  }
  console.log(
    `-------------------------------------------------------------------------`
  );
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);
