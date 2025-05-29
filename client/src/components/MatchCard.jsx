import React from 'react';

const MatchCard = ({ match, onViewDetails }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'SCHEDULED':
        return 'bg-green-100 text-green-800';
      case 'LIVE':
        return 'bg-red-100 text-red-800';
      case 'FINISHED':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(match.status)}`}>
            {match.status}
          </span>
          <span className="text-sm text-gray-500 font-medium">
            {match.competition?.name || 'Football League'}
          </span>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-gray-800">
            {formatDate(match.utcDate)}
          </div>
          <div className="text-sm text-gray-600">
            {formatTime(match.utcDate)}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-8">
        {/* Home Team */}
        <div className="flex-1 text-center">
          <div className="mb-2">
            <span className="text-4xl">
              {match.homeTeam.crest || '⚽'}
            </span>
          </div>
          <h3 className="font-bold text-lg text-gray-800 mb-1">
            {match.homeTeam.name}
          </h3>
          <p className="text-sm text-gray-600">Home</p>
        </div>

        {/* VS Divider */}
        <div className="flex flex-col items-center space-y-2">
          <div className="bg-indigo-500 text-white px-4 py-2 rounded-full font-bold text-sm">
            VS
          </div>
          <div className="text-xs text-gray-500 font-medium">
            {formatTime(match.utcDate)}
          </div>
        </div>

        {/* Away Team */}
        <div className="flex-1 text-center">
          <div className="mb-2">
            <span className="text-4xl">
              {match.awayTeam.crest || '⚽'}
            </span>
          </div>
          <h3 className="font-bold text-lg text-gray-800 mb-1">
            {match.awayTeam.name}
          </h3>
          <p className="text-sm text-gray-600">Away</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Stadium TBD</span>
          </div>
          <button 
          onClick={() => onViewDetails(match.id)}
          className="text-indigo-500 hover:text-indigo-700 text-sm font-medium flex items-center space-x-1 transition-colors">
            <span>View Details</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;