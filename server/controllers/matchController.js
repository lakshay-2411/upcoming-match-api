const matchService = require("../services/matchService");

const getUpcomingMatches = async (req, res) => {
  try {
    const { page = 1, limit = 10, league } = req.query;
    const matches = await matchService.fetchUpcomingMatches(
      page,
      limit,
      league
    );

    res.json({
      success: true,
      data: matches,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
      },
    });
  } catch (error) {
    console.error("Error fetching matches:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch matches",
      error: error.message,
    });
  }
};

const getMatchDetails = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log("Fetching match details for ID:", id);
    
    const match = await matchService.fetchMatchById(id);

    if (!match) {
      return res.status(404).json({
        success: false,
        message: "Match not found",
      });
    }

    res.json({
      success: true,
      data: match,
    });
  } catch (error) {
    console.error("Error fetching match details:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch match details",
      error: error.message,
    });
  }
};

module.exports = {
  getUpcomingMatches,
  getMatchDetails,
};
