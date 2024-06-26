// Code your solution in this file!
function distanceFromHqInBlocks(pickupBlock) {
    //returns the number of blocks given a value
    const distBlocks = Math.abs(pickupBlock - 42)
    return distBlocks;
  }

  function distanceFromHqInFeet(pickupBlock) {
    let distHQFeet = distanceFromHqInBlocks(pickupBlock) * 264;
    return distHQFeet;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let distFeet = Math.abs(start - destination) * 264
    return distFeet;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    }   else if (distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    }   else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }   else {
        return "cannot travel that far";
  }
}