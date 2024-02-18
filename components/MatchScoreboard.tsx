

// React component for displaying a tennis match scoreboard
import React from 'react';
//import './MatchComponent.css'; // Import your CSS file

// Define TypeScript types for the props
type PlayerScore = {
    name: string;
    country: string;
    score: string[];
    isWinner: boolean;
  };
  
  type MatchProps = {
    teamA: PlayerScore;
    teamB: PlayerScore;
  };
  

        

  const Player: React.FC<PlayerScore> = ({ name, country, score, isWinner }) => (
    <div className={`player flex justify-between items-center my-2 p-3 rounded-lg ${isWinner ? 'bg-green-100' : 'bg-gray-100'}`}>
    <span className="player-name font-semibold">{name} ({country})</span>
    <div className="flex space-x-2">
    {score.map((set, index) => (
                <span key={index} className="score font-bold">{set}</span>
            ))}
        </div>
    </div>
);
  
const MatchScoreboard: React.FC<MatchProps> = ({ teamA, teamB }) => (
    <div className="match-table max-w-md mx-auto shadow-lg p-4 rounded-xl bg-white">
        <Player {...teamA} />
        <Player {...teamB} />
    </div>
);
export default MatchScoreboard;

