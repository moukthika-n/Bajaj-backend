// utils/helpers.js
function processData(data) {
    let numbers = [];
    let alphabets = [];
    let highestLowercase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (item === item.toLowerCase() && item > highestLowercase) {
                highestLowercase = item;
            }
        }
    });

    return {
        numbers,
        alphabets,
        highestLowercase: highestLowercase ? [highestLowercase] : []
    };
}

function generateUserId(fullName, dob) {
    const formattedDob = dob.split('-').reverse().join('');
    const userId = `${fullName.replace(' ', '_').toLowerCase()}_${formattedDob}`;
    return userId;
}

module.exports = { processData, generateUserId };
