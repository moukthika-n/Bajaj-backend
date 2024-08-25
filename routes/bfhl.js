// routes/bfhl.js
const express = require('express');
const { processData, generateUserId } = require('../utils/helpers');

const router = express.Router();

router.post('/bfhl', (req, res) => {
    const { data, fullName, dob, email, rollNumber } = req.body;

    if (!data || !fullName || !dob || !email || !rollNumber) {
        return res.status(400).json({
            is_success: false,
            message: 'Missing required fields'
        });
    }

    const { numbers, alphabets, highestLowercase } = processData(data);
    const userId = generateUserId(fullName, dob);

    res.status(200).json({
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase
    });
});

router.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

module.exports = router;
