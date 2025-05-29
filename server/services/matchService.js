const axios = require("axios");

// Using Football-Data.org API (free tier)
const API_BASE_URL = "https://api.football-data.org/v4";
const API_TOKEN = "585f237834df4fa29cf2cfb707caed9d";

const mockMatches = [
  {
    id: 1,
    homeTeam: { name: "Manchester United", crest: "🔴" },
    awayTeam: { name: "Liverpool", crest: "🔴" },
    utcDate: "2025-06-01T15:00:00Z",
    competition: { name: "Premier League" },
    status: "SCHEDULED",
  },
  {
    id: 2,
    homeTeam: { name: "Barcelona", crest: "🔵" },
    awayTeam: { name: "Real Madrid", crest: "⚪" },
    utcDate: "2025-06-02T19:30:00Z",
    competition: { name: "La Liga" },
    status: "SCHEDULED",
  },
  {
    id: 3,
    homeTeam: { name: "Bayern Munich", crest: "🔴" },
    awayTeam: { name: "Borussia Dortmund", crest: "🟡" },
    utcDate: "2025-06-03T17:00:00Z",
    competition: { name: "Bundesliga" },
    status: "SCHEDULED",
  },
  {
    id: 4,
    homeTeam: { name: "PSG", crest: "🔵" },
    awayTeam: { name: "Marseille", crest: "⚪" },
    utcDate: "2025-06-04T20:00:00Z",
    competition: { name: "Ligue 1" },
    status: "SCHEDULED",
  },
  {
    id: 5,
    homeTeam: { name: "Juventus", crest: "⚫" },
    awayTeam: { name: "AC Milan", crest: "🔴" },
    utcDate: "2025-06-05T18:00:00Z",
    competition: { name: "Serie A" },
    status: "SCHEDULED",
  },
  {
    id: 6,
    homeTeam: { name: "Chelsea", crest: "🔵" },
    awayTeam: { name: "Arsenal", crest: "🔴" },
    utcDate: "2025-06-06T16:30:00Z",
    competition: { name: "Premier League" },
    status: "SCHEDULED",
  },
  {
    id: 7,
    homeTeam: { name: "Atletico Madrid", crest: "🔴" },
    awayTeam: { name: "Valencia", crest: "🟠" },
    utcDate: "2025-06-07T21:00:00Z",
    competition: { name: "La Liga" },
    status: "SCHEDULED",
  },
  {
    id: 8,
    homeTeam: { name: "Inter Milan", crest: "🔵" },
    awayTeam: { name: "Napoli", crest: "🔵" },
    utcDate: "2025-06-08T19:45:00Z",
    competition: { name: "Serie A" },
    status: "SCHEDULED",
  },
];

// const fetchUpcomingMatches = async (page = 1, limit = 10, league = null) => {
//   try {
    

//     // Using mock data for demonstration
//     const startIndex = (page - 1) * limit;
//     const endIndex = startIndex + parseInt(limit);
//     const paginatedMatches = mockMatches.slice(startIndex, endIndex);

//     return {
//       matches: paginatedMatches,
//       hasMore: endIndex < mockMatches.length,
//       total: mockMatches.length,
//     };
//   } catch (error) {
//     console.error("Error fetching matches from API:", error);
//     throw new Error("Failed to fetch matches from external API");
//   }
// };

// const fetchMatchById = async (id) => {
//   try {
//     // In a real implementation:
//     // const response = await axios.get(`${API_BASE_URL}/matches/${id}`, {
//     //   headers: { 'X-Auth-Token': API_TOKEN }
//     // });

//     // Using mock data
//     const match = mockMatches.find((m) => m.id === parseInt(id));
//     return match;
//   } catch (error) {
//     console.error("Error fetching match details:", error);
//     throw new Error("Failed to fetch match details");
//   }
// };

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
