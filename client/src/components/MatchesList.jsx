import React, { useState, useEffect, useCallback } from "react";
import MatchCard from "./MatchCard";
import LoadingSpinner from "./LoadingSpinner";
import { fetchMatches, fetchMatchById } from "../services/api";

const MatchesList = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [matchDetails, setMatchDetails] = useState({});

  const loadMatches = useCallback(
    async (pageNum, reset = false) => {
      if (loading) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetchMatches(pageNum);

        if (response.success) {
          const newMatches = response.data.matches;

          if (reset) {
            setMatches(newMatches);
          } else {
            setMatches((prev) => [...prev, ...newMatches]);
          }

          setHasMore(response.data.hasMore);
        } else {
          setError("Failed to load matches");
        }
      } catch (err) {
        setError("Network error. Please try again.");
        console.error("Error loading matches:", err);
      } finally {
        setLoading(false);
      }
    },
    [loading]
  );

  useEffect(() => {
    loadMatches(1, true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 1000 &&
        hasMore &&
        !loading
      ) {
        setPage((prev) => {
          const nextPage = prev + 1;
          loadMatches(nextPage);
          return nextPage;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading, loadMatches]);

  const handleRefresh = () => {
    setPage(1);
    setMatches([]);
    setHasMore(true);
    loadMatches(1, true);
  };

  if (error && matches.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <div className="text-red-500 mb-4">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={handleRefresh}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Upcoming Matches
          </h2>
          <p className="text-gray-600">
            {matches.length} match{matches.length !== 1 ? "es" : ""} found
          </p>
        </div>
        <button
          onClick={handleRefresh}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors flex items-center space-x-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>Refresh</span>
        </button>
      </div>

      {matches.length === 0 && !loading ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Matches Found
          </h3>
          <p className="text-gray-500">
            There are no upcoming matches at the moment.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {matches.map((match, index) => (
            <MatchCard
              key={`${match.id}-${index}`}
              match={match}
              onViewDetails={async (matchId) => {
                if (!matchDetails[matchId]) {
                  try {
                    const res = await fetchMatchById(matchId);
                    if (res.success) {
                      setMatchDetails((prev) => ({
                        ...prev,
                        [matchId]: res.data,
                      }));
                    }
                  } catch (err) {
                    console.error(
                      `Failed to fetch details for match ${matchId}:`,
                      err
                    );
                  }
                }
              }}
              detailedMatch={matchDetails[match.id]}
            />
          ))}
        </div>
      )}

      {loading && (
        <div className="flex justify-center py-8">
          <LoadingSpinner />
        </div>
      )}

      {!hasMore && matches.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 font-medium">
            🎉 You've reached the end! No more matches to load.
          </p>
        </div>
      )}
    </div>
  );
};

export default MatchesList;
