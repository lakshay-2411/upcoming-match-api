const axios = require("axios");

// Using Football-Data.org API (free tier)
const API_BASE_URL = "https://api.football-data.org/v4";
const API_TOKEN = "585f237834df4fa29cf2cfb707caed9d";

const fetchUpcomingMatches = async (page = 1, limit = 10, leagueCode = null) => {
  try {
    const offset = (page - 1) * limit;

    const response = await axios.get(`${API_BASE_URL}/matches`, {
      headers: { 'X-Auth-Token': API_TOKEN },
      params: {
        limit,
        offset,
        ...(leagueCode && { competitions: leagueCode }), // e.g., PL for Premier League
      },
    });

    const matches = response.data.matches.map((match) => ({
      id: match.id,
      homeTeam: { name: match.homeTeam.name },
      awayTeam: { name: match.awayTeam.name },
      utcDate: match.utcDate,
      competition: { name: match.competition.name },
      status: match.status,
    }));

    return {
      matches,
      hasMore: offset + limit < response.data.resultSet.count,
      total: response.data.resultSet.count,
    };
  } catch (error) {
    console.error("Error fetching matches from API:", error.response?.data || error.message);
    throw new Error("Failed to fetch matches from external API");
  }
};

const fetchMatchById = async (id) => {
  try {
    // console.log("Fetching match details for ID:", id);
    
    const response = await axios.get(`${API_BASE_URL}/matches/${id}`, {
      headers: { 'X-Auth-Token': API_TOKEN },
    });

    const match = response.data;
    // console.log("Match details fetched:", match);
    // console.log("Match details:", {
    //   id: match.id,
    //   homeTeam: match.homeTeam.name,
    //   awayTeam: match.awayTeam.name,
    //   utcDate: match.utcDate,
    //   competition: match.competition.name,
    //   status: match.status,
    // });
    return {
      id: match.id,
      homeTeam: { name: match.homeTeam.name },
      awayTeam: { name: match.awayTeam.name },
      utcDate: match.utcDate,
      competition: { name: match.competition.name },
      status: match.status,
    };
  } catch (error) {
    console.error("Error fetching match details:", error.response?.data || error.message);
    throw new Error("Failed to fetch match details");
  }
};

module.exports = {
  fetchUpcomingMatches,
  fetchMatchById,
};
