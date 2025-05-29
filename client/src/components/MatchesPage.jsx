import React from 'react';
import Header from './Header';
import MatchesList from './MatchesList';
import Footer from './Footer';

const MatchesPage = ({ onNavigateToLanding }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header onNavigateToLanding={onNavigateToLanding} />
      <main className="container mx-auto px-4 py-8">
        <MatchesList />
      </main>
      <Footer />
    </div>
  );
};

export default MatchesPage;