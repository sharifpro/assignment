



// kilometerTometer

function kilometerToMeter(kilo){
    if(kilo < 0){
           return ("your number is invalid.")
    }
     var meter = kilo * 1000;
     return meter;
 }
 var result = kilometerToMeter(4); 
 console.log(result);

 
 //budgetCalculator

 function budgetCalculator(watch, mobile, laptop){
           
    if(watch ,mobile ,laptop < 0){
          return ('Your digit is wrong.Please Input valid digit.');
      }
 
     else{
     var watchCost = watch * 50;
     var mobileCost = mobile * 100;
     var laptopCost = laptop * 500;
     var cost = watchCost + mobileCost + laptopCost;
   
      }
       
       return cost;
   }
 
var result = budgetCalculator(2,3,4); 
console.log(result);

//Hotelcost 

function hotelCost(night){
    var nightStay = 0;
    

    if (night < 0){
        return ('Your Digit is Error');
    }
    else if (night <= 10){
        nightStay = night * 100;
    }
    else if(night <= 20){
        var firstTen = 10 * 100;
        var remainNight = night - 10;
        var secondTen = remainNight * 80;
        nightStay = firstTen + secondTen;
    }
    else {
        var firstTen = 10 * 100;
        var secondTen = 10 * 80;
        var remainNight = night -20;
        var thirdStep = remainNight * 50;
        nightStay = firstTen + secondTen + thirdStep;
    }
    return nightStay;
}
var result = hotelCost(23);
console.log(result)



// megaFriend
var array = ["sobuj", "kawser", "olok", "polok", "shariful","Abdullahtofiq"];

function megaFriend(arr){
    var nameMax = arr[0];
    for(i= 0; i<arr.length; i++){
        if(arr[i].length > nameMax.length){
            nameMax = arr[i];
        }
    }
    return nameMax;
}
var result = megaFriend(array);
console.log(result);
