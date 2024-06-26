//function addCommas() {}

//module.exports = addCommas;

function addCommas(number) {
    // Convert number to string
    let numberString = String(number);

    // Split the integer and decimal parts (if any)
    const parts = numberString.split('.');
    let integerPart = parts[0];
    let decimalPart = parts[1] || '';

    // Add commas to the integer part
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Join integer and decimal parts with a dot (if any)
    return decimalPart ? integerPart + '.' + decimalPart : integerPart;
}

module.exports = { addCommas };

// Test cases
console.log(addCommas(1234));        // Output: "1,234"
console.log(addCommas(1000000));     // Output: "1,000,000"
console.log(addCommas(9876543210));  // Output: "9,876,543,210"
console.log(addCommas(6));           // Output: "6"
console.log(addCommas(-10));         // Output: "-10"
console.log(addCommas(-5678));       // Output: "-5,678"
console.log(addCommas(12345.678));   // Output: "12,345.678"
console.log(addCommas(-3141592.65)); // Output: "-3,141,592.65"
