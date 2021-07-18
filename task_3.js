function q3(originalArray) {
    //need to loop through the array, and check if the item at the index is prime
    //if it is prime, then store it somewhere (... inside the array that we will be returned finally)

    var returnedArray = []; // the array that we will be returned finally
    
    //loop through the array and see if the item is prime, using the function returnTrueIfNumberIsPrime() in this file...
    
    for(var i=0; i<originalArray.length; i++){
        //check if it's prime, if so, put it in the array to be returned
        if(returnTrueIfNumberIsPrime(originalArray[i])){
            //put it in the array...
            returnedArray.push(originalArray[i]);
        }
    }

    //returnedArray should now have all prime numbers in the originalArray ALONE
    console.log(returnedArray);

}

function returnTrueIfNumberIsPrime(num) {
    // Less than or equal to 1 are not prime
    if (num <= 1) return false;

    // 2 and 3 are prime, so no calculations
    if (num == 2 || num == 3) return true;

    // If mod with square root is zero then its not prime 
    if (num % Math.sqrt(num) == 0) return false;

    // Run loop till square root
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {

        // If mod is zero then its not prime
        if (num % i === 0) return false;
    }

    // Otherwise the number is prime
    return true;
}