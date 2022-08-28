// PREP
// Parameters
// the function expects one parameter: a positive number, can be 0 or greater than 0


// Response
// return a string message 

// Examples
// test examples are 3 and 11


//Pseudo Code

function hoopCount (n) {
    if (n >= 10) {
        return 'Great, now move on to tricks'
    } else {
        return 'Keep at it until you get it'
    }
}


// refractor

const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks'