const express = require('express');
const { getUpcomingMatches, getMatchDetails } = require('../controllers/matchController');

const router = express.Router();

// Get upcoming matches with pagination
router.get('/', getUpcomingMatches);

// Get specific match details
router.get('/:id', getMatchDetails);

module.exports = router;