import React from 'react';

const MatchDetailsModal = ({ match, onClose }) => {
  if (!match) return null;

  const formatDate = (dateString) => new Date(dateString).toLocaleString('en-US');

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">{match.competition?.name}</h2>

        <div className="text-center space-y-2">
          <div className="text-3xl font-semibold">{match.homeTeam.name} {match.homeTeam.crest} vs {match.awayTeam.crest} {match.awayTeam.name}</div>
          <div className="text-sm text-gray-600">{formatDate(match.utcDate)}</div>
          <div className="text-sm text-gray-600">Status: <strong>{match.status}</strong></div>
          <div className="text-sm text-gray-600">Stadium: TBD</div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetailsModal;
